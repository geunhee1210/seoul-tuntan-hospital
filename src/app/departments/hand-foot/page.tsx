import DepartmentTemplate from '@/components/departments/DepartmentTemplate';

const diseases = [
  {
    name: '손목터널증후군',
    description:
      '손목의 정중신경이 압박되어 손 저림과 통증이 발생하는 질환으로, 컴퓨터 사용이나 반복적인 손목 동작으로 발생합니다.',
    symptoms: [
      '엄지, 검지, 중지의 저림',
      '밤에 증상이 심해짐',
      '손의 감각 둔화',
      '물건을 자주 떨어뜨림',
    ],
    treatments: [
      '약물치료 및 소염제',
      '손목 보호대 착용',
      '신경차단 주사',
      '물리치료',
    ],
  },
  {
    name: '방아쇠수지',
    description:
      '손가락 힘줄에 염증이 생겨 손가락이 굽혀진 채 펴지지 않거나 튕기는 증상이 나타나는 질환입니다.',
    symptoms: [
      '손가락을 펼 때 "딱" 소리',
      '아침에 손가락이 뻣뻣함',
      '손바닥 쪽 통증',
      '손가락 움직임 제한',
    ],
    treatments: [
      '약물치료 및 주사치료',
      '손가락 스트레칭',
      '물리치료',
      '필요시 간단한 시술',
    ],
  },
  {
    name: '손가락 관절염',
    description:
      '손가락 관절의 연골이 닳아 통증과 변형이 발생하는 질환으로, 노화나 과사용이 원인입니다.',
    symptoms: [
      '손가락 관절 통증 및 부종',
      '손가락 변형',
      '아침에 뻣뻣함',
      '물건 잡기 어려움',
    ],
    treatments: [
      '약물치료 및 관절 주사',
      '물리치료',
      '손 운동 및 재활',
      '보조기 착용',
    ],
  },
];

export default function HandFootPage() {
  return (
    <DepartmentTemplate
      title="손·발 통증"
      subtitle="섬세한 치료로 일상의 편안함을 되찾습니다"
      description="손과 발은 우리 몸에서 가장 많이 쓰이는 부위인 만큼 세밀한 진료가 필요합니다. 손목터널증후군이나 방아쇠수지와 같은 수부 질환을 꼼꼼하게 진단합니다. 작은 통증이 만성적인 불편으로 이어지지 않도록 조기에 근본 원인을 해결합니다."
      imageSrc="/images/hero/팔어깨통증_히어로.png"
      diseases={diseases}
    />
  );
}
