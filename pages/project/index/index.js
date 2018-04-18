Page({
  data: {
    list: [{
      id: '1',
      name: '任务名字1',
      picture: 'https://mailimg.teambition.com/logos/cover-media.jpg'
    }, {
      id: '2',
      name: '任务名字2',
      picture: 'https://mailimg.teambition.com/logos/cover-media.jpg'
    }, {
      id: '3',
      name: '任务名字3',
      picture: 'https://mailimg.teambition.com/logos/cover-media.jpg'
    }]
  },
  handleViewDetail() {
    wx.navigateTo({
      url: '../detail/detail?id=1'
    })
  }
})