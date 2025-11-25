import React from 'react';
import { MAIN_DOCTOR } from '../constants';
import Button from '../components/Button';

const About: React.FC = () => {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            환자분의 치아를 제 가족의 치아처럼 대합니다
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            대표원장 {MAIN_DOCTOR.name}의 진료 철학
          </p>
        </div>
      </section>

      {/* Doctor Profile Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="w-full md:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]">
                    <img 
                        src={MAIN_DOCTOR.imageUrl} 
                        alt={MAIN_DOCTOR.name} 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-8 text-white">
                        <h2 className="text-2xl font-bold">{MAIN_DOCTOR.name} 대표원장</h2>
                        <p className="text-gray-200">{MAIN_DOCTOR.role}</p>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2 space-y-8">
                <div>
                    <h3 className="text-accent font-bold uppercase tracking-wider mb-2">Philosophy</h3>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">자연 치아보다 좋은 임플란트는 없습니다</h2>
                    <p className="text-lg text-gray-700 leading-relaxed border-l-4 border-primary pl-6 italic">
                        "{MAIN_DOCTOR.philosophy}"
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">약력 및 활동</h3>
                    <ul className="space-y-3">
                        {MAIN_DOCTOR.career.map((item, index) => (
                            <li key={index} className="flex items-center gap-3 text-gray-700">
                                <span className="w-2 h-2 bg-primary rounded-full"></span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                
                <div className="pt-4">
                     <Button onClick={() => window.open('https://booking.naver.com', '_blank')}>
                        네이버 예약 바로가기
                     </Button>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interior Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">병원 둘러보기</h2>
                <p className="text-gray-600">편안하고 위생적인 진료 환경을 약속합니다.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group relative overflow-hidden rounded-2xl shadow-lg">
                    <img 
                        src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800" 
                        alt="Waiting Room" 
                        className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="text-white text-center">
                            <h3 className="text-2xl font-bold mb-2">호텔급 대기실</h3>
                            <p>카페 같은 편안한 조명과 은은한 향기</p>
                        </div>
                    </div>
                </div>
                <div className="group relative overflow-hidden rounded-2xl shadow-lg">
                    <img 
                        src="https://images.unsplash.com/photo-1629909615184-74f495363b63?auto=format&fit=crop&q=80&w=800" 
                        alt="Treatment Room" 
                        className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="text-white text-center">
                            <h3 className="text-2xl font-bold mb-2">프라이빗 진료실</h3>
                            <p>프라이버시가 보장되는 독립된 1인 진료실</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default About;