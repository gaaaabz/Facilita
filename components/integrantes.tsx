// components/Integrantes.tsx
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface Integrante {
  nome: string;
  imagem: any; // Usando 'any' para imagens locais
  funcao?: string;
}

const Integrantes: React.FC = () => {
  const integrantes: Integrante[] = [
    {
      nome: 'Jhonatan',
      imagem: require('../assets/images/jhonatan.jpeg'),
      funcao: 'Desenvolvedor'
    },
    {
      nome: 'Julia',
      imagem: require('../assets/images/julia.png'),
      funcao: 'Designer'
    },
    {
      nome: 'Gabriel',
      imagem: require('../assets/images/gabriel.jpeg'),
      funcao: 'Product Manager'
    }
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Nossa Equipe</Text>
      
      <View style={styles.listaIntegrantes}>
        {integrantes.map((integrante, index) => (
          <View key={index} style={styles.cardIntegrante}>
            <Image 
              source={integrante.imagem} 
              style={styles.foto}
              resizeMode="cover"
            />
            <Text style={styles.nome}>{integrante.nome}</Text>
            {integrante.funcao && (
              <Text style={styles.funcao}>{integrante.funcao}</Text>
            )}
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  listaIntegrantes: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    gap: 15,
  },
  cardIntegrante: {
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    minWidth: 120,
  },
  foto: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  nome: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
  funcao: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    marginTop: 4,
  },
});

export default Integrantes;