import React from 'react'
import styles from "../Modules/footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
    <center>
    <footer className={styles.footer}>
       <div className={styles.footerDisplay}>
            <div>
                <p className={styles.p}>Contact Us</p>
                <ul className={styles.ul}>
                <li className={styles.circledradius}><a href="mailto:adesunkanmi123@gmail.com"><span ><i style={{fontSize: '300%',marginTop: '13px',color: 'white'}} class="fa-solid fa-envelope"></i></span></a></li>
                <li className={styles.circledradius}><a href="https://wa.me/+2347019486904"><span><i style={{fontSize: '300%',marginTop: '13px',color: 'white'}} class="fa-brands fa-whatsapp"></i></span></a></li>
                <li className={styles.circledradius}><a href="https://www.linkedin.com/in/ridwan-oguntola-7344b117b/"><span><i style={{fontSize: '300%',marginTop: '13px',color: 'white'}} class="fa-brands fa-linkedin"></i></span></a></li>
                </ul>
            </div>
            <div className={styles.locationtext}>
                <p className={styles.p}>Locations</p>
                Address 1.<br />
                Alfatedo Street, Ogbomosho. Oyo State. <br />
                Address 2.<br />
                Grinland Hostel, Damico Estate, Ile-Ife.Osun State.<br />
                Nigeria
            </div>
       </div> <br />
        <div>© Copyright 2022 Yalvic Association. All Rights Reserved</div>
    </footer>
    </center>
    </>
  )
}

export default Footer;