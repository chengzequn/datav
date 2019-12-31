import React, { Component } from 'react';
import {Tabs} from 'antd';
import {StyleForm} from './StyleForm'

const {TabPane}=Tabs;

class DataConfig extends Component{


    callBack(key){
        console.log("key:",key);
    }

    render(){

        return(
           <div>

           </div>
        )
    }

}

export default DataConfig;