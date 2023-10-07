import  { useState } from 'react';


const App = () => {
  const [result, setResult] = useState("");

  function handleClick(e) {
    setResult(result.concat(e.target.name));
  }

  function clear() {
    setResult('');
  }

  function backspace() {
    setResult(result.slice(0, -1));
  }

  function calculate() {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult('Error');
    }
  }

  return (
    <div className="container flex justify-center mt-6">
      
      <div className='w-[500px] border-2 flex items-center justify-center flex-col rounded-2xl bg-zinc-900'>
      <h1 className='text-white text-4xl text-center mt-2'>Calculator</h1>
        <div className="flex items-center justify-center mt-4">
          <input
            type="text"
            className="w-[480px] h-16 p-4 text-right text-3xl rounded-lg text-black opacity-90  outline-none"
            value={result}
          />
        </div>
       
       <div className='flex items-center justify-center mt-2'>
       <button
          name="1"
          className=" w-[100px] h-12 text-xl font-bold bg-gray-500 rounded-lg m-3 hover:scale-110"
          onClick={handleClick}
        >
          1
        </button>

        <button
          name="2"
          className=" w-[100px] h-12 text-xl font-bold bg-gray-500 rounded-lg m-3 hover:scale-110 hover:scale-110"
          onClick={handleClick}
        >
          2
        </button>

        <button
          name="3"
          className=" w-[100px] h-12 text-xl font-bold bg-gray-500 rounded-lg m-3 hover:scale-110 hover:scale-110"
          onClick={handleClick}
        >
          3
        </button>

        <button
          name="+"
          className=" w-[100px] h-12 text-xl font-bold bg-yellow-500 rounded-lg m-3 hover:scale-110"
          onClick={handleClick}
        >
          +
        </button>
       
       </div>


       <div className='flex items-center justify-center'>
       <button
          name="4"
          className=" w-[100px] h-12 text-xl font-bold bg-gray-500 rounded-lg m-3 hover:scale-110"
          onClick={handleClick}
        >
          4
        </button>

        <button
          name="5"
          className=" w-[100px] h-12 text-xl font-bold bg-gray-500 rounded-lg m-3 hover:scale-110"
          onClick={handleClick}
        >
          5
        </button>

        <button
          name="6"
          className=" w-[100px] h-12 text-xl font-bold bg-gray-500 rounded-lg m-3 hover:scale-110"
          onClick={handleClick}
        >
          6
        </button>

        <button
          name="-"
          className=" w-[100px] h-12 text-xl font-bold bg-yellow-500 rounded-lg m-3 hover:scale-110"
          onClick={handleClick}
        >
          -
        </button>
       
       </div>


       <div className='flex items-center justify-center'>
       <button
          name="7"
          className=" w-[100px] h-12 text-xl font-bold bg-gray-500 rounded-lg m-3 hover:scale-110"
          onClick={handleClick}
        >
          7
        </button>

        <button
          name="8"
          className=" w-[100px] h-12 text-xl font-bold bg-gray-500 rounded-lg m-3 hover:scale-110"
          onClick={handleClick}
        >
          8
        </button>

        <button
          name="9"
          className=" w-[100px] h-12 text-xl font-bold bg-gray-500 rounded-lg m-3 hover:scale-110"
          onClick={handleClick}
        >
          9
        </button>

        <button
          name="*"
          className=" w-[100px] h-12 text-xl font-bold bg-yellow-500 rounded-lg m-3 hover:scale-110"
          onClick={handleClick}
        >
          x
        </button>
       
       </div>


       <div className='flex items-center justify-center'>
       <button
          name="."
          className=" w-[100px] h-12 text-xl font-bold bg-gray-500 rounded-lg m-3 hover:scale-110"
          onClick={handleClick}
        >
          .
        </button>

        <button
          name="0"
          className=" w-[100px] h-12 text-xl font-bold bg-gray-500 rounded-lg m-3 hover:scale-110"
          onClick={handleClick}
        >
          0
        </button>

        <button 
         name="cal" 
         className="w-[100px] h-12 text-xl font-bold bg-gray-500 rounded-lg m-3 hover:scale-110" 
         onClick={calculate}>
         =
       </button> 

        <button
          name="/"
          className=" w-[100px] h-12 text-xl font-bold bg-yellow-500 rounded-lg m-3 hover:scale-110"
          onClick={handleClick}
        >
          ÷
        </button>
       
       </div>

       <div className='flex items-center justify-center'>
          <button
            className="w-[230px] h-16 text-xl font-bold text-white bg-red-500 rounded-lg m-3 hover:scale-105"
            onClick={clear}
          >
            Clear
          </button>
       
          <button
            className="w-[230px] h-16 text-xl font-bold text-white bg-red-500 rounded-lg hover:scale-105"
            onClick={backspace}
          >
            C
          </button>
        </div>
        
       

      
      </div>
     </div>
     
    
      )}

      export default App;