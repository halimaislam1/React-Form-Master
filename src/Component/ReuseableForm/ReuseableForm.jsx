import React from 'react';

const ReuseableForm = () => {

const handleSubmit = e => {
    e.preventDefault();
}

    return (
        <div>
            <h2 className='text-4xl font-extrabold mb-3'>sign up</h2>
            <form onSubmit={handleSubmit}>
                <input className="bg-gray-200 mb-3 p-2" 
                type="text" name="name" />
                <br />
                <input className="bg-gray-200 mb-3 p-2" 
                type="email" name="email" id="" />
                <br />
                <input className="bg-gray-200 mb-3 p-2" 
                type="password" name="password" />
                <br />
                <input className="mt-5 text-white text-xl
                 bg-cyan-500 p-3 rounded-lg" 
                 type="submit" value="submit" />
            </form>
        </div>
    );
};

export default ReuseableForm;