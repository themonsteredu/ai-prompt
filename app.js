const promptParts = [
  {
    title: "역할",
    body: "누구처럼 답할지",
    example: "너는 친절한 과학 선생님이야.",
  },
  {
    title: "목표",
    body: "무엇을 할지",
    example: "화산이 폭발하는 이유를 설명해줘.",
  },
  {
    title: "조건",
    body: "수준, 길이, 기준",
    example: "초등학교 5학년이 이해할 수 있게 5문장으로.",
  },
  {
    title: "형식",
    body: "표, 목록, 단계",
    example: "표로 정리하고 마지막에 복습 문제 2개를 넣어줘.",
  },
];

const tutorialMissions = [
  {
    type: "compare",
    title: "미션 1. 흐린 질문과 또렷한 질문 비교",
    description: "어느 질문이 더 또렷한지 비교해보세요.",
    bad: "물 알려줘.",
    good: "초등학교 5학년에게 물의 순환을 쉬운 말로 5문장 설명하고, 마지막에 복습 문제 2개를 내줘.",
    question: "두 번째 질문이 더 좋은 가장 큰 이유는?",
    choices: [
      "더 길기만 해서 좋아요.",
      "대상, 주제, 길이, 추가 활동이 구체적으로 들어 있어요.",
      "AI에게 무조건 답을 길게 쓰라고 했어요.",
    ],
    answer: 1,
    success: "맞아요. 좋은 프롬프트는 길이보다 단서의 선명함이 중요해요.",
  },
  {
    type: "parts",
    title: "미션 2. 프롬프트 4칸 살펴보기",
    description: "좋은 프롬프트를 만드는 4칸을 확인해요.",
    question: "다음 중 '형식'에 해당하는 말은?",
    choices: ["너는 역사 선생님이야.", "조선 시대 과학 기술을 설명해줘.", "표로 정리하고 핵심어 3개를 뽑아줘."],
    answer: 2,
    success: "좋아요. 표, 목록, 문단, 질문처럼 결과의 모양을 정하는 말이 형식이에요.",
  },
  {
    type: "arrange",
    title: "미션 3. 필요한 조각 골라 배열하기",
    description: "섞여 있는 조각 중 필요한 것만 골라 순서대로 놓아보세요.",
    target: "중학생 발표 준비용 환경오염 프롬프트",
    pieces: [
      { id: "role", part: "역할", text: "너는 발표 코치야." },
      { id: "goal", part: "목표", text: "환경오염의 원인과 해결 방법을 설명해줘." },
      { id: "condition", part: "조건", text: "중학생이 이해할 수 있게 원인 3가지와 해결 방법 3가지로 정리해줘." },
      { id: "format", part: "형식", text: "표로 정리하고 마지막에 발표 제목 2개를 추천해줘." },
      { id: "noise1", part: "방해", text: "아무거나 길게 써줘." },
      { id: "noise2", part: "방해", text: "멋있게 해줘." },
    ],
    answer: ["role", "goal", "condition", "format"],
    success: "좋아요. 역할, 목표, 조건, 형식 순서로 놓으니 AI가 해야 할 일이 선명해졌어요.",
  },
  {
    type: "rewrite",
    title: "미션 4. 약한 프롬프트 고쳐쓰기",
    description: "짧고 모호한 질문을 고쳐보세요.",
    weakPrompt: "환경오염 알려줘.",
    placeholder: "내가 고친 프롬프트를 써보세요.",
    hint:
      "대상은 '중학생 발표용'처럼, 조건은 '원인과 해결 방법을 나누어'처럼, 형식은 '목록/단계/표/발표 대본'처럼 다양하게 쓸 수 있어요.",
    solution: "중학생 발표 준비용으로 환경오염의 원인과 해결 방법을 나누어 설명하고, 발표에서 바로 읽을 수 있게 목록으로 정리해줘.",
    minLength: 22,
    required: ["환경", "원인", "해결"],
  },
  {
    type: "assemble",
    title: "미션 5. 내 프롬프트 완성하기",
    description: "조건과 형식을 붙여 완성해요.",
    starter: "너는 공부 코치야. 중학생에게 시험 계획을 세우는 방법을",
    placeholder: "조건과 형식을 이어서 써보세요.",
    hint:
      "이미 역할은 '공부 코치'로 정해져 있어요. 이제 기간, 단계, 예시, 체크리스트, 질문처럼 조건과 형식을 붙여보세요.",
    solution: "7일 동안 실천할 수 있게 단계별로 설명하고, 하루 계획 예시와 점검 체크리스트를 함께 만들어줘.",
    minLength: 24,
    required: ["단계", "예시"],
  },
];

