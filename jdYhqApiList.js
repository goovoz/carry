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
        "qName": "极速19-5",
        "qTime": "0,10,18,22",//0,10,18,22
        "lqSpace": 1,
        "endDate":"2022-05-31",
        "qApi":"https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&client=wh5&body=%7B%22activityId%22%3A%22vN4YuYXS1mPse7yeVPRq4TNvCMR%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3DE72F2D6FD3B257AE6EAEEF81FEF44D9C3EFB9B5E0F0E11C4562D68BDA7BA69BF5C4E716FB9BBD7B1678E83551EA3A72E_bingo%2CroleId%3D3FE9EECAAA41B666E4FFAF79F20E21120520F1A5AFE5C9E8D77BD263F6726B9E3576C6C5571777201DA90CF204F2336AB211D7BA6D0E7255BAFF71BCC9ED7782F4BB5E97DDCA47183788BB228E79E0C3D6D9613C7FC7F959A45038CC7BDEF82DD7E61013399964509B5CDEF36C73EAE9EB6B63DA849EA90E7C87A96AB3C6FA44C65C483C9EECCB166A80C30000930072AC3B866785B1639C2C26FE898F623B48_bingo%2CstrengthenKey%3D19F512DCD8EE34ABE9C4FB4A92C2F42A42C9753D63098BF8E18509B9BE302B5B_bingo%22%7D"
}
,{
        "qName": "极速10-2",
        "qTime": "7,10,16,20",//7,16,20
        "lqSpace": 1,
        "endDate":"2022-05-31",
        "qApi":"https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&client=wh5&body=%7B%22activityId%22%3A%22vN4YuYXS1mPse7yeVPRq4TNvCMR%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3D99E9BFB397BB9E081C3D211644F4D63B80C6629BF10290DBE13C6C11E1DF025FE3774FB37875ED1B720ABB1A6023D3B4_bingo%2CroleId%3D3FE9EECAAA41B666E4FFAF79F20E21129412DAD4469A00C14E234FFC59430A3B03E9CF1047D2889AA3D9F3A3AC9845F06DD6177A62EF3A4A570EC8E5C227CE0E4892C7A1A2B984AB9B022706661B4828769759F089C6F22E26FB7BF32005D75B1BB6CDBC6F14191980CD819AAC1EA39539BB607CACE82D7FD0DA2D81160FE981D268AE832E62FFB08E4FFCF09090F6F1500E99612952CF8BE19FECE40CAA4C79_bingo%2CstrengthenKey%3D19F512DCD8EE34ABE9C4FB4A92C2F42A8C0EF783D810D5CD0608FD5820DD37F6_bingo%22%7D"
}  
];
module.exports = {
  apiList
};