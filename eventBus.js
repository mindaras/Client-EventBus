window.events = {};

const subscribe = (event, callback) => {
  if (!window.events[event]) window.events[event] = [];
  window.events[event].push(callback);
};

const unsubscribe = (event, callback) => {
  if (!window.events[event]) return;
  const listenerIndex = window.events[event].findIndex((cb) => cb === callback);
  if (listenerIndex >= 0) window.events[event].splice(listenerIndex, 1);
  if (!window.events[event].length) delete window.events[event];
};

const dispatch = (event, payload) => {
  if (!window.events[event]) return;
  window.events[event].forEach((callback) => callback(payload));
};
