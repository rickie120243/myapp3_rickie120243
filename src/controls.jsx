var React=require("react");
var actions=require("./actions");
var Controls=React.createClass({
  	clearDone:function() {
		actions.clearDone();
	}
	,render:function() {
		return <div>
      		<button onClick={this.clearDone}>Clear Done</button>
      	</div>
	}
});

module.exports=Controls;