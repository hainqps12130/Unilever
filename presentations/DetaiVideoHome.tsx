// import React from 'react';
// import {View,Text} from 'react-native';
// import { FlatList } from 'react-native-gesture-handler';
// import Video from 'react-native-video-player';
// const DATA =[
//   {id:1,name:'https://www.youtube.com/watch?v=WSJHAsnot54',name_1:'thao'}
// ]
// const category =()=>{
//  return(
//    <View>
//      <FlatList 
//        data={DATA}
//        keyExtractor={item => item.id.toString()}
//        renderItem={({item})=>{
//          return(
//            <View>
//              <Text>{item.name_1}</Text>
//              <Video video={{uri:item.name}}
//              autoplay={false}
//              rate={1.0}
//                 volume={1.0}
//                 isMuted={false}
//                 resizeMode="cover"
//                 shouldPlay
//                 isLooping
//                 style={{ width: 300, height: 300 }}
          
//              />
//             </View>
//          )
//        }}
//        />
//    </View>
//  )
// }
// export default category;
import React from 'react';
import {View,Text} from 'react-native';

const category =()=>{
 return(
   <View>
      <Text>Thai111111</Text> 
   </View>
 )
}
export default category;