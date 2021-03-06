import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import t from "tcomb-form-native";
const Form = t.form.Form;
import {RegisterStruct, RegisterOptions} from "../../forms/Register";

export default class Register extends Component {
    constructor() {
        super();

        this.state = {
            registerStruct: RegisterStruct,
            registerOptions: RegisterOptions
        }
    }
    render() {

        const {registerStruct, registerOptions } = this.state;

        return (
            <View style={styles.viewBody}> 
                <Text>Register Screen...</Text>

                <Form 
                ref="registerForm"
                type={registerStruct} 
                options={registerOptions}
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewBody: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:"#fff"
    }
});
