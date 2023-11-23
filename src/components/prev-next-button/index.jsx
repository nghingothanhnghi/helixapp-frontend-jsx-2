

const PrevNextButtonComponent = ({ handlePrevClick, handleNextClick }) => {
    return (
        <>
            <div className='grid grid-cols-2'>
                <button onClick={handlePrevClick} type="button" className="items-center px-6 py-3.5 text-base font-medium text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100">
                    <p className='text-xs subpixel-antialiased'>Prev</p>
                    <p className='text-base antialiased font-semibold'>wegwgg</p>
                </button>
                <button onClick={handleNextClick} type="button" className="items-center px-6 py-3.5 text-base font-medium text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100">
                    <p className='text-xs subpixel-antialiased'>Next</p>
                    <p className='text-base antialiased font-semibold'>wegwgg</p>
                </button>
            </div>
        </>
    )
}
export default PrevNextButtonComponent

