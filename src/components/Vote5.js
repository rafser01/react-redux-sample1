import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {range,toJs , intoArray} from 'mori';
var Pie = require('./pie');

var moment = require('moment');
let  maxlitter = [];


//Odduu Header Style
const header={
  padding: 0,
  margin: "0 auto",
  width: "85%",
  fontSize: "100%",
  display: "flex",

  background: " -webkit-linear-gradient(left, rgba(240,249,255,1) 0%,rgba(203,235,255,0.16) 43%,rgba(161,219,255,1) 100%)",
  WebkitFlexFlow: "row wrap",
  justifyContent: "flex-start"
}
const header1={
  padding: " 0",
  fontSize: "24px",
  margin: "0 120px",

  fontWeight: "bold",
  textAlign: "left",
}
const header2={
  padding: 0,
  fontSize: "16px",
  margin: "0 120px",
  color: '#626771',

  fontWeight: "normal",
  textAlign: "left",
}
const headerSearchIcon={
  padding: 0,
  margin: "0 auto",
  width: "100%",
  display: "flex",

  background: "red",
  WebkitFlexFlow: "row wrap",
  justifyContent: "space-around"
}
const headerSearch={
  justifyContent : "space-around",
  background: "#fff",
  padding: " 5px 10px",
  borderRadius: "25px"
}

const headerSearch2 = {
   border: "0 none",
   font: "bold 12px",
}

const headerIcons={
  // textAlign: "left",
  justifyContent : "flex-end",
  background: "#888"
}

//content style
const divStyle = {
  padding: 0,
  margin: "0 auto",
  width: "85%",
  fontSize: "100%",
  display: "flex",

  background: "-webkit-linear-gradient(top, rgba(206,220,231,0.2) 0%,rgba(89,106,114,0.2) 100%)",
  WebkitFlexFlow: "row wrap",
  justifyContent: "center"
};

const items = {
  background: "#eaeaea",
  padding: "5px",
  width: "25%",
  fontSize: "100%",
  height: "15px",
  margin: "10px",
  cursor: "pointer",
  lineHeight: "15px",
  color: "#000",
  fontWeight: "bold",
  textAlign: "center",
  borderRadius: "25px"
}

const items2 = {
  background: "-webkit-linear-gradient(left, rgba(98,125,77,0.1) 0%,rgba(59,87,37,0.1) 49%,rgba(31,59,8,0.1) 84%,rgba(31,59,8,0.1) 100%)",
  padding: "5px",
  fontSize: "100%",
  width: "12%",
  height: "15px",
  margin: "2px",
  lineHeight: "15px",
  textAlign: "center",
  borderRadius: "25px"
}

const itemsSearch = {
  background: "-webkit-linear-gradient(top, rgba(161,219,255,1) 0%,rgba(203,235,255,1) 53%,rgba(240,249,255,1) 100%)",
  color: "#000",
    width: "100%",
  fontWeight: "bold",
  textAlign: "center",
  borderRadius: "25px"
}

const itemsHeader = {
  padding: "8px",
  fontSize: "20px",
  width: "25%",
  height: "15px",
  marginTop: "10px",

  lineHeight: "15px",
  fontWeight: "bold",
  textAlign: "center",
}

const itemsHeader2 = {
  background: " -webkit-linear-gradient(left, rgba(125,126,125,1) 0%,rgba(73,73,73,0.59) 47%,rgba(14,14,14,1) 100%)",
  padding: "5px",
  fontSize: "100%",
  width: "12%",
  height: "15px",
  marginTop: "10px",

  lineHeight: "15px",
  color: "white",
  fontWeight: "bold",
  textAlign: "center",
}
//SvgGraph Style

const svgOpcity={opacity: 1}
const svgTextAnchor={textAnchor: "middle"}
const svgTextAnchorEnd={textAnchor: "end"}
const svgSinout = {enableBackground:"new 0 0 529.286 529.286",
                   height: "15px",
                   width: "15px", padding:" 25px 18px 5px 2px"}
