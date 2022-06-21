import {
  Text,
  View,
  Animated,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState, useEffect, useRef, useCallback } from "react";

import Constants from "expo-constants";
import DropDownPicker from "react-native-dropdown-picker";
import Fruitholder from "./Components/shakes";

export default function App() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([

    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Mango", value: "mango" },
    { label: "Strawberry", value: "strawberry" },
    { label: "null", value: null },
  ]);
  const [HolderOpen2, SetOpen2] = useState(false);
  const [HolderValue2, SetHolderValue2] = useState(null);
  const [HolderItem2, setItems1] = useState([
    { label: "Strawberry", value: "strawberry" },
    { label: "Mango", value: "mango" },
    { label: "Banana", value: "banana" },
    { label: "Apple", value: "apple" },
    { label: "null", value: null },
  ]);

  const shock = useRef(new Animated.Value(-400)).current;
  const drawer = useRef(new Animated.Value(150)).current;
  const dropDown1 = useRef(new Animated.Value(-200)).current;
  const dropDown2 = useRef(new Animated.Value(200)).current;

  useEffect(() => {
    Animated.spring(shock, {
      toValue: -100,
      useNativeDriver: true,
      tension: 13,
      friction: 1,
    }).start(() => {
      setTimeout(() => {
        shock.setValue(0);
      }, 100);
    });
    setTimeout(
      () =>
        Animated.spring(drawer, {
          toValue: -10,
          useNativeDriver: true,
          tension: 10,
          friction: 500,
        }).start(() => {
          setTimeout(() => {
            drawer.setValue(0);
          }, 100);
        }),
      2000
    );
    Animated.spring(dropDown1, {
      delay: 4000,
      toValue: 0,
      useNativeDriver: true,
      tension: 10,
      friction: 500,
    }).start();
    Animated.spring(dropDown2, {
      delay: 4000,
      toValue: 0,
      useNativeDriver: true,
      tension: 10,
      friction: 500,
    }).start();
  });
  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          backgroundColor: "#61dafb",
          height: "15%",
          justifyContent: "center",
          alignItems: "center",
          transform: [{ translateX: shock }],
        }}
      >
        <Animated.Text
          style={{
            fontSize: 35,
            fontFamily: "serif",
            textAlign: "center",
          }}
        >
          Fruits Animating Calculator
        </Animated.Text>
      </Animated.View>
      <View style={styles.Body}>
        <View style={styles.content}>
          <Animated.View
            style={{
              width: "45%",
              height: 0,
              zIndex: 100,
              transform: [{ translateX: dropDown1 }],
            }}
          >
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              onPress={(ite) => {
                {
                  HolderOpen2 === true ? SetOpen2(false) : null;
                }
              }}
            />
          </Animated.View>
          <View style={styles.bodyPlus}>
            <Text style={{ fontSize: 40 }}>+</Text>
          </View>
          <Animated.View
            style={{
              width: "45%",
              height: 0,
              transform: [{ translateX: dropDown2 }],
              zIndex: 100,
            }}
          >
            <DropDownPicker
              open={HolderOpen2}
              value={HolderValue2}
              items={HolderItem2}
              setOpen={SetOpen2}
              setValue={SetHolderValue2}
              setItems={setItems1}
              onPress={(item) => {
                {
                  open === true ? setOpen(false) : null;
                }
              }}
            />
          </Animated.View>
        </View>
        <View
          style={{
            backgroundColor: "rgba(0, 89, 0, 0.825)",
            width: "100%",
            height: "70%",
          }}
        >
          {(value && HolderValue2) === null ? (
            <View
              style={{
                backgroundColor: "green",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <Text
                style={{
                  backgroundColor: "yellow",
                  textAlign: "center",
                  fontSize: 30,
                }}
              >
                Please select two fruits for Animation
              </Text>
            </View>
          ) : (
            <Fruitholder value={value} open={open} HolderValue2={HolderValue2} />
          )}
        </View>
      </View>
      <Animated.View
        style={{
          backgroundColor: "rgba(0, 255, 157, 0.658)",
          backgroundColor: "#61dafb",
          height: "15%",
          alignItems: "center",
          justifyContent: "center",
          transform: [{ translateY: drawer }],
        }}
      >
        <Text
          style={{ fontSize: 30, color: "black", fontFamily: "sans-serif" }}
        >
          Select a fruit item
        </Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    paddingTop: Constants.statusBarHeight,
  },
  bodyPlus: {
    alignItems: "center",
    justifyContent: "center",

    zIndex: 10000,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  header: {
    backgroundColor: "#61dafb",
    height: "10%",
    justifyContent: "center",
    alignItems: "center",
  },
  Body: {
    backgroundColor: "lightblue",
    height: "70%",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "column",
  },
});
