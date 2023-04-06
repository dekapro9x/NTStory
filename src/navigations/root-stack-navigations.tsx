import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { randomAnimationsScreen } from "@utils/random-animations-screen";
import { keyNavigation } from "./key-navigation";

//Danh sách màn hình:
import AppInitScreen from '@screens/init-flash';
import AppIntroScreen from '@screens/app-intro';
import HomeScreen from '@screens/home';

const RootStack = createNativeStackNavigator();

const RootStackNavigation = () => {
    return (
        <>
            <RootStack.Navigator
                orientation={"portrait"}
                animation={randomAnimationsScreen()}
                initialRouteName={keyNavigation.INIT}
                screenOptions={{ headerShown: false }}
                screenOptions={({ route, navigation }) => ({
                    headerShown: false,
                    gestureEnabled: true,
                })}
            >
                 <RootStack.Screen name={keyNavigation.INIT} component={AppInitScreen} />
                <RootStack.Screen name={keyNavigation.APP_INTRO} component={AppIntroScreen} />
                <RootStack.Screen name={keyNavigation.HOME} component={HomeScreen} />
            </RootStack.Navigator>
        </>
    );
};

export default RootStackNavigation;