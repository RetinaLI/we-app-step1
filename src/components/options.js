export function getPieOpt() {
  return {
    title: {
      text: '暂无数据',
      textStyle: {
        fontSize: 14,
        color: '#333',
        align: 'center'
      },
      top: '8%',
      left: 'center'
    },
    animation: false,
    backgroundColor: '#fff',
    tooltip: {
      show: false,
      trigger: 'item',
      formatter: "{b}: {c}"
    },
    color: ['#4F91FF', '#FFBC52', '#3DE3A3', '#CBCBCB'],
    series: [
      {
        type: 'pie',
        radius: ['40%', '45%'],
        center: ['50%', '60%'],
        avoidLabelOverlap: false,
        label: {
          normal: {
            show: true,
            padding: [0, -35],		// 控制标签移动
            formatter: '{num|{d}%}\n{time|{b}}',
            rich: {			// 富文本
              num: {
                fontSize: 12,
                color: '#333',
                lineHeight: 40,
                align: 'center'
              },
              time: {
                fontSize: 10,
                lineHeight: 40,
                color: '#999',
                align: 'center'
              }
            }
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
            show: true,
            smooth: false,
            length: 35,					// 第一条导视线长度
            length2: 35,				// 第二条导视线长度
            lineStyle: {
              color: '#999',
              width: 0.5
            }
          }
        },
        data: [
          {name: '暂无数据', value: 100}
        ]
      }
    ]
  };
}

export function getXyOpt() {
  return {
    title: {
      text: '暂无数据',
      textStyle: {
        fontSize: 14,
        color: '#333',
        align: 'center'
      },
      top: '8%',
      left: 'center'
    },
    backgroundColor: '#fff',
    animation: false,
    tooltip: {
      show: false,
      trigger: 'axis'
    },
    grid: {
      top: '30%',
      left:'15%',
      right:'15%',
      bottom: '15%'
    },
    xAxis: {
      type: 'category',
      axisTick: {
        show: false
      },
      axisLine: {
        lineStyle: {
          color: '#ccc'
        }
      },
      axisLabel: {
        color: '#666',
        fontSize: 12
      },
      data: []
    },
    yAxis: {
      type: 'value',
      min: 0,
      max: 100,
      name: '占比(%)',
      axisLabel: {
        color: '#666',
        fontSize: 12,
        interval: 'auto'
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      }
    },
    series: [
      {
        type: 'bar',
        itemStyle: {
          barBorderRadius: 5,
          normal: {
            label: {
              show: true,
              position: 'top',
              formatter: '{c}%'
            }
          }
        },
        barWidth: 10,
        data: []
      }
    ]
  };
}

export function getScoreOpt() {
  return {
    color: ['#eee', '#eee'],
    series: [
      {
        name: '综合得分',
        type: 'pie',
        radius: ['65%', '75%'],
        labelLine: {
          show: false
        },
        label: {
          show: true,
          position: 'center',
          formatter: (p) => {
            if (p.name) {
              return [`{x|${p.value}} {y|分}`, '{z|综合得分}'].join('\n');
            } else {
              return '';
            }
          },
          padding: [20, 0, 0, 0],
          rich: {
            x: {
              color: '#eee',
              fontSize: 48,
              fontFamily: 'Arial'
            },
            y: {
              color: '#333',
              fontSize: 12,
              padding: [0, 0, 26, 0]
            },
            z: {
              color: '#555',
              fontSize: 10
            }
          }
        },
        data: [
          { name: '得分', value: 0 },
          { name: '', value: 100 }
        ]
      }
    ]
  };
}

export function getMapOpt() {
  return {
    backgroundColor: '#fff',
    tooltip: {
      show: false
    },
    visualMap: {
      show: false,
      min: 0,
      max: 1000,
      type: 'continuous',
      inRange: {
        color: ['#DAE4FF', '#4475FD']
      }
    },
    series: [{
      type: 'map',
      map: 'china',
      zoom: 1,
      itemStyle: {
        normal: {
          areaColor: '#DAE4FF',
          borderWidth: 0
        },
        emphasis: {
          areaColor: '#DAE4FF'
        }
      },
      data: [],
      markPoint: {
        label: {
          show: true,
          position: 'right',
          formatter: '{b}',
          fontSize: 10,
          color: '#333333',
          padding: [2, 5],
          backgroundColor: '#fff',
          borderRadius: 8
        },
        symbol: 'circle',
        symbolSize: 6,
        itemStyle: {
          color: 'blue'
        },
        data: []
      }
    }]
  };
}
