var React = require('react');
var {Link,IndexLink} = require('react-router');
var Nav = React.createClass({
  render:function(){
    return (
      <div>
        <IndexLink to='/' activeClassName="active" activeStyle={{fontWeight:'bold',color:'#ccc',textDecoration:'underline'}} style={{textDecoration:'none',color:'pink'}}>Get Weather</IndexLink>
        <Link to='/about' activeClassName="active" activeStyle={{fontWeight:'bold',color:'#ccc',textDecoration:'underline'}} style={{textDecoration:'none',color:'pink'}}>About</Link>
        <Link to='/example' activeClassName="active" activeStyle={{fontWeight:'bold',color:'#ccc',textDecoration:'underline'}} style={{textDecoration:'none',color:'pink'}}>Example</Link>
      </div>
    );
  }
});
module.exports = Nav;
