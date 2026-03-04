import Link from 'next/link';
import MapEmbed from './MapEmbed';
import { MapPin, Clock, Phone } from 'lucide-react';

export default function LocationSection() {
  return (
    <section className="py-20 bg-[#F8F9FA]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">
              오시는 길
            </h2>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* 좌측: 지도 */}
              <div className="h-80 md:h-auto md:min-h-[400px]">
                <MapEmbed />
              </div>

              {/* 우측: 주소, 진료시간, 문의 */}
              <div className="p-8 flex flex-col justify-center space-y-8">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-[#1A2B4C]" />
                    주소
                  </h3>
                  <p className="text-gray-700 ml-7">
                    충청북도 증평군 증평읍 중앙로 184-1
                    <br />
                    Y&P빌딩 2, 3층
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-[#1A2B4C]" />
                    진료시간
                  </h3>
                  <div className="space-y-2 text-gray-700 ml-7">
                    <div className="flex justify-between">
                      <span>평일</span>
                      <span className="font-medium">09:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>점심시간</span>
                      <span className="font-medium">13:00 - 14:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>토요일</span>
                      <span className="font-medium">09:00 - 13:00</span>
                    </div>
                    <p className="text-xs text-gray-500">(토요일 점심시간 없이 진료)</p>
                    <div className="pt-2 border-t border-gray-200">
                      <span className="text-red-600 font-medium">일요일·공휴일 휴진</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Phone className="w-5 h-5 text-[#1A2B4C]" />
                    문의
                  </h3>
                  <a
                    href="tel:043-838-2600"
                    className="text-[#1A2B4C] font-bold text-lg ml-7 hover:underline"
                  >
                    043-838-2600
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/about/directions"
              className="inline-block bg-[#1A2B4C] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#0C2E86] transition-colors"
            >
              상세 위치 안내 보기
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
