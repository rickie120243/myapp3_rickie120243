var React=require("react");
var Reflux=require("reflux");
var store=require("./store");
var Action=require("./actions");

var TaskInput = React.createClass({
	keypress:function(e){
		if(e.key=="Enter"){
			Action.add(e.target.value);
			e.target.value="";
		}
	}
	,render: function() {
		return <div>
			<input onKeyPress={this.keypress}/>
		</div>;
	}
});
module.exports=TaskInput