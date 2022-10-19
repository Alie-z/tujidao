<template>
    <div class="content">
        <van-search v-model="value" placeholder="请输入搜索关键词" @search="handleSearch" />
        <van-tabs v-model:active="activeCollapse" color="#000" scrollspy sticky>
            <van-tab v-for="item in classifyData" :key="item" :title="item" :name="item">
                <div v-for="tag in Object.keys(classTagData[item])" :key="tag" class="tag-wrap">
                    <van-tag
                        type="primary"
                        round
                        size="medium"
                        :plain="tag === state.activeTag"
                        @click="handleTag(tag)"
                        >{{ tag }}</van-tag
                    >
                </div>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script lang="ts">
    import { defineComponent, reactive, ref } from 'vue';
    import { Search, Tabs, Tab, Tag } from 'vant';
    import tagData from '../utils/tag';

    export default defineComponent({
        name: 'HomePage',
        components: {
            [Search.name]: Search,
            [Tag.name]: Tag,
            [Tabs.name]: Tabs,
            [Tab.name]: Tab
        },
        setup() {
            const state = reactive({
                activeTag: ''
            });
            const classifyData = ref(tagData.classify);
            const classTagData = ref(tagData.tagClass);
            const value = ref('');
            const activeCollapse = ref('热门');
            const handleSearch = (val: string) => {
                console.log('🚀 > handleSearch > val', val);
            };
            const handleTag = (val: string) => {
                state.activeTag = val;
                console.log('🚀 > handleTag > val', val);
            };
            return {
                value,
                state,
                activeCollapse,
                classifyData,
                classTagData,
                handleSearch,
                handleTag
            };
        }
    });
</script>
<style lang="scss">
    .content {
        width: 100%;
        .tag-wrap {
            display: inline-flex;
            padding: 10px 5px 0;
        }
    }
</style>
