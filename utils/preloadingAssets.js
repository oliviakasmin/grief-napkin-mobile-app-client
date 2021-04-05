/**
 * For better user experience, certain assets are required to downloaded and cached even before the app starts.
 * Expo's AppLoading api allows us to do perform certain async operations before the app begins.
 * We leverage the same api to download the assets and cache them.
 */

 import {Font} from 'expo';
 import {Asset} from 'expo-asset';
 import {Image} from 'react-native';
 /**
  * NOTE: Should the image locations be relative to this file or App.js where we are performing these operations? 
  * Here I was writing thier locations relative to App.js, because it will call the cacheImages and cacheFonts functions and should ideally provide the images. 
  * I was using default argument behavior of functions to provide  them myself, on App.js's behalf.  
  * 
  * However, that's now how it works. It seems that the address of assets should be relative to this file.
  * TODO: Got to understand how this works. 
  * Initial Impression: Will certainly behave differently depending on where i am passing require('location') or simply 'location' as a string in the array
  * because a require('location') will return a specific resource to caller, which is present in asset. 
  * while a simple location is a string , which the caller will use to load a resource at that class.
  * */
   const requiredImagesForCaching = [
 ];
 
 const requiredFontsForCaching = [
 
 ] 
 
 export const cacheImages =  (images = requiredImagesForCaching) => {
     return images.map(image => {
       if(typeof image === 'string'){
         return Image.prefetch(image);
       }
       else{
         return Asset.fromModule(image).downloadAsync();
       }
     });
   }
   
 export const cacheFonts = (fonts = requiredFontsForCaching) => {
     return fonts.map(font => Font.loadAsync(font));
 }