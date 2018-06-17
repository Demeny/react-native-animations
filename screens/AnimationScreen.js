import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

class AnimationScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;

    return {
      title: params ? params.animationName : 'N/A',
    };
  };

  render() {
    const animationId = this.props.navigation.getParam('animationId', '0');
    return (
      <View>
        <Text>This is animation number with ID: {animationId}</Text>
      </View>
    );
  }
}

export default AnimationScreen;
AnimationScreen.propTypes = {
  navigation: PropTypes.any,
};
