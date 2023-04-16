import React from "react";
import {
  Button, Pressable, SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";
import { Appbar, Snackbar } from "react-native-paper";

export default function EditAmountScreen({ route, navigation }) {
  console.log(route.params);
  const [amount, setAmount] = React.useState(route?.params?.totalAmount.toString());
  const [showSnackbar,setShowSnackbar] = React.useState(false);
  const [error,setError] = React.useState('');
  const [paymentMode,setPaymentMode] = React.useState('');

  const confirmPayment = () => {
    if(!(amount && paymentMode)){
      return;
    }
    if(route.params.totalAmount < amount) {
      setError(`Amount must be less than than total amount ${route.params.totalAmount}`);
      setShowSnackbar(true);
      return;
    }
    
    //API Call
    navigation.navigate("SuccessScreen");
  };

  const goBack  = () => {
   navigation.goBack();
  }
  

  return (
    <SafeAreaView style={styles.container}>
      <Appbar.Header statusBarHeight={0}>
      <Appbar.BackAction onPress={goBack} />
        <View>
            <Appbar.Content title={route?.params?.customerId} />
            <Appbar.Content title={route?.params?.customerName} />
        </View>
      </Appbar.Header>

      <View style={styles.inputText}>
        <Text style={styles.text}>{"Amount"}</Text>

        <TextInput
          style={styles.input}
          value={amount}
          onChangeText={setAmount}
          placeholder={"Enter Amount"}
          keyboardType={"numeric"}
          placeholderTextColor={"gray"}
        />
      </View>

      <View>
        <Text style={styles.paymentHeading}>{"Choose Payment Mode"}</Text>
      </View>

      <View style={styles.paymentModeContainer}>
        <Pressable style={[styles.card,paymentMode==='Online' ? styles.selected:{}]} onPress={()=>setPaymentMode('Online')}>
          <Text style={styles.cardContent}>Online</Text>
        </Pressable>
        <Pressable style={[styles.card,paymentMode==='Cash' ? styles.selected:{}]} onPress={()=>setPaymentMode('Cash')}>
          <Text style={styles.cardContent}>Cash</Text>
        </Pressable>
        <Pressable style={[styles.card,paymentMode==='Cheque' ? styles.selected:{}]} onPress={()=>setPaymentMode('Cheque')}>
          <Text style={styles.cardContent}>Cheque</Text>
        </Pressable>
      </View>

      <View style={(amount && paymentMode) ? styles.activeButton : styles.footer}>
        <Button disabled={!(amount && paymentMode)} onPress={confirmPayment} title={"Confirm"} color={(amount && paymentMode) ? 'white':'black'}/>
      </View>
      <Snackbar 
        visible={showSnackbar} 
        onDismiss={()=>setShowSnackbar(false)}
        duration={3500}
        action={{
          label: 'OK',
          onPress: () => {
            setShowSnackbar(false);
          },
        }}>
        {error}
      </Snackbar>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(255,255,255)",
  },
  inputText: {
    height: "30%",
    paddingTop: "10%",
    paddingLeft: 25,
    paddingRight: 25,
    backgroundColor: "#2A2D31",
    borderRadius: 10,
  },
  input: {
    height: 60,
    paddingLeft: 20,
    borderWidth: 1,
    borderRadius: 10,
    color: "white",
    fontSize: 18,
  },
  text: {
    color: "white",
    marginBottom: 10,
  },
  paymentHeading: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "800",
    marginTop: 100,
    marginBottom:40
  },
  selected:{
    borderWidth:1,
  },  
  paymentModeContainer:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    height: 120,
  },    
  card: {
    borderColor: "black",
    borderWidth: 0,
    width: "30%",
    height:150,
    alignItems: "center",
    justifyContent: "center",
    borderRadius:10,
    backgroundColor:"#EFEFEF",
  },
  activeButton:{
    width: "100%",
    height: 80,
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    backgroundColor:"#2760B6"
  },
  footer: {
    width: "100%",
    height: 80,
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    backgroundColor:"#EFEFEF",
  },
});
