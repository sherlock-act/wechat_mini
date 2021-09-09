// pages/index/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        item:0,
        tab:0,
        playlist:[
            {
                id:1,
                title:"say you love me",
                singer:"西原健一郎",
                src:"/audio/Kenichiro Nishihara - Say You Love Me.mp3",
                coverImgUrl:"/images/say.jpg"
            },{
                id:2,
                title:"走不出的回忆",
                singer:"任然",
                src:"/audio/任然 - 走不出的回忆.mp3",
                coverImgUrl:"/images/reminiscence.jpg"
            },{
                id:3,
                title:"inside the lines",
                singer:"mike perry",
                src:"/audio/01 Inside the Lines (feat. Casso).m4a",
                coverImgUrl:"/images/inside.jpg"
            },{
                id:4,
                title:"我为至尊",
                singer:"长长点点",
                src:"/audio/o雷小去、岚之调、长长點點 - 我为至尊 (MV版).mp3",
                coverImgUrl:"/images/zhizun.jpg"
            },{
                id:5,
                title:"暁の車",
                singer:"南里侑香",
                src:"/audio/南里侑香 - 暁の車 (晓之车).mp3",
                coverImgUrl:"/images/strike_freedom.jpg"
            },{
                id:6,
                title:"星の扉",
                singer:"根岸さとり",
                src:"/audio/根岸さとり - STARGAZER ~星の扉 (STARGAZER ~星之门).mp3",
                coverImgUrl:"/images/freedom_gundom.jpg"
            }
        ],
        state:"paused",
        playIndex:0,
        play:{
            currentTime:"00:00",
            duration:"00:00",
            percent:0,
            title:"",
            singer:"",
            coverImgUrl:"/images/eixa_cover.jpg",
        }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },
    audioCtx:null,
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        this.audioCtx = wx.createInnerAudioContext()
        var that = this
        
        // 播放失败检测
        this.audioCtx.onError(function(){
            console.log('播放失败'+that.audioCtx.src)
        })

        // 自动播放下一首
        this.audioCtx.onEnded(function(){
            that.nextMusic()
        })

        // 自动更新播放时间
        this.audioCtx.onPlay(function(){})
        this.audioCtx.onTimeUpdate(function(){
            console.log(that.audioCtx.duration)
            that.setData({
                'play.duration':formatTime(that.audioCtx.duration),
                'play.currentTime':formatTime(that.audioCtx.currentTime),
                'play.percent':that.audioCtx.current/that.audioCtx.duration*100
            })
        })
     // 自动更新播放进度
     this.audioCtx.onPlay(function(){})
     this.audioCtx.onTimeUpdate(function(){
         that.setData({
             'play.duration': formatTime(that.audioCtx.duration),
             'play.currentTime': formatTime(that.audioCtx.currentTime),
             'play.percent': that.audioCtx.currentTime /
             that.audioCtx.duration * 100
            })
        })
        // 默认选择第一首歌曲开始自动播放
        this.setMusic(0)
        

        // 格式化时间
        function formatTime(time){
            var minute = Math.floor(time/60)%60
            var second = Math.floor(time)%60
            return(minute<10?'0'+minute:minute)+":"+(second<10?'0'+second:second)
        }
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
    // 设置点击标签换页的效果
    changeItem:function(e){
        this.setData({item:e.target.dataset.item})
    },
    changeTab:function(e){
        this.setData(
            {tab:e.detail.current}
        )
    },
    // 设置歌曲索引函数
    setMusic:function(index){
        var music = this.data.playlist[index]
        this.audioCtx.src = music.src
        this.setData({
            playIndex:index,
            "play.title":music.title,
            "play.singer":music.singer,
            "play.coverImgUrl":music.coverImgUrl,
            "play.currentTime":"00:00",
            "play.duration":"00:00",
            "play.percent":0
        })
    },
    // 播放音乐
    playMusic:function(){
        this.audioCtx.play()
        this.setData({state:"running"})
    },
    // 暂停音乐
    pauseMusic:function(){
        this.audioCtx.pause()
        this.setData({state:"paused"})
    },
    nextMusic:function(){
        var index = this.data.playIndex>=this.data.playlist.length-1?0:this.data.playIndex+1
        this.setMusic(index)
        if(this.data.state == 'running'){
            this.playMusic()
        }
    },
    // 拖动滑块调整播放进度
    sliderChange:function(e){
        var second = e.detail.value * this.audioCtx.duration/100
        this.audioCtx.seek(second)
    },
    // 点击播放列表中的歌曲进行播放
    change:function(e){
        // console.log(e)
        this.setMusic(e.currentTarget.dataset.index)
        this.playMusic()
    },
})