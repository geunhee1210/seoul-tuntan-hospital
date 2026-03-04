import DepartmentTemplate from '@/components/departments/DepartmentTemplate';

const diseases = [
  {
    name: '족저근막염',
    description:
      '발바닥의 족저근막에 염증이 생겨 발뒤꿈치에 통증이 발생하는 질환으로, 장시간 서 있거나 과도한 운동이 원인입니다.',
    symptoms: [
      '아침 첫 발을 디딜 때 통증',
      '발뒤꿈치 통증',
      '장시간 서 있으면 통증 악화',
      '발바닥 압통',
    ],
    treatments: [
      '체외충격파 치료',
      '약물치료 및 주사치료',
      '물리치료 및 스트레칭',
      '맞춤 깔창 처방',
    ],
  },
  {
    name: '무지외반증',
    description:
      '엄지발가락이 바깥쪽으로 휘어지고 돌출되는 질환으로, 하이힐이나 좁은 신발 착용이 주요 원인입니다.',
    symptoms: [
      '엄지발가락 관절 돌출',
      '신발 착용 시 통증',
      '발가락 변형',
      '걷기 불편',
    ],
    treatments: [
      '교정 보조기 착용',
      '물리치료',
      '약물치료',
      '필요시 수술적 치료 연계',
    ],
  },
  {
    name: '아킬레스건염',
    description:
      '발뒤꿈치 뒤쪽의 아킬레스건에 염증이 생기는 질환으로, 과도한 운동이나 갑작스러운 활동 증가로 발생합니다.',
    symptoms: [
      '발뒤꿈치 뒤쪽 통증',
      '아침에 뻣뻣함',
      '운동 시 통증 악화',
      '붓기 및 압통',
    ],
    treatments: [
      '약물치료 및 주사치료',
      '체외충격파 치료',
      '물리치료',
      '스트레칭 및 근력 강화',
    ],
  },
  {
    name: '발목 염좌',
    description:
      '발목을 삐끗하여 인대가 늘어나거나 찢어지는 부상으로, 일상생활이나 운동 중 흔히 발생합니다.',
    symptoms: [
      '발목 통증 및 부종',
      '멍이 듦',
      '발목 불안정',
      '체중 지지 어려움',
    ],
    treatments: [
      '초기 냉찜질 및 고정',
      '약물치료',
      '물리치료 및 재활운동',
      '보조기 착용',
    ],
  },
];

export default function FootPage() {
  return (
    <DepartmentTemplate
      title="족부 질환"
      subtitle="건강한 발로 편안한 걸음을"
      description="족저근막염, 아킬레스 건염 등 족부 질환까지 꼼꼼하게 진단합니다. 발은 우리 몸의 토대로, 작은 통증이 만성적인 불편으로 이어지지 않도록 조기에 근본 원인을 해결합니다."
      imageSrc="/images/hero/체외충격파_히어로.png"
      diseases={diseases}
    />
  );
}
