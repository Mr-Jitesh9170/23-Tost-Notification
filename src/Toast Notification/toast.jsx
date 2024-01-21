import { useState } from "react"
import "./tost.scss"
export const Toast = () => {
  let [noti, setNoti] = useState([])
  const notify = ["massage 1", "massage 2", "massage 3", "massage 4"]
  return (
    <div className="toast-container">
      <div className="nofification-content">
        {
          noti.map((_, i) => {
            return <span key={i}>{_}</span>
          })
        }
      </div>
      <button onClick={() => {
        let randomValue = Math.floor(Math.random() * notify.length)
        setNoti([...noti, notify[randomValue]])
        setTimeout(() => {
          setNoti((prevNoti) => prevNoti.slice(1)); // Remove the first notification after 3 seconds
        }, 3000);
      }}>show notification</button>
    </div>
  )
}