// app.js (ES module) - i18n + responsive behaviors + 게임 초기화 일부 포함
// Save as /src/js/app.js and reference with type="module"

const translations = {
  ko: {
    siteLogo: '🎮 게임 허브',
    navHome: '홈',
    navGames: '게임',
    navTools: '도구',
    navAbout: '소개',
    sidebarTitle: '🎯 게임 목록',
    game1: '🎯 FPS 에임 훈련',
    game2: '🎲 반응속도 테스트',
    game3: '🎪 메모리 게임',
    game4: '🎨 색깔 맞추기',
    gameTitle: '🎯 FPS 에임 훈련',
    scoreLabel: '점수',
    accuracyLabel: '정확도',
    reactionLabel: '평균 반응속도',
    timerLabel: '시간',
    startTitle: '🎯 FPS 에임 훈련 게임',
    startSubtitle: '빨간 타겟이 나타나면 빠르게 클릭하세요!<br>30초 동안 최대한 많은 타겟을 맞춰 반응속도와 정확도를 향상시키세요.',
    startButton: '게임 시작',
    gameOverTitle: '🏆 게임 완료!',
    finalScoreLabel: '최종 점수',
    finalAccuracyLabel: '정확도',
    finalReactionLabel: '평균 반응속도',
    finalHitsLabel: '명중 횟수',
    restartButton: '다시 시작',
    bannerTitle1: '🎯 게임과 도구의 허브',
    bannerSubtitle1: 'FPS 에임 훈련부터 창작 도구까지, 모든 것이 한 곳에',
    bannerTitle2: '🚀 반응속도 향상',
    bannerSubtitle2: '다양한 게임으로 집중력과 반응속도를 키워보세요',
    bannerTitle3: '🎨 창작자 도구',
    bannerSubtitle3: '색상 팔레트, 키워드 생성기 등 창작에 필요한 모든 도구',
    sitemapGames: '게임',
    sitemapTools: '창작 도구',
    sitemapGame1: '🎯 FPS 에임 훈련',
    sitemapGame2: '🎲 반응속도 테스트',
    sitemapGame3: '🎪 메모리 게임',
    sitemapGame4: '🎨 색깔 맞추기',
    sitemapTool1: '🎨 색상 팔레트 생성기',
    sitemapTool2: '💡 오늘의 키워드',
    sitemapTool3: '📏 단위 변환기',
    sitemapTool4: '🔤 텍스트 변환기',
    footerTitle: 'ℹ️ 정보',
    footerAbout: '📖 사이트 소개',
    footerContact: '📧 문의하기',
    footerPrivacy: '🔒 개인정보처리방침',
    footerTerms: '📋 이용약관',
    pageTitle: '게임 허브 - FPS 에임 훈련 및 온라인 게임',
    pageDescription: '무료 FPS 에임 훈련 게임과 다양한 온라인 게임을 즐기세요. 반응속도 향상과 정확도 훈련을 위한 최고의 게임 사이트입니다.',
    pageKeywords: 'FPS 게임, 에임 훈련, 반응속도 게임, 온라인 게임, 무료 게임, 클릭 게임, 창작 도구, 색상 팔레트',
    reactionTitle: '🎲 반응속도 테스트',
    reactionStartText: '클릭해서 시작하세요!',
    memoryTitle: '🎪 메모리 게임',
    memoryNew: '새 게임',
    colorTitle: '🎨 색깔 맞추기',
    colorNew: '새 게임',
    toolPaletteTitle: '🎨 색상 팔레트 생성기',
    genPalette: '새 팔레트 생성',
    copyPaletteBtn: '전체 색상 코드 복사',
    toolKeywordsTitle: '💡 오늘의 키워드',
    genKeywords: '새 키워드 생성',
    copyKeywordsBtn: '키워드 복사',
    toolConverterTitle: '📏 단위 변환기',
    convertBtn: '변환하기',
    copyConversionBtn: '결과 복사',
    toolTextTitle: '🔤 텍스트 변환기',
    upperBtn: '대문자 변환',
    lowerBtn: '소문자 변환',
    titleBtn: '제목 형식',
    reverseBtn: '텍스트 뒤집기',
    removeSpacesBtn: '공백 제거',
    addSpacesBtn: '단어 간격',
    copyTransformedBtn: '결과 복사하기',
    aboutTitle: '📖 게임 허브 소개',
    aboutDescription: '게임 허브는 재미있는 게임과 유용한 창작 도구를 한 곳에서 제공하는 웹사이트입니다.'
  },
  en: {
    siteLogo: '🎮 Game Hub',
    navHome: 'Home',
    navGames: 'Games',
    navTools: 'Tools',
    navAbout: 'About',
    sidebarTitle: '🎯 Game List',
    game1: '🎯 FPS Aim Training',
    game2: '🎲 Reaction Speed Test',
    game3: '🎪 Memory Game',
    game4: '🎨 Color Match',
    gameTitle: '🎯 FPS Aim Training',
    scoreLabel: 'Score',
    accuracyLabel: 'Accuracy',
    reactionLabel: 'Avg Reaction',
    timerLabel: 'Time',
    startTitle: '🎯 FPS Aim Training Game',
    startSubtitle: 'Click the red targets as fast as you can!<br>Hit as many targets as possible in 30 seconds to improve your reaction speed and accuracy.',
    startButton: 'Start Game',
    gameOverTitle: '🏆 Game Complete!',
    finalScoreLabel: 'Final Score',
    finalAccuracyLabel: 'Accuracy',
    finalReactionLabel: 'Avg Reaction',
    finalHitsLabel: 'Total Hits',
    restartButton: 'Play Again',
    bannerTitle1: '🎯 Hub for Games & Tools',
    bannerSubtitle1: 'From FPS aim training to creative tools, everything in one place',
    bannerTitle2: '🚀 Improve Reaction Speed',
    bannerSubtitle2: 'Enhance your focus and reaction time with various games',
    bannerTitle3: '🎨 Creator Tools',
    bannerSubtitle3: 'Color palettes, keyword generators and all tools for creativity',
    sitemapGames: 'Games',
    sitemapTools: 'Creative Tools',
    sitemapGame1: '🎯 FPS Aim Training',
    sitemapGame2: '🎲 Reaction Speed Test',
    sitemapGame3: '🎪 Memory Game',
    sitemapGame4: '🎨 Color Match',
    sitemapTool1: '🎨 Color Palette Generator',
    sitemapTool2: '💡 Daily Keywords',
    sitemapTool3: '📏 Unit Converter',
    sitemapTool4: '🔤 Text Transformer',
    footerTitle: 'ℹ️ Information',
    footerAbout: '📖 About Site',
    footerContact: '📧 Contact',
    footerPrivacy: '🔒 Privacy Policy',
    footerTerms: '📋 Terms of Service',
    pageTitle: 'Game Hub - FPS Aim Training & Online Games',
    pageDescription: 'Play free FPS aim training games and various online games. The best gaming site for improving reaction speed and accuracy training.',
    pageKeywords: 'FPS games, aim training, reaction speed games, online games, free games, click games, creative tools, color palette',
    reactionTitle: '🎲 Reaction Speed Test',
    reactionStartText: 'Click to start!',
    memoryTitle: '🎪 Memory Game',
    memoryNew: 'New Game',
    colorTitle: '🎨 Color Match',
    colorNew: 'New Game',
    toolPaletteTitle: '🎨 Color Palette Generator',
    genPalette: 'Generate Palette',
    copyPaletteBtn: 'Copy All Color Codes',
    toolKeywordsTitle: '💡 Daily Keywords',
    genKeywords: 'Generate Keywords',
    copyKeywordsBtn: 'Copy Keywords',
    toolConverterTitle: '📏 Unit Converter',
    convertBtn: 'Convert',
    copyConversionBtn: 'Copy Result',
    toolTextTitle: '🔤 Text Transformer',
    upperBtn: 'Upper Case',
    lowerBtn: 'Lower Case',
    titleBtn: 'Title Case',
    reverseBtn: 'Reverse Text',
    removeSpacesBtn: 'Remove Spaces',
    addSpacesBtn: 'Add Spaces',
    copyTransformedBtn: 'Copy Result',
    aboutTitle: '📖 About Game Hub',
    aboutDescription: 'Game Hub delivers fun games and useful creator tools in one place.'
  }
};

