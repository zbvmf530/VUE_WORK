const template = /*html*/`
<select class="form-select" v-model="selValue" @change="changeSelect" class ="mb-3">
   <option v-for="city in cities" v-bind:value="city.value" v-text="city.text"></option> 
</select>
<input class="form-control mb-3" @keyup.enter="doSomething" v-model="firstName" type="text">
<input class="form-control mb-3" @click.ctrl="doSomething" v-model="lastName" type="text">
<div v-text="'watch : '+fullName"></div>
<div v-text="'computed : ' + computedFullName"></div>
`;

export default {
    template,
    data(){ return { 
        selValue : '02',
        cities : [ 
            { value : '02', text : '서울' },  
            { value : '21', text : '부산' },  
            { value : '064', text : '제주' }  
        ],
        firstName : '길동',
        lastName : '홍',
        fullName: ''
     } },
    methods:{
        changeSelect(){
            let result  = this.cities.find(item => item.value == this.selValue);
            alert(result.text);
        },
        doSomething(){
            alert('엔터');
        }
    },
    watch : {
        firstName(){ this.fullName = this.firstName + ' ' + this.lastName},
        lastName(){this.fullName = this.firstName + ' ' + this.lastName}
    },
    computed:{
        computedFullName(){return this.firstName + ' ' + this.lastName}
    }
}