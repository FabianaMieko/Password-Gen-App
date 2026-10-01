import { useState } from 'react';
import { View, Pressable, Text, TextInput, Switch } from 'react-native';
import { TextInputPass } from '../TextInputPass/TextInputPass';
import { styles } from './ButtonPassStyles';
import generatePass from '../../services/passwordService';

import * as Clipboard from 'expo-clipboard';


export function ButtonPass(){
    const [ senha, setSenha ] = useState('');
    const [ tamanho, setTamanho ] = useState('10');
    const [ upper, setUpper ] = useState(true);
    const [ numbers, setNumbers ] = useState(true);
    const [ symbols, setSymbols ] = useState(true);

    function handleGenButton(){
        const length = parseInt(tamanho, 10);
        if(isNaN(length) || length < 1){
            return;
        }
        let senhaFinal = generatePass({ length, upper, numbers, symbols });
        setSenha(senhaFinal);
    }

    function handleCopyButton(){
        Clipboard.setStringAsync(senha);
    }

    return(
        <View>

            <TextInputPass pass={senha}/>

            <Text style={styles.label}>Tamanho da senha</Text>
            <TextInput
                style={styles.lengthInput}
                value={tamanho}
                onChangeText={(text) => setTamanho(text.replace(/[^0-9]/g, ''))}
                keyboardType='numeric'
                placeholder='10'
            />

            <View style={styles.optionRow}>
                <Text style={styles.label}>Letras maiúsculas</Text>
                <Switch value={upper} onValueChange={setUpper}/>
            </View>

            <View style={styles.optionRow}>
                <Text style={styles.label}>Números</Text>
                <Switch value={numbers} onValueChange={setNumbers}/>
            </View>

            <View style={styles.optionRow}>
                <Text style={styles.label}>Símbolos</Text>
                <Switch value={symbols} onValueChange={setSymbols}/>
            </View>

            <Pressable
                style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
                onPress={handleGenButton}
            >
                <Text style={styles.text}>🔑 Gerar senha 🔑</Text>
            </Pressable>

            <Pressable
                style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
                onPress={handleCopyButton}
            >
                <Text style={styles.text}>🗒️ Copiar 🗒️</Text>
            </Pressable>

        </View>
    )
}
