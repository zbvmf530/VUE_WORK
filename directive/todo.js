const template = /*html*/`

<div class="mb-3">
    userId<input type="text" class="form-control mb-3" v-model="todo.userId">
    title<input type="text" class="form-control mb-3" v-model="todo.title">
</div>
    <div class="form-check">
<label class="form-check-label">completed<input type="checkbox"  class="form-check-input" v-model="todo.completed"></label>
</div>
    <button class = "btn btn-primary" @click="createTodo">등록</button><br/>
<table class="table table-dark table-hover">
        <thead>
            <tr>
                <th>userid</th>
                <th>id</th>
                <th>title</th>
                <th>completed</th>
                <th>삭제</th>
            </tr>
        </thead>

        <tbody>
            <tr :key = "idx" v-for="(todo,idx) in todos" @dblclick="showUpdateRowForm(idx)">
                <td v-show="!updateRow[idx]" v-text="todo.userId"></td>
                <td v-show="!updateRow[idx]" v-text="todo.id"></td>
                <td v-show="!updateRow[idx]" v-text="todo.title"></td>
                <td v-show="!updateRow[idx]"><input type = "checkbox" class="form-check-input" v-model="todo.completed" :disabled="!updateRow[idx]"></td>
                <td v-show="!updateRow[idx]"><button class = "btn btn-primary" @click="deleteTodo(todo.id)">삭제</button></td>
                
                <td v-show="updateRow[idx]"><input v-model="todo.userId"></td>
                <td v-show="updateRow[idx]"><input :value="todo.id" readonly></td>
                <td v-show="updateRow[idx]"><input v-model="todo.title"></td>
                <td v-show="updateRow[idx]"><input type = "checkbox" class="form-check-input" v-model="todo.completed"></td>
                <td v-show="updateRow[idx]"><button class = "btn btn-primary" @click="updateTodo(todo,idx)">수정</button></td>
            </tr>
        </tbody>
    </table>
`
const baseUrl = 'https://jsonplaceholder.typicode.com/todos/';
export default {
    template,
    data(){ return {
        todos: [],
        todo:{},
        updateRow : []
    } },
    created(){
        axios.get(baseUrl)
        .then(json => {
            this.todos = json.data;
            this.todos.forEach(() => this.updateRow.push(false));
        })
    },
    methods:{
        createTodo(){
            axios.post(baseUrl,this.todo)
            .then(json=>this.todos.push(json.data));
        },
        deleteTodo(todoId){
            axios.delete(`${baseUrl}/${todoId}`)
            .then(json=>{
                let result = this.todos.filter(todo=>todo.id!=todoId);
                this.todos = result;
            })
        },
        showUpdateRowForm(rowIdx){
            console.log(rowIdx);
            this.updateRow[rowIdx] = !this.updateRow[rowIdx];
        },
        updateTodo(todoObj,rowIdx){
            axios.put(`${baseUrl}/${todoObj.id}`, todoObj)
            .then(json => {
                this.todos[rowIdx] = todoObj;
                this.updateRow[rowIdx] = !this.updateRow[rowIdx];
                console.log(json);
            })
            //console.log(todoObj);
        }
    }
}