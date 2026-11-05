export const disciplines = ['design', 'product', 'growth'];
export function filterPeople(people, {discipline = 'all', query = '', savedOnly = false, saved = []} = {}) {
  const words = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
  return people.filter(p => (discipline === 'all' || p.discipline === discipline) && (!savedOnly || saved.includes(p.id)) && words.every(w => JSON.stringify([p.name,p.subtitle,p.focus,p.summary,p.artifacts,p.decisions,p.techniques]).toLowerCase().includes(w)));
}
export function escapeHTML(value = '') {return String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
export function safeURL(value) {try {const u = new URL(value);return ['https:','http:'].includes(u.protocol) ? u.href : '#';}catch {return '#';}}
export function normalizeNotebook(raw) {
  if (!raw || typeof raw !== 'object') return {saved:[], notes:{}, completed:[], predictions:{}};
  return {saved:Array.isArray(raw.saved)?raw.saved.filter(x=>typeof x==='string'):[],completed:Array.isArray(raw.completed)?raw.completed.filter(x=>typeof x==='string'):[],notes:raw.notes&&typeof raw.notes==='object'&&!Array.isArray(raw.notes)?Object.fromEntries(Object.entries(raw.notes).filter(([k,v])=>typeof v==='string')):{},predictions:raw.predictions&&typeof raw.predictions==='object'&&!Array.isArray(raw.predictions)?Object.fromEntries(Object.entries(raw.predictions).filter(([k,v])=>typeof v==='string')):{}};
}
