'use client';

import { useState } from "react";
import { Button } from "@/src/components/ui/button";
import { Spinner } from "@/src/components/ui/spinner";
import useHandleLogin from "@/src/hooks/handleLogin.js";

export default function QuizPage() {
  const {isLoading, handleLogin} = useHandleLogin();

  const questions = [
    {
      question: "What kind of work excites you the most?",
      options: ["Building websites", "Analyzing data", "Designing interfaces", "Securing systems"],
    },
    {
      question: "Which skill sounds most interesting to you?",
      options: ["JavaScript", "Python", "Figma", "Cybersecurity tools"],
    },
    {
      question: "What type of project would you enjoy working on?",
      options: ["Mobile apps", "AI models", "UI Designs", "Network Security"],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [result, setResult] = useState("");
  const [description, setDescription] = useState("");

  const handleAnswer = (selectedOption) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = selectedOption;
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const { career, about } = getCareerPath(newAnswers);
      setResult(career);
      setDescription(about);
      setIsCompleted(true);
    }
  };

  const getCareerPath = (answers) => {
    const allAnswers = answers.join(" ").toLowerCase();

    if (allAnswers.includes("website") || allAnswers.includes("javascript") || allAnswers.includes("mobile")) {
      return {
        career: "Frontend Developer",
        about: "You love creating things people can see and interact with! Frontend developers build websites and web apps using HTML, CSS, and JavaScript.",
      };
    } else if (allAnswers.includes("data") || allAnswers.includes("python") || allAnswers.includes("ai")) {
      return {
        career: "Data Scientist",
        about: "You enjoy finding patterns and insights in data. Data scientists use tools like Python and machine learning to solve real-world problems.",
      };
    } else if (allAnswers.includes("design") || allAnswers.includes("figma") || allAnswers.includes("ui")) {
      return {
        career: "UI/UX Designer",
        about: "You have an eye for detail and love creating clean, beautiful designs. UI/UX designers make sure apps are both attractive and easy to use.",
      };
    } else if (allAnswers.includes("secure") || allAnswers.includes("network")) {
      return {
        career: "Cybersecurity Specialist",
        about: "You like protecting systems and solving security puzzles. Cybersecurity specialists keep networks, apps, and data safe from attacks.",
      };
    } else {
      return {
        career: "Tech Explorer",
        about: "You’re curious and open-minded! Try out coding, design, or data — explore different paths to see what excites you the most.",
      };
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-green-100 to-teal-100 text-center px-4">
      <h1 className="text-4xl font-extrabold text-teal-700 mb-6">
        Find Your Tech Path
      </h1>

      {isCompleted ? (
        <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            🎉 Quiz Completed!
          </h2>

          <p className="text-gray-700 mb-4">
            Based on your answers, your recommended path is:
          </p>

          <div className="bg-emerald-100 text-emerald-800 font-semibold py-3 px-6 rounded-lg mb-4">
             {result}
          </div>

          <p className="text-gray-600 text-sm mb-6">
            {description}
          </p>
  <div>
          <button
            onClick={() => {
              setCurrentQuestion(0);
              setAnswers([]);
              setIsCompleted(false);
              setResult("");
              setDescription("");
            }}
            className="bg-teal-700 text-white py-2 px-4 rounded-md hover:bg-teal-500 transition"
          >
            Restart Quiz
          </button>
          <Button className='w-full mt-5' size='xl'
                    onClick={(e) => handleLogin(e, "/resources")}>
                      {isLoading ? <Spinner /> : 'Browse Resources'}
              </Button>
              </div>
        </div>
      ) :
       (
        questions[currentQuestion] && (
          <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
            <h2 className="text-lg font-semibold text-gray-800 mb-6">
              {questions[currentQuestion].question}
            </h2>

            <div className="flex flex-col gap-3">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className="bg-teal-700 text-white py-2 px-4 rounded-md hover:bg-teal-200 transition"
                >
                  {option}
                </button>
              ))}
            </div>

            <p className="text-gray-500 mt-6 text-sm">
              Question {currentQuestion + 1} of {questions.length}
            </p>
          </div>
        )
      )}
    </div>
  );
}
