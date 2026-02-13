import React, { useEffect, useState } from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Text,
  Button,
} from 'react-native';
import axios from 'axios';
import { Formik } from 'formik';
import * as Yup from 'yup';

/* ───────── Types ───────── */
type User = {
  id: number;
  name: string;
  email: string;
};

/* ───────── Validation ───────── */
const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
});

const Messages = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  /* ───────── GET LIST ───────── */
  const fetchUsers = async () => {
    try {
      const res = await axios.get<User[]>(
        'https://jsonplaceholder.typicode.com/users',
      );
      setUsers(res.data);
    } catch (e) {
      console.log('GET error', e);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  /* ───────── PUT API ───────── */
  const updateUser = async (values: User) => {
    try {
      setLoading(true);

      const res = await axios.put<User>(
        `https://jsonplaceholder.typicode.com/users/${values.id}`,
        values,
      );

      // update FlatList data
      setUsers(prev => prev.map(u => (u.id === values.id ? res.data : u)));

      setSelectedUser(null);
    } catch (e) {
      console.log('PUT error', e);
    } finally {
      setLoading(false);
    }
  };

  /* ───────── Render List Item ───────── */
  const renderItem = ({ item }: { item: User }) => (
    <View style={styles.cardRow}>
      <View style={{ flex: 1 }}>
        <Text style={styles.name}>{item.name}</Text>
        <Text>{item.email}</Text>
      </View>

      <TouchableOpacity
        style={styles.editBtn}
        onPress={() => setSelectedUser(item)}
      >
        <Text style={styles.editText}>✏️</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* ───────── Form ───────── */}
      {selectedUser && (
        <Formik
          initialValues={selectedUser}
          validationSchema={validationSchema}
          enableReinitialize
          onSubmit={updateUser}
        >
          {({ handleChange, handleSubmit, values, errors, touched }) => (
            <View style={styles.form}>
              <TextInput
                style={styles.input}
                placeholder="Name"
                value={values.name}
                onChangeText={handleChange('name')}
              />
              {touched.name && errors.name && (
                <Text style={styles.error}>{errors.name}</Text>
              )}

              <TextInput
                style={styles.input}
                placeholder="Email"
                value={values.email}
                onChangeText={handleChange('email')}
              />
              {touched.email && errors.email && (
                <Text style={styles.error}>{errors.email}</Text>
              )}

              <Button
                title={loading ? 'Updating...' : 'Update User'}
                onPress={handleSubmit as any}
                disabled={loading}
              />
            </View>
          )}
        </Formik>
      )}

      {/* ───────── List ───────── */}
      <FlatList
        data={users}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 40 }}
      />
    </View>
  );
};

export default Messages;

/* ───────── Styles ───────── */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  form: {
    marginBottom: 20,
    padding: 16,
    backgroundColor: '#f3f3f3',
    borderRadius: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 8,
    borderRadius: 6,
  },
  error: {
    color: 'red',
    marginBottom: 6,
  },
  card: {
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  name: {
    fontWeight: 'bold',
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  editBtn: {
    padding: 8,
  },
  editText: {
    fontSize: 18,
  },
});
