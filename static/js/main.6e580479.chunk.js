(this["webpackJsonppizza-store"]=this["webpackJsonppizza-store"]||[]).push([[0],{27:function(t,e,a){t.exports=a.p+"static/media/pizza-128.2bc25b1b.png"},29:function(t,e,a){t.exports=a(51)},34:function(t,e,a){},39:function(t,e,a){},41:function(t,e,a){},42:function(t,e,a){},44:function(t,e,a){},45:function(t,e,a){},46:function(t,e,a){},47:function(t,e,a){},48:function(t,e,a){},49:function(t,e,a){},50:function(t,e,a){},51:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),c=a(16),o=a.n(c),i=(a(34),a(27)),s=a.n(i),u=a(11),l=a(10);a(39);var m=function(){return r.a.createElement("nav",{className:"header__menu"},r.a.createElement("ul",{className:"list list-theme"},[{to:"/pizzas",name:"\u041f\u0438\u0446\u0446\u0430"},{to:"/salads",name:"\u0421\u0430\u043b\u0430\u0442\u044b"},{to:"/drinks",name:"\u041d\u0430\u043f\u0438\u0442\u043a\u0438"}].map((function(t){return r.a.createElement("li",{className:"list__item",key:t.name},r.a.createElement(u.b,{to:t.to,className:"list__link link link-theme",activeClassName:"link_active"},t.name))}))))},p=(a(41),Object(l.b)((function(t){return{cartLength:t.cart.cartProducts.length}}),null)((function(t){return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"header__row"},r.a.createElement("div",{className:"header__logo"},r.a.createElement("img",{className:"logo",src:s.a,alt:"logo"})),r.a.createElement(m,null),r.a.createElement("div",{className:"header__cart"},r.a.createElement(u.b,{to:"/cart"},r.a.createElement("button",{className:"cart__link link link-theme"},"\u041a\u041e\u0420\u0417\u0418\u041d\u0410 | ",t.cartLength))))))}))),d=(a(42),a(14)),h=a.n(d),f=a(6),g=a(18),v=a(8),E=a(9),b=a(20),j=a(19),P=(a(44),a(45),function(t){var e=t.product,a=e.imgUrl,n=e.name,c=e.description;return r.a.createElement("div",{className:"Info"},r.a.createElement("div",{className:"Info__img"},r.a.createElement("img",{className:"img",src:a,alt:n})),r.a.createElement("div",{className:"Info__description description"},r.a.createElement("h3",{className:"description__title"},n),r.a.createElement("div",{className:"description__content"},r.a.createElement("span",{className:"content"},c))))});a(46);var z=function(t){Object(b.a)(a,t);var e=Object(j.a)(a);function a(t){var n;return Object(v.a)(this,a),(n=e.call(this)).onAddProduct=function(){n.props.addProduct(n.props.product)},n.onDeleteProduct=function(){n.props.deleteProduct(n.props.product)},n.onChangeProductAmount=function(t){t.persist();var e=t.target.value,a=n.amountOfProduct(e);n.setState((function(t){return{product:Object(f.a)(Object(f.a)({},t.product),{amount:a})}}));var r={name:n.props.product.name,amount:a};n.props.changeProductAmount(r)},n.state={product:t.product},n}return Object(E.a)(a,[{key:"isCartButton",value:function(){return this.props.isCart?r.a.createElement("button",{type:"button",className:"button-item theme-button",onClick:this.onDeleteProduct},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"):r.a.createElement("button",{type:"button",className:"button-item theme-button",onClick:this.onAddProduct},"\u0412\u044b\u0431\u0440\u0430\u0442\u044c")}},{key:"amountOfProduct",value:function(t){return(t.match(/[1-9]/g)||[""]).join("")}},{key:"render",value:function(){return r.a.createElement("div",{className:"Select"},r.a.createElement("div",{className:"Select__cost"},r.a.createElement("span",{className:"cost"},!this.props.isCart&&"\u043e\u0442 ",this.props.product.price," \u0433\u0440\u043d.")),this.props.isCart&&r.a.createElement("div",{className:"Select__amount"},r.a.createElement("input",{className:"pizza-amount",type:"text",value:this.state.product.amount,onChange:this.onChangeProductAmount,maxLength:"2"})),r.a.createElement("div",{className:"Select__buttons"},this.isCartButton()))}}]),a}(r.a.Component),N={addProduct:function(t){return t.amount=1,{type:"CART/ADD_PRODUCT",payload:t}},deleteProduct:function(t){return{type:"CART/DELETE_PRODUCT",payload:t}},changeProductAmount:function(t){return{type:"CART/CHANGE_AMOUNT_PRODUCT",payload:t}}},_=Object(l.b)(null,N)(z),O=function(t){var e=t.product,a=e.name,n=e.imgUrl,c=e.description;return r.a.createElement("div",{className:"Product"},r.a.createElement(P,{product:{name:a,imgUrl:n,description:c}}),r.a.createElement(_,{isCart:t.isCart,product:t.product}))},y=function(){function t(){Object(v.a)(this,t),this.products=[{name:"pizzas",products:[{imgUrl:"https://chizpizza.com.ua/image/cache/catalog/478/4sira-478x478.jpg",name:"\u0427\u0435\u0442\u044b\u0440\u0435 \u0441\u044b\u0440\u04301",description:"\u0421\u044b\u0440\u043d\u044b\u0439 \u0441\u043e\u0443\u0441, \u0441\u044b\u0440 \u0434\u043e\u0440 \u0431\u043b\u044e, \u043c\u043e\u0446\u0430\u0440\u0435\u043b\u043b\u0430,\u0447\u0435\u0434\u0440, \u043f\u0430\u0440\u043c\u0435\u0437\u0430\u043d, \u0438\u0442\u0430\u043b\u044c\u044f\u043d\u0441\u043a\u0438\u0435 \u0442\u0440\u0430\u0432\u044b.",price:99},{imgUrl:"https://chizpizza.com.ua/image/cache/catalog/478/4sira-478x478.jpg",name:"\u0427\u0435\u0442\u044b\u0440\u0435 \u0441\u044b\u0440\u04302",description:"\u0421\u044b\u0440\u043d\u044b\u0439 \u0441\u043e\u0443\u0441, \u0441\u044b\u0440 \u0434\u043e\u0440 \u0431\u043b\u044e, \u043c\u043e\u0446\u0430\u0440\u0435\u043b\u043b\u0430,\u0447\u0435\u0434\u0440, \u043f\u0430\u0440\u043c\u0435\u0437\u0430\u043d, \u0438\u0442\u0430\u043b\u044c\u044f\u043d\u0441\u043a\u0438\u0435 \u0442\u0440\u0430\u0432\u044b.",price:99},{imgUrl:"https://chizpizza.com.ua/image/cache/catalog/478/4sira-478x478.jpg",name:"\u0427\u0435\u0442\u044b\u0440\u0435 \u0441\u044b\u0440\u04303",description:"\u0421\u044b\u0440\u043d\u044b\u0439 \u0441\u043e\u0443\u0441, \u0441\u044b\u0440 \u0434\u043e\u0440 \u0431\u043b\u044e, \u043c\u043e\u0446\u0430\u0440\u0435\u043b\u043b\u0430,\u0447\u0435\u0434\u0440, \u043f\u0430\u0440\u043c\u0435\u0437\u0430\u043d, \u0438\u0442\u0430\u043b\u044c\u044f\u043d\u0441\u043a\u0438\u0435 \u0442\u0440\u0430\u0432\u044b.",price:99},{imgUrl:"https://chizpizza.com.ua/image/cache/catalog/478/4sira-478x478.jpg",name:"\u0427\u0435\u0442\u044b\u0440\u0435 \u0441\u044b\u0440\u04304",description:"\u0421\u044b\u0440\u043d\u044b\u0439 \u0441\u043e\u0443\u0441, \u0441\u044b\u0440 \u0434\u043e\u0440 \u0431\u043b\u044e, \u043c\u043e\u0446\u0430\u0440\u0435\u043b\u043b\u0430,\u0447\u0435\u0434\u0440, \u043f\u0430\u0440\u043c\u0435\u0437\u0430\u043d, \u0438\u0442\u0430\u043b\u044c\u044f\u043d\u0441\u043a\u0438\u0435 \u0442\u0440\u0430\u0432\u044b.",price:99},{imgUrl:"https://chizpizza.com.ua/image/cache/catalog/478/4sira-478x478.jpg",name:"\u0427\u0435\u0442\u044b\u0440\u0435 \u0441\u044b\u0440\u04305",description:"\u0421\u044b\u0440\u043d\u044b\u0439 \u0441\u043e\u0443\u0441, \u0441\u044b\u0440 \u0434\u043e\u0440 \u0431\u043b\u044e, \u043c\u043e\u0446\u0430\u0440\u0435\u043b\u043b\u0430,\u0447\u0435\u0434\u0440, \u043f\u0430\u0440\u043c\u0435\u0437\u0430\u043d, \u0438\u0442\u0430\u043b\u044c\u044f\u043d\u0441\u043a\u0438\u0435 \u0442\u0440\u0430\u0432\u044b.",price:99},{imgUrl:"https://chizpizza.com.ua/image/cache/catalog/478/4sira-478x478.jpg",name:"\u0427\u0435\u0442\u044b\u0440\u0435 \u0441\u044b\u0440\u04306",description:"\u0421\u044b\u0440\u043d\u044b\u0439 \u0441\u043e\u0443\u0441, \u0441\u044b\u0440 \u0434\u043e\u0440 \u0431\u043b\u044e, \u043c\u043e\u0446\u0430\u0440\u0435\u043b\u043b\u0430,\u0447\u0435\u0434\u0440, \u043f\u0430\u0440\u043c\u0435\u0437\u0430\u043d, \u0438\u0442\u0430\u043b\u044c\u044f\u043d\u0441\u043a\u0438\u0435 \u0442\u0440\u0430\u0432\u044b.",price:99}]},{name:"salads",products:[{imgUrl:"https://chizpizza.com.ua/image/cache/catalog/478/4sira-478x478.jpg",name:"\u0427\u0435\u0442\u044b\u0440\u0435 \u0441\u044b\u0440\u04301",description:"\u0421\u044b\u0440\u043d\u044b\u0439 \u0441\u043e\u0443\u0441, \u0441\u044b\u0440 \u0434\u043e\u0440 \u0431\u043b\u044e, \u043c\u043e\u0446\u0430\u0440\u0435\u043b\u043b\u0430,\u0447\u0435\u0434\u0440, \u043f\u0430\u0440\u043c\u0435\u0437\u0430\u043d, \u0438\u0442\u0430\u043b\u044c\u044f\u043d\u0441\u043a\u0438\u0435 \u0442\u0440\u0430\u0432\u044b.",price:99},{imgUrl:"https://chizpizza.com.ua/image/cache/catalog/478/4sira-478x478.jpg",name:"\u0427\u0435\u0442\u044b\u0440\u0435 \u0441\u044b\u0440\u04302",description:"\u0421\u044b\u0440\u043d\u044b\u0439 \u0441\u043e\u0443\u0441, \u0441\u044b\u0440 \u0434\u043e\u0440 \u0431\u043b\u044e, \u043c\u043e\u0446\u0430\u0440\u0435\u043b\u043b\u0430,\u0447\u0435\u0434\u0440, \u043f\u0430\u0440\u043c\u0435\u0437\u0430\u043d, \u0438\u0442\u0430\u043b\u044c\u044f\u043d\u0441\u043a\u0438\u0435 \u0442\u0440\u0430\u0432\u044b.",price:99}]},{name:"drinks",products:[{imgUrl:"https://chizpizza.com.ua/image/cache/catalog/478/4sira-478x478.jpg",name:"\u0427\u0435\u0442\u044b\u0440\u0435 \u0441\u044b\u0440\u04301",description:"\u0421\u044b\u0440\u043d\u044b\u0439 \u0441\u043e\u0443\u0441, \u0441\u044b\u0440 \u0434\u043e\u0440 \u0431\u043b\u044e, \u043c\u043e\u0446\u0430\u0440\u0435\u043b\u043b\u0430,\u0447\u0435\u0434\u0440, \u043f\u0430\u0440\u043c\u0435\u0437\u0430\u043d, \u0438\u0442\u0430\u043b\u044c\u044f\u043d\u0441\u043a\u0438\u0435 \u0442\u0440\u0430\u0432\u044b.",price:99}]}]}return Object(E.a)(t,[{key:"getArrayProducts",value:function(t){var e=this.products.filter((function(e){return e.name===t}));return new Promise((function(t,a){return t(e[0].products)}))}}]),t}(),k=function(){function t(){Object(v.a)(this,t)}return Object(E.a)(t,[{key:"getArrayProducts",value:function(){var t=Object(g.a)(h.a.mark((function t(e){var a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://my-json-server.typicode.com/serejabogdan/mockjson",t.next=3,fetch("".concat("https://my-json-server.typicode.com/serejabogdan/mockjson").concat(e));case 3:return a=t.sent,t.abrupt("return",a.json());case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}]),t}(),C=function(){function t(){Object(v.a)(this,t)}return Object(E.a)(t,[{key:"create",value:function(e){return new(0,t.servicesList[e])}}]),t}();C.servicesList={test:y,fetch:k};a(47);var U=function(t){return r.a.createElement("div",{className:"Page"},r.a.createElement("div",{className:"Page__title"},r.a.createElement("h2",{className:"title"},t.title)),r.a.createElement("div",{className:"Page__content"},t.content),function(t){var e=t.isCart,a=t.totalPrice;return e&&r.a.createElement("div",{className:"total-price"},"\u041e\u0431\u0449\u0430\u044f \u0441\u0443\u043c\u043c\u0430 \u043a \u043e\u043f\u043b\u0430\u0442\u0435: ",a," \u0433\u0440\u043d.")}(t.cart))},A=(a(48),function(t){Object(b.a)(a,t);var e=Object(j.a)(a);function a(){var t;Object(v.a)(this,a),(t=e.call(this)).getProductnameFromUrl=function(){return t.props.location.pathname},t.isProductsLength=function(){return t.state.products.length>0&&t.state.products.map((function(t,e){return r.a.createElement(O,{product:t,key:e})}))},t.state={products:[]};var n=new C;return t.service=n.create("fetch"),t}return Object(E.a)(a,[{key:"componentDidMount",value:function(){this.getProducts()}},{key:"getProducts",value:function(){var t=Object(g.a)(h.a.mark((function t(){var e,a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.getProductnameFromUrl(),console.log(e),t.next=4,this.service.getArrayProducts(e);case 4:a=t.sent,this.setState((function(t){return Object(f.a)(Object(f.a)({},t),{},{products:a})}));case 6:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"productName",value:function(){var t=this.getProductnameFromUrl();return t={pizzas:"\u041f\u0438\u0446\u0446\u0430",salads:"\u0421\u0430\u043b\u0430\u0442\u044b",drinks:"\u041d\u0430\u043f\u0438\u0442\u043a\u0438"}[t],t}},{key:"render",value:function(){var t=this.productName(),e=this.isProductsLength();return r.a.createElement(U,{cart:{isCart:!1},title:t,content:e})}}]),a}(n.Component)),x=a(2),T=(a(49),Object(l.b)((function(t){return{cartProducts:t.cart.cartProducts}}),null)((function(t){var e=t.cartProducts,a=e.map((function(t){return r.a.createElement(O,{isCart:!0,product:t,key:t.name})})),n=function(t){return t.length?t.reduce((function(t,e){return t+e.price*e.amount}),0):t.length}(e);return r.a.createElement(U,{cart:{isCart:!0,totalPrice:n},title:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430",content:a})})));var D=function(t){var e=Object(x.g)();return console.log(e),r.a.createElement("main",{className:"Main"},r.a.createElement("div",{className:"container"},r.a.createElement(x.d,null,["/pizzas","/salads","/drinks"].map((function(t){return r.a.createElement(x.b,{key:t,path:t,component:A})})),r.a.createElement(x.b,{path:"/cart",component:T}),r.a.createElement(x.a,{to:"/pizzas"}))))},w=(a(50),function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("h1",{className:"footer__item"},"Footer"))});var R=function(){return r.a.createElement("div",{className:"wrapper"},r.a.createElement(p,null),r.a.createElement(D,null),r.a.createElement(w,null))},L=a(13),S={cartProducts:[]},M=Object(L.b)({cart:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CART/ADD_PRODUCT":var a=t.cartProducts.some((function(t){return t.name===e.payload.name}));return a?t:Object(f.a)(Object(f.a)({},t),{},{cartProducts:t.cartProducts.concat(e.payload)});case"CART/DELETE_PRODUCT":return Object(f.a)(Object(f.a)({},t),{},{cartProducts:t.cartProducts.filter((function(t){return t.name!==e.payload.name}))});case"CART/CHANGE_AMOUNT_PRODUCT":return Object(f.a)(Object(f.a)({},t),{},{cartProducts:t.cartProducts.map((function(t){return t.name===e.payload.name&&(t.amount=e.payload.amount),t}))});default:return t}}}),F=Object(L.c)(M),I=r.a.createElement(l.a,{store:F},r.a.createElement(u.a,null,r.a.createElement(r.a.StrictMode,null,r.a.createElement(R,null))));o.a.render(I,document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.6e580479.chunk.js.map