const levels = [
  {
    id: "level1",
    label: "레벨 1",
    title: "목표를 또렷하게 쓰기",
    difficulty: "기초",
    before: "초등학교 4학년에게 ",
    after: " 를 쉬운 말로 설명해줘.",
    blankLabel: "알고 싶은 주제",
    example: "화산이 폭발하는 이유",
    criteria: ["구체적인 주제", "학생 수준에 맞는 표현", "불필요한 말이 적음"],
    keywords: ["이유", "과정", "방법", "차이", "원리", "뜻", "예시"],
    minLength: 6,
  },
  {
    id: "level2",
    label: "레벨 2",
    title: "조건을 붙여 답변 조절하기",
    difficulty: "보통",
    before: "중학교 1학년 발표 준비를 위해 태양계 행성을 설명해줘. 조건: ",
    after: "",
    blankLabel: "답변 조건",
    example: "행성마다 특징 2개씩, 어려운 단어는 뜻을 붙이고, 표로 정리해줘",
    criteria: ["개수나 길이 조건", "대상 수준", "결과 형식"],
    keywords: ["표", "목록", "문장", "개", "분", "쉬운", "중학생", "초등학생", "뜻", "예시"],
    minLength: 14,
  },
  {
    id: "level3",
    label: "레벨 3",
    title: "역할과 형식 함께 쓰기",
    difficulty: "도전",
    before: "너는 ",
    after: " 역할이야. 고등학생에게 기후 변화 토론을 준비할 수 있게 찬성/반대 근거를 정리해줘.",
    blankLabel: "AI의 역할과 답변 형식",
    example: "토론 코치이고, 근거를 표로 정리한 뒤 예상 반박 3개를 덧붙여줘",
    criteria: ["명확한 역할", "토론에 맞는 형식", "추가 활동 요청"],
    keywords: ["코치", "선생님", "전문가", "표", "근거", "반박", "질문", "찬성", "반대"],
    minLength: 18,
  },
  {
    id: "level4",
    label: "레벨 4",
    title: "복합 프롬프트 완성하기",
    difficulty: "심화",
    before: "고등학생 연구 보고서 초안을 만들고 싶어. 주제는 인공지능 윤리야. ",
    after: "",
    blankLabel: "목표, 조건, 형식, 검토 요청",
    example:
      "보고서 목차 5개를 만들고, 각 항목에 핵심 질문을 붙여줘. 균형 잡힌 관점으로 쓰고, 마지막에 더 조사할 자료 키워드도 추천해줘.",
    criteria: ["여러 단계 요청", "균형 또는 검토 기준", "후속 학습 도움"],
    keywords: ["목차", "질문", "기준", "검토", "자료", "키워드", "균형", "단계", "수정", "근거"],
    minLength: 28,
  },
];

const state = {
  stage: "tutorial",
  tutorialStep: 0,
  tutorialPassed: false,
  tutorialFailures: {},
  scores: {},
  feedback: null,
};

const progressList = document.querySelector("#progressList");
const workspace = document.querySelector("#workspace");
const stageEyebrow = document.querySelector("#stageEyebrow");
const stageTitle = document.querySelector("#stageTitle");
const totalScore = document.querySelector("#totalScore");
const completedCount = document.querySelector("#completedCount");
const resetButton = document.querySelector("#resetButton");

