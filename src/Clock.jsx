import { useEffect, useState } from 'react'
import './Clock.css'


export const Clock = () => {
    
    const [currentTime, setCurrentTime] = useState(new Date())

    useEffect(() => {
       const timer = setInterval(() => {
         setCurrentTime(new Date())
       }, 1000)
       return () => clearInterval(timer)
    }, [])
    
    const timeFormat = (hour) => {
        return hour === 0 ? 12 : hour > 12 ? hour - 12 : hour
    }

    const formatWithZero = (num) => {
        return num < 10 ? `0${num}` : num
    }
    
    const formatDate = (date) => {
        const options = {weekday : "long", day : "numeric", month : "long", year : "numeric"}
        return date.toLocaleDateString(undefined, options)
    }
    
  return (
    <>
     <div className="clock-container">
       <h1>Digital Clock</h1>
       <div className="time">{formatWithZero(timeFormat(currentTime.getHours()))}:{formatWithZero(currentTime.getMinutes())}:{formatWithZero(currentTime.getSeconds())} {currentTime.getHours()>12 ? "PM" : "AM"}</div>
       <div className="date">{formatDate(currentTime)}</div>
     </div>      
    </>
  )
}
