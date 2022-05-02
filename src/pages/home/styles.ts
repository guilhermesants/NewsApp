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
        //borderBottomLeftRadius: 10,
        //borderBottomRightRadius: 10,
        elevation: 15
    }, 
    input: {
        backgroundColor: '#eba417',
        color: '#000',
        fontSize: 18,
        padding: 6,
        borderRadius: 7,
        margin: 0,
        marginVertical: 3,
        elevation: 15,
        width: '85%'
      },
    buttonSearch: {
      backgroundColor: '#eba417',
      borderRadius: 7,
      elevation: 15,
      marginVertical: 3,
      padding:18
    },
    searchImage: {
      width: 15,
      height: 15,
      backgroundColor: 'transparent'
    },
    viewInput: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
});