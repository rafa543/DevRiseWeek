import { useState } from "react";
import { FlatList, Image, Text, View } from "react-native";
import Hinglight from "../../components/Hinglight";
import { styles } from "./styles";

const dummyArray = [
    { id: '1', value: 'solo.png' },
    { id: '2', value: 'B' },
    { id: '3', value: 'C' },
    { id: '4', value: 'D' }
];

interface Filme {
    id: string
    value: string
}

const ItemView = ( {item}: Filme) => {

    return (
        // Single Comes here which will be repeatative for the FlatListItems
        <View >
            <Image source={require(`../../assets/solo.png`)} />
            <Text style={{color: "white"}}>{item.value}</Text>
        </View>
    );
};

export default function Home() {
    const [listItems, setListItems] = useState(dummyArray);
    return (
        <View style={styles.container}>
            <Hinglight />
            <View>
                <Text>Filmes</Text>
                <FlatList
                    data={listItems}
                    renderItem={ItemView}
                    horizontal={true}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        </View>
    )
}