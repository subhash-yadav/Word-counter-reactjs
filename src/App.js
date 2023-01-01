
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState("");
  const [wordCount, setWordCount]=useState();
  // const [charCount, setCharCount]=useState();
  const char = text.length;

  const changeHandler = (e)=>{
    setText(e.target.value)
  }
  useEffect(()=>{
    const words = text.split(" ");
    let wordCount = 0;
    words.forEach((word)=>{
      if(word.trim() !== ""){
        wordCount++;
      }
    });
    setWordCount(wordCount);
    // setCharCount(text.length);
  },[text])
  return (
    <div className="App">
      <textarea name="" id="" value={text} cols="30" rows="10" onChange={changeHandler}></textarea>
      <p>Total Word:{wordCount}</p>
      <p>Total Character including whitespace:{char}</p>
    </div>
  );
}

export default App;
