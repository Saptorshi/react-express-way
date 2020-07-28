var styles = {backgroundcolor : 'cyan'};
var Welcome = React.createClass({
                  render : function () {
                    return  (
                      <div style={styles}>
                        <h1>Hell Yeah!!</h1>  
                        <p>Hell Boy!!</p>
                      </div>
                    )
                  }
                  
                });

ReactDOM.render(
  <Welcome/>,
  document.getElementById('app')
)