import './styles/global.scss'
import Routes from './router/Routes'
import GlobalState from './global/GlobalState';


function App() {
  return (
    <GlobalState>
    <Routes />
    </GlobalState>
  );
}

export default App;
