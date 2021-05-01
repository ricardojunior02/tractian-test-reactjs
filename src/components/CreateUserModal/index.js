import { Background, Container, ModalContent, CloseModalButton } from './styles';
import api from '../../api';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { message } from 'antd';

const schema = Yup.object().shape({
  name: Yup.string().required('Nome do usuário é obrigatório'),
  email: Yup.string().email('E-mail invalido').required('E-mail é obrigatório')
});

const CreateUserModal = ({ setShowModal, setReload, companyId: _id }) => {
  console.log(_id);

  const { register, handleSubmit, formState: { errors } } = useForm({ 
    defaultValues: {
      name: '',
      email: ''
    },
    resolver: yupResolver(schema)
  });

  const handleCreateUser = async (data) => {
    try {
      await api.post(`/create-user/${_id}`, {...data, company: _id});
      setShowModal(false);
      setReload(true);
      return message.success('Usuário criado com sucesso');
    } catch (error) {
      message.error('Erro ao criar usuário');
    }
  }

  return (
    <Background>
      <Container>
      <ModalContent>
          <h2>Criar Usuário</h2>
          <form onSubmit={handleSubmit(handleCreateUser)}>
            <input placeholder="Digite o nome do usuário" type="text" {...register('name')}  />
            <p>{errors.name?.message}</p>

            <input placeholder="Digite o email do usuário" type="text" {...register('email')}  />
            <p>{errors.email?.message}</p>

            <button type="submit">Criar usuário</button>
          </form>
          </ModalContent>
        <CloseModalButton onClick={() => setShowModal(false)} />
      </Container>
    </Background>
  )
}


export default CreateUserModal;