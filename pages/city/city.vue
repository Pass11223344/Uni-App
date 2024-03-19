<template>
	<view class="con">
		<view class="head">
			<uni-icons type="bars" size="34" @click="showDrawer('showLeft')" style="margin-right: 20px;"></uni-icons>
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
			<view class="head_n">
				<text>广场</text>
				<view class="head_nn">
					<text>视频</text>
					<view style="width: 50%;height: 3px;border-radius: 1.5px;background-color: #e12300;"></view>
				</view>
				<text>歌房</text>
			</view>
			<image src="../../static/tj.svg" style="width: 30px;margin-left: 28px;"></image>
		</view>
	<view style="width: 100%;height: 1px;background-color: black;opacity: 0.1;margin-top: 69px;"></view>
		
	<view class="body">
		<view v-for="i,index in mvList" >
			<view class="body_n">
				
				<video :src="ads[index].url" class="vdo" id="myVideo" controls direction="90"></video>
						
				<view class="body_nn">
					<view style="font-size: 14px; text-overflow: ellipsis; overflow: hidden; white-space: pre-wrap;max-height: 20px;" >{{i.name}}</view>
					<view style="height: 30px;display: flex;flex-direction: row;justify-content: space-between;align-items: center;">
						<image :src="i.cover" style="width: 18px;height: 18px;border-radius: 9px;"></image>
						<view style="font-size: 12px;width: 36%;opacity: 0.7;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">{{i.artistName}}</view>
						<image src="../../static/z.svg" style="width: 12px;height: 12px;margin-left: 18px;"></image>
						<view style="width: 28%;font-size: 12px;">{{(i.playCount - i.playCount%1000)/10000}}万</view>
					</view>
				</view>
			</view>
		</view>
	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mvList:[],
				ads:[],
				videos:[],
				url:'https://www.consistent.top',
				src:'',
				nowid:'',
				oldid:'',
				danmuList: [{
				    text: '第 1s 出现的弹幕',
				    color: '#ff0000',
				    time: 1
				},
				{
				    text: '第 3s 出现的弹幕',
				    color: '#ff00ff',
				    time: 3
				}],
				danmuValue: '',
			}
		},
		methods: {
			showDrawer(e) {
				this.$refs[e].open()
			},
			LoadInfo(inlet, value) {
				uni.request({
					url: this.$data.url + inlet,
					success: (v) => {
						var s = JSON.stringify(v.data)
						this[value] = JSON.parse(s.substring(s.indexOf("["), s.lastIndexOf("]") + 1))
						console.log(this.$data.mvList)
						for(let i in this.$data.mvList){
							this.mvD(this.$data.mvList[i].id)
						}
					}
				})
			},
			mvD(i){
              	uni.request({	
					url: 'https://www.consistent.top/mv/url?id=' + i,
					success: (res) => {
						var a = JSON.stringify(res.data.data)
						this.$data.ads.push(JSON.parse(a))
					}
				})
			},
			play(){
				
			},
			sendDanmu() {
			            this.videoContext.sendDanmu({
			                text: this.danmuValue,
			                color: this.getRandomColor()
			            });
			            this.danmuValue = '';
			        },
			getRandomColor() {
			            const rgb = []
			            for (let i = 0; i < 3; ++i) {
			                let color = Math.floor(Math.random() * 256).toString(16)
			                color = color.length == 1 ? '0' + color : color
			                rgb.push(color)
			            }
			            return '#' + rgb.join('')
			        },
					
			
		},
		onLoad() {
			this.LoadInfo('/mv/first?limit=40','mvList')
			this.videoContext = uni.createVideoContext('myVideo')
		}
	}
</script>

<style>
.con{
	display: flex;
	flex-direction: column;
	background-color: whitesmoke;
}
.head{
	background-color: whitesmoke;
	width: 100%;
	height: 70px;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	position: fixed;
	z-index: 100;
	}
	.head_n{
		width: 44%;
		display: flex;
		justify-content: space-around;
		font-size: 40rpx;
		font-weight: bold;
		color: #515151;
	}
	.head_nn{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
.body{
	width: 96%;
	display: flex;

	flex-wrap: wrap;
	margin-top: 10px;
	align-self: center;
	justify-content: space-between;
	}
	.body_n{
		width: 170px;
		height: 150px;
		background-color: white;
	
		display: flex;
		flex-direction: column;
		margin-top: 10px;
		position: sticky;
	}
	.body_nn{
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		margin: 0px 0px 0px 6px;
	}
.vdo{
	width: 100%;
	height: 120px;
	border-radius: 10px 10px 0px 0px;
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
