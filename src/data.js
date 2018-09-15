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
  - type: text
    content: 占地面积240平方米，建筑面积1740平方米，其中库房面积1140平方米、实物档案陈列室180平方米、名人采访室120平方米、阅览室15平方米（座位数20个），服务器机房15平方米，培训室45平方米。
  - type: audio
    name: 文物讲解1
    author: 徐娟
    src: https://7465-test-06f65f-1257618605.tcb.qcloud.la/文物讲解1.mp3?sign=36821c5bbe1d31e3cb10899c813e9207&t=1537000894
  - type: video
    src: http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400
  cjfy:
  - type: image
    src: https://7465-test-06f65f-1257618605.tcb.qcloud.la/1.“状元教授”袁嘉谷.jpg?sign=2bfa5db8d80c0af12fe204fb5b280a98&t=1536996787
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
