//local.js为了存储数据到本地中
export const setStorage = function (data) {
    localStorage.setItem('plans',JSON.stringify(data));
};
export const getStorage = function () {
    return JSON.parse(localStorage.getItem('plans'));
};
