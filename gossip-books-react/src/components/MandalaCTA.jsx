import { useLanguage } from '../context/LanguageContext';

export default function MandalaCTA() {
  const { t } = useLanguage();

  return (
    <section>
      <div className="container">
        <div className="cta-banner">
          <img
            src="https://images.unsplash.com/photo-1499892477393-f675706cbe6e?w=1200&q=80"
            alt="Hand coloring a mandala design with pencils"
          />
          <div className="cta-content">
            <h2>{t({ en: 'Color Your Way to Calm', ar: 'لوّن طريقك إلى الهدوء' })}</h2>
            <p>
              {t({
                en: 'A mandala design with coloring pens — chosen by your quiz result or your preference.',
                ar: 'تصميم ماندالا مع أقلام تلوين — مختار بناءً على نتيجتك أو تفضيلك.',
              })}
            </p>
            <a href="#packages" className="btn btn-secondary">
              {t({ en: 'Get the Mandala Pack', ar: 'احصل على الباقة' })}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
