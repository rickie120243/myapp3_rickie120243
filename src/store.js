var Reflux=require("reflux");
var actions=require("./actions");
var store=Reflux.createStore({
	listenables:actions
	,data:[]
	,onToggle:function(idx){
		this.data[idx].done=!this.data[idx].done;
		this.trigger(this.data);
	}
	,onAdd:function(item) {
		this.data.push({name:item,done:false});
		this.trigger(this.data);
	}
	,onClear:function() {
		this.data=[];
		this.trigger(this.data);
	}
});

module.exports=store;