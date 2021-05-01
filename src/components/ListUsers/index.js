import { Popconfirm } from 'antd';
import Warning from '../Warning';
import { Container } from './styles';

const ListUsers = ({ data, deleteUser, cancel, openForm }) => {
  return (
   <>
    {data.length <= 0 ? (
      <Warning message="Essa empresa ainda não possui nenhum usuário" />
    ) : (
       <Container>
       {data.map(user => (
         <li key={user._id}>
           <div className="infos">
            <strong>Nome: {user.name}</strong>
            <p>Email: {user.email}</p> 
           </div>
           <nav className="buttons">
             <button className="att" onClick={() => openForm(user)}>Atualizar</button>
             <Popconfirm
               title="Deseja realmente excluir esse usuário?"
               onConfirm={() => deleteUser(user._id)}
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
     </Container>
    )}
   </>
  )
}


export default ListUsers;