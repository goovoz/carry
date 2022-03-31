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
        "endDate":"2022-03-09",
        "qApi":""
},
*/
let apiList=[   
{
        "qName": "极速15-8",
        "qTime": "9,12,15,17,20",//9,12,15,17,20
        "lqSpace": 1,
        "endDate":"2022-04-30",
        "qApi": "https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&client=wh5&body=%7B%22activityId%22%3A%223H885vA4sQj6ctYzzPVix4iiYN2P%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3D79F6166D6F9BB11C9ED9696C6E30D9C1D392C277F9B79AB559E9868E1EE0910308189D1B2C9883FC5560EDA0CD002985_bingo%2CroleId%3DC6DCE94E14C0BEE454EA964509F4B26C_bingo%2CstrengthenKey%3D19F512DCD8EE34ABE9C4FB4A92C2F42A3E4F1D227F16BC3264497B20B54D33F5_bingo%22%7D"
},    
{
        "qName": "极速19-5",
        "qTime": "7,10,15,18,21",//7,10,15,18,21
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
        "qTime": "0,7,9,12,18",//0,7,9,12,18
        "lqSpace": 1,
        "endDate":"2022-04-30",
        "qApi":"https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&client=wh5&body=%7B%22activityId%22%3A%223H885vA4sQj6ctYzzPVix4iiYN2P%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3D64616D6FB9F745A939AEBE59B5331E98A02F7F3EBE7E2A8C6BC39900A5FB433C383A3885B1901C0036F186675FDB6B40_bingo%2CroleId%3D454CDE7D149EE1DA28FDC5C9AD4D3FF6_bingo%2CstrengthenKey%3D19F512DCD8EE34ABE9C4FB4A92C2F42AD9B1F4308CB2085C9DAE51ED67591679_bingo%22%7D"
}  
];
module.exports = {
  apiList
};