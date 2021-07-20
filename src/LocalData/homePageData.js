//主要服务数据
const mainServerData = [
  { title: '家政保洁',"id": 1036010, image: require("../assets/images/home_nav_cleaner.png") },
  { title: '清洁服务',"id": 1036005, image: require("../assets/images/home_nav_wash.png") },
  { title: '甲醛检治',"id": 1036011, image: require("../assets/images/home_nav_examination.png") },
  { title: '消杀处理',"id": 1036012, image: require("../assets/images/home_nav_disinfect.png") },
  { title: '家电安装',"id": 1036013,image: require("../assets/images/home_nav_fix.png") }
]

//热门服务数据
const hotServerData = [
  { title: '家电清洗', image: require("../assets/images/home_img_one.png"), subtitle: '专业技师上门' },
  { title: '家庭日常保洁', image: require("../assets/images/home_img_two.png"), subtitle: '深度清洁养护' },
  { title: '新居开荒', image: require("../assets/images/home_img_th.png"), subtitle: '新房首次保洁' },
  { title: '家电清洗1', image: require("../assets/images/home_img_one.png"), subtitle: '专业技师上门' },
]

//特惠优选数据
const preferentialData = [{
  "id": 1181004,
  "name": "空调清洗",
  "brief": "空调清洗",
  "picUrl": "https://cbu01.alicdn.com/img/ibank/2019/715/842/12201248517_1376630459.400x400.jpg",
  "isNew": true,
  "isHot": true,
  "counterPrice": 100,
  "retailPrice": 100
}, {
  "id": 1181005,
  "name": "油烟机清洗",
  "brief": "油烟机清洗",
  "picUrl": "https://cbu01.alicdn.com/img/ibank/2019/715/842/12201248517_1376630459.400x400.jpg",
  "isNew": true,
  "isHot": true,
  "counterPrice": 200,
  "retailPrice": 200
}, {
  "id": 1181006,
  "name": "洗衣机清洗",
  "brief": "洗衣机清洗",
  "picUrl": "https://cbu01.alicdn.com/img/ibank/2019/715/842/12201248517_1376630459.400x400.jpg",
  "isNew": true,
  "isHot": true,
  "counterPrice": 150,
  "retailPrice": 150
}, {
  "id": 1181007,
  "name": "冰箱清洗",
  "brief": "冰箱清洗",
  "picUrl": "https://cbu01.alicdn.com/img/ibank/2019/715/842/12201248517_1376630459.400x400.jpg",
  "isNew": true,
  "isHot": true,
  "counterPrice": 150,
  "retailPrice": 150
}, {
  "id": 1181008,
  "name": "热水器清洗",
  "brief": "热水器清洗",
  "picUrl": "https://cbu01.alicdn.com/img/ibank/2019/715/842/12201248517_1376630459.400x400.jpg",
  "isNew": true,
  "isHot": true,
  "counterPrice": 150,
  "retailPrice": 150
}]

export { mainServerData, hotServerData, preferentialData }
