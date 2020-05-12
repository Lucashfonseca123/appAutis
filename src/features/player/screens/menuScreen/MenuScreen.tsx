import React, { useRef, useState, useEffect } from 'react';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import {
    View,
    Dimensions,
    StyleSheet,
    Platform,
    BackHandler
} from 'react-native';

import { Card, Markdown } from "../../../../components";
import { useNavigation } from '@react-navigation/native';
import { headerComposer, Header } from '../../../../navigation/NavigationMixins';
import { BottomContainer } from "./styles";

const ENTRIES1 = [
    {
        title: 'Formas geométricas',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'https://i.pinimg.com/originals/09/12/de/0912deca8a83f4bfcfd4dda9a9396dd4.jpg',
    },
    {
        title: 'Comida',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.pinimg.com/originals/00/af/33/00af3398b0abddafecd30f6dac84cce8.jpg',
    },
    // {
    //     title: 'White Pocket Sunset',
    //     subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    //     illustration: 'https://i.imgur.com/MABUbpDl.jpg',
    // },
    // {
    //     title: 'Acrocorinth, Greece',
    //     subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    //     illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
    // },
    // {
    //     title: 'The lone tree, majestic landscape of New Zealand',
    //     subtitle: 'Lorem ipsum dolor sit amet',
    //     illustration: 'https://i.imgur.com/2nCt3Sbl.jpg',
    // },
];
const { width: screenWidth } = Dimensions.get('window');

interface IPagination {
    activeSlide: number;
}

interface IListItem {
    item: { title: string, subtitle?: string, illustration?: string };
    index: number;
}

const MyCarousel = props => {
    const [entries, setEntries] = useState([]);
    const [onSnapItem, setOnSnapItem] = useState<IPagination>({ activeSlide: 0 });
    const carouselRef = useRef(null);
    const navigation = useNavigation();

    navigation.setOptions(headerComposer({
        leftComponent: Header.BackButton(() => navigation.navigate('WelcomeScreen')),
        backgroundColor: '#FFEF60',
        rightComponent: Header.ConfigButton(() => navigation.navigate('ConfigurationScreen'))
    }));

    const goForward = () => {
        carouselRef.current.snapToNext();
    };

    useEffect(() => {
        setEntries(ENTRIES1);
    }, []);

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
                <Card source={item.illustration}
                    onPress={() => navigation.navigate('PlayerScreen')}
                >
                    <Markdown title={item.title} lineHeight={40} fontSize={32} textAlign="center" />
                </Card>
                <Pagination
                    dotsLength={entries.length}
                    activeDotIndex={activeSlide}
                    // containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
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
        <View style={styles.container}>
            {/* <TouchableOpacity onPress={goForward}>
                <Text>go to next slide</Text>
            </TouchableOpacity> */}
            <Carousel
                ref={carouselRef}
                sliderWidth={screenWidth}
                sliderHeight={screenWidth}
                itemWidth={screenWidth - 60}
                data={entries}
                renderItem={renderItem}
                hasParallaxImages={true}
                onSnapToItem={(index) => setOnSnapItem({ activeSlide: index })}
            />
            <BottomContainer>
                <Markdown title="Deslize para outros temas" fontSize={19} />
            </BottomContainer>
        </View>
    );
};

export default MyCarousel;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        width: screenWidth - 60,
        height: screenWidth - 60,
        marginTop: 16,
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