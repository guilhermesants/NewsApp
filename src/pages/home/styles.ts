import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: '#f1f1f1',
        paddingHorizontal: 0,
        paddingVertical: 0,
        width: '100%'
      },
    text_header: {
        fontSize: 17,
        color: '#000',
        fontWeight: 'bold',
        paddingHorizontal: 5
    },
    text_info: {
        fontSize: 15,
        color: '#000',
        fontWeight: 'bold',
        paddingHorizontal: 5
    },
    view_header: {
        backgroundColor: '#f1f1f1',
        width: '100%',
        paddingHorizontal: 5,
        padding: 5,
        elevation: 15
    },
    viewInput: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 2,
    },
    viewIndicator: {
      flex: 1,
      justifyContent: 'center'
    }
});