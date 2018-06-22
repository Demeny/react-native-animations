import React, { Component } from 'react';
import { Animated, View, ScrollView, StyleSheet } from 'react-native';

class ScrollChangeColorAnimation extends Component {
  state = {
    animation: new Animated.Value(1),
  };
  render() {
    const { animation } = this.state;
    const backgroundInterpolate = animation.interpolate({
      inputRange: [0, 3000],
      outputRange: ['rgb(255,99,71)', 'rgb(99,71,255)'],
    });

    const backgroundStyle = {
      backgroundColor: backgroundInterpolate,
    };

    return (
      <View style={styles.container}>
        <ScrollView
          scrollEventThrottle={16}
          onScroll={Animated.event([
            {
              nativeEvent: {
                contentOffset: {
                  y: this.state.animation,
                },
              },
            },
          ])}
        >
          <Animated.View style={[styles.content, backgroundStyle]} />
        </ScrollView>
      </View>
    );
  }
}

export default ScrollChangeColorAnimation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    width: 100,
    height: 3000,
  },
});
