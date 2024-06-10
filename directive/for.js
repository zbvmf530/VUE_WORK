const template = /*html*/ `
<table class="table table-dark table-hover">
    <thead>
        <tr>
            <th>순번</th>
            <th>제품명</th>
            <th>가격</th>
        </tr>
    </thead>
    <tbody>
        <tr :key="idx" v-for="(item,idx) in prod">
        <td v-text="idx"></td>
        <td v-text="item.prodNm"></td>
        <td v-text="item.price"></td>
        </tr>
    </tbody>
</table>
`;

export default {
    template,
    data(){
        return {
            prod : [
                    {prodNm : '키보드', price: 4000},
                    {prodNm : '마우스', price: 34000},
                    {prodNm : '스피커', price: 14000},
                ]
        };
    },
    methods:{},
    
}