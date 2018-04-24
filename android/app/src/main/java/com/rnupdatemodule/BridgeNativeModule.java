package com.rnupdatemodule;

import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Nullable;

public class BridgeNativeModule extends ReactContextBaseJavaModule{

    private ReactApplicationContext mContext;
    public BridgeNativeModule(ReactApplicationContext reactContext) {
        super(reactContext);
        mContext = reactContext;
    }

    @Override
    public String getName() {
        return "BridgeNativeModule";
    }

    @Nullable
    @Override
    public Map<String, Object> getConstants() {
        Map<String,Object> map = new HashMap<>();
        map.put("packageName",mContext.getPackageName());
        PackageInfo info = null;
        try {
            info = mContext.getPackageManager().getPackageInfo(mContext.getPackageName(),0);
        } catch (PackageManager.NameNotFoundException e) {
            e.printStackTrace();
        }
        map.put("packageVersion",info.versionName);
        return map;
    }
}
