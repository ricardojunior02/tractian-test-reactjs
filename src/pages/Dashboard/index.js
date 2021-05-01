import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from  'react-hook-form';
import { FiChevronRight } from 'react-icons/fi';
import { Popconfirm, message } from 'antd';

import { Container, FormDiv } from './styles';
import Header from '../../components/Header';

import api from '../../api';

import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import UpdateCompanyModal from '../../components/UpdateCompanyModal';
import Loading from '../../components/Loading';
import Warning from '../../components/Warning';

const schema = Yup.object().shape({
  name: Yup.string().required('Nome da Compania é obrigatório')
});

const Dashboard = () => {
  const [companies, setCompanies] = useState([]);
  const [div, setDiv] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [ reload, setReload ] = useState(false);
  const [companyId, setCompanyId] = useState('');
  const [companyName, setCompanyName] = useState('');

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
    }
  });

  const handleCreateCompany = async (data) => {
    try {
      await api.post('/create-company', data);
      setDiv(false); 
      setReload(true);
      return message.success('Compania criada com sucesso');
    } catch (error) {
      setDiv(false);
      message.error('Erro ao criar Compania');
    }
  }

  const deleteCompany = async (_id) => {
   try {
    await api.delete(`delete-company/${_id}`);
    setReload(true);
    return message.success('Compania deletada com sucesso');
   } catch (error) {
    message.error('Erro ao deletar compania')
   }
  }

  const openForm = (_id, name) => {
    setCompanyId(_id);
    setCompanyName(name);
    return setShowModal(true);
  }

  const open = () => {
    if(!div){
      return setDiv(true)
    }
    return setDiv(false) 
  }

  const cancel = () => {
    message.error('Compania não foi deletada');
  }

  useEffect(() => {
    const loadCompanies = async () => {
      const { data } = await api.get('companies');
      setCompanies(data)
  
      return setLoading(false);
    }
    if(reload){
      loadCompanies();
      setReload(false);
    }

    setTimeout(() => {
      loadCompanies();
    }, 2000)
    
  }, [reload]);

  return (
   <>
   <Header header={true}  data={[{
     children: 'Criar Compania',
     setDiv: open
   }]} />
   {loading ? (
     <Loading />
   ) : (
    <Container>
    {div ? (
      <FormDiv>
        <form onSubmit={handleSubmit(handleCreateCompany)}>
          <input type="text" placeholder="Digite o nome da sua empresa" {...register('name', { required: true })}/>
          <span style={{ color: "var(--color-red)"}}>{errors.name?.message}</span>
          <button type="submit">Criar</button>
        </form>
      </FormDiv>
    ) : ('')}
      {companies.length <= 0 ? (
        <Warning  message="Você ainda não possui uma compania cadastrada" />
      ) : (
        <ul>
          {companies.map(company => (
            <li key={company._id}>
              <div className="content">
                <h2>{company.name}</h2>
                <Link to={`units/${company._id}`}>
                  <p>Possui <strong>{company.units.length}</strong> unidades</p>
                  < FiChevronRight size={25} color="var(--color-blue)" />
                </Link>
              </div>
              <nav>
                <button className="att" onClick={() => openForm(company._id, company.name)}>Atualizar</button>
                <Popconfirm
                  title="Deseja realmente excluir essa compania?"
                  onConfirm={() => deleteCompany(company._id)}
                  onCancel={cancel}
                  okText="Excluir"
                  cancelText="Fechar"
                  icon={false}
                >
                  <button>Deletar</button>
              </Popconfirm>
              </nav>
            </li>   
          ))}
        </ul>
      )}
    {showModal ? (
      <UpdateCompanyModal 
        setReload={setReload} 
        setShowModal={setShowModal} 
        companyId={companyId}
        companyName={companyName}
      />
    ) : ('')}
  </Container>
   ) }
  </> 
  )
}


export default Dashboard;