import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
//import './style.css';

function Items() {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('http://localhost:3000/items');
        setItems(response.data.payload);
      } catch (error) {
        alert('Gagal mengambil data barang');
      }
    };
    fetchItems();
  }, []);

  return (
    <div className="container items-container">
      <div className="header">
        <h2>Daftar Barang</h2>
        <button onClick={() => {
          localStorage.removeItem('token');
          navigate('/');
        }} className="logout-btn">Logout</button>
      </div>
      <div className="grid">
        {items.map(item => (
          <div key={item.id} className="card">
            <h3>{item.name}</h3>
            <p>Harga: Rp{item.price}</p>
            <p>Stok: {item.stock}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Items;