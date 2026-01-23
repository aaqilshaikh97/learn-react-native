import { useNavigation } from "@react-navigation/native";
import { Button, StyleSheet, Text, View } from "react-native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  Home: undefined;
  // Add other routes here
};

export const LoginScreen = () => {

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  
  return (
    <View style={styles.container}>
     <Text>Login screen</Text>

     <Button title="Go to Home" onPress={() => {navigation.navigate("Home")}} />
    </View>

  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5e5e5',
    justifyContent: 'center',
    alignItems: 'center'
  },
});

