webpackJsonp([1],{"+Cyo":function(t,s){},ApaE:function(t,s,e){"use strict";var i=e("YaEn"),a=(e("IcnI"),e("ohTm")),n=e("SxhT"),o=e("hDS5"),r={name:"signUp",data:function(){return{formData:{username:"",password:""}}},methods:{signUp:function(){var t=this,s=new a.a.User;s.setUsername(this.formData.username),s.setPassword(this.formData.password),s.signUp().then(function(s){t.$store.commit("setUser",Object(n.a)()),i.a.push("Layout"),console.log("注册成功了")},function(t){alert(Object(o.a)(t))})},toLogin:function(){i.a.push("/login")}}},c={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"signUp"}},[t._m(0),t._v(" "),e("header",{staticClass:"signUp-header"},[t._v("马上制作Resume")]),t._v(" "),e("form",{staticClass:"signUp-form",on:{submit:function(s){s.preventDefault(),t.signUp(s)}}},[e("div",{staticClass:"signUp-info"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.username,expression:"formData.username"}],attrs:{type:"text",placeholder:"用户名"},domProps:{value:t.formData.username},on:{input:function(s){s.target.composing||t.$set(t.formData,"username",s.target.value)}}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.password,expression:"formData.password"}],attrs:{type:"password",placeholder:"密码"},domProps:{value:t.formData.password},on:{input:function(s){s.target.composing||t.$set(t.formData,"password",s.target.value)}}})]),t._v(" "),t._m(1)]),t._v(" "),e("div",{staticClass:"login"},[t._v("已有账号了?\n    "),e("a",{attrs:{href:"javascript:void(0)"},on:{click:function(s){s.preventDefault(),t.toLogin(s)}}},[t._v("登录")])]),t._v(" "),t._m(2)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"signUp-logo"},[s("img",{attrs:{src:e("qgmQ"),alt:"网站logo"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"signUp-btn"},[s("input",{attrs:{type:"submit",value:"注册"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("footer",{staticClass:"footer"},[s("p",[this._v("使用RESUME，即表示您同意我们的服务条款")]),this._v(" "),s("p",[s("a",{attrs:{href:"javascript:void(0)"}},[this._v("隐私")]),this._v(" "),s("a",{attrs:{href:"javascript:void(0)"}},[this._v("服务条款")])])])}]},l=e("VU/8")(r,c,!1,function(t){e("VvUY")},"data-v-174c679c",null);s.a=l.exports},Cl3J:function(t,s,e){"use strict";e("uMhA"),e("MPzD");var i=e("SxhT"),a=e("ohTm"),n=e("YaEn"),o={name:"Topbar",computed:{user:function(){return this.$store.state.user}},methods:{onPreviw:function(){this.$store.state.isVisible=!0},logOut:function(){a.a.User.logOut(),console.log(Object(i.a)()),this.$store.commit("setUser",Object(i.a)())},login:function(){n.a.push("/login")},signUp:function(){n.a.push("/signUp")}},created:function(){this.$store.commit("setUser",Object(i.a)())}},r={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"topbar"}},[e("a",{staticClass:"theme",attrs:{href:"javascript:voild(0)"}},[t._v("Resume")]),t._v(" "),e("div",{staticClass:"space"}),t._v(" "),t.user.id?e("div",{staticClass:"userInfo"},[e("span",[t._v("你好，"+t._s(t.user.username))]),t._v(" "),e("button",{on:{click:function(s){s.preventDefault(),t.logOut(s)}}},[t._v("登出")])]):e("div",{staticClass:"userInfo"},[e("a",{attrs:{href:"javascript:voild(0)"},on:{click:t.login}},[t._v("登录")]),t._v(" "),e("a",{attrs:{href:"javascript:voild(0)"},on:{click:t.signUp}},[t._v("注册")])]),t._v(" "),e("button",{staticClass:"btn save"},[t._v("保存")]),t._v(" "),e("button",{staticClass:"btn pre",on:{click:t.onPreviw}},[t._v("预览")])])},staticRenderFns:[]},c=e("VU/8")(o,r,!1,function(t){e("OaT/")},"data-v-33cdbbb8",null).exports,l=(e("IcnI"),{render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"resumeEditor"}},[e("div",{staticClass:"catogray"},[e("ul",t._l(t.resume.config,function(s,i){return e("li",{key:s.field,class:{active:s.field===t.selected},on:{click:function(e){t.selected=s.field}}},[e("svg",{staticClass:"icon"},[e("use",{attrs:{"xlink:href":"#icon-"+s.icon}})])])}))]),t._v(" "),e("div",{staticClass:"panels"},[e("ul",t._l(t.resume.config,function(s){return e("li",{directives:[{name:"show",rawName:"v-show",value:s.field===t.selected,expression:"item.field === selected"}],key:s.id},t._l(t.resume[s.field],function(i,a){return e("div",{key:a,staticClass:"subitem"},t._l(i,function(i,n){return e("div",{key:n,staticClass:"resumeField"},[e("label",[t._v(t._s(n))]),t._v(" "),e("input",{attrs:{type:"text"},domProps:{value:i},on:{input:function(e){t.changeResumeField(s.field+"."+a+"."+n,e.target.value)}}})])}))}))}))])])},staticRenderFns:[]}),d={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"resumePreview"}},[e("header",[e("h3",[t._v(t._s(t.resume.profile[0].Name))]),t._v(" "),e("h6",[t._v(t._s(t.resume.profile[0].Job))]),t._v(" "),e("img",{attrs:{src:"http://img.qq745.com/uploads/allimg/170516/14-1F516152034-52.png",alt:""}})]),t._v(" "),e("main",[e("div",{staticClass:"content-left"},[e("header",[t._v("EXPERIENCE")]),t._v(" "),t._l(t.resume.experience,function(s,i){return e("div",{key:i,staticClass:"experience"},[e("div",{staticClass:"experience-period"},[t._v(t._s(s.Period))]),t._v(" "),e("div",{staticClass:"experience-company"},[t._v(t._s(s.Company))]),t._v(" "),e("div",{staticClass:"experience-position"},[e("i",[t._v(t._s(s.Position))])]),t._v(" "),e("div",{staticClass:"experience-content"},[t._v(t._s(s.Content))])])}),t._v(" "),e("header",[t._v("PROJECTS")]),t._v(" "),t._l(t.resume.projects,function(s){return e("div",{key:s.name,staticClass:"projects"},[e("div",{staticClass:"projects-name"},[t._v(t._s(s.Name))]),t._v(" "),e("div",{staticClass:"projects-content"},[t._v(t._s(s.Content))])])})],2),t._v(" "),e("div",{staticClass:"content-right"},[e("header",[t._v("EDUCATION")]),t._v(" "),t._l(t.resume.education,function(s,i){return e("div",{key:i,staticClass:"education"},[e("div",{staticClass:"education-period"},[t._v(t._s(s.Period))]),t._v(" "),e("div",{staticClass:"education-school"},[t._v(t._s(s.School))])])}),t._v(" "),e("header",[t._v("SKILLS")]),t._v(" "),t._m(0),t._v(" "),e("header",[t._v("AWARDS")]),t._v(" "),t._l(t.resume.awards,function(s){return e("div",{key:s.Date,staticClass:"awards"},[e("time",{staticClass:"awards-left"},[t._v(t._s(s.Date))]),t._v(" "),e("div",{staticClass:"awards-right"},[e("div",{staticClass:"awards-name"},[t._v(t._s(s.Name))]),t._v(" "),e("div",{staticClass:"awards-content"},[t._v(t._s(s.Content))])])])}),t._v(" "),e("header",[t._v("CONTACT")]),t._v(" "),t._l(t.resume.contacts,function(s,i){return e("div",{key:s.QQ,staticClass:"contacts"},t._l(s,function(s,i){return e("div",{key:i},[e("span",[t._v(t._s(i)+":")]),t._v(" "),e("span",[t._v(t._s(s))])])}))})],2)]),t._v(" "),e("div",{staticClass:"divide-line"})])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("ul",{staticClass:"skills"},[s("li",[s("div",[this._v("HTML(5)")]),this._v(" "),s("div",{staticClass:"skills-html"})]),this._v(" "),s("li",[s("div",[this._v("CSS(3)")]),this._v(" "),s("div",{staticClass:"skills-css"})]),this._v(" "),s("li",[s("div",[this._v("JAVASCRIPT")]),this._v(" "),s("div",{staticClass:"skills-javascript"})]),this._v(" "),s("li",[s("div",[this._v("VUE")]),this._v(" "),s("div",{staticClass:"skills-vue"})]),this._v(" "),s("li",[s("div",[this._v("JQUERY")]),this._v(" "),s("div",{staticClass:"skills-jquery"})])])}]},v={name:"Layout",components:{Topbar:c,ResumeEditor:e("VU/8")({name:"ResumeEditor",computed:{resume:function(){return this.$store.state.resume},selected:{get:function(){return this.$store.state.selected},set:function(t){return this.$store.commit("switchTab",t)}}},methods:{changeResumeField:function(t,s){this.$store.commit("updateResume",{path:t,value:s})}}},l,!1,function(t){e("ipfn")},"data-v-fc20b1b6",null).exports,ResumePreview:e("VU/8")({name:"ResumePreview",computed:{resume:function(){return this.$store.state.resume}}},d,!1,function(t){e("fQ1b")},"data-v-051c3002",null).exports,Login:e("xJsL").a},computed:{isVisible:function(){return this.$store.state.isVisible}},methods:{onBack:function(){this.$store.state.isVisible=!1}},created:function(){document.body.insertAdjacentHTML("afterbegin",'<svg style="display:none">\n<?xml version="1.0" standalone="no"?><!DOCTYPE symbol PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><symbol id="icon-add" class="icon" width="200px" height="200.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/symbol"><path fill="#333333" d="M1000.704728 1023.968001h-139.643636a23.295272 23.295272 0 0 1 0-46.558545h116.348364V861.093091a23.295272 23.295272 0 0 1 46.558545 0v139.643636a23.295272 23.295272 0 0 1-23.263273 23.263273z m0-279.255273a23.295272 23.295272 0 0 1-23.295272-23.295272v-139.611637a23.295272 23.295272 0 0 1 46.558545 0v139.611637a23.295272 23.295272 0 0 1-23.263273 23.295272z m0-279.287273a23.295272 23.295272 0 0 1-23.295272-23.263273V302.550545a23.295272 23.295272 0 0 1 46.558545 0v139.611637a23.295272 23.295272 0 0 1-23.263273 23.263273z m0-279.255273a23.295272 23.295272 0 0 1-23.295272-23.263273V46.558545H861.093091a23.295272 23.295272 0 0 1 0-46.558545h139.643636c12.7996 0 23.263273 10.431674 23.263273 23.263273v139.643636a23.295272 23.295272 0 0 1-23.263273 23.263273zM721.417456 1023.968001h-139.611637a23.295272 23.295272 0 0 1 0-46.558545h139.611637a23.295272 23.295272 0 0 1 0 46.558545z m0-977.409456h-139.611637a23.295272 23.295272 0 0 1 0-46.558545h139.611637a23.295272 23.295272 0 0 1 0 46.558545z m-26.143183 418.86691a46.526546 46.526546 0 1 1 0 93.117091h-139.643636v139.611637a46.558545 46.558545 0 0 1-93.085092 0v-139.611637h-139.611637a46.558545 46.558545 0 0 1 0-93.117091h139.611637v-139.611637a46.526546 46.526546 0 1 1 93.117091 0v139.611637h139.611637z m-253.112091-418.86691H302.550545a23.295272 23.295272 0 0 1 0-46.558545h139.611637a23.295272 23.295272 0 0 1 0 46.558545zM162.906909 1023.968001H23.263273A23.295272 23.295272 0 0 1 0 1000.704728v-139.643636a23.295272 23.295272 0 0 1 46.558545 0v116.348364H162.87491a23.295272 23.295272 0 0 1 0 46.558545z m0-977.409456H46.558545V162.87491A23.295272 23.295272 0 0 1 0 162.87491V23.263273C0 10.431674 10.431674 0 23.263273 0h139.643636a23.295272 23.295272 0 0 1 0 46.558545zM23.263273 279.255273c12.863598 0 23.295272 10.431674 23.295272 23.295272v139.611637a23.295272 23.295272 0 0 1-46.558545 0V302.550545c0-12.863598 10.431674-23.295272 23.263273-23.295272z m0 279.287273c12.863598 0 23.295272 10.399675 23.295272 23.263273v139.611637a23.295272 23.295272 0 0 1-46.558545 0v-139.611637c0-12.863598 10.431674-23.263273 23.263273-23.263273z m279.287272 418.86691h139.611637a23.295272 23.295272 0 0 1 0 46.558545H302.550545a23.295272 23.295272 0 0 1 0-46.558545z" /></symbol>\n<?xml version="1.0" standalone="no"?><!DOCTYPE symbol PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><symbol id="icon-book" class="icon" width="200px" height="168.84px" viewBox="0 0 1213 1024" version="1.1" xmlns="http://www.w3.org/2000/symbol"><path fill="#333333" d="M1211.58163 124.09363s-68.645926-57.685333-138.808889-88.064c-76.382815-37.05363-184.32-35.346963-184.32-35.346963s-76.003556-5.688889-153.941334 31.478518a658.773333 658.773333 0 0 0-135.471407 87.684741S519.585185 58.405926 449.308444 26.244741C379.031704-5.95437 277.617778 0.682667 277.617778 0.682667S181.172148 5.688889 119.125333 33.867852C57.002667 62.084741 0 129.21363 0 129.21363V994.797037s87.722667-76.724148 140.060444-98.304 134.181926-20.859259 134.181926-20.859259 98.076444 11.908741 156.520297 35.764148c58.405926 23.893333 168.239407 112.336593 168.239407 112.336593s70.011259-75.472593 126.217482-103.80326c95.269926-49.796741 189.743407-42.590815 189.743407-42.590815s58.026667 2.578963 138.808889 33.223112c73.424593 27.83763 159.250963 85.940148 159.250963 85.940148l-1.517037-872.410074zM569.192296 928.426667s-150.262519-120.187259-294.912-117.456593c-136.305778 2.541037-188.453926 37.432889-223.762963 73.197037 1.251556-42.097778-0.644741-723.512889-0.64474-723.512889s52.337778-95.269926 229.072592-102.930963c150.186667-12.781037 279.74163 94.435556 287.706074 114.915556 3.792593 26.775704 2.541037 755.787852 2.541037 755.787852z m586.827852-28.065186c-35.309037-35.764148-129.972148-89.391407-266.277926-91.932444-144.649481-2.730667-258.503111 121.287111-258.503111 121.287111s-1.289481-729.012148 2.503111-755.825778c12.629333-20.404148 111.085037-122.538667 287.744-114.915555 153.144889 6.750815 236.506074 100.617481 236.506074 100.617481s-1.820444 698.974815-1.972148 740.73126z" /></symbol>\n<?xml version="1.0" standalone="no"?><!DOCTYPE symbol PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><symbol id="icon-cup" class="icon" width="200px" height="200.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/symbol"><path fill="#333333" d="M257.613576 557.676606a17.811394 17.811394 0 0 1-5.306182-0.806788l-29.416727-8.998788a18.059636 18.059636 0 0 1-4.468364-2.016969C78.072242 456.921212 10.053818 372.70497 16.259879 295.501576 23.024485 210.944 115.246545 170.790788 119.156364 169.115152a18.214788 18.214788 0 0 1 7.136969-1.458425h17.873455c9.867636 0 17.997576 7.881697 18.369939 17.842425 5.740606 141.28097 110.312727 342.884848 111.336728 344.901818a18.742303 18.742303 0 0 1-2.048 20.48 18.307879 18.307879 0 0 1-14.211879 6.826666zM127.069091 206.506667c-18.307879 9.557333-70.128485 40.92897-74.162424 92.16-4.499394 58.212848 52.844606 128.341333 166.198303 203.465697-30.471758-65.784242-82.354424-190.526061-92.035879-295.625697z m652.443151 344.622545a18.307879 18.307879 0 0 1-13.498181-5.957818 18.742303 18.742303 0 0 1-3.227152-20.355879c0.930909-2.07903 93.835636-209.423515 91.477333-350.797576a18.525091 18.525091 0 0 1 17.34594-18.897454l17.811394-1.024a18.959515 18.959515 0 0 1 7.23006 1.024c4.002909 1.458424 98.33503 36.150303 109.909334 120.180363 10.581333 76.737939-52.503273 164.770909-187.547152 261.709576a18.618182 18.618182 0 0 1-4.313212 2.296243l-28.858182 10.705454a17.935515 17.935515 0 0 1-6.330182 1.117091zM890.88 192.915394c-3.692606 105.472-48.345212 233.006545-75.031273 300.466424 108.885333-81.578667 162.133333-154.903273 154.282667-212.774788-6.888727-50.889697-60.38497-79.189333-79.251394-87.691636z" /><path fill="#333333" d="M511.100121 737.900606c-221.059879 0-400.911515-300.807758-400.911515-670.533818 0-13.312 0.279273-26.499879 0.713697-39.594667a27.741091 27.741091 0 0 1 27.61697-26.934303h745.161697c14.894545 0 27.089455 11.915636 27.585939 26.934303 0.434424 13.094788 0.744727 26.282667 0.744727 39.594667 0 369.726061-179.851636 670.533818-400.911515 670.533818zM165.453576 56.630303l-0.062061 10.736485c0 338.97503 155.089455 614.710303 345.708606 614.710303s345.708606-275.735273 345.708606-614.710303c0-3.599515 0-7.13697-0.06206-10.736485H165.453576z" /><path fill="#333333" d="M579.025455 602.049939a18.649212 18.649212 0 0 1-7.230061-35.684848c122.352485-53.030788 156.082424-206.041212 156.392727-207.561697a18.46303 18.46303 0 0 1 21.845334-14.30497 18.618182 18.618182 0 0 1 14.180848 22.031515c-1.458424 7.043879-37.794909 173.304242-177.958788 233.999516a17.935515 17.935515 0 0 1-7.23006 1.520484z m-67.925334 272.32194c-15.235879 0-27.61697-10.550303-27.616969-23.583031v-145.097696c0-13.032727 12.381091-23.58303 27.616969-23.583031s27.61697 10.550303 27.61697 23.583031v145.097696c0 13.032727-12.381091 23.58303-27.61697 23.583031z" /><path fill="#333333" d="M747.675152 1023.875879H287.961212a27.772121 27.772121 0 0 1-27.61697-27.927273c0-92.966788 113.105455-165.825939 257.458425-165.825939 144.384 0 257.458424 72.859152 257.458424 165.856969a27.772121 27.772121 0 0 1-27.61697 27.896243zM322.466909 968.083394h390.733576c-23.365818-46.669576-103.39297-82.168242-195.366788-82.168242-91.973818 0-172.00097 35.498667-195.366788 82.168242z" /></symbol>\n<?xml version="1.0" standalone="no"?><!DOCTYPE symbol PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><symbol id="icon-heart" class="icon" width="200px" height="187.55px" viewBox="0 0 1092 1024" version="1.1" xmlns="http://www.w3.org/2000/symbol"><path fill="#333333" d="M1090.321067 305.732267c-15.906133-176.64-140.0832-304.810667-295.5264-304.810667-103.5264 0-198.382933 56.081067-251.733334 145.988267C490.1888 55.876267 399.291733 0.9216 297.3696 0.9216 141.9264 0.9216 17.749333 129.092267 1.8432 305.664c-1.262933 7.850667-6.485333 48.878933 9.284267 115.848533 22.596267 96.597333 74.922667 184.388267 151.210666 253.952l380.450134 347.477334 387.037866-347.477334c76.288-69.563733 128.580267-157.354667 151.210667-253.952 15.7696-66.9696 10.581333-108.032 9.284267-115.780266z m-50.176 106.052266c-20.650667 88.2688-68.608 168.618667-138.4448 232.2432L543.061333 966.109867 190.5664 644.096c-69.973333-63.7952-117.896533-144.110933-138.581333-232.3456-14.848-63.351467-8.704-99.157333-8.704-99.328l0.3072-2.1504c13.653333-154.794667 120.354133-267.093333 253.781333-267.093333 98.440533 0 185.105067 60.893867 226.269867 158.856533l19.319466 46.216533 19.319467-46.216533c40.482133-96.4608 131.754667-158.8224 232.516267-158.8224 133.393067 0 240.128 112.298667 254.0544 269.038933 0.068267 0.341333 6.212267 36.181333-8.704 99.498667z" /><path fill="#333333" d="M336.0768 129.467733c-115.848533 0-210.056533 94.8224-210.056533 211.387734 0 11.6736 9.4208 21.162667 21.026133 21.162666 11.605333 0 20.992-9.489067 20.992-21.162666 0-93.2864 75.3664-169.130667 168.0384-169.130667 11.605333 0 20.992-9.454933 20.992-21.128533a21.060267 21.060267 0 0 0-20.992-21.162667z" /></symbol>\n<?xml version="1.0" standalone="no"?><!DOCTYPE symbol PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><symbol id="icon-id" class="icon" width="200px" height="156.34px" viewBox="0 0 1310 1024" version="1.1" xmlns="http://www.w3.org/2000/symbol"><path fill="#333333" d="M370.4832 464.52736c-82.82112 0-150.15936-66.68288-150.15936-148.6848 0-81.92 67.33824-148.60288 150.15936-148.60288 82.78016 0 150.15936 66.68288 150.15936 148.64384 0 81.92-67.3792 148.64384-150.15936 148.64384z m0-245.67808c-54.0672 0-98.01728 43.54048-98.01728 97.03424 0 53.49376 43.95008 97.03424 98.01728 97.03424 54.02624 0 97.97632-43.54048 97.97632-97.0752 0-53.4528-43.95008-96.99328-97.97632-96.99328z m218.27584 410.29632H536.576c0-90.68544-74.5472-164.4544-166.13376-164.4544-91.62752 0-166.13376 73.728-166.13376 164.4544H152.20736c0-119.1936 97.8944-216.10496 218.27584-216.10496 120.34048 0 218.27584 96.95232 218.27584 216.10496z m637.7472 394.15808H84.1728c-45.6704 0-82.86208-36.864-82.86208-82.08384V82.86208C1.31072 37.60128 38.5024 0.77824 84.1728 0.77824h1142.3744c45.6704 0 82.86208 36.864 82.86208 82.08384v858.35776a82.61632 82.61632 0 0 1-82.90304 82.08384zM84.1728 52.4288a30.59712 30.59712 0 0 0-30.72 30.43328v858.35776c0 16.7936 13.80352 30.43328 30.72 30.43328h1142.3744c16.91648 0 30.72-13.68064 30.72-30.43328V82.86208a30.63808 30.63808 0 0 0-30.72-30.43328H84.13184z m643.60448 206.97088h410.29632v51.6096H727.77728v-51.6096z m0 247.07072h410.29632v51.6096H727.77728v-51.6096zM151.01952 742.89152h987.05408v51.6096H151.01952v-51.6096z" /></symbol>\n<?xml version="1.0" standalone="no"?><!DOCTYPE symbol PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><symbol id="icon-phone" class="icon" width="200px" height="200.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/symbol"><path fill="#333333" d="M197.632381 41.178403c37.763833 0 140.877405 98.769335 172.435185 165.174103 7.136961 14.956588 9.464231 27.772088 5.740599 31.123356L330.84531 278.342722c-32.116325 29.23051-49.182971 59.981503-50.765514 91.353101-1.644604 31.55778 12.319015 63.363802 41.363344 94.518189l242.532555 260.002594c30.44069 32.7059 61.657137 48.562365 95.356005 48.562365 31.216447 0 61.688168-13.901559 93.152857-42.573524l44.838734-40.835829c1.17915-1.086059 2.761694-1.489453 4.995872-1.644604 37.794863 0 128.930753 90.949708 155.399569 146.773155 7.447264 15.670284 9.464231 28.423723 5.213085 32.271476l-44.838733 40.773769c-44.869764 40.835829-95.200854 65.256648-149.379698 72.393609a253.548299 253.548299 0 0 1-33.543717 2.203149c-87.319167 0-175.786454-43.28722-249.110971-121.855852L161.358001 512.372984C26.376346 367.647826 21.597685 199.184515 149.101046 83.224413l44.931824-40.835829a5.461327 5.461327 0 0 1 3.009936-1.14812l0.589575-0.062061z m0-41.177162a47.476306 47.476306 0 0 0-32.054264 12.163864L120.801444 52.907844c-143.887341 130.823599-139.977527 326.655604 9.836594 487.299288l324.638637 348.097517c81.392386 87.288137 181.527053 135.198866 279.799903 135.198867 13.063742 0 26.127483-0.837817 39.098135-2.575512 62.929378-8.285081 120.862884-36.21232 172.217973-82.97493l44.838733-40.773769c13.498165-12.225925 25.227606-36.057168 4.344237-80.120145-28.299602-59.485019-128.992813-170.511308-193.163402-170.511309a48.438244 48.438244 0 0 0-33.202384 12.505197l-45.024915 40.990981c-23.055487 20.945429-44.187098 31.650871-64.853255 31.650871-21.535004 0-42.511464-11.605319-64.542952-35.343473l-242.625645-260.002593c-21.224702-22.776215-31.464689-44.46637-30.37863-64.511922 0.992968-20.386884 13.560226-41.580556 37.36044-63.270711l44.869763-40.742739c13.218893-12.008713 24.54494-35.436563 3.816723-78.972025C376.894224 123.687879 263.044181 0.001241 197.663411 0.001241z" /></symbol>\n<?xml version="1.0" standalone="no"?><!DOCTYPE symbol PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><symbol id="icon-work" class="icon" width="200px" height="181.40px" viewBox="0 0 1129 1024" version="1.1" xmlns="http://www.w3.org/2000/symbol"><path fill="#333333" d="M971.74069 178.811586H790.951724v-66.736552c0-62.252138-49.716966-111.192276-112.993103-111.192275h-225.986207c-63.276138 0-112.993103 48.940138-112.993104 111.227586v66.701241H158.190345C70.055724 178.811586 0 247.737379 0 334.494897v533.715862c0 86.757517 70.055724 155.68331 158.190345 155.68331h813.550345c88.134621 0 158.190345-68.925793 158.190344-155.68331V334.494897c0-86.757517-72.315586-155.718621-158.190344-155.718621z m-587.564138-66.736552c0-37.782069 29.378207-66.701241 67.795862-66.701241h225.986207c38.417655 0 67.795862 28.919172 67.795862 66.736552v66.701241H384.176552v-66.736552z m-225.986207 111.227587h813.550345c63.276138 0 112.993103 48.904828 112.993103 111.192276v206.812689L564.965517 748.120276 45.197241 541.307586V334.494897c0-62.287448 49.716966-111.227586 112.993104-111.227587z m813.550345 756.100413H158.190345c-63.276138 0-112.993103-48.904828-112.993104-111.192275v-277.963035L564.965517 797.060414l519.768276-206.81269v277.963035c0 60.027586-51.976828 111.227586-112.993103 111.227586z" /></symbol>\n</svg>');var t=localStorage.getItem("state");t&&(t=JSON.parse(t)),this.$store.commit("initState",t)}},u={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"home"},[s("div",{staticClass:"page"},[s("transition",{attrs:{name:"slideUpDown"}},[this.isVisible?this._e():s("header",{class:{active:1==this.isVisible}},[s("Topbar")],1)]),this._v(" "),s("main",[s("transition",{attrs:{name:"slideLeftRight"}},[this.isVisible?this._e():s("ResumeEditor",{class:{active:1==this.isVisible}})],1),this._v(" "),s("ResumePreview")],1)],1),this._v(" "),1==this.isVisible?s("el-button",{staticClass:"goBack",attrs:{type:"info"},on:{click:this.onBack}},[this._v("返回")]):this._e()],1)},staticRenderFns:[]},m=e("VU/8")(v,u,!1,function(t){e("uqlh")},"data-v-1b790602",null);s.a=m.exports},IcnI:function(t,s,e){"use strict";var i=e("mvHQ"),a=e.n(i),n=e("woOf"),o=e.n(n),r=e("7+uW"),c=e("NYxO"),l=e("SeUI"),d=e.n(l);r.default.use(c.a),s.a=new c.a.Store({state:{isVisible:!1,selected:"profile",user:{username:"",id:""},resume:{config:[{field:"profile",icon:"id"},{field:"experience",icon:"work"},{field:"education",icon:"book"},{field:"projects",icon:"heart"},{field:"awards",icon:"cup"},{field:"contacts",icon:"phone"}],profile:[{Name:"JACK HUNGER",Job:"FRONT-END DEVELOPMENT  ENGINEER",City:"Shanghai China",Projects:"Web前端"}],experience:[{Company:"alibaba in hengzhou zhejiang",Content:"web font-end development fsdf sdfds fds fds fds fds fds fds fds fds fds fdas fds fds fds fds fds fds",Period:"2012~2014",Position:"font-end development"},{Company:"alibaba in hengzhou zhejiang",Content:"web font-end development fsdf sdfds fds fds fds fds fds fds fds fds fds fdas fds fds fds fds fds fds",Period:"2014~2016",Position:"font-end development"},{Company:"alibaba in hengzhou zhejiang",Content:"web font-end development fsdf sdfds fds fds fds fds fds fds fds fds fds fdas fds fds fds fds fds fds",Period:"2016~2017",Position:"font-end development"},{Company:"alibaba in hengzhou zhejiang",Content:"web font-end development fsdf sdfds fds fds fds fds fds fds fds fds fds fdas fds fds fds fds fds fds",Period:"2017~now",Position:"font-end development"}],education:[{Period:"2009~2012",School:"DJIDF JLJFDFF"},{Period:"2006~2009",School:"SDDSI SDSD"}],projects:[{Name:"VUE单页应用",Content:"使用vue写的一个简历的单页应用，可以兼容手机端"},{Name:"原生JS瀑布流懒加载",Content:"使用面向对象写的一个demo，主要突出面向对象的思想"}],awards:[{Name:"SDFJKLD",Content:"SDFDJSF jkl jf fdsf jfdsl fjkd sf",Date:"2013"},{Name:"DFJKSDFJ",Content:"fds fdsa fdafdsafj afjasf jflsa fjkdsa fj",Date:"2015"}],contacts:[{Addr:"FJDKSF fjsdkfSDFKLf fjsdf jfdsjfds",TEl:12345678909,QQ:"2432432",Email:"42141432@qq.com",Web:"www.jirengu.com",Blog:"www.jianshu.com/jack",Github:"www.github.com/jack"}]}},mutations:{setUser:function(t,s){o()(t.user,s)},initState:function(t,s){o()(t,s)},switchTab:function(t,s){t.selected=s,localStorage.setItem("state",a()(t))},updateResume:function(t,s){var e=s.path,i=s.value;d.a.set(t.resume,e,i),localStorage.setItem("state",a()(t))},removeUser:function(t){t.user.id=null,console.log(t.user.id)}}})},MPzD:function(t,s){},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("7+uW"),a=e("zL8q"),n=e.n(a),o=(e("tvR6"),{render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view",{attrs:{name:"Home"}}),this._v(" "),s("router-view",{attrs:{name:"Login"}}),this._v(" "),s("router-view",{attrs:{name:"SignUp"}}),this._v(" "),s("router-view",{attrs:{name:"Layout"}})],1)},staticRenderFns:[]}),r=e("VU/8")({name:"app"},o,!1,function(t){e("YpHa")},"data-v-3088b5c4",null).exports,c=e("IcnI"),l=e("YaEn");i.default.config.productionTip=!1,i.default.use(n.a),new i.default({el:"#app",router:l.a,store:c.a,template:"<App/>",components:{App:r}})},"OaT/":function(t,s){},PRQw:function(t,s){},SxhT:function(t,s,e){"use strict";var i=e("ohTm");s.a=function(t){var s=t||i.a.User.current()||{attributes:{}};return{id:s.id,username:s.attributes.username}}},VvUY:function(t,s){},YaEn:function(t,s,e){"use strict";(function(t){var i=e("7+uW"),a=e("/ocq"),n=e("Cl3J"),o=e("lO7g"),r=e("xJsL"),c=e("ApaE");i.default.use(a.a),s.a=new a.a({mode:"history",base:t,routes:[{path:"/",name:"Home",components:{Home:o.a}},{path:"/login",name:"Login",components:{Login:r.a}},{path:"/signUp",name:"SignUp",components:{SignUp:c.a}},{path:"/Layout",name:"Layout",components:{Layout:n.a}}]})}).call(s,"/")},YpHa:function(t,s){},fQ1b:function(t,s){},hDS5:function(t,s,e){"use strict";var i={202:"用户名已被占用",210:"用户名和密码不匹配",211:"用户名不存在",217:"无效的用户名",219:"超过登录次数限制，20分钟之后再次尝试",unknown:"请求失败，请稍后再试"};s.a=function(t){var s=t.code;return i[s]||i.unknown}},ipfn:function(t,s){},lO7g:function(t,s,e){"use strict";var i=e("YaEn"),a={name:"Home",methods:{signUp:function(){i.a.push("/signUp")},login:function(){i.a.push("/login")}}},n={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"home"}},[s("header",{staticClass:"header"},[s("a",{attrs:{href:"javascript:void(0)"},on:{click:this.login}},[this._v("登录")]),this._v(" "),s("a",{attrs:{href:"javascript:void(0)"},on:{click:this.signUp}},[this._v("注册")])]),this._v(" "),this._m(0)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("main",{staticClass:"main"},[s("div",{staticClass:"main-logo"},[s("div",[s("img",{attrs:{src:e("qgmQ"),alt:"网站logo"}})]),this._v(" "),s("div",[this._v("Resume")])]),this._v(" "),s("div",{staticClass:"content-one"},[this._v("只要几分钟，您就能创建一份出色的简历。")]),this._v(" "),s("div",{staticClass:"content-two"},[this._v("轻松创建专业履历、网上档案和个人主页")]),this._v(" "),s("div",{staticClass:"word"},[this._v("免费制作简历")]),this._v(" "),s("div",{staticClass:"btn"},[this._v("创建自己的Resume")])])}]},o=e("VU/8")(a,n,!1,function(t){e("+Cyo")},"data-v-644249e8",null);s.a=o.exports},ohTm:function(t,s,e){"use strict";var i=e("JnRc"),a=e.n(i);a.a.init({appId:"ALRLVlqlCdTrEnYOTyknP8h9-gzGzoHsz",appKey:"e4VyeLQBhbrV6bJLpsuGhpiJ"}),s.a=a.a},qgmQ:function(t,s){t.exports="data:image/png;base64,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"},tvR6:function(t,s){},uMhA:function(t,s){},uqlh:function(t,s){},xJsL:function(t,s,e){"use strict";var i=e("mvHQ"),a=e.n(i),n=e("YaEn"),o=(e("IcnI"),e("ohTm")),r=e("SxhT"),c=e("hDS5"),l={name:"Login",data:function(){return{formData:{username:"",password:""}}},methods:{login:function(){var t=this;o.a.User.logIn(this.formData.username,this.formData.password).then(function(){t.$store.commit("setUser",Object(r.a)()),n.a.push("Layout"),console.log("登录成功")},function(t){alert(Object(c.a)(JSON.parse(a()(t)).code))})},toSignUp:function(){n.a.push("/signUp")}}},d={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"login"}},[t._m(0),t._v(" "),e("header",{staticClass:"login-header"},[t._v("Resume 登录")]),t._v(" "),e("form",{staticClass:"login-form",on:{submit:function(s){s.preventDefault(),t.login(s)}}},[e("div",{staticClass:"login-info"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.username,expression:"formData.username"}],attrs:{type:"text",placeholder:"用户名"},domProps:{value:t.formData.username},on:{input:function(s){s.target.composing||t.$set(t.formData,"username",s.target.value)}}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.password,expression:"formData.password"}],attrs:{type:"password",placeholder:"密码"},domProps:{value:t.formData.password},on:{input:function(s){s.target.composing||t.$set(t.formData,"password",s.target.value)}}})]),t._v(" "),t._m(1)]),t._v(" "),e("div",{staticClass:"signUp",on:{click:t.toSignUp}},[t._v("注册")]),t._v(" "),t._m(2),t._v(" "),t._m(3)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"login-logo"},[s("img",{attrs:{src:e("qgmQ"),alt:"网站logo"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"login-btn"},[s("input",{attrs:{type:"submit",value:"登录"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"forgetInfo"},[s("div",[this._v("忘记密码了吗？")]),this._v(" "),s("button",[this._v("facebook")]),this._v(" "),s("button",[this._v("google")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("footer",{staticClass:"footer"},[s("p",[this._v("使用RESUME，即表示您同意我们的服务条款")]),this._v(" "),s("p",[s("a",{attrs:{href:"javascript:void(0)"}},[this._v("隐私")]),this._v(" "),s("a",{attrs:{href:"javascript:void(0)"}},[this._v("服务条款")])])])}]},v=e("VU/8")(l,d,!1,function(t){e("PRQw")},"data-v-59f6c5e8",null);s.a=v.exports}},["NHnr"]);
//# sourceMappingURL=app.408cc1c4c8e13ded21ff.js.map