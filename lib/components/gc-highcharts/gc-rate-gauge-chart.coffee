RateGaugeChart = Ember.Component.extend
  title: ''
  rate: 0

  config:
    chart: {
      type: 'gauge',
      plotBackgroundColor: null,
      plotBackgroundImage: null,
      plotBorderWidth: 0,
      plotShadow: false
    },
    title: {
      text: ''
    },
    pane: {
      startAngle: -150,
      endAngle: 150,
      background: [{
        backgroundColor: {
          linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
          stops: [
            [0, '#FFF'],
            [1, '#333']
          ]
        },
        borderWidth: 0,
        outerRadius: '109%'
      }, {
        backgroundColor: {
          linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
          stops: [
            [0, '#333'],
            [1, '#FFF']
          ]
        },
        borderWidth: 1,
        outerRadius: '107%'
      }, {
        # default background
      }, {
        backgroundColor: '#DDD',
        borderWidth: 0,
        outerRadius: '105%',
        innerRadius: '103%'
      }]
    },
    # the value axis
    yAxis: {
      min: 0,
      max: 200,

      minorTickInterval: 'auto',
      minorTickWidth: 1,
      minorTickLength: 10,
      minorTickPosition: 'inside',
      minorTickColor: '#666',

      tickPixelInterval: 30,
      tickWidth: 2,
      tickPosition: 'inside',
      tickLength: 10,
      tickColor: '#666',
      labels: {
        step: 2,
        rotation: 'auto'
      },
      title: {
        text: '%'
      },
      plotBands: [{
        from: 0,
        to: 120,
        color: '#55BF3B' # green
      }, {
        from: 120,
        to: 160,
        color: '#DDDF0D' # yellow
      }, {
        from: 160,
        to: 200,
        color: '#DF5353' # red
      }]
    },

    series: [{
      name: '使用率',
      data: [0],
      tooltip: {
        valueSuffix: ' %'
      }
    }]

  didInsertElement: ->
    # 使用Highcharts绘制使用率
    Ember.run.scheduleOnce 'afterRender', @, =>
      config = @get('config')
      config.chart.renderTo = @get('elementId')
      config.title.text = @get('title') || ''
      config.series[0].data[0] = @get('rate') || 0

      @set('chart', new Highcharts.Chart(config))

  onRateChanged: (->
    @get('chart').series[0].points[0].update(@get('rate')) unless Ember.isNone(@get('rate'))
  ).observes('rate')

`export default RateGaugeChart`
