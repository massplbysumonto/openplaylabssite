import Link from "next/link";
import Styles from "../styles/menu.module.css";

const Menu = () => {

  const navLinks = [
    { name: "Home", 
     path: "/" 
    },
    {
      name: "About Us",
      path: "/About",
    },
    {
      name: "Exhibitions",
      path: "/Exhibitions",
    },
    {
      name: "Blog",
      path: "/Blog",
    },
    {
      name: "Contact Us",
      path: "/ContactUs",
    },
  ];


  return (
    <>
   <nav>
   <ul>
        {navLinks.map((link, index) => {
          return (
              <Link href={link.path} className={Styles.menulinks}>
            <li key={index} className={Styles.list}>

                {link.name}
                </li>
              
              </Link>           
          );
        })}
         </ul>
      </nav>
     <style jsx>
      {`nav{
        width: 580px;
      }`}
     </style>
      </>
 
  )
}



export default Menu