// pages/index/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        isPlayingMusic:false
    },
    bgm:null,
    music_url:'https://webfs.tx.kugou.com/202109122136/23dd67dfebdc5003620115c80fac605a/G197/M0A/0C/19/ZYcBAF5Qt_OAC-G1AEKrwEU9gmQ038.mp3',
    music_coverImagUrl:"https://imgessl.kugou.com/stdmusic/20150718/20150718033944627685.jpg",

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.bgm = wx.getBackgroundAudioManager()
        this.bgm.title = "marry me"
        this.bgm.epname = "wedding"
        this.bgm.singer = "singer"
        this.bgm.coverImgUrl = this.music_coverImagUrl
        this.bgm.onCanplay(()=>{
            this.bgm.pause()
        })
        this.bgm.src = this.music_url
    },
    // 控制背景音乐播放
    play:function(e){
        if(this.data.isPlayingMusic){
            this.bgm.pause()
        }else{
            this.bgm.play()
        }
        this.setData({
            isPlayingMusic:!this.data.isPlayingMusic
        })
    },
    // 拨打电话
    callGroom:function(){
        wx.makePhoneCall({
          phoneNumber: '15308255956',
        })
    },
    callBride:function(){
        wx.makePhoneCall({
          phoneNumber: '18116632953',
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