import { Line } from '@antv/g2plot';


export function getBlock(id,data){
    return linePlot(id);
}

const data = [
    { year: '1991', value: 3 },
    { year: '1992', value: 4 },
    { year: '1993', value: 3.5 },
  ];

function linePlot(id){
    const linePlot=new Line(id, {
        data:data,
        xField: 'year',
        yField: 'value'
    }
    );

    return linePlot;
}
