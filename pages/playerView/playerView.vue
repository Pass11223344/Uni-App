<template>
	<view >
		
			<view :class="!isunder ?'example-body':'example-two'" v-if="hide" >
				<view class="button" type="primary"  v-on:click="toggle('bottom')"> 
				<image style="width: 40px; height: 40px;" :src="songInfo.img"></image>  
				<text style="width: 60%; height: 30px; text-overflow: ellipsis; overflow: hidden; white-space:nowrap; ">{{songInfo.songName}}-{{songInfo.name}}</text>
						<view v-on:click.stop="playA($event)">
							<uni-icons custom-prefix="iconfont" 
							:type="isplay?'icon-bofang':'icon-zanting'"  
							size="30"  class="list" 
							 ></uni-icons>
						</view>														
							<uni-icons custom-prefix="iconfont" type="icon-outdent"  size="30"  class="list"></uni-icons>						
				</view>
				
			</view>	
		
			<!-- 普通弹窗 -->
			<view>
			<uni-popup ref="popup"  @change="change" class="im">
				<view class="popup-content" >
					<view  class="title">
					<uni-icons type="bottom" size="30" @click="close()"></uni-icons>
					<text>{{songInfo.songName}}</text>
					<uni-icons custom-prefix="iconfont" type="icon-share" size="28"></uni-icons>
					</view>
					<view class="player">
						<image class="img" :src="songInfo.img" :animation="animationData"></image>
					</view>
					
					<view style="display: flex;justify-content: space-around;margin-top: 140rpx;">
						<uni-icons  type="heart" size="30"></uni-icons>
						<uni-icons custom-prefix="iconfont" type="icon-down" size="30"></uni-icons>
						<uni-icons custom-prefix="iconfont" type="icon-moreandroid" size="30"></uni-icons>
					</view>
					
					<view class="seek">
						<view v-model="currentTime">{{ruTime(currentTime)}}</view>
						<slider style="width: 90%;"  active-color="#007aff" block-size="12" :max="Duration" :value="currentTime" @change="changeTime" />
						<view >{{ruTime(Duration)}}</view>
					</view>
					<view class="btn">
						<uni-icons custom-prefix="iconfont" type="icon-refresh" size="35"></uni-icons>
						
						<uni-icons custom-prefix="iconfont" type="icon-step-backward" size="35" @click="prev()"></uni-icons>
						<uni-icons custom-prefix="iconfont" :type="isplay?'icon-play-circle-fill':'icon-poweroff-circle-fill'" size="65" @click="playAudio()"></uni-icons>
						<uni-icons custom-prefix="iconfont" type="icon-step-forward" size="35" @click="next()"></uni-icons>
						<uni-icons custom-prefix="iconfont" type="icon-outdent" size="35"></uni-icons>
						
					</view>
				</view>

			</uni-popup>
		</view>
	</view>
</template>

