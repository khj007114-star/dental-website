import React from 'react';
import { TREATMENTS } from '../constants';
import Button from '../components/Button';
import { Activity, Smile, Shield, Check } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
    'Activity': <Activity size={32} />,
    'Smile': <Smile size={32} />,
    'Shield': <Shield size={32} />,
};

const Treatments: React.FC = () => {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-primary text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            과목별 전문의 협진으로<br/>수준 높은 진료를 제공합니다
          </h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            임플란트부터 심미치료까지, 원스톱 토탈 케어
          </p>
        </div>
      </section>

      {/* Treatments List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {TREATMENTS.map((treatment, idx) => (
                <div key={treatment.id} className={`flex flex-col md:flex-row gap-12 items-center ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                    {/* Visual/Icon Area */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <div className="w-64 h-64 rounded-full bg-secondary/30 flex items-center justify-center relative">
                            <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary animate-spin-slow"></div>
                            <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center text-primary shadow-lg z-10">
                                {iconMap[treatment.iconName]}
                            </div>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="w-full md:w-1/2">
                        <div className="flex items-center gap-3 mb-4">
                             <span className="px-3 py-1 bg-accent/10 text-accent text-sm font-bold rounded-full">Part 0{idx + 1}</span>
                             <h2 className="text-3xl font-bold text-gray-900">{treatment.title}</h2>
                        </div>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            {treatment.description}
                        </p>
                        
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 mb-8">
                            <h3 className="font-bold text-gray-900 mb-4">핵심 포인트</h3>
                            <ul className="space-y-3">
                                {treatment.features.map((feature, fIdx) => (
                                    <li key={fIdx} className="flex items-center gap-3 text-gray-700">
                                        <Check size={20} className="text-primary" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <Button variant="outline" onClick={() => window.location.href = '#/contact'}>
                            상담 신청하기
                        </Button>
                    </div>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary/30">
          <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">내 증상에 딱 맞는 치료가 궁금하다면?</h2>
              <Button size="lg" variant="primary" onClick={() => window.location.href = '#/contact'}>
                  1:1 온라인 상담 신청하기
              </Button>
          </div>
      </section>
    </div>
  );
};

export default Treatments;