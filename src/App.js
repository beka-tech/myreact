import React ,{useState} from "react";
import TweeList from "./components/TweetList";
import CreateTweet from "./components/CreateTweet";


function App() {
// const name = "Beka"; // const message = "My React App";

const [name, setName] = useState("Dev Ed");
const message = "Hello";

return(

  <div>
    <CreateTweet/>
    {/* <Tweet name={name} message={message}/> */}
    <TweeList name={name} message={message}/>
  

  </div>
);
 

}
export default App;
