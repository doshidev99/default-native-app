import { Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const isIos = Platform.OS === 'ios';

export const navigation = useNavigation();
