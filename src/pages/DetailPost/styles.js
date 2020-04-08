import { StyleSheet } from "react-native";
import Constants from 'expo-constants';


export default StyleSheet.create({
    container: {
        flex: 1,
        // paddingHorizontal: 24,
        // paddingTop: Constants.statusBarHeight,
    },
    boxImage: {
        position: 'relative',
    },
    image: {
        //   flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        width: '100%',
        height: 198,
    },
    headerIcon: {
        position: 'absolute',
        // top: 55,
        top: 35,
        left: 25,
    },
    boxText: {
        backgroundColor: '#fafafa',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        padding: 24,
        marginTop: -25,
        // flex: 1,

        shadowColor: '#999',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 6,
        shadowRadius: 10,

        elevation: 10,
    },
    boxHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    boxHeaderText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#3b3b3b'
    },
    postText: {
        color: '#888888',
        fontSize: 16,
        marginBottom: 20
    },
    hotelsTitulo: {
        color: '#3b3b3b',
        fontSize: 18,
        fontWeight: 'bold'
    },
    hotelsViewAllButton: {

    },
    hotelsViewAllButtonText: {
        color: '#737380',
        fontSize: 15
    },
    hotelCard: {
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 8,
        padding: 15,
        marginBottom: 15,
        borderWidth: 0.25,
        borderColor: '#737380'
    },
    hotelCardImage: {
        // backgroundColor: 'tomato',
        width: 56,
        height: 63,
        // padding: 15
    },
    hotelCardInfo: {
        width: 220,
        height: 62,
        marginLeft: 15
    },
    hotelCardInfoTitulo: {
        fontSize: 15,
        color: '#000',
        fontWeight: 'bold'
    },
    hotelCardInfoTexto: {
        fontSize: 12,
        color: '#888888',
    },
    search: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    searchInput: {
        marginTop: 20,
        height: 35,
        padding: 12,
        width: '100%',
        backgroundColor: '#c9c9c9',
        color: '#fff',
        borderRadius: 8
    },
    showPost: {
        marginTop: 20,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    lugarList: {
        marginBottom: 30
    },
    paises: {
        marginRight: 10,
        borderRadius: 15,
        flexDirection: 'row',
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
    },
    paisesText: {
        color: '#fff',
        fontSize: 18,
        position: 'absolute',
    },
    destinations: {
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 25,
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
        padding: 20,
    },
    destinationsTextCity: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    destinationsTextCountry: {
        fontSize: 14,
    },
})