import { useEffect, useRef } from "react";

const RefForm = () => {
    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    useEffect(() =>{
        nameRef.current.focus(); //for cursor
    },[])
    

    const handleSubmit = e =>{
        e.preventDefault()
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input className="bg-gray-200 mb-3 p-2" 
                ref={nameRef}
                type="text" name="name" />
                <br />
                <input className="bg-gray-200 mb-3 p-2"
                ref={emailRef} defaultValue ={'rojoni@sojoni.com'}
                 type="email" name="email" id="" />
                <br />
                <input className="bg-gray-200 mb-3 p-2"
                ref={passwordRef}
                type="password" name="password"  />
                    <br />
                <input className="mt-5 text-white text-xl
                 bg-cyan-500 p-3 rounded-lg" type="submit" value="submit"/>
            </form>
        </div>
    );
};

export default RefForm;