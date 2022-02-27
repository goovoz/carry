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
        "qTime": "18",
        "lqSpace": 1,
        "endDate":"2022-02-28",
        "qApi":"https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&client=wh5&body=%7B%22activityId%22%3A%222YGj6v6usg1P2AyNs4mdNRYocZWt%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3DC1DEFD3C0396EDFC8215ACBF751C4620F0395465605CF9442326408CFB8A4F9825E83CD6C2B86F8929CB2F1095FB610F_bingo%2CroleId%3D23E2CB5340B5C6BEDF23627C434572F9_bingo%2CstrengthenKey%3D19F512DCD8EE34ABE9C4FB4A92C2F42AD9BB114FD170B2D26ACF28863C3D684F_bingo%22%7D"
}, 
{
        "qName": "极速15-5",
        "qTime": "7,21",
        "lqSpace": 1,
        "endDate":"2022-02-28",
        "qApi":"https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&body=%7B%22activityId%22%3A%223H885vA4sQj6ctYzzPVix4iiYN2P%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3D31CD88AE3992AFDBE729F4437067107B9B3F625470E56A2CAB857113A623EE891A57CA578240012281B37439A2B9E805_bingo%2CroleId%3DA0199859AAB898F2CB26E5F8DC20588A_bingo%2CstrengthenKey%3D16AC1C9F9C5A799B9F3AF3CF48BEE2ADA2831E619042C332ED9ECCC7B35C636FE9A2B1C98989EB5E616937C0E3177B30_bingo%22%7D&client=wh5"
},    
{
        "qName": "极速10-4",
        "qTime": "8,11,16",
        "lqSpace": 1,
        "endDate":"2022-02-28",
        "qApi":"https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&body=%7B%22activityId%22%3A%223H885vA4sQj6ctYzzPVix4iiYN2P%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3DFA278B2A37B4923F2E90E51B0BC5106AB64C5AD440B2F2FA0BA947098087B41471D301BA4C7443AFCC1BF9CAA4ED73CD_bingo%2CroleId%3D9B2FE4F49479DEF873FB476872C26800_bingo%2CstrengthenKey%3D16AC1C9F9C5A799B9F3AF3CF48BEE2ADA2831E619042C332ED9ECCC7B35C636FEC6010C9D0F0A9F20DF25A45F6F94EE9_bingo%22%7D&client=wh5"
},             
   {
        "qName": "极速29-8",
        "qTime": "10,15",
        "lqSpace": 1,
        "endDate":"2022-02-28",
        "qApi": "https://api.m.jd.com/client.action?functionId=lite_newBabelAwardCollection&body=%7B%22activityId%22%3A%223H885vA4sQj6ctYzzPVix4iiYN2P%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3D48BCEF1C9DFC2F254CD64C68D27A373E8419F6EC4E850C8035BC1671F5D6E4F2A3254C1957F77E9B9946E36A0A5967AB_bingo%2CroleId%3DDB74E57324B1DD95676E8AD1799695AC_bingo%2CstrengthenKey%3D7B2D08BFB8F5AED97FD74CE4DC39CA504DB4895B7538C676F39A44D76C8111F01C11242531BF9C0F2FA39D8546C2FFB9_bingo%22%2C%22platform%22%3A%221%22%2C%22orgType%22%3A%222%22%2C%22openId%22%3A%22-1%22%2C%22pageClickKey%22%3A%22-1%22%2C%22eid%22%3A%22HIFXCNJUOSKEW5YGZRVQPLQVQXE6HOGEALUIROI7B7OWGKBJQ67B4SX6KHO2ABSDPLLRL7WPROPGLFR2XY7SGIIPNU%22%2C%22fp%22%3A%22f7b69425f34d1f9c9fabb1b5af5fa37d%22%2C%22shshshfp%22%3A%22d9f1e242c31fba131dec6f2f027f7204%22%2C%22shshshfpa%22%3A%22ea31c31a-c0d9-2406-f919-3f786bb7ef30-1623947780%22%2C%22shshshfpb%22%3A%22j4A2tDOixLVGF02OOckBxBg%3D%3D%22%2C%22childActivityUrl%22%3A%22https%253A%252F%252Fpro.m.jd.com%252Fjdlite%252Factive%252F3H885vA4sQj6ctYzzPVix4iiYN2P%252Findex.html%253Fsid%253Dbb1ea830e2d283d712ab88b7b54cbfbw%2526un_area%253D16_1341_1347_44748%22%2C%22userArea%22%3A%22-1%22%2C%22client%22%3A%22-1%22%2C%22clientVersion%22%3A%22-1%22%2C%22uuid%22%3A%22-1%22%2C%22osVersion%22%3A%22-1%22%2C%22brand%22%3A%22-1%22%2C%22model%22%3A%22-1%22%2C%22networkType%22%3A%22-1%22%2C%22jda%22%3A%22122270672.16428809284271690940586.1642880928.1643721013.1643890529.18%22%2C%22sdkToken%22%3A%22%22%2C%22token%22%3A%22T55IO44YWM5MHCR64QLCM7LICWB3NHTNPC5XOTVTK3JDZH3GMSC2GIBEYGWRIC5C5AMLXUHCB7C6I%22%2C%22jstub%22%3A%22TIHBEET4JUIQSDGNOSSNFETYNULAESUME7TJAUCRQ33QF3U2W2HKHZXR57CAPP5MQ4U5JK5DXLLE3MV45H3PIA3MXL6FGLG6FA3OHOI%22%2C%22pageClick%22%3A%22Babel_Coupon%22%2C%22couponSource%22%3A%22ace%22%2C%22couponSourceDetail%22%3A%22-100%22%2C%22channel%22%3A%22%E9%80%9A%E5%A4%A9%E5%A1%94%E4%BC%9A%E5%9C%BA%22%2C%22headArea%22%3A%22605715ec560d6508f7403b91b677d79c%22%2C%22sceId%22%3A%22TTTh5%22%2C%22rstr%22%3A%2246318656%22%2C%22sstr%22%3A%221643890195001~1EHf7YFLSd5MDFvSWpVRzAxMQ%3D%3D.Xn9eZn9WeVtnc1h8UitzGz8dAX4XeQkbOV5lXXlxQ3gUZzleNwBhBl09LhouFwU8EgFfeyUaJAQLEhcgUnQU.805c61a3~6%2C1~8E8EB769B4F7EF41A51A8C4505DF5C9EBBC3A125~0mrnbft~C~SRNGXxELb2QfEEVcXxELbxtXBxwKeB9zcRUCe2EGHgIfBAkDHkUQHhFVAxQLeB1wdx8AfWlrHgAcAgMBGE0Rbx0QVUFfFgMCHhNBQRELFggFBgIKCwMEBwAFAwcLAQEJFhURRVRWEAkTQE1HRkVUR1UTGBtEV1AQCBFXUk1HRkVHUxEdFklXXBMIaQAFGAgCBwIeAwsdBQ8fAx0Hbx8TXlMRCAAeEFBCFgMRBQJXCgRSUg8HAwlRBQoEAwkHVwFXVwZSUV0BC1UFBFUTGBtdQhMIEH9YWkxLElBAX0UJWBsfEEUQCAIHAAoLCwEDCwYBBAgfEFtZEAkTDA8EBQAHAgcBAQoECgIGH1YBUFpVVFJXCwNXARQDBFAFUwEHV1wGCwMLVwIAFhURVEFQEAkTXg1yAEV2fVpJeG90dAEAfXxSX3tLcFYPDxEdFldFEAsQdVxeU1VWEnhcUR0TGBtdU0cQCBEDBA4LEB0QQVBDFgNoCgQDHgAIB2QfEENdEAlqFmtWVlxbEngDBBljQF4QHhFQWl1BXVhWEB8TBQgRHhMBHAsfBRsfEAMCBQsTGBsLAQcBBQAGBwgABwICAQcCBAoGAQIBBQAJBwoAHwUBdgEEAgkABgcBBAUHAg8ABAQECwABBw8FBwIQHhEAFmQfEFhdUxELFl9VVFdUVEdFFhURU1sQCBFEFhURUVgQCBFGBxcHHAIQHhFSUmZFEAsQAgITGBtRVhMIEEFQWl1cXwwGBAAADA8GBBMeEF5bFgNoAx0CHgNsGBtRXl5VEAkTVRsfEFxBVRELFlgRTw%3D%3D~1ceov6o%22%2C%22mitemAddrId%22%3A%22%22%2C%22geo%22%3A%7B%22lng%22%3A%22%22%2C%22lat%22%3A%22%22%7D%2C%22addressId%22%3A%227604691480%22%2C%22posLng%22%3A%22112.923991%22%2C%22posLat%22%3A%2222.448542%22%2C%22focus%22%3A%22%22%2C%22innerAnchor%22%3A%22%22%2C%22cv%22%3A%222.0%22%7D&screen=1080*1980&client=wh5&clientVersion=1.0.0&sid=bb1ea830e2d283d712ab88b7b54cbfbw&uuid=16428809284271690940586.391.1643890568774&area=19_1659_37259_37285"
    }
];
module.exports = {
  apiList
};