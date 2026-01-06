import React from 'react';
import { Target, Eye, Users, Award } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { useLanguage } from '../context/LanguageContext';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export const AboutPage: React.FC = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'Continuously pushing boundaries to deliver cutting-edge solutions',
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Your success is our priority, always',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to the highest standards in everything we do',
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'Building trust through open communication',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl text-gray-900 mb-6">
              {t('about.title')}
            </h1>
            <p className="text-2xl text-gray-600">
              {t('about.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                {t('about.description')}
              </p>
              <div className="grid grid-cols-2 gap-8 mt-8">
                <div className="text-center">
                  <div className="text-4xl text-blue-600 mb-2">100+</div>
                  <p className="text-gray-600">Healthcare Facilities</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl text-purple-600 mb-2">500K+</div>
                  <p className="text-gray-600">Patients Served</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl text-blue-600 mb-2">24/7</div>
                  <p className="text-gray-600">Support Available</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl text-purple-600 mb-2">99.9%</div>
                  <p className="text-gray-600">Uptime Guarantee</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758574437870-f83c160efd82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwdGVhbSUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzYxNzUxNjcxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Healthcare team"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                <Eye className="w-8 h-8" />
              </div>
              <h2 className="text-3xl mb-4">{t('about.vision')}</h2>
              <p className="text-lg opacity-90">
                {t('about.visionText')}
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8" />
              </div>
              <h2 className="text-3xl mb-4">{t('about.mission')}</h2>
              <p className="text-lg opacity-90">
                {t('about.missionText')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="border-2 hover:border-blue-200 transition-colors">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-gray-900 mb-4">Our Locations</h2>
            <p className="text-xl text-gray-600">
              Serving the Middle East from strategic locations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600"></div>
              <CardContent className="p-6">
                <h3 className="text-2xl text-gray-900 mb-2">{t('contact.erbil')}</h3>
                <p className="text-gray-600 mb-4">{t('contact.erbilAddress')}</p>
                <p className="text-gray-700">
                  Our headquarters in the heart of Kurdistan Region, serving clients across Iraq and beyond.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600"></div>
              <CardContent className="p-6">
                <h3 className="text-2xl text-gray-900 mb-2">{t('contact.baghdad')}</h3>
                <p className="text-gray-600 mb-4">{t('contact.baghdadAddress')}</p>
                <p className="text-gray-700">
                  Strategically located to serve central and southern Iraq with excellence and dedication.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};
