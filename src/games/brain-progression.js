import getRandomNum from "../utils.js";
import startGame from "../index.js";

const rules = 'What number is missing in the progression?';

const getProgression = () => {
  const lengthMax = 10;
  const lengthMin = 5;

  const step = getRandomNum(lengthMax);
  const seqBegin = getRandomNum(100);
  const seqMaxLength = getRandomNum(lengthMax, lengthMin);

  const sequence = [];
  let currentElement = seqBegin;

  while (sequence.length < seqMaxLength) {
    sequence.push(currentElement);
    currentElement += step;
  }

  return sequence;
};

const getQuestionAnswer = () => {

  const progression = getProgression();
  const hiddenNum = progression.length - 1;

  const answer = progression[hiddenNum];

  progression[hiddenNum] = '..';
  const question = progression.join(' ');

  return [question, answer];
};

export default () => { startGame(rules, getQuestionAnswer); };
