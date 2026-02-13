import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import Header from '../components/home/Header';
import SearchBar from '../components/home/SearchBar';
import OffersSlider from '../components/home/OffersSlider';
import CategoriesList from '../components/home/CategoriesList';
import LatestBusinessList from '../components/home/LatestBusinessList';

import { offersData, categoriesData, businessData } from '../data/homeData';
import Colors from '../utils/Colors';

export default function Home() {
    return (
        <ScrollView 
            style={styles.container} 
            showsVerticalScrollIndicator={false}
        >
            <Header />
            <SearchBar />
            <OffersSlider offers={offersData} />
            <CategoriesList categories={categoriesData} />
            <LatestBusinessList businesses={businessData} />
            <View style={styles.bottomSpacing} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    bottomSpacing: {
        height: 10,
    },
});
