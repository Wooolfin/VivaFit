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
    },
    senha:{
        borderBottomWidth:1,
        borderBottomColor: '#FFFFFF',
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
        
    },
    contLogin:{
        marginTop: 180,
        justifyContent:'flex-end',
        backgroundColor:'#37414B',
        padding: 48,
        gap: 24,
        borderRadius: 30,

    }
});