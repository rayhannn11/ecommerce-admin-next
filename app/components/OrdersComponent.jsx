'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const OrdersComponent = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const status = ['Dikemas', 'Dikirim', 'Selesai'];
  var nf = new Intl.NumberFormat();

  // Effect getOrder
  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      try {
        const response = await axios.get('/api/order/get');
        setOrders(response.data);
      } catch (error) {
        console.error('Failed to fetch orders:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  // Handle Action
  async function handleAction(id) {
    try {
      setLoading(true);
      const item = orders.filter((order) => order._id === id)[0];
      // Status And Paid
      const currentStatus = item?.status;
      const currentPaid = item?.paid;
      const res = await axios.put(`/api/order/update?orderId=${id}`, {
        status: currentStatus + 1,
        paid: currentPaid + 1,
      });
      setOrders([res.data, ...orders.filter((order) => order._id !== id)]);
    } catch (error) {
      toast.error('Error Process Order');
      console.log(error, 'DELETE_PRODUCT');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className='flex min-h-full flex-col items-start justify-center py-6 mt-[4rem] px-3'>
      <table className='basic mt-2'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Email</th>
            <th>Customer</th>
            <th>Total</th>
            <th>Payment</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {!!orders &&
            orders.map((order) => (
              <tr key={order._id}>
                <td>{order._id.slice(0, 5)}...</td>
                <td>{order.email}</td>
                <td>{order.customer}</td>
                <td>{nf.format(order.total)}</td>
                <td>{status[order?.status]}</td>
                <td>
                  {order.paid < 2 ? (
                    <span className='text-red-400 text-bold'>Belum Bayar</span>
                  ) : (
                    <span className='text-green-400 text-bold'>Lunas</span>
                  )}
                </td>
                <td>
                  {order.status < 2 ? (
                    <button
                      onClick={() => handleAction(order._id)}
                      className='btn-table bg-[#111] text-white'
                    >
                      {loading ? 'Loading...' : 'Next Stage'}
                    </button>
                  ) : (
                    'Selesai'
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersComponent;
