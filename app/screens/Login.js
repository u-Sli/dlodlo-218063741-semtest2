import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  View,
  TextInput,
  Text,
  Button,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Platform
} from "react-native";
import { loginUser } from "../../firebase/auth";

export default function Login({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert("Missing Info", "Please fill in both email and password.");
            return;
        }

        try {
            await loginUser(email, password);
            Alert.alert("Welcome Back!", "You have successfully logged in.");
            // REMOVE the navigation.navigate line - the RootNavigator will handle this automatically
        } catch (error) {
            Alert.alert("Login Error", error.message);
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
                <Text style={styles.h1}>Login</Text>

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
                    placeholder="Password"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                    returnKeyType="done"
                />

                <View style={styles.buttonContainer}>
                    <Button title="Login" color="#007AFF" onPress={handleLogin} />
                </View>

                <TouchableOpacity onPress={() => navigation.navigate("Registration")}>
                    <Text style={styles.link}>Don't have an account? Sign up</Text>
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