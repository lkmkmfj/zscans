(window.webpackJsonp=window.webpackJsonp||[]).push([[47,9,11],{651:function(t,e,n){"use strict";n.r(e);var r=n(26),component=Object(r.a)({},(function(){var t=this._self._c;return t("client-only",[t("div",{attrs:{id:"pf-7382-1"}},[t("script2",[this._v('window.pubfuturetag = window.pubfuturetag || [];window.pubfuturetag.push({unit: "65af82fd31cb6d4dd7021d23",\n      id: "pf-7382-1"})')])],1)])}),[],!1,null,null,null);e.default=component.exports},658:function(t,e,n){"use strict";n.r(e);var r=n(26),component=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("client-only",[e("div",[e("div",{attrs:{id:"pf-7238-1"}},[e("script2",[t._v('window.pubfuturetag = window.pubfuturetag ||\n        [];window.pubfuturetag.push({unit: "65a49ab8b2051a41f914e06c", id:\n        "pf-7238-1"})')])],1),t._v(" "),e("h12",{staticClass:"h12container",attrs:{"data-pub":"1f8c236bbaae9300cb5c1f8d0719d553","data-adunit":"35373","data-type":"sticky","data-format":"stickybottom","data-init":"false"}}),t._v(" "),e("script2",{attrs:{async:"",src:"https://tags.h12-media.com/load2.js"}})],1)])}),[],!1,null,null,null);e.default=component.exports},715:function(t,e,n){t.exports={}},765:function(t,e,n){"use strict";n(715)},805:function(t,e,n){"use strict";n.r(e);var r=n(642),c=n(644),o=n(147),d=n(76),h=(n(22),n(1)),l=n(20),_=(n(71),n(25),n(27),n(8),n(10),n(12),n(4),n(13),n(9),n(14),n(3)),m=n(127);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(h.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var y={layout:"chapter",validate:function(t){var e=t.params.chapter;return/^\d+$/.test(e)},head:function(t){var e=t.$config,n=t.$route,title="Chapter ".concat(this.current_chapter.name,", ").concat(this.current_chapter.comic_name),desc="".concat(this.current_chapter.comic_name,", Chapter ").concat(this.current_chapter.name,"! Free, english and with high quality and data saving images.");return{title:title,titleTemplate:"%s • ".concat(e.seoTitle),link:[{hid:"canonical",rel:"canonical",href:e.frontendUrl+n.fullPath}],meta:[{hid:"description",key:"description",property:"description",name:"description",content:desc},{hid:"twitter:description",key:"twitter:description",property:"twitter:description",name:"twitter:description",content:desc},{hid:"og:description",key:"og:description",property:"og:description",name:"og:description",content:desc},{hid:"twitter:title",key:"twitter:title",property:"twitter:title",name:"twitter:title",content:title}]}},data:function(){return{mdi:{chevronRight:_.L}}},asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var n,r,c,o,d,h,l,_,m,f,v,y,w,C,R,O;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$cookies,r=t.$axios,c=t.store,o=t.params,d=o.comic,h=o.chapter,e.next=3,r.$get("/swordflake/comic/".concat(d,"/chapters/").concat(h));case 3:return l=e.sent,_=l.data,m=_.chapter,f=_.chapters,v=_.next,y=_.prev,w=_.featured,C=n.get("reading_direction"),R=n.get("container_width"),O=n.get("data_saving"),C&&c.commit("chapterReading/setReadingType",C),R&&c.commit("chapterReading/setContainerWidth",R),(null!=O||null!=O||O)&&c.commit("chapterReading/setDataSaving",O),c.commit("chapterReading/setSurroundingChapters",{next:v,prev:y}),c.commit("chapterReading/setChapterList",f),c.commit("chapterReading/setPageCount",m.good_quality.length),c.commit("chapterReading/setComicId",m.comic_id),c.commit("chapterReading/setBreadcrumb",m),c.commit("chapterReading/setChapterInformation",m),c.commit("chapterReading/setFeaturedComics",w),e.abrupt("return",{current_chapter:m,chapter_list:f,featured:w,comic_id:m.comic_id,nav:{next:v,prev:y}});case 24:case"end":return e.stop()}}),e)})))()},computed:v(v({},Object(m.b)({breadcrumb:"chapterReading/getBreadcrumb",reading_type:"chapterReading/getReadingType",container_width:"chapterReading/getContainerWidth",data_saving:"chapterReading/getDataSaving",information_section:"chapterReading/getChapterInformation"})),{},{calculated_container_width:function(){return 760*(+this.container_width/100)},selected_reading_type:function(){return"long"==this.reading_type?"SectionsReadingLong":"SectionsReadingPaginate"},data_saving_pages:function(){var t=this.data_saving,e=this.current_chapter;return t?e.good_quality:e.high_quality}}),methods:{pageIntersected:function(t){if("long"!==this.reading_type)return this.$store.commit("chapterReading/setCurrentPage",t+1);var e=t[0],n=+e.target.id;e.isIntersecting&&this.$store.commit("chapterReading/setCurrentPage",n)}}},w=(n(765),n(26)),component=Object(w.a)(y,(function(){var t=this,e=t._self._c;return e(c.a,{staticClass:"pa-0",style:"max-width:".concat("long"==t.reading_type?t.calculated_container_width+"px":"100vw"),attrs:{fluid:""}},["long"===t.reading_type?e("ads-first",{staticClass:"mt-4 zs-bg-4"}):t._e(),t._v(" "),e(d.a,{staticClass:"pt-sm-0 pb-1 mt-5 zs-bg-2 rounded"},[e(r.a,{staticClass:"pa-1 align-center justify-center d-md-none d-sm-flex text-truncate",attrs:{items:t.breadcrumb},scopedSlots:t._u([{key:"divider",fn:function(){return[e(o.a,[t._v(t._s(t.mdi.chevronRight))])]},proxy:!0},{key:"item",fn:function(n){var r=n.item;return[e("NuxtLink",{staticClass:"breadcrumb text-truncate",class:{disabled:r.disabled},style:r.truncate?"max-width:36%":"",attrs:{to:r.href,event:r.disabled?"":"click"},domProps:{textContent:t._s(r.text)}})]}}])}),t._v(" "),e("article",{staticClass:"sr-only"},[e("h1",[t._v(t._s(t.current_chapter.comic_name)+" Chapter "+t._s(t.current_chapter.name))]),t._v(" "),e("p",[t._v("Read the latest comic "),e("b",[t._v(t._s(t.current_chapter.comic_name))]),t._v(" "),e("b",[t._v("Chapter "+t._s(t.current_chapter.name))]),t._v(" at\n         Zero Scans.")]),t._v(" "),e("p",[e("b",[t._v("Comic")]),t._v(" "+t._s(t.current_chapter.comic_name)+" is always updated at Zero Scans. Don't forget to read the other\n         "),e("b",[t._v("manga updates")]),t._v(".\n       ")]),t._v(" "),e("p",[t._v("Big "),e("b",[t._v("archive of webtoons")]),t._v(" waiting for you!")]),t._v(" "),e("h2",[t._v("What is a Webtoon?")]),t._v(" "),e("p",[t._v("A webtoon is a type of digital comic that originated in South Korea and is read vertically by scrolling down\n         on a computer or smartphone.")]),t._v(" "),e("h2",[t._v("What is a Manga?")]),t._v(" "),e("p",[t._v("Manga is an umbrella term for a wide variety of comic books and graphic novels originally produced and\n         published in Japan.")]),t._v(" "),e("h2",[t._v("What is a Manhua?")]),t._v(" "),e("p",[t._v("Manhua (traditional Chinese: 漫畫; simplified Chinese: 漫画; pinyin: mànhuà) are Chinese-language comics produced\n         in China and Taiwan.")]),t._v(" "),e("h2",[t._v("What is a Manhwa?")]),t._v(" "),e("p",[t._v("Manhwa is the general Korean term for comics and print cartoons. Outside Korea, the term usually refers to\n         South Korean comics.")])]),t._v(" "),e(t.selected_reading_type,{tag:"component",attrs:{containerWidth:t.calculated_container_width,chapter:t.data_saving_pages},on:{intersected:t.pageIntersected}})],1),t._v(" "),"long"==t.reading_type?e("div",{staticClass:"px-4"},[e("SectionsReadingChapterInformation"),t._v(" "),e("ads-first",{staticClass:"my-4"}),t._v(" "),e("ads-first",{staticClass:"my-4"}),t._v(" "),e("ads-sticky")],1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AdsFirst:n(651).default,SectionsReadingChapterInformation:n(739).default,AdsSticky:n(658).default})}}]);