document.addEventListener('DOMContentLoaded', (e) => {
    console.log('hello world!', e.BUBBLING_PHASE, e.CAPTURING_PHASE)
    alert('Hello world!');
}, true);