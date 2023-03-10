import { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";

const AccountScreen = ({ navigation }) => {
  const { signout } = useContext(AuthContext);
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text>AccountScreen</Text>
      <Spacer>
        <Button title="Sign Out" onPress={signout}></Button>
      </Spacer>
    </SafeAreaView>
  );
};

AccountScreen.navigationOptions = {
  title: "Account",
  tabBarIcon: <FontAwesome name="gear" size={20} />,
};
const styles = StyleSheet.create({});

export default AccountScreen;
