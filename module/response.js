const success = function (data, msg) {
    return {
        code: 1,
        msg: msg || 'success',
        data: { ...data }
    };
};
const error = function (msg) {
    return {
        code: -1,
        msg: msg || '出错了，请稍后再试！'
    };
};
module.exports = {
    success,
    error
};
