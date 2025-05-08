
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



  const clocks = `${hours > 9 ? hours : "0" + hours } : ${minutes} : ${seconds > 9 ? seconds :  "0" + seconds}`

  return (
      <div>

        <h2 className={'clock-text-color'}>{clocks}</h2>

      </div>
  )
}

export default App
