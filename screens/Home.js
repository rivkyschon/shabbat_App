import { View, Text, Touchable, TouchableOpacity } from "react-native";
import EmptyState from "../components/EmptyState";
import ProgressBar from "../components/ProgressBar";
import Svg, { Rect, Image } from 'react-native-svg';
import  Uploading  from '../components/Uploading'
// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {useState} from 'react'

export default function Home(){
    const [pickerResponse, setPickerResponse] = useState(null);
    const [image, setImage] = useState("")
    const [video, setVideo] = useState("")

//     // const result = await launchCamera(options?);
    // const options = {
    //     mediaType: 'photo',
    //     quality: 0.2,
    //     maxWidth: 300,
    //     maxHeight: 400,
    //     includeBase64: false,
    //   }; 

//     const pickImage = async () => {
//     try {
//       const response = await launchImageLibrary(options);
//       console.log('response:: ', response);
//       if (!response.didCancel) {
//         setImage(response.assets[0].uri);
//         // upload the image
//       }
//     } catch (error) {
//       console.error('Image picking error::', error);
//       // Handle the error (e.g., show an alert or log it)
//     }
//   };
    // async function pickImage(){
    //     let result = await launchImageLibrary(
    //         {
    //             mediaType: 'photo',
    //             quality: 0.2,
    //             maxWidth: 300,
    //             maxHeight: 400,
    //             includeBase64: false,
    //         }
    //     );

    //     if(!result.canceled){
    //         setImage(result.assets[0].uri);
    //         //upload the image 
    //     }
    // }

    
return  (
    <View style={{flex: 1, alignItems: "center", justifyContent: "center" }}>
        
        <Uploading image={undefined} video={undefined} progress={undefined} />
        {/* <Text style={{fontSize:32 }} > HOME </Text> */}
        <ProgressBar progress={60} />
        
        <TouchableOpacity
            // onPress={() => launchImageLibrary({mediaType: 'photo'}, setPickerResponse)}
            style={{
                position: "absolute",
                bottom: 90,
                right: 30,
                width: 44,
                height: 44,
                backgroundColor: "black",
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 25,
            }}
        >
            <Text style={{color:'white'}}> Image </Text>
        </TouchableOpacity>

        <TouchableOpacity
            // onPress={pickVideo}
            style={{
                position: "absolute",
                bottom: 150,
                right: 30,
                width: 44,
                height: 44,
                backgroundColor: "black",
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 25,
            }}
        >
            <Text style={{color:'white'}}> Video </Text>
        </TouchableOpacity>
    </View>
    )
}