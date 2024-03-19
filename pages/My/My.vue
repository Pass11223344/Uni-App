<template>
	<view class="al">
		<view class="head">
			<uni-icons type="bars" size="34" @click="showDrawer('showLeft')" style="margin-right: 80px;"></uni-icons>
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
			
			
			<view class="head_m">+添加状态</view>
			<image src="../../static/ss.svg" style="width: 30px;margin-left: 90px;"></image>
		</view>
		
		<view class="u">
		<view class="usa">
			<text class="usa_text">{{user.name}}</text>
			<view style="width: 50%;display: flex;flex-direction: row;justify-content: space-around;align-items: center;font-size: 14px;margin-top: 6px;opacity: 0.9;">
				<text>27关注</text>|
				<text>2粉丝</text>|
				<text>lv.8</text>
			</view>
		</view>
		<image src="../../static/tx.jpg" class="us" @click="login"/>
		</view>
		
		<view class="usb">
			<view class="usb_icon_up">
				<view class="usb_i"><image src="../../static/bdxz.svg" class="usb_img"/><text>本地下载</text></view>
				<view class="usb_i"><image src="../../static/yb.svg" class="usb_img"/><text>云盘</text></view>
				<view class="usb_i"><image src="../../static/yg.svg" class="usb_img"/><text>已购</text></view>
				<view class="usb_i"><image src="../../static/zjbf.svg" class="usb_img"/><text>最近播放</text></view>
			</view>
			
			<view class="usb_icon_down">
				<view class="usb_i"><image src="../../static/wdhy.svg" class="usb_img"/><text>我的好友</text></view>
				<view class="usb_i"><image src="../../static/schz.svg" class="usb_img"/><text>收藏和赞</text></view>
				<view class="usb_i"><image src="../../static/wdbk.svg" class="usb_img"/><text>我的播客</text></view>
				<view class="usb_i"><image src="../../static/zmjy.svg" class="usb_img"/><text>助眠解压</text></view>
			</view>

		</view>
		
		<view class="usc" v-for="i in mySong" @click="tosongslist(i.id)">
			<image class="usc_img" :src="i.coverImgUrl"/>
			<view class="usc_text">
				<text style="color: black;font-size: 18px;font-weight: bold;">我喜欢的音乐</text>
				<text style="font-size: 16px;color: black;">{{mySong[0].creator.djStatus}}首</text>
			</view>
			<view style="display: flex;flex-direction: row;width: 80px;height: 20px;align-self: center;border: 1px solid darkgray;border-radius: 15px;">
				<image style="width: 20px;height: 20px;" src="../../static/xdms.svg"/>
				<text style="font-size: 13px;">心动模式</text>
			</view>
		</view>
		
		<view class="tx">
			<text>创建歌单</text>
			<text>收藏歌单</text>
		</view>
		
		<view class="usd">
			<view class="gd" v-for="i in songsList" @click="tosongslist(i.id)">
				<image class="usc_img" :src="i.coverImgUrl"/>
				<view class="usc_text">
					<text style="color: black;font-size: 14px;font-weight: bold;">{{i.name}}</text>
					<text style="font-size: 13px;color: black;">{{i.trackCount}}首</text>
				</view>
				<image src="../../static/gengduo.svg" style="width: 30px;height: 30px;margin-left: 80px;"></image>
			</view>
			<Play ref="sheet" :onChildClick="updata"></Play>
		</view>
		
	</view>
</template>

