import { Alert, Table,Icon } from 'antd';
import React, { Component, Fragment } from 'react';
import styles from "./style.less";


class MyImage extends Component {

    onSelectTemplate=()=>{

    }

  render() {


    return (
     <div className={styles.aa} onClick={this.onSelectTemplate}>
        <img src="http://img3.imgtn.bdimg.com/it/u=3157353141,3119034262&fm=11&gp=0.jpg" />
        <span>标题</span>
     </div>
    );
  }
}

export default MyImage;
