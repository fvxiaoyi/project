Page({
  data: {
    list: []
  },
  handleViewDetail(e) {
    wx.navigateTo({
      url: `../detail/detail?id=${e.currentTarget.dataset.id}`
    })
  },
  handleAddProject() {
    wx.navigateTo({
      url: '../addProject/addProject'
    })
  },
  onLoad: function (options) {
    let me = this;
    wx.showLoading({
      title: '加载中'
    })
    wx.request({
      url: 'https://suyibin.cn/project/query',
      method: 'POST',
      data: {
        ownerId: wx.getStorageSync('openId')
      },
      success(res) {
        wx.hideLoading()
        if (res.statusCode === 200) {
          if (res.data.success) {
            me.setData({
              list: res.data.data
            })
          }
        } else {
          
        }
        
      }
    })
  }
})