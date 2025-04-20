{\rtf1\ansi\ansicpg932\cocoartf2821
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const audio = document.getElementById('audio');\
const buttons = document.querySelectorAll('.play-btn');\
const nowPlayingTags = document.querySelectorAll('.now-playing');\
\
buttons.forEach(button => \{\
  button.addEventListener('click', () => \{\
    const src = button.dataset.audio;\
\
    // \uc0\u19968 \u26086 \u12377 \u12409 \u12390 \u12398 now playing\u12434 \u28040 \u12377 \
    nowPlayingTags.forEach(tag => tag.style.display = 'none');\
\
    // \uc0\u21516 \u12376 \u26354 \u12434 \u20877 \u29983 \u20013 \u12395 \u20877 \u24230 \u25276 \u12375 \u12383 \u12425 \u12522 \u12473 \u12479 \u12540 \u12488 \
    if (audio.src.includes(src)) \{\
      audio.currentTime = 0;\
    \} else \{\
      audio.src = src;\
    \}\
\
    audio.play();\
    const np = button.parentElement.querySelector('.now-playing');\
    if (np) np.style.display = 'inline';\
  \});\
\});\
\
audio.addEventListener('ended', () => \{\
  nowPlayingTags.forEach(tag => tag.style.display = 'none');\
\});}