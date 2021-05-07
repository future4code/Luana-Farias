import './styles/global.scss'
import Routes from './router/Routes'
import GlobalState from './global/GlobalState';
import AuthContextProvider from './context/AuthContext';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <GlobalState>
      <AuthContextProvider>
        <Routes />
      </AuthContextProvider>
    </GlobalState>
    </BrowserRouter>
  );
}

export default App;
