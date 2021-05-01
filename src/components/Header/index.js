import { Link } from 'react-router-dom';
import { Container, Content, Logo, Navigation } from './styles';

const Header = ({ header, data }) => {


  return (
    <Container>
      <Content>
        <Link to="/" >
         <Logo src="https://tractian.com/images/Logo-Tractian.svg" alt="logo tractian" />
        </Link>
       
        <Navigation>
          {header ? (
            <ul>
              {data.map((content, i) =>(
                <li key={i}>
                  {content.route ? (
                    <Link to={content.route}>{content.children}</Link>  
                  ) : (
                    <button onClick={() => content.setDiv()}>{content.children}</button>
                  )}
                </li>
              ))}
            </ul>
          ) : ('')}  
        </Navigation>
      </Content>
    </Container>
  )
}

export default Header;