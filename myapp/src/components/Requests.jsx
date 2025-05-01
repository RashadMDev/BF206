import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Requests = () => {
      let url = "https://northwind.vercel.app/api/categories"
      const [data, setData] = useState([]);
      const [loading, setloading] = useState(true)
      const [inputData, setinputData] = useState('')
      const [search, setsearch] = useState('')

      async function readDatas() {
            try {
                  const res = await axios.get(url)
                  setData(res.data)
                  setloading(false)
            } catch (error) {
                  console.error(error);
            }
      }

      async function createData() {
            try {
                  await axios.post(url, { name: inputData })
                  setinputData('')
                  readDatas()
            } catch (error) {
                  console.error(error)
            }
      }

      async function deleteData(id) {
            try {
                  await axios.delete(`${url}/${id}`)
                  readDatas()
            } catch (error) {
                  console.error(error);
            }
      }


      useEffect(() => {
            readDatas();
      }, []);

      return (
            <div>
                  <div>
                        <h1>Add Data</h1>
                        <input
                              value={inputData}
                              onChange={(e) => setinputData(e.target.value)}
                              type="text"
                              placeholder='post something' />
                        <button onClick={createData}>Add</button>
                  </div>

                  <div>
                        <h1>Search Data</h1>
                        <input
                              type="text"
                              value={search}
                              onChange={(e) => setsearch(e.target.value)} />
                  </div>

                  {
                        loading ? <div>Loading...</div> :
                              data.filter((item) => item.name
                                    .toLowerCase()
                                    .includes(search.toLowerCase()))
                                    .map((item) => (
                                          <div key={item.id} style={{ display: "flex" }}>
                                                <p>{item.name}</p>
                                                <button onClick={() => deleteData(item.id)}>Delete</button>
                                          </div>
                                    ))
                  }
            </div>
      )
}

export default Requests