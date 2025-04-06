import { useEffect, useReducer } from "react";
import Header from "./Header";
import Loading from "./Loading";
import Main from "./Main";
import Error from "./Error";
import StartScreen from "./StartScreen";

const initialState = {
  questions: [],
  // loading , error , ready , active , finished
  status: "loading",
};

function reducer(state, action) {
  switch (action.type) {
    case "dataRecived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    default:
      throw new Error("Unknown action type");
  }
}

export default function App() {
  const [{ questions, status }, dispatch] = useReducer(reducer, initialState); // Fixed destructuring

  const numQuestions = questions.length;

  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataRecived", payload: data }))
      .catch(() => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loading />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen numQuestions = {numQuestions} />}
      </Main>
    </div>
  );
}
