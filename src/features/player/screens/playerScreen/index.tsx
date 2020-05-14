import React, { useState, useEffect } from 'react';
import {
    Container, DivButton,
    DivMiddle, DivTop,
    DivImage, DivButtonModal
} from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Button, Markdown, Image, Modal } from "../../../../components";
import { headerComposer, Header } from '../../../../navigation/NavigationMixins';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../../../store/RootReducer';
import { setAnswer, setInitialAnswer, setProgress, getInfos } from "../../redux/action/playerActions";
import { BackHandler } from 'react-native';


const PlayerScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [visibleModal, setVisibleModal] = useState<boolean>(false);
    const [message, setMessage] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [messageButton, setMessageButton] = useState('');
    const route = useRoute();

    const idMenu = route.params.params.id;

    const [alternativesAnswer, setAlternativesAnswer] = useState([]);
    const [typesAnswer, setTypesAnswer] = useState('');

    const userName = useSelector(
        (appState: AppState) => appState.AccreditFeature.accreditReducer.name,
    );

    const types = useSelector(
        (appState: AppState) => appState.PlayerFeature.playerReducer.type,
    );

    const alternatives = useSelector(
        (appState: AppState) => appState.PlayerFeature.playerReducer.alternatives,
    );

    const answered = useSelector(
        (appState: AppState) => appState.PlayerFeature.playerReducer.answered,
    );

    const idStage = useSelector(
        (appState: AppState) => appState.PlayerFeature.playerReducer.id,
    );

    const currentProgress = useSelector(
        (appState: AppState) => appState.PlayerFeature.menuReducer.currentStage[idMenu].progress,
    )

    useEffect(() => {
        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            () => {
                navigation.goBack();
                return true;
            },
        );
        return () => {
            backHandler.remove();
        };
    }, [navigation]);

    useEffect(() => {
        dispatch(getInfos({ id: idMenu, progress: currentProgress }));
    }, [currentProgress])


    useEffect(() => {
        setAlternativesAnswer(alternatives);
        setTypesAnswer(types);
        if (answered === true) {
            dispatch(setProgress({ id: idMenu, progress: idStage }))
            showModal(3)
        } else if (answered === false) {
            showModal(1)
        }
        dispatch(setInitialAnswer());
    }, [types, answered])

    navigation.setOptions(headerComposer({
        leftComponent: Header.BackButton(() => navigation.goBack()),
        backgroundColor: '#FFEF60',
        rightComponent: Header.ConfigButton(() => navigation.navigate('ConfigurationScreen'))
    }));

    const showModal = (type: number) => {
        setVisibleModal(true);

        if (type === 3) {
            setMessage('Parabens, você acertou!');
            setSubtitle('');
            setMessageButton('Próximo');
        }
        else {
            setMessage('Ops, foi por pouco.');
            setSubtitle('Tente novamente');
            setMessageButton('Tentar de novo');
        }

    }

    const closeModal = () => {
        setVisibleModal(false);
    }

    const sendAnswer = (answerFunction: string) => {
        dispatch(setAnswer({
            answer: answerFunction,
            id: idMenu,
            progress: currentProgress
        }));
    }

    return (
        <Container>
            <DivTop>
                <Markdown title={`Qual figura é essa ${userName}?`} fontSize={24} />
                <DivImage>
                    <Image type="Confuso" width={140} height={160} />
                </DivImage>
            </DivTop>
            <DivMiddle>
                <Image type={types} height={200} width={200} />
            </DivMiddle>
            <DivButton>
                {alternativesAnswer.map(res => (<Button text={res} onPress={() => sendAnswer(res)} fontSize={14} heightSize={10} widthSize={95} />))}
            </DivButton>
            <Modal isVisible={visibleModal} closeModal={closeModal} typeMax={messageButton === 'Próximo' ? 'FelizOrelhaBaixoDente' : "Feliz"}>
                <Markdown title={message} fontColor="#FFEF60" fontSize={22} />
                <Markdown title={subtitle} fontColor="#FFEF60" fontSize={22} />
                <DivButtonModal noPadding={messageButton === 'Próximo' ? true : false}>
                    <Button text="Menu" onPress={() => navigation.navigate('MenuScreen')} widthSize={110} heightSize={10} fontSize={16} />
                    <Button text={messageButton} onPress={() => closeModal()} widthSize={160} heightSize={10} fontSize={16} />
                </DivButtonModal>
            </Modal>
        </Container>
    );
};

export default PlayerScreen;
