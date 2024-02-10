import TourComponent from './TourComponent';

/* eslint-disable react/prop-types */
const ToursComponent = ({ tours }) => {
    console.log(tours);
    return (
        <section className='flex flex-col w-[90%] max-w-[90%] items-center justify-center mt-8 mx-auto'>
            <div className='container mx-auto flex flex-col justify-center items-center'>
                <h2 className='text-3xl'>Our Tours</h2>
                <span className=' bg-teal-500 h-[5px] w-[100px] rounded mt-2'></span>
            </div>
            <div className='mt-10 flex gap-3'>
                {tours.map((tour) => {
                    return <TourComponent key={tour.id} />;
                })}
            </div>
        </section>
    );
};
export default ToursComponent;
