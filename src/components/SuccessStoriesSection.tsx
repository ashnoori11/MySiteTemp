import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent } from './ui/card';
import { Avatar, AvatarFallback } from './ui/avatar';

export const SuccessStoriesSection = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar' || language === 'ku';

  const testimonials = [
    {
      text: t('success.testimonial1'),
      author: t('success.author1'),
      position: t('success.position1'),
      avatar: 'AH',
    },
    {
      text: t('success.testimonial2'),
      author: t('success.author2'),
      position: t('success.position2'),
      avatar: 'SM',
    },
    {
      text: t('success.testimonial3'),
      author: t('success.author3'),
      position: t('success.position3'),
      avatar: 'KA',
    },
  ];

  return (
    <section className={`py-20 bg-gradient-to-br from-blue-50 to-green-50 ${isRTL ? 'rtl' : ''}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-gray-900 mb-4">{t('success.title')}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <Quote className="w-10 h-10 text-blue-600 opacity-50" />
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center space-x-4">
                    <Avatar className="w-12 h-12">
                      <AvatarFallback className="bg-gradient-to-br from-blue-600 to-blue-700 text-white">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="text-gray-900">{testimonial.author}</div>
                      <div className="text-gray-600 text-sm">{testimonial.position}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
