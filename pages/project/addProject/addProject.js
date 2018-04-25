// pages/project/addProject/addProject.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: ''
  },

  bindNameInput(e) {
    this.setData({
      name: e.detail.value
    })
  },

  submit() {
    wx.showLoading({
      title: '加载中'
    })
    wx.request({
      url: 'https://suyibin.cn/project/create',
      method: 'POST',
      data: {
        name: this.data.name,
        ownerId: wx.getStorageSync('openId')
      },
      success: function (res) {
        wx.hideLoading()
        if (res.data.success){
          wx.redirectTo({
            url: '../index/index'
          })
        } else {
          wx.showToast({
            title: res.data.msg,
            icon: 'none'
          })
        }
      }
    })
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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