const stages = [
  { id: "tutorial", label: "튜토리얼", title: "AI프롬프트 어디까지 해봤니", difficulty: "훈련" },
  ...levels,
  { id: "result", label: "결과", title: "학습 결과", difficulty: "요약" },
];

function render() {
  const currentStage = stages.find((stage) => stage.id === state.stage);
  stageEyebrow.textContent = `${currentStage.label} · ${currentStage.difficulty}`;
  stageTitle.textContent = currentStage.title;
  renderProgress();
  renderWorkspace();
  renderScore();
}

function renderProgress() {
  progressList.innerHTML = stages
    .map((stage, index) => {
      const locked = isLocked(stage.id);
      const score = state.scores[stage.id];
      const scoreText = score ? `${score}점` : locked ? "잠김" : "시작";
      return `
        <button class="step-button ${state.stage === stage.id ? "active" : ""}" type="button"
          data-stage="${stage.id}" ${locked ? "disabled" : ""}>
          <span class="step-kicker">
            <span class="step-index">${index + 1}</span>
            <span class="score-pill">${scoreText}</span>
          </span>
          <strong>${stage.label}</strong>
          <small>${stage.title}</small>
        </button>
      `;
    })
    .join("");

  progressList.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      state.stage = button.dataset.stage;
      state.feedback = null;
      render();
    });
  });
}

function isLocked(stageId) {
  if (stageId === "tutorial") return false;
  if (stageId === "result") return !levels.every((level) => state.scores[level.id]);
  if (!state.tutorialPassed) return true;
  const levelIndex = levels.findIndex((level) => level.id === stageId);
  if (levelIndex <= 0) return false;
  return !state.scores[levels[levelIndex - 1].id];
}

function renderWorkspace() {
  if (state.stage === "tutorial") {
    renderTutorial();
    return;
  }

  if (state.stage === "result") {
    renderResult();
    return;
  }

  renderLevel(levels.find((level) => level.id === state.stage));
}

function renderTutorial() {
  const mission = tutorialMissions[state.tutorialStep];
  workspace.innerHTML = `
    <section class="tutorial-layout">
      <aside class="toolbox">
        <h3>프롬프트 4칸</h3>
        <div class="formula">
          ${promptParts
            .map(
              (part) => `
                <div class="formula-item">
                  <strong>${part.title}</strong>
                  <span>${part.body}</span>
                </div>
              `
            )
            .join("")}
        </div>
      </aside>
      <article class="mission-card">
        <div class="mission-meter">
          ${tutorialMissions
            .map((_, index) => `<span class="meter-dot ${index <= state.tutorialStep ? "done" : ""}"></span>`)
            .join("")}
        </div>
        ${tutorialTemplate(mission)}
        <div id="feedbackArea">${state.feedback ? feedbackTemplate(state.feedback) : ""}</div>
      </article>
    </section>
  `;

  bindTutorialMission(mission);
}

