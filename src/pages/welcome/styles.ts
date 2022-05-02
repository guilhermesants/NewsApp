import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eba417',
        justifyContent: 'flex-end'
    },
    container: {
        flex: 1
    },
    text_area: {
        paddingVertical: 10,
        paddingLeft: 10,
        margin: 100,
        width: 350
    },
    wellcome_text: {
        textAlign: 'left',
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold',
    },
    input_area: {
        backgroundColor: '#121214',
        width: '100%',
        height: '60%',
        flexDirection:  'column',
        justifyContent: 'center',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },
    input: {
        backgroundColor: '#29292e',
        color: '#f1f1f1',
        fontSize: 18,
        padding: 12,
        borderRadius: 7,
        margin: 30,
        marginVertical: 0
      },
      buttonText: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
      },
      button: {
        backgroundColor: '#eba417',
        padding: 15,
        borderRadius: 7,
        elevation: 20,
        margin: 30
      },
})