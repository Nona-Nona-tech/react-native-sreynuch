import { View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styles from '../styles/loginStyles';

export default function SocialLogin() {
  return (
    <View style={styles.socialWrapper}>
      <FontAwesome name="google" size={30} color="#DB4437" />
      <FontAwesome name="apple" size={30} color="black" />
      <FontAwesome name="facebook" size={30} color="#4267B2" />
    </View>
  );
}