function tutorialTemplate(mission) {
  if (mission.type === "compare") {
    return `
      <h3>${mission.title}</h3>
      <p class="hint">${mission.description}</p>
      <div class="comparison-grid">
        <div class="sample-card bad">
          <strong>흐린 질문</strong>
          <p>${mission.bad}</p>
        </div>
        <div class="sample-card good">
          <strong>또렷한 질문</strong>
          <p>${mission.good}</p>
        </div>
      </div>
      ${choiceTemplate(mission)}
    `;
  }

  if (mission.type === "parts") {
    return `
      <h3>${mission.title}</h3>
      <p class="hint">${mission.description}</p>
      <ul class="parts-list">
        ${promptParts.map((part) => `<li><strong>${part.title}</strong><span>${part.example}</span></li>`).join("")}
      </ul>
      ${choiceTemplate(mission)}
    `;
  }

  if (mission.type === "arrange") {
    return `
      <h3>${mission.title}</h3>
      <p class="hint">${mission.description}</p>
      <div class="arrange-target">
        <span>목표 상황</span>
        <strong>${mission.target}</strong>
      </div>
      <div class="piece-grid">
        ${mission.pieces
          .map(
            (piece) => `
              <button class="piece-button" type="button" data-piece="${piece.id}">
                <span>${piece.part}</span>
                ${piece.text}
              </button>
            `
          )
          .join("")}
      </div>
      <div class="selected-strip" id="selectedPieces">
        <span class="empty-selection">필요한 조각을 순서대로 선택해보세요.</span>
      </div>
      <div class="button-row">
        <button class="primary-button" id="checkArrangement" type="button">배열 확인</button>
        <button class="secondary-button" id="clearArrangement" type="button">다시 고르기</button>
      </div>
    `;
  }

  if (mission.type === "rewrite") {
    return `
      <h3>${mission.title}</h3>
      <p class="hint">${mission.description}</p>
      <div class="prompt-box">${mission.weakPrompt}</div>
      ${textMissionTemplate(mission)}
    `;
  }

  return `
    <h3>${mission.title}</h3>
    <p class="hint">${mission.description}</p>
    <div class="prompt-box">${mission.starter} <span class="blank">조건과 형식</span></div>
    <div class="prompt-builder">
      <div class="builder-block"><strong>넣으면 좋은 조건</strong><p>시간, 단계, 예시, 주의할 점</p></div>
      <div class="builder-block"><strong>넣으면 좋은 형식</strong><p>표, 체크리스트, 순서 목록, 질문</p></div>
    </div>
    ${textMissionTemplate(mission)}
  `;
}

function choiceTemplate(mission) {
  return `
    <div class="choice-grid">
      <p class="hint">${mission.question}</p>
      ${mission.choices
        .map((choice, index) => `<button class="choice-button" type="button" data-choice="${index}">${choice}</button>`)
        .join("")}
    </div>
  `;
}

function textMissionTemplate(mission) {
  return `
    <label class="answer-area">
      <span class="label">내가 고친 프롬프트</span>
      <textarea id="tutorialAnswer" placeholder="${mission.placeholder}"></textarea>
    </label>
    <div class="button-row">
      <button class="primary-button" id="checkTutorialText" type="button">미션 확인</button>
      ${mission.hint ? '<button class="secondary-button" id="showTutorialHint" type="button">힌트 보기</button>' : ""}
    </div>
  `;
}

function bindTutorialMission(mission) {
  const selectedPieceIds = [];

  workspace.querySelectorAll(".choice-button").forEach((button) => {
    button.addEventListener("click", () => {
      const choiceIndex = Number(button.dataset.choice);
      workspace.querySelectorAll(".choice-button").forEach((item) => {
        item.classList.toggle("selected", item === button);
      });

      if (choiceIndex !== mission.answer) {
        state.feedback = tutorialFailureFeedback(mission, {
          tone: "low",
          title: "다시 생각해보기",
          message: "좋은 프롬프트는 단서가 구체적인지, 결과 모양이 보이는지를 기준으로 판단해보세요.",
        });
        renderTutorial();
        return;
      }

      state.feedback = {
        tone: "good",
        title: "미션 성공",
        message: mission.success,
      };
      renderTutorialNextButton();
    });
  });

  const textButton = document.querySelector("#checkTutorialText");
  if (textButton) {
    textButton.addEventListener("click", () => checkTutorialTextMission(mission));
  }

  const hintButton = document.querySelector("#showTutorialHint");
  if (hintButton) {
    hintButton.addEventListener("click", () => {
      const currentAnswer = document.querySelector("#tutorialAnswer")?.value || "";
      state.feedback = {
        tone: "mid",
        title: "힌트",
        message: mission.hint,
      };
      renderTutorial();
      const nextAnswer = document.querySelector("#tutorialAnswer");
      if (nextAnswer) nextAnswer.value = currentAnswer;
    });
  }

  workspace.querySelectorAll(".piece-button").forEach((button) => {
    button.addEventListener("click", () => {
      const pieceId = button.dataset.piece;
      if (selectedPieceIds.includes(pieceId)) return;
      selectedPieceIds.push(pieceId);
      button.classList.add("selected");
      renderSelectedPieces(selectedPieceIds, mission);
    });
  });

  const clearArrangement = document.querySelector("#clearArrangement");
  if (clearArrangement) {
    clearArrangement.addEventListener("click", () => {
      selectedPieceIds.length = 0;
      workspace.querySelectorAll(".piece-button").forEach((button) => button.classList.remove("selected"));
      renderSelectedPieces(selectedPieceIds, mission);
    });
  }

  const checkArrangement = document.querySelector("#checkArrangement");
  if (checkArrangement) {
    checkArrangement.addEventListener("click", () => checkArrangementMission(selectedPieceIds, mission));
  }
}

