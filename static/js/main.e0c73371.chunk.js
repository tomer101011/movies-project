(this["webpackJsonpmovies-project"]=this["webpackJsonpmovies-project"]||[]).push([[0],{100:function(e,t,n){},107:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/noFavorites.1a979219.png"},108:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(1),o=n.n(s),c=n(43),r=n.n(c),i=(n(53),n(23)),l=n(11),d=n(12),u=n(14),j=n(13),h=n(19),m=n(8),b=(n(54),n(6)),v=(n(29),n(55),n(56),n(114)),f=n(109),p=n(110),x=n(111),O=n(9),g=n.n(O),A=n(115),w=n(112),I="https://movie-mojo-server.herokuapp.com";v.a.use([f.a,p.a,x.a]);var N=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).shuffle=function(e){for(var t,n,a=e.length;0!==a;)n=Math.floor(Math.random()*a),t=e[a-=1],e[a]=e[n],e[n]=t;return e},s.loadHomeSlider=function(){return 0!==s.state.posters.length?Object(a.jsx)(A.a,{slidesPerView:1,pagination:{clickable:!0},loop:!0,autoplay:{delay:4e3,disableOnInteraction:!1},effect:"fade",children:s.state.posters.map((function(e,t){return Object(a.jsxs)(w.a,{children:[Object(a.jsx)("img",{className:"home-swiper",alt:e.title,src:e.poster}),Object(a.jsx)("div",{className:"caption",children:Object(a.jsxs)("div",{className:"captioninside",children:[Object(a.jsx)("h2",{className:"title-style",children:e.title}),Object(a.jsx)("h2",{className:"plot-style",children:e.plot})]})})]},e.posterId)}))}):Object(a.jsx)("div",{})},s.state={posters:[]},s}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this,t="".concat(I,"/posters");g.a.get(t).then((function(t){var n=t.data;n=e.shuffle(n),e.setState({posters:n})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return this.loadHomeSlider()}}]),n}(s.Component),C=(n(74),n(75),n(113)),y="/moviemojo",B="/moviemojo/movie",S="/moviemojo/addmovie",k="/moviemojo/allmovies";v.a.use([C.a]);var W=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).showOthersPicture=function(){if(void 0!==(new b.a).get("userId"))return Object(a.jsx)(w.a,{children:Object(a.jsx)("a",{href:"#".concat(k),children:Object(a.jsx)("img",{onClick:function(){return s.addCookieSearch()},className:"others-style",alt:"show others",src:"data:image/png;base64,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"})})})},s.addCookieSearch=function(){(new b.a).set("show",s.props.orderSwiper,{path:"/",maxAge:72e5,httponly:!0,sameSite:!0})},s.addCookieMovieId=function(e){(new b.a).set("movieId",e,{path:"/",maxAge:72e5,httponly:!0,sameSite:!0})},s.showMovies=function(){if(0!==s.state.movies.length)return Object(a.jsxs)(A.a,{navigation:!0,loop:!0,breakpoints:{320:{slidesPerView:3,spaceBetween:5},480:{slidesPerView:3,spaceBetween:5},768:{slidesPerView:5,spaceBetween:8},1024:{slidesPerView:6,spaceBetween:8}},children:[s.state.movies.map((function(e,t){return Object(a.jsx)(w.a,{children:Object(a.jsxs)(h.b,{to:{pathname:B},children:[Object(a.jsx)("img",{onClick:function(){return s.addCookieMovieId(e.movieId)},className:"imgSwiper",style:{maxWidth:"90%",width:"80%"},alt:e.title,src:e.poster}),Object(a.jsx)("h3",{className:"hometitle",children:e.title})]})},e.movieId)})),s.showOthersPicture()]})},s.setTitle=function(){switch(s.props.orderSwiper){case"recent":return Object(a.jsx)("h2",{className:"panel",children:"Released recently"});case"favorites":if(0!==s.state.movies.length)return Object(a.jsx)("h2",{className:"panel",children:"Favorite movies"});break;default:return Object(a.jsx)("h2",{className:"panel",children:"Top rated"})}},s.state={movies:[]},s}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this,t="";switch(this.props.orderSwiper){case"recent":t="".concat(I,"/movies/recent/").concat(this.props.count);break;case"favorites":t="".concat(I,"/movies/favorites/").concat(this.props.count);break;default:t="".concat(I,"/movies/topRated/").concat(this.props.count)}var n=(new b.a).get("userId");g.a.post(t,{userId:n}).then((function(t){e.setState({movies:t.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[this.setTitle(),this.showMovies()]})}}]),n}(s.Component),E=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var s=arguments.length,o=new Array(s),c=0;c<s;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).loadPage=function(){return void 0!==(new b.a).get("userId")?Object(a.jsxs)("div",{children:[Object(a.jsx)(N,{}),Object(a.jsx)(W,{orderSwiper:"recent",count:10}),Object(a.jsx)(W,{orderSwiper:"favorites",count:10}),Object(a.jsx)(W,{orderSwiper:"top-rated",count:10})]}):Object(a.jsxs)("div",{children:[Object(a.jsx)(N,{}),Object(a.jsx)(W,{orderSwiper:"recent",count:6})]})},e}return Object(d.a)(n,[{key:"render",value:function(){return this.loadPage()}}]),n}(s.Component),F=(n(80),function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).setUserName=function(e){s.setState({userName:e.target.value})},s.setPassword=function(e){s.setState({password:e.target.value})},s.setNewUserName=function(e){s.setState({newUserName:e.target.value})},s.setNewPassword=function(e){s.setState({newPassword:e.target.value})},s.setConfirmPassword=function(e){s.setState({confirmPassword:e.target.value})},s.login=function(){if(""===s.state.userName||""===s.state.password)alert("User name or password can't be empty");else{var e="".concat(I,"/login"),t={userName:s.state.userName,password:s.state.password};g.a.post(e,t).then((function(e){if("user not found"===e.data)alert("User name or password incorrect");else{(new b.a).set("userId",e.data.userId,{path:"/",maxAge:72e5,httponly:!0,sameSite:!0}),window.location.reload(!1)}})).catch((function(e){console.log(e)}))}},s.signUp=function(){if(""===s.state.newUserName||""===s.state.newPassword||""===s.state.confirmPassword)alert("Credentials can't be empty");else if(s.state.newPassword!==s.state.confirmPassword)alert("You need to confirm the password");else{var e="".concat(I,"/signup"),t={newUserName:s.state.newUserName,newPassword:s.state.newPassword};g.a.post(e,t).then((function(e){if("user name taken"===e.data)alert("User name already taken");else{(new b.a).set("userId",e.data.userId,{path:"/",maxAge:72e5,httponly:!0,sameSite:!0}),window.location.reload(!1)}})).catch((function(e){console.log(e)}))}},s.logOut=function(){(new b.a).remove("userId",{path:"/"});var e=window.location.href,t=e.substr(e.indexOf("#")+1);s.setState({loggedUserName:"logged out"}),t===y&&window.location.reload(!1)},s.addMovieButton=function(){if(s.state.isManager)return Object(a.jsx)("a",{href:"#".concat(S),className:"add-movie-style",children:"Add/Remove a Movie"})},s.addCookieSearch=function(){(new b.a).set("show","recent",{path:"/",maxAge:72e5,httponly:!0,sameSite:!0});var e=window.location.href;e.substr(e.indexOf("#")+1)===k&&window.location.reload(!1)},s.loadLogButtons=function(){return void 0!==(new b.a).get("userId")?Object(a.jsx)("ul",{className:"nav navbar-nav navbar-right",children:Object(a.jsxs)("li",{children:[Object(a.jsxs)("a",{href:"/#","data-toggle":"dropdown",className:"btn btn-primary dropdown-toggle get-started-btn mt-1 mb-1",children:["Welcome ",s.state.loggedUserName]}),Object(a.jsx)("ul",{className:"dropdown-menu form-wrapper",children:Object(a.jsxs)("li",{className:"center-li",children:[Object(a.jsx)("a",{onClick:function(){s.addCookieSearch()},href:"#".concat(k),className:"fav-style",children:"See All Movies"}),s.addMovieButton(),Object(a.jsx)(h.b,{to:{pathname:y},children:Object(a.jsx)("button",{onClick:function(){return s.logOut()},className:"logout-text",children:"Log Out"})})]})})]})}):Object(a.jsxs)("ul",{className:"nav navbar-nav navbar-right",children:[Object(a.jsxs)("li",{children:[Object(a.jsx)("a",{"data-toggle":"dropdown",className:"dropdown-toggle",href:"/#",children:"Login"}),Object(a.jsx)("ul",{className:"dropdown-menu form-wrapper",children:Object(a.jsxs)("li",{children:[Object(a.jsx)("p",{className:"hint-text",children:"Sign in to your account"}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{onChange:s.setUserName,type:"text",className:"form-control",placeholder:"Username",required:"required"})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{onChange:s.setPassword,type:"password",className:"form-control",placeholder:"Password",required:"required"})}),Object(a.jsx)("input",{onClick:function(){return s.login()},type:"button",className:"btn btn-primary btn-block",value:"Login"})]})})]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("a",{href:"/#","data-toggle":"dropdown",className:"btn btn-primary dropdown-toggle get-started-btn mt-1 mb-1",children:"Sign Up"}),Object(a.jsx)("ul",{className:"dropdown-menu form-wrapper",children:Object(a.jsxs)("li",{children:[Object(a.jsx)("p",{className:"hint-text",children:"Fill in this form to create your account!"}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{onChange:s.setNewUserName,type:"text",className:"form-control",placeholder:"Username",required:"required"})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{onChange:s.setNewPassword,type:"password",className:"form-control",placeholder:"Password",required:"required"})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{onChange:s.setConfirmPassword,type:"password",className:"form-control",placeholder:"Confirm Password",required:"required"})}),Object(a.jsx)("input",{onClick:function(){return s.signUp()},type:"submit",className:"btn btn-primary btn-block",value:"Sign up"})]})})]})]})},s.refreshPage=function(){var e=window.location.href;e.substr(e.indexOf("#")+1)===y&&window.location.reload(!1)},s.state={userName:"",password:"",isManager:!1,newUserName:"",newPassword:"",confirmPassword:"",loggedUserName:""},s}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=(new b.a).get("userId");if(void 0!==t){var n="".concat(I,"/login/user");g.a.post(n,{userId:t}).then((function(t){"user not found"===t.data?console.log("not found"):e.setState({loggedUserName:t.data.userName,isManager:t.data.isManager})})).catch((function(e){console.log(e)}))}}},{key:"render",value:function(){var e=this;return Object(a.jsxs)("nav",{id:"navbar",className:"navbar navbar-default navbar-expand-lg navbar-light",children:[Object(a.jsxs)("div",{className:"navbar-header",children:[Object(a.jsx)(h.b,{to:{pathname:y},children:Object(a.jsxs)("p",{onClick:function(){return e.refreshPage()},className:"navbar-brand pTagStyle",children:["Movie",Object(a.jsx)("b",{children:"Mojo"})]})}),Object(a.jsxs)("button",{type:"button","data-target":"#navbarCollapse","data-toggle":"collapse",className:"navbar-toggle",children:[Object(a.jsx)("span",{className:"navbar-toggler-icon"}),Object(a.jsx)("span",{className:"icon-bar"}),Object(a.jsx)("span",{className:"icon-bar"}),Object(a.jsx)("span",{className:"icon-bar"})]})]}),Object(a.jsx)("div",{id:"navbarCollapse",className:"collapse navbar-collapse",children:this.loadLogButtons()})]})}}]),n}(s.Component)),P=(n(41),function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).addFavButon=function(){if(void 0!==(new b.a).get("userId"))return s.state.favorite?Object(a.jsx)("li",{children:Object(a.jsx)("button",{id:"fav",onClick:function(){return s.clickFavButton()},className:"favorite favorite-color",children:"Added!"})}):Object(a.jsx)("li",{children:Object(a.jsx)("button",{id:"fav",onClick:function(){return s.clickFavButton()},className:"favorite",children:"Add to favorites"})})},s.clickFavButton=function(){var e=new b.a,t={userId:e.get("userId"),movieId:e.get("movieId")};if(s.state.favorite){var n="".concat(I,"/favorites/delete");g.a.post(n,t).then((function(e){document.getElementById("fav").style.backgroundColor="#4e9af1",document.getElementById("fav").innerHTML="Add to favorites",s.setState({favorite:!1})})).catch((function(e){console.log(e)}))}else{var a="".concat(I,"/favorites/insert");g.a.post(a,t).then((function(e){document.getElementById("fav").style.backgroundColor="#0fbb65",document.getElementById("fav").innerHTML="Added!",s.setState({favorite:!0})})).catch((function(e){console.log(e)}))}},s.state={movieInfo:"",favorite:!1},s}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=new b.a,n=t.get("movieId"),a=t.get("userId");if(void 0!==a){var s={userId:a,movieId:n},o="".concat(I,"/favorites/usermovie");g.a.post(o,s).then((function(t){0!==t.data.length&&e.setState({favorite:!0})})).catch((function(e){console.log(e)}))}var c="".concat(I,"/movies/info");g.a.post(c,{movieId:n}).then((function(t){var n=t.data[0];"https://www.genius100visions.com/wp-content/uploads/2017/09/placeholder-vertical.jpg"===n.poster&&(document.getElementById("poster").style.width="30%"),e.setState({movieInfo:n})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return Object(a.jsx)("div",{className:"wrapper",children:Object(a.jsx)("main",{className:"content",children:Object(a.jsxs)("div",{className:"single",children:[Object(a.jsx)("section",{className:"trailer",children:Object(a.jsx)("div",{className:"trailer-frame",children:Object(a.jsx)("iframe",{title:this.state.movieInfo.poster,width:"560",height:"349",src:this.state.movieInfo.trailer,frameBorder:"0",allowFullScreen:!0})})}),Object(a.jsxs)("section",{className:"movie",children:[Object(a.jsx)("img",{id:"poster",alt:"",src:this.state.movieInfo.poster}),Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:this.state.movieInfo.title}),Object(a.jsx)("li",{children:this.state.movieInfo.plot}),this.addFavButon(),Object(a.jsx)("li",{className:"margin-genre",children:Object(a.jsxs)("p",{children:[Object(a.jsx)("span",{children:"Genres: "}),this.state.movieInfo.genre]})}),Object(a.jsx)("li",{children:Object(a.jsxs)("p",{children:[Object(a.jsx)("span",{children:"Director: "}),this.state.movieInfo.director]})}),Object(a.jsx)("li",{children:Object(a.jsxs)("p",{children:[Object(a.jsx)("span",{children:"Cast: "}),this.state.movieInfo.actors]})}),Object(a.jsx)("li",{children:Object(a.jsxs)("p",{children:[Object(a.jsx)("span",{children:"Released: "}),this.state.movieInfo.released]})}),Object(a.jsx)("li",{children:Object(a.jsxs)("p",{children:[Object(a.jsx)("span",{children:"Runtime: "}),this.state.movieInfo.runtime]})}),Object(a.jsx)("li",{children:Object(a.jsxs)("p",{children:[Object(a.jsx)("span",{children:"Metascore: "}),this.state.movieInfo.rating,"/100"]})})]})]})]})})})}}]),n}(s.Component)),M=(n(42),n(45)),Y=n.n(M),L=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsx)(Y.a,{className:"loadingStyle",type:"ThreeDots",color:"rgb(255, 233, 135)",height:"100",width:"100"})}}]),n}(s.Component),R=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).setSearchInput=function(e){s.setState({searchInput:e.target.value})},s.searchOMDb=function(){s.setState({loading:!0},(function(){var e="".concat(I,"/omdb");g.a.post(e,{search:s.state.searchInput}).then((function(e){s.setState({loading:!1}),"movie not found"===e.data?(""===s.state.movieInfo&&s.setState({showSections:!1}),alert("Movie not found.")):s.setState({showSections:!0,movieInfo:e.data.movieInfo,trailer:e.data.trailer,movieFromDB:e.data.movieId})})).catch((function(e){console.log(e)}))}))},s.loadRatingText=function(){return"N/A"===s.state.movieInfo.rating?Object(a.jsx)("li",{children:Object(a.jsxs)("p",{children:[Object(a.jsx)("span",{children:"Metascore: "}),s.state.movieInfo.rating]})}):Object(a.jsx)("li",{children:Object(a.jsxs)("p",{children:[Object(a.jsx)("span",{children:"Metascore: "}),s.state.movieInfo.rating,"/100"]})})},s.loadAddButton=function(){if(""!==s.state.movieInfo)return 0===s.state.movieFromDB.length?Object(a.jsx)("li",{children:Object(a.jsx)("button",{onClick:function(){return s.clickMovieButton()},id:"movieButton",className:"favorite",children:"Add to the website"})}):Object(a.jsx)("li",{children:Object(a.jsx)("button",{onClick:function(){return s.clickMovieButton()},id:"movieButton",className:"favorite-color favorite",children:"Remove from the website"})})},s.clickMovieButton=function(){if(0===s.state.movieFromDB.length){var e={movieInfo:s.state.movieInfo,trailer:s.state.trailer},t="".concat(I,"/movies/insert");g.a.post(t,e).then((function(e){document.getElementById("movieButton").style.backgroundColor="#0fbb65",document.getElementById("movieButton").innerHTML="Remove from the website",s.setState({movieFromDB:[{movieId:e.data.insertId}]})})).catch((function(e){console.log(e)}))}else{var n={movieId:s.state.movieFromDB[0].movieId},a="".concat(I,"/movies/delete");g.a.post(a,n).then((function(e){document.getElementById("movieButton").style.backgroundColor="#4e9af1",document.getElementById("movieButton").innerHTML="Add to the website",s.setState({movieFromDB:[]})})).catch((function(e){console.log(e)}))}},s.loadSpinner=function(){if(s.state.loading)return Object(a.jsx)(L,{})},s.loadTrailerSection=function(){if(s.state.showSections)return Object(a.jsx)("section",{className:"trailer",children:Object(a.jsx)("div",{className:"trailer-frame",children:Object(a.jsx)("iframe",{title:s.state.movieInfo.title,width:"560",height:"349",src:s.state.trailer,frameBorder:"0",allowFullScreen:!0})})})},s.loadMovieSection=function(){if(s.state.showSections)return Object(a.jsxs)("section",{className:"movie",children:[Object(a.jsx)("img",{alt:"",src:s.state.movieInfo.poster}),Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:s.state.movieInfo.title}),Object(a.jsx)("li",{children:s.state.movieInfo.plot}),s.loadAddButton(),Object(a.jsx)("li",{className:"margin-genre",children:Object(a.jsxs)("p",{children:[Object(a.jsx)("span",{children:"Genres: "}),s.state.movieInfo.genre]})}),Object(a.jsx)("li",{children:Object(a.jsxs)("p",{children:[Object(a.jsx)("span",{children:"Director: "}),s.state.movieInfo.director]})}),Object(a.jsx)("li",{children:Object(a.jsxs)("p",{children:[Object(a.jsx)("span",{children:"Cast: "}),s.state.movieInfo.actors]})}),Object(a.jsx)("li",{children:Object(a.jsxs)("p",{children:[Object(a.jsx)("span",{children:"Released: "}),s.state.movieInfo.released]})}),Object(a.jsx)("li",{children:Object(a.jsxs)("p",{children:[Object(a.jsx)("span",{children:"Runtime: "}),s.state.movieInfo.runtime]})}),s.loadRatingText()]})]})},s.doRedirect=function(){if(s.state.changePage)return Object(a.jsx)(m.a,{to:y})},s.state={searchInput:"",movieInfo:"",trailer:"",movieFromDB:[],loading:!1,showSections:!1,changePage:!1},s}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=(new b.a).get("userId"),n="".concat(I,"/login/user");g.a.post(n,{userId:t}).then((function(t){t.data.isManager||e.setState({changePage:!0})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{className:"wrapper",children:[this.doRedirect(),Object(a.jsx)("main",{className:"content",children:Object(a.jsxs)("div",{className:"single",children:[Object(a.jsxs)("section",{className:"addBox",children:[Object(a.jsxs)("p",{className:"searchHeader",children:["Add a New Movie From IMDb ",Object(a.jsx)("span",{id:"spanWord",children:"Or"})," Remove an existing one"]}),Object(a.jsx)("div",{className:"wrap",children:Object(a.jsxs)("div",{className:"search",children:[Object(a.jsx)("input",{id:"searchImdb",onChange:this.setSearchInput,type:"text",className:"searchTerm",placeholder:"Search a movie"}),Object(a.jsx)("button",{onClick:function(){return e.searchOMDb()},className:"searchButton",children:Object(a.jsx)("i",{className:"fa fa-search"})})]})})]}),this.loadSpinner(),this.loadTrailerSection(),this.loadMovieSection()]})})]})}}]),n}(s.Component),V=(n(100),n(46)),T=n.n(V),Q=function(e){Object(u.a)(s,e);var t=Object(j.a)(s);function s(e){var o;return Object(l.a)(this,s),(o=t.call(this,e)).scrollButton=function(){window.onscroll=function(){var e=window.pageYOffset;null!==document.getElementById("toTop")&&(document.getElementById("toTop").style.display=0===e?"none":"block")}},o.goTop=function(){T()(".content",{offset:0,ease:"inOutSine",duration:500})},o.addCookieMovieId=function(e){(new b.a).set("movieId",e,{path:"/",maxAge:72e5,httponly:!0,sameSite:!0})},o.loadMovies=function(e){var t=new b.a,n=t.get("userId"),a="",s="";switch(e){case"recent":a="".concat(I,"/movies/recent/all"),s="Released recently";break;case"favorites":a="".concat(I,"/movies/favorites/all"),s="Favorite movies";break;default:a="".concat(I,"/movies/topRated/all"),s="Top rated"}t.set("show",e,{path:"/",maxAge:72e5,httponly:!0,sameSite:!0}),g.a.post(a,{userId:n}).then((function(e){o.setState({movies:e.data,searchTitle:s})})).catch((function(e){console.log(e)}))},o.loadMoviePictures=function(){if(0!==o.state.movies.length)return Object(a.jsx)("div",{className:"movies",children:o.state.movies.map((function(e,t){return Object(a.jsx)("div",{className:"mov",children:Object(a.jsxs)(h.b,{to:{pathname:B},children:[Object(a.jsx)("img",{onClick:function(){return o.addCookieMovieId(e.movieId)},alt:e.title,src:e.poster}),Object(a.jsx)("h2",{className:"movietitle",children:e.title})]})},e.movieId)}))});var e=n(107);return Object(a.jsx)("img",{className:"no-movies-pic",alt:"No movies",src:e})},o.loadSearchButons=function(){return Object(a.jsxs)("div",{className:"marginButtons",children:[Object(a.jsx)("button",{onClick:function(){return o.loadMovies("recent")},className:"styleChoices releasedButton",children:"Released recently"}),Object(a.jsx)("button",{onClick:function(){return o.loadMovies("favorites")},className:"styleChoices favoriteButton",children:"Favorites"}),Object(a.jsx)("button",{onClick:function(){return o.loadMovies("top-rated")},className:"styleChoices topRatedButton",children:"Top rated"})]})},o.doRedirect=function(){if(o.state.changePage)return Object(a.jsx)(m.a,{to:y})},o.state={searchTitle:"",movies:[],changePage:!1},o}return Object(d.a)(s,[{key:"componentDidMount",value:function(){var e=this;this.scrollButton();var t=new b.a,n=t.get("userId");if(void 0===n)this.setState({changePage:!0});else{var a=t.get("show"),s="",o="";switch(a){case"recent":s="".concat(I,"/movies/recent/all"),o="Released recently";break;case"favorites":s="".concat(I,"/movies/favorites/all"),o="Favorite movies";break;default:s="".concat(I,"/movies/topRated/all"),o="Top rated"}g.a.post(s,{userId:n}).then((function(t){e.setState({movies:t.data,searchTitle:o})})).catch((function(e){console.log(e)}))}}},{key:"render",value:function(){var e=this;return Object(a.jsxs)("main",{className:"content",children:[this.doRedirect(),Object(a.jsxs)("section",{className:"centered",children:[Object(a.jsx)("h3",{children:this.state.searchTitle}),this.loadSearchButons(),this.loadMoviePictures()]}),Object(a.jsx)("button",{id:"toTop",onClick:function(){return e.goTop()},className:"btn btn-light btn-lg back-to-top",children:Object(a.jsx)("i",{className:"fa fa-chevron-up"})})]})}}]),s}(s.Component),U=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)(h.a,{children:[Object(a.jsx)(F,{}),Object(a.jsxs)(m.d,{children:[Object(a.jsx)(m.b,{exact:!0,path:y,render:function(e){return Object(a.jsx)(E,Object(i.a)({},e))}}),Object(a.jsx)(m.b,{exact:!0,path:B,render:function(e){return Object(a.jsx)(P,Object(i.a)({},e))}}),Object(a.jsx)(m.b,{exact:!0,path:S,render:function(e){return Object(a.jsx)(R,Object(i.a)({},e))}}),Object(a.jsx)(m.b,{exact:!0,path:k,render:function(e){return Object(a.jsx)(Q,Object(i.a)({},e))}})]})]})})}}]),n}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(U,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},41:function(e,t,n){},42:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},75:function(e,t,n){},80:function(e,t,n){}},[[108,1,2]]]);
//# sourceMappingURL=main.e0c73371.chunk.js.map