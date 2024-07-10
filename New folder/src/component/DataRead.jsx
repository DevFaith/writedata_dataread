import React, { useEffect, useState } from "react";
import { db } from "../Firebase/config";
import { collection, getDocs } from "firebase/firestore";
import Items from "./Items"; 

const DataRead = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const itemsCollection = await getDocs(collection(db, "Referencetwo"));
        const itemsData = itemsCollection.docs.map((result) => result.data());
        setItems(itemsData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Listed Data</h1>
      <ul>
        {items.map((item, index) => (
          <Items key={index} name={item.Name} />
        ))}
      </ul>
    </div>
  );
};

export default DataRead;


// 1. Get rid of the error key in console
// 2. create a component to have a structure of how data that is in the items state
//    to be structured
// 3. Pass the values to the component as props