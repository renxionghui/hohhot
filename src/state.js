import { ref } from "@vue/reactivity";

export const isLogin = ref(sessionStorage.getItem("isLogin"));