import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        // flex: 1,
        justifyContent: "center",
        width: "100%",
        height: 460,
        // marginBottom: "30%"
    },
    capa: {
        marginHorizontal: 24,
        marginBottom: 20
    },
    tag: {
       width: 64,
       height: 24,
       backgroundColor: '#E60C0D',
       borderRadius: 24,
       alignItems: 'center',
       justifyContent: 'center',
       marginBottom: 5
    },
    tagTitle: {
        color: '#ffff',
        alignItems: 'center',
    },
    title: {
        color: '#FFFFFF',
        fontSize: 28,
        fontWeight: 'bold',
        lineHeight: 32.5
    },
    subTitle: {
        fontSize: 16,
        color: '#FFFFFF',
        lineHeight: 22.63
    },
    botoes: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 24
    },
    favButton: {
        alignItems: 'center'
    },
    textFavButton: {
        color: '#fff'
    },
    buttonPlay: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        height: 36,
        paddingHorizontal: 10,
        borderRadius: 8
    },
    textButtonPlay: {
        fontSize: 14,
        lineHeight: 17.6,
        fontWeight: 'bold'
    }
})