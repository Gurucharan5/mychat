import React, { useLayoutEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Input } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import { Button } from 'react-native-elements';
import {auth,db} from "../firebase";

const AddChatScreen = ({navigation}) => {

    const [input, setInput]=useState("");
    useLayoutEffect(()=>{
        navigation.setOptions({
            title:"Add a new Chat",
            headerBackTitle:"Chats",

        });
    },[navigation]);


    const createChat = async ()=>{
        await db
        .collection("chats")
        .add({
            chatName: input,
        })
        .then(()=>{
            navigation.goBack();
        })
        .catch((error)=> alert(error));
    };

    return (
        <View style={styles.container}>
            <Input 
            placeholder="Enter a Chat Name" 
            value={input} 
            onChangeText={(text)=> setInput(text)} 
            onSubmitEditing={createChat}
            leftIcon={
                <Icon name="wechat" type="antdesign" size={24} color="black" />
            }
            />
            <Button onPress={createChat} title="create new chat"/>
        </View>
    )
}

export default AddChatScreen

const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        padding:30,
        height:"300",
    },
})