// -------------------------------
// Utility: set language (uses data-i18n and id lookups)
// -------------------------------
function setLanguage(lang) {
  const dict = translations[lang] || translations.ko;

  // update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (!key) return;
    if (dict[key] !== undefined) {
      if (key.toLowerCase().includes('subtitle') || el.tagName.toLowerCase() === 'p' || el.tagName.toLowerCase().includes('h')) {
        el.innerHTML = dict[key];
      } else {
        el.textContent = dict[key];
      }
    }
  });

  // update meta tags and title
  document.title = dict.pageTitle || document.title;
  const pageDesc = document.getElementById('pageDescription');
  if (pageDesc && dict.pageDescription) pageDesc.content = dict.pageDescription;
  const pageKeywords = document.getElementById('pageKeywords');
  if (pageKeywords && dict.pageKeywords) pageKeywords.content = dict.pageKeywords;
  const ogTitle = document.getElementById('ogTitle');
  const ogDesc = document.getElementById('ogDescription');
  if (ogTitle) ogTitle.content = dict.pageTitle || '';
  if (ogDesc) ogDesc.content = dict.pageDescription || '';

  // set html lang attr
  document.documentElement.lang = (lang === 'en' ? 'en' : 'ko');

  // toggle active class on language buttons
  document.querySelectorAll('.lang-btn').forEach(b => {
    const bLang = b.dataset.lang || (b.textContent.trim().toLowerCase().startsWith('e') ? 'en' : 'ko');
    b.classList.toggle('active', bLang === lang);
  });
}

