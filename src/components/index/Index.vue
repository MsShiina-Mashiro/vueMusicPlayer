<template>
	<!-- 主页 -->
	<div class="index">
		<index-top></index-top>
		<index-main></index-main>
	</div>
</template>
<script>
import Main from '../index/Main.vue'
import Top from '../index/Top.vue'

export default {
	data () {
		return {
		}
	},
	methods: {
	},
	components: {
		'index-top': Top,
		'index-main': Main
	}
}
</script>
<style lang="stylus" scoped>
.index
	display: flex
	flex-direction: column
	height: 100vh
</style>
