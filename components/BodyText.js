import React from "react";
import { Text, StyleSheet } from "react-native";

const BodyText = (props) => <Text style={styles.Body}>{props.children}</Text>;

const styles = StyleSheet.create({
  Body: {
    fontSize: 15,
  },
});

export default BodyText;
