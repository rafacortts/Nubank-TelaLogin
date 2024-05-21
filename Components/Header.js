import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image
} from "react-native";





export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://nubank.com.br/images-cms/1650479255-woman-holding-card-smiling-2-xs-3x.jpg",
        }}
        style={styles.imageBackground}
      >
        <TouchableOpacity style={styles.buttonPais}>
          <Text style={styles.buttonText1}>Pais</Text>
        </TouchableOpacity>

            <Image source={{uri: './img/Nubank_logo_Branco.svg.png'}}
            
            style={styles.logo}
      
            
            />

        <View style={styles.loginContainer}>
          <Text style={styles.title}>
            Um mundo financeiro sem complexidades{" "}
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Começar</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loginContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 500,
  },
  title: {
    fontSize: 32,
    color: "#fff",
    marginBottom: 20,
    textAlign: "center",
    paddingHorizontal: 20,
    fontFamily: "Roboto",
  },
  button: {
    width: "80%",
    height: 50,
    backgroundColor: "#8A05BE",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "500",
  },
  Cadastro: {
    color: "#FFF",
    marginTop: 10,
    textDecorationLine: "underline",
    fontFamily: "Roboto",
    fontSize: 16,
  },
  buttonPais: {
    position: "absolute",
    top: 20, 
    right: 20, 
    width: "20%",
    height: 30,
    backgroundColor: "",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    border:'1px solid GRAY'
  },
  buttonText1: {
    color: "#FFF",
    fontSize: 16,
  },
  logo:{
    position: "absolute",
    top: 20, 
    left: 20,
    color :'#FFF',
    fontSize:30,
    height: 30,
    width: 50
  }

});
