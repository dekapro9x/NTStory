import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, TextInput } from 'react-native';
import { keyNavigation } from '../../navigations/key-navigation';
import navigation from '../../navigations/navigation';
import { AppClient } from '@networking/url-api';

type iState = {
    userName: string;
    passWord: string;
}

const AppIntroScreen = () => {
    const [state, setState] = useState<iState>({
        userName: '',
        passWord: '',
    });

    const nextScreen = () => {
        navigation.navigate(keyNavigation.HOME);
    }

    const pressLoginAPI = async () => {
        const response = await AppClient.Login({
            UserName: 'CNB-99-9999',
            Password: '12345Aa@'
        });
        console.log("Kết quả call API login:", response);
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={pressLoginAPI}
                style={{ height: 40, width: 100, backgroundColor: 'blue', alignSelf: 'center' }}
            >

            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
    }
})

export default AppIntroScreen;