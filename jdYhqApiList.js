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
        "qName": "极速5-2",
        "qTime": "21",//7,10,15,18,21
        "lqSpace": 1,
        "endDate":"2022-03-31",
        "qApi":"https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&client=wh5&body=%7B%22activityId%22%3A%223H885vA4sQj6ctYzzPVix4iiYN2P%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3D82955FF5B19B4873DD7044D75B44AD907C1A9FECE3BD974B2E35492750271EA91192D5362104AA91EDD08FFB7EFA944C_bingo%2CroleId%3D04BCD352B47E5A8B92C7D4ED398FBE33_bingo%2CstrengthenKey%3D19F512DCD8EE34ABE9C4FB4A92C2F42A35635A66A268556B6252CE474CA6F3B6_bingo%22%7D"
},  
{
        "qName": "极速19-6",
        "qTime": "7,18",//7,10,15,18,21
        "lqSpace": 1,
        "endDate":"2022-03-31",
        "qApi":"https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&client=wh5&body=%7B%22activityId%22%3A%22vN4YuYXS1mPse7yeVPRq4TNvCMR%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3D559C198F83CBF1D793C9CD8897A92C18F98661A99E0E88D4F7B3940DD96721B7E4385B29B20822D37D3994F74442D475_bingo%2CroleId%3D97EA407DBD290058DD2445A38BDEAA95_bingo%2CstrengthenKey%3D19F512DCD8EE34ABE9C4FB4A92C2F42A37E18185ED0FB2BB48D4D6B9D92F787C_bingo%22%7D"
},  
{
        "qName": "极速10-4",
        "qTime": "8,16",//8,11,14,16,20
        "lqSpace": 1,
        "endDate":"2022-03-31",
        "qApi":"https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&client=wh5&body=%7B%22activityId%22%3A%223H885vA4sQj6ctYzzPVix4iiYN2P%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3D9F77A904F38D9D2EA7968850FE8E4CF8408EF50BCE7C6FF518E48C3F1453D4DDDE2267491E3A0134A4B3422E11261222_bingo%2CroleId%3DF922BBE3F2239AD921A7360D331C1010_bingo%2CstrengthenKey%3D19F512DCD8EE34ABE9C4FB4A92C2F42A01B287B27F5B68E70E7CC11BBE843EA0_bingo%22%7D"
},             
   {
        "qName": "极速29-8",
        "qTime": "9,12,15,17",//9,12,15,17,20
        "lqSpace": 1,
        "endDate":"2022-03-31",
        "qApi": "https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&client=wh5&body=%7B%22activityId%22%3A%223H885vA4sQj6ctYzzPVix4iiYN2P%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3D6102ED3D9BC7C8DFF14D1A36FFA89602070B138DF76D200B6FA411359FBAD50B1FD83787E7C9BEF8843A4631ADF6C792_bingo%2CroleId%3D20E136F5EB78E9D323CEA65000B08718_bingo%2CstrengthenKey%3D19F512DCD8EE34ABE9C4FB4A92C2F42A65327F2097264F7157C058E713F98BE4_bingo%22%7D"
    }
	,             
   {
        "qName": "38节18支付券",
        "qTime": "20",//20
        "lqSpace": 1,
        "endDate":"2022-03-08",
        "qApi": "https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&body=%7B%22activityId%22%3A%22zrRC4dMd4Yu5uKgGF6Rw2m4a6cV%22%2C%22scene%22%3A%223%22%2C%22platform%22%3A%221%22%2C%22orgType%22%3A%222%22%2C%22openId%22%3A%22-1%22%2C%22pageClickKey%22%3A%22-1%22%2C%22eid%22%3A%22PTLFZ7KPMK6CJWYTRLMA32NGOGMPD57I4UDJJ6MJJ5IJPECJONE6Y5U7WSQTP3MLG4E356J2QR3FEFPORIUAYPQAOE%22%2C%22fp%22%3A%22592d084d0eb513185107d84bcf6e9077%22%2C%22shshshfp%22%3A%22e191abacf12e9a66cc59387ebd89c6bc%22%2C%22shshshfpa%22%3A%22374b6a95-49dc-ed0c-3ae3-ef1ea96eeeae-1577202066%22%2C%22shshshfpb%22%3A%22eBgNkN714gVOzHhj6G7LnEQ%3D%3D%22%2C%22childActivityUrl%22%3A%22https%253A%252F%252Fh5static.m.jd.com%252Fmall%252Factive%252FzrRC4dMd4Yu5uKgGF6Rw2m4a6cV%252Findex.html%253F_ts%253D1646303764139%2526ad_od%253Dshare%2526utm_user%253Dplusmember%2526gx%253DRnFmwDNfbWbbmNRO8NYiXRIOKg%2526cu%253Dtrue%2526hideyl%253D1%2526utm_source%253Dkong%2526utm_medium%253Djingfen%2526utm_campaign%253Dt_1001772498_%2526utm_term%253D12e66c7fbfa144e3a775106e60c6e83e%22%2C%22userArea%22%3A%22-1%22%2C%22client%22%3A%22-1%22%2C%22clientVersion%22%3A%22-1%22%2C%22uuid%22%3A%22-1%22%2C%22osVersion%22%3A%22-1%22%2C%22brand%22%3A%22-1%22%2C%22model%22%3A%22-1%22%2C%22networkType%22%3A%22-1%22%2C%22jda%22%3A%22122270672.966671800.1577202065.1646065831.1646309357.496%22%2C%22sdkToken%22%3A%22%22%2C%22token%22%3A%22V3N2FB2PVTDCZOLNHBHBXSMKBZ2VWMBS5RKFDW7OQARV36CRJVGDANWCKJKSRGNX6AK62LDJVJ5CO%22%2C%22jstub%22%3A%22KVUZVIA3XPHPWF3T2RSHECJDKJMKNVG4DELLJ7WJLEOEFKEBDCKUWI233ZQZNDVQE56LVEXMWEEBBWQOBYA7IF2HKKZELXT7RRX7GAQ%22%2C%22pageClick%22%3A%22Babel_Coupon%22%2C%22actKey%22%3A%222C9A1896D01041F26BD196FBDBEB8D65EF46225ECFAC97642AA9791B3EAFBA0B_bingo%22%2C%22headArea%22%3A%22605715ec560d6508f7403b91b677d79c%22%2C%22sceId%22%3A%22TTTh5%22%2C%22rstr%22%3A%2242763464%22%2C%22sstr%22%3A%221646309389291~1TeFvHDX2gCMDFwRUJVVDAxMQ%3D%3D.QXN2Y2dAfHFiYER2dCsdJTNyHmJJcwQ9KkFpdXliXHQ8ZypBOycXMz4uDGJlRCIUGi44LShjE0cJLBAFTXg8.cbfe15b7~6%2C1~DBFCB3ADD5C5021DD727692B19EC64828F6FEBE8~1bncixy~C~ShtHWRAOYmwaE01dWRAOYhNSABQKdR4Bfx1sHUwfQBAYG1UDHAAKGAdwFQcAABUCGgIECR1CExURUAUZAAgaBH0fAgViFQAYAQkDGEYWZB0UVktdFggGFRNFQhsJFgMCDQcFAQAADAMADwQCBQoFFh4WTlRSEwMRQEZATUVQRF8RGBBDXFAUCxtVUkZATEVDUBsfFkJQVxMMag0CGAMACAEaAwgfBQIYCh0HbBURXlgWAwIaE1pAFggWAQQAUA4KBwpQD1MABQkGAlcBX1IPAF1QUAdRDQICVV8RGBBaSRMME25aWgEGGx0URRsJBQQADwIGCAoLDQANCB0UW1IRDhBVGx0UV0lRFggWXHNRf1J9AwMAXmd5S3FbXgRzDn1YdGgOCRAYG19AEwMRc11bXl1TEXBdVxwWFRNYUE8RDhBXGx0UQlpBFghvAQcDHQoKAG8YG0NZEwNoFlMWFRNXExURVRAYG1AUHRtSFh4WWBMaE1gRaR4WUF5XEwMRUlRSX1dQRU0RGBBVUxMME0wRGBBXUBMME04AGgYaChMaE1pVa0QWAxMGABsfFlBQGwsUQ1hdUF1ZBAUEBg8AAAQAGx0UXFMRDmkFFQEaAWQfFlBYVlYUCxtSFh4WVEJREwMRVRBJ~1exykh4%22%2C%22mitemAddrId%22%3A%22%22%2C%22geo%22%3A%7B%22lng%22%3A%22%22%2C%22lat%22%3A%22%22%7D%2C%22addressId%22%3A%22%22%2C%22posLng%22%3A%22%22%2C%22posLat%22%3A%22%22%2C%22jdv%22%3A%22kong%7Ct_1001772498_%7Cjingfen%7C12e66c7fbfa144e3a775106e60c6e83e%22%2C%22focus%22%3A%22%22%2C%22innerAnchor%22%3A%22%22%2C%22cv%22%3A%222.0%22%7D&screen=788*1730&client=wh5&clientVersion=1.0.0&sid=&uuid=966671800&area="
    }
	,             
   {
        "qName": "携程980-50",
        "qTime": "10",
        "lqSpace": 1,
        "endDate":"2022-03-31",
        "qApi": "https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&body=%7B%22activityId%22%3A%223H885vA4sQj6ctYzzPVix4iiYN2P%22%2C%22from%22%3A%22H5node%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3Dg5u5icd7e5241468766c42fbe57a4f7f%2CroleId%3D70147779%22%2C%22mitemAddrId%22%3A%22%22%2C%22geo%22%3A%7B%22lng%22%3A%22%22%2C%22lat%22%3A%22%22%7D%7D&client=wh5"
    }
	,             
   {
        "qName": "38节9.9支付券",
        "qTime": "10",//20
        "lqSpace": 1,
        "endDate":"2022-03-08",
        "qApi": "https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&body=%7B%22activityId%22%3A%229AXu2aH1qvrfGUK9wjfbvcUKGTk%22%2C%22scene%22%3A%223%22%2C%22platform%22%3A%221%22%2C%22orgType%22%3A%222%22%2C%22openId%22%3A%22-1%22%2C%22pageClickKey%22%3A%22-1%22%2C%22eid%22%3A%22%22%2C%22fp%22%3A%22-1%22%2C%22shshshfp%22%3A%2289f29250e7472335b9a330ca551d3ade%22%2C%22shshshfpa%22%3A%22391a8d27-2493-78f2-5933-9047c8e146c2-1542163002%22%2C%22shshshfpb%22%3A%22wjCF7XprPiBEb36hzDzU3Bw%3D%3D%22%2C%22childActivityUrl%22%3A%22https%253A%252F%252Fprodev.m.jd.com%252Fmall%252Factive%252F9AXu2aH1qvrfGUK9wjfbvcUKGTk%252Findex.html%253F_ts%253D1646323239818%2526utm_source%253Diosapp%2526utm_medium%253Dappshare%2526utm_campaign%253Dt_335139774%2526utm_term%253DWxfriends%2526ad_od%253Dshare%2526utm_user%253Dplusmember%2526gx%253DRnEyym9dbTPdw9RP--tzDDUcSGM7Cwk6Qj3W%22%2C%22userArea%22%3A%22-1%22%2C%22client%22%3A%22%22%2C%22clientVersion%22%3A%22%22%2C%22uuid%22%3A%22%22%2C%22osVersion%22%3A%22%22%2C%22brand%22%3A%22%22%2C%22model%22%3A%22%22%2C%22networkType%22%3A%22%22%2C%22jda%22%3A%22-1%22%2C%22pageClick%22%3A%22Babel_Coupon%22%2C%22actKey%22%3A%22D78689198D3D6530E2599E20C2962A7C33A17EFDF5E59A86E4E728957B4343C1_bingo%22%2C%22headArea%22%3A%22605715ec560d6508f7403b91b677d79c%22%2C%22sceId%22%3A%22TTTh5%22%2C%22rstr%22%3A%2211616587%22%2C%22sstr%22%3A%221646359101553~1EIjd9avMfFMDFtYndwYTAxMQ%3D%3D.XFRDRlJYW0dIU1RRQA4qXRokRQtYD08%2FH1xOQFxXQVMJQh9cHAAaIitVLwATPQs1NQNeVB8KJRc3RDIWUF8J.753bfc6d~6%2C1~DA695C280245ABE8B5E7388EA116D1A43A9853B7~1xfgu18~C~TxpCWRAPb2UdG0BWWxYIbhZcABQNeRp2axlmFEQVQBoaFlYAGQBiFXZ9GgICZBgJHwkECBpAEBkWXAYUDGsadncZAgtzFQUWBgQCGUAabBUWX0RaEA8AFBNKRxoMFgMDAA4CDA0IDwIFAAMLBwAGGhoWRVBQGgsbQExCQEZTQV4TFRZPU1UQDxZeV01ATUJBUxcYGkFdWhoMbwEMGA4ECRgJDxgLGQYUAGQYGlxeEA8HFBNaRxoMFlRXVQpXX1AKAFALVlBeCVwCD1VVBwQBWgANB14CUVEDFhQTV0QaDBZlXFoLAxsYGkIWCAQCDAcKAQEHBAMAAQsdG15TFA4QVBYUE19EWhQOEEJee3cObEhEZFt3cVoCD1xCck5nBnZPDAQWFBRaRBcOGnZWW19aURJ8WlsfGxgaWFVEFw4aCAsADQcWHhdHW0MbDmMBBAIZAAgBZBgaRFsQD28aUBsYGlcWHhdVGh0bVRoaFlMXGBpQGxgaVxZvGRZRXlgWAhRSVFNSXldNQBoaFlNfFgITTBYUFFdbFw4aRgoaDBgHEBkWW1dmQhoMFgIEFhQTW1AaDBZAVFpcXlQJCQcCAwMBAAYbGBpbXhAPbwkdCRgIaxgQV1hXVhsOGlcWHhdZS1YbDhpXFk8%3D~0im2z65%22%2C%22siteClient%22%3A%22android%22%2C%22mitemAddrId%22%3A%22%22%2C%22geo%22%3A%7B%22lng%22%3A%22%22%2C%22lat%22%3A%22%22%7D%2C%22addressId%22%3A%22%22%2C%22posLng%22%3A%22%22%2C%22posLat%22%3A%22%22%2C%22jdv%22%3A%22iosapp%7Ct_335139774%7Cappshare%7CWxfriends%22%2C%22focus%22%3A%22%22%2C%22innerAnchor%22%3A%22%22%2C%22cv%22%3A%222.0%22%7D&screen=600*1050&client=wh5&clientVersion=1.0.0&sid=&uuid=&area="
    }
];
module.exports = {
  apiList
};