var React=require("react");
var ItemLeft=React.createClass({
  	itemleft:function(tasks){
		var i=tasks.filter(function(task){
			return !task.done;
		}).length;
		var x="",y="is";
		if(i>1) {
			x="s",y="are";
		}
		return <div>There {y} {i} item{x}</div>;
   	},render:function() {
   		var arr=[];
		return <div>
      		{this.itemleft(this.props.obj)}
      	</div>;
	}
});

module.exports=ItemLeft;