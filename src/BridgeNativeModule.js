import {
    NativeModules,
}from'react-native';

let packageName = NativeModules.BridgeNativeModule.packageName;//(安卓包名，iOS的BunduleID)
let packageVersion = NativeModules.BridgeNativeModule.packageVersion;//(版本名字)

module.exports =  {
    packageName,
    packageVersion,
};