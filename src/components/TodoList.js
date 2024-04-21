import { useEffect, useState } from "react";
import Todoitem from "./Todoitem";



function TodoList({ data }) {
    console.log(data);

    const [newText, setNewText] = useState("");

    const [text, setText] = useState("");

    const [fromChild, setFromChild] = useState("");

    // const [tasks, setTasks] = useState([
    //     {
    //         id: 1,
    //         text: 'Doctor Appointment', 
    //         completed: false
    //     },
    //     {
    //         id: 2,
    //         text: 'Meeting at School',
    //         completed: false
    //     }
    // ]);

   


    const [tasks, setTasks] = useState({});
    useEffect(() => {
        setTasks(data);
    }, [data])

    const [newTask,setNewTask]=useState({});

    console.log(typeof tasks);
    console.log(tasks);

    console.log("data below");

    const url = 'http://localhost:8081/todospost';
    

    function addTask(text) {
        console.log(text);
        const newT = { id: tasks.length + 1, value: text, completed: false }
        
        setTasks([...tasks, newT]);
        setNewTask(newT)
        console.log(tasks);

        const   options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Specify JSON content type
            },
            body: JSON.stringify(newT), // Convert data to JSON string
        };

        fetch(url, options)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json(); // Parse response JSON
            })
            .then(data => {
                console.log('Success:', data); // Handle success response
            })
            .catch(error => {
                console.error('Error:', error); // Handle errors
            });


    }

    function sendValueToParent(value) {
        console.log("executed   " + value);
        setFromChild(value);
        setTasks(prevTasks => prevTasks.filter(t => t.id != value));

        const urldel = `http://localhost:8081/todosdel/${value}`;

const options = {
    method: 'DELETE', // Specify the DELETE method
    headers: {
        'Content-Type': 'application/json', // Specify JSON content type if required
    },
    // If your endpoint requires a body, you can include data here
    // body: JSON.stringify({ id: idToDelete }),
};

fetch(urldel, options) // Append the ID to the URL
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Parse response JSON if required
    })
    .then(data => {
        console.log('Success:', data); // Handle success response if required
    })
    .catch(error => {
        console.error('Error:', error); // Handle errors
    });



    }


    return (
        <div>
            <div>

                <h1>Hello   web application nice to meet you.......</h1>
                <input value={text} onChange={e => setText(e.target.value)} />

                <button onClick={() => addTask(text)}>Add Task</button>
            </div>

            <div>
                {console.log(tasks)}
                <>
                    {Object.values(tasks).map(e => {
                        return (
                            <div key={e.id}>
                                {console.log("helloooooooooooo")}
                                <Todoitem tasks={e} onDelete={(value) => sendValueToParent(value)} />
                            </div>
                        )
                    })}
                </>

            </div>

        </div>
    )

}

export default TodoList;
