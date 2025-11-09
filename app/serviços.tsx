import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import Header from '../components/Header';

export default function Servicos() {
  const servicos = [
    {
      id: 1,
      nome: 'Consulta Médica',
      descricao: 'Agendamento de consultas com clínicos gerais e especialistas',
      icone: '🩺',
    },
    {
      id: 2,
      nome: 'Exames Laboratoriais',
      descricao: 'Coleta e análise de exames de sangue, urina e outros',
      icone: '🧪',
    },
    {
      id: 3,
      nome: 'Vacinação',
      descricao: 'Campanhas de vacinação e imunização regular',
      icone: '💉',
    },
    {
      id: 4,
      nome: 'Pronto Atendimento',
      descricao: 'Atendimento emergencial 24 horas',
      icone: '🚑',
    },
    {
      id: 5,
      nome: 'Saúde da Família',
      descricao: 'Acompanhamento médico familiar e visitas domiciliares',
      icone: '👨‍👩‍👧‍👦',
    },
  ];

  return (
    <View style={styles.container}>
      <Header title="Serviços de Saúde" />
      
      <ScrollView style={styles.content}>
        <Text style={styles.title}>Serviços Disponíveis</Text>
        <Text style={styles.subtitle}>
          Conheça todos os serviços de saúde pública oferecidos
        </Text>

        {servicos.map((servico) => (
          <View key={servico.id} style={styles.card}>
            <Text style={styles.icone}>{servico.icone}</Text>
            <View style={styles.cardContent}>
              <Text style={styles.servicoNome}>{servico.nome}</Text>
              <Text style={styles.servicoDescricao}>{servico.descricao}</Text>
            </View>
          </View>
        ))}

        <View style={styles.actions}>
          <Link href="/unidades" asChild>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionText}>Encontrar Unidades Próximas</Text>
            </TouchableOpacity>
          </Link>
          
          <Link href="/integrantes" asChild>
            <TouchableOpacity style={styles.secondaryButton}>
              <Text style={styles.secondaryText}>Conhecer a Equipe</Text>
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
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  icone: {
    fontSize: 30,
    marginRight: 15,
  },
  cardContent: {
    flex: 1,
  },
  servicoNome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 5,
  },
  servicoDescricao: {
    fontSize: 14,
    color: '#7f8c8d',
    lineHeight: 20,
  },
  actions: {
    marginTop: 20,
    gap: 10,
  },
  actionButton: {
    backgroundColor: '#27ae60',
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
    borderColor: '#3498db',
  },
  secondaryText: {
    color: '#3498db',
    fontSize: 16,
    fontWeight: '600',
  },
});