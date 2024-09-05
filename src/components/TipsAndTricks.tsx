import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../index.css";

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

  // Tips and quizzes from the translation JSON with fallback to empty array
  const tips: string[] = t("tips", { returnObjects: true }) as string[] || [];
  const quizzes: Quiz[] = t("quizzes", { returnObjects: true }) as Quiz[] || [];

  return (
    <div className="tips-and-tricks-section py-10 px-5">
      <h2 className="text-3xl font-bold text-center mt-16 mb-16 pl-3 pr-3">
        {t("tipsAndTricks.title")} 🎓🚗
      </h2>

      {/* Tips Section */}
      <div className="tips-section mb-16">
        <h3 className="text-xl font-semibold mb-4">{t("tipsAndTricks.tipsTitle")} 💡</h3>
        <ul className="list-disc ml-6">
          {tips.map((tip, index) => (
            <li key={index} className="mb-2 flex items-start">
              <span className="mr-2">📘</span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Solved Quizzes */}
      <div className="quiz-section">
        <h3 className="text-xl font-semibold mb-4">{t("tipsAndTricks.quizzesTitle")} 🤔</h3>
        {quizzes.length > 0 ? (
          quizzes.map((quiz, index) => (
            <div key={index} className="quiz-item mb-4 border-b pb-2">
              <button
                className="text-left w-full font-medium text-lg focus:outline-none flex items-center justify-between"
                onClick={() => toggleQuiz(index)}
              >
                <span>{quiz.question}</span> 
                <span>{activeQuiz === index ? "🔽" : "🔼"}</span>
              </button>
              {activeQuiz === index && (
                <div className="quiz-answer mt-2 text-gray-600 transition-opacity duration-300">
                  <p>{quiz.answer} ✅</p>
                  <p className="mt-2 text-green-500">{quiz.feedback}</p>
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
