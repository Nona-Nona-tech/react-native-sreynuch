import { View, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome6, Feather } from '@expo/vector-icons';

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
      <View style={styles.icon}>
        {icon === 'user' ? (
          <FontAwesome6 name="user" size={20} color="black" />
        ) : (
          <FontAwesome6 name="unlock-keyhole" size={20} color="black" />
        )}
      </View>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="black"
        secureTextEntry={secure}
        style={styles.input}
        onChangeText={onChangeText}
      />
      {showEye && (
        <TouchableOpacity onPress={toggleSecure} style={styles.eyeIcon}>
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