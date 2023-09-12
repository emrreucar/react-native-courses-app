import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View, FlatList } from "react-native";
import CourseInput from "./components/CourseInput";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const [courses, setCourses] = useState([]);

  const startModal = () => {
    setModalIsVisible(true);
  };

  const endModal = () => {
    setModalIsVisible(false);
  };

  const addCourse = (courseTitle) => {
    // console.log(courseTitle);
    endModal();
    setCourses((currentCourses) => [
      ...currentCourses,
      { text: courseTitle, id: Math.random().toString() },
    ]);
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Button title="Kurs Ekle" color="red" onPress={startModal} />
        <CourseInput
          modalIsVisible={modalIsVisible}
          onAddCourse={addCourse}
          onCancel={endModal}
        />
        <View>
          <FlatList
            data={courses}
            renderItem={({ item }) => {
              return (
                <View style={styles.courseItem}>
                  <Text style={styles.courseText}> {item.text} </Text>
                </View>
              );
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  courseItem: {
    backgroundColor: 'gray',
    margin: 8,
    borderRadius: 10
  },
  courseText: {
    padding: 8,
    color: 'white',
    fontSize: 24
  },
});
