var styles = {backgroundcolor : 'cyan'};
var Welcome = React.createClass({
                  getDefaultProps : function () {
                    return {
                      city : 'Mumbai'
                    }
                  },
                  callMe : function(e) {
                    e.preventDefault();
                    var user = this.refs.user.value;
                    alert('I am HIT! Bachao ' + user)
                  },
                  render : function () {
                    var myCity = this.props.city;
                    var myState = this.props.state;
                    return  (
                      <div style={styles}>
                        <h1>Hell Yeah!! Welcome to {myCity}, State :: {myState}</h1>  
                        <p>Hell Boy!!</p>
                        <form onSubmit={this.callMe}>
                          <input type="text" ref="user" />
                          <button>Click Me!</button>
                        </form>
                      </div>
                    )
                  }
                  
                });

ReactDOM.render(
  <Welcome state="MAH"/>,
  document.getElementById('app')
)