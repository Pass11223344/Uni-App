<template>
	<view class="content">
		<view class="p">
			<image src="../../static/logo.png" class="img" ></image>
			<text class="">音乐</text>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			time(){
				setTimeout(()=>{
					uni.navigateTo({
						
						url:"/pages/Login/Login"
					})
				},2000)
				
			}
		},
	
		onReady() {
			this.time()
		}
	}
</script>

<style>
	.content{
		width: 100%;
		height: 100%;
		
	}
	.p{
		display: flex;
		flex-direction: column;
		align-items: center;
		
	}
.img{
	width: 200rpx;
	height: 200rpx;
	margin-top: 400rpx;
}
text{
	font-size: 40rpx;
	color: black;
	opacity: 50%;
	margin-top: 8rpx;
}
</style>
