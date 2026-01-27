import React, { useState } from 'react';
import { Text, TouchableOpacity, SafeAreaView, Alert } from 'react-native';
import InputField from '../components/InputField';
import SocialLogin from '../components/SocialLogin';
import {loginStyles} from '../styles/loginStyles';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';
import { FontAwesome,Feather } from '@expo/vector-icons';


type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

export default function LoginScreen() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation<LoginScreenNavigationProp>();

  const handleLogin = () => {
    if (!username || !password) {
      Alert.alert('Please enter both username/email and password');
      return;
    }
    Alert.alert('Login successful!');
  
  };

  return (
    <SafeAreaView style={loginStyles.container}>
      <Text style={loginStyles.title}> Welcome</Text>
      <Text style={loginStyles.title}> Back!</Text>

      <InputField
        icon="user"
        placeholder="Username or Email"
        secure={false}
        value={username}
        onChangeText={setUsername}
      />

      <InputField
        icon="lock"
        placeholder="Password"
        secure={!passwordVisible}
        toggleSecure={() => setPasswordVisible(!passwordVisible)}
        showEye={true}
        eyeVisible={passwordVisible}
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={loginStyles.forgotWrapper}>
        <Text style={loginStyles.forgotText}>Forgot Password?  </Text>
      </TouchableOpacity>

      <TouchableOpacity style={loginStyles.loginButton} onPress={handleLogin}>
        <Text style={loginStyles.loginText}>Login</Text>
      </TouchableOpacity>

      <Text style={loginStyles.ortext}>- OR Continue with -</Text>
      <SocialLogin />

      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={loginStyles.linkText}>Create An Account?<Text style={loginStyles.signupLink}> Sign Up</Text>
        </Text>
       
        
    </TouchableOpacity>
    </SafeAreaView>
  );
}