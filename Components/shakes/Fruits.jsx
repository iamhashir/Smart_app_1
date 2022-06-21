import { View, Animated, Image, StyleSheet } from "react-native";
import React, { useRef, useEffect } from "react";

const AppleBanana = (props) => {

  const RevealFade = useRef(new Animated.Value(0)).current;
  const revealFade2 = useRef(new Animated.Value(0)).current;
  const RevealingX = useRef(new Animated.Value(0)).current;
  const RevealingX2 = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(1)).current;
  const opacityFade = useRef(new Animated.Value(0)).current;
  const revealFadeOut2 = useRef(new Animated.Value(1)).current;
  const translating = useRef(new Animated.Value(-440)).current;

  useEffect(() => {
   
      Animated.sequence([
        Animated.spring(revealFade2, {
          toValue: 0.7,
          useNativeDriver: true,
          tension: 30,
          friction: 1,
        }),
        Animated.spring(RevealingX2, {
          toValue: 113,
          useNativeDriver: true,
          tension: 100,
          friction: 5,
        }),
      ]).start();
    Animated.sequence([
      Animated.spring(RevealFade, {
        toValue: 0.9,
        useNativeDriver: true,
        tension: 10,
        friction: 1,
      }),
      Animated.spring(RevealingX, {
        toValue: -115,
        useNativeDriver: true,
        tension: 100,
        friction: 5,
      }),
      Animated.spring(revealFadeOut2, {
        toValue: 0.002,
        useNativeDriver: true,
        tension: 100,
        friction: 5,
      }),

      Animated.spring(opacity, {
        toValue: 0,
        useNativeDriver: true,
        tension: 100,
        friction: 50,
        duration: 2000,
      }),

      Animated.parallel([
        Animated.spring(translating, {
          toValue: 0,
          useNativeDriver: true,
          // duration:  3000,
          tension: 30,
          friction: 5000,
        }),
        Animated.timing(opacityFade, {
          duration: 100,
          toValue: 1,
          useNativeDriver: true,
          // tension: 100,
          // friction: 50,
        }),
      ]),
    ]).start();
  });

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          height: "100%",
          justifyContent: "space-around",
        }}
      >
        <Animated.Image
          style={{
            width: "47.5%",
            resizeMode: "contain",
            aspectRatio: 0.5,
            transform: [
              { translateX: RevealingX2 },
              { scale: revealFade2 },
              { scale: revealFadeOut2 },
            ],
          }}
          source={props.apple}
        />

        <Animated.Image
          style={{
            width: "47.5%",
            height: "100%",
            resizeMode: "contain",
            aspectRatio: 0.5,
            transform: [
              { translateX: RevealingX },
              { scale: RevealFade },
              { scale: revealFadeOut2 },
            ],
            // opacity: opacity,
            //   opacity: 0,
            //   backgroundColor:"red"
          }}
          source={props.banana}
        />
      </View>
      <Animated.Text
      
        style={{
          backgroundColor: "lightgreen",
          opacity: opacityFade,
          transform: [{ translateX: translating }],
          width: "100%",
          height: "10%",
          position: "absolute",
          left: 0,
           top: "0%",
          textAlign: "center",
          fontSize: 23,
          borderRadius: 10,
          borderColor: "black",
          borderWidth: 5,
          paddingTop: 3,
        }}
      >
        Thanks for playing fruits animation
      </Animated.Text>
    </View>
  );
};

export default AppleBanana;
 
const styles = StyleSheet.create({
  textEnd: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "10%",
    position: "absolute",
 
  },
  textEn: {
    backgroundColor: "red",
  },
});
