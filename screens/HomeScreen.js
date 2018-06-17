import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Button } from 'react-native';
import animations from '../components/Animations';

export default class HomeScreen extends Component {
  static navigationOptions = () => {
    return {
      title: 'MY ANIMATIONS',
    };
  };
  handleOnPress = animationKey => {
    this.props.navigation.navigate('Animation', {
      animationId: animationKey,
      animationName: animationKey.toUpperCase(),
    });
  };
  render() {
    return (
      <View style={styles.container}>
        {Object.keys(animations).map((animation, index) => (
          <Button
            key={animation}
            title={`${index + 1} ${animation}`}
            onPress={() => this.handleOnPress(animation)}
          />
        ))}
      </View>
    );
  }
}

HomeScreen.propTypes = {
  navigation: PropTypes.any,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