function renderSelectedPieces(selectedPieceIds, mission) {
  const selectedPieces = document.querySelector("#selectedPieces");
  if (!selectedPieces) return;

  if (!selectedPieceIds.length) {
    selectedPieces.innerHTML = '<span class="empty-selection">필요한 조각을 순서대로 선택해보세요.</span>';
    return;
  }

  selectedPieces.innerHTML = selectedPieceIds
    .map((pieceId, index) => {
      const piece = mission.pieces.find((item) => item.id === pieceId);
      return `<span class="selected-piece"><strong>${index + 1}</strong>${piece.text}</span>`;
    })
    .join("");
}

function checkArrangementMission(selectedPieceIds, mission) {
  const correct = arraysEqual(selectedPieceIds, mission.answer);

  if (!correct) {
    const missing = [];
    if (!selectedPieceIds.includes("role")) {
      missing.push({ title: "역할", body: "AI가 어떤 입장에서 답할지 알려주는 조각이 필요해요." });
    }
    if (!selectedPieceIds.includes("goal")) {
      missing.push({ title: "목표", body: "무엇을 설명하거나 만들어야 하는지 말하는 조각이 필요해요." });
    }
    if (!selectedPieceIds.includes("condition")) {
      missing.push({ title: "조건", body: "대상, 개수, 난이도처럼 답변 기준을 정하는 조각이 필요해요." });
    }
    if (!selectedPieceIds.includes("format")) {
      missing.push({ title: "형식", body: "표, 목록, 추천처럼 결과 모양을 정하는 조각이 필요해요." });
    }
    if (selectedPieceIds.includes("noise1") || selectedPieceIds.includes("noise2")) {
      missing.push({ title: "불필요한 조각", body: "'아무거나', '멋있게'처럼 기준이 흐린 말은 빼는 게 좋아요." });
    }
    if (selectedPieceIds.length === mission.answer.length && missing.length === 0) {
      missing.push({ title: "순서", body: "역할 → 목표 → 조건 → 형식 순서로 다시 배열해보세요." });
    }

    state.feedback = tutorialFailureFeedback(mission, {
      tone: "low",
      title: "배열 다시 확인",
      message: "필요한 조각이 빠졌거나 순서가 흔들렸어요.",
      missing: missing.slice(0, 4),
    });
    renderTutorial();
    return;
  }

  state.feedback = {
    tone: "good",
    title: "미션 성공",
    message: mission.success,
  };
  renderTutorialNextButton();
}

function arraysEqual(first, second) {
  return first.length === second.length && first.every((item, index) => item === second[index]);
}

function tutorialFailureFeedback(mission, feedback) {
  const key = String(state.tutorialStep);
  state.tutorialFailures[key] = (state.tutorialFailures[key] || 0) + 1;

  if (state.tutorialFailures[key] < 2) {
    return feedback;
  }

  return {
    ...feedback,
    title: `${feedback.title} · 정답 예시`,
    solution: getTutorialSolution(mission),
  };
}

