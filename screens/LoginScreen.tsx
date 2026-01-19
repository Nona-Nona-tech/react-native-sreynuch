import { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { FontAwesome, Feather } from '@expo/vector-icons';
import InputField from '../components/InputField';
import SocialLogin from '../components/SocialLogin';
import styles from '../styles/loginStyles';

export default function LoginScreen() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome Back!</Text>

      <InputField icon="user" placeholder="Username or Email" secure={false} />

      <InputField
        icon="lock"
        placeholder="Password"
        secure={!passwordVisible}
        toggleSecure={() => setPasswordVisible(!passwordVisible)}
        showEye={true}
        eyeVisible={passwordVisible}
      />

      <TouchableOpacity style={styles.forgotWrapper}>
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.or}>- OR Continue with -</Text>

      <SocialLogin />

      <Text style={styles.signup}>
        Create An Account <Text style={styles.signupLink}>Sign Up</Text>
      </Text>
    </SafeAreaView>
  );
}