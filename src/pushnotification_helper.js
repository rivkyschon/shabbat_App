import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';
import {PermissionsAndroid} from 'react-native';


//PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);

export async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
        console.log('Authorization status:', authStatus);
    }
}

function GetFCMToken() {
    let fcmtoken = AsyncStorage.getItem("fcmtoken");
    if (!fcmtoken) {
        try {
            let fcmtoken = messaging().getToken();

            if (fcmtoken) {
                AsyncStorage.setItem("fcmtoken", fcmtoken)
            }
            else {

            }
        } catch (error) {
            console.log(error, "error in fcm token")
        }

    }
}

export const NotificationListener = () => {

    messaging().onNotificationOpenedApp(remoteMessage => {
        console.log(
          'Notification caused app to open from background state:',
          remoteMessage.notification,
        );
        navigation.navigate(remoteMessage.data.type);
      });

     // Check whether an initial notification is available
     messaging()
     .getInitialNotification()
     .then(remoteMessage => {
       if (remoteMessage) {
         console.log(
           'Notification caused app to open from quit state:',
           remoteMessage.notification,
         );
       }
     });

     messaging().onMessage(async remoteMessage => { 
        console.log("notification on froground state.....", remoteMessage);
     })
  
}