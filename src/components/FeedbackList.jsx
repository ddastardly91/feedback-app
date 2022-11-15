import { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FeedbackItem from "./FeedbackItem";
import FeedbackContext from "../context/FeedbackContext";
import Spinner from "./shared/Spinner";

function FeedbackList() {
   const { feedback, isLoading } = useContext(FeedbackContext);

   if (!isLoading && (!feedback || feedback.length === 0)) {
      return <p>No feedback yet.</p>;
   }

   return isLoading ? (
      <Spinner />
   ) : (
      <div className="feedback-list">
         <AnimatePresence>
            {feedback.map((item) => (
               <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ease: "easeInOut", duration: 0.5 }}
                  exit={{ opacity: 0, y: -50 }}
               >
                  <FeedbackItem key={item.id} item={item} />
               </motion.div>
            ))}
         </AnimatePresence>
      </div>
   );
}
export default FeedbackList;
