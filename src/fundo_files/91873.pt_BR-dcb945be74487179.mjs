"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[91873],{17314:(e,t,r)=>{r.d(t,{Z:()=>s});var o,a,n=r(813653),i=r(861470),l=0,d=0;let s=function(e,t,r){var s=t&&r||0,c=t||Array(16),u=(e=e||{}).node||o,m=void 0!==e.clockseq?e.clockseq:a;if(null==u||null==m){var _=e.random||(e.rng||n.Z)();null==u&&(u=o=[1|_[0],_[1],_[2],_[3],_[4],_[5]]),null==m&&(m=a=(_[6]<<8|_[7])&16383)}var g=void 0!==e.msecs?e.msecs:Date.now(),E=void 0!==e.nsecs?e.nsecs:d+1,p=g-l+(E-d)/1e4;if(p<0&&void 0===e.clockseq&&(m=m+1&16383),(p<0||g>l)&&void 0===e.nsecs&&(E=0),E>=1e4)throw Error("uuid.v1(): Can't create more than 10M uuids/sec");l=g,d=E,a=m;var T=((268435455&(g+=122192928e5))*1e4+E)%4294967296;c[s++]=T>>>24&255,c[s++]=T>>>16&255,c[s++]=T>>>8&255,c[s++]=255&T;var f=g/4294967296*1e4&268435455;c[s++]=f>>>8&255,c[s++]=255&f,c[s++]=f>>>24&15|16,c[s++]=f>>>16&255,c[s++]=m>>>8|128,c[s++]=255&m;for(var y=0;y<6;++y)c[s+y]=u[y];return t||(0,i.Z)(c)}},901855:(e,t,r)=>{r.d(t,{Hv:()=>d,aX:()=>u,nK:()=>m});var o=r(667294),a=r(616550),n=r(342513),i=r(785893);let{Provider:l,useHook:d}=(0,n.Z)("HistoryStackContext",{previous:[],current:null,forward:[]}),s=e=>e&&e.pathname?e.pathname+(e.search||""):"";function c(e,t){let r={action:t.type,location:t.location,match:t.match};if(t.location===e.current?.location)return e;switch(t.type){case"POP":if(e.forward.length>0&&s(e.forward[0].location)===s(r.location))return{...e,forward:e.forward.slice(1),current:{...e.forward[0],action:t.type},previous:e.current?[...e.previous,{action:e.current.action,location:e.current.location,match:e.current.match}]:e.previous};return{...e,forward:e.current?[{action:e.current.action,location:e.current.location,match:e.current.match},...e.forward]:e.forward,current:{...e.previous.slice(-1)[0],action:t.type},previous:e.previous.slice(0,-1)};case"PUSH":return{...e,forward:e.forward.length>0?[]:e.forward,current:r,previous:e.current?[...e.previous,{action:e.current.action,location:e.current.location,match:e.current.match}]:e.previous};case"REPLACE":return{...e,current:r};default:return e}}function u(){let{current:e,previous:t}=d();return(0,o.useMemo)(()=>e?t.concat(e):t,[e,t])}function m({children:e}){let t=(0,a.k6)(),r=(0,a.TH)(),n=(0,a.$B)(),d={forward:[],current:{action:t.action,location:r,match:n},previous:[]},[s,u]=(0,o.useReducer)(c,d);return(0,o.useEffect)(()=>{let{action:e}=t;u({type:e,location:r,match:n})},[r]),(0,i.jsx)(l,{value:s,children:e})}},847160:(e,t,r)=>{r.d(t,{Bx:()=>a,N4:()=>i,is:()=>l,lt:()=>o,oM:()=>n});let o=e=>e.bt("Você está quase lá! Entre para acessar todos os recursos do Pinterest", "You're almost there! Log in to access all of Pinterest", "loginModal.limitedLogin.subheader", undefined, true),a=e=>e.bt("Faça login para salvar esse Pin", "Log in to save this Pin", "limitedLogin.modalHeader.repin", undefined, true),n=e=>e.bt("Faça login para editar este Pin", "Log in to edit this Pin", "limitedLogin.modalHeader.editPin", undefined, true),i=({i18n:e,toFollow:t})=>t?e.bt("Faça login para seguir", "Log in to follow", "limitedLogin.modalHeader.follow", undefined, true):e.bt("Faça login para deixar de seguir", "Log in to unfollow", "limitedLogin.modalHeader.unfollow", undefined, true),l=e=>e.bt("Faça login para criar um Pin ou uma pasta", "Log in to create a Pin or board", "limitedLogin.modalHeader.create", undefined, true)},515278:(e,t,r)=>{r.d(t,{Z:()=>i});var o=r(847160),a=r(140017),n=r(166770);let i=()=>{let{loginForMore:e,viewer:t,limitedLoginModalSubheader:r}=(0,n.H)(),i=(0,a.ZP)();return"AUTH"===t.type?null:t=>{e?.setVisible(!0),r?.setText(t?.loginModalHeader||o.lt(i))}}},503325:(e,t,r)=>{r.d(t,{Z:()=>l});var o=r(172045),a=r(17314);function n(e,t,r){var o;return(t="symbol"==typeof(o=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=typeof o)return o;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?o:String(o))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}let i="undefined"!=typeof window&&window.performance&&window.performance.now?()=>Math.floor(1e6*window.performance.now()):()=>1e6*Date.now(),l=class{constructor(e){n(this,"start",()=>(this.startTime=i(),this.startTime)),n(this,"end",()=>(this.endTime=i(),this.duration=this.startTime?this.endTime-this.startTime:null,this.duration));try{this.uuid=(0,o.Z)()}catch(e){this.uuid=(0,a.Z)()}e&&Object.assign(this,e)}}},28449:(e,t,r)=>{r.d(t,{$:()=>o,Z:()=>n});let{Provider:o,useMaybeHook:a}=(0,r(342513).Z)("TimeSpentManagerContext"),n=a},415199:(e,t,r)=>{r.d(t,{pb:()=>y,nf:()=>A,lV:()=>h});var o=r(667294),a=r(545007),n=r(441143),i=r.n(n),l=r(216167),d=r(342513),s=r(372085),c=r(638747),u=r(105737),m=r(996523);let _={feature_map:Object.freeze({})},g=(e,t)=>{let r={...(0,m.Z)(e,t),...t.reaction_counts?{reaction_counts:t.reaction_counts}:Object.freeze({}),...t.tags?{tags:t.tags}:Object.freeze({}),...t.tagged_users?{tagged_users:t.tagged_users}:Object.freeze({})};return(0,u.ZP)(e,r)?e:r},E=(e=_,t)=>{if("FETCH_COMPLETE"===t.type){let{payload:{resource:r}}=t,{data:o}=t.payload.response.resource_response;if("AggregatedCommentFeedResource"===r||"AggregatedCommentReplyFeedResource"===r||"DidItCommentsResource"===r){let t=(o||[]).reduce((t,r)=>(t[r.id]=g(e[r.id],r),t),{});return{...e,...t}}if("UnifiedCommentsResource"===r&&o&&o.length>0){let t=o.filter(e=>"aggregatedcomment"===e.type).reduce((t,r)=>(t[r.id]=g(e[r.id],r),t),{});return{...e,...t}}if("UnifiedCommentsPreviewResource"===r&&o&&o.length>0){let t=o[0].aggregated_comment,r=t?{[t.id]:g(e[t.id],t)}:{},a=o[0].creator_reply,n=a?{[a.id]:g(e[a.id],a)}:{};return{...e,...r,...n}}if("AggregatedCommentFeaturesResource"===r&&o&&Object.keys(o).length>0)return{...e,feature_map:o}}else if("AGGREGATED_COMMENT_CREATED"===t.type){let{payload:{aggregatedComment:r}}=t;return r.id?{...e,[r.id]:r}:e}else if("AGGREGATED_COMMENT_DELETED"===t.type||"AGGREGATED_COMMENT_HIDDEN"===t.type){let{payload:{aggregatedCommentId:r}}=t,o={...e};return delete o[r],o}else if("AGGREGATED_COMMENT_HIDDEN_FOR_USER"===t.type){let{payload:{userId:r}}=t;return Object.fromEntries(Object.entries(e).filter(e=>e[1].user?.id!==r))}else if("AGGREGATED_COMMENT_UPDATED"===t.type){let{payload:{data:r}}=t;return{...e,[r.id]:g(e[r.id],r)}}else if("AGGREGATED_COMMENT_LIKE_TOGGLED"===t.type){let{payload:{data:r}}=t,o=e[r.id],a=o.reaction_counts[1]||0,n={1:r.reaction_by_me?a+1:a-1},i={...o,reaction_by_me:r.reaction_by_me,reaction_counts:n};return{...e,[r.id]:i}}else if("AGGREGATED_COMMENT_HELPFUL_TOGGLED"===t.type){let{payload:{data:r}}=t,o=e[r.id],a=o.helpful_count||0,n=r.marked_helpful_by_me?a+1:a-1,i={...o,marked_helpful_by_me:r.marked_helpful_by_me,helpful_count:n};return{...e,[r.id]:i}}else if("AGGREGATED_COMMENT_HIGHLIGHT_TOGGLED"===t.type){let{payload:{data:r}}=t,o={...e[r.aggregated_comment_id],highlighted_by_pin_owner:r.is_highlighted};return{...e,[r.aggregated_comment_id]:o}}else if("AGGREGATED_COMMENT_FEATURES_UPDATED"===t.type){let{payload:{data:{featureMap:r}}}=t;return{...e,feature_map:{...e.feature_map,...r}}}else if("UPDATE_AGGREGATED_COMMENT_COMMENT_COUNT"===t.type){let{payload:{increment:r,id:o}}=t,a=e[o];if(!a)return e;let n={...a,comment_count:a.comment_count+r};return{...e,[o]:n}}else if("DELETE_COMMENT_MENTION"===t.type){let{payload:{aggregatedCommentId:r,tagged_users:o}}=t,a={...e[r],tagged_users:o};return{...e,[r]:a}}else if("GET_COMMENT_TRANSLATION"===t.type){let{payload:{aggregatedCommentId:r,translatedText:o}}=t,a={...e[r],translatedText:o};return{...e,[r]:a}}return e};var p=r(785893);let{Provider:T,useHook:f}=(0,d.Z)("AggregatedComments");function y({children:e}){let t=(0,a.v9)(({resources:e})=>e?.UnifiedCommentsResource),r=_;t&&Object.values(t).forEach(e=>{let t=e.data?.filter(e=>"aggregatedcomment"===e.type),o=t?.reduce((e,t)=>(e[t.id]=g(r[t.id],t),e),{});r={...r,...o}});let[n,i]=(0,o.useReducer)(E,r),l=e=>{i({type:"FETCH_COMPLETE",payload:e})};(0,c.Z8)("AggregatedCommentFeaturesResource",l),(0,c.my)("AggregatedCommentFeaturesResource",l),(0,c.Z8)("AggregatedCommentFeedResource",l),(0,c.my)("AggregatedCommentFeedResource",l),(0,c.Z8)("AggregatedCommentReplyFeedResource",l),(0,c.my)("AggregatedCommentReplyFeedResource",l),(0,c.Z8)("DidItCommentsResource",l),(0,c.my)("DidItCommentsResource",l),(0,c.Z8)("UnifiedCommentsPreviewResource",l),(0,c.my)("UnifiedCommentsPreviewResource",l),(0,c.Z8)("UnifiedCommentsResource",l),(0,c.my)("UnifiedCommentsResource",l);let d=(0,o.useMemo)(()=>({aggregatedComments:n,dispatch:i}),[n,i]);return(0,p.jsx)(T,{value:d,children:e})}function A(){let{dispatch:e}=f();return(0,o.useMemo)(()=>({aggregatedCommentCreated(t,r){e({type:"AGGREGATED_COMMENT_CREATED",payload:{parentId:t,aggregatedComment:r}})},aggregatedCommentDeleted:(t,r)=>{e({type:"AGGREGATED_COMMENT_DELETED",payload:{parentId:t,aggregatedCommentId:r}})},aggregatedCommentHidden:t=>{e({type:"AGGREGATED_COMMENT_HIDDEN",payload:{aggregatedCommentId:t}})},aggregatedCommentsHiddenForUser:t=>{e({type:"AGGREGATED_COMMENT_HIDDEN_FOR_USER",payload:{userId:t}})},flagAggregatedComment:async({commentId:e,reason:t,detailedReasons:r})=>(0,s.Z)({url:`/v3/aggregated_comments/${e}/flag/`,method:"PUT",data:{commentId:e,reason:t,detailedReasons:r}}),deleteCommentMention:async t=>{let{resource_response:r}=await (0,s.Z)({url:`/v3/aggregated_comments/${t}/mentions/`,method:"DELETE",data:{fields:["aggregatedcomment.id","aggregatedcomment.tagged_users"]}}),o=r.data??{};e({type:"DELETE_COMMENT_MENTION",payload:{aggregatedCommentId:o.id,tagged_users:o.tagged_users}})},translateAggregatedComment:async t=>{try{let{resource_response:r}=await (0,s.Z)({url:`/v3/aggregated_comments/${t}/translate/`,method:"GET"}),o=r.data??"";e({type:"GET_COMMENT_TRANSLATION",payload:{aggregatedCommentId:t,translatedText:o}})}catch(r){e({type:"GET_COMMENT_TRANSLATION",payload:{aggregatedCommentId:t,translatedText:""}})}},toggleAggregatedCommentHelpful:({aggregatedCommentId:t,isMarkedHelpfulByMe:r,orbacSubjectId:o})=>{(0,s.Z)({url:`/v3/helpful/1/${t}/`,method:r?"DELETE":"POST",data:o?{orbac_subject_id:o}:{}}),e({type:"AGGREGATED_COMMENT_HELPFUL_TOGGLED",payload:{data:{id:t,marked_helpful_by_me:!r}}})},toggleAggregatedCommentHighlight:async({aggregatedCommentId:t,pinId:r,isHighlighted:o})=>{i()(t,"Could not find comment"),i()(r,"Could not find Pin"),await (0,s.Z)({url:"/v3/aggregated_comments/pin/highlight/",method:"PUT",data:{aggregated_comment:t,pin:r,highlight:!o}}),e({type:"AGGREGATED_COMMENT_HIGHLIGHT_TOGGLED",payload:{data:{aggregated_comment_id:t,pin_id:r,is_highlighted:!o}}})},toggleAggregatedCommentLike:({aggregatedCommentId:t,isLikedByMe:r,orbacSubjectId:o})=>{(0,s.Z)({url:`/v3/aggregated_comments/${t}/react/`,method:r?"DELETE":"POST",data:{reaction_type:1,...o?{orbac_subject_id:o}:{}}}),e({type:"AGGREGATED_COMMENT_LIKE_TOGGLED",payload:{data:{id:t,reaction_by_me:r?0:1}}})},updateAggregatedComment:async({commentId:t,force:r,orbacSubjectId:o,tags:a,text:n})=>{let{resource_response:i}=await l.Z.create("AggregatedCommentResource",{commentId:t,force:r,tags:a,text:n,...o?{orbacSubjectId:o}:{}}).callUpdate({showError:!1}),{tagged_users:d}=i.data??{};e({type:"AGGREGATED_COMMENT_UPDATED",payload:{data:{id:t,tagged_users:d.map(e=>({...e})),tags:JSON.parse(a),text:n}}})},updateAggregatedCommentFeatures:async({userId:t,featureMap:r,passcode:o,userConfirmPasscode:a})=>{let n={userId:t,featureMap:r,passcode:o,user_confirm_skip_passcode:a};void 0===a&&(n.user_confirm_skip_passcode=!1);let{resource_response:i}=await l.Z.create("AggregatedCommentFeaturesResource",n).callUpdate({showError:!1});e({type:"AGGREGATED_COMMENT_FEATURES_UPDATED",payload:{data:{featureMap:i.data??Object.freeze({})}}})},updateCommentCount:(t,r)=>{e({type:"UPDATE_AGGREGATED_COMMENT_COMMENT_COUNT",payload:{increment:r,id:t}})}}),[e])}function h(){let{aggregatedComments:e}=f();return e}},189:(e,t,r)=>{r.d(t,{G:()=>m,Kl:()=>_,vo:()=>u});var o=r(667294),a=r(342513),n=r(638747),i=r(587070),l=r(785893);let d=()=>r.e(70809).then(r.bind(r,570809)),{Provider:s,useHook:c}=(0,a.Z)("NativeEngagements");function u({children:e}){let[t,r]=(0,i.Z)(d,[]);(0,n.Z8)("NativeInteractionsResource",e=>{r({type:"FETCH_COMPLETE",payload:e})}),(0,n.my)("NativeInteractionsResource",e=>{r({type:"FETCH_MORE_COMPLETE",payload:e})});let a=(0,o.useMemo)(()=>({dispatch:r,nativeEngagements:t}),[r,t]);return(0,l.jsx)(s,{value:a,children:e})}function m(){let{dispatch:e}=c();return(0,o.useMemo)(()=>({nativeEngagementsHiddenForUser:t=>{e({type:"NATIVE_ENGAGEMENT_HIDDEN_FOR_USER",payload:{userId:t}})}}),[e])}function _(){let{nativeEngagements:e}=c();return e}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/91873.pt_BR-dcb945be74487179.mjs.map