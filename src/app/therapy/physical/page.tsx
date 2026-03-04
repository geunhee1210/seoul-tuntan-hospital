'use client';

import SubHero from '@/components/layout/SubHero';

interface PhysicalTherapy {
  name: string;
  description: string;
  effects: string[];
}

const physicalTherapies: PhysicalTherapy[] = [
  {
    name: '온열 치료',
    description: '열을 이용하여 혈액순환을 촉진하고 근육을 이완시킵니다',
    effects: ['근육 이완', '혈액순환 개선', '통증 완화', '관절 유연성 향상'],
  },
  {
    name: '냉치료',
    description: '염증과 부종을 감소시키고 통증을 완화합니다',
    effects: ['염증 감소', '부종 완화', '통증 완화', '근육 경련 감소'],
  },
  {
    name: '전기 치료',
    description: '전기 자극으로 근육을 강화하고 통증을 완화합니다',
    effects: ['근육 강화', '통증 완화', '신경 재생 촉진', '혈액순환 개선'],
  },
  {
    name: '초음파 치료',
    description: '초음파를 이용한 심부 조직 치료로 염증을 완화합니다',
    effects: ['심부 조직 치료', '염증 완화', '조직 재생 촉진', '통증 감소'],
  },
  {
    name: '레이저 치료',
    description: '레이저를 이용하여 세포 재생을 촉진하고 통증을 완화합니다',
    effects: ['세포 재생', '통증 완화', '염증 감소', '상처 치유 촉진'],
  },
  {
    name: '견인 치료',
    description: '척추나 관절을 견인하여 압박을 줄이고 공간을 확보합니다',
    effects: ['척추 압박 감소', '디스크 압력 완화', '신경 압박 해소', '통증 완화'],
  },
];

const processSteps = [
  { title: '진료 및 진단', desc: '의사의 정확한 진단', image: '/images/process/치료과정_진료및진단.png' },
  { title: '치료 계획', desc: '맞춤 치료 프로그램 수립', image: '/images/process/치료과정_치료계획.png' },
  { title: '물리치료 시행', desc: '전문 치료사의 치료', image: '/images/process/치료과정_물리치료시행.png' },
  { title: '경과 관찰', desc: '치료 효과 확인 및 조정', image: '/images/process/치료과정_경과관찰.png' },
];

export default function PhysicalTherapyPage() {
  return (
    <>
      <SubHero
        title="물리치료"
        subtitle="최신 장비로 효과적인 통증 치료"
        imageSrc="/images/hero/물리치료_히어로.png"
      />

      {/* 물리치료란? */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <div className="text-lg md:text-xl text-gray-700 leading-loose">
            <p className="mb-2">
              서울튼튼재활의학과의원의 물리치료는 숙련된 물리치료사의 전문적인 케어와 첨단 장비의 조화로 완성됩니다.
            </p>
            <p className="mb-2">
              단순히 통증 부위에 장비를 적용하는 것에 그치지 않고, 환자의 회복 단계와 신체 반응을 실시간으로 체크하며 프로그램을 조정합니다.
            </p>
            <p className="mb-2">
              전기자극치료(ICT/TENS)를 통해 근육의 긴장을 완화하고, 초음파를 이용한 심부열치료로 조직 깊숙한 곳의 치유를 촉진합니다.
            </p>
            <p>
              또한 척추 견인치료를 통해 디스크 내부 압력을 낮추고, 파라핀 치료로 작은 관절의 강직을 부드럽게 풀어주는 등 환자 맞춤형 회복 서비스를 제공합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 물리치료 종류 - 리스트형 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-10 text-center">
            물리치료 종류
          </h3>
          <div className="space-y-0">
            {physicalTherapies.map((therapy, index) => (
              <div key={index} className={`py-8 ${index > 0 ? 'border-t border-gray-200' : ''}`}>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {therapy.name}
                </h4>
                <p className="text-gray-600 mb-4">{therapy.description}</p>
                <div className="flex flex-wrap gap-2">
                  {therapy.effects.map((effect, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-sm text-[#1A2B4C] bg-[#F0F4F8]"
                    >
                      {effect}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 치료 과정 - 이미지 카드형 */}
      <section className="py-16 bg-[#F8F9FA]">
        <div className="container mx-auto px-4 max-w-5xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-10 text-center">
            치료 과정
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="rounded-xl overflow-hidden shadow-md bg-white">
                <div className="h-44 overflow-hidden">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <div className="text-sm font-bold text-[#1A2B4C] mb-1">
                    STEP {index + 1}
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1">{step.title}</h4>
                  <p className="text-sm text-gray-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
