(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["admin"],{3530:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-row",{staticClass:"p-0 mx-0",attrs:{id:"admin"}},[a("b-col",{attrs:{cols:"12"}},[a("b-nav",{staticClass:" justify-content-center my-3",attrs:{pills:""}},[a("b-nav-item",{staticClass:"aa",attrs:{to:"/admin/waits",exact:"","exact-active-class":"active"}},[e._v("候位管理")]),a("b-nav-item",{staticClass:"aa",attrs:{to:"/admin/orders",exact:"","exact-active-class":"active"}},[e._v("訂單管理")]),a("b-nav-item",{staticClass:"aa",attrs:{to:"/admin/products",exact:"","exact-active-class":"active"}},[e._v("商品管理")]),a("b-nav-item",{staticClass:"aa",attrs:{to:"/admin/news",exact:"","exact-active-class":"active"}},[e._v("公告管理")])],1)],1),a("b-col",{attrs:{cols:"12"}},[a("hr",{staticClass:"border-danger"}),a("router-view")],1)],1)},n=[],s=a("2877"),i={},o=Object(s["a"])(i,r,n,!1,null,null,null);t["default"]=o.exports},a434:function(e,t,a){"use strict";var r=a("23e7"),n=a("da84"),s=a("23cb"),i=a("5926"),o=a("07fa"),c=a("7b0b"),l=a("65f0"),u=a("8418"),d=a("1dde"),m=d("splice"),f=n.TypeError,b=Math.max,p=Math.min,v=9007199254740991,h="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!m},{splice:function(e,t){var a,r,n,d,m,k,w=c(this),x=o(w),g=s(e,x),_=arguments.length;if(0===_?a=r=0:1===_?(a=0,r=x-g):(a=_-2,r=p(b(i(t),0),x-g)),x+a-r>v)throw f(h);for(n=l(w,r),d=0;d<r;d++)m=g+d,m in w&&u(n,d,w[m]);if(n.length=r,a<r){for(d=g;d<x-r;d++)m=d+r,k=d+a,m in w?w[k]=w[m]:delete w[k];for(d=x;d>x-r+a;d--)delete w[d-1]}else if(a>r)for(d=x-r;d>g;d--)m=d+r-1,k=d+a-1,m in w?w[k]=w[m]:delete w[k];for(d=0;d<a;d++)w[d+g]=arguments[d+2];return w.length=x-r+a,n}})},aa93:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-container",{staticClass:"mt-5"},[a("div",{staticClass:"text-center"},[a("button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-product",modifiers:{"modal-product":!0}}],staticClass:"btn-green border-0 my-3"},[e._v("新增")])]),a("div",{staticClass:"card p-5 shadow"},[a("b-table",{ref:"table",attrs:{items:e.products,fields:e.fields,stacked:"md"},scopedSlots:e._u([{key:"cell(image)",fn:function(t){return[t.item.image?a("img",{staticStyle:{height:"80px"},attrs:{src:t.item.image}}):e._e()]}},{key:"cell(sell)",fn:function(t){return[e._v(" "+e._s(t.item.sell?"✔":"")+" ")]}},{key:"cell(action)",fn:function(t){return[a("button",{staticClass:"border-0 my-5",attrs:{variant:"success"},on:{click:function(a){return e.editProduct(t.index)}}},[e._v("📝")])]}}])}),a("b-modal",{attrs:{id:"modal-product",title:e.form._id.length>0?"編輯商品":"新增商品",centered:"","ok-variant":"success","ok-title":"送出","cancel-variant":"danger","cancel-title":"取消","ok-disabled":e.modalSubmitting,"cancel-disabled":e.modalSubmitting},on:{ok:e.submitModal,hidden:e.resetForm}},[a("b-form-group",{attrs:{label:"商品名稱","label-for":"input-name",description:"必填欄位","invalid-feedback":"商品名稱必填",state:e.state.name}},[a("b-form-input",{attrs:{id:"input-name",type:"text",required:"",placeholder:"請輸入商品名稱",state:e.state.name},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("b-form-group",{attrs:{label:"商品價格","label-for":"input-price",description:"必填欄位","invalid-feedback":"價格必須是 0 元以上",state:e.state.price}},[a("b-form-input",{attrs:{id:"input-price",type:"number",min:"0",required:"",placeholder:"請輸入商品價格",state:e.state.price},model:{value:e.form.price,callback:function(t){e.$set(e.form,"price",e._n(t))},expression:"form.price"}})],1),a("b-form-group",{attrs:{label:"商品說明","label-for":"input-description",description:"必填欄位","invalid-feedback":"說明必填",state:e.state.description}},[a("b-form-input",{attrs:{id:"input-description",required:"",rows:"3","max-rows":"6",placeholder:"請輸入商品說明"},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1),a("b-form-group",{attrs:{label:"上架"}},[a("b-form-radio",{attrs:{value:!0},model:{value:e.form.sell,callback:function(t){e.$set(e.form,"sell",t)},expression:"form.sell"}},[e._v("上架")]),a("b-form-radio",{attrs:{value:!1},model:{value:e.form.sell,callback:function(t){e.$set(e.form,"sell",t)},expression:"form.sell"}},[e._v("下架")])],1),a("img-inputer",{attrs:{accept:"image/*",theme:"light",size:"large","bottom-text":"點選或拖拽圖片以修改","hover-text":"點選或拖拽圖片以修改",placeholder:"點選或拖拽選擇圖片","max-size":3072,"exceed-size-text":"檔案大小不能超過"},model:{value:e.form.image,callback:function(t){e.$set(e.form,"image",t)},expression:"form.image"}})],1)],1)])},n=[],s=a("5530"),i=a("1da1"),o=(a("96cf"),a("b0c0"),{data:function(){return{fields:[{key:"image",label:"圖片"},{key:"name",label:"名稱"},{key:"price",label:"價格"},{key:"description",label:"說明"},{key:"sell",label:"上架"},{key:"action",label:"操作"}],products:[],modalSubmitting:!1,form:{name:"",price:null,description:"",image:null,sell:!1,_id:"",index:-1}}},computed:{state:function(){return{name:0!==this.form.name.length||null,price:null===this.form.price?null:this.form.price>=0}}},methods:{submitModal:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var r,n,i,o,c,l;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(e.preventDefault(),t.state.name&&t.state.price){a.next=4;break}return t.$swal({icon:"error",title:"錯誤",text:"缺少必填欄位"}),a.abrupt("return");case 4:for(n in t.modalSubmitting=!0,r=new FormData,t.form)"_id"!==n&&r.append(n,t.form[n]);if(a.prev=7,0!==t.form._id.length){a.next=16;break}return a.next=11,t.api.post("/products",r,{headers:{authorization:"Bearer "+t.user.token}});case 11:i=a.sent,o=i.data,t.products.push(o.result),a.next=22;break;case 16:return a.next=18,t.api.patch("/products/"+t.form._id,r,{headers:{authorization:"Bearer "+t.user.token}});case 18:c=a.sent,l=c.data,t.products[t.form.index]=Object(s["a"])(Object(s["a"])({},t.form),{},{image:l.result.image}),t.$refs.table.refresh();case 22:t.$bvModal.hide("modal-product"),a.next=28;break;case 25:a.prev=25,a.t0=a["catch"](7),t.$swal({icon:"error",title:"錯誤",text:a.t0.response.data.message});case 28:t.modalSubmitting=!1;case 29:case"end":return a.stop()}}),a,null,[[7,25]])})))()},resetForm:function(e){this.modalSubmitting?e.preventDefault():this.form={name:"",price:0,description:"",image:null,sell:!1,_id:"",index:-1}},editProduct:function(e){this.form=Object(s["a"])(Object(s["a"])({},this.products[e]),{},{image:null,index:e}),this.$bvModal.show("modal-product")}},created:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.api.get("/products/all",{headers:{authorization:"Bearer "+e.user.token}});case 3:a=t.sent,r=a.data,e.products=r.result,t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),e.$swal({icon:"error",title:"錯誤",text:"取得商品失敗"});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()}}),c=o,l=a("2877"),u=Object(l["a"])(c,r,n,!1,null,null,null);t["default"]=u.exports},afb5:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-container",{staticClass:"mt-5"},[a("div",{staticClass:"text-center"},[a("button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-new",modifiers:{"modal-new":!0}}],staticClass:"btn-green border-0 my-3",on:{click:function(t){e.aa=!0}}},[e._v("新增")])]),a("div",{staticClass:"card bg-light p-5 shadow"},[a("b-table",{ref:"table",attrs:{items:e.news,fields:e.fields,stacked:"md"},scopedSlots:e._u([{key:"cell(news)",fn:function(t){return[e._v(" "+e._s(t.item.new)+" ")]}},{key:"cell(date)",fn:function(t){return[e._v(" "+e._s(new Date(t.item.date).toLocaleString("zh-tw"))+" ")]}},{key:"cell(action)",fn:function(t){return[a("button",{staticClass:"border-0",attrs:{variant:"success"},on:{click:function(a){return e.del(t.item._id,t.index)}}},[a("font-awesome-icon",{staticStyle:{color:"#1A4605"},attrs:{icon:["fas","trash"]}})],1),a("button",{staticClass:"border-0",attrs:{variant:"success"},on:{click:function(a){return e.edit(t.item._id,t.index)}}},[e._v(" 📝 ")])]}}])}),a("b-modal",{attrs:{id:"modal-new",title:"發佈消息",centered:"","ok-variant":"success","ok-title":"送出","cancel-variant":"danger","cancel-title":"取消","ok-disabled":e.modalSubmitting,"cancel-disabled":e.modalSubmitting},on:{ok:e.submitModal,hidden:e.resetForm}},[a("b-form-group",{attrs:{label:"消息公佈","label-for":"input-news",description:"必填欄位","invalid-feedback":"說明必填"}}),a("b-form-input",{attrs:{id:"input-news",required:"",rows:"3","max-rows":"6",placeholder:"請輸入內容",state:e.state.new},model:{value:e.form.new,callback:function(t){e.$set(e.form,"new",t)},expression:"form.new"}})],1)],1)])},n=[],s=a("5530"),i=a("1da1"),o=(a("a434"),a("96cf"),{data:function(){return{fields:[{key:"news",label:"最新消息"},{key:"date",label:"發佈時間"},{key:"action",label:"操作"}],news:[],form:{new:""},modalSubmitting:!1,aa:!0,bb:"",cc:""}},computed:{state:function(){return{new:0!==this.form.new.length||null}}},methods:{submitModal:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(e.preventDefault(),t.state.new){a.next=4;break}return t.$swal({icon:"error",title:"錯誤",text:"缺少必填欄位"}),a.abrupt("return");case 4:if(t.modalSubmitting=!0,a.prev=5,!0!==t.aa){a.next=14;break}return a.next=9,t.api.post("/news",t.form,{headers:{authorization:"Bearer "+t.user.token}});case 9:r=a.sent,n=r.data,t.news.push(n.result),a.next=18;break;case 14:return a.next=16,t.api.patch("/news/"+t.bb,t.form,{headers:{authorization:"Bearer "+t.user.token}});case 16:t.news[t.cc]=Object(s["a"])({},t.form),t.$refs.table.refresh();case 18:t.$bvModal.hide("modal-new"),a.next=24;break;case 21:a.prev=21,a.t0=a["catch"](5),t.$swal({icon:"error",title:"錯誤",text:a.t0.response.data.message});case 24:t.modalSubmitting=!1;case 25:case"end":return a.stop()}}),a,null,[[5,21]])})))()},edit:function(e,t){this.form=Object(s["a"])({},this.news[t]),this.$bvModal.show("modal-new"),this.aa=!1,this.bb=e,this.cc=t},resetForm:function(e){this.modalSubmitting?e.preventDefault():this.form={new:""}},del:function(e,t){var a=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,a.api.delete("/news/dels/"+e,{headers:{authorization:"Bearer "+a.user.token}});case 3:a.$swal.fire({icon:"success",title:"成功",text:"刪除成功"}),a.news.splice(t,1),a.$refs.table.refresh(),r.next=11;break;case 8:r.prev=8,r.t0=r["catch"](0),a.$swal({icon:"error",title:"錯誤",text:r.t0.response.data.message});case 11:case"end":return r.stop()}}),r,null,[[0,8]])})))()}},created:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.api.get("/news/all",{headers:{authorization:"Bearer "+e.user.token}});case 3:a=t.sent,r=a.data,e.news=r.result,t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),e.$swal({icon:"error",title:"錯誤",text:"取得商品失敗"});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()}}),c=o,l=a("2877"),u=Object(l["a"])(c,r,n,!1,null,null,null);t["default"]=u.exports},b0c0:function(e,t,a){var r=a("83ab"),n=a("5e77").EXISTS,s=a("e330"),i=a("9bf2").f,o=Function.prototype,c=s(o.toString),l=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,u=s(l.exec),d="name";r&&!n&&i(o,d,{configurable:!0,get:function(){try{return u(l,c(this))[1]}catch(e){return""}}})},c21f:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container",staticStyle:{"margin-top":"100px"}},[a("div",{staticClass:"card bg-light p-5 shadow"},[a("b-table",{ref:"table",attrs:{items:e.waits,fields:e.fields,stacked:"md"},scopedSlots:e._u([{key:"cell(index)",fn:function(t){return[e._v(" "+e._s(t.index+1)+" ")]}},{key:"cell(user)",fn:function(t){return[a("b-avatar",{staticClass:"mr-3",attrs:{src:t.item.user.avatar}}),e._v(" "+e._s(t.item.user.account)+" ")]}},{key:"cell(id)",fn:function(t){return[e._v(" "+e._s(t.item._id)+" ")]}},{key:"cell(number)",fn:function(t){return[e._v(" "+e._s(t.item.number)+" ")]}},{key:"cell(date)",fn:function(t){return[e._v(" "+e._s(new Date(t.item.date).toLocaleString("zh-tw"))+" ")]}},{key:"cell(state)",fn:function(t){return[a("button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-state",modifiers:{"modal-state":!0}}],staticClass:"ao-btn",on:{click:function(a){return e.check(t.item._id,t.index)}}},[e._v("確認")]),a("div",{staticClass:"d-flex mt-2"},[a("p",[e._v("已完成:")]),!0===t.item.state?a("div",[e._v("✔")]):e._e()])]}}])}),a("b-modal",{ref:"modal-state",attrs:{id:"modal-state",title:"操作",centered:"","ok-variant":"success","ok-title":"送出","cancel-variant":"danger","cancel-title":"取消"},on:{ok:e.submitModal}},[a("b-form-group",{attrs:{label:"上架"}},[a("b-form-radio",{attrs:{value:!0},model:{value:e.form.state,callback:function(t){e.$set(e.form,"state",t)},expression:"form.state"}},[e._v("已有空位")]),a("b-form-radio",{attrs:{value:!1},model:{value:e.form.state,callback:function(t){e.$set(e.form,"state",t)},expression:"form.state"}},[e._v("候位中")])],1)],1)],1)])},n=[],s=a("1da1"),i=(a("96cf"),{data:function(){return{waits:[],fields:[{key:"index",label:"號碼"},{key:"user",label:"預約者"},{key:"id",label:"預約ID"},{key:"number",label:"預約人數"},{key:"date",label:"預約時間"},{key:"state",label:"候位成功"}],form:{state:!1},aa:"",bb:""}},methods:{submitModal:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.preventDefault(),a.prev=1,a.next=4,t.api.patch("/waits/"+t.aa,t.form,{headers:{authorization:"Bearer "+t.user.token}});case 4:t.waits[t.bb].state=t.form.state,t.$refs.table.refresh(),t.$bvModal.hide("modal-state"),a.next=12;break;case 9:a.prev=9,a.t0=a["catch"](1),t.$swal({icon:"error",title:"錯誤",text:a.t0.response.data.message});case 12:case"end":return a.stop()}}),a,null,[[1,9]])})))()},check:function(e,t){this.aa=e,this.bb=t}},created:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.api.get("/waits/all",{headers:{authorization:"Bearer "+e.user.token}});case 3:a=t.sent,r=a.data,e.waits=r.result,t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),e.$swal({icon:"error",title:"錯誤",text:"取得名單失敗"});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()}}),o=i,c=a("2877"),l=Object(c["a"])(o,r,n,!1,null,null,null);t["default"]=l.exports},ec5c:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-container",{staticStyle:{"margin-top":"100px"}},[a("div",{staticClass:"card bg-light p-5 shadow"},[a("b-table",{ref:"table",attrs:{items:e.orders,fields:e.fields,stacked:"md"},scopedSlots:e._u([{key:"cell(_id)",fn:function(t){return[e._v(" "+e._s(t.index+1)+" ")]}},{key:"cell(user)",fn:function(t){return[e._v(" "+e._s(t.item.user.account)+" ")]}},{key:"cell(date)",fn:function(t){return[e._v(" "+e._s(new Date(t.item.date).toLocaleString("zh-tw"))+" ")]}},{key:"cell(products)",fn:function(t){return[a("ul",e._l(t.item.products,(function(t){return a("li",{key:t._id},[e._v(" "+e._s(t.product.name)+" x "+e._s(t.quantity)+" ")])})),0)]}},{key:"cell(state)",fn:function(t){return[a("button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-state",modifiers:{"modal-state":!0}}],staticClass:"ao-btn",on:{click:function(a){return e.check(t.item._id,t.index)}}},[e._v("確認")]),a("div",{staticClass:"d-flex mt-2"},[a("p",[e._v("已完成:")]),!0===t.item.state?a("div",[e._v("✔")]):e._e()])]}}])})],1),a("b-modal",{attrs:{id:"modal-state",title:"操作",centered:"","ok-variant":"success","ok-title":"送出","cancel-variant":"danger","cancel-title":"取消"},on:{ok:e.submitModal}},[a("b-form-group",{attrs:{label:"上架"}},[a("b-form-radio",{attrs:{value:!0},model:{value:e.form.state,callback:function(t){e.$set(e.form,"state",t)},expression:"form.state"}},[e._v("已完成")]),a("b-form-radio",{attrs:{value:!1},model:{value:e.form.state,callback:function(t){e.$set(e.form,"state",t)},expression:"form.state"}},[e._v("未完成")])],1)],1)],1)},n=[],s=a("1da1"),i=(a("96cf"),{data:function(){return{fields:[{key:"_id",label:"單號"},{key:"user",label:"使用者"},{key:"date",label:"日期"},{key:"products",label:"商品"},{key:"state",label:"完成"}],orders:[],form:{state:!1},aa:"",bb:""}},methods:{submitModal:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.preventDefault(),a.prev=1,a.next=4,t.api.patch("/orders/"+t.aa,t.form,{headers:{authorization:"Bearer "+t.user.token}});case 4:t.orders[t.bb].state=t.form.state,t.$refs.table.refresh(),t.$bvModal.hide("modal-state"),a.next=12;break;case 9:a.prev=9,a.t0=a["catch"](1),t.$swal({icon:"error",title:"錯誤",text:a.t0.response.data.message});case 12:case"end":return a.stop()}}),a,null,[[1,9]])})))()},check:function(e,t){this.aa=e,this.bb=t}},created:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.api.get("/orders/all",{headers:{authorization:"Bearer "+e.user.token}});case 3:a=t.sent,r=a.data,e.orders=r.result,t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),e.$swal({icon:"error",title:"失敗",text:"取得訂單失敗"});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()}}),o=i,c=a("2877"),l=Object(c["a"])(o,r,n,!1,null,null,null);t["default"]=l.exports}}]);
//# sourceMappingURL=admin.12547f27.js.map