<template>
	<view class="page">


		<view>
			<view class="nvg-bar" @click="back">
				<image style="width: 36px;height: 40xp;" src="../../static/fhb.svg"></image>
				<text style="color: white;">歌单</text>
			</view>
			

			<view class="top_box">
				<view class="menu_image">
					<image :src="music_data.coverImgUrl" class="top_image">
				</view>
				<view class="menu_jianjie">

					
					<view class="menu_xiala">
						<text class="tags">{{music_data.name}}</text>
					    <image class="xialia_image" src="/static/xlytc.png" @click="none"></image>
				    </view>
					
					<view class="zuozhe">
						<view>
							<image :src="imag_heat" class="auther_image"></image>
						</view>
						<view class="auther_name">
							<text>{{nickname}}</text>
						</view>
						<view class="zuozhe_guanzhu" @click="guanzhu_change">
							<view class="zuozhe_guanzhu_text">{{guanzhu}}</view>
						</view>


					</view>
				</view>

				

				<view class="menu_xiangqin" @click="open">
					<text class='xiangqing'>{{description}} ></text>
				</view>
				<view>

					<uni-popup ref="popup" background-color="#fff">
						<view class="popup-content">
							<text class="popup_text">{{description_all}}</text>
							<view class="popup-close">
								<button @click="close" class="popub_button">离开</button>
							</view>
						</view>
					</uni-popup>

					<uni-popup ref="share" type="share" safeArea backgroundColor="#fff">
						<uni-popup-share @select="select"></uni-popup-share>
					</uni-popup>


					<uni-popup ref="message" type="message">
						<uni-popup-message type="success" :duration="2000" class="message__box">
							<view class="message_text">
								收藏成功！
							</view>
						</uni-popup-message>
					</uni-popup>


					<uni-popup ref="alertDialog" type="dialog">
						<uni-popup-dialog :type="msgType" cancelText="关闭" confirmText="确定" title="确定不再收藏此歌单吗？"
							@confirm="dialogConfirm" @close="dialogClose"></uni-popup-dialog>
					</uni-popup>




				</view>



				<view class="menu_button">

					<view class="menu_button1" @click="share">
						<img class="bt1" src="/static/fx.png">
						<view>分享</view>
					</view>



					<button class="menu_button2" @click="comments">
						<img class="bt2" src="/static/xx.png">
						<view>消息</view>
					</button>


					<button class="menu_button3" @click="message">
						<img :src="shouchang_src" class="bt3">
						<view>收藏</view>
					</button>


				</view>

			</view>

			<view class="list_box">

            <view class="title">
				<view class="title_play" @click="play_music">
					<img src="/static/bf.png" class="paly_img">
				</view>
				<view class="play_all">
					播放全部
				</view>
				<view class="play_number">
					({{music_listdata.length}})
				</view>
				<view class="paly_img_xiazai">
					<img src="/static/xz.png" class="paly_img">
				</view>
				<view class="paly_img_quanxuan">
					<img src="/static/qx.png" class="paly_img">
				</view>
			</view>
			<view style="width: 100%;height: 1px;background-color: gray;opacity: 0.1;"></view>

				<uni-list v-for="(item ,index) in music_listdata" @click="play(index)">
					<view class="list_music" >
						<view class="music_xq_number">{{index+1}}</view>
						<view class="music_xiangqingbox">

							<view class="music_xiangqing">
								{{item.name}}
							</view>
							<view class="xiangqing_button">
								<view class="music_tag" v-if="privileges[index].pl<60">
									<view class="music_tag_text">超清母带</view>
								</view>
								<view class="music_tag3" v-if="privileges[index].flag==4">
									<view class="music_tag_text3">沉浸声</view>
								</view>
								
								<view class="music_tag2">
									{{item.ar[0].name}} - {{item.al.name}}
								</view>

							</view>


						</view>
						<view class="play_music">
							<img src="static/play_music.png" class="liet_image1">
						</view>
						<view class="genduo">
							<img src="static/gengduo.svg" class="list_image2">
						</view>
					</view>

				</uni-list>





			</view>

<view style="width: 100%;height: 40px;"></view>
		</view>

<Play ref="sheet" :onChildClick="updata"></Play>

	</view>
