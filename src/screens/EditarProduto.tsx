import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { StatusBar, StyleSheet, TouchableOpacity, View } from "react-native";
import Head from "../components/Head";
import { Text } from "react-native-reanimated/lib/typescript/Animated";
import { TextInput } from "react-native-gesture-handler";

interface Produto {
    id: number;
    nome: string;
    ingredientes: string;
    preco: number;
    imagem?: string;
}

    const EditarProduto: React.FC = () => {
        const [nome, setNome] = useState<string>('');
        const [preco, setPreco] = useState<string>('0');
        const [ingredientes, setIngredientes] = useState<string>('');
        const [imagem, setImagem] = useState<any>('');

        const navigation = useNavigation();
        const route = useRoute();

        useEffect(() => {
            const { produto }  = route.params;

            setNome(produto.nome);
            setPreco(produto.preco);
            setIngredientes(produto.ingredientes);
            setImagem(produto.imagem);

        } )


        return (
            <View style={styles.container}>
                <StatusBar backgroundColor= "red" barStyle="light-content"/>
                <Head />

                <View style={styles.header}>
                    <TextInput 
                        style={styles.header}
                        value= {nome}
                        onChangeText={setNome}
                    />
                    
                    <TextInput 
                        style={styles.header}
                        value= {nome}
                        onChangeText={setPreco}
                        keyboardType="numeric"
                    />
                    
                    <TextInput 
                        style={styles.header}
                        value= {ingredientes}
                        onChangeText={setIngredientes}
                        multiline
                    />

                    <TouchableOpacity style={styles.button}
                    onPress={() => navigation.goBack()}>
                        <Text style = {styles.buttonText}>Voltar</Text>
                    </TouchableOpacity>

                    <View style= {styles.manuList}></View>
                </View>
            </View>
        )
    };

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    header: {
        backgroundColor: 'red',
        paddingVertical: 10,
        alignItems: 'center',
    },

    form: {
        padding: 10,
        backgroundColor: '#f0f0f0',
        marginBottom: 10
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 10
    },

    imageButton: {
        height: 40,
        backgroundColor: 'red', 
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10
    },

    imageButtonText: {
        color: 'white',
        fontWeight: 'bold'
    },

    imagemSelecionada: {
        width: 200,
        height:200,
        resizeMode: 'cover',
        borderRadius: 5,
        marginBottom: 10,
    },

    alinhamentoImagemSelecionada: {
        alignItems: "center"
    },

    button: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center'
    },

    buttonText: {
        color:'white',
        fontWeight: 'bold'
    },

    manuList: {
        flexGrow: 1
    },



});

export default EditarProduto;
