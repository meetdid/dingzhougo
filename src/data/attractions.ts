export interface Attraction {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  rating: number;
  category: "古迹" | "自然" | "文化" | "休闲";
  address: string;
  openTime: string;
  ticketPrice: string;
}

export const attractionsData: Attraction[] = [
  {
    id: "1",
    name: "开元寺塔",
    description: "开元寺塔又称定州塔，始建于宋真宗咸平四年（1001年），历时55年建成，是中国现存最高的砖木结构古塔，通高83.7米，被誉为「中华第一塔」。塔为八角形楼阁式建筑，共十一层，塔身外部每层用砖层层叠涩出檐，形成优美的轮廓线。塔内设有旋转楼梯，可登至塔顶俯瞰定州全城。塔身保存有大量宋代壁画和砖雕，具有极高的历史、艺术和科学价值。1961年被列为全国重点文物保护单位。",
    imageUrl: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Tall%20ancient%20Chinese%20brick%20pagoda%20tower%2C%20Song%20dynasty%20architecture%2C%20octagonal%20shape%2C%20blue%20sky%2C%20clear%20day&image_size=landscape_16_9",
    rating: 4.9,
    category: "古迹",
    address: "定州市中山中路开元寺内",
    openTime: "08:00-17:30（11月-3月至17:00）",
    ticketPrice: "60元",
  },
  {
    id: "2",
    name: "定州贡院",
    description: "定州贡院始建于清乾隆三年（1738年），是我国目前保存最为完好的清代科举考场建筑，占地约2.2万平方米。贡院由影壁、大门、魁阁号舍、大堂、后楼等建筑组成，整体布局严谨，功能分区明确。其中魁阁号舍为半四角攒尖结构，造型独特，在国内贡院建筑中独树一帜。贡院见证了清代科举制度的兴衰，是研究中国古代科举制度的重要实物资料。馆内设有科举文化陈列展，展示了大量科举文物和历史文献。",
    imageUrl: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Chinese%20ancient%20imperial%20examination%20courtyard%2C%20Qing%20dynasty%20architecture%2C%20red%20walls%20and%20grey%20tiles%2C%20traditional%20gate&image_size=landscape_16_9",
    rating: 4.7,
    category: "古迹",
    address: "定州市东大街草场胡同22号",
    openTime: "08:30-17:30（11月-3月至17:00）",
    ticketPrice: "30元",
  },
  {
    id: "3",
    name: "定州文庙",
    description: "定州文庙始建于唐大中二年（848年），是河北省现存规模最大、保存最为完好的文庙建筑群。文庙坐北朝南，中轴线上依次分布着棂星门、泮池、戟门、大成殿等建筑，东西两侧设有名宦祠、乡贤祠等配殿。大成殿为文庙主体建筑，面阔七间，进深四间，单檐歇山顶，殿内供奉孔子及四配十二哲塑像。庙内古柏参天，环境清幽，还保存有苏轼书写的《中山松醪赋》碑刻等珍贵文物。每年9月在此举行祭孔大典，传承尊师重教的文化传统。",
    imageUrl: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Chinese%20Confucian%20temple%20complex%2C%20ancient%20cypress%20trees%2C%20traditional%20roof%20architecture%2C%20stone%20pathway%2C%20serene%20atmosphere&image_size=landscape_16_9",
    rating: 4.6,
    category: "文化",
    address: "定州市刀枪街1号",
    openTime: "08:30-17:00",
    ticketPrice: "20元",
  },
  {
    id: "4",
    name: "中山汉墓",
    description: "中山汉墓是西汉中山国历代王侯的陵墓群，分布在定州市区及周边，已发现大型汉墓170余座。其中最著名的是中山简王刘焉墓和中山穆王刘畅墓，出土了大量珍贵文物，包括铜缕玉衣、鎏金铜器、玉器、陶器等。刘畅墓出土的玉衣由2498片玉片组成，用金丝编缀，工艺精湛，是国家一级文物。墓室结构宏大，多采用黄肠题凑葬制，反映了汉代诸侯王的丧葬制度和等级礼制。中山汉墓的考古发现对研究汉代中山国的历史、文化、丧葬制度具有极其重要的价值。",
    imageUrl: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Ancient%20Chinese%20Han%20dynasty%20tomb%20entrance%2C%20underground%20burial%20chamber%2C%20stone%20archway%2C%20archaeological%20site&image_size=landscape_16_9",
    rating: 4.5,
    category: "古迹",
    address: "定州市南城区中山汉墓景区",
    openTime: "09:00-17:00（周一闭馆）",
    ticketPrice: "免费",
  },
  {
    id: "5",
    name: "定州博物馆",
    description: "定州博物馆是国家二级博物馆，馆藏文物5万余件，其中国家一级文物107件，以汉代文物和宋代定窑瓷器最为著名。馆内设有「汉家陵阙」「天下大白」「北朝佛陀」「尘外千年」等基本陈列，全面展示了定州从新石器时代到明清时期的历史文化。镇馆之宝包括龙螭衔环谷纹青玉璧、透雕神仙故事玉座屏、定窑白釉刻花龙纹大盘等。其中透雕神仙故事玉座屏为国内首次发现的汉代玉器屏风，工艺极其精湛。博物馆建筑融入了汉代风格元素，与定州古城风貌相协调。",
    imageUrl: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Chinese%20museum%20interior%2C%20ancient%20jade%20artifacts%20and%20porcelain%20display%2C%20elegant%20exhibition%20hall%2C%20warm%20lighting&image_size=landscape_16_9",
    rating: 4.8,
    category: "文化",
    address: "定州市中山中路定州博物馆",
    openTime: "09:00-17:00（周一闭馆，法定节假日除外）",
    ticketPrice: "免费（需预约）",
  },
  {
    id: "6",
    name: "黄家营葡萄酒庄",
    description: "黄家营葡萄酒庄位于定州市西南部，是集葡萄种植、葡萄酒酿造、观光旅游、休闲度假于一体的现代化酒庄。酒庄占地1200余亩，种植有赤霞珠、梅洛、霞多丽等优质酿酒葡萄品种，年产量达300吨。酒庄采用传统工艺与现代技术相结合的酿造方式，生产的干红、干白葡萄酒多次在国内外葡萄酒大赛中获奖。游客可参观葡萄园、酿酒车间和地下酒窖，了解葡萄酒酿造全过程，还可参与葡萄采摘、品酒体验等互动项目。酒庄内设有特色餐厅，提供以葡萄酒为原料的创意菜品。",
    imageUrl: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Vineyard%20winery%20estate%2C%20rows%20of%20grape%20vines%2C%20European%20style%20chateau%20building%2C%20sunset%20golden%20light&image_size=landscape_16_9",
    rating: 4.4,
    category: "休闲",
    address: "定州市黄家营村西",
    openTime: "09:00-18:00",
    ticketPrice: "50元（含品酒）",
  },
  {
    id: "7",
    name: "定州古城墙",
    description: "定州古城墙始建于北魏时期，明洪武年间大规模重修，周长约12公里，高约10米，设四门：东曰「望瀛」、南曰「迎泰」、西曰「瞻岳」、北曰「拱辰」。城墙以夯土筑成，外包青砖，顶部设垛口和女墙，四角建有角楼，气势雄伟。历经千年风雨，现存城墙约2.3公里，主要集中在南门至西门段，是河北省保存较好的明代城墙遗址之一。近年来，定州市对现存城墙进行了保护性修缮，建设了城墙遗址公园，设置了历史文化展示区，游客可沿城墙漫步，感受千年古城的厚重历史。",
    imageUrl: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Ancient%20Chinese%20city%20wall%20ruins%2C%20brick%20fortification%2C%20watchtower%2C%20sunset%20light%2C%20historic%20preservation%20park&image_size=landscape_16_9",
    rating: 4.3,
    category: "古迹",
    address: "定州市南城区古城墙遗址公园",
    openTime: "全天开放",
    ticketPrice: "免费",
  },
  {
    id: "8",
    name: "唐河风光带",
    description: "唐河风光带位于定州市区北部，沿唐河两岸建设，全长约8公里，是定州市最大的城市滨水生态景观带。风光带以「生态、休闲、文化」为主题，分为湿地保护区、滨水休闲区、文化体验区和运动健身区四大功能区域。湿地保护区内芦苇丛生、水鸟栖息，是城市中难得的生态绿肺；滨水休闲区设有亲水平台、景观栈道和休憩亭廊；文化体验区融入了中山国文化元素，设置了主题雕塑和文化长廊；运动健身区配备了篮球场、足球场、健身步道等设施。每到春夏季节，两岸花木繁盛，成为市民休闲娱乐的好去处。",
    imageUrl: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Riverside%20ecological%20park%2C%20willow%20trees%20along%20river%20bank%2C%20walking%20path%2C%20wetland%20landscape%2C%20green%20nature&image_size=landscape_16_9",
    rating: 4.5,
    category: "自然",
    address: "定州市北城区唐河两岸",
    openTime: "全天开放",
    ticketPrice: "免费",
  },
];
