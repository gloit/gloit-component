define(
  ["exports"],
  function(__exports__) {
    "use strict";
    var RateGaugeChart;

    RateGaugeChart = Ember.Component.extend({
      title: '',
      rate: 0,
      config: {
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
          background: [
            {
              backgroundColor: {
                linearGradient: {
                  x1: 0,
                  y1: 0,
                  x2: 0,
                  y2: 1
                },
                stops: [[0, '#FFF'], [1, '#333']]
              },
              borderWidth: 0,
              outerRadius: '109%'
            }, {
              backgroundColor: {
                linearGradient: {
                  x1: 0,
                  y1: 0,
                  x2: 0,
                  y2: 1
                },
                stops: [[0, '#333'], [1, '#FFF']]
              },
              borderWidth: 1,
              outerRadius: '107%'
            }, {}, {
              backgroundColor: '#DDD',
              borderWidth: 0,
              outerRadius: '105%',
              innerRadius: '103%'
            }
          ]
        },
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
          plotBands: [
            {
              from: 0,
              to: 120,
              color: '#55BF3B'
            }, {
              from: 120,
              to: 160,
              color: '#DDDF0D'
            }, {
              from: 160,
              to: 200,
              color: '#DF5353'
            }
          ]
        },
        series: [
          {
            name: '使用率',
            data: [0],
            tooltip: {
              valueSuffix: ' %'
            }
          }
        ]
      },
      didInsertElement: function() {
        return Ember.run.scheduleOnce('afterRender', this, (function(_this) {
          return function() {
            var config;
            config = _this.get('config');
            config.chart.renderTo = _this.get('elementId');
            config.title.text = _this.get('title') || '';
            config.series[0].data[0] = _this.get('rate') || 0;
            return _this.set('chart', new Highcharts.Chart(config));
          };
        })(this));
      },
      onRateChanged: (function() {
        if (!Ember.isNone(this.get('rate'))) {
          return this.get('chart').series[0].points[0].update(this.get('rate'));
        }
      }).observes('rate')
    });

    __exports__["default"] = RateGaugeChart;
  });