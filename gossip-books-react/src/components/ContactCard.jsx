import { InstagramIcon, PhoneIcon } from './Icons';

export default function ContactCard({ icon: Icon, name, instagram, instagramUrl, phone, whatsappUrl }) {
  return (
    <div className="contact-card">
      <div className="card-icon">
        <Icon size={22} />
      </div>
      <h3>{name}</h3>
      <a className="contact-row" href={instagramUrl} target="_blank" rel="noopener noreferrer">
        <span className="icon-circle"><InstagramIcon size={18} /></span> {instagram}
      </a>
      <a className="contact-row" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <span className="icon-circle"><PhoneIcon size={18} /></span> {phone}
      </a>
    </div>
  );
}
