import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">O</span>
                </div>
                <h3 className="text-2xl font-bold">열린 입 치과</h3>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">
              과잉 진료 없는 정직한 상담,<br />
              무통 마취 시스템으로 편안한 치료를 약속합니다.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-secondary">바로가기</h4>
            <ul className="space-y-2">
              <li><a href="#/about" className="text-gray-400 hover:text-white transition">병원 소개</a></li>
              <li><a href="#/treatments" className="text-gray-400 hover:text-white transition">진료 안내</a></li>
              <li><a href="#/reviews" className="text-gray-400 hover:text-white transition">치료 사례</a></li>
              <li><a href="#/contact" className="text-gray-400 hover:text-white transition">오시는 길</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-secondary">문의하기</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="mt-1 flex-shrink-0 text-primary" size={18} />
                <span>서울 강남구 강남대로 123<br/>열린빌딩 3층</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="flex-shrink-0 text-primary" size={18} />
                <span>02-123-4567</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-secondary">진료 시간</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex justify-between">
                <span>평일</span>
                <span>09:30 - 18:30</span>
              </li>
              <li className="flex justify-between text-accent font-medium">
                <span>화/목 (야간)</span>
                <span>09:30 - 20:30</span>
              </li>
              <li className="flex justify-between">
                <span>토요일</span>
                <span>09:30 - 14:00</span>
              </li>
              <li className="text-sm mt-2 pt-2 border-t border-gray-800">
                점심시간 13:00 - 14:00<br/>
                일요일 및 공휴일 휴진
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Open Mouth Dental Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;