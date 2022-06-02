import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const Button = ({ onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.button}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>Add</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#A370F7",
    padding: 15,
    borderRadius: 7,
    alignItems: "center",
    marginVertical: 20,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 17,
    fontWeight: "bold",
  },
});
