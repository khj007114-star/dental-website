import React from 'react';
import { ArrowRight, Shield, Monitor, Clock, CheckCircle } from 'lucide-react';
import Button from '../components/Button';
import { STATS, REVIEWS } from '../constants';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const Home: React.FC = () => {
  const chartData = [
    { name: '매우 만족', value: 85 },
    { name: '만족', value: 12 },
    { name: '보통', value: 3 },
  ];
  const COLORS = ['#008080', '#FF7F50', '#F5F5DC'];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1600" 
            alt="Dental Clinic Interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              입을 여는 것이 두렵지 않도록,<br />
              <span className="text-primary">마음까지 여는 진료</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              과잉 진료 없는 정직한 상담, 무통 마취 시스템으로<br className="hidden md:block"/> 
              통증 걱정 없는 편안한 치료를 약속합니다.<br />
              열린 입 치과에서 당신의 건강한 미소를 되찾으세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="accent" onClick={() => window.location.href = '#/contact'}>
                무료 상담 예약하기 <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => window.location.href = '#/about'}>
                의료진 소개 보기
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">치과, 왜 가기 망설여지시나요?</h2>
            <p className="text-gray-600">환자분들이 겪는 고민에 대해 우리는 답을 준비했습니다.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-secondary/20 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300">
              <div className="text-accent mb-4"><Monitor size={48} /></div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">투명한 모니터링</h3>
              <p className="text-gray-600 mb-4">"치료 비용이 불투명할까 봐 걱정돼요."</p>
              <hr className="border-gray-200 mb-4" />
              <p className="text-primary font-medium">진료 전 과정을 눈앞의 모니터로 모두 공개하여 믿을 수 있습니다.</p>
            </div>

            <div className="bg-secondary/20 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300">
              <div className="text-accent mb-4"><Shield size={48} /></div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">3단계 무통 시스템</h3>
              <p className="text-gray-600 mb-4">"마취 주사가 너무 아파서 무서워요."</p>
              <hr className="border-gray-200 mb-4" />
              <p className="text-primary font-medium">도포 마취부터 디지털 무통 마취기까지, 통증을 최소화합니다.</p>
            </div>

            <div className="bg-secondary/20 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300">
              <div className="text-accent mb-4"><Clock size={48} /></div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">야간/주말 진료</h3>
              <p className="text-gray-600 mb-4">"평일에 시간 내기가 어려워요."</p>
              <hr className="border-gray-200 mb-4" />
              <p className="text-primary font-medium">화/목 야간 진료 및 토요일 진료로 언제든 편하게 오세요.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center p-6">
               <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md mb-6 text-primary">
                 <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
               </div>
               <h3 className="text-2xl font-bold mb-3">디지털 정밀 진단</h3>
               <p className="text-gray-600 leading-relaxed">대학 병원급 3D CT와 구강 스캐너로 0.1mm의 오차도 없는 정확한 치료 계획을 수립합니다.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
               <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md mb-6 text-primary">
                 <Shield size={32} />
               </div>
               <h3 className="text-2xl font-bold mb-3">1인 1기구 철저 멸균</h3>
               <p className="text-gray-600 leading-relaxed">10단계 멸균 소독 시스템을 거친 기구만을 사용하며, 1회용 기구는 사용 후 즉시 폐기 원칙을 준수합니다.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
               <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md mb-6 text-primary">
                 <CheckCircle size={32} />
               </div>
               <h3 className="text-2xl font-bold mb-3">보증서 발급 제도</h3>
               <p className="text-gray-600 leading-relaxed">임플란트 및 보철 치료 후 정품 인증서와 책임 보증서를 발급하여 치료 후 사후 관리까지 끝까지 책임집니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Stats & Chart */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-900">
                수치로 증명하는 신뢰,<br/>
                <span className="text-primary">99% 환자 만족도</span>
              </h2>
              
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-64">
                <h4 className="text-sm font-semibold text-gray-500 mb-2 text-center">환자 만족도 조사</h4>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={chartData}
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend verticalAlign="bottom" height={36}/>
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {STATS.map((stat, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-xl text-center shadow-sm">
                        <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.value}</div>
                        <div className="text-sm font-medium text-gray-900">{stat.label}</div>
                    </div>
                ))}
              </div>
            </div>

            {/* Testimonials Review Card */}
            <div className="relative">
                <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-accent/20 rounded-full z-0"></div>
                <div className="absolute bottom-0 left-0 -ml-4 -mb-4 w-32 h-32 bg-primary/20 rounded-full z-0"></div>
                
                <div className="relative z-10 bg-white p-8 md:p-10 rounded-2xl shadow-xl">
                    <div className="flex gap-1 text-amber-400 mb-4">
                        {[1,2,3,4,5].map(i => <span key={i}>★</span>)}
                    </div>
                    <blockquote className="text-xl text-gray-700 italic leading-relaxed mb-6">
                        "{REVIEWS[0].content}"
                    </blockquote>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-bold">
                            {REVIEWS[0].name.charAt(0)}
                        </div>
                        <div>
                            <div className="font-bold text-gray-900">{REVIEWS[0].name}</div>
                            <div className="text-sm text-gray-500">{REVIEWS[0].age} · {REVIEWS[0].job}</div>
                        </div>
                    </div>
                </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;