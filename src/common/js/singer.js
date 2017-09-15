/**
 * Created by hhc on 2017/7/14.
 */
// 构造Singer类
export default class Singer {
  constructor({id, name}) {
    this.id = id
    this.name = name
    // 图片头像url通过拼接
    this.avatar = `https://y.gtimg.cn/music/photo_new/T001R300x300M000${id}.jpg?max_age=2592000`
  }
}
