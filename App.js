import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  StatusBar, 
  TextInput, 
  Dimensions,
  Platform, 
  ScrollView
} from 'react-native';
import Todo from "./ToDo";

const {height, width} = Dimensions.get("window");

export default class App extends React.Component {
  state ={
    newToDo: ""
  };
  render(){
    const { newToDo } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.title}>Kawai To Do</Text>
        <View style={styles.card}>
          <TextInput 
          style={styles.input} 
          placeholder={"New To Do"} 
          value={newToDo} 
          onChange={this._contorllNewTodo}
          placeholderTextColor={"#999"}
          returnKeyType={"done"}
          autoCorrect={false}
          />
          <ScrollView>
              <Todo />
          </ScrollView>
        </View>
      </View>
    );
  }
  _contorllNewTodo = text =>{
    this.setState({
      newTodo: text
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F23567',
    alignItems: 'center',
  },
  title: {
    color:"white",
    fontSize: 30,
    marginTop: 50,
    fontWeight: "200",
    marginBottom: 30,
  },
  card:{
    backgroundColor: "white",
    flex: 1,
    width: width - 25,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: "rgb(50, 50, 50)",
        shadowOpacity: 0.3,
        shadowRadius: 5,
        shadowOffset:{
          heigth: -1,
          width: 0
        }
      },
      android:{
        elevation: 3,
      }
    })
  },
  input:{
    padding: 20,
    borderBottomColor: "#bbb",
    borderBottomWidth: 1,
    fontSize: 25,
  }
});