'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SubHero from '@/components/layout/SubHero';

const nonSurgicalTabs = [
  { title: '체외충격파', href: '/non-surgical/shockwave' },
  { title: 'C-ARM', href: '/non-surgical/c-arm' },
  { title: '프롤로주사', href: '/non-surgical/prolotherapy' },
];

const advantages = [
  { title: '비수술 치료', desc: '수술 없이 치료 가능' },
  { title: '빠른 효과', desc: '즉각적인 통증 완화' },
  { title: '무마취', desc: '마취 필요 없음' },
  { title: '일상 복귀', desc: '당일 일상생활 가능' },
];

export default function ShockwavePage() {
  const pathname = usePathname();

  return (
    <>
      <SubHero
        title="체외충격파 치료"
        subtitle="비수술적 통증 치료의 혁신"
        imageSrc="/images/hero/체외충격파_히어로.png"
      />

      {/* 탭 메뉴 */}
      <div className="bg-white border-b border-gray-200 sticky top-[72px] z-40">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-1">
            {nonSurgicalTabs.map((tab) => (
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

      {/* 설명 */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <div className="text-lg md:text-xl text-gray-700 leading-loose">
            <p className="mb-2">체외충격파 치료는 수술 없이 만성 통증의 고리를 끊는 강력한 재생 에너지 치료입니다.</p>
            <p className="mb-2">통증 부위에 고에너지 충격파를 정밀하게 가하여 혈관 재형성을 돕고, 손상된 힘줄과 인대의 자가 재생을 유도합니다.</p>
            <p className="mb-2">시술 시간이 짧고 입원이 필요 없으며, 반복적인 시술에도 부작용이 거의 없어 족저근막염이나 석회성 건염 환자분들에게 매우 효과적입니다.</p>
          </div>
        </div>
      </section>

      {/* 효과적인 질환 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            체외충격파 치료가 효과적인 질환
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">근골격계 질환</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start"><span className="mr-2 text-[#1A2B4C]">•</span>족저근막염 (발뒤꿈치 통증)</li>
                <li className="flex items-start"><span className="mr-2 text-[#1A2B4C]">•</span>아킬레스건염</li>
                <li className="flex items-start"><span className="mr-2 text-[#1A2B4C]">•</span>테니스엘보, 골프엘보</li>
                <li className="flex items-start"><span className="mr-2 text-[#1A2B4C]">•</span>석회화 건염 (어깨 석회)</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">만성 통증</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start"><span className="mr-2 text-[#1A2B4C]">•</span>만성 어깨 통증</li>
                <li className="flex items-start"><span className="mr-2 text-[#1A2B4C]">•</span>무릎 통증 (슬개건염)</li>
                <li className="flex items-start"><span className="mr-2 text-[#1A2B4C]">•</span>근막통증증후군</li>
                <li className="flex items-start"><span className="mr-2 text-[#1A2B4C]">•</span>만성 허리 통증</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 장점 - 넘버링 */}
      <section className="py-16 bg-[#F8F9FA]">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            체외충격파 치료의 장점
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {advantages.map((item, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-3xl font-bold text-[#1A2B4C] mb-3">{index + 1}</div>
                <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
