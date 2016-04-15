var MyTable = React.createClass({
  getInitialState:function(){
    return{
      filter: 'fff',
    };
  },
  render: function(){
    return (
    <div>
      <div><span>filter:</span><input value={this.state.filter} onChange={(e)=>this.setFilter(e)}/><button onClick={()=>this.showFilter()}>获取</button></div>
      <div></div>
    </div>
    );
  },
  setFilter:function(e){
    this.setState({filter: e.target.value});
  },
  showFilter:function(){
    alert(this.state.filter);
  }
});

ReactDOM.render(<MyTable></MyTable>, document.getElementById('container'));