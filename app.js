'use strict';

const game = document.querySelector('#game');
const dialog = document.querySelector('#dialog');
const symbols = {
  help: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 0 1 5 .4c0 2-2.5 2-2.5 4"/><path d="M12 16.5h.01"/>',
  phone: '<rect x="6.5" y="2.5" width="11" height="19" rx="2.5"/><path d="M10 5h4m-2 13.5h.01"/>',
  users: '<circle cx="9" cy="8" r="3"/><path d="M3 20v-2a6 6 0 0 1 12 0v2M16 5a3 3 0 0 1 0 6m2 3a5 5 0 0 1 3 5"/>',
  settings: '<path d="M3 6h3m5 0h10M3 12h9m5 0h4M3 18h4m5 0h9"/><circle cx="8.5" cy="6" r="2.5"/><circle cx="14.5" cy="12" r="2.5"/><circle cx="9.5" cy="18" r="2.5"/>',
  pencil: '<path d="m4 16 11-11 4 4L8 20l-5 1 1-5Zm9-9 4 4"/>',
  close: '<path d="m6 6 12 12M18 6 6 18"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  minus: '<path d="M5 12h14"/>',
  random: '<path d="M3 6h2c4 0 4 4 7 7s4 5 7 5h2m-4-4 4 4-4 4M3 18h2c3 0 4-2 5-4m4-5c2-2 3-3 5-3h2m-4-4 4 4-4 4"/>',
  cosas: '<path d="m12 2 9 5v10l-9 5-9-5V7l9-5Zm0 10 9-5M3 7l9 5v10M7.5 4.5l9 5"/>',
  comidas: '<path d="M7 3v6m-3-6v5a3 3 0 0 0 6 0V3M7 11v10m12 0V3c-4 2-5 6-5 10h5"/>',
  profesiones: '<rect x="2.5" y="7" width="19" height="14" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12c6 3 12 3 18 0m-9 1v3"/>',
  animales: '<ellipse cx="4.5" cy="10" rx="1.8" ry="2.4"/><ellipse cx="9.5" cy="6" rx="1.8" ry="2.5"/><ellipse cx="15" cy="6.5" rx="1.8" ry="2.5"/><ellipse cx="19.5" cy="10.8" rx="1.8" ry="2.4"/><path d="M6 17c0-2 2-3 3-5 1.2-2 4-2 5.4.2 1.1 1.7 3.8 3.1 3.8 5.6 0 2.3-2.2 3.2-4.1 2.3-1.5-.6-2.3-.8-4.3.1C7.8 21 6 19.6 6 17Z"/>',
  cultura_popular: '<path d="m3 9 17-4-1-4L2 5l1 4Zm0 0v11h18V8M6 4l4 3m2-5 4 3m-6 8 4 2-4 2v-4Z"/>',
  tag: '<path d="M3 4h8l10 10-7 7L3 10V4Z"/><circle cx="7" cy="7" r="1"/>',
  play: '<path d="M6 3.8a1 1 0 0 1 1.6-.8l13 8a1.1 1.1 0 0 1 0 2l-13 8A1 1 0 0 1 6 20V3.8Z" fill="currentColor" stroke="none"/>',
  down: '<path d="M12 3v18m-7-7 7 7 7-7"/>',
  up: '<path d="m5 13 7-7 7 7m-14 6 7-7 7 7"/>',
  mask: '<path d="M2.5 7c4.5 2 7.5 1.5 9.5 1.5S17.7 7 21.5 7c-.8 8-3.5 11-6.3 10-1.5-.5-2.1-2.4-3.2-2.4s-1.7 2-3.2 2.4C5.2 18.1 3.1 13.7 2.5 7Z"/><path d="m6 11 3 1.5M18 11l-3 1.5"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 6v6l3 2"/>',
  check: '<path d="m4 12 5 5L20 6"/>',
  vote: '<path d="m7 8 6-6 6 6-6 6-6-6ZM5 12l-3 5v4h20v-4l-3-5M2 17h20"/>',
  refresh: '<path d="M20 7v5h-5M4.5 10a7.5 7.5 0 0 1 13-4l2.5 3M4 17v-5h5m10.5 2a7.5 7.5 0 0 1-13 4L4 15"/>',
  message: '<path d="M21 11a8.5 8.5 0 0 1-9 8.5 9 9 0 0 1-4-.9L3 21l1.6-5A8.3 8.3 0 0 1 3 11a9 9 0 0 1 18 0Z"/>',
  trophy: '<path d="M7 3h10v5a5 5 0 0 1-10 0V3Zm0 2H3v2a4 4 0 0 0 5 4m9-6h4v2a4 4 0 0 1-5 4m-4 2v5m-4 3h8m-6-3h4"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5m0-9h.01"/>'
};
function icon(name, size = 20) {
  return '<svg aria-hidden="true" width="'+size+'" height="'+size+'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">'+(symbols[name] || symbols.tag)+'</svg>';
}
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[c]);
}

