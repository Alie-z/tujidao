<template>
    <div class="content">
        <van-search v-model="value" placeholder="请输入搜索关键词" @search="handleSearch" />
    </div>
</template>

<script lang="ts">
    import { defineComponent, ref } from 'vue';
    import { Search } from 'vant';
    export default defineComponent({
        name: 'HomePage',
        components: {
            [Search.name]: Search
        },
        setup() {
            const value = ref('');
            const handleSearch = (val: string) => {
                console.log('🚀 > handleSearch > val', val);
            };
            return {
                value,
                handleSearch
            };
        }
    });
</script>
<style lang="scss">
    .content {
        width: 375px;
    }
</style>
