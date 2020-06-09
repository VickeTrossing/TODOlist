    var firebaseConfig = {
        apiKey: "AIzaSyB4X6PJnCSfVdqX55VSHFjj-BdsF5Dp7tk",
        authDomain: "todolist-8ef9f.firebaseapp.com",
        databaseURL: "https://todolist-8ef9f.firebaseio.com",
        projectId: "todolist-8ef9f",
        storageBucket: "todolist-8ef9f.appspot.com",
        messagingSenderId: "104560995309",
        appId: "1:104560995309:web:5ca90d64988663fb2195e4"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


    function add_task(){
        input_box = document.getElementById("input_box")
        input_date = document.getElementById("input_date");

        if(input_box.value.length != 0 && input_date.value.length != 0){
            const key = firebase.database().ref().child("unfinished_task").push().key;
  

            const task = {
                title: input_box.value,
                date: input_date.value,
                key: key
            };

            const updates = {};
            updates["/unfinished_task/" + key] = task;
            firebase.database().ref().update(updates);
        }
    }


    const create_unfinished_task = () => {
        create_unfinished_task = document.getElementsByClassName("container")[0];
        create_unfinished_task.innerHTML = "";

        task_array = [];
        firebase.database().ref("unfinished_task").once('value', function(snapshot){
            snapshot.forEach(function(childSnapsoht){
                const childKey = childSnapshot.key;
                const childData = childSnapshop.val();
                task_array.push(Object.values(childData));
            });
            for(var i, i = 0; i < task_array.length; i++){
                task_date = task_array[i][0];
                task_key = task_array[i][1];
                task_title = task_array[i][2];

                task_container = document.createElement("div");
                task_container.setAttribute("class", "task_container");
                task_container.setAttribute("data-key", task_key);

                task_data = document.createElement('div');
                task_data.setAttribute('id', 'task_data');

                title = document.createElement('p');
                title.setAttribute('id', 'task_title');
                title.setAttribute('contenteditable', false);
                title.innerHTML = task_title;

                date = document.createElement('p');
                date.setAttribute('id', 'task_date');
                date.setAttribute('contenteditable', false);
                date.innerHTML = task_date;

                task_tool = document.createElement('div');
                task_tool.setAttribute('id', 'task_tool');

                task_done_button = document.createElement('button');
                task_done_button.setAttribute('id', 'task_done_button');
                task_done_button.setAttribute('onclick', "");



                create_unfinished_task.append(task_container);
            }
        });
    }


    const task_done = () => {
        console.log("task_done");
    }


    const task_edit = () => console.log("task_edit");


    const task_delete = () => {
        console.log("task_delete");
    }