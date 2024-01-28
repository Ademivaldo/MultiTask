import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Keyboard, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button, Checkbox, Divider, Menu, TextInput } from 'react-native-paper';

export default function Velocidade_Media() {
  const [velocidade, setVelocidade] = useState("") //resultado
  const [distancia, setdistancia] = useState("") //input
  const [tempo, setTempo] = useState("")
  const [tempoMin, setTempoMin] = useState("")      //input
  const [checked, setChecked] = useState(false)
  const [resultado, setResutado] = useState('')

  const definirModelo = () => {
    if (velocidade && distancia) {
      let tempoEmHoras = parseInt(distancia) / parseInt(velocidade);

      let horas = Math.floor(tempoEmHoras);

      let minutos = (tempoEmHoras - horas) * 60;

      if(horas == 0){
        setResutado(`Um total ${minutos.toFixed(1)}  minutos. ≈`)
        return
      }

      if (minutos == 0) {
        if(horas == 1){
          setResutado(`Um total de ${horas} hora.`)
          return
        }
        setResutado(`Um total de ${horas} horas.`)
        return
      }

      if (minutos.toFixed() != '60') {
        setResutado(`Um total de ${horas} horas e  ${minutos.toFixed(2)}  minutos. ≈`)
        return
      }
    
      setResutado(`Um total de ${horas} horas e  ${minutos.toFixed()}  minutos. ≈`)

    } else if (velocidade && tempo || velocidade && tempoMin) {
      //distacia  = tempo * velocidade
      let tempoHr = parseInt(tempo)
      let tempoMinuto = parseInt(tempoMin)
      if (!tempoMinuto) {
        const distancia = parseInt(velocidade) * tempoHr
        setResutado(`Totalizando ${distancia.toFixed(2)} km. ≈ `)
        return
      }
      const distancia = parseInt(velocidade) * tempoHr
      let resTempoMinuto = tempoMinuto / 60
      let res2 = resTempoMinuto * parseInt(velocidade)
      res2 += distancia
      setResutado(`Totalizando ${res2.toFixed(2)} km. ≈`)

    } else if (tempo && distancia || tempoMin && distancia) {

      //velocidade =   distancia/tempo
      let tempoMinuto = parseInt(tempoMin)
      if (tempoMinuto == 0 || !tempoMinuto || tempoMin == '00') {
        let resTempo = parseInt(distancia) / parseInt(tempo)
        setResutado(`Totalizando ${resTempo.toFixed(2)} km/h. ≈`)
      } else {
        if (!tempo) {
          let resTempo = tempoMinuto / 60
          const velocidade1 = parseInt(distancia) / resTempo
          setResutado(`Totalizando ${velocidade1} km/h. ≈`)

          return;
        }
        let resTempo = tempoMinuto / 60 + parseInt(tempo)
        const velocidade1 = parseInt(distancia) / resTempo
        setResutado(`Totalizando ${velocidade1.toFixed(2)} km/h. ≈`)

      }
    } 
  }

  function verificação() {
    let a1 = tempo
    let a2 = tempoMin
    let a3 = velocidade
    let a4 = distancia

    if (a1 && a3 && !a4 || a2 && a3 && !a4 || a1 && a2 && a3 && !a4) {
      //console.log(1)
      return false
    } else if (a1 && a4 && !a3 || a2 && a4 && !a3 || a1 && a2 && a4 && !a3) {
      //console.log(2)
      return false
    } else if (a3 && a4 && !a1 && !a2) {
      //console.log(3)
      return false
    } else {
      //console.log(5)
      return true
    }
  }


  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={{ gap: 1, padding: '2%' }}>

          <Text style={{ textAlign: 'center', color: 'red' }}>Levamos em consideração a medida padrão de km/h</Text>
          <Text style={{ textAlign: 'center', color: 'red' }}>linha 1 distancia em km</Text>
          <Text style={{ textAlign: 'center', color: 'red' }}>linha 3 velocidade em km/h</Text>
        </View>

        <View style={styles.inputs}>

          <TextInput style={{ width: "50%" }} value={distancia} onChangeText={(tx) => { setdistancia(tx) }}
            label={"Distância "} keyboardType='numeric' />

          <View style={{ flexDirection: 'row', gap: 3 }}>
            <TextInput style={{ width: "50%" }} value={tempo} onChangeText={(tx) => { setTempo(tx) }}
              label={"hora"} keyboardType='numeric' />
            <TextInput style={{ width: "50%" }} value={tempoMin} onChangeText={(tx) => { setTempoMin(tx) }}
              label={"min"} keyboardType='numeric' />

          </View>
          <TextInput style={{ width: "50%" }} value={velocidade} onChangeText={(tx) => { setVelocidade(tx) }}
            label={"Velocidade"} keyboardType='numeric' />

        </View>

        <Button style={{ marginVertical: '15%' }} disabled={verificação()} onPress={() => { 
          definirModelo() 
          Keyboard.dismiss()
          }}>Calcular</Button>
        {/*        
         */}

        {resultado ? <>

          <View>
            {/* <Checkbox
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
              }} />
            <Checkbox
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
              }} />
            <Checkbox
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
              }} />
            <Checkbox
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
              }} /> */}
          </View>

          <View style={{ alignSelf: "center", marginVertical: '6%' }}>
            <Text style={{fontSize: 20, fontWeight:"300", fontStyle: 'italic'}}>{resultado}</Text>
          </View>
        </> : <></>}



      </View>



      <StatusBar style="auto" />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inputs: {
    marginTop: '25%',
    alignSelf: 'center',
    alignItems: 'center',
    gap: 15,
    width: '60%'
  }
});
