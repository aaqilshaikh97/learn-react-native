import React from 'react'
import { Text, FlatList, View, StyleSheet } from 'react-native';



type User = {
  id: number;
  name: string;
  role: 'Admin' | 'User' | 'Manager';
};

const users: User[] = [
  { id: 1, name: 'Aaqeel Shaikh', role: 'Admin' },
  { id: 2, name: 'Rahul Verma', role: 'User' },
  { id: 3, name: 'Fatima Khan', role: 'Manager' },
  { id: 4, name: 'John Doe', role: 'User' },
  { id: 5, name: 'Aaqeel Shaikh', role: 'Admin' },
  { id: 6, name: 'Rahul Verma', role: 'User' },
  { id: 7, name: 'Fatima Khan', role: 'Manager' },
  { id: 8, name: 'John Doe', role: 'User' },
  { id: 1, name: 'Aaqeel Shaikh', role: 'Admin' },
  { id: 9, name: 'Rahul Verma', role: 'User' },
  { id: 10, name: 'Fatima Khan', role: 'Manager' },
  { id: 11, name: 'John Doe', role: 'User' },
  { id: 1, name: 'Aaqeel Shaikh', role: 'Admin' },
  { id: 12, name: 'Rahul Verma', role: 'User' },
  { id: 13, name: 'Fatima Khan', role: 'Manager' },
  { id: 14, name: 'John Doe', role: 'User' },
  { id: 1, name: 'Aaqeel Shaikh', role: 'Admin' },
  { id: 15, name: 'Rahul Verma', role: 'User' },
  { id: 16, name: 'Fatima Khan', role: 'Manager' },
  { id: 17, name: 'John Doe', role: 'User' },
];
export const DataCards = () => {
  return (
    <View>
      <Text>cards</Text>
            <Text style={styles.cardHeading}>Cards</Text>
       <FlatList
        data={users}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.userName}>{item.name}</Text>
            <Text style={styles.role}>{item.role}</Text>
          </View>
        )}
      />
    </View>
  )
}


const styles = StyleSheet.create({
      cardContainer: {
    flex: 1,
    flexDirection: 'row',
  },

  cardContainerVerticle: {
    flex: 1,
    flexDirection: 'column-reverse',
    // alignItems:"center"
  },

  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: 400,
    height: 100,
    backgroundColor: '#ff80bf',
    marginLeft: 5,
    marginBottom: 5,
  },

  cardVerticle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    backgroundColor: '#a34012',
    marginLeft: 5,
    marginBottom: 5,
  },

  cardHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
  },

  justifyContentCard: {
    flex: 1,
    // justifyContent:"space-evenly",
    // alignItems:"stretch"
    // alignSelf:"flex-start",
    flexWrap: 'wrap',
    height: 100,
    width: 500,
    backgroundColor: '#000000',
    margin: 100,
    borderRadius: 8,
  },
  WhiteText: {
    color: '#e3d7d7',
    margin: 20,
  },
  img: {
    height: 70,
    width: 200,
    borderRadius: 10,
    marginTop: 10,
  },
  userList:{
    // backgroundColor:"yellow"
  },
  userName:{
    fontSize:15,
    fontWeight:"bold",
  },
  role:{
    fontSize:14,
  },
})