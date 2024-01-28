import { StatusBar } from 'expo-status-bar';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

import MenuBtn from '../components/BoxButtonMenu';


export default function Home() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.menu}>
            {/* <View style={{ alignSelf: "center",flex: 0.2, alignItems: "center", justifyContent: "center"}}>
                        <Image source={image} style={{ }}></Image>
                    </View> */}
                <View style={styles.scrollView}>
                    <ScrollView>
                        <MenuBtn icon="speedometer" name='Velocidade média' targetRoute={"Velocidade média"} />
                        <MenuBtn icon="video" name='Video ->  audio' targetRoute={"Converter Vid_Audio"} />
                        <MenuBtn icon="crosshairs-gps" name='link de localização' targetRoute={"Localizar"} />
                        <MenuBtn icon="calculator" name='Calculadora de horas' targetRoute={"Calcular Hora"} />
                        <MenuBtn icon="speedometer" name='Aceleração  média' targetRoute={"Aceleracão"} />
                        <MenuBtn icon="calculator" name='Salario p/h' targetRoute={"Salario hora"} />
                        <MenuBtn icon="calculator" name='Salario liquido' targetRoute={"Salario Liquido"} />
                        <MenuBtn icon="calculator" name='Calculadora de recisão' targetRoute={"Resição"} />






                    </ScrollView>
                  
                </View>
               
            </View>
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',
    },
    menu: {
        flex: 1,
    },
    scrollView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
