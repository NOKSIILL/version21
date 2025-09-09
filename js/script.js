// 페이지 전환 함수 (완전 분리)
function showPage(page) {
    // 모든 페이지 숨기기
    document.querySelectorAll('.page').forEach(p => {
        p.classList.remove('active');
    });
    
    // 네비게이션 활성화 상태 변경
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    
    // 선택된 페이지만 보이기
    document.getElementById(page + 'Page').classList.add('active');
    document.getElementById('nav' + page.charAt(0).toUpperCase() + page.slice(1)).classList.add('active');
    
    // 페이지별 초기화
    if (page === 'tools') {
        generateColorPalette();
        generateKeywords();
    }
}

// 배너 슬라이드
let currentSlide = 0;
const slides = document.querySelectorAll('.banner-slide');

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

setInterval(nextSlide, 4000);

// 게임 선택
function selectGame(gameId) {
    // 사이드바 활성화 상태 변경
    document.querySelectorAll('#gamesPage .game-item').forEach(item => item.classList.remove('active'));
    
    // 클릭된 게임 항목 찾기
    const gameItems = document.querySelectorAll('#gamesPage .game-item');
    gameItems.forEach(item => {
        if (item.onclick && item.onclick.toString().includes(gameId)) {
            item.classList.add('active');
        }
    });
    
    // 모든 게임 숨기기
    document.querySelectorAll('#fpsAimGame, #reactionTestGame, #memoryGame, #colorMatchGame').forEach(game => {
        game.style.display = 'none';
    });
    
    // 선택된 게임 보이기
    if (gameId === 'fps-aim') {
        document.getElementById('fpsAimGame').style.display = 'block';
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
}

// 도구 선택
function selectTool(toolId) {
    // 사이드바 활성화 상태 변경
    document.querySelectorAll('#toolsPage .game-item').forEach(item => item.classList.remove('active'));
    
    // 클릭된 도구 항목 찾기
    const toolItems = document.querySelectorAll('#toolsPage .game-item');
    toolItems.forEach(item => {
        if (item.onclick && item.onclick.toString().includes(toolId)) {
            item.classList.add('active');
        }
    });
    
    // 모든 도구 숨기기
    document.querySelectorAll('#colorPaletteTool, #keywordsTool, #unitConverterTool, #textTransformerTool').forEach(tool => {
        tool.style.display = 'none';
    });
    
    // 선택된 도구 보이기
    if (toolId === 'color-palette') {
        document.getElementById('colorPaletteTool').style.display = 'block';
        generateColorPalette();
    } else if (toolId === 'keywords') {
        document.getElementById('keywordsTool').style.display = 'block';
        generateKeywords();
    } else if (toolId === 'unit-converter') {
        document.getElementById('unitConverterTool').style.display = 'block';
    } else if (toolId === 'text-transformer') {
        document.getElementById('textTransformerTool').style.display = 'block';
    }
}

// 언어 설정
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
        footerInfo: '정보',
        footerAbout: '📖 사이트 소개',
        footerContact: '📧 문의하기',
        footerPrivacy: '🔒 개인정보처리방침',
        footerTerms: '📋 이용약관',
        pageTitle: '게임 허브 - FPS 에임 훈련 및 온라인 게임',
        pageDescription: '무료 FPS 에임 훈련 게임과 다양한 온라인 게임을 즐기세요. 반응속도 향상과 정확도 훈련을 위한 최고의 게임 사이트입니다.',
        pageKeywords: 'FPS 게임, 에임 훈련, 반응속도 게임, 온라인 게임, 무료 게임, 클릭 게임, 창작 도구, 색상 팔레트'
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
        footerInfo: 'Information',
        footerAbout: '📖 About Site',
        footerContact: '📧 Contact',
        footerPrivacy: '🔒 Privacy Policy',
        footerTerms: '📋 Terms of Service',
        pageTitle: 'Game Hub - FPS Aim Training & Online Games',
        pageDescription: 'Play free FPS aim training games and various online games. The best gaming site for improving reaction speed and accuracy training.',
        pageKeywords: 'FPS games, aim training, reaction speed games, online games, free games, click games, creative tools, color palette'
    }
};

let currentLanguage = 'ko';

