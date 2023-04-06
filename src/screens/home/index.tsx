import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { keyNavigation } from '../../navigations/key-navigation';
import navigation from '../../navigations/navigation';
const AppIntroScreen = () => {

    const backScreen = () => {
        navigation.navigate(keyNavigation.APP_INTRO);
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={backScreen}
                style={{ height: 40, width: 100, backgroundColor: 'red' }}
            />
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green'
    }
})

export default AppIntroScreen;