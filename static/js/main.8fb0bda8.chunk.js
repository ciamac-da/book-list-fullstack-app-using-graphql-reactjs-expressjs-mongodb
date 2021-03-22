(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{78:function(e,t,n){},91:function(e,t,n){"use strict";n.r(t);var s,i,o,r,a=n(3),c=n(70),l=n.n(c),d=(n(78),n(24)),h=n(25),j=n(28),u=n(27),b=n(31),p=n(29),m=n(35),O=n(18),g=Object(O.b)(s||(s=Object(m.a)(["\n  {\n    books {\n      name\n      id\n    }\n  }\n"]))),x=Object(O.b)(i||(i=Object(m.a)(["\n  {\n    authors {\n      name\n      id\n    }\n  }\n"]))),k=Object(O.b)(o||(o=Object(m.a)(["\n  mutation($name: String!, $genre: String!, $authorId: ID!) {\n    addBook(name: $name, genre: $genre, authorId: $authorId) {\n      name\n      id\n    }\n  }\n"]))),v=Object(O.b)(r||(r=Object(m.a)(["\n  query($id: ID!) {\n    book(id: $id) {\n      id\n      name\n      genre\n      author {\n        id\n        name\n        age\n        books {\n          name\n          id\n        }\n      }\n    }\n  }\n"]))),f=n(4),y=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"displayBookDetails",value:function(){var e=this.props.data.book;return e?Object(f.jsxs)("div",{className:"details",children:[Object(f.jsx)("h2",{children:e.name}),Object(f.jsxs)("h2",{className:"authorName",children:["Author : ",e.author.name]}),Object(f.jsxs)("h3",{children:["Genre : ",e.genre]}),Object(f.jsx)("h3",{className:"allBooksText",children:"All Books by this author:"}),Object(f.jsx)("ul",{className:"other-books",children:e.author.books.map((function(e){return Object(f.jsx)("li",{children:e.name},e.id)}))})]}):Object(f.jsx)("div",{children:"No Book selected..."})}},{key:"render",value:function(){return console.log(this.props),Object(f.jsx)("div",{id:"book-details",children:this.displayBookDetails()})}}]),n}(a.Component),B=Object(p.graphql)(v,{options:function(e){return{variables:{id:e.bookId}}}})(y),N=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(d.a)(this,n),(s=t.call(this,e)).state={selected:null},s}return Object(h.a)(n,[{key:"displayBooks",value:function(){var e=this,t=this.props.data;return t.loading?Object(f.jsx)("div",{children:" Loading Books... "}):t.books.map((function(t){return Object(f.jsxs)("li",{onClick:function(n){e.setState({selected:t.id})},children:[" ",t.name," "]},t.id)}))}},{key:"render",value:function(){return console.log(this.props),Object(f.jsxs)("div",{className:"myList",children:[Object(f.jsxs)("ul",{id:"book-list",children:[" ",this.displayBooks(),Object(f.jsx)(B,{bookId:this.state.selected})]})," "]})}}]),n}(a.Component),A=Object(p.graphql)(g)(N),I=n(73),q=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(d.a)(this,n),(s=t.call(this,e)).state={name:"",genre:"",authorId:""},s}return Object(h.a)(n,[{key:"displayAuthors",value:function(){var e=this.props.getAuthorsQuery;return e.loading?Object(f.jsx)("option",{disabled:!0,children:"Loading Authors..."}):e.authors.map((function(e){return Object(f.jsx)("option",{value:e.id,children:e.name},e.id)}))}},{key:"submitForm",value:function(e){e.preventDefault(),this.props.addBookMutation({variables:{name:this.state.name,genre:this.state.genre,authorId:this.state.authorId},refetchQueries:[{query:g}]})}},{key:"render",value:function(){var e=this;return Object(f.jsxs)("form",{id:"add-books",onSubmit:this.submitForm.bind(this),children:[Object(f.jsxs)("div",{className:"field",children:[Object(f.jsx)("label",{children:" Book Name  "}),Object(f.jsx)("input",{required:!0,placeholder:"Enter a Book Name...",type:"text",onChange:function(t){return e.setState({name:t.target.value})}})]}),Object(f.jsxs)("div",{className:"field",children:[Object(f.jsx)("label",{children:" Genre  "}),Object(f.jsx)("input",{required:!0,placeholder:"Enter a Genre...",type:"text",onChange:function(t){return e.setState({genre:t.target.value})}})]}),Object(f.jsxs)("div",{className:"field",children:[Object(f.jsx)("label",{children:" Author "})," ",Object(f.jsxs)("select",{onChange:function(t){return e.setState({authorId:t.target.value})},children:[Object(f.jsx)("option",{children:" Select Author "})," ",this.displayAuthors()]})," ",Object(f.jsxs)("button",{children:["+ \xa0",Object(f.jsx)("img",{src:"https://img.icons8.com/ios-filled/25/000000/add-book.png"})]})]})]})}}]),n}(a.Component),C=Object(I.flowRight)(Object(p.graphql)(x,{name:"getAuthorsQuery"}),Object(p.graphql)(k,{name:"addBookMutation"}))(q),S=new b.ApolloClient({uri:"http://localhost:4000/graphql",cache:new b.InMemoryCache}),$=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(f.jsx)(b.ApolloProvider,{client:S,children:Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)("div",{className:"myH1",children:Object(f.jsxs)("h1",{children:[" Booklist Mern mini App using React",Object(f.jsx)("img",{src:"https://img.icons8.com/officel/27/000000/react.png"}),"\xa0 GraphQL",Object(f.jsx)("img",{src:"https://img.icons8.com/color/27/000000/graphql.png"}),"\xa0 Express",Object(f.jsx)("img",{src:"https://img.icons8.com/pastel-glyph/25/000000/express-shopping--v1.png"}),"\xa0 MongoDB",Object(f.jsx)("img",{src:"https://img.icons8.com/color/27/000000/mongodb.png"})]})}),Object(f.jsx)(A,{}),Object(f.jsx)(C,{})]})})}}]),n}(a.Component);l.a.render(Object(f.jsx)($,{}),document.getElementById("root"))}},[[91,1,2]]]);
//# sourceMappingURL=main.8fb0bda8.chunk.js.map