'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SubHero from '@/components/layout/SubHero';

const aboutTabs = [
  { title: '병원소개', href: '/about/introduction' },
  { title: '의료진소개', href: '/about/medical-staff' },
  { title: '오시는길', href: '/about/directions' },
];

export default function MedicalStaffPage() {
  const pathname = usePathname();

  return (
    <>
      <SubHero
        title="의료진 소개"
        subtitle="풍부한 경험과 전문성을 갖춘 의료진이 함께합니다"
        imageSrc="/images/hero/의료진소개_히어로.png"
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
        <div className="container mx-auto px-4 max-w-5xl">
          {/* 고윤담 대표원장 */}
          <div className="mb-16">
            <div className="md:flex gap-12 items-start">
              <div className="md:w-2/5 mb-8 md:mb-0">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="/images/서울튼튼_고윤담원장님.jpg"
                    alt="고윤담 대표원장"
                    className="w-full object-cover"
                  />
                </div>
              </div>

              <div className="md:w-3/5">
                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-gray-900 mb-1">
                    고윤담 <span className="text-2xl font-medium text-gray-600">대표원장</span>
                  </h3>
                  <p className="text-lg text-[#1A2B4C] font-medium">
                    재활의학과 전문의 · 스포츠의학 전문의
                  </p>
                  <p className="text-[#0C2E86] font-medium mt-1">
                    서울성모병원 재활의학과 외래교수
                  </p>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3 border-b border-gray-200 pb-2">
                      경력
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>가톨릭중앙의료원 수련의</li>
                      <li>서울성모병원 재활의학과 전공의</li>
                      <li>서울성모병원 재활의학과 전문의</li>
                      <li>(전) 나은미래신경외과 원장</li>
                      <li>(전) 메트로신경외과 원장</li>
                      <li>(전) 미래의료재단 원장</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3 border-b border-gray-200 pb-2">
                      학회
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>대한임상통증학회 정회원</li>
                      <li>CYRIAX 정형의학회 정회원</li>
                      <li>대한충격파치료학회 정회원</li>
                      <li>대한근전도·전기진단의학회 정회원</li>
                      <li>대한신경근골격초음파학회 정회원</li>
                      <li>대한발의학회 정회원</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
