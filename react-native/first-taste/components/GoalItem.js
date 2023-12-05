import { Text, Button, View, StyleSheet } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goals}>
      <Text style={styles.goalText}>{props.text}</Text>
      <Button title="❌" />
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
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
