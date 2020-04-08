import { StyleSheet } from "react-native";


export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        // paddingTop: Constants.statusBarHeight + 20,
        paddingTop: 50,
        backgroundColor: '#fff',
    },
    Header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerPicker: {
        backgroundColor: '#321da4',
        width: 160,
        height: 31,
        borderRadius: 5,
        justifyContent: 'center',
    },
    headerPickerIcon: {
        top: -20,
        right: -140

    },
    headerPickerText: {
        color: '#fff'
    },
    HeaderIcon: {
        color: '#312DA4'
    },
    HeaderText: {
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
        backgroundColor: '#fafafa',
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