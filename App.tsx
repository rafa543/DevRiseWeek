import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './src/routes/stack.routes';
import Home from './src/screens/Home';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Home/> */}
      <Routes/>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
