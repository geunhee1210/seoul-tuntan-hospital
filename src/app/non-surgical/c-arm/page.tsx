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
  { title: '정확한 위치 파악', desc: '실시간 영상을 통해 병변 부위와 주사 바늘의 위치를 정확히 확인하며 시술할 수 있어 치료 효과가 높습니다.' },
  { title: '안전한 시술', desc: '신경, 혈관 등 중요 구조물을 피해 안전하게 시술할 수 있어 부작용 위험이 크게 감소합니다.' },
  { title: '빠른 시술', desc: '정확한 위치 확인으로 시술 시간이 단축되고, 환자의 불편함이 최소화됩니다.' },
  { title: '높은 치료 효과', desc: '정확한 부위에 약물을 전달하여 치료 효과가 극대화되고 재시술 가능성이 낮아집니다.' },
];

const procedures = [
  { title: '신경차단술', desc: '통증을 전달하는 신경에 약물을 주입하여 통증을 완화합니다.', items: ['경막외 신경차단술', '후관절 신경차단술', '선택적 신경근 차단술'] },
  { title: '관절 주사', desc: '관절 내로 정확하게 약물을 주입하여 염증과 통증을 치료합니다.', items: ['어깨 관절 주사', '무릎 관절 주사', '고관절 주사'] },
  { title: '프롤로치료', desc: '인대나 힘줄의 손상 부위를 정확히 찾아 재생 촉진 약물을 주입합니다.', items: ['척추 인대 강화', '관절 인대 재생', '힘줄 손상 치료'] },
];

export default function CArmPage() {
  const pathname = usePathname();

  return (
    <>
      <SubHero
        title="C-ARM 영상 투시 장비"
        subtitle="정확한 진단과 안전한 시술을 위한 첨단 장비"
        imageSrc="/images/hero/CARM_히어로.png"
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
            <p className="mb-2">C-ARM은 실시간 X-ray 영상 장비를 활용하여 통증의 원인이 되는 신경 부위를 눈으로 직접 확인하며 치료하는 정밀 시술입니다.</p>
            <p className="mb-2">고화질 영상을 통해 1mm의 오차 없이 약물을 주입할 수 있어 신경차단술이나 척추관 협착증 치료 시 높은 안전성과 빠른 통증 완화 효과를 기대할 수 있습니다.</p>
          </div>
        </div>
      </section>

      {/* 장점 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">C-ARM의 장점</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {advantages.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="text-2xl font-bold text-[#1A2B4C] shrink-0 w-8">{index + 1}</div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 주요 시술 */}
      <section className="py-16 bg-[#F8F9FA]">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">C-ARM을 이용한 주요 시술</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {procedures.map((proc, index) => (
              <div key={index} className="bg-white rounded-lg p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-3">{proc.title}</h4>
                <p className="text-gray-700 mb-4 text-sm">{proc.desc}</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  {proc.items.map((item, idx) => (
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
    </>
  );
}
