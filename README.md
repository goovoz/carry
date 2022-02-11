
# jdYhq
jd_yhq_api.js 自己修改里面配置文件

拉取优惠券

cron 12 19 * * *

ql repo https://gitee.com/cxtwg2/jdYhq.git "jd_" "" "^jd[^_]"


领取优惠券 cron请修改为

55 * * * *


增加环境变量

环境变量名称为  YHQ_API

环境变量值为 3,1,3,250,8  

五个值不能少英文逗号隔开 分别对应 

重试次数,整点抢几种类型券,最大线程数,抢券间隔毫秒,默认抢前几个账号的券

