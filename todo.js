function Todo({todo,index,remove}){
  function handle(){
    console.log('Ping:',index);
    remove(index);
  }

  const closeImage = "close.png";

  return <div className="todo" onClick={handle}>{todo.text} <img src={closeImage} /></div>
}
