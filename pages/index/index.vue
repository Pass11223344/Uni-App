<template>

	<view class="content">
		<view class="draw">

			<uni-icons type="bars" size="34" @click="showDrawer('showLeft')" style="margin-left: 15rpx;"></uni-icons>
			<uni-drawer ref="showLeft" mode="left" :width="320" @change="change($event,'showLeft')">
				<view class="dr">
					<view class="dr_h">
						<image src="../../static/tx.jpg" style="width: 34px;height: 34px;margin-left: 10px;border-radius: 15px;"></image>
						<view style="height: 25px;margin-left: 10px;align-self: center;">小智</view>
						<image src="../../static/gd.svg" style="width: 16px;height: 16px;align-self: center;"></image>
						<image src="../../static/sm.svg" style="width: 30px;height: 30px;margin-left: 176px;"></image>
					</view>
					<view style="width: 100%;height: 1px;background-color: black;opacity: 0.1;margin-top: 8px;"></view>
					<scroll-view class="dr_l" scroll-y="true">
					<view class="dr_ll">
						<view class="dr_lll">
							<image src="../../static/wdxx.svg" style="width: 22px;height: 22px;"></image>
							<text style="width: 80%;">我的消息</text>
							<image src="../../static/gd.svg" style="width: 18px;height: 18px;"></image>
						</view>
						<view style="width: 96%;height: 1px;background-color: black;opacity: 0.1;"></view>
						<view class="dr_lll">
							<image src="../../static/ybzx.svg" style="width: 22px;height: 22px;"></image>
							<text style="width: 80%;">云贝中心</text>
							<image src="../../static/gd.svg" style="width: 18px;height: 18px;"></image>
						</view>
						<view style="width: 96%;height: 1px;background-color: black;opacity: 0.1;"></view>
						<view class="dr_lll">
							<image src="../../static/czzzx.svg" style="width: 22px;height: 22px;"></image>
							<text style="width: 80%;">创作者中心</text>
							<image src="../../static/gd.svg" style="width: 18px;height: 18px;"></image>
						</view>
					</view>
					
					
					<view class="dr_ll">
						<view class="dr_lll">
							<image src="../../static/sz.svg" style="width: 22px;height: 22px;"></image>
							<text style="width: 80%;">设置</text>
							<image src="../../static/gd.svg" style="width: 18px;height: 18px;"></image>
						</view>
						<view style="width: 96%;height: 1px;background-color: black;opacity: 0.1;"></view>
						<view class="dr_lll">
							<image src="../../static/dsgb.svg" style="width: 22px;height: 22px;"></image>
							<text style="width: 80%;">定时关闭</text>
							<image src="../../static/gd.svg" style="width: 18px;height: 18px;"></image>
						</view>
						<view style="width: 96%;height: 1px;background-color: black;opacity: 0.1;"></view>
						<view class="dr_lll">
							<image src="../../static/gxzp.svg" style="width: 22px;height: 22px;"></image>
							<text style="width: 80%;">个性装扮</text>
							<image src="../../static/gd.svg" style="width: 18px;height: 18px;"></image>
						</view>
						<view style="width: 96%;height: 1px;background-color: black;opacity: 0.1;"></view>
						<view class="dr_lll">
							<image src="../../static/btbc.svg" style="width: 22px;height: 22px;"></image>
							<text style="width: 80%;">边听边存</text>
							<image src="../../static/gd.svg" style="width: 18px;height: 18px;"></image>
						</view>
						<view style="width: 96%;height: 1px;background-color: black;opacity: 0.1;"></view>
						<view class="dr_lll">
							<image src="../../static/zxtgmll.svg" style="width: 22px;height: 22px;"></image>
							<text style="width: 80%;">在线听歌免流量</text>
							<image src="../../static/gd.svg" style="width: 18px;height: 18px;"></image>
						</view>
						<view style="width: 96%;height: 1px;background-color: black;opacity: 0.1;"></view>
						<view class="dr_lll">
							<image src="../../static/yyhmd.svg" style="width: 22px;height: 22px;"></image>
							<text style="width: 80%;">音乐黑名单</text>
							<image src="../../static/gd.svg" style="width: 18px;height: 18px;"></image>
						</view>
						<view style="width: 96%;height: 1px;background-color: black;opacity: 0.1;"></view>
						<view class="dr_lll">
							<image src="../../static/qsnms.svg" style="width: 22px;height: 22px;"></image>
							<text style="width: 80%;">青少年模式</text>
							<image src="../../static/gd.svg" style="width: 18px;height: 18px;"></image>
						</view>
						<view style="width: 96%;height: 1px;background-color: black;opacity: 0.1;"></view>
						<view class="dr_lll">
							<image src="../../static/yynz.svg" style="width: 22px;height: 22px;"></image>
							<text style="width: 80%;">音乐闹钟</text>
							<image src="../../static/gd.svg" style="width: 18px;height: 18px;"></image>
						</view><view style="width: 96%;height: 1px;background-color: black;opacity: 0.1;"></view>
						<view class="dr_lll">
							<image src="../../static/gy.svg" style="width: 22px;height: 22px;"></image>
							<text style="width: 80%;">关于</text>
							<image src="../../static/gd.svg" style="width: 18px;height: 18px;"></image>
						</view>
					</view>
					
					
					<view class="dr_ll" style="height: 38px;">
						<text style="color: indianred;font-weight: bold;">退出登录/关闭</text>
					</view>
					<view style="height: 120px;"></view>
					</scroll-view> 
				</view>
			</uni-drawer>


			<uni-search-bar placeholder="搜索" bgColor="#EEEEEE" @confirm="search" style="width: 200px;  " />
			<uni-icons type="scan" size="30" style="margin-left: 25rpx;"></uni-icons>
			<uni-icons type="mic-filled" size="30" style="margin-left: 50rpx;"></uni-icons>
		</view>

		<view class="swiper">
			<swiper :indicator-dots="true" indicator-active-color="#ecfffb" indicator-color="#9fafb2" :autoplay="true"
				:interval="3000" :duration="1000" style="border-radius: 15rpx; height: 100%;">
				<swiper-item class="swiper_item" v-for="(item,index) in bannerInfo" :index="index" :key="index">
					<image style="background-color: aliceblue;" mode="widthFix" :src="item.pic"></image>
				</swiper-item>

			</swiper>
		</view>

		<uni-grid :column="4" :highlight="true" @change="click" :showBorder="false">
			<uni-grid-item v-for="(item, index) in labList" :index="index" :key="index">
				<view class="grid-item-box" style="background-color: #fff;">
					<view style="width: 30px; height: 30px;">
						<image style="width: 100%; height: 100%;" :src="item.icon"></image>
					</view>

					<text class="text">{{item.title}}</text>
				</view>
			</uni-grid-item>
		</uni-grid>



		<text style="font-weight: bold; margin-left: 34rpx; margin-top: 15rpx;">推荐歌单 ></text>
		<scroll-view class="scroll" :scroll-x="true">
			<view class="scroll_item" v-for="(item,index) in songSheet " @click="tosonglist(item.id)">
				<view class="songSheet">

					<view class="sSheet_text">
						<uni-icons type="fire-filled" size="20" color="#ff0000"></uni-icons>
						{{callnumFormat(item.playCount)}}
					</view>
					<image class="sSheet_img" :src="item.picUrl"></image>

				</view>
				<view class="songSheet_text">{{item.name}}</view>
			</view>



		</scroll-view>
		<view class="line"></view>
		<text style="font-weight: bold; margin-left: 34rpx; margin-top: 15rpx;">定制原创</text>
		<scroll-view class="scroll" scroll-x="true" style="height: 350rpx;">
			<view class="scroll_itemT" v-for="(item,index) in 6" :key="index">
				<view class="y_item" style="margin-top: 0px;" v-for="(t,i) in 3"
					@click="getInfo_hobby(musicList[index*3+i].album.picUrl,musicList[index*3+i].name,musicList[index*3+i].artists[0].name,'musicList',index*3+i)">
					<image class="y_item_img" style="width: 50px; height: 90%; " mode="scaleToFill"
						:src="musicList[index*3+i].album.picUrl"></image>
					<view
						style=" width: 60%;margin-top: -10px; margin-left: 10px; font-size: 14px; overflow: hidden; text-overflow: ellipsis;">
						{{musicList[index*3+i].name}}
						<view style="margin-top: 6px; font-size: 8px;">{{musicList[index*3+i].artists[0].name}}</view>
					</view>
					<!-- musicList[index].picUrl -->
				</view>



			</view>

		</scroll-view>
		<text style="font-weight: bold; margin-left: 34rpx; margin-top: 15rpx;">新碟上架></text>
		<scroll-view class="scroll" scroll-x="true" style="height: 400rpx;">
			<view class="scroll_itemT" v-for="(item,index) in 6" :key="index">
				<view class="y_item" style="margin-top: 5px;height: 28.3%;" v-for="(t,i) in 3"
					@click="getInfo_hobby(newSongList[index*3+i].picUrl,newSongList[index*3+i].name,newSongList[index*3+i].artists[0].name,'newSongList',index*3+i)">
					<view class="album">
						<image class="y_item_img" style="width: 25px; height: 25px; position: absolute;
						border-radius: 50%; margin-left: 32px; " mode="scaleToFill" :src="newSongList[index*3+i].picUrl"></image>
						<image class="y_item_img" style="width: 50px; height: 29%; position: absolute; 
						 margin-top:10 px;" mode="scaleToFill" :src="newSongList[index*3+i].picUrl"></image>

					</view>

					<view
						style="width: 60%; margin-top: -10px; margin-left: 10px; font-size: 14px; overflow: hidden; text-overflow: ellipsis; ">
						{{newSongList[index*3+i].name}}
						<view style="margin-top: 6px; font-size: 8px;">{{newSongList[index*3+i].artists[0].name}}</view>
					</view>
					<!-- musicList[index].picUrl -->
				</view>
			</view>
		</scroll-view>
		<view style="height: 80px;"> </view>
		<Play ref="hide" :onChildClick="updata"></Play>

	</view>

