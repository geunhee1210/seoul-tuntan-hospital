'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SubHero from '@/components/layout/SubHero';

const aboutTabs = [
  { title: '병원소개', href: '/about/introduction' },
  { title: '의료진소개', href: '/about/medical-staff' },
  { title: '오시는길', href: '/about/directions' },
];

const promises = [
  {
    title: '정확한 진단',
    description: '첨단 영상 장비를 활용하여 통증의 원인을 정확하게 찾아냅니다',
    image: '/images/main/메인_정확한진단.png',
  },
  {
    title: '1:1 맞춤 치료',
    description: '환자의 증상과 신체 상태에 최적화된 개인별 맞춤형 치료 프로그램을 설계합니다',
    image: '/images/main/메인_1대1맞춤치료.png',
  },
  {
    title: '재발 방지 케어',
    description: '치료 후에도 체계적인 사후관리를 통해 통증의 재발을 최소화하고 건강한 일상을 유지하도록 돕습니다',
    image: '/images/main/메인_재발방지케어.png',
  },
];

export default function IntroductionPage() {
  const pathname = usePathname();

  return (
    <>
      <SubHero
        title="병원소개"
        subtitle="환자 중심의 진료로 건강한 삶을 만들어갑니다"
        imageSrc="/images/hero/병원소개_히어로.png"
      />

      {/* 탭 메뉴 */}
      <div className="bg-white border-b border-gray-200 sticky top-[72px] z-40">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-1">
            {aboutTabs.map((tab) => (
              <Link
                key={tab.href}
                href={tab.href}
                className={`px-8 py-4 font-medium transition-colors ${
                  pathname === tab.href
                    ? 'text-[#1A2B4C] border-b-2 border-[#1A2B4C]'
                    : 'text-gray-500 hover:text-[#1A2B4C]'
                }`}
              >
                {tab.title}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* 인사말 */}
          <div className="mb-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8" style={{ fontFamily: "'Gowun Batang', serif" }}>
              안녕하세요, 서울튼튼재활의학과입니다.
            </h2>
            <div className="text-lg text-gray-700 leading-loose space-y-4">
              <p>
                저희 병원은 단순히 일시적으로 통증을 해결하는 것에 그치지 않고,
                환자 한 분 한 분의 신체 구조와 생활 패턴을 면밀히 분석하여
                통증의 근본적인 원인을 진찰합니다.
              </p>
              <p>
                특히 반복되는 통증으로 일상생활에 어려움을 겪는 분들을 위해
                재활 및 재생치료에 역량을 집중하고 있습니다.
              </p>
              <p>
                동일한 부위의 통증일지라도 환자마다 그 원인은 매우 다양할 수 있습니다.
                저희는 하나의 치료방법만을 고집하지 않으며,
                환자에게 가장 알맞은 최적의 치료 계획을 수립하여
                통증 없는 일상으로의 복귀를 돕습니다.
              </p>
              <p>
                과잉 진료 없이 기본에 충실한 진료를 통해
                지역 주민 여러분의 건강을 지키는 든든한 주치의가 될 것을 약속드립니다.
              </p>
            </div>
          </div>

          {/* 진료 철학 - 메인과 동일한 이미지 카드 */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              서울튼튼재활의학과의 약속
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {promises.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl overflow-hidden shadow-md"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 진료 시간 */}
          <div className="bg-[#F8F9FA] rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              진료 시간
            </h3>
            <div className="max-w-md mx-auto">
              <div className="space-y-3">
                <div className="flex justify-between py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700">평일</span>
                  <span className="text-gray-900">09:00 - 18:00 (점심시간 13:00~14:00)</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700">토요일</span>
                  <span className="text-gray-900">09:00 - 13:00 (점심시간 없이 진료)</span>
                </div>
                <div className="flex justify-between py-3">
                  <span className="font-medium text-gray-700">일요일·공휴일</span>
                  <span className="text-red-600 font-bold">휴진</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
