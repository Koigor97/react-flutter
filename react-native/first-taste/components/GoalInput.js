import { useState } from "react";
import { TextInput, View, Button, StyleSheet } from "react-native";

function GoalInput(props) {
  const [enteredGoal, setEnteredGoal] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText);
  }

  function addGoalHandler() {
    props.addGoal(enteredGoal);
    setEnteredGoal("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Add your course goal..."
        style={styles.textInput}
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      ;
      <Button title="Add goal ⚽️" onPress={addGoalHandler} />
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "70%",
    marginEnd: 8,
    paddingHorizontal: 5,
    paddingVertical: 5,
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
});