// -------------------------------
// DOM ready: initialize event handlers, i18n default, responsive nav, etc.
// -------------------------------
document.addEventListener('DOMContentLoaded', () => {
  // default language
  const initialLang = 'ko';
  setLanguage(initialLang);

  // language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang || (btn.textContent.trim().toLowerCase().startsWith('e') ? 'en' : 'ko');
      setLanguage(lang);
    });
  });

  // mobile nav toggle
  const mobileToggle = document.getElementById('mobileNavToggle');
  const mainNav = document.getElementById('mainNav');
  if (mobileToggle && mainNav) {
    mobileToggle.addEventListener('click', (e) => {
      const isOpen = mainNav.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  // sitemap -> page/game selection
  document.querySelectorAll('.sitemap-item[data-game]').forEach(item => {
    item.addEventListener('click', () => {
      const gid = item.dataset.game;
      showPage('games');
      setTimeout(() => selectGame(gid), 120);
    });
  });

  // nav items (use id mapping)
  document.querySelectorAll('.nav-item').forEach(nav => {
    nav.addEventListener('click', (e) => {
      e.preventDefault();
      const id = nav.id.replace(/^nav/,'').toLowerCase();
      showPage(id);
    });
  });

  // game list click handlers
  document.querySelectorAll('.game-item[data-game]').forEach(item => {
    item.addEventListener('click', () => selectGame(item.dataset.game));
  });

  // start button
  const startBtn = document.getElementById('startButton');
  if (startBtn) startBtn.addEventListener('click', startGame);

  // game area miss click - ensure proper reference
  const gameArea = document.getElementById('gameArea');
  if (gameArea) {
    gameArea.addEventListener('click', (ev) => {
      if (!window.gameState || !window.gameState.isPlaying) return;
      if (ev.target === gameArea) {
        window.gameState.misses++;
        window.gameState.totalClicks++;
        showMissEffect(ev.offsetX, ev.offsetY);
        updateStats();
      }
    });
  }

  // generate initial palette & keywords
  generateColorPalette();
  generateKeywords();
});

// -------------------------------
// Page / navigation helpers (kept simple and robust)
// -------------------------------
function showPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const el = document.getElementById(page + 'Page') || document.getElementById(page);
  if (el) el.classList.add('active');

  // nav active
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const nav = document.getElementById('nav' + page.charAt(0).toUpperCase() + page.slice(1));
  if (nav) nav.classList.add('active');

  // run page-specific init
  if (page === 'tools' || page === 'toolsPage') {
    generateColorPalette();
    generateKeywords();
  }
}

