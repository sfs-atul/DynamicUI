import React, { Component } from 'react'
import { View, Text, Image, SafeAreaView, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import skipArrow from './assets/skip_arrow.png';
import appIntro from './assets/intro_slide.png';
import AppIntroSlider from 'react-native-app-intro-slider';
import backgroundImage from './assets/login_background.png';
import { isIphoneX } from 'react-native-iphone-x-helper'

const styles = StyleSheet.create({
    slide: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    image: {
        justifyContent: 'center',
        alignItems: 'center',
        height: hp('50%'),
        width: wp('65%'),
        resizeMode: 'contain'
    },
    text: {
        textAlign: 'center',
        fontSize: hp('3%'),
    },
    textMain: {
        textAlign: 'center',
        color: '#3F495D',
        fontSize: hp('3.5%'),
        fontWeight: 'bold',
    },
    loginImage: {
        justifyContent: 'center',
        alignSelf: 'center',
        height: hp('50%'),
        width: wp('65%'),
        resizeMode: 'contain'
    },
    background: {
        marginTop: hp('3%'),
        height: hp('35%'),
        width: wp('100%')
    },
    inputBox: {
        marginTop: hp('3%'),
        alignSelf: 'center',
        height: hp('6.5%'),
        width: wp('90%'),
        backgroundColor: '#fff',
        borderRadius: hp('1%')
    },
    btn: {
        marginVertical: hp('3%'),
        alignSelf: 'center',
        justifyContent: 'center',
        height: hp('6.5%'),
        width: wp('30%'),
        backgroundColor: '#fff',
        borderRadius: hp('5%'),
        borderWidth: hp('0.3%'),
        borderColor: '#103040',
    },
    btnText: {
        alignSelf: 'center',
        color: '#103040',
        fontSize: hp('2.5%'),
        fontWeight: '600'
    },
    headText: {
        textAlign: 'center',
        fontSize: hp('3.5%'),
        fontWeight: 'bold',
        color: '#fff'
    },
});
const slides = [
    {
        key: '1',
        text: <Text style={styles.textMain}><Text style={{ color: '#242B3B' }}>Peace</Text><Text> {'of mind so \nyou keep living life'}</Text></Text>,
        backgroundColor: '#fff',
        desc: <Text style={styles.text}>{'Holdmines keeps your \npersonal information safe'}</Text>,
        image: appIntro,

    },
    {
        key: '2',
        text: <Text style={styles.textMain}><Text style={{ color: '#242B3B' }}>Ease</Text><Text> {'your loved \nones\' burden'}</Text></Text>,
        backgroundColor: '#fff',
        desc: <Text style={styles.text}>{'Holdmines keeps your \npersonal information safe'}</Text>,
        image: appIntro,

    },
    {
        key: '3',
    }

];
export class Intro extends Component {

    state = {
        showDots: false,
    }

    _onSkip = () => {
        this.setState({ showDots: true });
        this.AppIntroSlider.goToSlide(2)
    }

    _renderItem = (item) => {
        if (item.item.key != '3') {
            return (
                <View style={styles.slide}>
                    <Image source={item.item.image} style={styles.image} />
                    <Text style={styles.textMain}>{item.item.text}</Text>
                    <Text style={styles.text}>{item.item.desc}</Text>
                </View>
            )
        } else {
            return (
                <View style={{ backgroundColor: '#fff' }}>
                    <View>
                        <Image source={appIntro} style={styles.loginImage} />
                        <View style={styles.heading}>
                            <Text style={[styles.textMain, { color: '#242B3B' }]}>{'Your information and \n whishes are both on hand \nand kept in safe place'}</Text>
                        </View>
                    </View>
                    <ImageBackground source={backgroundImage} style={styles.background}>
                        <View style={{ paddingTop: hp('2%') }}>
                            <Text style={styles.headText}>Get started with Holdmine</Text>
                            <View style={styles.inputBox}>
                            </View>
                            <TouchableOpacity style={styles.btn}>
                                <Text style={styles.btnText}>Next</Text>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                </View>
            )
        }
    }

    indexChanged = (index) => {
        if (index === 2) {
            this.setState({ showDots: true });
        } else {
            this.setState({ showDots: false });
        }
    }
    render() {
        return (
            <View style={{ flex: 1,backgroundColor:'#fff', marginTop: isIphoneX() ? 20 : 0 }}>
                {!this.state.showDots ? <TouchableOpacity onPress={() => this._onSkip()} style={{ alignSelf: 'flex-end', padding: wp('3%') }}>
                    <Text style={{ color: '#9B5772', fontSize: hp('2.5%') }}>Skip <Image source={skipArrow} style={{ resizeMode: 'contain', height: hp('2%'), width: wp('3%'), }} /></Text>
                </TouchableOpacity>
                    :
                    <View style={{ padding: wp('3%') }}>
                        <Text style={{ color: '#9B5772', fontSize: hp('2.5%') }}> <View style={{ height: hp('2%'), width: wp('3%'), }} /></Text>
                    </View>}
                <AppIntroSlider
                    ref={ref => this.AppIntroSlider = ref}
                    slides={slides}
                    showDoneButton={false}
                    showNextButton={false}
                    renderItem={this._renderItem}
                    activeDotStyle={{ backgroundColor: '#DCAE1D', width: wp('5%'), height: hp('1%'), borderRadius: hp('1%') }}
                    dotStyle={{ backgroundColor: 'rgba(0,0,0,.2)', width: wp('5%'), height: hp('1%'), borderRadius: hp('1%') }}
                    hidePagination={this.state.showDots}
                    onSlideChange={index => this.indexChanged(index)}
                />
            </View>
        )
    }
}



export default (Intro);

