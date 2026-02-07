export const useAuth = () => {
  const isLogged = ref(false);
  const checkAuth = () => {
    const auth = localStorage.getItem("auth");
    if (auth) {
      const data = JSON.parse(auth);
      isLogged.value = data.isLogin === true;
    } else {
      isLogged.value = false;
    }
  };
  const notifyAuthChange = () => {
    window.dispatchEvent(new Event("auth-change"));
  };
  onMounted(() => {
    checkAuth();
    window.addEventListener("storage", checkAuth);
    window.addEventListener("auth-change", checkAuth);
  });
  return { isLogged, checkAuth, notifyAuthChange };
};
