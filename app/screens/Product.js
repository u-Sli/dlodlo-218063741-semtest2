import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    FlatList,
    ActivityIndicator,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import ProductCard from "../components/ProductCard";

export default function Product({ navigation }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("all");

    const fetchProducts = async (category = "all") => {
        try {
            setLoading(true);
            setError(null);

            const url =
                category === "all"
                    ? "https://fakestoreapi.com/products"
                    : `https://fakestoreapi.com/products/category/${category}`;

            const response = await fetch(url);
            const data = await response.json();
            setProducts(data);
        } catch (err) {
            setError("Failed to fetch products.");
        } finally {
            setLoading(false);
        }
    };

    const fetchCategories = async () => {
        try {
            const res = await fetch("https://fakestoreapi.com/products/categories");
            const data = await res.json();
            setCategories(data);
        } catch (err) {
            console.error("Failed to fetch categories");
        }
    };

    useEffect(() => {
        fetchProducts();
        fetchCategories();
    }, []);

    const handleProductPress = (product) => {
        navigation.navigate("ProductDetail", { product });
    };

    if (loading) {
        return (
            <View style={styles.center}>
                <ActivityIndicator size="large" color="#4CAF50" />
                <Text>Loading products...</Text>
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.center}>
                <Text>{error}</Text>
                <TouchableOpacity onPress={() => fetchProducts()}>
                    <Text style={{ color: "blue", marginTop: 10 }}>Try Again</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.categoryContainer}>
                <TouchableOpacity
                    style={[
                        styles.categoryButton,
                        selectedCategory === "all" && styles.activeCategory,
                    ]}
                    onPress={() => {
                        setSelectedCategory("all");
                        fetchProducts("all");
                    }}
                >
                    <Text>All</Text>
                </TouchableOpacity>

                {categories.map((cat) => (
                    <TouchableOpacity
                        key={cat}
                        style={[
                            styles.categoryButton,
                            selectedCategory === cat && styles.activeCategory,
                        ]}
                        onPress={() => {
                            setSelectedCategory(cat);
                            fetchProducts(cat);
                        }}
                    >
                        <Text>{cat}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <FlatList
                data={products}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <ProductCard 
                        product={item} 
                        onPress={() => handleProductPress(item)}
                    />
                )}
                numColumns={2}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: "#fff",
    },
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    categoryContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        marginBottom: 10,
    },
    categoryButton: {
        backgroundColor: "#e0e0e0",
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 20,
        margin: 5,
    },
    activeCategory: {
        backgroundColor: "#4CAF50",
    },
});