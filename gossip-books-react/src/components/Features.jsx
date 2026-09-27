import FeatureCard from './FeatureCard';
import { GiftIcon, CoffeeIcon, BookmarkIcon, PaletteIcon } from './Icons';

const FEATURES = [
  {
    icon: GiftIcon,
    title: { en: 'Special Packaging', ar: 'تغليف مميز' },
    desc: {
      en: 'Each book arrives wrapped — the mystery is part of the magic.',
      ar: 'كل كتاب يصلك مغلّفًا — السر جزء من المتعة.',
    },
  },
  {
    icon: CoffeeIcon,
    title: { en: 'A Cup for Coffee & Tea', ar: 'كوب للقهوة والشاي' },
    desc: {
      en: 'A cup to enjoy your drink while you read your surprise.',
      ar: 'كوب لتستمتع بشرابك وأنت تقرأ مفاجأتك.',
    },
  },
  {
    icon: BookmarkIcon,
    title: { en: 'Artisan Bookmark', ar: 'علامة فنية' },
    desc: {
      en: 'A beautiful bookmark by an artist, to mark where your story begins.',
      ar: 'علامة من تصميم فنان، لتعليم بداية قصتك.',
    },
  },
  {
    icon: PaletteIcon,
    title: { en: 'Mandala Art', ar: 'فن الماندالا' },
    desc: {
      en: 'Optional mandala to color while you relax with your book.',
      ar: 'ماندالا اختيارية لتلوينها وأنت تسترخي مع كتابك.',
    },
  },
];

export default function Features() {
  return (
    <section style={{ background: 'var(--cream-2)' }}>
      <div className="container">
        <div className="grid grid-4">
          {FEATURES.map((f) => (
            <FeatureCard key={f.title.en} icon={f.icon} title={f.title} desc={f.desc} />
          ))}
        </div>
      </div>
    </section>
  );
}
