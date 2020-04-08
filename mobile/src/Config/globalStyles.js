import { StyleSheet } from "react-native";


export default StyleSheet.create({
    shadow: {
        shadowColor: '#999',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 6,
        shadowRadius: 10,

        elevation: 1,
    },
    destinations: {
        borderRadius: 8,
        backgroundColor: '#fafafa',
        marginBottom: 10,
        shadowColor: '#999',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 6,
        shadowRadius: 10,

        elevation: 1,
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
    destinationsButton: {
        backgroundColor: '#463EC9',
        right: -15,
        width: 60,
        height: 26,
        borderTopLeftRadius: 12,
        borderBottomLeftRadius: 12,
        justifyContent: 'center',
        alignItems: 'center'
    },
    destinationsButtonText: {
        color: '#ffffff',
        fontSize: 12,
        fontWeight: 'bold'
    }
})