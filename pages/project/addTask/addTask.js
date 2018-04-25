// pages/project/addTask/addTask.js
const utils = require('../../../utils/util')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    priority: ['普通', '紧急', '非常紧急'],
    remindType: ['一次', '每日', '每周', '每月'],
    model: {
      name: '',
      project: null,
      priority: 0,
      remindType: null,
      remindDate: null,
      remindTime: null,
      dueDate: null,
      dueTime: null,
      remark: ''
    }
  },

  bindNameInput(e) {
    this.setData({
      ['model.name']: e.detail.value
    })
  },

  bindRemarkTextArea(e) {
    this.setData({
      ['model.remark']: e.detail.value
    })
  },

  priorityChange(e) {
    this.setData({
      ['model.priority']: e.detail.value
    })
  },

  remindTypeChange(e) {
    this.setData({
      ['model.remindType']: e.detail.value
    })
  },

  remindDateChange(e) {
    this.setData({
      ['model.remindDate']: e.detail.value
    })
  },

  remindTimeChange(e) {
    this.setData({
      ['model.remindTime']: e.detail.value
    })
  },

  dueDateChange(e) {
    this.setData({
      ['model.dueDate']: e.detail.value
    })
  },

  dueTimeChange(e) {
    this.setData({
      ['model.dueTime']: e.detail.value
    })
  },

  currentPickerDate() {
    return utils.formatDateForPicker(new Date())
  },

  submit() {
    let me = this
    //FIXME check model
    wx.showLoading({
      title: '加载中'
    })
    wx.request({
      url: 'https://suyibin.cn/project/addTask',
      method: 'POST',
      data: this.data.model,
      success: function (res) {
        wx.hideLoading()
        if (res.statusCode === 200) {
          if (res.data.success) {
            wx.showToast({
              title: '成功',
              icon: 'success',
              success() {
                wx.redirectTo({
                  url: `../detail/detail?id=${me.data.model.project}`
                })
              }
            })
          } else {
            wx.showToast({
              title: res.data.msg,
              icon: 'none'
            })
          }
        } else {
          
        }
      }
    })
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      ['model.project']: options.id
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