/**
 * Created by lixifeng on 17/6/26.
 */

import {
    Platform,
    DeviceInfo,
} from 'react-native';


window.apin = {
    //字体大小
    fontSize_1: 10,
    fontSize_2: 11,
    fontSize_3: 12,
    fontSize_4: 14,
    fontSize_5: 16,
    fontSize_6: 18,
    fontSize_7: 20,
    fontSize_8: 22,
    fontSize_9: 24,
    fontSize_10: 26,
    fontSize_11: 32,
    fontSize_12: 30,

    //字颜色
    textColor_1: "#333",//字的主色
    textColor_2: "#999",//字的辅色
    textColor_3: "#fff",//字的辅色
    textColor_4: "#000",//字的辅色
    textColor_5: "#9953FF",//字的辅色
    textColor_6: "#FF7E43",//价格颜色
    textColor_gray_1: "#bbbbbb",//字的辅色
    textColor_gray_2: "#282828",//字的辅色
    textColor_7: "#3F3F3F",//字的辅色
    textColor_placehold:"#C7C7CD",

    //title颜色
    c_t_black_1: "#333",//title的主色
    c_t_black_2: "#555555",//title的主色
    c_t_gray_1: "#bbbbbb",//title的辅色
    c_t_gray_2: "#999999",//title的辅色
    c_t_white_1: "#ffffff",//title的辅色

    //边框颜色
    c_b_gray_1: "#dfdfdf",//边框的主题颜色
    c_b_white: "#ffffff",//边框的主题颜色

    //背景颜色
    backgroundColor_1: "#f8f9f8",//背景颜色
    backgroundColor_2: "#9953FF",//背景主色
    backgroundColor_3: "#282828",//消息通知的时间背景颜色
    backgroundColor_4: "#F0F0F0",//灰色按钮的背景颜色
    backgroundColor_5: "#DCDCDC",//线的颜色
    backgroundColor_6: "#DD91FE",//渐变色 -- pzp
    backgroundColor_7: "#999",// -- pzp
    backgroundColor_8: "#eeeeee",//-pzp
    backgroundColor_9: "#eeeeff",//蓝背景
    backgroundColor_10: "#dddddd",//-pzp
    backgroundColor_11: "#f2f2f2",//白色背景
    backgroundColor_white: "#fff",//白色背景

    //圆角
    radiu_1: 4,
    radiu_2: 6,
    radiu_3: 8,
    radiu_4: 14,
    radiu_5: 20,
    radiu_6: 25,
    radiu_7: 35,
    radiu_message: 4,//消息提示的半径
    radiu_alert: 10,//弹窗的半径

    //按钮的高
    height_1: 28,
    height_2: 40,
    height_3: 50,
    //小图标的高
    height_4: 14,
    height_5: 16,
    height_6: 18,
    height_7: 20,
    height_8: 27,
    height_9: 32,
    height_10: 50,
    height_banner: 166,
    height_bar: 44,
    height_bottom: 49,    //底部的高
    height_weChat: 106,    //微信登录图标的宽高
    height_login_input: 40,    //登录输入框高
    height_line: 2,//线的高度
    height_top: 37,//顶部导航的高度
    height_planerper: 90,//乘机人底部按钮悬浮的高度
    height_planerper_padding: 15,//乘机人底部按钮悬浮距离按钮的距离
    height_user_img: 22,//个人中心图标的宽高
    height_search_img: 20,//搜索图标的宽高
    height_user: 92,//个人中心顶部高


    backgroundColor_line: "#DCDCDC",//阴影线的颜色
    backgroundColor_line_: "#f8f9f8",//阴影线的颜色
    height_line_gradient: 6,//阴影线的高度

    //按钮宽度
    width_1: 98,
    width_2: 100,

    //宽度
    width_login_code_line: 92,//验证码登录底下线的宽度
    width_login_password_line: 73,//密码登录底下线的宽度
    height_orderDetail_server: 54,//客服按钮
    fontSize_orderDetail_money: 30, //价格
    width_orderDetail_buttonWidth1: 80,
    width_orderDetail_buttonWidth2: 134,
    width_orderDetail_buttonWidth3: 110,
    width_user_login: 70,    //个人中心登录按钮的宽度
    width_orderAdd_buttonWidth: 86, //按钮宽度
    width_orderAdd_width: 108, //统一左侧文字容器宽度
    width_plane_line: 81,//航班中间线宽度
    width_plane_lineShort: 28,//航班中间线宽度
    width_user_message: 50,//消息按钮的宽度
    width_img_empty: 212,//空界面的图片宽度
    width_tarBar_centerWidth: 138,//底部导航栏中间按钮
    height_tarBar_centerHeight: 30,//底部导航栏中间按钮

    height_plane_line: 6,//航班中间线高度
    height_img_empty: 166,//空界面的图片高度
    height_message: 8,//消息提示
    height_error: 40, //错误图片
    errorImage_height: 209,//错误图片
    errorImage_width: 145,//错误图片

    //间距
    space_0: 5,
    space_1: 6,
    space_2: 10,
    space_3: 13,
    space_4: 14,
    space_5: 15,
    space_6: 20,
    space_7: 22,
    space_8: 37,
    space_weChat: 56,    //微信登录图标的距离上下的距离
    space_weChat_horizontal: 30,    //微信登录按钮距离左右的距离
    space_weChat_bottom: 45,    //"其他登录"距离底部距离
    space_login_input: 8,    //登录输入框间距
    space_bind_top: 40,    //绑定手机号按钮距离上边的距离
    space_title_text_top: 10,    //标题下面的文字距离标题的距离
    space_login: 40,    //验证码登录和密码登录之间的距离
    space_empty_top: 60,    //空界面距离上边的距离
    space_empty_bottom: 40,    //空界面距离下边的距离
    space_9: 2,
    space_10: 3,
    space_11: 5,
    space_alert: 30,//按钮距离内容的距离
    space_errorPage: 50,//错误页面
    space_user_page: 24,//个人中心的间距

    icon_back: 17,//返回按钮
    icon_back_Height: 17,
    icon_back_Width: 10,
    icon_d_clicked: 20,//右侧点击按钮的大小
    icon_d_small: 15,//check按钮
    icon_sevice:14 ,//在线客服
    icon_navBar:32,
    icon_check:14,
    icon_check_people:22,
    icon_plane:25,
    icon_add: 12,//首页K座"+"号
    icon_home_plane: 12,//首页限量秒杀item中图标的宽高

    font_weidth_0: Platform.OS === 'android' ? '400' : "500",
    font_weidth_1: '400',
    font_weidth_2: '300',
    font_weidth_3: '200',
    font_weidth_4: '600',



//==================以下是废除的theme====================

    //颜色
    c_app: "#1299F4",
    c_bg_image: "#31526e",
    c_bg: "#f3f3f3",
    c_3: "#333",
    c_6: "#666",
    c_9: "#999",
    c_c: "#ccc",
    c_e6e6e6: "#e6e6e6",
    c_f5f5f5: "#f5f5f5",
    c_bg_white: "#fff",
    c_bg_gray: "#eee",
    c_title: "#ffffff",
    c_border: "#dfdfdf",
    c_border2: "#dfdfdf",
    c_bar: "#1299F4",

    c_money: "#ffd143",
    c_gray: "#bbbbbb",
    c_black: "#333333",
    c_black1: "#555",
    c_red: "#FA4133",
    c_yellow: "#ffd143",

    c_img_red: "#fc9890",
    c_img_blue: "#88ccf9",
    c_line: "#dcddde",

    //值
    d_barHeight: 44,
    d_icon: 25,
    d_icon_center: 17,
    d_icon_small: 15,
    d_click_icon: 20,
    d_head: 30,

    //字体大小
    f_h0: 10,
    f_h1: 12,
    f_h2: 14,
    f_h13: 13,
    f_h15: 15,
    f_title: 16,
    f_title_big: 18,

    //圆角
    r_1: 5,
    r_2: 10,
    r_3: 15,
    //间距
    s_small: 2,
    s_0: 5,
    s_1: 10,
    s_2: 15,
    s_3: 20,
    s_4: 25,
    //可直接引用

    s_bar_bottom: 49,
}
var obj = {
    e_f_title: {
        color: apin.c_title,
        fontSize: apin.f_h1,
    },
    big_title: {//32号 颜色333 字体
        marginLeft: apin.space_5,
        fontSize: apin.fontSize_11,
        color: apin.textColor_1,
        fontWeight: apin.font_weidth_0,
        backgroundColor: "transparent"
    },
    big_text_small: {//18号 颜色333 字体
        marginLeft: apin.space_5,
        fontSize: apin.fontSize_6,
        color: apin.textColor_1,
        backgroundColor: "transparent"
    }

}
Object.assign(window.apin, obj)

