import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ImageBackground
} from "react-native";
import { Container } from "native-base";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import backBtn from './assets/back.png';
import btnBackground from './assets/btBg.png'

class OTP extends Component {
    render() {
        return (
            <Container>
                <View style={{ margin: hp('3.5%'), flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={backBtn} style={styles.btnBack} />
                    <Text style={styles.header}>Verify <Text style={{ color: '#3F495D' }}>Your Number</Text></Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.text}>For security reasons, verify your number</Text>
                    <Text style={styles.text}>by entering the code sent to your phone</Text>
                    <TouchableOpacity style={styles.btnContainer}>
                        <ImageBackground source={btnBackground} style={styles.btn}>
                            <Text style={styles.btnText}>Verify</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>

            </Container>
        );
    }
}
export default OTP;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: wp('2%'),
        alignItems: 'center',
        marginTop: hp('5%')
    },
    btnBack: {
        height: hp('5%'),
        width: wp('5%'),
        resizeMode: 'contain'
    },
    header: {
        marginLeft: wp('2%'),
        fontSize: hp('3.5%'),
        fontWeight: 'bold',
        color: '#242B3B'
    },
    text: {
        fontSize: hp('2.5%'),
    },
    btnContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: hp('10%'),
        width: wp('30%'),
        backgroundColor: 'red',
        marginTop: hp('5%'),
    },
    btn: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        height: hp('20%'),
        width: wp('50%'),
    },
    btnText: {
        color: '#fff',
        fontSize: hp('3%'),
        fontWeight: 'bold',
       // bottom: hp('3%'),
        position:'absolute'
    }

});