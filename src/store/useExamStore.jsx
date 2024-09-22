import { create } from "zustand";

export const useExamStore = create((set) => ({
  examAnswers: JSON.parse(localStorage.getItem("examAnswers")) || {},

  setExamAnswers: (examId, answers) =>
    set((state) => ({
      examAnswers: {
        ...state.examAnswers,
        [examId]: {
          ...state.examAnswers[examId],
          ...answers,
        },
      },
    })),

  setExamAnswersByQuestion: (examId, questionId, answer) => {
    set((state) => {
      const updatedExamAnswers = {
        ...state.examAnswers[examId],
        [questionId]: { ...answer },
      };

      const newState = {
        ...state.examAnswers,
        [examId]: updatedExamAnswers,
      };

      localStorage.setItem("examAnswers", JSON.stringify(newState));

      return { examAnswers: newState };
    });
  },

  setExamAnswerType: (examId, questionId, newType) => {
    set((state) => {
      const currentAnswer = state.examAnswers[examId]?.[questionId];
      if (!currentAnswer) return;

      const updatedExamAnswers = {
        ...state.examAnswers[examId],
        [questionId]: {
          ...currentAnswer,
          type: newType,
        },
      };

      const newState = {
        ...state.examAnswers,
        [examId]: updatedExamAnswers,
      };

      localStorage.setItem("examAnswers", JSON.stringify(newState));
      return { examAnswers: newState };
    });
  },
}));