</template>

<script>
	import Play from '../playerView/playerView.vue'
	export default {
		data() {
			return {
				url: "https://www.consistent.top/playlist/detail?id=",
				dynamic_url: 'https://www.consistent.top/playlist/detail/dynamic?id=',
				id: "",
				music_data: {},
				imag_heat: "",
				description: "",
				description_all: "",
				music_listdata: [],
				privileges:[],
				tags: [],
				nickname: '',
				guanzhu: '+关注',
				guanzhuis: true,
				shouchang_num: '',
				fenxiang_num: '',
				pinglun_num: '',
				shouchang_src: '/static/sc.png',
				is_shouchang: false,
				msgType: 'error',
				is_dialogConfirm: false,
				mp3:'',
				nowOrup:'',
				oldBack:"",
				lastmp3:"",
				lastButtonId:"",
				shili:'',
			}
		},
		components: {
			Play
		},
		methods: {
			back(){
				if(this.$data.page =="my"){
					this.$router.push({
						path:"/pages/My/My",
						query:{back:this.$data.nowOrup}
					})
				}else{
					this.$router.push({
						path:"/pages/index/index",
						query:{back:this.$data.nowOrup}
					})
				}
				
				
			},
       async check(value, i) {
			await uni.request({
					url: this.$data.url + "/check/music?id=" + this[value][i].id,
					success: (v) => {
						var info = v.data
						if (info.success == false) {
							this.$data.mp3 = ""
							
						} else {
							this.$data.mp3 = "https://music.163.com/song/media/outer/url?id=" + this[value][i]
								.id + ".mp3"
								console.log(this.$data.mp3)
								console.log("步骤一")
								//this.$refs.hide.m = this.$data.mp3
						}

						console.log(i + "ddd" + info.success)
					}
				})
	
			},
			
			


		play(index){	
			 this.check('music_listdata',index)
			console.log(this.$data.music_listdata[index].al.picUrl)
			try {
				uni.setStorageSync("SongsInfo", {
					"img":this.$data.music_listdata[index].al.picUrl,
					"songName": this.$data.music_listdata[index].name,
					"name": this.$data.music_listdata[index].ar.name,
					"url":this.$data.mp3,
					"index":index
				})
			} catch (e) {
				//TODO handle the exception
			}
			this.$refs.sheet.toggle("bottom")
			// 获取当前点击的按钮ID
			 const currentButtonId = this.$data.id;
					console.log(currentButtonId)	
			 // 获取上次点击的按钮mp3
		
			//console.log(this.$data.lastButtonId)
		
			
			 // 获取上次播放器的状态
			// const lastPlayerState = this.$store.state.playerState;
						
			 // 比较两个按钮ID
			 if (currentButtonId === this.$data.lastButtonId) {
				// console.log("如果两个ID相等，说明是同一个按钮触发的跳转")
			   // 如果两个ID相等，说明是同一个按钮触发的跳转
			   // 在这里可以使用上次的播放器状态
			   this.$refs.sheet.Singplay(this.$data.oldBack)
			   this.$data.nowOrup = this.$data.oldBack
			   
			 } else {
				// this.check('music_listdata',index)
				  console.log("如果两个ID不相等，说明是不同按钮触发的跳转")
			   // 如果两个ID不相等，说明是不同按钮触发的跳转
			   // 在这里可以清除播放器状态或执行其他逻辑
			   if(this.$data.lastButtonId!=null&&this.$data.oldBack!=null){
				
			   	 this.$data.oldBack.stop()
				 
			   }
			   if(this.$data.shili!=null){
				   this.$data.shili.stop()
			   }
			   setTimeout(() => {
			   	 this.$refs.sheet.player(this.$data.mp3,index,'sheet')
				 	this.$data.nowOrup = this.$refs.sheet.tinnerAudioContext
			   }, 300)
			   
			   this.$store.commit('setLastButtonId',this.$data.id)
				
			   //this.$store.commit('setPlayerState',this.$refs.sheet.tinnerAudioContext.paused)
			}
			
		},
		async updata(index) {
		this.inputInfo('music_listdata',index)
		 await this.check('music_listdata', index)  
		
		   setTimeout(()=>{
			   this.$refs.sheet.m = this.$data.mp3
			   console.log("步骤二")
			   console.log("dfgfdhgfghgjghujf")
		   },500)
		
			},
			inputInfo(list,index){
				try {
					uni.setStorageSync("SongsInfo", {
						"img":this[list][index].al.picUrl,
						"songName":this[list][index].name,
						"name":this[list][index].ar.name,
						"url":this.$data.mp3,
						"index":index
					})
				} catch (e) {
					//TODO handle the exception
				}
			},
			
			//请求歌曲的评论数,是否收藏,播放数
			get_dynamic(url, id) {
				uni.request({
					url: url + id,
					success: (res) => {
						console.log(res.data.bookedCount)
						console.log('执行成功')
						// this.$data.fenxiang_num = res.data.shareCount.toString().substr(0, 3)
						// this.$data.pinglun_num = res.data.commentCount
						// this.$data.shouchang_num = res.data.bookedCount.toString().substr(0, 4)
					}
				});

			},
			//请求歌单详情
			LoadInfo(url, id) {
				uni.request({
					url: this.url + id,
					success: (v) => {

						var s = JSON.stringify(v.data.playlist)
						var music_data = JSON.parse(s)
						
						
						this.music_data = s
						this.$data.music_data = music_data
						// 歌曲音质
						var tag =  JSON.stringify(v.data.privileges)
						var tags = JSON.parse(tag)
						this.$data.privileges = tags
						console.log(tags)
						
						
						
						//歌单简介
						this.$data.description = music_data.description.substring(0, 29).replace(/\n/g, "");
						this.$data.description_all = music_data.description;
						// 获取头像 

						this.$data.imag_heat = music_data.subscribers[0].avatarUrl
						//获取音乐风格
						this.$data.tags = music_data.tags[0]

						//获取nickname
						this.$data.nickname = music_data.creator.nickname
						// 获取 music详情列表

						this.$data.music_listdata = music_data.tracks




					}


				})

			},

			dialogToggle(type) {
				this.msgType = type
				this.$refs.alertDialog.open()
			},

			open() {
				// 通过组件定义的ref调用uni-popup方法 ,如果传入参数 ，type 属性将失效 ，仅支持 ['top','left','bottom','right','center']
				this.$refs.popup.open('center')
			},
			share() {
				this.$refs.share.open()
			},
			select(e) {
				uni.showToast({
					title: `已分享到${e.item.text}`,
					icon: 'none',


				})
				this.$data.fenxiang_num++

			},
			dialogClose_open() {
				this.$refs.alertDialog.open()
			},
			message() {


				if (this.$data.is_shouchang != true) {
					this.$data.is_shouchang = !this.$data.is_shouchang
					this.$data.shouchang_src = '/static/sccg.png'
					this.$data.shouchang_num++;
					this.$refs.message.open()
				} else {
					this.dialogClose_open()
				}


			},
			dialogClose() {

			},
			dialogConfirm() {

				this.$data.is_shouchang = !this.$data.is_shouchang
				this.$data.shouchang_src = '/static/sc.png'
				this.$data.shouchang_num--;


			},
			close() {

				this.$refs.popup.close()
			},
			none(){
				uni.showToast({
				    title:"加载中",			//标题
				    duration:1000,	 	 //显示时间
					icon:"loading"      //图标
				})
			},
			guanzhu_change() {

				if (this.$data.guanzhuis == true) {
					this.$data.guanzhu = '已关注'
				} else {
					this.$data.guanzhu = '+关注'
				}
				this.$data.guanzhuis = !this.$data.guanzhuis
			},

			//跳转播放音乐界面传递歌曲ID
			to_playmusic(v) {

				uni.navigateTo({
					url: '/pages/playmusic/playmusic?id=' + JSON.stringify(v)
				});
			},
			//播放全部传递第一首歌曲ID
			play_music() {

				var play_music = this.$data.music_listdata[0].id
				uni.navigateTo({
					url: '/pages/playmusic/playmusic?id=' + JSON.stringify(play_music)
				});
			},
			//打开评论comments页面传递歌单ID
			comments() {
				uni.navigateTo({
					url: '/pages/comments/comments?id=' + JSON.stringify(this.$data.id)
				});

			},
       },
		onLoad(e) {
			this.$data.id = this.$route.query.id||null
			this.$data.oldBack = this.$route.query.backshili||null
			this.$data.page = this.$route.query.page||null
			this.$data.shili = this.$route.query.shili||null
			setTimeout(()=>{
				this.$refs.sheet.isunder = true
			},100)
			
			this.LoadInfo(this.$data.url, this.$data.id)
			this.get_dynamic(this.dynamic_url, this.$data.id)
		},
		created() {
			 this.$data.lastButtonId = this.$store.state.lastButtonId||null;
		//	 this.$data.lastmp3 = uni.getStorageSync("lastMp3")||null;
			 console.log(this.$data.lastmp3)
		},
		







	}
