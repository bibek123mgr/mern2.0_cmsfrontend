import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Cart = ({ book, onDelete }) => {
    const [books, setBooks] = useState({})
    const handledelete = async () => {
        try {
            await axios.delete(`https://mern2-0-cms-backend.onrender.com/books/${book._id}`);
            onDelete(book._id);
            alert('Successfully deleted');
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className="bg-white rounded-lg border p-4 w-80">
            <img src={book.imageUrl} alt="Placeholder Image" className="w-full h-48 rounded-md object-cover" />
            <div className="px-1 py-4">
                <div className="font-bold text-xl mb-2">{book.name}</div>
                <p className="text-gray-700 text-base">
                    {book.price}
                </p>
            </div>
            <div className="px-1 py-4">
                <Link to={`/books/${book._id}`} className="text-blue-500 hover:underline">Read More</Link>
            </div>
            <div className='flex justify-between items-center'>
                <button onClick={handledelete} className='bg-blue-600 p-2 text-white'>delete</button>
                <button>edit</button>
            </div>
        </div>
    );
}

export default Cart;