const svgSetting = {enableBackground:"new 0 0 612 612" , height: "15px", width: "15px",padding:" 25px 18px 5px 2px"}
const svgNotifications = {enableBackground:"new 0 0 55 55" , height: "15px", width: "15px",padding:" 25px 18px 5px 2px"}

const headerkey = {"id": 1 ,
                "sequence": 2 ,
                "eprom": 3,
                "sender": 4 ,
                "pulse": 5 ,
                "time": 6,
                "used_litter": 7,
                "text": 8};



export default React.createClass({
  mixins: [PureRenderMixin],
  getPair: function() {
    return this.props.pairs || [];
  },
  render: function() {
    return <div>
    <div><BodyHeader {...this.props} /></div>
    <div style={header}><hr /></div>
    
 <div><Pie {...this.props}  />     </div>

    <div><ColumnHeadings /></div>
      <div><FilterData  {...this.props} /></div>

    <div>
          {this.getPair().map((entryes,id) =>
                              <div>
                              <Data {...this.props} pair={entryes} id={id} key={entryes}/>
                              </div>
                             )
          }
    </div> 
        
    </div>;
  }
});


let FilterData = React.createClass({
  mixins: [PureRenderMixin],
  getPair: function() {
    // console.log('.......',this.props.pairs);
    return this.props.pairs || [];
  },
  render: function() {
    return <div>
          
        <div style={divStyle}>

          {this.getPair().map((entryes,id) =>
                              <div style={itemsSearch}>
                               {entryes[0][1] === 0? <div></div> : <div><div><h2>Search Result</h2></div><Data {...this.props} pair={entryes} id={id} key={entryes}/></div>}
                              </div>
                             )
          }

        </div>

    </div>;
  }
})



let Data =  React.createClass({
  mixins: [PureRenderMixin],
  getPair: function() {
    // console.log('.....vote5 pair ...',this.props.pair);
    return this.props.pair || [];
  },
  render: function() {
    return <div>

      <div  style={divStyle} onClick={() => {this.props.setShow(this.props.id)}}>
        <div style={items} >
          {this.getPair()[1][0].split(':')[0]}
        </div>
        <div style={items} >
          {this.getPair()[1][0].split(':')[1]}
        </div>

        <div style={items} > {this.getPair().slice(1).reduce(function(sum,v){
          return sum + parseInt(v[2]);
        },0)}</div>
      </div>

        <div>{this.getPair()[0][0] === 1? <div>

            <div><SvgGraphItem pair={this.getPair().slice(1)} /></div>

            <div><ItemColumnHeadings /></div>


            <div>
              {this.getPair().slice(1).map((entry, id) =>
                <DataItem pair={entry} key={entry}/>
                )
              }
            </div>
            </div>:<div></div>
        }</div>
      </div>;
  }
});

let DataItem =  React.createClass({
  mixins: [PureRenderMixin],
  getPair: function() {
    // console.log('Get Second Pair',this.props.pair);
    return this.props.pair || [];
  },
  render: function() {
  var self = this;
      return (<div>
                <div style={divStyle}>
                  <div style={items2}>
                    {this.getPair()[0].split(":")[0]}
                  </div>
                  <div style={items2}>
                    {this.getPair()[0].split(":")[1]}
                  </div>
                  {this.getPair().slice(1).map((entry, id) =>
                    <div style={items2} key={entry}> {entry} </div>
                    )
                  }
                </div>
          </div>);
  }
});



let BodyHeader = React.createClass({
  getInitialState:function(){
    return{searchItem:""};
  },
  getSearchItem: function(event){
    this.props.searchItem(event.target.value);
    this.setState({searchItem: event.target.value});
  },
  render(){
    return (<div>
    <div style={divStyle}>
        <div  className="container">
          <div className="search" >
            <input type="search" placeholder="Search..." onChange={this.getSearchItem}/>
          </div>
        </div>

        <SVGnotifications />
        <SVGsetting />
        <SVGsignout />

    </div>
    <div>
      <div  style={header1}>Dashboard<br/></div>
      <div  style={header2}>Welcome to ODDUU e-Meter Server Side UI</div>
    </div>
    </div>);
  }
});

