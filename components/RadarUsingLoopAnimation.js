import React, { Component } from 'react';
import { View, Animated, StyleSheet } from 'react-native';
import ResetButton from './ResetButton';

class RadarUsingLoopAnimation extends Component {
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
    Animated.loop(
      Animated.timing(animation, {
        toValue: 1,
        duration: 2000,
      }),
    ).start();
  };

  render() {
    const { animation } = this.state;
    const interpolated = animation.interpolate({
      inputRange: [0, 1, 2],
      outputRange: ['0deg', '360deg', '0deg'],
    });
    const animatedStyles = {
      transform: [
        {
          rotate: interpolated,
        },
      ],
    };
    return (
      <View style={styles.container}>
        <View style={{ backgroundColor: '#FF9B71', height: 200, width: 200, borderRadius: 100 }}>
          <Animated.View style={[styles.box, animatedStyles]} />
        </View>
        <ResetButton onPress={this.restartAnimation} />
      </View>
    );
  }
}

export default RadarUsingLoopAnimation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  box: {
    position: 'absolute',
    height: 200,
    width: 4,
    left: 100,
    borderBottomWidth: 100,
    borderBottomColor: '#FF9B71',
    backgroundColor: '#6DD3CE',
  },
});
