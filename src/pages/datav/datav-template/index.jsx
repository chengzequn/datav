import React, { Component } from 'react';
import { Card,Layout,Icon,Form, Avatar,Menu,Button,Row,Col,Drawer,Popover } from 'antd';
const { Header,Content, Sider } = Layout;
import { Link } from 'umi';
import router from 'umi/router';
import styles from './style.less'

const { SubMenu } = Menu;
const {Meta}=Card;
class datavList extends Component {

  state = { 
    visible: false,
    placement: 'left' 
  };

  toCreateScreen=()=>{
    router.push('/datav/datav-edit')
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
                <Menu theme="dark">
                  <Menu.Item>
                    <Icon type="fund" />
                    <span>空白模板1</span>
                  </Menu.Item>
                  <Menu.Item>
                    <Icon type="fund" />
                    <span>空白模板2</span>
                  </Menu.Item>
                  <Menu.Item>
                    <Icon type="fund" />
                    <span>空白模板3</span>
                  </Menu.Item>
                </Menu>
              </Sider>
              <Content>
                <Card
                style={{width:"100%",height:"100%"}}
                  cover={<img src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}
                >
                  <Meta title="空白模板" description="你可以随意创作。"/>
                </Card>
              </Content>
            </Layout>
            
        </Layout>
    );

  }

};

export default Form.create()(datavList);
