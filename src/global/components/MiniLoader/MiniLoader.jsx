import { motion } from "framer-motion";
import LogoOutline from '../../assets/LogoOutline.svg'
import './MiniLoader.css'
export default function MiniLoader(props) {
    return (
        <motion.div
            layout
            className="miniLoader-container"
            initial={{ opacity: 0, x: '-5%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '5%' }}
            transition={{
                duration: 0.5,
                delay: 0.1,
                ease: [0, 0.71, 0.2, 1.01],
            }}
        >
            <h3 className="miniLoader-title">{props.title}</h3>
            <img src={LogoOutline} alt="loader" className='logo-outline' />
            <p className="miniLoader-message">{props.message}</p>
        </motion.div>
    )
}