export interface Feature {
  titleEn: string;
  description: string;
  icon: string;
}

export const featuresData: Feature[] = [
  {
    titleEn: "LOW STRESS",
    description: "ワンちゃんの負担を最小に、ストレスの少ない施術を心がけています",
    icon: "low-stress"
  },
  {
    titleEn: "CLEANLINESS",
    description: "衛生面の徹底管理を行い清潔な環境を維持しています",
    icon: "cleanliness"
  },
  {
    titleEn: "SMALL DOGS ONLY",
    description: "小型犬専門サロンです。安心して、ゆったりとお過ごしいただけます",
    icon: "small-dogs"
  },
  {
    titleEn: "SKIN CARE",
    description: "皮膚・被毛の状態を見極め、最適なスキンケアシャンプーで仕上げます",
    icon: "skin-care"
  }
];
