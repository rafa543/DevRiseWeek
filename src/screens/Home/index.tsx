import { ScrollView, View } from "react-native";
import Hinglight from "../../components/Hinglight";
import ListItems from "../../components/ListItems";
import { styles } from "./styles";
import { filmes } from "../../data";
import { personagens } from "../../data";

export default function Home() {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.container}>
                <Hinglight />
                <ListItems filmes={filmes} title={"Filmes"}/>
                <ListItems filmes={personagens} title={"Personagens"}/>
            </ScrollView>
        </View>
    )
}