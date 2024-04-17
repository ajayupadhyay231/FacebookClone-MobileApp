import { View } from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
import FontAwesome6 from 'react-native-vector-icons/dist/FontAwesome6';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import Feather from 'react-native-vector-icons/dist/Feather';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import EvilIcons from 'react-native-vector-icons/dist/EvilIcons';
import Octicons from 'react-native-vector-icons/dist/Octicons';
import Fontisto from 'react-native-vector-icons/dist/Fontisto';





// const iconComponents = {
//   'MaterialCommunityIcons': MaterialCommunityIcons,
//   'FontAwesome': FontAwesome,
//   'FontAwesome5': FontAwesome5,
//   'Feather': Feather,
//   'AntDesign': AntDesign,
//   'Entypo': Entypo,
//   'Ionicons': Ionicons,
//   'EvilIcons': EvilIcons,
//   'Octicons': Octicons,
//   'Fontisto': Fontisto,
//   'MaterialIcons': MaterialIcons
// };
// this is same as below...


const iconComponents = {
  MaterialCommunityIcons,
  FontAwesome,
  FontAwesome5,
  FontAwesome6,
  Feather,
  AntDesign,
  Entypo,
  Ionicons,
  EvilIcons,
  Octicons,
  Fontisto,
  MaterialIcons
};



const VectorIcon = props => {
  const { name, size = 30, color, type, onPress, style } = props;
  
  // in javascript iconComponents["key"] is same as iconcomponents.key so both will point to same refernece  
 // fisrt one is done just to pass a key as a varaible...
  const IconComponent = iconComponents[type] || MaterialIcons; // Default to MaterialIcons if type is not found

  return (
    <View style={style}>
      <IconComponent
        onPress={onPress}
        name={name}
        size={size}
        color={color}
      />
    </View>
  );
};

export default VectorIcon;
