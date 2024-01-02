import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        
        
        this.state={ 
             
            userInfo:{
                name:"XUD",
                location:"default",
              
            }
        }
        console.log(this.state.userInfo.avatar_url);
    }
    async componentDidMount(){
        
        const data=await fetch("https://api.github.com/users/SwayamRana808")
        
        const json=await data.json();

       
        this.setState({
            userInfo:json,
        })
    }
    
    render(){
        const {count}=this.state;
        return (
            <div className="user-card flex gap-8 mb-[50px]">
            <img src={this.state.userInfo.avatar_url} style={{height:"50px"}} className="m-[10px]"/>
            <div className="rounded-lg "><h2>Name:{this.state.userInfo.name}  </h2>
            <h3>{this.state.userInfo.location}</h3>
            <h3>BIO:<i>{this.state.userInfo.bio}</i></h3>
            
            </div>
        </div>
      )
        
    }
}
export default UserClass;