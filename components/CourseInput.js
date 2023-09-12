import {
  StyleSheet,
  Text,
  View,
  Modal,
  Image,
  TextInput,
  Button,
} from "react-native";
import React, { useState } from "react";

export default function CourseInput({ modalIsVisible, onAddCourse, onCancel }) {
  const [enteredCourseText, setEnteredCourseText] = useState("");

  const addCourseHandler = () => {
    onAddCourse(enteredCourseText); //! bir üst component'e props olarak geçilecek!
    setEnteredCourseText("");
  };

  return (
    <Modal animationType="slide" visible={modalIsVisible}>
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/logo.png")}
        />
        <TextInput
          value={enteredCourseText}
          onChangeText={(text) => setEnteredCourseText(text)}
          style={styles.textInput}
          placeholder="Yeni Kurs Ekle"
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="İptal Et" color="red" onPress={onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="Ekle" color="blue" onPress={addCourseHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightgray",
    padding: 15,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 20,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    width: "100%",
    padding: 10,
    borderRadius: 10,
    borderColor: "pink",
    backgroundColor: "pink",
    fontSize: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 15,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
