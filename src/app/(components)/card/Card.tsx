import { CardPropType } from "../../../../types/componentsTypes"
import Tag from "../tag/Tag"

export default function Card(props:CardPropType) {
  return (
    <div className="bg-yellow-100 shadow-lg rounded-lg overflow-hidden">
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">{props.courseTitle}</h2>
        <p className="text-gray-600">{props.descripation}</p>
      </div>
      <Tag tagtext={props.tag}/>
   
     
    </div>
  )
}
