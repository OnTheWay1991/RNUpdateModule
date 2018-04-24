// let rnUpdate = jest.genMockFromModule('react-native-update');

const rnUpdate = {};
let bridgeNativeModule = {};
const ReactNative = {
	NativeModules: {},
	NativeAppEventEmitter: {
		addListener: (params, cb) => { cb(); }
	},
	Platform: {
		OS: 'android',
		select:(obj)=>{return (typeof obj.android === 'function'&&obj.android()||obj.android)}
	}
};

rnUpdate.isFirstTime = true;
rnUpdate.isRolledBack = false;
rnUpdate.packageVersion = '1.0';
rnUpdate.currentVersion = "";
rnUpdate.downloadRootDir = "./";

let json = {
	data: {
		updates: true,
		pname: '1.0.3-rc',
		phash: 'hash',
		descs: '添加聊天功能\n修复商城页面BUG',
		isup: 1,
		url: 'http://update-packages.reactnative.cn/hash',
		pdiffUrl: 'http://update-packages.reactnative.cn/hash', // un-defined
		diffUrl: 'http://update-packages.reactnative.cn/hash', // un-defined
	},
	code:1
};

function downloadUpdate(info) {
	return new Promise((resolve, reject) => {
		info.update ? resolve(info.hash) : reject();
	});
}

rnUpdate.downloadUpdate = downloadUpdate;

function checkUpdate(payload) {
	return new Promise((resolve, reject) => {
		const phash = payload ? payload.phash : '';
		process.nextTick(() => {
			phash ? resolve(json) : reject()
		});
	});
}

rnUpdate.checkUpdate = checkUpdate;

function reloadUpdate(obj) {
	rnUpdate.currentVersion = obj.hashName;
}

// rnUpdate.reloadUpdate = reloadUpdate;
rnUpdate.reloadUpdate = jest.fn();

bridgeNativeModule.packageName = "com.rnupdate0424";
bridgeNativeModule.versionCode = rnUpdate.vcode;

ReactNative.NativeModules.HotUpdate = rnUpdate;
ReactNative.NativeModules.bridgeNativeModule = bridgeNativeModule;

module.exports = ReactNative;