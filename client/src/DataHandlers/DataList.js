import React from "react"
import Axios from "axios"
import Card from "./Card"
import useLocalStorage from "../Hooks/LocalStorage"


class  DataList extends React.Component{
constructor(){
    super()
    this.state={
    data:[]
    }    
}



componentDidMount(){
Axios.get(`http://localhost:5000/api/players`).then(res=>{

console.log(res.data);
this.setState({
    data:res.data
    
})
useLocalStorage("data",this.state.data)

}).catch(err=>{console.log(err);
})

}

render(){return(<div className="card-Holder">

 {this.state.data.map(ele=>(
     <Card  person={ele}/>
 ))}

</div>)}


}
export default DataList