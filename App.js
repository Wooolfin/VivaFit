import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/pages/Home';
import Cadastro from './src/pages/Cadastro'; 
import Tela3 from './src/pages/Tela3';

const Stack = createStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen 
        name="Home" 
        component={Home}
        options={{
          headerShown: false
         }}
        />

      <Stack.Screen 
       name="Cadastro"
       component={Cadastro} 
       options={{
        headerShown: false
       }}
       />
       
       <Stack.Screen 
       name="Tela3"
       component={Tela3} 
       options={{
        headerShown: false
       }}
       />
    </Stack.Navigator>
   </NavigationContainer>
  );
}
