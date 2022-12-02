import { AntDesign, Entypo, Feather } from '@expo/vector-icons';
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function Hinglight() {
    return (
        <ImageBackground source={require("../../assets/capa.png")} resizeMode="cover" style={styles.image}>
            {/* <View style={{ marginTop: "65%" }}> */}
            <View style={{ marginTop: 250 }}>
                <View style={styles.capa}>
                    <View style={styles.tag}>
                        <Text style={styles.tagTitle}>Filme</Text>
                    </View>
                    <Text style={styles.title}>Episódio I</Text>
                    <Text style={styles.subTitle}>A Ameaça Fantasma</Text>
                </View>

                <View style={styles.botoes}>
                    <TouchableOpacity style={styles.favButton}>
                        <Feather name="plus-circle" size={24} color="#E5E5E5" />
                        <Text style={styles.textFavButton}>Favoritos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonPlay}>
                        <Entypo name="controller-play" size={24} color="black" />
                        <Text style={styles.textButtonPlay}>Assistir</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.favButton}>
                        <AntDesign name="infocirlceo" size={24} color="white" />
                        <Text style={styles.textFavButton}>Saiba mais</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </ImageBackground>
    )
}