/*参数说明
*qName：String类型 券名称 不能重复
*qTime：String类型 领取券的时间 小时 多个用英文逗号隔开
*lqSpace：int类型 多久可以领取一次，1天可领取一次就设置为1 永久一次可设置999
*endDate：String类型 券结束日期 不用时分秒
*qApi：String类型 券API地址
{
        "qName": "极速299-30",
        "qTime": "9,12,20",
        "lqSpace": 1,
        "endDate":"2022-03-07",
        "qApi":""
},        
        
*/
let apiList=[
{
        "qName": "极速19-6",
        "qTime": "11",
        "lqSpace": 1,
        "endDate":"2022-03-07",
        "qApi":"https://api.m.jd.com/client.action?functionId=lite_newBabelAwardCollection&body=%7B%22activityId%22%3A%223H885vA4sQj6ctYzzPVix4iiYN2P%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3D66FD514975A6D7A9A8C925E03A0AE7E97ED47C9EA78685CFD7FC11C49AABFE1B6480443B919A9CE65D97B19CC493139F_bingo%2CroleId%3D87915CE560695A723336007BA596D411_bingo%2CstrengthenKey%3D19F512DCD8EE34ABE9C4FB4A92C2F42A0CAB7D6F7919A4AA82A18B6E3F05A003_bingo%22%2C%22platform%22%3A%221%22%2C%22orgType%22%3A%222%22%2C%22openId%22%3A%22-1%22%2C%22pageClickKey%22%3A%22-1%22%2C%22eid%22%3A%22MHF73PZD4RXITPXUYIBMX2FJ6EIBLS5HEN2RKYK25S2DMB2Z7CMUTZTUJTDHO4OCGOOAQL27FEL6NZ3XFUJ4BTR3LE%22%2C%22fp%22%3A%22635ebc223ad059b1deeedeee6dbcccb1%22%2C%22shshshfp%22%3A%22f0561ae8fc141633aec111a34dfffc6a%22%2C%22shshshfpa%22%3A%22fa440efc-0d6a-75d8-e63b-71e0c9f2c58b-1585835872%22%2C%22shshshfpb%22%3A%22f%2B0keZvdb0%2BKBXvZDcg6GXQ%3D%3D%22%2C%22childActivityUrl%22%3A%22https%253A%252F%252Fprodev.m.jd.com%252Fjdlite%252Factive%252F3H885vA4sQj6ctYzzPVix4iiYN2P%252Findex.html%253F_ts%253D1643795954896%2526utm_user%253Dplusmember%2526ad_od%253Dshare%2526utm_source%253Dandroidapp%2526utm_medium%253Dappshare%2526utm_campaign%253Dt_335139774%2526utm_term%253DWxfriends%22%2C%22userArea%22%3A%22-1%22%2C%22client%22%3A%22-1%22%2C%22clientVersion%22%3A%22-1%22%2C%22uuid%22%3A%22-1%22%2C%22osVersion%22%3A%22-1%22%2C%22brand%22%3A%22-1%22%2C%22model%22%3A%22-1%22%2C%22networkType%22%3A%22-1%22%2C%22jda%22%3A%22122270672.15858358306741562329961.1585835831.1641865445.1643796002.65%22%2C%22pageClick%22%3A%22Babel_Coupon%22%2C%22couponSource%22%3A%22ace%22%2C%22couponSourceDetail%22%3A%22-100%22%2C%22channel%22%3A%22%E9%80%9A%E5%A4%A9%E5%A1%94%E4%BC%9A%E5%9C%BA%22%2C%22headArea%22%3A%22605715ec560d6508f7403b91b677d79c%22%2C%22sceId%22%3A%22TTTh5%22%2C%22rstr%22%3A%2258579396%22%2C%22sstr%22%3A%221643796711396~1y4MyHyTIENMDFlZWxXeTAxMQ%3D%3D.VFNYZE5cU15jSFFXWCkoCyICIkENIQ8lB1RJW3tPSVQSZQdUGwp8SQ4ANiEdB1VHHDs9EzYTGgJTKw8oWFgS.75c67807~6%2C1~C430C2285E3C77FA5197736A00A4649E6A9A2CBF~15i2nbg~C~TBBHXRALahpWABpwdhx2HXIPAX8bRx9EEB0TXAEedQcfBR5yBg1hH0IeRxIeE1ULH3JlHgIccQYHcB5GG0YRHBBVAhVzfBsecAcFcB1NHkcVHhFUARwGDB4EeR51AWAGHU0eRxVvHxJGX1waCGgVVgEdBQUdD3wfcQNhdx5QHUwQHxVWBx0FBR0PfB9xA2F%2FHlAdTBBuGxBUQlwTCwkeEURBEQoQAAcMAQQOBAMBAwUHCwYBAwURHBBGVFwQCRVGR0RUV1dNVBEbEERVUxMLGlRVQ0ZGREdQExQQQ1NcEQppAgUUAwIDBh8BCx0ADh4CGwNuHBBbWxoIAhsQUEMQCxMPAVYPBVBWBAUAAFEEDgcEAAZUAV1XBlRXVwILVQYOVBEbEF1AEAsTb1tdBAARHBBFEwIDBQMBBAkEBgAJAQoBHhFaWRMLGlMRGxBVQFATCxpUGAdZVmpEVVMIGXh1akVqdlJWDnVrZg8OEh4TX04QCRV1XF9VXVQYe11UHBEcEF9QThAJFVERHBBCUkoQCWwFBQgeAAIOBG4bEEFfEAtqGlMRGxBSEh4TUBoeEVYQHxJTEx0aUxEbEFISbx0TUV1SFQgRVlRXV15UR0MQHxJTWxMCEEYVHhFTWxMLGkUAGQYdAxAdE1tUbEEQCRICABMUEFFTEAkSQFBfXF1eCgcLBQUIAgEEERsQXloQC2oJHgQFHgQCbx0TWl5cUBAJElMTHRpfQFAQCRJTE0w%3D~0nvdijz%22%2C%22mitemAddrId%22%3A%22%22%2C%22geo%22%3A%7B%22lng%22%3A%22%22%2C%22lat%22%3A%22%22%7D%2C%22addressId%22%3A%22%22%2C%22posLng%22%3A%22%22%2C%22posLat%22%3A%22%22%2C%22jdv%22%3A%22androidapp%7Ct_335139774%7Cappshare%7CWxfriends%22%2C%22focus%22%3A%22%22%2C%22innerAnchor%22%3A%22%22%2C%22cv%22%3A%222.0%22%7D&screen=800*1044&client=wh5&clientVersion=1.0.0&sid=&uuid=15858358306741562329961&area="
},    
{
        "qName": "极速15-5",
        "qTime": "18",
        "lqSpace": 1,
        "endDate":"2022-03-07",
        "qApi":"https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&body=%7B%22activityId%22%3A%223H885vA4sQj6ctYzzPVix4iiYN2P%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3D31CD88AE3992AFDBE729F4437067107B9B3F625470E56A2CAB857113A623EE891A57CA578240012281B37439A2B9E805_bingo%2CroleId%3DA0199859AAB898F2CB26E5F8DC20588A_bingo%2CstrengthenKey%3D16AC1C9F9C5A799B9F3AF3CF48BEE2ADA2831E619042C332ED9ECCC7B35C636FE9A2B1C98989EB5E616937C0E3177B30_bingo%22%7D&client=wh5"
},    
{
        "qName": "极速10-4",
        "qTime": "16",
        "lqSpace": 1,
        "endDate":"2022-03-07",
        "qApi":"https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&body=%7B%22activityId%22%3A%223H885vA4sQj6ctYzzPVix4iiYN2P%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3DFA278B2A37B4923F2E90E51B0BC5106AB64C5AD440B2F2FA0BA947098087B41471D301BA4C7443AFCC1BF9CAA4ED73CD_bingo%2CroleId%3D9B2FE4F49479DEF873FB476872C26800_bingo%2CstrengthenKey%3D16AC1C9F9C5A799B9F3AF3CF48BEE2ADA2831E619042C332ED9ECCC7B35C636FEC6010C9D0F0A9F20DF25A45F6F94EE9_bingo%22%7D&client=wh5"
},        
   {
        "qName": "极速299-30",
        "qTime": "9,12,20",
        "lqSpace": 1,
        "endDate":"2022-03-07",
        "qApi":"https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&client=wh5&body=%7B%22activityId%22%3A%222HiT37xFN9m62Bd9CmiFVynWvFoV%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3DC56937B1C4DC04B9483F2E53BEC38D3174EC3D359E31472C521C5BCAA1665A801EDB0DEB0F59BA9B8BE79BB20E08D245_bingo%2CroleId%3D594E073B3ACBED08DAF2D783821D4F98_bingo%2CstrengthenKey%3D19F512DCD8EE34ABE9C4FB4A92C2F42AD83DFBBF4B3F3AEE2E71AEE33B9D444C_bingo%22%7D"
   },        
   {
        "qName": "极速29-8",
        "qTime": "15,17",
        "lqSpace": 1,
        "endDate":"2022-03-07",
        "qApi": "https://api.m.jd.com/client.action?functionId=lite_newBabelAwardCollection&body=%7B%22activityId%22%3A%223H885vA4sQj6ctYzzPVix4iiYN2P%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3D48BCEF1C9DFC2F254CD64C68D27A373E8419F6EC4E850C8035BC1671F5D6E4F2A3254C1957F77E9B9946E36A0A5967AB_bingo%2CroleId%3DDB74E57324B1DD95676E8AD1799695AC_bingo%2CstrengthenKey%3D7B2D08BFB8F5AED97FD74CE4DC39CA504DB4895B7538C676F39A44D76C8111F01C11242531BF9C0F2FA39D8546C2FFB9_bingo%22%2C%22platform%22%3A%221%22%2C%22orgType%22%3A%222%22%2C%22openId%22%3A%22-1%22%2C%22pageClickKey%22%3A%22-1%22%2C%22eid%22%3A%22HIFXCNJUOSKEW5YGZRVQPLQVQXE6HOGEALUIROI7B7OWGKBJQ67B4SX6KHO2ABSDPLLRL7WPROPGLFR2XY7SGIIPNU%22%2C%22fp%22%3A%22f7b69425f34d1f9c9fabb1b5af5fa37d%22%2C%22shshshfp%22%3A%22d9f1e242c31fba131dec6f2f027f7204%22%2C%22shshshfpa%22%3A%22ea31c31a-c0d9-2406-f919-3f786bb7ef30-1623947780%22%2C%22shshshfpb%22%3A%22j4A2tDOixLVGF02OOckBxBg%3D%3D%22%2C%22childActivityUrl%22%3A%22https%253A%252F%252Fpro.m.jd.com%252Fjdlite%252Factive%252F3H885vA4sQj6ctYzzPVix4iiYN2P%252Findex.html%253Fsid%253Dbb1ea830e2d283d712ab88b7b54cbfbw%2526un_area%253D16_1341_1347_44748%22%2C%22userArea%22%3A%22-1%22%2C%22client%22%3A%22-1%22%2C%22clientVersion%22%3A%22-1%22%2C%22uuid%22%3A%22-1%22%2C%22osVersion%22%3A%22-1%22%2C%22brand%22%3A%22-1%22%2C%22model%22%3A%22-1%22%2C%22networkType%22%3A%22-1%22%2C%22jda%22%3A%22122270672.16428809284271690940586.1642880928.1643721013.1643890529.18%22%2C%22sdkToken%22%3A%22%22%2C%22token%22%3A%22T55IO44YWM5MHCR64QLCM7LICWB3NHTNPC5XOTVTK3JDZH3GMSC2GIBEYGWRIC5C5AMLXUHCB7C6I%22%2C%22jstub%22%3A%22TIHBEET4JUIQSDGNOSSNFETYNULAESUME7TJAUCRQ33QF3U2W2HKHZXR57CAPP5MQ4U5JK5DXLLE3MV45H3PIA3MXL6FGLG6FA3OHOI%22%2C%22pageClick%22%3A%22Babel_Coupon%22%2C%22couponSource%22%3A%22ace%22%2C%22couponSourceDetail%22%3A%22-100%22%2C%22channel%22%3A%22%E9%80%9A%E5%A4%A9%E5%A1%94%E4%BC%9A%E5%9C%BA%22%2C%22headArea%22%3A%22605715ec560d6508f7403b91b677d79c%22%2C%22sceId%22%3A%22TTTh5%22%2C%22rstr%22%3A%2246318656%22%2C%22sstr%22%3A%221643890195001~1EHf7YFLSd5MDFvSWpVRzAxMQ%3D%3D.Xn9eZn9WeVtnc1h8UitzGz8dAX4XeQkbOV5lXXlxQ3gUZzleNwBhBl09LhouFwU8EgFfeyUaJAQLEhcgUnQU.805c61a3~6%2C1~8E8EB769B4F7EF41A51A8C4505DF5C9EBBC3A125~0mrnbft~C~SRNGXxELb2QfEEVcXxELbxtXBxwKeB9zcRUCe2EGHgIfBAkDHkUQHhFVAxQLeB1wdx8AfWlrHgAcAgMBGE0Rbx0QVUFfFgMCHhNBQRELFggFBgIKCwMEBwAFAwcLAQEJFhURRVRWEAkTQE1HRkVUR1UTGBtEV1AQCBFXUk1HRkVHUxEdFklXXBMIaQAFGAgCBwIeAwsdBQ8fAx0Hbx8TXlMRCAAeEFBCFgMRBQJXCgRSUg8HAwlRBQoEAwkHVwFXVwZSUV0BC1UFBFUTGBtdQhMIEH9YWkxLElBAX0UJWBsfEEUQCAIHAAoLCwEDCwYBBAgfEFtZEAkTDA8EBQAHAgcBAQoECgIGH1YBUFpVVFJXCwNXARQDBFAFUwEHV1wGCwMLVwIAFhURVEFQEAkTXg1yAEV2fVpJeG90dAEAfXxSX3tLcFYPDxEdFldFEAsQdVxeU1VWEnhcUR0TGBtdU0cQCBEDBA4LEB0QQVBDFgNoCgQDHgAIB2QfEENdEAlqFmtWVlxbEngDBBljQF4QHhFQWl1BXVhWEB8TBQgRHhMBHAsfBRsfEAMCBQsTGBsLAQcBBQAGBwgABwICAQcCBAoGAQIBBQAJBwoAHwUBdgEEAgkABgcBBAUHAg8ABAQECwABBw8FBwIQHhEAFmQfEFhdUxELFl9VVFdUVEdFFhURU1sQCBFEFhURUVgQCBFGBxcHHAIQHhFSUmZFEAsQAgITGBtRVhMIEEFQWl1cXwwGBAAADA8GBBMeEF5bFgNoAx0CHgNsGBtRXl5VEAkTVRsfEFxBVRELFlgRTw%3D%3D~1ceov6o%22%2C%22mitemAddrId%22%3A%22%22%2C%22geo%22%3A%7B%22lng%22%3A%22%22%2C%22lat%22%3A%22%22%7D%2C%22addressId%22%3A%227604691480%22%2C%22posLng%22%3A%22112.923991%22%2C%22posLat%22%3A%2222.448542%22%2C%22focus%22%3A%22%22%2C%22innerAnchor%22%3A%22%22%2C%22cv%22%3A%222.0%22%7D&screen=1080*1980&client=wh5&clientVersion=1.0.0&sid=bb1ea830e2d283d712ab88b7b54cbfbw&uuid=16428809284271690940586.391.1643890568774&area=19_1659_37259_37285"
    }
    ,{
        "qName": "苹果-600",
        "qTime": "0",
        "lqSpace": 999,
        "endDate":"2022-02-14",
        "qApi": "https://api.m.jd.com/client.action?functionId=lite_newBabelAwardCollection&body=%7B%22activityId%22%3A%22UEro4WAa7vEhMypakgZQQDqfZhU%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3DD819468816E2937234B1C6D8E4C050F60E9BB421666B18FB095B42C1E7F56C530FE70994A1A1A898B09717687D1240A4_bingo%2CroleId%3D49B48992A5279EF8AC7B50C98E744B27_bingo%2CstrengthenKey%3D19F512DCD8EE34ABE9C4FB4A92C2F42A8B3886EFAB71729B33B6F3CE31E97C4F_bingo%22%2C%22platform%22%3A%221%22%2C%22orgType%22%3A%222%22%2C%22openId%22%3A%22-1%22%2C%22pageClickKey%22%3A%22-1%22%2C%22eid%22%3A%22WLADL2MPUQNW6PXYVAYNDW4Q4RWLYXCTP5KUEROD5FRP7S4FUCJ6TTLPKJXTQQOXRO2XG6QYGONV2GLY5WSXUQDVOI%22%2C%22fp%22%3A%225655b09b06c154cad00a053caed576af%22%2C%22shshshfp%22%3A%226a861ff2cce7cec59eed8fc78bb4a367%22%2C%22shshshfpa%22%3A%2261c528cd-4f62-5712-ec2e-97ccb92e246e-1616994312%22%2C%22shshshfpb%22%3A%22z7rmnwsWacNURG4gwnMIuAQ%3D%3D%22%2C%22childActivityUrl%22%3A%22https%253A%252F%252Fh5static.m.jd.com%252Fmall%252Factive%252FUEro4WAa7vEhMypakgZQQDqfZhU%252Findex.html%253F_ts%253D1643688698207%2526utm_source%253Diosapp%2526utm_medium%253Dappshare%2526utm_campaign%253Dt_335139774%2526utm_term%253DWxfriends%2526ad_od%253Dshare%2526utm_user%253Dplusmember%2526gx%253DRnFjlWANOzHfmNQUqYB0WVcFSwvcnvk%22%2C%22userArea%22%3A%22-1%22%2C%22client%22%3A%22-1%22%2C%22clientVersion%22%3A%22-1%22%2C%22uuid%22%3A%22-1%22%2C%22osVersion%22%3A%22-1%22%2C%22brand%22%3A%22-1%22%2C%22model%22%3A%22-1%22%2C%22networkType%22%3A%22-1%22%2C%22jda%22%3A%22168871293.1611038432689166039870.1611038433.1643688180.1643688776.41%22%2C%22sdkToken%22%3A%22%22%2C%22token%22%3A%22G2EVAQW6EW2SAEURVS7Y5764I6EWO6OMPMEVR75CHM7NNX3LDNG3OHZKOZF62JCHVM5N4QEAZ6C2Y%22%2C%22jstub%22%3A%225FEXZE4JKNHY6TPZLJ56JKLCPQP5X5DIAUGPWAM45DSG3HFSIMQHL3XASGOAH3UZN4TNGVWUTCPOIRTZP7PW7VJFAMGU57O7A3SJBDQ%22%2C%22pageClick%22%3A%22Babel_Coupon%22%2C%22couponSource%22%3A%22manual%22%2C%22couponSourceDetail%22%3A%22-100%22%2C%22channel%22%3A%22%E9%80%9A%E5%A4%A9%E5%A1%94%E4%BC%9A%E5%9C%BA%22%2C%22headArea%22%3A%22605715ec560d6508f7403b91b677d79c%22%2C%22sceId%22%3A%22TTTh5%22%2C%22rstr%22%3A%2273576898%22%2C%22sstr%22%3A%221643688771545~1QSXBpzXTk0MDFIS3dHTzAxMQ%3D%3D.eX1DdHlwc0Bxe39%2BRzkeeBNCcz0RABp0MXlnQGt5ZHoJdTF5NQ1wPSUlADQYKSg5Eh0PfxAwIQUCAgYedXYJ.507ae723~6%2C1~87CC1BC097EE4CEAFE7FC73438E9120A1A2F4382~040rj5d~C~TBFHWREIbmsaFUddWREIbhRSAh4AfB91cBoDfwUfBR0CBQYaQxEfFlcFGAV%2BG3R2GAZ6bBoHGQMDBB9GF2saFVRBWhEIBBoUREARDhEDAwIFAQsLDAMDDAMCBAcBDBEeF0FTUxEJFkdGQUJCUUZVFh8QQlNXFQkRUlVGQUNCQlIRGBFCUVgUDWgBAh8EBhoHDh8EGAYeAGsaFVlZFgkDGRRVRBEJFlcHVgJXBAsEUAUGAAMAD1VXDFcGBg4CVAFXAwZWBgdVFR8RWkMQDxR6Xl1GTBNTR1tAD18RGBFGFwwHAQcAAgsKAgEHAgcGGBFYXhQMFVIRGBFURVQUDRFJA0FfW0FFYFJQemZgcgJRQF1%2BfUZzZAsLFR8RWkUQDxRxWFxUWFYSfFhVGREfFl1TQxQMFVARGBFBVkQUDWgLAQIeBg8Fah8RRlwQD20UVhEfFlIQGRRXFR8RVREeF1cUGxFSFh8QVBRrGxFaW1IQDxRQUVVVUlVGQRQaFVJZFgkQQBQaFVBaFgkQQgUYAx0AFh8QVlBpQREJFgMDFxoUVVcRDhFAVFhSWF4OAwAHAgAODgsRGBFfXxQMbAIfBB8CaBoUVV9cUxEIF1cUGxFeR1QQDxRXFU4%3D~0ms7qhw%22%2C%22mitemAddrId%22%3A%22%22%2C%22geo%22%3A%7B%22lng%22%3A%22%22%2C%22lat%22%3A%22%22%7D%2C%22addressId%22%3A%22%22%2C%22posLng%22%3A%22%22%2C%22posLat%22%3A%22%22%2C%22jdv%22%3A%22iosapp%7Ct_335139774%7Cappshare%7CWxfriends%22%2C%22focus%22%3A%22%22%2C%22innerAnchor%22%3A%22%22%2C%22cv%22%3A%222.0%22%7D&screen=1080*2076&client=wh5&clientVersion=1.0.0&sid=&uuid=1611038432689166039870&area"
    }
];
module.exports = {
  apiList
};