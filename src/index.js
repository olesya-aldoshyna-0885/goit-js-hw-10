import './css/styles.css';

const DEBOUNCE_DELAY = 300;
const refs = getRefs();

refs.inputEl.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));