class ItemColumnHeadings extends React.Component {
  render() {
    return (
      <div id="itemColheaders" style={divStyle}>
        <div  style={itemsHeader2}>Account No</div>
        <div  style={itemsHeader2}>Meter ID</div>
        <div  style={itemsHeader2}>Date</div>
        <div  style={itemsHeader2}>Used Liter</div>
        <div  style={itemsHeader2}>Reading</div>
        <div  style={itemsHeader2}>DMA</div>
        <div  style={itemsHeader2}>Status</div>
      </div>
    );
  }
}

class ColumnHeadings extends React.Component {
  render() {
    return (
      <div id="columnHeadings" style={divStyle}>
        <div  style={itemsHeader}>Account No</div>
        <div  style={itemsHeader}> Meter ID</div>
        <div  style={itemsHeader}>Total Used Liter</div>
      </div>
    );
  }
}

let SVGsignout = React.createClass({
  getWhite: function(){
    // console.log('hello rayhan');
    return "";
  },
render(){
    return(<div onMouseOver={this.getWhite()}>
      <svg version="1.1" id="Capa_1" x="0px" y="0px"
           viewBox="0 0 529.286 529.286" style={svgSinout} xmlSpace="preserve">
        <g>
          <g>
            <g>
              <path d="M358.099,74.604c0,0-28.097-12.644-28.097,16.896s27.837,49.363,28.19,49.3c49.147,32.081,81.629,87.559,81.629,150.629
                c0,97.746-78.016,177.269-175.177,179.7c-97.161-2.431-175.177-81.954-175.177-179.7c0-63.071,32.483-118.547,81.629-150.629
                c0.353,0.063,28.189-19.761,28.189-49.3s-28.097-16.896-28.097-16.896C88.7,111.958,31.31,194.983,31.31,291.429
                c0,129.865,104.053,235.413,233.334,237.857c129.281-2.445,233.332-107.992,233.332-237.857
                C497.977,194.983,440.587,111.958,358.099,74.604z"/>
              <path d="M266.278,0c-26.143,0-34.312,19.141-34.312,26.627v117.159v117.159c0,7.487,8.17,26.627,34.312,26.627
                c26.143,0,31.045-19.141,31.045-26.627V143.786V26.627C297.322,19.14,292.421,0,266.278,0z"/>
            </g>
          </g>
        </g>

      </svg>


    </div>);
  }
});

let SVGsignoutWhite = React.createClass({
render(){
    return(<div>
      <svg version="1.1" id="Capa_1" x="0px" y="0px"
           viewBox="0 0 529.286 529.286" style={svgSinout} xmlSpace="preserve">
        <g>
          <g>
            <g>
              <path d="M358.099,74.604c0,0-28.097-12.644-28.097,16.896s27.837,49.363,28.19,49.3c49.147,32.081,81.629,87.559,81.629,150.629
                c0,97.746-78.016,177.269-175.177,179.7c-97.161-2.431-175.177-81.954-175.177-179.7c0-63.071,32.483-118.547,81.629-150.629
                c0.353,0.063,28.189-19.761,28.189-49.3s-28.097-16.896-28.097-16.896C88.7,111.958,31.31,194.983,31.31,291.429
                c0,129.865,104.053,235.413,233.334,237.857c129.281-2.445,233.332-107.992,233.332-237.857
                C497.977,194.983,440.587,111.958,358.099,74.604z" fill="#FFFFFF"/>
              <path d="M266.278,0c-26.143,0-34.312,19.141-34.312,26.627v117.159v117.159c0,7.487,8.17,26.627,34.312,26.627
                c26.143,0,31.045-19.141,31.045-26.627V143.786V26.627C297.322,19.14,292.421,0,266.278,0z" fill="#FFFFFF"/>
            </g>
          </g>
        </g>

      </svg>


    </div>);
  }
});

