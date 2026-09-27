import { useLanguage } from '../context/LanguageContext';

export default function Concept() {
  const { t } = useLanguage();

  return (
    <section id="concept">
      <div className="container split">
        <div>
          <span className="eyebrow">{t({ en: 'The Concept', ar: 'المفهوم' })}</span>
          <h2>{t({ en: 'A Blind Date with a Book', ar: 'موعد أعمى مع كتاب' })}</h2>
          <div className="divider" />
          <p>
            {t({
              en: "You don't choose the book — it chooses you. Take the quiz, send us your result, and we'll hand-pick a story we think you'll love.",
              ar: 'أنت لا تختار الكتاب — هو من يختارك. خذ الاختبار، أرسل لنا نتيجتك، وسنختار لك قصة نعتقد أنك ستحبها.',
            })}
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&q=80"
          alt="A gift-wrapped book with fairy lights and a handwritten tag"
        />
      </div>
    </section>
  );
}
