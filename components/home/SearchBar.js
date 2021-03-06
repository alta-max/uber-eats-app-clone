import React from 'react'
import { View, Text } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from "react-native-vector-icons/Ionicons"
import AntDesign from "react-native-vector-icons/AntDesign"

export default function SearchBar() {
    return (
        <View style={{ marginTop: 15, flexDirection: "row" }}>
            <GooglePlacesAutocomplete
                placeholder="Search"
                styles={{
                    textInput: {
                        backgroundColor: "#eee",
                        borderRadius: 20,
                        fontWeight: "700",
                        marginTop: 7
                    },
                    textInputContainer: {
                        backgroundColor: "#eee",
                        borderRadius: 50,
                        flexDirection: "row",
                        alignItems: "center",
                        marginRight: 10
                    }
                }}
                renderLeftButton={() => <View>
                    <Ionicons name="location-sharp" size={24} style={{ marginLeft: 10 }} />
                </View>}
                renderRightButton={() => <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: "white", padding: 9, borderRadius: 60, marginRight: 8 }}>
                    <AntDesign name="clockcircle" size={11} style={{ marginRight: 6 }} />
                    <Text>Search</Text>
                </View>}
            />
        </View>
    )
}
