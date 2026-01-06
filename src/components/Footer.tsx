import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="bg-white text-blue-600 px-4 py-2 rounded-lg inline-block mb-4">
              <span className="text-xl">SoftKey</span>
            </div>
            <p className="text-gray-300 mb-4">
              {t('footer.description')}
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="mb-4">{t('footer.products')}</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white transition-colors cursor-pointer">
                {t('products.hic.title')}
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                {t('products.clinical.title')}
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                {t('products.lab.title')}
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                {t('products.iot.title')}
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4">{t('footer.company')}</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white transition-colors cursor-pointer">
                {t('nav.about')}
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                {t('nav.contact')}
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                {t('footer.documentation')}
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                {t('footer.api')}
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4">{t('nav.contact')}</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <p>{t('contact.erbil')}</p>
                  <p className="text-sm">{t('contact.erbilAddress')}</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <p>{t('contact.baghdad')}</p>
                  <p className="text-sm">{t('contact.baghdadAddress')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© 2025 SoftKey. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};
