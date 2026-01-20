import { View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styles from '../styles/loginStyles';

export default function SocialLogin() {
  return (
    <View style={styles.socialWrapper}>
      <View style={styles.circleIcon}>
         <FontAwesome name="google" size={25} color="red" />
      </View>
      <View style={styles.circleIcon}>
        <FontAwesome name="apple" size={25} color="black" />
      </View>
      <View style={styles.circleIcon}>
        <FontAwesome name="facebook" size={25} color="#4267B2" />
      </View>
    </View>
  );
}