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
    cardIconShare: {
        width: 24,
        height: 24
    },
    cardButtons: {
        width: '100%',
        alignItems: 'flex-end',
        paddingHorizontal: 10,
        height: '10%',
        justifyContent: 'flex-end'
    }
})