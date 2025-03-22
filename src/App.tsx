import { useState } from 'react'
import './App.css'
import TodoList from './Component/TodoList'
interface TodoType{
  task:string;
  id:number;
  isStatus:boolean;
}
function App() {
  const [id,setId] = useState<number>(0)
  const [todo,setTodo]=useState<TodoType[]>([])
  const[task,setTask]=useState<TodoType['task']>('')
  function handleTask(e:React.ChangeEvent<HTMLInputElement>){
    setTask(e.target.value)
  }
  function handleEdit(value:TodoType['task'],id:TodoType['id']){
   const newTodo= todo.map(el=>el.id==id?{...el,task:value}:el)
   setTodo(newTodo)
  }
  function handleStatus(id:TodoType["id"]){
    const newTodo=todo.map(el=>el.id==id?{...el,isStatus:!el.isStatus}:el)
    console.log(newTodo,'is after changing status')
    setTodo(newTodo)
  }
  function handleDelete(id:TodoType['id']){
    const newTodo=todo.filter(el=>el.id!=id)
    setTodo(newTodo)
  }
  function handleSubmit(e:React.FormEvent<HTMLFormElement>):void{
    e.preventDefault()
    setId(prev=>prev+1)
    const newTodo={task,isStatus:false,id}
    setTodo([...todo,newTodo])
    setTask("")

  }
  return (
    <div style={{border:'1px solid red',height:'100vh'}}>
      <div style={{margin:'auto',border:'1px solid',width:'50%',display:'flex',flexDirection:'column',height:'100%',justifyContent:'space-between'}}>
      <h1 style={{backgroundColor:'red',textAlign:'center'}}>Todo List</h1>
      {/* All list */}
      <div style={{flexGrow:1}}>
        {todo.map((el,i)=><TodoList key={i} el={el} handleStatus={handleStatus} handleDelete={handleDelete} handleEdit={handleEdit}/>)}
      </div>
      <form onSubmit={handleSubmit} style={{margin:'auto',width:'50%',border:'0px dotted',display:'flex',flexDirection:'column',gap:'0.5rem'}}>
        <input value={task} onChange={handleTask} type="text" placeholder='add task' style={{padding:"2% 0%",borderRadius:5,textAlign:'center'}} />
        <button disabled={task?false:true}  style={{padding:'5px 5%',borderRadius:5,backgroundColor:'red'}}>Add</button>
      </form>
      </div>
        
    </div>
  )
}

export default App
