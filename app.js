const warmupQuestions = [
  {
    question: "AI에게 원하는 답을 받기 좋은 방법은 무엇일까요?",
    choices: [
      "질문을 최대한 짧게 쓴다.",
      "무엇을, 누구에게, 어떤 모양으로 답할지 알려준다.",
      "어려운 단어를 많이 사용한다.",
    ],
    answerIndex: 1,
    explanation: "주제, 대상, 답변 모양 같은 단서가 있으면 AI가 원하는 답을 더 정확히 만들 수 있어요.",
  },
  {
    question: "'태양계 설명해줘'를 더 좋은 프롬프트로 바꾸려면 무엇을 더하면 좋을까요?",
    choices: [
      "누가 읽을지와 어떤 내용이 필요한지",
      "느낌표를 여러 개",
      "AI에게 무조건 잘하라고 하는 말",
    ],
    answerIndex: 0,
    explanation: "읽는 사람과 필요한 내용을 알려주면 설명의 난이도와 범위가 분명해져요.",
  },
  {
    question: "'표로 정리해줘'는 프롬프트의 어떤 부분일까요?",
    choices: ["역할", "주제", "답변 형식"],
    answerIndex: 2,
    explanation: "표, 목록, 단계, 대본처럼 결과의 모양을 정하는 말은 답변 형식이에요.",
  },
];

