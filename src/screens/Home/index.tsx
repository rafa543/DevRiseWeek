import { ScrollView, View } from "react-native";
import Hinglight from "../../components/Hinglight";
import ListItems from "../../components/ListItems";
import { styles } from "./styles";
import { filmes } from "../../data";
import { personagens } from "../../data";

export default function Home() {
    return (
        <View style={styles.container}>
            <ScrollView>
                <Hinglight />
                <ListItems filmes={filmes}/>
                <ListItems filmes={personagens}/>
            </ScrollView>
        </View>
    )
}