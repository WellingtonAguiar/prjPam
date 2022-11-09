import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

export function CategoriaScreen() {
  const navigation = useNavigation();
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getCategorias = async () => {
    try {
      const response = await fetch('http://localhost/prjpw3/categoria/categoria-json.php');
      const json = await response.json();
      setData(json.categorias);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getCategorias();
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator /> : (
        <FlatList
          data={data}
          keyExtractor={({ idCategoria }, index) => idCategoria}
          renderItem={({ item }) => (
            <Text>{item.idCategoria}. {item.categoria}</Text>
          )}
        />
      )}
    </View>
  );
};