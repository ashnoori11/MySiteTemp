import { motion } from 'motion/react';
import { Target, History, Trophy } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

export const AboutSection = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar' || language === 'ku';

  const sections = [
    {
      icon: Target,
      title: t('about.vision.title'),
      description: t('about.vision.description'),
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: History,
      title: t('about.history.title'),
      description: t('about.history.description'),
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Trophy,
      title: t('about.achievements.title'),
      description: t('about.achievements.description'),
      color: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section id="about" className={`py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white ${isRTL ? 'rtl' : ''}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-white mb-4">{t('about.title')}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758574437870-f83c160efd82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGVhbSUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzYxMjE5MjE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Parmas Team"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <h3 className="text-white mb-4">{t('mission.title')}</h3>
            <p className="text-gray-300 leading-relaxed">
              {t('mission.description')}
            </p>
          </motion.div>
        </div>

        {/* Vision, History, Achievements */}
        <div className="grid md:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all h-full">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${section.color} flex items-center justify-center mb-6`}>
                    <section.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-white mb-4">{section.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {section.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
