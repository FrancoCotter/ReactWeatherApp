var React = require('react');
var {Link} = require('react-router');
var Example =(props) => {
  return (
    <div>
        <h1 className="text-center">Examples</h1>
        <p className="text-center">Here are a few example locations to try out:</p>
        <ol>
          <li>
            <Link to="/?location=Philiadia">Philiadia,PA</Link>
          </li>
          <li>
            <Link to="/?location=NewYork">New York,New York</Link>
          </li>
        </ol>
    </div>
  );
}
module.exports = Example;
