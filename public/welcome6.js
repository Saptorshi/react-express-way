var styles = {backgroundcolor : 'cyan'};
var Welcome = React.createClass({
                getDefaultProps : function () {
                  return {
                    city : 'Mumbai'
                  }
                },
                // initial state
                getInitialState : function () {
                  return {
                    city : this.props.city
                  }
                },
                callMe : function(e) {
                  e.preventDefault();
                  var city = this.refs.city.value;
                  // set the state
                  this.setState({
                    city : city
                  })
                },
                render : function () {
                  // render state
                  var myCity = this.state.city;
                  var myState = this.props.state;
                  return  (
                    <div style={styles}>
                      <h1>Hell Yeah!! Welcome to {myCity}, State :: {myState}</h1>  
                      <p>Hell Boy!!</p>
                      <form onSubmit={this.callMe}>
                        <input type="text" ref="city" />
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