</template>

<script>
	import Play from '../playerView/playerView.vue'
	import {
		numFormat
	} from './util.js'
	import styles from './style.css'
	export default {
		data() {
			return {
				hide: true,
				url: "https://www.consistent.top",
				title: 'Uni-App',
				showRight: false,
				showLeft: false,
				songSheet: [],
				bannerInfo: [],
				labList: [{
						"title": "每日推荐",
						"icon": "../../static/tuijian.svg"
					},
					{
						"title": "精品歌单",
						"icon": "../../static/gedan.svg"
					},
					{
						"title": "数字专辑",
						"icon": "../../static/zhuanji.svg"
					},
					{
						"title": "歌手排行",
						"icon": "../../static/bangdan.svg"
					}
				],
				musicList: [],
				newSongList: [],
				songId: [],
				song_Id: [],
				mp3: "",
				back:'',
				isjump:false,
				isjumpd:false,


			}
		},
		components: {
			Play
		},

		methods: {
			tosonglist(id){
				var  clickCount = uni.getStorageSync("num") || 0;
				clickCount++
				uni.setStorageSync("num", clickCount);
				
				if(this.$data.isjump){
									
					this.$data.back = this.$route.query.back;
				
					}
					
					this.$router.push({
						path:"/pages/songslist/songslist",
						query:{id:id,backshili:this.$data.back,page:'home',shili:this.$refs.hide.tinnerAudioContext}
					})
				this.$data.isjump = true	
			},
		 getInfo_hobby(img, songName, name, id, index) {				  
				switch (id) {
					//歌曲
					case 'musicList':
						//判断是否跳转到专辑页面并点击了播放
					if(this.$data.isjump&&this.$data.back!=null){
					this.$data.back = this.$route.query.back;
					this.$data.back.stop();
					}
					//是否是第一次点击
					var  clickCount =  uni.getStorageSync("count") || 0;
					clickCount++
					uni.setStorageSync("count", clickCount);
				    this.check('musicList', index)
					//更新数据
						try {
							uni.setStorageSync("SongsInfo", {
								"img": img,
								"songName": songName,
								"name": name,
								"url":this.$data.mp3,
								"index":index
							})
						} catch (e) {
							//TODO handle the exception
						}
						//弹出播放页面
						this.$refs.hide.toggle("bottom")
						//调用playerView页面播放器
						setTimeout(() => {						
								this.$refs.hide.player(this.$data.mp3,index,'song')
								//状态管理提交
								  this.$store.commit('setLastButtonId',this.$data.mp3)
				
						}, 300)
                      
						break;
					case 'newSongList':
					//专辑
						var Mp3Id = this.$data.newSongList[index].id
						//是否是第一次点击
						var  clickCount = uni.getStorageSync("num") || 0;
						clickCount++
						uni.setStorageSync("num", clickCount);
							//判断是否跳转到专辑页面并点击了播放
						if(this.$data.isjump&&this.$data.back!=null){
										
						this.$data.back = this.$route.query.back;
					
						}
						/*
						页面跳转
						id:专辑id
						shili:当前音乐播放器实例
						backshili：页面跳转后返回的音乐实例
						*/
						this.$router.push({
							path:"/pages/albumPage/albumPage",
							query:{id:Mp3Id,shili:this.$refs.hide.tinnerAudioContext,backshili:this.$data.back}
						})
					this.$data.isjump = true
						break;
				}



			},
			search(res) {
				uni.showToast({
					title: '搜索：' + res.value,
					icon: 'none'
				})
			},

			callnumFormat(num) {
				return numFormat(num);

			},

			onNavigationBarButtonTap(e) {
				if (this.showLeft) {
					this.$refs.showLeft.close()
				} else {
					this.$refs.showLeft.open()
				}
			},
			// app端拦截返回事件 ，仅app端生效
			onBackPress() {
				if (this.showRight || this.showLeft) {
					this.$refs.showLeft.close()
					this.$refs.showRight.close()
					return true
				}
			},
			showDrawer(e) {
				this.$refs[e].open()
			},
			// 关闭窗口
			closeDrawer(e) {
				this.$refs[e].close()
			},
			// 抽屉状态发生变化触发
			change(e, type) {
				console.log((type === 'showLeft' ? '左窗口' : '右窗口') + (e ? '打开' : '关闭'));
				this[type] = e
			},
			click(e) {
				console.log(e.detail.index)
			},
			//网络请求
			LoadInfo(inlet, value) {
				uni.request({
					url: this.$data.url + inlet,
					success: (v) => {
						var s = JSON.stringify(v.data)

						this[value] = JSON.parse(s.substring(s.indexOf("["), s.lastIndexOf("]") + 1))
					}
				})
			},
			//检查拿到的歌曲id能否使用
		async check(value, i) {
			await uni.request({
					url: this.$data.url + "/check/music?id=" + this[value][i].privilege.id,
					success: (v) => {
						var info = v.data
						if (info.success == false) {
							this.$data.mp3 = ""
							
						} else {
							this.$data.mp3 = "https://music.163.com/song/media/outer/url?id=" + this[value][i]
								.privilege.id + ".mp3"
								console.log(this.$data.mp3)
								console.log("步骤一")
								
						}

						console.log(i + "ddd" + info.success)
					}
				})
	
			},
			
			

		//下一首功能（半成品返回后无法使用）
		async updata(index) {	
		this.inputInfo('musicList',index)
		 await this.check('musicList', index)  
		
           setTimeout(()=>{
			   this.$refs.hide.m = this.$data.mp3
			   console.log("步骤二")
			   console.log("dfgfdhgfghgjghujf")
		   },500)

			},
			inputInfo(list,index){
				try {
					uni.setStorageSync("SongsInfo", {
						"img": this[list][index].album.picUrl,
						"songName": this[list][index].name,
						"name": this[list][index].artists[0].name,
						"url":this.$data.mp3,
						"index":index
					})
				} catch (e) {
					//TODO handle the exception
				}
			},
			
			
		},
		onLoad() {
			//获取自定义组件实例
			this.$data.hide = this.$refs.hide
			//获取接口数据
			this.LoadInfo("/personalized?limit=6", 'songSheet')
			this.LoadInfo("/banner?type=1", 'bannerInfo')
			this.LoadInfo("/top/song?type=0", 'musicList')
			this.LoadInfo("/top/album?offset=0&limit=18&area=ZH", 'newSongList')
			//清除缓存
				try {
					uni.removeStorageSync('count');
					uni.removeStorageSync('num');
					 uni.removeStorageSync("SongsInfo")
					 
				} catch (e) {
					// error
				}
		},
		
		onShow() {
			console.log("Onshow-------------------------------------")
			//获取路由返回的实例
			this.$data.back = this.$route.query.back||null;
			//更新数据
				try {
					this.$refs.hide.songInfo=uni.getStorageSync("SongsInfo")
					uni.removeStorageSync('num');		 
				} catch (e) {
					// error
				}
				//更新播放器实例
				if(this.$data.back!=""){
				setTimeout(()=>{
						 this.$refs.hide.Singplay(this.$data.back)		 
				},300)
				}
				
		},
		
		


	}
