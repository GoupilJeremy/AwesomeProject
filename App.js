import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Bananas from './Bananas';
import LotsOfGreetings from './Greeting';
import BlinkApp from './Blink';
import LotsOfStyles from './Style';
import FixedDimensionsBasic from './FixedDimensionsBasics';
import FlexDimensionsBasics from './FlexDemensionsBasics';
import FlexDirectionBasics from './FlexDirectionBasics';
import JustifyContentBasics from './JustifyContentBasics';
import AlignItemsBasics from './AlignItemsBasics';

export default class HelloWorldApp extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
                <Text>Hello, world!</Text>
                <Bananas />
                <LotsOfGreetings />
                <BlinkApp />
                <LotsOfStyles />
                <FixedDimensionsBasic />
                <FlexDimensionsBasics />
                <FlexDirectionBasics />
                <JustifyContentBasics />
                <AlignItemsBasics />
            </View>
        );
    }
}