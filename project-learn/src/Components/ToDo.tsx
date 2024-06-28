import { useState } from "react";

interface Task {
    id: number;
    text: string,
    completed: boolean,
}

const ToDo = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [taskText, setTaskText] = useState<string>("");

    const handleAdd = () => {
        if(taskText.trim()) {
            setTasks([
                ...tasks,
                {id: Date.now(), text: taskText, completed: false}
            ])
            setTaskText("");
        }
    }

    const handleRemove = (id: number) => {
        setTasks(tasks.filter(task => task.id != id));
    }

    
    const handleCompleted = (id: number) => {
        setTasks(tasks.map(task => task.id == id ? { ...task, completed: true} : task));
    }

    return(
        <>
            <div style={{textAlign: "center"}}>
                <h3>To Do List TypeScript</h3>
                <input
                    value={taskText}
                    onChange={(e) => setTaskText(e.target.value)}
                    placeholder="Add a task..."
                />        
                <button
                    onClick={handleAdd}
                >Add</button>
                <div>
                    <ul>
                        {tasks.length > 0 && tasks.map((item, index) => 
                            <li key={index} style={{textDecoration: item.completed ? "line-through" : "none"}}>
                                {item.text}
                                <button onClick={() => handleRemove(item.id)}>remove</button>
                                <button onClick={() => handleCompleted(item.id) }>Completed</button>
                            </li>   
                        )}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default ToDo;