</script>

<style>
	@import "@/static/iconfont.css";

	.content {

		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.grid-item-box {
		flex: 1;
		// position: relative;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 15px 0;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}

	image {
		width: 100%;
	}

	.draw {
		height: 88rpx;
		position: fixed;
		top: 0;
		display: flex;
		background-color: #d1d1d1;
		align-items: center;
		width: 100%;
		z-index: 100;

	}

	.search {
		width: 420rpx;
		margin-left: 40rpx;
		border: solid 2rpx;
		margin-top: 10rpx;
		border-radius: 20rpx;
		background-color: aquamarine;
	}

	.draw_img {

		width: 50rpx;
		height: 50rpx;
		margin: 18rpx 20rpx 16rpx 18px;
	}

	.line {
		opacity: 0.1;
		margin-top: 26rpx;
		width: 100%;
		height: 1rpx;
		border-top: solid 1rpx gray;
	}

	.under {
		align-self: center;
		width: 100%;
	}

	.text {
		font-size: 14px;
		margin-top: 5px;
	}
	.dr{
		display: flex;
		flex-direction: column;
	}
	.dr_h{
		display: flex;
		flex-direction: row;
		margin-top: 10px;
	}
	.dr_l{
		width: 90%;
		align-self: center;
		margin-top: 6px;
	}
	.dr_ll{
		width: 100%;
		background-color: white;
		margin-top: 20px;
		border-radius: 10px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
	}
	.dr_lll{
		width: 96%;
		height: 40px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}
	.dr_lll_icon{
		width: 28px;
		height: 28px;
		background-color: skyblue;
	}
</style>