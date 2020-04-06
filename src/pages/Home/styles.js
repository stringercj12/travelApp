import { StyleSheet } from "react-native";
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor: '#fff'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerIcon: {
        color: '#312DA4'
    },
    headerText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#312DA4'
    },
    search: {
        alignItems: 'center',
        flexDirection: 'row',
        position: 'relative',
    },
    searchInput: {
        marginTop: 20,
        height: 41,
        paddingLeft: 35,
        width: '100%',
        backgroundColor: '#c9c9c9',
        color: '#fff',
        borderRadius: 8,
        position: 'relative',
    },
    searchInputIcon: {
        position: 'absolute',
        bottom: 12,
        left: 8
    },
    showPost: {
        marginTop: 13,
        marginBottom: 13,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    showPostButton: {

    },
    showPostButtonText: {
        color: '#737380',
        fontSize: 15
    },
    postList: {
        // marginTop: 20
        marginBottom: 30
    },
    lugarList: {
        // marginTop: 20
    },
    paises: {
        // padding: 35,
        // paddingHorizontal: 40,
        // width: '48%',
        // width: 66,
        // height: 58,
        marginRight: 10,
        borderRadius: 15,
        flexDirection: 'row',
        // backgroundColor: '#312DA4',
        position: 'relative',
    },
    paisesItem: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    paisesImage: {
        borderRadius: 8,
        width: 141,
        height: 85,
        // backgroundColor: '#312DA4',
    },
    paisesText: {
        color: '#fff',
        fontSize: 18,
        // color: '#312DA4',
        position: 'absolute',
    },
    boxDestinations: {
        marginBottom: 50
    },
    destinations: {
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 10,
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

});