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

const UpdateUserModal = ({ setShowModal, setReload, user }) => {

  const { register, handleSubmit, formState: { errors } } = useForm({ 
    defaultValues: {
      name: user.name,
      email: user.email
    },
    resolver: yupResolver(schema)
  });

  const handleUpdateUser = async (data) => {
    try {
      await api.put(`/update-user/${user._id}`, data);
      setShowModal(false);
      setReload(true);
      return message.success('Usuário atualizado com sucesso'); 
    } catch (error) {
      message.error('Erro ao atualizar usuário');
    }
  }
  return (
    <Background>
      <Container>
      <ModalContent>
          <h2>Atualizar Usuário</h2>
          <form onSubmit={handleSubmit(handleUpdateUser)}>
            <input placeholder="Digite o novo nome do usuário" type="text" {...register('name')}  />
            <p>{errors.name?.message}</p>

            <input placeholder="Digite o novo email do usuário" type="text" {...register('email')}  />
            <p>{errors.email?.message}</p>

            <button type="submit">Atualizar usuário</button>
          </form>
          </ModalContent>
        <CloseModalButton onClick={() => setShowModal(false)} />
      </Container>
    </Background>
  )
}


export default UpdateUserModal;