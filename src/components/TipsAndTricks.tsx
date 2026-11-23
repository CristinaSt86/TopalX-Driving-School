
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Lightbulb,
  CircleHelp,
  BookOpen,
  CircleCheck,
  ChevronDown,
  CloudRain,
  Hand,
  CarFront,
  TrafficCone,
  Smartphone,
  ArrowRightLeft,
  TriangleAlert,
  House,
  Signpost,
  EyeOff,
} from "lucide-react";

type Quiz = {
  question: string;
  answer: string;
  feedback: string;
};

const quizIcons = [
  CloudRain,
  Hand,
  CarFront,
  TrafficCone,
  Smartphone,
  ArrowRightLeft,
  TriangleAlert,
  House,
  Signpost,
  EyeOff,
];

const TipsAndTricks: React.FC = () => {
  const { t } = useTranslation();

  const [activeQuiz, setActiveQuiz] = useState<number | null>(
    null
  );

  const rawTips = t("tips", { returnObjects: true });
  const rawQuizzes = t("quizzes", { returnObjects: true });

  const tips: string[] = Array.isArray(rawTips)
    ? rawTips
    : [];

  const quizzes: Quiz[] = Array.isArray(rawQuizzes)
    ? rawQuizzes
    : [];

  const toggleQuiz = (index: number) => {
    setActiveQuiz((prev) =>
      prev === index ? null : index
    );
  };

  return (
    <section className="relative overflow-hidden bg-slate-50 py-16">

      {/* Subtle background decoration */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute -right-32 -top-32
          h-80 w-80 rounded-full
          bg-logoBlue/5 blur-3xl
        "
      />

      <div className="relative mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">

        {/* Header - original typography */}
        <header className="text-center">
          <h2 className="mt-5 text-3xl sm:text-4xl font-bold text-gray-900">
            {t("tipsAndTricks.title")}
          </h2>

          <div
            className="
              mx-auto mt-5 h-[2px] w-32 rounded-full
              bg-gradient-to-r
              from-logoBlue/20 via-logoBlue to-logoBlue/20
            "
          />

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            {t("tipsAndTricks.subtitluTandT")}
          </p>
        </header>

        {/* Main layout */}
        <div className="mt-12 grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-10">

          {/* TIPS */}
          <div
            className="
              rounded-3xl border border-slate-200
              bg-white p-6 shadow-sm sm:p-8
            "
          >
            <div className="flex items-center gap-3">
              <div
                className="
                  flex h-10 w-10 items-center justify-center
                  rounded-xl bg-amber-50 text-amber-500
                "
              >
                <Lightbulb size={21} strokeWidth={1.8} />
              </div>

              <h3 className="text-xl font-semibold text-gray-900">
                {t("tipsAndTricks.tipsTitle")}
              </h3>
            </div>

            {/* Tips cards */}
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">

              {tips.map((tip, index) => (
                <article
                  key={index}
                  className="
                    group relative overflow-hidden
                    rounded-2xl border border-slate-200
                    bg-slate-50/60 p-5
                    transition-all duration-300
                    hover:-translate-y-0.5
                    hover:border-logoBlue/30
                    hover:bg-white
                    hover:shadow-md
                  "
                >
                  <div className="mb-4 flex items-center justify-between">

                    <div
                      className="
                        flex h-9 w-9 items-center justify-center
                        rounded-lg bg-white text-logoBlue
                        shadow-sm
                        transition-colors duration-300
                        group-hover:bg-logoBlue
                        group-hover:text-white
                      "
                    >
                      <BookOpen size={18} strokeWidth={1.8} />
                    </div>

                    <span className="text-sm font-medium text-slate-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <p className="text-sm leading-7 text-slate-700">
                    {tip}
                  </p>
                </article>
              ))}

            </div>
          </div>

          {/* QUIZZES */}
          <div
            className="
              rounded-3xl border border-slate-200
              bg-white p-6 shadow-sm sm:p-8
            "
          >
            <div className="flex items-center gap-3">
              <div
                className="
                  flex h-10 w-10 items-center justify-center
                  rounded-xl bg-logoBlue/10 text-logoBlue
                "
              >
                <CircleHelp size={21} strokeWidth={1.8} />
              </div>

              <h3 className="text-xl font-semibold text-gray-900">
                {t("tipsAndTricks.quizzesTitle")}
              </h3>
            </div>

            {/* Accordion questions */}
            <div className="mt-6 space-y-3">

              {quizzes.length > 0 ? (
                quizzes.map((quiz, index) => {
                  const opened = activeQuiz === index;
                  const QuizIcon =
                    quizIcons[index] || CircleHelp;

                  return (
                    <div
                      key={index}
                      className={`
                        overflow-hidden rounded-2xl border
                        transition-all duration-300
                        ${
                          opened
                            ? "border-logoBlue/30 bg-blue-50/30 shadow-sm"
                            : "border-slate-200 bg-white hover:border-logoBlue/30"
                        }
                      `}
                    >
                      {/* Question button */}
                      <button
                        type="button"
                        onClick={() => toggleQuiz(index)}
                        aria-expanded={opened}
                        aria-controls={`quiz-answer-${index}`}
                        className="
                          flex w-full items-center
                          justify-between gap-4
                          p-4 text-left
                          transition-colors duration-300
                          sm:p-5
                          focus-visible:outline
                          focus-visible:outline-2
                          focus-visible:outline-logoBlue
                        "
                      >
                        <div className="flex min-w-0 items-center gap-3">

                          <div
                            className={`
                              flex h-10 w-10 shrink-0
                              items-center justify-center
                              rounded-xl
                              transition-all duration-300
                              ${
                                opened
                                  ? "bg-logoBlue text-white"
                                  : "bg-slate-100 text-logoBlue"
                              }
                            `}
                          >
                            <QuizIcon
                              size={19}
                              strokeWidth={1.8}
                            />
                          </div>

                          <span
                            className={`
                              text-sm leading-6 sm:text-[15px]
                              ${
                                opened
                                  ? "font-medium text-logoBlue"
                                  : "font-medium text-slate-800"
                              }
                            `}
                          >
                            {quiz.question}
                          </span>
                        </div>

                        <ChevronDown
                          size={18}
                          strokeWidth={1.8}
                          className={`
                            shrink-0 text-slate-400
                            transition-transform duration-300
                            ${
                              opened
                                ? "rotate-180 text-logoBlue"
                                : ""
                            }
                          `}
                        />
                      </button>

                      {/* Answer */}
                      {opened && (
                        <div
                          id={`quiz-answer-${index}`}
                          className="px-4 pb-4 sm:px-5 sm:pb-5"
                        >
                          <div className="border-t border-slate-200 pt-4">

                            <div
                              className="
                                rounded-xl border border-emerald-100
                                bg-emerald-50/70 p-4
                              "
                            >
                              <div className="flex items-start gap-3">

                                <CircleCheck
                                  size={19}
                                  strokeWidth={1.8}
                                  className="
                                    mt-0.5 shrink-0
                                    text-emerald-600
                                  "
                                />

                                <div className="space-y-2">

                                  <p className="text-sm leading-6 text-slate-800">
                                    {quiz.answer}
                                  </p>

                                  <p className="text-sm leading-6 text-emerald-700">
                                    {quiz.feedback}
                                  </p>

                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })
              ) : (
                <p className="text-sm text-slate-600">
                  {t("tipsAndTricks.noQuizzes", {
                    defaultValue:
                      "Momentan nu sunt întrebări disponibile.",
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
