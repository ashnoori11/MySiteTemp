import { motion } from 'motion/react';
import { Users, CreditCard, Pill, FlaskConical, BarChart3, Smartphone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

export const FeaturesSection = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar' || language === 'ku';

  const features = [
    {
      icon: Users,
      title: t('features.patient.title'),
      description: t('features.patient.description'),
    },
    {
      icon: CreditCard,
      title: t('features.billing.title'),
      description: t('features.billing.description'),
    },
    {
      icon: Pill,
      title: t('features.pharmacy.title'),
      description: t('features.pharmacy.description'),
    },
    {
      icon: FlaskConical,
      title: t('features.laboratory.title'),
      description: t('features.laboratory.description'),
    },
    {
      icon: BarChart3,
      title: t('features.reporting.title'),
      description: t('features.reporting.description'),
    },
    {
      icon: Smartphone,
      title: t('features.mobile.title'),
      description: t('features.mobile.description'),
    },
  ];

  return (
    <section id="features" className={`py-20 bg-white ${isRTL ? 'rtl' : ''}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-gray-900 mb-4">{t('features.title')}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('features.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1691934310598-27528df21f9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwcHJvZmVzc2lvbmFscyUyMGNvbXB1dGVyfGVufDF8fHx8MTc2MTIzNzc1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Healthcare Professional using SkMed360"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent" />
            </div>
          </motion.div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
