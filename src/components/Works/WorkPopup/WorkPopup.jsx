import { useState } from "react";
import AddBtn from "./AddBtn/AddBtn";
import CreateBtn from "./BtnCreate/CreateBtn";
import CreateInput from "./InputCreate/CreateInput";



function WorkPopup(props) {

  const [title, setTitle] = useState("");
  const [linkWork, setlinkWork] = useState("");
  const [setWorks] = useState([]);
  
  let popup = document.querySelector(".popup-wrapper");
let createBtn = document.querySelector('.create');


if(createBtn = false) {
  popup.classList.remove('active');
}

  // const addNewWork = (e) => {
    // e.preventDefault();
    // const newWork = {
    //   id: Date.now(),
    //   title,
    //   linkWork
    // };
    // setWorks([...props, newWork]);
    // popup.classList.remove("active");
  // };


  const addPichers = (e) => {
    e.preventDefault();
  };

  // if () {

  // }

  return (
    <form className="popup-wrapper">
      <p className="text">Название проекта:</p>
      <CreateInput 
        value={title} 
        onChange={e => setTitle(e.target.value)} 
        type="text" 
      />
      <AddBtn onClick={addPichers}>Выберите файл</AddBtn>
      <p className="text">URL:</p>
      <CreateInput 
        value={linkWork} 
        onChange={e => setlinkWork(e.target.value)} 
        type="text" 
      />
      <CreateBtn>Создать</CreateBtn>
    </form>
  );
}

export default WorkPopup;