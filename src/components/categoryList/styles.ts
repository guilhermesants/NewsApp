import {StyleSheet} from 'react-native';

let text = {
    color: '#000',
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center'
}

export const styles = StyleSheet.create({
    button: {
        backgroundColor: 'transparent',
        paddingVertical: 3,
        paddingHorizontal: 7,
    },
    colorEnable: {
        ...text,
        color: '#eba419'
    },
    colorDisable: {
        ...text
    }
})