// import yaml from 'js-yaml'
import yaml from 'yamljs'

function getData() {
  const yamlData = `
  danganguan:
  - type: text
    content: 云南大学档案馆是高校综合档案馆，国家二级馆。云南大学档案安全保管基地，云南省爱国主义教育基地，云南省企业事业单位档案工作规范化管理示范单位。
  - type: image
    src: "../images/logo1.jpg"
  - type: audio
    poster: http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000
    name: 此时此刻
    author: 许巍
    src: http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46
  - type: video
    src: http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400
  - type: text
    content: 云南大学文物群包括贡院考棚、熊庆来·李广田故居、会泽院、至公堂、泽清堂、云南第一天文点、映秋院等。2002年学校对贡院考棚、熊庆来·李广田故居进行修复，修复后的故居将收集来的实物进行陈列展览。
  guanqujianshe:
  - type: text
    content: 占地面积240平方米，建筑面积1740平方米，其中库房面积1140平方米、实物档案陈列室180平方米、名人采访室120平方米、阅览室15平方米（座位数20个），服务器机房15平方米，培训室45平方米。
  `
  // const data = yaml.load(yamlData)
  const data = yaml.parse(yamlData)
  console.info(`data.js data: ${data}`)
  return data
}
export default getData