// -------------------------------
// Game selection & minimal FPS logic (kept inline for now)
// -------------------------------
function selectGame(gameId) {
  document.querySelectorAll('#gameList .game-item').forEach(i => i.classList.remove('active'));
  document.querySelectorAll('#gamesPage .game-panel').forEach(g => g.style.display = 'none');

  // highlight clicked item
  const clicked = Array.from(document.querySelectorAll('#gameList .game-item')).find(i => i.dataset.game === gameId);
  if (clicked) clicked.classList.add('active');

  if (gameId === 'fps-aim') {
    const panel = document.getElementById('fpsAimGame');
    if (panel) panel.style.display = 'block';
  } else if (gameId === 'reaction-test') {
    document.getElementById('reactionTestGame').style.display = 'block';
    resetReactionTest();
  } else if (gameId === 'memory-game') {
    document.getElementById('memoryGame').style.display = 'block';
    startMemoryGame();
  } else if (gameId === 'color-match') {
    document.getElementById('colorMatchGame').style.display = 'block';
    startColorGame();
  }
  // ensure page visible
  showPage('games');
}

// -------------------------------
// FPS game (streamlined & robust)
// -------------------------------
window.gameState = {
  isPlaying: false,
  score: 0,
  hits: 0,
  misses: 0,
  totalClicks: 0,
  reactionTimes: [],
  timeLeft: 30,
  currentTarget: null,
  targetStartTime: 0,
  gameTimer: null,
  targetTimer: null
};

function updateStats() {
  const gs = window.gameState;
  const scoreEl = document.getElementById('score');
  const accEl = document.getElementById('accuracy');
  const avgEl = document.getElementById('avgReaction');

  if (scoreEl) scoreEl.textContent = gs.score;
  const accuracy = gs.totalClicks > 0 ? Math.round((gs.hits / gs.totalClicks) * 100) : 100;
  if (accEl) accEl.textContent = accuracy + '%';
  const avgReaction = gs.reactionTimes.length ? Math.round(gs.reactionTimes.reduce((a,b)=>a+b,0)/gs.reactionTimes.length) : 0;
  if (avgEl) avgEl.textContent = avgReaction + 'ms';
  const timerEl = document.getElementById('timer');
  if (timerEl) timerEl.textContent = gs.timeLeft;
}

function startGame() {
  const startScreen = document.getElementById('startScreen');
  if (startScreen) startScreen.style.display = 'none';
  const gs = window.gameState;
  gs.isPlaying = true;
  gs.score = 0; gs.hits = 0; gs.misses = 0; gs.totalClicks = 0; gs.reactionTimes = [];
  gs.timeLeft = 30;
  updateStats();
  startGameTimer();
  spawnTarget();
}

function startGameTimer() {
  const gs = window.gameState;
  clearInterval(gs.gameTimer);
  gs.gameTimer = setInterval(() => {
    gs.timeLeft--;
    const timerEl = document.getElementById('timer');
    if (timerEl) timerEl.textContent = gs.timeLeft;
    if (gs.timeLeft <= 0) endGame();
  }, 1000);
}

function spawnTarget() {
  const gs = window.gameState;
  if (!gs.isPlaying) return;
  // remove existing
  if (gs.currentTarget) gs.currentTarget.remove();

  const area = document.getElementById('gameArea');
  if (!area) return;

  const target = document.createElement('button');
  target.className = 'target';
  target.setAttribute('aria-label','target');
  // compute random position within bounds (account for scrollbar)
  const rect = area.getBoundingClientRect();
  const maxX = Math.max(0, rect.width - parseFloat(getComputedStyle(target).width || 60));
  const maxY = Math.max(0, rect.height - parseFloat(getComputedStyle(target).height || 60));
  const x = Math.random() * (rect.width - 80);
  const y = Math.random() * (rect.height - 80);
  target.style.left = x + 'px';
  target.style.top = y + 'px';

  target.addEventListener('click', (ev) => {
    ev.stopPropagation();
    hitTarget(ev, target);
  }, {passive:false});

  area.appendChild(target);
  gs.currentTarget = target;
  gs.targetStartTime = Date.now();

  clearTimeout(gs.targetTimer);
  gs.targetTimer = setTimeout(() => {
    if (gs.currentTarget === target) {
      target.remove();
      gs.currentTarget = null;
      spawnTarget();
    }
  }, Math.random() * 2000 + 800);
}

