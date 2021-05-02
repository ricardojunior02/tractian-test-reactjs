import { useForm } from 'react-hook-form';
import { useParams, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import Header from '../../components/Header';
import { message } from 'antd';

import api from '../../api';
import { Container, Content, CreateUnityForm, CreateUserForm } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório')
});

const schemaUser = Yup.object().shape({
  nameUser: Yup.string().required('Nome é obrigatório'),
  email: Yup.string().required('E-mail é obrigatório').email('Digite um e-mail valido')
});

const CreateUnity = () => {
  
  const { register, handleSubmit, formState: { errors }} = useForm({
    defaultValues: {
      nameUser: '',
      email: ''
    },
    resolver: yupResolver(schemaUser)
  });

  const { register: fields, handleSubmit: handleUnity, formState: { errors: errorsUnity } } = useForm({
    defaultValues: {
      name: ''
    },
    resolver: yupResolver(schema),
  });

  const { company_id: _id } = useParams();
  const history = useHistory();

  const handleCreateUnity = async (data) => {
    try {
      await api.post(`create-unity/${_id}`, {...data, company: _id});
      message.success('Unidade criada com sucesso');
      history.push(`/units/${_id}`);
    } catch (error) {
      message.error('Erro ao criar unidade');
    }
  }

  const handleCreateUser = async ({ nameUser, email }) => {
    try {
      await api.post(`/create-user/${_id}`, { name: nameUser, email, company: _id});
      message.success('Usuário criado com sucesso');
      history.push(`/units/${_id}`);
    } catch (error) {
      message.error('Erro ao criar usuário'); 
    }
  }

  return (
    <>
      <Header />
      <Container>
        <nav>
          <FiArrowLeft color="var(--color-blue)" size={24} onClick={() => history.goBack()} />
          <h1>Crie Unidades ou Usuários</h1>
          <div></div>
        </nav>
       <Content>
       <CreateUnityForm>
         <h2>Crie uma unidade</h2>
            <form onSubmit={handleUnity(handleCreateUnity)}>
              <input type="text" placeholder="Digite o nome da Unidade" {...fields('name')} />
              <p>{errorsUnity.name?.message}</p>
              <button type="submit" >Criar unidade</button>
            </form>
         </CreateUnityForm>
         <CreateUserForm>
           <h2>Crie um usuário</h2>
            <form onSubmit={handleSubmit(handleCreateUser)}>
              
              <input type="text" placeholder="Digite o nome do usuário" {...register('nameUser')} />
              <p>{errors.nameUser?.message}</p>

              <input type="text" placeholder="Digite o e-mail do usuário"  {...register('email')} />
               <p>{errors.email?.message}</p>

              <button type="submit">Criar usuário</button>
            </form>
         </CreateUserForm>
       </Content>
      </Container>
    </>
  )
}


export default CreateUnity;