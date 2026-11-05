import {readFileSync} from 'node:fs';
import assert from 'node:assert/strict';

const data=JSON.parse(readFileSync(new URL('../dist/data/collection.json',import.meta.url),'utf8'));
const required=(value,label)=>assert.ok(typeof value==='string'&&value.trim(),`${label}: expected nonempty text`);
const validURL=(value,label)=>{let u;try{u=new URL(value);}catch{assert.fail(`${label}: invalid URL ${value}`);}assert.equal(u.protocol,'https:',`${label}: HTTPS required`);};
const unique=(id,set,label)=>{required(id,label);assert.ok(!set.has(id),`${label}: duplicate ${id}`);set.add(id);};
assert.ok(data.people.length>0,'Collection must contain studies');
const personIds=new Set(),sourceIds=new Set(),decisionIds=new Set(),allSourceURLs=new Set();
let works=0,decisions=0,techniques=0,exercises=0;
for(const p of data.people){
  unique(p.id,personIds,'Person ID');
  for(const key of ['name','discipline','subtitle','focus','summary','coverage'])required(p[key],`${p.id}.${key}`);
  assert.ok(['design','product','growth'].includes(p.discipline),`${p.id}: unknown discipline`);
  assert.ok(p.artifacts.length>0,`${p.id}: missing sources`);
  assert.ok(p.decisions.length>0,`${p.id}: missing decisions`);
  assert.ok(p.techniques.length>0,`${p.id}: missing techniques`);
  assert.ok(p.limitations.length>0,`${p.id}: missing limits`);
  p.limitations.forEach((x,i)=>required(x,`${p.id}.limitations[${i}]`));
  const personURLs=new Set();
  for(const a of p.artifacts){
    unique(a.id,sourceIds,`${p.id}: source ID`);
    required(a.title,`${p.id}.${a.id}.title`);required(a.summary,`${p.id}.${a.id}.summary`);
    required(a.kind,`${p.id}.${a.id}.kind`);required(a.coverage,`${p.id}.${a.id}.coverage`);
    assert.ok(a.author||a.attribution||a.speakers?.length,`${a.id}: missing source attribution`);
    validURL(a.url,a.id);personURLs.add(a.url);allSourceURLs.add(a.url);
    for(const u of a.relatedUrls||[]){validURL(u,`${a.id}.relatedUrls`);personURLs.add(u);allSourceURLs.add(u);}
    if(a.date&&/^\d{4}-\d\d-\d\d$/.test(a.date))assert.ok(a.date<=data.updatedAt,`${a.id}: source date is after review date`);
    works++;
  }
  for(const d of p.decisions){
    unique(d.id,decisionIds,`${p.id}: decision ID`);
    for(const key of ['title','detail','tradeoff'])required(d[key],`${p.id}.${d.id}.${key}`);
    assert.ok(d.evidenceUrls.length,`${p.id}.${d.id}: unsourced decision`);
    for(const u of d.evidenceUrls){validURL(u,d.id);assert.ok(personURLs.has(u),`${d.id}: evidence not registered in this person's sources: ${u}`);}
    decisions++;
  }
  for(const t of p.techniques){
    required(t.title,`${p.id}: technique title`);required(t.detail,`${p.id}: technique detail`);
    validURL(t.sourceUrl,`${p.id}: technique evidence`);
    assert.ok(personURLs.has(t.sourceUrl),`${p.id}: technique evidence not registered in sources: ${t.sourceUrl}`);techniques++;
  }
  for(const x of [p.exercise,...(p.exercises||[]).slice(1)]){
    for(const key of ['task','deliverable','evaluation'])required(x[key],`${p.id}: exercise ${key}`);exercises++;
  }
}
for(const p of data.discovery||[]){
  unique(p.id,personIds,'Discovery person ID');required(p.name,`${p.id}: name`);required(p.coverage,`${p.id}: discovery coverage`);
  assert.ok(p.sources.length,`${p.id}: missing discovery sources`);for(const s of p.sources){required(s.title,`${p.id}: source title`);validURL(s.url,p.id);}
}
for(const path of data.paths||[]){assert.ok(path.people.length,`${path.id}: empty path`);for(const id of path.people)assert.ok(data.people.some(p=>p.id===id),`${path.id}: missing study ${id}`);}
for(const c of data.comparisons||[]){required(c.title,'Comparison title');required(c.analysis,c.title);assert.ok(c.sourceUrls.length,`${c.title}: missing evidence`);for(const u of c.sourceUrls){validURL(u,c.title);assert.ok(allSourceURLs.has(u),`${c.title}: evidence outside source registry: ${u}`);}}
console.log(`Validated ${data.people.length} substantive studies, ${(data.discovery||[]).length} discovery profiles, ${works} source entries, ${decisions} decisions, ${techniques} communication observations, and ${exercises} exercises.`);