function hitTarget(ev, target) {
  const gs = window.gameState;
  const reactionTime = Date.now() - gs.targetStartTime;
  gs.reactionTimes.push(reactionTime);
  gs.hits++;
  gs.totalClicks++;
  const points = Math.max(100 - Math.floor(reactionTime / 10), 10);
  gs.score += points;
  showHitEffect(target, '+' + points);
  target.remove();
  gs.currentTarget = null;
  clearTimeout(gs.targetTimer);
  updateStats();
  setTimeout(spawnTarget, Math.random() * 500 + 200);
}

function showHitEffect(targetEl, text) {
  const area = document.getElementById('gameArea');
  if (!area) return;
  const effect = document.createElement('div');
  effect.className = 'hit-effect';
  effect.textContent = text;
  // position near target
  effect.style.left = targetEl.style.left;
  effect.style.top = targetEl.style.top;
  area.appendChild(effect);
  setTimeout(()=> effect.remove(), 800);
}

function showMissEffect(x,y) {
  const area = document.getElementById('gameArea');
  if (!area) return;
  const effect = document.createElement('div');
  effect.className = 'miss-effect';
  effect.textContent = 'MISS';
  effect.style.left = x + 'px';
  effect.style.top = y + 'px';
  area.appendChild(effect);
  setTimeout(()=> effect.remove(), 600);
}

function endGame() {
  const gs = window.gameState;
  gs.isPlaying = false;
  clearInterval(gs.gameTimer);
  clearTimeout(gs.targetTimer);
  if (gs.currentTarget) gs.currentTarget.remove();
  document.getElementById('finalScore').textContent = gs.score;
  document.getElementById('finalAccuracy').textContent = Math.round((gs.hits/Math.max(gs.totalClicks,1))*100) + '%';
  document.getElementById('finalReaction').textContent = gs.reactionTimes.length ? Math.round(gs.reactionTimes.reduce((a,b)=>a+b,0)/gs.reactionTimes.length) + 'ms' : '0ms';
  document.getElementById('finalHits').textContent = gs.hits;
  document.getElementById('gameOver').style.display = 'flex';
}

function restartGame(){
  document.getElementById('gameOver').style.display = 'none';
  document.getElementById('startScreen').style.display = 'flex';
}

// -------------------------------
// Reaction test (compact)
// -------------------------------
let reactionState = { isWaiting:false, startTime:0, reactions:[], bestTime: Infinity };
function resetReactionTest(){
  const area = document.getElementById('reactionArea');
  const text = document.getElementById('reactionText');
  if(!area || !text) return;
  area.className = 'reaction-area';
  text.textContent = translations.ko.reactionStartText;
  reactionState = { isWaiting:false, startTime:0, reactions:[], bestTime: Infinity };
}
function handleReactionClick(){
  const area = document.getElementById('reactionArea');
  const text = document.getElementById('reactionText');
  if(!area || !text) return;
  if(!reactionState.isWaiting){
    area.className = 'reaction-area waiting';
    text.textContent = '초록색이 되면 클릭하세요!';
    reactionState.isWaiting = true;
    setTimeout(()=>{
      if(reactionState.isWaiting){
        area.className = 'reaction-area ready';
        text.textContent = '지금 클릭!';
        reactionState.startTime = Date.now();
      }
    }, Math.random()*3000+1000);
  } else if(area.classList.contains('ready')){
    const rt = Date.now()-reactionState.startTime;
    reactionState.reactions.push(rt);
    if(rt < reactionState.bestTime) reactionState.bestTime = rt;
    text.textContent = `${rt}ms! 클릭해서 다시 시도`;
    area.className = 'reaction-area';
    reactionState.isWaiting = false;
    // update stats display
    const best = document.getElementById('bestReaction');
    if(best) best.textContent = reactionState.bestTime + 'ms';
    const avg = Math.round(reactionState.reactions.reduce((a,b)=>a+b,0)/reactionState.reactions.length);
    document.getElementById('avgReactionTime').textContent = avg + 'ms';
  } else {
    text.textContent = '너무 빨라요! 클릭해서 다시 시도';
    area.className = 'reaction-area';
    reactionState.isWaiting = false;
  }
}
document.addEventListener('click', (e)=>{
  if(e.target && e.target.id === 'reactionArea') handleReactionClick();
});

