import { StyleSheet, Image } from "react-native";

export var Style = StyleSheet.create({
    main: {
        backgroundColor: "#e3e6ea",
        flex:1,
    },

    toolbar: {
        height: 50,
        backgroundColor: "#25219e"
    },
    dashboard: {
        height: 50,
        backgroundColor: "#FFF",
        borderRadius: 5,
        borderColor: "red",
        marginTop: 5,
        marginLeft:5,
        marginRight: 5, 
    },

    dashText: {
        fontFamily: "Georgia",
        fontWeight: "bold",
        fontSize: 20,
        color: "#2d2e30",
        paddingLeft: 10,
        paddingVertical: 10
    },

    profile: {
        flex: 1,
        backgroundColor: "#fff",
        marginTop: 5,
        borderRadius: 2,
        marginLeft:5,
        marginRight: 5,
        elevation: 10
    },

    profileImage: {
        borderRadius: 50,
        flex: 0.5
    },

    image: {
        borderRadius: 35,
        height: 80,
        width: 70,
        transform: [
            {scaleX: 1.5}
        ],
        marginLeft: 30,
        marginTop: 10
    },

    profileName: {
        flex: 0.5,
        marginVertical: 10,
        marginHorizontal: 10
    },

    section1: {
        flex: 1,
        flexDirection: "row"
    },

    profileAddress: {
        flex: 0.5,
        paddingTop: 10

    },

    profileCrn: {
        flex: 0.5,
        paddingTop: 10
    },

    profileSince: {
        marginVertical: 0
    },

    profileCompleteness: {
        flex: 1
    },

    name: {
        fontFamily: "Georgia",
        fontSize: 20,
        color: "#2d2e30"
    },

    nameRest: {
        fontFamily: "Georgia",
        fontSize: 15,
        color: "#2d2e30"
    },

    crnText: {
        fontFamily: "Georgia",
        fontSize: 16,
        color: "#2d2e30",
        paddingHorizontal: 15,
    },

    addressText: {
        fontFamily: "Georgia",
        fontSize: 16,
        color: "#2d2e30",
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },

    portfolio: {
        flex: 1,
        height: 100,
        width: 400,
        marginTop: 5,
        backgroundColor: "#fff",
        marginLeft:5,
        marginRight: 5,
        borderRadius: 2,
        elevation: 10,
    },

    portfolioHead: {
        flex: 0.3,
        flexDirection: "row"       
    },

    portfolioHeader: {
        flex: 1,
    },
    
    portfolioBody: {
        flex: 1
    },

    portfolioHeadText1: {
        fontFamily: "Georgia",
        fontWeight: "bold",
        fontSize: 20,
        color: "#2d2e30",
        paddingLeft: 10,
        paddingVertical: 10,
        
    },

    portfolioHeadText2: {
        fontFamily: "Georgia",
        fontSize: 20,
        color: "#2d2e30",
        paddingHorizontal: 10,
        paddingVertical: 10
    },

    totalCorps: {
        flex: 0.5,
        paddingHorizontal: 15,
    },

    portfolioValue: {
        flex: 0.5
    },

    portfolioReturn: {
        flex: 0.5,
        paddingHorizontal: 15,
    },

    portfolioReturnInception: {
        flex: 0.5
    },
    section2: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },

    mainTextPortfolio: {
        color: "green",
        fontSize: 24,
        fontWeight: "bold",
        fontFamily: "Georgia"
    },

    subTextPortfolio: {
        color: "#111111",
        fontSize: 15,
        fontFamily: "Georgia",
        flexWrap: "wrap"

    },

    progressBarStyle: {
        flex: 1,
        padding: 15,
    },

    iconS: {
        marginHorizontal: 20
    },

    addressText: {
        paddingHorizontal: 10,
        fontSize: 15,
    },

    singleContactView: {
        flex: 1,
        flexDirection: "row",
        marginTop: 5
        // justifyContent: "center",
        // alignItems: "center",
    },

    iconS: {
        marginHorizontal: 10,
        marginTop: 2,
    },


});