function setLanguage(lang) {
    currentLanguage = lang;
    
    // 언어 버튼 활성화 상태 변경
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // HTML lang 속성 변경
    document.documentElement.lang = lang;
    
    // 모든 텍스트 업데이트
    const texts = translations[lang];
    Object.keys(texts).forEach(key => {
        const element = document.getElementById(key);
        if (element) {
            if (key.includes('Subtitle')) {
                element.innerHTML = texts[key];
            } else {
                element.textContent = texts[key];
            }
        }
    });
    
    // SEO 메타 태그 업데이트
    document.title = texts.pageTitle;
    document.getElementById('pageDescription').content = texts.pageDescription;
    document.getElementById('pageKeywords').content = texts.pageKeywords;
    document.getElementById('ogTitle').content = texts.pageTitle;
    document.getElementById('ogDescription').content = texts.pageDescription;
}

// FPS 에임 훈련 게임 로직
let gameState = {
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

function startGame() {
    document.getElementById('startScreen').style.display = 'none';
    gameState.isPlaying = true;
    gameState.score = 0;
    gameState.hits = 0;
    gameState.misses = 0;
    gameState.totalClicks = 0;
    gameState.reactionTimes = [];
    gameState.timeLeft = 30;
    
    updateStats();
    startGameTimer();
    spawnTarget();
}

function startGameTimer() {
    gameState.gameTimer = setInterval(() => {
        gameState.timeLeft--;
        document.getElementById('timer').textContent = gameState.timeLeft;
        
        if (gameState.timeLeft <= 0) {
            endGame();
        }
    }, 1000);
}

function spawnTarget() {
    if (!gameState.isPlaying) return;
    
    if (gameState.currentTarget) {
        gameState.currentTarget.remove();
    }
    
    const gameArea = document.getElementById('gameArea');
    const target = document.createElement('div');
    target.className = 'target';
    
    const maxX = gameArea.clientWidth - 60;
    const maxY = gameArea.clientHeight - 60;
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;
    
    target.style.left = x + 'px';
    target.style.top = y + 'px';
    
    target.addEventListener('click', hitTarget);
    gameArea.appendChild(target);
    
    gameState.currentTarget = target;
    gameState.targetStartTime = Date.now();
    
    gameState.targetTimer = setTimeout(() => {
        if (gameState.currentTarget === target) {
            target.remove();
            gameState.currentTarget = null;
            spawnTarget();
        }
    }, Math.random() * 2000 + 1000);
}

function hitTarget(event) {
    event.stopPropagation();
    
    const reactionTime = Date.now() - gameState.targetStartTime;
    gameState.reactionTimes.push(reactionTime);
    gameState.hits++;
    gameState.totalClicks++;
    gameState.score += Math.max(100 - Math.floor(reactionTime / 10), 10);
    
    showHitEffect(event.target, '+' + Math.max(100 - Math.floor(reactionTime / 10), 10));
    
    event.target.remove();
    gameState.currentTarget = null;
    clearTimeout(gameState.targetTimer);
    
    updateStats();
    
    setTimeout(spawnTarget, Math.random() * 500 + 200);
}

function showHitEffect(target, text) {
    const effect = document.createElement('div');
    effect.className = 'hit-effect';
    effect.textContent = text;
    effect.style.left = target.style.left;
    effect.style.top = target.style.top;
    
    document.getElementById('gameArea').appendChild(effect);
    
    setTimeout(() => {
        effect.remove();
    }, 800);
}

function showMissEffect(x, y) {
    const effect = document.createElement('div');
    effect.className = 'miss-effect';
    effect.textContent = 'MISS';
    effect.style.left = x + 'px';
    effect.style.top = y + 'px';
    
    document.getElementById('gameArea').appendChild(effect);
    
    setTimeout(() => {
        effect.remove();
    }, 600);
}

function updateStats() {
    document.getElementById('score').textContent = gameState.score;
    
    const accuracy = gameState.totalClicks > 0 ? 
        Math.round((gameState.hits / gameState.totalClicks) * 100) : 100;
    document.getElementById('accuracy').textContent = accuracy + '%';
    
    const avgReaction = gameState.reactionTimes.length > 0 ?
        Math.round(gameState.reactionTimes.reduce((a, b) => a + b, 0) / gameState.reactionTimes.length) : 0;
    document.getElementById('avgReaction').textContent = avgReaction + 'ms';
}

function endGame() {
    gameState.isPlaying = false;
    clearInterval(gameState.gameTimer);
    clearTimeout(gameState.targetTimer);
    
    if (gameState.currentTarget) {
        gameState.currentTarget.remove();
    }
    
    document.getElementById('finalScore').textContent = gameState.score;
    document.getElementById('finalAccuracy').textContent = 
        Math.round((gameState.hits / Math.max(gameState.totalClicks, 1)) * 100) + '%';
    document.getElementById('finalReaction').textContent = 
        gameState.reactionTimes.length > 0 ?
        Math.round(gameState.reactionTimes.reduce((a, b) => a + b, 0) / gameState.reactionTimes.length) + 'ms' : '0ms';
    document.getElementById('finalHits').textContent = gameState.hits;
    
    document.getElementById('gameOver').style.display = 'flex';
}

function restartGame() {
    document.getElementById('gameOver').style.display = 'none';
    document.getElementById('startScreen').style.display = 'flex';
}

// 게임 영역 클릭 시 미스 처리
document.getElementById('gameArea').addEventListener('click', function(event) {
    if (!gameState.isPlaying) return;
    
    if (event.target === this) {
        gameState.misses++;
        gameState.totalClicks++;
        showMissEffect(event.offsetX, event.offsetY);
        updateStats();
    }
});

// 반응속도 테스트 게임
let reactionState = {
    isWaiting: false,
    startTime: 0,
    reactions: [],
    bestTime: Infinity
};

function resetReactionTest() {
    const area = document.getElementById('reactionArea');
    const text = document.getElementById('reactionText');
    area.className = 'reaction-area';
    text.textContent = '클릭해서 시작하세요!';
    reactionState.isWaiting = false;
}

function handleReactionClick() {
    const area = document.getElementById('reactionArea');
    const text = document.getElementById('reactionText');
    
    if (!reactionState.isWaiting) {
        // 게임 시작
        area.className = 'reaction-area waiting';
        text.textContent = '초록색이 되면 클릭하세요!';
        reactionState.isWaiting = true;
        
        setTimeout(() => {
            if (reactionState.isWaiting) {
                area.className = 'reaction-area ready';
                text.textContent = '지금 클릭!';
                reactionState.startTime = Date.now();
            }
        }, Math.random() * 3000 + 1000);
    } else if (area.classList.contains('ready')) {
        // 반응 측정
        const reactionTime = Date.now() - reactionState.startTime;
        reactionState.reactions.push(reactionTime);
        
        if (reactionTime < reactionState.bestTime) {
            reactionState.bestTime = reactionTime;
        }
        
        text.textContent = `${reactionTime}ms! 클릭해서 다시 시도`;
        area.className = 'reaction-area';
        reactionState.isWaiting = false;
        
        // 통계 업데이트
        document.getElementById('bestReaction').textContent = reactionState.bestTime + 'ms';
        const avg = Math.round(reactionState.reactions.reduce((a, b) => a + b, 0) / reactionState.reactions.length);
        document.getElementById('avgReactionTime').textContent = avg + 'ms';
        document.getElementById('attempts').textContent = reactionState.reactions.length;
    } else {
        // 너무 빨리 클릭
        text.textContent = '너무 빨라요! 클릭해서 다시 시도';
        area.className = 'reaction-area';
        reactionState.isWaiting = false;
    }
}

// 메모리 게임
let memoryState = {
    cards: [],
    flippedCards: [],
    matches: 0,
    moves: 0,
    score: 0
};

function startMemoryGame() {
    const symbols = ['🎮', '🎯', '🎲', '🎪', '🎨', '🎵', '⭐', '🔥'];
    const cards = [...symbols, ...symbols].sort(() => Math.random() - 0.5);
    
    memoryState.cards = cards;
    memoryState.flippedCards = [];
    memoryState.matches = 0;
    memoryState.moves = 0;
    memoryState.score = 0;
    
    const grid = document.getElementById('memoryGrid');
    grid.innerHTML = '';
    
    cards.forEach((symbol, index) => {
        const card = document.createElement('div');
        card.className = 'memory-card';
        card.dataset.index = index;
        card.dataset.symbol = symbol;
        card.addEventListener('click', flipCard);
        grid.appendChild(card);
    });
    
    updateMemoryStats();
}

function flipCard(event) {
    const card = event.target;
    const index = parseInt(card.dataset.index);
    
    if (card.classList.contains('flipped') || card.classList.contains('matched') || memoryState.flippedCards.length >= 2) {
        return;
    }
    
    card.classList.add('flipped');
    card.textContent = card.dataset.symbol;
    memoryState.flippedCards.push(index);
    
    if (memoryState.flippedCards.length === 2) {
        memoryState.moves++;
        
        const [first, second] = memoryState.flippedCards;
        const firstCard = document.querySelector(`[data-index="${first}"]`);
        const secondCard = document.querySelector(`[data-index="${second}"]`);
        
        if (memoryState.cards[first] === memoryState.cards[second]) {
            // 매치!
            setTimeout(() => {
                firstCard.classList.add('matched');
                secondCard.classList.add('matched');
                memoryState.matches++;
                memoryState.score += 100;
                memoryState.flippedCards = [];
                updateMemoryStats();
                
                if (memoryState.matches === 8) {
                    setTimeout(() => alert('축하합니다! 게임 완료!'), 500);
                }
            }, 500);
        } else {
            // 불일치
            setTimeout(() => {
                firstCard.classList.remove('flipped');
                secondCard.classList.remove('flipped');
                firstCard.textContent = '';
                secondCard.textContent = '';
                memoryState.flippedCards = [];
            }, 1000);
        }
        
        updateMemoryStats();
    }
}

function updateMemoryStats() {
    document.getElementById('memoryScore').textContent = memoryState.score;
    document.getElementById('matches').textContent = `${memoryState.matches}/8`;
    document.getElementById('moves').textContent = memoryState.moves;
}

// 색깔 맞추기 게임
let colorGameState = {
    score: 0,
    level: 1,
    correct: 0,
    total: 0,
    targetColor: '',
    options: []
};

function startColorGame() {
    colorGameState.score = 0;
    colorGameState.level = 1;
    colorGameState.correct = 0;
    colorGameState.total = 0;
    
    generateColorChallenge();
    updateColorStats();
}

function generateColorChallenge() {
    const colors = [];
    
    // 타겟 색상 생성
    const targetHue = Math.floor(Math.random() * 360);
    const targetSat = 50 + Math.floor(Math.random() * 50);
    const targetLight = 40 + Math.floor(Math.random() * 40);
    colorGameState.targetColor = `hsl(${targetHue}, ${targetSat}%, ${targetLight}%)`;
    
    // 옵션 색상들 생성 (하나는 정답)
    colors.push(colorGameState.targetColor);
    
    for (let i = 0; i < 5; i++) {
        const hue = (targetHue + (Math.random() - 0.5) * 60 + 360) % 360;
        const sat = Math.max(20, Math.min(100, targetSat + (Math.random() - 0.5) * 40));
        const light = Math.max(20, Math.min(80, targetLight + (Math.random() - 0.5) * 30));
        colors.push(`hsl(${hue}, ${sat}%, ${light}%)`);
    }
    
    // 섞기
    colors.sort(() => Math.random() - 0.5);
    colorGameState.options = colors;
    
    // UI 업데이트
    document.getElementById('targetColor').style.backgroundColor = colorGameState.targetColor;
    
    const optionsContainer = document.getElementById('colorOptions');
    optionsContainer.innerHTML = '';
    
    colors.forEach((color, index) => {
        const option = document.createElement('div');
        option.className = 'color-option';
        option.style.backgroundColor = color;
        option.addEventListener('click', () => selectColor(color));
        optionsContainer.appendChild(option);
    });
}

function selectColor(selectedColor) {
    colorGameState.total++;
    
    if (selectedColor === colorGameState.targetColor) {
        colorGameState.correct++;
        colorGameState.score += colorGameState.level * 10;
        
        if (colorGameState.correct % 5 === 0) {
            colorGameState.level++;
        }
    }
    
    updateColorStats();
    setTimeout(generateColorChallenge, 500);
}

function updateColorStats() {
    document.getElementById('colorScore').textContent = colorGameState.score;
    document.getElementById('colorLevel').textContent = colorGameState.level;
    
    const accuracy = colorGameState.total > 0 ? 
        Math.round((colorGameState.correct / colorGameState.total) * 100) : 100;
    document.getElementById('colorAccuracy').textContent = accuracy + '%';
}

// 도구 함수들
function generateColorPalette() {
    const palette = document.getElementById('colorPalette');
    palette.innerHTML = '';
    
    const baseHue = Math.floor(Math.random() * 360);
    
    for (let i = 0; i < 5; i++) {
        const hue = (baseHue + i * 30) % 360;
        const saturation = 60 + Math.floor(Math.random() * 40);
        const lightness = 40 + Math.floor(Math.random() * 40);
        const hslColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
        
        // HSL을 HEX로 변환
        const hexColor = hslToHex(hue, saturation, lightness);
        
        const colorContainer = document.createElement('div');
        colorContainer.style.cssText = 'display: flex; flex-direction: column; align-items: center; gap: 8px;';
        
        const colorBox = document.createElement('div');
        colorBox.className = 'color-box';
        colorBox.style.backgroundColor = hslColor;
        colorBox.style.width = '80px';
        colorBox.style.height = '80px';
        colorBox.style.borderRadius = '10px';
        colorBox.style.cursor = 'pointer';
        colorBox.style.border = '2px solid rgba(255,255,255,0.2)';
        colorBox.style.transition = 'all 0.3s ease';
        colorBox.title = hexColor;
        
        const colorCode = document.createElement('div');
        colorCode.style.cssText = 'font-size: 12px; color: #aaa; text-align: center; font-family: monospace;';
        colorCode.textContent = hexColor;
        
        colorBox.addEventListener('click', () => {
            navigator.clipboard.writeText(hexColor).then(() => {
                showCopyNotification(`${hexColor} 복사됨`);
            }).catch(() => {
                alert('복사에 실패했습니다.');
            });
        });
        
        colorBox.addEventListener('mouseenter', () => {
            colorBox.style.transform = 'scale(1.1)';
            colorBox.style.borderColor = '#00ff88';
        });
        
        colorBox.addEventListener('mouseleave', () => {
            colorBox.style.transform = 'scale(1)';
            colorBox.style.borderColor = 'rgba(255,255,255,0.2)';
        });
        
        colorContainer.appendChild(colorBox);
        colorContainer.appendChild(colorCode);
        palette.appendChild(colorContainer);
    }
}

function hslToHex(h, s, l) {
    l /= 100;
    const a = s * Math.min(l, 1 - l) / 100;
    const f = n => {
        const k = (n + h / 30) % 12;
        const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * color).toString(16).padStart(2, '0');
    };
    return `#${f(0)}${f(8)}${f(4)}`;
}

