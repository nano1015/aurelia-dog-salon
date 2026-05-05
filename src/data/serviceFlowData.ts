export interface ServiceStep {
  step: number;
  titleEn: string;
  titleJp: string;
  description: string;
  icon: string;
}

export const serviceFlowData: ServiceStep[] = [
  {
    step: 1,
    titleEn: "RECEPTION",
    titleJp: "ご来店・受付",
    description: "ご来店後、カルテにご記入いただきます",
    icon: "reception"
  },
  {
    step: 2,
    titleEn: "CONSULTATION",
    titleJp: "カウンセリング",
    description: "ご希望・体調の確認をいたします",
    icon: "consultation"
  },
  {
    step: 3,
    titleEn: "GROOMING",
    titleJp: "シャンプー・カット",
    description: "丁寧にシャンプー・カットいたします",
    icon: "grooming"
  },
  {
    step: 4,
    titleEn: "FINAL CHECK",
    titleJp: "仕上がり確認",
    description: "仕上がりをご確認いただきます",
    icon: "final-check"
  }
];
