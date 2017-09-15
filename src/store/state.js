/**
 * Created by hhc on 2017/7/14.
 */
import {playMode} from 'common/js/config'
import {loadSearch, loadPlay, loadFavorite} from 'common/js/cache'

const state = {
  singer: {},
  playing: false,  // 是否播放
  fullScreen: false,  // 是否下拉
  playlist: [],  // 播放列表
  sequenceList: [],  // 顺序列表
  mode: playMode.sequence,  // 播放模式
  currentIndex: -1,
  disc: {},
  topList: {},
  // searchHistory: [] // 查找记录数据应与local storage关联
  searchHistory: loadSearch(),
  playHistory: loadPlay(),
  favoriteList: loadFavorite()
}

export default state
