/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    NativeModules,
    View
} from 'react-native';
import UpdateSplash from "./src/update/component/UpdateSplash";
type Props = {};
export default class App extends Component<Props> {

    constructor(props) {
        super(props);
    }
    componentDidMount() {
        console.log(NativeModules.BridgeNativeModule);
    }

    getHotUpdateView() {
        return <UpdateSplash/>;
    }

    render() {
        return (
            <View style={styles.rootView}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                {this.getHotUpdateView()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    rootView:{
        flex: 1,
        flexDirection: "column",
        backgroundColor: "white"
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});
