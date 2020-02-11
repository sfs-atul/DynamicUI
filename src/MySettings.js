import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Image,
    Platform,
    StatusBar,
} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { isIphoneX } from 'react-native-iphone-x-helper';
import { Thumbnail } from "native-base";
import ProfilePic from './assets/dummy_profile.jpg';
import up_arrow from './assets/up_arrow.png';
import green_tick from './assets/green_tick.png';
import red_cross from './assets/red_cross.png';
import dashboardIcon from './assets/dashboard_icon.png';
const iPhone = Platform.OS == 'ios' ? 20 : 0
class MySettings extends Component {
    render() {

        return (
            
                <View style={{ flex: 1, backgroundColor: 'white', marginTop: isIphoneX() ? 33 : iPhone, }}>
                    <StatusBar barStyle='dark-content' />
                    <View style={{ top: hp('88%'), left: wp('30%'), zIndex: 1, position: 'absolute' }}>
                        <TouchableOpacity style={{ height: hp('6%'), width: wp('40%'), backgroundColor: 'white', borderWidth: 3, borderColor: '#103040', borderRadius: 30, paddingTop: hp('1.5%') }}>
                            <Text style={{ alignSelf: 'center', color: '#103040', fontSize: hp('2%'), fontWeight: 'bold' }}>SIGN OUT</Text>
                        </TouchableOpacity>
                    </View>
                    <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
                        <View style={{ width: wp('100%'), height: hp('1%'), backgroundColor: '#00303F', }} />
                        <View style={{ flexDirection: 'row', width: wp('100%'), marginTop: hp('2%') }}>
                            <TouchableOpacity
                                style={{ alignItems: 'center', height: hp('5%'), width: hp('5%') }}>
                                <Image style={{ height: hp('5%'), width: hp('5%'), }} source={dashboardIcon} />
                            </TouchableOpacity>
                            <View style={{ alignItems: 'center', justifyContent: 'flex-start', marginLeft: wp('1%') }}>
                                <Text style={{ color: '#3F495D', fontSize: hp('3%'), textAlign: 'right', fontWeight: 'bold', top: 5 }}> <Text style={{ color: '#3F495D' }}>My</Text> Settings </Text>
                            </View>
                            <View
                                style={{
                                    flex: 1,
                                    alignItems: 'flex-end',
                                    justifyContent: 'flex-end',
                                    right: wp('5%'),
                                    zIndex: 10,
                                    shadowColor: '#8A8AA5',
                                    shadowRadius: hp('2%'),
                                    shadowOpacity: 0.5,
                                    shadowOffset: {
                                        width: 0, height: 20
                                    },
                                    elevation: 5,
                                }}>
                                <Thumbnail large source={ProfilePic}
                                    style={{
                                        width: 90,
                                        height: 90,
                                        borderRadius: 90 / 2,
                                    }} />
                            </View>
                        </View>
                        <View style={{ marginVertical: wp('5%'), marginHorizontal: hp('4%') }}>
                            <Text style={{ color: '#3F495D', fontSize: hp('2%'), }}>Personal Details</Text>
                            <View
                                style={{
                                    width: wp('90%'),
                                    marginTop: hp('2%'),
                                    borderRadius: 5,
                                    alignSelf: 'center',
                                    elevation: 50,
                                    backgroundColor: 'white',
                                    shadowColor: '#607293',
                                    shadowRadius: hp('2%'),
                                    shadowOpacity: 0.4,
                                    shadowOffset: {
                                        width: 0, height: 20
                                    },
                                    borderColor: 'white',
                                }}>
                                <View style={{ flexDirection: 'row', padding: hp('2%'), justifyContent: 'space-between', alignItems: 'center' }}>
                                    <TextInput
                                        maxLength={20}
                                        multiline={false}
                                        value={'Jhon Doe'}
                                        fontSize={hp('2%')}
                                        editable={false}
                                        style={{ color: '#242B3B' }}
                                    />
                                    <TouchableOpacity><Text style={{ fontSize: hp('1.6%'), color: '#9DA6B8' }}>Edit</Text></TouchableOpacity>
                                </View>
                                <View style={{ flexDirection: 'row', padding: hp('2%'), justifyContent: 'space-between', alignItems: 'center' }}>
                                    <TextInput
                                        maxLength={20}
                                        multiline={false}
                                        value={'+61484646456'}
                                        fontSize={hp('2%')}
                                        editable={false}
                                        style={{ color: '#242B3B' }} Î
                                    />
                                    <TouchableOpacity><Text style={{ fontSize: hp('1.6%'), color: '#9DA6B8' }}>Edit</Text></TouchableOpacity>
                                </View>
                                <View style={{ flexDirection: 'row', padding: hp('2%'), justifyContent: 'space-between', alignItems: 'center' }}>
                                    <TextInput
                                        maxLength={20}
                                        multiline={false}
                                        value={'jhondoe@gmail.com'}
                                        fontSize={hp('2%')}
                                        editable={false}
                                        style={{ color: '#242B3B' }}
                                    />
                                    <TouchableOpacity><Text style={{ fontSize: hp('1.6%'), color: '#9DA6B8' }}>Edit</Text></TouchableOpacity>
                                </View>
                            </View>

                        </View>
                        <View style={{ marginVertical: wp('5%'), marginHorizontal: hp('4%') }}>
                            <Text style={{ color: '#3F495D', fontSize: hp('2%'), }}>Address</Text>
                            <View
                                style={{
                                    width: wp('90%'),
                                    height: hp('20%'),
                                    marginTop: hp('2%'),
                                    borderRadius: 5,
                                    alignSelf: 'center',
                                    elevation: 50,
                                    backgroundColor: 'white',
                                    shadowColor: '#607293',
                                    shadowRadius: hp('2%'),
                                    shadowOpacity: 0.4,
                                    shadowOffset: {
                                        width: 0, height: 20
                                    },
                                    borderColor: 'white',
                                }}>
                                <View style={{ flexDirection: 'row', padding: hp('2%'), justifyContent: 'space-between', alignItems: 'center' }}>
                                    <TextInput
                                        value={'123 ABC Street, Suburb,\nCity Postcode,\nNew Zealand'}
                                        multiline={true}
                                        fontSize={hp('2%')}
                                        editable={false}
                                        style={{ color: '#242B3B' }}
                                    />
                                    <TouchableOpacity><Text style={{ fontSize: hp('1.6%'), color: '#9DA6B8' }}>Edit</Text></TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={{ marginVertical: wp('5%'), marginHorizontal: hp('4%') }}>
                            <Text style={{ color: '#3F495D', fontSize: hp('2%'), }}>Password</Text>
                            <View
                                style={{
                                    width: wp('90%'),
                                    marginTop: hp('2%'),
                                    borderRadius: 5,
                                    alignSelf: 'center',
                                    elevation: 50,
                                    backgroundColor: 'white',
                                    shadowColor: '#607293',
                                    shadowRadius: hp('2%'),
                                    shadowOpacity: 0.4,
                                    shadowOffset: {
                                        width: 0, height: 20
                                    },
                                    borderColor: 'white',
                                }}>
                                <View style={{ flexDirection: 'row', padding: hp('2%'), justifyContent: 'space-between', alignItems: 'center' }}>
                                    <TextInput
                                        value={'******'}
                                        multiline={true}
                                        fontSize={hp('2%')}
                                        editable={false}
                                        style={{ color: '#242B3B' }}
                                    />
                                    <TouchableOpacity><Text style={{ fontSize: hp('1.6%'), color: '#9DA6B8' }}>Change</Text></TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={{ marginVertical: wp('5%'), marginHorizontal: hp('4%') }}>
                            <Text style={{ color: '#3F495D', fontSize: hp('2%'), }}>My Profile Permissions</Text>
                            <Text style={{ color: '#242B3B', fontSize: hp('2.3%'), }}>Manage who can access to your information</Text>
                            <View
                                style={{
                                    width: wp('90%'),
                                    marginTop: hp('2%'),
                                    borderRadius: 5,
                                    alignSelf: 'center',
                                    elevation: 50,
                                    backgroundColor: 'white',
                                    shadowColor: '#607293',
                                    shadowRadius: hp('2%'),
                                    shadowOpacity: 0.4,
                                    shadowOffset: {
                                        width: 0, height: 20
                                    },
                                    borderColor: 'white',
                                }}>
                                <View style={{ flexDirection: 'row', paddingHorizontal: wp('4%'), paddingVertical: hp('2%'), justifyContent: 'space-between', alignItems: 'center' }}>
                                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={{ fontSize: hp('2%'), color: '#3F495D' }}>Permissions</Text>
                                        <TouchableOpacity><Image source={up_arrow} style={{ height: hp('4%'), width: wp('4%'), resizeMode: 'contain' }} /></TouchableOpacity>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', paddingHorizontal: wp('4%'), justifyContent: 'space-between', alignItems: 'center' }}>
                                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={{ fontSize: hp('2%'), color: '#242B3B' }}>Life Admin</Text>
                                        <TouchableOpacity><Image source={green_tick} style={{ height: hp('4%'), width: wp('4%'), resizeMode: 'contain' }} /></TouchableOpacity>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', paddingHorizontal: wp('6%'), justifyContent: 'space-between', alignItems: 'center' }}>
                                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={{ fontSize: hp('2%'), color: '#242B3B' }}>Digital Footprint</Text>
                                        <TouchableOpacity><Image source={green_tick} style={{ height: hp('4%'), width: wp('4%'), resizeMode: 'contain' }} /></TouchableOpacity>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', paddingHorizontal: wp('6%'), justifyContent: 'space-between', alignItems: 'center' }}>
                                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={{ fontSize: hp('2%'), color: '#242B3B' }}>Home Details</Text>
                                        <TouchableOpacity><Image source={red_cross} style={{ height: hp('4%'), width: wp('4%'), resizeMode: 'contain' }} /></TouchableOpacity>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', paddingHorizontal: wp('6%'), justifyContent: 'space-between', alignItems: 'center' }}>
                                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={{ fontSize: hp('2%'), color: '#242B3B' }}>Emergency Preparedness</Text>
                                        <TouchableOpacity><Image source={red_cross} style={{ height: hp('4%'), width: wp('4%'), resizeMode: 'contain' }} /></TouchableOpacity>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', paddingHorizontal: wp('6%'), justifyContent: 'space-between', alignItems: 'center' }}>
                                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={{ fontSize: hp('2%'), color: '#242B3B' }}>Travel Planner</Text>
                                        <TouchableOpacity><Image source={green_tick} style={{ height: hp('4%'), width: wp('4%'), resizeMode: 'contain' }} /></TouchableOpacity>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', paddingHorizontal: wp('4%'), justifyContent: 'space-between', alignItems: 'center' }}>
                                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={{ fontSize: hp('2%'), color: '#242B3B' }}>Personal Finance</Text>
                                        <TouchableOpacity><Image source={red_cross} style={{ height: hp('4%'), width: wp('4%'), resizeMode: 'contain' }} /></TouchableOpacity>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', paddingHorizontal: wp('4%'), justifyContent: 'space-between', alignItems: 'center' }}>
                                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={{ fontSize: hp('2%'), color: '#242B3B' }}>Business Finance</Text>
                                        <TouchableOpacity><Image source={red_cross} style={{ height: hp('4%'), width: wp('4%'), resizeMode: 'contain' }} /></TouchableOpacity>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', paddingHorizontal: wp('4%'), justifyContent: 'space-between', alignItems: 'center' }}>
                                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={{ fontSize: hp('2%'), color: '#242B3B' }}>Funeral Wishes</Text>
                                        <TouchableOpacity><Image source={green_tick} style={{ height: hp('4%'), width: wp('4%'), resizeMode: 'contain' }} /></TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <View style={{ flex: 1, marginVertical: wp('5%'), marginTop: hp('4%') }}>
                                <Text style={{ color: '#3F495D', fontSize: hp('2%'), }}>Profiles I Can View</Text>
                                <Text style={{ color: '#242B3B', fontSize: hp('2.3%'), marginTop: hp('1%') }}>See who has given you access to their information.</Text>
                            </View>
                            <View
                                style={{
                                    width: wp('90%'),
                                    paddingVertical: hp('1%'),
                                    borderRadius: 5,
                                    alignSelf: 'center',
                                    elevation: 50,
                                    backgroundColor: 'white',
                                    shadowColor: '#607293',
                                    shadowRadius: hp('2%'),
                                    shadowOpacity: 0.4,
                                    shadowOffset: {
                                        width: 0, height: 20
                                    },
                                    borderColor: 'white',
                                }}>
                                <View style={{ flexDirection: 'row', paddingHorizontal: wp('4%'), paddingTop: wp('3.5%'), justifyContent: 'space-between', alignItems: 'center' }}>
                                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={{ fontSize: hp('2%'), color: '#242B3B' }}>Jane Smith</Text>
                                        <TouchableOpacity><Image source={green_tick} style={{ height: hp('4%'), width: wp('4%'), resizeMode: 'contain' }} /></TouchableOpacity>
                                    </View>
                                </View>
                                <Text style={{ color: '#242B3B', fontSize: hp('2.3%'), paddingHorizontal: wp('4%') }}>{'Access allowed for Life Admin, Personal Finance and Business Finance.'}</Text>
                                <View style={{ height: hp('0.1%'), width: wp('83%'), backgroundColor: '#ddd', marginTop: hp('0.8%'), alignSelf: 'center' }} />
                                <View style={{ flexDirection: 'row', paddingHorizontal: wp('4%'), paddingTop: wp('3.5%'), justifyContent: 'space-between', alignItems: 'center' }}>
                                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={{ fontSize: hp('2%'), color: '#242B3B' }}>Jane Smith</Text>
                                        <TouchableOpacity><Image source={green_tick} style={{ height: hp('4%'), width: wp('4%'), resizeMode: 'contain' }} /></TouchableOpacity>
                                    </View>
                                </View>
                                <Text style={{ color: '#242B3B', fontSize: hp('2.3%'), paddingHorizontal: wp('4%') }}>{'Access allowed for Life Admin, Personal Finance and Business Finance.'}</Text>
                            </View>
                            <View style={{ height: hp('8%') }} />
                        </View>
                    </KeyboardAwareScrollView>
                </View>
        );
    }
}
export default MySettings;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});