const steps = [
  {
    id: "intro",
    kind: "choice",
    label: "기본",
    title: "좋은 질문 고르기",
    badge: "튜토리얼",
    guide: "좋은 프롬프트는 길기만 한 문장이 아니라, AI가 바로 행동할 수 있는 단서가 있는 질문이에요.",
    question: "둘 중 더 좋은 프롬프트는 무엇일까요?",
    examples: [
      { title: "A", text: "환경오염 알려줘." },
      { title: "B", text: "중학생 발표용으로 환경오염의 원인과 해결 방법을 쉬운 말로 정리해줘." },
    ],
    choices: ["A", "B"],
    answerIndex: 1,
    hint: "대상, 주제, 목적이 더 많이 들어간 쪽을 고르면 돼요.",
    solution: "정답은 B예요. '중학생 발표용', '환경오염', '원인과 해결 방법', '쉬운 말'이라는 단서가 들어 있어요.",
  },
  {
    id: "parts",
    kind: "choice",
    label: "4칸",
    title: "프롬프트 4칸 이해하기",
    badge: "튜토리얼",
    guide: "프롬프트는 보통 역할, 목표, 조건, 형식 네 칸으로 쉽게 생각할 수 있어요.",
    question: "다음 중 '형식'에 해당하는 말은?",
    choices: [
      "너는 친절한 과학 선생님이야.",
      "화산이 폭발하는 이유를 설명해줘.",
      "표나 목록으로 정리해줘.",
    ],
    answerIndex: 2,
    hint: "형식은 답변의 모양을 정하는 말이에요.",
    solution: "정답은 '표나 목록으로 정리해줘.'예요. 표, 목록, 단계, 대본, 체크리스트는 모두 형식이에요.",
  },
  {
    id: "rewrite",
    kind: "write",
    label: "고치기",
    title: "짧은 질문 고쳐쓰기",
    badge: "연습",
    guide: "아래 질문은 너무 짧아서 AI가 어떤 답을 해야 할지 헷갈릴 수 있어요.",
    prompt: "역사 알려줘.",
    placeholder: "여기에 더 좋은 질문을 직접 만들어 보세요.",
    checks: [
      { id: "topic", label: "알고 싶은 주제가 들어갔나요?", pattern: /역사|조선|고려|삼국|인물|사건|시대|문화/ },
      { id: "audience", label: "누가 읽을 답인지 들어갔나요?", pattern: /초등|중학|고등|학생|어린이|친구|수준|쉬운/ },
      { id: "format", label: "답변 모양이 들어갔나요?", pattern: /표|목록|단계|문장|대본|체크리스트|정리|예시/ },
    ],
    hint: "주제, 읽는 사람, 답변 모양 중 2개 이상을 넣어보세요. 예: 초등학생에게, 조선 시대, 목록으로",
    solution: "초등학생에게 조선 시대의 생활 모습을 쉬운 말로 설명하고, 핵심 내용을 목록으로 정리해줘.",
  },
  {
    id: "level1",
    kind: "write",
    label: "레벨 1",
    title: "목표 분명하게 쓰기",
    badge: "기초",
    guide: "빈칸에 알고 싶은 주제를 구체적으로 써보세요.",
    prompt: "초등학교 5학년에게 (        )을 쉬운 말로 설명해줘.",
    placeholder: "빈칸에 들어갈 주제를 직접 써 보세요.",
    checks: [
      { id: "topic", label: "구체적인 주제인가요?", pattern: /이유|과정|방법|차이|원리|특징|문제|해결|순환|화산|전기|우주|역사|환경/ },
      { id: "length", label: "너무 짧지 않나요?", test: (text) => text.trim().length >= 5 },
    ],
    hint: "그냥 '과학'보다 '전기가 흐르는 원리', '물의 순환 과정'처럼 좁혀보세요.",
    solution: "물의 순환 과정",
  },
  {
    id: "level2",
    kind: "write",
    label: "레벨 2",
    title: "조건 붙이기",
    badge: "보통",
    guide: "AI가 답을 어느 정도로, 어떤 방식으로 써야 하는지 조건을 붙여보세요.",
    prompt: "중학생 발표 준비를 위해 태양계 행성을 설명해줘. 조건: (        )",
    placeholder: "원하는 조건을 내 생각으로 써 보세요.",
    checks: [
      { id: "number", label: "개수나 길이 조건이 있나요?", pattern: /\d|한|두|세|네|다섯|가지|문장|분/ },
      { id: "level", label: "난이도나 대상이 있나요?", pattern: /중학생|쉬운|어려운|수준|발표|이해/ },
      { id: "format", label: "형식이 있나요?", pattern: /표|목록|단계|정리|대본|체크리스트/ },
    ],
    hint: "조건은 '몇 개', '누구 수준', '어떤 모양' 중 하나만 넣어도 좋아져요.",
    solution: "행성마다 특징을 2개씩 쉬운 말로 설명하고, 발표에서 보기 좋게 목록으로 정리해줘.",
  },
  {
    id: "level3",
    kind: "write",
    label: "레벨 3",
    title: "역할과 형식 넣기",
    badge: "도전",
    guide: "AI가 어떤 역할로 답하면 좋을지, 결과가 어떤 모양이면 좋을지 써보세요.",
    prompt: "기후 변화 토론을 준비하려고 해. (        )",
    placeholder: "역할과 답변 모양을 직접 정해 보세요.",
    checks: [
      { id: "role", label: "AI 역할이 있나요?", pattern: /너는|역할|코치|선생님|전문가|멘토|기자/ },
      { id: "topic", label: "해야 할 일이 분명한가요?", pattern: /근거|찬성|반대|토론|질문|반박|정리/ },
      { id: "format", label: "형식이 있나요?", pattern: /표|목록|단계|질문|대본|체크리스트/ },
    ],
    hint: "역할은 '토론 코치', 형식은 '표', '질문 목록', '발표 대본'처럼 다양하게 쓸 수 있어요.",
    solution: "너는 토론 코치야. 기후 변화 찬성/반대 근거를 표로 정리하고, 예상 반박 질문도 3개 만들어줘.",
  },
  {
    id: "level4",
    kind: "write",
    label: "레벨 4",
    title: "복합 프롬프트 만들기",
    badge: "심화",
    guide: "목표, 조건, 형식을 함께 넣어 조금 더 완성된 프롬프트를 만들어보세요.",
    prompt: "인공지능 윤리 보고서를 준비하려고 해. (        )",
    placeholder: "필요한 내용을 생각해 완성해 보세요.",
    checks: [
      { id: "goal", label: "보고서에서 할 일이 있나요?", pattern: /목차|주제|질문|근거|자료|사례|정리/ },
      { id: "condition", label: "조건이나 기준이 있나요?", pattern: /균형|찬반|고등학생|쉬운|핵심|3|4|5|가지/ },
      { id: "format", label: "결과 형식이 있나요?", pattern: /표|목록|단계|문단|체크리스트|키워드/ },
    ],
    hint: "보고서는 '목차', '핵심 질문', '자료 키워드', '찬반 관점' 같은 단서를 넣으면 좋아요.",
    solution: "고등학생 보고서용으로 인공지능 윤리 목차 5개를 만들고, 각 목차마다 핵심 질문과 조사할 키워드를 목록으로 정리해줘.",
  },
];

