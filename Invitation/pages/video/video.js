// pages/video/video.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        src:"https://cn-scya-dx-bcache-06.bilivideo.com/upgcxcode/49/64/174636449/174636449_nb2-1-16.mp4?e=ig8euxZM2rNcNbRVhwdVhwdlhWdVhwdVhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1631541516&gen=playurlv2&os=bcache&oi=3063197622&trid=0000a1debcbc18cf4169be150ad626fee1f4h&platform=html5&upsig=036f22784a5536d10f99009420fc70b5&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&cdnid=62706&mid=106205903&bvc=vod&nettype=0&logo=80000000",
        danmuList:[
            {text:"好甜", color:"#ff0000", time:1},
            {text:"新婚快乐", color:"#ff00ff", time:3}
        ]
    },
    videoContent:null,
    inputValue:null,

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        this.videoContent = wx.createVideoContext('myVideo')
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
    // 获取输入框中的值
    bindInputBlur:function(e){
        this.inputValue = e.detail.value
    },
    // 发送弹幕
    bindSendDanmu:function(){
        this.videoContent.sendDanmu({
            text:this.inputValue,
            color:"#f90"
        })
    },
    bindButtonTap:function(){
        wx.chooseVideo({
            sourceType:["album", "camera"], // 视频来源,相册或相机
            maxDuration: 60, // 拍摄视频的最长时间 
            camera: "back", // 选择默认拉起的是前置摄像头(front)还是后置摄像头(back)
            success:res=>{ //成功时执行的回调函数
                this.setData({
                    src:res.tempFilePath // 视频是本地选择的临时文件地址
                })
            }
        })
    }
})