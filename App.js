import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
// import CarItem from './components/Caritems';
import CarList from './components/CarLists';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <CarItem 
      name="Model X" 
      tagline="Starting From $69,000" 
      image={require('./assets/images/ModelX.jpeg')}
      /> */}
      {/* <Text>Heelo</Text> */}
      <CarList />
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); 
