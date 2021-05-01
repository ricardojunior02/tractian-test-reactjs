import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';

import {Container} from './styles'
import Warning from '../Warning';
const ListUnits = ({ data }) => {
  return (
    <>
    {data.length <= 0 ? (
      <Warning message="Essa empresa ainda não possui nenhuma unidade" />
    ) : (
       <Container>  
       {data.map(unity => (
         <li key={unity._id}>
           <h3>{unity.name}</h3>
           <p>Possui <strong>{unity.assets.length}</strong> ativos</p>
           <Link to={`/unity/${unity._id}`}>
             Visualizar unidade<FiChevronRight size={25} color="var(--color-blue)" />
           </Link>
         </li>
       ))}
     </Container>
    )}
    </>
  )
}


export default ListUnits;