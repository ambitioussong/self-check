import { useRouter } from 'vue-router';
import defaultQuestions from '../dataConfigs/defaultQuestions.json';

export default {
  setup() {
    const router = useRouter();

    const loadQuestions = (event) => {
      const file = event.target.files[0];
      if (file && file.type === "application/json") {
        const reader = new FileReader();
        reader.onload = (e) => {
          try {
            const questions = JSON.parse(e.target.result);
            // Store the questions in a global state or local storage
            localStorage.setItem('customQuestions', JSON.stringify(questions));
            // Redirect to the SelfCheckView
            router.push('/');
            console.log("load custom file successfully");
          } catch (error) {
            console.error("Error parsing JSON:", error);
          }
        };
        reader.readAsText(file);
      } else {
        console.error("Invalid file type. Please upload a JSON file.");
      }
    };

    const downloadSample = () => {
      const blob = new Blob([JSON.stringify(defaultQuestions, null, 2)], { type: 'application/json' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'defaultQuestions.json';
      link.click();
      URL.revokeObjectURL(link.href);
    };

    return {
      loadQuestions,
      downloadSample
    };
  }
};
