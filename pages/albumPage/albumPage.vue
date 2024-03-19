<template>
	<view >
		<view class="par">
			<view class="tab" :style="{backgroundImage:'url('+albumInfo.album.blurPicUrl+')'}">
				<view class="group" >
					<uni-icons type="arrow-left" color="#ffffff" size="30" @click="navigateBack"></uni-icons>
					<view style="margin-left: 4px; color: white;">专辑</view>
				</view>
					<uni-icons  type="more-filled" size="30" color="#fff" style="transform: rotate(90deg);" ></uni-icons>
			</view>
			
			<view class="content">
				<view class="album_img" :style="{backgroundImage:'url('+albumInfo.album.blurPicUrl+')'}">
					<view style="display: flex;">
						<view style="background-color: black; width: 130px;height: 120px; border-radius: 50% 50% 0% 0%;"></view>
						
						<image style="position: absolute;border-radius: 10%;width: 130px;height: 120px;margin-top: 24px;" :src="albumInfo.album.blurPicUrl" ></image>
					</view>
					
					<view class="text">
						<view style="color:white;font-size: 16px;">{{albumInfo.songs[0].name}}</view>
						<view style="margin-top: 6px; font-size: 12px;color: white;">歌手：{{albumInfo.songs[0].ar[0].name}}</view>
						<view style="margin-top: 28px; font-size: 12px;color: gainsboro;">发行时间：{{Dates}}</view>
						<view class="text_info">{{albumInfo.album.description}}</view>
						
					</view>
				</view>
		
				<view class="album_song">
					
					<view class="album_song_c">
						<uni-icons type="refresh-filled" color="#ff3908" size="30"></uni-icons>
						<view style="margin-left: 12px;">播放全部({{albumInfo.album.size}})</view>
					</view>
					<view class="album_btn_c" style="margin-left: 26px;" v-for="(item,index) in albumInfo.album.size" :key="index" @click="play(index)">
						<view style="display: flex;align-items: center;" >
							<view style=" color:silver; ">{{index+1}}</view>
							<view class="album_song_i">
								<view style="font-size: 14px;">{{albumInfo.songs[index].name}}</view>
								<view style="font-size: 10px; color: silver;">{{albumInfo.songs[0].ar[0].name}}</view>
							</view>
						</view>
						
						<uni-icons custom-prefix="iconfont" type="icon-moreandroid" size="15" style="margin-right: 10px;" ></uni-icons>
					</view>
					
				</view>
			
			<view class="album_btn">
				<view class="album_btn_c">
					<uni-icons type="folder-add-filled" color="#000000" size="25"></uni-icons>
					<view style="font-size: 14px;">收藏</view>
				</view>
				<view style="border: solid gainsboro 0.8px;  height: 25px;"></view>
				<view class="album_btn_c">
					<uni-icons type="chat-filled" color="#000000" size="25"></uni-icons>
					<view style="font-size: 14px;">评论({{albumInfo.album.info.commentCount}})</view>
				</view>
				<view style="border: solid gainsboro 0.8px;  height: 25px;"></view>
				<view class="album_btn_c">
					<uni-icons type="redo-filled" color="#000000" size="25"></uni-icons>
					<view style="font-size: 14px;">分享({{albumInfo.album.info.shareCount}})</view>
				</view>
			</view>
		</view>
			<Play ref="sheet" :onChildClick="updata"  ></Play>	
	</view>
	</view>
</template>

