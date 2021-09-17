// pages/usercenter/usercenter.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLogin:false,
    envId: '',
    userAvatar:"/images/user_avatar.png",
    userName:"",
  },
  getLoginInfo() {
    wx.showLoading({
      title: '正在登录',
    })
    wx.getUserProfile({
      desc: '请允许',
      success:res=>{
        this.setData({
          userAvatar:res.userInfo.avatarUrl,
          userName:res.userInfo.nickName,
          isLogin:true
        })
      },fail:res=>{
        console.log("获取失败")
        console.log(res)
      }
    })
   wx.cloud.callFunction({
      name: 'quickstartFunctions',
      config: {
        env: this.data.envId
      },
      data: {
        type: 'getOpenId'
      }
    }).then((resp) => {
      app.globalData.userOpenId = resp.result.openid
     wx.hideLoading()
   }).catch((e) => {
      console.log(e)
     wx.hideLoading()
    })
  },

  clearLoginInfo() {
    this.setData({
      isLogin: false,
      userAvatar:"/images/user_avatar.png",
      userName:""
    })
    app.globalData.userOpenId = ""
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