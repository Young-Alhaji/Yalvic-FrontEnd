import React from 'react'
import styles from '../Modules/notfound.module.css';
const NotFound = () => {
  return (
    <>
    <div>
    <video autoPlay muted loop className={styles.bgvideo} >
            <source src="animatedcss.mp4" type="video/mp4" />
        </video>
    </div> 
    <center>
        <br /><br /><br />
        <div className={styles.first}>
        Page Not Found <br />
        </div>
        <div className={styles.second}>
        The link you followed may be broken, or the page may have been removed. Go back to a valid page.
        </div>
    </center>
    </>
  )
}

export default NotFound