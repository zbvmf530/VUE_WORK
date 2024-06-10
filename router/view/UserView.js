
const template = /* html */`
    <div>
        <h1>User Page</h1>
       <div>props : {{ id }}</div>
       <div>param : {{ this.$route.params.id }}</div>
       <div>param : {{ this.$route.query.username }}</div>
       <RouterView/>
    </div>`


export default{
    template,
    props: {id: String}
    
}

