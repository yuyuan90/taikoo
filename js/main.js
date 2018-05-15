var dom1 = document.getElementById("room_size");
var myChart = echarts.init(dom1);
var app = {};
option = null;
app.title = '环形图';

option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['4-6 persons','6-8 persons','8-12 persons','12-18 persons','>18 persons']
    },
    series: [
        {
            name:'rooms of different sizes',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:1, name:'4-6 persons'},
                {value:2, name:'6-8 persons'},
                {value:3, name:'8-12 persons'},
                {value:4, name:'12-18 persons'},
                {value:5, name:'>18 persons'}
            ]
        }
    ]
};
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
};



var dom2 = document.getElementById("top_ten_user");
var myChart = echarts.init(dom2);
var app = {};
option = null;
app.title = '条形图';

option = {
    title: {
        text: 'Top 10 users'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['Booking revenue']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['Channel','Fendi','Clinique','Versace','Tiffany & Co','Furla','Tesla','Lilly','D&G','EA']
    },
    series: [
        {
            name: 'Booking revenue',
            type: 'bar',
            data: [200, 400, 600, 1200, 1250, 1300,1500,1550,1600,1670]
        }
    ]
};
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
};



var dom3 = document.getElementById("all_user");
var myChart = echarts.init(dom3);
var app = {};
option = null;
app.title = '多 Y 轴示例';

var colors = ['#5793f3', '#d14a61', '#675bba'];

option = {
    color: colors,

    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    grid: {
        right: '20%'
    },
    toolbox: {
        feature: {
            dataView: {show: true, readOnly: false},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    legend: {
        data:['Total time','Bookings','Revenue']
    },
    xAxis: [
        {
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            data: ['Channel','Fendi','Clinique','Versace','Tiffany','Furla','Tesla','Lilly','D&G','EA']
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: 'Total time',
            min: 0,
            max: 60,
            position: 'right',
            axisLine: {
                lineStyle: {
                    color: colors[0]
                }
            },
            axisLabel: {
                formatter: '{value} h'
            }
        },
        {
            type: 'value',
            name: 'Bookings',
            min: 0,
            max: 60,
            position: 'right',
            offset: 80,
            axisLine: {
                lineStyle: {
                    color: colors[1]
                }
            },
            axisLabel: {
                formatter: '{value}'
            }
        },
        {
            type: 'value',
            name: 'Revenue',
            min: 0,
            max: 1800,
            position: 'left',
            axisLine: {
                lineStyle: {
                    color: colors[2]
                }
            },
            axisLabel: {
                formatter: '{value} $'
            }
        }
    ],
    series: [
        {
            name:'Total time',
            type:'bar',
            data:[10, 15, 20, 23, 25, 50, 55, 34, 45, 20]
        },
        {
            name:'Bookings',
            type:'bar',
            yAxisIndex: 1,
            data:[5, 6, 5, 7, 8, 15, 20, 17, 18, 10]
        },
        {
            name:'Revenue',
            type:'line',
            yAxisIndex: 2,
            data:[600, 800, 850, 950, 1000, 1200, 1400, 1350, 1200, 1050]
        }
    ]
};
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}





var dom4 = document.getElementById("usage_weekly");
var myChart = echarts.init(dom4);
var app = {};
option = null;
option = {
    title: {
        text: 'Average utilization (h)'
    },
    tooltip : {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data:['room A','room B','room C','room D','room E','room F','room G']
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'room A',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[60, 49, 43, 52, 66, 76, 79]
        },
        {
            name:'room B',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[60, 49, 43, 82, 66, 76, 79]
        },
        {
            name:'room C',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[60, 49, 43, 52, 66, 76, 79]
        },
        {
            name:'room D',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[50, 89, 43, 52, 76, 86, 79]
        },
        {
            name:'room E',
            type:'line',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            areaStyle: {normal: {}},
            data:[160, 49, 43, 62, 66, 76, 79]
        },
        {
            name:'room F',
            type:'line',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            areaStyle: {normal: {}},
            data:[60, 49, 73, 52, 66, 76, 79]
        },
        {
            name:'room G',
            type:'line',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            areaStyle: {normal: {}},
            data:[60, 49, 43, 52, 66, 76, 79]
        }
        
    ]
};
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
};




