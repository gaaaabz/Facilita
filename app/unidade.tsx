import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import Header from '../components/Header';

export default function Unidades() {
  const unidades = [
    {
      id: 1,
      nome: 'UPA Centro',
      endereco: 'Rua Principal, 123 - Centro',
      telefone: '(11) 3456-7890',
      tipo: 'Pronto Atendimento 24h',
      distancia: '1.2 km',
    },
    {
      id: 2,
      nome: 'Posto de Saúde Vila Nova',
      endereco: 'Av. das Flores, 456 - Vila Nova',
      telefone: '(11) 3456-7891',
      tipo: 'Atenção Básica',
      distancia: '2.5 km',
    },
    {
      id: 3,
      nome: 'Hospital Municipal',
      endereco: 'Rua da Saúde, 789 - Centro',
      telefone: '(11) 3456-7892',
      tipo: 'Hospital Geral',
      distancia: '3.1 km',
    },
    {
      id: 4,
      nome: 'UBS Jardim das Árvores',
      endereco: 'Rua das Árvores, 321 - Jardim',
      telefone: '(11) 3456-7893',
      tipo: 'Saúde da Família',
      distancia: '4.0 km',
    },
  ];

  return (
    <View style={styles.container}>
      <Header title="Unidades de Saúde" />
      
      <ScrollView style={styles.content}>
        <Text style={styles.title}>Unidades de Saúde Próximas</Text>
        <Text style={styles.subtitle}>
          Encontre a unidade de saúde mais perto de você
        </Text>

        {unidades.map((unidade) => (
          <View key={unidade.id} style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.unidadeNome}>{unidade.nome}</Text>
              <Text style={styles.distancia}>{unidade.distancia}</Text>
            </View>
            
            <Text style={styles.tipo}>{unidade.tipo}</Text>
            <Text style={styles.endereco}>📍 {unidade.endereco}</Text>
            <Text style={styles.telefone}>📞 {unidade.telefone}</Text>
            
            <TouchableOpacity style={styles.contatoButton}>
              <Text style={styles.contatoText}>Ligar Agora</Text>
            </TouchableOpacity>
          </View>
        ))}

        <View style={styles.actions}>
          <Link href="/servicos" asChild>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionText}>Ver Serviços Disponíveis</Text>
            </TouchableOpacity>
          </Link>
          
          <Link href="/" asChild>
            <TouchableOpacity style={styles.secondaryButton}>
              <Text style={styles.secondaryText}>Voltar ao Início</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </ScrollView>
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
    marginBottom: 30,
  },
  card: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  unidadeNome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    flex: 1,
  },
  distancia: {
    fontSize: 14,
    color: '#27ae60',
    fontWeight: '600',
  },
  tipo: {
    fontSize: 14,
    color: '#3498db',
    fontWeight: '600',
    marginBottom: 8,
  },
  endereco: {
    fontSize: 14,
    color: '#7f8c8d',
    marginBottom: 5,
  },
  telefone: {
    fontSize: 14,
    color: '#7f8c8d',
    marginBottom: 10,
  },
  contatoButton: {
    backgroundColor: '#e8f4fd',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  contatoText: {
    color: '#3498db',
    fontWeight: '600',
  },
  actions: {
    marginTop: 20,
    gap: 10,
  },
  actionButton: {
    backgroundColor: '#e67e22',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  actionText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#95a5a6',
  },
  secondaryText: {
    color: '#95a5a6',
    fontSize: 16,
    fontWeight: '600',
  },
});