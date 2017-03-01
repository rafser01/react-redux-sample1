import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import Vote from './Vote5';
import * as actionCreators from '../action_creators';
import {toJs,toClj,vector,map,hashmap,get,intoArray} from 'mori';



export const Voting = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return <div>
        <Vote {...this.props} />
    </div>;

  }
});


function mapStateToProps(state) {
  const statejs = toJs(state);
     // console.log("state voting", statejs);


  return {
    pairs: statejs,
    actual: statejs
  }
}

export const VotingContainer = connect(
  mapStateToProps,
  actionCreators
)(Voting);
