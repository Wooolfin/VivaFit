import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        backgroundColor: '#1C2126',
        
    },
    usuario:{
        borderBottomWidth:1,
        borderBottomColor: '#FFFFFF',
        color: '#FFF'
    },
    senha:{
        borderBottomWidth:1,
        borderBottomColor: '#FFFFFF',
        color: '#FFF'
    },
    login:{
        paddingHorizontal: 16,
        paddingVertical:8,
        backgroundColor: '#ccc',
        borderRadius: 30,
        alignItems:'center',
        backgroundColor: '#52FFEA',
        
    },
    cadastro:{
        paddingHorizontal: 16,
        paddingVertical:8,
        backgroundColor: '#ccc',
        borderRadius: 30,
        alignItems:'center',

    },
    title:{
        fontSize: 14
    },
    input:{
        padding: 8,
        borderRadius: 16,
        borderWidth: 2,
        marginBottom: 16,
        marginTop: 8    

    },
    imgLogin:{
        justifyContent:'flex-start',
        // marginTop: 48,
    },
    contLogin:{
        justifyContent:'flex-end',
        backgroundColor:'#37414B',
        padding: 48,
        gap: 18,
        borderRadius: 30,
    },
    textCad:{
        fontSize: 36,
        color: '#FFF'
    },
    textLogin:{
        fontSize: 16,
        color: '#FFF'
    },
    textCampo:{
        fontSize: 12,
        color: '#FFF',
        backgroundColor:'#FF0000',
        textAlign: 'center',
        borderRadius: 30,
        fontWeight: 'bold'
    }
});