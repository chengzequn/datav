import { Alert, Table,Icon, Radio } from 'antd';
import React, { Component, Fragment } from 'react';
import styles from "./index.less";

class Template extends Component {

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
      <Radio.Group onChange={onChange} value={value} className={styles.template}>
        {this.renderImageNodes(dataSources)}
      </Radio.Group>
    );
  }
}

export default Template;
