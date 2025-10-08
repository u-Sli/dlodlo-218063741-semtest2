import React, { useState } from "react";
import {
  ScrollView,
  View,
  TextInput,
  Text,
  Button,
  TouchableOpacity,
  Alert,
  StyleSheet,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import { registerUser, verifyEmail } from "../../firebase/auth";

export default function Registration({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    if (!email || !password) {
      Alert.alert("Missing Info", "Please fill in all fields.");
      return;
    }

    try {
      await registerUser(email, password);
      await verifyEmail();
      Alert.alert("Account Created", "You have been successfully registered!");
      
    } catch (error) {
      Alert.alert("Registration Error", error.message);
    }
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView 
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.h1}>Create Account</Text>

        <TextInput 
          style={styles.input} 
          placeholder="Name" 
          returnKeyType="next"
        />
        <TextInput 
          style={styles.input} 
          placeholder="Surname" 
          returnKeyType="next"
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          returnKeyType="next"
        />
        <TextInput
          style={styles.input}
          placeholder="Contact Number"
          keyboardType="phone-pad"
          returnKeyType="next"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          returnKeyType="done"
        />

        <View style={styles.buttonContainer}>
          <Button title="Register" color="#007AFF" onPress={handleRegister} />
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.link}>Already have an account? Log in</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 25,
    paddingVertical: 20,
  },
  h1: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 20,
    color: "#333",
  },
  input: {
    height: 45,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    width: "100%",
    marginBottom: 12,
    backgroundColor: "#fff",
  },
  buttonContainer: {
    width: "100%",
    marginTop: 10,
    marginBottom: 15,
    borderRadius: 8,
    overflow: "hidden",
  },
  link: {
    color: "#007AFF",
    marginTop: 10,
    fontSize: 16,
  },
});