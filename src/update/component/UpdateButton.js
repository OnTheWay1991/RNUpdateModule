import React, {Component} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';

class UpdateButton extends Component {
    constructor(p) {
        super(p);
    }

    static defaultProps = {
        pressEvt: () => {
        },
        text: '立即升级',
        style: []
    }

    render() {
        return (
            <TouchableHighlight style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
                                underlayColor={'white'}
                                onPress={() => this.props.pressEvt()}>
                <View style={[{
                    width: '72%',
                    height: apin.height_2,
                    borderRadius: apin.radiu_5,
                    backgroundColor: apin.backgroundColor_2
                }].concat(this.props.style)}>
                    <View
                        style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
                        <Text style={{color: apin.c_t_white_1, fontSize: apin.fontSize_5}}>{this.props.text}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}

export default UpdateButton;