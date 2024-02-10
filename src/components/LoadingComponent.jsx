const LoadingComponent = () => {
    return (
        <div>
            <div className='fixed top-0 left-0 w-screen h-screen flex flex-col items-center justify-center bg-gray-200 bg-opacity-75 z-50'>
                <div>
                    <h1 className='mb-4 text-2xl'>Loading...</h1>
                </div>
                <div className='loader ease-linear rounded-full border-8 border-t-8 border-gray-400 h-20 w-20'></div>
            </div>
        </div>
    );
};
export default LoadingComponent;
