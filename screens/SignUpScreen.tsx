import React, { useState } from "react";
import {View,Text,TouchableOpacity,KeyboardAvoidingView,Platform,Alert,} from "react-native";
import InputField from "../components/InputField";
import SocialLogin from "../components/SocialLogin";
import { signupStyles } from "../styles/signupStyles";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types/navigation";
import { FontAwesome,Feather} from "@expo/vector-icons";

type SignUpScreenNavigationProp = StackNavigationProp<RootStackParamList,"SignUp">;

const SignUpScreen = () => {
  const navigation = useNavigation<SignUpScreenNavigationProp>();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const handleSignUp = () => {
    if (!fullName || !email || !password || !confirmPassword) {
      Alert.alert("Please fill in all fields");
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Passwords do not match");
      return;
    }

    Alert.alert("Account created successfully!");
    navigation.navigate("Login");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <View style={signupStyles.container}>
        <Text style={signupStyles.title}>Create An Account</Text>

        <InputField
          placeholder="Full Name"
          icon="user"
          value={fullName}
          onChangeText={setFullName}
          secure={false}
        />

        <InputField
          placeholder="Username or Email"
          icon="envelope"
          value={email}
          onChangeText={setEmail}
          secure={false}
        />

        <InputField
          placeholder="Password"
          icon="lock"
          value={password}
          onChangeText={setPassword}
          secure={!passwordVisible}
          showEye={true}
          eyeVisible={passwordVisible}
          toggleSecure={() => setPasswordVisible(!passwordVisible)}
        />

        <InputField
          placeholder="Confirm Password"
          icon="lock"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secure={!confirmPasswordVisible}
          showEye={true}
          eyeVisible={confirmPasswordVisible}
          toggleSecure={() =>setConfirmPasswordVisible(!confirmPasswordVisible)
          }
        />

        <TouchableOpacity
          style={signupStyles.SignUpbutton}
          onPress={handleSignUp}
        >
          <Text style={signupStyles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <Text style={signupStyles.orText}>- OR Continue with -</Text>
        <SocialLogin />

        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={signupStyles.linkText}>Already Have An Account?<Text style={signupStyles.linkHighlight}> Login</Text>
          </Text>
          
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignUpScreen;