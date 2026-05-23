	var __wxAppData = __wxAppData || {}; 	var __wxRoute = __wxRoute || ""; 	var __wxRouteBegin = __wxRouteBegin || ""; 	var __wxAppCode__ = __wxAppCode__ || {};	var global = global || {};	var __WXML_GLOBAL__=__WXML_GLOBAL__ || {};	var __wxAppCurrentFile__=__wxAppCurrentFile__||""; 	var Component = Component || function(){};	var definePlugin = definePlugin || function(){};	var requirePlugin = requirePlugin || function(){};	var Behavior = Behavior || function(){};	var __vd_version_info__ = __vd_version_info__ || {};
	/*v0.5vv_20211229_syb_scopedata*/global.__wcc_version__='v0.5vv_20211229_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(typeof o==="string"||typeof o==="boolean"||typeof o==="number") return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(Object.prototype.hasOwnProperty.call(o,k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&typeof o==="function"){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, r, c){
p.extraAttr = {"t_action": a, "t_rawid": r };
if ( typeof(c) != 'undefined' ) p.extraAttr.t_cid = c;
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'theme']])
Z([[7],[3,'title']])
Z([[2,'!'],[[7],[3,'disabledBtn']]])
Z([3,'wx-dialog-footer'])
Z([[7],[3,'cancelText']])
Z([[7],[3,'confirmText']])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'syncHtml'])
Z([3,'onEditorReady'])
Z([3,'onStatusChange'])
Z([3,'ql-container'])
Z([3,'editor'])
Z([[7],[3,'placeholder']])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'show']])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'show']])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([3,'_cancelEvent'])
Z([3,'_confirmEvent'])
Z([3,'关闭'])
Z([3,''])
Z([3,'dialog'])
Z([3,'切换学校'])
Z([3,'searchTypeClose'])
Z(z[3])
Z([3,'searchTypeDialog'])
Z([1,true])
Z([3,'选择搜索类型'])
Z([3,'whilte-block'])
Z([[2,'>'],[[6],[[7],[3,'list']],[3,'length']],[1,0]])
Z([[7],[3,'list']])
Z([[6],[[7],[3,'item']],[3,'user_id']])
Z([3,'removeBlackHanlder'])
Z([3,'qst-item'])
Z([[7],[3,'item']])
Z([[6],[[7],[3,'item']],[3,'user_student_no']])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([3,'_cancelEvent'])
Z([3,'_confirmEvent'])
Z([3,'关闭'])
Z([3,''])
Z([3,'dialog'])
Z([3,'切换学校'])
Z(z[4])
Z(z[4])
Z([3,'addNumDialog'])
Z([1,true])
Z([3,'wx-dialog2'])
Z(z[4])
Z(z[4])
Z(z[4])
Z([3,'proofDialog'])
Z(z[10])
Z(z[11])
Z([[7],[3,'proofDialogTitle']])
Z([[2,'=='],[[7],[3,'choosedSeatLength']],[1,1]])
Z(z[19])
Z([[2,'<'],[[6],[[7],[3,'proofs']],[3,'length']],[1,2]])
Z([3,'hideUserInfo'])
Z([3,'info'])
Z([[2,'!'],[[2,'!'],[[6],[[7],[3,'userinfo']],[3,'userStudentDepartment']]]])
Z(z[22])
Z([3,'index'])
Z([3,'#f0f0f0'])
Z([3,'libSelectHandler'])
Z([[7],[3,'libSelect']])
Z([[7],[3,'libs']])
Z([3,'375px'])
Z([3,'seatClickHandler'])
Z([[7],[3,'layoutHeight']])
Z([3,'layout'])
Z([[7],[3,'layout']])
Z([[7],[3,'layoutWidth']])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'_cancelEvent'])
Z([3,'_confirmEvent'])
Z([3,'关闭'])
Z([3,''])
Z([3,'dialog'])
Z([3,'切换学校'])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([[7],[3,'ready']])
Z(z[1])
Z(z[1])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'syncCtx'])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([3,'_cancelEvent'])
Z([3,'_confirmEvent'])
Z([3,'关闭'])
Z([3,''])
Z([3,'dialog'])
Z([3,'切换学校'])
Z([3,'cancelTimeHanlder'])
Z([3,'confirmTimeHanlder'])
Z(z[3])
Z([3,'确认'])
Z([3,'timeDialog'])
Z([3,'设置二维码过期时间'])
Z(z[4])
Z(z[4])
Z([3,'imgDialog'])
Z([3,'wx-mask2'])
Z([1,true])
Z([3,'wx-dialog2'])
Z(z[4])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([3,'_cancelEvent'])
Z([3,'_confirmEvent'])
Z([3,'关闭'])
Z([3,''])
Z([3,'dialog'])
Z([3,'切换学校'])
Z(z[4])
Z(z[4])
Z([3,'answerDialog'])
Z([1,true])
Z([3,'wx-dialog3'])
Z(z[4])
Z([3,'whilte-block'])
Z([[2,'>'],[[6],[[7],[3,'qstList']],[3,'length']],[1,0]])
Z([[7],[3,'qstList']])
Z([[6],[[7],[3,'item']],[3,'qst_id']])
Z([3,'answerHanlder'])
Z([3,'qst-item'])
Z([[7],[3,'item']])
Z([[2,'&&'],[[2,'=='],[[7],[3,'tabActive']],[1,1]],[[6],[[7],[3,'item']],[3,'answer_msg']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([3,'_cancelEvent'])
Z([3,'_confirmEvent'])
Z([3,'关闭'])
Z([3,''])
Z([3,'dialog'])
Z([3,'切换学校'])
Z([3,'filter'])
Z([3,'libSelectHandler'])
Z([3,'selectShowHandler'])
Z([[7],[3,'libs']])
Z([3,'width:49%'])
Z([3,'全部场馆'])
Z([3,'dateSelectHandler'])
Z(z[9])
Z([[7],[3,'dates']])
Z(z[11])
Z([3,'最近七日'])
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){if(n[0]==='p'&&n[1]==='_'&&f_[n.slice(2)])return f_[n.slice(2)];return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/dialog/dialog.wxml','./components/editor/editor.wxml','./components/layout/layout.wxml','./components/select/select.wxml','./pages/black/black.wxml','./pages/blue/auth.wxml','./pages/blue/blue.wxml','./pages/free/free.wxml','./pages/index/index.wxml','./pages/login/login.wxml','./pages/message/message.wxml','./pages/qrcode/qrcode.wxml','./pages/question/question.wxml','./pages/tongji/tongji.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_n('view')
_rz(z,oB,'class',0,e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,1,e,s,gg)){xC.wxVkey=1
}
var fE=_n('slot')
_(oB,fE)
var oD=_v()
_(oB,oD)
if(_oz(z,2,e,s,gg)){oD.wxVkey=1
var cF=_n('view')
_rz(z,cF,'class',3,e,s,gg)
var hG=_v()
_(cF,hG)
if(_oz(z,4,e,s,gg)){hG.wxVkey=1
}
var oH=_v()
_(cF,oH)
if(_oz(z,5,e,s,gg)){oH.wxVkey=1
}
hG.wxXCkey=1
oH.wxXCkey=1
_(oD,cF)
}
xC.wxXCkey=1
oD.wxXCkey=1
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var oJ=_mz(z,'editor',['bindinput',0,'bindready',1,'bindstatuschange',1,'class',2,'id',3,'placeholder',4],[],e,s,gg)
_(r,oJ)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var aL=_v()
_(r,aL)
if(_oz(z,0,e,s,gg)){aL.wxVkey=1
}
aL.wxXCkey=1
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var eN=_v()
_(r,eN)
if(_oz(z,0,e,s,gg)){eN.wxVkey=1
}
eN.wxXCkey=1
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var oP=_n('view')
_rz(z,oP,'class',0,e,s,gg)
var xQ=_mz(z,'dialog',['bind:cancelEvent',1,'bind:confirmEvent',1,'cancelText',2,'confirmText',3,'id',4,'title',5],[],e,s,gg)
_(oP,xQ)
var oR=_mz(z,'dialog',['bind:cancelEvent',7,'cancelText',1,'id',2,'maskClose',3,'title',4],[],e,s,gg)
_(oP,oR)
var fS=_n('view')
_rz(z,fS,'class',12,e,s,gg)
var cT=_v()
_(fS,cT)
if(_oz(z,13,e,s,gg)){cT.wxVkey=1
var hU=_v()
_(cT,hU)
var oV=function(oX,cW,lY,gg){
var t1=_mz(z,'view',['bindtap',16,'class',1,'data-item',2],[],oX,cW,gg)
var e2=_v()
_(t1,e2)
if(_oz(z,19,oX,cW,gg)){e2.wxVkey=1
}
e2.wxXCkey=1
_(lY,t1)
return lY
}
hU.wxXCkey=2
_2z(z,14,oV,e,s,gg,hU,'item','index','{{item.user_id}}')
}
else{cT.wxVkey=2
}
cT.wxXCkey=1
_(oP,fS)
_(r,oP)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var o6=_n('view')
_rz(z,o6,'class',0,e,s,gg)
var f7=_mz(z,'dialog',['bind:cancelEvent',1,'bind:confirmEvent',1,'cancelText',2,'confirmText',3,'id',4,'title',5],[],e,s,gg)
_(o6,f7)
var c8=_mz(z,'dialog',['cancelText',7,'confirmText',1,'id',2,'maskClose',3,'theme',4,'title',5],[],e,s,gg)
_(o6,c8)
var h9=_mz(z,'dialog',['cancelText',13,'confirmText',1,'id',2,'maskClose',3,'theme',4,'title',5],[],e,s,gg)
var o0=_n('view')
var cAB=_v()
_(o0,cAB)
if(_oz(z,19,e,s,gg)){cAB.wxVkey=1
}
var oBB=_v()
_(o0,oBB)
if(_oz(z,20,e,s,gg)){oBB.wxVkey=1
var lCB=_v()
_(oBB,lCB)
if(_oz(z,21,e,s,gg)){lCB.wxVkey=1
}
lCB.wxXCkey=1
}
cAB.wxXCkey=1
oBB.wxXCkey=1
_(h9,o0)
_(o6,h9)
var aDB=_mz(z,'view',['bindtap',22,'class',1],[],e,s,gg)
var tEB=_v()
_(aDB,tEB)
if(_oz(z,24,e,s,gg)){tEB.wxVkey=1
}
tEB.wxXCkey=1
_(o6,aDB)
var eFB=_mz(z,'view',['bindtap',25,'class',1],[],e,s,gg)
var bGB=_mz(z,'select',['backgroud',27,'bind:select',1,'checked',2,'options',3,'width',4],[],e,s,gg)
_(eFB,bGB)
var oHB=_mz(z,'layout',['bind:seatClick',32,'height',1,'id',2,'propLayout',3,'width',4],[],e,s,gg)
_(eFB,oHB)
_(o6,eFB)
_(r,o6)
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var oJB=_mz(z,'dialog',['bind:cancelEvent',0,'bind:confirmEvent',1,'cancelText',1,'confirmText',2,'id',3,'title',4],[],e,s,gg)
_(r,oJB)
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var cLB=_n('view')
_rz(z,cLB,'class',0,e,s,gg)
var hMB=_v()
_(cLB,hMB)
if(_oz(z,1,e,s,gg)){hMB.wxVkey=1
}
var oNB=_v()
_(cLB,oNB)
if(_oz(z,2,e,s,gg)){oNB.wxVkey=1
}
var cOB=_v()
_(cLB,cOB)
if(_oz(z,3,e,s,gg)){cOB.wxVkey=1
}
hMB.wxXCkey=1
oNB.wxXCkey=1
cOB.wxXCkey=1
_(r,cLB)
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var lQB=_n('editor')
_rz(z,lQB,'bind:sync',0,e,s,gg)
_(r,lQB)
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
var tSB=_n('view')
_rz(z,tSB,'class',0,e,s,gg)
var eTB=_mz(z,'dialog',['bind:cancelEvent',1,'bind:confirmEvent',1,'cancelText',2,'confirmText',3,'id',4,'title',5],[],e,s,gg)
_(tSB,eTB)
var bUB=_mz(z,'dialog',['bind:cancelEvent',7,'bind:confirmEvent',1,'cancelText',2,'confirmText',3,'id',4,'title',5],[],e,s,gg)
_(tSB,bUB)
var oVB=_mz(z,'dialog',['cancelText',13,'confirmText',1,'id',2,'maskClass',3,'maskClose',4,'theme',5,'title',6],[],e,s,gg)
_(tSB,oVB)
_(r,tSB)
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
var oXB=_n('view')
_rz(z,oXB,'class',0,e,s,gg)
var fYB=_mz(z,'dialog',['bind:cancelEvent',1,'bind:confirmEvent',1,'cancelText',2,'confirmText',3,'id',4,'title',5],[],e,s,gg)
_(oXB,fYB)
var cZB=_mz(z,'dialog',['cancelText',7,'confirmText',1,'id',2,'maskClose',3,'theme',4,'title',5],[],e,s,gg)
_(oXB,cZB)
var h1B=_n('view')
_rz(z,h1B,'class',13,e,s,gg)
var o2B=_v()
_(h1B,o2B)
if(_oz(z,14,e,s,gg)){o2B.wxVkey=1
var c3B=_v()
_(o2B,c3B)
var o4B=function(a6B,l5B,t7B,gg){
var b9B=_mz(z,'view',['bindtap',17,'class',1,'data-qst',2],[],a6B,l5B,gg)
var o0B=_v()
_(b9B,o0B)
if(_oz(z,20,a6B,l5B,gg)){o0B.wxVkey=1
}
o0B.wxXCkey=1
_(t7B,b9B)
return t7B
}
c3B.wxXCkey=2
_2z(z,15,o4B,e,s,gg,c3B,'item','index','{{item.qst_id}}')
}
else{o2B.wxVkey=2
}
o2B.wxXCkey=1
_(oXB,h1B)
_(r,oXB)
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
var oBC=_n('view')
_rz(z,oBC,'class',0,e,s,gg)
var fCC=_mz(z,'dialog',['bind:cancelEvent',1,'bind:confirmEvent',1,'cancelText',2,'confirmText',3,'id',4,'title',5],[],e,s,gg)
_(oBC,fCC)
var cDC=_n('view')
_rz(z,cDC,'class',7,e,s,gg)
var hEC=_mz(z,'select',['bind:select',8,'bind:show',1,'options',2,'style',3,'text',4],[],e,s,gg)
_(cDC,hEC)
var oFC=_mz(z,'select',['bind:select',13,'bind:show',1,'options',2,'style',3,'text',4],[],e,s,gg)
_(cDC,oFC)
_(oBC,cDC)
_(r,oBC)
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}
	__wxAppCode__['components/dialog/dialog.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/dialog/dialog.wxml'] = [$gwx, './components/dialog/dialog.wxml'];else __wxAppCode__['components/dialog/dialog.wxml'] = $gwx( './components/dialog/dialog.wxml' );
		__wxAppCode__['components/editor/editor.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/editor/editor.wxml'] = [$gwx, './components/editor/editor.wxml'];else __wxAppCode__['components/editor/editor.wxml'] = $gwx( './components/editor/editor.wxml' );
		__wxAppCode__['components/layout/layout.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/layout/layout.wxml'] = [$gwx, './components/layout/layout.wxml'];else __wxAppCode__['components/layout/layout.wxml'] = $gwx( './components/layout/layout.wxml' );
		__wxAppCode__['components/select/select.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/select/select.wxml'] = [$gwx, './components/select/select.wxml'];else __wxAppCode__['components/select/select.wxml'] = $gwx( './components/select/select.wxml' );
		__wxAppCode__['pages/black/black.json'] = {"usingComponents":{"dialog":"/components/dialog/dialog"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/black/black.wxml'] = [$gwx, './pages/black/black.wxml'];else __wxAppCode__['pages/black/black.wxml'] = $gwx( './pages/black/black.wxml' );
		__wxAppCode__['pages/blue/auth.json'] = {"backgroundTextStyle":"light","navigationBarBackgroundColor":"#2E8BFC","navigationBarTitleText":"签到","navigationBarTextStyle":"white","usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/blue/auth.wxml'] = [$gwx, './pages/blue/auth.wxml'];else __wxAppCode__['pages/blue/auth.wxml'] = $gwx( './pages/blue/auth.wxml' );
		__wxAppCode__['pages/blue/blue.json'] = {"backgroundTextStyle":"light","navigationBarBackgroundColor":"#2E8BFC","navigationBarTitleText":"签到","navigationBarTextStyle":"white","usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/blue/blue.wxml'] = [$gwx, './pages/blue/blue.wxml'];else __wxAppCode__['pages/blue/blue.wxml'] = $gwx( './pages/blue/blue.wxml' );
		__wxAppCode__['pages/free/free.json'] = {"usingComponents":{"layout":"/components/layout/layout","dialog":"/components/dialog/dialog","select":"/components/select/select"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/free/free.wxml'] = [$gwx, './pages/free/free.wxml'];else __wxAppCode__['pages/free/free.wxml'] = $gwx( './pages/free/free.wxml' );
		__wxAppCode__['pages/index/index.json'] = {"usingComponents":{"dialog":"/components/dialog/dialog"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/index.wxml'] = [$gwx, './pages/index/index.wxml'];else __wxAppCode__['pages/index/index.wxml'] = $gwx( './pages/index/index.wxml' );
		__wxAppCode__['pages/login/login.json'] = {"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/login/login.wxml'] = [$gwx, './pages/login/login.wxml'];else __wxAppCode__['pages/login/login.wxml'] = $gwx( './pages/login/login.wxml' );
		__wxAppCode__['pages/message/message.json'] = {"usingComponents":{"editor":"/components/editor/editor"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/message/message.wxml'] = [$gwx, './pages/message/message.wxml'];else __wxAppCode__['pages/message/message.wxml'] = $gwx( './pages/message/message.wxml' );
		__wxAppCode__['pages/qrcode/qrcode.json'] = {"usingComponents":{"dialog":"/components/dialog/dialog"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/qrcode/qrcode.wxml'] = [$gwx, './pages/qrcode/qrcode.wxml'];else __wxAppCode__['pages/qrcode/qrcode.wxml'] = $gwx( './pages/qrcode/qrcode.wxml' );
		__wxAppCode__['pages/question/question.json'] = {"usingComponents":{"dialog":"/components/dialog/dialog"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/question/question.wxml'] = [$gwx, './pages/question/question.wxml'];else __wxAppCode__['pages/question/question.wxml'] = $gwx( './pages/question/question.wxml' );
		__wxAppCode__['pages/tongji/tongji.json'] = {"usingComponents":{"dialog":"/components/dialog/dialog","select":"/components/select/select"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/tongji/tongji.wxml'] = [$gwx, './pages/tongji/tongji.wxml'];else __wxAppCode__['pages/tongji/tongji.wxml'] = $gwx( './pages/tongji/tongji.wxml' );
	
	define("@babel/runtime/helpers/Objectvalues.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
Object.values||(Object.values=function(e){if(e!==Object(e))throw new TypeError("Object.values called on a non-object");var t,r=[];for(t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.push(e[t]);return r}); 
 			}); 
		define("@babel/runtime/helpers/arrayLikeToArray.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=new Array(a);e<a;e++)n[e]=r[e];return n}module.exports=_arrayLikeToArray; 
 			}); 
		define("@babel/runtime/helpers/arrayWithoutHoles.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
var arrayLikeToArray=require("./arrayLikeToArray");function _arrayWithoutHoles(r){if(Array.isArray(r))return arrayLikeToArray(r)}module.exports=_arrayWithoutHoles; 
 			}); 
		define("@babel/runtime/helpers/createForOfIteratorHelper.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
var unsupportedIterableToArray=require("./unsupportedIterableToArray");function _createForOfIteratorHelper(r,e){var t="undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(!t){if(Array.isArray(r)||(t=unsupportedIterableToArray(r))||e&&r&&"number"==typeof r.length){t&&(r=t);var n=0,o=function(){};return{s:o,n:function(){return n>=r.length?{done:!0}:{done:!1,value:r[n++]}},e:function(r){throw r},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,i=!1;return{s:function(){t=t.call(r)},n:function(){var r=t.next();return u=r.done,r},e:function(r){i=!0,a=r},f:function(){try{u||null==t.return||t.return()}finally{if(i)throw a}}}}module.exports=_createForOfIteratorHelper; 
 			}); 
		define("@babel/runtime/helpers/defineProperty.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
var toPropertyKey=require("./toPropertyKey");function _defineProperty(e,r,t){return(r=toPropertyKey(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}module.exports=_defineProperty; 
 			}); 
		define("@babel/runtime/helpers/iterableToArray.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
function _iterableToArray(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}module.exports=_iterableToArray; 
 			}); 
		define("@babel/runtime/helpers/nonIterableSpread.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}module.exports=_nonIterableSpread; 
 			}); 
		define("@babel/runtime/helpers/toConsumableArray.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
var arrayWithoutHoles=require("./arrayWithoutHoles"),iterableToArray=require("./iterableToArray"),unsupportedIterableToArray=require("./unsupportedIterableToArray"),nonIterableSpread=require("./nonIterableSpread");function _toConsumableArray(r){return arrayWithoutHoles(r)||iterableToArray(r)||unsupportedIterableToArray(r)||nonIterableSpread()}module.exports=_toConsumableArray; 
 			}); 
		define("@babel/runtime/helpers/toPrimitive.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
var _typeof=require("./typeof");function _toPrimitive(r,t){if("object"!==_typeof(r)||null===r)return r;var e=r[Symbol.toPrimitive];if(void 0!==e){var i=e.call(r,t||"default");if("object"!==_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(r)}module.exports=_toPrimitive; 
 			}); 
		define("@babel/runtime/helpers/toPropertyKey.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
var _typeof=require("./typeof"),toPrimitive=require("./toPrimitive");function _toPropertyKey(r){var t=toPrimitive(r,"string");return"symbol"===_typeof(t)?t:String(t)}module.exports=_toPropertyKey; 
 			}); 
		define("@babel/runtime/helpers/typeof.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
function _typeof(o){return module.exports=_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}module.exports=_typeof; 
 			}); 
		define("@babel/runtime/helpers/unsupportedIterableToArray.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
var arrayLikeToArray=require("./arrayLikeToArray");function _unsupportedIterableToArray(r,e){if(r){if("string"==typeof r)return arrayLikeToArray(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?arrayLikeToArray(r,e):void 0}}module.exports=_unsupportedIterableToArray; 
 			}); 
		define("config.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t,i;__wxConfig.envVersion,t="https://wechat.v2.traceint.com/",i="https://wechat.v2.traceint.com/admin_api.php",module.exports={host:t,api:i,projectId:"traceint",projectName:"我去图书馆",layoutBar:[{title:"预约",img:"grid_status2.png"},{title:"选中",img:"seat_active.png"},{title:"有人",img:"grid_on_use.png"},{title:"保留",img:"grid_status4.png"},{title:"标记",img:"grid_status5.png"}]}; 
 			}); 
		define("miniprogram_npm/wxmp-rsa/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t,e,r,i=require("../../@babel/runtime/helpers/typeof");module.exports=(t={},r=function(e,r){if(!t[e])return require(r);if(!t[e].status){var n=t[e].m;n._exports=n._tempexports;var s=Object.getOwnPropertyDescriptor(n,"exports");s&&s.configurable&&Object.defineProperty(n,"exports",{set:function(t){"object"===i(t)&&t!==n._exports&&(n._exports.__proto__=t.__proto__,Object.keys(t).forEach((function(e){n._exports[e]=t[e]}))),n._tempexports=t},get:function(){return n._tempexports}}),t[e].status=1,t[e].func(t[e].req,n,n.exports)}return t[e].m.exports},(e=function(e,r,i){t[e]={status:0,func:r,req:i,m:{exports:{},_tempexports:{}}}})(1667461081096,(function(t,e,r){var i=t("./JSEncrypt").JSEncrypt;r.__esModule||Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"JSEncrypt",{enumerable:!0,configurable:!0,get:function(){return i}}),r.__esModule||Object.defineProperty(r,"__esModule",{value:!0}),r.default=i}),(function(t){return r({"./JSEncrypt":1667461081097}[t],t)})),e(1667461081097,(function(t,e,r){var i,n=(h=t("./lib/jsbn/base64")).b64tohex,s=h.hex2b64,o=(h=t("./JSEncryptRSAKey")).JSEncryptRSAKey,h=t("./version.json"),u=(i=h)&&i.__esModule?i.default:i,a=function(){function t(t){void 0===t&&(t={}),t=t||{},this.default_key_size=t.default_key_size?parseInt(t.default_key_size,10):1024,this.default_public_exponent=t.default_public_exponent||"010001",this.log=t.log||!1,this.key=null}return t.prototype.setKey=function(t){this.log&&this.key&&console.warn("A key was already set, overriding existing."),this.key=new o(t)},t.prototype.setPrivateKey=function(t){this.setKey(t)},t.prototype.setPublicKey=function(t){this.setKey(t)},t.prototype.decrypt=function(t){try{return this.getKey().decrypt(n(t))}catch(t){return!1}},t.prototype.encrypt=function(t){try{return s(this.getKey().encrypt(t))}catch(t){return!1}},t.prototype.encryptLong=function(t){try{return s(this.getKey().encryptLong(t))}catch(t){return!1}},t.prototype.decryptLong=function(t){try{return this.getKey().decryptLong(n(t))}catch(t){return!1}},t.prototype.sign=function(t,e,r){try{return s(this.getKey().sign(t,e,r))}catch(t){return!1}},t.prototype.verify=function(t,e,r){try{return this.getKey().verify(t,n(e),r)}catch(t){return!1}},t.prototype.getKey=function(t){if(!this.key){if(this.key=new o,t&&"[object Function]"==={}.toString.call(t))return void this.key.generateAsync(this.default_key_size,this.default_public_exponent,t);this.key.generate(this.default_key_size,this.default_public_exponent)}return this.key},t.prototype.getPrivateKey=function(){return this.getKey().getPrivateKey()},t.prototype.getPrivateKeyB64=function(){return this.getKey().getPrivateBaseKeyB64()},t.prototype.getPublicKey=function(){return this.getKey().getPublicKey()},t.prototype.getPublicKeyB64=function(){return this.getKey().getPublicBaseKeyB64()},t.version=u.version,t}();r.__esModule||Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"JSEncrypt",{enumerable:!0,configurable:!0,get:function(){return a}})}),(function(t){return r({"./lib/jsbn/base64":1667461081098,"./JSEncryptRSAKey":1667461081100,"./version.json":1667461081111}[t],t)})),e(1667461081098,(function(t,e,r){var i=t("./util").int2char,n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function s(t){var e,r="",s=0,o=0;for(e=0;e<t.length&&"="!=t.charAt(e);++e){var h=n.indexOf(t.charAt(e));h<0||(0==s?(r+=i(h>>2),o=3&h,s=1):1==s?(r+=i(o<<2|h>>4),o=15&h,s=2):2==s?(r+=i(o),r+=i(h>>2),o=3&h,s=3):(r+=i(o<<2|h>>4),r+=i(15&h),s=0))}return 1==s&&(r+=i(o<<2)),r}r.__esModule||Object.defineProperty(r,"__esModule",{value:!0}),r.hex2b64=function(t){var e,r,i="";for(e=0;e+3<=t.length;e+=3)r=parseInt(t.substring(e,e+3),16),i+=n.charAt(r>>6)+n.charAt(63&r);for(e+1==t.length?(r=parseInt(t.substring(e,e+1),16),i+=n.charAt(r<<2)):e+2==t.length&&(r=parseInt(t.substring(e,e+2),16),i+=n.charAt(r>>2)+n.charAt((3&r)<<4));(3&i.length)>0;)i+="=";return i},r.__esModule||Object.defineProperty(r,"__esModule",{value:!0}),r.b64tohex=s,r.__esModule||Object.defineProperty(r,"__esModule",{value:!0}),r.b64toBA=function(t){var e,r=s(t),i=[];for(e=0;2*e<r.length;++e)i[e]=parseInt(r.substring(2*e,2*e+2),16);return i}}),(function(t){return r({"./util":1667461081099}[t],t)})),e(1667461081099,(function(t,e,r){r.__esModule||Object.defineProperty(r,"__esModule",{value:!0}),r.int2char=function(t){return"0123456789abcdefghijklmnopqrstuvwxyz".charAt(t)},r.__esModule||Object.defineProperty(r,"__esModule",{value:!0}),r.op_and=function(t,e){return t&e},r.__esModule||Object.defineProperty(r,"__esModule",{value:!0}),r.op_or=function(t,e){return t|e},r.__esModule||Object.defineProperty(r,"__esModule",{value:!0}),r.op_xor=function(t,e){return t^e},r.__esModule||Object.defineProperty(r,"__esModule",{value:!0}),r.op_andnot=function(t,e){return t&~e},r.__esModule||Object.defineProperty(r,"__esModule",{value:!0}),r.lbit=function(t){if(0==t)return-1;var e=0;return 0==(65535&t)&&(t>>=16,e+=16),0==(255&t)&&(t>>=8,e+=8),0==(15&t)&&(t>>=4,e+=4),0==(3&t)&&(t>>=2,e+=2),0==(1&t)&&++e,e},r.__esModule||Object.defineProperty(r,"__esModule",{value:!0}),r.cbit=function(t){for(var e=0;0!=t;)t&=t-1,++e;return e}}),(function(t){return r({}[t],t)})),e(1667461081100,(function(t,e,r){var i,n=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),s=t("./lib/jsbn/base64").hex2b64,o=t("./lib/asn1js/hex").Hex,h=t("./lib/asn1js/base64").Base64,u=t("./lib/asn1js/asn1").ASN1,a=t("./lib/jsbn/rsa").RSAKey,c=t("./lib/jsbn/jsbn").parseBigInt,f=t("./lib/jsrsasign/asn1-1.0").KJUR,l=function(t){function e(r){var i=t.call(this)||this;return r&&("string"==typeof r?i.parseKey(r):(e.hasPrivateKeyProperty(r)||e.hasPublicKeyProperty(r))&&i.parsePropertiesFrom(r)),i}return n(e,t),e.prototype.parseKey=function(t){try{var e=0,r=0,i=/^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/.test(t)?o.decode(t):h.unarmor(t),n=u.decode(i);if(3===n.sub.length&&(n=n.sub[2].sub[0]),9===n.sub.length){e=n.sub[1].getHexStringValue(),this.n=c(e,16),r=n.sub[2].getHexStringValue(),this.e=parseInt(r,16);var s=n.sub[3].getHexStringValue();this.d=c(s,16);var a=n.sub[4].getHexStringValue();this.p=c(a,16);var f=n.sub[5].getHexStringValue();this.q=c(f,16);var l=n.sub[6].getHexStringValue();this.dmp1=c(l,16);var p=n.sub[7].getHexStringValue();this.dmq1=c(p,16);var g=n.sub[8].getHexStringValue();this.coeff=c(g,16)}else{if(2!==n.sub.length)return!1;var d=n.sub[1].sub[0];e=d.sub[0].getHexStringValue(),this.n=c(e,16),r=d.sub[1].getHexStringValue(),this.e=parseInt(r,16)}return!0}catch(t){return!1}},e.prototype.getPrivateBaseKey=function(){var t={array:[new f.asn1.DERInteger({int:0}),new f.asn1.DERInteger({bigint:this.n}),new f.asn1.DERInteger({int:this.e}),new f.asn1.DERInteger({bigint:this.d}),new f.asn1.DERInteger({bigint:this.p}),new f.asn1.DERInteger({bigint:this.q}),new f.asn1.DERInteger({bigint:this.dmp1}),new f.asn1.DERInteger({bigint:this.dmq1}),new f.asn1.DERInteger({bigint:this.coeff})]};return new f.asn1.DERSequence(t).getEncodedHex()},e.prototype.getPrivateBaseKeyB64=function(){return s(this.getPrivateBaseKey())},e.prototype.getPublicBaseKey=function(){var t=new f.asn1.DERSequence({array:[new f.asn1.DERObjectIdentifier({oid:"1.2.840.113549.1.1.1"}),new f.asn1.DERNull]}),e=new f.asn1.DERSequence({array:[new f.asn1.DERInteger({bigint:this.n}),new f.asn1.DERInteger({int:this.e})]}),r=new f.asn1.DERBitString({hex:"00"+e.getEncodedHex()});return new f.asn1.DERSequence({array:[t,r]}).getEncodedHex()},e.prototype.getPublicBaseKeyB64=function(){return s(this.getPublicBaseKey())},e.wordwrap=function(t,e){if(!t)return t;var r="(.{1,"+(e=e||64)+"})( +|$\n?)|(.{1,"+e+"})";return t.match(RegExp(r,"g")).join("\n")},e.prototype.getPrivateKey=function(){var t="-----BEGIN RSA PRIVATE KEY-----\n";return t+=e.wordwrap(this.getPrivateBaseKeyB64())+"\n",t+="-----END RSA PRIVATE KEY-----"},e.prototype.getPublicKey=function(){var t="-----BEGIN PUBLIC KEY-----\n";return t+=e.wordwrap(this.getPublicBaseKeyB64())+"\n",t+="-----END PUBLIC KEY-----"},e.hasPublicKeyProperty=function(t){return(t=t||{}).hasOwnProperty("n")&&t.hasOwnProperty("e")},e.hasPrivateKeyProperty=function(t){return(t=t||{}).hasOwnProperty("n")&&t.hasOwnProperty("e")&&t.hasOwnProperty("d")&&t.hasOwnProperty("p")&&t.hasOwnProperty("q")&&t.hasOwnProperty("dmp1")&&t.hasOwnProperty("dmq1")&&t.hasOwnProperty("coeff")},e.prototype.parsePropertiesFrom=function(t){this.n=t.n,this.e=t.e,t.hasOwnProperty("d")&&(this.d=t.d,this.p=t.p,this.q=t.q,this.dmp1=t.dmp1,this.dmq1=t.dmq1,this.coeff=t.coeff)},e}(a);r.__esModule||Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"JSEncryptRSAKey",{enumerable:!0,configurable:!0,get:function(){return l}})}),(function(t){return r({"./lib/jsbn/base64":1667461081098,"./lib/asn1js/hex":1667461081101,"./lib/asn1js/base64":1667461081102,"./lib/asn1js/asn1":1667461081103,"./lib/jsbn/rsa":1667461081105,"./lib/jsbn/jsbn":1667461081106,"./lib/jsrsasign/asn1-1.0":1667461081109}[t],t)})),e(1667461081101,(function(t,e,r){var i;r.__esModule||Object.defineProperty(r,"__esModule",{value:!0}),r.Hex={decode:function(t){var e;if(void 0===i){var r="0123456789ABCDEF";for(i={},e=0;e<16;++e)i[r.charAt(e)]=e;for(r=r.toLowerCase(),e=10;e<16;++e)i[r.charAt(e)]=e;for(e=0;e<" \f\n\r\t \u2028\u2029".length;++e)i[" \f\n\r\t \u2028\u2029".charAt(e)]=-1}var n=[],s=0,o=0;for(e=0;e<t.length;++e){var h=t.charAt(e);if("="==h)break;if(-1!=(h=i[h])){if(void 0===h)throw new Error("Illegal character at offset "+e);s|=h,++o>=2?(n[n.length]=s,s=0,o=0):s<<=4}}if(o)throw new Error("Hex encoding incomplete: 4 bits missing");return n}}}),(function(t){return r({}[t],t)})),e(1667461081102,(function(t,e,r){var i;r.__esModule||Object.defineProperty(r,"__esModule",{value:!0});var n=r.Base64={decode:function(t){var e;if(void 0===i){for(i=Object.create(null),e=0;e<64;++e)i["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(e)]=e;for(i["-"]=62,i._=63,e=0;e<"= \f\n\r\t \u2028\u2029".length;++e)i["= \f\n\r\t \u2028\u2029".charAt(e)]=-1}var r=[],n=0,s=0;for(e=0;e<t.length;++e){var o=t.charAt(e);if("="==o)break;if(-1!=(o=i[o])){if(void 0===o)throw new Error("Illegal character at offset "+e);n|=o,++s>=4?(r[r.length]=n>>16,r[r.length]=n>>8&255,r[r.length]=255&n,n=0,s=0):n<<=6}}switch(s){case 1:throw new Error("Base64 encoding incomplete: at least 2 bits missing");case 2:r[r.length]=n>>10;break;case 3:r[r.length]=n>>16,r[r.length]=n>>8&255}return r},re:/-----BEGIN [^-]+-----([A-Za-z0-9+\/=\s]+)-----END [^-]+-----|begin-base64[^\n]+\n([A-Za-z0-9+\/=\s]+)====/,unarmor:function(t){var e=n.re.exec(t);if(e)if(e[1])t=e[1];else{if(!e[2])throw new Error("RegExp out of sync");t=e[2]}return n.decode(t)}}}),(function(t){return r({}[t],t)})),e(1667461081103,(function(t,e,r){var i=t("./int10").Int10,n=/^(\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/,s=/^(\d\d\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/;function o(t,e){return t.length>e&&(t=t.substring(0,e)+"…"),t}var h=function(){function t(e,r){this.hexDigits="0123456789ABCDEF",e instanceof t?(this.enc=e.enc,this.pos=e.pos):(this.enc=e,this.pos=r)}return t.prototype.get=function(t){if(void 0===t&&(t=this.pos++),t>=this.enc.length)throw new Error("Requesting byte offset "+t+" on a stream of length "+this.enc.length);return"string"==typeof this.enc?this.enc.charCodeAt(t):this.enc[t]},t.prototype.hexByte=function(t){return this.hexDigits.charAt(t>>4&15)+this.hexDigits.charAt(15&t)},t.prototype.hexDump=function(t,e,r){for(var i="",n=t;n<e;++n)if(i+=this.hexByte(this.get(n)),!0!==r)switch(15&n){case 7:i+="  ";break;case 15:i+="\n";break;default:i+=" "}return i},t.prototype.isASCII=function(t,e){for(var r=t;r<e;++r){var i=this.get(r);if(i<32||i>176)return!1}return!0},t.prototype.parseStringISO=function(t,e){for(var r="",i=t;i<e;++i)r+=String.fromCharCode(this.get(i));return r},t.prototype.parseStringUTF=function(t,e){for(var r="",i=t;i<e;){var n=this.get(i++);r+=n<128?String.fromCharCode(n):n>191&&n<224?String.fromCharCode((31&n)<<6|63&this.get(i++)):String.fromCharCode((15&n)<<12|(63&this.get(i++))<<6|63&this.get(i++))}return r},t.prototype.parseStringBMP=function(t,e){for(var r,i,n="",s=t;s<e;)r=this.get(s++),i=this.get(s++),n+=String.fromCharCode(r<<8|i);return n},t.prototype.parseTime=function(t,e,r){var i=this.parseStringISO(t,e),o=(r?n:s).exec(i);return o?(r&&(o[1]=+o[1],o[1]+=+o[1]<70?2e3:1900),i=o[1]+"-"+o[2]+"-"+o[3]+" "+o[4],o[5]&&(i+=":"+o[5],o[6]&&(i+=":"+o[6],o[7]&&(i+="."+o[7]))),o[8]&&(i+=" UTC","Z"!=o[8]&&(i+=o[8],o[9]&&(i+=":"+o[9]))),i):"Unrecognized time: "+i},t.prototype.parseInteger=function(t,e){for(var r,n=this.get(t),s=n>127,o=s?255:0,h="";n==o&&++t<e;)n=this.get(t);if(0==(r=e-t))return s?-1:0;if(r>4){for(h=n,r<<=3;0==(128&(+h^o));)h=+h<<1,--r;h="("+r+" bit)\n"}s&&(n-=256);for(var u=new i(n),a=t+1;a<e;++a)u.mulAdd(256,this.get(a));return h+u.toString()},t.prototype.parseBitString=function(t,e,r){for(var i=this.get(t),n="("+((e-t-1<<3)-i)+" bit)\n",s="",h=t+1;h<e;++h){for(var u=this.get(h),a=h==e-1?i:0,c=7;c>=a;--c)s+=u>>c&1?"1":"0";if(s.length>r)return n+o(s,r)}return n+s},t.prototype.parseOctetString=function(t,e,r){if(this.isASCII(t,e))return o(this.parseStringISO(t,e),r);var i=e-t,n="("+i+" byte)\n";i>(r/=2)&&(e=t+r);for(var s=t;s<e;++s)n+=this.hexByte(this.get(s));return i>r&&(n+="…"),n},t.prototype.parseOID=function(t,e,r){for(var n="",s=new i,h=0,u=t;u<e;++u){var a=this.get(u);if(s.mulAdd(128,127&a),h+=7,!(128&a)){if(""===n)if((s=s.simplify())instanceof i)s.sub(80),n="2."+s.toString();else{var c=s<80?s<40?0:1:2;n=c+"."+(s-40*c)}else n+="."+s.toString();if(n.length>r)return o(n,r);s=new i,h=0}}return h>0&&(n+=".incomplete"),n},t}();r.__esModule||Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"Stream",{enumerable:!0,configurable:!0,get:function(){return h}});var u=function(){function t(t,e,r,i,n){if(!(i instanceof a))throw new Error("Invalid tag value.");this.stream=t,this.header=e,this.length=r,this.tag=i,this.sub=n}return t.prototype.typeName=function(){switch(this.tag.tagClass){case 0:switch(this.tag.tagNumber){case 0:return"EOC";case 1:return"BOOLEAN";case 2:return"INTEGER";case 3:return"BIT_STRING";case 4:return"OCTET_STRING";case 5:return"NULL";case 6:return"OBJECT_IDENTIFIER";case 7:return"ObjectDescriptor";case 8:return"EXTERNAL";case 9:return"REAL";case 10:return"ENUMERATED";case 11:return"EMBEDDED_PDV";case 12:return"UTF8String";case 16:return"SEQUENCE";case 17:return"SET";case 18:return"NumericString";case 19:return"PrintableString";case 20:return"TeletexString";case 21:return"VideotexString";case 22:return"IA5String";case 23:return"UTCTime";case 24:return"GeneralizedTime";case 25:return"GraphicString";case 26:return"VisibleString";case 27:return"GeneralString";case 28:return"UniversalString";case 30:return"BMPString"}return"Universal_"+this.tag.tagNumber.toString();case 1:return"Application_"+this.tag.tagNumber.toString();case 2:return"["+this.tag.tagNumber.toString()+"]";case 3:return"Private_"+this.tag.tagNumber.toString()}},t.prototype.content=function(t){if(void 0===this.tag)return null;void 0===t&&(t=1/0);var e=this.posContent(),r=Math.abs(this.length);if(!this.tag.isUniversal())return null!==this.sub?"("+this.sub.length+" elem)":this.stream.parseOctetString(e,e+r,t);switch(this.tag.tagNumber){case 1:return 0===this.stream.get(e)?"false":"true";case 2:return this.stream.parseInteger(e,e+r);case 3:return this.sub?"("+this.sub.length+" elem)":this.stream.parseBitString(e,e+r,t);case 4:return this.sub?"("+this.sub.length+" elem)":this.stream.parseOctetString(e,e+r,t);case 6:return this.stream.parseOID(e,e+r,t);case 16:case 17:return null!==this.sub?"("+this.sub.length+" elem)":"(no elem)";case 12:return o(this.stream.parseStringUTF(e,e+r),t);case 18:case 19:case 20:case 21:case 22:case 26:return o(this.stream.parseStringISO(e,e+r),t);case 30:return o(this.stream.parseStringBMP(e,e+r),t);case 23:case 24:return this.stream.parseTime(e,e+r,23==this.tag.tagNumber)}return null},t.prototype.toString=function(){return this.typeName()+"@"+this.stream.pos+"[header:"+this.header+",length:"+this.length+",sub:"+(null===this.sub?"null":this.sub.length)+"]"},t.prototype.toPrettyString=function(t){void 0===t&&(t="");var e=t+this.typeName()+" @"+this.stream.pos;if(this.length>=0&&(e+="+"),e+=this.length,this.tag.tagConstructed?e+=" (constructed)":!this.tag.isUniversal()||3!=this.tag.tagNumber&&4!=this.tag.tagNumber||null===this.sub||(e+=" (encapsulates)"),e+="\n",null!==this.sub){t+="  ";for(var r=0,i=this.sub.length;r<i;++r)e+=this.sub[r].toPrettyString(t)}return e},t.prototype.posStart=function(){return this.stream.pos},t.prototype.posContent=function(){return this.stream.pos+this.header},t.prototype.posEnd=function(){return this.stream.pos+this.header+Math.abs(this.length)},t.prototype.toHexString=function(){return this.stream.hexDump(this.posStart(),this.posEnd(),!0)},t.decodeLength=function(t){var e=t.get(),r=127&e;if(r==e)return r;if(r>6)throw new Error("Length over 48 bits not supported at position "+(t.pos-1));if(0===r)return null;e=0;for(var i=0;i<r;++i)e=256*e+t.get();return e},t.prototype.getHexStringValue=function(){var t=this.toHexString(),e=2*this.header,r=2*this.length;return t.substr(e,r)},t.decode=function(e){var r;r=e instanceof h?e:new h(e,0);var i=new h(r),n=new a(r),s=t.decodeLength(r),o=r.pos,u=o-i.pos,c=null,f=function(){var e=[];if(null!==s){for(var i=o+s;r.pos<i;)e[e.length]=t.decode(r);if(r.pos!=i)throw new Error("Content size is not correct for container starting at offset "+o)}else try{for(;;){var n=t.decode(r);if(n.tag.isEOC())break;e[e.length]=n}s=o-r.pos}catch(t){throw new Error("Exception while decoding undefined length content: "+t)}return e};if(n.tagConstructed)c=f();else if(n.isUniversal()&&(3==n.tagNumber||4==n.tagNumber))try{if(3==n.tagNumber&&0!=r.get())throw new Error("BIT STRINGs with unused bits cannot encapsulate.");c=f();for(var l=0;l<c.length;++l)if(c[l].tag.isEOC())throw new Error("EOC is not supposed to be actual content.")}catch(t){c=null}if(null===c){if(null===s)throw new Error("We can't skip over an invalid tag with undefined length at offset "+o);r.pos=o+Math.abs(s)}return new t(i,u,s,n,c)},t}();r.__esModule||Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"ASN1",{enumerable:!0,configurable:!0,get:function(){return u}});var a=function(){function t(t){var e=t.get();if(this.tagClass=e>>6,this.tagConstructed=0!=(32&e),this.tagNumber=31&e,31==this.tagNumber){var r=new i;do{e=t.get(),r.mulAdd(128,127&e)}while(128&e);this.tagNumber=r.simplify()}}return t.prototype.isUniversal=function(){return 0===this.tagClass},t.prototype.isEOC=function(){return 0===this.tagClass&&0===this.tagNumber},t}();r.__esModule||Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"ASN1Tag",{enumerable:!0,configurable:!0,get:function(){return a}})}),(function(t){return r({"./int10":1667461081104}[t],t)})),e(1667461081104,(function(t,e,r){var i=1e13,n=function(){function t(t){this.buf=[+t||0]}return t.prototype.mulAdd=function(t,e){var r,n,s=this.buf,o=s.length;for(r=0;r<o;++r)(n=s[r]*t+e)<i?e=0:n-=(e=0|n/i)*i,s[r]=n;e>0&&(s[r]=e)},t.prototype.sub=function(t){var e,r,n=this.buf,s=n.length;for(e=0;e<s;++e)(r=n[e]-t)<0?(r+=i,t=1):t=0,n[e]=r;for(;0===n[n.length-1];)n.pop()},t.prototype.toString=function(t){if(10!=(t||10))throw new Error("only base 10 is supported");for(var e=this.buf,r=e[e.length-1].toString(),n=e.length-2;n>=0;--n)r+=(i+e[n]).toString().substring(1);return r},t.prototype.valueOf=function(){for(var t=this.buf,e=0,r=t.length-1;r>=0;--r)e=e*i+t[r];return e},t.prototype.simplify=function(){var t=this.buf;return 1==t.length?t[0]:this},t}();r.__esModule||Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"Int10",{enumerable:!0,configurable:!0,get:function(){return n}})}),(function(t){return r({}[t],t)})),e(1667461081105,(function(t,e,r){var i,n=(i=t("./jsbn")).BigInteger,s=i.nbi,o=i.parseBigInt,h=(i=t("./rng")).SecureRandom,u=function(){function t(){this.n=null,this.e=0,this.d=null,this.p=null,this.q=null,this.dmp1=null,this.dmq1=null,this.coeff=null}return t.prototype.doPublic=function(t){return t.modPowInt(this.e,this.n)},t.prototype.doPrivate=function(t){if(null==this.p||null==this.q)return t.modPow(this.d,this.n);for(var e=t.mod(this.p).modPow(this.dmp1,this.p),r=t.mod(this.q).modPow(this.dmq1,this.q);e.compareTo(r)<0;)e=e.add(this.p);return e.subtract(r).multiply(this.coeff).mod(this.p).multiply(this.q).add(r)},t.prototype.setPublic=function(t,e){null!=t&&null!=e&&t.length>0&&e.length>0?(this.n=o(t,16),this.e=parseInt(e,16)):console.error("Invalid RSA public key")},t.prototype.encrypt=function(t){var e=this.n.bitLength()+7>>3,r=function(t,e){if(e<t.length+11)return console.error("Message too long for RSA"),null;for(var r=[],i=t.length-1;i>=0&&e>0;){var s=t.charCodeAt(i--);s<128?r[--e]=s:s>127&&s<2048?(r[--e]=63&s|128,r[--e]=s>>6|192):(r[--e]=63&s|128,r[--e]=s>>6&63|128,r[--e]=s>>12|224)}r[--e]=0;for(var o=new h,u=[];e>2;){for(u[0]=0;0==u[0];)o.nextBytes(u);r[--e]=u[0]}return r[--e]=2,r[--e]=0,new n(r)}(t,e);if(null==r)return null;var i=this.doPublic(r);if(null==i)return null;for(var s=i.toString(16),o=s.length,u=0;u<2*e-o;u++)s="0"+s;return s},t.prototype.setPrivate=function(t,e,r){null!=t&&null!=e&&t.length>0&&e.length>0?(this.n=o(t,16),this.e=parseInt(e,16),this.d=o(r,16)):console.error("Invalid RSA private key")},t.prototype.setPrivateEx=function(t,e,r,i,n,s,h,u){null!=t&&null!=e&&t.length>0&&e.length>0?(this.n=o(t,16),this.e=parseInt(e,16),this.d=o(r,16),this.p=o(i,16),this.q=o(n,16),this.dmp1=o(s,16),this.dmq1=o(h,16),this.coeff=o(u,16)):console.error("Invalid RSA private key")},t.prototype.generate=function(t,e){var r=new h,i=t>>1;this.e=parseInt(e,16);for(var s=new n(e,16);;){for(;this.p=new n(t-i,1,r),0!=this.p.subtract(n.ONE).gcd(s).compareTo(n.ONE)||!this.p.isProbablePrime(10););for(;this.q=new n(i,1,r),0!=this.q.subtract(n.ONE).gcd(s).compareTo(n.ONE)||!this.q.isProbablePrime(10););if(this.p.compareTo(this.q)<=0){var o=this.p;this.p=this.q,this.q=o}var u=this.p.subtract(n.ONE),a=this.q.subtract(n.ONE),c=u.multiply(a);if(0==c.gcd(s).compareTo(n.ONE)){this.n=this.p.multiply(this.q),this.d=s.modInverse(c),this.dmp1=this.d.mod(u),this.dmq1=this.d.mod(a),this.coeff=this.q.modInverse(this.p);break}}},t.prototype.decrypt=function(t){var e=o(t,16),r=this.doPrivate(e);return null==r?null:function(t,e){for(var r=t.toByteArray(),i=0;i<r.length&&0==r[i];)++i;if(r.length-i!=e-1||2!=r[i])return null;for(++i;0!=r[i];)if(++i>=r.length)return null;for(var n="";++i<r.length;){var s=255&r[i];s<128?n+=String.fromCharCode(s):s>191&&s<224?(n+=String.fromCharCode((31&s)<<6|63&r[i+1]),++i):(n+=String.fromCharCode((15&s)<<12|(63&r[i+1])<<6|63&r[i+2]),i+=2)}return n}(r,this.n.bitLength()+7>>3)},t.prototype.generateAsync=function(t,e,r){var i=new h,o=t>>1;this.e=parseInt(e,16);var u=new n(e,16),a=this,c=function(){var e=function(){if(a.p.compareTo(a.q)<=0){var t=a.p;a.p=a.q,a.q=t}var e=a.p.subtract(n.ONE),i=a.q.subtract(n.ONE),s=e.multiply(i);0==s.gcd(u).compareTo(n.ONE)?(a.n=a.p.multiply(a.q),a.d=u.modInverse(s),a.dmp1=a.d.mod(e),a.dmq1=a.d.mod(i),a.coeff=a.q.modInverse(a.p),setTimeout((function(){r()}),0)):setTimeout(c,0)},h=function(){a.q=s(),a.q.fromNumberAsync(o,1,i,(function(){a.q.subtract(n.ONE).gcda(u,(function(t){0==t.compareTo(n.ONE)&&a.q.isProbablePrime(10)?setTimeout(e,0):setTimeout(h,0)}))}))},f=function(){a.p=s(),a.p.fromNumberAsync(t-o,1,i,(function(){a.p.subtract(n.ONE).gcda(u,(function(t){0==t.compareTo(n.ONE)&&a.p.isProbablePrime(10)?setTimeout(h,0):setTimeout(f,0)}))}))};setTimeout(f,0)};setTimeout(c,0)},t.prototype.sign=function(t,e,r){var i=function(t,e){if(e<t.length+22)return console.error("Message too long for RSA"),null;for(var r=e-t.length-6,i="",n=0;n<r;n+=2)i+="ff";return o("0001"+i+"00"+t,16)}((a[r]||"")+e(t).toString(),this.n.bitLength()/4);if(null==i)return null;var n=this.doPrivate(i);if(null==n)return null;var s=n.toString(16);return 0==(1&s.length)?s:"0"+s},t.prototype.verify=function(t,e,r){var i=o(e,16),n=this.doPublic(i);return null==n?null:function(t){for(var e in a)if(a.hasOwnProperty(e)){var r=a[e],i=r.length;if(t.substr(0,i)==r)return t.substr(i)}return t}(n.toString(16).replace(/^1f+00/,""))==r(t).toString()},t.prototype.encryptLong=function(t){var e=this,r="",i=(this.n.bitLength()+7>>3)-11;return this.setSplitChn(t,i).forEach((function(t){r+=e.encrypt(t)})),r},t.prototype.decryptLong=function(t){var e="",r=this.n.bitLength()+7>>3,i=2*r;if(t.length>i){for(var n=t.match(new RegExp(".{1,"+i+"}","g"))||[],s=[],h=0;h<n.length;h++){var u=o(n[h],16),a=this.doPrivate(u);if(null==a)return null;s.push(a)}e=function(t,e){for(var r=[],i=0;i<t.length;i++){for(var n=t[i].toByteArray(),s=0;s<n.length&&0==n[s];)++s;if(n.length-s!=e-1||2!=n[s])return null;for(++s;0!=n[s];)if(++s>=n.length)return null;r=r.concat(n.slice(s+1))}for(var o=r,h=-1,u="";++h<o.length;){var a=255&o[h];a<128?u+=String.fromCharCode(a):a>191&&a<224?(u+=String.fromCharCode((31&a)<<6|63&o[h+1]),++h):(u+=String.fromCharCode((15&a)<<12|(63&o[h+1])<<6|63&o[h+2]),h+=2)}return u}(s,r)}else e=this.decrypt(t);return e},t.prototype.setSplitChn=function(t,e,r){void 0===r&&(r=[]);for(var i=t.split(""),n=0,s=0;s<i.length;s++){var o=i[s].charCodeAt(0);if((n+=o<=127?1:o<=2047?2:o<=65535?3:4)>e){var h=t.substring(0,s);return r.push(h),this.setSplitChn(t.substring(s),e,r)}}return r.push(t),r},t}();r.__esModule||Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"RSAKey",{enumerable:!0,configurable:!0,get:function(){return u}});var a={md2:"3020300c06082a864886f70d020205000410",md5:"3020300c06082a864886f70d020505000410",sha1:"3021300906052b0e03021a05000414",sha224:"302d300d06096086480165030402040500041c",sha256:"3031300d060960864801650304020105000420",sha384:"3041300d060960864801650304020205000430",sha512:"3051300d060960864801650304020305000440",ripemd160:"3021300906052b2403020105000414"}}),(function(t){return r({"./jsbn":1667461081106,"./rng":1667461081107}[t],t)})),e(1667461081106,(function(t,e,r){var i,n=t("./util"),s=n.cbit,o=n.int2char,h=n.lbit,u=n.op_and,a=n.op_andnot,c=n.op_or,f=n.op_xor,l=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997],p=(1<<26)/l[l.length-1],g=function(){function t(t,e,r){null!=t&&("number"==typeof t?this.fromNumber(t,e,r):null==e&&"string"!=typeof t?this.fromString(t,256):this.fromString(t,e))}return t.prototype.toString=function(t){if(this.s<0)return"-"+this.negate().toString(t);var e;if(16==t)e=4;else if(8==t)e=3;else if(2==t)e=1;else if(32==t)e=5;else{if(4!=t)return this.toRadix(t);e=2}var r,i=(1<<e)-1,n=!1,s="",h=this.t,u=this.DB-h*this.DB%e;if(h-- >0)for(u<this.DB&&(r=this[h]>>u)>0&&(n=!0,s=o(r));h>=0;)u<e?(r=(this[h]&(1<<u)-1)<<e-u,r|=this[--h]>>(u+=this.DB-e)):(r=this[h]>>(u-=e)&i,u<=0&&(u+=this.DB,--h)),r>0&&(n=!0),n&&(s+=o(r));return n?s:"0"},t.prototype.negate=function(){var e=m();return t.ZERO.subTo(this,e),e},t.prototype.abs=function(){return this.s<0?this.negate():this},t.prototype.compareTo=function(t){var e=this.s-t.s;if(0!=e)return e;var r=this.t;if(0!=(e=r-t.t))return this.s<0?-e:e;for(;--r>=0;)if(0!=(e=this[r]-t[r]))return e;return 0},t.prototype.bitLength=function(){return this.t<=0?0:this.DB*(this.t-1)+_(this[this.t-1]^this.s&this.DM)},t.prototype.mod=function(e){var r=m();return this.abs().divRemTo(e,null,r),this.s<0&&r.compareTo(t.ZERO)>0&&e.subTo(r,r),r},t.prototype.modPowInt=function(t,e){var r;return r=t<256||e.isEven()?new y(e):new v(e),this.exp(t,r)},t.prototype.clone=function(){var t=m();return this.copyTo(t),t},t.prototype.intValue=function(){if(this.s<0){if(1==this.t)return this[0]-this.DV;if(0==this.t)return-1}else{if(1==this.t)return this[0];if(0==this.t)return 0}return(this[1]&(1<<32-this.DB)-1)<<this.DB|this[0]},t.prototype.byteValue=function(){return 0==this.t?this.s:this[0]<<24>>24},t.prototype.shortValue=function(){return 0==this.t?this.s:this[0]<<16>>16},t.prototype.signum=function(){return this.s<0?-1:this.t<=0||1==this.t&&this[0]<=0?0:1},t.prototype.toByteArray=function(){var t=this.t,e=[];e[0]=this.s;var r,i=this.DB-t*this.DB%8,n=0;if(t-- >0)for(i<this.DB&&(r=this[t]>>i)!=(this.s&this.DM)>>i&&(e[n++]=r|this.s<<this.DB-i);t>=0;)i<8?(r=(this[t]&(1<<i)-1)<<8-i,r|=this[--t]>>(i+=this.DB-8)):(r=this[t]>>(i-=8)&255,i<=0&&(i+=this.DB,--t)),0!=(128&r)&&(r|=-256),0==n&&(128&this.s)!=(128&r)&&++n,(n>0||r!=this.s)&&(e[n++]=r);return e},t.prototype.equals=function(t){return 0==this.compareTo(t)},t.prototype.min=function(t){return this.compareTo(t)<0?this:t},t.prototype.max=function(t){return this.compareTo(t)>0?this:t},t.prototype.and=function(t){var e=m();return this.bitwiseTo(t,u,e),e},t.prototype.or=function(t){var e=m();return this.bitwiseTo(t,c,e),e},t.prototype.xor=function(t){var e=m();return this.bitwiseTo(t,f,e),e},t.prototype.andNot=function(t){var e=m();return this.bitwiseTo(t,a,e),e},t.prototype.not=function(){for(var t=m(),e=0;e<this.t;++e)t[e]=this.DM&~this[e];return t.t=this.t,t.s=~this.s,t},t.prototype.shiftLeft=function(t){var e=m();return t<0?this.rShiftTo(-t,e):this.lShiftTo(t,e),e},t.prototype.shiftRight=function(t){var e=m();return t<0?this.lShiftTo(-t,e):this.rShiftTo(t,e),e},t.prototype.getLowestSetBit=function(){for(var t=0;t<this.t;++t)if(0!=this[t])return t*this.DB+h(this[t]);return this.s<0?this.t*this.DB:-1},t.prototype.bitCount=function(){for(var t=0,e=this.s&this.DM,r=0;r<this.t;++r)t+=s(this[r]^e);return t},t.prototype.testBit=function(t){var e=Math.floor(t/this.DB);return e>=this.t?0!=this.s:0!=(this[e]&1<<t%this.DB)},t.prototype.setBit=function(t){return this.changeBit(t,c)},t.prototype.clearBit=function(t){return this.changeBit(t,a)},t.prototype.flipBit=function(t){return this.changeBit(t,f)},t.prototype.add=function(t){var e=m();return this.addTo(t,e),e},t.prototype.subtract=function(t){var e=m();return this.subTo(t,e),e},t.prototype.multiply=function(t){var e=m();return this.multiplyTo(t,e),e},t.prototype.divide=function(t){var e=m();return this.divRemTo(t,e,null),e},t.prototype.remainder=function(t){var e=m();return this.divRemTo(t,null,e),e},t.prototype.divideAndRemainder=function(t){var e=m(),r=m();return this.divRemTo(t,e,r),[e,r]},t.prototype.modPow=function(t,e){var r,i,n=t.bitLength(),s=x(1);if(n<=0)return s;r=n<18?1:n<48?3:n<144?4:n<768?5:6,i=n<8?new y(e):e.isEven()?new b(e):new v(e);var o=[],h=3,u=r-1,a=(1<<r)-1;if(o[1]=i.convert(this),r>1){var c=m();for(i.sqrTo(o[1],c);h<=a;)o[h]=m(),i.mulTo(c,o[h-2],o[h]),h+=2}var f,l,p=t.t-1,g=!0,d=m();for(n=_(t[p])-1;p>=0;){for(n>=u?f=t[p]>>n-u&a:(f=(t[p]&(1<<n+1)-1)<<u-n,p>0&&(f|=t[p-1]>>this.DB+n-u)),h=r;0==(1&f);)f>>=1,--h;if((n-=h)<0&&(n+=this.DB,--p),g)o[f].copyTo(s),g=!1;else{for(;h>1;)i.sqrTo(s,d),i.sqrTo(d,s),h-=2;h>0?i.sqrTo(s,d):(l=s,s=d,d=l),i.mulTo(d,o[f],s)}for(;p>=0&&0==(t[p]&1<<n);)i.sqrTo(s,d),l=s,s=d,d=l,--n<0&&(n=this.DB-1,--p)}return i.revert(s)},t.prototype.modInverse=function(e){var r=e.isEven();if(this.isEven()&&r||0==e.signum())return t.ZERO;for(var i=e.clone(),n=this.clone(),s=x(1),o=x(0),h=x(0),u=x(1);0!=i.signum();){for(;i.isEven();)i.rShiftTo(1,i),r?(s.isEven()&&o.isEven()||(s.addTo(this,s),o.subTo(e,o)),s.rShiftTo(1,s)):o.isEven()||o.subTo(e,o),o.rShiftTo(1,o);for(;n.isEven();)n.rShiftTo(1,n),r?(h.isEven()&&u.isEven()||(h.addTo(this,h),u.subTo(e,u)),h.rShiftTo(1,h)):u.isEven()||u.subTo(e,u),u.rShiftTo(1,u);i.compareTo(n)>=0?(i.subTo(n,i),r&&s.subTo(h,s),o.subTo(u,o)):(n.subTo(i,n),r&&h.subTo(s,h),u.subTo(o,u))}return 0!=n.compareTo(t.ONE)?t.ZERO:u.compareTo(e)>=0?u.subtract(e):u.signum()<0?(u.addTo(e,u),u.signum()<0?u.add(e):u):u},t.prototype.pow=function(t){return this.exp(t,new d)},t.prototype.gcd=function(t){var e=this.s<0?this.negate():this.clone(),r=t.s<0?t.negate():t.clone();if(e.compareTo(r)<0){var i=e;e=r,r=i}var n=e.getLowestSetBit(),s=r.getLowestSetBit();if(s<0)return e;for(n<s&&(s=n),s>0&&(e.rShiftTo(s,e),r.rShiftTo(s,r));e.signum()>0;)(n=e.getLowestSetBit())>0&&e.rShiftTo(n,e),(n=r.getLowestSetBit())>0&&r.rShiftTo(n,r),e.compareTo(r)>=0?(e.subTo(r,e),e.rShiftTo(1,e)):(r.subTo(e,r),r.rShiftTo(1,r));return s>0&&r.lShiftTo(s,r),r},t.prototype.isProbablePrime=function(t){var e,r=this.abs();if(1==r.t&&r[0]<=l[l.length-1]){for(e=0;e<l.length;++e)if(r[0]==l[e])return!0;return!1}if(r.isEven())return!1;for(e=1;e<l.length;){for(var i=l[e],n=e+1;n<l.length&&i<p;)i*=l[n++];for(i=r.modInt(i);e<n;)if(i%l[e++]==0)return!1}return r.millerRabin(t)},t.prototype.copyTo=function(t){for(var e=this.t-1;e>=0;--e)t[e]=this[e];t.t=this.t,t.s=this.s},t.prototype.fromInt=function(t){this.t=1,this.s=t<0?-1:0,t>0?this[0]=t:t<-1?this[0]=t+this.DV:this.t=0},t.prototype.fromString=function(e,r){var i;if(16==r)i=4;else if(8==r)i=3;else if(256==r)i=8;else if(2==r)i=1;else if(32==r)i=5;else{if(4!=r)return void this.fromRadix(e,r);i=2}this.t=0,this.s=0;for(var n=e.length,s=!1,o=0;--n>=0;){var h=8==i?255&+e[n]:w(e,n);h<0?"-"==e.charAt(n)&&(s=!0):(s=!1,0==o?this[this.t++]=h:o+i>this.DB?(this[this.t-1]|=(h&(1<<this.DB-o)-1)<<o,this[this.t++]=h>>this.DB-o):this[this.t-1]|=h<<o,(o+=i)>=this.DB&&(o-=this.DB))}8==i&&0!=(128&+e[0])&&(this.s=-1,o>0&&(this[this.t-1]|=(1<<this.DB-o)-1<<o)),this.clamp(),s&&t.ZERO.subTo(this,this)},t.prototype.clamp=function(){for(var t=this.s&this.DM;this.t>0&&this[this.t-1]==t;)--this.t},t.prototype.dlShiftTo=function(t,e){var r;for(r=this.t-1;r>=0;--r)e[r+t]=this[r];for(r=t-1;r>=0;--r)e[r]=0;e.t=this.t+t,e.s=this.s},t.prototype.drShiftTo=function(t,e){for(var r=t;r<this.t;++r)e[r-t]=this[r];e.t=Math.max(this.t-t,0),e.s=this.s},t.prototype.lShiftTo=function(t,e){for(var r=t%this.DB,i=this.DB-r,n=(1<<i)-1,s=Math.floor(t/this.DB),o=this.s<<r&this.DM,h=this.t-1;h>=0;--h)e[h+s+1]=this[h]>>i|o,o=(this[h]&n)<<r;for(h=s-1;h>=0;--h)e[h]=0;e[s]=o,e.t=this.t+s+1,e.s=this.s,e.clamp()},t.prototype.rShiftTo=function(t,e){e.s=this.s;var r=Math.floor(t/this.DB);if(r>=this.t)e.t=0;else{var i=t%this.DB,n=this.DB-i,s=(1<<i)-1;e[0]=this[r]>>i;for(var o=r+1;o<this.t;++o)e[o-r-1]|=(this[o]&s)<<n,e[o-r]=this[o]>>i;i>0&&(e[this.t-r-1]|=(this.s&s)<<n),e.t=this.t-r,e.clamp()}},t.prototype.subTo=function(t,e){for(var r=0,i=0,n=Math.min(t.t,this.t);r<n;)i+=this[r]-t[r],e[r++]=i&this.DM,i>>=this.DB;if(t.t<this.t){for(i-=t.s;r<this.t;)i+=this[r],e[r++]=i&this.DM,i>>=this.DB;i+=this.s}else{for(i+=this.s;r<t.t;)i-=t[r],e[r++]=i&this.DM,i>>=this.DB;i-=t.s}e.s=i<0?-1:0,i<-1?e[r++]=this.DV+i:i>0&&(e[r++]=i),e.t=r,e.clamp()},t.prototype.multiplyTo=function(e,r){var i=this.abs(),n=e.abs(),s=i.t;for(r.t=s+n.t;--s>=0;)r[s]=0;for(s=0;s<n.t;++s)r[s+i.t]=i.am(0,n[s],r,s,0,i.t);r.s=0,r.clamp(),this.s!=e.s&&t.ZERO.subTo(r,r)},t.prototype.squareTo=function(t){for(var e=this.abs(),r=t.t=2*e.t;--r>=0;)t[r]=0;for(r=0;r<e.t-1;++r){var i=e.am(r,e[r],t,2*r,0,1);(t[r+e.t]+=e.am(r+1,2*e[r],t,2*r+1,i,e.t-r-1))>=e.DV&&(t[r+e.t]-=e.DV,t[r+e.t+1]=1)}t.t>0&&(t[t.t-1]+=e.am(r,e[r],t,2*r,0,1)),t.s=0,t.clamp()},t.prototype.divRemTo=function(e,r,i){var n=e.abs();if(!(n.t<=0)){var s=this.abs();if(s.t<n.t)return null!=r&&r.fromInt(0),void(null!=i&&this.copyTo(i));null==i&&(i=m());var o=m(),h=this.s,u=e.s,a=this.DB-_(n[n.t-1]);a>0?(n.lShiftTo(a,o),s.lShiftTo(a,i)):(n.copyTo(o),s.copyTo(i));var c=o.t,f=o[c-1];if(0!=f){var l=f*(1<<this.F1)+(c>1?o[c-2]>>this.F2:0),p=this.FV/l,g=(1<<this.F1)/l,d=1<<this.F2,y=i.t,v=y-c,b=null==r?m():r;for(o.dlShiftTo(v,b),i.compareTo(b)>=0&&(i[i.t++]=1,i.subTo(b,i)),t.ONE.dlShiftTo(c,b),b.subTo(o,o);o.t<c;)o[o.t++]=0;for(;--v>=0;){var S=i[--y]==f?this.DM:Math.floor(i[y]*p+(i[y-1]+d)*g);if((i[y]+=o.am(0,S,i,v,0,c))<S)for(o.dlShiftTo(v,b),i.subTo(b,i);i[y]<--S;)i.subTo(b,i)}null!=r&&(i.drShiftTo(c,r),h!=u&&t.ZERO.subTo(r,r)),i.t=c,i.clamp(),a>0&&i.rShiftTo(a,i),h<0&&t.ZERO.subTo(i,i)}}},t.prototype.invDigit=function(){if(this.t<1)return 0;var t=this[0];if(0==(1&t))return 0;var e=3&t;return(e=(e=(e=(e=e*(2-(15&t)*e)&15)*(2-(255&t)*e)&255)*(2-((65535&t)*e&65535))&65535)*(2-t*e%this.DV)%this.DV)>0?this.DV-e:-e},t.prototype.isEven=function(){return 0==(this.t>0?1&this[0]:this.s)},t.prototype.exp=function(e,r){if(e>4294967295||e<1)return t.ONE;var i=m(),n=m(),s=r.convert(this),o=_(e)-1;for(s.copyTo(i);--o>=0;)if(r.sqrTo(i,n),(e&1<<o)>0)r.mulTo(n,s,i);else{var h=i;i=n,n=h}return r.revert(i)},t.prototype.chunkSize=function(t){return Math.floor(Math.LN2*this.DB/Math.log(t))},t.prototype.toRadix=function(t){if(null==t&&(t=10),0==this.signum()||t<2||t>36)return"0";var e=this.chunkSize(t),r=Math.pow(t,e),i=x(r),n=m(),s=m(),o="";for(this.divRemTo(i,n,s);n.signum()>0;)o=(r+s.intValue()).toString(t).substr(1)+o,n.divRemTo(i,n,s);return s.intValue().toString(t)+o},t.prototype.fromRadix=function(e,r){this.fromInt(0),null==r&&(r=10);for(var i=this.chunkSize(r),n=Math.pow(r,i),s=!1,o=0,h=0,u=0;u<e.length;++u){var a=w(e,u);a<0?"-"==e.charAt(u)&&0==this.signum()&&(s=!0):(h=r*h+a,++o>=i&&(this.dMultiply(n),this.dAddOffset(h,0),o=0,h=0))}o>0&&(this.dMultiply(Math.pow(r,o)),this.dAddOffset(h,0)),s&&t.ZERO.subTo(this,this)},t.prototype.fromNumber=function(e,r,i){if("number"==typeof r)if(e<2)this.fromInt(1);else for(this.fromNumber(e,i),this.testBit(e-1)||this.bitwiseTo(t.ONE.shiftLeft(e-1),c,this),this.isEven()&&this.dAddOffset(1,0);!this.isProbablePrime(r);)this.dAddOffset(2,0),this.bitLength()>e&&this.subTo(t.ONE.shiftLeft(e-1),this);else{var n=[],s=7&e;n.length=1+(e>>3),r.nextBytes(n),s>0?n[0]&=(1<<s)-1:n[0]=0,this.fromString(n,256)}},t.prototype.bitwiseTo=function(t,e,r){var i,n,s=Math.min(t.t,this.t);for(i=0;i<s;++i)r[i]=e(this[i],t[i]);if(t.t<this.t){for(n=t.s&this.DM,i=s;i<this.t;++i)r[i]=e(this[i],n);r.t=this.t}else{for(n=this.s&this.DM,i=s;i<t.t;++i)r[i]=e(n,t[i]);r.t=t.t}r.s=e(this.s,t.s),r.clamp()},t.prototype.changeBit=function(e,r){var i=t.ONE.shiftLeft(e);return this.bitwiseTo(i,r,i),i},t.prototype.addTo=function(t,e){for(var r=0,i=0,n=Math.min(t.t,this.t);r<n;)i+=this[r]+t[r],e[r++]=i&this.DM,i>>=this.DB;if(t.t<this.t){for(i+=t.s;r<this.t;)i+=this[r],e[r++]=i&this.DM,i>>=this.DB;i+=this.s}else{for(i+=this.s;r<t.t;)i+=t[r],e[r++]=i&this.DM,i>>=this.DB;i+=t.s}e.s=i<0?-1:0,i>0?e[r++]=i:i<-1&&(e[r++]=this.DV+i),e.t=r,e.clamp()},t.prototype.dMultiply=function(t){this[this.t]=this.am(0,t-1,this,0,0,this.t),++this.t,this.clamp()},t.prototype.dAddOffset=function(t,e){if(0!=t){for(;this.t<=e;)this[this.t++]=0;for(this[e]+=t;this[e]>=this.DV;)this[e]-=this.DV,++e>=this.t&&(this[this.t++]=0),++this[e]}},t.prototype.multiplyLowerTo=function(t,e,r){var i=Math.min(this.t+t.t,e);for(r.s=0,r.t=i;i>0;)r[--i]=0;for(var n=r.t-this.t;i<n;++i)r[i+this.t]=this.am(0,t[i],r,i,0,this.t);for(n=Math.min(t.t,e);i<n;++i)this.am(0,t[i],r,i,0,e-i);r.clamp()},t.prototype.multiplyUpperTo=function(t,e,r){--e;var i=r.t=this.t+t.t-e;for(r.s=0;--i>=0;)r[i]=0;for(i=Math.max(e-this.t,0);i<t.t;++i)r[this.t+i-e]=this.am(e-i,t[i],r,0,0,this.t+i-e);r.clamp(),r.drShiftTo(1,r)},t.prototype.modInt=function(t){if(t<=0)return 0;var e=this.DV%t,r=this.s<0?t-1:0;if(this.t>0)if(0==e)r=this[0]%t;else for(var i=this.t-1;i>=0;--i)r=(e*r+this[i])%t;return r},t.prototype.millerRabin=function(e){var r=this.subtract(t.ONE),i=r.getLowestSetBit();if(i<=0)return!1;var n=r.shiftRight(i);(e=e+1>>1)>l.length&&(e=l.length);for(var s=m(),o=0;o<e;++o){s.fromInt(l[Math.floor(Math.random()*l.length)]);var h=s.modPow(n,this);if(0!=h.compareTo(t.ONE)&&0!=h.compareTo(r)){for(var u=1;u++<i&&0!=h.compareTo(r);)if(0==(h=h.modPowInt(2,this)).compareTo(t.ONE))return!1;if(0!=h.compareTo(r))return!1}}return!0},t.prototype.square=function(){var t=m();return this.squareTo(t),t},t.prototype.gcda=function(t,e){var r=this.s<0?this.negate():this.clone(),i=t.s<0?t.negate():t.clone();if(r.compareTo(i)<0){var n=r;r=i,i=n}var s=r.getLowestSetBit(),o=i.getLowestSetBit();if(o<0)e(r);else{s<o&&(o=s),o>0&&(r.rShiftTo(o,r),i.rShiftTo(o,i));var h=function(){(s=r.getLowestSetBit())>0&&r.rShiftTo(s,r),(s=i.getLowestSetBit())>0&&i.rShiftTo(s,i),r.compareTo(i)>=0?(r.subTo(i,r),r.rShiftTo(1,r)):(i.subTo(r,i),i.rShiftTo(1,i)),r.signum()>0?setTimeout(h,0):(o>0&&i.lShiftTo(o,i),setTimeout((function(){e(i)}),0))};setTimeout(h,10)}},t.prototype.fromNumberAsync=function(e,r,i,n){if("number"==typeof r)if(e<2)this.fromInt(1);else{this.fromNumber(e,i),this.testBit(e-1)||this.bitwiseTo(t.ONE.shiftLeft(e-1),c,this),this.isEven()&&this.dAddOffset(1,0);var s=this,o=function(){s.dAddOffset(2,0),s.bitLength()>e&&s.subTo(t.ONE.shiftLeft(e-1),s),s.isProbablePrime(r)?setTimeout((function(){n()}),0):setTimeout(o,0)};setTimeout(o,0)}else{var h=[],u=7&e;h.length=1+(e>>3),r.nextBytes(h),u>0?h[0]&=(1<<u)-1:h[0]=0,this.fromString(h,256)}},t}();r.__esModule||Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"BigInteger",{enumerable:!0,configurable:!0,get:function(){return g}});var d=function(){function t(){}return t.prototype.convert=function(t){return t},t.prototype.revert=function(t){return t},t.prototype.mulTo=function(t,e,r){t.multiplyTo(e,r)},t.prototype.sqrTo=function(t,e){t.squareTo(e)},t}(),y=function(){function t(t){this.m=t}return t.prototype.convert=function(t){return t.s<0||t.compareTo(this.m)>=0?t.mod(this.m):t},t.prototype.revert=function(t){return t},t.prototype.reduce=function(t){t.divRemTo(this.m,null,t)},t.prototype.mulTo=function(t,e,r){t.multiplyTo(e,r),this.reduce(r)},t.prototype.sqrTo=function(t,e){t.squareTo(e),this.reduce(e)},t}(),v=function(){function t(t){this.m=t,this.mp=t.invDigit(),this.mpl=32767&this.mp,this.mph=this.mp>>15,this.um=(1<<t.DB-15)-1,this.mt2=2*t.t}return t.prototype.convert=function(t){var e=m();return t.abs().dlShiftTo(this.m.t,e),e.divRemTo(this.m,null,e),t.s<0&&e.compareTo(g.ZERO)>0&&this.m.subTo(e,e),e},t.prototype.revert=function(t){var e=m();return t.copyTo(e),this.reduce(e),e},t.prototype.reduce=function(t){for(;t.t<=this.mt2;)t[t.t++]=0;for(var e=0;e<this.m.t;++e){var r=32767&t[e],i=r*this.mpl+((r*this.mph+(t[e]>>15)*this.mpl&this.um)<<15)&t.DM;for(t[r=e+this.m.t]+=this.m.am(0,i,t,e,0,this.m.t);t[r]>=t.DV;)t[r]-=t.DV,t[++r]++}t.clamp(),t.drShiftTo(this.m.t,t),t.compareTo(this.m)>=0&&t.subTo(this.m,t)},t.prototype.mulTo=function(t,e,r){t.multiplyTo(e,r),this.reduce(r)},t.prototype.sqrTo=function(t,e){t.squareTo(e),this.reduce(e)},t}(),b=function(){function t(t){this.m=t,this.r2=m(),this.q3=m(),g.ONE.dlShiftTo(2*t.t,this.r2),this.mu=this.r2.divide(t)}return t.prototype.convert=function(t){if(t.s<0||t.t>2*this.m.t)return t.mod(this.m);if(t.compareTo(this.m)<0)return t;var e=m();return t.copyTo(e),this.reduce(e),e},t.prototype.revert=function(t){return t},t.prototype.reduce=function(t){for(t.drShiftTo(this.m.t-1,this.r2),t.t>this.m.t+1&&(t.t=this.m.t+1,t.clamp()),this.mu.multiplyUpperTo(this.r2,this.m.t+1,this.q3),this.m.multiplyLowerTo(this.q3,this.m.t+1,this.r2);t.compareTo(this.r2)<0;)t.dAddOffset(1,this.m.t+1);for(t.subTo(this.r2,t);t.compareTo(this.m)>=0;)t.subTo(this.m,t)},t.prototype.mulTo=function(t,e,r){t.multiplyTo(e,r),this.reduce(r)},t.prototype.sqrTo=function(t,e){t.squareTo(e),this.reduce(e)},t}();function m(){return new g(null)}r.__esModule||Object.defineProperty(r,"__esModule",{value:!0}),r.nbi=m,r.__esModule||Object.defineProperty(r,"__esModule",{value:!0}),r.parseBigInt=function(t,e){return new g(t,e)};var S="undefined"!=typeof navigator;S&&"Microsoft Internet Explorer"==navigator.appName?(g.prototype.am=function(t,e,r,i,n,s){for(var o=32767&e,h=e>>15;--s>=0;){var u=32767&this[t],a=this[t++]>>15,c=h*u+a*o;n=((u=o*u+((32767&c)<<15)+r[i]+(1073741823&n))>>>30)+(c>>>15)+h*a+(n>>>30),r[i++]=1073741823&u}return n},i=30):S&&"Netscape"!=navigator.appName?(g.prototype.am=function(t,e,r,i,n,s){for(;--s>=0;){var o=e*this[t++]+r[i]+n;n=Math.floor(o/67108864),r[i++]=67108863&o}return n},i=26):(g.prototype.am=function(t,e,r,i,n,s){for(var o=16383&e,h=e>>14;--s>=0;){var u=16383&this[t],a=this[t++]>>14,c=h*u+a*o;n=((u=o*u+((16383&c)<<14)+r[i]+n)>>28)+(c>>14)+h*a,r[i++]=268435455&u}return n},i=28),g.prototype.DB=i,g.prototype.DM=(1<<i)-1,g.prototype.DV=1<<i,g.prototype.FV=Math.pow(2,52),g.prototype.F1=52-i,g.prototype.F2=2*i-52;var T,E,D=[];for(T="0".charCodeAt(0),E=0;E<=9;++E)D[T++]=E;for(T="a".charCodeAt(0),E=10;E<36;++E)D[T++]=E;for(T="A".charCodeAt(0),E=10;E<36;++E)D[T++]=E;function w(t,e){var r=D[t.charCodeAt(e)];return null==r?-1:r}function x(t){var e=m();return e.fromInt(t),e}function _(t){var e,r=1;return 0!=(e=t>>>16)&&(t=e,r+=16),0!=(e=t>>8)&&(t=e,r+=8),0!=(e=t>>4)&&(t=e,r+=4),0!=(e=t>>2)&&(t=e,r+=2),0!=(e=t>>1)&&(t=e,r+=1),r}r.__esModule||Object.defineProperty(r,"__esModule",{value:!0}),r.intAt=w,r.__esModule||Object.defineProperty(r,"__esModule",{value:!0}),r.nbv=x,r.__esModule||Object.defineProperty(r,"__esModule",{value:!0}),r.nbits=_,g.ZERO=x(0),g.ONE=x(1)}),(function(t){return r({"./util":1667461081099}[t],t)})),e(1667461081107,(function(t,e,r){var i,n,s=t("./prng4"),o=s.prng_newstate,h=s.rng_psize,u=null;function a(){if(null==i){for(i=o();n<h;){var t=Math.floor(65536*Math.random());u[n++]=255&t}for(i.init(u),n=0;n<u.length;++n)u[n]=0;n=0}return i.next()}null==u&&(u=[],n=0);var c=function(){function t(){}return t.prototype.nextBytes=function(t){for(var e=0;e<t.length;++e)t[e]=a()},t}();r.__esModule||Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"SecureRandom",{enumerable:!0,configurable:!0,get:function(){return c}})}),(function(t){return r({"./prng4":1667461081108}[t],t)})),e(1667461081108,(function(t,e,r){var i=function(){function t(){this.i=0,this.j=0,this.S=[]}return t.prototype.init=function(t){var e,r,i;for(e=0;e<256;++e)this.S[e]=e;for(r=0,e=0;e<256;++e)r=r+this.S[e]+t[e%t.length]&255,i=this.S[e],this.S[e]=this.S[r],this.S[r]=i;this.i=0,this.j=0},t.prototype.next=function(){var t;return this.i=this.i+1&255,this.j=this.j+this.S[this.i]&255,t=this.S[this.i],this.S[this.i]=this.S[this.j],this.S[this.j]=t,this.S[t+this.S[this.i]&255]},t}();r.__esModule||Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"Arcfour",{enumerable:!0,configurable:!0,get:function(){return i}}),r.__esModule||Object.defineProperty(r,"__esModule",{value:!0}),r.prng_newstate=function(){return new i},r.__esModule||Object.defineProperty(r,"__esModule",{value:!0}),r.rng_psize=256}),(function(t){return r({}[t],t)})),e(1667461081109,(function(t,e,r){var i=t("../jsbn/jsbn").BigInteger,n=t("./yahoo").YAHOO;
/**
     * @fileOverview
     * @name asn1-1.0.js
     * @author Kenji Urushima kenji.urushima@gmail.com
     * @version asn1 1.0.13 (2017-Jun-02)
     * @since jsrsasign 2.1
     * @license <a href="https://kjur.github.io/jsrsasign/license/">MIT License</a>
     */
r.__esModule||Object.defineProperty(r,"__esModule",{value:!0});var s=r.KJUR={};void 0!==s.asn1&&s.asn1||(s.asn1={}),s.asn1.ASN1Util=new function(){this.integerToByteHex=function(t){var e=t.toString(16);return e.length%2==1&&(e="0"+e),e},this.bigIntToMinTwosComplementsHex=function(t){var e=t.toString(16);if("-"!=e.substr(0,1))e.length%2==1?e="0"+e:e.match(/^[0-7]/)||(e="00"+e);else{var r=e.substr(1).length;r%2==1?r+=1:e.match(/^[0-7]/)||(r+=2);for(var n="",s=0;s<r;s++)n+="f";e=new i(n,16).xor(t).add(i.ONE).toString(16).replace(/^-/,"")}return e},this.getPEMStringFromHex=function(t,e){return hextopem(t,e)},this.newObject=function(t){var e=s.asn1,r=e.DERBoolean,i=e.DERInteger,n=e.DERBitString,o=e.DEROctetString,h=e.DERNull,u=e.DERObjectIdentifier,a=e.DEREnumerated,c=e.DERUTF8String,f=e.DERNumericString,l=e.DERPrintableString,p=e.DERTeletexString,g=e.DERIA5String,d=e.DERUTCTime,y=e.DERGeneralizedTime,v=e.DERSequence,b=e.DERSet,m=e.DERTaggedObject,S=e.ASN1Util.newObject,T=Object.keys(t);if(1!=T.length)throw"key of param shall be only one.";var E=T[0];if(-1==":bool:int:bitstr:octstr:null:oid:enum:utf8str:numstr:prnstr:telstr:ia5str:utctime:gentime:seq:set:tag:".indexOf(":"+E+":"))throw"undefined key: "+E;if("bool"==E)return new r(t[E]);if("int"==E)return new i(t[E]);if("bitstr"==E)return new n(t[E]);if("octstr"==E)return new o(t[E]);if("null"==E)return new h(t[E]);if("oid"==E)return new u(t[E]);if("enum"==E)return new a(t[E]);if("utf8str"==E)return new c(t[E]);if("numstr"==E)return new f(t[E]);if("prnstr"==E)return new l(t[E]);if("telstr"==E)return new p(t[E]);if("ia5str"==E)return new g(t[E]);if("utctime"==E)return new d(t[E]);if("gentime"==E)return new y(t[E]);if("seq"==E){for(var D=t[E],w=[],x=0;x<D.length;x++){var _=S(D[x]);w.push(_)}return new v({array:w})}if("set"==E){for(D=t[E],w=[],x=0;x<D.length;x++)_=S(D[x]),w.push(_);return new b({array:w})}if("tag"==E){var O=t[E];if("[object Array]"===Object.prototype.toString.call(O)&&3==O.length){var R=S(O[2]);return new m({tag:O[0],explicit:O[1],obj:R})}var B={};if(void 0!==O.explicit&&(B.explicit=O.explicit),void 0!==O.tag&&(B.tag=O.tag),void 0===O.obj)throw"obj shall be specified for 'tag'.";return B.obj=S(O.obj),new m(B)}},this.jsonToASN1HEX=function(t){return this.newObject(t).getEncodedHex()}},s.asn1.ASN1Util.oidHexToInt=function(t){for(var e="",r=parseInt(t.substr(0,2),16),n=(e=Math.floor(r/40)+"."+r%40,""),s=2;s<t.length;s+=2){var o=("00000000"+parseInt(t.substr(s,2),16).toString(2)).slice(-8);n+=o.substr(1,7),"0"==o.substr(0,1)&&(e=e+"."+new i(n,2).toString(10),n="")}return e},s.asn1.ASN1Util.oidIntToHex=function(t){var e=function(t){var e=t.toString(16);return 1==e.length&&(e="0"+e),e},r=function(t){var r="",n=new i(t,10).toString(2),s=7-n.length%7;7==s&&(s=0);for(var o="",h=0;h<s;h++)o+="0";for(n=o+n,h=0;h<n.length-1;h+=7){var u=n.substr(h,7);h!=n.length-7&&(u="1"+u),r+=e(parseInt(u,2))}return r};if(!t.match(/^[0-9.]+$/))throw"malformed oid string: "+t;var n="",s=t.split("."),o=40*parseInt(s[0])+parseInt(s[1]);n+=e(o),s.splice(0,2);for(var h=0;h<s.length;h++)n+=r(s[h]);return n},s.asn1.ASN1Object=function(){this.getLengthHexFromValue=function(){if(void 0===this.hV||null==this.hV)throw"this.hV is null or undefined.";if(this.hV.length%2==1)throw"value hex must be even length: n="+"".length+",v="+this.hV;var t=this.hV.length/2,e=t.toString(16);if(e.length%2==1&&(e="0"+e),t<128)return e;var r=e.length/2;if(r>15)throw"ASN.1 length too long to represent by 8x: n = "+t.toString(16);return(128+r).toString(16)+e},this.getEncodedHex=function(){return(null==this.hTLV||this.isModified)&&(this.hV=this.getFreshValueHex(),this.hL=this.getLengthHexFromValue(),this.hTLV=this.hT+this.hL+this.hV,this.isModified=!1),this.hTLV},this.getValueHex=function(){return this.getEncodedHex(),this.hV},this.getFreshValueHex=function(){return""}},s.asn1.DERAbstractString=function(t){s.asn1.DERAbstractString.superclass.constructor.call(this),this.getString=function(){return this.s},this.setString=function(t){this.hTLV=null,this.isModified=!0,this.s=t,this.hV=stohex(this.s)},this.setStringHex=function(t){this.hTLV=null,this.isModified=!0,this.s=null,this.hV=t},this.getFreshValueHex=function(){return this.hV},void 0!==t&&("string"==typeof t?this.setString(t):void 0!==t.str?this.setString(t.str):void 0!==t.hex&&this.setStringHex(t.hex))},n.lang.extend(s.asn1.DERAbstractString,s.asn1.ASN1Object),s.asn1.DERAbstractTime=function(t){s.asn1.DERAbstractTime.superclass.constructor.call(this),this.localDateToUTC=function(t){return utc=t.getTime()+6e4*t.getTimezoneOffset(),new Date(utc)},this.formatDate=function(t,e,r){var i=this.zeroPadding,n=this.localDateToUTC(t),s=String(n.getFullYear());"utc"==e&&(s=s.substr(2,2));var o=s+i(String(n.getMonth()+1),2)+i(String(n.getDate()),2)+i(String(n.getHours()),2)+i(String(n.getMinutes()),2)+i(String(n.getSeconds()),2);if(!0===r){var h=n.getMilliseconds();if(0!=h){var u=i(String(h),3);o=o+"."+(u=u.replace(/[0]+$/,""))}}return o+"Z"},this.zeroPadding=function(t,e){return t.length>=e?t:new Array(e-t.length+1).join("0")+t},this.getString=function(){return this.s},this.setString=function(t){this.hTLV=null,this.isModified=!0,this.s=t,this.hV=stohex(t)},this.setByDateValue=function(t,e,r,i,n,s){var o=new Date(Date.UTC(t,e-1,r,i,n,s,0));this.setByDate(o)},this.getFreshValueHex=function(){return this.hV}},n.lang.extend(s.asn1.DERAbstractTime,s.asn1.ASN1Object),s.asn1.DERAbstractStructured=function(t){s.asn1.DERAbstractString.superclass.constructor.call(this),this.setByASN1ObjectArray=function(t){this.hTLV=null,this.isModified=!0,this.asn1Array=t},this.appendASN1Object=function(t){this.hTLV=null,this.isModified=!0,this.asn1Array.push(t)},this.asn1Array=new Array,void 0!==t&&void 0!==t.array&&(this.asn1Array=t.array)},n.lang.extend(s.asn1.DERAbstractStructured,s.asn1.ASN1Object),s.asn1.DERBoolean=function(){s.asn1.DERBoolean.superclass.constructor.call(this),this.hT="01",this.hTLV="0101ff"},n.lang.extend(s.asn1.DERBoolean,s.asn1.ASN1Object),s.asn1.DERInteger=function(t){s.asn1.DERInteger.superclass.constructor.call(this),this.hT="02",this.setByBigInteger=function(t){this.hTLV=null,this.isModified=!0,this.hV=s.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t)},this.setByInteger=function(t){var e=new i(String(t),10);this.setByBigInteger(e)},this.setValueHex=function(t){this.hV=t},this.getFreshValueHex=function(){return this.hV},void 0!==t&&(void 0!==t.bigint?this.setByBigInteger(t.bigint):void 0!==t.int?this.setByInteger(t.int):"number"==typeof t?this.setByInteger(t):void 0!==t.hex&&this.setValueHex(t.hex))},n.lang.extend(s.asn1.DERInteger,s.asn1.ASN1Object),s.asn1.DERBitString=function(t){if(void 0!==t&&void 0!==t.obj){var e=s.asn1.ASN1Util.newObject(t.obj);t.hex="00"+e.getEncodedHex()}s.asn1.DERBitString.superclass.constructor.call(this),this.hT="03",this.setHexValueIncludingUnusedBits=function(t){this.hTLV=null,this.isModified=!0,this.hV=t},this.setUnusedBitsAndHexValue=function(t,e){if(t<0||7<t)throw"unused bits shall be from 0 to 7: u = "+t;var r="0"+t;this.hTLV=null,this.isModified=!0,this.hV=r+e},this.setByBinaryString=function(t){var e=8-(t=t.replace(/0+$/,"")).length%8;8==e&&(e=0);for(var r=0;r<=e;r++)t+="0";var i="";for(r=0;r<t.length-1;r+=8){var n=t.substr(r,8),s=parseInt(n,2).toString(16);1==s.length&&(s="0"+s),i+=s}this.hTLV=null,this.isModified=!0,this.hV="0"+e+i},this.setByBooleanArray=function(t){for(var e="",r=0;r<t.length;r++)1==t[r]?e+="1":e+="0";this.setByBinaryString(e)},this.newFalseArray=function(t){for(var e=new Array(t),r=0;r<t;r++)e[r]=!1;return e},this.getFreshValueHex=function(){return this.hV},void 0!==t&&("string"==typeof t&&t.toLowerCase().match(/^[0-9a-f]+$/)?this.setHexValueIncludingUnusedBits(t):void 0!==t.hex?this.setHexValueIncludingUnusedBits(t.hex):void 0!==t.bin?this.setByBinaryString(t.bin):void 0!==t.array&&this.setByBooleanArray(t.array))},n.lang.extend(s.asn1.DERBitString,s.asn1.ASN1Object),s.asn1.DEROctetString=function(t){if(void 0!==t&&void 0!==t.obj){var e=s.asn1.ASN1Util.newObject(t.obj);t.hex=e.getEncodedHex()}s.asn1.DEROctetString.superclass.constructor.call(this,t),this.hT="04"},n.lang.extend(s.asn1.DEROctetString,s.asn1.DERAbstractString),s.asn1.DERNull=function(){s.asn1.DERNull.superclass.constructor.call(this),this.hT="05",this.hTLV="0500"},n.lang.extend(s.asn1.DERNull,s.asn1.ASN1Object),s.asn1.DERObjectIdentifier=function(t){var e=function(t){var e=t.toString(16);return 1==e.length&&(e="0"+e),e},r=function(t){var r="",n=new i(t,10).toString(2),s=7-n.length%7;7==s&&(s=0);for(var o="",h=0;h<s;h++)o+="0";for(n=o+n,h=0;h<n.length-1;h+=7){var u=n.substr(h,7);h!=n.length-7&&(u="1"+u),r+=e(parseInt(u,2))}return r};s.asn1.DERObjectIdentifier.superclass.constructor.call(this),this.hT="06",this.setValueHex=function(t){this.hTLV=null,this.isModified=!0,this.s=null,this.hV=t},this.setValueOidString=function(t){if(!t.match(/^[0-9.]+$/))throw"malformed oid string: "+t;var i="",n=t.split("."),s=40*parseInt(n[0])+parseInt(n[1]);i+=e(s),n.splice(0,2);for(var o=0;o<n.length;o++)i+=r(n[o]);this.hTLV=null,this.isModified=!0,this.s=null,this.hV=i},this.setValueName=function(t){var e=s.asn1.x509.OID.name2oid(t);if(""===e)throw"DERObjectIdentifier oidName undefined: "+t;this.setValueOidString(e)},this.getFreshValueHex=function(){return this.hV},void 0!==t&&("string"==typeof t?t.match(/^[0-2].[0-9.]+$/)?this.setValueOidString(t):this.setValueName(t):void 0!==t.oid?this.setValueOidString(t.oid):void 0!==t.hex?this.setValueHex(t.hex):void 0!==t.name&&this.setValueName(t.name))},n.lang.extend(s.asn1.DERObjectIdentifier,s.asn1.ASN1Object),s.asn1.DEREnumerated=function(t){s.asn1.DEREnumerated.superclass.constructor.call(this),this.hT="0a",this.setByBigInteger=function(t){this.hTLV=null,this.isModified=!0,this.hV=s.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t)},this.setByInteger=function(t){var e=new i(String(t),10);this.setByBigInteger(e)},this.setValueHex=function(t){this.hV=t},this.getFreshValueHex=function(){return this.hV},void 0!==t&&(void 0!==t.int?this.setByInteger(t.int):"number"==typeof t?this.setByInteger(t):void 0!==t.hex&&this.setValueHex(t.hex))},n.lang.extend(s.asn1.DEREnumerated,s.asn1.ASN1Object),s.asn1.DERUTF8String=function(t){s.asn1.DERUTF8String.superclass.constructor.call(this,t),this.hT="0c"},n.lang.extend(s.asn1.DERUTF8String,s.asn1.DERAbstractString),s.asn1.DERNumericString=function(t){s.asn1.DERNumericString.superclass.constructor.call(this,t),this.hT="12"},n.lang.extend(s.asn1.DERNumericString,s.asn1.DERAbstractString),s.asn1.DERPrintableString=function(t){s.asn1.DERPrintableString.superclass.constructor.call(this,t),this.hT="13"},n.lang.extend(s.asn1.DERPrintableString,s.asn1.DERAbstractString),s.asn1.DERTeletexString=function(t){s.asn1.DERTeletexString.superclass.constructor.call(this,t),this.hT="14"},n.lang.extend(s.asn1.DERTeletexString,s.asn1.DERAbstractString),s.asn1.DERIA5String=function(t){s.asn1.DERIA5String.superclass.constructor.call(this,t),this.hT="16"},n.lang.extend(s.asn1.DERIA5String,s.asn1.DERAbstractString),s.asn1.DERUTCTime=function(t){s.asn1.DERUTCTime.superclass.constructor.call(this,t),this.hT="17",this.setByDate=function(t){this.hTLV=null,this.isModified=!0,this.date=t,this.s=this.formatDate(this.date,"utc"),this.hV=stohex(this.s)},this.getFreshValueHex=function(){return void 0===this.date&&void 0===this.s&&(this.date=new Date,this.s=this.formatDate(this.date,"utc"),this.hV=stohex(this.s)),this.hV},void 0!==t&&(void 0!==t.str?this.setString(t.str):"string"==typeof t&&t.match(/^[0-9]{12}Z$/)?this.setString(t):void 0!==t.hex?this.setStringHex(t.hex):void 0!==t.date&&this.setByDate(t.date))},n.lang.extend(s.asn1.DERUTCTime,s.asn1.DERAbstractTime),s.asn1.DERGeneralizedTime=function(t){s.asn1.DERGeneralizedTime.superclass.constructor.call(this,t),this.hT="18",this.withMillis=!1,this.setByDate=function(t){this.hTLV=null,this.isModified=!0,this.date=t,this.s=this.formatDate(this.date,"gen",this.withMillis),this.hV=stohex(this.s)},this.getFreshValueHex=function(){return void 0===this.date&&void 0===this.s&&(this.date=new Date,this.s=this.formatDate(this.date,"gen",this.withMillis),this.hV=stohex(this.s)),this.hV},void 0!==t&&(void 0!==t.str?this.setString(t.str):"string"==typeof t&&t.match(/^[0-9]{14}Z$/)?this.setString(t):void 0!==t.hex?this.setStringHex(t.hex):void 0!==t.date&&this.setByDate(t.date),!0===t.millis&&(this.withMillis=!0))},n.lang.extend(s.asn1.DERGeneralizedTime,s.asn1.DERAbstractTime),s.asn1.DERSequence=function(t){s.asn1.DERSequence.superclass.constructor.call(this,t),this.hT="30",this.getFreshValueHex=function(){for(var t="",e=0;e<this.asn1Array.length;e++)t+=this.asn1Array[e].getEncodedHex();return this.hV=t,this.hV}},n.lang.extend(s.asn1.DERSequence,s.asn1.DERAbstractStructured),s.asn1.DERSet=function(t){s.asn1.DERSet.superclass.constructor.call(this,t),this.hT="31",this.sortFlag=!0,this.getFreshValueHex=function(){for(var t=new Array,e=0;e<this.asn1Array.length;e++){var r=this.asn1Array[e];t.push(r.getEncodedHex())}return 1==this.sortFlag&&t.sort(),this.hV=t.join(""),this.hV},void 0!==t&&void 0!==t.sortflag&&0==t.sortflag&&(this.sortFlag=!1)},n.lang.extend(s.asn1.DERSet,s.asn1.DERAbstractStructured),s.asn1.DERTaggedObject=function(t){s.asn1.DERTaggedObject.superclass.constructor.call(this),this.hT="a0",this.hV="",this.isExplicit=!0,this.asn1Object=null,this.setASN1Object=function(t,e,r){this.hT=e,this.isExplicit=t,this.asn1Object=r,this.isExplicit?(this.hV=this.asn1Object.getEncodedHex(),this.hTLV=null,this.isModified=!0):(this.hV=null,this.hTLV=r.getEncodedHex(),this.hTLV=this.hTLV.replace(/^../,e),this.isModified=!1)},this.getFreshValueHex=function(){return this.hV},void 0!==t&&(void 0!==t.tag&&(this.hT=t.tag),void 0!==t.explicit&&(this.isExplicit=t.explicit),void 0!==t.obj&&(this.asn1Object=t.obj,this.setASN1Object(this.isExplicit,this.hT,this.asn1Object)))},n.lang.extend(s.asn1.DERTaggedObject,s.asn1.ASN1Object)}),(function(t){return r({"../jsbn/jsbn":1667461081106,"./yahoo":1667461081110}[t],t)})),e(1667461081110,(function(t,e,r){
/*!
    Copyright (c) 2011, Yahoo! Inc. All rights reserved.
    Code licensed under the BSD License:
    http://developer.yahoo.com/yui/license.html
    version: 2.9.0
    */
r.__esModule||Object.defineProperty(r,"__esModule",{value:!0}),(r.YAHOO={}).lang={extend:function(t,e,r){if(!e||!t)throw new Error("YAHOO.lang.extend failed, please check that all dependencies are included.");var i=function(){};if(i.prototype=e.prototype,t.prototype=new i,t.prototype.constructor=t,t.superclass=e.prototype,e.prototype.constructor==Object.prototype.constructor&&(e.prototype.constructor=e),r){var n;for(n in r)t.prototype[n]=r[n];var s=function(){},o=["toString","valueOf"];try{/MSIE/.test(navigator.userAgent)&&(s=function(t,e){for(n=0;n<o.length;n+=1){var r=o[n],i=e[r];"function"==typeof i&&i!=Object.prototype[r]&&(t[r]=i)}})}catch(t){}s(t.prototype,r)}}}}),(function(t){return r({}[t],t)})),e(1667461081111,(function(t,e,r){e.exports={version:"3.2.1"}}),(function(t){return r({}[t],t)})),r(1667461081096)); 
 			}); 
		define("service/dataService.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../utils/http.js"),t=require("../utils/util.js");module.exports={config:{},setConfig:function(e){Object.assign(this.config,e)},get:function(n,s){return e.query(e.apiUrl(),n,s).then((function(e){if(403==t.getStruct(e,"code")){var n=getApp();n&&(n.globalData.userInfo=null),wx.removeStorageSync("userInfo"),t.redirectToPage("login",{redirect:1})}return e}))},index:function(e,n){var s=this,a={accessToken:e,sch_id:n};return this.get("query ($accessToken: String!,$sch_id:Int!) {\n                admAuth(accessToken:$accessToken)\n                {\n                    schList:getSch{\n                        sch_id\n                        sch_name\n                    }\n                    statis(sch_id:$sch_id,date:2){\n                        getTotal   \n                    }\n                }\n            }",a).then((function(e){if(0==e.code){var n=t.getStruct(e,"data.admAuth"),a=t.getStruct(n,"schList");if(n&&a){var r=a[0];n.currentSch=s.getCurrentSch(r),n.yesterday=s.yesterdayStatis(n),s.findSch(a,n.currentSch)||(n.currentSch=r)}else n.currentSch={sch_id:0,sch_name:"没有学校可访问"};e.data=n}return e}))},tongji:function(e){var n=this,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,r=this.accessToken(),c="query ($accessToken: String!,$sch_id:Int!,$lib_id:Int,$date:Int!) {\n                admAuth(accessToken:$accessToken)\n                {\n                    libs: getLibs(sch_id: $sch_id) {\n                        id:lib_id\n                        title:lib_name\n                    }\n                    statis(sch_id:$sch_id,lib_id:$lib_id,date:$date){\n                        getTotal\n                    }\n                }\n            }",i={sch_id:e,lib_id:s,date:a,accessToken:r};return this.get(c,i).then((function(e){if(0==e.code){var s=t.getStruct(e,"data.admAuth");s.statis=n.getStatisData(s),e.data=s}return e}))},sendMsg:function(e,t,n){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",c="query($accessToken: String!,$endTime:String!,$userMobile:String!,$title:String!,$content:String!,$schId:String!,$showType:String!) {\n                admAuth(accessToken: $accessToken) {\n                    sendMsg(endTime: $endTime,userMobile: $userMobile,title: $title,content: $content,schId: $schId,showType: $showType)\n                }\n            }",i=this.accessToken(),o={accessToken:i,endTime:e,userMobile:s,title:t,content:n,schId:a,showType:r};return this.get(c,o).then((function(e){return e}))},removeCurrentSch:function(){delete getApp().globalData.currentSch,wx.removeStorageSync("currentSch")},setCurrentSch:function(e){getApp().globalData.currentSch=e,wx.setStorageSync("currentSch",e)},getCurrentSch:function(e){var t=getApp().globalData.currentSch||wx.getStorageSync("currentSch");return t||e},findSch:function(e,t){if(e instanceof Array)for(var n in e)if(e[n].sch_id===t.sch_id)return!0;return!1},free:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,s="query ($accessToken: String!, $sch_id: Int!, $lib_id: Int!) {\n                admAuth(accessToken: $accessToken) {\n                    libs: getLibs(sch_id: $sch_id) {\n                        id: lib_id\n                        title: lib_name\n                    }\n                    lib_layout: getLibDefaultLayout(sch_id: $sch_id, lib_id: $lib_id) {\n                        max_x\n                        max_y\n                        seats {\n                            x\n                            y\n                            type\n                            key\n                            name\n                            status\n                            seat_status\n                        }\n                    }\n                }\n            }",a=this.accessToken(),r={accessToken:a,sch_id:e,lib_id:n};return this.get(s,r).then((function(e){if(0==e.code){var n=t.getStruct(e,"data.admAuth");n instanceof Object||(n={}),e.data=n}return e}))},batMark:function(e,n){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",r="query ($accessToken: String!,$lib_id: Int!,$seat_keys:String!,$proofId:String,$msg:String) {\n                admAuth(accessToken: $accessToken) {\n                    msg:setfree(lib_id:$lib_id,seat_keys:$seat_keys,proofId:$proofId,msg:$msg)\n                }\n            }",c=this.accessToken(),i={accessToken:c,lib_id:e,seat_keys:n,proofId:s,msg:a};return this.get(r,i).then((function(e){if(0==e.code){var n=t.getStruct(e,"data.admAuth.msg");e.msg=n}return e}))},batFree:function(e,n){var s={accessToken:this.accessToken(),lib_id:e,seat_keys:n};return this.get("query ($accessToken: String!,  $lib_id: Int!,$seat_keys:String!) {\n                admAuth(accessToken: $accessToken) {\n                    msg:release(lib_id:$lib_id,seat_keys:$seat_keys)\n                }\n            }",s).then((function(e){if(0==e.code){var n=t.getStruct(e,"data.admAuth.msg");e.msg=n}return e}))},uploadProof:function(e){var n={accessToken:this.accessToken(),base64code:e};return this.get("query ($accessToken: String!,$base64code:String!) {\n                admAuth(accessToken: $accessToken) {\n                    uploadProof(base64code: $base64code)\n                }\n            }",n).then((function(e){if(0==e.code){var n=t.getStruct(e,"data.admAuth.uploadProof");e.msg=n}return e}))},removeProof:function(e){var n={accessToken:this.accessToken(),proofId:e};return this.get("query ($accessToken: String!,$proofId:Int!) {\n                admAuth(accessToken: $accessToken) {\n                    removeProof(proofId: $proofId)\n                }\n            }",n).then((function(e){if(0==e.code){var n=t.getStruct(e,"data.admAuth.removeProof");e.msg=n}return e}))},seatUserInfo:function(e,n){var s={accessToken:this.accessToken(),lib_id:e,seat_key:n};return this.get("query ($accessToken: String!,$lib_id:Int!,$seat_key:String!) {\n                admAuth(accessToken: $accessToken) {\n                    seatUserInfo(lib_id: $lib_id, seat_key: $seat_key){\n                        seatName\n                        userId\n                        userStudentNo\n                        userNick\n                        userStudentName\n                        userStudentDepartment\n                        userAvatar\n                    }\n                }\n            }",s).then((function(e){return console.log(e),0==e.code&&(e.data=t.getStruct(e,"data.admAuth.seatUserInfo")),e}))},qst:function(e,n,s){var a={accessToken:this.accessToken(),sch_id:e,isa:n,page:s};return this.get("query ($accessToken: String!, $sch_id: Int!, $isa: Int!,$page:Int!) {\n                admAuth(accessToken: $accessToken) {\n                    questions(isa:$isa,sch_id:$sch_id,page:$page){\n                        pageTotal,\n                        questionList{\n                            qst_id\n                            qst_title\n                            qst_username\n                            is_answer\n                            answer_msg\n                            answer_time\n                            created_at\n                        }\n                    }\n                }\n            }\n            ",a).then((function(e){if(0==e.code){console.log(e);var n=t.getStruct(e,"data.admAuth.questions.questionList",[]),s=t.getStruct(e,"data.admAuth.questions.pageTotal",1);e.data={qstList:n,pageTotal:s}}return e}))},black:function(e,n){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",r="query($accessToken: String!, $schId:Int!, $searchType:String!, $searchValue:String!,$page:Int!) {\n                admAuth(accessToken: $accessToken) {\n                    black(schId: $schId, page: $page,searchType:$searchType,searchValue:$searchValue) {\n                        list {\n                            user_id\n                            user_nick\n                            user_mobile\n                            user_student_no\n                            user_student_name\n                            deny_adate\n                            deny_deadline\n                            deny_reason\n                            deny_release\n                        }\n                        pageTotal\n                    }\n                }\n            }\n            ";""==a&&(s="");var c=this.accessToken(),i={accessToken:c,schId:e,searchType:s,searchValue:a,page:n};return this.get(r,i).then((function(e){if(0==e.code){console.log(e);var n=t.getStruct(e,"data.admAuth.black.list",[]),s=t.getStruct(e,"data.admAuth.black.pageTotal",1);e.data={list:n,pageTotal:s}}return e}))},removeBlack:function(e){var t={accessToken:this.accessToken(),userMobile:e};return this.get("query($accessToken: String!,$userMobile:String!) {\n                admAuth(accessToken: $accessToken) {\n                    removeBlack(userMobile: $userMobile)\n                }\n            }\n            ",t).then((function(e){return e}))},answer:function(e,n){var s={accessToken:this.accessToken(),qst_id:e,answer_msg:n};return this.get("query ($accessToken: String!, $qst_id: Int!, $answer_msg: String!) {\n                admAuth(accessToken: $accessToken) {\n                    msg:answer(qst_id: $qst_id, answer_msg: $answer_msg) {\n                        code\n                        msg\n                    }\n                }\n            }",s).then((function(e){if(0==e.code){console.log(e);var n=t.getStruct(e,"data.admAuth.msg",null);n?(e.code=n.code,e.msg=n.msg):(e.code=1,e.msg="返回数据错误!")}return e}))},qrcode:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,s="query ($accessToken: String!, $sch_id: Int!, $isRefresh: Int) {\n                admAuth(accessToken: $accessToken) {\n                    qrCode(sch_id: $sch_id, isRefresh: $isRefresh) {\n                        url\n                        expireAt\n                        ttl\n                        expire {\n                            k\n                            v\n                        }\n                    }\n                    ...qrCodeExpiresfragment\n                }\n            }\n\n            fragment qrCodeExpiresfragment on admAuth{\n                qrCodeExpires{\n                    k\n                    v\n                }\n            }\n            ",a=this.accessToken(),r={accessToken:a,sch_id:e,isRefresh:n};return this.get(s,r).then((function(e){if(0==e.code){var n=t.getStruct(e,"data.admAuth.qrCode",{}),s=t.getStruct(e,"data.admAuth.qrCode.expireAt",0),a=t.getStruct(e,"data.admAuth.qrCodeExpires",[]);e.data=n,e.data.expireAt=t.mTime(s,!0),e.data.timeList=a}return e}))},setQrCodeExpire:function(e,n){var s={accessToken:this.accessToken(),sch_id:e,ttl:n};return this.get("query ($accessToken: String!, $sch_id: Int!, $ttl: Int!) {\n                admAuth(accessToken: $accessToken) {\n                    setQrCodeExpire(sch_id:$sch_id,ttl:$ttl)\n                }\n            }",s).then((function(e){if(0==e.code){var n=t.getStruct(e,"data.admAuth.setQrCodeExpire","操作成功");e.msg=n}return e}))},yesterdayStatis:function(e){var n=t.getYmd(-1),s=this.getStatisData(e);return this.getStatis(s,n)},getStatisData:function(e){var n=t.getStruct(e,"statis.getTotal",""),s={};try{n&&(s=JSON.parse(n))}catch(e){}return s},getStatis:function(e,n){var s={};return["reserve_sum","mark_sum","hold_sum","cancel_sum","confirm_sum"].forEach((function(a){s[a]=t.getStruct(e,n+"."+a,0)})),s},getChartTypeData:function(e,n,s){var a=[],r=[];for(s--,console.log("getChartTypeData",e);s<0;){var c=t.getYmd(s);a.push(c),r.push(t.getStruct(e,c+"."+n,0)),s++}return{categories:a,data:r}},getLayoutBar:function(){var e=t.getConfig().layoutBar.copyWithin(),n=[];for(var s in e){var a=Object.assign({},e[s]);a.img=t.themeUrl(a.img,!1),n.push(a)}return n},accessToken:function(){var e=getApp();return t.getStruct(e.globalData.userInfo,"getToken.accessToken","")}}; 
 			}); 
		define("service/userService.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a=require("../utils/http.js");module.exports={login:function(c,e){var n={adm_account:c,adm_passwd:e};return a.query(a.apiUrl(),"query($adm_account:String!,$adm_passwd:String!){adminLogin(adm_account:$adm_account,adm_passwd:$adm_passwd){adm_id adm_nick:adm_account adm_account getToken{accessToken expiresIn}}}",n)},check:function(c){var e={accessToken:c};return a.query(a.apiUrl(),"query($accessToken:String!){verifyToken(accessToken:$accessToken)}",e,!1)}}; 
 			}); 
		define("utils/http.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var n=require("../@babel/runtime/helpers/typeof"),t=require("./util.js");module.exports={showLoading:function(){var n=getApp();n&&n.globalData&&(n.globalData.loading=1),wx.showLoading({title:"加载中",mask:!0})},hideLoading:function(){var n=getApp();n&&n.globalData&&(n.globalData.loading=0),wx.hideLoading()},get:function(n,t){var o=this,e=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];e&&this.showLoading();var i=new Promise((function(o,e){wx.request({url:n,data:t,success:function(n){o(self.conv(n.data))},fail:function(n){e(n)}})}));return e&&i.then((function(n){return o.hideLoading(),n})).catch((function(n){return o.hideLoading(),n})),i},post:function(n,t){var o=this,e=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=this;e&&this.showLoading();var a=new Promise((function(o,e){wx.request({url:n,data:t,method:"POST",success:function(n){o(i.conv(n.data))},fail:function(n){e(n)}})}));return e&&a.then((function(n){return o.hideLoading(),n})).catch((function(n){return o.hideLoading(),n})),a},conv:function(t){return"object"!==n(t)?(console.log(t),{code:1,msg:"服务器数据返回错误"}):t.errors?t.errors[0]:{code:0,msg:"",data:t.data}},query:function(n,t,o){var e=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return this.post(n,{query:t,variables:o},e)},apiUrl:function(){return t.apiUrl()}}; 
 			}); 
		define("utils/schoolChange.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp(),e=(require("./util.js"),require("../service/dataService.js"));module.exports={data:{userInfo:t.globalData.userInfo,currentSch:{sch_id:0,sch_name:"学校未设置"},schList:[{sch_id:0,sch_name:"学校未设置"}]},onReady:function(){this.dialog=this.selectComponent("#dialog")},schClick:function(){this.dialog.showDialog()},userClick:function(){wx.showModal({title:"退出",content:"你确定退出当前账户",success:function(e){e.confirm&&(t.globalData.login=!0,t.globalData.userInfo=null,wx.removeStorageSync("userInfo"),wx.redirectTo({url:"../login/login"}))}})},getCommonData:function(){var i=e.getCurrentSch({sch_id:0});return{schList:t.globalData.schList,currentSch:i,userInfo:t.globalData.userInfo}},schChange:function(t){var i=this.data.schList[t.detail.value];i&&i.sch_id!=this.data.currentSch.sch_id&&(this.setData({currentSch:i}),e.setCurrentSch(i),this.schChangeInPage&&this.schChangeInPage(i)),this.dialog.hideDialog()},_cancelEvent:function(){this.dialog.hideDialog()},_confirmEvent:function(){this.dialog.hideDialog()}}; 
 			}); 
		define("utils/util.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../@babel/runtime/helpers/typeof"),t=require("../config.js"),r=function(e,t){return(Array(t).join(0)+e).slice(-t)},n=function(e,t){for(var r in t)e[r]&&"[object Object]"===e[r].toString()?n(e[r],t[r]):e[r]!=t[r]&&"function"!=typeof e[r]&&(e[r]=t[r]);return e};var o=function(e){return(e=e.toString())[1]?e:"0"+e};module.exports={formatTime:function(e){var t=e.getFullYear(),r=e.getMonth()+1,n=e.getDate(),a=e.getHours(),i=e.getMinutes(),u=e.getSeconds();return[t,r,n].map(o).join("/")+" "+[a,i,u].map(o).join(":")},mTime:function(e){var t,r,n,o,a,i,u,c=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return r=(t=e?new Date(1e3*e):new Date).getFullYear(),n=t.getMonth()+1,o=t.getDate(),a=t.getHours(),i=t.getMinutes(),c?r+"-"+(n<10?"0"+n:n)+"-"+(o<10?"0"+o:o)+" "+(a<10?"0"+a:a)+":"+(i<10?"0"+i:i)+":"+((u=t.getSeconds())<10?"0"+u:u):r+"-"+(n<10?"0"+n:n)+"-"+(o<10?"0"+o:o)+" "+(a<10?"0"+a:a)+":"+(i<10?"0"+i:i)},themeUrl:function(e){var r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return r?t.host+"/template/theme2/images/"+t.projectId+"/"+e:t.host+"/template/theme2/images/"+e},dataUrl:function(e){return t.host+"/data/wxsamll/"+t.projectId+"/"+e},getYmd:function(e){var t=new Date;return t.setDate(t.getDate()+e),t.getFullYear()+r(t.getMonth()+1,2)+r(t.getDate(),2)},padNum:r,apiUrl:function(){return t.api},deleteArrayItem:function(e,t){var r=e.indexOf(t);return r<0||e.splice(r,1),e},deleteArrayItemByCall:function(e,t){var r=e.findIndex(t);return console.log("deleteArrayItemByCall idex",r),r<0||e.splice(r,1),e},getTime:function(){return Math.round((new Date).getTime()/1e3)},ajaxMsg:function(e,t,r){return{code:e,msg:t,data:r}},getStruct:function(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(!t||!r||"string"!=typeof r||"object"!=e(t))return n;var o=r.split("."),a=null,i=t;for(var u in o){if(a=o[u],"object"!=e(i)||void 0===i[a])return n;i=i[a]}return i},getConfig:function(){return t},pageParams:function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(r){if("object"==e(r)){var n=[];for(var o in r)if(r.hasOwnProperty(o)){var a=r[o];n.push(o+"="+a)}r=n.length>0?n.join(","):""}r="?"+r}return"../".concat(t,"/").concat(t)+r},redirectToPage:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";wx.redirectTo({url:this.pageParams(e,t)})},navigateToPage:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";wx.navigateTo({url:this.pageParams(e,t)})},checkRedirect:function(){var e=getApp();e?e.globalData.userInfo||this.redirectToPage("login"):console.error("app object not exist")},showError:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1500;wx.showToast({title:e,icon:"none",image:"",duration:t})},ext:function(e){var t=e.lastIndexOf(".");return e.substr(t+1)},merge:n}; 
 			}); 
		define("utils/watch.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../@babel/runtime/helpers/typeof");module.exports={setWatcher:function(e){var t=this,r=e.data,n=e.watch;Object.keys(n).forEach((function(o){for(var a=o.split("."),c=r,s=0;s<a.length-1;s++)c=c[a[s]];var i=a[a.length-1],u=n[o].handler||n[o],l=n[o].deep;t.observe(c,i,u,l,e)}))},observe:function(t,r,n,o,a){var c=this,s=t[r];o&&null!=s&&"object"===e(s)&&Object.keys(s).forEach((function(e){c.observe(s,e,n,o,a)}));var i=this;Object.defineProperty(t,r,{configurable:!0,enumerable:!0,set:function(e){n.call(a,e,s),s=e,o&&i.observe(t,r,n,o,a)},get:function(){return s}})}}; 
 			}); 
		define("utils/wxcharts.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t={yAxisWidth:15,yAxisSplit:5,xAxisHeight:15,xAxisLineHeight:15,legendHeight:15,yAxisTitleWidth:15,padding:12,columePadding:3,fontSize:10,dataPointShape:["diamond","circle","triangle","rect"],colors:["#7cb5ec","#f7a35c","#434348","#90ed7d","#f15c80","#8085e9"],pieChartLinePadding:25,pieChartTextPadding:15,xAxisTextPadding:3,titleColor:"#333333",titleFontSize:20,subtitleColor:"#999999",subtitleFontSize:15,toolTipPadding:3,toolTipBackground:"#000000",toolTipOpacity:.7,toolTipLineHeight:14,radarGridCount:3,radarLabelTextMargin:15};function e(t,e){if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var i=Object(t),n=1;n<arguments.length;n++){var a=arguments[n];if(null!=a)for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(i[o]=a[o])}return i}var i={toFixed:function(t,e){return e=e||2,this.isFloat(t)&&(t=t.toFixed(e)),t},isFloat:function(t){return t%1!=0},approximatelyEqual:function(t,e){return Math.abs(t-e)<1e-10},isSameSign:function(t,e){return Math.abs(t)===t&&Math.abs(e)===e||Math.abs(t)!==t&&Math.abs(e)!==e},isSameXCoordinateArea:function(t,e){return this.isSameSign(t.x,e.x)},isCollision:function(t,e){return t.end={},t.end.x=t.start.x+t.width,t.end.y=t.start.y-t.height,e.end={},e.end.x=e.start.x+e.width,e.end.y=e.start.y-e.height,!(e.start.x>t.end.x||e.end.x<t.start.x||e.end.y>t.start.y||e.start.y<t.end.y)}};function n(t,e,i){if(isNaN(t))throw new Error("[wxCharts] unvalid series data!");i=i||10,e=e||"upper";for(var n=1;i<1;)i*=10,n*=10;for(t="upper"===e?Math.ceil(t*n):Math.floor(t*n);t%i!=0;)"upper"===e?t++:t--;return t/n}function a(t,e,i){function n(t){for(;t<0;)t+=2*Math.PI;for(;t>2*Math.PI;)t-=2*Math.PI;return t}return t=n(t),(e=n(e))>(i=n(i))&&(i+=2*Math.PI,t<e&&(t+=2*Math.PI)),t>=e&&t<=i}function o(t,e){function i(t,e){return!(!t[e-1]||!t[e+1])&&(t[e].y>=Math.max(t[e-1].y,t[e+1].y)||t[e].y<=Math.min(t[e-1].y,t[e+1].y))}var n=.2,a=.2,o=null,r=null,s=null,l=null;if(e<1?(o=t[0].x+(t[1].x-t[0].x)*n,r=t[0].y+(t[1].y-t[0].y)*n):(o=t[e].x+(t[e+1].x-t[e-1].x)*n,r=t[e].y+(t[e+1].y-t[e-1].y)*n),e>t.length-3){var h=t.length-1;s=t[h].x-(t[h].x-t[h-1].x)*a,l=t[h].y-(t[h].y-t[h-1].y)*a}else s=t[e+1].x-(t[e+2].x-t[e].x)*a,l=t[e+1].y-(t[e+2].y-t[e].y)*a;return i(t,e+1)&&(l=t[e+1].y),i(t,e)&&(r=t[e].y),{ctrA:{x:o,y:r},ctrB:{x:s,y:l}}}function r(t,e,i){return{x:i.x+t,y:i.y-e}}function s(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,i=(t=(t=String(t)).split(""),0);return t.forEach((function(t){/[a-zA-Z]/.test(t)?i+=7:/[0-9]/.test(t)?i+=5.5:/\./.test(t)?i+=2.7:/-/.test(t)?i+=3.25:/[\u4e00-\u9fa5]/.test(t)?i+=10:/\(|\)/.test(t)?i+=3.73:/\s/.test(t)?i+=2.5:/%/.test(t)?i+=8:i+=10})),i*e/10}function l(t){return t.reduce((function(t,e){return(t.data?t.data:t).concat(e.data)}),[])}function h(t,e){var i=[];return t.forEach((function(t){if(null!==t.data[e]&&void 0!==t.data[e]){var n={};n.color=t.color,n.name=t.name,n.data=t.format?t.format(t.data[e]):t.data[e],i.push(n)}})),i}function c(t){var e=t.map((function(t){return s(t)}));return Math.max.apply(null,e)}function f(t){for(var e=2*Math.PI/t,i=[],n=0;n<t;n++)i.push(e*n);return i.map((function(t){return-1*t+Math.PI/2}))}function d(t,e,i,n){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},o=t.map((function(t){return{text:a.format?a.format(t,n[i]):t.name+": "+t.data,color:t.color}})),r=[],s={x:0,y:0};return e.forEach((function(t){void 0!==t[i]&&null!==t[i]&&r.push(t[i])})),r.forEach((function(t){s.x=Math.round(t.x),s.y+=t.y})),s.y/=r.length,{textList:o,offset:s}}function x(t,e,i){return t.x<e.width-i.padding&&t.x>i.padding+i.yAxisWidth+i.yAxisTitleWidth&&t.y>i.padding&&t.y<e.height-i.legendHeight-i.xAxisHeight-i.padding}function u(t,e,i){return Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)<=Math.pow(i,2)}function g(t){var e=[],i=[];return t.forEach((function(t,n){null!==t?i.push(t):(i.length&&e.push(i),i=[])})),i.length&&e.push(i),e}function p(t,e,i){if(!1===e.legend)return{legendList:[],legendHeight:0};var n=[],a=0,o=[];return t.forEach((function(t){var i=30+s(t.name||"undefined");a+i>e.width?(n.push(o),a=i,o=[t]):(a+=i,o.push(t))})),o.length&&n.push(o),{legendList:n,legendHeight:n.length*(i.fontSize+8)+5}}function y(t,e,i,n,a){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,s=a.extra.radar||{};s.max=s.max||0;var h=Math.max(s.max,Math.max.apply(null,l(n))),c=[];return n.forEach((function(n){var a={};a.color=n.color,a.data=[],n.data.forEach((function(n,s){var l={};l.angle=t[s],l.proportion=n/h,l.position=r(i*l.proportion*o*Math.cos(l.angle),i*l.proportion*o*Math.sin(l.angle),e),a.data.push(l)})),c.push(a)})),c}function v(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,i=0,n=0;return t.forEach((function(t){t.data=null===t.data?0:t.data,i+=t.data})),t.forEach((function(t){t.data=null===t.data?0:t.data,t._proportion_=t.data/i*e})),t.forEach((function(t){t._start_=n,n+=2*t._proportion_*Math.PI})),t}function m(t,e,i,n,a,o){return t.map((function(t){return null===t?null:(t.width=(e-2*a.columePadding)/i,o.extra.column&&o.extra.column.width&&+o.extra.column.width>0?t.width=Math.min(t.width,+o.extra.column.width):t.width=Math.min(t.width,25),t.x+=(n+.5-i/2)*t.width,t)}))}function P(t,e,i){var n=i.yAxisWidth+i.yAxisTitleWidth,a=(e.width-2*i.padding-n)/(e.enableScroll?Math.min(5,t.length):t.length),o=[],r=i.padding+n,s=e.width-i.padding;return t.forEach((function(t,e){o.push(r+e*a)})),!0===e.enableScroll?o.push(r+t.length*a):o.push(s),{xAxisPoints:o,startX:r,endX:s,eachSpacing:a}}function S(t,e,i,n,a,o,r){var s=arguments.length>7&&void 0!==arguments[7]?arguments[7]:1,l=[],h=o.height-2*r.padding-r.xAxisHeight-r.legendHeight;return t.forEach((function(t,c){if(null===t)l.push(null);else{var f={};f.x=n[c]+Math.round(a/2);var d=h*(t-e)/(i-e);d*=s,f.y=o.height-r.xAxisHeight-r.legendHeight-Math.round(d)-r.padding,l.push(f)}})),l}function T(t,e,i){var a=l(t);a=a.filter((function(t){return null!==t}));var o=Math.min.apply(this,a),r=Math.max.apply(this,a);if("number"==typeof e.yAxis.min&&(o=Math.min(e.yAxis.min,o)),"number"==typeof e.yAxis.max&&(r=Math.max(e.yAxis.max,r)),o===r){var s=r||1;o-=s,r+=s}for(var h=function(t,e){var i=0,a=e-t;return{minRange:n(t,"lower",i=a>=1e4?1e3:a>=1e3?100:a>=100?10:a>=10?5:a>=1?1:a>=.1?.1:.01),maxRange:n(e,"upper",i)}}(o,r),c=h.minRange,f=[],d=(h.maxRange-c)/i.yAxisSplit,x=0;x<=i.yAxisSplit;x++)f.push(c+d*x);return f.reverse()}function A(t,e,n){var a=T(t,e,n),o=n.yAxisWidth,r=a.map((function(t){return t=i.toFixed(t,2),t=e.yAxis.format?e.yAxis.format(Number(t)):t,o=Math.max(o,s(t)+5),t}));return!0===e.yAxis.disabled&&(o=0),{rangesFormat:r,ranges:a,yAxisWidth:o}}function b(t,e,i,n){n.beginPath(),n.setStrokeStyle("#ffffff"),n.setLineWidth(1),n.setFillStyle(e),"diamond"===i?t.forEach((function(t,e){null!==t&&(n.moveTo(t.x,t.y-4.5),n.lineTo(t.x-4.5,t.y),n.lineTo(t.x,t.y+4.5),n.lineTo(t.x+4.5,t.y),n.lineTo(t.x,t.y-4.5))})):"circle"===i?t.forEach((function(t,e){null!==t&&(n.moveTo(t.x+3.5,t.y),n.arc(t.x,t.y,4,0,2*Math.PI,!1))})):"rect"===i?t.forEach((function(t,e){null!==t&&(n.moveTo(t.x-3.5,t.y-3.5),n.rect(t.x-3.5,t.y-3.5,7,7))})):"triangle"===i&&t.forEach((function(t,e){null!==t&&(n.moveTo(t.x,t.y-4.5),n.lineTo(t.x-4.5,t.y+4.5),n.lineTo(t.x+4.5,t.y+4.5),n.lineTo(t.x,t.y-4.5))})),n.closePath(),n.fill(),n.stroke()}function M(t,e,i){var n=t.title.fontSize||e.titleFontSize,a=t.subtitle.fontSize||e.subtitleFontSize,o=t.title.name||"",r=t.subtitle.name||"",l=t.title.color||e.titleColor,h=t.subtitle.color||e.subtitleColor,c=o?n:0,f=r?a:0;if(r){var d=s(r,a),x=(t.width-d)/2+(t.subtitle.offsetX||0),u=(t.height-e.legendHeight+a)/2;o&&(u-=(c+5)/2),i.beginPath(),i.setFontSize(a),i.setFillStyle(h),i.fillText(r,x,u),i.stroke(),i.closePath()}if(o){var g=s(o,n),p=(t.width-g)/2+(t.title.offsetX||0),y=(t.height-e.legendHeight+n)/2;r&&(y+=(f+5)/2),i.beginPath(),i.setFontSize(n),i.setFillStyle(l),i.fillText(o,p,y),i.stroke(),i.closePath()}}function _(t,e,i,n){var a=e.data;n.beginPath(),n.setFontSize(i.fontSize),n.setFillStyle("#666666"),t.forEach((function(t,i){if(null!==t){var o=e.format?e.format(a[i]):a[i];n.fillText(o,t.x-s(o)/2,t.y-2)}})),n.closePath(),n.stroke()}function E(t,e,n,a,o,l){var h=a.extra.radar||{};e+=o.radarLabelTextMargin,l.beginPath(),l.setFontSize(o.fontSize),l.setFillStyle(h.labelColor||"#666666"),t.forEach((function(t,h){var c={x:e*Math.cos(t),y:e*Math.sin(t)},f=r(c.x,c.y,n),d=f.x,x=f.y;i.approximatelyEqual(c.x,0)?d-=s(a.categories[h]||"")/2:c.x<0&&(d-=s(a.categories[h]||"")),l.fillText(a.categories[h]||"",d,x+o.fontSize/2)})),l.stroke(),l.closePath()}function F(t,e,n,a,o,l){var h=o+n.pieChartLinePadding,c=[],f=null;t.map((function(t){return{arc:2*Math.PI-(t._start_+2*Math.PI*t._proportion_/2),text:t.format?t.format(+t._proportion_.toFixed(2)):i.toFixed(100*t._proportion_)+"%",color:t.color}})).forEach((function(t){var e=Math.cos(t.arc)*h,a=Math.sin(t.arc)*h,r=Math.cos(t.arc)*o,l=Math.sin(t.arc)*o,d=e>=0?e+n.pieChartTextPadding:e-n.pieChartTextPadding,x=a,u=s(t.text),g=x;f&&i.isSameXCoordinateArea(f.start,{x:d})&&(g=d>0?Math.min(x,f.start.y):e<0||x>0?Math.max(x,f.start.y):Math.min(x,f.start.y)),d<0&&(d-=u);var p={lineStart:{x:r,y:l},lineEnd:{x:e,y:a},start:{x:d,y:g},width:u,height:n.fontSize,text:t.text,color:t.color};f=function(t,e){if(e)for(;i.isCollision(t,e);)t.start.x>0?t.start.y--:t.start.x<0||t.start.y>0?t.start.y++:t.start.y--;return t}(p,f),c.push(f)})),c.forEach((function(t){var e=r(t.lineStart.x,t.lineStart.y,l),i=r(t.lineEnd.x,t.lineEnd.y,l),o=r(t.start.x,t.start.y,l);a.setLineWidth(1),a.setFontSize(n.fontSize),a.beginPath(),a.setStrokeStyle(t.color),a.setFillStyle(t.color),a.moveTo(e.x,e.y);var s=t.start.x<0?o.x+t.width:o.x,h=t.start.x<0?o.x-5:o.x+5;a.quadraticCurveTo(i.x,i.y,s,o.y),a.moveTo(e.x,e.y),a.stroke(),a.closePath(),a.beginPath(),a.moveTo(o.x+t.width,o.y),a.arc(s,o.y,2,0,2*Math.PI),a.closePath(),a.fill(),a.beginPath(),a.setFillStyle("#666666"),a.fillText(t.text,h,o.y+3),a.closePath(),a.stroke(),a.closePath()}))}function w(t,e,i,n){var a=i.padding,o=e.height-i.padding-i.xAxisHeight-i.legendHeight;n.beginPath(),n.setStrokeStyle("#cccccc"),n.setLineWidth(1),n.moveTo(t,a),n.lineTo(t,o),n.stroke(),n.closePath()}function L(t,i,n,a){n.save(),t._scrollDistance_&&0!==t._scrollDistance_&&!0===t.enableScroll&&n.translate(t._scrollDistance_,0),t.tooltip&&t.tooltip.textList&&t.tooltip.textList.length&&1===a&&function(t,i,n,a,o){var r=!1;(i=e({x:0,y:0},i)).y-=8;var l=t.map((function(t){return s(t.text)})),h=9+4*a.toolTipPadding+Math.max.apply(null,l),c=2*a.toolTipPadding+t.length*a.toolTipLineHeight;i.x-Math.abs(n._scrollDistance_)+8+h>n.width&&(r=!0),o.beginPath(),o.setFillStyle(n.tooltip.option.background||a.toolTipBackground),o.setGlobalAlpha(a.toolTipOpacity),r?(o.moveTo(i.x,i.y+10),o.lineTo(i.x-8,i.y+10-5),o.lineTo(i.x-8,i.y+10+5),o.moveTo(i.x,i.y+10),o.fillRect(i.x-h-8,i.y,h,c)):(o.moveTo(i.x,i.y+10),o.lineTo(i.x+8,i.y+10-5),o.lineTo(i.x+8,i.y+10+5),o.moveTo(i.x,i.y+10),o.fillRect(i.x+8,i.y,h,c)),o.closePath(),o.fill(),o.setGlobalAlpha(1),t.forEach((function(t,e){o.beginPath(),o.setFillStyle(t.color);var n=i.x+8+2*a.toolTipPadding,s=i.y+(a.toolTipLineHeight-a.fontSize)/2+a.toolTipLineHeight*e+a.toolTipPadding;r&&(n=i.x-h-8+2*a.toolTipPadding),o.fillRect(n,s,4,a.fontSize),o.closePath()})),o.beginPath(),o.setFontSize(a.fontSize),o.setFillStyle("#ffffff"),t.forEach((function(t,e){var n=i.x+8+2*a.toolTipPadding+4+5;r&&(n=i.x-h-8+2*a.toolTipPadding+4+5);var s=i.y+(a.toolTipLineHeight-a.fontSize)/2+a.toolTipLineHeight*e+a.toolTipPadding;o.fillText(t.text,n,s+a.fontSize)})),o.stroke(),o.closePath()}(t.tooltip.textList,t.tooltip.offset,t,i,n),n.restore()}function k(t,e,i,n){var a=P(t,e,i),o=a.xAxisPoints,r=(a.startX,a.endX,a.eachSpacing),l=e.height-i.padding-i.xAxisHeight-i.legendHeight,h=l+i.xAxisLineHeight;n.save(),e._scrollDistance_&&0!==e._scrollDistance_&&n.translate(e._scrollDistance_,0),n.beginPath(),n.setStrokeStyle(e.xAxis.gridColor||"#cccccc"),!0!==e.xAxis.disableGrid&&("calibration"===e.xAxis.type?o.forEach((function(t,e){e>0&&(n.moveTo(t-r/2,l),n.lineTo(t-r/2,l+4))})):o.forEach((function(t,e){n.moveTo(t,l),n.lineTo(t,h)}))),n.closePath(),n.stroke();var c=e.width-2*i.padding-i.yAxisWidth-i.yAxisTitleWidth,f=Math.min(t.length,Math.ceil(c/i.fontSize/1.5)),d=Math.ceil(t.length/f);t=t.map((function(t,e){return e%d!=0?"":t})),0===i._xAxisTextAngle_?(n.beginPath(),n.setFontSize(i.fontSize),n.setFillStyle(e.xAxis.fontColor||"#666666"),t.forEach((function(t,e){var a=r/2-s(t)/2;n.fillText(t,o[e]+a,l+i.fontSize+5)})),n.closePath(),n.stroke()):t.forEach((function(t,a){n.save(),n.beginPath(),n.setFontSize(i.fontSize),n.setFillStyle(e.xAxis.fontColor||"#666666");var h=s(t),c=r/2-h,f=function(t,e,i){var n=t,a=i-e,o=n+(i-a-n)/Math.sqrt(2);return{transX:o*=-1,transY:(i-a)*(Math.sqrt(2)-1)-(i-a-n)/Math.sqrt(2)}}(o[a]+r/2,l+i.fontSize/2+5,e.height),d=f.transX,x=f.transY;n.rotate(-1*i._xAxisTextAngle_),n.translate(d,x),n.fillText(t,o[a]+c,l+i.fontSize+5),n.closePath(),n.stroke(),n.restore()})),n.restore()}function C(t,e,i){for(var n=t.height-2*e.padding-e.xAxisHeight-e.legendHeight,a=Math.floor(n/e.yAxisSplit),o=e.yAxisWidth+e.yAxisTitleWidth,r=e.padding+o,s=t.width-e.padding,l=[],h=0;h<e.yAxisSplit;h++)l.push(e.padding+a*h);l.push(e.padding+a*e.yAxisSplit+2),i.beginPath(),i.setStrokeStyle(t.yAxis.gridColor||"#cccccc"),i.setLineWidth(1),l.forEach((function(t,e){i.moveTo(r,t),i.lineTo(s,t)})),i.closePath(),i.stroke()}function H(t,e,i,n){if(!0!==e.yAxis.disabled){var a=A(t,e,i).rangesFormat,o=i.yAxisWidth+i.yAxisTitleWidth,r=e.height-2*i.padding-i.xAxisHeight-i.legendHeight,l=Math.floor(r/i.yAxisSplit),h=i.padding+o,c=e.width-i.padding,f=e.height-i.padding-i.xAxisHeight-i.legendHeight;n.setFillStyle(e.background||"#ffffff"),e._scrollDistance_<0&&n.fillRect(0,0,h,f+i.xAxisHeight+5),n.fillRect(c,0,e.width,f+i.xAxisHeight+5);for(var d=[],x=0;x<=i.yAxisSplit;x++)d.push(i.padding+l*x);n.stroke(),n.beginPath(),n.setFontSize(i.fontSize),n.setFillStyle(e.yAxis.fontColor||"#666666"),a.forEach((function(t,e){var a=d[e]?d[e]:f;n.fillText(t,i.padding+i.yAxisTitleWidth,a+i.fontSize/2)})),n.closePath(),n.stroke(),e.yAxis.title&&function(t,e,i,n){var a=i.xAxisHeight+(e.height-i.xAxisHeight-s(t))/2;n.save(),n.beginPath(),n.setFontSize(i.fontSize),n.setFillStyle(e.yAxis.titleFontColor||"#333333"),n.translate(0,e.height),n.rotate(-90*Math.PI/180),n.fillText(t,a,i.padding+.5*i.fontSize),n.stroke(),n.closePath(),n.restore()}(e.yAxis.title,e,i,n)}}function I(t,e,i,n){if(e.legend){var a=p(t,e,i).legendList;a.forEach((function(t,a){var o=0;t.forEach((function(t){t.name=t.name||"undefined",o+=15+s(t.name)+15}));var r=(e.width-o)/2+5,l=e.height-i.padding-i.legendHeight+a*(i.fontSize+8)+5+8;n.setFontSize(i.fontSize),t.forEach((function(t){switch(e.type){case"line":n.beginPath(),n.setLineWidth(1),n.setStrokeStyle(t.color),n.moveTo(r-2,l+5),n.lineTo(r+17,l+5),n.stroke(),n.closePath(),n.beginPath(),n.setLineWidth(1),n.setStrokeStyle("#ffffff"),n.setFillStyle(t.color),n.moveTo(r+7.5,l+5),n.arc(r+7.5,l+5,4,0,2*Math.PI),n.fill(),n.stroke(),n.closePath();break;case"pie":case"ring":n.beginPath(),n.setFillStyle(t.color),n.moveTo(r+7.5,l+5),n.arc(r+7.5,l+5,7,0,2*Math.PI),n.closePath(),n.fill();break;default:n.beginPath(),n.setFillStyle(t.color),n.moveTo(r,l),n.rect(r,l,15,10),n.closePath(),n.fill()}r+=20,n.beginPath(),n.setFillStyle(e.extra.legendTextColor||"#333333"),n.fillText(t.name,r,l+9),n.closePath(),n.stroke(),r+=s(t.name)+10}))}))}}function z(t,e){e.draw()}var D={easeIn:function(t){return Math.pow(t,3)},easeOut:function(t){return Math.pow(t-1,3)+1},easeInOut:function(t){return(t/=.5)<1?.5*Math.pow(t,3):.5*(Math.pow(t-2,3)+2)},linear:function(t){return t}};function W(t){this.isStop=!1,t.duration=void 0===t.duration?1e3:t.duration,t.timing=t.timing||"linear";var e="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:"undefined"!=typeof setTimeout?function(t,e){setTimeout((function(){var e=+new Date;t(e)}),e)}:function(t){t(null)},i=null,n=function(a){if(null===a||!0===this.isStop)return t.onProcess&&t.onProcess(1),void(t.onAnimationFinish&&t.onAnimationFinish());if(null===i&&(i=a),a-i<t.duration){var o=(a-i)/t.duration;o=(0,D[t.timing])(o),t.onProcess&&t.onProcess(o),e(n,17)}else t.onProcess&&t.onProcess(1),t.onAnimationFinish&&t.onAnimationFinish()};n=n.bind(this),e(n,17)}function O(t,e,n,a){var l=this,h=e.series,d=e.categories,x=p(h=function(t,e){var i=0;return t.map((function(t){return t.color||(t.color=e.colors[i],i=(i+1)%e.colors.length),t}))}(h,n),e,n).legendHeight;n.legendHeight=x;var u=A(h,e,n).yAxisWidth;if(n.yAxisWidth=u,d&&d.length){var T=function(t,e,i){var n={angle:0,xAxisHeight:i.xAxisHeight},a=P(t,e,i).eachSpacing,o=t.map((function(t){return s(t)})),r=Math.max.apply(this,o);return r+2*i.xAxisTextPadding>a&&(n.angle=45*Math.PI/180,n.xAxisHeight=2*i.xAxisTextPadding+r*Math.sin(n.angle)),n}(d,e,n),D=T.xAxisHeight,O=T.angle;n.xAxisHeight=D,n._xAxisTextAngle_=O}"pie"!==t&&"ring"!==t||(n._pieTextMaxLength_=!1===e.dataLabel?0:function(t){t=v(t);var e=0;return t.forEach((function(t){var n=t.format?t.format(+t._proportion_.toFixed(2)):i.toFixed(100*t._proportion_)+"%";e=Math.max(e,s(n))})),e}(h));var X=e.animation?1e3:0;switch(this.animationInstance&&this.animationInstance.stop(),t){case"line":this.animationInstance=new W({timing:"easeIn",duration:X,onProcess:function(t){C(e,n,a);var i=function(t,e,i,n){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,r=A(t,e,i),s=r.ranges,l=P(e.categories,e,i),h=l.xAxisPoints,c=l.eachSpacing,f=s.pop(),d=s.shift(),x=[];return n.save(),e._scrollDistance_&&0!==e._scrollDistance_&&!0===e.enableScroll&&n.translate(e._scrollDistance_,0),e.tooltip&&e.tooltip.textList&&e.tooltip.textList.length&&1===a&&w(e.tooltip.offset.x,e,i,n),t.forEach((function(t,r){var s=S(t.data,f,d,h,c,e,i,a);if(x.push(s),g(s).forEach((function(i,a){n.beginPath(),n.setStrokeStyle(t.color),n.setLineWidth(2),1===i.length?(n.moveTo(i[0].x,i[0].y),n.arc(i[0].x,i[0].y,1,0,2*Math.PI)):(n.moveTo(i[0].x,i[0].y),"curve"===e.extra.lineStyle?i.forEach((function(t,e){if(e>0){var a=o(i,e-1);n.bezierCurveTo(a.ctrA.x,a.ctrA.y,a.ctrB.x,a.ctrB.y,t.x,t.y)}})):i.forEach((function(t,e){e>0&&n.lineTo(t.x,t.y)})),n.moveTo(i[0].x,i[0].y)),n.closePath(),n.stroke()})),!1!==e.dataPointShape){var l=i.dataPointShape[r%i.dataPointShape.length];b(s,t.color,l,n)}})),!1!==e.dataLabel&&1===a&&t.forEach((function(t,o){_(S(t.data,f,d,h,c,e,i,a),t,i,n)})),n.restore(),{xAxisPoints:h,calPoints:x,eachSpacing:c}}(h,e,n,a,t),r=i.xAxisPoints,s=i.calPoints,c=i.eachSpacing;l.chartData.xAxisPoints=r,l.chartData.calPoints=s,l.chartData.eachSpacing=c,k(d,e,n,a),I(e.series,e,n,a),H(h,e,n,a),L(e,n,a,t),z(0,a)},onAnimationFinish:function(){l.event.trigger("renderComplete")}});break;case"column":this.animationInstance=new W({timing:"easeIn",duration:X,onProcess:function(t){C(e,n,a);var i=function(t,e,i,n){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=A(t,e,i),r=o.ranges,s=P(e.categories,e,i),l=s.xAxisPoints,h=s.eachSpacing,c=r.pop(),f=r.shift();return n.save(),e._scrollDistance_&&0!==e._scrollDistance_&&!0===e.enableScroll&&n.translate(e._scrollDistance_,0),t.forEach((function(o,r){var s=S(o.data,c,f,l,h,e,i,a);s=m(s,h,t.length,r,i,e),n.beginPath(),n.setFillStyle(o.color),s.forEach((function(t,a){if(null!==t){var o=t.x-t.width/2+1,r=e.height-t.y-i.padding-i.xAxisHeight-i.legendHeight;n.moveTo(o,t.y),n.rect(o,t.y,t.width-2,r)}})),n.closePath(),n.fill()})),t.forEach((function(o,r){var s=S(o.data,c,f,l,h,e,i,a);s=m(s,h,t.length,r,i,e),!1!==e.dataLabel&&1===a&&_(s,o,i,n)})),n.restore(),{xAxisPoints:l,eachSpacing:h}}(h,e,n,a,t),o=i.xAxisPoints,r=i.eachSpacing;l.chartData.xAxisPoints=o,l.chartData.eachSpacing=r,k(d,e,n,a),I(e.series,e,n,a),H(h,e,n,a),z(0,a)},onAnimationFinish:function(){l.event.trigger("renderComplete")}});break;case"area":this.animationInstance=new W({timing:"easeIn",duration:X,onProcess:function(t){C(e,n,a);var i=function(t,e,i,n){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,r=A(t,e,i),s=r.ranges,l=P(e.categories,e,i),h=l.xAxisPoints,c=l.eachSpacing,f=s.pop(),d=s.shift(),x=e.height-i.padding-i.xAxisHeight-i.legendHeight,u=[];return n.save(),e._scrollDistance_&&0!==e._scrollDistance_&&!0===e.enableScroll&&n.translate(e._scrollDistance_,0),e.tooltip&&e.tooltip.textList&&e.tooltip.textList.length&&1===a&&w(e.tooltip.offset.x,e,i,n),t.forEach((function(t,r){var s=S(t.data,f,d,h,c,e,i,a);if(u.push(s),g(s).forEach((function(i){if(n.beginPath(),n.setStrokeStyle(t.color),n.setFillStyle(t.color),n.setGlobalAlpha(.6),n.setLineWidth(2),i.length>1){var a=i[0],r=i[i.length-1];n.moveTo(a.x,a.y),"curve"===e.extra.lineStyle?i.forEach((function(t,e){if(e>0){var a=o(i,e-1);n.bezierCurveTo(a.ctrA.x,a.ctrA.y,a.ctrB.x,a.ctrB.y,t.x,t.y)}})):i.forEach((function(t,e){e>0&&n.lineTo(t.x,t.y)})),n.lineTo(r.x,x),n.lineTo(a.x,x),n.lineTo(a.x,a.y)}else{var s=i[0];n.moveTo(s.x-c/2,s.y),n.lineTo(s.x+c/2,s.y),n.lineTo(s.x+c/2,x),n.lineTo(s.x-c/2,x),n.moveTo(s.x-c/2,s.y)}n.closePath(),n.fill(),n.setGlobalAlpha(1)})),!1!==e.dataPointShape){var l=i.dataPointShape[r%i.dataPointShape.length];b(s,t.color,l,n)}})),!1!==e.dataLabel&&1===a&&t.forEach((function(t,o){_(S(t.data,f,d,h,c,e,i,a),t,i,n)})),n.restore(),{xAxisPoints:h,calPoints:u,eachSpacing:c}}(h,e,n,a,t),r=i.xAxisPoints,s=i.calPoints,c=i.eachSpacing;l.chartData.xAxisPoints=r,l.chartData.calPoints=s,l.chartData.eachSpacing=c,k(d,e,n,a),I(e.series,e,n,a),H(h,e,n,a),L(e,n,a,t),z(0,a)},onAnimationFinish:function(){l.event.trigger("renderComplete")}});break;case"ring":case"pie":this.animationInstance=new W({timing:"easeInOut",duration:X,onProcess:function(t){l.chartData.pieData=function(t,e,i,n){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=e.extra.pie||{};t=v(t,a);var r={x:e.width/2,y:(e.height-i.legendHeight)/2},s=Math.min(r.x-i.pieChartLinePadding-i.pieChartTextPadding-i._pieTextMaxLength_,r.y-i.pieChartLinePadding-i.pieChartTextPadding);if(e.dataLabel?s-=10:s-=2*i.padding,(t=t.map((function(t){return t._start_+=(o.offsetAngle||0)*Math.PI/180,t}))).forEach((function(t){n.beginPath(),n.setLineWidth(2),n.setStrokeStyle("#ffffff"),n.setFillStyle(t.color),n.moveTo(r.x,r.y),n.arc(r.x,r.y,s,t._start_,t._start_+2*t._proportion_*Math.PI),n.closePath(),n.fill(),!0!==e.disablePieStroke&&n.stroke()})),"ring"===e.type){var l=.6*s;"number"==typeof e.extra.ringWidth&&e.extra.ringWidth>0&&(l=Math.max(0,s-e.extra.ringWidth)),n.beginPath(),n.setFillStyle(e.background||"#ffffff"),n.moveTo(r.x,r.y),n.arc(r.x,r.y,l,0,2*Math.PI),n.closePath(),n.fill()}if(!1!==e.dataLabel&&1===a){for(var h=!1,c=0,f=t.length;c<f;c++)if(t[c].data>0){h=!0;break}h&&F(t,0,i,n,s,r)}return 1===a&&"ring"===e.type&&M(e,i,n),{center:r,radius:s,series:t}}(h,e,n,a,t),I(e.series,e,n,a),z(0,a)},onAnimationFinish:function(){l.event.trigger("renderComplete")}});break;case"radar":this.animationInstance=new W({timing:"easeInOut",duration:X,onProcess:function(t){l.chartData.radarData=function(t,e,i,n){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=e.extra.radar||{},s=f(e.categories.length),l={x:e.width/2,y:(e.height-i.legendHeight)/2},h=Math.min(l.x-(c(e.categories)+i.radarLabelTextMargin),l.y-i.radarLabelTextMargin);h-=i.padding,n.beginPath(),n.setLineWidth(1),n.setStrokeStyle(o.gridColor||"#cccccc"),s.forEach((function(t){var e=r(h*Math.cos(t),h*Math.sin(t),l);n.moveTo(l.x,l.y),n.lineTo(e.x,e.y)})),n.stroke(),n.closePath();for(var d=function(t){var e={};n.beginPath(),n.setLineWidth(1),n.setStrokeStyle(o.gridColor||"#cccccc"),s.forEach((function(a,o){var s=r(h/i.radarGridCount*t*Math.cos(a),h/i.radarGridCount*t*Math.sin(a),l);0===o?(e=s,n.moveTo(s.x,s.y)):n.lineTo(s.x,s.y)})),n.lineTo(e.x,e.y),n.stroke(),n.closePath()},x=1;x<=i.radarGridCount;x++)d(x);var u=y(s,l,h,t,e,a);return u.forEach((function(t,a){if(n.beginPath(),n.setFillStyle(t.color),n.setGlobalAlpha(.6),t.data.forEach((function(t,e){0===e?n.moveTo(t.position.x,t.position.y):n.lineTo(t.position.x,t.position.y)})),n.closePath(),n.fill(),n.setGlobalAlpha(1),!1!==e.dataPointShape){var o=i.dataPointShape[a%i.dataPointShape.length];b(t.data.map((function(t){return t.position})),t.color,o,n)}})),E(s,h,l,e,i,n),{center:l,radius:h,angleList:s}}(h,e,n,a,t),I(e.series,e,n,a),z(0,a)},onAnimationFinish:function(){l.event.trigger("renderComplete")}})}}function X(){this.events={}}W.prototype.stop=function(){this.isStop=!0},X.prototype.addEventListener=function(t,e){this.events[t]=this.events[t]||[],this.events[t].push(e)},X.prototype.trigger=function(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];var n=e[0],a=e.slice(1);this.events[n]&&this.events[n].forEach((function(t){try{t.apply(null,a)}catch(t){console.error(t)}}))};var G=function(i){i.title=i.title||{},i.subtitle=i.subtitle||{},i.yAxis=i.yAxis||{},i.xAxis=i.xAxis||{},i.extra=i.extra||{},i.legend=!1!==i.legend,i.animation=!1!==i.animation;var n=e({},t);n.yAxisTitleWidth=!0!==i.yAxis.disabled&&i.yAxis.title?n.yAxisTitleWidth:0,n.pieChartLinePadding=!1===i.dataLabel?0:n.pieChartLinePadding,n.pieChartTextPadding=!1===i.dataLabel?0:n.pieChartTextPadding,this.opts=i,this.config=n,this.context=wx.createCanvasContext(i.canvasId),this.chartData={},this.event=new X,this.scrollOption={currentOffset:0,startTouchX:0,distance:0},O.call(this,i.type,i,n,this.context)};G.prototype.updateData=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.opts.series=t.series||this.opts.series,this.opts.categories=t.categories||this.opts.categories,this.opts.title=e({},this.opts.title,t.title||{}),this.opts.subtitle=e({},this.opts.subtitle,t.subtitle||{}),O.call(this,this.opts.type,this.opts,this.config,this.context)},G.prototype.stopAnimation=function(){this.animationInstance&&this.animationInstance.stop()},G.prototype.addEventListener=function(t,e){this.event.addEventListener(t,e)},G.prototype.getCurrentDataIndex=function(t){var e=t.touches&&t.touches.length?t.touches:t.changedTouches;if(e&&e.length){var i=e[0],n=i.x,o=i.y;return"pie"===this.opts.type||"ring"===this.opts.type?function(t,e){var i=-1;if(u(t,e.center,e.radius)){var n=Math.atan2(e.center.y-t.y,t.x-e.center.x);n=-n;for(var o=0,r=e.series.length;o<r;o++){var s=e.series[o];if(a(n,s._start_,s._start_+2*s._proportion_*Math.PI)){i=o;break}}}return i}({x:n,y:o},this.chartData.pieData):"radar"===this.opts.type?function(t,e,i){var n=2*Math.PI/i,a=-1;if(u(t,e.center,e.radius)){var o=function(t){return t<0&&(t+=2*Math.PI),t>2*Math.PI&&(t-=2*Math.PI),t},r=Math.atan2(e.center.y-t.y,t.x-e.center.x);(r*=-1)<0&&(r+=2*Math.PI),e.angleList.map((function(t){return t=o(-1*t)})).forEach((function(t,e){var i=o(t-n/2),s=o(t+n/2);s<i&&(s+=2*Math.PI),(r>=i&&r<=s||r+2*Math.PI>=i&&r+2*Math.PI<=s)&&(a=e)}))}return a}({x:n,y:o},this.chartData.radarData,this.opts.categories.length):function(t,e,i,n){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,o=-1;return x(t,i,n)&&e.forEach((function(e,i){t.x+a>e&&(o=i)})),o}({x:n,y:o},this.chartData.xAxisPoints,this.opts,this.config,Math.abs(this.scrollOption.currentOffset))}return-1},G.prototype.showToolTip=function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("line"===this.opts.type||"area"===this.opts.type){var n=this.getCurrentDataIndex(t),a=this.scrollOption.currentOffset,o=e({},this.opts,{_scrollDistance_:a,animation:!1});if(n>-1){var r=h(this.opts.series,n);if(0!==r.length){var s=d(r,this.chartData.calPoints,n,this.opts.categories,i),l=s.textList,c=s.offset;o.tooltip={textList:l,offset:c,option:i}}}O.call(this,o.type,o,this.config,this.context)}},G.prototype.scrollStart=function(t){t.touches[0]&&!0===this.opts.enableScroll&&(this.scrollOption.startTouchX=t.touches[0].x)},G.prototype.scroll=function(t){if(t.touches[0]&&!0===this.opts.enableScroll){var i=t.touches[0].x-this.scrollOption.startTouchX,n=this.scrollOption.currentOffset,a=function(t,e,i,n){var a=n.width-i.padding-e.xAxisPoints[0],o=e.eachSpacing*n.categories.length,r=t;return t>=0?r=0:Math.abs(t)>=o-a&&(r=a-o),r}(n+i,this.chartData,this.config,this.opts);this.scrollOption.distance=i=a-n;var o=e({},this.opts,{_scrollDistance_:n+i,animation:!1});O.call(this,o.type,o,this.config,this.context)}},G.prototype.scrollEnd=function(t){if(!0===this.opts.enableScroll){var e=this.scrollOption,i=e.currentOffset,n=e.distance;this.scrollOption.currentOffset=i+n,this.scrollOption.distance=0}},module.exports=G; 
 			}); 
		define("app.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("./service/userService.js"),t=require("./utils/util.js");App({onLaunch:function(){var n=this,a=wx.getStorageSync("userInfo"),o=t.getStruct(a,"getToken.accessToken");t.getStruct(a,"adm_account");if(this.globalData.sysinfo=wx.getSystemInfoSync(),this.globalData.authCall=o?e.check(o).then((function(e){return 0==e.code&&!0===t.getStruct(e.data,"verifyToken")?(n.globalData.userInfo=a,console.log(a)):wx.removeStorageSync("userInfo"),e})):new Promise((function(e,t){e({code:1,msg:"invilad Token"})})),wx.canIUse("getUpdateManager")){var c=wx.getUpdateManager();c.onCheckForUpdate((function(e){e.hasUpdate&&(c.onUpdateReady((function(){wx.showModal({title:"更新提示",content:"新版本已经准备好，请重启应用",success:function(e){e.confirm&&c.applyUpdate()}})})),c.onUpdateFailed((function(){wx.showModal({title:"已经有新版本了哟~",content:"新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~"})})))}))}},globalData:{userInfo:null,authCall:!1,version:"1.3.10"}}); 
 			}); 	require("app.js");
 		__wxRoute = 'components/dialog/dialog';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/dialog/dialog.js';	define("components/dialog/dialog.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({options:{multipleSlots:!0},properties:{title:{type:String,value:""},content:{type:String,value:""},cancelText:{type:String,value:""},confirmText:{type:String,value:""},maskClose:{type:Boolean,value:!1},disabledBtn:{type:Boolean,value:!1},theme:{type:String,value:"wx-dialog"},maskClass:{type:String,value:"wx-mask"}},data:{isShow:!1},methods:{hideDialog:function(){this.setData({isShow:!1})},showDialog:function(){this.setData({isShow:!0})},clickMask:function(t){this.properties.maskClose&&this.hideDialog()},_cancelEvent:function(){this.triggerEvent("cancelEvent")},_confirmEvent:function(){this.triggerEvent("confirmEvent")}}}); 
 			}); 	require("components/dialog/dialog.js");
 		__wxRoute = 'components/editor/editor';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/editor/editor.js';	define("components/editor/editor.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({properties:{ctx:String},data:{formats:{},readOnly:!1,keyboardHeight:0,placeholder:"开始输入..."},methods:{onEditorReady:function(){var t=this;this.createSelectorQuery().select("#editor").context((function(e){t.data.editorCtx=e.context})).exec()},onStatusChange:function(t){var e=t.detail;this.setData({formats:e})},readOnlyChange:function(){this.setData({readOnly:!this.data.readOnly})},format:function(t){var e=t.target.dataset,a=e.name,n=e.value;a&&this.data.editorCtx.format(a,n)},insertLink:function(){var t=this;wx.showModal({title:"请输入超链接地址",editable:!0,placeholderText:"http://traceint.com",success:function(e){if(e.confirm){var a=e.content;t.data.editorCtx.insertText({text:'<a href="'+a+'">'+a+"</a>"})}}})},syncHtml:function(){var t=this;this.data.editorCtx.getContents({success:function(e){var a=e.html;t.triggerEvent("sync",t.decodeHtml(a),{})}})},decodeHtml:function(t){var e={lt:"<",gt:">",nbsp:" ",amp:"&",quot:'"'};return t.replace(/&(lt|gt|nbsp|amp|quot);/gi,(function(t,a){return e[a]}))}}}); 
 			}); 	require("components/editor/editor.js");
 		__wxRoute = 'components/layout/layout';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/layout/layout.js';	define("components/layout/layout.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";getApp(),require("../../utils/util.js");Component({distanceList:[],properties:{width:{type:Number,value:360},height:{type:Number,value:300},propLayout:{type:Object,value:{},observer:function(t,e){this.setLayout(t)}}},data:{Layout:[],maxHeight:100,maxWidth:100,scale:1,x:0,y:0,cx:0,cy:0,colors:{},show:!0},ready:function(){console.log("layout",this.properties.propLayout),this.setLayout(this.properties.propLayout)},methods:{reload:function(){this.setData({show:!1}),this.setData({show:!0})},bindTouchMove:function(t){if(2==t.touches.length){var e=t.touches[1].clientX-t.touches[0].clientX,s=t.touches[1].clientY-t.touches[0].clientY,i=Math.sqrt(e*e+s*s);if(this.distanceList.push(i),this.distanceList.length<2)return;this.distanceList.length>3&&this.distanceList.shift();var a=this.distanceList[1]-this.distanceList[0],o=this.data.scale+.005*a;o=(o=o>2?2:o)<.2?.2:o,this.setData({scale:o})}},bindTouchEnd:function(t){this.distanceList=[]},bindTouchStart:function(t){if(2==t.touches.length){this.distanceList=[];var e=(t.touches[1].clientX+t.touches[0].clientX)/2,s=(t.touches[1].clientY+t.touches[0].clientY)/2;this.setData({cx:e,cy:s})}},setColors:function(t){var e={};for(var s in t)e[s]="grid_active";this.setData({colors:e})},seatClick:function(t){console.log("seatClick",t);var e=t.currentTarget.dataset.seat;e&&(console.log("seatClick-color"),this.triggerEvent("seatClick",{seat:e,event:t}))},setLayout:function(t){if(t.max_y&&t.max_x){var e=35*(t.max_y+2),s=35*(t.max_x+2);s=s*this.data.scale<this.properties.width?this.properties.width:s,e=e*this.data.scale<this.properties.height?this.properties.height:e;var i=parseInt((this.properties.width-s)/2),a=parseInt((this.properties.height-e)/2);console.log("maxWidth",s,"maxHeight",e,"properties:",this.properties.width,this.properties.height),console.log("x",i,"y",a),this.setData({layout:t,maxHeight:e,maxWidth:s,x:i,y:a,cx:s/2,cy:e/2})}this.reload()}}}); 
 			}); 	require("components/layout/layout.js");
 		__wxRoute = 'components/select/select';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/select/select.js';	define("components/select/select.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({distanceList:[],properties:{options:{type:Array,value:[]},text:{type:String,value:"请选择"},checked:{type:Object,value:null,observer:function(t,e){console.log(t),this.setData({selected:t,_text:t.title})}},width:{type:String,value:"100%"},height:{type:String,value:"40px"},backgroud:{type:String,value:"#fff"}},data:{show:!1,selected:null,_text:"请选择"},ready:function(){null!=this.properties.checked?this.setData({selected:this.properties.checked,_text:this.properties.checked.title}):this.setData({_text:this.properties.text})},methods:{select:function(t){var e=t.currentTarget.dataset.option;this.setData({selected:e,_text:e.title}),this.triggerEvent("select",{value:e}),console.log(e),this.hide()},toggle:function(){var t=!this.data.show;this.setData({show:!this.data.show}),this.triggerEvent("show",{value:t})},show:function(){console.log("show"),this.setData({show:!0}),this.triggerEvent("show",{value:!0})},hide:function(){this.setData({show:!1}),this.triggerEvent("show",{value:!1})},value:function(){return this.data.selected}}}); 
 			}); 	require("components/select/select.js");
 		__wxRoute = 'pages/login/login';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/login/login.js';	define("pages/login/login.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a=getApp(),e=require("../../utils/util.js"),t=require("../../service/userService.js");Page({data:{name:"",passwd:"",projectName:"",userInfo:[],logo:e.themeUrl("logo.png"),canIuse:wx.canIUse("button.open-type.getUserInfo"),ready:!1},bindKeyInput:function(a){var e={};e[a.target.id]=a.detail.value,this.setData(e)},loginSuccess:function(t){a.globalData.login=!1,a.globalData.userInfo=e.getStruct(t.data,"adminLogin");var n=e.getStruct(a.globalData.userInfo,"getToken.accessToken"),o=e.getStruct(a.globalData.userInfo,"adm_account");n&&o&&(a.globalData.userInfo.getToken.accessToken=o+"|"+n),wx.setStorageSync("userInfo",a.globalData.userInfo),wx.redirectTo({url:"../index/index"})},login:function(){var a=this;t.login(this.data.name,this.data.passwd).then((function(t){0===t.code?a.loginSuccess(t):e.showError(t.msg)}))},onLoad:function(t){var n=this;this.setData(e.getConfig()),wx.showLoading({title:"加载中"}),a.globalData.userInfo?(wx.redirectTo({url:"../index/index"}),wx.hideLoading()):a.globalData.authCall?a.globalData.authCall.then((function(a){return wx.hideLoading(),0==a.code?wx.redirectTo({url:"../index/index"}):n.setData({ready:!0}),a})):(wx.hideLoading(),this.setData({ready:!0})),a.globalData.authCall=null}}); 
 			}); 	require("pages/login/login.js");
 		__wxRoute = 'pages/index/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/index/index.js';	define("pages/index/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=getApp(),t=require("../../utils/util.js"),a=require("../../service/dataService.js"),s=require("../../utils/schoolChange.js");Page(t.merge({data:{indexMenu:[{icon:"../../images/bat.png",text:"座位批量管理",url:"free"},{icon:"../../images/qr.png",text:"离线二维码",url:"qrcode"},{icon:"../../images/qst.png",text:"问题回复",url:"question"},{icon:"../../images/black.png",text:"黑名单",url:"black"},{icon:"../../images/plus.png",text:"发送通知",url:"message"}],yesterday:{reserve_sum:0,mark_sum:0,hold_sum:0,cancel_sum:0,confirm_sum:0},version:e.globalData.version},tongjiClick:function(e){t.navigateToPage("tongji")},onLoad:function(){var s=this;t.checkRedirect(),this.setData({userInfo:e.globalData.userInfo});var r=t.getStruct(e.globalData.userInfo,"getToken.accessToken"),n=a.getCurrentSch({sch_id:0});a.index(r,n.sch_id).then((function(r){return 0===r.code?(e.globalData.schList=r.data.schList,a.setCurrentSch(r.data.currentSch),s.setData(r.data)):t.showError(r.msg),r}))},schChangeInPage:function(s){var r=this,n=t.getStruct(e.globalData.userInfo,"getToken.accessToken");a.index(n,s.sch_id).then((function(s){return 0===s.code?(e.globalData.schList=s.data.schList,a.setCurrentSch(s.data.currentSch),r.setData(s.data)):t.showError(s.msg),s}))}},s)); 
 			}); 	require("pages/index/index.js");
 		__wxRoute = 'pages/tongji/tongji';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/tongji/tongji.js';	define("pages/tongji/tongji.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";getApp();var t=require("../../utils/util.js"),e=(require("../../service/userService.js"),require("../../service/dataService.js")),a=require("../../utils/wxcharts.js"),i=require("../../utils/schoolChange.js"),s=null,l=null,n=null,c=null;Page(t.merge({data:{libs:[],dates:[],libSelect:{id:0,title:"全部场馆"},dateSelect:{id:7,title:"近7天"},tabActive:"reserve_sum",canvasShow:!0,tableData:[{date:"20180204",data:0}]},schClick:function(){this.dialog.showDialog(),this.setData({canvasShow:!1})},_cancelEvent:function(){this.dialog.hideDialog(),this.setData({canvasShow:!0})},touchHandler:function(t){s.scrollStart(t)},moveHandler:function(t){s.scroll(t)},touchEndHandler:function(t){s.scrollEnd(t),s.showToolTip(t,{format:function(t,e){return e+" "+t.name+":"+t.data}})},selectShowHandler:function(t){console.log("selectShowHandler",t.detail),this.setData({canvasShow:!t.detail.value})},libSelectHandler:function(t){var e=t.detail.value;e.id!==this.data.libSelect.id&&(this.setData({libSelect:e}),this.fetchApiData())},dateSelectHandler:function(t){var e=t.detail.value;e.id!==this.data.dateSelect.id&&(this.setData({dateSelect:e}),this.fetchApiData())},tabClick:function(t){var e=t.currentTarget.dataset.key;e!=this.data.tabActive&&(this.setData({tabActive:e}),this.fetchApiData(!0))},schChangeInPage:function(t){this.setData({libSelect:{id:0,title:"全部场馆"},dateSelect:{id:7,title:"近7天"}}),this.fetchApiData()},fetchData:function(){this.setData(t.merge({libs:[{id:0,title:"全部场馆"}],dates:[{id:7,title:"最近7日"},{id:30,title:"最近30日"}],tabActive:"reserve_sum",tabs:[{key:"reserve_sum",name:"预约总数"},{key:"confirm_sum",name:"签到总数"},{key:"cancel_sum",name:"退座总数"},{key:"mark_sum",name:"监督占座"},{key:"hold_sum",name:"暂离总数"}]},this.getCommonData()))},displayData:function(){var a=arguments.length>0&&void 0!==arguments[0]&&arguments[0],i=t.getStruct(this.data.dateSelect,"id",7);l=e.getChartTypeData(n,this.data.tabActive,-1*i),this.rewriteChart(l,a);var s=[];console.log(l,this.data.tabActive),l.categories.forEach((function(t,e){s.push({date:t,data:l.data[e]})})),this.setData({tableData:s})},fetchApiData:function(){var a=this,i=arguments.length>0&&void 0!==arguments[0]&&arguments[0],s=e.getCurrentSch({sch_id:0}),l=s.sch_id;if(l>0)if(i&&n)this.displayData(i);else{var c=t.getStruct(this.data.libSelect,"id",0),o=t.getStruct(this.data.dateSelect,"id",7);console.log("tongji-fetchApiData",l,c,o),e.tongji(l,c,o).then((function(e){console.log("tongji-fetchApiData-result",e),0==e.code?(a.setData({libs:e.data.libs}),n=e.data.statis,a.displayData(i)):t.showError(e.msg)}))}else t.showError("当前学校未设置")},rewriteChart:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=[{name:"统计人数",data:t.data,format:function(t,e){return t+"人"}}],l=t.categories;try{if(e&&s)console.log("updateData lineChart"),s.updateData({series:i,categories:l});else{var n=wx.getSystemInfoSync();c=n.windowWidth,s=new a({canvasId:"lineCanvas",type:"line",animation:!1,categories:l,series:i,xAxis:{disableGrid:!1},yAxis:{title:"人数",format:function(t){return t},min:0},width:c,height:250,dataLabel:!0,dataPointShape:!0,enableScroll:!0,extra:{lineStyle:"curve"}})}}catch(t){console.error("getSystemInfoSync failed!")}},onLoad:function(e){console.log("tongji-load"),t.checkRedirect(),this.fetchData(),this.fetchApiData()}},i)); 
 			}); 	require("pages/tongji/tongji.js");
 		__wxRoute = 'pages/free/free';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/free/free.js';	define("pages/free/free.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../@babel/runtime/helpers/createForOfIteratorHelper"),e=(getApp(),require("../../utils/util.js")),a=require("../../utils/watch.js"),o=require("../../service/dataService.js"),s=require("../../utils/schoolChange.js");Page(e.merge({data:{layoutWidth:750,layoutHeight:350,libSelect:{id:0,title:"全部场馆"},libs:[],layout:[],layoutBar:[],proofs:[],choosedSeat:{},choosedSeatLength:0,choosedSeatSelected:{},num:"",talk:"",proofDialogTitle:"",showUserInfo:!1,userinfo:{},userinfoY:10},onReady:function(){console.log("onReady"),this.dialog=this.selectComponent("#dialog"),this.addNumDialog=this.selectComponent("#addNumDialog"),this.proofDialog=this.selectComponent("#proofDialog"),this.layout=this.selectComponent("#layout")},addProof:function(){var t=this;this.data.proofs.length>=2?e.showError("最多能加2张图片"):wx.chooseImage({count:1,sizeType:["compressed"],sourceType:["camera"],success:function(a){console.log(a),t.urlTobase64(a.tempFilePaths[0]).then((function(s){o.uploadProof(s).then((function(o){0===o.code?(t.data.proofs.push({id:o.msg,src:a.tempFilePaths[0]}),console.log(t.data.proofs),t.setData({proofs:t.data.proofs})):e.showError(o.msg)}))})).catch((function(t){e.showError(t)}))}})},removeProof:function(t){var a=this,s=t.currentTarget.dataset.proof;!s||s.id<=0?e.showError("证据获取失败"):wx.showModal({title:"确定删除该证据",content:"确定删除该证据?",success:function(t){t.confirm&&o.removeProof(s.id).then((function(t){if(0===t.code){var o=e.deleteArrayItemByCall(a.data.proofs,(function(t){return t.id=s.id}));console.log("delete",o),a.setData({proofs:o})}else e.showError(t.msg)})).catch((function(t){e.showError(t)}))}})},urlTobase64:function(t){return new Promise((function(a,o){wx.getFileSystemManager().readFile({filePath:t,encoding:"base64",success:function(o){var s=wx.arrayBufferToBase64(o.data),i=e.ext(t);s="data:image/".concat(i,";base64,")+o.data,a(s)},fail:function(){o("获取图片数据错误")}})}))},hideProofDialog:function(){this.proofDialog.hideDialog()},watch:{choosedSeat:function(t){var e=this.getSeatsKeyArray(3).keys.length;this.setData({choosedSeatLength:e})}},bindKeyInput:function(t){var e={};e[t.target.id]=t.detail.value,this.setData(e)},libSelectHandler:function(t){var e=t.detail.value;e.id!==this.data.libSelect.id&&(this.setData({libSelect:e,choosedSeat:{},choosedSeatSelected:{}}),this.layout.setColors({})),this.fetchApiData()},pageChangeHandler:function(t){this.addNumDialog.showDialog()},schChangeInPage:function(t){this.setData({libSelect:{id:0,title:"全部场馆"},choosedSeat:{},choosedSeatSelected:{}}),this.layout.setColors({}),this.fetchApiData()},seatClickHandler:function(t){var e=t.detail.seat,a=t.detail.event;e.status&&this.chooseSeat(e,a)},hideUserInfo:function(t){this.setData({showUserInfo:!1})},refrashClickHandler:function(t){this.fetchApiData()},chooseNumHandler:function(t){var e=t.currentTarget.dataset.seat;this.chooseNum(e)},chooseSeat:function(t,e){var a=this,s=this.data.choosedSeat,i=!1;s[t.key]?delete s[t.key]:(s[t.key]=t,i=!0),this.setData({choosedSeat:s}),this.layout.setColors(s),i?this.data.libSelect&&this.data.libSelect.id&&o.seatUserInfo(this.data.libSelect.id,t.key).then((function(t){0===t.code&&(e.currentTarget.offsetTop,a.setData({userinfo:t.data,showUserInfo:!0}))})):this.setData({showUserInfo:!1})},chooseNum:function(t){var e=this.data.choosedSeatSelected;e[t.key]?delete e[t.key]:e[t.key]=t,this.setData({choosedSeatSelected:e})},findSeat:function(t){var a=e.getStruct(this.data.layout,"seats");if(a)for(var o in a)if(a[o].name&&a[o].name===t&&1==a[o].type&&a[o].status)return a[o];return!1},getSeatsKeyArray:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=this.data.choosedSeat,a=[],o=[];for(var s in e)e.hasOwnProperty(s)&&(null===t||e[s].seat_status==t?a.push(s):o.push(e[s].name));return{keys:a,unkeys:o}},addNumHandler:function(t){var a=this.data.num+"",o=this.findSeat(a);if(!1===o)e.showError("未找到该座位号");else{var s=this.data.choosedSeat;a="",s[o.key]?this.setData({num:a}):(s[o.key]=o,this.setData({num:a,choosedSeat:s}),this.layout.setColors(s))}},delNumHandler:function(t){var e=this;wx.showModal({title:"删除已选中的管理座位",content:"你确定删除已选中的管理座位?",success:function(t){if(t.confirm){var a=e.data.choosedSeatSelected,o=e.data.choosedSeat,s=!1;for(var i in a)delete o[i],delete a[i],s=!0;s&&(e.setData({choosedSeat:o,choosedSeatSelected:a}),e.layout.setColors(o))}}})},batMarkHandler:function(t){this.getSeatsKeyArray(3).keys.length<=0?e.showError("未能找到学习中的座位"):this.data.libSelect.id<=0?e.showError("当前场馆没有设置"):(this.setData({proofDialogTitle:"批量座位监督"}),this.proofDialog.showDialog())},batMarkSubmit:function(a){var s=this;if(this.data.talk.length>25)e.showError("请填写小于25个汉字");else{var i,r=this.getSeatsKeyArray(3),n=[],l=t(this.data.proofs);try{for(l.s();!(i=l.n()).done;){var c=i.value;n.push(c.id)}}catch(t){l.e(t)}finally{l.f()}var h="确认操作",d="你确定批量监督座位";if(r.unkeys.length>0)h="发现选中的座位有的不是学习中的状态",d=r.unkeys.join(" ,")+" 的座位号的座位不是学习状态中的,点确定将仅对其他学习中的座位进行处理";wx.showModal({title:h,content:d,success:function(t){if(t.confirm){o.batMark(s.data.libSelect.id,r.keys.join("|"),n.join(","),s.data.talk).then((function(t){0===t.code&&(s.setData({choosedSeat:{},choosedSeatSelected:{},talk:"",proofs:[]}),s.layout.setColors({}),s.proofDialog.hideDialog(),setTimeout((function(){s.fetchApiData()}),2e3)),e.showError(t.msg,2e3)}))}}})}},batFreeHandler:function(t){var a=this,s=this.getSeatsKeyArray();s.keys.length<=0?e.showError("未能找到已预约的座位"):this.data.libSelect.id>0?wx.showModal({title:"确认操作",content:"你确定批量释放座位?",success:function(t){if(t.confirm){o.batFree(a.data.libSelect.id,s.keys.join("|")).then((function(t){0===t.code&&(a.setData({choosedSeat:{},choosedSeatSelected:{}}),a.layout.setColors({}),setTimeout((function(){a.fetchApiData()}),2e3)),e.showError(t.msg,2e3)}))}}}):e.showError("当前场馆没有设置")},fetchApiData:function(){var t=this,a=o.getCurrentSch({sch_id:0,name:"未设置"});if(a.sch_id>0){console.log("free-request",a.sch_id);var s=e.getStruct(this.data.libSelect,"id",0);o.free(a.sch_id,s).then((function(a){if(console.log("free-result",a.data),0===a.code){var o=a.data.lib_layout;t.data.libSelect.id<=0?t.setData({libs:a.data.libs,libSelect:a.data.libs[0]||{id:0,title:"全部场馆"},layout:o}):t.setData({libs:a.data.libs,layout:o})}else e.showError(a.msg);return a}))}else e.showError("你没有设置当前学校")},onLoad:function(){a.setWatcher(this);try{e.checkRedirect();var t=o.getLayoutBar(),s=wx.getWindowInfo();this.setData(e.merge({layoutWidth:s.windowWidth,layoutHeight:s.windowHeight-150-45,layoutBar:t},this.getCommonData())),this.fetchApiData()}catch(t){e.showError(t.message)}}},s)); 
 			}); 	require("pages/free/free.js");
 		__wxRoute = 'pages/question/question';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/question/question.js';	define("pages/question/question.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp(),a=require("../../utils/util.js"),e=(require("../../service/userService.js"),require("../../service/dataService.js")),s=(require("../../utils/wxcharts.js"),require("../../utils/schoolChange.js"));Page(a.merge({data:{tabActive:0,qstList:[],page:1,pageTotal:2,qst:null,answermsg:""},tabClick:function(t){var a=t.currentTarget.dataset.key;a!=this.data.tabActive&&(this.setData({tabActive:a,page:1,pageTotal:1}),this.fetchApiData())},answerHanlder:function(t){var a=t.currentTarget.dataset.qst;a&&a.is_answer||(this.setData({qst:a}),this.answerDialog.showDialog())},answerCancleHandler:function(t){this.setData({qst:null}),this.answerDialog.hideDialog()},formSubmitHandler:function(t){var s=this;if(this.data.qst){console.log(t);var i=a.getStruct(t.detail,"value.answermsg","");i?e.answer(this.data.qst.qst_id,i).then((function(t){if(0==t.code){console.log(s.data.qst,t);var e=s.getRemovedLIst(s.data.qst);s.setData({qst:null,answermsg:"",qstList:e}),s.answerDialog.hideDialog()}else a.showError(t.msg)})):a.showError("不能回复空消息!")}else a.showError("你没有选中问题进行回答")},getRemovedLIst:function(t){var a=this.data.qstList,e=a.findIndex((function(a){return a.qst_id==t.qst_id}));return console.log("removeItem",t,e),a.splice(e,1),a},schChangeInPage:function(t){this.setData({page:1,pageTotal:1,qstList:[]}),this.fetchApiData()},onReady:function(){this.dialog=this.selectComponent("#dialog"),this.answerDialog=this.selectComponent("#answerDialog")},onReachBottom:function(a){var e=this;console.log("onReachBottom!"),this.data.page<this.data.pageTotal&&(t.globalData.loadding||this.setData({page:this.data.page+1},(function(){e.fetchApiData(!0)})))},fetchData:function(){this.setData(a.merge({tabActive:0,tabs:[{key:0,name:"未处理问题"},{key:1,name:"已处理问题"}]},this.getCommonData()))},fetchApiData:function(){var t=this,s=arguments.length>0&&void 0!==arguments[0]&&arguments[0],i=e.getCurrentSch({sch_id:0});i.sch_id>0?(console.log("question-request",i.sch_id,this.data.tabActive,this.data.page),e.qst(i.sch_id,this.data.tabActive,this.data.page).then((function(e){if(console.log("question-result",e),0==e.code){var i,o=a.getStruct(e.data,"qstList",[]),n=a.getStruct(e.data,"pageTotal",1);i=s?t.data.qstList:[],o.forEach((function(t){t.created_at=a.mTime(t.created_at),i.push(t)})),t.setData({qstList:i,pageTotal:n})}else a.showError(e.msg)}))):a.showError("你没有设置学校")},refrashClickHandler:function(t){this.fetchApiData()},onLoad:function(t){console.log("question-load"),a.checkRedirect(),this.fetchData(),this.fetchApiData()}},s)); 
 			}); 	require("pages/question/question.js");
 		__wxRoute = 'pages/qrcode/qrcode';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/qrcode/qrcode.js';	define("pages/qrcode/qrcode.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";getApp();var t=require("../../utils/util.js"),e=(require("../../service/userService.js"),require("../../service/dataService.js")),i=(require("../../utils/wxcharts.js"),require("../../utils/schoolChange.js"));Page(t.merge({data:{url:"",timeList:[],ttl:0,expireAt:"",expire:{k:30,v:"30秒"},chooseTime:null,interval:null},schChangeInPage:function(t){this.data.chooseTime=null,this.fetchApiData()},downloadHandler:function(e){this.data.url?this.imgDialog.showDialog():t.showError("请先获取二维码")},timeChangeHandler:function(e){var i=parseInt(e.detail.value);i<30?t.showError("参数设置错误"):this.data.chooseTime=i},reflushHandler:function(t){var e=this;wx.showModal({title:"强制刷新二维码",content:"强制刷新二维码会造成老码失效!",success:function(t){t.confirm&&e.fetchApiData(1)}})},timeSelectHanlder:function(t){this.timeDialog.showDialog()},cancelTimeHanlder:function(t){this.data.chooseTime=null,this.timeDialog.hideDialog()},cancelImgHanlder:function(t){this.imgDialog.hideDialog()},confirmTimeHanlder:function(i){var a=this;if(this.data.chooseTime){var o=e.getCurrentSch({sch_id:0});o.sch_id>0?e.setQrCodeExpire(o.sch_id,this.data.chooseTime).then((function(e){0==e.code&&(a.data.chooseTime=null,a.timeDialog.hideDialog(),a.fetchApiData()),t.showError(e.msg)})):t.showError("你没有设置学校")}},onReady:function(){this.dialog=this.selectComponent("#dialog"),this.timeDialog=this.selectComponent("#timeDialog"),this.imgDialog=this.selectComponent("#imgDialog")},fetchData:function(){this.setData(this.getCommonData())},fetchApiData:function(){var i=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,o=e.getCurrentSch({sch_id:0});if(o.sch_id>0)return e.qrcode(o.sch_id,a).then((function(e){console.log(e),0==e.code?(i.data.interval&&clearTimeout(i.data.interval),e.data.ttl<=3600&&e.data.ttl>0&&(i.data.interval=setTimeout((function(){i.fetchApiData()}),1e3*e.data.ttl)),i.setData(e.data)):t.showError(e.msg)}));t.showError("你没有设置学校")},onLoad:function(e){console.log("qrcode-load"),t.checkRedirect(),this.fetchData(),this.fetchApiData()}},i)); 
 			}); 	require("pages/qrcode/qrcode.js");
 		__wxRoute = 'pages/black/black';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/black/black.js';	define("pages/black/black.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=getApp(),a=require("../../utils/util.js"),t=(require("../../service/userService.js"),require("../../service/dataService.js")),i=require("../../utils/schoolChange.js");Page(a.merge({data:{tabActive:0,list:[],searchList:[{name:"手机",value:"user_mobile"},{name:"学号",value:"user_student_no"}],page:1,pageTotal:2,searchText:"",searchType:"手机",searchValue:"user_mobile"},bindKeyInput:function(e){var a={};a[e.target.id]=e.detail.value,this.setData(a)},searchTypeClick:function(){this.searchTypeDialog.showDialog()},searchTypeClose:function(){this.searchTypeDialog.hideDialog()},searchTypeChange:function(e){var a=this.data.searchList[e.detail.value];a&&a.value!=this.data.searchValue&&this.setData({searchType:a.name,searchValue:a.value}),this.fetchApiData(),this.searchTypeDialog.hideDialog()},schChangeInPage:function(e){this.setData({page:1,pageTotal:1,list:[],searchText:"",searchType:"手机",searchValue:"user_mobile"}),this.fetchApiData()},searchBlur:function(e){this.fetchApiData()},removeBlackHanlder:function(e){var i=this,s=e.currentTarget.dataset.item;s&&s.user_mobile&&wx.showModal({title:"删除黑名单",content:"你确定解封黑名单["+s.user_nick+"]",success:function(e){e.confirm&&t.removeBlack(s.user_mobile).then((function(e){if(0==e.code){var t=i.data.list.findIndex((function(e){return e.user_mobile==s.user_mobile}));console.log("removeItem",i.data.list,t),i.data.list.splice(t,1),i.setData({list:i.data.list})}else a.showError("错误")}))}})},onReady:function(){this.dialog=this.selectComponent("#dialog"),this.searchTypeDialog=this.selectComponent("#searchTypeDialog")},onReachBottom:function(a){var t=this;console.log("onReachBottom!"),this.data.page<this.data.pageTotal&&(e.globalData.loadding||this.setData({page:this.data.page+1},(function(){t.fetchApiData(!0)})))},fetchData:function(){this.setData(this.getCommonData())},fetchApiData:function(){var e=this,i=arguments.length>0&&void 0!==arguments[0]&&arguments[0],s=t.getCurrentSch({sch_id:0});s.sch_id>0?(console.log("black-request",s.sch_id,this.data.tabActive,this.data.page),t.black(s.sch_id,this.data.page,this.data.searchValue,this.data.searchText).then((function(t){if(console.log("black-result",t),0==t.code){var s,o=a.getStruct(t.data,"list",[]),c=a.getStruct(t.data,"pageTotal",1);s=i?e.data.list:[],o.forEach((function(e){e.deny_adate=a.mTime(e.deny_adate),e.deny_deadline=a.mTime(e.deny_deadline),s.push(e)})),e.setData({list:s,pageTotal:c})}else a.showError(t.msg)}))):a.showError("你没有设置学校")},onLoad:function(e){console.log("black-load"),a.checkRedirect(),this.fetchData(),this.fetchApiData()}},i)); 
 			}); 	require("pages/black/black.js");
 		__wxRoute = 'pages/blue/blue';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/blue/blue.js';	define("pages/blue/blue.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";require("../../@babel/runtime/helpers/Objectvalues");var t,o=require("../../@babel/runtime/helpers/toConsumableArray"),e=(t=require("wxmp-rsa"))&&t.__esModule?t:{default:t};var n=require("../../config"),a=getApp();Page({data:{isDebug:!1,isAuth:!1,hasSign:!1,signResult:!0,uuids:[],tip:"请开启蓝牙进行设备签到",url:n.host,msg:"",t:"",time:"",version:a.globalData.version,location:{},foundBeacons:[],hideLoadingTimer:null},onLoad:function(t){this.checkEnv(),(t.t||null)&&(this.setData({t:t.t}),this.verifSch(t))},checkEnv:function(){var t=this;wx.openBluetoothAdapter({success:function(o){wx.getLocation({fail:function(o){t.alert("定位不可用","请检查定位功能是否打开且已授权",t.checkEnv)}})},fail:function(o){console.log(o),t.alert("蓝牙不可用","请检查蓝牙是否打开且已授权",t.checkEnv)}})},tapAuth:function(){this.data.isDebug?wx.navigateTo({url:"./blue?t=b9e8d1e1f7d55ad63e2bcbc6933cda983645569267ab4d0b"}):wx.navigateTo({url:"./auth"})},tapSignIn:function(){this.data.foundBeacons.length<=0?this.getBeacon():(this.loadingStart({title:"正在签到，请耐心等待"},{title:"签到失败",showCancel:!1,content:"请检查蓝牙是否正常后重试"},6e4),this.signIn())},verifSch:function(t){var o=this;wx.request({url:"".concat(o.data.url,"index.php/wxApp/devices.html"),data:t,header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",success:function(t){var e=t.data;0==e.code?e.data.devices.length>0?(o.setData({uuids:e.data.devices,isAuth:!0}),o.getDeviceInfo()):wx.showModal({title:"提示",content:"当前学校暂未开通蓝牙签到功能",showCancel:!1,success:function(t){t.confirm}}):wx.showModal({title:"提示",content:e.msg,success:function(t){t.confirm||t.cancel}})},fail:function(t){console.log(t),wx.showToast({title:t.errMsg,icon:"none",duration:3e3})}})},getDeviceInfo:function(){this.getLocaton(),this.getBeacon()},getLocaton:function(){this.data.location=[],console.log("开始获取定位信息");var t=this;wx.getLocation({type:"gcj02",isHighAccuracy:!0,success:function(o){var e=[o.latitude,o.longitude];t.data.location=e,console.log("获取定位信息成功:"+JSON.stringify(o))},fail:function(o){console.log("获取定位信息失败:"+JSON.stringify(o)),t.alert("位置信息获取失败","请打开定位功能重试",t.getLocaton)}})},getBeacon:function(){this.stopSearch(),this.data.foundBeacons=[],console.log("开始获取蓝牙信标");var t=this;this.loadingStart({title:"正在搜索蓝牙设备，请稍后"},{title:"查找蓝牙设备超时",showCancel:!1,content:"请确认您在蓝牙签到区域内重试",success:function(o){o.confirm&&t.getBeacon()}},5e3),wx.openBluetoothAdapter({success:function(){console.log("初始化蓝牙成功"),console.log(t.data.uuids),wx.startBeaconDiscovery({uuids:o(t.data.uuids),success:function(){console.log("蓝牙设备搜索启动成功");var o=Date.now();wx.onBeaconUpdate((function(e){console.log("蓝牙设备监听成功"),Date.now()-o<3e3||wx.getBeacons({success:function(o){var e=o.beacons;if(e.length<=0)return t.stopSearch(),void t.alert("未找到蓝牙签到设备","请确认重新尝试",t.getBeacon);console.log("获取蓝牙信标结束"),console.log(e),t.setData({foundBeacons:e}),t.stopSearch(),t.data.hasSign&&!t.data.signResult&&t.tapSignIn()},fail:function(o){console.log("获取蓝牙设备失败:"+JSON.stringify(o)),t.stopSearch(),t.alert("获取蓝牙设备失败","请检查蓝牙后重试("+o.errCode+")",t.getBeacon)}})}))},fail:function(o){console.log("搜索蓝牙设备失败:"+JSON.stringify(o)),t.stopSearch(),11005===o.errCode?t.alert("搜索蓝牙设备失败","将重启程序重新尝试",(function(){console.log("准备跳转"),wx.restartMiniProgram({path:"/pages/blue/blue"})})):t.alert("搜索蓝牙设备失败","请检查蓝牙后重试("+o.errCode+")",t.getBeacon)}})},fail:function(o){console.log("蓝牙初始化失败:"+JSON.stringify(o)),t.alert("蓝牙初始化失败","请检查蓝牙后重试("+o.errCode+")",t.getBeacon)}})},signIn:function(){console.log("开始签名请求");var t=this,o=this.fiterBeacons(this.data.foundBeacons);console.log("开始签名请求"),wx.request({url:"".concat(t.data.url,"index.php/wxApp/getTime.html"),method:"GET",success:function(n){var a=n.data,c=new e.default;c.setPublicKey("-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA0dmmkW4xPa+HhBTyaa0dgAb0fVZRS67jK4y15BQthjJ/ZuUZQmrbGqhG7rwnxfm7g+nFH9zEyRU5KLX3ty9jpNrPjyg7FBF9OvBDYHEt83b77W3mfBjpmoTJOt27E7RZ4InHqJQjqSEo4bw1PDz2OBmtlNIlXMu0VA8I0Bh39hBBnm0oouRV7FdqEzAp8nsF7a3VuBYpx9xek+cRVip0pMXI1AXM6bmyWWNzV0oikQW4ZIbutgDziTMeW28zl/hRbW9Ht34w0sWYyxumuLr1qweW3qnxycn3zn47weFYe6nJp71z+lgVtNTGtowNPPqBLXqusvwf+uNhSy1wKQFpUwIDAQAB-----END PUBLIC KEY-----");var i=c.encryptLong(a.toString());t.signInNext({t:t.data.t,devices:t.base64Encode(JSON.stringify(o)),location:t.base64Encode(JSON.stringify(t.data.location)),pass:i})}})},signInNext:function(t){console.log("开始签到请求:"+JSON.stringify(t));var o=this;wx.request({url:"".concat(o.data.url,"index.php/wxApp/sign.html"),data:t,header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",success:function(t){console.log("签到请求成功:"+JSON.stringify(t.data));var e=t.data;0==e.code?o.setData({msg:e.msg,hasSign:!0,signResult:!0}):o.setData({msg:e.msg,hasSign:!0,signResult:!1})},fail:function(t){console.log("签到请求失败:"+JSON.stringify(t)),o.setData({hasSign:!1}),wx.showToast({title:t.msg,icon:"none",duration:3e3})},complete:function(){o.loadingEnd(),o.setData({foundBeacons:[]})}})},stopSearch:function(){wx.offBeaconUpdate(),wx.offBeaconServiceChange(),wx.stopBeaconDiscovery({success:function(t){console.log("stopBeaconDiscovery ok")},fail:function(t){console.log("stopBeaconDiscovery fail"),console.log(t)}}),wx.closeBluetoothAdapter({success:function(t){console.log("closeBluetoothAdapter ok")},fail:function(t){console.log("closeBluetoothAdapter fail")}}),this.loadingEnd(),console.log("停止蓝牙搜索搜索")},loadingStart:function(t,o){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e4,n=this;wx.showLoading(t),this.hideLoadingTimer=setTimeout((function(){n.loadingEnd(),wx.showModal(o)}),e)},loadingEnd:function(){wx.hideLoading(),clearTimeout(this.hideLoadingTimer)},onShareAppMessage:function(){},alert:function(t,o,e){wx.showModal({title:t,content:o,showCancel:!1,success:function(t){t.confirm&&e()}})},getAverage:function(t,o){var e=t.slice(-o);return e.reduce((function(t,o){return t+o}),0)/e.length},fiterBeacons:function(t){var o=t.reduce((function(t,o){var e="".concat(o.uuid,"-").concat(o.major,"-").concat(o.minor);return t[e]||(t[e]=[o.uuid,o.major,o.minor]),t}),{});return Object.values(o)},base64Encode:function(t){for(var o,e,n,a,c,i,s,l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",r="",u=0;u<t.length;)a=(o=t.charCodeAt(u++))>>2,c=(3&o)<<4|(e=t.charCodeAt(u++))>>4,i=(15&e)<<2|(n=t.charCodeAt(u++))>>6,s=63&n,isNaN(e)?i=s=64:isNaN(n)&&(s=64),r+=l.charAt(a)+l.charAt(c)+l.charAt(i)+l.charAt(s);return r}}); 
 			}); 	require("pages/blue/blue.js");
 		__wxRoute = 'pages/blue/auth';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/blue/auth.js';	define("pages/blue/auth.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var n=require("../../config");Page({data:{url:"".concat(n.host,"index.php/wxApp/index.html#wechat_redirect")},onHide:function(){},onUnload:function(){},onShareAppMessage:function(){}}); 
 			}); 	require("pages/blue/auth.js");
 		__wxRoute = 'pages/message/message';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/message/message.js';	define("pages/message/message.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../@babel/runtime/helpers/defineProperty"),t=getApp(),s=(require("../../utils/util.js"),require("../../service/userService.js"),require("../../service/dataService.js")),i=require("../../utils/util.js");Page({data:{endTime:"",title:"",content:"",userMobile:"",schId:"",showType:"",schList:[]},onLoad:function(){var e=this,a=i.getStruct(t.globalData.userInfo,"getToken.accessToken"),r=s.getCurrentSch({sch_id:0});s.index(a,r.sch_id).then((function(a){return 0===a.code?(t.globalData.schList=a.data.schList,s.setCurrentSch(a.data.currentSch),e.setData(a.data)):i.showError(a.msg),a}))},send:function(){s.sendMsg(this.data.endTime,this.data.title,this.data.content,this.data.userMobile,this.data.schId.toString(),this.data.showType).then((function(e){0==e.code?(i.showError("发送成功"),setTimeout((function(){wx.redirectTo({url:"../index/index"})}),1e3)):i.showError(e.msg)}))},bindValue:function(t){var s=t.currentTarget.dataset.key;this.setData(e({},s,t.detail.value))},schAll:function(e){var t=this.data.schList,s=[];if(-1!=e.detail.value.indexOf("0"))for(var i in t)t[i].checked=!0,s.push(t[i].sch_id);else for(var a in t)t[a].checked=!1;this.setData({schList:t,schId:s})},syncCtx:function(e){this.setData({content:e.detail})}}); 
 			}); 	require("pages/message/message.js");
 	