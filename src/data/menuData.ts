export interface MenuItem {
  name: string;
  price: string;
}

export interface MenuCategory {
  title: string;
  titleEn: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    title: "シャンプーコース",
    titleEn: "SHAMPOO COURSE",
    items: [
      { name: "チワワ（スムース）", price: "¥3,500" },
      { name: "チワワ（ロング）", price: "¥6,600〜" },
      { name: "ダックス（ロング）", price: "¥7,150〜" },
      { name: "ヨークシャーテリア", price: "¥6,600〜" },
      { name: "マルチーズ", price: "¥7,150〜" },
      { name: "トイプードル", price: "¥7,700〜" },
    ]
  },
  {
    title: "カットコース",
    titleEn: "CUT COURSE",
    items: [
      { name: "チワワ（ロング）", price: "¥8,800〜" },
      { name: "ダックス（ロング）", price: "¥9,350〜" },
      { name: "ヨークシャーテリア", price: "¥9,350〜" },
      { name: "マルチーズ", price: "¥9,900〜" },
      { name: "トイプードル", price: "¥11,000〜" },
      { name: "ポメラニアン", price: "¥9,900〜" },
    ]
  },
  {
    title: "単品メニュー",
    titleEn: "A LA CARTE",
    items: [
      { name: "爪切り", price: "¥880" },
      { name: "耳掃除", price: "¥880" },
      { name: "肛門腺絞り", price: "¥880" },
      { name: "足裏バリカン", price: "¥880" },
      { name: "歯みがき", price: "¥1,100" },
      { name: "部分カット", price: "¥1,100〜" },
    ]
  },
  {
    title: "オプション",
    titleEn: "OPTIONS",
    items: [
      { name: "炭酸泉温浴", price: "¥1,650〜" },
      { name: "ハーブパック", price: "¥2,200〜" },
      { name: "シルクの泡パック", price: "¥1,650〜" },
      { name: "高濃度保湿ケア", price: "¥1,650〜" },
      { name: "エイジングケア", price: "¥2,200〜" },
      { name: "デンタルケア（歯みがき付き）", price: "¥1,650" },
    ]
  }
];
