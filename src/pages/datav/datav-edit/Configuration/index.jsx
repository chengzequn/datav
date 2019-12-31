import React, { Component } from 'react';
import {Tabs} from 'antd';
import styles from './index.less'
import StyleForm from './StyleForm'
// import DataConfig from './DataConfig'

const {TabPane}=Tabs;

class DatavEdit extends Component{


    callBack(key){
        console.log("key:",key);
    }

    render(){

        return(
            <Tabs defaultActiveKey="1" onChange={this.callBack} >
                <TabPane tab="样式" key="1">
                    <StyleForm />
                </TabPane>
                <TabPane tab="数据" key="2">
                    
                </TabPane>
            </Tabs>
        )
    }

}

export default DatavEdit;