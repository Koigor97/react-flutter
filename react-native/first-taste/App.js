import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [goals, setGoals] = useState([]);

  function addGoalHandler(enteredGoal) {
    setGoals((goals) => [
      ...goals,
      { text: enteredGoal, id: (Math.random(10000) * 1).toString() },
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput addGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text} />;
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    marginTop: 60,
  },
  goalsContainer: {
    flex: 5,
    backgroundColor: "#000",
    paddingHorizontal: 16,
  },
});