let SVGsetting = React.createClass({
render(){
    return(<div>
      <svg version="1.1" id="Capa_2"  x="0px" y="0px"
          viewBox="0 0 612 612" style={svgSetting}>
      <g>
        <g>
          <path d="M342.982,612h-73.975c-14.775,0-27.011-11.073-28.467-25.747l-7.584-45.446c-14.249-4.43-28.093-10.184-41.32-17.141
            l-38.064,27.183c-4.551,3.772-10.982,6.077-17.576,6.077c-7.646,0-14.825-2.982-20.236-8.393l-52.303-52.304
            c-10.446-10.446-11.255-26.93-1.901-38.357l26.778-37.508c-6.978-13.247-12.722-27.102-17.141-41.311l-46.114-7.695
            C11.083,370.014,0,357.777,0,342.982v-73.964c0-14.775,11.073-27.011,25.747-28.478l45.446-7.605
            c4.439-14.269,10.193-28.113,17.131-41.3l-27.173-38.064C52.191,142.7,53,126.217,63.457,115.78l52.313-52.323
            c10.083-10.062,27.345-10.901,38.327-1.921l37.559,26.789c13.177-6.947,27.021-12.691,41.3-17.131l7.675-46.104
            C241.997,11.073,254.243,0,269.018,0h73.974c14.755,0,26.991,11.063,28.478,25.727l7.595,45.467
            c14.259,4.439,28.103,10.184,41.29,17.131l38.074-27.183c4.541-3.762,10.973-6.058,17.565-6.058
            c7.646,0,14.825,2.973,20.226,8.373l52.303,52.323c10.437,10.406,11.275,26.879,1.941,38.317l-26.788,37.539
            c6.957,13.187,12.691,27.031,17.131,41.3l46.114,7.696C600.937,242.007,612,254.243,612,269.018v73.964
            c0,14.795-11.073,27.021-25.768,28.446l-45.426,7.595c-4.439,14.279-10.184,28.134-17.131,41.32l27.183,38.055
            c8.95,10.911,8.11,27.405-2.346,37.821l-52.293,52.293c-10.042,10.052-27.345,10.941-38.357,1.911l-37.508-26.769
            c-13.228,6.968-27.071,12.722-41.29,17.142l-7.706,46.124C369.983,600.927,357.747,612,342.982,612z M190.907,501.641
            c1.699,0,3.408,0.424,4.945,1.294c15.412,8.637,31.814,15.442,48.794,20.245c3.762,1.062,6.573,4.207,7.22,8.07l8.707,52.344
            c0.506,4.874,4.177,8.181,8.434,8.181h73.975c4.257,0,7.918-3.297,8.333-7.514l8.828-53.011c0.637-3.853,3.458-6.998,7.221-8.06
            c16.938-4.794,33.341-11.6,48.763-20.246c3.408-1.921,7.636-1.688,10.821,0.597l43.19,30.854c4.359,3.509,8.799,2.78,11.751-0.162
            l52.313-52.313c3.074-3.063,3.316-7.888,0.586-11.234l-31.268-43.718c-2.286-3.186-2.508-7.402-0.597-10.83
            c8.636-15.352,15.432-31.754,20.226-48.764c1.062-3.772,4.206-6.583,8.079-7.23l52.354-8.728c4.875-0.506,8.182-4.156,8.182-8.414
            v-73.964c0-4.257-3.297-7.928-7.514-8.343l-53.011-8.818c-3.873-0.647-7.009-3.458-8.08-7.23
            c-4.794-17.01-11.6-33.413-20.226-48.743c-1.911-3.429-1.688-7.646,0.597-10.831l30.874-43.211
            c3.125-3.863,2.872-8.677-0.182-11.731L481.91,77.797c-2.942-2.943-8.009-3.195-11.205-0.576l-43.747,31.278
            c-3.186,2.286-7.413,2.508-10.82,0.597c-15.361-8.626-31.765-15.432-48.764-20.246c-3.762-1.052-6.573-4.207-7.221-8.07
            l-8.717-52.343c-0.536-4.976-4.126-8.211-8.454-8.211h-73.975c-4.338,0-7.918,3.226-8.343,7.514l-8.798,53
            c-0.637,3.863-3.458,7.008-7.22,8.07c-17.03,4.824-33.433,11.62-48.753,20.246c-3.438,1.912-7.655,1.689-10.831-0.597
            l-43.232-30.874c-4.349-3.479-8.808-2.781-11.751,0.182L77.767,130.08c-3.054,3.054-3.287,7.868-0.556,11.195l31.258,43.758
            c2.286,3.195,2.508,7.412,0.597,10.831c-8.616,15.331-15.422,31.733-20.246,48.753c-1.052,3.762-4.207,6.574-8.07,7.221
            l-52.343,8.727c-4.956,0.526-8.181,4.116-8.181,8.455v73.964c0,4.328,3.216,7.908,7.493,8.322l53.021,8.818
            c3.863,0.638,7.008,3.459,8.07,7.23c4.783,16.919,11.589,33.332,20.246,48.784c1.912,3.418,1.689,7.625-0.597,10.811
            L77.605,470.14c-3.155,3.883-2.913,8.696,0.151,11.761l52.313,52.303c2.973,2.963,8.02,3.226,11.205,0.576l43.748-31.258
            C186.781,502.277,188.844,501.641,190.907,501.641z M306.01,427.049c-66.764,0-121.079-54.305-121.079-121.059
            c0-66.764,54.315-121.079,121.079-121.079c66.765,0,121.069,54.315,121.069,121.079
            C427.069,372.733,372.764,427.049,306.01,427.049z M306.01,205.136c-55.609,0-100.854,45.245-100.854,100.854
            c0,55.6,45.244,100.833,100.854,100.833c55.6,0,100.844-45.233,100.844-100.833C406.844,250.38,361.609,205.136,306.01,205.136z"
            />
        </g>
      </g>
    </svg>


    </div>);
  }
});

