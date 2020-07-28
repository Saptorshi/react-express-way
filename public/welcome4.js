var styles = {backgroundcolor : 'cyan'};
var Welcome = React.createClass({
                  getDefaultProps : function () {
                    return {
                      city : 'Mumbai'
                    }
                  },
                  render : function () {
                    var myCity = this.props.city;
                    var myState = this.props.state;
                    return  (
                      <div style={styles}>
                        <h1>Hell Yeah!! Welcome to {myCity}, State :: {myState}</h1>  
                        <p>Hell Boy!!</p>
                      </div>
                    )
                  }
                  
                });

ReactDOM.render(
  <Welcome state="MAH"/>,
  document.getElementById('app')
)