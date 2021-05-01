import Router from './Router';
import 'antd/dist/antd.css';
import GlobalStyles from './GlobalStyles';

import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
     <BrowserRouter>
      <Router />
     </BrowserRouter>
      <GlobalStyles />
    </>
  );
}

export default App;
