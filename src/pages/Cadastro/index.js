import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from './styles';
import { TextInput } from "react-native-web";
import { useState } from "react";

export default function Cadastro({ route, navigation}){

    const { pesquisa } = route.params;
    const [texto, setTexto] = useState('');
    const [texto2, setTexto2] = useState('');
    const [texto3, setTexto3] = useState('');
    const [texto4, setTexto4] = useState('');
    const [texto5, setTexto5] = useState('');
    const [texto6, setTexto6] = useState('');
    const [mensagem, setMensagem] = useState('');

    function validar(){
        if(texto == '' || texto2 == '' || texto3 == '' || texto4 == '' || texto5 == '' || texto6 == ''){
          setMensagem('Preencha todos os campos!');
        }else{
            navigation.navigate('Tela3', { search: texto})
        }
      }

    function voltar(){
        navigation.navigate('Home')
    }

    return(
        <View style={styles.container}>
                <Image
                    style={styles.imgLogin}
                    source={require('./../../../assets/imgUser.png')} 
                />
                <Text style={styles.textCad}>Cadastre-se</Text>
            <View style={styles.contLogin}>   
                    <TextInput 
                        style={styles.usuario}
                        value={texto}
                        onChangeText={(texto) => setTexto(texto)}
                        placeholder = "Nome completo"
                        placeholderTextColor="#FFFFFF"
                    />
                    <TextInput 
                        style={styles.usuario}
                        value={texto2}
                        onChangeText={(texto2) => setTexto2(texto2)}
                        placeholder = "Sua Idade"
                        placeholderTextColor="#FFFFFF"
                    />
                    <TextInput 
                        style={styles.usuario}
                        value={texto3}
                        onChangeText={(texto3) => setTexto3(texto3)}
                        placeholder = "Insira seu e-mail"
                        placeholderTextColor="#FFFFFF"
                    />
                    <TextInput 
                        style={styles.usuario}
                        value={texto4}
                        onChangeText={(texto4) => setTexto4(texto4)}
                        placeholder = "Confirme seu e-mail"
                        placeholderTextColor="#FFFFFF"
                    />
                    <TextInput 
                        style={styles.senha}
                        value={texto5}
                        onChangeText={(texto5) => setTexto5(texto5)}
                        placeholder = "Insira sua senha"
                        placeholderTextColor="#FFFFFF"
                    />
                    <TextInput 
                        style={styles.senha}
                        value={texto6}
                        onChangeText={(texto6) => setTexto6(texto6)}
                        placeholder = "Confirme sua senha"
                        placeholderTextColor="#FFFFFF"
                    />
                    <Text style={styles.textCampo}>{mensagem}</Text>
                    <TouchableOpacity
                        onPress={validar}
                        style={styles.login}>
                        <Text style={styles.textLogin}>
                            Cadastrar
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={voltar}
                        style={styles.cadastro}                        
                        >
                        <Text style={styles.textLogin}>
                            Voltar
                        </Text>
                    </TouchableOpacity>
            </View>
        </View>
    );
}