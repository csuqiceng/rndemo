//主要服务数据
const mainServerData = [
  { title: '家政服务', image: require("../assets/images/home_nav_cleaner.png") },
  { title: '清洁服务', image: require("../assets/images/home_nav_wash.png") },
  { title: '甲醛检治', image: require("../assets/images/home_nav_examination.png") },
  { title: '消杀处理', image: require("../assets/images/home_nav_disinfect.png") },
  { title: '家电安装', image: require("../assets/images/home_nav_fix.png") }
]

//热门服务数据
const hotServerData = [
  { title: '家电清洗', image: require("../assets/images/home_img_one.png"), subtitle: '专业技师上门' },
  { title: '家庭日常保洁', image: require("../assets/images/home_img_two.png"), subtitle: '深度清洁养护' },
  { title: '新居开荒', image: require("../assets/images/home_img_th.png"), subtitle: '新房首次保洁' },
  { title: '家电清洗1', image: require("../assets/images/home_img_one.png"), subtitle: '专业技师上门' },
]

//特惠优选数据
const preferentialData = [
   {
    "id": 22872,
    "name": "米米你女中大童套装秋新款格子背心毛衣裙+针织开衫两件套亲子款",
    "brief": "米米你女中大童套装秋新款格子背心毛衣裙+针织开衫两件套亲子款",
    "picUrl": "https://cbu01.alicdn.com/img/ibank/2019/347/827/11842728743_1376630459.400x400.jpg",
    "isNew": true,
    "isHot": true,
    "counterPrice": 171,
    "retailPrice": 117.51
  }, {
    "id": 22873,
    "name": "MOP4371韩版女童连衣裙复古格子童裙大中童百搭童装秋款",
    "brief": "MOP4371韩版女童连衣裙复古格子童裙大中童百搭童装秋款",
    "picUrl": "https://cbu01.alicdn.com/img/ibank/2019/715/842/12201248517_1376630459.400x400.jpg",
    "isNew": true,
    "isHot": true,
    "counterPrice": 118.5,
    "retailPrice": 86.26
  }, {
    "id": 22874,
    "name": "MTS5474韩版童装人气格子中长款衬衫多色宽松亲子装外套90-170CM",
    "brief": "MTS5474韩版童装人气格子中长款衬衫多色宽松亲子装外套90-170CM",
    "picUrl": "https://cbu01.alicdn.com/img/ibank/2019/998/321/11660123899_1376630459.400x400.jpg",
    "isNew": true,
    "isHot": true,
    "counterPrice": 79.5,
    "retailPrice": 53.76
  }, {
    "id": 22875,
    "name": "M5195+5257女中大童装高品质毛衣马甲+黑格磨毛连衣裙复古亲子装",
    "brief": "M5195+5257女中大童装高品质毛衣马甲+黑格磨毛连衣裙复古亲子装",
    "picUrl": "https://cbu01.alicdn.com/img/ibank/2019/669/624/12007426966_1376630459.400x400.jpg",
    "isNew": true,
    "isHot": true,
    "counterPrice": 94.5,
    "retailPrice": 66.26
  }, {
    "id": 22876,
    "name": "JP5322女中大童装韩版时尚加绒外套19年秋冬新品蝙蝠袖宽松夹克",
    "brief": "JP5322女中大童装韩版时尚加绒外套19年秋冬新品蝙蝠袖宽松夹克",
    "picUrl": "https://cbu01.alicdn.com/img/ibank/2019/718/224/12008422817_1376630459.400x400.jpg",
    "isNew": true,
    "isHot": true,
    "counterPrice": 148.5,
    "retailPrice": 105.01
  }, {
    "id": 22877,
    "name": "MTS5193男女宝中长款蓝白条纹衬衫宽松显瘦亲子牛仔衫大童童装",
    "brief": "MTS5193男女宝中长款蓝白条纹衬衫宽松显瘦亲子牛仔衫大童童装",
    "picUrl": "https://cbu01.alicdn.com/img/ibank/2019/932/680/11593086239_1376630459.400x400.jpg",
    "isNew": true,
    "isHot": true,
    "counterPrice": 103.5,
    "retailPrice": 73.76
  }, {
    "id": 22878,
    "name": "M5327韩版童装时尚女童假两件连衣裙秋冬高品质中大童复古花边裙",
    "brief": "M5327韩版童装时尚女童假两件连衣裙秋冬高品质中大童复古花边裙",
    "picUrl": "https://cbu01.alicdn.com/img/ibank/2019/122/929/11718929221_1376630459.400x400.jpg",
    "isNew": true,
    "isHot": true,
    "counterPrice": 97.5,
    "retailPrice": 68.76
  }, {
    "id": 22879,
    "name": "TS5249女童毛衣个性豹纹儿童套头毛衣中大童装秋冬高弹针织毛线衫",
    "brief": "TS5249女童毛衣个性豹纹儿童套头毛衣中大童装秋冬高弹针织毛线衫",
    "picUrl": "https://cbu01.alicdn.com/img/ibank/2019/816/814/12009418618_1376630459.400x400.jpg",
    "isNew": true,
    "isHot": true,
    "counterPrice": 97.5,
    "retailPrice": 68.76
  }, {
    "id": 22880,
    "name": "小童1031时尚百搭超弹休闲童裤修腿童裤童装裤子小童裤",
    "brief": "小童1031时尚百搭超弹休闲童裤修腿童裤童装裤子小童裤",
    "picUrl": "https://cbu01.alicdn.com/img/ibank/2019/085/062/11356260580_1376630459.400x400.jpg",
    "isNew": true,
    "isHot": true,
    "counterPrice": 49.5,
    "retailPrice": 41.26
  }
]

export { mainServerData, hotServerData, preferentialData }
