import { StyleSheet } from "react-native";
import Constants from 'expo-constants';


export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor: '#fff'
    },
    header: {
        paddingHorizontal: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    headerIcon: {
        color: '#fff',
        // color: '#312DA4',
        position: 'absolute',
        top: 25,
        left: 25,
        fontSize: 32
    },
    follow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        height: 50,
        paddingHorizontal: 24,
        borderBottomWidth: 0.25,
        borderBottomColor: '#BCBCBC',
        borderTopWidth: 0.25,
        borderTopColor: '#BCBCBC',
    },
    followText: {
        color: '#545454',
        fontSize: 14
    },
    followButton: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        // justifyContent: 'space-between',
    },
    followButtonText: {

    },
    followButtonIcon: {
        width: 5,
        height: 5,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2,
        marginLeft: 5
    },
    followSuccess: {
        backgroundColor: '#26C400',
    },
    followDanger: {
        backgroundColor: '#D13737',
    },
    headerText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#312DA4'
    },
    boxDestinations: {
        paddingHorizontal: 24,
        marginBottom: 50,
        // paddingBottom: 20
    },

})