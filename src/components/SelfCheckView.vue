<template>
  <div class="header">
    <router-link to="/settings" class="nav-btn">设置</router-link>
    <div class="main-title">
      <h1>{{ mainTitle }}</h1>
      <p class="role-info">{{ role }}</p>
    </div>
    <button @click="refreshQuestions" class="nav-btn">重置</button>
  </div>
  <div class="content">
    <div v-if="currentQuestion < questions.length">
      <h2 @click="toggleDetails">{{ currentQuestion + 1 }}、{{ questions[currentQuestion].title }} ℹ️ </h2>
      <div v-if="showDetails" class="question-details">
        {{ questions[currentQuestion].details }}
      </div>

      <div class="buttons">
        <button class="action-btn" @click="nextQuestion('不涉及')">不涉及</button>
        <button class="action-btn" @click="nextQuestion('已确认')">已确认</button>
        <button class="action-btn" @click="nextQuestion('需复查')">需复查</button>
      </div>
    </div>
    <div v-else>
      <h2>自查小结：</h2>
      <div v-for="(items, answerType) in filteredAnswers" :key="answerType">
        <h3>{{ answerType }}</h3>
        <p>{{ items.join(', ') }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { SelfCheckAssistant } from './SelfCheckAssistant.js';

export default SelfCheckAssistant;
</script>

<style src="../styles/main.css"></style>