<script>
	import Play from '../playerView/playerView.vue'
	export default {
		data() {
			return {
				id:'',
				user:[],
				mySong:[],
				songsList:[],
				url:'https://www.consistent.top',
				isjump:false,
				back:''
			}
		},
		components: {
			Play
		},
		methods: {
			tosongslist(i){
				
					var  clickCount = uni.getStorageSync("num") || 0;
					clickCount++
					uni.setStorageSync("num", clickCount);
					
					if(this.$data.isjump){
									
					this.$data.back = this.$route.query.back;
				
					}
					
					this.$router.push({
						path:"/pages/songslist/songslist",
						query:{id:i,backshili:this.$data.back,page:"my"}
					})
				this.$data.isjump = true	
			},
			showDrawer(e) {
				this.$refs[e].open()
			},
			LoadInfo(inlet, value) {
				uni.request({
					url: this.$data.url + inlet,
					success: (v) => {
						var s = JSON.stringify(v.data)
						this[value] = JSON.parse(s.substring(s.indexOf("["), s.lastIndexOf("]") + 1))
					}
				})
			},
			login(){
				if(!this.$data.user){
				    uni.navigateTo({
					    url: '/pages/login/login'
				});
				}else{
					uni.navigateTo({
						url: '/pages/setting/setting'
					});
				}
			}
		},
		onShow() {
			console.log("onshow__________")
			this.$data.back = this.$route.query.back;
			try {
				this.$refs.sheet.songInfo=uni.getStorageSync("SongsInfo")
				uni.removeStorageSync('num');		 
			} catch (e) {
				// error
			}
			if(this.$data.isjump&&this.$data.back.tinnerAudioContext!=""){
				setTimeout(()=>{
					
						this.$refs.sheet.Singplay(this.$data.back)		 
				},300)
			}
			
		},
		onLoad() {
			setTimeout(()=>{
				this.$refs.sheet.isunder = false
			},100)
			this.LoadInfo('/top/playlist?limit=10','songsList')
			this.LoadInfo('/top/playlist/highquality?limit=1','mySong')
			this.$data.user = !this.$data.user ? '请登录' : uni.getStorageSync('user')
		},
		onUnload() {
			this.$refs.sheet.tinnerAudioContext.stop()
		}
	}
</script>

<style>
	.al{
		height: 1400px;
		background: linear-gradient(whitesmoke,whitesmoke,rgba(232,232,232,0.2));
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	
	.head{
		margin-top: 8px;
		width: 100%;
		height: 50px;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
	}
	.head_m{
		width: 80px;
		height:20px ;
		font-size: 13px;
		text-align: center;
		background-color: white;
		border-radius: 40px;
	}
	
	.u{
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 30px;
	}
	.us{
		width: 68px;
		height: 68px;
		border-radius: 50%;
		background-color: blue;
		align-items: center;
		margin: -144px;
	}
	.usa{
		display: flex;
		flex-direction: column;
		width: 92%;
		height: 110px;
		background-color: white;
		border-radius: 10px;
		align-items: center;
	}
	.usa_text{
		margin-top: 48px;
		align-self: center;
		font-size: 24px;
		color: black;
		font-weight: bold;
	}
	
	
	.usb{
		display: flex;
		flex-direction: column;
		width: 92%;
		height: 140px;
		margin-top: 120px;
		background-color: white;
		border-radius: 10px;
	}
	.usb_icon_up{
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		margin-top: 14px;
	}
	.usb_icon_down{
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		margin-top: 4px;
	}
	.usb_i{
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: 13px;
		color: black;
	}
	.usb_img{
		width: 36px;
		height: 36px;
	}
	
	
	.usc{
		display: flex;
		flex-direction: row;
		width: 92%;
		height: 78px;
		margin-top: 10px;
		background-color: white;
		border-radius: 10px;
	}
	.usc_img{
		width: 52px;
		height: 52px;
		background-color: bisque;
		align-self: center;
		margin-left: 8px;
		border-radius: 6px;
	}
	.usc_text{
		align-self: center;
		display: flex;
		flex-direction: column;
		margin-left: 8px;
		flex-wrap: wrap;
		width: 180px;
	}
	
	.usd{
		display: flex;
		flex-direction: column;
		width: 92%;
		margin-top: 20px;
		background-color: white;
		border-radius: 10px;
	}
	
	.tx{
		width: 76%;
		margin-top: 20px;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		color: black;
	}
	
	.gd{
		display: flex;
		flex-direction: row;
		align-self: center;
		width: 100%;
		margin: 20px 0px 10px 0px;
		align-items: center;
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
