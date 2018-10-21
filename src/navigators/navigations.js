import { NavigationActions, StackActions } from 'react-navigation';

export let _navigator;

const setNavigator = navigatorRef => {
    _navigator = navigatorRef;
};

const navigate = (routeName, params) => {
    _navigator.dispatch(
        NavigationActions.navigate({
            type: NavigationActions.NAVIGATE,
            routeName,
            params,
        })
    );
};

const resetAction = (routeName, params, index = 0) =>
    StackActions.reset({
        index,
        actions: [NavigationActions.navigate({ routeName, params })],
    });

const reset = (routeName, params, index = 0) => {
    _navigator.dispatch(resetAction(routeName, params, index));
};

const resetSwitch = (switchName, routeName, params, index = 0) => {
    const subNavigation = resetAction(routeName, params, index);
    _navigator.dispatch(
        NavigationActions.navigate({
            routeName: switchName,
            action: subNavigation,
        })
    );
};

const goBack = key => {
    _navigator.dispatch(NavigationActions.back({ key }));
};

export default {
    goBack,
    navigate,
    reset,
    resetSwitch,
    setNavigator,
};
