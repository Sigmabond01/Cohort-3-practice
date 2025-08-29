//Create a React component that takes todos as an input and renders them
interface TodoType {
    title: string,
    description: string,
    done: boolean
}
//here, types are used to define objects
//to defines types to objects, you can use interfaces
interface TodoInput {
    todo: TodoType
}

{ /* this is how to use it in a react component
function Todo({ todo }: TodoInput) {
//here, the function Todo takes the interface as an input
  return <div>
    <h1>{todo.title}</h1>
    <h2>{todo.description}</h2>
    
  </div>
} 
*/}
