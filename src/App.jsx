import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from './page/MyNavbar'
import {  Routes , Route } from 'react-router-dom'
import Home from './page/Home'
import AddListing from './page/AddListing'
import { useEffect, useState } from 'react'

function App() {

  const [loading , setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <>
    <MyNavbar/>
    {loading ? (<p style={{display:'flex', justifyContent:'center' , alignItems:'center' , marginTop:'50px'}}>Loading...</p>) :
      (<Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/addlisting' element={<AddListing/>} />
      </Routes>)
      }
    </>
  )
}

export default App
