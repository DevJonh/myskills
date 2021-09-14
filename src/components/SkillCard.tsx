import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
} from "react-native";

interface ISkillCardProps extends TouchableOpacityProps {
  skill: string;
}

export const SkillCard = ({ skill, ...rest }: ISkillCardProps) => (
  <TouchableOpacity style={styles.buttonSkill} {...rest}>
    <Text style={styles.textSkill}> {skill}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  textSkill: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonSkill: {
    backgroundColor: "#1f1e25",
    padding: 15,
    borderRadius: 50,
    alignItems: "center",
    marginVertical: 10,
  },
});
