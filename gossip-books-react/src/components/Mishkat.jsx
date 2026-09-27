import FeatureCard from './FeatureCard';
import { BookIcon, MoonIcon } from './Icons';
import { useLanguage } from '../context/LanguageContext';

export default function Mishkat() {
  const { t } = useLanguage();

  return (
    <section className="section-dark" id="mishkat">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">{t({ en: 'Mishkat Bookstore', ar: 'مشكاة' })}</span>
          <h2>{t({ en: 'A Light for the Soul', ar: 'نور للروح' })}</h2>
          <p>
            {t({
              en: 'Mishkat — a niche of light. Religious books, curated with care.',
              ar: 'مشكاة — كوة نور. كتب دينية مختارة بعناية.',
            })}
          </p>
        </div>
        <div className="grid grid-2">
          <FeatureCard
            icon={BookIcon}
            title={{ en: 'Quran & Tafsir', ar: 'القرآن والتفسير' }}
            desc={{ en: 'The Holy Quran with translations and commentary.', ar: 'القرآن الكريم مع الترجمات والشروح.' }}
          />
          <FeatureCard
            icon={MoonIcon}
            title={{ en: 'Hadith Collections', ar: 'كتب الحديث' }}
            desc={{ en: 'Authentic sayings and traditions of the Prophet (PBUH).', ar: 'أحاديث وسنن النبي صلى الله عليه وسلم الصحيحة.' }}
          />
        </div>
      </div>
    </section>
  );
}
