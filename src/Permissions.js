import React, { Component } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StatusBar,
    Image,
    ScrollView
} from "react-native";
import green_tick from './assets/green_tick.png';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Icon } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

class Permissions extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <StatusBar barStyle='dark-content' />
                {/* Header */}
                <View style={{ zIndex: 1, flexDirection: 'row', width: wp('100%'), height: hp('8%'), justifyContent: 'center', alignItems: 'space-between' }}>
                    <View style={{ flexDirection: 'row', width: wp('75%'), marginTop: hp('2%'), alignItems: 'center', }}>
                        <TouchableOpacity
                            style={{ alignItems: 'center' }}>
                            <Image style={{ height: hp('3%'), width: hp('3%'), top: 5 }} source={require('./assets/cross.png')} />
                        </TouchableOpacity>
                        <View style={{ alignItems: 'center', justifyContent: 'flex-start', marginLeft: wp('5%') }}>
                            <Text style={{ color: '#242B3B', fontSize: hp('3%'), fontWeight: 'bold', top: 5 }}>Permissions</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={{ flexDirection: 'row', right: '5%', top: hp('0.5%') }}>
                        <Text style={{ fontSize: hp('1.8%'), color: '#9B5772' }}>{'View By '}</Text>
                        <Icon name='ios-arrow-down' style={{ color: '#9B5772', fontSize: hp('1.8%'), alignSelf: 'center', marginTop: '5%' }} />
                    </TouchableOpacity>
                </View>
                {/* Header End */}
                {/* Button ADD NEW */}
                <TouchableOpacity style={{ top: hp('89%'), left: wp('30%'), right: wp('30%'), zIndex: 1, position: 'absolute', }}>
                    <LinearGradient
                        start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                        colors={['rgba(16,48,64,1)', 'rgba(16,48,64,0.7)']} style={{
                            flex: 1,
                            paddingLeft: 15,
                            paddingRight: 15,
                            borderRadius: 5,
                            borderRadius: 30
                        }}>
                        <Text style={{ padding: hp('2%'), textAlign: 'center', color: 'white', fontSize: hp('2%'), fontWeight: 'bold' }}>ADD NEW</Text>
                    </LinearGradient>
                </TouchableOpacity>
                {/* Button ADD NEW */}
                <ScrollView>
                    {/* Digital  */}
                    <View style={{ marginVertical: wp('5%'), marginHorizontal: hp('4%') }}>
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
                            {/* Field */}
                            <View style={{ paddingHorizontal: wp('4%'), paddingTop: wp('3.5%') }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={{ fontSize: hp('2%'), color: '#242B3B' }}>Jane Smith</Text>
                                        <TouchableOpacity><Image source={green_tick} style={{ height: hp('4%'), width: wp('4%'), resizeMode: 'contain' }} /></TouchableOpacity>
                                    </View>
                                </View>
                                <Text style={{ fontSize: hp('1.8%'), color: '#242B3B', fontStyle: 'italic' }}>Financial Advisor</Text>
                                <View style={{ height: hp('0.1%'), width: wp('83%'), backgroundColor: '#ddd', marginTop: hp('0.8%'), alignSelf: 'center' }} />
                            </View>
                            {/* Field End */}
                            {/* Field */}
                            <View style={{ paddingHorizontal: wp('4%'), paddingTop: wp('3.5%') }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={{ fontSize: hp('2%'), color: '#242B3B' }}>Jane Smith</Text>
                                        <TouchableOpacity><Image source={green_tick} style={{ height: hp('4%'), width: wp('4%'), resizeMode: 'contain' }} /></TouchableOpacity>
                                    </View>
                                </View>
                                <Text style={{ fontSize: hp('1.8%'), color: '#242B3B', fontStyle: 'italic' }}>Financial Advisor</Text>
                                <View style={{ height: hp('0.1%'), width: wp('83%'), backgroundColor: '#ddd', marginTop: hp('0.8%'), alignSelf: 'center' }} />
                            </View>
                            {/* Field End */}
                            {/* Field */}
                            <View style={{ paddingHorizontal: wp('4%'), paddingTop: wp('3.5%') }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={{ fontSize: hp('2%'), color: '#242B3B' }}>Jane Smith</Text>
                                        <TouchableOpacity><Image source={green_tick} style={{ height: hp('4%'), width: wp('4%'), resizeMode: 'contain' }} /></TouchableOpacity>
                                    </View>
                                </View>
                                <Text style={{ fontSize: hp('1.8%'), color: '#242B3B', fontStyle: 'italic' }}>Financial Advisor</Text>
                                <View style={{ height: hp('0.1%'), width: wp('83%'), backgroundColor: '#ddd', marginTop: hp('0.8%'), alignSelf: 'center' }} />
                            </View>
                            {/* Field End */}
                        </View>
                    </View>
                    {/* Digital End */}
                    {/* Home  */}
                    <View style={{ marginVertical: wp('5%'), marginHorizontal: hp('4%') }}>
                        <Text style={{ color: '#3F495D', fontSize: hp('2%'), }}>Home Details</Text>
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
                            {/* Field */}
                            <View style={{ paddingHorizontal: wp('4%'), paddingTop: wp('3.5%') }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={{ fontSize: hp('2%'), color: '#242B3B' }}>Jane Smith</Text>
                                        <TouchableOpacity><Image source={green_tick} style={{ height: hp('4%'), width: wp('4%'), resizeMode: 'contain' }} /></TouchableOpacity>
                                    </View>
                                </View>
                                <Text style={{ fontSize: hp('1.8%'), color: '#242B3B', fontStyle: 'italic' }}>Financial Advisor</Text>
                                <View style={{ height: hp('0.1%'), width: wp('83%'), backgroundColor: '#ddd', marginTop: hp('0.8%'), alignSelf: 'center' }} />
                            </View>
                            {/* Field End */}
                            {/* Field */}
                            <View style={{ paddingHorizontal: wp('4%'), paddingTop: wp('3.5%') }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={{ fontSize: hp('2%'), color: '#242B3B' }}>Jane Smith</Text>
                                        <TouchableOpacity><Image source={green_tick} style={{ height: hp('4%'), width: wp('4%'), resizeMode: 'contain' }} /></TouchableOpacity>
                                    </View>
                                </View>
                                <Text style={{ fontSize: hp('1.8%'), color: '#242B3B', fontStyle: 'italic' }}>Financial Advisor</Text>
                                <View style={{ height: hp('0.1%'), width: wp('83%'), backgroundColor: '#ddd', marginTop: hp('0.8%'), alignSelf: 'center' }} />
                            </View>
                            {/* Field End */}
                            {/* Field */}
                            <View style={{ paddingHorizontal: wp('4%'), paddingTop: wp('3.5%') }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={{ fontSize: hp('2%'), color: '#242B3B' }}>Jane Smith</Text>
                                        <TouchableOpacity><Image source={green_tick} style={{ height: hp('4%'), width: wp('4%'), resizeMode: 'contain' }} /></TouchableOpacity>
                                    </View>
                                </View>
                                <Text style={{ fontSize: hp('1.8%'), color: '#242B3B', fontStyle: 'italic' }}>Financial Advisor</Text>
                                <View style={{ height: hp('0.1%'), width: wp('83%'), backgroundColor: '#ddd', marginTop: hp('0.8%'), alignSelf: 'center' }} />
                            </View>
                            {/* Field End */}
                        </View>
                    </View>
                    {/* Home End */}
                    {/* Emergency  */}
                    <View style={{ marginVertical: wp('5%'), marginHorizontal: hp('4%') }}>
                        <Text style={{ color: '#3F495D', fontSize: hp('2%'), }}>Emergency Preparedness</Text>
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
                            {/* Field */}
                            <View style={{ paddingHorizontal: wp('4%'), paddingTop: wp('3.5%') }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={{ fontSize: hp('2%'), color: '#242B3B' }}>Jane Smith</Text>
                                        <TouchableOpacity><Image source={green_tick} style={{ height: hp('4%'), width: wp('4%'), resizeMode: 'contain' }} /></TouchableOpacity>
                                    </View>
                                </View>
                                <Text style={{ fontSize: hp('1.8%'), color: '#242B3B', fontStyle: 'italic' }}>Financial Advisor</Text>
                                <View style={{ height: hp('0.1%'), width: wp('83%'), backgroundColor: '#ddd', marginTop: hp('0.8%'), alignSelf: 'center' }} />
                            </View>
                            {/* Field End */}
                            {/* Field */}
                            <View style={{ paddingHorizontal: wp('4%'), paddingTop: wp('3.5%') }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={{ fontSize: hp('2%'), color: '#242B3B' }}>Jane Smith</Text>
                                        <TouchableOpacity><Image source={green_tick} style={{ height: hp('4%'), width: wp('4%'), resizeMode: 'contain' }} /></TouchableOpacity>
                                    </View>
                                </View>
                                <Text style={{ fontSize: hp('1.8%'), color: '#242B3B', fontStyle: 'italic' }}>Financial Advisor</Text>
                                <View style={{ height: hp('0.1%'), width: wp('83%'), backgroundColor: '#ddd', marginTop: hp('0.8%'), alignSelf: 'center' }} />
                            </View>
                            {/* Field End */}
                            {/* Field */}
                            <View style={{ paddingHorizontal: wp('4%'), paddingTop: wp('3.5%') }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={{ fontSize: hp('2%'), color: '#242B3B' }}>Jane Smith</Text>
                                        <TouchableOpacity><Image source={green_tick} style={{ height: hp('4%'), width: wp('4%'), resizeMode: 'contain' }} /></TouchableOpacity>
                                    </View>
                                </View>
                                <Text style={{ fontSize: hp('1.8%'), color: '#242B3B', fontStyle: 'italic' }}>Financial Advisor</Text>
                                <View style={{ height: hp('0.1%'), width: wp('83%'), backgroundColor: '#ddd', marginTop: hp('0.8%'), alignSelf: 'center' }} />
                            </View>
                            {/* Field End */}
                        </View>
                    </View>
                    {/* Emergency End */}
                    <View style={{ height: hp('9%') }} />
                </ScrollView>
            </View>
        );
    }
}
export default Permissions;