let SVGnotifications = React.createClass({
render(){
    return(<div>

    <svg version="1.1"  x="0px" y="0px"
       viewBox="0 0 55 55" style={svgNotifications}>
        <g>
          <path d="M51.376,45.291C46.716,40.66,44.354,35.179,44.354,29v-8.994c0.043-6.857-4.568-11.405-8.53-13.216
            c-1.135-0.519-2.305-0.919-3.494-1.216V5c0-2.757-2.243-5-5-5s-5,2.243-5,5v0.661c-1.071,0.289-2.124,0.666-3.146,1.138
            C14.805,8.817,10.369,13.681,10.329,20v9c0,6.388-2.256,11.869-6.705,16.291c-0.265,0.264-0.361,0.653-0.249,1.01
            s0.415,0.621,0.784,0.685l9.491,1.639c1.768,0.305,3.396,0.555,4.945,0.761C20.341,52.806,23.768,55,27.512,55
            c3.745,0,7.173-2.196,8.917-5.618c1.543-0.205,3.163-0.454,4.921-0.758l9.49-1.639c0.369-0.063,0.671-0.328,0.784-0.685
            C51.737,45.944,51.641,45.555,51.376,45.291z M24.329,5c0-1.654,1.346-3,3-3s3,1.346,3,3v0.182c-1.993-0.286-4.015-0.274-6,0.047V5
            z M27.512,53c-2.532,0-4.898-1.258-6.417-3.315c2.235,0.23,4.321,0.346,6.406,0.346c2.093,0,4.186-0.116,6.43-0.349
            C32.411,51.741,30.044,53,27.512,53z M41.01,46.653c-1.919,0.331-3.678,0.6-5.34,0.812c-0.002,0-0.004,0-0.006,0
            c-0.732,0.093-1.444,0.174-2.141,0.244c-0.007,0.001-0.015,0.001-0.022,0.002c-0.637,0.064-1.26,0.115-1.876,0.16
            c-0.117,0.009-0.233,0.016-0.35,0.024c-0.534,0.035-1.062,0.063-1.587,0.083c-0.108,0.004-0.216,0.01-0.324,0.013
            c-1.244,0.042-2.471,0.042-3.714,0.001c-0.11-0.004-0.222-0.009-0.332-0.014c-0.518-0.02-1.04-0.047-1.567-0.082
            c-0.124-0.008-0.248-0.016-0.373-0.025c-0.6-0.043-1.207-0.094-1.828-0.155c-0.022-0.002-0.043-0.004-0.064-0.006
            c-0.692-0.069-1.399-0.15-2.126-0.242c-0.003,0-0.006,0-0.009,0c-1.668-0.211-3.433-0.482-5.361-0.814L6.329,45.33
            c3.983-4.554,6-10.038,6-16.33v-8.994c0.034-5.435,3.888-9.637,7.691-11.391c1.131-0.521,2.304-0.91,3.497-1.183
            c0.01-0.002,0.021-0.001,0.031-0.003c2.464-0.554,5.087-0.579,7.58-0.068c0.013,0.003,0.026-0.003,0.039-0.001
            c1.304,0.272,2.588,0.684,3.825,1.249c3.689,1.687,7.396,5.861,7.361,11.392v9c0,6.033,2.175,11.643,6.313,16.331L41.01,46.653z"/>
          <path d="M33.746,11.338c-3.875-1.771-8.62-1.773-12.469,0.002c-2.195,1.012-5.918,3.973-5.948,8.654
            c-0.003,0.552,0.441,1.002,0.994,1.006c0.002,0,0.004,0,0.006,0c0.549,0,0.997-0.443,1-0.994c0.023-3.677,3.019-6.035,4.785-6.85
            c3.331-1.537,7.446-1.533,10.799,0c0.502,0.23,1.096,0.009,1.326-0.493C34.469,12.16,34.248,11.567,33.746,11.338z"/>
        </g>
    </svg>


    </div>);
  }
});












