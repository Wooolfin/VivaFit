import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from './styles';
import { TextInput } from "react-native-web";
import { useState } from "react";

export default function Cadastro({ route, navigation}){
    const { pesquisa } = route.params;
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
                        placeholder = "Nome completo"
                        placeholderTextColor="#FFFFFF"
                    />
                    <TextInput 
                        style={styles.usuario}
                        placeholder = "Sua Idade"
                        placeholderTextColor="#FFFFFF"
                    />
                    <TextInput 
                        style={styles.usuario}
                        placeholder = "Insira seu e-mail"
                        placeholderTextColor="#FFFFFF"
                    />
                    <TextInput 
                        style={styles.usuario}
                        placeholder = "Confirme seu e-mail"
                        placeholderTextColor="#FFFFFF"
                    />
                    <TextInput 
                        style={styles.senha}
                        placeholder = "Insira sua senha"
                        placeholderTextColor="#FFFFFF"
                    />
                    <TextInput 
                        style={styles.senha}
                        placeholder = "Confirme sua senha"
                        placeholderTextColor="#FFFFFF"
                    />
                    <TouchableOpacity
                        style={styles.login}>
                        <Text style={styles.textLogin}>
                            Cadastrar
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.cadastro}>
                        <Text style={styles.textLogin}>
                            Voltar
                        </Text>
                    </TouchableOpacity>
            </View>
        </View>
    );
}