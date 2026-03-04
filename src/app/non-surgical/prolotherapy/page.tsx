'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SubHero from '@/components/layout/SubHero';

const nonSurgicalTabs = [
  { title: '체외충격파', href: '/non-surgical/shockwave' },
  { title: 'C-ARM', href: '/non-surgical/c-arm' },
  { title: '프롤로주사', href: '/non-surgical/prolotherapy' },
];

const diseases = [
  { category: '척추 질환', items: ['만성 요통 (척추 인대 이완)', '경추 통증 (목 인대 손상)', '척추 불안정증', '척추분리증'] },
  { category: '관절 질환', items: ['어깨 회전근개 부분 파열', '테니스엘보, 골프엘보', '무릎 인대 손상', '발목 만성 염좌'] },
  { category: '힘줄 질환', items: ['족저근막염', '아킬레스건염', '슬개건염', '손목 힘줄염'] },
  { category: '만성 통증', items: ['3개월 이상 지속되는 통증', '재발하는 통증', '약물치료 효과 없는 통증', '수술을 원하지 않는 경우'] },
];

const advantages = [
  { title: '근본 치료', desc: '증상 완화가 아닌 원인 치료' },
  { title: '안전성', desc: '천연 성분으로 부작용 최소' },
  { title: '비수술', desc: '수술 없이 치료 가능' },
  { title: '장기 효과', desc: '조직 재생으로 재발 방지' },
];

export default function ProlotherapyPage() {
  const pathname = usePathname();

  return (
    <>
      <SubHero
        title="프롤로주사 치료"
        subtitle="손상된 인대와 힘줄의 재생 촉진"
        imageSrc="/images/hero/프롤로_히어로.png"
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
            <p className="mb-2">프롤로주사는 약해진 조직을 스스로 튼튼하게 만드는 자가 재생 유도 치료입니다.</p>
            <p className="mb-2">손상된 인대나 힘줄에 인체에 무해한 증식제를 주입하여 우리 몸의 자연 치유 기전을 활성화합니다.</p>
            <p>이는 일시적인 진통 효과를 넘어 조직을 근본적으로 강화하므로, 만성 관절 통증이나 스포츠 손상으로 고생하시는 분들에게 근본적인 해결책이 됩니다.</p>
          </div>
        </div>
      </section>

      {/* 효과적인 질환 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            프롤로주사가 효과적인 질환
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {diseases.map((group, index) => (
              <div key={index}>
                <h4 className="text-lg font-bold text-gray-900 mb-4">{group.category}</h4>
                <ul className="space-y-2 text-gray-700">
                  {group.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-2 text-[#1A2B4C]">•</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 치료 원리 - 넘버링 */}
      <section className="py-16 bg-[#F8F9FA]">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-10 text-center">
            치료 원리
          </h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#1A2B4C] mb-4">1</div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">손상 부위 자극</h4>
              <p className="text-gray-700">고농도 포도당이 약해진 인대나 힘줄을 자극하여 인위적 염증을 유발</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#1A2B4C] mb-4">2</div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">재생 반응 촉진</h4>
              <p className="text-gray-700">인위적 염증이 신체의 자연 치유 과정을 활성화시켜 재생 촉진</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#1A2B4C] mb-4">3</div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">조직 강화</h4>
              <p className="text-gray-700">새로운 콜라겐이 생성되면서 인대와 힘줄이 강화되고 통증 감소</p>
            </div>
          </div>
        </div>
      </section>

      {/* 장점 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            프롤로주사의 장점
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
