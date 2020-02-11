import React, { Component } from "react";
import {
    View,
    Text,
    StatusBar,
    Image,
    TouchableOpacity,
    TextInput
} from "react-native";
import up_arrow from './assets/up_arrow.png';
import info_icon from './assets/info_icon.png';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Icon, Accordion } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
const TravelPlannerArray = [
    { key: 1 }
];
class TravelPlanner extends Component {

    _renderHeader = (title, expanded) => {
        console.log('expanded=>', expanded)
        let header = <View style={{ flexDirection: 'row', height: 50, paddingHorizontal: wp('4%'), paddingVertical: hp('2%'), justifyContent: 'space-between', alignItems: 'center' }}>
            <TouchableOpacity style={{ bottom: '1.5%', marginRight: '2%' }}><Image source={info_icon} style={{ height: hp('4%'), width: wp('6%'), resizeMode: 'contain' }} />
            </TouchableOpacity>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ fontSize: hp('2%'), color: '#3F495D' }}>Travel Documents</Text>
                <Image source={up_arrow} style={{ height: hp('4%'), width: wp('4%'), resizeMode: 'contain', transform: [{ rotate: expanded ? '180deg' : '0deg' }] }} />
            </View>
        </View>
        return header;
    }

    _renderContent = () => {
        {/* Schedule  */ }
        let content = <View style={{ marginVertical: wp('5%'), marginHorizontal: hp('4%') }}>
            {/* Schedule Field */}
            <View style={{ paddingHorizontal: wp('4%'), paddingBottom: hp('2%'), }}>
                <TextInput
                    placeholder='Enter Travel Dates'
                    placeholderTextColor='#9DA6B8'
                    style={{ fontSize: hp('2%') }}
                />
                <View style={{ height: hp('0.1%'), width: wp('83%'), backgroundColor: '#ddd', marginTop: hp('0.8%'), alignSelf: 'center' }} />
            </View>
            <View style={{ paddingHorizontal: wp('4%'), paddingBottom: hp('2%'), }}>
                <TextInput
                    multiline={true}
                    placeholder='Enter Travel Notes'
                    placeholderTextColor='#9DA6B8'
                    style={{ fontSize: hp('2%'), height: hp('15%'), textAlignVertical: 'top' }}
                />
                <View style={{ height: hp('0.1%'), width: wp('83%'), backgroundColor: '#ddd', marginTop: hp('0.8%'), alignSelf: 'center' }} />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: wp('4%'), paddingBottom: hp('2%'), }}>
                <TextInput
                    placeholder='Add Travel Schedule'
                    placeholderTextColor='#9DA6B8'
                    style={{ fontSize: hp('2%') }}
                />
                {/* Add Button */}
                <TouchableOpacity
                    style={{
                        borderColor: '#103040',
                        paddingHorizontal: '4%',
                        borderWidth: 2,
                        borderRadius: 30,
                        alignSelf: 'center',
                        elevation: 50,
                        backgroundColor: 'white',
                        shadowColor: 'rgba(96,114,147,0.5)',
                        shadowRadius: hp('2%'),
                        shadowOpacity: 0.4,
                        shadowOffset: {
                            width: 0, height: 20
                        },
                    }}>
                    <Text style={{ padding: '4%', textAlign: 'center', color: '#103040', fontSize: hp('1.8%'), fontWeight: 'bold' }}>ADD</Text>
                </TouchableOpacity>
                {/* Add Button */}
            </View>
        </View>
        {/* Schedule Field End */ }
        {/* Schedule End  */ }
        return content;
    }


    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <StatusBar barStyle='dark-content' />
                {/* Header */}
                <View style={{ zIndex: 1, width: wp('100%'), height: hp('8%'), justifyContent: 'center', alignItems: 'center', }}>
                    <View style={{ flexDirection: 'row', width: wp('90%'), marginTop: hp('2%'), alignItems: 'center' }}>
                        <TouchableOpacity
                            style={{ alignItems: 'center' }}>
                            <Image style={{ height: hp('3%'), width: hp('3%'), top: 5 }} source={require('./assets/cross.png')} />
                            {/* <Icon name={'md-arrow-back'} type={'Ionicons'} style={{ fontSize: hp('5%') }} /> */}
                        </TouchableOpacity>
                        <View style={{ alignItems: 'center', justifyContent: 'flex-start', marginLeft: wp('5%') }}>
                            <Text style={{ color: '#242B3B', fontSize: hp('3%'), fontWeight: 'bold', top: 5 }}>Travel <Text style={{ color: '#3F495D' }}>Planner</Text></Text>
                        </View>
                    </View>
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
                            borderRadius: 30
                        }}>
                        <Text style={{ padding: hp('2%'), textAlign: 'center', color: 'white', fontSize: hp('2%'), fontWeight: 'bold' }}>SAVE</Text>
                    </LinearGradient>
                </TouchableOpacity>
                {/* Button ADD NEW */}
                <KeyboardAwareScrollView>
                    {/* Schedule  */}
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
                            <Accordion style={{ borderWidth: 0 }} dataArray={TravelPlannerArray} renderHeader={this._renderHeader} renderContent={this._renderContent} />
                        </View>
                    </View>
                </KeyboardAwareScrollView>
            </View>
        );
    }
}
export default TravelPlanner;