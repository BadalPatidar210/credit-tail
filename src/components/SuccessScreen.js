import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function SuccessScreen({route,navigation}){

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
        <View style={styles.successIcon}>
          <Icon name="check-circle" size={80} color="#FFFFFF" />
        </View>
        <View style={styles.details}>
          <Text style={styles.customer}>{route.params.data.customerId}</Text>
          <Text style={styles.rupee}>{"\u20B9"}
                <Text style={styles.paidAmount}>{route.params.data.paidAmount}</Text>
          </Text>  
          <Text style={styles.customer}>{route.params.data.customerName}</Text>
        </View>
        <View style={styles.border}></View>
        
        <Text style={styles.paymentStatus}>{`PAID BY ${route.params.paymentMode?.toUpperCase()}`}</Text>
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
    successIcon:{
      backgroundColor: "rgba(255, 255, 255, 0.25)",
      border: 10,
      marginBottom:20,
        width:100,
        height:100,

      borderRadius:100,
      justifyContent:'center',
      alignItems:'center'
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