import { useEffect, useState } from 'react';
import { FiCircle, FiArrowLeft } from 'react-icons/fi'
import { useParams, useHistory} from 'react-router-dom';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import Header from '../../components/Header';
import CardAssets from '../../components/CardAssets';
import { Popconfirm, message } from 'antd';

import { Container, Content, Main, Graphic, Navigation } from './styles';
import api from '../../api';
import Warning from '../../components/Warning';

const Unity = () => {
  const [ assets, setAssets ] = useState([]);
  const [ array, setArray ] = useState([]);
  const [ unity, setUnity ] = useState('');
  const [ companyId, setCompanyId ] = useState('');
  const [ reload, setReload ] = useState(false);

  const history = useHistory();

  const [ status, setStatus ] = useState({
    inAlert: 0,
    inOperation: 0,
    inDowntime: 0
  });
  const { _id } = useParams();

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

  const deleteAssets = async (_id) => {
    try {
      await api.delete(`/delete-active/${_id}`);
      setReload(true);
      return message.success('Ativo excluido com sucesso');
    } catch (error) {
      return message.error('Erro ao excluir ativo')
    }
  }

  const deleteUnity = async (_id) => {
    try {
      await api.delete(`delete-unity/${_id}`);
      history.push(`/units/${companyId}`);
      return message.success('Unidade deletada com sucesso'); 
    } catch (error) {
      return message.error('Erro ao excluir unidade');
    }
  }
  
  const cancel = () => {
    message.error('Unidade não foi deletada');
  }

  useEffect(() => {
    const loadUnity = async () => {
      const { data } = await api.get(`/list-assets/${_id}`);
      
      if(data.length > 0){
        setArray(data);
        calcStatus(data);
        const unityName = data[0].unity.name;
        const company_id = data[0].company._id;
        setCompanyId(company_id);
        setUnity(unityName);
        return setAssets(data)  
      }else{
        const { data } = await api.get(`/list-unity/${_id}`);
        setCompanyId(data.company);
        return setUnity(data.name)
      }
    }

    if(reload){
      loadUnity();
      return setReload(false);
    }

    loadUnity();
  }, [_id, reload]);

  return (
    <>
    <Header header={true} data={[{
      children: 'Criar Ativo',
      route: `/create-assets/${_id}`
    }]} />
    <Container>
      <Content>
        <Navigation>
          <FiArrowLeft color="var(--color-blue)" size={24} onClick={() => history.push(`/units/${companyId}`)} />
          <h1>{unity}</h1>
          <Popconfirm
            title="Deseja realmente excluir essa unidade?"
            onConfirm={() => deleteUnity(_id)}
            onCancel={cancel}
            okText="Excluir"
            cancelText="Fechar"
            icon={false}
            placement="leftBottom"
          >
            <button>Deletar</button>
          </Popconfirm>
        </Navigation>
         
        <Main>
          <h2>Visão Geral da Unidade</h2>
            <div className="total-assets">
              <div className="bol">
                <span>Ativos</span>
                <strong>{assets.length}</strong>
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
        <h2>Ativos</h2>
        {assets.length <= 0 ? (
          <Warning message="Esta unidade não possui nenhum Ativo" />
        ) : (
          <ul>
            <CardAssets
              data={assets}
              deleteAssets={deleteAssets}
              setReload={setReload}
            />
          </ul>  
        )}
      </Content>
    </Container>
    </>
  )
}


export default Unity;