import React, { Component } from 'react';
import { Card,Layout,Icon,Form, Avatar,Menu,Button,Row,Col,Drawer,Popover } from 'antd';
const { Header,Content, Sider } = Layout;
import { Link } from 'umi';
import MyImage from './components/Image';


const { SubMenu } = Menu;
const {Meta}=Card;
class datavEdit extends Component {

  state = { 
    visible: false,
    placement: 'left' 
  };

  toCreateScreen=()=>{
  
  }

  render(){

    return (
        <Layout>
            <Header className="header" style={{background:"#fff",}}>
              <Row>
                <Col span={8}><Link to="/datav/datav-template"><Icon type="left" />重选模板</Link></Col>
                <Col span={8} style={{}}>
                <MyImage></MyImage>
                </Col>
                <Col span={8} style={{textAlign:"right"}}>
                    <Button type="primary" onClick={this.toCreateScreen} style={{marginRight:"5px"}}>保存</Button>
                    <Button type="primary" onClick={this.toCreateScreen}>预览</Button>
                    </Col>
              </Row>
            </Header>
            <Layout>
              <Sider>
                <Menu theme="dark">
                  <Menu.Item>
                    <Icon type="fund" />
                    <span>空白模板1</span>
                  </Menu.Item>
             
                </Menu>
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