const state = {
  mode: "warmup",
  warmupIndex: 0,
  warmupAnswers: {},
  warmupSelected: null,
  stepIndex: 0,
  scores: {},
  attempts: {},
  selectedChoice: null,
  feedback: null,
  revealedAnswer: false,
};

const stepTabs = document.querySelector("#stepTabs");
const card = document.querySelector("#card");
const stageLabel = document.querySelector("#stageLabel");
const stageTitle = document.querySelector("#stageTitle");
const scoreText = document.querySelector("#scoreText");
const resetButton = document.querySelector("#resetButton");

function render() {
  if (state.mode === "warmup") {
    renderWarmup();
    return;
  }

  const step = steps[state.stepIndex];
  stepTabs.hidden = false;
  stageLabel.textContent = `${state.stepIndex + 1}/${steps.length} · ${step.badge}`;
  stageTitle.textContent = step.title;
  scoreText.textContent = `${totalScore()}점`;
  renderTabs();
  renderCard(step);
}

function renderWarmup() {
  const quiz = warmupQuestions[state.warmupIndex];
  const answered = Object.hasOwn(state.warmupAnswers, state.warmupIndex);
  const isCorrect = answered && state.warmupAnswers[state.warmupIndex] === quiz.answerIndex;
  const isLast = state.warmupIndex === warmupQuestions.length - 1;

  stepTabs.hidden = true;
  stageLabel.textContent = `준비 퀴즈 ${state.warmupIndex + 1}/${warmupQuestions.length}`;
  stageTitle.textContent = "좋은 프롬프트의 비밀 찾기";
  scoreText.textContent = `${warmupCorrectCount()}/${warmupQuestions.length} 정답`;

  card.innerHTML = `
    <div class="card-top">
      <div>
        <span class="badge">시작 전 몸풀기</span>
        <h2>프롬프트 탐정 퀴즈</h2>
      </div>
      <p class="small">정답을 고르면 바로 이유를 알려드려요.</p>
    </div>

    <div class="quiz-progress" aria-label="준비 퀴즈 진행률">
      <span style="width: ${((state.warmupIndex + 1) / warmupQuestions.length) * 100}%"></span>
    </div>
    <h3 class="quiz-question">${quiz.question}</h3>
    <div class="choice-list">
      ${quiz.choices
        .map(
          (choice, index) => `
            <button class="choice-button ${state.warmupSelected === index ? "selected" : ""}" type="button" data-warmup-choice="${index}" ${answered ? "disabled" : ""}>
              ${choice}
            </button>
          `
        )
        .join("")}
    </div>

    ${
      answered
        ? `<div class="feedback ${isCorrect ? "good" : "mid"}">
            <strong>${isCorrect ? "정답이에요" : "괜찮아요, 여기서 배워가면 돼요"}</strong>
            <p>${isCorrect ? quiz.explanation : `정답은 “${quiz.choices[quiz.answerIndex]}”예요. ${quiz.explanation}`}</p>
          </div>
          <div class="button-row">
            <button class="primary-button" id="warmupNextButton" type="button">${isLast ? "튜토리얼 시작하기" : "다음 퀴즈"}</button>
          </div>`
        : ""
    }
  `;

  card.querySelectorAll("[data-warmup-choice]").forEach((button) => {
    button.addEventListener("click", () => {
      const selected = Number(button.dataset.warmupChoice);
      state.warmupSelected = selected;
      state.warmupAnswers[state.warmupIndex] = selected;
      render();
    });
  });

  const nextButton = document.querySelector("#warmupNextButton");
  if (nextButton) {
    nextButton.addEventListener("click", () => {
      if (isLast) {
        state.mode = "tutorial";
        state.stepIndex = 0;
        clearInteraction();
      } else {
        state.warmupIndex += 1;
        state.warmupSelected = null;
      }
      render();
    });
  }
}

