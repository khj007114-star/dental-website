import React from 'react';
import Button from '../components/Button';
import { MapPin, Phone, Clock, Calendar } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="w-full">
       {/* Header */}
       <section className="bg-secondary/30 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            여러분의 방문을 기다립니다
          </h1>
          <p className="text-xl text-gray-600">
            오시는 길 및 진료 시간 안내
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Left: Info */}
            <div className="w-full lg:w-1/2 space-y-12">
                
                {/* Schedule */}
                <div>
                    <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mb-6">
                        <Clock className="text-primary" /> 진료 시간
                    </h2>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-gray-100">
                        <ul className="space-y-4">
                            <li className="flex justify-between items-center pb-3 border-b border-gray-200">
                                <span className="font-medium text-gray-700">평일</span>
                                <span className="font-bold text-gray-900">09:30 ~ 18:30</span>
                            </li>
                            <li className="flex justify-between items-center pb-3 border-b border-gray-200">
                                <span className="font-medium text-accent">야간 진료 (화/목)</span>
                                <span className="font-bold text-accent">09:30 ~ 20:30</span>
                            </li>
                            <li className="flex justify-between items-center pb-3 border-b border-gray-200">
                                <span className="font-medium text-gray-700">토요일</span>
                                <span className="font-bold text-gray-900">09:30 ~ 14:00</span>
                            </li>
                            <li className="text-sm text-gray-500 pt-2">
                                * 점심시간 13:00 ~ 14:00 (토요일은 점심시간 없음)<br/>
                                * 일요일 및 공휴일 휴진
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Location */}
                <div>
                    <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mb-6">
                        <MapPin className="text-primary" /> 오시는 길
                    </h2>
                    <div className="space-y-4 text-gray-700">
                        <p className="font-bold text-lg">서울 강남구 강남대로 123, 열린빌딩 3층</p>
                        <p className="flex items-center gap-2">
                            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-bold rounded">지하철</span>
                            강남역 3번 출구 도보 1분 거리
                        </p>
                        <p className="flex items-center gap-2">
                            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded">주차</span>
                            건물 내 지하주차장 2시간 무료 지원
                        </p>
                    </div>
                    {/* Map Placeholder */}
                    <div className="mt-6 w-full h-64 bg-gray-200 rounded-xl flex items-center justify-center relative overflow-hidden">
                         <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1000" alt="Map Location" className="w-full h-full object-cover opacity-60" />
                         <div className="absolute inset-0 flex items-center justify-center">
                             <Button variant="primary" size="sm" onClick={() => window.open('https://map.naver.com', '_blank')}>
                                 네이버 지도로 보기
                             </Button>
                         </div>
                    </div>
                </div>

            </div>

            {/* Right: Form */}
            <div className="w-full lg:w-1/2">
                <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 sticky top-24">
                    <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mb-2">
                        <Calendar className="text-accent" /> 간편 상담 신청
                    </h2>
                    <p className="text-gray-500 mb-8">정보를 남겨주시면 친절하게 상담해 드립니다.</p>
                    
                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">이름</label>
                            <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="홍길동" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">연락처</label>
                            <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="010-0000-0000" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">진료 희망 항목</label>
                            <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all">
                                <option>임플란트</option>
                                <option>치아교정</option>
                                <option>충치/신경치료</option>
                                <option>심미보철</option>
                                <option>기타문의</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">상담 내용</label>
                            <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="궁금하신 내용을 적어주세요."></textarea>
                        </div>
                        <Button fullWidth variant="accent" size="lg" type="submit">
                            상담 신청하기
                        </Button>
                        <p className="text-xs text-gray-400 text-center mt-4">
                            보내주신 정보는 상담 목적 외에는 사용되지 않습니다.
                        </p>
                    </form>
                </div>
            </div>

          </div>
        </div>
      </section>
      
      {/* Call Banner */}
      <section className="bg-primary text-white py-12">
          <div className="max-w-7xl mx-auto px-4 text-center">
              <h3 className="text-2xl font-bold mb-4">기다림 없는 진료를 위해 예약은 필수입니다.</h3>
              <a href="tel:02-123-4567" className="inline-flex items-center gap-2 text-3xl font-bold hover:text-secondary transition-colors">
                  <Phone size={32} /> 02-123-4567
              </a>
          </div>
      </section>
    </div>
  );
};

export default Contact;