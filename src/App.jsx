import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import CardResident from './components/CardResident'
import LocationInfo from './components/LocationInfo'
import Pagination from './components/Pagination'
import getRandomNumber from './utils/getRandomNumber'


function App() {
  const [location, setLocation] = useState()
  const [searchInput, setSearchInput] = useState('')
  const [pageNumber, setPageNumber] = useState(1)

  useEffect(() => {
    let id = getRandomNumber()
    if(searchInput) {
      id = searchInput
    } else {
      id = pageNumber
    }
    let URL = `https://rickandmortyapi.com/api/location/${id}`
    axios.get(URL)
      .then(res => setLocation(res.data))
      .catch(err => console.error(err))

  },[searchInput, pageNumber])

  const handleSubmit = e => {
    e.preventDefault()
    setSearchInput(e.target.locationId.value)

  }
  console.log(searchInput)
  return (
    <div className="App">
      <header className='App__header'>
      <form className='formulario' action="" onSubmit={handleSubmit}>
            <input className='input__search' id='locationId' type="text" placeholder='enter another number from 1 to 126'/>
            <button className='boton'>Search</button>
          </form>
      </header>
      <div className="contenedor">
          

        <LocationInfo location={location}/>
        <div className='container__card '>
          {
            location?.residents.map(url => (
              <CardResident 
                key={url}
                url={url}
              />
            ))
          }
        </div>
      </div>

      <Pagination 
        setPageNumber={setPageNumber}
        pageNumber={pageNumber}
      />
    </div>
  )
}

export default App
