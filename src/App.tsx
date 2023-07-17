import { useState } from 'react'
import { useAppDispatch,useAppSelector } from './app/hooks'
import { incremented,amountAdded } from './features/counter/counter-slice'
import './App.css'
import{useFetchBreedsQuery } from './features/dogs/dogs-api-slice'

function App() {


  const count = useAppSelector((state)=>state.counter.value);
  const dispatch = useAppDispatch();


  const [numDogs,setNumDogs] = useState(10);

  const {data=[],isFetching} = useFetchBreedsQuery(numDogs);

  function handleClick(){
    dispatch(amountAdded(3))
  }

  return (
    <>
    <button onClick={handleClick}>버튼</button>

    <div>
      <p>Dogs to fetch:</p>
      <select value={numDogs} onChange={(e)=> setNumDogs(Number(e.target.value))}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
      </select>
    </div>

    <div>
      <p>number of dogs fetched:{data.length}</p>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>picture</th>
          </tr>
        </thead>
        <tbody>{data.map((breed)=>(
          <tr key={breed.id}>
            <td>{breed.name}</td>
            <td><img src={breed.image.url} height={250}></img>
            </td>
          </tr>
        ))}</tbody>
      </table>
    </div>
    </>
  )
}

export default App


//1:03:36