import { useState } from 'react';

/* eslint-disable react/prop-types */
const TourComponent = ({ name, info, image, price, removeTour, id }) => {
    const [readMore, setReadMore] = useState(false);

    return (
        <article className='relative rounded shadow-md mb-4 w-[350px] h-[800px]'>
            <div className=''>
                <img
                    src={image}
                    alt={name}
                    className=' w-[100%] object-cover block rounded-t-sm h-[250px]'
                />
                <span className='absolute top-0 right-0 bg-teal-500 px-3 py-1 rounded-tr-sm rounded-bl-sm tracking-wide text-gray-200'>
                    ${price}
                </span>
                <div className=' py-[1.5rem] px-2 flex flex-col'>
                    <h5 className=' text-[1rem] text-center mb-2'>{name}</h5>
                    <p>
                        {readMore ? info : `${info.substring(0, 200)}...`}
                        <small
                            className=' text-teal-500 cursor-pointer'
                            onClick={() => setReadMore(!readMore)}
                        >
                            {readMore ? ' Show less' : ' Read more'}
                        </small>
                    </p>
                    <button
                        type='button'
                        className='bg-teal-500 text-white px-4 py-2 rounded-lg mt-9'
                        onClick={() => removeTour(id)}
                    >
                        Remove
                    </button>
                </div>
            </div>
        </article>
    );
};
export default TourComponent;
