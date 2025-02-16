import axios from "axios";
import { useContext, useEffect, useState } from "react";
import FlashCard from "./FlashCard";
import Swal from "sweetalert2";
import { AuthContext } from "./auth/AuthProvider";
import { toast } from "react-toastify";

const FlashCards = () => {
  const {user}=useContext(AuthContext)
  const [flashcards, setFlashcards] = useState([]);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const date = new Date();
  console.log(date);
  const fetchFlashcards = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/flashcards`
    );
    setFlashcards(response.data);
  };
  console.log(flashcards);
  useEffect(() => {
    fetchFlashcards();
  }, []);
  console.log(import.meta.env.VITE_BASE_URL);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!user?.displayName){
      return toast('login frist to add flashcard')
    }
    console.log({ question, answer });
   const {data}=await axios.post(`${import.meta.env.VITE_BASE_URL}/flashcards`, {
      question,
      answer,
    });
    if(data.insertedId){
      setAnswer('')
      setQuestion('')
      toast(' flashcard add success')
    }

    fetchFlashcards(); // Refresh the list of flashcards
  };
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const result = await axios.delete(
          `http://localhost:3000/flashcards/${id}`
        );
        console.log(result);
        fetchFlashcards();
        Swal.fire({
          title: "Deleted!",
          text: "Your card has been deleted.",
          icon: "success",
        });
      }
    });
  };
  return (
    <div className="max-w-screen-lg dark:bg-[#420878] dark:text-white  flex md:flex-row flex-col cards mx-auto p-5 bg-purple-300 min-h-screen">
      <div className="border-r-2">
        <h1>Flashcard Learning App</h1>

        <form onSubmit={handleSubmit} className="card-body dark:text-white ">
          <div className="form-control">
            <label className="label">
              <span className="label-text dark:text-white">Question</span>
            </label>
            <input
              type="text"
              className="p-3 dark:text-black"
              placeholder="Question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text dark:text-white ">Answer</span>
            </label>

            <textarea
              type="text"
              className="p-3 dark:text-black"
              placeholder="Answer"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              required
            ></textarea>
          </div>

          <div className="form-control mt-6">
            <button className="btn dark:text-white btn-outline">
              Add Flashcard
            </button>
          </div>
        </form>
      </div>
      <div className="flashcards  ">
        <div className="">
          {flashcards.length === 0 ? (
            <div className="flex items-center ">
              <p className="text-white font-bold p-10 text-center">
                No flashcards for Today{" "}
              </p>
            </div>
          ) : (
            ""
          )}
          {flashcards.map((flashcard) => (
            <FlashCard
              key={flashcard._id}
              handleDelete={handleDelete}
              flashcard={flashcard}
              fetchFlashcards={fetchFlashcards}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default FlashCards;
