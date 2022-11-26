import styles from '../style';
import { discount, robot, shield } from '../assets';
import GetStarted from './GetStarted';
// issue of using small letter discount
// is still a mystery for myself

const Hero = () => {
    return (
        <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
         <div className={`flex-1 ${styles.flexStart} flex-col xl:px-16 sm:px-16 px-6`}>
            {/* ============================================================= The discount tag is here  */}
            <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
            <p className={`${styles.paragraph} ml-2`}>
              <img src={discount} alt="discount" className="w-[32px] h-[32px]"/>
              <span className='text-white'>20%</span>
              {" "}Discount For {" "}
              <span className='text-white'> 1 Month</span>
               {" "}Account
            </p>
            </div>
           
            {/* ================================================================ the discount ends here */}

            {/* ================================================================ Big superhero texts starts here */}

             <div className='flex flex-row justify-between items-centre w-full'>
                <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px] '>
                    give for good 
                    <span className='text-gradient'>
                    <br/> {" "}
                    web 3 charity
                    </span> {" "}
                    {/* infomation system. */}
                    </h1>
             </div>

                  {/* ================================================================ Big superhero texts ends here */}

            

            <p className={`${styles.paragraph} max-w-[470px] mt-5 font-poppins`}>
            Designed to be the most secure and most credible informantion system,
            better than the Tanzania interbanking banking system, as it should be...</p>
            </div>

            <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
                {/* This is where we define our gradients */}

                <img src={shield} alt="robot" className='w-[400px] h-[400px] mt-2 relative z-[5]' />
                <div className='absolute z-[0] h-[35%] w-[40%] top-0 pink__gradient' />
                <div className='absolute z-[1] h-[85%] w-[80%] bottom-40 rounded-full white__gradient' />
                <div className='absolute z-[0] h-[50%] w-[50%] right-20 bottom-20 blue__gradient' />
            </div>
             
             <div className={`ss:hidden ${styles.flexCenter} mt-5`}>
                <GetStarted />
             </div>
            
            
        </section>
    )
}

export default Hero;



// issue of using small letter discount
// is still a mystery for myself  