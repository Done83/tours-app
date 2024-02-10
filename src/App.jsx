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

    const removeTour= (id) => {
      const newTours = tours.filter((tour) => tour.id !== id)
      setTours(newTours)
    }

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

    if (tours.length === 0) {
      return (
          <div className='text-center mt-32'>
              <h2 className='mt-5'>No tours left</h2>
              <button type='button' className='bg-teal-500 text-white px-4 py-2 rounded-lg' onClick={fetchTours}>
                Refresh
              </button>
          </div>
      );
    }

    return (
        <>
            <ToursComponent tours={tours} removeTour={removeTour}/>
        </>
    );
}

export default App;
