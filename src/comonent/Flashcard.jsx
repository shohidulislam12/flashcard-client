import React, { useState } from "react";
import axios from "axios";
import { MdOutlineDeleteForever } from "react-icons/md";
import { toast } from "react-toastify";
import { motion } from "framer-motion"; // ✅ Import Framer Motion
import { CiCircleCheck } from "react-icons/ci";
import { ImCross } from "react-icons/im";

const FlashCard = ({ flashcard, fetchFlashcards, handleDelete }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleResponse = async (isCorrect) => {
    console.log(isCorrect);
    if (isCorrect) {
      toast("Card upgraded successfully to the next level 🚀");
    } else {
      toast("Card moved back to the previous level 🔄");
    }
    await axios.put(`${import.meta.env.VITE_BASE_URL}/flashcards/${flashcard._id}`, {
      isCorrect,
    });
    fetchFlashcards(); // Refresh the list of flashcards
  };

  return (
    <motion.div
      className="flashcard relative border border-gray-500 p-5 shadow-xl rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }} 
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <p className="text-sm text-gray-700 dark:text-gray-400">Card Level: {flashcard.level}</p>
      <h3 className="text-lg font-semibold mt-2">Question: {flashcard.question}</h3>

      <motion.p
        className="mt-2 text-gray-700 dark:text-gray-300"
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: showAnswer ? 1 : 0, height: showAnswer ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
      >
        Answer: {flashcard.answer}
      </motion.p>

      <button
        onClick={() => setShowAnswer(!showAnswer)}
        className="mt-3 px-3 py-1 bg-blue-500 text-white rounded-md transition-all duration-300 hover:bg-blue-600"
      >
        {showAnswer ? "Hide Answer" : "Show Answer"}
      </button>

      <div className="flex flex-col md:flex-row justify-between mt-4">
        <button
          className="btn btn-outline dark:text-white transition-all duration-300 hover:bg-green-500 hover:text-white"
          onClick={() => handleResponse(true)}
        >
          Got it right <CiCircleCheck />
        </button>
        <button
          className="btn btn-outline dark:text-white transition-all duration-300 hover:bg-red-500 hover:text-white"
          onClick={() => handleResponse(false)}
        >
          Got it wrong <ImCross />
        </button>
      </div>

      <motion.span
        onClick={() => handleDelete(flashcard._id)}
        className="absolute top-4 right-4 text-gray-500 hover:text-red-500 cursor-pointer transition-all duration-300"
        whileHover={{ scale: 1.2 }} // ✅ Delete icon hover effect
        whileTap={{ scale: 0.9 }}
      >
        <MdOutlineDeleteForever size={24} />
      </motion.span>
    </motion.div>
  );
};

export default FlashCard;
