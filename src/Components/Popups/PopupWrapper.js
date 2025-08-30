import { useState, useImperativeHandle } from 'react';
import { Modal, StyleSheet, TouchableOpacity, View } from 'react-native';

const PopupWrapper = props => {
  useImperativeHandle(props?.reference, () => ({
    hide: hide,
    show: show,
    isVisible,
  }));

  const [visible, setVisible] = useState(false);

  const hide = () => {
    setVisible(false);
  };

  const show = () => {
    setVisible(true);
  };

  const isVisible = () => {
    return visible;
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      presentationStyle="overFullScreen"
      statusBarTranslucent={true}
      style={styles.modal}
    >
      <View style={[styles.mainContainer, props.popupContainer]}>
        <TouchableOpacity
          onPress={props?.handleBgPress ?? hide}
          activeOpacity={0.9}
          disabled={props?.disabledBgPress}
          style={styles.backdropContainer}
        />

        <View style={[styles.contentContainer, props.style]}>
          {props.children}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
  },

  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  backdropContainer: {
    backgroundColor: '#101C395C',
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },

  contentContainer: {},
});
export default PopupWrapper;
