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
        height: 299,
    },
    headerIcon: {
        position: 'absolute',
        // top: 55,
        top: 35,
        left: 25,
    },
    boxText: {
        backgroundColor: '#312DA4',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        padding: 24,
        marginTop: -25

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
        color: '#fff'
    },
    postText: {
        color: '#888888',
        fontSize: 13,
        marginBottom: 20
    },
    hotelCard: {
        // padding: 15,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 8
    },
    hotelCardImage: {
        backgroundColor: 'tomato',
        // width: '20%',
        // height: 63,
        padding: 15
    },
    hotelCardInfo: {
        padding: 15,
        // width: '80%',
        // width: '100%',
        // marginLeft: 15
        backgroundColor: 'orange',
    },
    hotelCardInfoTitulo: {

    },
    hotelCardInfoTexto: {

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