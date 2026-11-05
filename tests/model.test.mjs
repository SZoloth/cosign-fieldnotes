import test from 'node:test';
import assert from 'node:assert/strict';
import {filterPeople,escapeHTML,safeURL,normalizeNotebook} from '../dist/model.js';
const people=[{id:'a',name:'Ada',discipline:'design',focus:'Interface craft',artifacts:[{title:'A motion study'}]},{id:'b',name:'Ben',discipline:'product',focus:'Strategy',artifacts:[]}];
test('discipline and saved filters compose',()=>assert.deepEqual(filterPeople(people,{discipline:'design',savedOnly:true,saved:['a']}).map(p=>p.id),['a']));
test('search covers ideas and sources, requires all terms, ignores case',()=>{assert.equal(filterPeople(people,{query:'ADA motion'}).length,1);assert.equal(filterPeople(people,{query:'Ada strategy'}).length,0);});
test('HTML escaping handles adversarial source text',()=>assert.equal(escapeHTML('<img src=x onerror="a">'), '&lt;img src=x onerror=&quot;a&quot;&gt;'));
test('source links prohibit executable schemes',()=>{assert.equal(safeURL('javascript:alert(1)'),'#');assert.equal(safeURL('https://example.org/a'),'https://example.org/a');});
test('notebook safely handles absent or malformed storage',()=>{assert.deepEqual(normalizeNotebook(null),{saved:[],notes:{},completed:[],predictions:{}});assert.deepEqual(normalizeNotebook({saved:['a',1],notes:{a:'ok',b:2},completed:'oops'}),{saved:['a'],notes:{a:'ok'},completed:[],predictions:{}});});
