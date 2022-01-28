(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],[,,,,,,,,,,function(t){t.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},,,,,,,function(t,e,i){},function(t,e,i){},function(t,e,i){},,function(t,e,i){},function(t,e,i){"use strict";i.r(e);var r=i(8),a=i.n(r),n=(i(16),i(11)),s=i(3),l=i(4),o=i(6),d=i(5),c=i(1),m=i.n(c),h=(i(17),i(9)),u=(i(18),i(19),i(0)),b=function(t){var e=t.title,i=t.description,r=t.imgUrl,a=t.imdbUrl;return Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("div",{className:"card-image",children:Object(u.jsx)("figure",{className:"image is-4by3",children:Object(u.jsx)("img",{src:r,alt:"Film logo"})})}),Object(u.jsxs)("div",{className:"card-content",children:[Object(u.jsxs)("div",{className:"media",children:[Object(u.jsx)("div",{className:"media-left",children:Object(u.jsx)("figure",{className:"image is-48x48",children:Object(u.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(u.jsx)("div",{className:"media-content",children:Object(u.jsx)("p",{className:"title is-8",children:e})})]}),Object(u.jsxs)("div",{className:"content",children:[i,Object(u.jsx)("br",{}),Object(u.jsx)("a",{href:a,children:"IMDB"})]})]})]})},p=function(t){var e=t.movies;return Object(u.jsx)("div",{className:"movies",children:e.map((function(t){return Object(u.jsx)(b,Object(h.a)({},t),t.imdbId)}))})},j=i(2),g=(i(21),function(t){Object(o.a)(i,t);var e=Object(d.a)(i);function i(){var t;Object(s.a)(this,i);for(var r=arguments.length,a=new Array(r),n=0;n<r;n++)a[n]=arguments[n];return(t=e.call.apply(e,[this].concat(a))).state={inputTitle:"",inputDescription:"",inputImgUrl:"",inputImdbUrl:"",inputImdbId:"",hasTitleError:!1,hasImgUrlError:!1,hasImdbUrlError:!1,hasImdbIdError:!1},t.validateUrl=function(t){return/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&= +$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#? (?:[.!/\\\w]*))?)$/.test(t)},t.handleSubmit=function(t){t.preventDefault()},t.getErrorName=function(t){return"has".concat(t.slice(5),"Error")},t.handleChange=function(e){var i,r=e.target,a=r.name,n=r.value,s=(i={},Object(j.a)(i,a,n),Object(j.a)(i,t.getErrorName(a),!1),i);t.setState(s)},t.handleBlur=function(e){var i=e.target.name,r=Object(j.a)({},t.getErrorName(i),!!i);t.setState(r)},t.validateForm=function(){var e=t.state,i=e.inputTitle,r=e.inputImdbUrl,a=e.inputImgUrl,n=e.inputImdbId;return!!(i.trim()&&t.validateUrl(r)&&n.trim()&&t.validateUrl(a))||(t.setState({hasTitleError:!i.trim(),hasImdbUrlError:!t.validateUrl(r),hasImgUrlError:!t.validateUrl(a),hasImdbIdError:!n.trim()}),!1)},t.disabledButton=function(){var e=t.state,i=e.hasTitleError,r=e.hasImdbIdError,a=e.hasImdbUrlError,n=e.hasImgUrlError;return i||r||n||a},t.getNewFilm=function(){var e=t.state;return{title:e.inputTitle,description:e.inputDescription,imdbUrl:e.inputImdbUrl,imgUrl:e.inputImgUrl,imdbId:e.inputImdbId}},t.clearState=function(){t.setState({inputTitle:"",inputDescription:"",inputImdbUrl:"",inputImgUrl:"",inputImdbId:"",hasTitleError:!1,hasImgUrlError:!1,hasImdbUrlError:!1,hasImdbIdError:!1})},t.handleSubmitFilm=function(){t.validateForm()&&(t.props.onAdd(t.getNewFilm()),t.clearState())},t}return Object(l.a)(i,[{key:"render",value:function(){var t=this,e=this.state,i=e.inputTitle,r=e.inputDescription,a=e.inputImdbUrl,n=e.inputImgUrl,s=e.inputImdbId,l=e.hasTitleError,o=e.hasImdbIdError,d=e.hasImdbUrlError,c=e.hasImgUrlError;return Object(u.jsxs)("form",{onSubmit:this.handleSubmit,className:"box mt-5",children:[Object(u.jsx)("input",{type:"text",name:"inputTitle",value:i,placeholder:"title",className:"input is-rounded",onChange:this.handleChange,onBlur:function(e){return t.handleBlur(e)}}),l&&Object(u.jsx)("div",{className:"has-text-danger",children:"write a title"}),Object(u.jsx)("input",{type:"text",name:"inputDescription",value:r,placeholder:"description",className:"input is-rounded mt-3",onChange:this.handleChange,onBlur:function(e){return t.handleBlur(e)}}),Object(u.jsx)("input",{type:"text",name:"inputImgUrl",value:n,placeholder:"imgUrl",className:"input is-rounded mt-3",onChange:this.handleChange,onBlur:function(e){return t.handleBlur(e)}}),c&&Object(u.jsx)("div",{className:"has-text-danger",children:"write a imgUrl"}),Object(u.jsx)("input",{type:"text",name:"inputImdbUrl",value:a,placeholder:"imdbUrl",className:"input is-rounded mt-3",onChange:this.handleChange,onBlur:function(e){return t.handleBlur(e)}}),d&&Object(u.jsx)("div",{className:"has-text-danger",children:"write a imdbUrl"}),Object(u.jsx)("input",{type:"text",name:"inputImdbId",value:s,placeholder:"imdbId",className:"input is-rounded mt-3",onChange:this.handleChange,onBlur:function(e){return t.handleBlur(e)}}),o&&Object(u.jsx)("div",{className:"has-text-danger",children:"write a imdbId"}),Object(u.jsx)("button",{type:"button",className:"button is-dark mt-6",onClick:this.handleSubmitFilm,disabled:this.disabledButton(),children:"Submit"})]})}}]),i}(c.Component)),v=i(10),I=function(t){Object(o.a)(i,t);var e=Object(d.a)(i);function i(){var t;Object(s.a)(this,i);for(var r=arguments.length,a=new Array(r),l=0;l<r;l++)a[l]=arguments[l];return(t=e.call.apply(e,[this].concat(a))).state={movies:v},t.addMovie=function(e){t.setState((function(t){return{movies:[].concat(Object(n.a)(t.movies),[e])}}))},t}return Object(l.a)(i,[{key:"render",value:function(){var t=this.state.movies;return Object(u.jsxs)("div",{className:"page",children:[Object(u.jsx)("div",{className:"page-content",children:Object(u.jsx)(p,{movies:t})}),Object(u.jsx)("div",{className:"sidebar",children:Object(u.jsx)(g,{onAdd:this.addMovie})})]})}}]),i}(m.a.Component);a.a.render(Object(u.jsx)(I,{}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.fee600ac.chunk.js.map