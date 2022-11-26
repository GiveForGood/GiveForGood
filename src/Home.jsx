import React from "react";
import styles  from "./style";

import {Navbar, Hero , Business ,Footer } from "./components";
import Forms from "./components/Forms";
import ListTable from "./components/ListTable";


const Home = () => {
   return(
  <div className="bg-primary w-full overflow-hidden bg-black-gradient">
         <div className={`${styles.paddingX} ${styles.flexCenter}`}>
         <div className={`${styles.boxWidth}`}>
              < Navbar />
         </div>
         </div>

         <div className={`bg-primary ${styles.flexStart}`}>
           <div className={`$styles.boxWidth`}>
              < Hero />              
           </div>
         </div>

         <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
           <div className={`${styles.boxWidth}`}>
              < Business />
              < Forms />
              < Footer />
           </div>
         </div>


    </div>
   )
}

export default Home