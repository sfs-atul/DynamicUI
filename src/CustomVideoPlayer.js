import React, {
    Component
} from 'react';

import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import Video from 'react-native-video';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Icon } from 'native-base';
import { TouchableWithoutFeedback, TouchableNativeFeedback } from 'react-native-gesture-handler';

export default class CustomVideoPlayer extends Component {

    constructor(props) {
        super(props);
        this.onLoad = this.onLoad.bind(this);
        this.onProgress = this.onProgress.bind(this);
    }

    state = {
        resizeMode: 'cover',
        duration: 0.0,
        currentTime: 0.0,
        paused: true,
        pausedBtn: true
    };

    onLoad(data) {
        this.setState({ duration: data.duration });
    }

    onProgress(data) {
        this.setState({ currentTime: data.currentTime });
    }

    getCurrentTimePercentage() {
        if (this.state.currentTime > 0) {
            return parseFloat(this.state.currentTime) / parseFloat(this.state.duration);
        } else {
            return 0;
        }
    }


    render() {
        const flexCompleted = this.getCurrentTimePercentage() * 100;
        const flexRemaining = (1 - this.getCurrentTimePercentage()) * 100;

        return (
            <View style={styles.container}>
                <TouchableOpacity activeOpacity={1} style={styles.fullScreen} 
                onPress={() => { this.setState({ pausedBtn: !this.state.pausedBtn }) }}>
                    <Video source={{ uri: 'https://www.radiantmediaplayer.com/media/bbb-360p.mp4' }}
                        style={styles.fullScreen}
                        rate={1}
                        paused={this.state.paused}
                        volume={1}
                        muted={false}
                        resizeMode={this.state.resizeMode}
                        onLoad={this.onLoad}
                        onProgress={this.onProgress}
                        onEnd={() => { console.log('Done!') }}
                        repeat={false} />
                </TouchableOpacity>

                {this.state.pausedBtn &&
                    <TouchableOpacity onPress={() => { this.setState({ paused: !this.state.paused }) }}
                        style={{ flex: 1, position: 'absolute', backgroundColor: '#19354A', height: 70, width: 70, borderRadius: 35 }}>
                        <View style={{ flex: 1, alignSelf: 'center', justifyContent: 'center', }}>
                            <Icon name='play'
                                style={{ color: 'white', fontSize: hp('5%'), left:'4%',top:'3%' }} />
                        </View>
                    </TouchableOpacity>}

                <View style={styles.controls}>
                    <View style={styles.progress}>
                        <View style={[styles.innerProgressCompleted, { flex: flexCompleted }]} />
                        <View style={[styles.innerProgressRemaining, { flex: flexRemaining }]} />
                    </View>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        height: hp('30%'),
        width: wp('75%'),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 5
    },
    fullScreen: {
        borderRadius: 5,
        height: hp('26%'),
        width: wp('68%'),
    },
    controls: {
        backgroundColor: "transparent",
        borderRadius: 5,
        position: 'absolute',
        bottom: hp('1%'),
        left: wp('5%'),
        right: wp('5%'),
    },
    progress: {
        flex: 1,
        flexDirection: 'row',
        borderRadius: 2,
        overflow: 'hidden',
    },
    innerProgressCompleted: {
        height: 5,
        backgroundColor: '#cccccc',
    },
    innerProgressRemaining: {
        height: 5,
        backgroundColor: '#2C2C2C',
    },
});