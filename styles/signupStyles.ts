import { StyleSheet } from "react-native";
export const signupStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    paddingHorizontal: 20,
    marginBottom: 15,
    width: "99%",
    backgroundColor: "#f9f9f9",
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 16,
    color: "#000",
  },
  icon: {
    marginRight: 15,
    justifyContent: "center",
    alignItems: "center", 
  },
  eyeIcon: {
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
   
  },
  SignUpbutton: {
    backgroundColor: "red",
    paddingVertical: 12,
    borderRadius: 20,
    width: "99%",
    alignItems: "center",
    marginTop: 10,
    padding: 15,
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  orText: {
    marginVertical: 15,
    fontSize: 14,
    color: "black",
    fontWeight: "bold",
  },
  linkText:{
    textAlign: 'center',
    marginTop: 10,
    color: 'black',
    fontWeight: 'bold',
   
  },
  linkHighlight:{
    color: 'red',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },

});