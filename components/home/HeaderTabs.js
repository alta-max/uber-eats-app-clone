import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default function HeaderTabs() {

    const [activeTab, setactiveTab] = useState("Delivery")

    return (
        <View style={{ flexDirection: "row", alignSelf: "center" }}>
            <HeaderButton text="Delivery" btnColor="#000" textColor="#fff" activeTab={activeTab} setactiveTab={setactiveTab} />
            <HeaderButton text="Pickup" btnColor="#fff" textColor="#000" activeTab={activeTab} setactiveTab={setactiveTab} />
            {/* HeaderButton  */}
        </View>
    )
}

const HeaderButton = (props) => {
    return <TouchableOpacity style={{ paddingVertical: 6, paddingHorizontal: 16, backgroundColor: props.activeTab === props.text ? "#000" : "#fff", borderRadius: 30 }}
        onPress={() => { props.setactiveTab(props.text) }}>

        <Text style={{ color: props.activeTab === props.text ? "#fff" : "#000", fontSize: 15, fontWeight: "bold" }}>{props.text}</Text>
    </TouchableOpacity >


}
