import { StyleSheet } from "react-native";

export const SplashScreenStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: 'center',
    },

    textContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonContainer: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: 'center',
        marginBottom: "12%",
    },

    textWelcome: {
        fontFamily: 'arial',
        fontSize: 32,
    },

    textBuilder: {
        fontFamily: 'Georgia',
        fontSize: 42,
        fontWeight: 'bold',
        paddingHorizontal: "5%",
    },

    textEdge: {
        color: "#F16824"
    },
})