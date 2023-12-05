import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [goals, setGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText);
  }

  function addGoalHandler() {
    setGoals((setGoals) => [...setGoals, enteredGoal]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Add your course goal..."
          style={styles.textInput}
          onChangeText={goalInputHandler}
        />
        <Button title="Add goal ⚽️" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        {goals.map((goal) => (
          <View style={styles.goals} key={goal}>
            <Text style={styles.goalText}>{goal}</Text>
            <Button title="❌" />
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    marginTop: 60,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingHorizontal: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "70%",
    marginEnd: 8,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  goalsContainer: {
    flex: 5,
    backgroundColor: "#000",
    paddingHorizontal: 16,
  },
  goals: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
    backgroundColor: "#f6f9fb",
    color: "#000405",
    marginTop: 10,
    paddingVertical: 8,
    paddingHorizontal: 7,
    borderRadius: 5,
  },
  goalText: {
    alignSelf: "center",
  },
});
