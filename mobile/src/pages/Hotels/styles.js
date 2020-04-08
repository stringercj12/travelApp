import { StyleSheet } from "react-native";


export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        // paddingTop: Constants.statusBarHeight + 20,
        paddingTop: 50,
        // backgroundColor: '#fff'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10
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
    postList: {
        marginBottom: 130,
    },
    boxDestinations: {
        marginBottom: 50,
        // paddingBottom: 20
    },
    search: {
        alignItems: 'center',
        flexDirection: 'row',
        position: 'relative',
    },
    searchInput: {
        height: 41,
        paddingLeft: 35,
        width: 281,
        backgroundColor: '#c9c9c9',
        color: '#fff',
        borderRadius: 5,
        position: 'relative',
    },
    searchInputIcon: {
        position: 'absolute',
        bottom: 12,
        left: 8
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