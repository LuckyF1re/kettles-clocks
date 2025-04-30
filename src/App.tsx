
import './App.css'
import {useEffect, useState} from "react";

function App() {

  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(()=> {
      setTime(new Date());
    }, 1000)

    return () => clearInterval(interval)
  }, []);

  const hours = time.getHours()
  const minutes = time.getMinutes()
  const seconds = time.getSeconds()

  return (
      <div>

        <h2>{hours} : {minutes} : {seconds}</h2>

      </div>
  )
}

export default App
