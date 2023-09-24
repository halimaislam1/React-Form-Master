import { useState } from "react";

const StateFulForm = () => {
    const [name, setName]= useState('Rojoni klanto');
    const [email, setEmail]= useState(null);
    const [password, setPassword]= useState(null);
    const [error, setError] = useState('');


    const handleSubmit = e => {
        e.preventDefault();
        if(password.length < 6){
            setError('password must be 6 charecters no longer')
        }else{
            setError('')
        }
        console.log(name, email, password);
    }

    const handleEmailChange = e => {
        setEmail(e.target.value)
    }

    

    const handleNameChange = e => {
        setName(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={name} onChange={handleNameChange} className="bg-gray-200 mb-3 p-2" type="text" name="name" />
                <br />
                <input onChange={handleEmailChange}
                className="bg-gray-200 mb-3 p-2" type="email" name="email" id="" />
                <br />
                <input onChange={ e => setPassword(e.target.value)} className="bg-gray-200 mb-3 p-2" type="password"  name="password" required />
                    <br />
                <input  className="mt-5 text-white text-xl
                     bg-cyan-500 p-3 rounded-lg" type="submit" value="submit"/>
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StateFulForm;