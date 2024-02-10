import {useDispatch, useSelector} from 'react-redux'
import {fetchTodos} from './store/slice/todo'
import './App.css'

function App() {
  
  const dispatch = useDispatch();
  const state = useSelector((state) => state)
  console.log(state);

  return (
    <>
      <h1>Api calling in redux </h1>
      <button onClick={(e) => dispatch(fetchTodos())}>Fetch todo</button>
    </>
  )
}

export default App
