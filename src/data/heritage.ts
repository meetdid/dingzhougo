export interface Heritage {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  category: "古迹" | "非遗";
  type?: string;
  address?: string;
  level?: string;
}

export const heritageData: Heritage[] = [
  {
    id: "1",
    name: "开元寺塔",
    description: "开元寺塔又称定州塔，始建于宋真宗咸平四年（1001年），历时55年建成，是中国现存最高的砖木结构古塔，通高83.7米，被誉为「中华第一塔」。塔为八角形楼阁式建筑，共十一层，塔身外部每层用砖层层叠涩出檐，形成优美的轮廓线。塔内设有旋转楼梯，可登至塔顶俯瞰定州全城。塔身保存有大量宋代壁画和砖雕，具有极高的历史、艺术和科学价值。1961年被列为全国重点文物保护单位。",
    imageUrl: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Tall%20ancient%20Chinese%20brick%20pagoda%20tower%2C%20Song%20dynasty%20architecture%2C%20octagonal%20shape%2C%20blue%20sky%2C%20clear%20day&image_size=landscape_16_9",
    category: "古迹",
    address: "定州市中山中路开元寺内",
    level: "全国重点文物保护单位",
  },
  {
    id: "2",
    name: "定州贡院",
    description: "定州贡院始建于清乾隆三年（1738年），是我国目前保存最为完好的清代科举考场建筑，占地约2.2万平方米。贡院由影壁、大门、魁阁号舍、大堂、后楼等建筑组成，整体布局严谨，功能分区明确。其中魁阁号舍为半四角攒尖结构，造型独特，在国内贡院建筑中独树一帜。贡院见证了清代科举制度的兴衰，是研究中国古代科举制度的重要实物资料。馆内设有科举文化陈列展，展示了大量科举文物和历史文献。",
    imageUrl: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Chinese%20ancient%20imperial%20examination%20courtyard%2C%20Qing%20dynasty%20architecture%2C%20red%20walls%20and%20grey%20tiles%2C%20traditional%20gate&image_size=landscape_16_9",
    category: "古迹",
    address: "定州市东大街草场胡同22号",
    level: "全国重点文物保护单位",
  },
  {
    id: "3",
    name: "定州文庙",
    description: "定州文庙始建于唐大中二年（848年），是河北省现存规模最大、保存最为完好的文庙建筑群。文庙坐北朝南，中轴线上依次分布着棂星门、泮池、戟门、大成殿等建筑，东西两侧设有名宦祠、乡贤祠等配殿。大成殿为文庙主体建筑，面阔七间，进深四间，单檐歇山顶，殿内供奉孔子及四配十二哲塑像。庙内古柏参天，环境清幽，还保存有苏轼书写的《中山松醪赋》碑刻等珍贵文物。每年9月在此举行祭孔大典，传承尊师重教的文化传统。",
    imageUrl: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Chinese%20Confucian%20temple%20complex%2C%20ancient%20cypress%20trees%2C%20traditional%20roof%20architecture%2C%20stone%20pathway%2C%20serene%20atmosphere&image_size=landscape_16_9",
    category: "古迹",
    address: "定州市刀枪街1号",
    level: "河北省重点文物保护单位",
  },
  {
    id: "4",
    name: "中山汉墓",
    description: "中山汉墓是西汉中山国历代王侯的陵墓群，分布在定州市区及周边，已发现大型汉墓170余座。其中最著名的是中山简王刘焉墓和中山穆王刘畅墓，出土了大量珍贵文物，包括铜缕玉衣、鎏金铜器、玉器、陶器等。刘畅墓出土的玉衣由2498片玉片组成，用金丝编缀，工艺精湛，是国家一级文物。墓室结构宏大，多采用黄肠题凑葬制，反映了汉代诸侯王的丧葬制度和等级礼制。",
    imageUrl: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Ancient%20Chinese%20Han%20dynasty%20tomb%20entrance%2C%20underground%20burial%20chamber%2C%20stone%20archway%2C%20archaeological%20site&image_size=landscape_16_9",
    category: "古迹",
    address: "定州市南城区中山汉墓景区",
    level: "全国重点文物保护单位",
  },
  {
    id: "5",
    name: "定瓷",
    description: "定瓷是宋代五大名窑之一，以白瓷著称胎质坚密细腻，釉色洁白莹润，有「白如玉、薄如纸、声如磬」的美誉。定瓷烧制技艺历史悠久，产品曾作为宫廷御用瓷器。定窑工匠善于运用刻花、印花、划花等装饰技法，创造出许多精美绝伦的艺术品。定瓷的代表作品包括白釉刻花龙纹大盘、白釉童子诵经枕等，被世界各大博物馆珍藏。2008年，定瓷烧制技艺被列入国家级非物质文化遗产名录。",
    imageUrl: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Ancient%20Chinese%20Ding%20porcelain%20white%20tea%20cups%2C%20delicate%20carving%20patterns%2C%20traditional%20ceramics%2C%20museum%20display%2C%20elegant&image_size=landscape_16_9",
    category: "非遗",
    type: "传统技艺",
    level: "国家级非物质文化遗产",
  },
  {
    id: "6",
    name: "缂丝",
    description: "定州缂丝是中国传统丝绸工艺品中的瑰宝，以「通经断纬」的独特织造技法著称。缂丝作品图案精美，色彩丰富，立体感强，具有极高的艺术价值。定州缂丝以纯丝为原料，经数十道工序精心织造而成，每一件作品都是独一无二的艺术品。缂丝技艺历史可追溯到唐代，在宋代达到鼎盛，明清时期继续传承发展。定州缂丝曾作为皇家贡品，深受皇室贵族喜爱。2018年，定州缂丝织造技艺被列入河北省非物质文化遗产名录。",
    imageUrl: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Traditional%20Chinese%20Kesi%20silk%20tapestry%20with%20intricate%20dragon%20pattern%2C%20ancient%20craftsmanship%2C%20delicate%20textile%20art%2C%20royal%20artifacts&image_size=landscape_16_9",
    category: "非遗",
    type: "传统技艺",
    level: "河北省非物质文化遗产",
  },
  {
    id: "7",
    name: "定州焖子制作技艺",
    description: "定州焖子是定州最具代表性的传统美食，已有数百年历史。以精选红薯淀粉为主料，配以肉汤、香油及多种调料，经熬制、蒸煮而成。成品色泽金黄，口感筋道爽滑，切片后蘸蒜汁食用，鲜香四溢。定州焖子制作技艺已被列入河北省非物质文化遗产名录，是定州人逢年过节、宴请宾客必不可少的佳肴。制作过程讲究火候和配料比例，传统工艺代代相传。",
    imageUrl: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Traditional%20Chinese%20Dingzhou%20steamed%20starch%20dish%2C%20golden%20color%2C%20cut%20into%20slices%2C%20local%20delicacy%2C%20appetizing%20food&image_size=landscape_16_9",
    category: "非遗",
    type: "传统技艺",
    level: "河北省非物质文化遗产",
  },
  {
    id: "8",
    name: "中山松醪酒酿造技艺",
    description: "中山松醪酒源于宋代，由时任定州知州的苏轼创制，是中国历史上著名的养生名酒。以黄米为主料，配以松膏、枸杞、当归等十余种中药材，采用传统工艺发酵酿制而成。酒色琥珀，醇厚甘美，具有滋补养生之功效。苏轼曾作《中山松醪赋》赞颂此酒，使其名扬天下。中山松醪酒酿造技艺被列入省级非物质文化遗产名录，是定州独特的文化名片。",
    imageUrl: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Traditional%20Chinese%20rice%20wine%20in%20ceramic%20jugs%2C%20amber%20colored%20liquor%2C%20ancient%20brewing%20vessels%2C%20warm%20lighting%2C%20herbal%20medicine&image_size=landscape_16_9",
    category: "非遗",
    type: "传统技艺",
    level: "河北省非物质文化遗产",
  },
  {
    id: "9",
    name: "子位吹歌",
    description: "子位吹歌是定州市子位镇的传统民间音乐，起源于明代，已有500多年历史。吹歌以吹奏乐器为主，配以打击乐器，演奏技巧独特，音色明亮清脆。曲目多为传统民间乐曲，具有浓厚的地方特色。子位吹歌广泛应用于婚丧嫁娶、节日庆典等场合，是当地民众文化生活的重要组成部分。2008年，子位吹歌被列入国家级非物质文化遗产名录。",
    imageUrl: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Traditional%20Chinese%20folk%20wind%20instrument%20performance%2C%20ancient%20ceremonial%20music%2C%20musicians%20in%20traditional%20clothing%2C%20cultural%20heritage&image_size=landscape_16_9",
    category: "非遗",
    type: "传统音乐",
    level: "国家级非物质文化遗产",
  },
  {
    id: "10",
    name: "定州秧歌",
    description: "定州秧歌是流行于定州及周边地区的传统戏曲剧种，起源于清代乾隆年间。唱腔优美动听，表演质朴自然，富有浓郁的地方特色。定州秧歌的剧目多为反映民间生活的小戏，语言生动幽默，深受群众喜爱。代表剧目有《安安送米》《老少换》《双锁柜》等。定州秧歌在传承发展中不断创新，至今仍活跃在民间舞台上。",
    imageUrl: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Traditional%20Chinese%20folk%20opera%20performance%2C%20colorful%20costumes%20and%20masks%2C%20theatrical%20stage%2C%20cultural%20performance&image_size=landscape_16_9",
    category: "非遗",
    type: "传统戏曲",
    level: "河北省非物质文化遗产",
  },
];
