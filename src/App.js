import React, { useState } from 'react';

const App = () => {

  const [icount,set] = useState(0);

  const dec = () => {
    set(icount-1);
  }
  const inc = () => {
    set(icount+1);
  }

  return(
    <>
      <div className='main'>
        <h1>Counter</h1>
        <div className='inner'>
          <button onClick = {dec} className='inc'>-</button>
          <p>{(icount>=0 && icount<10)?"0"+icount:icount}</p>
          <button onClick = {inc} className='dec'>+</button>
        </div>
      </div>
    </>
  );
}

export default App;