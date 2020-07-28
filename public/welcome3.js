var styles = {backgroundcolor : 'cyan'};
var Welcome = React.createClass({
                  render : function () {
                    var myCity = this.props.city;
                    return  (
                      <div style={styles}>
                        <h1>Hell Yeah!! {myCity}</h1>  
                        <p>Hell Boy!!</p>
                      </div>
                    )
                  }
                  
                });

ReactDOM.render(
  <Welcome city="Delhi"/>,
  document.getElementById('app')
)