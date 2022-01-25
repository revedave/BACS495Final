import React, { Component }  from "react";

export class Footer extends Component{
    Myname = "David";
    render(){
        return <div><h2>My Footer {this.Myname}</h2></div>;
    }
}

export default Footer;