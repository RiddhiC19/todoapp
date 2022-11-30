import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ListViewBase,
} from 'react-native';
//import { useState,useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  addTodo,
  deleteTodo,
  edittodo,
  filterEmailtodo,
  filterUsertodo,
} from '../redux/action/index';

const Home = () => {
  const [inputData, setInputdata] = useState('');
  const [inputUser, setInputUser] = useState('');
  const [id, setId] = useState(null);
  const [editingTaskIndex, setEditingTaskIndex] = useState(null);
  const [searchEmail, setSearchEmail] = useState('');
  const [searchUserName, setSearchUserName] = useState('');

  // const getFilteredList = () => {
  //   if (!searchValue) return list
  //   return list.filter(
  //     listData => listData.name.toLowerCase() === searchValue.toLowerCase()
  //   )
  // }
  // const FilteredList = getFilteredList()

  const list = useSelector(state => state.todolist.list);
  const dispatch = useDispatch();
  console.log('[list]===>', list);
  const handleAdd = () => {
    var objAdd = {
      //  "id":new Date().getTime().toString(),
      email: inputData,
      username: inputUser,
    };
    if (id === null) {
      //console.log('add called')
      dispatch(addTodo({id: new Date().getTime().toString(), ...objAdd}));
    } else {
      // console.log('edit called')
      dispatch(edittodo({id: id, ...objAdd}));
    }
    //  dispatch(addTodo(objAdd));
    setInputdata('');
    setInputUser('');
    setId(null);
  };

  const searchByEmail = () => {
    dispatch(filterEmailtodo(searchEmail));
  };

  const searchByUsername = () => {
    dispatch(filterUsertodo(searchUserName));
  };
  // const editTaskFromList = () => {

  //   if (id === null) {
  //     //console.log('add called')
  //     dispatch(addTodo(inputData))
  //   } else {

  //    // console.log('edit called')
  //     dispatch(editTodo(editingTaskIndex,inputData))
  //   }
  //   setInputdata('')
  //   setEditingTaskIndex(null);
  // };

  return (
    <View>
      <Text>practice</Text>
      {/* filter view email */}
      <View
        style={{
          flexDirection: 'row',
          marginLeft: 20,
          margin: 10,
          alignSelf: 'center',
        }}>
        <TextInput
          style={{
            borderColor: 'orange',
            borderWidth: 2,
            flexBasis: '50%',
            padding: 10,
          }}
          placeholder="search by email"
          onChangeText={text => setSearchEmail(text)}></TextInput>
        <TouchableOpacity
          style={{backgroundColor: 'orange', borderRadius: 30, marginLeft: 10}}
          onPress={() => searchByEmail()}>
          <Text style={{padding: 15}}>filter by email</Text>
        </TouchableOpacity>
      </View>

      {/* filter view  username*/}
      <View style={{flexDirection: 'row', marginLeft: 20, alignSelf: 'center'}}>
        <TextInput
          style={{
            borderColor: 'orange',
            borderWidth: 2,
            flexBasis: '50%',
            padding: 10,
          }}
          placeholder="search by username"
          onChangeText={text => setSearchUserName(text)}></TextInput>
        <TouchableOpacity
          style={{backgroundColor: 'orange', borderRadius: 30, marginLeft: 10}}
          onPress={() => searchByUsername()}>
          <Text style={{padding: 15}}>filter by username</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TextInput
          style={{
            borderColor: 'black',
            borderWidth: 2,
            margin: 20,
            padding: 10,
          }}
          placeholder="Email"
          value={inputData}
          onChangeText={text => setInputdata(text)}></TextInput>

        <TextInput
          style={{
            borderColor: 'black',
            borderWidth: 2,
            margin: 20,
            padding: 10,
            marginTop: 0,
          }}
          placeholder="username"
          value={inputUser}
          onChangeText={text => setInputUser(text)}></TextInput>
      </View>
      <View style={{}}>
        <TouchableOpacity
          //onPress={()=>editTaskFromList()}
          onPress={() => handleAdd()}>
          <Text
            style={{
              borderColor: 'black',
              borderWidth: 3,
              padding: 10,
              textAlign: 'center',
              backgroundColor: 'orange',
              color: 'white',
              alignSelf: 'center',
              paddingLeft: 50,
              paddingRight: 50,
            }}>
            click
          </Text>
        </TouchableOpacity>
      </View>

      {list?.map(temp => {
        console.log('=====>', temp);
        return (
          // <View></View>
          <View key={temp.id} style={{backgroundColor: 'skyblue', margin: 5}}>
            <View style={{margin: 10, backgroundColor: 'white'}}>
              <Text> Email Id: {temp.email}</Text>
              <Text> Username: {temp.username}</Text>
              <TouchableOpacity
                style={{
                  alignSelf: 'flex-end',
                  backgroundColor: 'orange',
                  margin: 5,
                  padding: 10,
                  marginTop: -30,
                }}
                onPress={() => dispatch(deleteTodo(temp.id))}>
                <Text>delete</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  alignSelf: 'flex-end',
                  backgroundColor: 'orange',
                  margin: 5,
                  padding: 10,
                  marginTop: -45,
                  marginRight: 70,
                }}
                onPress={() => {
                  setInputdata(temp.email);
                  setId(temp.id);
                  setInputUser(temp.username);
                }}>
                <Text>Edit</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      })}
    </View>
  );
};
export default Home;
