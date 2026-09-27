import { useLanguage } from '../context/LanguageContext';

export default function FeatureCard({ icon: Icon, title, desc }) {
  const { t } = useLanguage();

  return (
    <div className="card">
      <div className="card-icon">
        <Icon size={22} />
      </div>
      <h3>{t(title)}</h3>
      <p>{t(desc)}</p>
    </div>
  );
}
