import { useState } from 'react';
import ModalUpdateAsset from '../ModalUpdateAsset';
import { Popconfirm, message } from 'antd';
import { Container, Image, InfoData, Actions } from './styles';

const CardAssets = ({ data, deleteAssets, setReload }) => {
  const [ showModal, setShowModal ] = useState(false);
  const [ assetId, setAssetId ] = useState('');
  const [ active, setActive ] = useState({});
  const status = {
    inAlert: 'Em Alerta',
    inOperation: 'Em Operação',
    inDowntime: 'Parada',
  }

  const openModal = (_id, assets) => {
    setActive(assets);
    setAssetId(_id);
    return setShowModal(true);
  }

  const cancel = () => {
    message.error('Ativo não foi deletado');
  }
  
  return (
    <>
      {data.map(assets => (
      <Container key={assets._id}>
        <Image image={assets.image} />
        <InfoData>
          <span>Nome: <strong>{assets.name}</strong></span>
          <span>Status: <strong className={assets.status}>{status[assets.status]}</strong></span>
          <span>Descrição: <strong>{assets.description}</strong></span>
          <span>Saúde: <strong>{assets.healthscore} %</strong></span>
          <span>Responsável: <strong>{assets.responsible.name}</strong></span> 
        </InfoData>
        <Actions>
          <button onClick={() => openModal(assets._id, assets)} className="att">Atualizar</button>
          <Popconfirm
            title="Deseja realmente excluir esse ativo?"
            onConfirm={() => deleteAssets(assets._id)}
            onCancel={cancel}
            okText="Excluir"
            cancelText="Fechar"
            icon={false}
          >
            <button>Deletar</button>
          </Popconfirm>
        </Actions>
        {showModal ? (
        <ModalUpdateAsset _id={assetId} asset={active} setReload={setReload} setShowModal={setShowModal} />
      ): ('')}
      </Container>
      ))}
    </>
  )
}

export default CardAssets;