import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Platform,
  FlatList,
} from "react-native";
import { Button } from "../components/Button";
import { SkillCard } from "../components/SkillCard";

export const Home = () => {
  const [newSkill, setNewSkill] = useState("");
  const [mySkills, setMySkills] = useState([]);
  const [greeting, setGreeting] = useState("");

  const handleAddNewSkill = () =>
    setMySkills((oldState) => [...oldState, newSkill]);

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGreeting("Good morning");
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting("Good afternoon");
    } else {
      setGreeting("Good night");
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Alecsander</Text>
      <Text style={styles.greetings}>{greeting}</Text>

      <TextInput
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />

      <Button onPress={handleAddNewSkill} />

      <FlatList
        data={mySkills}
        keyExtractor={(item) => item}
        renderItem={({ item: skill }) => <SkillCard {...{ skill }} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121015",
    paddingHorizontal: 20,
    paddingVertical: 70,
    paddingHorizontal: 30,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#1F1E25",
    color: "#FFF",
    fontSize: 18,
    padding: Platform.OS === "ios" ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
  },
  greetings: {
    color: "#FFF",
  },
});
