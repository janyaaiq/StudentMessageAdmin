var MyTable = React.createClass({
  getInitialState:function(){
    return{
      filter: 'fff',
      tableMessage: [],
    };
  },
  render: function(){
    return (
    <div>
      <div><span>条件:</span><input value={this.state.filter} onChange={(e)=>this.setFilter(e)}/><button onClick={()=>this.showFilter()}>查询</button><button onClick={()=>this.getAllMessage()}>获取全部信息</button></div>
      <div>
        <table>
          <thead>
            <tr>
              <td>姓名</td>
              <td>性别</td>
              <td>年龄</td>
              <td>游戏ID</td>
              <td>S6赛季排位段位</td>
            </tr>
          </thead>
          <tbody>
            {
              this.state.tableMessage.length > 0 && this.state.tableMessage.map((child,index)=>
                <tr key={index}>
                  <td>{child.name}</td>
                  <td>{child.sex}</td>
                  <td>{child.age}</td>
                  <td>{child.ID}</td>
                  <td>{child.duanwei}</td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    </div>
    );
  },
  componentDidMount:function(){
    
  },
  componentWillMount:function(){
    
  },
  componentWillReceiveProps:function(){
    
  },
  setFilter:function(e){
    this.setState({filter: e.target.value});
  },
  showFilter:function(){
    alert(this.state.filter);
  },
  getAllMessage:function(){
    var me = this;
    $.ajax({
      url: '/admin/get_all_message',
      type: 'get',
      dataType: 'json',
      data: '',
      success:function(data){
       me.setState({tableMessage: data.allMessage});
      },
      error:function(msg){
        console.log(msg);
      },
    });
  },
});

ReactDOM.render(<MyTable></MyTable>, document.getElementById('container'));