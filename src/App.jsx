import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
   state = {
      ad: '',
      email: '',
      password: '',
      hidden: false
   };

   delete = () => {
      this.setState({ ad: '' });
   }

   deleteEmail = () => {
      this.setState({ email: '' });
   }

   deletePassword = () => {
      this.setState({ password: '' });
   }

 // passwordShow =()=>{
   //    this.setState({hidden:true})
   // }

   passwordShow = () => {
      this.setState(ff => ({
         hidden: !ff.hidden
      }));
  
   }

  
   change = (e) => {
      const { name, value } = e.target;
      this.setState({ [name]: value })
      console.log(this.state);
   }

   render() {
      const { hidden } = this.state;

      return (
         <div className="cont">
            <label htmlFor="ad">
               Ad: <input type="text" name='ad' value={this.state.ad} id="ad" onChange={this.change} />
               <button className="bt" onClick={this.delete}>x</button>
            </label>

            <label htmlFor="email">
               Email: <input type="text" name='email' value={this.state.email} id="email" onChange={this.change} />
               <button className="btn" onClick={this.deleteEmail}>x</button>
            </label>

            <label htmlFor="password">
               password:
               <input
                  type={hidden ? "text" : "password"} name='password' value={this.state.password} id="password" onChange={this.change}
               />
               <button className="btnn" onClick={this.deletePassword}>x</button>
               <input
                  type="checkbox"
                  onChange={this.passwordShow}
               />
            </label>
         </div>
      )
   }
}





