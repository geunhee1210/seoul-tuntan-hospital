'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SubHero from '@/components/layout/SubHero';

interface Disease {
  name: string;
  description: string;
  symptoms: string[];
  treatments: string[];
}

interface DepartmentTemplateProps {
  title: string;
  subtitle: string;
  description: string;
  diseases: Disease[];
  imageSrc?: string;
}

const deptTabs = [
  { title: '척추 질환', href: '/departments/spine' },
  { title: '어깨·팔 통증', href: '/departments/shoulder-arm' },
  { title: '무릎·다리 질환', href: '/departments/knee-leg' },
  { title: '손·발 통증', href: '/departments/hand-foot' },
  { title: '족부 질환', href: '/departments/foot' },
  { title: '두통', href: '/departments/headache' },
];

export default function DepartmentTemplate({
  title,
  subtitle,
  description,
  diseases,
  imageSrc,
}: DepartmentTemplateProps) {
  const pathname = usePathname();
  const sentences = description.split(/(?<=\.)\s*/);

  return (
    <>
      <SubHero title={title} subtitle={subtitle} imageSrc={imageSrc} />

      {/* 탭 메뉴 */}
      <div className="bg-white border-b border-gray-200 sticky top-[72px] z-40 overflow-x-auto">
        <div className="container mx-auto px-4">
          <div className="flex justify-start md:justify-center gap-1 min-w-max">
            {deptTabs.map((tab) => (
              <Link
                key={tab.href}
                href={tab.href}
                className={`px-5 py-4 font-medium text-sm md:text-base whitespace-nowrap transition-colors ${
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

      {/* 개요 */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <div className="text-lg md:text-xl text-gray-700 leading-loose">
            {sentences.map((sentence, idx) => (
              <p key={idx} className="mb-2">{sentence.trim()}</p>
            ))}
          </div>
        </div>
      </section>

      {/* 질환별 상세 정보 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-0">
            {diseases.map((disease, index) => {
              const align = index % 2 === 0 ? 'text-left' : 'text-right';
              const descSentences = disease.description.split(/(?<=\.)\s*/);

              return (
                <div key={index}>
                  {index > 0 && (
                    <div className="flex justify-center my-12">
                      <div className="w-16 border-t border-gray-300"></div>
                    </div>
                  )}

                  <div className={`${align}`}>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {disease.name}
                    </h3>
                    <div className="text-gray-700 mb-8 leading-relaxed">
                      {descSentences.map((s, idx) => (
                        <p key={idx} className="mb-1">{s.trim()}</p>
                      ))}
                    </div>

                    <div className={`grid md:grid-cols-2 gap-8 ${align === 'text-right' ? 'md:direction-rtl' : ''}`}>
                      <div className="text-left">
                        <h4 className="text-lg font-bold text-gray-900 mb-4">
                          주요 증상
                        </h4>
                        <ul className="space-y-2">
                          {disease.symptoms.map((symptom, idx) => (
                            <li key={idx} className="text-gray-700 flex items-start">
                              <span className="mr-2 mt-1 text-[#1A2B4C]">•</span>
                              <span>{symptom}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="text-left">
                        <h4 className="text-lg font-bold text-gray-900 mb-4">
                          치료 방법
                        </h4>
                        <ul className="space-y-2">
                          {disease.treatments.map((treatment, idx) => (
                            <li key={idx} className="text-gray-700 flex items-start">
                              <span className="mr-2 mt-1 text-[#1A2B4C]">•</span>
                              <span>{treatment}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 안내 메시지 */}
          <div className="mt-16 bg-[#F0F4F8] rounded-lg p-8 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              전문 의료진의 정확한 진단이 필요합니다
            </h3>
            <p className="text-gray-700 mb-6">
              위와 같은 증상이 지속되거나 악화될 경우
              <br />
              정확한 진단과 치료를 위해 병원을 방문해 주시기 바랍니다.
            </p>
            <a
              href="tel:043-838-2600"
              className="inline-block bg-[#1A2B4C] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#0C2E86] transition-colors"
            >
              전화 상담: 043-838-2600
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
