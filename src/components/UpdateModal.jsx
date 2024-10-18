import axios from 'axios';
import React, { useState } from 'react';
let URL = 'https://mongo-atlas-crud-1.vercel.app/api/items';

function UpateModal({getData,setGetData,GETData}) {
  const closeModal = () => {
    const modal = document.getElementById('my_modal_3');
    if (modal) {
      modal.close();
    }
    axios.put(`${URL}/${getData._id}`,{name : getData.name,email : getData.email})
    .then(function (response) {
      GETData();
      console.log('success');
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
      getData.name = '';
      getData.email = '';
    });
  };

  return (
    <>
      {/* Open the modal using document.getElementById('my_modal_1').showModal() method */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-2xl font-sans">ADD User</h3>
          <h3 className="font-semibold text-lg font-sans">Add a new user</h3>
          <form action="" className="my-3">
            <div className="relative">
              <input 
                value={getData.name} 
                onChange={(e) => setGetData({...getData,name : e.target.value})}
                type="text" 
                id="name" 
                className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-2xl dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                placeholder=" " 
              />
              <label 
                htmlFor="name" 
                className="absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Name
              </label>
            </div>
            <div className="relative">
              <input 
                type="email" 
                id="email" 
                value={getData.email}
                onChange={(e) => setGetData({...getData,email : e.target.value})}
                className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-2xl dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                placeholder=" " 
              />
              <label 
                htmlFor="email" 
                className="absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Email
              </label>
            </div>
          </form>
          <button className="btn btn-primary" onClick={closeModal}>ADD</button>
        </div>
      </dialog>
    </>
  );
}

export default UpateModal;
