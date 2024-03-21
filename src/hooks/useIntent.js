import React from 'react'
import IntentLauncher, { IntentConstant } from 'react-native-intent-launcher'

// example package 'com.your.app'

export const useIntent = () => {

    const checkAppPackage = (value) => {
        reactNativeIntentLauncher.isAppInstalled(value)
        .then((result) => {
            console.log('isAppInstalled yes');
        })
        .catch((error) => console.warn('isAppInstalled: no', error));
    }

    const openAppPackage = (value) => {
        IntentLauncher.startAppByPackageName(value)
        .then((result) => {
            console.log('startAppByPackageName started');
        })
        .catch((error) => console.warn('startAppByPackageName: could not open', error));
    }

    return {
        checkAppPackage
    }
}
