import React, { useState } from 'react';
import { PhoneCall, Calendar as CalendarIcon } from 'lucide-react';
import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import { Textarea } from '../components/ui/textarea';
import { useLanguage } from '../context/LanguageContext';
import { toast } from 'sonner';

export const SchedulePage: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    date: '',
    time: '',
    timezone: '',
    topic: '',
    notes: '',
  });

  const timeSlots = [
    '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'
  ];

  const timezones = [
    'Asia/Baghdad (GMT+3)',
    'Asia/Erbil (GMT+3)',
    'Europe/London (GMT+0)',
    'Europe/Paris (GMT+1)',
    'America/New_York (GMT-5)',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Call scheduled successfully! You will receive a confirmation email shortly.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      date: '',
      time: '',
      timezone: '',
      topic: '',
      notes: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <PhoneCall className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-5xl text-gray-900 mb-6">
            {t('schedule.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('schedule.subtitle')}
          </p>
        </div>
      </section>

      {/* Schedule Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-2">
            <CardHeader>
              <p className="text-lg text-gray-600">
                {t('schedule.description')}
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">{t('contact.name')}</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">{t('contact.email')}</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">{t('contact.phone')}</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="company">{t('contact.company')}</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="date">{t('schedule.selectDate')}</Label>
                    <Input
                      id="date"
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="time">{t('schedule.selectTime')}</Label>
                    <Select
                      value={formData.time}
                      onValueChange={(value) =>
                        setFormData({ ...formData, time: value })
                      }
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="timezone">{t('schedule.timezone')}</Label>
                    <Select
                      value={formData.timezone}
                      onValueChange={(value) =>
                        setFormData({ ...formData, timezone: value })
                      }
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select timezone" />
                      </SelectTrigger>
                      <SelectContent>
                        {timezones.map((timezone) => (
                          <SelectItem key={timezone} value={timezone}>
                            {timezone}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="topic">{t('schedule.topic')}</Label>
                    <Select
                      value={formData.topic}
                      onValueChange={(value) =>
                        setFormData({ ...formData, topic: value })
                      }
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select topic" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">{t('schedule.generalInquiry')}</SelectItem>
                        <SelectItem value="pricing">{t('schedule.pricing')}</SelectItem>
                        <SelectItem value="technical">{t('schedule.technical')}</SelectItem>
                        <SelectItem value="implementation">{t('schedule.implementation')}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="notes">Additional Notes</Label>
                  <Textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Let us know what you'd like to discuss..."
                    className="mt-1"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  size="lg"
                >
                  <CalendarIcon className="mr-2 h-5 w-5" />
                  {t('schedule.schedule')}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Info Cards */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200">
              <CardContent className="p-6">
                <h3 className="text-xl text-gray-900 mb-3">What to Prepare</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Current system details (if applicable)</li>
                  <li>• Number of users/departments</li>
                  <li>• Specific challenges you're facing</li>
                  <li>• Timeline for implementation</li>
                  <li>• Budget considerations</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200">
              <CardContent className="p-6">
                <h3 className="text-xl text-gray-900 mb-3">Call Duration</h3>
                <p className="text-gray-700 mb-4">
                  Typically 30-45 minutes, allowing time for:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Understanding your requirements</li>
                  <li>• Discussing solution options</li>
                  <li>• Answering your questions</li>
                  <li>• Planning next steps</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Contact Alternative */}
          <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 text-center">
            <h3 className="text-2xl mb-4">Prefer to talk now?</h3>
            <p className="mb-6 opacity-90">
              Our sales team is available during business hours
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                <p className="text-sm opacity-90 mb-1">Erbil Office</p>
                <p className="text-lg">+964 750 123 4567</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                <p className="text-sm opacity-90 mb-1">Baghdad Office</p>
                <p className="text-lg">+964 770 123 4567</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
