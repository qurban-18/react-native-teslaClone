import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./styles";

export default function index({ type, content, fn }) {
  const bg = type === "primary" ? "#171a20cc" : "#ffffffa6";
  const color = type === "primary" ? "#ffffff" : "#171a20";
  return (
    <View style={styles.container}>
      <Pressable style={[styles.button, { backgroundColor: bg }]} onPress={fn}>
        <Text style={[styles.text, { color: color }]}>{content}</Text>
      </Pressable>
    </View>
  );
}
