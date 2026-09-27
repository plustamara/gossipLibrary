import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero" id="home">
      <img
        className="hero-bg"
        src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1600&q=80"
        alt=""
        aria-hidden="true"
      />
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1>{t({ en: 'Gossip with a Book', ar: 'موعد مع كتاب' })}</h1>
        <p className="tagline">
          {t({
            en: 'Take the quiz. Get matched. Receive a wrapped surprise.',
            ar: 'خذ الاختبار. احصل على تطابقك. استلم مفاجأتك المغلّفة.',
          })}
        </p>
        <div className="hero-actions">
          <a href="#quiz" className="btn btn-primary">
            {t({ en: 'Take the Quiz', ar: 'ابدأ الاختبار' })}
          </a>
          <a href="#books" className="btn btn-secondary">
            {t({ en: 'Browse Books', ar: 'تصفح الكتب' })}
          </a>
        </div>
      </div>
    </section>
  );
}
