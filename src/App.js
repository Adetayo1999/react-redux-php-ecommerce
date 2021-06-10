import React, {useState, useEffect} from 'react'

function App() {
  const [vaL, setVal] = useState([]);
  const [input, setInput] = useState('posts');
  const [loading, setloading] = useState(true);


  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${input}`)
    .then(res => res.json())
    .then(data => {

      console.log(data)
      setVal(data);
      setTimeout(() => {
        setloading(false)
      }, 5000);
    })
    
  }, [input])

  const deletePost = (id) => {
    const removeItem = vaL.filter(x => x.id !== id)

    setVal(removeItem);
  }

  return (
    <>
      {loading ? 
      <div className="spinner-display">
        <div className="spinner-grow text-primary" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-grow text-secondary" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-grow text-success" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-grow text-danger" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
      </div>
     : 
      <>
         <h1> Number of Posts: {vaL.length}</h1>
        {vaL.map(x => {
            return (
              <div onClick={() => deletePost(x.id)}>
              <h1>{x.id}</h1>
              <p>{x.title}</p>
            </div>
            )
        })}
      </>
    }</>
  )
}

export default App

  