import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Modal.css';

export default function Modal(props) {

    const [show, setShow] = useState(true);

    function handleClose() {
        setShow(false);
    }

    if (!show) {
        return null;
    } else {
        return (
            <AnimatePresence>
                <motion.div
                    className="modal-container"
                    initial={{ opacity: 0, x: '-5%' }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: '5%' }}
                    transition={{
                        duration: 0.5,
                        delay: 0.1,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                >
                    <div className="modal">
                        <div className="close-button">
                            <i onClick={handleClose} className='bx bx-x bx-md'></i>
                        </div>
                        <div className="title">
                            {props.success ? <i className='bx bxs-check-circle bx-lg'></i> : <i className='bx bxs-error-circle bx-lg'></i>}
                            <h2>{props.title}</h2>
                        </div>
                        <div className="content">
                            <p>{props.content}</p>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        );
    }
}
