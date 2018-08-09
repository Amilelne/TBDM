# API接口
## 获取所有产品的基础信息
#### Request
- Method: **GET**
- URL: ```http://xxx/api/items```

#### Response
- Body
```
{
    "result": [
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

## 通过item_id获取某个产品的详细信息
#### Request
- Method: **GET**
- URL: ```http://xxx/api/items/:itemId```
- **注意：由于在三个时间段抓取了同一件商品，因此一个itemId可能会返回三条数据**
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
