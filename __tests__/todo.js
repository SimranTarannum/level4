let todoList = require("../todo");
const { all,markAsComplete,add,overdue,due_Today,dueLater} = todolist();
describe("Todo List Test Suite", () => {
    beforeAll(() => {
    const today = new Date();
    const oneDay = 60*60*24*1000;
    [
        {
            title:"Buy Choclate",
            completed:false,
            dueDate:new Date(today.getTime() - 2 * oneDay).toLocaleDateString(
                "en-CA"
            ),
        },
        {
            title:"pay money",
            completed:false,
            dueDate:new Date().toLocaleDateString("en-CA"),
        },
        {
            title:"answers",
            completed:false,
            dueDate:new Date(today.getTime()+2*oneDay).toLocaleDateString(
                "en-CA"
            ),
        },
    ].forEach(add);
});
test("add a new todo", () => {
    expect(all.length).toEqual(3);

    add({
      title: "test",
      completed:false,
      dueDate:new Date().toLocaleDateString("en-CA"),
    });

    expect(all.length).toEqual(4);
  });

  test("todo as complete", () => {
    expect(all[0].completed).toEqual(false);
    markAsComplete(0);
    expect(all[0].completed).toEqual(true);
  });

  test("retrieve overdue items", () => {
    expect(overdue().length).toEqual(1);
  });

  test("retrieve due today items", () => {
    expect(due_Today().length).toEqual(2);
  });

  test("retrieve due later items", () => {
    expect(dueLater().length).toEqual(1);
  });
});