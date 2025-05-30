/**
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 * @format
 */
import React from 'react';
import {AppRegistry, View} from 'react-native';

const Bootstrap = () => {
  return (
    <View
      accessible={true}
      accessibilityValue={{now: 10, min: 0, max: 20}}
      style={{borderRadius: 30, width: 60, height: 60, margin: 10}}>
      <View style={{backgroundColor: 'magenta', width: 60, height: 60}} />
    </View>
  );
};

AppRegistry.registerComponent('Bootstrap', () => Bootstrap);
