import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((resp) => resp.json())
      .then((data) => setQuestions(data));
  }, []);
  function addQuestion(newQuestion) {
    setQuestions([...questions, newQuestion]);
  }
  function deleteQuestion(deletedQuestion) {
    console.log(deletedQuestion);
    const newQuestionArr = questions.filter((question) => question.id !== deletedQuestion.id);
    setQuestions(newQuestionArr);
  }
  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm addQuestion={addQuestion} /> : <QuestionList questions={questions} onDelete={deleteQuestion} />}
    </main>
  );
}

export default App;
