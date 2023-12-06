
class ReactContainer extends React.Component{
    render(){
        return (
            <div>
                Hello! Welcome to Kalvium
                <div>Let's rock and roll, This is babel</div>
            </div>
        )
    }
}

// function ReactContainer(){
//     return (
//         <div>
//             Hello! Welcome to Kalvium
//             <div>Let's rock and roll, This is babel</div>
//         </div>
//     )
// }

let container = document.getElementById("react-container")
ReactDOM.render(<ReactContainer/>,container)