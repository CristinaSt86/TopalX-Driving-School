import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../index.css";
import {
  FaLightbulb,
  FaQuestionCircle,
  FaCar,
  FaGraduationCap,
  FaBook,
  FaCheckCircle,
  FaChevronDown,
  FaChevronUp,
  FaCloudRain,
  FaHandPaper,
  FaCarCrash,
  FaTrafficLight,
  FaMobileAlt,
  FaArrowRight,
  FaExclamationTriangle,
  FaHome,
  FaHandPointRight,
  FaEyeSlash,
} from "react-icons/fa";

type Quiz = {
  question: string;
  answer: string;
  feedback: string; // Additional feedback for quizzes
};

const TipsAndTricks: React.FC = () => {
  const [activeQuiz, setActiveQuiz] = useState<number | null>(null);
  const { t } = useTranslation();

  const toggleQuiz = (index: number) => {
    setActiveQuiz(activeQuiz === index ? null : index);
  };

  // Icon mapping based on quiz index
  const getFeedbackIconByIndex = (index: number) => {
    switch (index) {
      case 0: // Quiz 1
        return <FaCloudRain className="text-gray-500" />; // Icon for rain
      case 1: // Quiz 2
        return <FaHandPaper className="text-gray-500" />; // Icon for stop or important
      case 2: // Quiz 3
        return <FaCarCrash className="text-gray-500" />; // Icon for visibility or driving safely
      case 3: // Quiz 4
        return <FaTrafficLight className="text-gray-500" />; // Icon for traffic lights or signals
      case 4: // Quiz 5
        return <FaMobileAlt className="text-gray-500" />; // Icon for hands-free
      case 5: // Quiz 6
        return <FaArrowRight className="text-gray-500" />; // Icon for forward movement (no reversing)
      case 6: // Quiz 7
        return <FaExclamationTriangle className="text-gray-500" />; // Icon for caution or gentle steering
      case 7: // Quiz 8
        return <FaHome className="text-gray-500" />; // Icon for residential areas
      case 8: // Quiz 9
        return <FaHandPointRight className="text-gray-500" />; // Icon for yielding and signaling
      case 9: // Quiz 10
        return <FaEyeSlash className="text-gray-500" />; // Icon for blind spots
      default:
        return null; // No icon by default
    }
  };

  // Tips and quizzes from the translation JSON with fallback to empty array
  const tips: string[] = (t("tips", { returnObjects: true }) as string[]) || [];
  const quizzes: Quiz[] =
    (t("quizzes", { returnObjects: true }) as Quiz[]) || [];

  return (
    <div className="container mx-auto p-4 mb-16">
      <h2 className="text-3xl font-bold text-center mt-16 mb-16 pl-3 pr-3 flex flex-col items-center space-y-2 md:flex-row md:justify-center md:space-x-2 md:space-y-0">
        <span>{t("tipsAndTricks.title")}</span>
        <div className="flex space-x-2">
          <FaGraduationCap />
          <FaCar />
        </div>
      </h2>

      {/* Tips Section */}
      <div className="tips-section mb-16">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <span>{t("tipsAndTricks.tipsTitle")}</span>
          <FaLightbulb className="ml-2" />
        </h3>
        <ul className="list-disc ml-6">
          {tips.map((tip, index) => (
            <li key={index} className="mb-2 flex items-start">
              <FaBook className="mr-2 text-blue-500" />
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Solved Quizzes */}
      <div className="quiz-section">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <span>{t("tipsAndTricks.quizzesTitle")}</span>
          <FaQuestionCircle className="ml-2" />
        </h3>
        {quizzes.length > 0 ? (
          quizzes.map((quiz, index) => (
            <div key={index} className="quiz-item mb-4 border-b pb-2">
              <button
                className="text-left w-full font-medium text-lg focus:outline-none flex items-center justify-between"
                onClick={() => toggleQuiz(index)}
              >
                <span>{quiz.question}</span>
                <span>
                  {activeQuiz === index ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </button>
              {activeQuiz === index && (
                <div className="quiz-answer mt-2 text-gray-600 transition-opacity duration-300">
                  <p>
                    {quiz.answer}{" "}
                    <FaCheckCircle className="inline text-green-500" />
                  </p>
                  {/* Feedback with appropriate icons based on index */}
                  <p className="mt-2 text-green-500">
                    <span className="inline">{quiz.feedback}</span>
                    <span className="inline-block ml-1 align-middle">
                      {getFeedbackIconByIndex(index)}
                    </span>
                  </p>
                </div>
              )}
            </div>
          ))
        ) : (
          <p>No quizzes available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default TipsAndTricks;
