import React from 'react';
import { ArrowRight, Shield, Clock, TrendingUp, Zap } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { useLanguage } from '../context/LanguageContext';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

  const products = [
    {
      key: 'hic',
      icon: '🏥',
    },
    {
      key: 'clinical',
      icon: '👨‍⚕️',
    },
    {
      key: 'lab',
      icon: '🔬',
    },
    {
      key: 'invoicing',
      icon: '💳',
    },
    {
      key: 'iot',
      icon: '📡',
    },
    {
      key: 'sdk',
      icon: '⚙️',
    },
  ];

  const features = [
    {
      key: 'security',
      icon: Shield,
    },
    {
      key: 'support',
      icon: Clock,
    },
    {
      key: 'scalable',
      icon: TrendingUp,
    },
    {
      key: 'integration',
      icon: Zap,
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
          <div className="absolute inset-0 opacity-10">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1758691462848-ba1e929da259?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3NwaXRhbCUyMGhlYWx0aGNhcmUlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MTc1ODY4MXww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Healthcare technology"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl text-gray-900">
                {t('hero.title')}
              </h1>
              <p className="text-xl text-gray-600">
                {t('hero.subtitle')}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  onClick={() => onNavigate('demo')}
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  {t('hero.cta')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  onClick={() => onNavigate('about')}
                  variant="outline"
                  size="lg"
                >
                  {t('hero.learnMore')}
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1666886573421-d19e546cfc4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcHJvZmVzc2lvbmFscyUyMGRvY3RvcnxlbnwxfHx8fDE3NjE3NTg2ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Medical professionals"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-xs">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xl">
                    ✓
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">{t('features.security.title')}</p>
                    <p className="text-gray-900">Trusted by 100+ facilities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-gray-900 mb-4">
              {t('products.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('products.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card
                key={product.key}
                className="group hover:shadow-xl transition-shadow duration-300 cursor-pointer border-2 hover:border-blue-200"
              >
                <CardContent className="p-6">
                  <div className="text-5xl mb-4">{product.icon}</div>
                  <h3 className="text-xl text-gray-900 mb-3">
                    {t(`products.${product.key}.title`)}
                  </h3>
                  <p className="text-gray-600">
                    {t(`products.${product.key}.description`)}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              onClick={() => onNavigate('products')}
              variant="outline"
              size="lg"
            >
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-gray-900 mb-4">
              {t('features.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.key}
                  className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl text-gray-900 mb-2">
                    {t(`features.${feature.key}.title`)}
                  </h3>
                  <p className="text-gray-600">
                    {t(`features.${feature.key}.description`)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-6">
            Ready to Transform Your Healthcare Operations?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of healthcare facilities already using SoftKey
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              onClick={() => onNavigate('demo')}
              size="lg"
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              {t('nav.demo')}
            </Button>
            <Button
              onClick={() => onNavigate('contact')}
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              {t('nav.contact')}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
