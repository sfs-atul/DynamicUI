import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    StatusBar
} from "react-native";
import Swiper from 'react-native-swiper';
import skipArrow from './assets/skip_arrow.png';
import appIntro from './assets/intro_slide.png';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Container } from "native-base";

class IntroOld extends Component {

    _renderDots = () => {
        return (
            <View style={{ backgroundColor: 'rgba(0,0,0,.2)', width: wp('5%'), height: hp('1%'), borderRadius: hp('1%')}} />
        )
    }
    _renderActiveDots = () => {
        return (
            <View style={{ backgroundColor: '#DCAE1D', width: wp('5%'), height: hp('1%'), borderRadius:hp('1%')}} />)
    }

    render() {
        return (
            <Container>
                <StatusBar barStyle='dark-content' />
                <TouchableOpacity style={{ alignSelf: 'flex-end', justifyContent: 'flex-start', marginRight: wp('2%'), marginTop: hp('5%') }}>
                    <Text style={{ color: '#9B5772', fontSize: hp('2.5%') }}>Skip <Image source={skipArrow} style={{ resizeMode: 'contain', height: hp('2%'), width: wp('2%') }} /></Text>
                </TouchableOpacity>
                <Swiper
                    dot={this._renderDots()}
                    activeDot={this._renderActiveDots()}
                    loop={false}>
                    <View style={styles.slide}>
                        <Image source={appIntro} style={styles.image} />
                        <View style={styles.heading}>
                            <Text style={styles.textMain}><Text style={{ color: '#242B3B' }}>Peace</Text><Text> of mind so</Text></Text>
                            <Text style={styles.textMain}>you keep living life</Text>
                        </View>
                        <View style={{ marginTop: hp('2%') }}>
                            <Text style={styles.text}>Holdmines keeps your</Text>
                            <Text style={styles.text}>personal information safe</Text>
                        </View>
                    </View>
                    <View style={styles.slide}>
                        <Image source={appIntro} style={styles.image} />
                        <View style={styles.heading}>
                            <Text style={styles.textMain}><Text style={{ color: '#242B3B' }}>Ease</Text><Text> your loved</Text></Text>
                            <Text style={styles.textMain}>ones' burden</Text>
                        </View>
                        <View style={{ marginTop: hp('2%') }}>
                            <Text style={styles.text}>Holdmines keeps your</Text>
                            <Text style={styles.text}>personal information safe</Text>
                        </View>
                    </View>
                    <View>

                    </View>
                </Swiper>
            </Container>

        );
    }
}
export default Intro;

const styles = StyleSheet.create({
    slide: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    image: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: hp('5%'),
        height: hp('40%'),
        width: wp('55%'),
        resizeMode: 'contain'
    },
    text: {
        textAlign: 'center',
        fontSize: hp('3%'),
    },
    textMain: {
        textAlign: 'center',
        color: '#3F495D',
        fontSize: hp('4.5%'),
        fontWeight: 'bold',
    },
    heading: {
        marginTop: hp('5%')
    }
})