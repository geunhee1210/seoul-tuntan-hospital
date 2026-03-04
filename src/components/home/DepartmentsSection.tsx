import Link from 'next/link';
import { Bone, Dumbbell, Footprints, Hand, Activity, Brain } from 'lucide-react';
import { ReactNode } from 'react';

interface Department {
  title: string;
  description: string;
  icon: ReactNode;
  href: string;
}

const departments: Department[] = [
  {
    title: '척추 질환',
    description: '허리디스크, 척추관협착증, 척추측만증 등',
    icon: <Bone className="w-12 h-12" />,
    href: '/departments/spine',
  },
  {
    title: '어깨·팔 통증',
    description: '오십견, 회전근개파열, 테니스엘보 등',
    icon: <Dumbbell className="w-12 h-12" />,
    href: '/departments/shoulder-arm',
  },
  {
    title: '무릎·다리 질환',
    description: '무릎관절염, 인대손상, 연골손상 등',
    icon: <Footprints className="w-12 h-12" />,
    href: '/departments/knee-leg',
  },
  {
    title: '손·발 통증',
    description: '손목터널증후군, 방아쇠수지 등',
    icon: <Hand className="w-12 h-12" />,
    href: '/departments/hand-foot',
  },
  {
    title: '족부 질환',
    description: '족저근막염, 무지외반증, 아킬레스건염 등',
    icon: <Activity className="w-12 h-12" />,
    href: '/departments/foot',
  },
  {
    title: '두통',
    description: '긴장성 두통, 편두통, 경추성 두통 등',
    icon: <Brain className="w-12 h-12" />,
    href: '/departments/headache',
  },
];

export default function DepartmentsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            주요 진료과목
          </h2>
          <p className="text-lg text-gray-600">
            전문적이고 체계적인 진료로 환자분들의 건강을 책임집니다
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {departments.map((dept, index) => (
            <Link
              key={index}
              href={dept.href}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1 group"
            >
              <div className="mb-4 text-[#1A2B4C] group-hover:scale-110 transition-transform">
                {dept.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#1A2B4C] transition-colors">
                {dept.title}
              </h3>
              <p className="text-gray-600">{dept.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
