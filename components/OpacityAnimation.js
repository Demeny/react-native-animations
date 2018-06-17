import React, { Component } from 'react';
import { View, Animated, StyleSheet } from 'react-native';

class OpacityAnimation extends Component {
  state = {
    animation: new Animated.Value(1),
  };

  componentDidMount() {
    this.startAnimation();
  }

  startAnimation = () => {
    const { animation } = this.state;

    Animated.timing(animation, {
      toValue: 0,
      duration: 1200,
    }).start();
  };

  render() {
    const { animation } = this.state;
    const animatedStyles = {
      opacity: animation,
    };
    return (
      <View>
        <Animated.View style={[styles.box, animatedStyles]} />
      </View>
    );
  }
}

export default OpacityAnimation;

const styles = StyleSheet.create({
  box: {
    width: 200,
    height: 200,
    backgroundColor: '#6DD3CE',
  },
});
