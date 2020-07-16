import { DefaultNavigationProps, User } from '../../types';

import Button from '../shared/Button';
import { IC_MASK } from '../../utils/Icons';
import React from 'react';
import { View } from 'react-native';
import { getString } from '../../../STRINGS';
import styled from 'styled-components/native';
import { useAppContext } from '../../providers/AppProvider';
import { useThemeContext } from '../../providers/ThemeProvider';
import { Text } from 'react-native';

const Container = styled.View`
  flex: 1;
  align-self: stretch;
  overflow: scroll;
  background-color: ${({ theme }): string => theme.background};

  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
`;

const ContentWrapper = styled.View`
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
`;

const ButtonWrapper = styled.View`
  position: absolute;
  flex-direction: column;
  bottom: 40px;
  width: 85%;
  align-self: center;
`;

const StyledText = styled.Text`
  font-size: 18px;
  line-height: 27px;
  color: ${({ theme }): string => theme.fontColor};
`;

interface Props {
  navigation: DefaultNavigationProps<'Intro'>;
}


// function Intro(props: Props): React.ReactElement {
//   const { changeThemeType } = useThemeContext();

//   return (
//     <Container>
//       <ButtonWrapper>
//         <View style={{ marginTop: 8 }} />
//         <Button
//           testID="btnStack"
//           style={{
//             marginBottom: 8,
//           }}
//           onClick={(): void => props.navigation.navigate('Notifications')}
//           text="Stack Navigator"
//         />
//         <Button
//           testID="btnDrawer"
//           style={{
//             marginBottom: 8,
//           }}
//           onClick={(): void => props.navigation.navigate('DrawerNavigator')}
//           text="Drawer Navigator"
//         />
//         <Button
//           testID="btnTabs"
//           style={{
//             marginBottom: 8,
//           }}
//           onClick={(): void => props.navigation.navigate('BottomTabNavigator')}
//           text="BottomTab Navigator"
//         />
//         <Button
//           testID="btnTabs"
//           style={{
//             marginBottom: 8,
//           }}
//           onClick={(): void =>
//             props.navigation.navigate('MaterialTopTabNavigator')
//           }
//           text="MaterialTopTab Navigator"
//         />
//         <Button
//           testID="btnTabs"
//           style={{
//             marginBottom: 8,
//           }}
//           onClick={(): void =>
//             props.navigation.navigate('MaterialBottomTabNavigator')
//           }
//           text="MaterialBottomTab Navigator"
//         />
//       </ButtonWrapper>
//     </Container>
//   );
// }

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