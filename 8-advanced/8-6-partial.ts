{

    type ToDo = {
        title: string;
        description: string;
        label: string;
        priority: 'high' | 'low';
    }

    function updateTodo(todo: ToDo, fieldsToUpdate: Partial<ToDo>): ToDo {
        return { ...todo, ...fieldsToUpdate }
    }

    const todo: ToDo = {
        title: 'string',
        description: 'string',
        label: 'string',
        priority: 'low',
    }
    const updated = updateTodo(todo, { priority: 'low' });

}