import defaultQuestions from '../dataConfigs/defaultQuestions.json';

export const SelfCheckAssistant = {
  data() {
    return {
      showDetails: false,
      role: defaultQuestions.role,
      mainTitle: defaultQuestions.title,
      currentQuestion: 0,
      questions: defaultQuestions.questions,
      checklist: [],
      answers: {
        不涉及: [],
        已确认: [],
        需复查: []
      }
    };
  },
  mounted() {
    const customQuestions = localStorage.getItem('customQuestions');
    if (customQuestions) {
      const parsedQuestions = JSON.parse(customQuestions);
      this.role = parsedQuestions.role;
      this.mainTitle = parsedQuestions.title;
      this.questions = parsedQuestions.questions;
    }
  },
  computed: {
    filteredAnswers() {
      return Object.entries(this.answers)
        // eslint-disable-next-line no-unused-vars
        .filter(([_, items]) => items.length > 0)
        .reduce((acc, [key, value]) => ({
          ...acc,
          [key]: value
        }), {});
    }
  },
  methods: {
    nextQuestion(answer) {
      const question = this.questions[this.currentQuestion];
      const content = `${question.title.replace('？', '')} (${question.details})`;
      this.answers[answer].push(content);
      this.currentQuestion++;
    },
    toggleDetails() {
      this.showDetails = !this.showDetails;
    },
    goToSettings() {
      // 这里可以使用vue-router跳转到设置页面，或者其他逻辑
      alert('TODO：支持上传、加载自定义自查清单');
    },
    refreshQuestions() {
      this.currentQuestion = 0;
      this.answers = {
        不涉及: [],
        已确认: [],
        需复查: []
      };
      this.showDetails = false;
    }
  }
};
