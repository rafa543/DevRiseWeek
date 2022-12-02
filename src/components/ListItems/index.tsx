import { useState } from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";


interface Filme {
    value: string
}

interface Filmes {
    filmes: Filme[]
    title: string
}

const ItemView = ({ filme }: any) => {
    return (
        <View>
            <TouchableOpacity>
                <Image style={{ width: 85, height: 125, marginRight: 8, marginBottom: 30, borderRadius: 6 }} source={{
                    uri: `${filme.value}`,
                }} />
            </TouchableOpacity>
        </View>
    );
};

export default function ListItems({ filmes, title }: Filmes) {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
            <FlatList
                data={filmes}
                renderItem={({ item }) => (
                    <ItemView
                        filme={item}
                    />
                )}
                horizontal={true}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}