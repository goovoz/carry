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
        "qName": "苹果1000-100",
        "qTime": "0,10,14,16,20",
        "lqSpace": 1,
        "endDate":"2022-03-26",
        "qApi":"https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&client=wh5&body=%7B%22activityId%22%3A%222zTEdaefpfrtZvCVNMND9ujXJsxq%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3D548B74A82EC3AADF24E506C9A9C7F8D47E1297FDBA5854DC2ACB5948C23108216813A96A80907BC96AEC4901B0A5455C_bingo%2CroleId%3D2F205A052F3D60537C1D39543036C876_bingo%2CstrengthenKey%3D19F512DCD8EE34ABE9C4FB4A92C2F42A71585C0AF8833B2808C93F3FB6967270_bingo%22%7D"
},
{
        "qName": "极速5-2",
        "qTime": "21",//7,10,15,18,21
        "lqSpace": 1,
        "endDate":"2022-03-31",
        "qApi":"https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&client=wh5&body=%7B%22activityId%22%3A%223H885vA4sQj6ctYzzPVix4iiYN2P%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3D82955FF5B19B4873DD7044D75B44AD907C1A9FECE3BD974B2E35492750271EA91192D5362104AA91EDD08FFB7EFA944C_bingo%2CroleId%3D04BCD352B47E5A8B92C7D4ED398FBE33_bingo%2CstrengthenKey%3D19F512DCD8EE34ABE9C4FB4A92C2F42A35635A66A268556B6252CE474CA6F3B6_bingo%22%7D"
}	,             
{
        "qName": "极速19-6",
        "qTime": "7,15,18",//7,10,15,18,21
        "lqSpace": 1,
        "endDate":"2022-03-31",
        "qApi":"https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&client=wh5&body=%7B%22activityId%22%3A%22vN4YuYXS1mPse7yeVPRq4TNvCMR%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3D559C198F83CBF1D793C9CD8897A92C18F98661A99E0E88D4F7B3940DD96721B7E4385B29B20822D37D3994F74442D475_bingo%2CroleId%3D97EA407DBD290058DD2445A38BDEAA95_bingo%2CstrengthenKey%3D19F512DCD8EE34ABE9C4FB4A92C2F42A37E18185ED0FB2BB48D4D6B9D92F787C_bingo%22%7D"
},  
{
        "qName": "极速10-4",
        "qTime": "8,16,20",//8,11,14,16,20
        "lqSpace": 1,
        "endDate":"2022-03-31",
        "qApi":"https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&client=wh5&body=%7B%22activityId%22%3A%223H885vA4sQj6ctYzzPVix4iiYN2P%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3D9F77A904F38D9D2EA7968850FE8E4CF8408EF50BCE7C6FF518E48C3F1453D4DDDE2267491E3A0134A4B3422E11261222_bingo%2CroleId%3DF922BBE3F2239AD921A7360D331C1010_bingo%2CstrengthenKey%3D19F512DCD8EE34ABE9C4FB4A92C2F42A01B287B27F5B68E70E7CC11BBE843EA0_bingo%22%7D"
},             
   {
        "qName": "极速29-8",
        "qTime": "9,12,17",//9,12,15,17,20
        "lqSpace": 1,
        "endDate":"2022-03-31",
        "qApi": "https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&client=wh5&body=%7B%22activityId%22%3A%223H885vA4sQj6ctYzzPVix4iiYN2P%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3D6102ED3D9BC7C8DFF14D1A36FFA89602070B138DF76D200B6FA411359FBAD50B1FD83787E7C9BEF8843A4631ADF6C792_bingo%2CroleId%3D20E136F5EB78E9D323CEA65000B08718_bingo%2CstrengthenKey%3D19F512DCD8EE34ABE9C4FB4A92C2F42A65327F2097264F7157C058E713F98BE4_bingo%22%7D"
    }
	,             
   {
        "qName": "携程980-50",
        "qTime": "10",
        "lqSpace": 999,
        "endDate":"2022-03-31",
        "qApi": "https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&body=%7B%22activityId%22%3A%223H885vA4sQj6ctYzzPVix4iiYN2P%22%2C%22from%22%3A%22H5node%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3Dg5u5icd7e5241468766c42fbe57a4f7f%2CroleId%3D70147779%22%2C%22mitemAddrId%22%3A%22%22%2C%22geo%22%3A%7B%22lng%22%3A%22%22%2C%22lat%22%3A%22%22%7D%7D&client=wh5"
    }
];
module.exports = {
  apiList
};