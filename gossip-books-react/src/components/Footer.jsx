import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>{t({ en: '© 2026 Gossip Books & Mishkat Bookstore', ar: '© 2026 جوسبوك ومشكاة' })}</span>
        <span>{t({ en: 'Made with ❤ in Lebanon', ar: 'صُنع بحب في لبنان' })}</span>
      </div>
    </footer>
  );
}
