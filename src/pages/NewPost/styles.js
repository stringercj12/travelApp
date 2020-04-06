import { StyleSheet } from "react-native";
import Constants from 'expo-constants';


export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor: '#FFFFFF'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30
    },
    headerIcon: {
        color: '#fff',
        // color: '#312DA4',
        position: 'absolute',
        top: 25,
        left: 25,
        fontSize: 32
    },
    headerText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#312DA4'
    },
    scrollView: {
        marginBottom: 30
    },
    picker: {
        // backgroundColor: '#321da4',
        borderColor: '#BCBCBC',
        borderWidth: 1,
        borderRadius: 5,
        height: 34,
        justifyContent: 'center',
        marginBottom: 20,
    },
    picture: {
        borderColor: '#BCBCBC',
        borderWidth: 1,
        borderRadius: 5,
        height: 174,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    input: {
        borderColor: '#BCBCBC',
        borderWidth: 1,
        borderRadius: 5,
        height: 40,
        marginBottom: 20,
        padding: 7
    },
    button: {
        backgroundColor: '#F38000',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 25,
        marginTop: 20
    },
    buttonText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold'
    },
})