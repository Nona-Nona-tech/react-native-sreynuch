import { View, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome, Feather } from '@expo/vector-icons';
import styles from '../styles/loginStyles';

interface Props {
  icon: string;
  placeholder: string;
  secure: boolean;
  onChangeText?: (text: string) => void;
  showEye?: boolean;
  eyeVisible?: boolean;
  toggleSecure?: () => void;
}

const InputField = ({
  icon,
  placeholder,
  secure,
  onChangeText,
  showEye = false,
  eyeVisible = false,
  toggleSecure,
}: Props) => {
  return (
    <View style={styles.inputWrapper}>
      <FontAwesome name="user" size={20} color="gray" style={styles.icon} />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="gray"
        secureTextEntry={secure}
        style={styles.input}
        onChangeText={onChangeText}
      />
      {showEye && (
        <TouchableOpacity onPress={toggleSecure} style={styles.eyeIcon}>
          <Feather name={eyeVisible ? 'eye' : 'eye-off'} size={20} color="gray" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default InputField;