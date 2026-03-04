import DepartmentTemplate from '@/components/departments/DepartmentTemplate';

const diseases = [
  {
    name: '오십견 (유착성 관절낭염)',
    description:
      '어깨 관절을 둘러싼 관절낭에 염증이 생겨 굳어지는 질환으로, 통증과 함께 어깨 움직임이 제한됩니다.',
    symptoms: [
      '어깨를 들어올리기 어려움',
      '밤에 통증이 심해짐',
      '옷을 입고 벗기 어려움',
      '팔을 뒤로 돌리기 힘듦',
    ],
    treatments: [
      '관절 내 주사치료',
      '운동치료',
      '체외충격파 치료',
      '물리치료',
    ],
  },
  {
    name: '회전근개파열',
    description:
      '어깨를 움직이는 4개의 근육(회전근개)이 파열되어 통증과 운동 제한이 발생하는 질환입니다.',
    symptoms: [
      '팔을 들어올릴 때 통증',
      '어깨의 힘이 약해짐',
      '밤에 누우면 통증 악화',
      '특정 각도에서 통증 심화',
    ],
    treatments: [
      '약물치료 및 주사치료',
      '물리치료 및 재활운동',
      'PRP 주사치료',
      '필요시 수술적 치료 연계',
    ],
  },
  {
    name: '테니스엘보 (외측상과염)',
    description:
      '팔꿈치 바깥쪽 힘줄에 염증이 생기는 질환으로, 반복적인 손목 사용으로 발생합니다.',
    symptoms: [
      '팔꿈치 바깥쪽 통증',
      '물건을 잡을 때 통증',
      '손목을 돌리거나 비틀 때 아픔',
      '악수할 때 통증',
    ],
    treatments: [
      '약물치료 및 소염제',
      '체외충격파 치료',
      '프롤로주사 치료',
      '물리치료 및 스트레칭',
    ],
  },
];

export default function ShoulderArmPage() {
  return (
    <DepartmentTemplate
      title="어깨·팔 통증"
      subtitle="일상생활의 불편함을 해결합니다"
      description="어깨와 팔의 통증은 일상적인 움직임에 큰 제약을 줍니다. 오십견으로 알려진 유착성 관절낭염부터 회전근개 파열, 테니스 및 골프 엘보, 석회성 건염에 이르기까지 폭넓은 질환을 다룹니다. 굳어진 관절막을 부드럽게 풀고 손상된 힘줄의 재생을 유도하여 어깨의 가동 범위를 정상적으로 회복시키는 데 집중합니다."
      imageSrc="/images/hero/팔어깨통증_히어로.png"
      diseases={diseases}
    />
  );
}
