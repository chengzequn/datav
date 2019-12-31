import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Card,Layout,Icon,Form,Menu,Button,Row,Col} from 'antd';
const { Header,Content, Sider } = Layout;
import { Link } from 'umi';
import Template from '../../../components/Template';
import Module from '../../../components/Module';
import {getBlock} from '../../../components/Block';
import { query } from '../../../utils/ArrayUtils';
import { getTimestamp } from '../../../utils/DataUtils';
// import DatavEdit from './DatavEdit';
import Configuration from './Configuration';
import { Line } from '@antv/g2plot';

const {Meta}=Card;
class datavEdit extends Component {

  state = { 
    visible: false,
    placement: 'left' ,
    imgSource:[],
    selectTempKey:'',
    content:[],

  };

  componentWillMount  (){

    const response=[
      {
        key:'map',
        url:require('../../../assets/temp.png'),
        title:'地图',
        children:[
          {
            key:'map1',
            url:require('../../../assets/temp.png'),
            title:'地图1',
            description:'地图1描述',
          },
          {
            key:'map2',
            url:require('../../../assets/temp.png'),
            title:'地图2',
            description:'地图2描述',
          },
          {
            key:'map3',
            url:require('../../../assets/temp.png'),
            title:'地图3',
            description:'地图3描述',
          }
        ]
      },
      {
        key:'table',
        url:require('../../../assets/temp.png'),
        title:'图表',
        children:[
          {
            key:'table1',
            url:require('../../../assets/temp.png'),
            title:'图表1',
            description:'图表1描述',
          },
          {
            key:'table2',
            url:require('../../../assets/temp.png'),
            title:'图表2',
            description:'图表2描述',
          },
          {
            key:'table3',
            url:require('../../../assets/temp.png'),
            title:'图表3',
            description:'图表3描述',
          }
        ]
      },
      {
        key:'line',
        url:require('../../../assets/temp.png'),
        title:'线条',
        children:[]
      },
      {
        key:'bar',
        url:require('../../../assets/temp.png'),
        title:'柱状',
        children:[]
      }
    ]

    this.setState({
      imgSource:response,
      selectTempKey:response[0].key,
    })
  }

  onSelectTemp=(e)=>{
    this.setState({
      selectTempKey: e.target.value,
    });
  }

  //获取鼠标拖动结束的位置
  onDragEnd=e=>{
    let mouseX=e.clientX;
    let mouseY=e.clientY;
    console.log("坐标：",mouseX,mouseY)
    const position=this.getElementPosition();
    const left=mouseX-position.x;
    const top=mouseY-position.y;
    if((mouseX>position.x&&mouseX<(position.x+position.width))
      &&(mouseY>position.y&&mouseY<(position.y+position.height))
      ){
        this.onInitMoudle(left,top);
    }else{
      console.log("我要到碗里去~")
    }
  }

  //绘制组件
  onInitMoudle=(left,top)=>{
    let timestamp=getTimestamp().toString();
    console.log("timestamp:",timestamp);
    //创建图表容器(默认大小)
    const element=<div key={timestamp} id={timestamp} style={{position:'absolute',top:top,left:left,width:'400px',height:'200px'}} > </div>
    const list=this.state.content;
    list.push(element);
    this.setState({
      content: list
    })
    console.log("list",list)

    //等待容器创建完毕
    setTimeout(() => {
      //创建并渲图表
      const linePlot=getBlock(timestamp);
      linePlot.render();
    }, 300);

  }

  renderContent = data =>
  data.map(item => {
    console.log("item",item)
    return <div key={item.key} id={item.key} style={item.props.style}/>;
  });

  onSelectMoudle=(key)=>{
    //获取类型

    //获取组件
    

    //增加组件

    //绘制组件






  }


  //获取容器的大小
  getElementPosition=()=>{
    const container=document.getElementById('aa');
    const position=container.getBoundingClientRect();
    console.log("position",position)
    return position;
  }

  onChangeModel=(array,key)=>{
    const data=query(array,key);
    console.log("sider",data)
    const sider=(
      <Module  
      dataSources={data.children} 
      // onChange={()=>this.toCreateScreen()} 
      onDragEnd={this.onDragEnd}
      ></Module>
    )
    return sider;
  }

  

  render(){
 
    return (
        <Layout>
            <Header className="header" style={{background:"#fff",}}>
              <Row>
                <Col span={8}><Link to="/datav/datav-template"><Icon type="left" />重选模板</Link></Col>
                <Col span={8} >
                  <Template dataSources={this.state.imgSource} onChange={this.onSelectTemp} value={this.state.selectTempKey}></Template>
                </Col>
                <Col span={8} style={{textAlign:"right"}}>
                    <Button type="primary" onClick={this.toCreateScreen} style={{marginRight:"5px"}}>保存</Button>
                    <Button type="primary" onClick={this.toCreateScreen}>预览</Button>
                    </Col>
              </Row>
            </Header>
            <Layout>
              <Sider>
                {this.onChangeModel(this.state.imgSource,this.state.selectTempKey)}
              </Sider>
              <Content id="aa" >
                {/* <DatavEdit  style={{with:'100%',height:'100%'}}></DatavEdit> */}
                {this.renderContent(this.state.content)}
              </Content>
              <Sider width={300} style={{background: '#fff' }}>
                <Configuration></Configuration>
              </Sider>
            </Layout>
            
        </Layout>
    );

  }

};

export default Form.create()(datavEdit);
