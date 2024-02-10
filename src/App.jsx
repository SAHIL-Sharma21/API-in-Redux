import {useDispatch, useSelector} from 'react-redux'
import {fetchTodos} from './store/slice/todo'
import './App.css'

function App() {
  
  const dispatch = useDispatch();
  const store = useSelector((state) => state)
  console.log(store);

  //if state is loading
  if(store.todo.isLoading){
    return <h1>Loading....</h1>
  }

  if(store.todo.isError){
    return <h1>Something went wrong!</h1>
  }

  return (
    <>
      <h1>Api calling in redux </h1>
      <button onClick={() => dispatch(fetchTodos())}>Fetch todo</button>

    {/* rendring list  */}
    {store.todo.data && store.todo.data.map((item) => {
      return (
        <ul>
          <li key={item.id}>{item.title}</li>
        </ul>
      )
    })}
    </>
  )
}

export default App
