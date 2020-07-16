import { DefaultNavigationProps } from '../../types';

import Button from '../shared/Button';
import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { Text } from 'react-native';






class AppIntro extends React.Component {
  constructor() {
    super();
    console.log('Constructor Called.');
  }

  componentWillMount() {
    console.log('componentWillMount called.');
    console.log("szdf")
  }

  componentDidMount() {
    console.log('componentDidMount called.');
  }

  // componentWillReceiveProps(nextProp) {
  //   console.log('componentWillReceiveProps called.', nextProp);
  // }

  // shouldComponentUpdate(nextProp, nextState) {
  //   console.log('shouldComponentUpdate called.');
  //   return true;
  // }

  // componentWillUpdate(nextProp, nextState) {
  //   console.log('componentWillUpdate called.');
  // }

  // componentDidUpdate(prevProp, prevState) {
  //   console.log('componentDidUpdate called.');
  // }

  // componentWillUnmount() {
  //   console.log('componentWillUnmount called.');
  // }

  // componentDidCatch(error, info) {
  //   console.log('componentDidCatch called.');
  // }

  render() {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text>Language is: React</Text>
        <Button
        onClick={()=>this.props.navigation.navigate("Notifications",{test:"Props from screen 1"})}
        text="Click to check navigation"
        />
      </View>
    );
  }
}
export default AppIntro;