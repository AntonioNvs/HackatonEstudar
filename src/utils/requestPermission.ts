import {PermissionsAndroid, Alert} from 'react-native';

export async function requestLocationPermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
    if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
      Alert.alert('Sem a permissão, não será possível usar a funcionalidade.');
    }
  } catch (err) {
    console.warn(err);
  }
}
