import React, {Component} from "react";
import {View, Text, Image, TouchableHighlight} from "react-native";

import UpdateButton from "./UpdateButton";
import HttpTool from "../../http/HttpTool";
import ServiceAddress from "../../http/ServiceAddress.js";
import Config from '../../Config';
import UpdateProgressBar from "./UpdateProgressBar";

import {
    setSuccessUpdate,
    getOption,
    switchVersion,
    switchVersionLater,
    downloadUpdate
} from "../index.js"; // 千万不能删除和HotUpdate相关的代码!!!!!!!!

export default class UpdateSplash extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: {},
            updateStatus: 0 // 0: hide, 1: show altertive button, 2: only show button, 3: show progress bar, 4: download complete
        };
        this.transparentLayoutHeight = 400;
        this.headImageHeight = 150;
        this.stripOverlayHeight = 44;
        this.iconWidth = 33;
        this.iconDiff = 6;
        this.mainScreenWidth = 282;
        this.mainScreenMarginTop = 88;
        this.contentHeight = 245;
        this.cout = 0;
    }

    componentDidMount() {
        setSuccessUpdate();
        console.log("sfdfasdfsdf");
        HttpTool.post(
            ServiceAddress.api_app_checked_update,
            (code, message, data, options) => {
                console.log(data);
                if (code == 1) {
                    this.setState({
                        updateStatus: data.isup ? 1 : 2,
                        info: data
                    });
                }
            },
            (code, message) => {
            },
            getOption(),
            {
                host: Config.updateHost,
                contentType: "application/json;charset=utf-8"
            }
        );
    }

    getButtonList() {
        let ret = null,
            {updateStatus, info} = this.state;
        switch (updateStatus) {
            case 0:
                break;
            case 1:
                ret = (
                    <UpdateButton
                        text={"立即升级"}
                        pressEvt={() => this.changeUpdateState(3)}
                    />
                );
                break;
            case 2: // only show button
                ret = (
                    <UpdateButton
                        pressEvt={() => {
                            this.setState({
                                updateStatus: 3
                            });
                        }}
                    />
                );
                break;
            case 3: // progress bar going
                ret = (
                    <UpdateProgressBar
                        ref={ref => {
                            if (!ref) return;
                            this.UpdateProgressBar = ref;
                            this.UpdateProgressBar.run();
                        }}
                        onLoadBegin={() => {
                            this.downFile(info, (err, hash) => {
                                if (!err) {
                                    this.hash = hash;
                                    this.UpdateProgressBar.end(hash);
                                }
                            });
                        }}
                        onLoadEnd={() => {
                            this.setState(
                                {
                                    updateStatus: 4
                                },
                                () => {
                                    switchVersionLater(this.hash ? this.hash : "");
                                }
                            );
                        }}
                    />
                );
                break;
            case 4:
                ret = (
                    <UpdateButton
                        style={{height: 40}}
                        text={"立即重启"}
                        pressEvt={() => switchVersion(this.hash ? this.hash : "")}
                    />
                );
                break;
            default:
        }

        return ret;
    }

    downFile(info, callback) {
        downloadUpdate(info)
            .then(hash => {
                callback(null, hash);
            })
            .catch(err => {
                callback(err);
            });
    }

    getContent() {
        let {descs} = this.state.info;
        return (
            <View style={{paddingTop: 7}}>
                <Text style={{color: "#999", fontSize: 14}}>
                    {descs ? descs : "\n1.\t修复BUG\n2.\t优化用户体验"}
                </Text>
            </View>
        );
    }

    getCloseIcon() {
        return (
            <TouchableHighlight
                style={{
                    position: "absolute",
                    top: this.stripOverlayHeight - this.iconWidth / 2,
                    right: 0
                }}
                onPress={() => {
                    setTimeout(() => {
                        this.changeUpdateState(0);
                    }, 0);
                }}
                underlayColor={"transparent"}
            >
                <View style={{flex: 1}}>
                    <Image
                        style={{width: this.iconWidth, height: this.iconWidth}}
                        source={require("../../image/update_close.png")}
                    />
                </View>
            </TouchableHighlight>
        );
    }

    changeUpdateState(stat) {
        this.setState({
            updateStatus: stat
        });
    }

    render() {
        let {updateStatus} = this.state;
        if (updateStatus == 0) {
            return null;
        } else {
            return (
                <View
                    style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        backgroundColor: "#0000007f",
                        flexDirection: "row"
                    }}
                >
                    <View
                        style={{
                            flex: 1,
                            alignItems: "center",
                            height: this.transparentLayoutHeight,
                            marginTop: this.mainScreenMarginTop,
                            backgroundColor: "transparent"
                        }}
                    >
                        <View
                            style={{
                                width:
                                this.mainScreenWidth + this.iconWidth + this.iconDiff * 2,
                                height: "100%",
                                backgroundColor: "transparent",
                                paddingRight: this.iconWidth / 2,
                                paddingLeft: this.iconWidth / 2,
                                paddingBottom: 0
                            }}
                        >
                            <Image
                                style={{width: "100%", height: this.headImageHeight}}
                                source={require("../../image/beg-img.png")}
                            />
                            {updateStatus === 1 ? this.getCloseIcon() : void 0}
                            <View
                                style={{
                                    width: "100%",
                                    height: this.contentHeight,
                                    backgroundColor: "white",
                                    marginTop: -2,
                                    flexDirection: "column"
                                }}
                            >
                                <View style={{flex: 2, backgroundColor: "white"}}>
                                    <View style={{marginLeft: 18, marginRight: 18}}>
                                        <Text style={{color: "#343b4b", fontSize: 18}}>
                                            发现资源更新
                                        </Text>
                                        {this.getContent()}
                                    </View>
                                </View>
                                <View style={{flex: 1, backgroundColor: apin.backgroundColor_white}}>
                                    {this.getButtonList()}
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            );
        }
    }
}
