import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    view_image: {
        backgroundColor: '#f1f1f1',
        height: 480,
        borderRadius: 0,
        paddingHorizontal: 5,
        paddingVertical: 10, 
        marginTop: 7,
        marginHorizontal: 7,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 15
    },
    box_image: {
        height: 270,
        width: '100%',
        borderRadius: 10,
        marginTop: 20
    },
    text_area: {
        justifyContent: 'center',
        paddingTop: 30
    },
    text: {
        textAlign: 'center',
        color: '#000',
        fontWeight: 'bold',
        paddingVertical: 10
    },
    button: {
        backgroundColor: '#eba417',
        padding: 8,
        borderRadius: 7,
        elevation: 15,
        margin: 20,
    },
    buttonText: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginHorizontal: 3
      },
    viewButtons: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around'
    },
    shareIcon: {
        width: 20,
        height: 20
    }
})