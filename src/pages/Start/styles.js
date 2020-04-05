import { StyleSheet } from "react-native";



export const styles = StyleSheet.create({
    Container: {
        flex: 1,
        paddingHorizontal: 24,
        justifyContent: 'flex-end'
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    Texto: {
        color: '#ffffff',
        fontSize: 18,

        alignItems: 'center'
    },
    ButtonArea: {
        backgroundColor: '#fff',
        padding: 24,
        justifyContent: 'center',
        alignContent: 'center',
        position: 'absolute',
        bottom: 0,
    },
    Button: {
        backgroundColor: '#F38000',
        borderRadius: 25,
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
        bottom: 0
    }

});