var dom5 = document.getElementById("order_by_company");
var myChart = echarts.init(dom5);
var app = {};
option = null;
app.title = '折柱混合';

option = {
    title : {
        text: 'Beverages Revenue ($)',
        x:'center'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    toolbox: {
        feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    legend: {
        data:['Orderings','Drink cost'],
        left: 'left',
    },
    xAxis: [
        {
            type: 'category',
            data: ['Channel','Fendi','Clinique','Versace','Tiffany','Furla','Tesla','Lilly','D&G','EA'],
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: 'Orderings',
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
                formatter: '{value}'
            }
        },
        {
            type: 'value',
            name: 'Drink fee',
            min: 0,
            max: 25,
            interval: 5,
            axisLabel: {
                formatter: '{value} $'
            }
        }
    ],
    series: [
        {
            name:'Orderings',
            type:'bar',
            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0]
        },
        {
            name:'Drink fee',
            type:'line',
            yAxisIndex: 1,
            data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5]
        }
    ]
};
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
};





var dom6 = document.getElementById("beverage");
var myChart = echarts.init(dom6);
var app = {};
option = null;
option = {
    title : {
        text: 'Beverages ($)',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    series : [
        {
            name: 'Beverage',
            type: 'pie',
            radius : '65%',
            center: ['50%', '60%'],
            data:[
                {value:335, name:'Espresso'},
                {value:310, name:'Ristretto'},
                {value:234, name:'Latte'},
                {value:135, name:'Cappuccino'},
                {value:1548, name:'Black tea'},
                {value:1548, name:'Green tea'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
};



var dom7 = document.getElementById("cancel_user");
var myChart = echarts.init(dom7);
var app = {};
option = null;
option = {
    title : {
        text: 'Cancelled meeting',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    series : [
        {
            name: 'Cancelled meeting',
            type: 'pie',
            radius : '65%',
            center: ['50%', '60%'],
            data:[
                {value:2, name:'EA'},
                {value:5, name:'Lilly'},
                {value:6, name:'D&G'},
                {value:1, name:'Furla'},
                {value:3, name:'Channel'},
                {value:2, name:'Tesla'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
};




var dom8 = document.getElementById("usage_cancel_room");
var myChart = echarts.init(dom8);
var app = {};
option = null;
option = {
    title : {
        text: 'Utilization rate & cancellation rate'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['Utilization rate','Cancellation rate']
    },
    toolbox: {
        show : true,
        feature : {
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data : ['room A','room B','room C','room D','room E','room F','room G','room H','room I','room J','room K','room L']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'Utilization rate',
            type:'bar',
            data:[0.8, 0.67, 0.6, 0.8, 0.9, 0.75, 0.68, 0.7, 0.46, 0.8, 0.5, 0.6],
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name: '平均值'}
                ]
            }
        },
        {
            name:'Cancellation rate',
            type:'bar',
            data:[0.18, 0.07, 0.16, 0.08, 0.09, 0.25, 0.28, 0.17, 0.16, 0.18, 0.25, 0.16],
            markPoint : {
                data : [
                    {name : '年最高', value : 0.28, xAxis: 6, yAxis: 0.3},
                    {name : '年最低', value : 0.07, xAxis: 1, yAxis: 0.09}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name : '平均值'}
                ]
            }
        }
    ]
};
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
};





var dom9 = document.getElementById("usage_monthly");
var myChart = echarts.init(dom9);
var app = {};
option = null;
option = {
    title: {
        text: 'Monthly utilization'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['Monthly utilization']
    },
    xAxis: {
        type: 'category',
        data: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        name:'Monthly utilization',
        type:'line',
        data: [0.75, 0.55, 0.86, 0.85, 0.90, 0.67, 0.78,0.85, 0.69, 0.80, 0.64, 0.76],
        type: 'line',
        smooth: true
    }]
};
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}




