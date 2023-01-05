window.events = {};

const subscribe = (event, callback) => {
  if (!window.events[event]) window.events[event] = [];
  window.events[event].push(callback);
};

const unsubscribe = (event, callback) => {
  const eventRef = window.events[event];
  if (!eventRef) return;
  const listenerIndex = eventRef.findIndex((cb) => cb === callback);
  if (listenerIndex >= 0) eventRef.splice(listenerIndex, 1);
};

const dispatch = (event, payload) => {
  if (!window.events[event]) return;
  window.events[event].forEach((callback) => callback(payload));
};
