<template>
	<view>
		<view class="detail_comment">
			<view style="height: 60px;display: flex;flex-direction: row;align-items: center;">
			<image src="../../static/fh.svg" style="width: 30px;height: 34px;" @click="back"></image>
			<view class="detail_comment_title">评论</view>
			</view>
			<view class="detail_comment_item" v-for="(item,index) in songComment">
				<view class="detail_comment_img">

					<image :src="item.user.avatarUrl"></image>
				</view>
				<view class="detail_comment_content">
					<view class="detail_comment_head">
						<view class="detail_comment_name">
							<view>{{ item.user.nickname }}</view>
							<view>{{ item.time}}</view>
						</view>
						<view class="detail_comment_like">

							<img src="/static/dz.png" class="icon-dianzan">


							{{ item.likedCount}}



						</view>
					</view>
					<view class="detail_comment_text">
						{{ item.content }}
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
				url: 'https://www.consistent.top/comment/playlist?id=',
				songComment: [],
				id: ''
			}
		},
		onLoad(options) {
			this.$data.id = JSON.parse(options.id);
			this.getdata(this.$data.id)
		},
		methods: {
			back(){
				uni.navigateBack(1)
			},
			getdata(id) {
				uni.request({
					url: this.$data.url + id,
					success: (res) => {
						this.$data.songComment = res.data.hotComments
					}
				});

			}

		}
	}
</script>

<style>
	.detail_comment {
		margin-left: 20px;
	}
	

	.detail_comment_title {
		font-size: 40rpx;
		margin: 50rpx 0;
	}

	.detail_comment_item {
		width: 98%;
		display: flex;
		margin-bottom: 28rpx;
		margin-top: 10px;
	}

	.detail_comment_img {
		width: 66rpx;
		height: 66rpx;
		border-radius: 50%;
		overflow: hidden;
		margin-right: 18rpx;
	}

	.detail_comment_img image {
		width: 100%;
		height: 100%
	}

	.detail_comment_content {
		flex: 1;
		color: black;
	}

	.detail_comment_head {
		display: flex;
		justify-content: space-between;
	}

	.detail_comment_name view:nth-child(1) {
		font-size: 24rpx;
	}

	.detail_comment_name view:nth-child(2) {
		font-size: 20rpx;
	}

	.detail_comment_like {
		margin-right: 16px;
		font-size: 30rpx;
	}

	.number_dianzan {
		color: brown;
	}

	.icon-dianzan {
		width: 16px;
		margin-top: 2px;


	}

	.detail_comment_text {
		width: 98%;
		line-height: 40rpx;
		text-align: left;
		color: #232334;
		font-size: 27rpx;
		border-bottom: 1px rgba(0, 0, 0, 0.1) solid;
		padding-bottom: 30rpx;

	}
</style>