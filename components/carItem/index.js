import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./style.js";
import StyledButton from "../styledButton";

export default function CarItem(props) {
  const { name, tagline, image } = props.data;
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.bgImage} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>{tagline}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <StyledButton
          type="primary"
          content="Custom order"
          fn={() => console.warn("press order button")}
        />
        <StyledButton
          type="secondary"
          content="Existing inventory"
          fn={() => console.warn("press inventory button")}
        />
      </View>
    </View>
  );
}
