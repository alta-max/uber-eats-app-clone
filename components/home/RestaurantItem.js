import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

const YELP_API_KEY =
    "bdRJutLhFAQJ36t7b89CWjHFBU4OKzjt9wvZzcY-nkgmvTqlNMjZWV1eG7iBQ9R74SyfxRg9LWnBAkZY06BtAZAe4d2dfX-2vuX8a1l5V7foctHfX9UKEyoM5ts3YXYx";

export const localRestaurants = [
    {
        name: "Beachside Bar",
        image_url:
            "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 4.5,
    },
    {
        name: "Benihana",
        image_url:
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 3.7,
    },
    {
        name: "India's Grill",
        image_url:
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        categories: ["Indian", "Bar"],
        price: "$$",
        reviews: 700,
        rating: 4.9,
    },
];

export default function RestaurantItem({ navigation }) {

    return (
        <>
            {localRestaurants.map((restaurant, index) => (
                <TouchableOpacity
                    key={index}
                    activeOpacity={1}
                    style={{ marginBottom: 30 }}
                    onPress={() =>
                        navigation.navigate("RestaurantDetail", {
                            name: restaurant.name,
                            image: restaurant.image_url,
                            price: restaurant.price,
                            rating: restaurant.rating,
                            categories: restaurant.categories,
                            reviews: restaurant.reviews
                        })
                    }
                >
                    <View
                        style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}
                    >
                        <RestaurantImage restaurant={restaurant} />
                        <RestaurantInfo restaurant={restaurant} />
                    </View>
                </TouchableOpacity>
            ))}
        </>
    )
}

const RestaurantImage = ({ restaurant }) => (
    <>
        <Image source={{ uri: restaurant.image_url }}
            style={{ width: "100%", height: 180 }}
        />
        <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
            <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
        </TouchableOpacity>
    </>

)

const RestaurantInfo = ({ restaurant }) => (
    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 10 }}>
        <View>
            <Text style={{ fontWeight: "bold", fontSize: 17 }}>{restaurant.name}</Text>
            <Text style={{ color: "grey" }}>30-45 min</Text>
        </View>
        <Text style={{ backgroundColor: "#eee", borderRadius: 20, padding: 5 }}>{restaurant.rating}</Text>
    </View>
)
