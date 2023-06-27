import 'App.css';
import Background from 'components/Background';
import Clock from 'components/Clock';
import Login from 'components/Login';
import TodoList from 'components/TodoList';
import Weather from 'components/Weather';

function App() {
  const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];

  return (
    <>
      <Background />
      <Clock />
      <Login />
      <TodoList initialTodos={savedTodos} />
      <Weather />
    </>
  );
}

export default App;
