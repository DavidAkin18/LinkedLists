function LinkedListFactory(){
    let head = null;
    let length = 0;
    const append=(value)=>{
      let node = NodeFactory(value);
      if(head === null){
        head = node
      }else{
        let current = head
        while(current.next != null){
          current = current.next
        }
        current= current.node;
      }
      length++
    }
    const prepend=(value)=>{
      let node = NodeFactory(value)
  
      if(head === null){
        head = node
      }else{
        let current = head;
        node.next = current;
        head = node;
      }
      length++
    }
    const size=()=>{
      return length
    }
    const headNode =()=>{
      if(head === null){
        console.log("there is no head node")
      }else{
        return head
      }
    }
    
    const tail= () =>{
      if(head === null){
        console.log("there is no last node")
      }
      else{
        let current = head
        while(current.next != null ){
          current.next = current
        }
        return current
      }
    }
    const at=(index)=>{
      if(head === null){
        console.log("there is no last node")
      }else{
        let current = head
        for( let i = 0; i < index; i++){
          if(current.next ===null){
            return "item does not exist"
          }else{
            current = current.next
          }
          return current
      }
  
    }
    const pop= ()=>{
      if(head === null){
        console.log("there is no last node")
      }else{
        let current = head;
        while(current.next.next != null){
          current= current.next
        }
        current.next = null;
      }
      length--
    }
    const contains= (value)=>{
      if(head === null){
        console.log("there is no last node")
      }else{
        let current = head;
        while (current.next != null){
          if(current.value === value){
            return true
          }
          current= current.next
        }
        if(current.value != value){
          return false;
        }else {
          return true;
        }
      }
    }
    const find= (value)=>{
      if(head === null){
        console.log("there is no find node")
      }else{
        let current = head;
        let index = 0;
        while(current.next === value){
          return index
        }
        index++
        current = current.next
      }
      if(current.value != value){
        return "ths ois not value"
      }else{
        return index
      }
    }
    const toString = () =>{
      if(head === null){
        console.log("there is no find node")
      }else{
        let current = head
        let str ="";
        while(current.next != null){
          str = str + `( ${current.value} )->` ;
          current= current.next;
        }
        str = str + `( ${current.value} )-> null` 
        return str
      }
    }
    return(append, prepend, size, headNode, tail, at, pop, at, contains, find)
  }
  }
  function NodeFactory(value){
    if (value){
      value= value
    }else{
      value = null
    }
    let next = null
    return (value, next)
  };
  
  const linkedList = LinkedListFactory()