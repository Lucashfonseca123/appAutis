import React, { useRef, useState, useEffect } from 'react';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import {
    View,
    Dimensions,
    StyleSheet,
    Platform,
    BackHandler
} from 'react-native';

import { Card, Markdown } from "components";
import { useNavigation } from '@react-navigation/native';
import { headerComposer, Header } from 'navigation/NavigationMixins';
import { Container, BottomContainer } from "./styles";
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from 'store/RootReducer';
import { setTotalStage } from "features/accreditation/redux/action/AuthActions";

const { width: screenWidth } = Dimensions.get('window');

interface IPagination {
    activeSlide: number;
}

interface IListItem {
    item: { name: string, object?: object, image?: string };
    index: number;
}

const MyCarousel = (props) => {
    const [onSnapItem, setOnSnapItem] = useState<IPagination>({ activeSlide: 0 });
    const [optionsMenu, setOptionsMenu] = useState([{}]);

    const dispatch = useDispatch();

    const carouselRef = useRef(null);
    const navigation = useNavigation();

    const menuOptions = useSelector(
        (appState: AppState) => appState.PlayerFeature.menuReducer.type,
    );

    const status = useSelector(
        (appState: AppState) => appState.AccreditFeature.accreditReducer.status,
    );

    let total: number;

    useEffect(() => {
        total = menuOptions.reduce((
            (total, menu) => total += menu.stage.length), 0
        );

        if (status === 0) {
            dispatch(setTotalStage({ totalStage: total }))
        }

    }, [menuOptions])

    useEffect(() => {
        setOptionsMenu(menuOptions);
    }, [])

    navigation.setOptions(headerComposer({
        leftComponent: Header.BackButton(() => navigation.navigate('WelcomeScreen')),
        backgroundColor: '#FFEF60',
        rightComponent: Header.ConfigButton(() => navigation.navigate('ConfigurationScreen'))
    }));

    useEffect(() => {
        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            () => {
                navigation.navigate('WelcomeScreen')
                return true;
            },
        );
    }, []);

    const renderItem = ({ item, index }: IListItem) => {
        const { activeSlide } = onSnapItem;

        return (
            <View style={styles.item}>
                <Card source={item.image}
                    onPress={() => navigation.navigate('PlayerScreen', {
                        params: item
                    })}
                >
                    <Markdown title={item.name} lineHeight={40} fontSize={32} textAlign="center" />
                </Card>
                <Pagination
                    dotsLength={optionsMenu.length}
                    activeDotIndex={activeSlide}
                    dotStyle={{
                        width: 15,
                        height: 15,
                        borderRadius: 8,
                        marginHorizontal: 8,
                        backgroundColor: '#FFF',
                        borderWidth: 1,
                        borderColor: "#ccc"
                    }}
                    inactiveDotStyle={{
                    }}
                    inactiveDotOpacity={0.4}
                    inactiveDotScale={0.6}
                />
            </View>

        );
    };

    return (
        <Container>
            <Carousel
                ref={carouselRef}
                sliderWidth={screenWidth}
                sliderHeight={screenWidth}
                itemWidth={screenWidth - 60}
                data={optionsMenu}
                renderItem={renderItem}
                hasParallaxImages={true}
                onSnapToItem={(index) => setOnSnapItem({ activeSlide: index })}
            />
            <BottomContainer>
                <Markdown title="Deslize para outros temas" fontSize={19} />
            </BottomContainer>
        </Container>
    );
};

export default MyCarousel;

const styles = StyleSheet.create({
    item: {
        width: screenWidth - 60,
        height: screenWidth - 60,
        marginTop: 16,
        flex: 1,
    },
    imageContainer: {
        flex: 1,
        marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
        backgroundColor: 'white',
        borderRadius: 8,
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
    },
});