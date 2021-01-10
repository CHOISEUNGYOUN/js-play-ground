export const useFullscreen = (callback) => {
  const element = useRef();
  const runCb = (isFull) => {
    if (callback && typeof callback === "function") {
      callback(isFull);
    }
  };
  const triggerFull = () => {
    if (element.current) {
      if (element.current.requestFullscreen) {
        element.current.requestFullscreen();
      } else if (element.current.mozRequestFullScreen) {
        element.current.mozRequestFullScreen();
      } else if (element.current.webkitRequestFullscreen) {
        element.current.webkitRequestFullscreen();
      } else if (element.current.msRequestFullscreen) {
        element.current.msRequestFullscreen();
      }
      runCb(true);
    };
  };
  const exitFull = () => {
    document.exitFullscreen();
    if (document) {
      if (document.requestFullscreen) {
        document.requestFullscreen();
      } else if (document.mozRequestFullScreen) {
        document.mozRequestFullScreen();
      } else if (document.webkitRequestFullscreen) {
        document.webkitRequestFullscreen();
      } else if (document.msRequestFullscreen) {
        document.msRequestFullscreen();
      }
      runCb(false);
    };
  };
  return { element, triggerFull, exitFull };
};
