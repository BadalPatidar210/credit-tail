import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,SafeAreaView ,Platform} from 'react-native';
import InvoiceScreen from './src/components/InvoiceScreen';
import SuccessScreen from './src/components/SuccessScreen';
import EditAmountScreen from './src/components/EditAmountScreen';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaView style={{flex:1}}>
      <NavigationContainer style={styles.container} >
        <StatusBar hidden backgroundColor="#2A2D31"></StatusBar>
        <Stack.Navigator  mode="modal"
           screenOptions={{
            // animation: 'slide_from_right',
            animationEnabled: false,
            animation: Platform.OS == 'android' ? 'none' : 'simple_push',
            headerShown: false,
          }}>
          <Stack.Screen name="InvoiceScreen" component={InvoiceScreen} />
          <Stack.Screen name="EditAmountScreen" component={EditAmountScreen} />
          <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      </SafeAreaView>
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