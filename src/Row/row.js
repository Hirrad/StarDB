const Row = ({left, right}) => {
    return(
        <div className='body-container d-flex justify-content-between mt-5'>
            <div className='col-5'>
                {left}
            </div>

            <div className='d-flex justify-content-center col-6 h-100'>
                <div className="row d-flex justify-content-center align-items-center bg-dark w-100">
                    {right}
                </div>
            </div>
        </div>)
};
export default Row;