import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import animations from '../components/Animations';

class AnimationScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;

    return {
      title: params ? params.animationName : 'N/A',
    };
  };

  render() {
    const animationId = this.props.navigation.getParam('animationId', 'opacity');
    const Animation = animations[animationId];
    return (
      <View style={styles.container}>
        <Animation />
      </View>
    );
  }
}

export default AnimationScreen;
AnimationScreen.propTypes = {
  navigation: PropTypes.any,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
  },
});
