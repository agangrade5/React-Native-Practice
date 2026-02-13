import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../utils/Colors';

export default function CategoriesList({ categories }) {
    const CategoryCard = ({ item }) => (
        <TouchableOpacity style={styles.categoryCard}>
            <View style={[styles.categoryIcon, { backgroundColor: item.color }]}>
                <Ionicons name={item.icon} size={28} color={Colors.primary} />
            </View>
            <Text style={styles.categoryName}>{item.name}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.section}>
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Categories</Text>
                <TouchableOpacity>
                    <Text style={styles.viewAllText}>View All</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={categories}
                renderItem={({ item }) => <CategoryCard item={item} />}
                keyExtractor={(item) => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.categoriesList}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    section: {
        marginTop: 15,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 10,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        paddingLeft: 1,
    },
    viewAllText: {
        fontSize: 14,
        color: '#8B5CF6',
        fontWeight: '600',
    },
    categoriesList: {
        paddingHorizontal: 20,
    },
    categoryCard: {
        alignItems: 'center',
        width: 80,
        marginRight: 5,
    },
    categoryIcon: {
        width: 55,
        height: 55,
        borderRadius: 33,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
    },
    categoryName: {
        fontSize: 12,
        color: '#333',
        textAlign: 'center',
        fontWeight: '500',
    },
});
