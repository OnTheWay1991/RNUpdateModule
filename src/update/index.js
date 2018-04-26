/**
 * Created by tdzl2003 on 4/4/16.
 */

const HotUpdate = require('react-native').NativeModules.HotUpdate;
import {NativeAppEventEmitter, Platform} from 'react-native';
import {packageName} from '../BridgeNativeModule';

export const downloadRootDir = HotUpdate.downloadRootDir;
export const packageVersion = HotUpdate.packageVersion;
export const currentVersion = HotUpdate.currentVersion;
export const isFirstTime = HotUpdate.isFirstTime;
export const isRolledBack = HotUpdate.isRolledBack;


const platform = Platform.select({
    ios: 2,
    android: 1,
});

export function getOption() {
    return {
        phash: currentVersion,
        packageName: packageName,
        type: platform,
        vcode: packageVersion
    }
}

export function setSuccessUpdate() {
    isFirstTime ? markSuccess() : void 0; // set flag if first success time start after update
}

export async function downloadUpdate(options) {
    console.log("====================提交参数===============")
    console.log(options);
    await HotUpdate.downloadUpdate({
        updateUrl: options.url,
        hashName: options.phash,
    });
    // }
    return options.phash;
}

export async function switchVersion(hash) {
    HotUpdate.reloadUpdate({hashName: hash});
}

export async function switchVersionLater(hash) {
    HotUpdate.setNeedUpdate({hashName: hash});
}

export function markSuccess() {
    HotUpdate.markSuccess();
}


NativeAppEventEmitter.addListener('RCTHotUpdateDownloadProgress', (params) => {

})

NativeAppEventEmitter.addListener('RCTHotUpdateUnzipProgress', (params) => {

})