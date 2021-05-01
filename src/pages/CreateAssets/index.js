import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams, useHistory } from 'react-router';

import { FiArrowLeft } from 'react-icons/fi';

import Header from '../../components/Header';
import CreateUserModal from '../../components/CreateUserModal';
import { message } from 'antd';

import api from '../../api';

import { Container, Content } from './styles';
import Warning from '../../components/Warning';

const CreateUser = () => {
  const [users, setUsers] = useState([]);
  const [ companyId, setCompanyId ] = useState('');
  const [ showModal, setShowModal ] = useState(false);
  const [ reload, setReload ] = useState(false);

  const { register, handleSubmit, formState: { errors }} = useForm();
  const { unity_id: _id } = useParams();
  const history = useHistory();

  const handleCreateAssets = async (data) => {
    try {
      console.log(data)
      await api.post(`/create-active/${_id}`,{...data, unity: _id});
      message.success('Ativo criado com sucesso');
      history.push(`/unity/${_id}`)
    } catch (error) {
      message.error('Erro ao criar ativo');
    }
  }

  useEffect(() => {
    const loadUnity = async () => {
      const { data } = await api.get(`/list-unity/${_id}`);
      setCompanyId(data.company)
      const { data: dataUser } = await api.get(`/list-user/${data.company}`);

      return setUsers(dataUser);
    }
    console.log(reload);
    if(reload){
      console.log(reload);
      loadUnity();
      return setReload(false);
    }

    loadUnity();
    
  },[_id, reload])

  const status = [
    {
      id: 1,
      value: 'inDowntime',
      children: 'Em Parada'
    },
    {
      id: 2,
      value: 'inAlert',
      children: 'Em Alerta'
    },
    {
      id: 3,
      value: 'inOperation',
      children: 'Em Operação'
    },
  ]

  return (
    <>
      <Header />
      <Container>
      <nav>
          <FiArrowLeft color="var(--color-blue)" size={24} onClick={() => history.goBack()} />
          <h1>Crie Ativos</h1>
          <div></div>
        </nav>
        
       <Content>
         
         <form onSubmit={handleSubmit(handleCreateAssets)}>
           <input placeholder="Cole a url da imagem" type="text" {...register('image', { required: true })} />
           {errors.image && <span>Imagem é obrigatória</span>}

           <input placeholder="Digite o nome do ativo" type="text" {...register('name', { required: true })} />
           {errors.name && <span>Nome do ativo e obrigatório</span> }

           <input placeholder="Digite a descrição do ativo" type="text" {...register('description', { required: true })} />
           {errors.description && <span>Descrição é obrigatório</span> }

           <input placeholder="Digite o modelo do ativo" type="text" {...register('model', { required: true })} />
           {errors.model && <span>Modelo é obrigatório</span> }

           <input placeholder="Digite o nivel de saúde do ativo" type="number" {...register('healthscore', { required: true, maxLength: 3 })} />
           {errors.healthscore && <span>Saúde do ativo é obrigatório</span> }

           <select  {...register('status', { required: true })}>
            <option value="">Selecione...</option>
            {status.map(data => (
              <option key={data.id} value={data.value}>{data.children}</option>
            ))}
           </select>
           {errors.status && <span>Status é obrigatório</span> }

           {users.length <= 0 ? ('') : (
             <>
              <select {...register('responsible', { required: true })}>
              <option value="">Selecione...</option>
              {users.map(user => (
                <option key={user._id} value={user._id}>{user.name}</option>
              ))}
              </select>
              {errors.responsible && <span>Responsável é obrigatório</span> }
              <button type="submit" >Criar Ativo</button>
            </>
           )}
         </form>
         {users.length <= 0 ? (
           <>
             <Warning  message="Sua empresa ainda não possui nenhum usuário"/>
            <button className="create-user" onClick={() => setShowModal(true)}>Crie um usuário agora</button>
           </>
         ) : ('')}
         
       </Content>
       {showModal ? (
         <CreateUserModal setShowModal={setShowModal} setReload={setReload} companyId={companyId} />
       ) : ('')}
      </Container>
    </>
  )
}

export default CreateUser;