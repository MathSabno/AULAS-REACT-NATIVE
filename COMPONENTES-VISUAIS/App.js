import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput, ActivityIndicator, Pressable, Button, Image, ImageBackground, ScrollView} from 'react-native';

const MENSAGEM_EMAIL = "Digite o seu e-mail.";
const MENSAGEM_SENHA = "Digite a sua senha.";
const MENSAGEM_NOME = "Digite o seu nome.";
const MENSAGEM_SOBRENOME = "Digite seu sobrenome.";
const MENSAGEM_CEP = "Digite seu cep."
const MENSAGEM_TEL = "Digite seu telefone."
const MENSAGEM_CPF = "Digite seu cpf."
const MENSAGEM_CNPJ = "Digite seu CNPJ"

const NOME = "Matheus"
const SOBRENOME = "Oliveira"
const CEP = "04777-079"
const TEL = "11 9 1234-5678"
const CPF = "589.554.998-51"
const CNPJ = "00.000.000/0001-00"
const EMAIL = "eve.holt@reqres.in";
const SENHA = "cityslicka";

const handlePress = () => {
    alert('Você pressionou o botão!');
};

const ValidateLogin = async (email, senha, status, activity) => {
    if (email.trim().length === 0) {
        alert(MENSAGEM_EMAIL);
        return
    }

    if (senha.trim().length === 0) {
        alert(MENSAGEM_SENHA);
        return;
    }

    activity(true);

    let usuario = {
        "email": email,
        "password": senha
    };

    await fetch('https://reqres.in/api/login', {
        method: "POST",
        headers: {
            Accept: "application/json",
            'Content-Type': "application/json"
        },
        body: JSON.stringify(usuario)
    }).then(response => {
        if (response.status === 200) {
            response.text().then(function (result) {
                status("Usuário autenticado com sucesso.");
                console.log(result);
            });
        } else {
            status(`Usuário ou senha inválidos => código: ${response.status}`);
        }
        activity(false)
    }).catch(() => status("Não foi possivel executar o login."));
}

export default () => {
    const [user, setUser] = useState('eve.holt@reqres.in')
    const [password, setPassword] = useState('cityslicka')
    const [status, setStatus] = useState('')
    const [activity, setActivity] = useState(false)

    return (
        <ScrollView style={Estilos.container}>
            <ImageBackground source={require("./SAOPAULO.png")}
                     resizeMode="cover" style={Estilos.appImage} imageStyle={{opacity: 0.3}}>
              <Text style={Estilos.paragraph}>SÃO PAULO FUTEBOL CLUBE</Text>
              <Image style={Estilos.logo} source={require('./spfc.png')} />

              <Text style={Estilos.loginLabel}>Nome:</Text>
              <TextInput
                  autoCorrect={false}
                  placeholder={MENSAGEM_NOME}
                  placeholderTextColor="grey"
                  style={Estilos.textInput}
                  clearButtonMode="always"
                  onChangeText={(value) => setUser(value)}
              />

              <Text style={Estilos.loginLabel}>Sobrenome:</Text>
              <TextInput
                  autoCorrect={false}
                  placeholder={MENSAGEM_SOBRENOME}
                  placeholderTextColor="grey"
                  style={Estilos.textInput}
                  clearButtonMode="always"
                  onChangeText={(value) => setUser(value)}
              />

              <Text style={Estilos.loginLabel}>Tel:</Text>
              <TextInput
                  autoCorrect={false}
                  placeholder={MENSAGEM_TEL}
                  placeholderTextColor="grey"
                  style={Estilos.textInput}
                  clearButtonMode="always"
                  defaultValue={TEL}
                  onChangeText={(value) => setUser(value)}
              />

              <Text style={Estilos.loginLabel}>CEP:</Text>
              <TextInput
                  autoCorrect={false}
                  placeholder={MENSAGEM_CEP}
                  placeholderTextColor="grey"
                  style={Estilos.textInput}
                  clearButtonMode="always"
                  defaultValue={CEP}
                  onChangeText={(value) => setUser(value)}
              />

              <Text style={Estilos.loginLabel}>CPF:</Text>
              <TextInput
                  autoCorrect={false}
                  placeholder={MENSAGEM_CPF}
                  placeholderTextColor="grey"
                  style={Estilos.textInput}
                  clearButtonMode="always"
                  defaultValue={CPF}
                  onChangeText={(value) => setUser(value)}
              />

              <Text style={Estilos.loginLabel}>CNPJ:</Text>
              <TextInput
                  autoCorrect={false}
                  placeholder={MENSAGEM_CNPJ}
                  placeholderTextColor="grey"
                  style={Estilos.textInput}
                  clearButtonMode="always"
                  defaultValue={CNPJ}
                  onChangeText={(value) => setUser(value)}
              />
            

              <Text style={Estilos.loginLabel}>E-mail:</Text>
              <TextInput
                  autoCorrect={false}
                  placeholder={MENSAGEM_EMAIL}
                  placeholderTextColor="grey"
                  style={Estilos.textInput}
                  clearButtonMode="always"
                  defaultValue={EMAIL}
                  onChangeText={(value) => setUser(value)}
              />
              <Text style={Estilos.loginLabel}>Senha:</Text>
              <TextInput
                  autoCorrect={false}
                  placeholder={MENSAGEM_SENHA}
                  placeholderTextColor="grey"
                  secureTextEntry={true}
                  style={Estilos.textInput}
                  clearButtonMode="always"
                  defaultValue={SENHA}
                  onChangeText={(value) => setPassword(value)}
              />
              
              <View style={Estilos.button}>
                <Pressable style={Estilos.button} onPress={handlePress}>
                  <Text style={Estilos.paragraph, {color: 'black'}}>OK</Text>
                </Pressable>
              </View>
              <View style={{marginTop: 10}}>
                  <ActivityIndicator size="large" animating={activity}/>
              </View>
              <Text style={Estilos.loginLabel}>{status}</Text>
            </ImageBackground>
        </ScrollView>
    )
};

const Estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#202020'
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    loginLabel: {
        color: 'white',
        marginTop: 10,
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    button: {
        fontSize: 25,
        fontWeight: 'bold',
        width: 100,
        height: 40,
        marginTop: 20,
        textAlign: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
    },
    textInput: {
        backgroundColor: 'white',
        color: 'black',
        fontSize: 15,
        height: 40,
        width: 250,
        marginTop: 20,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        alignSelf: 'center'
    },
    logo: {
      width: 250,
      height: 100,
      alignSelf: 'center'
    },
    appImage: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: 'black'
    }
});
