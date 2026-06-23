export interface CityInfo {
  name: string;
  population: string;
  area: string;
  gdp: string;
  history: HistoryEvent[];
  description: string;
  location: string;
}

export interface HistoryEvent {
  year: string;
  title: string;
  description: string;
}

export interface FoodItem {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  rating: number;
  address: string;
  price: string;
  shops: string[];
  tips: string;
}

export interface CultureEvent {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
}

export const cityInfo: CityInfo = {
  name: "定州市",
  population: "130万",
  area: "1283平方公里",
  gdp: "450亿元",
  history: [
    {
      year: "公元前414年",
      title: "中山国建都",
      description: "战国时期，中山国在今定州一带建都，定州成为中山国政治、经济、文化中心，开启了定州作为区域中心城市的悠久历史。中山国虽为千乘之国，却以精湛的青铜器和玉器制作工艺闻名于世。",
    },
    {
      year: "公元前154年",
      title: "西汉置中山国",
      description: "汉景帝封其子刘胜为中山靖王，设中山国，定州成为汉代中山国都城。此后历代中山王在此营建陵墓，留下了规模宏大的中山汉墓群，出土了大量珍贵文物，包括闻名遐迩的金缕玉衣。",
    },
    {
      year: "公元556年",
      title: "北齐设定州",
      description: "北齐天保七年，正式设立定州，取「安定天下」之意，定州之名由此始。此后历经隋唐五代，定州一直是河北地区重要的政治军事重镇和商贸中心。",
    },
    {
      year: "公元1001年",
      title: "开元寺塔始建",
      description: "宋真宗咸平四年，开元寺塔开始兴建，历时55年建成。塔高83.7米，为中国现存最高砖木结构古塔，被誉为「中华第一塔」，成为定州最具标志性的历史建筑。",
    },
    {
      year: "公元1738年",
      title: "定州贡院建成",
      description: "清乾隆三年，定州贡院建成，成为清代科举考试的重要场所。贡院占地2.2万平方米，是国内保存最为完好的清代科举考场建筑，其魁阁号舍造型独特，在国内贡院建筑中独树一帜。",
    },
    {
      year: "1986年",
      title: "撤县设市",
      description: "1986年，经国务院批准，定县撤县设市，更名为定州市。进入新时代，定州加快产业转型升级，大力发展文化旅游产业，建设智慧城市，这座千年古城焕发出新的生机与活力。",
    },
    {
      year: "2013年",
      title: "省直管市",
      description: "2013年，定州实行省直管，行政级别与权限独立于地级市之外。作为河北省首批省直管试点市，定州在经济社会发展、行政管理体制等方面获得更大自主权，迎来新的发展机遇，城市建设和民生事业迈上了新台阶。",
    },
  ],
  description: "定州市位于河北省中部偏西，太行山东麓，华北平原西缘，是河北省直管市。定州历史悠久，文化底蕴深厚，是中山文化的重要发祥地，拥有2500多年的建城史。境内有开元寺塔、定州贡院、定州文庙等众多历史古迹，其中国家重点文物保护单位8处。定州是著名的「定瓷」故乡，宋代五大名窑之一的定窑即产于此。定州鸭梨、定州焖子等特产享誉全国。近年来，定州市积极推进产业转型升级，加快新型城镇化建设，经济社会保持良好发展态势，正朝着建设京津冀城市群特色节点城市的目标稳步迈进。",
  location: "河北省中部偏西，太行山东麓，华北平原西缘，距北京200公里、石家庄70公里",
};

