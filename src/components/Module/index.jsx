import {Radio } from 'antd';
import React, { Component} from 'react';
import styles from "./index.less";

class Module extends Component {

  renderImageNodes=data=>
    data.map(item=>{
      return(
        <Radio value={item.key}  key={item.key}>
            <img src={item.url} />
            <div className="content">
            <span className="title">
                {item.title}
            </span>
            <span className="description">
                {item.description}
            </span>
            </div>
        </Radio>
      ) 
  })

  render() {
    const {dataSources,onChange,value}=this.props;

    return (
      <Radio.Group onChange={onChange} value={value} className={styles.module}>
        {this.renderImageNodes(dataSources)}
      </Radio.Group>
    );
  }
}

export default Module;
