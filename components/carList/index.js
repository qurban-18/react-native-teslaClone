import React from "react";
import { View, Text, FlatList, Dimensions } from "react-native";
import { carsData } from "../../utils/constant";
import CarItem from "../carItem";
import styles from "./styles";

export default function CarList() {
  return (
    <View style={styles.container}>
      <FlatList
        data={carsData}
        renderItem={({ item, i }) => <CarItem key={i} data={item} />}
        snapToAlignment={"start"}
        deceleration="fast"
        snapToInterval={Dimensions.get("window").height}
      />
    </View>
  );
}
