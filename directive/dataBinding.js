const template = /*html*/`
<div>{{htmlString}}</div>
<!-- v-text, v-html 태그 내용(body) 바인딩 -->
<div v-text="htmlString"></div>
<div v-html="htmlString"></div>

<!-- v-model 폼필드 바인딩 -->
<input type="text" class="form-control mb-3" v-model.trim.lazy="memInfo.valueModel">
<input type="number" class="form-control mb-3" v-model.number="memInfo.score">
<p v-text="memInfo.valueModel"></p>
<textarea v-model.lazy="memInfo.memo" class = "mb-3"></textarea><br/>
<select v-model="memInfo.city" class ="mb-3">
   <option value="02">서울</option> 
   <option value="21">부산</option> 
   <option value="064">제주</option> 
</select>

<div class="form-check">
<label class="form-check-label"><input type="checkbox" value="02" class="form-check-input" v-model="memInfo.mainYn">서울</label>
</div>

<div class="form-check">
<label class="form-check-label">
<input type="checkbox" value="21" class="form-check-input" v-model="memInfo.mainYn">부산
</label>
</div>

<div class="form-check mb-3">
<label class="form-check-label">
<input type="checkbox" value="064" class="form-check-input" v-model="memInfo.mainYn">제주
</label>
</div>

<div class="form-check">
<label class="form-check-label">
<input type="radio" value="02" class="form-check-input" v-model="memInfo.picked">서울</label>
</div>

<div class="form-check">
<label class="form-check-label">
<input type="radio" value="21" class="form-check-input" v-model="memInfo.picked">부산
</label>
</div>

<div class="form-check mb-3">
<label class="form-check-label">
<input type="radio" value="064" class="form-check-input" v-model="memInfo.picked">제주
</label>
</div>
<button class = "btn btn-primary" v-bind:disabled="memInfo.valueModel==''">등록</button><br/>

<!-- v-bind 태그 속성 바인딩 -->
<img class="img-thumbnail" v-bind:src="memInfo.profile">

<!-- 클래스 바인딩 -->
<div class="container mb-3" v-bind:class="{active : isActive, 'text-red' : hasError}">클래스바인딩</div>
<div class="container mb-3" v-bind:class="[activeClass,errorClass]">클래스 배열 바인딩</div>
<div class="container mb-3" v-bind:style="styledObject">인라인 클래스 바인딩</div>

<p class="mb-3">{{memInfo}}</p>
`


export default {
template,
data(){ 
    return { 
        htmlString : /*html*/`<p style="color: red;">This is a red String</p>`,
        memInfo : {
            valueModel :  '',
            score : 100,
            memo : '메모',
            city : "21",
            mainYn : ["02","21"],
            picked: "02",
            profile: "../vuecdn/profile.png"
        },
        isActive : true,
        hasError : false,
        activeClass : 'active',
        errorClass : 'text-red',
        styledObject : {color : 'red', fontSize : '13px'}
    } 
},
methods: {}
}