(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e,a,t){},function(e,a,t){e.exports=t.p+"static/media/logo.0f38ba38.png"},,,,function(e,a,t){e.exports=t.p+"static/media/wordcloud.4a62ba19.png"},,function(e,a,t){e.exports=t.p+"static/media/uvm3.b6fb766e.svg"},function(e,a,t){e.exports=t.p+"static/media/woodstock.c5ace4e8.png"},function(e,a,t){e.exports=t(27)},,,,,,,function(e,a,t){},,,,function(e,a,t){"use strict";t.r(a);t(17);var n=t(0),l=t.n(n),r=t(11),c=t.n(r),s=(t(23),t(1)),i=t(2),m=t(5),o=t(3),d=t(4),u=(t(7),t(8)),h=t.n(u),g=t(12),E=t.n(g),p=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{id:this.props.sectionID,className:"Page-Section"},l.a.createElement("div",{style:{paddingTop:"5%"}},l.a.createElement("img",{src:h.a,alt:"Logo",style:{maxHeight:"150px"}}),l.a.createElement("h1",{style:{fontSize:"60px",fontWeight:400,lineHeight:1.2}},"I Am A Full Stack Developer"),l.a.createElement("p",{className:"aboutParagraph"},"My name is Gordon MacMaster. I am a junior computer science and information science major at the University of Vermont. I have six years of programming experience in various languages and frameworks. I have interned with the Vermont Agency of Digital Services, Pennsylvania Multifamily Asset Managers, and am currently interning for Tesla Motors as a Digital Products Engineer. I am interested in all aspects of computer science from front end design to machine learning and everything in between."),l.a.createElement("img",{src:E.a,alt:"wordcloud",className:"wordcloud"})))}}]),a}(n.Component),f=t(13),b=t(6),v=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).state={name:"",email:"",subject:"",message:"",errors:!1},t.handleSubmit=t.handleSubmit.bind(Object(b.a)(Object(b.a)(t))),t.handleChange=t.handleChange.bind(Object(b.a)(Object(b.a)(t))),t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(f.a)({},e.target.id,e.target.value))}},{key:"handleSubmit",value:function(){var e=!1;""!==this.state.name&&""!==this.state.email&&""!==this.state.subject&&""!==this.state.message||(e=!0),this.setState({errors:e}),e||this.setState({name:"",email:"",subject:"",message:"",errors:!1})}},{key:"render",value:function(){return console.log(this.state),l.a.createElement("div",{id:this.props.sectionID,className:"Page-Section"},l.a.createElement("div",{style:{paddingTop:"5%"}},l.a.createElement("img",{src:h.a,alt:"Logo",style:{maxHeight:"150px"}}),l.a.createElement("h1",{style:{fontSize:"60px",fontWeight:400,lineHeight:1.2}},"Contact Me"),l.a.createElement("p",{className:"contactParagraph"},"Feel free to reach out to learn about my experience, plans for the future, or business inquiries"),l.a.createElement("div",{style:{maxWidth:"50%",margin:"25px auto 0 auto"}},this.state.errors?l.a.createElement("div",{className:"alert alert-danger"},"Please enter required fields."):null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-4"},l.a.createElement("div",{style:{marginTop:"35px"}},l.a.createElement("div",null,l.a.createElement("i",{className:"fas fa-mobile-alt fa-2x"})),l.a.createElement("div",null,l.a.createElement("p",{style:{margin:0}},l.a.createElement("strong",null,"Call me at")),l.a.createElement("p",{style:{margin:0}},l.a.createElement("div",null,"+802 369 9025")))),l.a.createElement("div",{style:{marginTop:"35px"}},l.a.createElement("div",null,l.a.createElement("i",{className:"far fa-envelope fa-2x"})),l.a.createElement("div",null,l.a.createElement("p",{style:{margin:0}},l.a.createElement("strong",null,"Email me at")),l.a.createElement("p",{style:{margin:0}},l.a.createElement("div",null,"gordomacmaster@gmail.com")))),l.a.createElement("div",{style:{marginTop:"35px"}},l.a.createElement("div",null,l.a.createElement("i",{className:"fas fa-map-marker-alt fa-2x"})),l.a.createElement("div",null,l.a.createElement("p",{style:{margin:0}},l.a.createElement("strong",null,"Current Location")),l.a.createElement("p",{style:{margin:0}},l.a.createElement("div",null,"Fremont, CA"))))),l.a.createElement("div",{className:"col-lg-8"},l.a.createElement("div",{className:"contact_form"},l.a.createElement("form",{action:"https://formspree.io/gordomacmaster@gmail.com",method:"POST"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-6"},l.a.createElement("div",{className:"form-group mt-2"},l.a.createElement("label",{htmlFor:"name",className:"font-weight-bold"},"Name"),l.a.createElement("input",{name:"name",id:"name",type:"text",className:"form-control",placeholder:"Your name...",value:this.state.name,onChange:this.handleChange,style:this.state.errors&&""===this.state.name?{color:"#721c24",backgroundColor:"#f8d7da",borderColor:"#f5c6cb"}:null,required:!0}))),l.a.createElement("div",{className:"col-lg-6"},l.a.createElement("div",{className:"form-group mt-2"},l.a.createElement("label",{htmlFor:"email",className:"font-weight-bold"},"Email address"),l.a.createElement("input",{name:"_replyto",id:"email",type:"email",className:"form-control",placeholder:"Your email...",style:this.state.errors&&""===this.state.email?{color:"#721c24",backgroundColor:"#f8d7da",borderColor:"#f5c6cb"}:null,value:this.state.email,onChange:this.handleChange,required:!0}))),l.a.createElement("div",{className:"col-lg-12"},l.a.createElement("div",{className:"form-group mt-2"},l.a.createElement("label",{htmlFor:"subject",className:"font-weight-bold"},"Subject"),l.a.createElement("input",{type:"text",name:"subject",className:"form-control",id:"subject",placeholder:"Your Subject..",value:this.state.subject,style:this.state.errors&&""===this.state.subject?{color:"#721c24",backgroundColor:"#f8d7da",borderColor:"#f5c6cb"}:null,onChange:this.handleChange,required:!0})))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-12"},l.a.createElement("div",{className:"form-group mt-2"},l.a.createElement("label",{htmlFor:"comments",className:"font-weight-bold"},"Message"),l.a.createElement("textarea",{name:"message",id:"message",rows:"4",className:"form-control",placeholder:"Your message...",value:this.state.message,onChange:this.handleChange,style:this.state.errors&&""===this.state.message?{color:"#721c24",backgroundColor:"#f8d7da",borderColor:"#f5c6cb"}:null,required:!0})))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12 text-right"},l.a.createElement("input",{type:"hidden",name:"_next",value:"https://gordonmacmaster.com/#contact"}),l.a.createElement("input",{type:"submit",className:"btn btn-custom",value:"Send Message",style:{marginBottom:"10px"}}))))))))))}}]),a}(n.Component),y=t(14),N=t.n(y),k=t(15),w=t.n(k),j=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{id:this.props.sectionID,className:"Page-Section bg-light"},l.a.createElement("div",{style:{paddingTop:"5%"}},l.a.createElement("h1",{style:{fontSize:"60px",fontWeight:400,lineHeight:1.2}},"Education"),l.a.createElement("img",{src:N.a,alt:"University of Vermont Logo",className:"uvmlogo"}),l.a.createElement("h2",null,l.a.createElement("strong",null,"University of Vermont,")," Burlington, VT"),l.a.createElement("h4",null,"College of Engineering and Mathematical Sciences"),l.a.createElement("h4",null,"UVM Honors College"),l.a.createElement("h5",null,"Computer Science and Information Systems"),l.a.createElement("h5",null,"2016-Present"),l.a.createElement("br",null),l.a.createElement("img",{src:w.a,alt:"Woodstock Logo",className:"woodstocklogo"}),l.a.createElement("h2",null,l.a.createElement("strong",null,"Woodstock Union Highschool,")," Woodstock, VT"),l.a.createElement("h4",null,"Salutatorian"),l.a.createElement("h4",{style:{paddingBottom:"10px"}},"2012-2016")))}}]),a}(n.Component),x=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{id:"home",className:"Page-Section"},l.a.createElement("div",{className:"App-header hero-Image"},l.a.createElement("div",{style:{background:"rgba(0, 0, 0, 0.25)",position:"absolute",width:"100%",height:"100%",minHeight:"100vh"}}),l.a.createElement("div",{style:{height:"100%",width:"100%",zIndex:999}},l.a.createElement("h3",null,"Hello!"),l.a.createElement("h1",{className:"header_title"},"My Name is Gordon MacMaster"),l.a.createElement("ul",{className:"social_home list-unstyled text-center"},l.a.createElement("li",{className:"list-inline-item",style:{margin:"0 10px"}},l.a.createElement("a",{href:"https://www.facebook.com/gordomacmaster",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fab fa-facebook fa-2x"}))),l.a.createElement("li",{className:"list-inline-item",style:{margin:"0 10px"}},l.a.createElement("a",{href:"https://www.linkedin.com/in/gordon-macmaster",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fab fa-linkedin fa-2x"}))),l.a.createElement("li",{className:"list-inline-item",style:{margin:"0 10px"}},l.a.createElement("a",{href:"https://www.instagram.com/gordomacmaster",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fab fa-instagram fa-2x"}))),l.a.createElement("li",{className:"list-inline-item",style:{margin:"0 10px"}},l.a.createElement("a",{href:"https://github.com/gmacmaster",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fab fa-github-square fa-2x"}))),l.a.createElement("li",{className:"list-inline-item",style:{margin:"0 10px"}},l.a.createElement("a",{href:"https://twitter.com/gordomacmaster",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fab fa-twitter-square fa-2x"})))),l.a.createElement("div",{className:"header_btn"},l.a.createElement("a",{href:"../Gordon_MacMaster_Resume.pdf",className:"btn btn-outline-custom btn-rounded mt-4",target:"blank"},"View Resume")))),l.a.createElement("div",{className:"scroll_down"},l.a.createElement("a",{href:"#about",className:"scroll"},l.a.createElement("i",{className:"fas fa-arrow-down",style:{fontSize:"1.5em"}}))))}}]),a}(n.Component),O=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{id:this.props.sectionID,className:"Page-Section"},l.a.createElement("div",{style:{paddingTop:"5%",background:"#282c34",minHeight:"100vh",paddingBottom:"25px"}},l.a.createElement("h1",{className:"header_title",style:{color:"white"}},"Work Experience"),l.a.createElement("div",{className:"timeline"},l.a.createElement("div",{className:"timeline-container left"},l.a.createElement("div",{className:"content"},l.a.createElement("h2",null,"2019-present"),l.a.createElement("h4",null,"Software Development Intern"),l.a.createElement("p",{style:{margin:0}}," Tesla Motors, Digital Products"),l.a.createElement("p",{style:{margin:0}},"Full stack developer. React.js, Javascript, Node.js"))),l.a.createElement("div",{className:"timeline-container right"},l.a.createElement("div",{className:"content"},l.a.createElement("h2",null,"2018"),l.a.createElement("h4",null,"Software Development Intern"),l.a.createElement("p",{style:{margin:0}},"Pennsylvania Multifamily Asset Managers"),l.a.createElement("p",{style:{margin:0}},"Full stack developer. C#, ASP.net, MySQL"))),l.a.createElement("div",{className:"timeline-container left"},l.a.createElement("div",{className:"content"},l.a.createElement("h2",null,"2017"),l.a.createElement("h4",null,"Intern"),l.a.createElement("p",{style:{margin:0}},"Vermont Agency of Digital Services"))),l.a.createElement("div",{className:"timeline-container right"},l.a.createElement("div",{className:"content"},l.a.createElement("h2",null,"2017"),l.a.createElement("h4",null,"Pool Director"),l.a.createElement("p",{style:{margin:0}},"Woodstock Recreation Center"))),l.a.createElement("div",{className:"timeline-container left"},l.a.createElement("div",{className:"content"},l.a.createElement("h2",null,"2014-present"),l.a.createElement("h4",null,"Volunteer Firefighter"),l.a.createElement("p",{style:{margin:0}},"Woodstock Fire Dept."))),l.a.createElement("div",{className:"timeline-container right"},l.a.createElement("div",{className:"content"},l.a.createElement("h2",null,"2013-2019"),l.a.createElement("h4",null,"Ski Instructor"),l.a.createElement("p",{style:{margin:0}},"Woodstock Inn Corporation"))),l.a.createElement("div",{className:"timeline-container left"},l.a.createElement("div",{className:"content"},l.a.createElement("h2",null,"2013-2017"),l.a.createElement("h4",null,"Lifeguard & swim instructor"),l.a.createElement("p",{style:{margin:0}},"Woodstock Rec Center"))))))}}]),a}(n.Component),C=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).state={menuDisplayed:!1},t.displayMenu=t.displayMenu.bind(Object(b.a)(Object(b.a)(t))),t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"displayMenu",value:function(){this.setState({menuDisplayed:!this.state.menuDisplayed})}},{key:"render",value:function(){return l.a.createElement("nav",{id:"navbar",className:"navbar navbar-expand-lg fixed-top custom-nav sticky",style:{zIndex:9999}},l.a.createElement("div",{className:"container"},l.a.createElement("h1",{id:"nameHeaderH1"},"Gordon"),l.a.createElement("button",{className:"btn btn-light smallScreenButton",type:"button","data-toggle":"collapse","data-target":"#navbarCollapse",onClick:this.displayMenu},l.a.createElement("i",{className:"fas fa-bars"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarCollapse",style:this.state.menuDisplayed?{display:"inline-block"}:{display:"none"}},l.a.createElement("ul",{className:"navbar-nav ml-auto"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{href:"#home",className:"nav-link"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{href:"#about",className:"nav-link"},"About")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{href:"#work",className:"nav-link"},"Work")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{href:"#education",className:"nav-link"},"Education")),l.a.createElement("li",{className:this.state.contactActive?"nav-item active":"nav-item"},l.a.createElement("a",{href:"#contact",className:"nav-link"},"Contact"))))))}}]),a}(n.Component),S=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"jumbotron text-center",style:{marginBottom:0}},l.a.createElement("ul",{className:"social_home list-unstyled text-center"},l.a.createElement("li",{className:"list-inline-item",style:{margin:"0 10px"}},l.a.createElement("a",{href:"https://www.facebook.com/gordomacmaster",target:"_blank",rel:"noopener noreferrer",style:{color:"darkgray"}},l.a.createElement("i",{className:"fab fa-facebook fa-2x"}))),l.a.createElement("li",{className:"list-inline-item",style:{margin:"0 10px"}},l.a.createElement("a",{href:"https://www.linkedin.com/in/gordon-macmaster",target:"_blank",rel:"noopener noreferrer",style:{color:"darkgray"}},l.a.createElement("i",{className:"fab fa-linkedin fa-2x"}))),l.a.createElement("li",{className:"list-inline-item",style:{margin:"0 10px"}},l.a.createElement("a",{href:"https://www.instagram.com/gordomacmaster",target:"_blank",rel:"noopener noreferrer",style:{color:"darkgray"}},l.a.createElement("i",{className:"fab fa-instagram fa-2x"}))),l.a.createElement("li",{className:"list-inline-item",style:{margin:"0 10px"}},l.a.createElement("a",{href:"https://github.com/gmacmaster",target:"_blank",rel:"noopener noreferrer",style:{color:"darkgray"}},l.a.createElement("i",{className:"fab fa-github-square fa-2x"}))),l.a.createElement("li",{className:"list-inline-item",style:{margin:"0 10px"}},l.a.createElement("a",{href:"https://twitter.com/gordomacmaster",target:"_blank",rel:"noopener noreferrer",style:{color:"darkgray"}},l.a.createElement("i",{className:"fab fa-twitter-square fa-2x"})))),l.a.createElement("ul",{className:"social_home list-unstyled text-center"},l.a.createElement("li",{className:"list-inline-item",style:{margin:"0 10px",color:"darkgray"}},l.a.createElement("i",{className:"far fa-copyright"}),"2019 Gordon MacMaster")))}}]),a}(n.Component),M=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(C,null),l.a.createElement(x,{sectionID:"hero"}),l.a.createElement(p,{sectionID:"about"}),l.a.createElement(O,{sectionID:"work"}),l.a.createElement(j,{sectionID:"education"}),l.a.createElement(v,{sectionID:"contact"}),l.a.createElement(S,{sectionID:"footer"}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(24).config(),c.a.render(l.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[16,1,2]]]);
//# sourceMappingURL=main.49488add.chunk.js.map