</script>

<style>
	.page {
		display: flex;
		flex-direction: column;
		background: linear-gradient(to right, #135c84, #406c8a, #066486);

	}

.nvg-bar{
	height: 40px;
	display: flex;
	flex-direction: row;
	align-items: center;
	margin: 8px 0px 0px 10px;
	font-size: 24px;
}
	.top_box {
		padding-top: 6px;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		background: linear-gradient(to right, #135c84, #406c8a, #066486);
		width: 100%;
		height: 260px;
		flex-wrap: wrap;
		border: none;
	}

	.top_image {
		width: 100%;
		height: 100%;
		border-radius: 8px;
		margin-left: 10px;
	}

	.title {
		display: flex;
		flex-direction: row;
		align-items: center;
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		background-color: rgba(255, 255, 255, 0.5);
		width: 100%;
		height: 40px;
		border-radius: 0px 0px 12px 12px;
		z-index: 20;
		border-style: none;
		position: relative;
	}

	.title_play {
		width: 9%;
		margin-left: 10px;
		margin-top: 4px;

	}

	.paly_img {
		width: 70%;
		z-index: 100;
	}

	.play_all {
		width: 80px;
		margin-left: 9px;
		font-weight: 700;
		font-size: 16px;
	}

	.play_number {
		margin-left: 2px;
		font-weight: 200;
		font-size: 13px;
		margin-top: 2px;
	}

	.paly_img_xiazai {
		width: 9%;
		margin-left: 180px;
		margin-top: 6px;
	}

	.paly_img_quanxuan {
		width: 6%;
		margin-left: 4px;
		margin-top: 6px;
	}

	.list_box {
		border: none;
		background-color: rgba(255, 255, 255, 0.99);
		width: 100%;
		border-radius: 12px 12px 0px 0px;
		padding-top: 10px;
		position: sticky;
	}

	.music_xiangqingbox {
		margin-left: 22px;

	}

	.music_xiangqing {
		color: #4a4a4a;
		font-size: 18px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		width: 70%;

	}

	.music_xq_number {
		margin-left: 12px;
		font-size: 19px;
	}

	.list_box2 {
		border: none;
	}

	.list_music {
		height: 58px;
		display: flex;
		flex-direction: row;
		align-items: center;
		background-color: rgba(255, 255, 255, 0.01);
		color: rgb(60, 65, 60);

	}

	.xiangqing_button {
		display: flex;
		flex-direction: row;
		align-items: center;
		font-size: 22rpx;
		font-weight: 100;

	}

	.genduo {

		position: absolute;
		margin-left: 370px;


	}

	.play_music {
		position: absolute;
		width: 80%;
		margin-left: 330px;
	}

	.liet_image1 {
		width: 8%;
	}

	.list_image2 {
		width: 20px;
		height: 20px;
		margin: 6px;
	}

	.music_tag {
		width: auto;
		height: 15px;
		border-style: solid;
		border-width: 0.8px;
		border-radius: 8px;
		color: rgb(158, 130, 58);
	}
	.music_tag_text2{
		width: auto;
		height: 8px;
		border-style: solid;
		border-width: 0.8px;
		border-radius: 6px;
		color: rgb(158, 130, 58);
		
	}
	.music_tag3{
		width: auto;
		height: 15px;
		border-style: solid;
		border-width: 0.8px;
		border-radius: 8px;
		color: rgb(158, 130, 58);
		margin-left: 2px;
		
		
	}
	.music_tag_text3{
		font-size: 5px;
		font-weight: 100;
		color: rgb(158, 130, 58);
	}

	.music_tag_text {
			font-size: 5px;
			font-weight: 100;
			color: rgb(158, 130, 58);
		
	}

	.music_tag2 {
		margin-left: 4px;
		margin-top: 2px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		width: 70%;
	}

	.list_title {
		border-radius: 12px 12px 12px 12px;

	}

	.tags {
		size: 18rpx;
		width: 200px;
		color: white;
	}

	.menu_image {
		width: 110px;
		height: 110px;
		margin-left: 10px;
	}

	.zuozhe {
		display: flex;
		height: 50px;
		width: 200px;
		flex-direction: row;
		margin-top: 10px;
		

	}

	.zuozhe_guanzhu {
		width: 42px;
		height: 20px;
		margin-top: 4px;
		background-color: white;
		border-radius: 10px;
		backdrop-filter: blur(20px);
		background-color: rgba(255, 255, 255, 0.4);
		margin-left: 6px;
	}

	.zuozhe_guanzhu_text {
		font-size: 8px;
		text-align: center;
		margin-top: 1px;
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		color: white;



	}

	.auther_image {
		width: 32px;
		height: 32px;
		border-radius: 100px;
	}

	.auther_name {
		margin: 3px;
		color: white;
		margin-left: 12px;
		margin-right: 12px;

	}

	.menu_jianjie {
		width: 240px;
		height: 80px;
		margin-left: 20px;
	}

	.menu_xiala {
		display: flex;
		flex-direction: row;
		width: 240px;
		height: 50px;
	}

	.xialia_image {
		width: 24px;
		height: 24px;
		margin-left: px;
	}

	.button_image {
		
	}

	.menu_xiangqin {
		width: 380px;
		height: 40px;
		margin-left: 20px;
	}

	.xingqingbutton {
		width: 32px;
		height: 32px;
		size: 32px;
		background-color: black;
	}

	.xiangqing {
		font-size: 14px;
		color: whitesmoke;
		align-items: center;
	}

	.xiangqing2 {
		font-size: 12px;
		color: white;
		align-items: center;
		margin-left: 42px;
	}

	.popup-content {
		@include flex;
		flex-direction: column;
		align-self: center;
		justify-content: center;
		margin-bottom: 480px;
		height: 100%;
		width: 100%;
		background-color: transparent;
	}
	.popup-close {
		width: 100%;
		height: 100%;
		position: 100;
		z-index: 100;
		margin-top: -480px;
		opacity: 0;
	}
	.popub_button {
		height: 100%;
		width: 100%;
		position: 100;
		z-index: 100;
	}


	.popup_text {
		font-size: 16px;
		color: white;

	}

	.menu_button {
		width: 100%;
		height: 32px;
		display: flex;
		flex-direction: row;
	}

	.menu_button1 {
		width: 100px;
		height: 32px;
		margin-left: 20px;
		background-color: rgba(255, 255, 255, 0.5);
		border-radius: 20px;
		z-index: 10;
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		font-size: 16px;
	}

	.menu_button2 {
		width: 100px;
		height: 32px;
		margin-left: 36px;
		background-color: rgba(255, 255, 255, 0.5);
		border-radius: 20px;
		z-index: 10;
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		font-size: 16px;
	}

	.menu_button3 {
		width: 100px;
		height: 32px;
		margin-right: 20px;
		background-color: #cd0000;
		z-index: 10;
		border-radius: 20px;
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		font-size: 16px;
	}

	.bt1 {
		width: 24px;
		height: 20px;
	}

	.bt1_text {
		font-size: 12px;
		color: white;
	}

	.bt2 {
		width: 24px;
		height: 26px;
	}

	.bt2_text {
		font-size: 12px;
		color: white;
	}

	.bt3 {
		width: 24px;
		height: 24px;
	}

	.bt3_text {
		font-size: 12px;
		color: white;
	}

	.popup-success {
		color: #fff;
		background-color: #cd0000;
	}

	.message__box {
		display: flex;
		flex-direction: column;
		background-color: red;
	}

	.message_text {

		font-size: 12px;
		margin-left: 160px;
		color: #fc0107;
	}
</style>