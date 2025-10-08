// screens/ProductDetailScreen.js
import React from "react";
import { View, Text, Image, Button, StyleSheet, ScrollView } from "react-native";

export default function ProductDetail({ route }) {
    const { product } = route.params;

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image source={{ uri: product.image }} style={styles.image} />
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.price}>R{product.price}</Text>
            <Text style={styles.description}>{product.description}</Text>
            <Button title="Add to Cart" onPress={() => alert("Added to cart")} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        padding: 20,
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: "contain",
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginVertical: 10,
        textAlign: "center",
    },
    price: {
        fontSize: 16,
        color: "green",
        marginBottom: 10,
    },
    description: {
        fontSize: 14,
        textAlign: "center",
        marginBottom: 20,
    },
});