const faces = [
  '<path d="M8 16q4-4 7 0m2 0q3-4 6 0" fill="none"/><path d="M12 20q4 5 8-1" fill="none"/>',
  '<path d="M7 13h18l-2 6h-5l-2-4-2 4H9Z"/><path d="M13 22q3 2 6-1" fill="none"/>',
  '<ellipse cx="11" cy="15" rx="1.5" ry="2"/><ellipse cx="21" cy="15" rx="1.5" ry="2"/><path d="M12 20q4 5 8 0" fill="none"/>',
  '<path d="m9 14 4 2-4 1m10-3 4 2-4 1" fill="none"/><path d="M12 21q4 3 8-1" fill="none"/>'
];
function avatar(id, big = false) {
  const face=(id-1)%faces.length;
  return '<span aria-hidden="true" class="avatar color-'+((id-1)%6)+(big?' big':'')+'"><svg width="32" height="32" viewBox="0 0 32 32" stroke="currentColor" fill="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">'+faces[face]+'</svg></span>';
}
let roster = [1,2,3,4].map(id => ({id, name:'Jugador '+id}));
let nextId = 5;
let topic = 'random';
let impostors = 1;
let match;
let screen = 'lobby';
let ticker, bannerTimer, dialogAction, cancelReveal;
const ROUND_MS = 300000;
const pick = list => list[Math.floor(Math.random()*list.length)];
const maxImpostors = () => Math.max(1, Math.floor((roster.length-1)/2));
const alive = () => match.players.filter(p => p.alive);
function page(phase, html, focus = true) {
  clearInterval(ticker);
  clearTimeout(bannerTimer);
  if (cancelReveal) cancelReveal();
  cancelReveal = null;
  screen = phase;
  game.innerHTML = html;
  if (focus) {
    game.focus({preventScroll:true});
    window.scrollTo(0,0);
  }
}
function sectionTitle(symbol, title, extra = '') {
  return '<div class="section-title"><span class="section-icon">'+icon(symbol,22)+'</span><h2>'+title+'</h2>'+extra+'</div>';
}
function playerRow(player) {
  return '<div class="player-row">'+avatar(player.id)+'<label class="name-wrap"><input class="player-name" maxlength="32" data-player="'+player.id+'" aria-label="Nombre del jugador '+player.id+'" value="'+escapeHTML(player.name)+'" placeholder="Jugador '+player.id+'"><span aria-hidden="true">'+icon('pencil',14)+'</span></label><button class="remove-player" data-remove="'+player.id+'" aria-label="Eliminar al jugador '+player.id+'">'+icon('close',16)+'</button></div>';
}
function themeButtons() {
  return [['random','Aleatorio'],...Object.entries(GAME_DATA).map(([key,t])=>[key,t.nombre])].map(([key,label]) =>
    '<button class="theme" aria-pressed="'+(topic===key)+'" data-topic="'+escapeHTML(key)+'">'+icon(key,18)+'<span>'+escapeHTML(label)+'</span></button>').join('');
}
function renderLobby(focus = true) {
  page('lobby',`
    <section class="hero">
      <div class="hero-inner">
        <span class="mode"><i></i> Modo local</span>
        <h1>¿Quién es el impostor?</h1>
        <p>Todos conocen la palabra secreta. Alguien solo tiene una pista.</p>
        <div class="hero-meta">${icon('users',16)} 4+ jugadores <b>·</b> ${icon('phone',15)} Un dispositivo</div>
      </div>
      <div class="hero-art" aria-hidden="true"><img src="./assets/cartas.webp" alt=""></div>
    </section>
    <div class="setup-grid">
      <section class="panel players-panel">
        ${sectionTitle('users','Jugadores','<span class="count">'+roster.length+'</span>')}
        <p class="section-hint">Toca un nombre para editarlo.</p>
        <div class="player-list">${roster.map(playerRow).join('')}</div>
        <button class="add-player" data-act="add">${icon('plus',18)} Añadir jugador</button>
        <p class="minimum">${icon('info',15)} Se necesitan al menos 4 jugadores.</p>
      </section>
      <section class="panel settings-panel">
        ${sectionTitle('settings','Configuración')}
        <div class="settings-block">
          <h3>Temática</h3>
          <div class="themes" role="group" aria-label="Temática">${themeButtons()}</div>
        </div>
        <div class="impostor-setting"><div><h3>Impostores</h3><p id="imp-hint">Roles ocultos en la partida.</p></div>
          <div class="stepper" role="group" aria-label="Número de impostores"><button data-act="minus" aria-label="Menos impostores" ${impostors<=1?'disabled':''}>${icon('minus',16)}</button><output aria-live="polite">${impostors}</output><button data-act="plus" aria-label="Más impostores" ${impostors>=maxImpostors()?'disabled':''} title="Debe haber mayoría de civiles">${icon('plus',16)}</button></div>
        </div>
        <button class="primary" data-act="start" ${roster.length<4?'disabled':''}>${icon('play',17)} Iniciar partida</button>
      </section>
    </div>`,focus);
}
function startMatch() {
  if (roster.length<4) return;
  roster.forEach(p=>p.name=p.name.trim() || 'Jugador '+p.id);
  const key=topic==='random'?pick(Object.keys(GAME_DATA)):topic;
  const shuffled=roster.map(p=>p.id);
  for (let i=shuffled.length-1;i>0;i--) {
    const j=Math.floor(Math.random()*(i+1));
    [shuffled[i],shuffled[j]]=[shuffled[j],shuffled[i]];
  }
  const spies=new Set(shuffled.slice(0,impostors));
  match={key,entry:pick(GAME_DATA[key].items),players:roster.map(p=>({...p,spy:spies.has(p.id),alive:true})),turn:0,round:1};
  renderReveal();
}
function phaseLabel(symbol, title) {
  return '<span class="phase-label">'+icon(symbol,16)+escapeHTML(title)+'</span>';
}
function topicLabel() {
  return '<span class="topic-label">'+icon(match.key,16)+escapeHTML(GAME_DATA[match.key].nombre)+'</span>';
}
function renderReveal() {
  const player=match.players[match.turn];
  page('reveal',`<section class="phase-panel">
    <div class="phase-bar">${phaseLabel('mask','Reparto de roles')}${topicLabel()}</div>
    <div class="turn-progress"><span style="width:${100*(match.turn+1)/match.players.length}%"></span></div>
    <p class="turn-label">Turno ${match.turn+1} de ${match.players.length}</p>
    <h1>${escapeHTML(player.name)}</h1>
    <p class="phase-copy">Toma el teléfono y mira tu tarjeta en privado.</p>
    <div class="identity-card" id="identity">
      <div id="secret" class="secret" hidden></div>
      <button id="cover" class="cover" aria-label="Desliza hacia arriba o mantén presionada la barra espaciadora para ver tu rol">
        <span class="card-corner">✦</span><span class="cover-emblem">${icon('mask',75)}</span><strong>Tu identidad</strong><span class="swipe">${icon('up',17)} Desliza hacia arriba</span><span class="card-corner last">✦</span>
      </button>
    </div>
    <button class="primary phase-action" data-act="next" disabled>${icon('down',18)} ${match.turn===match.players.length-1?'Comenzar debate':'Siguiente jugador'}</button>
  </section>`);
  bindReveal(player);
}
function bindReveal(player) {
  const card=document.querySelector('#identity');
  const cover=document.querySelector('#cover');
  const secret=document.querySelector('#secret');
  const next=game.querySelector('[data-act="next"]');
  let pointer=null, origin=0, showing=false, keyboard=false;
  function showSecret() {
    if (showing) return;
    showing=true;
    secret.innerHTML=player.spy?
      '<span class="secret-symbol coral">'+icon('mask',36)+'</span><strong class="warning">Eres el impostor</strong><span>Tu pista</span><b>'+escapeHTML(match.entry.pista)+'</b>':
      (match.entry.imagen?'<img class="portrait" src="'+escapeHTML(match.entry.imagen)+'" alt="">':'<span class="secret-symbol mint">'+icon('users',36)+'</span>')+'<span>Eres civil · Palabra secreta</span><b>'+escapeHTML(match.entry.palabra)+'</b>';
    secret.hidden=false;
    next.disabled=false;
    cover.setAttribute('aria-label',secret.textContent);
  }
  function hideSecret() {
    showing=false;
    secret.hidden=true;
    secret.replaceChildren();
    cover.setAttribute('aria-label','Desliza hacia arriba o mantén presionada la barra espaciadora para ver tu rol');
  }
  function reset() {
    const captured=pointer;
    pointer=null;
    keyboard=false;
    card.classList.remove('dragging');
    cover.style.transform='';
    hideSecret();
    if (captured!==null && cover.hasPointerCapture(captured)) cover.releasePointerCapture(captured);
  }
  cover.onpointerdown=e=>{
    if (pointer!==null || keyboard || e.button!==0) return;
    pointer=e.pointerId;
    origin=e.clientY;
    cover.setPointerCapture(pointer);
    card.classList.add('dragging');
  };
  cover.onpointermove=e=>{
    if (e.pointerId!==pointer) return;
    const delta=Math.max(0,origin-e.clientY);
    if (delta>=48) {
      showSecret();
      cover.style.transform='translateY(-101%)';
    } else {
      if (showing) hideSecret();
      cover.style.transform='translateY(-'+delta+'px)';
    }
  };
  cover.onlostpointercapture=cover.onpointercancel=cover.onpointerup=e=>{
    if (pointer===e.pointerId) reset();
  };
  cover.onkeydown=e=>{
    if ([' ','Enter'].includes(e.key) && pointer===null) {
      e.preventDefault();
      keyboard=true;
      showSecret();
      cover.style.transform='translateY(-101%)';
    }
  };
  cover.onkeyup=e=>{if ([' ','Enter'].includes(e.key)) {e.preventDefault();reset();}};
  cover.onblur=reset;
  cancelReveal=reset;
}
function renderDebate(first=false) {
  const firstPlayer=first?pick(alive()):null;
  page('debate',`<section class="phase-panel">
    <div class="phase-bar">${phaseLabel('message','Ronda '+match.round)}${topicLabel()}</div>
    <h1>Ronda de pistas</h1><p class="phase-copy">Por turnos, den una pista sin decir la palabra secreta.</p>
    <div class="timer-box">${icon('clock',32)}<time id="timer" role="timer" aria-label="Tiempo restante">05:00</time><span>Tiempo para debatir</span></div>
    <div class="alive-summary">${icon('users',17)} ${alive().length} jugadores en pie</div>
    <button class="primary phase-action" data-act="vote">${icon('vote')} Votar</button>
    ${firstPlayer?'<div class="starter" role="status">'+icon('message',18)+'<span>Empieza <strong>'+escapeHTML(firstPlayer.name)+'</strong></span></div>':''}
  </section>`);
  match.deadline=Date.now()+ROUND_MS;
  ticker=setInterval(tick,200);
  if(firstPlayer) bannerTimer=setTimeout(()=>game.querySelector('.starter')?.remove(),3000);
}
function tick() {
  if(screen!=='debate') return;
  const seconds=Math.max(0,Math.ceil((match.deadline-Date.now())/1000));
  if (!seconds) {startVote();return;}
  document.querySelector('#timer').textContent=String(Math.floor(seconds/60)).padStart(2,'0')+':'+String(seconds%60).padStart(2,'0');
}
function startVote(candidates=alive().map(p=>p.id)) {
  match.candidates=new Set(candidates);
  match.votes=new Map(alive().map(p=>[p.id,0]));
  const tied=candidates.length<alive().length || match.runoff;
  page('voting',`<section class="phase-panel voting">
    <div class="phase-bar">${phaseLabel('vote','Ronda '+match.round)}${topicLabel()}</div>
    <h1>${tied?'Desempate':'Votación'}</h1><p class="phase-copy">${tied?'Todos vuelven a votar entre quienes empataron.':'Cada jugador en pie tiene un voto. Toca a tu sospechoso.'}</p>
    <div class="vote-list">${alive().map(p=>'<button class="vote-card" data-vote="'+p.id+'" '+(match.candidates.has(p.id)?'':'disabled')+'>'+avatar(p.id)+'<span>'+escapeHTML(p.name)+'</span><b>0</b></button>').join('')}</div>
    <div class="vote-tools"><span id="vote-total" aria-live="polite">0 de ${alive().length} votos</span><button class="text-btn" data-act="reset-votes">${icon('refresh',16)} Reiniciar votos</button></div>
    <button class="primary" data-act="results" disabled>Mostrar resultados</button>
  </section>`);
}
function updateVotes() {
  const total=[...match.votes.values()].reduce((a,b)=>a+b,0);
  const full=total===alive().length;
  game.querySelectorAll('[data-vote]').forEach(btn=>{
    const id=Number(btn.dataset.vote);
    btn.disabled=full || !match.candidates.has(id);
    btn.querySelector('b').textContent=match.votes.get(id);
    btn.classList.toggle('has-votes',match.votes.get(id)>0);
  });
  document.querySelector('#vote-total').textContent=total+' de '+alive().length+' votos';
  game.querySelector('[data-act="results"]').disabled=!full;
}
function result() {
  const counts=[...match.votes.values()];
  if (counts.reduce((a,b)=>a+b,0)!==alive().length || dialog.open) return;
  const leaders=alive().filter(p=>match.votes.get(p.id)===Math.max(...counts));
  if(leaders.length>1) {
    openDialog('Empate', '<p>Empataron '+leaders.map(p=>'<strong>'+escapeHTML(p.name)+'</strong>').join(', ')+'. Todos vuelven a votar entre estos jugadores.</p>','vote','Volver a votar',()=>{
      match.runoff=true;
      startVote(leaders.map(p=>p.id));
    });
    return;
  }
  const player=leaders[0];
  player.alive=false;
  openDialog('Expulsión', '<div class="expulsion">'+avatar(player.id,true)+'<h3>'+escapeHTML(player.name)+'</h3><span class="role-pill '+(player.spy?'bad':'good')+'">'+(player.spy?'Era impostor':'Era civil')+'</span></div>','vote','Continuar',()=>{
    const survivors=alive();
    const spies=survivors.filter(p=>p.spy).length;
    if (spies===0 || spies>=survivors.length-spies) {renderWin(spies>0);return;}
    match.round++;
    match.runoff=false;
    renderDebate();
  });
}
function renderWin(spiesWon) {
  page('win',`<section class="phase-panel victory">
    ${phaseLabel('trophy','Fin de la partida')}<h1>¡Ganan los ${spiesWon?'impostores':'civiles'}!</h1>
    <p class="phase-copy">${spiesWon?'Los impostores lograron igualar en número a los civiles.':'El grupo descubrió a todos los impostores.'}</p>
    <div class="word-recap"><span>La palabra secreta era</span><strong>${escapeHTML(match.entry.palabra)}</strong></div>
    <h2>Los roles</h2><div class="roster-recap">${match.players.map(p=>'<div>'+avatar(p.id)+'<span>'+escapeHTML(p.name)+'</span><b class="role-pill '+(p.spy?'bad':'good')+'">'+(p.spy?'Impostor':'Civil')+'</b></div>').join('')}</div>
    <button class="primary" data-act="replay">${icon('refresh',18)} Volver a jugar</button>
  </section>`);
  celebrate();
}
function openDialog(title, body, symbol, button, onClose) {
  if(dialog.open) return;
  if(cancelReveal) cancelReveal();
  dialogAction=onClose;
  dialog.innerHTML='<div class="dialog-inner"><button class="x-modal" aria-label="Cerrar" data-close>'+icon('close',20)+'</button><span class="section-icon">'+icon(symbol,23)+'</span><h2 id="dialog-title">'+title+'</h2>'+body+'<button data-close class="primary">'+button+'</button></div>';
  dialog.showModal();
}
function closeDialog() {
  if(!dialog.open) return;
  dialog.close();
  const action=dialogAction;
  dialogAction=null;
  if(action) action();
}
dialog.addEventListener('cancel',e=>{e.preventDefault();closeDialog();});
dialog.addEventListener('click',e=>{if(e.target.closest('[data-close]')) closeDialog();});
document.querySelector('#help').insertAdjacentHTML('afterbegin',icon('help',17));
document.querySelector('#help').addEventListener('click',()=>{
  openDialog('Cómo jugar','<ol class="rules"><li><b>Preparen la partida.</b> Reúnan al menos cuatro personas, escriban sus nombres y elijan una temática.</li><li><b>Pasen el teléfono.</b> Desliza tu tarjeta hacia arriba para ver tu palabra o pista. Suéltala antes de pasar el turno. Con teclado, mantén pulsada la barra espaciadora sobre la tarjeta.</li><li><b>Den una pista.</b> Cada persona dice algo relacionado con la palabra. Los impostores intentan pasar desapercibidos.</li><li><b>Voten.</b> Quien reúna más votos revela su rol y sale. En caso de empate, todos vuelven a votar entre quienes empataron.</li></ol><p>Los civiles ganan al expulsar a todos los impostores. Los impostores ganan al igualar en número a los civiles.</p>','help','Entendido');
});
game.addEventListener('input',e=>{
  if(e.target.matches('[data-player]')) roster.find(p=>p.id===Number(e.target.dataset.player)).name=e.target.value;
});
game.addEventListener('focusout',e=>{
  if(e.target.matches('[data-player]')) {
    const p=roster.find(row=>row.id===Number(e.target.dataset.player));
    if(p) e.target.value=p.name=p.name.trim() || 'Jugador '+p.id;
  }
});
game.addEventListener('keydown',e=>{if(e.key==='Enter' && e.target.matches('[data-player]')) e.target.blur();});
game.addEventListener('click',e=>{
  const btn=e.target.closest('button');
  if(!btn || btn.disabled || dialog.open) return;
  if(btn.hasAttribute('data-topic') && screen==='lobby') {
    topic=btn.dataset.topic;
    game.querySelectorAll('[data-topic]').forEach(b=>b.setAttribute('aria-pressed',b.dataset.topic===topic));
    return;
  }
  if(btn.hasAttribute('data-remove') && screen==='lobby') {
    const pos=roster.findIndex(p=>p.id===Number(btn.dataset.remove));
    roster.splice(pos,1);
    impostors=Math.min(impostors,maxImpostors());
    renderLobby(false);
    (game.querySelectorAll('[data-remove]')[Math.min(pos,roster.length-1)] || game.querySelector('[data-act="add"]')).focus({preventScroll:true});
    return;
  }
  if(btn.hasAttribute('data-vote') && screen==='voting') {
    const id=Number(btn.dataset.vote);
    match.votes.set(id,match.votes.get(id)+1);
    updateVotes();
    btn.querySelector('b').animate?.([{transform:'scale(1.25)'},{transform:'scale(1)'}],160);
    return;
  }
  switch(btn.dataset.act) {
    case 'add': {
      const id=nextId++;
      roster.push({id,name:'Jugador '+id});
      renderLobby(false);
      const input=game.querySelector('[data-player="'+id+'"]');
      input.focus();
      input.select();
      break;
    }
    case 'plus': case 'minus':
      impostors=Math.max(1,Math.min(maxImpostors(),impostors+(btn.dataset.act==='plus'?1:-1)));
      renderLobby(false);
      game.querySelector('.stepper button:not(:disabled)')?.focus({preventScroll:true});
      break;
    case 'start':startMatch();break;
    case 'next':
      if(match.turn+1<match.players.length) {match.turn++;renderReveal();} else renderDebate(true);
      break;
    case 'vote':startVote();break;
    case 'reset-votes':
      match.votes.forEach((_,id)=>match.votes.set(id,0));
      updateVotes();
      break;
    case 'results':result();break;
    case 'replay':match=null;renderLobby();break;
  }
});
window.addEventListener('blur',()=>cancelReveal?.());
document.addEventListener('visibilitychange',()=>{
  if(document.hidden) cancelReveal?.();
  else if(screen==='debate') tick();
});
window.addEventListener('pageshow',()=>cancelReveal?.());

function celebrate() {
  if(matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const canvas=document.querySelector('#confetti'), ctx=canvas.getContext('2d');
  if(!ctx) return;
  const w=canvas.width=window.innerWidth, h=canvas.height=window.innerHeight;
  const colors=['#8d6bd4','#ffb793','#8cd2b8','#ffd772','#a5bcec'];
  const bits=Array.from({length:85},()=>({x:Math.random()*w,y:-Math.random()*h*.7,v:80+Math.random()*120,a:Math.random()*7,c:pick(colors)}));
  let then=performance.now(), start=then;
  canvas.hidden=false;
  function frame(now) {
    const dt=Math.min(.05,(now-then)/1000);
    then=now;
    ctx.clearRect(0,0,w,h);
    if(screen!=='win' || now-start>4200) {canvas.hidden=true;return;}
    bits.forEach(p=>{
      p.y+=p.v*dt;
      p.a+=dt*3;
      p.x+=Math.sin(p.a)*dt*40;
      ctx.save();ctx.translate(p.x,p.y);ctx.rotate(p.a);ctx.fillStyle=p.c;ctx.fillRect(-3,-5,6,10);ctx.restore();
    });
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}
renderLobby(false);
