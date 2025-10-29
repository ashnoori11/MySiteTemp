import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { useLanguage } from '../context/LanguageContext';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface ProductsPageProps {
  onNavigate: (page: string) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

  const products = [
    {
      key: 'hic',
      features: [
        'Patient management system',
        'Electronic health records',
        'Appointment scheduling',
        'Pharmacy integration',
        'Billing and insurance',
        'Reporting and analytics',
      ],
      image: 'https://images.unsplash.com/photo-1758691462848-ba1e929da259?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3NwaXRhbCUyMGhlYWx0aGNhcmUlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MTc1ODY4MXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      key: 'clinical',
      features: [
        'Clinical workflows',
        'Care coordination',
        'Treatment plans',
        'Progress notes',
        'Clinical decision support',
        'Multi-provider collaboration',
      ],
      image: 'https://images.unsplash.com/photo-1666886573421-d19e546cfc4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcHJvZmVzc2lvbmFscyUyMGRvY3RvcnxlbnwxfHx8fDE3NjE3NTg2ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      key: 'lab',
      features: [
        'Test order management',
        'Sample tracking',
        'Result reporting',
        'Quality control',
        'Equipment integration',
        'LIMS compliance',
      ],
      image: 'https://images.unsplash.com/photo-1599727277757-3f54e54ea618?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwbGFib3JhdG9yeSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYxNzAyMzIzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      key: 'invoicing',
      features: [
        'Automated billing',
        'Insurance claims',
        'Payment processing',
        'Financial reporting',
        'Revenue cycle management',
        'Multi-currency support',
      ],
      image: 'https://images.unsplash.com/photo-1664902276790-90624a60ff47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMG1hbmFnZW1lbnQlMjBzeXN0ZW18ZW58MXx8fHwxNzYxNzU4NjgyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      key: 'iot',
      features: [
        'Connected devices',
        'Real-time monitoring',
        'Automated alerts',
        'Equipment management',
        'Predictive maintenance',
        'Data analytics',
      ],
      image: 'https://images.unsplash.com/photo-1758691462668-046fd85ceac9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwZGlnaXRhbCUyMGlubm92YXRpb258ZW58MXx8fHwxNzYxNzU4NjgyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      key: 'sdk',
      features: [
        'REST APIs',
        'Webhooks',
        'Custom integrations',
        'Developer documentation',
        'Sandbox environment',
        'Technical support',
      ],
      image: 'https://images.unsplash.com/photo-1758691462848-ba1e929da259?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3NwaXRhbCUyMGhlYWx0aGNhcmUlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MTc1ODY4MXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl text-gray-900 mb-6">
            {t('products.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('products.subtitle')}
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {products.map((product, index) => (
              <div
                key={product.key}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <Card className="border-2 border-blue-100">
                    <CardHeader>
                      <h2 className="text-3xl text-gray-900 mb-4">
                        {t(`products.${product.key}.title`)}
                      </h2>
                      <p className="text-lg text-gray-600">
                        {t(`products.${product.key}.description`)}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {product.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Check className="w-4 h-4 text-blue-600" />
                            </div>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6">
                        <Button
                          onClick={() => onNavigate('demo')}
                          className="bg-blue-600 hover:bg-blue-700"
                        >
                          Request Demo
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className={`rounded-2xl overflow-hidden shadow-xl ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <ImageWithFallback
                    src={product.image}
                    alt={t(`products.${product.key}.title`)}
                    className="w-full h-[400px] object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-6">
            National Card Payment Integration
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Seamlessly integrate with Iraq's national card payment system for secure and efficient transactions
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              onClick={() => onNavigate('demo')}
              size="lg"
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              Learn More
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
