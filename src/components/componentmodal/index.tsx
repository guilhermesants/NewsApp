import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Modal } from 'react-native';
import {styles} from './styles';

interface IPropsModal {
    showModal: boolean;
    message?: string;
    hideModal: () => {};
}

export const ComponentModal = ({showModal, message, hideModal}: IPropsModal) => {

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={showModal}
                onRequestClose={() => {
                    hideModal();
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>{message}</Text>
                        <TouchableOpacity
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => hideModal()}
                            >
                            <Text style={styles.textStyle}>Ok</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}