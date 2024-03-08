import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Singlebook = ({ onDelete }) => {
    const navigate = useNavigate()
    const { id } = useParams();
    const [book, setBook] = useState({})
    const fetchBook = async () => {
        const response = await axios.get(`http://localhost:3000/books/${id}`)
        if (response.status === 200) {
            setBook(response.data.data)
        }
    }

    const handledelete = async () => {
        try {
            const response = await axios.delete(`http://localhost:3000/books/${id}`)
            if (response.status === 200) {
                navigate('/');
                alert(`successfully deleted`)
            }

        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        fetchBook()
    }, [])
    return (
        <div>
            <div className='flex flex-col justify-center items-center mt-2'>
                <img class="h-[600px]" src={book.imageUrl} alt="Book Image" />
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Book:{book.name}</div>
                    <p class="text-gray-700 text-base">
                        Rs.{book.price}
                    </p>
                    <p class="text-gray-700 text-base">
                        Author:{book.author}
                    </p>
                    <div>
                        <button className='p-3 bg-gray-300 font-bold' onClick={handledelete}>delete</button>
                        <button>
                            <Link to={`/editbook/${book._id}`}>Edit Book</Link>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Singlebook;