function getTutorialSolution(mission) {
  if (mission.solution) return mission.solution;

  if (mission.type === "arrange") {
    return mission.answer
      .map((pieceId, index) => {
        const piece = mission.pieces.find((item) => item.id === pieceId);
        return `${index + 1}. ${piece.text}`;
      })
      .join(" ");
  }

  if (typeof mission.answer === "number" && mission.choices) {
    return mission.choices[mission.answer];
  }

  return "역할, 목표, 조건, 형식을 차례로 확인해보세요.";
}

function checkTutorialTextMission(mission) {
  const answerInput = document.querySelector("#tutorialAnswer");
  const answer = answerInput.value.trim();
  const requiredHits = mission.required.filter((word) => answer.includes(word)).length;
  const hasFormat = /표|목록|단계|예시|질문|체크리스트|문장|대본|제목|순서|정리|나누어|구분/.test(answer);
  const missing = diagnosePrompt(answer, {
    goalWords: mission.required,
    needsRole: false,
    needsFormat: true,
    minLength: mission.minLength,
    context: mission.starter || "",
  });

  if (answer.length < mission.minLength || requiredHits < 2 || !hasFormat) {
    state.feedback = tutorialFailureFeedback(mission, {
      tone: "low",
      title: "조금 더 고쳐보기",
      message: "아래 부족한 칸을 채우면 질문이 훨씬 또렷해져요.",
      missing,
    });
    renderTutorial();
    document.querySelector("#tutorialAnswer").value = answer;
    return;
  }

  state.feedback = {
    tone: "good",
    title: "미션 성공",
    message: "좋아요. 이제 AI가 어떤 답을 해야 하는지 훨씬 분명하게 알 수 있어요.",
  };
  renderTutorialNextButton(answer);
}

function renderTutorialNextButton(answer = "") {
  const feedbackArea = document.querySelector("#feedbackArea");
  feedbackArea.innerHTML = `${feedbackTemplate(state.feedback)}
    <div class="button-row">
      <button class="primary-button" id="nextTutorialMission" type="button">
        ${state.tutorialStep === tutorialMissions.length - 1 ? "레벨 1 시작" : "다음 미션"}
      </button>
    </div>`;

  const answerInput = document.querySelector("#tutorialAnswer");
  if (answerInput) answerInput.value = answer;

  document.querySelector("#nextTutorialMission").addEventListener("click", () => {
    if (state.tutorialStep === tutorialMissions.length - 1) {
      state.tutorialPassed = true;
      state.scores.tutorial = 3;
      state.stage = "level1";
    } else {
      state.tutorialStep += 1;
    }
    state.feedback = null;
    render();
  });
}

function renderLevel(level) {
  const savedScore = state.scores[level.id];
  workspace.innerHTML = `
    <article class="level-layout">
      <h3>${level.title}</h3>
      <p class="hint">빈칸에 들어갈 프롬프트 조각을 직접 써보세요. 레벨이 올라갈수록 목표, 조건, 역할, 형식을 더 많이 섞어야 합니다.</p>

      <div class="prompt-box">
        ${level.before}<span class="blank">${level.blankLabel}</span>${level.after}
      </div>

      <ul class="criteria-list">
        ${level.criteria.map((item) => `<li>${item}</li>`).join("")}
      </ul>

      <label class="answer-area">
        <span class="label">내 답안</span>
        <textarea id="answerInput" placeholder="여기에 빈칸에 들어갈 말을 써보세요."></textarea>
      </label>

      <div class="button-row">
        <button class="primary-button" id="submitAnswer" type="button">채점하기</button>
        <button class="secondary-button" id="exampleButton" type="button">예시 보기</button>
        ${savedScore ? '<button class="secondary-button" id="nextButton" type="button">다음 단계</button>' : ""}
      </div>

      <div id="feedbackArea">${state.feedback ? feedbackTemplate(state.feedback) : ""}</div>
    </article>
  `;

  document.querySelector("#submitAnswer").addEventListener("click", () => gradeAnswer(level));
  document.querySelector("#exampleButton").addEventListener("click", () => {
    state.feedback = {
      score: 0,
      tone: "mid",
      title: "예시 답안",
      message: level.example,
      retry: false,
    };
    renderLevel(level);
  });

  const nextButton = document.querySelector("#nextButton");
  if (nextButton) nextButton.addEventListener("click", goNext);
}

