<template>
    <div class="fb-comment-block">
        <div class="fb-comments" :data-href="href" data-numposts="5" data-width="100%" data-order-by="reverse_time"></div>
    </div>
</template>

<script>
export default {
    props: ['href'],
}
</script>

<style lang='scss' scoped>
    .fb-comment-block{
    	width: 100%;
    	height: 100%;
    	overflow-x: hidden;
    	// overflow-y: scroll;
    	// -webkit-overflow-scrolling: touch;
    }
</style>