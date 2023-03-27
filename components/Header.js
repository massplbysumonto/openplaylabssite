import { useState, useEffect,Button } from 'react'
import Link from "next/link";
import Menu from "./Menu";
const Message = ({ variant, children }) => {
  const [show, setShow] = useState(false)

  // On componentDidMount set the timer
  useEffect(() => {
    const timeId = setTimeout(() => {
      // After 3 seconds set the show value to false
      setShow(false)
    }, 3000)

    return () => {
      clearTimeout(timeId)
    }
  }, []);

  // If show is false the component will return null and stop here
  if (!show) {
    return null;
  }

  // If show is true this will be returned
  return (
    <div className={`alert alert-${variant}`}>
      {children}
    </div>
  )
}

Message.defaultPros = {
  variant: 'info',
}
  
function Header() {
    

  return (
    <>
    <header>
    <div className="headerimage">
      <Link href="/">
        <img src="/assets/images/sitelogo.png" alt="Varcel" className="logo" />
      </Link>
      <Button></Button>
    </div>
    <Menu />
    </header>

    <style jsx>{
        `
        header{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 25px 50px;
            margin: 0 auto;
            width: 100%;
            height: auto;
            background-color: rgba(255,255,255,1);
            border: 1px solid rgba(249,160,27,0.5);
        }
        img{
          width: 250px;
        }
        `
    }

    </style>
    </>

  )
}

export default Header