let SvgGraphItem = React.createClass( {
  getPair: function() {
    return this.props.pair || [];
  },
  getTransfromX: function(index,dt){
    // dateX.push(index*56+56);
    // dateX[dt]= index*56+56;
    // console.log('getTransfromX ', "translate("+(index*56+56)+",0)")
    return "translate("+(index*56+56)+",0)";
  },
  getTransfromY: function(index){
    return "translate(0,"+(395-(index*20))+")";
  },
  getPointXY: function(){

    let data = this.getPair().map((val,index)  => {
                        return [val[1], index, val[2]]
                      }).reduce((m,val) => {
                                  m[val[0]] =  m[val[0]] || {};
                                  m[val[0]]['x'] = val[1] * 56 + 56;
                                  m[val[0]]['y'] =  maxlitter < 100? val[2]*2:  maxlitter < 500 ?  val[2]/2: maxlitter <1000?  val[2]/5 :  val[2]/14;
                                  m[val[0]]['transform'] =  'translate(' + m[val[0]]['x'] + ',0)'; //translate(336,0)
                                  return m;
                          } , {});


    // console.log(this.getPair(),"svg items Date ", data); maxlitter < 100? val[2]*10:  maxlitter < 500 ?  val[2]*50: maxlitter <1000?  val[2]*100 :  val[2]*300;
    // console.log("svg items Litter ", );

    return data;

    // return "M20,173 L100,150 L150,30 L200,140 L250,170 L300,50 L350,120 L450,170 L500,140 L560,50"
  },

  XY: function (){
    const m = this.getPointXY();
    return Object.keys(m).map(function(v){
       return [m[v].x,m[v].y]
    });
  },

  cureve: function(){
    const r = this.XY();
    const s = 395-r[0][1];
    // console.log('....', s);
    const first = "M" + r[0][0] + "," + s + " ";
    const v = r.slice(1).reduce(function(st,val){
      let valy = 395-val[1];
      // console.log("vla y ", valy);
      return st + "L" + val[0] + ","+ valy+ " ";
    }, first );
    // console.log('valu of d ', v);
    return v;
//    return "M20,173 Q100,150  150,30     200,140 250,170 Q300,50 350,120 Q450,170 500,140 L560,50";

  },

  getMaxLitterRange: function(){
    const used_litter = this.props.pair || [];
     maxlitter = used_litter.reduce(function(max,v){
       return v[2] > max? v[2] : max;
    },0);
    const max = maxlitter;
    return toJs(range(0,  max < 100? max+10: max+100  , max < 100? 10:  max < 500 ? 50: max <1000? 100 : 300));
  },
  render(){
    return(<div style={divStyle}>
    <div>Monthly water Usage Information</div>
      <svg width="640" height="440" viewBox="0 0 640 440">
        <g width="560" height="395" viewBox="0 0 640 440" transform="translate(40,20)">
          <g className="axis" transform="translate(0,395)">

            {this.getPair().map((date,index) =>
                <g className="tick" transform={this.getTransfromX(index)} style={svgOpcity} >
                  <line y2="6" x2="0"></line>
                  <text dy=".71em" y="9" x="0" style={svgTextAnchor}>{moment(date[1]).format('ll').split(",")[0]}</text>
               </g>
            )}


            <path className="domain" d="M0,2V0H560V2"></path>
          </g>

          <g className="axis">

              {this.getMaxLitterRange().map((litter,index) =>
                  <g className="tick" transform={this.getTransfromY(index)} style={svgOpcity}>
                    <line x2="-6" y2="0"></line>
                    <text dy="2px" x="-9" y="0" style={svgTextAnchorEnd}>{litter}</text>
                  </g>
              )}
              <path className="domain" d="M-6,0H0V395H-6"></path>
          </g>


          <g className="plot">
            <path className="series" d={this.cureve()}></path>
          </g>


        </g>
      </svg>
    </div>);
  }
});







