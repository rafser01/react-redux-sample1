import {toJs,toClj,vector,map,hashMap,get,intoArray, reduce,
        filter, count, getIn, first,into, assocIn,assoc, rest , sort , isEven , isMap , flatten} from 'mori';

/*
function setConnectionState(state, connectionState, connected) {
  return state.set('connection', Map({
    state: connectionState,
    connected
  }));
}


 if (a[0] === b[0]){
          return new Date(b[1]) - new Date(a[1]);
        }
        return a[0] >b[0] ? -1 : a[0] <b[0] ? 1 : 0;

*/
function sortDate(a,b){
          // console.log("sort", get(b,1))
          return new Date(get(a,1)) - new Date(get(b,1));
}

function setPairs(state){
  return  into(vector(), map(function(pairs){
    return into(vector(vector(0,0)),  sort(sortDate,map(function(pair){
      // let val = sort(toJs(pair)[0]);
       // console.log("Date sort ", toJs(state));
          return into(vector(get(pairs,0)),pair);
        // let returnval2 = into(vector("fil"), returnval);
        // console.log('return val ', toJs(returnval2));
        // return returnval2;

    },get(pairs,1))) );

  },state) ) ;
}


function setState(state, newState) {
   // newState === // [ { 'AC0404111815:MI7043210': { '2/15/2017': [Object , Object, Object],  '2/14/2017': [Object,Object] }, 
                   //     'AC0404745867:MI7095561': { '2/15/2017': [Object], '2/14/2017': [Object], '2/13/2017': [Object], '1/14/2017': [Object] },
                   //     'AC0404729033:MI7092063': { '2/15/2017': [Object], '2/14/2017': [Object], '2/13/2017': [Object], '2/2/2017': [Object] },
                   //     'AC0404180390:MI7092563': { '2/15/2017': [Object], '2/14/2017': [Object], '2/13/2017': [Object], '2/2/2017': [Object] },
                   //     'H310:H310': { '2/2/2017': [Object], '1/25/2017': [Object], '1/24/2017': [Object], '1/23/2017': [Object], '1/14/2017': [Object] },
                   //     'AC0404729033:MI7092567':  { '1/25/2017': [Object], '1/24/2017': [Object], '1/23/2017': [Object], '1/22/2017': [Object], '1/20/2017': [Object], '1/13/2017': [Object] } 
                   // } ]
//hear object is {eprom : "900" id : 2459 pulse : "0" sender: "8801774940705" sequence : "00001017" text : "0:900:00001017:" time : "Wed Feb 15 2017 09:56:20 GMT+0600 (BDT)" used_litter : "900"}
  let setval = into(vector(), map( function(kv){
    // console.log("the original value ", toJs(kv));
    // const modefai = (toJs(kv)[0]).split(':');
    // console.log(" modefied valu of kv ",modefai);
    return vector(get(kv,0), into(vector(),filter( function(actual){
       let getDate = toJs(actual);
      
       // console.log("get actual date ", getDate);
      return get(actual,1) > 0;
    },  map(function(v){
      const r = reduce(function(minmax,v){
        if(!get(v,'used_litter')) return minmax;
        // console.log("new min max ", toJs(v) , toJs(get(v,'used_litter')));
        const map11 =   map(
          function(a,b,c){
            return c(a,b);
          } ,
          minmax,
          vector(parseInt( get(v,'used_litter'))  , parseInt(get(v,'used_litter'))),
          vector(function(a,b){
            return a > b? a : b;
          },function(a,b){
            return a < b? a : b;
          }));
         // console.log("map11" , toJs(map11), toJs(get(v,'used_litter')));
        return map11;
      }  , vector(0,2333333333),get(v,1));
       // console.log("minmax",  toJs(r));//[0],toJs(r)[1] );
      return vector(get(v,0), toJs(r)[0] - toJs(r)[1], 1000+toJs(r)[0] - toJs(r)[1], "Kallyanpur","Active");

    } ,get(kv,1)))));
  },toClj(newState[0])));
//toJs(setval));//Array[6] [[0:Array[2],1:Array[2]....]] //Array[2] //[0 : "H310:H310" 1 : Array[6]] //Array[6] //[Array[5],Array[5],...] // Array[5] // [0:"1/16/2017" 1:5 2:1005 3:"Kallyanpur"4:"Active"]
return setval;
}


function toggle(state,num){
  return assocIn(state,[num,0,0],getIn(state,[num,0,0]) === 0? 1: 0);
}


function stateFilter(state,val){
        console.log('state filter', val);

        const dd = into(vector(), map( function(v){
            // console.log('val v ', toJs(getIn(v, [1,0]).split(':')[1])); 
              if (getIn(v,[0,1]) === 1 ) {
                return  assocIn(v,[0,1], 0);
              }

              if ( getIn(v, [1,0]).split(':')[0].toLowerCase() === val.toLowerCase() || getIn(v, [1,0]).split(':')[1].toLowerCase() === val.toLowerCase()) {
                console.log('assoc in ', toJs(assocIn(v,[0,1], 1)));
                return  assocIn(v,[0,1], getIn(v,[0,1]) === 0? 1: 0);
              } 
              return v;
        } ,state));

  // console.log('filter index ', toJs(dd));
 return dd;
}
//  = Map({ "data" : vector(), "filterdata": Map()} )  
export default function(state = vector(), action) {
  switch (action.type) {
    /*
  case 'SET_CLIENT_ID':
    return state.set('clientId', action.clientId);
  case 'SET_CONNECTION_STATE':
    return setConnectionState(state, action.state, action.connected);
   */
  case 'SET_STATE':
     // console.log("reducer state", toJs(state));
    const ns = setPairs(setState(state, action.state));
    // console.log("getIn ", toJs(getIn(ns,[1,1,1,1])));
    // console.log("next state ",toJs(ns));
    return ns ;
    case 'TOGGLE':
    // console.log("id" , action.id)
    return toggle(state,parseInt(action.id));
     case 'FILTER':
     // stateFilter(state,action.filter);
    // const nsa = setPairs(setState(state, action.state));
    // console.log('state value ', toJs(nsa)); 
    return stateFilter(state,action.filter);//filter(state,action.filter);
  default:
    return state;
  }
}