// -------------------------------
// Memory game (streamlined)
// -------------------------------
let memoryState = { cards:[], flipped:[], matches:0, moves:0, score:0 };
function startMemoryGame(){
  const symbols = ['🎮','🎯','🎲','🎪','🎨','🎵','⭐','🔥'];
  const cards = [...symbols, ...symbols].sort(()=>Math.random()-0.5);
  memoryState.cards = cards; memoryState.flipped=[]; memoryState.matches=0; memoryState.moves=0; memoryState.score=0;
  const grid = document.getElementById('memoryGrid'); grid.innerHTML='';
  cards.forEach((s,i)=>{
    const card = document.createElement('button');
    card.className='memory-card'; card.dataset.index = i; card.dataset.symbol = s; card.addEventListener('click', flipCard);
    grid.appendChild(card);
  });
  updateMemoryStats();
}
function flipCard(ev){
  const card = ev.currentTarget;
  if(card.classList.contains('flipped') || card.classList.contains('matched') || memoryState.flipped.length >= 2) return;
  card.classList.add('flipped'); card.textContent = card.dataset.symbol;
  memoryState.flipped.push(parseInt(card.dataset.index));
  if(memoryState.flipped.length === 2){
    memoryState.moves++;
    const [f,s] = memoryState.flipped;
    const first = document.querySelector(`[data-index="${f}"]`);
    const second = document.querySelector(`[data-index="${s}"]`);
    if(memoryState.cards[f] === memoryState.cards[s]){
      setTimeout(()=>{
        first.classList.add('matched'); second.classList.add('matched');
        memoryState.matches++; memoryState.score += 100; memoryState.flipped = [];
        updateMemoryStats();
        if(memoryState.matches === 8) setTimeout(()=> alert('축하합니다! 게임 완료!'), 500);
      }, 400);
    } else {
      setTimeout(()=>{
        first.classList.remove('flipped'); second.classList.remove('flipped');
        first.textContent = ''; second.textContent = '';
        memoryState.flipped = [];
        updateMemoryStats();
      }, 800);
    }
  }
  updateMemoryStats();
}
function updateMemoryStats(){
  const score = document.getElementById('memoryScore');
  const matches = document.getElementById('matches');
  const moves = document.getElementById('moves');
  if(score) score.textContent = memoryState.score;
  if(matches) matches.textContent = `${memoryState.matches}/8`;
  if(moves) moves.textContent = memoryState.moves;
}
document.getElementById('memoryNew')?.addEventListener('click', startMemoryGame);

// -------------------------------
// Color match game (compact)
// -------------------------------
let colorGameState = { score:0, level:1, correct:0, total:0, targetColor:'', options:[] };
function startColorGame(){ colorGameState = { score:0, level:1, correct:0, total:0, targetColor:'', options:[] }; generateColorChallenge(); updateColorStats(); }
function generateColorChallenge(){
  const targetHue = Math.floor(Math.random()*360);
  const targetSat = 50 + Math.floor(Math.random()*50);
  const targetLight = 40 + Math.floor(Math.random()*40);
  colorGameState.targetColor = `hsl(${targetHue}, ${targetSat}%, ${targetLight}%)`;
  const colors = [colorGameState.targetColor];
  for(let i=0;i<5;i++){
    const hue = (targetHue + (Math.random()-0.5)*60 + 360)%360;
    const sat = Math.max(20,Math.min(100,targetSat + (Math.random()-0.5)*40));
    const light = Math.max(20,Math.min(80,targetLight + (Math.random()-0.5)*30));
    colors.push(`hsl(${hue}, ${sat}%, ${light}%)`);
  }
  colors.sort(()=>Math.random()-0.5);
  colorGameState.options = colors;
  const target = document.getElementById('targetColor'); if(target) target.style.backgroundColor = colorGameState.targetColor;
  const container = document.getElementById('colorOptions'); container.innerHTML = '';
  colors.forEach(c=>{
    const opt = document.createElement('button'); opt.className='color-option'; opt.style.backgroundColor = c; opt.addEventListener('click',()=>selectColor(c));
    container.appendChild(opt);
  });
}
function selectColor(selectedColor){
  colorGameState.total++;
  if(selectedColor === colorGameState.targetColor){
    colorGameState.correct++; colorGameState.score += colorGameState.level*10;
    if(colorGameState.correct % 5 === 0) colorGameState.level++;
  }
  updateColorStats();
  setTimeout(generateColorChallenge, 500);
}
function updateColorStats(){
  const score = document.getElementById('colorScore');
  const lvl = document.getElementById('colorLevel');
  const acc = document.getElementById('colorAccuracy');
  if(score) score.textContent = colorGameState.score;
  if(lvl) lvl.textContent = colorGameState.level;
  const accuracy = colorGameState.total > 0 ? Math.round((colorGameState.correct / colorGameState.total) * 100) : 100;
  if(acc) acc.textContent = accuracy + '%';
}
document.getElementById('colorNew')?.addEventListener('click', startColorGame);

