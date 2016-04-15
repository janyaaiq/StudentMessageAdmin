var Mydiv = React.createClass({
  render: function(){
    return <div onClick={this.showMsg.bind(this,1)}>first react</div>;
  },
  showMsg:function(num){
    alert('you input n:' + num + 'laomao');
  }
});

ReactDOM.render(<Mydiv></Mydiv>, document.getElementById('container'));