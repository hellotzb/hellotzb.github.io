(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0e128132"],{"149a":function(e,t,a){},"1f2f":function(e,t,a){"use strict";a("278a")},"278a":function(e,t,a){},4886:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.categories?a("div",{staticClass:"category"},[a("HomeNav",{attrs:{titles:e.titles,gender:e.gender},on:{"navigate-to":e.navigate}}),a("div",{staticClass:"main"},[a("van-sidebar",{model:{value:e.activeKey,callback:function(t){e.activeKey=t},expression:"activeKey"}},e._l(e.cates,(function(e,t){return a("van-sidebar-item",{key:t,attrs:{title:e.name}})})),1),a("ul",{staticClass:"content"},[a("van-skeleton",{attrs:{title:"",avatar:"",row:3,loading:e.loading,"avatar-shape":"square"}},e._l(e.cateBooks,(function(e,t){return a("CateBookItem",{key:t,attrs:{book:e}})})),1)],1)],1)],1):e._e()},n=[],o=(a("99af"),a("c740"),a("b0c0"),a("5530")),s=a("2f62"),r=a("87c4"),c=a("f91b"),u={name:"Category",components:{HomeNav:r["a"],CateBookItem:c["a"]},data:function(){return{gender:"male",titles:[{id:0,name:"男生",gender:"male",path:"/home/?gender=male"},{id:1,name:"女生",gender:"female",path:"/home/?gender=female"}],activeKey:0,cateBooks:[],loading:!0}},computed:Object(o["a"])(Object(o["a"])({},Object(s["c"])(["categories","maleStorage","femaleStorage"])),{},{cates:function(){return"male"==this.gender?this.categories.male:this.categories.female}}),created:function(){var e=this;if(this.categories)return this.activeKey=this.cates.findIndex((function(t){return t.name==e.$route.query.name})),void this.changeCates();this.axios.get("/categories").then((function(t){e.$store.commit("updateCategories",t.data),e.activeKey=e.cates.findIndex((function(t){return t.name==e.$route.query.name})),e.changeCates()}))},watch:{"$route.query.gender":function(){this.activeKey=0,this.changeCates()},activeKey:function(){this.changeCates(),this.$route.query.name!=this.cates[this.activeKey].name&&(this.$route.query.gender?this.$router.push("/category?name=".concat(this.cates[this.activeKey].name,"&gender=").concat(this.$route.query.gender)):this.$router.push("/category?name=".concat(this.cates[this.activeKey].name)))}},beforeRouteEnter:function(e,t,a){a((function(t){t.gender=e.query.gender||"male",t.$emit("update:active",1),console.log("beforeRouteEnter")}))},beforeRouteUpdate:function(e,t,a){this.gender=e.query.gender||"male",this.loading=!0,console.log("beforeRouteUpdate"),a()},methods:{navigate:function(e){this.$route.query.name==this.cates[this.activeKey].name&&this.$route.query.gender==e||this.$router.push("/category?name=".concat(this.categories[e][0].name,"&gender=").concat(e))},changeCates:function(){var e=this;this.useStorage()?this.$nextTick((function(){e.loading=!1})):this.axios.get("/category-info?gender=".concat(this.gender,"&type=hot&major=").concat(this.cates[this.activeKey].name,"&minor=&start=0&limit=20")).then((function(t){e.saveStorage(t),t.data.books.length&&(e.loading=!1)}))},saveStorage:function(e){"male"==this.gender?this.maleStorage[this.cates[this.activeKey].name]||(this.$store.commit("updateMaleStorage",{id:this.cates[this.activeKey].name,obj:e.data.books}),this.cateBooks=e.data.books):this.femaleStorage[this.cates[this.activeKey].name]||(this.$store.commit("updateFemaleStorage",{id:this.cates[this.activeKey].name,obj:e.data.books}),this.cateBooks=e.data.books)},useStorage:function(){if("male"==this.gender){if(this.maleStorage[this.cates[this.activeKey].name])return this.cateBooks=this.maleStorage[this.cates[this.activeKey].name],!0}else if(this.femaleStorage[this.cates[this.activeKey].name])return this.cateBooks=this.femaleStorage[this.cates[this.activeKey].name],!0;return!1}}},h=u,d=(a("95da"),a("2877")),l=Object(d["a"])(h,i,n,!1,null,"68608542",null);t["default"]=l.exports},"95da":function(e,t,a){"use strict";a("149a")},"99af":function(e,t,a){"use strict";var i=a("23e7"),n=a("d039"),o=a("e8b5"),s=a("861d"),r=a("7b0b"),c=a("50c4"),u=a("8418"),h=a("65f0"),d=a("1dde"),l=a("b622"),f=a("2d00"),m=l("isConcatSpreadable"),g=9007199254740991,v="Maximum allowed index exceeded",y=f>=51||!n((function(){var e=[];return e[m]=!1,e.concat()[0]!==e})),b=d("concat"),p=function(e){if(!s(e))return!1;var t=e[m];return void 0!==t?!!t:o(e)},k=!y||!b;i({target:"Array",proto:!0,forced:k},{concat:function(e){var t,a,i,n,o,s=r(this),d=h(s,0),l=0;for(t=-1,i=arguments.length;t<i;t++)if(o=-1===t?s:arguments[t],p(o)){if(n=c(o.length),l+n>g)throw TypeError(v);for(a=0;a<n;a++,l++)a in o&&u(d,l,o[a])}else{if(l>=g)throw TypeError(v);u(d,l++,o)}return d.length=l,d}})},b0c0:function(e,t,a){var i=a("83ab"),n=a("9bf2").f,o=Function.prototype,s=o.toString,r=/^\s*function ([^ (]*)/,c="name";i&&!(c in o)&&n(o,c,{configurable:!0,get:function(){try{return s.call(this).match(r)[1]}catch(e){return""}}})},c740:function(e,t,a){"use strict";var i=a("23e7"),n=a("b727").findIndex,o=a("44d2"),s=a("ae40"),r="findIndex",c=!0,u=s(r);r in[]&&Array(1)[r]((function(){c=!1})),i({target:"Array",proto:!0,forced:c||!u},{findIndex:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),o(r)},f91b:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",{staticClass:"cate-book-item",on:{click:e.toDetail}},[a("div",{staticClass:"pic"},[a("van-image",{attrs:{"lazy-load":"",src:"http://statics.zhuishushenqi.com"+e.book.cover}})],1),a("div",{staticClass:"info"},[a("div",{staticClass:"name"},[e._v(e._s(e.book.title))]),a("div",{staticClass:"desc"},[e._v(e._s(e.book.shortIntro))]),a("div",{staticClass:"bottom"},[a("span",{staticClass:"author"},[e._v(e._s(e.book.author))]),a("span",{staticClass:"category"},[e._v(e._s(e.book.majorCate))])])])])},n=[],o={name:"CateBookItem",props:["book"],methods:{toDetail:function(){this.$router.push({name:"BookDetail",query:{id:this.book._id}})}}},s=o,r=(a("1f2f"),a("2877")),c=Object(r["a"])(s,i,n,!1,null,"51eda1ff",null);t["a"]=c.exports}}]);
//# sourceMappingURL=chunk-0e128132.913c0c7b.js.map