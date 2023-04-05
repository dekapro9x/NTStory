import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { keyNavigation } from '../../navigations/key-navigation';
import navigation from '../../navigations/navigation';

const AppIntroScreen = () => {
    const nextScreen = () => {
        navigation.navigate(keyNavigation.HOME)
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={nextScreen}
                style={{ height: 40, width: 100, backgroundColor: 'blue' }}
            >

            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red'
    }
})

export default AppIntroScreen;