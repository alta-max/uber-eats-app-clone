import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"

export default function BottomTabs() {
    return (
        <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 5 }}>
            <Icon name="home" text="Home" />
            <Icon name="search" text="Browse" />
            <Icon name="shopping-bag" text="Grocery" />
            <Icon name="receipt" text="Orders" />
            <Icon name="user" text="Account" />
        </View>
    )
}

const Icon = (props) => (
    <TouchableOpacity>
        <View>
            <FontAwesome5 name={props.name} size={25} style={{ marginBottom: 3, alignSelf: "center" }} />
            <Text>{props.text}</Text>
        </View>
    </TouchableOpacity>
)