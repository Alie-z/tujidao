<template>
    <RouterView />
</template>

<style>
    *:before,
    *:after {
        margin: 0;
        padding: 0;
        border: 0;
        -webkit-user-select: none;
    }

    html {
        width: 100%;
        height: 100%;
    }

    body {
        max-width: 375px;
        height: 100%;
        margin: 0 auto !important;
        padding: 0;
        color: #1a1a1a;
        background-color: #f2f5f7;
        overflow-x: hidden;
        overflow-y: scroll;
        font-family: Microsoft YaHei, PingFangSC-Regular, BlinkMacSystemFont, Segoe UI, Helvetica,
            Arial, sans-serif;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-touch-callout: none;
        touch-callout: none;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;
        -webkit-font-smoothing: antialiased;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }

    * {
        box-sizing: border-box;
    }

    div::-webkit-scrollbar {
        display: none;
    }

    em {
        font-size: 12px;
        margin-right: 3px;
        list-style: none;
    }

    ::-webkit-scrollbar {
        width: 0;
        height: 0;
        display: none;
    }

    input,
    textarea {
        -webkit-user-select: auto !important;
        -khtml-user-select: auto !important;
        -moz-user-select: auto !important;
        -ms-user-select: auto !important;
        -o-user-select: auto !important;
        user-select: auto !important;
    }

    #app {
        width: 100%;
        min-height: 667px;
        /*height: 100%;*/
        overflow: hidden;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        position: relative;
        font-size: 12px;
    }
</style>
