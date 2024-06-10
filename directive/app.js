import heading from './header.js';
import footers from './footer.js';
import router from './router.js';
// import dataBinding from './dataBinding.js';
// import fors from './for.js';
// import ifs from './if.js'
// import events from './event.js'


const {createApp} = Vue;
/* <dataBinding/> <fors/> <ifs/> <events/> */
const template = /*html*/ `
                            <heading/>

                                <RouterView />

                            <footers/>
                                </div>
`
// vue 인스턴스 생성
const component = {
    components:{heading,footers},
    template
}

createApp(component)
.use(router)
.mount('#app')