import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../utils/Colors';

export default function LatestBusinessList({ businesses }) {
    const BusinessCard = ({ item }) => (
        <TouchableOpacity style={styles.businessCard}>
            <View style={[styles.businessImage, { backgroundColor: item.backgroundColor }]}>
                <Ionicons name={item.icon} size={50} color="rgba(0,0,0,0.1)" />
            </View>
            <View style={styles.businessInfo}>
                <Text style={styles.businessTitle}>{item.title}</Text>
                <Text style={styles.businessName}>{item.name}</Text>
                <View style={styles.businessFooter}>
                    <View style={styles.categoryBadge}>
                        <Text style={styles.categoryBadgeText}>{item.category}</Text>
                    </View>
                    <View style={styles.rating}>
                        <Ionicons name="star" size={14} color="#FFD700" />
                        <Text style={styles.ratingText}>{item.rating}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.section}>
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Latest Business</Text>
                <TouchableOpacity>
                    <Text style={styles.viewAllText}>View All</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={businesses}
                renderItem={({ item }) => <BusinessCard item={item} />}
                keyExtractor={(item) => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.businessList}
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
    businessList: {
        paddingHorizontal: 20,
    },
    businessCard: {
        width: 160,
        backgroundColor: '#fff',
        borderRadius: 15,
        overflow: 'hidden',
        marginRight: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    businessImage: {
        width: '100%',
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
    },
    businessInfo: {
        padding: 12,
    },
    businessTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 4,
    },
    businessName: {
        fontSize: 12,
        color: '#666',
        marginBottom: 8,
    },
    businessFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    categoryBadge: {
        backgroundColor: '#E8D5F2',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 12,
    },
    categoryBadgeText: {
        fontSize: 10,
        color: '#8B5CF6',
        fontWeight: '600',
    },
    rating: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    ratingText: {
        fontSize: 12,
        color: '#666',
        fontWeight: '600',
        marginLeft: 3,
    },
});
