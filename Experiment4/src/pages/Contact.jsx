import { useNavigate } from "react-router-dom";

function Contact() {
    const navigate=useNavigate();

    function handleLogin(){
        navigate("/");
    }
    return(
        <>
            <h1>Contact</h1>
            <h2>Phone: 987654321</h2>

            <form>
                <label>Name: </label>
                <input type="text"></input>
                <br></br>
                <label>Message: </label>
                <input type="text"></input>
            </form>
            <br></br>
            <button onClick={handleLogin}>Submit</button>
        </>
    );
}

export default Contact;