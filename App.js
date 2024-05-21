import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';
import TelaLogin from './Components/Header'
export default function App() {
  return (
    <View style={styles.container}>
    <TelaLogin/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
