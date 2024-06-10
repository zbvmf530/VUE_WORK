const template = /*html*/`<nav class="navbar navbar-expand-lg bg-body-tertiary">
                            <div class="container-fluid">
                            <a class="navbar-brand" href="#">Navbar</a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                <RouterLink class="nav-link active" to="/for">for</RouterLink>
                                </li>
                                
                                <li class="nav-item">
                                <RouterLink class="nav-link active" to="/dataBinding">dataBinding</RouterLink>
                                </li>
                                <li class="nav-item">
                                <RouterLink class="nav-link active" to="/posts">posts</RouterLink>
                                </li>
                                <li class="nav-item">
                                <RouterLink class="nav-link active" to="/todos">todos</RouterLink>
                                </li>
                                </ul>
                                <form class="d-flex" role="search">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                                <button class="btn btn-outline-success" type="submit">Search</button>
                                </form>
                            </div>
                            </div>
                            </nav>`

export default {
    template,
    data(){ return {} },
    methods:{},
}