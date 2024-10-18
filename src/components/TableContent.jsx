import axios from 'axios';
import React, { useState } from 'react'
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import DeleteModal from './DeleteModal';
import UpdateModal from './UpdateModal';
function TableContent({user,setUser,GETData,loader}) {
  let [getData,setGetData] = useState({});
  let [deleteById,setDeleteById] = useState('');
  let initDeleteBtn = (id) => {
    setDeleteById(id);
    document.getElementById('my_modal_2').showModal();
  }
  let initUpdateBtn = (item) => {
    document.getElementById('my_modal_3').showModal();
    setGetData(item);
    console.log(getData);
  }

  
  return (
    <>
    <DeleteModal deleteById={deleteById} user={user} setUser={setUser}></DeleteModal>
    <UpdateModal getData={getData} setGetData={setGetData} GETData={GETData} />
<div class="relative overflow-x-auto shadow-md sm:rounded-lg mx-36 mt-10">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class=" text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-xl">
            <tr className=''>
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Email
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
          {
            !loader ? 
            <>
            {user.map((item) => (
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-lg">
            <td class="px-6 py-4">
                {item.name}
            </td>
            <td class="px-6 py-4">
                {item.email}
            </td>
            <td class="px-6 py-4 flex">
              <div className='p-3 rounded-full hover:bg-blue-100 transition-all'>
              <MdEdit
              onClick={() => initUpdateBtn(item)}
               className='text-3xl text-blue-600 rounded-full' />
              </div>
              <div className='p-3 rounded-full hover:bg-red-100 transition-all'>
              <MdDelete 
              onClick={() => initDeleteBtn(item._id)}
              className='text-3xl text-red-600 rounded-full' />
              </div>
            </td>
        </tr>
            ))}
            </>
            :
            <>
            <tr>
              <td></td>
            <td className='flex justify-center w-full my-5'>
              
<span className="loading loading-ring loading-lg"></span>
            </td>

            </tr>
            </>

          }
            
        </tbody>
    </table>
</div>

    </>
  )
}

export default TableContent