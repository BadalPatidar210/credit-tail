import { useIsFocused } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Appbar } from 'react-native-paper';
import { getCustomersList } from '../Network';

const Item = ({item,navigation}) => (
  <View style={styles.item}>
    <TouchableOpacity onPress={()=>{
      navigation.navigate('EditAmountScreen',item)
    }}>
      <View style={styles.card}>
        <View>
            <Text style={styles.title}>{item.customerId}</Text>
            <Text style={styles.name}>{item.customerName}</Text>
        </View>
        <View>
            <Text style={styles.amount}>{`${"\u20B9"}${item.totalAmount}`}</Text>
        </View>
      </View>
  </TouchableOpacity>
  </View>
);

export default function InvoiceScreen({navigation}) {
  const [customersList,setCustomersList] = useState([]);
  const isFocused = useIsFocused();

  useEffect(()=>{
    if(!isFocused) return;
    const getList = async ()=>{
      const params = {
        salesRepresentativeId: "SP-1002"
      }
      const customersList = await getCustomersList(params);
      setCustomersList(customersList.data);
    }
    getList();
  },[isFocused])

  if(customersList && customersList.length === 0) return null;

  return (
    <SafeAreaView style={styles.container}>
      <Appbar.Header statusBarHeight={0} style={styles.header}>
        <Appbar.BackAction color="white" />
        <Appbar.Content title="Invoices" titleStyle={{color:'white'}}/>
      </Appbar.Header>

      <FlatList 
        data={customersList}
        renderItem={({item}) => <Item item={item} navigation={navigation}/>}
        keyExtractor={item => item._id}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  header:{
    backgroundColor: '#2A2D31',
    color:"#ECECEC",
  },  
  card:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor:'rgb(255,255,255)',
    width:'100%',
    padding:15
  },
  title: {
    fontSize: 32,
    color:'black',
  },
  amount:{
    fontSize:24
  }
});
