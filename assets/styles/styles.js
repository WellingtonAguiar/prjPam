import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: '100vh',
    background: "linear-gradient(to right bottom, #a07df0, #8f62c1, #794995, #60336d, #461f48)",
    overflow: 'hidden'
  },

  homeMenu: {
    marginTop: 300,
    width: "100vw",
    height: "50vw",
    justifyContent: "space-around",
    alignSelf: "center",
    textAlign: "center"
  },

  btnHome: {
    color: "#FFF",
    width: "60vw",
    height: 40,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    marginBottom: 20,
    lineHeight: 40,
    fontSize: 20,
    background: "rgba( 159, 81, 214, 0.90 )",
    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    backdropFilter: "blur( 16.5px )",
    borderRadius: 20,
    border: "1px solid rgba( 255, 255, 255, 0.18 )",
    "@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap')": true,
    fontFamily: "'Poppins', sans-serif" 

  },

  tituloHome: {
    color: "#FFF",
    fontSize: 25,
    fontWeight: 500,
    marginBottom: 50,
    "@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap')": true,
    fontFamily: "'Poppins', sans-serif" 
  },

  
  containerQualquerCoisa: {
    width: '100%',
    height: '100%',
    justifyContent: "center",
    alignItems: 'center'
  },

  qualquerCoisa: {
    color: 'white',
    fontSize: 30
  },

  shape1: {
    position: 'absolute',
    top: -180,
    left: -120,
    width: 400,
    height: 400,
    zIndex: -1,
    transform: [{ rotate: '90deg'}],
  },
  
  shape2: {
    position: 'absolute',
    bottom: -70,
    right: -120,
    width: 350,
    height: 350,
    transform: [{ rotate: '-100deg'}]
    },

    containerTxt: {
    width: "100%",
    height: '100vh',
    background: "#FFF",
    overflow: 'hidden'      
    },

   tituloTxt: {
     fontSize: 24,
     marginBottom: 50
   },

    ilustracao: {
      width: 200,
      height: 200,
      marginTop: -300,
      marginBottom: 50
    },

    descricao: {
      width: 300,
      textAlign: 'center',
      fontSize: 20
    }
});

export const stylesDevs = StyleSheet.create({
    container: {
    width: "100%",
    height: '100vh',
    background: "linear-gradient(to right bottom, #a07df0, #8f62c1, #794995, #60336d, #461f48)",
  },

  tituloDev: {
    width: '100%',
    fontWeight: 500,
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 30,
    marginTop: 30,
    color: "white"
  },

  containerDev: {
    width: '60vw',
    alignSelf: "center",
    alignItems: "center",
    padding: 30,
    background: "rgba( 255, 255, 255, 0.10 )",
    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    backdropFilter: "blur( 16.5px )",
    borderRadius: 20,
    border: "2px solid rgba( 255, 255, 255, 0.18 )",
    marginTop: 100
  },

  imgDev: {
    width: 120,
    height: 120,
    borderRadius: 120,
    border: "2px solid rgba( 255, 255, 255, 0.50 )",
  },

  nomeDev: {
    fontWeight: 500,
    color: 'white'
  },

  containerRedes: {
    width: 85,
    height: 30,
    flexDirection: "row",
    alignItems: "center",
  },

  redesSociais: {
    width: 25,
    height: 25,
    marginRight: 10,
    marginTop: 15,

  },
});
