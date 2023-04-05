import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import navigation from '../../navigations/navigation';
import { keyNavigation } from '../../navigations/key-navigation';

const InitScreen = () => {
    const navigationRoute = useNavigation();

    const initNavigationRoute = () => {
        navigation.initRoute(navigationRoute);
    }

    const resetScreen = () => {
        setTimeout(() => {
            navigation.navigate(keyNavigation.APP_INTRO)
        }, 1000)
    }

    useEffect(() => {
        initNavigationRoute();
        resetScreen();
    }, []);

    return null;
}

export default InitScreen;