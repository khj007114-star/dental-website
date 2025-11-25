import React from 'react';
import { REVIEWS } from '../constants';
import { Star, Quote } from 'lucide-react';

const Reviews: React.FC = () => {
  return (
    <div className="w-full">
       {/* Header */}
       <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            결과로 증명하는 열린 입 치과,<br/>환자분들의 미소가 증거입니다
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            보정 없는 리얼 전후 사진과 자필 후기
          </p>
        </div>
      </section>

      {/* Before & After Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
                증례별 Before & After
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Case 1 */}
                <div className="group cursor-pointer">
                    <div className="relative h-64 bg-gray-200 rounded-xl overflow-hidden mb-4">
                        <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=600" alt="Before" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                        <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1 text-sm rounded">Before</div>
                    </div>
                    <div className="relative h-64 bg-gray-200 rounded-xl overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600" alt="After" className="w-full h-full object-cover" />
                        <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 text-sm rounded">After</div>
                    </div>
                    <div className="mt-4 text-center">
                        <h3 className="font-bold text-lg">[임플란트] 앞니 심미 보철</h3>
                        <p className="text-sm text-gray-500">50대 남성 · 치료기간 3개월</p>
                    </div>
                </div>

                 {/* Case 2 */}
                 <div className="group cursor-pointer">
                    <div className="relative h-64 bg-gray-200 rounded-xl overflow-hidden mb-4">
                        <img src="https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&q=80&w=600" alt="Before" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                        <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1 text-sm rounded">Before</div>
                    </div>
                    <div className="relative h-64 bg-gray-200 rounded-xl overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=600" alt="After" className="w-full h-full object-cover" />
                        <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 text-sm rounded">After</div>
                    </div>
                    <div className="mt-4 text-center">
                        <h3 className="font-bold text-lg">[치아교정] 덧니 부분 교정</h3>
                        <p className="text-sm text-gray-500">20대 대학생 · 치료기간 6개월</p>
                    </div>
                </div>

                {/* Case 3 */}
                <div className="group cursor-pointer">
                    <div className="relative h-64 bg-gray-200 rounded-xl overflow-hidden mb-4">
                        <img src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=600" alt="Before" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                        <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1 text-sm rounded">Before</div>
                    </div>
                    <div className="relative h-64 bg-gray-200 rounded-xl overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1590611936760-eeb9bc598548?auto=format&fit=crop&q=80&w=600" alt="After" className="w-full h-full object-cover" />
                        <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 text-sm rounded">After</div>
                    </div>
                    <div className="mt-4 text-center">
                        <h3 className="font-bold text-lg">[미백] 전문가 치아 미백</h3>
                        <p className="text-sm text-gray-500">30대 여성 · 3회 시술</p>
                    </div>
                </div>
            </div>
            <p className="text-center text-xs text-gray-400 mt-8">* 의료법 준수를 위해 더 많은 전후 사진은 내원 상담 시 확인 가능합니다.</p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
                환자분들의 생생한 찐 후기
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {REVIEWS.map((review) => (
                    <div key={review.id} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="text-accent mb-4">
                            <Quote size={32} />
                        </div>
                        <p className="text-gray-700 leading-relaxed mb-6 h-32 overflow-hidden text-ellipsis">
                            {review.content}
                        </p>
                        <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                            <div>
                                <div className="font-bold text-gray-900">{review.name}님</div>
                                <div className="text-xs text-gray-500">{review.age} · {review.type === 'Best' ? '임플란트' : '충치치료'}</div>
                            </div>
                            <div className="flex gap-1 text-amber-400">
                                {[...Array(review.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;