'use client';

import { useState } from 'react';

interface NonCoveredItem {
  category: string;
  items: {
    name: string;
    price: string;
  }[];
}

const nonCoveredItems: NonCoveredItem[] = [
  {
    category: '주사치료',
    items: [
      { name: '프롤로주사', price: '100,000원' },
      { name: '연골주사', price: '150,000원' },
      { name: '신경차단술', price: '80,000원' },
    ],
  },
  {
    category: '물리치료',
    items: [
      { name: '체외충격파', price: '50,000원' },
    ],
  },
  {
    category: '검사',
    items: [
      { name: 'C-ARM 투시검사', price: '30,000원' },
      { name: '초음파 검사', price: '40,000원' },
    ],
  },
];

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <footer className="bg-[#1A2B4C] text-white py-8">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* 1단 구성 */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="flex flex-col gap-2 text-sm text-gray-300">
              <span className="text-base font-bold text-white">서울튼튼재활의학과의원</span>
              <span>대표자: 고윤담</span>
              <span>충청북도 증평군 증평읍 중앙로 184-1 Y&P빌딩 2, 3층</span>
              <span>대표번호: 043-838-2600</span>
            </div>
            <div className="flex-shrink-0">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-white/10 hover:bg-white/20 text-white px-6 py-2.5 text-sm font-medium transition-colors border border-white/20"
              >
                비급여진료비 안내
              </button>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-white/10 text-center text-xs text-gray-400">
            <p>&copy; 2026 서울튼튼재활의학과의원. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* 비급여진료비 모달 */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">
                비급여 진료비 안내
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                &times;
              </button>
            </div>

            <div className="p-6">
              <p className="text-sm text-gray-600 mb-6">
                ※ 아래 금액은 참고용이며, 실제 진료 시 상담을 통해 확정됩니다.
              </p>

              {nonCoveredItems.map((category, index) => (
                <div key={index} className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 pb-2 border-b border-gray-200">
                    {category.category}
                  </h3>
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left py-2 px-4 text-sm font-medium text-gray-700">
                          항목
                        </th>
                        <th className="text-right py-2 px-4 text-sm font-medium text-gray-700">
                          금액
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {category.items.map((item, itemIndex) => (
                        <tr
                          key={itemIndex}
                          className="border-b border-gray-100"
                        >
                          <td className="py-3 px-4 text-gray-800">
                            {item.name}
                          </td>
                          <td className="py-3 px-4 text-right text-gray-900 font-medium">
                            {item.price}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}

              <div className="mt-6 p-4 bg-[#F0F4F8] rounded-lg">
                <p className="text-sm text-[#1A2B4C]">
                  <strong>안내사항:</strong> 비급여 항목은 건강보험이 적용되지
                  않으며, 환자가 전액 본인 부담합니다. 자세한 상담은 병원으로
                  문의해주시기 바랍니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
