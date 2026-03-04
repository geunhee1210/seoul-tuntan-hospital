import Link from 'next/link';

export default function HeroSection() {
  return (
    <section
      className="relative h-[600px] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero/메인_히어로.png')" }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          통증의 끝,
          <br />
          근본적인 원인 해결에서 시작됩니다.
        </h1>
        <p className="text-lg md:text-xl mb-10 text-gray-200">
          오직 당신만을 위한 1:1 맞춤형 재활 솔루션
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/about/introduction"
            className="bg-white text-[#1A2B4C] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            병원 소개
          </Link>
          <Link
            href="/about/directions"
            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#1A2B4C] transition-colors"
          >
            오시는 길
          </Link>
        </div>
      </div>
    </section>
  );
}
