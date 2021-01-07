export const useBeforeLeave = (onLeave) => {
  const handle = (event) => {
    const { clientY } = event;
    if (clientY <= 0) {
      onLeave();
    }
  };

  useEffect(() => {
    if (typeof onLeave !== "function") {
      return;
    }
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};