<script>

	export default {
       props: ['onChildClick'],
		data() {
			return {
				songInfo: uni.getStorageSync("SongsInfo"),
				type: 'center',
				hide:true,
				isplay:true,
				MP3List:[],
				index:0,
				m:'',
				isunder:false,
				tinnerAudioContext : "",
				animationData: {},
				Duration:0,
				isAnimation:false,
				currentTime:0,
				currentRotate:"",
		
				
			}
		},
		methods: {
			//页面弹出
			toggle(type) {
				this.type = type
				this.$data.hide = false
				// open 方法传入参数 等同在 uni-popup 组件上绑定 type属性	
				
				this.$refs.popup.open(type)
			},
			change(e) {
				console.log('当前模式：' + e.type + ',状态：' + e.show);
			},
			//页面关闭
			close() {
				
				this.$refs.popup.close();
				setTimeout(()=>{	
						this.$data.hide = true
				},200)
				
				
			},
			//播放事件
			
			player(mp3,index,type){
				switch (type){
					case 'song':
					if(this.$data.tinnerAudioContext==''){
						this.$data.tinnerAudioContext=uni.createInnerAudioContext()
					}
					if(uni.getStorageSync("count")==1){
						console.log(uni.getStorageSync("count"))
						this.$data.tinnerAudioContext.src = mp3;
					}
					
					this.Media(mp3,index)
					break;
					case 'sheet':
					if(this.$data.tinnerAudioContext==''){
						this.$data.tinnerAudioContext=uni.createInnerAudioContext()
					}
					if(uni.getStorageSync("num")==1){
						this.$data.tinnerAudioContext.src = mp3;
					}
					this.Media(mp3,index)
					break;
				}
				
				
			},
			//播放事件（不会传递音乐源）
			Singplay(backMedia){
				
				//更新数据
					try{
							const value = uni.getStorageSync("SongsInfo")
							this.$data.songInfo = value
							console.log(value.img)
						}catch(e){
							//TODO handle the exception
						}
						this.$data.isplay=false
						console.log(backMedia);
					//backMedia.tinnerAudioContext.play()
					backMedia.onPlay(() => {
						console.log('开始播放');
						
					});
					backMedia.onCanplay(()=>{
						console.log('可以播放');
						
						this.startAnimation()
						console.log(this.$data.Duration);
						})
						 backMedia.onTimeUpdate(() => {
							 this.$data.Duration = backMedia.duration;
						      this.$data.currentTime = backMedia.currentTime;
						    });
					backMedia.onError((res) => {
					
					  uni.showToast({
					  	title:"歌曲无版权",
					  	icon:'none'
					  })
					});
					
				
					
				
				
				
			},
		//播放页面暂停状态
			playAudio(){
				if(this.$data.tinnerAudioContext.paused){
					this.$data.tinnerAudioContext.play()
					this.$data.isplay=false
					this.startAnimation()
					
				}else{
					this.$data.tinnerAudioContext.pause()
					this.$data.isplay=true
					this.stopAnimation()
				}
			
			},
			
			//播放器的播放暂停状态
			playA(event){
				if(this.$data.tinnerAudioContext.paused){
					this.$data.tinnerAudioContext.play()
					this.$data.isplay=false			
				}else{
					this.$data.tinnerAudioContext.pause()
					this.$data.isplay=true		
				}
				event.stopPropagation()
			},
			//下一首
			next(){
				
				if(this.$data.index==17){
					  this.onChildClick(0)
				
				}else{
					
						 this.onChildClick(this.$data.index+1)
				}
				   setTimeout(()=>{
					   console.log(this.$data.m)
					   if(this.$data.m!=''){
					   		this.$data.tinnerAudioContext.src = this.$data.m
							const value = uni.getStorageSync("SongsInfo")
								console.log("步骤三")
							this.$data.songInfo = value
							this.$data.isplay=false
					   		this.$data.tinnerAudioContext.play()
					   		this.$data.index +=1				 
					   }
				   },600)
			
					
				
				
			},
			//上一首
			prev(){
			
			if(this.$data.index==0){
				 this.onChildClick(17)
				
			}else{ this.onChildClick(this.$data.index-1)}
				setTimeout(()=>{
						   console.log(this.$data.m)
							   if(this.$data.m!=''){
							   		this.$data.tinnerAudioContext.src = this.$data.m
									console.log("步骤三")
									const value = uni.getStorageSync("SongsInfo")
									this.$data.songInfo = value
									this.$data.isplay=false
							   		this.$data.tinnerAudioContext.play()
							   		this.$data.index -=1				 
									   }
				},600)
				
			},
			//动画
			startAnimation(){
			 if(!this.$data.isAnimation){
			 	this.$data.isAnimation = true
				var animation = uni.createAnimation({
				  
				  duration: this.$data.Duration*1000,
				  timingFunction: "linear",
				  delay: 0
				})
				 this.animation  = animation
				 animation.rotate(720).step()
				
				 this.animationData = animation.export()
				
			}
			},
			//停止动画（未完成）
			stopAnimation(){
				if(this.$data.isAnimation){
					this.$data.isAnimation=false
				
					console.log(this.$data.currentRotate)
					
					
					 this.$data.animationData = ""
				}
			},
			//时间格式
			 changeTime(e) {
			      this.$data.tinnerAudioContext.seek(e.mp.detail.value);
			    },
				ruTime(value){
					var fen = value/60
					var miao = value%60
					return parseInt(fen)+":"+parseInt(miao)
				},
				
				//播放器
				Media(mp3,index){
					//判断上一首与当前歌曲是否一样
					if(this.$data.songInfo.index!=index){
							 
						this.$data.tinnerAudioContext.src = mp3;
						}
						
					try{
						const value = uni.getStorageSync("SongsInfo")
						this.$data.songInfo = value
						console.log(value.img)
					}catch(e){
						//TODO handle the exception
					}
						this.$data.index = index
						if(mp3!=""){
							console.log("mp3进入")
							this.$data.isplay=false	
							this.$data.tinnerAudioContext.play()
							this.$data.tinnerAudioContext.onPlay(() => {
								
							});
							this.$data.tinnerAudioContext.onCanplay(()=>{
								
								//进度条总进度
								this.$data.Duration = this.$data.tinnerAudioContext.duration
								this.startAnimation()
								console.log(this.$data.Duration);
								})
								 this.$data.tinnerAudioContext.onTimeUpdate(() => {
									 //进度条总进度当前进度
								      this.$data.currentTime = this.$data.tinnerAudioContext.currentTime;
								    });
							this.$data.tinnerAudioContext.onError((res) => {
							
							  uni.showToast({
							  	title:"歌曲无版权",
							  	icon:'none'
							  })
							});
						}else{
							uni.showToast({
								title:"歌曲无版权",
								icon:'none'
							})
						}
				}
			
		},
		
		
		
		


	}
