import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { QUIZ_QUESTIONS, QUIZ_RESULTS } from '../data/quizData';

const LETTERS = ['A', 'B', 'C', 'D'];

export default function Quiz() {
  const { t } = useLanguage();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState(Array(QUIZ_QUESTIONS.length).fill(null));
  const [showResult, setShowResult] = useState(false);

  const total = QUIZ_QUESTIONS.length;
  const percent = Math.round((step / total) * 100);
  const question = QUIZ_QUESTIONS[step];

  function selectAnswer(type) {
    const next = [...answers];
    next[step] = type;
    setAnswers(next);

    if (step < total - 1) {
      setStep(step + 1);
    } else {
      setShowResult(true);
    }
  }

  function goBack() {
    if (step > 0) setStep(step - 1);
  }

  function reset() {
    setStep(0);
    setAnswers(Array(total).fill(null));
    setShowResult(false);
  }

  function getWinningType() {
    const tally = { a: 0, b: 0, c: 0, d: 0 };
    answers.forEach((a) => { if (a) tally[a]++; });
    return Object.keys(tally).reduce((a, b) => (tally[a] >= tally[b] ? a : b));
  }

  return (
    <section className="section-dark" id="quiz">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">{t({ en: 'Personality Quiz', ar: 'اختبار الشخصية' })}</span>
          <h2>{t({ en: "What's Your Book Type?", ar: 'ما هو نوع كتابك؟' })}</h2>
          <p>
            {t({
              en: "Answer 8 quick questions and we'll match you with the perfect book.",
              ar: 'أجب عن 8 أسئلة وسنطابقك مع كتابك المثالي.',
            })}
          </p>
        </div>

        <div className="quiz-wrap">
          {!showResult ? (
            <div>
              <div className="quiz-meta">
                <span>{step + 1} / {total}</span>
                <span>{percent}%</span>
              </div>
              <div className="progress-track">
                <div className="progress-fill" style={{ width: `${percent}%` }} />
              </div>

              <div className="quiz-question">
                <h3>{t(question)}</h3>
                <div className="quiz-options">
                  {question.options.map((opt, i) => (
                    <button
                      key={opt.type + i}
                      className={`quiz-option ${answers[step] === opt.type ? 'selected' : ''}`}
                      onClick={() => selectAnswer(opt.type)}
                    >
                      <span className="letter">{LETTERS[i]}</span>
                      <span>{t(opt)}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="quiz-nav">
                <button className="btn btn-secondary" onClick={goBack} disabled={step === 0}>
                  {t({ en: 'Back', ar: 'السابق' })}
                </button>
                <button className="btn btn-secondary" onClick={reset}>
                  {t({ en: 'Restart', ar: 'إعادة البدء' })}
                </button>
              </div>
            </div>
          ) : (
            <QuizResult winningType={getWinningType()} onRetake={reset} />
          )}
        </div>
      </div>
    </section>
  );
}

function QuizResult({ winningType, onRetake }) {
  const { t } = useLanguage();
  const result = QUIZ_RESULTS[winningType];

  return (
    <div className="quiz-result">
      <p>{t({ en: 'Your book type is', ar: 'نوع كتابك هو' })}</p>
      <div className="type-badge">{t(result.type)}</div>
      <p>{t(result.desc)}</p>

      <div className="result-books">
        <p className="result-books-label">
          {t({ en: 'Picks for you', ar: 'مقترحات لك' })}
        </p>
        <ul>
          {result.books.map((book) => (
            <li key={book.title.en}>
              <span className="book-title">{t(book.title)}</span>
              <span className="book-author"> — {t(book.author)}</span>
            </li>
          ))}
        </ul>
      </div>

      <a href="#packages" className="btn btn-primary">
        {t({ en: 'Order Your Match', ar: 'اطلب تطابقك' })}
      </a>
      <br />
      <br />
      <button className="btn btn-secondary" onClick={onRetake}>
        {t({ en: 'Retake Quiz', ar: 'إعادة الاختبار' })}
      </button>
    </div>
  );
}
