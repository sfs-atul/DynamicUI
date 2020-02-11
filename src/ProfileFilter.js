import React, { Component } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    StatusBar,
    TextInput,
    Platform,
} from "react-native";
import Slider from '@react-native-community/slider';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import LinearGradient from 'react-native-linear-gradient';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class ProfileFilter extends Component {
    render() {
        return (
            <LinearGradient
                colors={['#103040', '#546877', '#5D707F']}
                style={{
                    flex: 1
                }}>
                <StatusBar barStyle='light-content' />
                {/* Header */}
                <View style={{zIndex:1, width: wp('100%'), height: hp('8%'), justifyContent: 'center', alignItems: 'center', }}>
                    <View style={{ flexDirection: 'row', width: wp('90%'), marginTop: hp('2%'), alignItems: 'center' }}>
                        <TouchableOpacity
                            style={{ alignItems: 'center' }}>
                            <Image style={{ height: hp('3%'), width: hp('3%'), top: 5 }} source={require('./assets/white_cross.png')} />
                            {/* <Icon name={'md-arrow-back'} type={'Ionicons'} style={{ fontSize: hp('5%') }} /> */}
                        </TouchableOpacity>
                        <View style={{ alignItems: 'center', justifyContent: 'flex-start', marginLeft: wp('5%') }}>
                            <Text style={{ color: 'white', fontSize: hp('3%'), fontWeight: 'bold', top: 5 }}>Profile Filter</Text>
                        </View>
                    </View>
                </View>
                {/* Header End */}
                <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
                    {/* My Location */}
                    <View style={{ marginVertical: wp('5%'), marginHorizontal: hp('4%') }}>
                        <Text style={{ color: 'white', fontSize: hp('2%') }}>My Location</Text>
                        <View
                            style={{
                                width: wp('90%'),
                                marginTop: hp('2%'),
                                borderRadius: 5,
                                alignSelf: 'center',
                                elevation: 50,
                                backgroundColor: 'white',
                                shadowColor: '#fff',
                                shadowRadius: hp('2%'),
                                shadowOpacity: 0.4,
                                shadowOffset: {
                                    width: 0, height: 20
                                },
                                borderColor: 'white',
                            }}>
                            <View style={{ flexDirection: 'row', padding: hp('2%'), justifyContent: 'space-between', alignItems: 'center' }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image source={require('./assets/icons_location.png')} style={{ height: hp('4%'), width: wp('7%'), resizeMode: 'contain', marginTop: Platform.OS == 'android' ? 10 : 0 }} />
                                    <TextInput
                                        maxLength={20}
                                        multiline={false}
                                        value={'123, ABC Street...'}
                                        fontSize={hp('2%')}
                                        editable={false}
                                        style={{ color: '#242B3B', marginLeft: wp('1%') }}
                                    />
                                </View>
                                <TouchableOpacity><Text style={{ fontSize: hp('1.6%'), color: '#9DA6B8' }}>Change</Text></TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    {/* My Location End */}
                    {/* Distance */}
                    <View style={{ marginVertical: wp('5%'), marginHorizontal: hp('4%') }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={{ color: 'white', fontSize: hp('2%') }}>Distance From Me</Text>
                            <Text style={{ color: 'white', fontSize: hp('2%'), fontWeight: 'bold' }}>{'30 KM'}</Text>
                        </View>
                        <View
                            style={{
                                width: wp('90%'),
                                marginTop: hp('2%'),
                                borderRadius: 5,
                                alignSelf: 'center',
                                elevation: 50,
                                backgroundColor: 'white',
                                shadowColor: '#fff',
                                shadowRadius: hp('2%'),
                                shadowOpacity: 0.4,
                                shadowOffset: {
                                    width: 0, height: 20
                                },
                                borderColor: 'white',
                            }}>
                            <View style={{ flexDirection: 'row', padding: hp('2%'), justifyContent: 'space-between', alignItems: 'center' }}>

                                <Image source={require('./assets/icons_home.png')} style={{ height: hp('3%'), width: wp('6%'), resizeMode: 'contain', marginTop: Platform.OS == 'android' ? 10 : 0 }} />
                                <Slider
                                    value={0.2}
                                    thumbTintColor={'#DCAE1D'}
                                    style={{ width: wp('65%') }}
                                    minimumValue={0}
                                    maximumValue={1}
                                    minimumTrackTintColor="#DCAE1D"
                                    maximumTrackTintColor="#9DA6B8"
                                />
                                <Image source={require('./assets/icons_building.png')} style={{ height: hp('3%'), width: wp('6%'), resizeMode: 'contain', marginTop: Platform.OS == 'android' ? 10 : 0 }} />
                            </View>
                        </View>
                    </View>
                    {/* Distance End */}
                    {/* Price */}
                    <View style={{ marginVertical: wp('5%'), marginHorizontal: hp('4%') }}>
                        <Text style={{ color: 'white', fontSize: hp('2%') }}>Price</Text>
                        <View
                            style={{
                                width: wp('90%'),
                                marginTop: hp('2%'),
                                borderRadius: 5,
                                alignSelf: 'center',
                                elevation: 50,
                                backgroundColor: 'white',
                                shadowColor: '#fff',
                                shadowRadius: hp('2%'),
                                shadowOpacity: 0.4,
                                shadowOffset: {
                                    width: 0, height: 20
                                },
                                borderColor: 'white',
                            }}>
                            <View style={{ flexDirection: 'row', padding: hp('2%'), justifyContent: 'space-between', alignItems: 'center' }}>
                                <View
                                    style={{
                                        width: 90,
                                        height: 90,
                                        borderRadius: 45,
                                        borderWidth: 5,
                                        borderColor: '#DCAE1D'
                                    }}>
                                </View>
                                <View
                                    style={{
                                        width: 90,
                                        height: 90,
                                        borderRadius: 45,
                                        borderWidth: 5,
                                        borderColor: '#DCAE1D'
                                    }}>
                                </View>
                                <View
                                    style={{
                                        width: 90,
                                        height: 90,
                                        borderRadius: 45,
                                        borderWidth: 5,
                                        borderColor: '#DCAE1D'
                                    }}>
                                </View>
                            </View>
                        </View>
                    </View>
                    {/* Price End */}
                    {/* Button */}
                    <TouchableOpacity style={{ backgroundColor: 'white', height: hp('8%'), width: wp('60%'), marginTop: hp('3%'), alignSelf: 'center', borderWidth: 3, borderColor: '#103040', borderRadius: 50, }}>
                        <Text style={{ paddingHorizontal: hp('2%'), top: hp('2.5%'), textAlignVertical: 'center', textAlign: 'center', color: '#103040', fontSize: hp('2%'), fontWeight: 'bold' }}>APPLY FILTERS</Text>
                    </TouchableOpacity>
                    {/* Button End */}
                    {/* Reset Text */}
                    <TouchableOpacity style={{ alignSelf: 'center', marginTop: hp('2%') }}>
                        <Text style={{ textDecorationLine: 'underline', fontSize: hp('2%'), color: 'white' }}>Reset Filters</Text>
                    </TouchableOpacity>
                    {/* Reset Text End */}
                </KeyboardAwareScrollView>
            </LinearGradient>
        );
    }
}

export default ProfileFilter;