<template>
  <div class="settings-container">
    
    <div class="settings-upload">
      <label for="upload">加载自定义自查清单：</label>
      <input type="file" id="upload" @change="loadQuestions" />
    </div>
    <button class="settings-button" @click="downloadSample">下载示例文件</button>
  </div>
</template>


<script src="./SettingsPage.js"></script>
<style src="./SettingsPage.css"></style>
