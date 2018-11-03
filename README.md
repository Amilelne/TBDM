# API 接口

## 获取所有产品的基础信息

#### Request

- Method: **GET**
- URL: `http://xxx/api/items`

#### Response

- Body

```
{
    [
        {
            "_id": "5a1ecc09d9c6dce150471e89",
            "item_id": "10000044986231",
            "timestamp": "1493259165",
            "title": "楼兰丝路新疆一级红枣500g*2袋（每个ID限购2件）",
            "ju_price": "37.80"
        },
        {
            "_id": "5a1ecc09d9c6dce150471e8a",
            "item_id": "10000044986520",
            "timestamp": "1493259181",
            "title": "【镇店爆款】佳韵宝多功能孕妇枕侧卧枕U型（每个ID限购10件）",
            "ju_price": "268.00"
        }
    ]
}
```

##   分页获取所有产品的基础信息

#### Request

- Method: **GET**
- URL: `http://xxx/api/items/page/:pageId`

#### Response

- Body

```

```

## 通过 item_id 获取某个产品的详细信息

#### Request

- Method: **GET**
- URL: `http://xxx/api/items/item/:itemId`
- **注意：由于在三个时间段抓取了同一件商品，因此一个 itemId 可能会返回三条数据**

#### Response

- Body

```
{
    "result": [
        {
            "_id": "5a1ecc09d9c6dce150471e89",
            "item_id": "10000044986231",
            "ju_id": "37191102985",
            "timestamp": "1493259165",
            "error": [],
            "title": "楼兰丝路新疆一级红枣500g*2袋（每个ID限购2件）",
            "type": [
                "今日团购",
                "商品团",
                "食品"
            ],
            "head_picture": "//gju3.alicdn.com/bao/uploaded/i2/1374305030513795381/TB2kKP0jEdnpuFjSZPhXXbChpXa_!!0-juitemmedia.jpg_460x460Q90.jpg",
            "privilege": [
                "包邮",
                "9点前第2份18.9"
            ],
            "description": [
                "第2份5折 9点前拍下，第2份只要18.9元",
                "第2份18.9元 颗颗手工精选，孕宝推荐",
                "限购2份 源自新疆红枣核心产区，皮薄肉厚鲜甜"
            ],
            "ju_price": "37.80",
            "sale": "15852",
            "seller_name": "楼兰丝路食品旗舰店",
            "seller_url": "//store.taobao.com/shop/view_shop.htm?user_number_id=820523743",
            "seller_rate": [
                [
                    "4.8",
                    "1"
                ],
                [
                    "4.8",
                    "1"
                ],
                [
                    "4.8",
                    "1"
                ]
            ],
            "seller_promise": [
                "先行赔付",
                "七天退换"
            ]
        }
    ]
}
```

## 通过 id 获取某个产品的详细信息

#### Request

- Method: **GET**
- URL: `http://xxx/api/items/id/:Id`

#### Response

- Body

