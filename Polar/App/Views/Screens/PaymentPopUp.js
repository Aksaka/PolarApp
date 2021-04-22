import React from "react";
import {
  Text,
  View,
  Modal,
  TouchableHighlight,
  StyleSheet,
  Dimensions,
} from "react-native";
import MyButton from '../Components/Button';



export default Popup;
const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  },
  modal: {
    width: "80%",
    height: "20%"
  }
});
