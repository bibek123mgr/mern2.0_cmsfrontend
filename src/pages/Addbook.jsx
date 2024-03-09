import React, { useState } from 'react';
import axios from 'axios';

const Addbook = () => {
    const [data, setData] = useState({
        name: "",
        price: "",
        isbn: "",
        author: "",
        publication: "",
        publishAt: ""
    });
    const [image, setImage] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            //return a {} null object
            const formData = new FormData();

            //entry in form data munually
            // formData.append('name', data.name);
            // formData.append('price', data.price);
            // formData.append('isbn', data.isbn);
            // formData.append('author', data.author);
            // formData.append('publication', data.publication);
            // formData.append('publishAt', data.publishAt);
            // formData.append('image', image);

            //entry into fromdata dynamically 
            //console.log(Object.entries(data))
            // return a array with multiple array inside ,of the data

            Object.entries(data).forEach(([key, value]) => {
                formData.append(key, value)
            })
            if (image) {
                console.log(image.type)
                if (!validTypes.includes(image.type)) {
                    setImage("");
                    document.getElementById("image").value = "";
                    alert(`invalid image type, png jpg and jpeg accept`)
                    return;
                }
                const imagesize = ((image.size) / (1024 * 1024)).toFixed(2);
                if (imagesize > 5) {
                    setImage("");
                    document.getElementById("image").value = "";
                    alert('file should lessthan equal to 5Mb');
                    return;
                }
                formData.append('image', image);
            }


            // const response = await axios.post('http://localhost:3000/books', formData, {
            //     headers: {
            //         'Content-Type': 'multipart/form-data'   
            //     }
            // });


            //we dont need header if new pass data throught formdata
            const response = await axios.post('https://mern2-0-cms-backend.onrender.com/books', formData,);

            if (response.status === 201) {
                alert('Book added successfully');
                setData({
                    name: "",
                    price: "",
                    isbn: "",
                    author: "",
                    publication: "",
                    publishAt: ""
                });
                setImage("");
                document.getElementById("image").value = "";

            }
        } catch (error) {
            console.error('Error adding book:', error);
            alert('Something went wrong');
        }
    };


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        });
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-8 w-full mx-auto my-16 max-w-md">
            <h2 className="text-2xl font-semibold text-blue-600 mb-6">Add Book</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="bookName" className="block text-sm font-medium text-gray-600">Book Name</label>
                    <input type="text" id="bookName" name="name" className="mt-1 p-2 w-full border rounded-md text-gray-800" value={data.name} onChange={handleInputChange} />
                </div>
                <div className="mb-4">
                    <label htmlFor="bookPrice" className="block text-sm font-medium text-gray-600">Book Price</label>
                    <input type="number" id="price" name="price" className="mt-1 p-2 w-full border rounded-md text-gray-800" value={data.price} onChange={handleInputChange} />
                </div>
                <div className="mb-4">
                    <label htmlFor="isbnNumber" className="block text-sm font-medium text-gray-600">ISBN Number</label>
                    <input type="number" id="isbn" name="isbn" className="mt-1 p-2 w-full border rounded-md text-gray-800" value={data.isbn} onChange={handleInputChange} />
                </div>
                <div className="mb-4">
                    <label htmlFor="authorName" className="block text-sm font-medium text-gray-600">Author Name</label>
                    <input type="text" id="author" name="author" className="mt-1 p-2 w-full border rounded-md text-gray-800" value={data.author} onChange={handleInputChange} />
                </div>
                <div className="mb-4">
                    <label htmlFor="publication" className="block text-sm font-medium text-gray-600">Publication</label>
                    <input type="text" id="publication" name="publication" className="mt-1 p-2 w-full border rounded-md text-gray-800" value={data.publication} onChange={handleInputChange} />
                </div>
                <div className="mb-4">
                    <label htmlFor="setPublishAt" className="block text-sm font-medium text-gray-600">Publish Date</label>
                    <input type="date" id="publishAt" name="publishAt" className="mt-1 p-2 w-full border rounded-md text-gray-800" value={data.publishAt} onChange={handleInputChange} />
                </div>
                <div className="mb-6">
                    <label htmlFor="bookImage" className="block text-sm font-medium text-gray-600">Book Image</label>
                    <input type="file" id="image" name="image" className="mt-1 p-2 w-full border rounded-md text-gray-800" onChange={handleImageChange} />
                </div>
                <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Add Book</button>
            </form>
        </div>
    );
}

export default Addbook;
