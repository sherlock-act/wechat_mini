// pages/arithmetic/arithmetic.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topic_list:["1+1=", "1+2="],
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
    if(!getApp().globalData.userOpenId){
      console.log("条件成立")
      wx.switchTab({
        url: '../usercenter/usercenter',
        success:res=>{
          console.log("登录成功")
          console.log(res)
        },fail:res=>{
          console.log("登录失败")
          console.log(res)
        }
      })
    }
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