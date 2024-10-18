import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Modal from './components/Modal';
import AppTitle from './components/AppTitle';
import TableContent from './components/TableContent';
let URL = 'https://mongo-atlas-crud-1.vercel.app/api/items';
function App() {
  const [loader,setLoader] = useState(false);
  let [getData,setGetData] = useState({
    name : '',
    email : ''
  })
  let [user,setUser] = useState([]);
  let GETData = () => {
    setLoader(true);
    axios.get(URL)
  .then(function (response) {
    // handle success
    setUser(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
    getData.name = '';
    getData.email = '';
    setLoader(false);
  });
  }
  useEffect(() => {
    GETData();
  },[])
  let handleAddButton = () => {
    document.getElementById('my_modal_1').showModal();
   
  }
  return (
    <div className='pt-20 px-10'>
    <div className='flex justify-between items-center'>
    <AppTitle></AppTitle>
    {/* <button className="btn">open modal</button> */}
    <button 
     onClick={handleAddButton}
    className="btn btn-active btn-primary text-xl font-light text-white">ADD User</button>
    </div>
      <TableContent user={user} setUser={setUser} GETData={GETData} loader={loader} />
    
        <Modal getData={getData} setGetData={setGetData} GETData={GETData}></Modal>
    </div>
  )
}

export default App