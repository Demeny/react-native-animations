import React, { Component } from 'react';
import { View, Animated, StyleSheet, Easing } from 'react-native';
import ResetButton from './ResetButton';

class OpacityAnimation extends Component {
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

    Animated.timing(animation, {
      toValue: 1,
      duration: 800,
      easing: Easing.linear,
    }).start(() =>
      Animated.timing(animation, { toValue: 2, duration: 100 }).start(() =>
        Animated.timing(animation, { toValue: 3, duration: 100 }).start(() =>
          Animated.timing(animation, { toValue: 4, duration: 100 }).start(() =>
            Animated.timing(animation, { toValue: 5, duration: 100 }).start(),
          ),
        ),
      ),
    );
  };

  render() {
    const { animation } = this.state;
    const finalHeight = 300;
    const animatedHeight = animation.interpolate({
      inputRange: [0, 1, 2, 3, 4, 5],
      outputRange: [
        0,
        finalHeight + 20,
        finalHeight - 20,
        finalHeight + 10,
        finalHeight - 10,
        finalHeight,
      ],
    });
    const animatedStyles = {
      height: animatedHeight,
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
    height: 0,
    backgroundColor: '#6DD3CE',
  },
});
