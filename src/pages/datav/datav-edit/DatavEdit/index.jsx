import GGEditor, { Flow } from 'gg-editor';
import React, { Component } from 'react';
import { Line } from '@antv/g2plot';
class DatavEdit extends Component{

    componentDidMount (){
        const data = [
            { year: '1991', value: 3,type:'a'},
            { year: '1991', value: 5 ,type:'b'},
            { year: '1992', value: 7,type:'a'},
            { year: '1992', value: 4 ,type:'b'},
        
          ];

          const linePlot = new Line('canvas', {
            title:{
                visible:true, //是否显示标题
                text:'title',   //标题内容
            },
            description:{
                visible:true,
                text: 'descript', //描述内容
            },
            forceFit: true,
            data,
            xField: 'year',
            yField: 'value',
            color: ['rgba(234,78,123,0.9 )',''], //线条颜色
            point:{
                visible: true, //是否显示节点圆点
                size: 5,
                color: 'rgba(67,235,123,0.5)',
                style:{
                    stroke:'rgba(178,78,236,0.5)',
                    lineWidth: 2,
                    fillOpacity: 0.9,
                }
            },
            yAxis:{
                formatter:(v)=>{
                    return v+'k';
                },
            },
            seriesField: 'type', //
            label:{
                visible:true, //是否在节点上显示数据
            }
          });

          linePlot.render();

    }

    render(){

        return(
            <div id="canvas" style={{width:'600px',height:'400px'}}>
                
            </div>
        )
    }

}

export default DatavEdit;