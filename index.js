/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Intro from './src/Intro';
import Login from './src/Login';
import MySettings from './src/MySettings';
import ProfileFilter from './src/ProfileFilter';
import FinancialAdvisor from './src/FinancialAdvisor';
import Permissions from './src/Permissions';
import TravelPlanner from './src/TravelPlanner1';

AppRegistry.registerComponent(appName, () => FinancialAdvisor);
