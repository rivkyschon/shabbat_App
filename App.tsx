import { useEffect } from "react";
import Home from "./screens/Home";
import messaging from '@react-native-firebase/messaging'
import { Alert, AppRegistry, Text, View } from "react-native";
import ProgressBar from "./components/ProgressBar";
import Uploading from "./components/Uploading";

messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
});

AppRegistry.registerComponent('app', () => App);

export default function App(){
  useEffect(() => {
    pushNotification()

    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, [])

async function pushNotification(){
  let fcmToken = await messaging().getToken();
  if(fcmToken){
    console.log("token",fcmToken)
  }

}
return <Home />
}