function warmupCorrectCount() {
  return Object.entries(state.warmupAnswers).filter(
    ([index, answer]) => warmupQuestions[Number(index)].answerIndex === answer
  ).length;
}

function renderTabs() {
  stepTabs.innerHTML = steps
    .map((step, index) => {
      const locked = index > 0 && !isPreviousDone(index);
      return `
        <button class="tab-button ${index === state.stepIndex ? "active" : ""}" type="button" data-index="${index}" ${locked ? "disabled" : ""}>
          ${step.label}
        </button>
      `;
    })
    .join("");

  stepTabs.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      state.stepIndex = Number(button.dataset.index);
      clearInteraction();
      render();
    });
  });
}

function renderCard(step) {
  card.innerHTML = `
    <div class="card-top">
      <div>
        <span class="badge">${step.badge}</span>
        <h2>${step.title}</h2>
      </div>
      <p class="small">틀려도 괜찮아요. 힌트를 보고 다시 해보면 됩니다.</p>
    </div>

    <p class="hint">${step.guide}</p>
    ${step.kind === "choice" ? choiceTemplate(step) : writeTemplate(step)}

    <div class="button-row">
      ${step.kind === "write" ? '<button class="primary-button" id="checkButton" type="button">채점하기</button>' : ""}
      <button class="secondary-button" id="hintButton" type="button">힌트 보기</button>
      <button class="secondary-button" id="answerButton" type="button">정답 보기</button>
      ${canGoNext() ? '<button class="primary-button" id="nextButton" type="button">다음으로</button>' : ""}
    </div>

    <div id="feedbackArea">${feedbackTemplate()}</div>
  `;

  bindCard(step);
}

function choiceTemplate(step) {
  return `
    ${step.examples ? `<div class="example-grid">${step.examples.map((item) => `<div class="example-card"><strong>${item.title}</strong>${item.text}</div>`).join("")}</div>` : ""}
    <div class="choice-list">
      <p class="hint">${step.question}</p>
      ${step.choices
        .map(
          (choice, index) => `
            <button class="choice-button ${state.selectedChoice === index ? "selected" : ""}" type="button" data-choice="${index}">
              ${choice}
            </button>
          `
        )
        .join("")}
    </div>
  `;
}

function writeTemplate(step) {
  return `
    <div class="prompt-box">${step.prompt}</div>
    <label class="answer-area">
      <span>내 답안</span>
      <textarea id="answerInput" placeholder="${step.placeholder}">${step.savedAnswer || ""}</textarea>
    </label>
  `;
}

function bindCard(step) {
  card.querySelectorAll(".choice-button").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedChoice = Number(button.dataset.choice);
      checkChoice(step);
    });
  });

  const checkButton = document.querySelector("#checkButton");
  if (checkButton) checkButton.addEventListener("click", () => checkWrittenAnswer(step));

  document.querySelector("#hintButton").addEventListener("click", () => {
    state.feedback = { tone: "mid", title: "힌트", message: step.hint };
    render();
  });

  document.querySelector("#answerButton").addEventListener("click", () => {
    state.revealedAnswer = true;
    state.feedback = {
      tone: "mid",
      title: "정답 예시",
      message: "이 문장을 그대로 외우기보다 어떤 단서가 들어갔는지 살펴보세요.",
      solution: step.solution,
    };
    render();
  });

  const nextButton = document.querySelector("#nextButton");
  if (nextButton) {
    nextButton.addEventListener("click", () => {
      if (state.stepIndex < steps.length - 1) {
        state.stepIndex += 1;
        clearInteraction();
        render();
      } else {
        state.feedback = {
          tone: "good",
          title: "완료",
          message: `연습이 끝났어요. 총점은 ${totalScore()}점입니다.`,
        };
        render();
      }
    });
  }
}