function gradeAnswer(level) {
  const input = document.querySelector("#answerInput");
  const answer = input.value.trim();
  const result = evaluateAnswer(answer, level);
  state.feedback = result;

  if (!result.retry) state.scores[level.id] = result.score;

  renderLevel(level);
  document.querySelector("#answerInput").value = answer;
  renderProgress();
  renderScore();
}

function evaluateAnswer(answer, level) {
  const missing = diagnosePrompt(answer, {
    goalWords: level.keywords,
    needsRole: level.id === "level3",
    needsFormat: level.id !== "level1",
    minLength: level.minLength,
  });

  if (answer.length < Math.max(4, Math.floor(level.minLength / 2))) {
    return {
      score: 0,
      tone: "low",
      title: "재시도 필요",
      message: "답이 너무 짧아서 AI가 해야 할 일을 파악하기 어려워요.",
      missing,
      retry: true,
    };
  }

  const normalized = answer.replace(/\s/g, "");
  const keywordHits = level.keywords.filter((keyword) => answer.includes(keyword)).length;
  const hasSpecificNumber = /\d|한|두|세|네|다섯|여섯|일곱|여덟|아홉|열/.test(answer);
  const hasFormat = /표|목록|단계|문단|글머리|질문|예시|대화|체크리스트/.test(answer);
  const hasAudience = /초등|중학|고등|학생|친구|어린이|수준|쉬운/.test(answer);

  let points = 0;
  if (normalized.length >= level.minLength) points += 1;
  if (keywordHits >= 2) points += 1;
  if (hasSpecificNumber || hasFormat || hasAudience) points += 1;

  if (points >= 3) {
    return {
      score: 3,
      tone: "good",
      title: "3점 만점",
      message: "목표와 조건이 또렷해요. 이 정도면 AI가 원하는 답변 형태를 꽤 정확히 잡을 수 있어요.",
      missing: [],
      retry: false,
    };
  }

  if (points === 2) {
    return {
      score: 2,
      tone: "mid",
      title: "2점",
      message: "좋아요. 아래 항목 중 하나만 더 보강하면 더 강한 프롬프트가 됩니다.",
      missing,
      retry: false,
    };
  }

  return {
    score: 1,
    tone: "low",
    title: "1점",
    message: "핵심은 들어갔지만 아직 모호해요. 부족한 칸을 보고 다시 다듬어보세요.",
    missing,
    retry: false,
  };
}

function diagnosePrompt(answer, options) {
  const normalized = `${options.context || ""} ${answer}`.trim();
  const goalHits = options.goalWords.filter((word) => normalized.includes(word)).length;
  const hasRole = /너는|역할|선생님|코치|전문가|도우미|멘토|기자|작가|상담/.test(normalized);
  const hasAudience = /초등|중학|고등|학생|어린이|친구|수준|쉬운|발표|보고서/.test(normalized);
  const hasCondition = /\d|한|두|세|네|다섯|여섯|일곱|여덟|아홉|열|문장|가지|분량|쉬운|어려운|반드시|포함|제외/.test(
    normalized
  );
  const hasFormat = /표|목록|단계|문단|글머리|질문|예시|대화|체크리스트|순서|목차/.test(normalized);
  const missing = [];

  if (options.needsRole && !hasRole) {
    missing.push({
      title: "역할",
      body: "AI가 어떤 입장에서 답해야 하는지 적어보세요. 예: 토론 코치, 과학 선생님",
    });
  }

  if (normalized.length < options.minLength || goalHits === 0) {
    missing.push({
      title: "목표",
      body: "무엇을 알고 싶은지 더 정확히 써보세요. 예: 원인, 해결 방법, 차이, 근거",
    });
  }

  if (!hasAudience || !hasCondition) {
    missing.push({
      title: "조건",
      body: "대상, 길이, 개수, 난이도 같은 기준을 붙여보세요. 예: 중학생 수준, 3가지, 쉬운 말",
    });
  }

  if (options.needsFormat && !hasFormat) {
    missing.push({
      title: "형식",
      body: "답변 모양을 정해보세요. 예: 표, 목록, 단계별 설명, 체크리스트",
    });
  }

  return missing.slice(0, 3);
}

