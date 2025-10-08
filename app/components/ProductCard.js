import React from "react";
import {
    TouchableOpacity,
    View,
    Text,
    Image,
    StyleSheet
} from "react-native";

export default function ProductCard({ product, onPress }) {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <Image source={{ uri: product.image }} style={styles.image} />
            <Text style={styles.title} numberOfLines={2}>{product.title}</Text>
            <Text style={styles.price}>R{product.price}</Text>
            <Text style={styles.category}>{product.category}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#f9f9f9",
        padding: 15,
        marginVertical: 8,
        marginHorizontal: 10,
        borderRadius: 10,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    image: {
        width: 120,
        height: 120,
        resizeMode: "contain",
        marginBottom: 10,
    },
    title: {
        fontSize: 14,
        fontWeight: "bold",
        marginVertical: 5,
        textAlign: "center",
    },
    price: {
        fontSize: 16,
        color: "green",
        fontWeight: "600",
        marginBottom: 5,
    },
    category: {
        fontSize: 12,
        color: "#666",
        textTransform: "capitalize",
    },
});