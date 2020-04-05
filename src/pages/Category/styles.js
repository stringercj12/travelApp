import { StyleSheet } from "react-native";
import Constants from 'expo-constants';


export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },
    Header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    HeaderIcon: {
        color: '#312DA4'
    },
    HeaderText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#312DA4'
    },
    Search: {
        alignItems: 'center',
        flexDirection: 'row',
    },

    SearchInput: {
        marginTop: 20,
        height: 35,
        padding: 10,
        width: '100%',
        backgroundColor: '#c9c9c9',
        color: '#fff',
        borderRadius: 8
    },
    breadcrumb: {
        flexDirection: 'row',
        marginBottom: 20,
        marginTop: 20,
    },
    breadcrumbButton: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        paddingRight: 12,
        paddingLeft: 12,
        marginRight: 8,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#bcbcbc',
    },
    breadcrumbText: {
        // paddingHorizontal: 10,
        // height: 30,
        color: '#737360'
    },
    LugarList: {
        // marginTop: 20
        marginBottom: 30
    },
    Paises: {
        padding: 35,
        // paddingHorizontal: 40,
        // width: '48%',
        // width: 66,
        // height: 58,
        marginRight: 20,
        borderRadius: 15,
        flexDirection: 'row',
        backgroundColor: '#312DA4',
    },
    PaisesText: {
        color: '#fff',
        fontSize: 18,
        // color: '#312DA4',
    },
    Destinations: {
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 25,
        // marginBottom: 65
    },
    DestinationsImage: {
        width: '100%',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
    },
    DestinationsIcon: {
        position: 'absolute',
        right: 0,
        top: 0,
        backgroundColor: '#F38000',
        borderTopRightRadius: 8
    },
    DestinationsText: {
        padding: 20,
    },

    DestinationsTextCity: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    DestinationsTextCountry: {
        fontSize: 14,
    }
});