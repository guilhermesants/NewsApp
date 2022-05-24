import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    cardArea: {
        backgroundColor: '#f1f1f1',
        height: 380,
        borderRadius: 0,
        marginTop: 7,
        marginHorizontal: 7,
        borderRadius: 10,
        elevation: 15,
        flexDirection: 'column'
    },
    cardImage: {
        height: 270,
        width: '100%',
    },
    cardImageStyle: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    cardTitleNews:{
        color: '#000',
        fontWeight: 'bold',
        paddingTop: 5,
        marginHorizontal: 10
    },
    cardDateNews: {
        color: '#000',
        fontWeight: 'bold',
        marginHorizontal: 10,
        textAlign: 'right'
    },
    cardButtons: {
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 10,
        height: '10%',
        justifyContent: 'flex-end',
        flexDirection: 'row'
    },
    cartButtonMoreInfo: {
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
        justifyContent: 'space-evenly',
        width: 100,
        height: 30,
        borderWidth: 0.3,
        borderColor: '#000'
    },
    cardButtonShare: {
        marginLeft: 10,
        marginTop: 10,
        borderRadius: 40,
        width: 32,
        height: 32,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardTextMoreInfo: {
        color: '#000',
        fontWeight: 'bold',
    }
})