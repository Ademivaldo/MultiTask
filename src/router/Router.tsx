import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


import Home from '../screens/Home';
import Velocidade_Media from '../screens/CalcVelocidadeMedia';
import calcResicao from '../screens/Calc_resicao'
import Calc_salario_hr from '../screens/Calc_salario_hr'
import Calc_salario_liquidoo from '../screens/Calc_salario_liquidoo'
import CalcAceleracaoMedia from '../screens/CalcAceleracaoMedia'
import Conversor_Vid_Audio from '../screens/Conversor_Vid_Audio'
import CriarLink from '../screens/CriarLink'
import CalcHora from '../screens/CalcHora';
import CalcFinanceiro from '../screens/CalcFinanceiro';



const Stack = createStackNavigator();
export function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'>

        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Velocidade média" component={Velocidade_Media} />
        <Stack.Screen name="Resição" component={calcResicao} />
        <Stack.Screen name="Salario hora" component={Calc_salario_hr} />
        <Stack.Screen name="Salario Liquido" component={Calc_salario_liquidoo} />
        <Stack.Screen name="Aceleracão" component={CalcAceleracaoMedia} />
        <Stack.Screen name="Converter Vid_Audio" component={Conversor_Vid_Audio} />
        <Stack.Screen name="Localizar" component={CriarLink} />
        <Stack.Screen name="Calcular Hora" component={CalcHora} />
        <Stack.Screen name="Calculadora financeira" component={CalcFinanceiro} />
        
        

      </Stack.Navigator>
    </NavigationContainer>
  );
}