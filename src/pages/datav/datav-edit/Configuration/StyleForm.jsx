import React, { Component } from 'react';
import {Form,Icon,Select ,Input,Button,InputNumber,Col,Row,Collapse  } from 'antd';

const InputGroup = Input.Group;
const { Option } = Select;
const { Panel } = Collapse;

const formItemLayout={
    labelCol:{
        xs:{span:8},
        sm:{span:8},
    },
    wrapperCol:{
        xs:{span:16},
        sm:{span:15},
    }
}

class StyleConfig extends Component{


    


    render(){
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

        const nameError=isFieldTouched('name')&&getFieldError('name');

        return(
            <Form {...formItemLayout}>
                <Collapse accordion bordered={false}>
                    <Panel header="全局样式">
                    <Form.Item label="监控主题：">
                    {getFieldDecorator('name',{
                        rule:[{
                            required:true,message:'请输入名称！'
                        }]
                    })(
                        <Input 
                        placeholder="监控主题"
                        />
                    )}
                </Form.Item>
                <Form.Item label="屏幕大小：">
                    <Row gutter={24}>
                        <Col span={11}>
                            <Form.Item help="宽度">
                                <InputNumber min={1} defaultValue={1920}/>
                            </Form.Item>
                        </Col>
                        <Col span={11}>
                            <Form.Item help="高度">
                                <InputNumber min={1} defaultValue={1080}/>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form.Item>
                <Form.Item label="背景图片：">
                    <Select>
                        <Option value="1">图片1</Option>
                        <Option value="2">图片2</Option>
                    </Select>
                    <img width='100%' height="100px"/>
                </Form.Item>
                    </Panel>
                    <Panel header="组件样式">
                        
                    </Panel>
                </Collapse>
                
            </Form>
        )
    }

}

const StyleForm=Form.create({name:'style_form'})(StyleConfig)
export default StyleForm;