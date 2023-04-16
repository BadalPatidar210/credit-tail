import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function SuccessScreen({route,navigation}){
    const [details,setDetails] = React.useState({
      customerId:'MD22/1107651',
      customerName:'AGRAWAL BROTHERS AND SONS ',
      paidAmount:500,
    });

    useEffect(()=>{
      const timer = setTimeout(()=>{
        navigation.navigate('InvoiceScreen')
      },4000)
      return ()=>{
        clearTimeout(timer);
      }
    },[])
    return (
      <View style={styles.container}>
        <View style={styles.details}>
          <Text style={styles.customer}>{details.customerId}</Text>
          <Text style={styles.rupee}>{"\u20B9"}
          <Text style={styles.paidAmount}>{details.paidAmount}</Text>
          </Text>  
          <Text style={styles.customer}>{details.customerName}</Text>
        </View>
        <View style={styles.border}></View>
        
        <Text style={styles.paymentStatus}>{`PAID BY CASH`}</Text>
        <Text style={styles.footer}>{"Redirect to home screen..."}</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#188748',
    },
    customer:{
      color:'white',
      textAlign:'center',
      marginBottom:10,   
      fontSize:20,
    },
    rupee :{
      fontSize:40, 
      color:'white' , 
      textAlign: 'center',
      marginBottom:10,
    },
    paidAmount:{
      fontSize:40,
      color:'white',
      textAlign:'center',
    },
    border:{
      height: 1,
      width:'60%',
      flexDirection : 'row',
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: 'white',
      borderRadius: 1,
      borderStyle: 'dashed',
      zIndex: 0, 
      marginTop: 35,
    },
    paymentStatus:{
      marginTop:'5%',
      fontSize:32,
      color:'white'
    },
    footer:{
      width: '100%', 
      textAlign:'center',
      color:'white',
      height: 60, 
      position: 'absolute',
      bottom: 0
    }
});
  