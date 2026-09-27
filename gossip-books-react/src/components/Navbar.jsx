import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BookIcon, MenuIcon } from './Icons';

const NAV_ITEMS = [
  { href: '#home', en: 'Home', ar: 'الرئيسية' },
  { href: '#quiz', en: 'Quiz', ar: 'الاختبار' },
  { href: '#books', en: 'Books', ar: 'الكتب' },
  { href: '#mishkat', en: 'Mishkat', ar: 'مشكاة' },
  { href: '#packages', en: 'Packages', ar: 'الباقات' },
  { href: '#contact', en: 'Contact', ar: 'تواصل' },
];

export default function Navbar() {
  const { t, lang, toggleLang } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#home" className="nav-logo">
          <BookIcon size={22} /> <span>Gossip Books</span>
        </a>

        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={() => setOpen(false)}>
                {t(item)}
              </a>
            </li>
          ))}
          <li>
            <button className="lang-toggle" onClick={toggleLang}>
              {lang === 'ar' ? 'EN' : 'AR'}
            </button>
          </li>
        </ul>

        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          <MenuIcon size={24} />
        </button>
      </div>
    </nav>
  );
}
