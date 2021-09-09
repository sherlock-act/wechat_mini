// pages/test/test.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

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
        // 创建InnerAudioContext对象
        // var audioCtx = wx.createAudioContext("id")
        const audioCtx = wx.createInnerAudioContext()
        // 设置音频资源地址
        audioCtx.src="/audio/Kenichiro Nishihara - Say You Love Me.mp3"
        // 当开始播放的时候,输出调试信息
        audioCtx.onPlay(function(){
            console.log("开始播放")
        })
        // 当发生错误的时候,输出调试信息
        audioCtx.onError(function(res){
            console.log(res.errMsg)  //错误信息
            console.log(res.errorCode)  // 错误码
        })
        // 开始播放
        audioCtx.play()
    },
    sliderChanging:function(e){
        console.log(e.detail.value)
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

    },
    scroll:function(e){
        console.log(e.detail)
    },
})