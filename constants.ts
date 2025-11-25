import { NavItem, Review, Treatment, DoctorProfile, StatItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: '병원 소개', path: '/about' },
  { label: '진료 안내', path: '/treatments' },
  { label: '치료 사례 및 후기', path: '/reviews' },
  { label: '예약 및 오시는 길', path: '/contact' },
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    name: '김OO',
    age: '30대',
    job: '직장인',
    content: '치과 공포증이 심해서 10년 동안 치과를 못 갔는데, 원장님이 정말 아이 달래듯이 설명해 주시고 하나도 안 아프게 해주셨어요. 이제 여기만 다닙니다.',
    rating: 5,
    type: 'Best'
  },
  {
    id: 2,
    name: '이OO',
    age: '50대',
    job: '자영업',
    content: '다른 곳에서는 임플란트 3개 하라고 했는데, 여기서는 1개만 하고 나머지는 치료해서 쓰자고 하셨어요. 양심적인 병원입니다.',
    rating: 5,
    type: 'Best'
  },
  {
    id: 3,
    name: '박OO',
    age: '20대',
    job: '학생',
    content: '겁이 많아서 손을 떨었는데 간호사 선생님이 인형 쥐어주시고 원장님이 계속 안심시켜 주셔서 편안하게 끝났습니다. 마취 주사 놓는 줄도 몰랐어요.',
    rating: 5,
    type: 'PainFree'
  }
];

export const TREATMENTS: Treatment[] = [
  {
    id: 'implant',
    title: '네비게이션 임플란트',
    description: '3D 컴퓨터 모의수술을 통해 최적의 식립 위치를 파악하고 최소 절개로 시술합니다.',
    features: ['3D 모의수술', '최소 절개/통증 최소화', '정품 오스템/덴티움 사용'],
    iconName: 'Activity'
  },
  {
    id: 'aesthetic',
    title: '심미 보철/라미네이트',
    description: '하루 만에 완성되는 원데이 라미네이트로 자연스러운 미소를 찾아드립니다.',
    features: ['원데이 시술', '최소 치아 삭제', '퍼스널 디자인'],
    iconName: 'Smile'
  },
  {
    id: 'general',
    title: '자연치아 살리기',
    description: '미세현미경을 이용한 정밀 신경치료로 발치 전 치아를 최대한 보존합니다.',
    features: ['미세현미경 사용', '정밀 신경치료', '과잉진료 배제'],
    iconName: 'Shield'
  }
];

export const MAIN_DOCTOR: DoctorProfile = {
  name: '이명수',
  role: '대표원장 / 통합치의학과 전문의',
  philosophy: "저는 '발치'보다 '보존'을 먼저 생각합니다. 자연 치아만큼 좋은 임플란트는 없습니다. 살릴 수 있는 치아는 끝까지 살리는 것이 저의 자부심입니다.",
  career: [
    '보건복지부 인증 통합치의학과 전문의',
    '서울대학교 치과대학 졸업',
    '대한치과보철학회 정회원',
    '대한구강악안면임플란트학회 정회원',
    '전) 서울대치과병원 임상강사'
  ],
  imageUrl: 'https://picsum.photos/400/500'
};

export const STATS: StatItem[] = [
  { label: '누적 임플란트', value: '5,000+', description: '건 이상의 성공적인 식립' },
  { label: '환자 만족도', value: '4.9', description: '5.0 만점 기준' },
  { label: '소개 환자 비율', value: '85%', description: '지인에게 추천하는 병원' },
];