import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    button:{
        marginTop: 20,
        marginBottom: 10,
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#009de0'

    },
    buttonPressed:{
        backgroundColor: '#005f8a'
    },
    text:{
        fontSize:20,
        color:'#fff'
    },
    label:{
        fontSize: 16,
        color: '#fff'
    },
    lengthInput:{
        width: '100%',
        backgroundColor: '#fff',
        color: '#000',
        fontSize: 18,
        height: 44,
        borderWidth: 2,
        borderColor: '#0098f0',
        borderRadius: 5,
        padding: 10,
        textAlign: 'center',
        marginTop: 5,
        marginBottom: 10
    },
    optionRow:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5
    }
})
