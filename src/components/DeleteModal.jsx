import axios from 'axios';
import React from 'react';
let URL = 'https://mongo-atlas-crud-1.vercel.app/api/items';

function DeleteModal({deleteById,user,setUser}) {
  const closeModal = () => {
    const modal = document.getElementById('my_modal_2');
    if (modal) {
      modal.close();
    }
    axios.delete(`${URL}/${deleteById}`)
    .then(function (response) {
      // setGetData([getData,response.data])
      // let deletedItem = user.filter(item => item._id != id);
      setUser(user.filter(item => item._id != deleteById));
      // GETData();
      console.log('success');
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
    
  };

  return (
    <>
      {/* Open the modal using document.getElementById('my_modal_1').showModal() method */}
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-2xl font-sans">DELETE User</h3>
          <h3 className="font-semibold text-lg font-sans">Delete a user</h3>
          <form action="" className="my-3">
            
          </form>
          <button className="btn btn-error text-lg" onClick={closeModal}>DELETE</button>
        </div>
      </dialog>
    </>
  );
}

export default DeleteModal;
