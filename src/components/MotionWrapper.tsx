import { motion } from "framer-motion";

const MotionWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.5, ease: "easeIn" }}
        >
            {children}
        </motion.div>
    );
};

export default MotionWrapper;
