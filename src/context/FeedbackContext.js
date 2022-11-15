import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
   const [feedback, setFeedback] = useState([
      {
         id: 1,
         rating: 10,
         text: "Excellent service, highly recommended!",
      },
      {
         id: 2,
         rating: 9,
         text: "Awesome, definately coming back :)",
      },
      {
         id: 3,
         rating: 8,
         text: "Great experience! wouldn't mind returning, thanks!",
      },
   ]);

   const [feedbackEdit, setFeedbackEdit] = useState({
      item: {},
      edit: false,
   });

   // Delete feedback
   const deleteFeedback = (id) => {
      if (window.confirm("Are you sure you want to delete?")) {
         setFeedback(feedback.filter((item) => item.id !== id));
      }
   };

   // Add feedback
   const addFeedback = (newFeedback) => {
      newFeedback.id = uuidv4();
      setFeedback([newFeedback, ...feedback]);
   };

   // Set item to be updated
   const editFeedback = (item) => {
      setFeedbackEdit({
         item,
         edit: true,
      });
   };

   //Update feedback item
   const updateFeedback = (id, updItem) => {
      setFeedback(
         feedback.map((item) =>
            item.id === id ? { ...item, ...updItem } : item
         )
      );
   };

   return (
      <FeedbackContext.Provider
         value={{
            feedback,
            feedbackEdit,
            deleteFeedback,
            addFeedback,
            editFeedback,
            updateFeedback,
         }}
      >
         {children}
      </FeedbackContext.Provider>
   );
};

export default FeedbackContext;