export const foodData: FoodItem[] = [
  {
    id: "1",
    name: "定州焖子",
    description: "定州焖子是定州最具代表性的传统美食，已有数百年历史。以精选红薯淀粉为主料，配以肉汤、香油及多种调料，经熬制、蒸煮而成。成品色泽金黄，口感筋道爽滑，切片后蘸蒜汁食用，鲜香四溢。定州焖子制作技艺已被列入河北省非物质文化遗产名录，是定州人逢年过节、宴请宾客必不可少的佳肴。",
    imageUrl: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Chinese%20traditional%20starch%20sausage%20dish%2C%20golden%20yellow%20slices%20on%20plate%2C%20garlic%20sauce%2C%20appetizing%20food%20photography&image_size=landscape_16_9",
    rating: 4.8,
    address: "定州市中山路美食街、各大饭店均有供应",
    price: "15-30元/份",
    shops: ["老字号焖子铺（中山路店）", "马家焖子（清风路店）", "定州饭店"],
    tips: "建议现切现吃，蘸蒜汁风味最佳，也可夹入缸炉烧饼一起吃",
  },
  {
    id: "2",
    name: "定州手擀面",
    description: "定州手擀面是定州传统面食的代表，以优质小麦粉手工擀制而成。面条宽厚筋道，入口滑爽有嚼劲，搭配卤汤或炸酱，佐以黄瓜丝、豆芽等菜码，味道鲜美。定州手擀面的制作讲究「三遍水、三遍揉」，面团经过反复揉搓和醒发，才能达到理想的口感。在定州，手擀面是家家户户的日常主食，也是招待远方来客的必备美食。",
    imageUrl: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Chinese%20handmade%20noodles%20in%20bowl%2C%20thick%20wheat%20noodles%20with%20meat%20sauce%2C%20fresh%20vegetables%2C%20steaming%20hot%20food&image_size=landscape_16_9",
    rating: 4.7,
    address: "定州市各面馆、小吃店均有供应",
    price: "10-20元/碗",
    shops: ["张记手擀面（建设街）", "老城一绝面馆", "王家手擀面"],
    tips: "推荐卤汤口味，加一份定州焖子做浇头更地道",
  },
  {
    id: "3",
    name: "定州鸭梨",
    description: "定州鸭梨栽培历史已有2000多年，是定州最负盛名的农产品。定州鸭梨果形美观，皮薄肉细，汁多味甜，酥脆爽口，含糖量高，营养丰富。定州独特的土壤和气候条件赋予了鸭梨优异的品质，「定州鸭梨」已获得国家地理标志产品认证。每年秋季梨园硕果累累，吸引大量游客前来采摘体验。定州鸭梨不仅鲜食可口，还可制成梨膏、梨酒等深加工产品。",
    imageUrl: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Fresh%20Chinese%20ya%20pears%20on%20tree%20branch%2C%20golden%20yellow%20fruit%2C%20orchard%20with%20green%20leaves%2C%20autumn%20harvest&image_size=landscape_16_9",
    rating: 4.6,
    address: "定州市各梨园基地、农贸市场、超市",
    price: "5-10元/斤",
    shops: ["定州鸭梨采摘园（大辛庄镇）", "绿源果品专卖店", "各农贸市场"],
    tips: "9-10月为最佳采摘季节，可前往梨园体验采摘乐趣",
  },
  {
    id: "4",
    name: "中山松醪酒",
    description: "中山松醪酒源于宋代，由时任定州知州的苏轼创制，是中国历史上著名的养生名酒。以黄米为主料，配以松膏、枸杞、当归等十余种中药材，采用传统工艺发酵酿制而成。酒色琥珀，醇厚甘美，具有滋补养生之功效。苏轼曾作《中山松醪赋》赞颂此酒，使其名扬天下。中山松醪酒酿造技艺被列入省级非物质文化遗产名录，是定州独特的文化名片。",
    imageUrl: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Traditional%20Chinese%20rice%20wine%20in%20ceramic%20jug%2C%20amber%20colored%20liquor%20in%20cup%2C%20ancient%20brewing%20vessels%2C%20warm%20lighting&image_size=landscape_16_9",
    rating: 4.5,
    address: "定州市各特产店、酒类专卖店",
    price: "80-200元/瓶",
    shops: ["中山松醪酒厂直营店", "定州特产专卖店", "各大超市特产柜"],
    tips: "酒精浓度较高，建议适量饮用，适合作为伴手礼赠送亲友",
  },
  {
    id: "5",
    name: "定州烧鸡",
    description: "定州烧鸡是定州传统名吃，以本地散养柴鸡为原料，配以八角、桂皮、丁香、草果等二十余种香料，经腌制、煮制、熏烤等多道工序精心制作而成。成品色泽金黄油亮，肉质鲜嫩脱骨，香味浓郁持久，咸淡适中，回味悠长。定州烧鸡制作技艺代代相传，各家老字号均有独门秘方，其中以「刘记」「张记」最为知名，是定州人走亲访友的首选礼品。",
    imageUrl: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Chinese%20roasted%20chicken%20on%20plate%2C%20golden%20brown%20crispy%20skin%2C%20traditional%20braised%20poultry%2C%20appetizing%20food%20photography&image_size=landscape_16_9",
    rating: 4.6,
    address: "定州市各熟食店、特产店",
    price: "35-60元/只",
    shops: ["刘记烧鸡（中山路老店）", "张记烧鸡", "定州特产总汇"],
    tips: "买整只比买半只更划算，真空包装可带走送人",
  },
  {
    id: "6",
    name: "定州缸炉烧饼",
    description: "定州缸炉烧饼是定州传统面食，以特制缸炉烤制而得名。选用优质面粉，和面时加入油酥，擀成薄饼后撒上芝麻，贴入烧热的缸炉内壁烤制。成品外酥里嫩，层次分明，芝麻香气浓郁，咬一口酥脆掉渣。缸炉烧饼可单食，也可夹入定州焖子或卤肉，风味更佳。这种独特的烤制方式使烧饼受热均匀，口感远胜普通烤箱制品，是定州街头巷尾最常见的小吃之一。",
    imageUrl: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Chinese%20sesame%20flatbread%20baked%20in%20clay%20oven%2C%20golden%20crispy%20surface%20with%20sesame%20seeds%2C%20traditional%20baked%20goods%2C%20rustic%20style&image_size=landscape_16_9",
    rating: 4.4,
    address: "定州市各早餐摊、小吃店、菜市场门口",
    price: "2-5元/个",
    shops: ["老街口缸炉烧饼", "赵家烧饼铺", "菜市场门口各摊位"],
    tips: "早上新鲜出炉的最香，推荐夹焖子吃，定州经典搭配",
  },
];

