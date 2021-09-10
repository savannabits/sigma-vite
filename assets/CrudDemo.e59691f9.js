var e=Object.defineProperty,t=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,a=(t,l,o)=>l in t?e(t,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[l]=o;"undefined"!=typeof require&&require;import{P as s}from"./index.ca7b570d.js";import{aT as i,aU as d,r,c,a as u,b as n,w as p,o as m,k as b,t as g,n as y,g as h}from"./vendor.c27ef1ee.js";const f={data:()=>({products:null,productDialog:!1,deleteProductDialog:!1,deleteProductsDialog:!1,product:{},selectedProducts:null,filters:{},submitted:!1,statuses:[{label:"INSTOCK",value:"instock"},{label:"LOWSTOCK",value:"lowstock"},{label:"OUTOFSTOCK",value:"outofstock"}]}),productService:null,created(){this.productService=new s},mounted(){this.productService.getProducts().then((e=>this.products=e))},methods:{formatCurrency(e){if(e)return e.toLocaleString("en-US",{style:"currency",currency:"USD"})},openNew(){this.product={},this.submitted=!1,this.productDialog=!0},hideDialog(){this.productDialog=!1,this.submitted=!1},saveProduct(){this.submitted=!0,this.product.name.trim()&&(this.product.id?(this.product.inventoryStatus=this.product.inventoryStatus.value?this.product.inventoryStatus.value:this.product.inventoryStatus,this.products[this.findIndexById(this.product.id)]=this.product,this.$toast.add({severity:"success",summary:"Successful",detail:"Product Updated",life:3e3})):(this.product.id=this.createId(),this.product.code=this.createId(),this.product.image="product-placeholder.svg",this.product.inventoryStatus=this.product.inventoryStatus?this.product.inventoryStatus.value:"INSTOCK",this.products.push(this.product),this.$toast.add({severity:"success",summary:"Successful",detail:"Product Created",life:3e3})),this.productDialog=!1,this.product={})},editProduct(e){this.product=((e,s)=>{for(var i in s||(s={}))l.call(s,i)&&a(e,i,s[i]);if(t)for(var i of t(s))o.call(s,i)&&a(e,i,s[i]);return e})({},e),this.productDialog=!0},confirmDeleteProduct(e){this.product=e,this.deleteProductDialog=!0},deleteProduct(){this.products=this.products.filter((e=>e.id!==this.product.id)),this.deleteProductDialog=!1,this.product={},this.$toast.add({severity:"success",summary:"Successful",detail:"Product Deleted",life:3e3})},findIndexById(e){let t=-1;for(let l=0;l<this.products.length;l++)if(this.products[l].id===e){t=l;break}return t},createId(){let e="";for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",l=0;l<5;l++)e+=t.charAt(Math.floor(Math.random()*t.length));return e},exportCSV(){this.$refs.dt.exportCSV()},confirmDeleteSelected(){this.deleteProductsDialog=!0},deleteSelectedProducts(){this.products=this.products.filter((e=>!this.selectedProducts.includes(e))),this.deleteProductsDialog=!1,this.selectedProducts=null,this.$toast.add({severity:"success",summary:"Successful",detail:"Products Deleted",life:3e3})}}};i("data-v-7b600734");const v={class:"grid crud-demo"},P={class:"col-12"},S={class:"card"},C={class:"my-2"},k={class:"flex flex-column md:flex-row md:justify-content-between md:align-items-center"},D=u("h5",{class:"m-0"},"Manage Products",-1),V={class:"block mt-2 md:mt-0 p-input-icon-left"},w=u("i",{class:"pi pi-search"},null,-1),x=u("span",{class:"p-column-title"},"Code",-1),U=u("span",{class:"p-column-title"},"Name",-1),I=u("span",{class:"p-column-title"},"Image",-1),_=["src","alt"],O=u("span",{class:"p-column-title"},"Price",-1),L=u("span",{class:"p-column-title"},"Category",-1),N=u("span",{class:"p-column-title"},"Rating",-1),T=u("span",{class:"p-column-title"},"Status",-1),j=["src","alt"],q={class:"field"},R=u("label",{for:"name"},"Name",-1),F={key:0,class:"p-invalid"},A={class:"field"},K=u("label",{for:"description"},"Description",-1),M={class:"field"},B=u("label",{for:"inventoryStatus",class:"mb-3"},"Inventory Status",-1),E={key:0},$={key:1},z={key:2},Y={class:"field"},Q=u("label",{class:"mb-3"},"Category",-1),W={class:"formgrid grid"},G={class:"field-radiobutton col-6"},H=u("label",{for:"category1"},"Accessories",-1),J={class:"field-radiobutton col-6"},X=u("label",{for:"category2"},"Clothing",-1),Z={class:"field-radiobutton col-6"},ee=u("label",{for:"category3"},"Electronics",-1),te={class:"field-radiobutton col-6"},le=u("label",{for:"category4"},"Fitness",-1),oe={class:"formgrid grid"},ae={class:"field col"},se=u("label",{for:"price"},"Price",-1),ie={class:"field col"},de=u("label",{for:"quantity"},"Quantity",-1),re={class:"flex align-items-center justify-content-center"},ce=u("i",{class:"pi pi-exclamation-triangle mr-3",style:{"font-size":"2rem"}},null,-1),ue={key:0},ne=b("Are you sure you want to delete "),pe=b("?"),me={class:"flex align-items-center justify-content-center"},be=u("i",{class:"pi pi-exclamation-triangle mr-3",style:{"font-size":"2rem"}},null,-1),ge={key:0};d(),f.render=function(e,t,l,o,a,s){const i=r("Toast"),d=r("Button"),f=r("FileUpload"),ye=r("Toolbar"),he=r("InputText"),fe=r("Column"),ve=r("Rating"),Pe=r("DataTable"),Se=r("Textarea"),Ce=r("Dropdown"),ke=r("RadioButton"),De=r("InputNumber"),Ve=r("Dialog");return m(),c("div",v,[u("div",P,[u("div",S,[n(i),n(ye,{class:"mb-4"},{left:p((()=>[u("div",C,[n(d,{label:"New",icon:"pi pi-plus",class:"p-button-success mr-2",onClick:s.openNew},null,8,["onClick"]),n(d,{label:"Delete",icon:"pi pi-trash",class:"p-button-danger",onClick:s.confirmDeleteSelected,disabled:!a.selectedProducts||!a.selectedProducts.length},null,8,["onClick","disabled"])])])),right:p((()=>[n(f,{mode:"basic",accept:"image/*",maxFileSize:1e6,label:"Import",chooseLabel:"Import",class:"mr-2 inline-block"}),n(d,{label:"Export",icon:"pi pi-upload",class:"p-button-help",onClick:t[0]||(t[0]=e=>s.exportCSV(e))})])),_:1}),n(Pe,{ref:"dt",value:a.products,selection:a.selectedProducts,"onUpdate:selection":t[2]||(t[2]=e=>a.selectedProducts=e),dataKey:"id",paginator:!0,rows:10,filters:a.filters,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[5,10,25],currentPageReportTemplate:"Showing {first} to {last} of {totalRecords} products",responsiveLayout:"scroll"},{header:p((()=>[u("div",k,[D,u("span",V,[w,n(he,{modelValue:a.filters.global,"onUpdate:modelValue":t[1]||(t[1]=e=>a.filters.global=e),placeholder:"Search..."},null,8,["modelValue"])])])])),default:p((()=>[n(fe,{selectionMode:"multiple",headerStyle:"width: 3rem"}),n(fe,{field:"code",header:"Code",sortable:!0},{body:p((e=>[x,b(" "+g(e.data.code),1)])),_:1}),n(fe,{field:"name",header:"Name",sortable:!0},{body:p((e=>[U,b(" "+g(e.data.name),1)])),_:1}),n(fe,{header:"Image"},{body:p((e=>[I,u("img",{src:"assets/layout/images/product/"+e.data.image,alt:e.data.image,class:"shadow-2",width:"100"},null,8,_)])),_:1}),n(fe,{field:"price",header:"Price",sortable:!0},{body:p((e=>[O,b(" "+g(s.formatCurrency(e.data.price)),1)])),_:1}),n(fe,{field:"category",header:"Category",sortable:!0},{body:p((e=>[L,b(" "+g(s.formatCurrency(e.data.category)),1)])),_:1}),n(fe,{field:"rating",header:"Reviews",sortable:!0},{body:p((e=>[N,n(ve,{modelValue:e.data.rating,readonly:!0,cancel:!1},null,8,["modelValue"])])),_:1}),n(fe,{field:"inventoryStatus",header:"Status",sortable:!0},{body:p((e=>[T,u("span",{class:y("product-badge status-"+(e.data.inventoryStatus?e.data.inventoryStatus.toLowerCase():""))},g(e.data.inventoryStatus),3)])),_:1}),n(fe,null,{body:p((e=>[n(d,{icon:"pi pi-pencil",class:"p-button-rounded p-button-success mr-2",onClick:t=>s.editProduct(e.data)},null,8,["onClick"]),n(d,{icon:"pi pi-trash",class:"p-button-rounded p-button-warning",onClick:t=>s.confirmDeleteProduct(e.data)},null,8,["onClick"])])),_:1})])),_:1},8,["value","selection","filters"]),n(Ve,{visible:a.productDialog,"onUpdate:visible":t[12]||(t[12]=e=>a.productDialog=e),style:{width:"450px"},header:"Product Details",modal:!0,class:"p-fluid"},{footer:p((()=>[n(d,{label:"Cancel",icon:"pi pi-times",class:"p-button-text",onClick:s.hideDialog},null,8,["onClick"]),n(d,{label:"Save",icon:"pi pi-check",class:"p-button-text",onClick:s.saveProduct},null,8,["onClick"])])),default:p((()=>[a.product.image?(m(),c("img",{key:0,src:"assets/layout/images/product/"+a.product.image,alt:a.product.image,width:"150",class:"mt-0 mx-auto mb-5 block shadow-2"},null,8,j)):h("",!0),u("div",q,[R,n(he,{id:"name",modelValue:a.product.name,"onUpdate:modelValue":t[3]||(t[3]=e=>a.product.name=e),modelModifiers:{trim:!0},required:"true",autofocus:"",class:y({"p-invalid":a.submitted&&!a.product.name})},null,8,["modelValue","class"]),a.submitted&&!a.product.name?(m(),c("small",F,"Name is required.")):h("",!0)]),u("div",A,[K,n(Se,{id:"description",modelValue:a.product.description,"onUpdate:modelValue":t[4]||(t[4]=e=>a.product.description=e),required:"true",rows:"3",cols:"20"},null,8,["modelValue"])]),u("div",M,[B,n(Ce,{id:"inventoryStatus",modelValue:a.product.inventoryStatus,"onUpdate:modelValue":t[5]||(t[5]=e=>a.product.inventoryStatus=e),options:a.statuses,optionLabel:"label",placeholder:"Select a Status"},{value:p((e=>[e.value&&e.value.value?(m(),c("div",E,[u("span",{class:y("product-badge status-"+e.value.value)},g(e.value.label),3)])):e.value&&!e.value.value?(m(),c("div",$,[u("span",{class:y("product-badge status-"+e.value.toLowerCase())},g(e.value),3)])):(m(),c("span",z,g(e.placeholder),1))])),_:1},8,["modelValue","options"])]),u("div",Y,[Q,u("div",W,[u("div",G,[n(ke,{id:"category1",name:"category",value:"Accessories",modelValue:a.product.category,"onUpdate:modelValue":t[6]||(t[6]=e=>a.product.category=e)},null,8,["modelValue"]),H]),u("div",J,[n(ke,{id:"category2",name:"category",value:"Clothing",modelValue:a.product.category,"onUpdate:modelValue":t[7]||(t[7]=e=>a.product.category=e)},null,8,["modelValue"]),X]),u("div",Z,[n(ke,{id:"category3",name:"category",value:"Electronics",modelValue:a.product.category,"onUpdate:modelValue":t[8]||(t[8]=e=>a.product.category=e)},null,8,["modelValue"]),ee]),u("div",te,[n(ke,{id:"category4",name:"category",value:"Fitness",modelValue:a.product.category,"onUpdate:modelValue":t[9]||(t[9]=e=>a.product.category=e)},null,8,["modelValue"]),le])])]),u("div",oe,[u("div",ae,[se,n(De,{id:"price",modelValue:a.product.price,"onUpdate:modelValue":t[10]||(t[10]=e=>a.product.price=e),mode:"currency",currency:"USD",locale:"en-US"},null,8,["modelValue"])]),u("div",ie,[de,n(De,{id:"quantity",modelValue:a.product.quantity,"onUpdate:modelValue":t[11]||(t[11]=e=>a.product.quantity=e),integeronly:""},null,8,["modelValue"])])])])),_:1},8,["visible"]),n(Ve,{visible:a.deleteProductDialog,"onUpdate:visible":t[14]||(t[14]=e=>a.deleteProductDialog=e),style:{width:"450px"},header:"Confirm",modal:!0},{footer:p((()=>[n(d,{label:"No",icon:"pi pi-times",class:"p-button-text",onClick:t[13]||(t[13]=e=>a.deleteProductDialog=!1)}),n(d,{label:"Yes",icon:"pi pi-check",class:"p-button-text",onClick:s.deleteProduct},null,8,["onClick"])])),default:p((()=>[u("div",re,[ce,a.product?(m(),c("span",ue,[ne,u("b",null,g(a.product.name),1),pe])):h("",!0)])])),_:1},8,["visible"]),n(Ve,{visible:a.deleteProductsDialog,"onUpdate:visible":t[16]||(t[16]=e=>a.deleteProductsDialog=e),style:{width:"450px"},header:"Confirm",modal:!0},{footer:p((()=>[n(d,{label:"No",icon:"pi pi-times",class:"p-button-text",onClick:t[15]||(t[15]=e=>a.deleteProductsDialog=!1)}),n(d,{label:"Yes",icon:"pi pi-check",class:"p-button-text",onClick:s.deleteSelectedProducts},null,8,["onClick"])])),default:p((()=>[u("div",me,[be,a.product?(m(),c("span",ge,"Are you sure you want to delete the selected products?")):h("",!0)])])),_:1},8,["visible"])])])])},f.__scopeId="data-v-7b600734";export{f as default};
