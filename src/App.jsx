/* eslint-disable no-unused-vars */

// components
import TourComponent from './components/TourComponent';
import ToursComponent from './components/ToursComponent';
import LoadingComponent from './components/LoadingComponent';
import { useEffect, useState } from 'react';

const url = 'https://course-api.com/react-tours-project';

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [tours, setTours] = useState([]);

    const fetchTours = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(url);
            const tours = await response.json();
            setTours(tours);
        } catch (error) {
            console.error('Error fetching tours:', error);
        }
        setIsLoading(false);
    };

    useEffect(() => {
        fetchTours();
    }, []);

    if (isLoading) {
        return <LoadingComponent />;
    }

    // TODO:
    // add remove button

    return (
        <>
            <ToursComponent tours={tours}/>
        </>
    );
}

export default App;
