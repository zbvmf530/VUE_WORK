const template = /*html*/`

    <div>
    userId<input type="text" class="form-control mb-3" v-model="post.userId">
    title<input type="text" class="form-control mb-3" v-model="post.title">
    body<input type="text" class="form-control mb-3" v-model="post.body">
    <button class = "btn btn-primary" @click="createMember">등록</button><br/>
    </div>
    <table class="table table-dark table-hover">
        <thead>
            <tr>
                <th>userId</th>
                <th>id</th>
                <th>title</th>
                <th>body</th>
                <th>삭제</th>
            </tr>
        </thead>

        <tbody>
            <tr v-for="post in posts">
                <td v-text="post.userId"></td>
                <td v-text="post.id"></td>
                <td v-text="post.title"></td>
                <td v-text="post.body"></td>
                <td ><button class = "btn btn-primary" @click="deleteMember(post.id)">삭제</button></td>
            </tr>
        </tbody>
    </table>
`
const url = 'https://jsonplaceholder.typicode.com/posts';
export default{
    template,
    data(){ return { posts: [], post : {} } },
    created(){
        axios.get(url)
        .then(json=>{
            console.log(json);
            this.posts = json.data
        });
    },
    methods:{
        createMember(){
            
            //console.log(url + this.post.userId);
            axios.post(url,this.post)
            .then(json=>this.posts.push(json.data));
            this.post = {};
        },
        deleteMember(postId){
            console.log(postId);
            axios.delete(`${url}/${postId}`)
            .then(json=>{
                let result = this.posts.filter(post=>post.id != postId);
                this.posts = result;
            });
        }

    }
}