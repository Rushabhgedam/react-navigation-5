import React, { ReactElement } from 'react';

import Button from '../shared/Button';
import { DefaultNavigationProps } from '../../types';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/core';
import { View, Text } from 'react-native';

class AppIntro extends React.Component {
  constructor() {
    super();
    console.log('Constructor Called.');
  }

  componentWillMount() {
    console.log('componentWillMount called.');
    console.log("szdf", this.props.route.params)
  }

  componentDidMount() {
    console.log('componentDidMount called.');
  }
  render() {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text>Language is: React</Text>
        <Button
          onClick={() => this.props.navigation.navigate("Home", { test: "Props from screen 1" })}
          text="Click to check navigation"
        />
      </View>
    );
  }
}
export default AppIntro;