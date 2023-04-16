import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import InvoiceScreen from './src/components/InvoiceScreen';
import SuccessScreen from './src/components/SuccessScreen';
import EditAmountScreen from './src/components/EditAmountScreen';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
      <NavigationContainer style={styles.container}>
        <StatusBar backgroundColor="#2A2D31"></StatusBar>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="InvoiceScreen" component={InvoiceScreen} />
          <Stack.Screen name="EditAmountScreen" component={EditAmountScreen} />
          <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  title: {
    fontSize: 32,
    color:'black',
  },
});
