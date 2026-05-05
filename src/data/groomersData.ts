export interface Groomer {
  nameEn: string;
  nameJp: string;
  qualification: string;
  experience: string;
  description: string;
  image: string;
}

export const groomersData: Groomer[] = [
  {
    nameEn: "SAKI YAMAMOTO",
    nameJp: "山本 咲希",
    qualification: "JAPAN KENNEL CLUB 公認トリマーA級",
    experience: "ペット皮膚管理士",
    description: "その子らしさを大切に、負担の少ない優しいトリミングを心がけています。毎日がもっと輝くお手伝いをいたします。",
    image: "/images/groomers/saki-yamamoto.jpg"
  },
  {
    nameEn: "MISAKI TANAKA",
    nameJp: "田中 美咲",
    qualification: "JAPAN KENNEL CLUB 公認トリマーA級",
    experience: "ペットアロマテラピーアドバイザー",
    description: "わんちゃんの気持ちに寄り添いながら、リラックスできる時間を提供します。ご家族の想いを大切に施術いたします。",
    image: "/images/groomers/misaki-tanaka.jpg"
  },
  {
    nameEn: "AYAKA SUZUKI",
    nameJp: "鈴木 彩花",
    qualification: "JAPAN KENNEL CLUB 公認トリマーA級",
    experience: "ペット栄養管理士",
    description: "健康と美しさの両面からサポートし、その子にとってベストなケアを。笑顔あふれる毎日を願っています。",
    image: "/images/groomers/ayaka-suzuki.jpg"
  }
];
