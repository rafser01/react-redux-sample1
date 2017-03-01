var React = require('react');
var Colors = require('../palette/colors');
var Pie = require('../charts/pie');
import mori from 'mori';

var countries = [
  { mi: 'M12', used_litter: 59859996 },
  { mi: 'M52', used_litter: 118395054 },
  { mi: 'MA2', used_litter: 65806000 },
  { mi: 'MB2', used_litter: 40117096 },
  { mi: 'MB1', used_litter: 40117096 },
  { mi: 'M17', used_litter: 127290000 }
];

var palette = Colors.mix({
  r: 130,
  g: 140,
  b: 210
}, {
  r: 180,
  g: 205,
  b: 150
});
function used_litter(c) { return c.used_litter; }
//let sum =0;
module.exports = React.createClass({
  getPair: function() {
     // console.log('....pie components...',this.props.pair); (function(sum,v){          return sum + parseInt(v[2]);        },0)
     // console.log('....pie contries...',countries);
    return this.props.pairs || [];
  },
  // getTotalUsedLitter: function()
  getData: function(){
    let data = this.getPair().map((val)  => {
       // console.log('.....',val.slice(1).reduce(function(sum,v){
          // return sum + parseInt(v[2]);
        // },0));
                              return { mi:  val[1][0].split(":")[1]  , used_litter: val.slice(1).reduce( (sum,v) => sum + parseInt(v[2]) ,0) };
                          })
    
     // console.log('....pie my data...',data);

    return data;
  },
  render: function() {

    return (<div>
      <div>
      </div>
      <div>
      
        <Pie data={ this.getData() } palette={ palette } r={ 60 } R={ 160 } accessor={ used_litter } /></div>
      </div>);
  }
});