// -------------------------------
// Tools: color palette & keywords (kept simple)
// -------------------------------
function hslToHex(h,s,l){
  l/=100; const a = s * Math.min(l,1-l) / 100;
  const f = n => {
    const k = (n + h/30) % 12;
    const color = l - a * Math.max(Math.min(k-3,9-k,1), -1);
    return Math.round(255*color).toString(16).padStart(2,'0');
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}
function generateColorPalette(){
  const palette = document.getElementById('colorPalette'); if(!palette) return;
  palette.innerHTML = '';
  const baseHue = Math.floor(Math.random()*360);
  for(let i=0;i<5;i++){
    const hue = (baseHue + i*30) % 360;
    const saturation = 60 + Math.floor(Math.random()*40);
    const lightness = 40 + Math.floor(Math.random()*40);
    const hsl = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    const hex = hslToHex(hue,saturation,lightness);
    const box = document.createElement('div'); box.className = 'color-box'; box.style.backgroundColor = hsl; box.title = hex;
    box.addEventListener('click', ()=> {
      navigator.clipboard?.writeText(hex).then(()=> showCopyNotification(hex + ' 복사됨')).catch(()=> alert('복사 실패'));
    });
    palette.appendChild(box);
  }
}
function showCopyNotification(msg='복사되었습니다!'){
  const n = document.getElementById('copyNotification');
  if(!n) return;
  n.textContent = msg; n.style.display = 'block'; n.setAttribute('aria-hidden','false');
  setTimeout(()=> { n.style.display='none'; n.setAttribute('aria-hidden','true'); }, 1600);
}
function copyPalette(){
  const colors = Array.from(document.querySelectorAll('#colorPalette .color-box')).map(b=>b.title);
  navigator.clipboard?.writeText(colors.join(', ')).then(()=> showCopyNotification('전체 색상 코드가 복사되었습니다!')).catch(()=> alert('복사 실패'));
}
document.getElementById('genPalette')?.addEventListener('click', generateColorPalette);
document.getElementById('copyPaletteBtn')?.addEventListener('click', copyPalette);

// keywords
function generateKeywords(){
  const nouns = ['sea','mountain','star','dream','travel','book','music','sun','wind','cloud','flower','tree','bird','moon','river','forest','road','home','friend','love'];
  const adjectives = ['beautiful','mysterious','warm','cold','bright','dark','big','small','fast','slow','new','old','deep','high','wide','narrow','strong','weak','soft','rough'];
  const grid = document.getElementById('keywordGrid'); if(!grid) return;
  grid.innerHTML = '';
  const selected = [...nouns.sort(()=>Math.random()-0.5).slice(0,3), ...adjectives.sort(()=>Math.random()-0.5).slice(0,3)];
  selected.forEach(k=>{
    const tag = document.createElement('div'); tag.className = 'keyword-tag'; tag.textContent = k; tag.addEventListener('click', ()=> navigator.clipboard?.writeText(k));
    grid.appendChild(tag);
  });
}
document.getElementById('genKeywords')?.addEventListener('click', generateKeywords);
document.getElementById('copyKeywordsBtn')?.addEventListener('click', ()=> {
  const keywords = Array.from(document.querySelectorAll('#keywordGrid .keyword-tag')).map(t=>t.textContent);
  navigator.clipboard?.writeText(keywords.join(', ')).then(()=> showCopyNotification('키워드가 복사되었습니다!'));
});

// unit converter and text transformer omitted for brevity but can be modularized similarly.
// (You can re-use the earlier convertUnits/transformText functions and wire buttons/inputs to IDs.)

// Basic init exposures for console debugging
window.app = { setLanguage, generateColorPalette, generateKeywords, startGame, selectGame };
