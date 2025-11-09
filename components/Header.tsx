import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <View style={styles.header}>
      <Link href="/" asChild>
        <TouchableOpacity>
          <Text style={styles.logo}>🏥 Saúde+</Text>
        </TouchableOpacity>
      </Link>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.placeholder} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#3498db',
    borderBottomWidth: 1,
    borderBottomColor: '#2980b9',
  },
  logo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  placeholder: {
    width: 60,
  },
});