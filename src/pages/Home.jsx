import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cart from '../components/Cart'

const Home = () => {
    const [books, setBooks] = useState([]);
    const onDelete = (bookid) => {
        setBooks(prevBooks => prevBooks.filter(book => book._id !== bookid));
    };
    const fetchBooks = async () => {
        try {
            const response = await axios.get('http://localhost:3000/books'); // Assuming your API endpoint is '/api/books'
            if (response.status === 200) {
                setBooks(response.data.data); // Assuming the books data is in the 'data' field of the response
            } else {
                console.error('Failed to fetch books:', response.statusText);
            }
        } catch (error) {
            console.error('Error fetching books:', error);
        }
    };
    useEffect(() => {
        fetchBooks();
    }, []);

    return (
        <div className='flex justify-center items-center'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {books.map((book) => (
                    <Cart key={book._id} book={book} onDelete={onDelete} />
                ))}
            </div>
        </div>
    );
};

export default Home;
