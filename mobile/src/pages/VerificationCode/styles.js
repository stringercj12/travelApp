import { StyleSheet } from "react-native";


export default StyleSheet.create({
    Container: {
        flex: 1,
        paddingHorizontal: 20,
    },
    ContainerText: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30,
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },
    Titulo: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#F38000'
    },
    FormContainer: {
        padding: 24,
        paddingBottom: 35,
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    },

    Form: {
        // backgroundColor: '#a9fdf9',
        bottom: -25,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        position: 'absolute',
        flex: 1
    },
    FormInput: {
        padding: 10,
        color: '#737380',
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderBottomColor: '#737380',
        marginBottom: 16
    },
    FormButtom: {
        backgroundColor: '#F38000',
        height: 45,
        borderRadius: 25,
        paddingHorizontal: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    FormButtomText: {
        color: '#fff'
    }
});