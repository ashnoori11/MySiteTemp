import { motion } from 'motion/react';
import { Cloud, Shield, Headphones, Palette, Lock, Workflow } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent } from './ui/card';

export const WhyChooseUsSection = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar' || language === 'ku';

  const features = [
    {
      icon: Palette,
      title: t('why.innovation.title'),
      description: t('why.innovation.description'),
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Cloud,
      title: t('why.cloud.title'),
      description: t('why.cloud.description'),
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Headphones,
      title: t('why.support.title'),
      description: t('why.support.description'),
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Palette,
      title: t('why.modern.title'),
      description: t('why.modern.description'),
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Lock,
      title: t('why.security.title'),
      description: t('why.security.description'),
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: Workflow,
      title: t('why.integration.title'),
      description: t('why.integration.description'),
      color: 'from-teal-500 to-green-500',
    },
  ];

  return (
    <section className={`py-20 bg-gradient-to-br from-gray-50 to-white ${isRTL ? 'rtl' : ''}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-gray-900 mb-4">{t('why.title')}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