class SvgGraph extends React.Component {
  render(){
    return(<div>
      <div style={header}>
        <div style={{
                    padding: 10,
                    margin: 0,
                    font: '18px bold ',
                }}> Usage Information</div>
      </div>
      <svg width="640" height="240" viewBox="0 0 640 240">
        <g width="560" height="195" viewBox="0 0 640 240" transform="translate(40,20)">
          <g className="axis" transform="translate(0,195)">
            <g className="tick" transform="translate(33.67257601679591,0)" style={svgOpcity}>
              <line y2="10" x2="0"></line>
              <text dy=".71em" y="9" x="0" style={svgTextAnchor}>Jan 29</text>
            </g>
            <g className="tick" transform="translate(92.15340090381858,0)" style={svgOpcity}>
              <line y2="10" x2="0"></line>
              <text dy=".71em" y="9" x="0" style={svgTextAnchor}>Jan 30</text>
            </g>
            <g className="tick" transform="translate(150.63422579084124,0)" style={svgOpcity}>
              <line y2="10" x2="0"></line>
              <text dy=".71em" y="9" x="0" style={svgTextAnchor}>Jan 31</text>
            </g>
            <g className="tick" transform="translate(209.11505067786393,0)" style={svgOpcity}>
              <line y2="10" x2="0"></line>
              <text dy=".71em" y="9" x="0" style={svgTextAnchor}>Feb 01</text>
            </g>
            <g className="tick" transform="translate(267.5958755648866,0)" style={svgOpcity}>
              <line y2="10" x2="0"></line>
              <text dy=".71em" y="9" x="0" style={svgTextAnchor}>Feb 02</text>
            </g>
            <g className="tick" transform="translate(326.0767004519093,0)" style={svgOpcity}>
              <line y2="10" x2="0"></line>
              <text dy=".71em" y="9" x="0" style={svgTextAnchor}>Feb 03</text>
            </g>
            <g className="tick" transform="translate(384.55752533893195,0)" style={svgOpcity}>
              <line y2="10" x2="0"></line>
              <text dy=".71em" y="9" x="0" style={svgTextAnchor}>Feb 04</text>
            </g>
            <g className="tick" transform="translate(443.0383502259547,0)" style={svgOpcity}>
              <line y2="10" x2="0"></line>
              <text dy=".71em" y="9" x="0" style={svgTextAnchor}>Feb 05</text>
            </g>
            <g className="tick" transform="translate(501.51917511297734,0)" style={svgOpcity}>
              <line y2="10" x2="0"></line>
              <text dy=".71em" y="9" x="0" style={svgTextAnchor}>Feb 06</text>
            </g>
            <g className="tick" transform="translate(560,0)" style={svgOpcity}>
              <line y2="10" x2="0"></line>
              <text dy=".71em" y="9" x="0" style={svgTextAnchor}>Feb 07</text>
            </g>
            <path className="domain" d="M0,2V0H560V2"></path>
          </g>

          <g className="axis">
            <g className="tick" transform="translate(0,195)" style={svgOpcity}>
              <line x2="-6" y2="0"></line>
              <text dy=".32em" x="-9" y="0" style={svgTextAnchorEnd}>0</text>
            </g>
            <g className="tick" transform="translate(0,170.625)" style={svgOpcity}>
              <line x2="-6" y2="0"></line>
              <text dy=".32em" x="-9" y="0" style={svgTextAnchorEnd}>1</text>
            </g>
            <g className="tick" transform="translate(0,146.25)" style={svgOpcity}>
              <line x2="-6" y2="0"></line>
              <text dy=".32em" x="-9" y="0" style={svgTextAnchorEnd}>2</text>
            </g>
            <g className="tick" transform="translate(0,121.875)" style={svgOpcity}>
              <line x2="-6" y2="0"></line>
              <text dy=".32em" x="-9" y="0" style={svgTextAnchorEnd}>3</text>
            </g>
            <g className="tick" transform="translate(0,97.5)" style={svgOpcity}>
              <line x2="-6" y2="0"></line>
              <text dy=".32em" x="-9" y="0" style={svgTextAnchorEnd}>4</text>
            </g>
            <g className="tick" transform="translate(0,73.125)" style={svgOpcity}>
              <line x2="-6" y2="0"></line>
              <text dy=".32em" x="-9" y="0" style={svgTextAnchorEnd}>5</text>
            </g>
            <g className="tick" transform="translate(0,48.75)" style={svgOpcity}>
              <line x2="-6" y2="0"></line>
              <text dy=".32em" x="-9" y="0" style={svgTextAnchorEnd}>6</text>
            </g>
            <g className="tick" transform="translate(0,24.375)" style={svgOpcity}>
              <line x2="-6" y2="0"></line>
              <text dy=".32em" x="-9" y="0" style={svgTextAnchorEnd}>7</text>
            </g>
            <g className="tick" transform="translate(0,0)" style={svgOpcity}>
              <line x2="-6" y2="0"></line>
              <text dy=".32em" x="-9" y="0" style={svgTextAnchorEnd}>8</text>
            </g>
              <path className="domain" d="M-6,0H0V195H-6"></path>
          </g>


          <g className="plot">
            <path className="series" d="M33.67257601679591,73.125L92.15340090381858,146.25L150.63422579084124,24.375L209.11505067786393,146.25L267.5958755648866,170.625L326.0767004519093,48.75L384.55752533893195,121.875L443.0383502259547,170.625L501.51917511297734,146.25L560,48.75"></path>
          </g>


        </g>
      </svg>
    </div>);
  }
}





let ColumnHeader = React.createClass({
  getPair: function(){

    return this.props.pairid || [];
  },
  render: function(){
    return <div style={divStyle}>
      {this.getPair().filter(function(en, val){
        return val === 'time' || val === 'used_litter' || val === 'sender';
      }).map((entry, id) =>
        header[id] === 6? <div style={items}  key={entry}> {moment(entry).lang('en').fromNow()}</div> :
          <div style={items}  key={entry}> {entry}</div>
        )
      }
    </div>;
  }
});

