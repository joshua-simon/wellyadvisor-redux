import { useState, useEffect } from 'react'
import { collection,query,getDocs } from "firebase/firestore";
import { db } from './firebaseConfig'


const App = () => {
  const [ data,setData] = useState([])

  useEffect(() => {
    const getData = async () => {
      const itemArray = []
      const q =  query(collection(db, "test-data"))
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach(doc => itemArray.push(doc.data()))
      setData(itemArray)
    }
    getData()
  },[])

 const testData = data.map((item,i) => (
  <div key = {i}>
      <h2>{item.Title}</h2>
      <p>{item.Blurb}</p>
    </div>
 ))

  return (
   <div>{testData}</div>
  );
}

export default App;