export const cultureEventsData: CultureEvent[] = [
  {
    id: "1",
    title: "定州祭孔大典",
    date: "每年9月28日",
    location: "定州文庙",
    description: "定州祭孔大典是定州市最具影响力的传统文化活动，每年孔子诞辰日在定州文庙隆重举行。大典沿袭传统祭孔礼仪，包括迎神、初献、亚献、终献、撤馔、送神等环节，配有古乐演奏和佾舞表演。来自社会各界的代表和市民齐聚文庙，共同缅怀先师孔子，传承尊师重教的优良传统。大典期间还举办国学讲座、经典诵读、书画展览等系列文化活动。",
  },
  {
    id: "2",
    title: "定州古城文化节",
    date: "每年10月1日-7日",
    location: "定州古城景区",
    description: "定州古城文化节于每年国庆黄金周期间举办，是定州市规模最大的文化旅游节庆活动。活动期间，开元寺塔、定州贡院、定州文庙等景点推出特色文化体验项目，包括古装穿越、科举体验、非遗展演、民俗表演等。游客可身着汉服漫步古城，参与投壶、射箭等传统游戏，品尝定州焖子、手擀面等地方美食，还可欣赏定州秧歌、子位吹歌等非遗表演。文化节每年吸引游客超过20万人次。",
  },
  {
    id: "3",
    title: "中山文化学术研讨会",
    date: "每年5月18日-19日",
    location: "定州博物馆",
    description: "中山文化学术研讨会是定州市打造的学术品牌活动，每年国际博物馆日期间举办。研讨会邀请国内外考古学、历史学、文物学等领域的专家学者，围绕中山国历史、定州考古发现、文化遗产保护等主题展开深入研讨。近年来，研讨会先后就中山国都城遗址、汉代中山王陵、定窑瓷器等课题取得了重要学术成果，有力推动了中山文化的研究和传播。",
  },
  {
    id: "4",
    title: "定州鸭梨采摘节",
    date: "每年9月中旬-10月中旬",
    location: "定州市各梨园基地",
    description: "定州鸭梨采摘节是定州市特色农业旅游品牌活动，每年鸭梨成熟季节举办。活动期间，全市各大梨园基地向游客开放，游客可亲手采摘新鲜鸭梨，体验田园生活乐趣。采摘节还举办鸭梨品鉴会、梨园美食节、乡村摄影大赛、农事体验等丰富多彩的活动。定州鸭梨种植面积达12万亩，年产量25万吨，采摘节已成为推动定州农旅融合发展、助力乡村振兴的重要平台。",
  },
];
