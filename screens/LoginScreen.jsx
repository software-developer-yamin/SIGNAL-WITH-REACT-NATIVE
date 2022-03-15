import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { KeyboardAvoidingView, StyleSheet, View } from "react-native";
import { Button, Image, Input } from "react-native-elements";
import { auth } from "../firebase";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        navigation.replace("Home");
      }
    });
    return unsubscribe;
  }, [auth]);

  const signIn = () => {};

  return (
    <KeyboardAvoidingView style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Signal-Logo.svg/600px-Signal-Logo.svg.png?20201126050550",
        }}
        style={{ width: 200, height: 200, borderRadius: 20 }}
      />
      <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          autoFocus
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
        />
        <Input
          placeholder="Password"
          type="password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <Button title="Login" containerStyle={styles.button} onPress={signIn} />
      <Button
        onPress={() => navigation.navigate("Register")}
        title="Register"
        type="outline"
        containerStyle={styles.button}
      />
      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
  },
  inputContainer: {
    width: 300,
    marginTop: 30,
  },
  button: {
    width: 200,
    marginTop: 10,
  },
});
