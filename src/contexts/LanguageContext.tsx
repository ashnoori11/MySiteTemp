import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ar' | 'ku';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.features': 'Features',
    'nav.demo': 'Request Demo',
    'nav.pricing': 'Pricing',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Transform Healthcare with SkMed360',
    'hero.subtitle': 'The cutting-edge cloud-based Hospital Information System trusted by leading healthcare institutions across Kurdistan and Iraq',
    'hero.cta': 'Request a Demo',
    'hero.learn': 'Learn More',
    
    // Stats
    'stats.customers': 'Satisfied Customers',
    'stats.uptime': 'System Uptime',
    'stats.institutions': 'Healthcare Institutions',
    'stats.support': '24/7 Support',
    
    // Mission
    'mission.title': 'Our Mission',
    'mission.description': 'At Parmas, we are committed to revolutionizing healthcare delivery through innovative technology. Our mission is to provide cutting-edge, reliable, and user-friendly solutions that empower healthcare professionals to deliver exceptional patient care.',
    
    // Why Choose Us
    'why.title': 'Why Choose SkMed360?',
    'why.innovation.title': 'Innovation & Excellence',
    'why.innovation.description': 'Built with the latest technology stack, ensuring speed, reliability, and scalability for your healthcare institution.',
    'why.cloud.title': 'Cloud-Based Architecture',
    'why.cloud.description': 'Access your hospital data securely from anywhere, anytime. No more limitations of desktop applications.',
    'why.support.title': 'Dedicated Support',
    'why.support.description': '24/7 expert support team ready to assist you. We ensure smooth operations and quick resolution of any issues.',
    'why.modern.title': 'Modern User Interface',
    'why.modern.description': 'Intuitive, clean design that reduces training time and increases productivity for your healthcare staff.',
    'why.security.title': 'Enterprise Security',
    'why.security.description': 'Bank-level encryption and compliance with healthcare data protection standards to keep patient information safe.',
    'why.integration.title': 'Seamless Integration',
    'why.integration.description': 'Easy integration with existing systems and medical devices for a unified healthcare management experience.',
    
    // Features
    'features.title': 'Product Features',
    'features.subtitle': 'Comprehensive solutions for modern healthcare management',
    'features.patient.title': 'Patient Management',
    'features.patient.description': 'Complete patient records, history tracking, and appointment scheduling in one unified system.',
    'features.billing.title': 'Smart Billing',
    'features.billing.description': 'Automated billing, insurance claims, and financial reporting with real-time insights.',
    'features.pharmacy.title': 'Pharmacy Management',
    'features.pharmacy.description': 'Inventory control, prescription management, and medication tracking for safety and efficiency.',
    'features.laboratory.title': 'Laboratory Integration',
    'features.laboratory.description': 'Seamless lab test ordering, result tracking, and integration with diagnostic equipment.',
    'features.reporting.title': 'Advanced Analytics',
    'features.reporting.description': 'Powerful reporting tools and dashboards for data-driven decision making.',
    'features.mobile.title': 'Mobile Access',
    'features.mobile.description': 'Access critical information on the go with our responsive mobile interface.',
    
    // About
    'about.title': 'About Parmas',
    'about.vision.title': 'Our Vision',
    'about.vision.description': 'To be the leading healthcare technology provider in the Middle East, transforming how healthcare institutions operate and deliver care.',
    'about.history.title': 'Our Journey',
    'about.history.description': 'Founded with a vision to modernize healthcare in Kurdistan and Iraq, Parmas has grown from a local innovator to a trusted partner for leading healthcare institutions. Our journey is marked by continuous innovation and unwavering commitment to excellence.',
    'about.achievements.title': 'Our Achievements',
    'about.achievements.description': 'Over the years, we have successfully deployed SkMed360 in numerous private and public healthcare facilities, improving operational efficiency and patient care quality across the region.',
    
    // Success Stories
    'success.title': 'Success Stories',
    'success.testimonial1': 'SkMed360 has transformed how we manage our hospital. The cloud-based system allows our staff to access patient information instantly, improving response times and patient care quality.',
    'success.testimonial2': 'The transition from our old desktop system to SkMed360 was seamless. The modern interface is intuitive, and our staff adapted quickly. We have seen a 40% improvement in operational efficiency.',
    'success.testimonial3': 'Outstanding support and a truly innovative product. SkMed360 has helped us streamline our processes and focus more on patient care rather than administrative tasks.',
    'success.author1': 'Dr. Ahmed Hassan',
    'success.author2': 'Dr. Sara Mohammed',
    'success.author3': 'Dr. Karwan Ali',
    'success.position1': 'Director, Erbil Central Hospital',
    'success.position2': 'Administrator, Kurdistan Medical Center',
    'success.position3': 'CEO, Sulaymaniyah Private Clinic',
    
    // Demo Request
    'demo.title': 'Request a Demo',
    'demo.subtitle': 'See SkMed360 in action. Schedule a personalized demo with our experts.',
    'demo.name': 'Full Name',
    'demo.email': 'Email Address',
    'demo.phone': 'Phone Number',
    'demo.institution': 'Healthcare Institution',
    'demo.role': 'Your Role',
    'demo.message': 'Message (Optional)',
    'demo.submit': 'Schedule Demo',
    'demo.success': 'Thank you! We will contact you soon to schedule your demo.',
    
    // Pricing
    'pricing.title': 'Flexible Pricing Options',
    'pricing.subtitle': 'Choose the plan that fits your institution\'s needs',
    'pricing.basic.title': 'Basic',
    'pricing.basic.description': 'Perfect for small clinics and practices',
    'pricing.basic.feature1': 'Up to 50 patient records/day',
    'pricing.basic.feature2': 'Core modules included',
    'pricing.basic.feature3': 'Email support',
    'pricing.basic.feature4': 'Monthly updates',
    'pricing.professional.title': 'Professional',
    'pricing.professional.description': 'Ideal for medium-sized healthcare facilities',
    'pricing.professional.feature1': 'Unlimited patient records',
    'pricing.professional.feature2': 'All modules included',
    'pricing.professional.feature3': '24/7 priority support',
    'pricing.professional.feature4': 'Advanced analytics',
    'pricing.professional.feature5': 'Custom integrations',
    'pricing.enterprise.title': 'Enterprise',
    'pricing.enterprise.description': 'For large hospitals and healthcare networks',
    'pricing.enterprise.feature1': 'Everything in Professional',
    'pricing.enterprise.feature2': 'Dedicated account manager',
    'pricing.enterprise.feature3': 'Custom development',
    'pricing.enterprise.feature4': 'On-premise deployment option',
    'pricing.enterprise.feature5': 'SLA guarantees',
    'pricing.cta': 'Contact Sales',
    
    // Contact
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'Have questions? Our team is here to help',
    'contact.name': 'Your Name',
    'contact.email': 'Email',
    'contact.subject': 'Subject',
    'contact.message': 'Your Message',
    'contact.submit': 'Send Message',
    'contact.talk': 'Talk with Staff',
    'contact.expert': 'Contact Expert',
    'contact.sales': 'Sales Inquiry',
    'contact.success': 'Thank you for your message. We will get back to you shortly.',
    
    // Footer
    'footer.tagline': 'Transforming Healthcare Through Innovation',
    'footer.company': 'Company',
    'footer.product': 'Product',
    'footer.support': 'Support',
    'footer.legal': 'Legal',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.documentation': 'Documentation',
    'footer.rights': '© 2025 Parmas. All rights reserved.',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.features': 'المميزات',
    'nav.demo': 'طلب عرض توضيحي',
    'nav.pricing': 'الأسعار',
    'nav.contact': 'اتصل بنا',
    
    // Hero Section
    'hero.title': 'تحويل الرعاية الصحية مع SkMed360',
    'hero.subtitle': 'نظام معلومات المستشفيات السحابي المتطور الموثوق به من قبل المؤسسات الصحية الرائدة في كردستان والعراق',
    'hero.cta': 'طلب عرض توضيحي',
    'hero.learn': 'اعرف المزيد',
    
    // Stats
    'stats.customers': 'عميل راضٍ',
    'stats.uptime': 'وقت التشغيل',
    'stats.institutions': 'مؤسسة صحية',
    'stats.support': 'دعم 24/7',
    
    // Mission
    'mission.title': 'مهمتنا',
    'mission.description': 'في بارماس، نحن ملتزمون بإحداث ثورة في تقديم الرعاية الصحية من خلال التكنولوجيا المبتكرة. مهمتنا هي توفير حلول متطورة وموثوقة وسهلة الاستخدام تمكن المهنيين الصحيين من تقديم رعاية استثنائية للمرضى.',
    
    // Why Choose Us
    'why.title': 'لماذا تختار SkMed360؟',
    'why.innovation.title': 'الابتكار والتميز',
    'why.innovation.description': 'مبني بأحدث التقنيات، مما يضمن السرعة والموثوقية وقابلية التوسع لمؤسستك الصحية.',
    'why.cloud.title': 'بنية سحابية',
    'why.cloud.description': 'الوصول إلى بيانات المستشفى بشكل آمن من أي مكان وفي أي وقت. لا مزيد من قيود تطبيقات سطح المكتب.',
    'why.support.title': 'دعم متخصص',
    'why.support.description': 'فريق دعم خبير على مدار الساعة طوال أيام الأسبوع جاهز لمساعدتك. نضمن التشغيل السلس والحل السريع لأي مشاكل.',
    'why.modern.title': 'واجهة مستخدم حديثة',
    'why.modern.description': 'تصميم بديهي ونظيف يقلل من وقت التدريب ويزيد من إنتاجية موظفي الرعاية الصحية لديك.',
    'why.security.title': 'أمان على مستوى المؤسسات',
    'why.security.description': 'تشفير على مستوى البنوك والامتثال لمعايير حماية بيانات الرعاية الصحية للحفاظ على أمان معلومات المرضى.',
    'why.integration.title': 'تكامل سلس',
    'why.integration.description': 'تكامل سهل مع الأنظمة الحالية والأجهزة الطبية لتجربة إدارة رعاية صحية موحدة.',
    
    // Features
    'features.title': 'مميزات المنتج',
    'features.subtitle': 'حلول شاملة لإدارة الرعاية الصحية الحديثة',
    'features.patient.title': 'إدارة المرضى',
    'features.patient.description': 'سجلات المرضى الكاملة وتتبع التاريخ وجدولة المواعيد في نظام موحد.',
    'features.billing.title': 'فواتير ذكية',
    'features.billing.description': 'الفوترة الآلية ومطالبات التأمين والتقارير المالية مع رؤى في الوقت الفعلي.',
    'features.pharmacy.title': 'إدارة الصيدلية',
    'features.pharmacy.description': 'مراقبة المخزون وإدارة الوصفات الطبية وتتبع الأدوية للسلامة والكفاءة.',
    'features.laboratory.title': 'تكامل المختبر',
    'features.laboratory.description': 'طلب الفحوصات المخبرية بسلاسة وتتبع النتائج والتكامل مع المعدات التشخيصية.',
    'features.reporting.title': 'تحليلات متقدمة',
    'features.reporting.description': 'أدوات إعداد تقارير قوية ولوحات معلومات لاتخاذ قرارات مبنية على البيانات.',
    'features.mobile.title': 'الوصول عبر الهاتف المحمول',
    'features.mobile.description': 'الوصول إلى المعلومات الهامة أثناء التنقل مع واجهة الهاتف المحمول سريعة الاستجابة.',
    
    // About
    'about.title': 'عن بارماس',
    'about.vision.title': 'رؤيتنا',
    'about.vision.description': 'أن نكون المزود الرائد لتكنولوجيا الرعاية الصحية في الشرق الأوسط، محولين كيفية عمل المؤسسات الصحية وتقديم الرعاية.',
    'about.history.title': 'رحلتنا',
    'about.history.description': 'تأسست بارماس برؤية لتحديث الرعاية الصحية في كردستان والعراق، ونمت من مبتكر محلي إلى شريك موثوق للمؤسسات الصحية الرائدة. رحلتنا تتميز بالابتكار المستمر والالتزام الثابت بالتميز.',
    'about.achievements.title': 'إنجازاتنا',
    'about.achievements.description': 'على مر السنين، نجحنا في نشر SkMed360 في العديد من المرافق الصحية الخاصة والعامة، مما أدى إلى تحسين الكفاءة التشغيلية وجودة رعاية المرضى في جميع أنحاء المنطقة.',
    
    // Success Stories
    'success.title': 'قصص النجاح',
    'success.testimonial1': 'لقد غير SkMed360 طريقة إدارة مستشفانا. يسمح النظام السحابي لموظفينا بالوصول الفوري إلى معلومات المرضى، مما يحسن أوقات الاستجابة وجودة رعاية المرضى.',
    'success.testimonial2': 'كان الانتقال من نظامنا القديم إلى SkMed360 سلسًا. الواجهة الحديثة بديهية، وتكيف موظفونا بسرعة. لقد شهدنا تحسنًا بنسبة 40٪ في الكفاءة التشغيلية.',
    'success.testimonial3': 'دعم متميز ومنتج مبتكر حقًا. ساعدنا SkMed360 في تبسيط عملياتنا والتركيز أكثر على رعاية المرضى بدلاً من المهام الإدارية.',
    'success.author1': 'د. أحمد حسن',
    'success.author2': 'د. سارة محمد',
    'success.author3': 'د. كاروان علي',
    'success.position1': 'مدير، مستشفى أربيل المركزي',
    'success.position2': 'مدير، المركز الطبي الكردستاني',
    'success.position3': 'الرئيس التنفيذي، عيادة السليمانية الخاصة',
    
    // Demo Request
    'demo.title': 'طلب عرض توضيحي',
    'demo.subtitle': 'شاهد SkMed360 في العمل. حدد موعدًا لعرض توضيحي شخصي مع خبرائنا.',
    'demo.name': 'الاسم الكامل',
    'demo.email': 'البريد الإلكتروني',
    'demo.phone': 'رقم الهاتف',
    'demo.institution': 'المؤسسة الصحية',
    'demo.role': 'دورك',
    'demo.message': 'رسالة (اختياري)',
    'demo.submit': 'جدولة العرض',
    'demo.success': 'شكرًا لك! سنتصل بك قريبًا لجدولة عرضك التوضيحي.',
    
    // Pricing
    'pricing.title': 'خيارات تسعير مرنة',
    'pricing.subtitle': 'اختر الخطة التي تناسب احتياجات مؤسستك',
    'pricing.basic.title': 'أساسي',
    'pricing.basic.description': 'مثالي للعيادات والممارسات الصغيرة',
    'pricing.basic.feature1': 'حتى 50 سجل مريض/يوم',
    'pricing.basic.feature2': 'الوحدات الأساسية المدرجة',
    'pricing.basic.feature3': 'دعم البريد الإلكتروني',
    'pricing.basic.feature4': 'تحديثات شهرية',
    'pricing.professional.title': 'احترافي',
    'pricing.professional.description': 'مثالي للمرافق الصحية المتوسطة الحجم',
    'pricing.professional.feature1': 'سجلات مرضى غير محدودة',
    'pricing.professional.feature2': 'جميع الوحدات مدرجة',
    'pricing.professional.feature3': 'دعم ذو أولوية 24/7',
    'pricing.professional.feature4': 'تحليلات متقدمة',
    'pricing.professional.feature5': 'تكاملات مخصصة',
    'pricing.enterprise.title': 'مؤسسي',
    'pricing.enterprise.description': 'للمستشفيات الكبيرة وشبكات الرعاية الصحية',
    'pricing.enterprise.feature1': 'كل شيء في الاحترافي',
    'pricing.enterprise.feature2': 'مدير حساب مخصص',
    'pricing.enterprise.feature3': 'تطوير مخصص',
    'pricing.enterprise.feature4': 'خيار النشر في الموقع',
    'pricing.enterprise.feature5': 'ضمانات SLA',
    'pricing.cta': 'اتصل بالمبيعات',
    
    // Contact
    'contact.title': 'تواصل معنا',
    'contact.subtitle': 'هل لديك أسئلة؟ فريقنا هنا للمساعدة',
    'contact.name': 'اسمك',
    'contact.email': 'البريد الإلكتروني',
    'contact.subject': 'الموضوع',
    'contact.message': 'رسالتك',
    'contact.submit': 'إرسال الرسالة',
    'contact.talk': 'تحدث مع الموظفين',
    'contact.expert': 'اتصل بخبير',
    'contact.sales': 'استفسار المبيعات',
    'contact.success': 'شكرًا لك على رسالتك. سنعود إليك قريبًا.',
    
    // Footer
    'footer.tagline': 'تحويل الرعاية الصحية من خلال الابتكار',
    'footer.company': 'الشركة',
    'footer.product': 'المنتج',
    'footer.support': 'الدعم',
    'footer.legal': 'قانوني',
    'footer.privacy': 'سياسة الخصوصية',
    'footer.terms': 'شروط الخدمة',
    'footer.documentation': 'التوثيق',
    'footer.rights': '© 2025 بارماس. جميع الحقوق محفوظة.',
  },
  ku: {
    // Navigation
    'nav.home': 'سەرەکی',
    'nav.about': 'دەربارەی ئێمە',
    'nav.features': 'تایبەتمەندییەکان',
    'nav.demo': 'داواکردنی نمایش',
    'nav.pricing': 'نرخەکان',
    'nav.contact': 'پەیوەندی',
    
    // Hero Section
    'hero.title': 'گۆڕینی تەندروستی بە SkMed360',
    'hero.subtitle': 'سیستەمی زانیاری نەخۆشخانەی هەور بنەڕەتی پێشکەوتوو کە پشتی پێدەبەستێت لەلایەن دامەزراوە تەندروستیەکانی سەرەکی لە کوردستان و عێراق',
    'hero.cta': 'داواکردنی نمایش',
    'hero.learn': 'زیاتر فێربە',
    
    // Stats
    'stats.customers': 'کڕیاری ڕازی',
    'stats.uptime': 'کاتی کارکردن',
    'stats.institutions': 'دامەزراوەی تەندروستی',
    'stats.support': 'پشتگیری 24/7',
    
    // Mission
    'mission.title': 'ئەرکی ئێمە',
    'mission.description': 'لە پارماس، ئێمە پابەندین بە شۆڕشگێڕی لە پێشکەشکردنی تەندروستی لە ڕێگەی تەکنەلۆژیای نوێ. ئەرکی ئێمە دابینکردنی چارەسەری پێشکەوتوو، متمانەپێکراو و بەکارهێنەرانە ئاسانە کە توانای پیشەییەکانی تەندروستی بۆ پێشکەشکردنی چاودێری نەخۆش بە جۆرێکی تایبەت.',
    
    // Why Choose Us
    'why.title': 'بۆچی SkMed360 هەڵبژێریت؟',
    'why.innovation.title': 'نوێکاری و باشی',
    'why.innovation.description': 'دروستکراوە بە نوێترین تەکنەلۆژیا، دڵنیایی خێرایی، متمانەپێکراوی و گەشەی دامەزراوەی تەندروستیەکەت.',
    'why.cloud.title': 'بیناسازی هەور بنەڕەت',
    'why.cloud.description': 'دەستگەیشتن بە داتاکانی نەخۆشخانە بە شێوەیەکی سەلامەت لە هەر شوێنێک، هەر کاتێک. چیتر سنووری بەرنامەکانی دێسکتۆپ نییە.',
    'why.support.title': 'پشتگیری تایبەت',
    'why.support.description': 'تیمی پشتگیری پسپۆڕ 24/7 ئامادەیە بۆ یارمەتیدانت. دڵنیای کارکردنی نەرم و چارەسەری خێرا بۆ هەر کێشەیەک.',
    'why.modern.title': 'ڕووکاری بەکارهێنەری نوێ',
    'why.modern.description': 'دیزاینی سادە و پاک کە کاتی ڕاهێنان کەم دەکاتەوە و بەرهەمهێنانی ستافی تەندروستی زیاد دەکات.',
    'why.security.title': 'ئەمنیەتی دامەزراوە',
    'why.security.description': 'شفرەکردنی ئاستی بانک و هاوتەریبی لەگەڵ ستانداردەکانی پاراستنی داتای تەندروستی بۆ پاراستنی زانیاری نەخۆش.',
    'why.integration.title': 'یەکخستنی نەرم',
    'why.integration.description': 'یەکخستنی ئاسان لەگەڵ سیستەمەکانی ئێستا و ئامێرە پزیشکییەکان بۆ ئەزموونی بەڕێوەبردنی تەندروستی یەکگرتوو.',
    
    // Features
    'features.title': 'تایبەتمەندییەکانی بەرهەم',
    'features.subtitle': 'چارەسەری گشتگیر بۆ بەڕێوەبردنی تەندروستی نوێ',
    'features.patient.title': 'بەڕێوەبردنی نەخۆش',
    'features.patient.description': 'تۆمارەکانی نەخۆشی تەواو، شوێنکەوتنی مێژوو و خشتەکردنی چاوپێکەوتن لە یەک سیستەمی یەکگرتوو.',
    'features.billing.title': 'وەسڵی زیرەک',
    'features.billing.description': 'وەسڵدانی خۆکار، داواکاریەکانی بیمە و ڕاپۆرتی دارایی لەگەڵ بینینی کاتی ڕاستەقینە.',
    'features.pharmacy.title': 'بەڕێوەبردنی دەرمانخانە',
    'features.pharmacy.description': 'کۆنتڕۆڵی کۆگا، بەڕێوەبردنی ڕێنووس و شوێنکەوتنی دەرمان بۆ سەلامەتی و کارایی.',
    'features.laboratory.title': 'یەکخستنی تاقیگە',
    'features.laboratory.description': 'داواکردنی تاقیکردنەوەی تاقیگە بە نەرمی، شوێنکەوتنی ئەنجام و یەکخستن لەگەڵ ئامێرە دەستنیشانکەرەکان.',
    'features.reporting.title': 'شیکاری پێشکەوتوو',
    'features.reporting.description': 'ئامرازەکانی ڕاپۆرتکردنی بەهێز و داشبۆردەکان بۆ بڕیاردان بە پشتبەستن بە داتا.',
    'features.mobile.title': 'دەستگەیشتنی مۆبایل',
    'features.mobile.description': 'دەستگەیشتن بە زانیاری گرنگ لە کاتی گەشتکردن لەگەڵ ڕووکاری مۆبایلی وەڵامدەرەوە.',
    
    // About
    'about.title': 'دەربارەی پارماس',
    'about.vision.title': 'بینینی ئێمە',
    'about.vision.description': 'بوون بە دابینکەری سەرەکی تەکنەلۆژیای تەندروستی لە ڕۆژهەڵاتی ناوەڕاست، گۆڕینی چۆنیەتی کارکردن و پێشکەشکردنی چاودێری دامەزراوە تەندروستییەکان.',
    'about.history.title': 'گەشتی ئێمە',
    'about.history.description': 'پارماس دامەزراوە بە بینینی نوێکردنەوەی تەندروستی لە کوردستان و عێراق، و گەشەی کردووە لە نوێگەرێکی ناوخۆیی بۆ هاوبەشێکی متمانەپێکراو بۆ دامەزراوە تەندروستیە سەرەکییەکان. گەشتی ئێمە دیارە بە نوێکاری بەردەوام و پابەندبوونی نەگۆڕ بە باشی.',
    'about.achievements.title': 'دەستکەوتەکانی ئێمە',
    'about.achievements.description': 'لە ماوەی ساڵانی ڕابردوو، بە سەرکەوتوویی SkMed360 لە ژمارەیەکی زۆر لە وێستگە تەندروستیە تایبەت و گشتیەکان جێبەجێ کردووە، کە باشبوونی کارایی کارکردن و کوالیتی چاودێری نەخۆش لە هەموو ناوچەکە.',
    
    // Success Stories
    'success.title': 'چیرۆکە سەرکەوتووەکان',
    'success.testimonial1': 'SkMed360 چۆنیەتی بەڕێوەبردنی نەخۆشخانەکەمانی گۆڕیوە. سیستەمی هەور بنەڕەت ڕێگە بە ستافەکەمان دەدات کە دەستگەیشتنی خێرا بە زانیاری نەخۆش، کە باشبوونی کاتی وەڵام و کوالیتی چاودێری نەخۆش.',
    'success.testimonial2': 'گواستنەوە لە سیستەمی کۆن بۆ SkMed360 نەرم بوو. ڕووکاری نوێ سادەیە، و ستافەکانمان بە خێرایی خۆیان گونجاند. باشبوونی 40٪ لە کارایی کارکردن بینیوە.',
    'success.testimonial3': 'پشتگیری نایاب و بەرهەمێکی نوێگەرانەی ڕاستەقینە. SkMed360 یارمەتیدەرمان بووە بۆ سادەکردنەوەی پرۆسەکانمان و جەختکردنەوە زیاتر لەسەر چاودێری نەخۆش لەجیاتی ئەرکە کارگێڕیەکان.',
    'success.author1': 'د. ئەحمەد حەسەن',
    'success.author2': 'د. سارا محەمەد',
    'success.author3': 'د. کاروان عەلی',
    'success.position1': 'بەڕێوەبەر، نەخۆشخانەی ناوەندی هەولێر',
    'success.position2': 'بەڕێوەبەر، سەنتەری پزیشکی کوردستان',
    'success.position3': 'بەڕێوەبەری جێبەجێکار، کلینیکی تایبەتی سلێمانی',
    
    // Demo Request
    'demo.title': 'داواکردنی نمایش',
    'demo.subtitle': 'SkMed360 لە کارکردن ببینە. کاتێک بۆ نمایشێکی کەسی لەگەڵ پسپۆڕەکانمان دیاری بکە.',
    'demo.name': 'ناوی تەواو',
    'demo.email': 'ئیمەیڵ',
    'demo.phone': 'ژمارەی تەلەفۆن',
    'demo.institution': 'دامەزراوەی تەندروستی',
    'demo.role': 'ڕۆڵی تۆ',
    'demo.message': 'نامە (دڵخواز)',
    'demo.submit': 'دیاریکردنی نمایش',
    'demo.success': 'سوپاس! بەم زووانە پەیوەندیت پێوە دەکەین بۆ دیاریکردنی نمایشەکەت.',
    
    // Pricing
    'pricing.title': 'بژاردەکانی نرخی نەرم',
    'pricing.subtitle': 'پلانێک هەڵبژێرە کە لەگەڵ پێداویستی دامەزراوەکەت بگونجێت',
    'pricing.basic.title': 'بنەڕەتی',
    'pricing.basic.description': 'تەواو بۆ کلینیک و پراکتیسی بچووک',
    'pricing.basic.feature1': 'تا 50 تۆماری نەخۆش/ڕۆژ',
    'pricing.basic.feature2': 'مۆدیولە سەرەکییەکان لەخۆدەگرێت',
    'pricing.basic.feature3': 'پشتگیری ئیمەیڵ',
    'pricing.basic.feature4': 'نوێکردنەوەی مانگانە',
    'pricing.professional.title': 'پیشەیی',
    'pricing.professional.description': 'باش بۆ وێستگە تەندروستیە مامناوەندەکان',
    'pricing.professional.feature1': 'تۆماری نەخۆشی بێسنوور',
    'pricing.professional.feature2': 'هەموو مۆدیولەکان لەخۆدەگرێت',
    'pricing.professional.feature3': 'پشتگیری پێشینە 24/7',
    'pricing.professional.feature4': 'شیکاری پێشکەوتوو',
    'pricing.professional.feature5': 'یەکخستنی تایبەت',
    'pricing.enterprise.title': 'دامەزراوە',
    'pricing.enterprise.description': 'بۆ نەخۆشخانە گەورەکان و تۆڕە تەندروستییەکان',
    'pricing.enterprise.feature1': 'هەموو شتێک لە پیشەیی',
    'pricing.enterprise.feature2': 'بەڕێوەبەری هەژماری تایبەت',
    'pricing.enterprise.feature3': 'گەشەپێدانی تایبەت',
    'pricing.enterprise.feature4': 'بژاردەی جێبەجێکردنی لەسەر شوێن',
    'pricing.enterprise.feature5': 'پابەندبوونی SLA',
    'pricing.cta': 'پەیوەندی بە فرۆشتن',
    
    // Contact
    'contact.title': 'پەیوەندیمان پێوە بکە',
    'contact.subtitle': 'پرسیارت هەیە؟ تیمەکەمان لێرەیە بۆ یارمەتی',
    'contact.name': 'ناوی تۆ',
    'contact.email': 'ئیمەیڵ',
    'contact.subject': 'بابەت',
    'contact.message': 'نامەکەت',
    'contact.submit': 'ناردنی نامە',
    'contact.talk': 'قسە لەگەڵ ستاف',
    'contact.expert': 'پەیوەندی بە پسپۆڕ',
    'contact.sales': 'پرسیاری فرۆشتن',
    'contact.success': 'سوپاس بۆ نامەکەت. بەم زووانە وەڵامت دەدەینەوە.',
    
    // Footer
    'footer.tagline': 'گۆڕینی تەندروستی لە ڕێگەی نوێکاری',
    'footer.company': 'کۆمپانیا',
    'footer.product': 'بەرهەم',
    'footer.support': 'پشتگیری',
    'footer.legal': 'یاسایی',
    'footer.privacy': 'سیاسەتی تایبەتێتی',
    'footer.terms': 'مەرجەکانی خزمەتگوزاری',
    'footer.documentation': 'بەڵگەنامە',
    'footer.rights': '© 2025 پارماس. هەموو مافەکان پارێزراوە.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
