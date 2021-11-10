import React, { useState, useEffect } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import Categories from '../components/home/Categories';
import HeaderTabs from '../components/home/HeaderTabs'
import RestaurantItem from '../components/home/RestaurantItem';
import SearchBar from '../components/home/SearchBar';
import { localRestaurants } from '../components/home/RestaurantItem';
import BottomTabs from '../components/home/BottomTabs';

export default function Home({ navigation }) {
    const [restaurantData, setRestaurantData] = useState(localRestaurants);

    return (
        <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
            <View style={styles.container}>
                <HeaderTabs />
                <SearchBar />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantItem restaurantData={restaurantData} navigation={navigation} />
            </ScrollView>
            <View>
                <BottomTabs />
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        marginTop: '6%',
        backgroundColor: "#fff",
        padding: 15
    }
});
