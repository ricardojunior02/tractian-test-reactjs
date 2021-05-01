/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Header from '../../components/Header';
import UpdateUserModal from '../../components/UpdateUserModal';
import ListUnits from '../../components/ListUnits';
import ListUsers from '../../components/ListUsers';

import { message } from 'antd';

import { FiCircle, FiArrowLeft} from 'react-icons/fi';
import { Container,Content, Main, Graphic, Navigation } from './styles';

import api from '../../api';

const Units = () => {
  const [ units, setUnits ] = useState([]);
  const [ array, setArray ] = useState([]);
  const [ users, setUsers ] = useState([]);
  const [ user, setUser ] = useState({});
  const [ showModal, setShowModal ] = useState(false);
  const [ reload, setReload ] = useState(false);
  const [ company, setCompany ] = useState('');
  const [ status, setStatus ] = useState({
    inAlert: 0,
    inOperation: 0,
    inDowntime: 0
  });
  const history = useHistory();
  const { _id } = useParams();
  
  const assetsLength = units.map(unity => unity.assets.length);

  const onlyAssets = assetsLength.filter(assets => assets !== 0).reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  const calcStatus = (data) => {

    const inAlert = data.filter(assets => assets.status === 'inAlert');
    const inDowntime = data.filter(assets => assets.status === 'inDowntime');
    const inOperation = data.filter(assets => assets.status === 'inOperation');

    return setStatus({ inAlert: inAlert.length, inDowntime: inDowntime.length, inOperation: inOperation.length })
  }

  const infosAssets = array.map(asset => {
    return {
      name: asset.name,
      data: [asset.healthscore]
    }
  });
  
  const options = {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Saúde dos ativos'
    },
    series: infosAssets,
    tooltip: {
      borderRadius: 10,
    },
    yAxis: [{
      title: {
        text: 'Saúde em %'
      }
    }],

    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
          }
        }
      }]
    }
  };

  const openForm = (user) => {
    setUser(user);
    return setShowModal(true);
  }

  const deleteUser = async (_id) => {
    try {
      await api.delete(`delete-user/${_id}`);
      setReload(true);
      return message.success('Usuário deletado com sucesso'); 
    } catch (error) {
      message.error('Erro ao excluir usuário, verifique se ele é responsavel por algum Ativo');
    }
  }
  
  const cancel = () => {
    message.error('Usuário não foi deletado');
  }

  useEffect(() => {
    const loadUnits = async () => {
      const { data: nameCompany } = await api.get(`/company/${_id}`);
      const { data } = await api.get(`/list-units/${_id}`);
      
      setCompany(nameCompany.name);
      const newArray = [];
    
      data.map(unity => newArray.push(...unity.assets));
      setArray(newArray);
      calcStatus(newArray);
      return setUnits(data)
    }

    const loadUsers = async () => {
      const { data } = await api.get(`/list-user/${_id}`);
      setUsers(data);
    }

    if(reload){
      loadUsers();
      setReload(false);
    }
    loadUnits();
    loadUsers();
  }, [_id, reload]);

  return (
    <>
    <Header header={true} data={[
      {
        children: 'Cadastrar Unidade',
        route: `/create-user-or-unity/${_id}`
      },
      {
        children: 'Cadastrar Usuário',
        route: `/create-user-or-unity/${_id}`
      }
    ]} />
    <Container>
      <Content>
        <Navigation>
          <FiArrowLeft color="var(--color-blue)" size={24} onClick={() => history.push('/')} />
          <h1>{company}</h1>
          <div></div>
        </Navigation>

        <Main>
          <h2>Visão Geral das Unidades</h2>
            <div className="total-assets">
              <div className="bol">
                <span>Ativos</span>
                <strong>{onlyAssets}</strong>
              </div>
              <div className="status">
                <span>
                  <FiCircle color="#22C55E" 
                  style={{ background: "#22C55E", borderRadius: '50%', marginRight: '5px' }}/> Em operação = 
                  <strong>{status.inOperation}</strong>
                </span>
                <span>
                  <FiCircle color="#FFA500" 
                  style={{ background: "#FFA500", borderRadius: '50%', marginRight: '5px' }} /> Em alerta =  
                  <strong>{status.inAlert}</strong>
                </span>
                <span>
                  <FiCircle color="#FF0000" 
                  style={{ background: "#FF0000", borderRadius: '50%', marginRight: '5px' }} /> Em parada =
                  <strong>{status.inDowntime}</strong>
                </span>
              </div>
            </div>
          <Graphic>
            <HighchartsReact highcharts={Highcharts} options={options} />
          </Graphic>
        </Main>
        <h2>Unidades</h2>
        <ListUnits data={units}/>
        <h2>Usuários</h2>
        <ListUsers data={users} deleteUser={deleteUser} cancel={cancel} openForm={openForm} />
        { showModal ? (
          <UpdateUserModal setShowModal={setShowModal} setReload={setReload} user={user} />
        ) : ('')}
      </Content>
    </Container>
    </>
  )
}


export default Units;