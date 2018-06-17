import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Button } from 'react-native';

export default class HomeScreen extends Component {
  handleOnPress = () => {
    this.props.navigation.navigate('Animation', { animationId: '1', animationName: 'Opacity' });
  };
  render() {
    return (
      <View style={styles.container}>
        <Button title="Go to animation" onPress={this.handleOnPress} />
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
