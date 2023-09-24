
const SimpleForm = () => {

    const handleSubmit = e => {
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.phone.value);
        console.log('form submitted');
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input className="bg-gray-200 mb-3 p-2" type="text" name="name" />
                <br />
                <input className="bg-gray-200 mb-3 p-2" type="email" name="email" id="" />
                <br />
                <input className="bg-gray-200 mb-3 p-2" type="text" name="phone" />
                <br />
                <input className="mt-5 text-white text-xl
                 bg-cyan-500 p-3 rounded-lg" type="submit" value="submit" />
            </form>
        </div>
    );
};

export default SimpleForm;