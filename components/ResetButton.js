import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, StyleSheet, View } from 'react-native';

class ResetButton extends Component {
  render() {
    return (
      <View style={styles.button}>
        <Button {...this.props} />
      </View>
    );
  }
}

export default ResetButton;
ResetButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};
ResetButton.defaultProps = {
  title: 'Reset',
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
  },
});
