var React=require("react");
var Controls=require("./controls.jsx");
var TaskView=require("./taskview");
var TaskInput=require("./taskinput");

var Maincomponent = React.createClass({
  render: function() {
    return <div>
    <TaskInput/>
    <Controls/>
    <TaskView/>
    </div>;
  }
});
module.exports=Maincomponent;