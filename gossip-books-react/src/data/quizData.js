// Each option maps to a book-type score (a, b, c, or d).
// Edit the text here to change quiz content without touching Quiz.jsx.

export const QUIZ_QUESTIONS = [
  {
    en: "It's a rainy Sunday. What are you doing?",
    ar: 'يوم أحد ممطر. ماذا تفعل؟',
    options: [
      { en: 'Binge-watching a thriller', ar: 'أتابع مسلسل إثارة', type: 'a' },
      { en: 'Journaling with coffee', ar: 'أكتب مذكراتي مع قهوة', type: 'b' },
      { en: 'Researching a random topic', ar: 'أبحث عن موضوع عشوائي', type: 'c' },
      { en: 'Painting or coloring', ar: 'أرسم أو ألوّن', type: 'd' },
    ],
  },
  {
    en: "Pick a mood you're chasing this month.",
    ar: 'اختر شعوراً تسعى إليه هذا الشهر.',
    options: [
      { en: 'Suspense and adrenaline', ar: 'التشويق والإثارة', type: 'a' },
      { en: 'Comfort and warmth', ar: 'الراحة والدفء', type: 'b' },
      { en: 'Curiosity and discovery', ar: 'الفضول والاكتشاف', type: 'c' },
      { en: 'Calm and stillness', ar: 'الهدوء والسكينة', type: 'd' },
    ],
  },
  {
    en: 'Your ideal reading spot is...',
    ar: 'مكان قراءتك المثالي هو...',
    options: [
      { en: 'A dim room, lights low', ar: 'غرفة معتمة الإضاءة', type: 'a' },
      { en: 'A cozy blanket fort', ar: 'زاوية دافئة مع بطانية', type: 'b' },
      { en: 'A busy café, people-watching', ar: 'مقهى مزدحم أراقب الناس', type: 'c' },
      { en: 'A quiet garden or balcony', ar: 'حديقة أو شرفة هادئة', type: 'd' },
    ],
  },
  {
    en: 'A friend cancels plans last minute. You...',
    ar: 'صديقك ألغى الخطة في اللحظة الأخيرة. أنت...',
    options: [
      { en: 'Low-key relieved, plot a solo night in', ar: 'مرتاح قليلاً، أخطط لسهرة منفردة', type: 'a' },
      { en: 'Text someone else to vent', ar: 'أراسل شخصاً آخر لأشتكي', type: 'b' },
      { en: 'Use the free time to learn something', ar: 'أستغل الوقت لأتعلم شيئاً', type: 'c' },
      { en: 'Take it as a sign to slow down', ar: 'أعتبرها إشارة للتباطؤ', type: 'd' },
    ],
  },
  {
    en: 'Pick a color palette.',
    ar: 'اختر لوحة ألوان.',
    options: [
      { en: 'Black, deep red, midnight blue', ar: 'أسود، أحمر داكن، أزرق ليلي', type: 'a' },
      { en: 'Blush pink, cream, gold', ar: 'وردي فاتح، كريمي، ذهبي', type: 'b' },
      { en: 'Mustard, forest green, rust', ar: 'خردلي، أخضر غامق، صدئي', type: 'c' },
      { en: 'Lavender, sage, soft white', ar: 'بنفسجي فاتح، أخضر مريمية، أبيض ناعم', type: 'd' },
    ],
  },
  {
    en: 'What ending do you prefer?',
    ar: 'أي نهاية تفضل؟',
    options: [
      { en: 'A twist I never saw coming', ar: 'مفاجأة لم أتوقعها', type: 'a' },
      { en: 'A happy, satisfying close', ar: 'نهاية سعيدة ومُرضية', type: 'b' },
      { en: 'One that makes me think for days', ar: 'نهاية تجعلني أفكر لأيام', type: 'c' },
      { en: 'Open-ended, left to feel', ar: 'نهاية مفتوحة أشعر بها', type: 'd' },
    ],
  },
  {
    en: "Your phone's about to die. What's your last search?",
    ar: 'هاتفك على وشك الانطفاء. ما آخر بحث لك؟',
    options: [
      { en: '"Unsolved mysteries"', ar: '"ألغاز لم تُحل"', type: 'a' },
      { en: '"Cute date ideas"', ar: '"أفكار مواعيد لطيفة"', type: 'b' },
      { en: '"How does ___ actually work"', ar: '"كيف يعمل ___ فعلياً"', type: 'c' },
      { en: '"5-minute meditation"', ar: '"تأمل لمدة 5 دقائق"', type: 'd' },
    ],
  },
  {
    en: 'Pick a fictional character you relate to.',
    ar: 'اختر شخصية خيالية تشعر أنك تشبهها.',
    options: [
      { en: 'The detective piecing it together', ar: 'المحقق الذي يجمع القطع', type: 'a' },
      { en: 'The hopeless romantic', ar: 'الرومانسي الحالم', type: 'b' },
      { en: 'The wanderer chasing answers', ar: 'المتجول الباحث عن الإجابات', type: 'c' },
      { en: 'The quiet observer', ar: 'المراقب الهادئ', type: 'd' },
    ],
  },
];

