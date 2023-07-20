import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { fetchUsers } from './store/userSlice';

function App() {
  const users = useSelector((state: any) => state.users.list)

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchUsers())
  }, [])
  
  return (
    <div>
      Hello
      <ul>
        {users.map((x: any) => <li key={x.id}>{x.name}</li>)}
      </ul>
    </div>
  );
}

export default App;
