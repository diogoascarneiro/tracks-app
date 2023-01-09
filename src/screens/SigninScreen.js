import { View, StyleSheet, Text, Button } from "react-native";

const SigninScreen = ({ navigation }) => {
  return (
    <>
      <Text>SigninScreen</Text>
      <Button title="Go to Sign up" onPress={() => navigation.navigate("Signup")} />
      <Button title="Go to Main flow" onPress={() => navigation.navigate("mainFlow")} />
    </>
  );
};

const styles = StyleSheet.create({});

export default SigninScreen;
