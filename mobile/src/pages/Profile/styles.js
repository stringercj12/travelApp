import { StyleSheet } from "react-native";


export default StyleSheet.create({
    container: {
        flex: 1,
        // paddingHorizontal: 24,
        // paddingTop: Constants.statusBarHeight,
        backgroundColor: '#fff'
    },
    boxImage: {
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        resizeMode: "cover",
        justifyContent: "center",
        width: '100%',
        height: 188,
    },
    avatar: {
        width: 112,
        height: 112,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 120,
        marginTop: -40
    },
    camera: {
        backgroundColor: '#E2E2E2',
        width: 32,
        height: 32,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 120,
        right: -80,
        bottom: 35
    },
    detailsProfile: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -25
    },
    detailsProfileName: {
        color: '#000',
        fontSize: 20
    },
    detailsProfileEmail: {
        color: '#707070',
        fontSize: 12
    },
    detailsProfileStatus: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#707070',
        marginTop: 15
    },
    detailsProfileStatusFollowing: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    FollowingNumber: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    FollowingText: {
        color: '#707070',
        fontSize: 12,
    },
    detailsProfileStatusFollowers: {
        borderLeftWidth: 1,
        borderLeftColor: '#707070',
        padding: 16,
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    hotelCard: {
        // padding: 15,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 8
    },
    posts: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 45
    },
    postsImages: {
        width: 157,
        height: 82,
        marginRight: 10,
    },
    postsImage: {
        borderRadius: 8,
        width: '100%',
    },
    showPost: {
        marginTop: 20,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    showPostText: {
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold'
    },
    showPostButton: {

    },
    showPostButtonText: {
        color: '#737380',
        fontSize: 15
    },
})