import { Buttonprops } from "../../../../types/componentsTypes";
function Button(props:Buttonprops){
    console.log("props",props.title)
    return(
       
        <button className=" bg-red-200 text-gray-800 px-2 py-1 mr-2 mb-2 rounded-full "> {props.title}</button>
    )
}
export default Button;