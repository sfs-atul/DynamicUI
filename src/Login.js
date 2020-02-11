import { Container } from "native-base";
import React, { Component } from "react";
import { Image, ImageBackground, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import appIntro from './assets/intro_slide.png';
import backgroundImage from './assets/login_background.png';

class Login extends Component {

    render() {
        return (
            <Container>
                <StatusBar barStyle='dark-content' />
                <View style={styles.slide}>
                    <Image source={appIntro} style={styles.image} />
                    <View style={styles.heading}>
                        <Text style={styles.textMain}>Your information and</Text>
                        <Text style={styles.textMain}>whishes are both on hand</Text>
                        <Text style={styles.textMain}>and kept in safe place</Text>
                    </View>
                </View>
                <ImageBackground source={backgroundImage} style={styles.background}>
                    <View style={{ paddingTop: 20 }}>
                        <Text style={styles.headText}>Get started with Holdmine</Text>
                        <View style={styles.inputBox}>
                        </View>
                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.btnText}>Next</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </Container>
        );
    }
}
export default Login;

const styles = StyleSheet.create({
    slide: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    image: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: hp('10%'),
        height: hp('40%'),
        width: wp('55%'),
        resizeMode: 'contain'
    },
    headText: {
        textAlign: 'center',
        fontSize: hp('3.5%'),
        fontWeight: 'bold',
        color: '#fff'
    },
    textMain: {
        textAlign: 'center',
        color: '#242B3B',
        fontSize: hp('4.5%'),
        fontWeight: 'bold',
    },
    heading: {
        marginTop: hp('2%')
    },
    background: {
        height: hp('28%'),
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
        marginTop: hp('3%'),
        alignSelf: 'center',
        justifyContent: 'center',
        height: hp('6.5%'),
        width: wp('30%'),
        backgroundColor: '#fff',
        borderRadius: hp('5%'),
        borderWidth: hp('0.3%'),
        borderColor: '#103040'
    },
    btnText: {
        alignSelf: 'center',
        color: '#103040',
        fontSize: hp('2.5%'),
        fontWeight: '600'
    }
});