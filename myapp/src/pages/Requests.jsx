import axios from "axios";
import { useEffect, useState } from "react";
import { Commet } from "react-loading-indicators";
import { Link } from "react-router-dom";

const Requests = () => {
      let url = "https://northwind.vercel.app/api/categories";
      const [data, setdata] = useState([]);
      const [isLoading, setisLoading] = useState(true)
      const [search, setsearch] = useState('')
      const [newCategory, setnewCategory] = useState({
            name: '',
            description: ''
      })

      async function readDatas() {
            try {
                  const res = await axios.get(url);
                  const result = await res.data;
                  setdata(result);
                  setisLoading(false)
            } catch (error) {
                  console.error(error);
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

      async function createData() {
            try {
                  await axios.post(url, {
                        name: newCategory.name,
                        description: newCategory.description
                  })
                  readDatas()
            } catch (error) {
                  console.error(error);
            }
      }


      useEffect(() => {
            console.log(newCategory);


      }, [newCategory])


      useEffect(() => {
            readDatas();
      }, []);

      return (
            <div style={{ padding: "20px", fontFamily: "Arial" }}>
                  <input
                        type="text"
                        placeholder="Add name.."
                        value={newCategory.name}
                        onChange={(e) => setnewCategory({
                              description: newCategory.description,
                              name: e.target.value
                        })} />
                  <input
                        type="text"
                        placeholder="Add description.."
                        value={newCategory.description}
                        onChange={(e) => setnewCategory({
                              description: e.target.value,
                              name: newCategory.name
                        })} />
                  <button onClick={createData}>Add category</button>
                  <h2 style={{ textAlign: "center" }}>Category List</h2>
                  <div style={{ display: "grid", gap: "15px", maxWidth: "600px", margin: "0 auto" }}>
                        <input type="text" placeholder="Search category..." value={search} onChange={(e) => setsearch(e.target.value)} />

                        {
                              isLoading ? <Commet color="#32cd32" size="medium" text="" textColor="" /> :
                                    data
                                          .filter((item) => item.name.toLowerCase()
                                                .includes(search.toLowerCase()))
                                          .map((item) => (
                                                <div
                                                      key={item.id}
                                                      style={{
                                                            border: "1px solid #ccc",
                                                            borderRadius: "8px",
                                                            padding: "15px",
                                                            backgroundColor: "#f9f9f9",
                                                            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                                                      }}
                                                >
                                                      <p style={{ fontWeight: "bold", fontSize: "18px", margin: "0 0 5px" }}>{item.name}</p>
                                                      <p style={{ marginBottom: "10px", color: "#555" }}>{item.description}</p>
                                                      <button
                                                            style={{
                                                                  padding: "6px 12px",
                                                                  backgroundColor: "#ff4d4f",
                                                                  color: "#fff",
                                                                  border: "none",
                                                                  borderRadius: "4px",
                                                                  cursor: "pointer",
                                                            }}
                                                            onClick={() => deleteData(item.id)}
                                                      >
                                                            Delete
                                                      </button>
                                                      <Link to={`/detail/${item.id}`} state={{ item }}>
                                                            <button
                                                                  style={{
                                                                        padding: "6px 12px",
                                                                        backgroundColor: "green",
                                                                        color: "#fff",
                                                                        border: "none",
                                                                        borderRadius: "4px",
                                                                        cursor: "pointer",
                                                                  }}
                                                            >
                                                                  Details
                                                            </button>
                                                      </Link>
                                                </div>
                                          ))}
                  </div>
            </div>
      );
};

export default Requests;
