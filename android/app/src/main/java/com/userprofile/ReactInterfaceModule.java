package com.userprofile;

import android.util.Log;
import android.webkit.JavascriptInterface;
import android.widget.Toast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import javax.annotation.Nonnull;

public class ReactInterfaceModule extends ReactContextBaseJavaModule {

    ReactContext context;
    public ReactInterfaceModule(@Nonnull ReactApplicationContext reactContext) {
        super(reactContext);
        context = reactContext;
    }

    @Nonnull
    @Override
    public String getName() {
        return "ReactInterface";
    }

    @JavascriptInterface
    @ReactMethod
    public void postMessage(String name, String email, String phone, String imageUrl) {
        Toast.makeText(context,"Name: "+name+", email: "+email+", phone: "+phone+", imageUri: "+imageUrl, Toast.LENGTH_LONG).show();
        Log.d("Manbendra", "Name: "+name+", email: "+email+", phone: "+phone+", imageUrl: "+imageUrl);
    }
}