function feedbackTemplate(feedback) {
  const scoreText = feedback.score ? `획득 점수: ${feedback.score}점` : "연습 힌트";
  const missingItems =
    feedback.missing && feedback.missing.length
      ? `<ul class="missing-list">
          ${feedback.missing.map((item) => `<li><strong>${item.title}</strong><span>${item.body}</span></li>`).join("")}
        </ul>`
      : "";
  const solutionItem = feedback.solution
    ? `<div class="solution-box">
        <strong>정답 예시</strong>
        <p>${feedback.solution}</p>
      </div>`
    : "";
  return `
    <div class="feedback ${feedback.tone}">
      <strong>${feedback.title} · ${scoreText}</strong>
      <p>${feedback.message}</p>
      ${missingItems}
      ${solutionItem}
      ${
        feedback.retry
          ? '<div class="button-row"><button class="secondary-button" id="retryButton" type="button">다시 써보기</button></div>'
          : ""
      }
    </div>
  `;
}

function goNext() {
  const currentLevelIndex = levels.findIndex((level) => level.id === state.stage);
  state.stage = currentLevelIndex === levels.length - 1 ? "result" : levels[currentLevelIndex + 1].id;
  state.feedback = null;
  render();
}

function renderResult() {
  const scoreValues = levels.map((level) => state.scores[level.id] || 0);
  const sum = scoreValues.reduce((total, score) => total + score, 0);
  const max = levels.length * 3;
  const average = Math.round((sum / max) * 100);
  const message =
    average >= 85
      ? "프롬프트 구성 요소를 아주 잘 사용하고 있어요."
      : average >= 60
        ? "기본기는 잡혔어요. 조건과 형식을 더 자주 붙여보세요."
        : "튜토리얼을 다시 보며 역할, 목표, 조건, 형식을 천천히 연습해보세요.";

  workspace.innerHTML = `
    <article class="result-card">
      <h3>훈련 결과</h3>
      <p class="hint">${message}</p>
      <div class="result-grid">
        <div class="result-stat">
          <span>총점</span>
          <strong>${sum}/${max}</strong>
        </div>
        <div class="result-stat">
          <span>달성률</span>
          <strong>${average}%</strong>
        </div>
        <div class="result-stat">
          <span>완료 레벨</span>
          <strong>${scoreValues.filter(Boolean).length}</strong>
        </div>
      </div>
      <div class="button-row">
        <button class="primary-button" id="restartLevels" type="button">레벨 다시 풀기</button>
        <button class="secondary-button" id="restartAll" type="button">처음부터</button>
      </div>
    </article>
  `;

  document.querySelector("#restartLevels").addEventListener("click", () => {
    state.scores = { tutorial: 3 };
    state.stage = "level1";
    state.feedback = null;
    render();
  });

  document.querySelector("#restartAll").addEventListener("click", resetAll);
}

function renderScore() {
  const sum = Object.entries(state.scores)
    .filter(([key]) => key !== "tutorial")
    .reduce((total, [, score]) => total + score, 0);
  const completed = levels.filter((level) => state.scores[level.id]).length;
  totalScore.textContent = sum;
  completedCount.textContent = `${completed}/${levels.length}`;
}

function resetAll() {
  state.stage = "tutorial";
  state.tutorialStep = 0;
  state.tutorialPassed = false;
  state.tutorialFailures = {};
  state.scores = {};
  state.feedback = null;
  render();
}

resetButton.addEventListener("click", resetAll);

document.addEventListener("click", (event) => {
  if (event.target && event.target.id === "retryButton") {
    state.feedback = null;
    render();
  }
});

render();
