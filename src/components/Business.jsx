import {features} from "../constants";
import styles, {layout} from '../style';
import Button from './Button';
import FeatureCard from "./FeatureCard";

const Business = () => {
    return (
        <section id="features" className={layout.section}>
            <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>Upload your informantion, <br className="sm:block hidden font-poppins" />
                we'll handle the rest
                </h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}> Tanzania interhospital blockchain system helps with data security
                 and credibility, without forgeting that the data is not centralised,
                 even us do not see or change your data,... you data is as safe as
                 it can be </p>

                 <Button styles="mt-10" />
            </div>

            <div className={` ${layout.sectionImg} flex-col`}>
                {features.map((feature,index) => (
                    <FeatureCard key={feature.id} {...feature} index={index} />
                ))} 
            </div>
        </section>

    )
}

export default Business;