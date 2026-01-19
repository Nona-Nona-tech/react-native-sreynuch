import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
  },
  eyeIcon: {
    padding: 5,
  },
  forgotWrapper: {
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  forgotText: {
    color: 'red',
  },
  loginButton: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
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
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  signup: {
    textAlign: 'center',
  },
  signupLink: {
    color: 'red',
    fontWeight: 'bold',
  },
});