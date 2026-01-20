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
  feedback: string;
};

const TipsAndTricks: React.FC = () => {
  const [activeQuiz, setActiveQuiz] = useState<number | null>(null);
  const { t } = useTranslation();

  const toggleQuiz = (index: number) => {
    setActiveQuiz((prev) => (prev === index ? null : index));
  };

  const getFeedbackIconByIndex = (index: number) => {
    switch (index) {
      case 0:
        return <FaCloudRain />;
      case 1:
        return <FaHandPaper />;
      case 2:
        return <FaCarCrash />;
      case 3:
        return <FaTrafficLight />;
      case 4:
        return <FaMobileAlt />;
      case 5:
        return <FaArrowRight />;
      case 6:
        return <FaExclamationTriangle />;
      case 7:
        return <FaHome />;
      case 8:
        return <FaHandPointRight />;
      case 9:
        return <FaEyeSlash />;
      default:
        return null;
    }
  };

  const tips: string[] = (t("tips", { returnObjects: true }) as string[]) || [];
  const quizzes: Quiz[] =
    (t("quizzes", { returnObjects: true }) as Quiz[]) || [];

  return (
    <section className="py-16">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center">
          <h2 className="mt-5 text-3xl sm:text-4xl font-bold text-gray-900">
            {t("tipsAndTricks.title")}
          </h2>
          <div className="mx-auto mt-4 h-[2px] w-24 rounded-full bg-logoBlue/60" />
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            {t("tipsAndTricks.subtitluTandT")}
          </p>
        </header>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          {/* Tips */}
          <div className="rounded-3xl border border-black/10 bg-white shadow-sm p-6 sm:p-8">
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                <span>{t("tipsAndTricks.tipsTitle")}</span>
                <FaLightbulb className="opacity-80" />
              </h3>
            </div>

            {/* Tips as cards */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {tips.map((tip, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-black/10 bg-slate-50 p-4 shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1 rounded-xl bg-white border border-black/10 p-2 shadow-sm">
                      <FaBook className="text-slate-700" />
                    </div>
                    <p className="text-sm text-gray-900 leading-relaxed">
                      {tip}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quizzes */}
          <div className="rounded-3xl border border-black/10 bg-white shadow-sm p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
              <span>{t("tipsAndTricks.quizzesTitle")}</span>
              <FaQuestionCircle className="opacity-80" />
            </h3>

            <div className="mt-6 space-y-3">
              {quizzes.length > 0 ? (
                quizzes.map((quiz, index) => {
                  const opened = activeQuiz === index;

                  return (
                    <div
                      key={index}
                      className="rounded-2xl border border-black/10 bg-white shadow-sm overflow-hidden"
                    >
                      <button
                        className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4"
                        onClick={() => toggleQuiz(index)}
                        type="button"
                      >
                        <div className="flex items-start gap-3">
                          <div className="mt-0.5 rounded-xl bg-slate-50 border border-black/10 p-2">
                            {getFeedbackIconByIndex(index)}
                          </div>
                          <span className="font-semibold text-gray-900">
                            {quiz.question}
                          </span>
                        </div>

                        <span className="shrink-0 text-slate-600">
                          {opened ? <FaChevronUp /> : <FaChevronDown />}
                        </span>
                      </button>

                      {opened && (
                        <div className="px-4 sm:px-5 pb-4 sm:pb-5">
                          <div className="rounded-xl bg-slate-50 border border-black/10 p-4">
                            <p className="text-sm text-gray-800">
                              {quiz.answer}{" "}
                              <FaCheckCircle className="inline text-emerald-600" />
                            </p>

                            <p className="mt-2 text-sm text-emerald-700 font-semibold flex items-center gap-2">
                              <span>{quiz.feedback}</span>
                              <span className="opacity-90">
                                {getFeedbackIconByIndex(index)}
                              </span>
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })
              ) : (
                <p className="text-sm text-slate-600">
                  {t("tipsAndTricks.noQuizzes", {
                    defaultValue: "Momentan nu sunt întrebări disponibile.",
                  })}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TipsAndTricks;
