import React, { Component } from 'react';
import { View, Animated, StyleSheet } from 'react-native';
import ResetButton from './ResetButton';

class HeightAndSpringAnimation extends Component {
  state = {
    animation: new Animated.Value(0),
  };

  componentDidMount() {
    this.startAnimation();
  }

  restartAnimation = () => {
    const { animation } = this.state;
    animation.setValue(0);
    this.startAnimation();
  };

  startAnimation = () => {
    const { animation } = this.state;

    Animated.spring(animation, {
      toValue: 300,
      friction: 3,
      tension: 200,
    }).start();
  };

  render() {
    const { animation } = this.state;
    const animatedStyles = {
      height: animation,
    };
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.box, animatedStyles]} />
        <ResetButton onPress={this.restartAnimation} />
      </View>
    );
  }
}

export default HeightAndSpringAnimation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    width: 200,
    height: 0,
    backgroundColor: '#6DD3CE',
  },
});
