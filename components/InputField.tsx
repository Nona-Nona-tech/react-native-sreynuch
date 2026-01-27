import { View, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome, Feather } from '@expo/vector-icons';
import { loginStyles } from '../styles/loginStyles';

interface Props {
  icon: string;
  placeholder: string;
  secure: boolean;
  onChangeText?: (text: string) => void;
  showEye?: boolean;
  eyeVisible?: boolean;
  toggleSecure?: () => void;
  value?: string;
}

const InputField = ({
  icon,
  placeholder,
  secure,
  onChangeText,
  showEye = false,
  eyeVisible = false,
  toggleSecure,
  value,

  
}: Props) => {
  return (
    <View style={loginStyles.inputWrapper}>
      <View style={loginStyles.icon}>
        <FontAwesome name={icon as any} size={20} color="black" />
      </View>

      <TextInput
        placeholder={placeholder}
        placeholderTextColor="black"
        secureTextEntry={secure}
        style={loginStyles.input}
        onChangeText={onChangeText}
        value={value}
      />
      {showEye && toggleSecure && (
        <TouchableOpacity onPress={toggleSecure} style={loginStyles.eyeIcon}>
          <Feather
            name={eyeVisible ? 'eye' : 'eye-off'}
            size={20}
            color="black"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default InputField;