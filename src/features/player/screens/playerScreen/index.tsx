import React, { useState, useEffect } from 'react';
import {
    Container, DivButton,
    DivMiddle, DivTop,
    DivImage, DivButtonModal,
    DivImageModal
} from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Button, Markdown, Image, Modal } from "components";
import { headerComposer, Header } from 'navigation/NavigationMixins';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from 'store/RootReducer';
import {
    setAnswer, setInitialAnswer, setProgress,
    getInfos, setInitialStateMenu, setInitialStatePlayer,
    resetDone, setStageDone
} from "../../redux/action/playerActions";
import { setDecrementStage } from "features/accreditation/redux/action/AuthActions";
import { BackHandler } from 'react-native';


const PlayerScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [visibleModal, setVisibleModal] = useState<boolean>(false);
    const [visibleModalUpgrade, setVisibleModalUpgrade] = useState<boolean>(false);
    const [message, setMessage] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [messageButton, setMessageButton] = useState('');
    const route = useRoute();

    const idMenu = route.params.params.id;

    const [alternativesAnswer, setAlternativesAnswer] = useState([]);
    const [typesAnswer, setTypesAnswer] = useState('');

    navigation.setOptions(headerComposer({
        leftComponent: Header.BackButton(() => navigation.goBack()),
        backgroundColor: '#FFEF60',
        rightComponent: Header.ConfigButton(() => navigation.navigate('ConfigurationScreen'))
    }));

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

    const currentStageDone = useSelector(
        (appState: AppState) => appState.PlayerFeature.menuReducer.currentStage[idMenu].done,
    )

    const done = useSelector(
        (appState: AppState) => appState.PlayerFeature.playerReducer.done,
    )

    const missingStage = useSelector(
        (appState: AppState) => appState.AccreditFeature.accreditReducer.missingStage,
    )

    useEffect(() => {
        if (done === true) {
            if (missingStage === 11) {
                showModalUpgrade(11)
            } else {
                showModal(2);
            }
            if (currentStageDone !== true) {
                dispatch(setDecrementStage());
            }
            dispatch(resetDone());
            dispatch(setStageDone({ id: idMenu, progress: idStage }));
        }
    }, [done]);

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
            if ((missingStage === 2 || missingStage === 5
                || missingStage === 8 || missingStage === 11) && currentStageDone !== true) {
                showModalUpgrade(missingStage);
            } else {
                showModal(3);
            }
            dispatch(setProgress({ id: idMenu, progress: idStage }));
            if (currentStageDone !== true) {
                dispatch(setDecrementStage());
            }
        } else if (answered === false) {
            showModal(1)
        }
        dispatch(setInitialAnswer());
    }, [types, answered])

    const showModalUpgrade = (type: number) => {
        setVisibleModalUpgrade(true);

        switch (type) {
            case 2:
                setMessage('Criança');
                setSubtitle("Criança");
                break;
            case 5:
                setMessage('Adolescente');
                setSubtitle('Adolescente');
                break;
            case 8:
                setMessage('Adulto');
                setSubtitle('Adulto');
                break;
            case 11:
                setMessage('Idoso');
                setSubtitle('Velho');
                break;
        }
    }

    const showModal = (type: number) => {
        setVisibleModal(true);

        if (type === 3) {
            setMessage('Parabens, você acertou!');
            setSubtitle('');
            setMessageButton('Próximo');
        } else
            if (type === 2) {
                setMessage('Parabéns, você finalizou essa fase!');
                setSubtitle('');
                setMessageButton('Vamos de novo');
            }
            else {
                setMessage('Ops, foi por pouco.');
                setSubtitle('Tente novamente');
                setMessageButton('Tentar de novo');
            }

    }

    const closeModal = () => {
        setVisibleModal(false);
        setVisibleModalUpgrade(false);
    }

    const resetInitialState = () => {
        dispatch(setInitialStatePlayer({ id: idMenu }));
        dispatch(setInitialStateMenu({ id: idMenu }));
        dispatch(setStageDone({ id: idMenu, progress: 0 }));
        closeModal();
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
                    {messageButton !== 'Vamos de novo' ?
                        <Button text={messageButton} onPress={() => closeModal()} widthSize={160} heightSize={10} fontSize={16} />
                        :
                        <Button text={messageButton} onPress={() => resetInitialState()} widthSize={160} heightSize={10} fontSize={16} />
                    }
                </DivButtonModal>
            </Modal>
            <Modal isVisible={visibleModalUpgrade} closeModal={closeModal} typeMax={messageButton === 'Próximo' ? 'FelizOrelhaBaixoDente' : "Feliz"}>
                <Markdown title={message === 'Idoso' ? 'Parabéns, você finalizou o jogo!' : 'Parabéns, você evoluiu!'} fontColor="#FFEF60" fontSize={22} />
                <Markdown title="Novo status:" fontColor="#FFFFFF" fontSize={22} />
                <Markdown title={message} fontColor="#FFEF60" fontSize={22} />
                <DivImageModal>
                    <Image type={subtitle} width={95} height={220} />
                </DivImageModal>
                <Button text="Continuar" onPress={() => closeModal()} widthSize={160} heightSize={10} fontSize={16} />
            </Modal>
        </Container>
    );
};

export default PlayerScreen;