function showCopyNotification(message = '복사되었습니다!') {
    const notification = document.getElementById('copyNotification');
    notification.textContent = message;
    notification.style.display = 'block';
    setTimeout(() => {
        notification.style.display = 'none';
    }, 2000);
}

function copyPalette() {
    const colors = Array.from(document.querySelectorAll('#colorPalette .color-box')).map(box => box.title);
    navigator.clipboard.writeText(colors.join(', ')).then(() => {
        showCopyNotification('전체 색상 코드가 복사되었습니다!');
    }).catch(() => {
        alert('복사에 실패했습니다. 다시 시도해주세요.');
    });
}

function generateKeywords() {
    const nouns = ['바다', '산', '별', '꿈', '여행', '책', '음악', '햇살', '바람', '구름', '꽃', '나무', '새', '달', '강', '숲', '길', '집', '친구', '사랑'];
    const adjectives = ['아름다운', '신비로운', '따뜻한', '차가운', '밝은', '어두운', '큰', '작은', '빠른', '느린', '새로운', '오래된', '깊은', '높은', '넓은', '좁은', '강한', '약한', '부드러운', '거친'];
    
    const grid = document.getElementById('keywordGrid');
    grid.innerHTML = '';
    
    // 명사 3개, 형용사 3개 생성
    const selectedNouns = nouns.sort(() => Math.random() - 0.5).slice(0, 3);
    const selectedAdjectives = adjectives.sort(() => Math.random() - 0.5).slice(0, 3);
    
    [...selectedNouns, ...selectedAdjectives].forEach(keyword => {
        const tag = document.createElement('div');
        tag.className = 'keyword-tag';
        tag.textContent = keyword;
        tag.style.cssText = 'background: rgba(0,255,136,0.2); padding: 12px 16px; border-radius: 20px; text-align: center; border: 1px solid rgba(0,255,136,0.3); cursor: pointer; transition: all 0.3s ease;';
        
        tag.addEventListener('mouseenter', () => {
            tag.style.background = 'rgba(0,255,136,0.3)';
            tag.style.transform = 'translateY(-2px)';
        });
        
        tag.addEventListener('mouseleave', () => {
            tag.style.background = 'rgba(0,255,136,0.2)';
            tag.style.transform = 'translateY(0)';
        });
        
        grid.appendChild(tag);
    });
}

