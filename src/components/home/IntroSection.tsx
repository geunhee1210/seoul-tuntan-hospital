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

export default function IntroSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              서울튼튼재활의학과의 약속
            </h2>
            <p className="text-lg text-gray-600">
              과잉 진료 없이 기본에 충실한 진료를 통해 건강을 지킵니다
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {promises.map((item) => (
              <div
                key={item.title}
                className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="h-52 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
