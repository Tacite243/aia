import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import Header from '../components/header/head';
import Sider from '../components/sideBar/sider';

const FileUpload = () => {
    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
        console.log(acceptedFiles);

        // Example: Upload files to backend
        uploadFiles(acceptedFiles);
    }, []);

    const {
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject
    } = useDropzone({
        onDrop,
        accept: 'image/jpeg, image/png' // Types de fichiers acceptés
    });

    const baseStyle = {
        borderWidth: 2,
        borderColor: '#cccccc',
        borderStyle: 'dashed',
        borderRadius: 4,
        padding: 20,
        textAlign: 'center',
        cursor: 'pointer',
        margin: '20px auto',
        width: '80%',
        maxWidth: 600,
    };

    const activeStyle = {
        borderColor: '#4CAF50'
    };

    const acceptStyle = {
        borderColor: '#00e676'
    };

    const rejectStyle = {
        borderColor: '#ff1744'
    };

    let dropzoneStyle = {
        ...baseStyle,
    };

    if (isDragActive) {
        dropzoneStyle = {
            ...dropzoneStyle,
            ...activeStyle
        };
    }

    if (isDragAccept) {
        dropzoneStyle = {
            ...dropzoneStyle,
            ...acceptStyle
        };
    }

    if (isDragReject) {
        dropzoneStyle = {
            ...dropzoneStyle,
            ...rejectStyle
        };
    }

    const uploadFiles = async (files) => {
        const formData = new FormData();
        files.forEach(file => {
            formData.append('files', file);
        });

        try {
            const response = await fetch('http://backend-url/upload', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                console.log('Files uploaded successfully!');
                // Handle success, e.g., show a success message
            } else {
                console.error('Failed to upload files.');
                // Handle error, e.g., show an error message
            }
        } catch (error) {
            console.error('Error uploading files:', error);
            // Handle network or other errors
        }
    };

    return (
        <>
            <Header />
            <div className="body">
                <Sider />
                <div className="main">
                    <div {...getRootProps()} style={dropzoneStyle} className="dropzone">
                        <input {...getInputProps()} />
                        {
                            isDragActive ?
                                <p>Drop the files here ...</p> :
                                <p>Drag 'n' drop some files here, or click to select files</p>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default FileUpload;