// Book picks reflect titles commonly found in Lebanese bookstores, mixing
// popular English fiction (Colleen Hoover) with Arabic classics and
// contemporary Arabic literature, as requested.
export const QUIZ_RESULTS = {
  a: {
    type: { en: 'The Thrill-Seeker', ar: 'الباحث عن الإثارة' },
    desc: {
      en: "You're drawn to suspense, twists, and stories that keep you up past midnight.",
      ar: 'تنجذب إلى التشويق والمفاجآت والقصص التي تبقيك مستيقظاً حتى منتصف الليل.',
    },
    books: [
      { title: { en: 'Verity', ar: 'فيريتي' }, author: { en: 'Colleen Hoover', ar: 'كولين هوفر' } },
      { title: { en: 'The Silent Patient', ar: 'المريضة الصامتة' }, author: { en: 'Alex Michaelides', ar: 'أليكس ميخائيليدس' } },
      { title: { en: 'Vertigo', ar: 'فيرتيجو' }, author: { en: 'Ahmed Mourad', ar: 'أحمد مراد' } },
      { title: { en: 'Diamond Dust', ar: 'تراب الماس' }, author: { en: 'Ahmed Mourad', ar: 'أحمد مراد' } },
    ],
  },
  b: {
    type: { en: 'The Romantic', ar: 'الرومانسي' },
    desc: {
      en: 'Warmth, connection, and a satisfying ending are your thing.',
      ar: 'الدفء والتواصل والنهاية المُرضية هي ما يعنيك.',
    },
    books: [
      { title: { en: 'It Starts with Us', ar: 'إت ستارتس ويذ أس' }, author: { en: 'Colleen Hoover', ar: 'كولين هوفر' } },
      { title: { en: 'It Ends with Us', ar: 'إت إندز ويذ أس' }, author: { en: 'Colleen Hoover', ar: 'كولين هوفر' } },
      { title: { en: 'Memory in the Flesh', ar: 'ذاكرة الجسد' }, author: { en: 'Ahlam Mosteghanemi', ar: 'أحلام مستغانمي' } },
      { title: { en: 'Bed Hopper', ar: 'عابر سرير' }, author: { en: 'Ahlam Mosteghanemi', ar: 'أحلام مستغانمي' } },
      { title: { en: 'Black Suits You', ar: 'الأسود يليق بك' }, author: { en: 'Ahlam Mosteghanemi', ar: 'أحلام مستغانمي' } },
      { title: { en: 'Letters: Ghassan Kanafani to Ghada al-Samman', ar: 'رسائل غسان كنفاني إلى غادة السمان' }, author: { en: 'Ghassan Kanafani & Ghada al-Samman', ar: 'غسان كنفاني وغادة السمان' } },
    ],
  },
  c: {
    type: { en: 'The Explorer', ar: 'المستكشف' },
    desc: {
      en: 'Curiosity drives you — you want to learn, question, and see the world differently.',
      ar: 'الفضول يقودك — تريد أن تتعلم وتتساءل وترى العالم بشكل مختلف.',
    },
    books: [
      { title: { en: 'The Gambler', ar: 'المقامر' }, author: { en: 'Fyodor Dostoevsky', ar: 'دوستويفسكي' } },
      { title: { en: 'The Brothers Karamazov', ar: 'الإخوة كارامازوف' }, author: { en: 'Fyodor Dostoevsky', ar: 'دوستويفسكي' } },
      { title: { en: 'Zorba the Greek', ar: 'زوربا اليوناني' }, author: { en: 'Nikos Kazantzakis', ar: 'نيكوس كازانتزاكيس' } },
      { title: { en: 'The Woman from Tantoura', ar: 'الطنطورية' }, author: { en: 'Radwa Ashour', ar: 'رضوى عاشور' } },
      { title: { en: 'Leo Africanus', ar: 'ليون الأفريقي' }, author: { en: 'Amin Maalouf', ar: 'أمين معلوف' } },
    ],
  },
  d: {
    type: { en: 'The Quiet Soul', ar: 'الروح الهادئة' },
    desc: {
      en: 'You lean toward calm, reflection, and stillness.',
      ar: 'تميل إلى الهدوء والتأمل والسكينة.',
    },
    books: [
      { title: { en: 'The Prophet', ar: 'النبي' }, author: { en: 'Khalil Gibran', ar: 'جبران خليل جبران' } },
      { title: { en: 'The Broken Wings', ar: 'الأجنحة المتكسرة' }, author: { en: 'Khalil Gibran', ar: 'جبران خليل جبران' } },
      { title: { en: 'Memory for Forgetfulness', ar: 'ذاكرة للنسيان' }, author: { en: 'Mahmoud Darwish', ar: 'محمود درويش' } },
      { title: { en: 'The Lights of Rumi', ar: 'أنوار الرومي' }, author: { en: 'Jalaluddin Rumi', ar: 'جلال الدين الرومي' } },
      { title: { en: 'Kalila and Dimna', ar: 'كليلة ودمنة' }, author: { en: 'Ibn al-Muqaffa', ar: 'ابن المقفع' } },
    ],
  },
};
