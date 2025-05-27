import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]);
  const [newProductName, setNewProductName] = useState('');
  const [editProductId, setEditProductId] = useState(null);
  const [editProductName, setEditProductName] = useState('');

  const API_URL = 'https://northwind.vercel.app/api/products';

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(API_URL);
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const addProduct = async () => {
    if (!newProductName.trim()) return;
    try {
      await axios.post(API_URL, { name: newProductName });
      fetchProducts();
      setNewProductName('');
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const updateProduct = async (id) => {
    if (!editProductName.trim()) return;
    try {
      await axios.put(`${API_URL}/${id}`, { name: editProductName });
      fetchProducts();
      setEditProductId(null);
      setEditProductName('');
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Products CRUD</h1>

      <div style={styles.inputContainer}>
        <input
          type="text"
          placeholder="New product name"
          value={newProductName}
          onChange={(e) => setNewProductName(e.target.value)}
          style={styles.input}
        />
        <button onClick={addProduct} style={styles.addButton}>Add</button>
      </div>

      <ul style={styles.list}>
        {products.map((product) => (
          <li key={product.id} style={styles.listItem}>
            {editProductId === product.id ? (
              <>
                <input
                  value={editProductName}
                  onChange={(e) => setEditProductName(e.target.value)}
                  style={styles.input}
                />
                <button onClick={() => updateProduct(product.id)} style={styles.saveButton}>Save</button>
              </>
            ) : (
              <>
                <span style={styles.productName}>{product.name}</span>
                <div>
                  <button onClick={() => deleteProduct(product.id)} style={styles.deleteButton}>Delete</button>
                  <button
                    onClick={() => {
                      setEditProductId(product.id);
                      setEditProductName(product.name);
                    }}
                    style={styles.editButton}
                  >
                    Edit
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    width: '400px',
    margin: '40px auto',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333',
  },
  inputContainer: {
    display: 'flex',
    gap: '10px',
    marginBottom: '20px',
  },
  input: {
    flex: '1',
    padding: '8px',
    fontSize: '16px',
  },
  addButton: {
    padding: '8px 12px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
  list: {
    listStyle: 'none',
    padding: 0,
  },
  listItem: {
    backgroundColor: '#f9f9f9',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '4px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productName: {
    fontWeight: 'bold',
  },
  deleteButton: {
    marginLeft: '5px',
    padding: '5px 8px',
    backgroundColor: '#f44336',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
  editButton: {
    marginLeft: '5px',
    padding: '5px 8px',
    backgroundColor: '#2196F3',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
  saveButton: {
    marginLeft: '5px',
    padding: '5px 8px',
    backgroundColor: '#ff9800',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
};

export default App;
