!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("paperduck")):"function"==typeof define&&define.amd?define(["paperduck"],t):e.VuetifyImageInput=t(e.PaperDuck)}(this,function(i){"use strict";i=i&&i.hasOwnProperty("default")?i.default:i;function a(){}var e={name:"VImageInput",props:{value:String,imageWidth:{type:Number,default:256},imageHeight:{type:Number,default:256},imageFormat:{type:String,default:"png"},encoderOptions:{},minImageWidth:{type:Number,default:0},maxImageWidth:{type:Number,default:1/0},minImageHeight:{type:Number,default:0},maxImageHeight:{type:Number,default:1/0},clearable:{type:Boolean,default:!1},croppable:{type:Boolean,default:!1},movable:{type:Boolean,default:!1},flippable:{type:Boolean,default:!1},rotatable:{type:Boolean,default:!1},zoomable:{type:Boolean,default:!1}},data:function(){return{lazyImage:void 0}},computed:{image:{get:function(){return this.lazyImage},set:function(e){this.lazyImage=e,this.$emit("input",this.internalValue)}},internalValue:function(){return this.image?this.image.toDataURL("image/"+this.imageFormat,this.encoderOptions):null}},watch:{value:{handler:function(e){this.internalValue!==e&&(this.lazyImage=i.from(e))},immediate:!0}},methods:{clear:function(){this.image=null},flipHorizontally:function(){this.image=this.image.flop()},flipVertically:function(){this.image=this.image.flip()},rotateClockwise:function(){this.image=this.image.rotate90()},rotateCounterclockwise:function(){this.image=this.image.rotate270()},upload:function(){var t=this,e=document.createElement("input");e.type="file",e.addEventListener("change",function(){i.load(e).then(function(e){t.image=e.scaleMin(t.imageWidth,t.imageHeight)}).catch(a)}),e.click()}},render:function(e){var t=this,i=t.clearable,a=t.flippable,o=t.image,n=t.imageHeight,l=t.imageWidth,r=t.rotatable;if(o){var p=e("img",{attrs:{src:o.toDataURL()}}),c=[];if(i){var s=e("v-icon","clear"),u=e("v-btn",{props:{flat:!0,icon:!0},on:{click:this.clear}},[s]),f=e("v-spacer");c.push(u,f)}if(a){var d=e("v-icon",{style:{transform:"rotate(180deg)"}},"flip"),m=e("v-tooltip",{props:{right:!0}},[e("v-btn",{slot:"activator",props:{flat:!0,icon:!0},on:{click:this.flipHorizontally}},[d]),e("span","flip horizontally")]),g=e("v-icon",{style:{transform:"rotate(90deg)"}},"flip"),h=e("v-tooltip",{props:{right:!0}},[e("v-btn",{slot:"activator",props:{flat:!0,icon:!0},on:{click:this.flipVertically}},[g]),e("span","flip vertically")]);c.push(m,h)}if(r){var y=e("v-icon",{style:{transform:"rotate(180deg)"}},"rotate_90_degrees_ccw"),v=e("v-tooltip",{props:{right:!0}},[e("v-btn",{slot:"activator",props:{flat:!0,icon:!0},on:{click:this.rotateClockwise}},[y]),e("span","rotate clockwise")]),b=e("v-icon","rotate_90_degrees_ccw"),w=e("v-tooltip",{props:{right:!0}},[e("v-btn",{slot:"activator",props:{flat:!0,icon:!0},on:{click:this.rotateCounterclockwise}},[b]),e("span","rotate counterclockwise")]);c.push(v,w)}if(0<c.length){var k=e("div",{style:{display:"flex",flexDirection:"column",flexWrap:"wrap",justifyContent:"center",alignItems:"center"}},c);return e("div",{style:{display:"table"}},[e("div",{style:{display:"flex"}},[e("div",{style:{width:l+"px",height:n+"px",backgroundColor:"#000000",display:"flex",justifyContent:"center",alignItems:"center"}},[p]),k])])}return p}var x=e("v-icon","cloud_upload");return e("div",{style:{width:l+"px",height:n+"px",border:"1px dashed #bdbdbd",borderRadius:"8px",backgroundColor:"#eeeeee",display:"flex",justifyContent:"center",alignItems:"center"}},[e("v-btn",{props:{color:"primary",fab:!0,large:!0},on:{click:this.upload}},[x])])}};return"undefined"!=typeof window&&window.Vue&&window.Vue.component(e.name,e),e});