function checkChoice(step) {
  const correct = state.selectedChoice === step.answerIndex;
  addAttempt(step.id);

  if (correct) {
    state.scores[step.id] = 3;
    state.feedback = { tone: "good", title: "정답", message: "좋아요. 핵심을 잘 골랐어요." };
  } else {
    state.feedback = {
      tone: "low",
      title: "다시 생각해보기",
      message: attemptCount(step.id) >= 2 ? "두 번 틀렸으니 정답 예시를 함께 볼게요." : "힌트를 보고 다시 골라보세요.",
      solution: attemptCount(step.id) >= 2 ? step.solution : "",
    };
  }

  render();
}

function checkWrittenAnswer(step) {
  const input = document.querySelector("#answerInput");
  const answer = input.value.trim();
  step.savedAnswer = answer;
  addAttempt(step.id);

  const missing = step.checks.filter((check) => {
    if (check.test) return !check.test(answer);
    return !check.pattern.test(answer);
  });

  if (!answer) {
    state.feedback = {
      tone: "low",
      title: "아직 비어 있어요",
      message: "한 문장이라도 써보고, 어려우면 힌트 보기부터 눌러보세요.",
    };
    render();
    return;
  }

  if (missing.length === 0) {
    state.scores[step.id] = 3;
    state.feedback = { tone: "good", title: "3점", message: "좋아요. 필요한 단서가 잘 들어갔어요." };
  } else if (missing.length === 1) {
    state.scores[step.id] = Math.max(state.scores[step.id] || 0, 2);
    state.feedback = {
      tone: "mid",
      title: "2점",
      message: "거의 됐어요. 아래 항목만 보강하면 더 좋아집니다.",
      missing,
      solution: attemptCount(step.id) >= 2 ? step.solution : "",
    };
  } else {
    state.scores[step.id] = Math.max(state.scores[step.id] || 0, 1);
    state.feedback = {
      tone: "low",
      title: "다시 도전",
      message: attemptCount(step.id) >= 2 ? "어려운 문제였어요. 정답 예시를 보고 다시 써보세요." : "부족한 부분을 보고 다시 써보세요.",
      missing,
      solution: attemptCount(step.id) >= 2 ? step.solution : "",
    };
  }

  render();
}

function feedbackTemplate() {
  if (!state.feedback) return "";

  const missing = state.feedback.missing?.length
    ? `<ul class="check-list">${state.feedback.missing.map((item) => `<li>${item.label}</li>`).join("")}</ul>`
    : "";
  const solution = state.feedback.solution
    ? `<div class="answer-box"><strong>정답 예시</strong><p>${state.feedback.solution}</p></div>`
    : "";

  return `
    <div class="feedback ${state.feedback.tone}">
      <strong>${state.feedback.title}</strong>
      <p>${state.feedback.message}</p>
      ${missing}
      ${solution}
    </div>
  `;
}

function addAttempt(id) {
  state.attempts[id] = (state.attempts[id] || 0) + 1;
}

function attemptCount(id) {
  return state.attempts[id] || 0;
}

function canGoNext() {
  const step = steps[state.stepIndex];
  return Boolean(state.scores[step.id] || state.revealedAnswer);
}

function isPreviousDone(index) {
  return Boolean(state.scores[steps[index - 1].id] || state.stepIndex >= index || state.revealedAnswer);
}

function totalScore() {
  return Object.values(state.scores).reduce((sum, score) => sum + score, 0);
}

function clearInteraction() {
  state.selectedChoice = null;
  state.feedback = null;
  state.revealedAnswer = false;
}

function resetAll() {
  state.mode = "warmup";
  state.warmupIndex = 0;
  state.warmupAnswers = {};
  state.warmupSelected = null;
  state.stepIndex = 0;
  state.scores = {};
  state.attempts = {};
  state.selectedChoice = null;
  state.feedback = null;
  state.revealedAnswer = false;
  steps.forEach((step) => {
    delete step.savedAnswer;
  });
  render();
}

resetButton.addEventListener("click", resetAll);

render();
