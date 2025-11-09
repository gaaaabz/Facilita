import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import Header from '../components/Header';

export default function Home() {
  return (
    <View style={styles.container}>
      <Header title="Sistema de Saúde Pública" />
      
      <View style={styles.content}>
        <Text style={styles.title}>Bem-vindo ao Sistema de Saúde Pública</Text>
        <Text style={styles.subtitle}>
          Acesse informações sobre serviços de saúde disponíveis
        </Text>

        <View style={styles.menu}>
          <Link href="/integrantes" asChild>
            <TouchableOpacity style={styles.menuButton}>
              <Text style={styles.menuText}>👥 Integrantes</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/servicos" asChild>
            <TouchableOpacity style={styles.menuButton}>
              <Text style={styles.menuText}>🏥 Serviços de Saúde</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/unidades" asChild>
            <TouchableOpacity style={styles.menuButton}>
              <Text style={styles.menuText}>📍 Unidades de Saúde</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2c3e50',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#7f8c8d',
    marginBottom: 40,
  },
  menu: {
    gap: 15,
  },
  menuButton: {
    backgroundColor: '#3498db',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  menuText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});