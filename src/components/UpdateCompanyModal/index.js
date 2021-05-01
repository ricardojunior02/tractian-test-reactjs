import { Background, Container, ModalContent, CloseModalButton } from './styles';
import api from '../../api';
import { useForm } from 'react-hook-form';
import { message } from 'antd';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = Yup.object().shape({
  name: Yup.string().required('Nome da Compania é obrigatório')
});

const UpdateCompanyModal = ({ setShowModal, setReload, companyId,  companyName }) => {

  const { register, handleSubmit, formState: { errors } } = useForm({ 
    defaultValues: {
      name: companyName,
    },
    resolver: yupResolver(schema)
  });

  const handleUpdateCompany = async (data) => {
    try {
      await api.put(`/update-company/${companyId}`, data);
      setShowModal(false);
      message.success('Compania atualizada com sucesso');
      return setReload(true);
    } catch (error) {
      message.error('Erro ao atualizar Compania');
    }
  }
  return (
    <Background>
      <Container>
      <ModalContent>
          <h2>Atualizar Compania</h2>
          <form onSubmit={handleSubmit(handleUpdateCompany)}>
            <input placeholder="Digite o novo nome da empresa" type="text" {...register('name')}  />
            <p>{errors.name?.message}</p>

            <button type="submit">Atualizar Compania</button>
          </form>
          </ModalContent>
        <CloseModalButton onClick={() => setShowModal(false)} />
      </Container>
    </Background>
  )
}


export default UpdateCompanyModal;