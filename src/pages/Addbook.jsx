import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Editbook = () => {
    const [imageFile, setImageFile] = useState(null);

    useEffect(() => {
        fetchFile();
    }, []);

    const fetchFile = async () => {
        try {
            const response = await axios.get('https://mern2-0-cms-backend.onrender.com/books/image', {
                responseType: 'blob', // Ensure response is treated as a blob
            });

            if (response.status === 200) {
                const blob = new Blob([response.data], { type: 'image/jpeg' }); // Adjust type based on file type
                const file = new File([blob], 'image.jpg'); // Adjust filename as needed
                setImageFile(file);
            }
        } catch (error) {
            console.error('Error fetching file:', error);
        }
    };

    const handleFileChange = (e) => {
        setImageFile(e.target.files[0]);
    };

    return (
        <div>
            {imageFile && (
                <div>
                    <label htmlFor="fileInput">Choose a file:</label>
                    <input type="file" id="fileInput" onChange={handleFileChange} />
                </div>
            )}
        </div>
    );
};

export default Editbook;
