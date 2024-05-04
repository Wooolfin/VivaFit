import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from './styles';
import { TextInput } from "react-native-web";
import { useState } from "react";

export default function Home({ navigation }){

    const [busca, setBusca] = useState('');
    function acessarCadastro(){
        navigation.navigate(
            'Cadastro',
            { pesquisa: busca }
        );

    }
    return(
        <View style={styles.container}>
                <Image
                    style={styles.imgLogin}
                    source={require('./../../../assets/imgLogo.png')} 
                />
            <View style={styles.contLogin}>
                    <TextInput 
                        value={busca}
                        onChangeText={(text) => setBusca(text)}
                        style={styles.usuario}
                        placeholder = "E-mail"
                        placeholderTextColor="#FFFFFF"
                    />
                    <TextInput 
                        style={styles.senha}
                        placeholder = "Senha"
                        placeholderTextColor="#FFFFFF"
                    />
                    <TouchableOpacity
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