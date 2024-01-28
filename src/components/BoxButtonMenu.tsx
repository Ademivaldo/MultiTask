import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native'

interface boxBtn{
    icon: string,
    name: string,
    targetRoute: string
}



export default function BoxButtonMenu({icon,name,targetRoute }: boxBtn) {
    const navigation =  useNavigation()
    const handlePress = () => {
        //@ts-ignore
        navigation.navigate(targetRoute); // Substitua 'Home' pela rota desejada
      };

  return (
   <View style={styles.container}>
     <Button icon={icon}  textColor={"#000"} mode="outlined" onPress={handlePress}
     style={{borderRadius: 10}}>
        {name}  </Button>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent:'center',
    width: RFPercentage(40),
    height: RFPercentage(10),
  },
  
});
