import Part from "./Part.jsx";
const Content = ({parts}) => {
 return (
     parts.map((content, id) =>
         <Part key={id} name={content.name} exercises={content.exercises}/>
     )

 )
}
export default Content