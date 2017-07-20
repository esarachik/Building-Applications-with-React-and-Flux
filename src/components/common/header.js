"use strict";

var React = require('react');

var Header = React.createClass({
    render: function(){
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <a href="/" className="navbar-brand">
                        <img width="64px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0MBOsbUg8notL6ZKDpjmXXkbwTN-YLkwyDkMM4k5J_2M8OktB"/>
                    </a>
                    <ul className="nav navbar-nav">
                        <li><a href="/">Home</a></li>
                        <li><a href="/#authors">Authors</a></li>                         
                        <li><a href="/#about">About</a></li> 
                    </ul>
                </div>
            </nav>  
        );        
    }
});

module.exports = Header;