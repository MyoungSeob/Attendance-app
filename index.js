/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {NativeModules, Platform} from 'react-native'

if(__DEV__ && Platform.OS === "ios"){
    NativeModules.DevSettings.setIsDebuggingRemotely(true)
}

AppRegistry.registerComponent(appName, () => App);
