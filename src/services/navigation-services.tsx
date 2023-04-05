import { StackActions } from '@react-navigation/native';
import * as React from 'react';

const NavigationService = React.createRef<{
    navigate: Function;
    dispatch: Function;
    goBack: Function;
}>({});

function navigate(name: string, params: any) {
    NavigationService.current?.navigate(name, params);
}

function push(name: string, params: any) {
    NavigationService.current?.dispatch(StackActions.push(name, params));
}

function goBack() {
    NavigationService.current?.goBack();
}

export { NavigationService, navigate, push, goBack };

