import logo from './logo.svg';
import './App.css';
import Kanban from './components/KanbanBoard';
import NotasListar from "./components/NotasListar";

function App() {
  return (
    <GlobalProvider>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<NotasListar />} />
          {/* Rutas adicionales */}
        </Routes>
      </div>
    </GlobalProvider>
  );
}

function App() {
  return (
    <Kanban />
  );
}

export default App;