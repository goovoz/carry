/*参数说明
*请不要修改此文件 如需增加自定义api复制此文件改名为jdYhqApiListMy.js然后修改新文件里面的券 注意会同时加载2个文件的券 所以不要重复
*qName：String类型 券名称 不能重复
*qTime：String类型 领取券的时间 小时 多个用英文逗号隔开
*lqSpace：int类型 多久可以领取一次，1天可领取一次就设置为1 永久一次可设置999
*endDate：String类型 券结束日期 不用时分秒
*qApi：String类型 券API地址
{
        "qName": "极速299-30",
        "qTime": "9,12,20",
        "lqSpace": 1,
        "endDate":"2022-04-30",
        "qApi":""
},
*/
let apiList=[   
{
        "qName": "点点59-20",
        "qTime": "10,14,18,22",
        "lqSpace": 7,
        "endDate":"2022-04-30",
        "qApi": "https://api.m.jd.com/client.action?functionId=newReceiveRvcCoupon&clientVersion=10.0.0&build=88399&client=android&d_brand=SENSE&partner=yysd3&aid=57abbb727bf1d68f&oaid=bf3b5d6efffe0b6a&openudid=57abbb727bf1d68f&eid=eidA4433812365sfMqZFHKKGTleRxbeh8kr6YDKmRpnfP1peNlqtiWtizcsb1u3zC5kCt2xLMr1ANmRo5zMNNSpz/3DiPy9EwkMM+Ep9azjnUg0rFU1C&uts=0f31TVRjBSvHSHAVS7qYk7e0xxIRmnhXuTp9eIlES7ExAZAr%2BOC44YGIWprLB6ID1bmKqEO2cF1IlPahmpbZLFclzqNY0rix2hZ00nRhxyBEMMNBQY37qBANYP2jnKJg5wv%2BUwPNRwYuv9SSjSjcLWP3YIP8UXOsDnmhYaGVoAo8Y%2FD9Xrh2%2FNTR%2FG9WVaXLxKOaziQgvkAh%2Fydob5cqpQ%3D%3D&d_model=IDK-1001&osVersion=12&screen=2134*1080&lang=zh_CN&networkType=wifi&wifiBssid=unknown&uuid=57abbb727bf1d68f&sdkVersion=30&st=1649147929289&sign=dd41fd8a51b774b32fa751e611f421b8&sv=110&body=%7B%22channel%22%3A%22%E9%A2%86%E5%88%B8%E4%B8%AD%E5%BF%83%22%2C%22childActivityUrl%22%3A%22openapp.jdmobile%3A%2F%2Fvirtual%3Fparams%3D%7B%5C%22category%5C%22%3A%5C%22jump%5C%22%2C%5C%22des%5C%22%3A%5C%22couponCenter%5C%22%7D%22%2C%22couponSource%22%3A%22manual%22%2C%22couponSourceDetail%22%3A%22null%22%2C%22eid%22%3A%22eidA4433812365sfMqZFHKKGTleRxbeh8kr6YDKmRpnfP1peNlqtiWtizcsb1u3zC5kCt2xLMr1ANmRo5zMNNSpz%2F3DiPy9EwkMM%2BEp9azjnUg0rFU1C%22%2C%22extend%22%3A%2288DB80104521161CDFFBD5A8057E28D32B21DA6CCCB3B391ACF06DCE41B68DCCA213BE06482C2B115ACD30536499B3CB0A01A2E3517769E5B0D9D7A5FEB8B8892408733446962758A6118E20FC69EEA2151C8384F6BBD8C70A8F1DEB3B5A37F14FBE8178EFDA279338C18A42C0351A1F8E08E2BCBD94F7954B2C3EF96C2246A05C4560B336B0522C122D4360FCDE797D26317618287934896C1F1487986A7482A7F5E9F82FD51574B3432D42A07A26711C27308F4A99B8DA51BDF775AE235F0DBCAF2DB5BCDA2D3F5D84D87B62F3A3289CA19FCDA4728263768BEECCD8FF46F69A7825DCBDB16A24AC1879DF42AAB3B7EDAF37D9ECB8F11D58D82E82F94D2164E5EA069F8292BBE1B70A90B73012068F9C3DFA799D890B51A45A8BC4C3538C63%22%2C%22lat%22%3A%22987254ce9da4b072b1cdec69d7592d8f%22%2C%22lng%22%3A%22175ffb892d025f8134406ec693606d98%22%2C%22pageClickKey%22%3A%22Coupons_GetCenter%22%2C%22rcType%22%3A%221%22%2C%22shshshfpb%22%3A%22JD012145b9HWZy9IjJZh163741402712206jW2WWPPx4EP0D1MjWqiCz3pFa7vXawF75Wjp097Qbsg0ahqr04%7EwyFt%2BkE58874zXw0xWdsbshHBJXLifkNFDnNh6HtytO0PmjIjkmqn7ZyNnvV24sDw8xbeF3pG%2Bnmne5XVvjOSgg%3D%3D%22%2C%22source%22%3A%22couponCenter_app%22%2C%22subChannel%22%3A%22%E9%99%90%E6%97%B6%E6%8A%A2%E5%88%B8%22%2C%22from%22%3A%22m%22%7D"
},{
        "qName": "极速9.9-6",
        "qTime": "10",
        "lqSpace": 1,
        "endDate":"2022-04-09",
        "qApi":""
}, {
        "qName": "极速15-8",
        "qTime": "9,12,15,17,20",//9,12,15,17,20
        "lqSpace": 1,
        "endDate":"2022-04-30",
        "qApi": "https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&client=wh5&body=%7B%22activityId%22%3A%223H885vA4sQj6ctYzzPVix4iiYN2P%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3D79F6166D6F9BB11C9ED9696C6E30D9C1D392C277F9B79AB559E9868E1EE0910308189D1B2C9883FC5560EDA0CD002985_bingo%2CroleId%3DC6DCE94E14C0BEE454EA964509F4B26C_bingo%2CstrengthenKey%3D19F512DCD8EE34ABE9C4FB4A92C2F42A3E4F1D227F16BC3264497B20B54D33F5_bingo%22%7D"
},    
{
        "qName": "极速19-5",
        "qTime": "7,10,15,21",//7,10,15,18,21
        "lqSpace": 1,
        "endDate":"2022-04-30",
        "qApi":"https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&client=wh5&body=%7B%22activityId%22%3A%22vN4YuYXS1mPse7yeVPRq4TNvCMR%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3D13CE10DEFD75052795FFEBDA31379B65F2F22C26C5C5F0E3B8A128B978111DBB7A5BB54EBDB1373E0C35F5DEB9B67446_bingo%2CroleId%3DADAC87F1EC515A647C5357A175E3519B_bingo%2CstrengthenKey%3D19F512DCD8EE34ABE9C4FB4A92C2F42AAEFAF03A89700155D56A825B54D6675D_bingo%22%7D"
},  
{
        "qName": "极速10-4",
        "qTime": "8,11,14,16,20",//8,11,14,16,20
        "lqSpace": 1,
        "endDate":"2022-04-30",
        "qApi":"https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&client=wh5&body=%7B%22activityId%22%3A%22vN4YuYXS1mPse7yeVPRq4TNvCMR%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3D440A3074D8054F656466EE989DEF40E4DE6342B45A4AB5D48889C7B31DD4E52ED6EB7F5C0174376325C72F3C5D85C6AA_bingo%2CroleId%3DB1781EF2C2537FB0E4A5B23AC99529A4_bingo%2CstrengthenKey%3D19F512DCD8EE34ABE9C4FB4A92C2F42AA1447D26BB4D8F8F1ADD929FC07559FC_bingo%22%7D"
}
,{
        "qName": "极速5-2",
        "qTime": "0,18",//0,7,9,12,18
        "lqSpace": 1,
        "endDate":"2022-04-30",
        "qApi":"https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&client=wh5&body=%7B%22activityId%22%3A%223H885vA4sQj6ctYzzPVix4iiYN2P%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3D64616D6FB9F745A939AEBE59B5331E98A02F7F3EBE7E2A8C6BC39900A5FB433C383A3885B1901C0036F186675FDB6B40_bingo%2CroleId%3D454CDE7D149EE1DA28FDC5C9AD4D3FF6_bingo%2CstrengthenKey%3D19F512DCD8EE34ABE9C4FB4A92C2F42AD9B1F4308CB2085C9DAE51ED67591679_bingo%22%7D"
}  
];
module.exports = {
  apiList
};