```
{
    "class": {
        "color": [],
        "reference": [],
        "颜色分类": [
            [
                "西红色",
                "玫红色",
                "蓝色"
            ],
            [
                "//img.alicdn.com/bao/uploaded/i3/2190066193/TB2i9P3pNhmpuFjSZFyXXcLdFXa_!!2190066193.jpg_40x40q90.jpg",
                "//img.alicdn.com/bao/uploaded/i4/2190066193/TB2m7avnl0kpuFjSsziXXa.oVXa_!!2190066193.jpg_40x40q90.jpg",
                "//img.alicdn.com/bao/uploaded/i3/2190066193/TB2V1iGnbFlpuFjy0FgXXbRBVXa_!!2190066193.jpg_40x40q90.jpg"
            ]
        ],
        "参考身高": [
            [
                "120cm(120cm【建议身高105-115cm】【精细剪裁上乘做工】) ",
                "130cm(130码【建议身高115-125cm】【天猫正品保障】) ",
                "140cm(140码【建议身高125-135cm】【精选优质面料】) ",
                "150cm(150码【建议身高135-145cm】【精细剪裁上乘做工】) ",
                "170cm(170码【建议身高155-165cm】【质量好 不起球 不褪色】) ",
                "160cm(160码【建议身高145-155cm】【七天无理由退换货】) "
            ],
            []
        ],
        "数量": "库存13000件"
    },
    "type": [],
    "all_picture": [
        "//img.alicdn.com/bao/uploaded/i4/TB1TCuCQVXXXXaaXpXXXXXXXXXX_!!0-item_pic.jpg_60x60q90.jpg",
        "//img.alicdn.com/imgextra/i4/2190066193/TB2_Dr7pSFmpuFjSZFrXXayOXXa_!!2190066193.jpg_60x60q90.jpg",
        "//img.alicdn.com/imgextra/i2/2190066193/TB2nVYcna8lpuFjy0FpXXaGrpXa_!!2190066193.jpg_60x60q90.jpg",
        "//img.alicdn.com/imgextra/i3/2190066193/TB20TaKnl4lpuFjy1zjXXcAKpXa_!!2190066193.jpg_60x60q90.jpg",
        "//img.alicdn.com/imgextra/i3/2190066193/TB2hqySnbXlpuFjy1zbXXb_qpXa_!!2190066193.jpg_60x60q90.jpg"
    ],
    "promise": [
        "正品保证",
        "极速退款",
        "七天无理由退换"
    ],
    "attribute": [
        "上市年份季节: 2017年夏季",
        "品牌: 童歪歪",
        "货号: Y1672",
        "适用性别: 女",
        "颜色分类: 西红色 玫红色 蓝色",
        "参考身高: 120cm【建议身高105-115cm】【精细剪裁上乘做工】 130码【建议身高115-125cm】【天猫正品保障】 140码【建议身高125-135cm】【精选优质面料】 150码【建议身高135-145cm】【精细剪裁上乘做工】 160码【建议身高145-155cm】【七天无理由退换货】 170码【建议身高155-165cm】【质量好 不起球 不褪色】",
        "模特实拍: 实拍有模特",
        "适用场景: 上学送礼",
        "按关系送礼: 孩子",
        "是否带帽子: 无",
        "组合形式: 短袖+裤子",
        "面料: 棉混纺布",
        "厚薄: 薄款",
        "适用季节: 夏季",
        "风格: 运动",
        "衣门襟: 套头",
        "图案: 其他",
        "件数: 2件"
    ],
    "seller_rate": [
        [
            "4.87234",
            "1",
            "5.77"
        ],
        [
            "4.78882",
            "0",
            "0.00"
        ],
        [
            "4.77818",
            "0",
            "0.00"
        ]
    ],
    "seller_name": [
        "童歪歪旗舰店"
    ],
    "seller_age": [
        "3"
    ],
    "seller_location": [
        "浙江,  湖州"
    ],
    "seller_url": [
        "//tongwaiwai.tmall.com"
    ],
    "_id": "5a1ed249d9c6dce1504833bf",
    "item_id": "534476679061",
    "timestamp": "1493255462",
    "title": "5儿童装6女童夏装2017新款9套装韩版夏季8运动服10两件套12岁潮衣",
    "head_picture": "https://img.alicdn.com/imgextra/i4/2190066193/TB2_Dr7pSFmpuFjSZFrXXayOXXa_!!2190066193.jpg_430x430q90.jpg",
    "collect_number": "3919",
    "privilege": "不起球 不褪色",
    "origin_price": "199.00",
    "tmall_price": "59.90",
    "tmall_price_reason": "聚划算",
    "sale_number": "1097",
    "review_number": "2228",
    "tmall_point": "29",
    "item_type": "2"
}
```

## 获取 ju_detail 数据库的数据 API 类似

### 通过 id 获取某个产品的详细信息

#### Request

- Method: **GET**
- URL: `http://xxx/api/jus/id/:Id`

### 通过 item_id 获取某个产品的详细信息

#### Request

- Method: **GET**
- URL: `http://xxx/api/jus/item/:itemId`

### 通过 ju_id 获取某个产品的详细信息

#### Request

- Method: **GET**
- URL: `http://xxx/api/jus/ju/:juId`