<script>
	import Play from '../playerView/playerView.vue'

	export default {
		data() {
			return {
				url: "https://www.consistent.top",
				albumInfo:[],
				i:'',
				formattedDate:'',
				mp3:"",
				id:'',
				lastButtonId:"",
				shili:'',
				oldBack:"",
				nowOrup:''
				 
			}
		},
		components: {
			Play
		},
		methods: {
			//请求数据
			LoadInfo(inlet, value) {
				uni.request({
					url: this.$data.url + inlet,
					success: (v) => {
						var s = JSON.stringify(v.data)
						
						this[value] = JSON.parse(s)
					}
				})
			},
			//返回并携带参数
			navigateBack(){
				this.$router.push({
					path:"/pages/index/index",
					query:{back:this.$data.nowOrup}
				})
				
			
			},
			//检查歌曲是否可以播放可以就赋给MP3
			async check(value, i) {
			
				await uni.request({
						url: this.$data.url + "/check/music?id=" + this[value].songs[i].id,
						success: (v) => {
							var info = v.data
							if (info.success == false) {
								this.$data.mp3 = ""
								
							} else {
								this.$data.mp3 = "https://music.163.com/song/media/outer/url?id=" + this[value].songs[i].id+".mp3"
									console.log(this.$data.mp3)
									console.log("步骤一")
									//this.$refs.hide.m = this.$data.mp3
							}
			
							console.log(i + "ddd" + info.success)
						}
					})
				
				},
				//播放（点击事件）
				play(index){
					//调用事件
					 this.check('albumInfo',index)
					 //如果上一首的歌的实例存在就停止
					if(this.$data.shili!=null){
						this.$data.shili.stop();
					}
					//更新数据
					try {
						uni.setStorageSync("SongsInfo", {
							"img":this.$data.albumInfo.songs[index].al.picUrl ,
							"songName": this.$data.albumInfo.songs[index].name,
							"name": this.$data.albumInfo.songs[0].ar[0].name,
							"url":this.$data.mp3,
							"index":index
						})
					} catch (e) {
						//TODO handle the exception
					}
					//弹出播放界面
					this.$refs.sheet.toggle("bottom")
					// 获取当前点击的按钮ID
					 const currentButtonId = this.$data.i;
							console.log(currentButtonId)	
					 // 获取上次点击的按钮ID
								console.log(this.$data.lastButtonId) 							
					 // 比较两个按钮ID
					 if (currentButtonId === this.$data.lastButtonId) {
						 console.log("如果两个ID相等，说明是同一个按钮触发的跳转")
					   // 如果两个ID相等，说明是同一个按钮触发的跳转
					   // 使用上次的播放器状态
					   this.$refs.sheet.Singplay(this.$data.oldBack)
					   //赋之前音乐实例
					   this.$data.nowOrup = this.$data.oldBack
					   
					 } else {
						 
						  console.log("如果两个ID不相等，说明是不同按钮触发的跳转")
					   // 如果两个ID不相等，说明是不同按钮触发的跳转
					   // 如果之前的实例不为空
					   if(this.$data.lastButtonId!=null&&this.$data.oldBack!=null){
						
						   this.$data.oldBack.stop()
					   }
					   setTimeout(() => {
						   console.log(this.$data.mp3)
					   	 this.$refs.sheet.player(this.$data.mp3,index,'sheet')
						  //赋现在音乐实例
						 this.$data.nowOrup = this.$refs.sheet.tinnerAudioContext
						  console.log(this.$data.nowOrup)
					   }, 300)
					//提交状态管理
					   this.$store.commit('setLastButtonId',this.$data.i)
					   //this.$store.commit('setPlayerState',this.$refs.sheet.tinnerAudioContext.paused)
					 }
					
				},
				//更新数据
				async updata(index) {
				this.inputInfo('albumInfo',index)
				 await this.check('albumInfo', index)  
				
				   setTimeout(()=>{
					   this.$refs.sheet.m = this.$data.mp3
					   console.log("步骤二")
					   console.log("dfgfdhgfghgjghujf")
				   },500)
				
					},
					inputInfo(list,index){
						try {
							uni.setStorageSync("SongsInfo", {
								"img":this[list].album.blurPicUrl ,
								"songName": this[list].songs[index].name,
								"name": this[list].songs[0].ar[0].name,
								"url":this.$data.mp3,
								"index":index
							})
						} catch (e) {
							//TODO handle the exception
						}
					},
					
				
				
		},
		computed:{
			//获取的年月日需要更改格式
			Dates(){
				const timestamp = this.$data.albumInfo.album.publishTime
				const date = new Date(timestamp);
				
				// 获取年、月、日
				const year = date.getFullYear();
				const month = date.getMonth() + 1; // 月份从 0 开始，所以要加 1
				const day = date.getDate();
				
				// 格式化为年月日字符串
				 this.$data.formattedDate = `${year}.${month}.${day}`;
				return this.$data.formattedDate;
			}
		},
		onLoad(){
			//获取路由传递参数
			this.$data.i = this.$route.query.id
			//上一个页面的实例
			this.$data.shili = this.$route.query.shili||null
			//点击跳转到第二个页面时点击了播放再返回后保存的音乐实例
			this.$data.oldBack = this.$route.query.backshili||null
			this.LoadInfo("/album?id="+this.$data.i,'albumInfo')
			//使播放器更改样式类，让其置底
			setTimeout(()=>{
				this.$refs.sheet.isunder = true
			},300)
			
		
		
		},
		
		created() {
			//获取上次专辑id
			 this.$data.lastButtonId = this.$store.state.lastButtonId||null;
		},
		onShow() {
			//更新播放器实例
			if(this.$data.shili!=null){
				setTimeout(()=>{
						 this.$refs.sheet.Singplay(this.$data.shili)
					
				},300)
				}
			
		}
		
	}
</script>

<style scoped>
		@import "@/static/iconfont.css";
.tab{
	height: 88rpx;
	position: fixed;
	top: 0;
	display: flex;
	opacity: 0.9;
	align-items: center;
	width: 100%;
	z-index: 100;
	justify-content: space-between;
    background-size:cover;
	
	
	
}
.group{
	
	opacity: 1;
	display: flex;
	align-items: center;
	margin-left: 4px;
}
.content{
	
	margin-top:88rpx ;
	position: relative;
}
.album_img{
	background-color: transparent;
	width: 100%;
	height: 210px;

	background-size: cover;
	display: flex;
	box-sizing: border-box;
	justify-content: space-between;
	padding:  20px;
	flex-direction: row;

	
}
.text{
	margin-top: 23px;
	display: flex;
	flex-direction: column;
	margin-left: 16px;
}
.album_song{
	position: absolute;
	width: 100%;
	height: auto;

	
	
}
.album_btn{
	padding: 5px;
	display: flex;
	flex-direction: row;
	justify-content:space-around;
	align-items: center;
	width: 80%;
	height: 38px;
	border-radius: 10% / 50%;
	background-color: white;
	position:absolute;
	margin-top: -25px;
	left: 50%;
	transform: translateX(-50%);
}
.album_btn_c{
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 8px;	
}
.album_song_c{
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 20px;
	margin-top: 30px;
}
.album_song_i{
	display: flex;
	flex-direction: column;
	
	margin-left: 28px;
}
.text_info{
	width: 330rpx;
	height: auto;
	margin-top: 14px;
	 font-size: 12px;
	color: gainsboro;
	
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
}
.par >>> .Play{
	background-color: black;
	position: fixed;
	bottom: 0px; 
	
}

</style>
