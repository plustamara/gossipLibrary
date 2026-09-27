import FeatureCard from './FeatureCard';
import { BookIcon, SparkleIcon } from './Icons';
import { useLanguage } from '../context/LanguageContext';

export default function Books() {
  const { t } = useLanguage();

  return (
    <section id="books">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">{t({ en: 'Gossip Books', ar: 'جوسبوك' })}</span>
          <h2>{t({ en: 'Stories Worth Gossiping About', ar: 'قصص تستحق الحديث عنها' })}</h2>
          <p>
            {t({
              en: 'From thrillers to romance, non-fiction to fantasy — your next read is here.',
              ar: 'من الإثارة إلى الرومانسية، من الواقع إلى الخيال — قراءتك القادمة هنا.',
            })}
          </p>
        </div>
        <div className="grid grid-2">
          <FeatureCard
            icon={BookIcon}
            title={{ en: 'Fiction & Novels', ar: 'روايات وأدب' }}
            desc={{ en: 'Contemporary hits, classics, and hidden gems.', ar: 'أعمال معاصرة، كلاسيكيات، وجواهر خفية.' }}
          />
          <FeatureCard
            icon={SparkleIcon}
            title={{ en: 'Blind Date Picks', ar: 'اختيارات الموعد' }}
            desc={{ en: 'Curated mystery books matched to your quiz result.', ar: 'كتب غامضة مختارة بناءً على نتيجة اختبارك.' }}
          />
        </div>
      </div>
    </section>
  );
}
