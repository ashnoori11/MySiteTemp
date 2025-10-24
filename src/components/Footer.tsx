import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Footer = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar' || language === 'ku';

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ${isRTL ? 'rtl' : ''}`}>
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">P</span>
              </div>
              <div>
                <div className="text-xl tracking-tight">Parmas</div>
                <div className="text-xs text-blue-400">SkMed360</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              {t('footer.tagline')}
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="mb-4">{t('footer.company')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-white transition-colors">
                  {t('nav.about')}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('features')} className="text-gray-400 hover:text-white transition-colors">
                  {t('nav.features')}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('pricing')} className="text-gray-400 hover:text-white transition-colors">
                  {t('nav.pricing')}
                </button>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="mb-4">{t('footer.support')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => scrollToSection('demo')} className="text-gray-400 hover:text-white transition-colors">
                  {t('nav.demo')}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-white transition-colors">
                  {t('nav.contact')}
                </button>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  {t('footer.documentation')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4">{t('nav.contact')}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">Kurdistan, Iraq</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span className="text-gray-400">+964 XXX XXX XXXX</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span className="text-gray-400">info@parmas.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              {t('footer.rights')}
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                {t('footer.privacy')}
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                {t('footer.terms')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
