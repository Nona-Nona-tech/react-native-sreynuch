import { StyleSheet } from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
    height: '100%',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 15,
    paddingHorizontal: 10,
    marginBottom: 15,
    width: '99%',
    alignSelf: 'center',
  },
  icon: {
    marginRight: 16,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 14
  },
  eyeIcon: {
    padding: 10,
  },
  forgotWrapper: {
    alignItems: 'flex-end',
    marginBottom: 15,
  },
  forgotText: {
    color: 'red',
    fontWeight: 'bold',
  },
  loginButton: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 15,
    marginBottom: 10,
    width: '99%',
  },
  loginText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  
  },
  or: {
    textAlign: 'center',
    marginBottom: 20,
    
  },
  socialWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 30,
    marginBottom: 15,
  },
  signup: {
    textAlign: 'center',
  },
  signupLink: {
    color: 'red',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  circleIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
});