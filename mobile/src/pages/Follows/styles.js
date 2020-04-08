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
    search: {
        alignItems: 'center',
        flexDirection: 'row',
        position: 'relative',
    },
    searchInput: {
        marginTop: 0,
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
    follows: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 20,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#707070'
    },
    followAvatar: {
        width: 45,
        height: 45,
        borderRadius: 90,
        borderWidth: 1,
        borderColor: '#707070'
    },
    followData: {
        flexDirection: 'row',
        // backgroundColor: '#321da4',
        flex: 1,
        justifyContent: 'space-around',
    },
    followName: {
        // backgroundColor: '#f04045',
        fontSize: 16,
        fontWeight: 'bold'
    },
    followButtonConfirm: {
        backgroundColor: '#26C400',
        height: 26,
        width: 90,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 180
    },
    followButtonSeguir: {
        backgroundColor: '#463EC9'
    },
    followButtonText: {
        color: '#ffffff',
        fontSize: 12,
        fontWeight: 'bold'
    },
    followButtonCancel: {
        backgroundColor: '#ffffff',
        borderRadius: 52,
        width: 26,
        height: 26,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#707070'
    },
});