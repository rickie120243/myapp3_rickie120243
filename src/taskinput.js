var React=require("react");
var actions=require("./actions");
var TaskInput=React.createClass({
  	onkeypress:function(e){
  		if(e.key=="Enter"&&e.target.value!=""){
 			 actions.add(e.target.value);
 			 e.target.value="";
      }
  	}
  	,render:function() {
		return <div>
      		<input onKeyPress={this.onkeypress}/>
      	</div>
	}
});

module.exports=TaskInput;