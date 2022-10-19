<template>
    <div class="content">
        <ul class="ul-wrap">
            <li
                v-for="(item, index) in [1, 2, 3, 4, 5, 5, 6]"
                :key="index"
                :class="`content-list ${index % 2 === 0 && 'list-margin'}`"
            >
                <img src="https://pic.gzhuibei.com/a/1/57396/0.jpg" alt="" />
                <div class="num-tag">
                    <van-tag mark type="primary">91P</van-tag>
                </div>
                <div class="title"> [语画界XIAOYU] Vol.821 杨晨晨Yome </div>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import { defineComponent, reactive, ref } from 'vue';
    import { Image, Tag } from 'vant';

    export default defineComponent({
        name: 'SearchContent',
        components: {
            [Image.name]: Image,
            [Tag.name]: Tag
        },
        setup() {
            return {};
        }
    });
</script>
<style lang="scss" scoped>
    .content {
        width: 100%;
        .ul-wrap {
            display: flex;
            flex-wrap: wrap;
            .content-list {
                width: 48vw;
                display: flex;
                flex-direction: column;
                margin: 0 1vw 10px;
                max-width: 4.5rem;
                position: relative;
                border-radius: 5px;
                overflow: hidden;
                img {
                    width: 100%;
                }
                .num-tag {
                    position: absolute;
                    top: 10px;
                    left: 0;
                }
                .title {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    color: #fff;
                }
            }
        }
    }
</style>
