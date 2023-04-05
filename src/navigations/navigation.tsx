import { StackActions } from '@react-navigation/native';

class navigation {
    navigation: any;
    expireToken: boolean = false;
    constructor() { }
    initRoute(routeNavigation: any) {
        this.navigation = routeNavigation;
    }
    navigate(name: string, params?: object) {
        this.navigation.navigate(name, params || {});
    }
    replaceScreen(name: string, params?: object) {
        this.navigation.dispatch(
            StackActions.replace(name, params)
        );
    }
    reset(name: string, params?: object) {
        this.navigation.reset({
            index: 0,
            routes: [{ name: name, params }],
        });
    }
    goBack() {
        this.navigation.goBack();
    }
    push(name: string, params: any, keyInStack: string) {
        //keyInStack : là một chuỗi định danh duy nhất cho màn hình mới được thêm vào, nó giúp quản lý các màn hình trong ngăn xếp điều hướng.
        //Tránh việc thêm cùng một màn hình vào ngăn xếp điều hướng nhiều lần, có thể sử dụng key để kiểm tra xem màn hình đó đã được thêm vào hay chưa.
        this.navigation.push(name, params, { key: keyInStack });
    }
    isFocused() {
        const isFocused = this.navigation.isFocused();
        return isFocused;
    }
    addListener(eventName: string, callBack: Function) {
        return this.navigation.addListener(eventName, callBack);
    }
    setExpireToken() {
        this.expireToken = true;
    }
    isExpireToken() {
        const isEp = this.expireToken;
        this.expireToken = false;
        return isEp;
    }
    openScanQRCode(screenKey?: string | null, IsContinuous?: boolean, dataType?: string, title?: string, dataNext?: any, isNotItemID?: boolean) {
        this.navigate("ScanScreen", { returnKey: screenKey, IsContinuous, dataType, title, dataNext, isNotItemID });
    }

}

export default new navigation();