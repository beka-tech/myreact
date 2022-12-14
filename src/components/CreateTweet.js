import React,{useState}from "react";


const CreateTweet = () => {
    const [TextInput, setTextInput] = useState("");
    const [tweets, setTweets] = useState([]);

     
    const userInputHandler = (e) => {
        setTextInput(e.target.value);
    }
    
    const submitTweetHandler = (e) => {
        e.preventDefault();
        setTweets([...tweets, TextInput]);
    };

    return(
        <div>
       <form onSubmit={submitTweetHandler}>
        <textarea onChange={userInputHandler} rows="10" cols="30"></textarea>
        <button>Submit</button>
        <h1>{TextInput}</h1>
       </form>
        </div>
       
    );

};

export default CreateTweet;