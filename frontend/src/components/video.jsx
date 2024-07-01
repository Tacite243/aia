import React, { useRef, useEffect } from 'react';



export default function Video() {
    const videoRef = useRef(null);

    useEffect(() => {
        const getUserMedia = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                videoRef.current.srcObject = stream;
            } catch (error) {
                console.error('Erreur lors de l\'accès à la caméra :', error);
            }
        };

        getUserMedia();
    }, []);

    return (
        <div>
            <video ref={videoRef} autoPlay playsInline />
        </div>
    );
}

