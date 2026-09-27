import PricingCard from './PricingCard';
import { LetterIcon, PaletteIcon } from './Icons';
import { useLanguage } from '../context/LanguageContext';

export default function Packages() {
  const { t } = useLanguage();

  return (
    <section id="packages">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">{t({ en: 'Packages', ar: 'الباقات' })}</span>
          <h2>{t({ en: 'Choose Your Experience', ar: 'اختر تجربتك' })}</h2>
          <p>{t({ en: 'Delivery all over Lebanon.', ar: 'توصيل لكل لبنان.' })}</p>
        </div>
        <div className="grid grid-2">
          <PricingCard
            icon={LetterIcon}
            featured
            title={{ en: 'Blind Date with a Book', ar: 'موعد مع كتاب' }}
            price="$15"
            features={[
              { en: 'A mystery book matched to your quiz', ar: 'كتاب غامض مطابق لاختبارك' },
              { en: 'Special gift-wrapped packaging', ar: 'تغليف هدايا مميز' },
              { en: 'A cup for coffee & tea', ar: 'كوب للقهوة والشاي' },
              { en: 'Artisan bookmark', ar: 'علامة فنية' },
              { en: 'Stickers on the packaging', ar: 'ملصقات على التغليف' },
            ]}
          />
          <PricingCard
            icon={PaletteIcon}
            title={{ en: 'Mandala & Coloring Pack', ar: 'باقة الماندالا والتلوين' }}
            price="$7"
            features={[
              { en: 'A beautiful mandala design', ar: 'تصميم ماندالا جميل' },
              { en: 'Set of coloring pens', ar: 'مجموعة أقلام تلوين' },
              { en: 'Chosen by quiz result or your choice', ar: 'مختار بناءً على نتيجتك أو اختيارك' },
              { en: 'Perfect for mindful relaxation', ar: 'مثالية للاسترخاء والتأمل' },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
