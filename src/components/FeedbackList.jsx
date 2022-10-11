import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import FeedbackItem from "./FeedbackItem";

function FeedbackList({ feedback, handleDelete }) {
  if (!feedback || feedback.length === 0) {
    return <p>No feedback yet.</p>;
  }

  return (
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
            <FeedbackItem
              key={item.id}
              item={item}
              handleDelete={handleDelete}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );

  // return (
  //   <div className="feedback-list">
  //     {feedback.map((item) => (
  //       <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
  //     ))}
  //   </div>
  // );
}

FeedbackList.propTypes = {
  feedback: PropTypes.array,
};

export default FeedbackList;
