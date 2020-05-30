import {put, takeLeading} from 'redux-saga/effects';
import {AccreditationActions} from '../types/AccreditationActionTypes';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

import {GoogleSignin, statusCodes} from '@react-native-community/google-signin';

import {loginRequestSuccess, loginRequestErrored} from '../action/AuthActions';

interface IUser {
  displayName?: string;
  email?: string;
  emailVerified?: boolean;
  isAnonymous?: false;
  metadata?: object;
  phoneNumber?: number;
  photoURL?: string;
  providerData?: object;
  providerId?: string;
  uid?: string;
}

interface IUserMatch {
  id: string;
  name: string;
  status: number;
  missingStage: number;
  totalStage: 0;
  currentStage: [{id: 0; progress: 0; done: false}];
}

let objectUserSuccess: IUserMatch;
let objectUser: IUser;

export function* watchLoginRequest() {
  yield takeLeading(AccreditationActions.LOGIN_REQUEST, workerLoginRequest);
}

function* workerLoginRequest() {
  try {
    const {idToken} = yield GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    const ref = firestore().collection('users');
    yield auth().signInWithCredential(googleCredential);

    yield auth().onAuthStateChanged(function (user) {
      if (user) {
        objectUser = user;
        // Criar consulta aqui se ja existe o usuário
        firestore()
          .collection('users')
          .get()
          .then((querySnapshot) => {
            console.log('Total users: ', querySnapshot.size);

            querySnapshot.forEach((documentSnapshot) => {
              if (documentSnapshot.data().id === user.uid) {
                let data = documentSnapshot.data();
                objectUserSuccess = data;
                // return loginRequestSuccess({
                //   id: documentSnapshot.data().id,
                //   name: documentSnapshot.data().name,
                //   currentStage: documentSnapshot.data().currentStage,
                //   status: documentSnapshot.data().status,
                // });
              }
            });
          });
      }
    });

    if (objectUserSuccess !== null) {
      console.log('To dentro do if');
      console.log(objectUserSuccess);
      yield put(
        loginRequestSuccess({
          id: objectUserSuccess.id,
          name: objectUserSuccess.name,
          currentStage: objectUserSuccess.currentStage,
          status: objectUserSuccess.status,
        })
      );
    } else {
      console.log('to fora do if');
      console.log(objectUser);
      yield ref.add({
        id: objectUser.uid,
        name: objectUser.displayName,
        status: 0,
        currentStage: [
          {
            id: 0,
            progress: 6,
            done: false
          }
        ],
        created_at: firestore.FieldValue.serverTimestamp()
      });
      yield put(
        loginRequestSuccess({
          id: objectUser.uid,
          name: objectUser.displayName,
          currentStage: objectUser.currentStage,
          status: objectUser.status,
        })
      );
    }
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
      loginRequestErrored({error: error.code});
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // operation (e.g. sign in) is in progress already
      loginRequestErrored({error: error.code});
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
      loginRequestErrored({error: error.code});
    } else {
      // some other error happened
      loginRequestErrored({error: error.code});
    }
  }
}
