import ContactCard from './ContactCard';
import { BookIcon, MoonIcon } from './Icons';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section className="section-dark" id="contact">
      <div className="container">
        <div className="section-header">
          <h2>{t({ en: 'Gossip Books', ar: 'جوسبوك' })}</h2>
          <p>
            {t({
              en: 'Gossip with a book — Gen Z library delivering mystery and meaning across Lebanon.',
              ar: 'موعد مع كتاب — مكتبة جيل Z توصل الغموض والمعنى لكل لبنان.',
            })}
          </p>
        </div>
        <div className="grid grid-2">
          <ContactCard
            icon={BookIcon}
            name="Gossip Books"
            instagram="@gossipbookss_"
            instagramUrl="https://instagram.com/gossipbookss"
            phone="+961 76 489 921"
            whatsappUrl="https://wa.me/96176489921"
          />
          <ContactCard
            icon={MoonIcon}
            name="Mishkat Bookstore"
            instagram="@mishkatbookshop"
            instagramUrl="https://instagram.com/mishkatbookshop"
            phone="+961 81 987 403"
            whatsappUrl="https://wa.me/96181987403"
          />
        </div>
      </div>
    </section>
  );
}
