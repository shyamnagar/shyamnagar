(this.webpackJsonpcovid_service=this.webpackJsonpcovid_service||[]).push([[0],{226:function(e,t,a){},347:function(e,t,a){},409:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),i=a.n(c),o=(a(226),a(55)),s=a(59),l=a(457),d=a(469),j=a(458),b=a(460),m=a(466),u=a(467),h=a(468),p=a(419),x=a(38),O=a(472),v=a(459),g=a(12),f=a(30),N=a(461),y=a(462),w=a(463),I=a(464),R=a(465),k=(a(407),a(24)),q=a(201),P=a.n(q),S=a(200),C=a.n(S),A=(a(346),a(347),a(5));var D=function(e){return Object(A.jsx)("div",{className:"error",children:e.children})},T={age:0,city:"",colony:"",dob:null,emailID:"",gender:"",house:"",id:"",idNumber:"",lane:"",location:"Location denied",mobileNumber:"",nagarNigam:"",name:"",sampleMode:"",slot:"",wardNumber:""},M=function(e,t){C.a.post("/bookings",e).then((function(e){return console.log(JSON.parse(e.config.data),e,"=========res")})).catch((function(e){return console.log(e)})),t.resetForm(),alert("Form Submitted")},E=k.c({id:k.d().required("Required"),idNumber:k.d().required("Required").when("id",{is:"aadhar",then:k.d().matches(/^[2-9]{1}[0-9]{3}\s?[0-9]{4}\s?[0-9]{4}$/,"Must be 12 digits"),otherwise:k.d().matches(/^[A-PR-WYa-pr-wy][1-9]\d\s?\d{4}[1-9]$/,"Invalid format")}),name:k.d().required("Required"),slot:k.d().required("Required"),gender:k.d().required("Required"),nagarNigam:k.d().required("Required"),house:k.d().required("Required"),lane:k.d().required("Required"),colony:k.d().required("Required"),city:k.d().required("Required"),sampleMode:k.d().required("Required"),dob:k.a().required("Required").nullable(),emailID:k.d().email("Invalid email format").required("Required"),wardNumber:k.b().positive().integer().min(10).max(999),mobileNumber:k.b().required("Required").test("len","Must be 10 digits",(function(e){return e&&10===e.toString().length}))}),B=[{key:"Home Collection",value:"home"},{key:"Drive-in",value:"drive"}],F=[{key:"Aadhar Card",value:"aadhar"},{key:"Passport",value:"passport"}],V=[{key:"MALE",value:"male"},{key:"FEMALE",value:"female"},{key:"OTHERS",value:"other"}],L=[{key:"Heritage, Jaipur",value:"heritage"},{key:"Greater, Jaipur",value:"greater"}];function G(e){T.location="Latitude: "+e.coords.latitude+"Longitude: "+e.coords.longitude}var H=Object(l.a)((function(e){return{paper:{display:"flex",flexDirection:"column"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},wrap:{padding:"0 16px"}}}));var J=function(){var e=H();return Object(n.useEffect)((function(){navigator.geolocation&&navigator.geolocation.watchPosition(G),document.title="RT-PCR Booking",document.getElementsByTagName("meta").description.content="RT-PCR Test Booking Form"}),[]),Object(A.jsxs)("div",{className:e.paper,children:[Object(A.jsx)("div",{style:{backgroundColor:"#3f51b5",color:"white",textAlign:"center",marginBottom:"1em"},children:Object(A.jsx)("h2",{children:"Please fill all the details"})}),Object(A.jsx)("div",{className:e.wrap,children:Object(A.jsx)(g.d,{className:e.form,initialValues:T,validationSchema:E,onSubmit:M,children:function(e){return Object(A.jsxs)(g.c,{children:[Object(A.jsxs)("div",{className:"form-control",children:[Object(A.jsx)("label",{className:"label",children:"Mode of Sample Collection:"}),Object(A.jsx)(g.b,{name:"sampleMode",children:function(e){var t=e.field;return B.map((function(e){return Object(A.jsxs)("label",{className:"Radio",children:[Object(A.jsx)("input",Object(x.a)(Object(x.a)({className:"Radio-Input",type:"radio",id:e.value},t),{},{value:e.value,checked:t.value===e.value})),e.key]},e.value)}))}}),Object(A.jsx)("div",{className:"error",children:e.values.age<65&&"home"===e.values.sampleMode?e.errors.sampleMode="Must be 65 years or above":""}),Object(A.jsx)(g.a,{component:D,name:"sampleMode"})]}),Object(A.jsxs)("div",{className:"form-control",children:[Object(A.jsx)("label",{className:"label",children:"Slot Availability:"}),"Available for the next day-",Object(A.jsxs)(g.b,{component:f.a,name:"slot",inputProps:{id:"slot"},children:[Object(A.jsx)(O.a,{value:"",children:"Pick a Slot"}),Object(A.jsx)(O.a,{value:"10-10.3",children:"10:00 - 10:30"}),Object(A.jsx)(O.a,{value:"12-12.3",children:"12:00 - 12:30"}),Object(A.jsx)(O.a,{value:"13-13.3",children:"13:00 - 13:30"}),Object(A.jsx)(O.a,{value:"14-14.3",children:"14:00 - 14:30"}),Object(A.jsx)(O.a,{value:"15-15.3",children:"15:00 - 15:30"})]}),Object(A.jsx)(g.a,{component:D,name:"slot"})]}),Object(A.jsxs)("div",{className:"form-control",children:[Object(A.jsx)("label",{className:"label",children:"ID Proof:"}),Object(A.jsx)(g.b,{component:f.b,name:"id",children:function(e){var t=e.field;return F.map((function(e){return Object(A.jsxs)("label",{className:"Radio",children:[Object(A.jsx)("input",Object(x.a)(Object(x.a)({className:"Radio-Input",type:"radio",id:e.value},t),{},{value:e.value,checked:t.value===e.value})),e.key]},e.value)}))}}),Object(A.jsx)(g.a,{component:D,name:"id"})]}),Object(A.jsx)("div",{className:"form-control rest",children:Object(A.jsx)(g.b,{component:f.b,InputProps:{startAdornment:Object(A.jsx)(v.a,{position:"start",children:Object(A.jsx)(N.a,{color:"primary"})})},variant:"outlined",label:"ID Proof Number",name:"idNumber"})}),Object(A.jsx)("div",{className:"form-control",children:Object(A.jsx)(g.b,{component:f.b,InputProps:{startAdornment:Object(A.jsx)(v.a,{position:"start",children:Object(A.jsx)(y.a,{color:"primary"})})},variant:"outlined",label:"Name",name:"name"})}),Object(A.jsxs)("div",{className:"form-control",children:[Object(A.jsx)(g.b,{name:"dob",children:function(e){var t=e.field,a=e.form;return Object(A.jsx)(P.a,Object(x.a)(Object(x.a)({className:"date rest",placeholderText:"Date of Birth",maxDate:new Date,showYearDropdown:!0,dropdownMode:"select"},t),{},{selected:t.value,onChange:function(e){a.setFieldValue("dob",e),a.setFieldValue("age",~~((Date.now()-+e)/315576e5))}}))}}),Object(A.jsx)(g.a,{component:D,name:"dob"})]}),Object(A.jsxs)("div",{className:"form-control",children:[Object(A.jsx)("label",{className:"label",children:"Gender:"}),Object(A.jsx)(g.b,{component:f.b,name:"gender",children:function(e){var t=e.field;return V.map((function(e){return Object(A.jsxs)("label",{className:"Radio",children:[Object(A.jsx)("input",Object(x.a)(Object(x.a)({className:"Radio-Input",type:"radio",id:e.value},t),{},{value:e.value,checked:t.value===e.value})),e.key]},e.value)}))}}),Object(A.jsx)(g.a,{component:D,name:"gender"})]}),Object(A.jsx)("div",{className:"form-control",children:Object(A.jsx)(g.b,{className:"num",component:f.b,variant:"outlined",label:"Mobile Number",InputProps:{startAdornment:Object(A.jsxs)(v.a,{position:"start",children:[Object(A.jsx)(w.a,{color:"primary"}),"+91"]})},type:"number",id:"mobileNumber",name:"mobileNumber"})}),Object(A.jsx)("div",{className:"form-control",children:Object(A.jsx)(g.b,{component:f.b,InputProps:{startAdornment:Object(A.jsx)(v.a,{position:"start",children:Object(A.jsx)(I.a,{color:"primary"})})},label:"Email ID",type:"email",variant:"outlined",name:"emailID"})}),Object(A.jsxs)("div",{className:"form-control",children:[Object(A.jsx)("label",{className:"label",children:"Address:"}),Object(A.jsx)(g.b,{component:f.b,InputProps:{startAdornment:Object(A.jsx)(v.a,{position:"start",children:Object(A.jsx)(R.a,{color:"primary"})})},variant:"outlined",placeholder:"House Number",name:"house"}),Object(A.jsx)(g.b,{component:f.b,InputProps:{startAdornment:Object(A.jsx)(v.a,{position:"start",children:Object(A.jsx)(R.a,{color:"primary"})})},variant:"outlined",placeholder:"Lane",name:"lane"}),Object(A.jsx)(g.b,{component:f.b,InputProps:{startAdornment:Object(A.jsx)(v.a,{position:"start",children:Object(A.jsx)(R.a,{color:"primary"})})},variant:"outlined",placeholder:"Colony",name:"colony"}),Object(A.jsx)(g.b,{component:f.b,InputProps:{startAdornment:Object(A.jsx)(v.a,{position:"start",children:Object(A.jsx)(R.a,{color:"primary"})})},variant:"outlined",placeholder:"City with PIN Code",name:"city"})]}),Object(A.jsx)("div",{className:"form-control",children:Object(A.jsx)(g.b,{className:"rest",component:f.b,label:"Ward Number",variant:"outlined",type:"number",id:"wardNumber",name:"wardNumber"})}),Object(A.jsxs)("div",{className:"form-control",children:[Object(A.jsx)("label",{className:"label",children:"Nagar Nigam:"}),Object(A.jsx)(g.b,{component:f.b,name:"nagarNigam",children:function(e){var t=e.field;return L.map((function(e){return Object(A.jsxs)("label",{className:"Radio",children:[Object(A.jsx)("input",Object(x.a)(Object(x.a)({className:"Radio-Input",type:"radio",id:e.value},t),{},{value:e.value,checked:t.value===e.value})),e.key]},e.value)}))}}),Object(A.jsx)(g.a,{component:D,name:"nagarNigam"})]}),Object(A.jsxs)(b.a,{style:{margin:"1em 0"},container:!0,justify:"center",children:[Object(A.jsx)(j.a,{style:{margin:"0 1em"},type:"submit",variant:"contained",color:"primary",disabled:!e.isValid,children:"Submit"}),Object(A.jsx)(o.b,{to:"/",style:{textDecoration:"none"},children:Object(A.jsx)(j.a,{variant:"contained",color:"primary",children:"Go Back"})})]})]})}})})]})},W=Object(l.a)({root:{maxWidth:345},media:{height:140},heading:{color:"white",fontSize:"2em",textAlign:"center"}});var _=function(){var e=W(),t=Object(n.useState)(!0),a=Object(s.a)(t,2),r=a[0],c=a[1],i=Object(n.useState)(!0),l=Object(s.a)(i,2),x=l[0];return l[1],Object(A.jsxs)(A.Fragment,{children:[Object(A.jsxs)("div",{style:{backgroundColor:"darkBlue"},children:[Object(A.jsx)(d.a,{color:"white",display:"flex",flexDirection:"row-reverse",children:Object(A.jsx)(j.a,{style:{margin:"1em 2em 0 0"},variant:"contained",onClick:function(){c(!r)},children:x?"Dashboard":"Log In"})}),Object(A.jsxs)("div",{style:{alignItems:"center",flexDirection:"column",alignContent:"space-between",height:"65vh",display:"flex",justifyContent:"center",width:"100vw"},children:[Object(A.jsx)("h1",{className:e.heading,children:"SHYAM NAGAR VIKAS SAMITI COVID HELP SERVICES"}),Object(A.jsxs)("h4",{style:{color:"white",textAlign:"center",padding:"0 16px"},children:["Shyam Nagar Vikas Samiti is a 34yrs old registered society with 2000+ registered members & provisionally registered for 80G exemption with Income Tax Department. For more details pl. connect with",Object(A.jsx)("br",{}),Object(A.jsx)("i",{children:"President: Er. Pradeip Gugalia - +91-9530147007"})]}),Object(A.jsx)(o.b,{to:"/booking",style:{textDecoration:"none"},children:Object(A.jsx)(j.a,{variant:"contained",children:"BOOK NOW"})})]})]}),Object(A.jsxs)("div",{style:{padding:"2em"},children:[Object(A.jsx)("h3",{children:"Services offered like:"}),Object(A.jsxs)(b.a,{container:!0,spacing:3,children:[Object(A.jsx)(b.a,{item:!0,xs:12,sm:4,children:Object(A.jsx)(o.b,{to:"/booking",style:{textDecoration:"none"},children:Object(A.jsxs)(m.a,{className:e.root,children:[Object(A.jsx)(u.a,{className:e.media,image:"https://images.cnbctv18.com/wp-content/uploads/2021/02/COVID19test_swab-768x432.jpg",title:"RT-PCR TEST"}),Object(A.jsx)(h.a,{children:Object(A.jsx)(p.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"RT-PCR TEST"})})]})})}),Object(A.jsx)(b.a,{item:!0,xs:12,sm:4,children:Object(A.jsxs)(m.a,{className:e.root,children:[Object(A.jsx)(u.a,{className:e.media,image:"https://wwwassets.rand.org/content/rand/blog/2020/08/its-going-to-be-the-vaccination-stupid/jcr:content/par/blogpost.aspectcrop.868x455.lt.jpg/x1598055738172.jpg.pagespeed.ic.WPm0htSOxE.jpg",title:"Vaccination"}),Object(A.jsx)(h.a,{children:Object(A.jsx)(p.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"VACCINATION"})})]})}),Object(A.jsx)(b.a,{item:!0,xs:12,sm:4,children:Object(A.jsxs)(m.a,{className:e.root,children:[Object(A.jsx)(u.a,{className:e.media,image:"https://www.sheppardhealthlaw.com/wp-content/uploads/sites/25/2020/11/Global-Trade-Blog-Image_Covid-2-660x283-1.png",title:"Others"}),Object(A.jsx)(h.a,{children:Object(A.jsx)(p.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"OTHERS"})})]})})]})]})]})},Y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,475)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),c(e),i(e)}))},K=a(21);var $=function(){return Object(A.jsxs)(K.c,{children:[Object(A.jsx)(K.a,{component:_,exact:!0,path:"/"}),Object(A.jsx)(K.a,{component:J,path:"/booking"})]})};i.a.render(Object(A.jsx)(r.a.StrictMode,{children:Object(A.jsx)(o.a,{children:Object(A.jsx)($,{})})}),document.getElementById("root")),Y()}},[[409,1,2]]]);
//# sourceMappingURL=main.f4401add.chunk.js.map