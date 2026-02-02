import {} from 'react-native';
import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';

// type User = {
//   id: number;
//   name: string;
//   email: string;
// };
type Post = {
  id: number;
  title: string;
  body: string;
};

const HelpSupport = () => {
  //  const [users, setUsers] = useState<User[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  //   useEffect(() => {
  //   fetchUsers();
  // }, []);
  // __________________________________with axios_______________________
  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      const res = await axios.get('https://dummyjson.com/posts');
      setPosts(res.data.posts);
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const deletePost = async (id: number) => {
    try {
      await axios.delete(`https://dummyjson.com/posts/${id}`);
      setPosts(prev => prev.filter(p => p.id !== id));
    } catch (err: any) {
      Alert.alert(err || 'Failed to delete post');
    }
  };

  if (loading) return <ActivityIndicator size="large" />;
  if (error) return <Text style={styles.error}>{error}</Text>;

  // ---------------------------------with axios -----------------------------

  //  const fetchUsers = async () => {
  //   try {
  //     const response = await axios.get(
  //       'https://jsonplaceholder.typicode.com/users'
  //     );

  //     setUsers(response.data); // data directly available
  //   } catch (err:any) {
  // setError(err.message || 'Something went wrong');
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // ---------------------------------without axios -----------------------------
  //   const fetchUsers = async () => {
  //     try {
  //       const response = await fetch(
  //         'https://jsonplaceholder.typicode.com/users'
  //       );

  //       const data = await response.json(); // convert to JS object
  //       setUsers(data);
  //     } catch (err: any) {
  //   setError(err.message || 'Something went wrong');
  // } finally {
  //       setLoading(false);
  //     }
  //   };

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  if (error) {
    return <Text>{error}</Text>;
  }
  return (
    <View style={styles.pageContainer}>
      <Text style={styles.pageHeading}>Help And Support</Text>
      {/* <FlatList
      data={users}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text>{item.name}</Text>
          <Text>{item.email}</Text>
        </View>
      )}
    /> */}
      <FlatList
        data={posts}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
            <Text>{item.body}</Text>

            <TouchableOpacity
              style={styles.deleteBtn}
              onPress={() => deletePost(item.id)}
            >
              <Text>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default HelpSupport;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
  },
  pageHeading: {
    fontSize: 30,
    fontWeight: '600',
  },
  card: {
    flex: 1,
    alignItems: 'flex-start',
    padding: 8,
    borderWidth: 1,
    marginHorizontal: 20,
    backgroundColor: '#9a8f8f',
    marginVertical: 4,
    borderRadius: 8,
  },
  title: {
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
  deleteBtn: {
    marginTop: 8,
    backgroundColor: 'red',
    padding: 6,
    alignItems: 'center',
  },
});
