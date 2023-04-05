
import React from "react";
// import "react-native-gesture-handler";
// import "react-native-reanimated";
import { enableScreens } from "react-native-screens";
import { NavigationContainer } from "@react-navigation/native";
import RootStackNavigation from '@navigations/root-stack-navigations';
import { NavigationService } from "@services/navigation-services";
enableScreens();

const App = () => {
    return (
        <NavigationContainer
            ref={ref => {
                NavigationService.current = ref;
            }}
        >
            <RootStackNavigation />
        </NavigationContainer>
    );
}

export default App;

