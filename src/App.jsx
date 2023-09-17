import { useEffect, useState } from 'react'
import './App.css'
import Mycards from './components/Mycards'
import LIGHTGREEN from './assets/lightgreen.jpg';
import DARKGREEN from './assets/darkgreen.jpg';


function App() {
  let [data, setData] = useState([])
  let [toggel, setToggel] = useState(true);

  let callApi = () => {
    console.log("call api");
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((res) => {
        setData(res)
      })
      .catch((error) => {
        console.log("error", error);
      })
  }

  useEffect(() => {
    callApi();
  }, [])

  const handleonMouseEnter=()=>{
    setToggel(false)
  }
  const handleonMouseLeave=()=>{
    setToggel(true)
  }

 

  return (
    <>
      <div className='flex flex-wrap justify-around items-center'>
        {
          data.map((products) => {
            return (
              <div key={products.id}>
                <div >
                  <Mycards cardsData={products} />
                </div>
              </div>
            )
          })
        }
      </div>


      <div className='fles justify-center w-[50] aligns-center'> 
      <h3 className='text-2xl text-purple '>Condition rendering practice</h3>
      <div onMouseEnter={handleonMouseEnter} onMouseLeave={handleonMouseLeave}>
        {toggel ?<img width={200} height={200} src={DARKGREEN}></img> :<img width={200} height={200} src={LIGHTGREEN}></img>}
      </div>
      </div>


    </>
  )
}
export default App
