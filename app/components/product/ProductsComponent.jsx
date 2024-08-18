'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const ProductsComponent = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  var nf = new Intl.NumberFormat();

  useEffect(() => {
    setLoading(true);
    axios.get('/api/product/get').then((response) => {
      setProducts(response.data);
      setLoading(false);
    });
    setLoading(false);
  }, []);

  async function handleButton(type, id) {
    if (type === 'update') {
      router.push(`/admin/products/edit/${id}`);
    } else {
      try {
        setLoading(true);
        const res = await axios.delete(`/api/product/delete`, {
          params: {
            productId: id,
          },
        });
        setProducts((prev) => prev.filter((product) => product._id !== id));
        toast.success('Product Delete');
      } catch (error) {
        toast.error('Error Delete Product');
        console.log(error, 'DELETE_PRODUCT');
      } finally {
        setLoading(false);
      }
    }
  }

  return (
    <div className='flex min-h-full flex-col items-start justify-center py-6 mt-[4rem] px-3'>
      <table className='basic mt-2'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Sold</th>
            <th>Rating</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product) => (
            <tr key={product?._id}>
              <td>{product?._id.slice(0, 5)}...</td>
              <td>{product?.title}</td>
              <td>Rp. {nf.format(product?.price)}</td>
              <td>{product?.countInStock} Unit</td>
              <td>{product?.sold} Unit</td>
              <td>{product?.totalStars} Star</td>
              <td>
                <button
                  className='btn-table bg-[#3C91BF] text-white mr-6'
                  onClick={() => handleButton('update', product._id)}
                >
                  Edit
                </button>
                <button
                  className='btn-table bg-[#E14A3A] text-white'
                  onClick={() => handleButton('delete', product._id)}
                >
                  {loading ? 'Loading...' : 'Delete'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsComponent;