window.log = (e) => {
    if (__DEV__lxd) {
        // debug模式
        console.log(e)
    } else {
        // release模式
        console.log(e)
    }

}

window.apin.addAction = (key, callback) => {
    if (!this.globalActionArray) {
        this.globalActionArray = [];
    }
    this.globalActionArray[key] = callback;
}

window.apin.getAction = (key) => {
    if (this.globalActionArray) {
        return this.globalActionArray[key];
    } else {
        return;
    }
}

window.apin.removeAction = (key) => {
    if (this.globalActionArray[key]) {
        delete this.globalActionArray[key];
    }
}
window.apin.addActionMap = (key, callback) => {
    if (!this.globalActionMap) {
        this.globalActionMap = new Map();
    }
    if (this.globalActionMap.has(key)) {
        this.globalActionMap.get(key).push(callback)
    } else {
        this.globalActionMap.set(key, [callback])
    }
}

window.apin.getActionMap = (key) => {
    if (this.globalActionMap && this.globalActionMap.has(key)) {
        return this.globalActionMap.get(key);
    } else {
        return null;
    }
}

window.apin.removeActionMap = (key) => {
    if (this.globalActionMap && this.globalActionMap.has(key)) {
        this.globalActionMap.set(key, [])
    }
}
window.apin.config = {};

/**
 * 强制修改小数后两位
 * @param value
 * @returns {number}
 */
window.toDecimal2 = (value) => {
    var value = Math.round(parseFloat(value) * 100) / 100;
    var xsd = value.toString().split(".");
    if (xsd.length == 1) {
        value = value.toString() + ".00";
        return value;
    }
    if (xsd.length > 1) {
        if (xsd[1].length < 2) {
            value = value.toString() + "0";
        }
        return value;
    }
}
window.forceTransformationInt = (value, size) => {
    return parseInt(parseFloat(value).toFixed(size).toString().replace(".", ""))
}
window.forceTransformationFloat = (value, size) => {
    // return parseInt(parseFloat(value).toFixed(size).toString().replace(".",""))
}

