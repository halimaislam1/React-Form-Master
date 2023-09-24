import React from 'react';
import useInputState from '../../Hooks/useInputState';

const HookForm = () => {
// const [ name, handleNameChange] = useInputState('Hemonto');
const emailState = useInputState('Hemonto@shen.com');

const handleSubmit =(e) =>{
    console.log('form data:', emailState.value);
    e.preventDefault();
}

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input className="bg-gray-200 mb-3 p-2" 
                value={name} onChange={handleNameChange}
                type="text" name="name" /> */}
                <br />
                <input className="bg-gray-200 mb-3 p-2" 
                {...emailState}
                type="email" name="email" id="" />
                <br />
                <input className="bg-gray-200 mb-3 p-2"
                 type="password" name="password" />
                <br />
                <input className="mt-2 text-white text-xl
                 bg-cyan-500 p-3 rounded-lg" 
                 type="submit" value="submit" />
            </form>
        </div>
    );
};

export default HookForm;