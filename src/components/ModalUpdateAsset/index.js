import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { message } from 'antd';
import { Background, Container, ModalContent, CloseModalButton } from './styles';

import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import api from '../../api';
const ModalUpdateAsset = ({ _id, setShowModal, asset, setReload }) => {
  const [ users, setUsers ] = useState([]);

  const schema = Yup.object().shape({
    image: Yup.string().required('Imagem é obrigatória'),
    name: Yup.string().required('Nome do ativo é obrigatório'),
    description: Yup.string().required('Descrição é obrigatório'),
    model: Yup.string().required('Modelo é obrigatório'),
    healthscore: Yup.number().required('Saúde do ativo é obrigatório')
    .positive('Valor minimo deve ser 1').integer('Deve ser um numrto inteiro').min(1).max(100),
    status: Yup.string().required('Status é obrigatório'),
    responsible: Yup.string().required('Responsável é obrigatório'),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({ 
    defaultValues: {
      image: asset.image,
      name: asset.name,
      description: asset.description,
      model: asset.model,
      healthscore: asset.healthscore,
      status: asset.status,
      responsible: asset.responsible._id
    },
    resolver: yupResolver(schema)
  });

  const handleUpdateAsset = async (data) => {
    try {
      await api.put(`/update-active/${_id}`, data);
      setShowModal(false);
      setReload(true);
      return message.success('Sucesso ao atualizar Ativo');
    } catch (err) {
      message.error('Erro ao atualizar verifique os campos');
    }
  }

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

  useEffect(() => {
    const loadUsers = async () => {

      const { data: users } = await api.get(`/list-user/${asset.company._id}`);

      return setUsers(users);
    }

    loadUsers();
  }, [asset]);

  return (
    <Background>
      <Container>
      <ModalContent>
          <h1>Atualizar Ativo</h1>
          <form onSubmit={handleSubmit(handleUpdateAsset)}>
            <input placeholder="Cole a url da imagem" type="text" {...register('image')}  />
            <p>{errors.image?.message}</p>

            <input placeholder="Digite o nome do ativo" type="text" {...register('name')}/>
            <p>{errors.name?.message}</p>

            <input placeholder="Digite a descrição do ativo" type="text" {...register('description')}/>
            <p>{errors.description?.message}</p>

            <input placeholder="Digite o modelo do ativo" type="text" {...register('model')} />
            <p>{errors.model?.message}</p>

            <input placeholder="Digite o nivel de saúde do ativo" type="number" {...register('healthscore')} />
            <p>{errors.healthscore?.message}</p>

            <select {...register('status')}>
              
              {status.map(data => (
                <option key={data.id} value={data.value}>{data.children}</option>
              ))}
            </select>
            <p>{errors.status?.message}</p> 

            <select {...register('responsible')}>
                <option value={asset.responsible._id}>{asset.responsible.name}</option>
                {users.map(user => (
                  <option key={user._id} value={user._id}>{user.name}</option>
                ))}
            </select>
            <p>{errors.responsible?.message}</p>

            <button type="submit">Atualizar Ativo</button>
          </form>
          </ModalContent>
        <CloseModalButton onClick={() => setShowModal(false)} />
      </Container>
    </Background>
  )
}

export default ModalUpdateAsset;