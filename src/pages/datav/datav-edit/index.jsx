import React, { Component } from 'react';
import { Card,Layout,Icon,Form,Menu,Button,Row,Col} from 'antd';
const { Header,Content, Sider } = Layout;
import { Link } from 'umi';
import Template from '../../../components/Template';
import Module from '../../../components/Module';
import { query } from '../../../utils/ArrayUtils';

const {Meta}=Card;
class datavEdit extends Component {

  state = { 
    visible: false,
    placement: 'left' ,
    imgSource:[],
    selectTempKey:'',
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

  onChangeModel=(array,key)=>{
    const data=query(array,key);
    console.log("sider",data)
    const sider=(
      <Module  
      dataSources={data.children} 
      // onChange={()=>this.toCreateScreen()} 
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
              <Content>
                <Card
                style={{width:"100%",height:"100%"}}
                  cover={<img src=""/>}
                >
                  <Meta title="空白模板" description="你可以随意创作。"/>
                </Card>
              </Content>
            </Layout>
            
        </Layout>
    );

  }

};

export default Form.create()(datavEdit);
