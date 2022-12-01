import { useState } from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";


interface Filme {
    value: string
}

interface Filmes {
    filmes: Filme[]
}

const ItemView = ({ filme }: any) => {
    return (
        <View>
            <Image style={{ width: 85, height: 125, marginRight: 8 }} source={{
                uri: `${filme.value}`,
            }} />
        </View>
    );
};

export default function ListItems({ filmes }: Filmes) {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Filmes</Text>
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