import { useLanguage } from '../context/LanguageContext';

export default function PricingCard({ icon: Icon, title, price, features, featured }) {
  const { t } = useLanguage();

  return (
    <div className={`pricing-card ${featured ? 'featured' : ''}`}>
      {featured && (
        <span className="popular-badge">{t({ en: 'Most Popular', ar: 'الأكثر طلباً' })}</span>
      )}
      <div className="card-icon">
        <Icon size={22} />
      </div>
      <h3>{t(title)}</h3>
      <div className="price">
        {price} <span>{t({ en: '/ order', ar: '/ للطلب' })}</span>
      </div>
      <ul className="feature-list">
        {features.map((f) => (
          <li key={f.en}>{t(f)}</li>
        ))}
      </ul>
      <a href="#contact" className="btn btn-primary">
        {t({ en: 'Order Now', ar: 'اطلب الآن' })}
      </a>
    </div>
  );
}
