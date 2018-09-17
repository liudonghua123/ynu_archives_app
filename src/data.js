// import yaml from 'js-yaml'
import yaml from 'yamljs'

function getData() {
  const yamlData = `
  danganguan:
  - type: text
    content: 云南大学档案馆是高校综合档案馆，国家二级馆。云南大学档案安全保管基地，云南省爱国主义教育基地，云南省企业事业单位档案工作规范化管理示范单位。
  - type: image
    src: "https://7465-test-06f65f-1257618605.tcb.qcloud.la/1.“状元教授”袁嘉谷.jpg?sign=f5bd00eff22a8ec2a7d194c258c7abd6&t=1536993446"
  - type: text
    content: 云南大学文物群包括贡院考棚、熊庆来·李广田故居、会泽院、至公堂、泽清堂、云南第一天文点、映秋院等。2002年学校对贡院考棚、熊庆来·李广田故居进行修复，修复后的故居将收集来的实物进行陈列展览。
  guanqujianshe:
  - type: image
    src: "https://7465-test-06f65f-1257618605.tcb.qcloud.la/馆藏情况.jpg?sign=464f6e7bb1507c328d0f695267f73ada&t=1537169754"
  - type: text
    content: 占地面积240平方米，建筑面积1740平方米，其中库房面积1140平方米、实物档案陈列室180平方米、名人采访室120平方米、阅览室15平方米（座位数20个），服务器机房15平方米，培训室45平方米。
  - type: image
    src: "https://7465-test-06f65f-1257618605.tcb.qcloud.la/馆藏情况3.jpg?sign=a42187cb58164a8e9a2bcc41ddd37691&t=1537169820" 
  - type: audio
    name: 文物讲解1
    author: 徐娟
    src: https://7465-test-06f65f-1257618605.tcb.qcloud.la/文物讲解1.mp3?sign=36821c5bbe1d31e3cb10899c813e9207&t=1537000894
  - type: video
    src: http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400
  guancangdangan:
  - type: text
    content: 档案馆现有云南大学和云南政法高等专科学校两个全宗。主要有党群、行政、教学、科研、基建、财会、出版、外事、仪器设备、声像、实物、人物等12个门类的档案。目前，每年进馆档案以5000余卷左右的速度递增。截止2016年底，共有纸质档案103057卷，855958件，排列长度1679米，资料1164册，学籍卡片64000余张，缩微胶片100盘，卷片长1189米，还有录音、录象带、光盘和2450件有保存价值的实物。目前已完成党群、行政、教学、科研、照片、基建、财务、外事、照片等类别馆藏档案的部分数字化工作，机读文件目61.6万条，全文电子文件218163件、2284536页。
  - type: image
    src: "https://7465-test-06f65f-1257618605.tcb.qcloud.la/449120284034457189.jpg?sign=d15d6d1bcbd8994fafe00dc363b04e84&t=1537149572"
  yanjiuchengguo:
  - type: image
    src: "https://7465-test-06f65f-1257618605.tcb.qcloud.la/校史研究成果清单1.jpg?sign=acf95b535b8fe67c62d890427ab31270&t=1537149809"
  - type: image
    src: "https://7465-test-06f65f-1257618605.tcb.qcloud.la/校史研究成果清单2.jpg?sign=4639207a0f8fba65cf3e15585bc75cb9&t=1537149880"
  - type: image
    src: "https://7465-test-06f65f-1257618605.tcb.qcloud.la/校史研究成果清单3.jpg?sign=ad9e87629928f2773bd00bf6ff0084b1&t=1537150010"
  - type: image
    src: "https://7465-test-06f65f-1257618605.tcb.qcloud.la/校史研究成果清单4.jpg?sign=1e5fc8f73984177a5ae38d4de4164cb5&t=1537150057"
  - type: image
    src: "https://7465-test-06f65f-1257618605.tcb.qcloud.la/校史研究成果2.jpg?sign=63212197fe62144e5d309fb80883533a&t=1537150137"
  zhiyuanzhezhaomu:
  - type: image
    src: "https://7465-test-06f65f-1257618605.tcb.qcloud.la/志愿者招募1.jpg?sign=e6028797366ca669c7a56681cf5b0c4e&t=1537171694" 
  - type: image
    src: "https://7465-test-06f65f-1257618605.tcb.qcloud.la/志愿者招募2.jpg?sign=171b131bc2421425b8a9e962b1ff1a5a&t=1537171783"
  - type: image
    src: "https://7465-test-06f65f-1257618605.tcb.qcloud.la/志愿者招募3.jpg?sign=3438d1fada2edb5a3f26aced30072f74&t=1537172275"
  - type: image
    src: "https://7465-test-06f65f-1257618605.tcb.qcloud.la/志愿者招募4.jpg?sign=fded52297d3cb01e2cfcfa431a8c0a5e&t=1537172368"
  guidangzhinan:
  - type: image
    src: "https://7465-test-06f65f-1257618605.tcb.qcloud.la/归档指南1.jpg?sign=a01afe73d4ded580835943a1132909fe&t=1537170582"
  - type: image
    src: "https://7465-test-06f65f-1257618605.tcb.qcloud.la/归档指南2.jpg?sign=1f1a1e12e994bb2a582e80d2ae364cd7&t=1537170651"
  danganzhengji:
  - type: image
    src: "https://7465-test-06f65f-1257618605.tcb.qcloud.la/幻灯片1.JPG?sign=c597818fcf287b957a67e92183598401&t=1537172530"
  - type: image
    src: "https://7465-test-06f65f-1257618605.tcb.qcloud.la/幻灯片2.JPG?sign=edd4396e4d442f4d1e80831c6e8a35e4&t=1537172576"
  - type: image
    src: "https://7465-test-06f65f-1257618605.tcb.qcloud.la/幻灯片3.JPG?sign=1830521baeb624506ce7891a565233e8&t=1537172617"
  - type: image
    src: "https://7465-test-06f65f-1257618605.tcb.qcloud.la/幻灯片4.JPG?sign=7c5e06beee5b0366ea8ce1c29167748f&t=1537172661"
  - type: image
    src: "https://7465-test-06f65f-1257618605.tcb.qcloud.la/幻灯片5.JPG?sign=f360f74d55b081a4ff71f0bc7d275722&t=1537172696"
  - type: image
    src: "https://7465-test-06f65f-1257618605.tcb.qcloud.la/幻灯片6.JPG?sign=b8fb6b4cd50c6b16c8f0db076dc74cfb&t=1537172745"
  - type: image
    src: "https://7465-test-06f65f-1257618605.tcb.qcloud.la/幻灯片7.JPG?sign=804b1a5644eaac93de9f6c88cf426eb2&t=1537172795"
  - type: image
    src: "https://7465-test-06f65f-1257618605.tcb.qcloud.la/幻灯片8.JPG?sign=8f492087ee6459a6f6616c968738b7aa&t=1537172829"
  - type: image
    src: "https://7465-test-06f65f-1257618605.tcb.qcloud.la/幻灯片9.JPG?sign=d62ba58761c84a2ba87a58685a1d1829&t=1537172866"
  changjianwenti:
  - type: image
    src: "https://7465-test-06f65f-1257618605.tcb.qcloud.la/常见问题.png?sign=d11f3f142fc7f2e0a688ca13bbc4af77&t=1537173659"
  - type: image
    src: "https://7465-test-06f65f-1257618605.tcb.qcloud.la/常见问题2.png?sign=0e068889f8cfad24bbcb7630869a6348&t=1537173836"
  zhiyuanzhefengcai:
  - type: image
    src: "https://7465-test-06f65f-1257618605.tcb.qcloud.la/志愿者风采1.jpg?sign=1a33325a7d9f3aee90a502c234724e04&t=1537174964"
  - type: image
    src: "https://7465-test-06f65f-1257618605.tcb.qcloud.la/志愿者风采2.jpg?sign=9bedb34838b4a3710ace6a3e14f29c1f&t=1537175035"
  - type: image
    src: "https://7465-test-06f65f-1257618605.tcb.qcloud.la/志愿者风采30.jpg?sign=4795edad05acb94d5ffd8b0302bd80c4&t=1537176410"
  - type: image
    src: "https://7465-test-06f65f-1257618605.tcb.qcloud.la/志愿者风采31.jpg?sign=cb9069d4f0e793a5fc66884d19697ec3&t=1537176176"
  - type: image
    src: "https://7465-test-06f65f-1257618605.tcb.qcloud.la/志愿者风采4.jpg?sign=0d4346d4d89b4825c3f238cfff496771&t=1537175228"
  - type: image
    src: "https://7465-test-06f65f-1257618605.tcb.qcloud.la/志愿者风采50.jpg?sign=ec8c91be00f0bb1675017470c09dd379&t=1537176571"
  - type: image
    src: "https://7465-test-06f65f-1257618605.tcb.qcloud.la/志愿者风采6.jpg?sign=5fb4a2fa91757bd1533584b3324a9159&t=1537175299"
  cjfy:
  - type: image
    src: "https://7465-test-06f65f-1257618605.tcb.qcloud.la/1.“状元教授”袁嘉谷.jpg?sign=2bfa5db8d80c0af12fe204fb5b280a98&t=1536996787"
  - type: text
    content: 1.“状元教授”袁嘉谷
  - type: image
    src: https://7465-test-06f65f-1257618605.tcb.qcloud.la/2.国学大师刘文典.jpg?sign=ffe9ceb37782998b7d2c4a7300517841&t=1536996813
  - type: text
    content: 2.国学大师刘文典
  - type: image
    src: https://7465-test-06f65f-1257618605.tcb.qcloud.la/3.社会学奠基人“费孝通”.jpg?sign=a6f4fb2297716121b66d12bcd8d0ea37&t=1536996835
  - type: text
    content: 3.社会学奠基人“费孝通”
  `
  // const data = yaml.load(yamlData)
  const data = yaml.parse(yamlData)
  console.info(`data.js data: ${data}`)
  return data
}
export default getData
