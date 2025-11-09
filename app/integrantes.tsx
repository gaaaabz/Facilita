import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { Link } from 'expo-router';

const jhonatanImage = require('../../assets/images/jhonatan.jpeg');
const gabrielImage = require('../../assets/images/gabriel.jpeg');
const juliaImage = require('../../assets/images/julia.png');

export default function Integrantes() {
  const integrantes = [
    {
      id: 1,
      nome: 'Jhonatan',
      funcao: 'Desenvolvedor Full-Stack',
      foto: jhonatanImage,
    },
    {
      id: 2,
      nome: 'Gabriel',
      funcao: 'Desenvolvedor Back-end',
      foto: gabrielImage,
    },
    {
      id: 3,
      nome: 'Julia',
      funcao: 'UI/UX Designer',
      foto: juliaImage,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Link href="/" style={styles.backButton}>
          <Text style={styles.backText}>← Voltar</Text>
        </Link>
        <Text style={styles.headerTitle}>Nossa Equipe</Text>
        <View style={styles.placeholder} />
      </View>
      
      <ScrollView style={styles.content}>
        <Text style={styles.title}>Conheça nossa equipe</Text>
        <Text style={styles.subtitle}>
          Desenvolvendo soluções para facilitar serviços públicos
        </Text>

        {integrantes.map((integrante) => (
          <View key={integrante.id} style={styles.card}>
            <Image
              source={integrante.foto}
              style={styles.foto}
              resizeMode="cover"
            />
            <View style={styles.info}>
              <Text style={styles.nome}>{integrante.nome}</Text>
              <Text style={styles.funcao}>{integrante.funcao}</Text>
            </View>
          </View>
        ))}

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Projeto desenvolvido para melhorar o acesso aos serviços públicos
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#0066cc',
    borderBottomWidth: 1,
    borderBottomColor: '#0052b3',
  },
  backButton: {
    padding: 5,
  },
  backText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  placeholder: {
    width: 60,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1a365d',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#4a5568',
    marginBottom: 30,
  },
  card: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  foto: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 15,
    borderWidth: 2,
    borderColor: '#e2e8f0',
  },
  info: {
    flex: 1,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2d3748',
    marginBottom: 4,
  },
  funcao: {
    fontSize: 14,
    color: '#718096',
    fontWeight: '500',
  },
  footer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#e6f2ff',
    borderRadius: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#0066cc',
  },
  footerText: {
    textAlign: 'center',
    color: '#0066cc',
    fontSize: 14,
    fontWeight: '500',
  },
});