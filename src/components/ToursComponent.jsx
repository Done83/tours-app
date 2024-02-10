import TourComponent from './TourComponent';

/* eslint-disable react/prop-types */
const ToursComponent = ({ tours, removeTour }) => {
    return (
        <section className='flex flex-col w-[90%] max-w-[90%] items-center justify-center mt-8 mx-auto'>
            <div className='container mx-auto flex flex-col justify-center items-center'>
                <h2 className='text-3xl'>Our Tours</h2>
                <span className=' bg-teal-500 h-[5px] w-[100px] rounded mt-2'></span>
            </div>
            <div className='mt-10 flex flex-wrap justify-center gap-4'>
                {tours.map((tour, idx) => {
                    return (
                        <div key={idx}>
                            <TourComponent
                                key={tour.id}
                                {...tour}
                                removeTour={removeTour}
                            />
                        </div>
                    );
                })}
            </div>
        </section>
    );
};
export default ToursComponent;