</script>

<style lang="scss">
	@import "@/static/iconfont.css";
	
	@mixin flex {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
	}

	@mixin height {
		/* #ifndef APP-NVUE */
		height: 100%;
		/* #endif */
		/* #ifdef APP-NVUE */
		flex: 1;
		/* #endif */
		
	}

	

	.button-text {
		color: #fff;
		font-size: 12px;
	}

	.button {
		@include flex;
		
		width: 100%;
		height: 50px;
		align-items: center;
		justify-content: space-around;
		background-color: white;
		box-shadow: 0px 0px 2.5px -2.5px black;
		border-radius: 0px;
		
		
	}
	

	.example-body {
		display: flex;
		flex-direction: row;
		position: fixed;
		bottom: 50px;
		width: 100%;
		z-index: 150;
		
	
	}
.example-two {
		display: flex;
		flex-direction: row;
		position: fixed;
		bottom: 0px;
		width: 100%;
		z-index: 150;
		
	
	}
	.text {
		font-size: 12px;
		color: #333;
	}

	.popup-content {
		
		display: flex;
		flex-direction: column;
		height: 100vh;
	
		background-image: url("../../static/bg.jpg");
		background-size: cover;
	}
.im{
	position: absolute;
	z-index: 999;
	
}
	.popup-height {
		@include height;
		width: 200px;
	}
	.img{
		
		align-self: center;
		width: 304rpx;
		height: 304rpx;
		border-radius: 50%;
		background-color: black;
		margin-top: 186rpx;
		margin-left: 4rpx;
	}
	.title{
		display: flex;
		justify-content: space-between;
		height: 88rpx;
		padding: 16rpx;
	}
	.player{
		margin-top: 40rpx;
		display: flex;
		width: 100%;
		height: 654rpx;
		flex-direction: column;
		background-image: url("../../static/player.png");
		background-size: cover;
	}
	.seek{
		display: flex;
		flex-direction: row;
		margin-top: 50rpx;
		width: 90%;
		align-items: center;
		align-self: center;
	}
	.btn{
		display: flex;
		justify-content: space-around;
		align-items: center;
		margin-top: 50rpx;
	}
	.list{
	   
		
	}
	
</style>