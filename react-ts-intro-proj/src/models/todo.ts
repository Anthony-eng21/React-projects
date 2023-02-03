class Todo {
    id: string;
    text: string;
    //this allows us to make these fields available ad not null when we want to use this model for our props data
    constructor(todoText: string) {
        this.text = todoText;
        this.id = new Date().toISOString();
    }
}

export default Todo;