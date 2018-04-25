// pages/project/detail/detail.js
Page({

  /**
   * 页面的初始数据
   * filterType 1待执行 2已经完成 3全部
   */
  data: {
    filterType: 1,
    model: {
      id: "1",
      name: '项目名字',
      tasks: [{
        id: "1",
        name: '任务名字',
        status: 1,
        discard: true
      }, {
        id: "2",
        name: '任务名字',
        status: 0,
        discard: false
      }]
    }
  },
  fbarChange: function(e){
    this.setData({
      filterType: e.target.dataset.num
    })
  },
  handleAddTask: function(e) {
    wx.navigateTo({
      url: `../addTask/addTask?id=${this.data.model._id}`
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let me = this;
    wx.showLoading({
      title: '加载中'
    })
    wx.request({
      url: `https://suyibin.cn/project/get/${options.id}`,
      method: 'POST',
      success: function (res) {
        wx.hideLoading()
        if (res.statusCode === 200) {
          if (res.data.success) {
            me.setData({
              model: res.data.data
            })
          } else {
            wx.redirectTo({
              url: '../index/index'
            })
          }
        } else {

        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})