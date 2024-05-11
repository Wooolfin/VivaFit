import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from './styles';
import { TextInput } from "react-native-web";
import { useState } from "react";

export default function Home({ navigation }){

    const [busca, setBusca] = useState('');
    const [texto, setTextoema] = useState('');
    const [texto1, setTextosen] = useState('');
    const [mensagem, setMensagem] = useState('');

    function acessarCadastro(){
        navigation.navigate(
            'Cadastro',
            { pesquisa: busca }
        );

    }

    function validar(){
        if(texto == '' || texto1 == ''){
          setMensagem('Preencha todos os campos!');
        }else{
          navigation.navigate('Tela3', { search: texto})
        }
    }
    

    return(
        <View style={styles.container}>
                <Image
                    style={styles.imgLogin}
                    source={require('./../../../assets/imgLogo.png')} 
                />
            <View style={styles.contLogin}>
                    <TextInput 
                        // value={busca}
                        // onChangeText={(text) => setBusca(text)}
                        value={texto}
                        onChangeText={(texto) => setTextoema(texto)}
                        style={styles.usuario}
                        placeholder = "E-mail"
                        placeholderTextColor="#FFFFFF"
                    />
                    <TextInput 
                        value={texto1}
                        onChangeText={(texto1) => setTextosen(texto1)}
                        style={styles.senha}
                        placeholder = "Senha"
                        placeholderTextColor="#FFFFFF"
                    />
                    <Text style={styles.textCampo}>{mensagem}</Text>
                    <TouchableOpacity
                        onPress={validar}
                        style={styles.login}>
                        <Text style={styles.textLogin}>
                            Entrar
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={acessarCadastro} 
                        style={styles.cadastro}>
                        <Text style={styles.textLogin}>
                            Cadastre-se
                        </Text>
                    </TouchableOpacity>
            </View>
        </View>
    );
}

//*******************Busca entre telas */
/* <Text style={styles.title}>
                Busca
            </Text>
            <TextInput
                value={busca}
                onChangeText={(text) => setBusca(text)}
                style={styles.input}
            />
            <TouchableOpacity
                onPress={acessarCadastro}
                style={styles.button}
                >
                <Text>
                    Buscar
                </Text>
            </TouchableOpacity> */