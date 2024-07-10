import React, { useState } from "react";
import { db } from "../Firebase/config";
import { collection, addDoc } from "firebase/firestore";

function Writedata() {
  const [name, setName] = useState("");
  const [des, setDes] = useState("");
  const [message, setMessage] = useState("");
  const [heading, setHeading] = useState("");

  //   write to the firestore database
  // .then
  // const handleApply = () => {
  //   addDoc(collection(db, "Reference"), {
  //     Jina: name,
  //     description: des,
  //     Messo: message,
  //   })
  //     .then((result) => {
  //       console.log(result);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };


  // async try catch statement
  // write 
  const handleApplyAgain = async () => {
    try {
      const result = await addDoc(collection(db, "Referencetwo"), {
        Name: name,
        Description: des,
        Message: message,
      });
      setHeading("Saved Data");

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>{heading}</h1>
      <input
        type="text"
        placeholder="Enter Name"
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Enter Description..."
        onChange={(e) => setDes(e.target.value)}
      />
      <br />
      <textarea
        cols="30"
        rows="10"
        placeholder="Enter Message..."
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <br />
      {/* <button onClick={handleApply}>Apply</button> */}
      <button onClick={handleApplyAgain}>Apply again</button>
    </div>
  );
}

export default Writedata;
