import { motion } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

export const PricingSection = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar' || language === 'ku';

  const plans = [
    {
      name: t('pricing.basic.title'),
      description: t('pricing.basic.description'),
      features: [
        t('pricing.basic.feature1'),
        t('pricing.basic.feature2'),
        t('pricing.basic.feature3'),
        t('pricing.basic.feature4'),
      ],
      popular: false,
      gradient: 'from-gray-600 to-gray-700',
    },
    {
      name: t('pricing.professional.title'),
      description: t('pricing.professional.description'),
      features: [
        t('pricing.professional.feature1'),
        t('pricing.professional.feature2'),
        t('pricing.professional.feature3'),
        t('pricing.professional.feature4'),
        t('pricing.professional.feature5'),
      ],
      popular: true,
      gradient: 'from-blue-600 to-blue-700',
    },
    {
      name: t('pricing.enterprise.title'),
      description: t('pricing.enterprise.description'),
      features: [
        t('pricing.enterprise.feature1'),
        t('pricing.enterprise.feature2'),
        t('pricing.enterprise.feature3'),
        t('pricing.enterprise.feature4'),
        t('pricing.enterprise.feature5'),
      ],
      popular: false,
      gradient: 'from-green-600 to-emerald-700',
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className={`py-20 bg-gradient-to-br from-gray-50 to-white ${isRTL ? 'rtl' : ''}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-gray-900 mb-4">{t('pricing.title')}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('pricing.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={plan.popular ? 'md:-mt-4 md:mb-4' : ''}
            >
              <Card className={`relative h-full border-0 shadow-xl ${plan.popular ? 'ring-2 ring-blue-600' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-1 rounded-full text-sm">
                      Popular
                    </span>
                  </div>
                )}
                
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center mb-6`}>
                    <span className="text-white text-2xl">★</span>
                  </div>
                  
                  <h3 className="text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm mb-6">{plan.description}</p>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button
                    onClick={scrollToContact}
                    className={`w-full ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    {t('pricing.cta')}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
