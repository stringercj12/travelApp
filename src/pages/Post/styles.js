import { StyleSheet } from "react-native";
import Constants from 'expo-constants';


export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
        // backgroundColor: '#fff'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20
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
    boxDestinations: {
        marginBottom: 50,
        // paddingBottom: 20
    },
    destinations: {
        borderRadius: 8,
        backgroundColor: '#fafafa',
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        
        elevation: 4,
        // marginBottom: 65
    },
    destinationsImage: {
        width: '100%',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
    },
    destinationsIcon: {
        position: 'absolute',
        right: 0,
        top: 0,
        backgroundColor: '#F38000',
        borderTopRightRadius: 8
    },
    destinationsText: {
        padding: 15,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },

    destinationsTextCity: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    destinationsTextCountry: {
        fontSize: 14,
    },
    destinationsButtonText: {
        color: '#f38000',
        fontSize: 15
    }
})