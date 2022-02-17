import { 
	Container,
	Texto,
	Botao
 } from './styles';
 import { useNavigation } from '@react-navigation/native';

function ListScreen() {
	const navigation = useNavigation()
  return (
    <Container>
      <Texto>ListScreen</Texto>
	  <Botao title='Ir para Editar' onPress={() => navigation.navigate('EditNote')} />
    </Container>
  );
};

export default ListScreen;
