import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Header from '../components/home/Header';
import SearchBar from '../components/home/SearchBar';
import OffersSlider from '../components/home/OffersSlider';
import CategoriesList from '../components/home/CategoriesList';
import LatestBusinessList from '../components/home/LatestBusinessList';

import { offersData, categoriesData, businessData } from '../data/homeData';
import Colors from '../utils/Colors';

export default function Home() {
    return (
        <SafeAreaView style={styles.safe} edges={['top']}>
            <ScrollView 
                style={styles.container} 
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                <Header />
                <SearchBar />
                <OffersSlider offers={offersData} />
                <CategoriesList categories={categoriesData} />
                <LatestBusinessList businesses={businessData} />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safe: {
        flex: 1,
        backgroundColor: Colors.primary, // Match header color
    },
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    scrollContent: {
        paddingBottom: 3, // Space for bottom tab bar
    },
});
