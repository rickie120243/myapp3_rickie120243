var React=require("react");
var Reflux=require("reflux");
var store=require("./store");
var actions=require("./actions");

var TaskView = React.createClass({
	mixins:[Reflux.listenTo(store,"onStore")]
	,getInitialState:function(){
		return {data:[]};
	}
	,onStore:function(data) {
		this.setState({data:data});
	}
	,toggle:function(e){
		var idx=e.target.dataset.idx;
		actions.toggle(idx);
	}
	,renderItem:function(task,idx) {
		var done=task.done?"done":"";
		return <div className={done} data-idx={idx}
		onClick={this.toggle}>{task.name}</div>
	}
	,render: function() {
		return <div>
			{this.state.data.map(this.renderItem)}
		</div>;
	}
});
module.exports=TaskView