import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    TextInput,
    Platform,
    TouchableOpacity,
    Image
} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CustomVideoPlayer from '../src/CustomVideoPlayer';

class FinancialAdvisor extends Component {
    render() {
        return (
            <LinearGradient
                colors={['#103040', '#546877', '#5D707F']}
                style={{
                    flex: 1
                }}>
                <StatusBar barStyle='light-content' />
                {/* Header */}
                <View style={{ width: wp('100%'), height: hp('10%'), justifyContent: 'center', alignItems: 'center', }}>
                    <View style={{ flexDirection: 'row', width: wp('90%'), marginTop: hp('2%'), alignItems: 'center' }}>
                        <TouchableOpacity
                            style={{ alignItems: 'center' }}>
                            <Image style={{ height: hp('3%'), width: hp('3%'), top: 5 }} source={require('./assets/white_cross.png')} />
                            {/* <Icon name={'md-arrow-back'} type={'Ionicons'} style={{ fontSize: hp('5%') }} /> */}
                        </TouchableOpacity>
                        <View style={{ alignItems: 'center', justifyContent: 'flex-start', marginLeft: wp('5%') }}>
                            <Text style={{ color: 'white', fontSize: hp('3%'), fontWeight: 'bold', top: 5 }}>Financial Advisor</Text>
                        </View>
                    </View>
                </View>
                {/* Header End */}
                {/* Text */}
                <View style={{ marginVertical: wp('5%'), marginHorizontal: hp('4%'), }}>
                    <Text style={{ color: 'white', fontSize: hp('2.2%'), fontWeight: 'bold' }}>What is a Financial Advisor?</Text>
                    <Text style={{ marginTop: hp('0.5%'), color: 'white', fontSize: hp('2.3%') }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid unt ut labore dolore magna aliqua. Ut enim  ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</Text>
                </View>
                {/* Text End*/}
                {/* Video */}

                <View style={{alignItems:'center',}}>
                <CustomVideoPlayer
                source={{uri: 'https://www.radiantmediaplayer.com/media/bbb-360p.mp4'}}
                />
                </View>
                {/* Video End*/}
                {/* Button */}
                <TouchableOpacity style={{ backgroundColor: 'white', height: hp('7%'), width: wp('60%'), marginTop: hp('3%'), alignSelf: 'center', borderWidth: 3, borderColor: '#103040', borderRadius: 50, }}>
                    <Text style={{ paddingHorizontal: hp('2%'), top: hp('1.8%'), textAlign: 'center', color: '#103040', fontSize: hp('2%'), fontWeight: 'bold' }}>MORE INFORMATION</Text>
                </TouchableOpacity>
                {/* Button */}
                
            </LinearGradient>
        );
    }
}
export default FinancialAdvisor;
