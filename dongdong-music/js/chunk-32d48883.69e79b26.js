(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-32d48883"],{"6b01":function(t,s,n){"use strict";n.r(s);var i=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"artists"},[n("div",{staticClass:"pic",style:{backgroundImage:"url("+t.image+")"}}),n("ul",t._l(t.artistSongs,(function(s,i){return n("SongItem",{key:i,attrs:{song:s,index:i},on:{"list-update-playlist":t.updatePl}})})),1)])},a=[],e=(n("d81d"),n("cf7e")),o={name:"Artist",props:["image"],components:{SongItem:e["a"]},data:function(){return{artistSongs:[],desc:""}},activated:function(){var t=this;this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),this.axios.get("/artist/top/song?id=".concat(this.$route.query.id)).then((function(s){t.artistSongs=s.data.songs,t.$toast.clear()})).catch((function(){t.$toast.clear()}))},methods:{updatePl:function(){this.artistSongs=this.artistSongs.map((function(t){return t.song||(t.song={},t.song.artists=t.ar),t})),this.$store.commit("updatePlaylist",this.artistSongs)}}},c=o,r=(n("c37c"),n("2877")),u=Object(r["a"])(c,i,a,!1,null,"3d654bd2",null);s["default"]=u.exports},"6dc9":function(t,s,n){"use strict";n("b642")},8033:function(t,s,n){},b642:function(t,s,n){},c37c:function(t,s,n){"use strict";n("8033")},cf7e:function(t,s,n){"use strict";var i=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("li",{staticClass:"song-item"},[n("div",{staticClass:"rank"},[t.index<9?[t._v(" 0"+t._s(t.index+1)+" ")]:[t._v(" "+t._s(t.index+1)+" ")]],2),n("div",{staticClass:"right"},[n("div",{staticClass:"info"},[n("div",{staticClass:"name"},[t._v(t._s(t.song.name))]),n("div",{staticClass:"author"},t._l(t.song.ar?t.song.ar:t.song.artists,(function(s,i){return n("span",{key:i},[i?[t._v(" / ")]:t._e(),t._v(t._s(s.name)+" ")],2)})),0)]),n("div",{staticClass:"icon",on:{click:t.togglePlay}},[t.paused&&1==t.paused?[n("van-icon",{attrs:{name:"play-circle-o"}})]:t.currentmusic&&t.currentmusic.id===t.song.id?[n("van-icon",{attrs:{name:"pause-circle-o"}})]:[n("van-icon",{attrs:{name:"play-circle-o"}})]],2)])])},a=[],e=n("5530"),o=n("2f62"),c={name:"SongItem",props:["song","index"],computed:Object(e["a"])({},Object(o["b"])(["currentmusic","paused","playlist"])),methods:{togglePlay:function(){var t=this.song,s=this.index;if(!t.song){t.song={};var n=t.ar?t.ar:t.artists;t.song.artists=n}this.$store.commit("updateCurrentmusic",t),this.$store.commit("updateCurrentindex",s),this.$emit("list-update-playlist")}}},r=c,u=(n("6dc9"),n("2877")),l=Object(u["a"])(r,i,a,!1,null,"275b75b2",null);s["a"]=l.exports}}]);
//# sourceMappingURL=chunk-32d48883.69e79b26.js.map