function copyKeywords() {
    const keywords = Array.from(document.querySelectorAll('.keyword-tag')).map(tag => tag.textContent);
    navigator.clipboard.writeText(keywords.join(', ')).then(() => {
        showCopyNotification('키워드가 복사되었습니다!');
    }).catch(() => {
        alert('복사에 실패했습니다. 다시 시도해주세요.');
    });
}

function convertUnits() {
    const value = parseFloat(document.getElementById('inputValue').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;
    
    if (isNaN(value)) {
        document.getElementById('conversionResult').textContent = '올바른 숫자를 입력하세요';
        return;
    }
    
    // 모든 단위를 픽셀로 변환하는 비율 (96 DPI 기준)
    const toPx = {
        'px': 1,
        'pt': 4/3,  // 1pt = 1/72 inch = 96/72 px = 4/3 px
        'pc': 16,   // 1pc = 12pt = 16px
        'em': 16,   // 기본 16px 기준
        'rem': 16,  // 기본 16px 기준
        'vw': window.innerWidth / 100,
        'vh': window.innerHeight / 100,
        'in': 96,   // 1inch = 96px (96 DPI)
        'cm': 96/2.54,  // 1cm = 1inch/2.54 = 96/2.54 px ≈ 37.795px
        'mm': 96/25.4,  // 1mm = 1cm/10 = 96/25.4 px ≈ 3.7795px
        'q': 96/101.6   // 1q = 1mm/4 = 96/101.6 px ≈ 0.945px
    };
    
    // 픽셀로 변환 후 목표 단위로 변환
    const pxValue = value * toPx[fromUnit];
    const result = pxValue / toPx[toUnit];
    
    // 결과를 적절한 소수점으로 표시
    let displayResult;
    if (result >= 100) {
        displayResult = result.toFixed(1);
    } else if (result >= 1) {
        displayResult = result.toFixed(2);
    } else {
        displayResult = result.toFixed(4);
    }
    
    document.getElementById('conversionResult').textContent = `${displayResult} ${toUnit}`;
    
    // 추가 정보 표시 (픽셀 기준값도 함께 표시)
    if (fromUnit !== 'px' && toUnit !== 'px') {
        const pxInfo = ` (${pxValue.toFixed(2)}px 기준)`;
        document.getElementById('conversionResult').textContent += pxInfo;
    }
}

function copyConversionResult() {
    const result = document.getElementById('conversionResult').textContent;
    if (result && result !== '결과가 여기에 표시됩니다' && result !== '올바른 숫자를 입력하세요') {
        navigator.clipboard.writeText(result).then(() => {
            showCopyNotification('변환 결과가 복사되었습니다!');
        }).catch(() => {
            alert('복사에 실패했습니다.');
        });
    } else {
        showCopyNotification('복사할 결과가 없습니다');
    }
}

function transformText(type) {
    const input = document.getElementById('textInput').value;
    const result = document.getElementById('textResult');
    
    if (!input.trim()) {
        result.textContent = '텍스트를 입력하세요';
        return;
    }
    
    let transformed = '';
    
    switch (type) {
        case 'upper':
            transformed = input.toUpperCase();
            break;
        case 'lower':
            transformed = input.toLowerCase();
            break;
        case 'title':
            transformed = input.replace(/\w\S*/g, (txt) => 
                txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
            break;
        case 'reverse':
            transformed = input.split('').reverse().join('');
            break;
        case 'removeSpaces':
            transformed = input.replace(/\s+/g, '');
            break;
        case 'addSpaces':
            transformed = input.replace(/\s+/g, ' ').replace(/(.)/g, '$1 ').trim();
            break;
    }
    
    result.textContent = transformed;
}

function copyTransformedText() {
    const result = document.getElementById('textResult').textContent;
    if (result && result !== '변환된 텍스트가 여기에 표시됩니다') {
        navigator.clipboard.writeText(result).then(() => {
            showCopyNotification('변환된 텍스트가 복사되었습니다!');
        }).catch(() => {
            alert('복사에 실패했습니다.');
        });
    } else {
        showCopyNotification('복사할 텍스트가 없습니다');
    }
}

// 초기 설정
updateStats();
generateColorPalette();
generateKeywords();

// 입력 필드에 이벤트 리스너 추가
document.addEventListener('DOMContentLoaded', function() {
    const inputValue = document.getElementById('inputValue');
    const fromUnit = document.getElementById('fromUnit');
    const toUnit = document.getElementById('toUnit');
    
    if (inputValue) inputValue.addEventListener('input', convertUnits);
    if (fromUnit) fromUnit.addEventListener('change', convertUnits);
    if (toUnit) toUnit.addEventListener('change', convertUnits);
});