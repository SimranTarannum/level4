const todoList = () => { 
    l=[]
    let today = new Date().toLocaleDateString("en-CA");
    const add = (todoItem) => { 
        l.push(todoItem);
    };
    const markAsComplete = (index) => {
        l[index].completed = true;
    };
    const overdue = () => { 
        return l.filter((item) => item.duedate < today);
    };
    const due_Today = () => { 
        return l.filter((item) => item.dueDate == today);
    };
    const duelater = () => {
        return l.filter((item) => item.dueDate > today);
    };
    function toDisplaylist(list){
        return list
        .map(
            (item) =>
              `${item.completed ? `[x]` : `[ ]`} ${item.title} ${
                item.dueDate != today ? item.dueDate : " "
              }`
          )
          .join("\n");
      }
      return {
        l,
        add,
        markAsComplete,
        overdue,
        due_Today,
        duelater,
        toDisplaylist,
      };
};
module.exports = todoList;