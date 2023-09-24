import React, { Children } from 'react';

const ReuseableForm = ({formTitle ,handleSubmit, submitButtonText='Submit',children}) => {

    const handleLocalSubmit = e => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        }
        handleSubmit(data);
    }
    
// const handleSubmit = e => {
//     e.preventDefault();
// }

    return (
        <div>
            {children}
            <form onSubmit={handleLocalSubmit}>
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
                 type="submit" value={submitButtonText} />
            </form>
        </div>
    );
};

export default ReuseableForm;