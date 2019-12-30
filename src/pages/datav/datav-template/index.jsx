import React, { Component } from 'react';
import { Card,Layout,Icon,Form,Menu,Button,Row,Col } from 'antd';
const { Header,Content, Sider } = Layout;
import { Link } from 'umi';
import router from 'umi/router';
import Module from '../../../components/Module';
import { query } from '../../../utils/ArrayUtils';

const {Meta}=Card;
class datavList extends Component {

  state = { 
    visible: false,
    placement: 'left',
    imgSource:[],
    selectTempKey:'',
  };

  componentWillMount  (){

    const response=[
      {
        key:'abcdefghijklmnopqrstuvwxyz123456',
        url:require('../../../assets/temp.png'),
        title:'地图',
        description:'这是一张地图',
      },
      {
        key:'abcdefghijklmnopqrstuvwxyz123457',
        url:require('../../../assets/temp.png'),
        title:'图表',
        description:'这是一张地图',
      },
      {
        key:'abcdefghijklmnopqrstuvwxyz123458',
        url:require('../../../assets/temp.png'),
        title:'图表',
        description:'这是一张图表',
      }
    ]

    this.setState({
      imgSource:response,
      selectTempKey:response[0].key,
    })
  }

  toCreateScreen=()=>{
    router.push('/datav/datav-edit')
  }

  onSelectTemp=(e)=>{
    this.setState({
      selectTempKey: e.target.value,
    });
    
  }

  onChangeContent=(array,key)=>{
    const data=query(array,key);
    console.log(data)
    const content=(
      <Card
      style={{width:"100%",height:"100%"}}
        cover={<img style={{width:'90%',height:'100%',margin:'2% 5% 0 5%'}} src={data.url}/>}
      >
        <Meta title={data.title} description={data.description}/>
      </Card>
     
    )
    return content;
  }

  render(){

    return (
        <Layout>
            <Header className="header" style={{background:"#fff",}}>
              <Row>
                <Col span={8}><Link to="/datav/datav-list"><Icon type="left" />取消创建</Link></Col>
                <Col span={8} style={{textAlign:"center",margin:"0 auto"}}><span style={{fontSize:"24px"}}>选择模板</span></Col>
                <Col span={8} style={{textAlign:"right"}}><Button type="primary" onClick={this.toCreateScreen}>创建大屏</Button></Col>
              </Row>
            </Header>
            <Layout>
              <Sider>
              <Module  dataSources={this.state.imgSource} onChange={this.onSelectTemp} value={this.state.selectTempKey}></Module>
              </Sider>
              <Content>
              {this.onChangeContent(this.state.imgSource,this.state.selectTempKey)}
              </Content>
            </Layout>
        </Layout>
    );

  }

};

export default Form.create()(datavList);
