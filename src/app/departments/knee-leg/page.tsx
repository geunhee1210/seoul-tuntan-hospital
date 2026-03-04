import DepartmentTemplate from '@/components/departments/DepartmentTemplate';

const diseases = [
  {
    name: '무릎 관절염',
    description:
      '무릎 관절의 연골이 손상되어 염증과 통증이 발생하는 질환으로, 노화나 과체중, 외상 등이 원인입니다.',
    symptoms: [
      '무릎이 붓고 열감이 느껴짐',
      '계단 오르내릴 때 통증',
      '무릎에서 소리가 남',
      '아침에 뻣뻣한 느낌',
    ],
    treatments: [
      '약물치료 및 관절 주사',
      '물리치료 및 운동치료',
      '체외충격파 치료',
      '체중 관리 및 생활습관 개선',
    ],
  },
  {
    name: '십자인대 손상',
    description:
      '무릎의 전방 또는 후방 십자인대가 파열되거나 손상된 상태로, 주로 운동 중 부상으로 발생합니다.',
    symptoms: [
      '무릎에서 "뚝" 소리와 함께 통증',
      '무릎이 붓고 움직임 제한',
      '무릎에 힘이 빠지는 느낌',
      '불안정한 느낌',
    ],
    treatments: [
      '초기 보존적 치료',
      '물리치료 및 근력 강화',
      '프롤로주사 치료',
      '필요시 수술적 치료 연계',
    ],
  },
  {
    name: '연골판 손상',
    description:
      '무릎 안쪽의 반월상 연골판이 찢어지거나 손상된 상태로, 무릎을 비틀거나 갑작스러운 회전 시 발생합니다.',
    symptoms: [
      '무릎을 구부리거나 펼 때 통증',
      '무릎이 잠기는 느낌',
      '무릎 관절 부위 압통',
      '붓기 및 뻣뻣함',
    ],
    treatments: [
      '약물치료 및 주사치료',
      '물리치료',
      'PRP 주사치료',
      '필요시 관절경 수술 연계',
    ],
  },
];

export default function KneeLegPage() {
  return (
    <DepartmentTemplate
      title="무릎·다리 질환"
      subtitle="활기찬 일상을 위한 무릎 건강"
      description="무릎 관절은 보행의 핵심입니다. 퇴행성 관절염으로 인한 연골 손상을 늦추고, 슬개골 연화증이나 반월상 연골판 손상 등 무릎 주위의 통증 원인을 정확히 파악합니다. 관절 주위 근육을 강화하고 염증을 조절하는 체계적인 케어를 통해 한 걸음 한 걸음이 가벼워지도록 돕습니다."
      imageSrc="/images/hero/무릎·다리질환_히어로.png"
      diseases={diseases}
    />
  );
}
