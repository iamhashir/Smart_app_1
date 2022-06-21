import { View, Text } from "react-native";
import React from "react";

import Fruits from "./shakes/Fruits";

const Fruitholder = (props) => {
  var imageMap = {
    apple: require("./shakes/apple.png"),
    banana: require("./shakes/banana.png"),
    mango: require("./shakes/mango.png"),
    strawberry: require("./shakes/strawberry.png"),
  };

  return (
    <View>
      {props.open && <Text>hashir</Text>}
      {props.value == "mango" && props.HolderValue2 == "strawberry" && (
        <Fruits
          apple={imageMap[props.value]}
          banana={imageMap[props.HolderValue2]}
        />
      )}
      {props.value == "mango" && props.HolderValue2 == "banana" && (
        <Fruits
          apple={imageMap[props.value]}
          banana={imageMap[props.HolderValue2]}
        />
      )}
      {props.value == "apple" && props.HolderValue2 == "strawberry" && (
        <Fruits
          apple={imageMap[props.value]}
          banana={imageMap[props.HolderValue2]}
        />
      )}
      {props.value == "mango" && props.HolderValue2 == "apple" && (
        <Fruits
          apple={imageMap[props.value]}
          banana={imageMap[props.HolderValue2]}
        />
      )}
      {props.value == "apple" && props.HolderValue2 == "mango" && (
        <Fruits
          apple={imageMap[props.value]}
          banana={imageMap[props.HolderValue2]}
        />
      )}
      {props.value == "strawberry" && props.HolderValue2 == "mango" && (
        <Fruits
          apple={imageMap[props.value]}
          banana={imageMap[props.HolderValue2]}
        />
      )}
      {props.value == "apple" && props.HolderValue2 == "strawberry" && (
        <Fruits
          apple={imageMap[props.value]}
          banana={imageMap[props.HolderValue2]}
        />
      )}
      {props.value == "banana" && props.HolderValue2 == "strawberry" && (
        <Fruits
          apple={imageMap[props.value]}
          banana={imageMap[props.HolderValue2]}
        />
      )}
      {props.value == "banana" && props.HolderValue2 == "mango" && (
        <Fruits
          apple={imageMap[props.value]}
          banana={imageMap[props.HolderValue2]}
        />
      )}
      {props.value == "banana" && props.HolderValue2 == "apple" && (
        <Fruits
          apple={imageMap[props.value]}
          banana={imageMap[props.HolderValue2]}
        />
      )}
      {props.HolderValue2 != props.value && (
        <Fruits
          apple={imageMap[props.value]}
          banana={imageMap[props.HolderValue2]}
        />
      )}
      {props.value == props.HolderValue2 && (
        <Fruits
          apple={imageMap[props.value]}
          banana={imageMap[props.value]}
        />
      )}
    </View>
  );
};

export default Fruitholder;
