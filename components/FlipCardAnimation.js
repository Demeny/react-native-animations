import React, { Component } from 'react';
import { View, Animated, StyleSheet } from 'react-native';
import ResetButton from './ResetButton';

class OpacityAnimation extends Component {
  state = {
    animation: new Animated.Value(-1),
  };

  componentDidMount() {
    this.startAnimation();
  }

  startAnimation = () => {
    const { animation } = this.state;

    Animated.timing(animation, {
      toValue: 1,
      duration: 700,
    }).start();
  };

  restartAnimation = () => {
    const { animation } = this.state;
    animation.setValue(-1);
    this.startAnimation();
  };

  render() {
    const { animation } = this.state;
    const animatedStyles = {
      transform: [{ scaleX: animation }],
      backgroundColor: animation.interpolate({
        inputRange: [-1, 1],
        outputRange: ['#6DD3CE', '#FF9B71'],
      }),
    };
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.box, animatedStyles]} />
        <ResetButton onPress={this.restartAnimation} />
      </View>
    );
  }
}

export default OpacityAnimation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    width: 200,
    height: 200,
  },
});
