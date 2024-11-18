const HARD_TO_READ = 20;
const VERY_HARD_TO_READ = 25;
const SPACE_CHECK_WORD_REPLICATION = 20;
const config = [
   {
      key: 'adverbs',
      keywords: ["accidentally", "accusingly", "achingly", "adventurously", "amazingly", "angrily", "annoyingly", "anxiously", "arrogantly", "audibly", "awkwardly", "badly", "bashfully", "beautifully", "bitterly", "bleakly", "blindly", "blissfully", "boastfully", "boldly", "bravely", "briefly", "brightly", "briskly", "broadly", "busily", "calmly", "carefully", "carelessly", "casually", "cautiously", "certainly", "cheerfully", "clearly", "cleverly", "closely", "coaxingly", "colorfully", "commonly", "coolly", "correctly", "courageously", "coyly", "crazily", "crossly", "cruelly", "curiously", "daintily", "daringly", "deafeningly", "dearly", "deeply", "defiantly", "deftly", "dejectedly", "deliberately", "delightfully", "desperately", "determinedly", "devotedly", "diligently", "doubtfully", "dramatically", "dreamily", "dutifully", "eagerly", "ear-splittingly", "easily", "elegantly", "emphatically", "energetically", "enormously", "enthusiastically", "enviously", "especially", "excitedly", "expeditiously", "faintly", "faithfully", "famously",
         "ferociously", "fervently", "fiercely", "fleetingly", "fondly", "foolishly", "fortunately", "frankly", "frantically", "freely", "frightfully", "fully", "furiously", "generally", "generously", "gently", "gladly", "gleefully", "gracefully", "gradually", "gratefully", "greatly", "greedily", "haltingly", "happily", "harshly", "hastily", "heartily", "heavily", "helplessly", "highly", "honestly", "hopelessly", "hungrily", "hurriedly", "immediately", "inadequately", "inaudibly", "increasingly", "innocently", "inquisitively", "instantly", "intensely", "interestingly", "inwardly", "irritably", "jealously", "jovially", "joyfully", "joylessly", "jubilantly", "justly", "keenly", "kindheartedly", "kindly", "knavishly", "knowingly", "languidly", "lazily", "leisurely", "lightly", "lively", "loftily", "longingly", "loosely", "loudly", "lovingly", "loyally", "luckily", "madly", "majestically", "meaningfully", "mechanically", "merrily", "miserably", "mockingly", "morosely", "mortally", "mysteriously", "naturally", "neatly", "nervously",
         "noiselessly", "noisily", "obediently", "obnoxiously", "oddly", "officially", "openly", "optimistically", "overconfidently", "painfully", "partially", "patiently", "perfectly", "physically", "playfully", "politely", "poorly", "potentially", "powerfully", "promptly", "properly", "proudly", "punctually", "quaintly", "queasily", "queerly", "questionably", "quickly", "quietly", "quizzically", "rapidly", "ravenously", "readily", "reassuringly", "recklessly", "regularly", "reluctantly", "repeatedly", "reproachfully", "resonantly", "resoundingly", "restfully", "restlessly", "righteously", "rightfully", "rigidly", "roughly", "rudely", "sadly", "safely", "scarcely", "scarily", "searchingly", "sedately", "seemingly", "seldom", "selfishly", "separately", "seriously", "shakily", "sharply", "sheepishly", "shrilly", "shyly", "silently", "sleepily", "slowly", "smoothly", "softly", "solemnly", "solidly", "soundlessly", "speedily", "stealthily", "sternly", "strictly", "stubbornly", "stupidly", "suddenly", "supposedly", "surprisingly",
         "suspiciously", "sweetly", "swiftly", "sympathetically", "tediously", "tenderly", "tensely", "terribly", "thankfully", "thoroughly", "thoughtfully", "thunderously", "tightly", "tremendously", "truly", "truthfully", "ultimately", "unaccountably", "unbearably", "unexpectedly", "unfortunately", "unhappily", "unnecessarily", "unwillingly", "uproariously", "urgently", "vacantly", "vaguely", "vainly", "valiantly", "vastly", "viciously", "victoriously", "violently", "vivaciously", "vociferously", "warmly", "weakly", "wearily", "wholly", "wildly", "wisely", "wonderfully", "wrongly", "youthfully"],
      className: 'bg-[#FAEDCB] dark:bg-orange-500',
      name: 'Adverb',
      names: 'Adverbs',
      tooltip: `It's a Adverbs`,
   },
   {
      key: 'passive-voice',
      keywords: [],
      className: 'bg-[#C9E4DE] dark:bg-lime-600',
      name: 'Passive voice',
      names: 'Passive voices',
      tooltip: `It's a Passsive voice`,
   },
   {
      key: 'complex-wording',
      keywords: ["aberration", "abrogate", "abstemious", "acrimonious", "acrimony", "altruism", "altruistic", "anachronism", "anachronistic", "antidisestablishmentarianism", "antinomianism", "antithesis", "antitransubstantiationalist", "arrant", "artless", "asperity", "autodidact", "belie", "bellicose", "benign", "blandishment", "bombastic", "brevity", "byzantine", "cacophony", "cajole", "capricious", "chagrin", "circumspect", "conciliate", "connecticutian", "consanguineous", "conundrum", "dearth", "debacle", "decadence", "demagogue", "diatribe", "dichotomy", "dilatory", "discombobulate", "disestablishmentarianism", "disparate", "ebullient", "eccentricity", "eclectic", "embourgeoisement", "enervate", "ephemeral", "epiphany", "epistemology", "equivocate", "esoteric", "exculpate", "facetious", "fastidious", "fatuous", "flippant", "floccinaucinihilipilification", "furtive", "gaffe", "garrulous", "gerrymander", "gobbledygook", "grandiloquence", "gregarious", "harangue", "hedonism", "hexakosioihexekontahexaphobia", "hippopotomonstrosesquipedaliophobia",
         "hoi polloi", "honorificabilitudinitatibus", "hubris", "hypothetical", "iconoclast", "idiosyncrasy", "idyllic", "immutable", "impedimenta", "impervious", "inchoate", "inconsequential", "incorrigible", "inculcate", "indefatigable", "indubitable", "ineffable", "inextricable", "inscrutable", "insuperable", "inundate", "invective", "jackasseries", "jaunty", "jejune", "jovial", "juxtapose", "kinetic", "kismet", "kleptocracy", "knell", "lachrymose", "liminal", "lithe", "llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch", "lugubrious", "magnanimous", "martinet", "maudlin", "melancholy", "mellifluous", "mendacious", "mercurial", "munificent", "myrmecophilous", "nebulous", "nefarious", "nihilism", "nocturnal", "nonplussed", "obdurate", "obfuscate", "obstreperous", "omphaloskepsis", "opaque", "oscillate", "ostensibly", "ostentatious", "palliate", "panache", "paradoxical", "paragon", "parsimony", "penury", "perfidious", "pernicious", "perspicacious", "pillory", "plenipotentiary", "pneumonoultramicroscopicsilicovolcanoconiosis",
         "polyphiloprogenitive", "precarious", "procrastination", "pseudopseudohypoparathyroidism", "psychotomimetic", "puissant", "pulchritudinous", "quandary", "quattuordecillion", "querulous", "quisling", "quixotic", "rambunctious", "rancorous", "recalcitrant", "replete", "reticent", "ribald", "sagacious", "salubrious", "schizophrenogenic", "serendipity", "supercalifragilisticexpialidocious", "superfluous", "surreptitious", "sybarite", "sycophant", "taciturn", "tantamount", "tergiversation", "torpor", "trepidation", "trichotillomania", "truculent", "truncate", "ubiquitous", "umbrage", "unabashed", "uncanny", "unctuous", "unfettered", "untoward", "vacillate", "vehement", "venerate", "veracity", "verisimilitude", "vicissitude", "vindicate", "welter", "whimsical", "winsome", "wistful", "xenogenesis", "xenophile", "xenophobia", "xenotransplantation", "xeric", "yearn", "yeoman", "yoke", "yokel", "zealot", "zeitgeist", "zenith", "zephyr"],
      className: 'bg-[#C9E4DE] dark:bg-emerald-600',
      name: 'Complex wording',
      names: 'Complex words',
      tooltip: `It's a complex wording`,
   },
   {
      key: 'hard-read',
      keywords: [],
      className: 'bg-[#DBCDF0] dark:bg-teal-400',
      name: 'Hard to read',
      names: 'Hard to reads',
      tooltip: `It's a hard to read`,
   },
   {
      key: 'very-hard-read',
      keywords: [],
      className: 'bg-[#F2C6DE] dark:bg-fuchsia-500',
      name: 'Very hard to read',
      names: 'Very hard to reads',
      tooltip: `It's a very hard to read`,
   },

   {
      key: 'char-repetition',
      keywords: [],
      className: 'bg-[#FAD6CB] dark:bg-yellow-500',
      name: 'Character repetition',
      names: 'Characters repetition',
      tooltip: `It's a Character repetition`,
   },
   {
      key: 'word-repetition',
      keywords: [],
      className: 'bg-[#F8C4B4] dark:bg-red-400',
      name: 'Word repetition',
      names: 'Words repetition',
      tooltip: `It's a word replication`,
   },
   {
      key: 'bad-style',
      keywords: ['!!', '....', '!?', '??', '?!', 'whats', 'free trail', 'cant'],
      className: 'bg-[#F6B19C] dark:bg-sky-400',
      name: 'Bad style',
      names: 'Bad styles',
      tooltip: `It's a bad style`,
      skipCheckSpace: true,
   },
   {
      key: 'strong-word',
      keywords: ['good', 'the best', 'benchmark'],
      className: 'bg-[#CBFAD6] dark:bg-green-600',
      name: 'Strong word',
      names: 'Strong words',
      tooltip: `It's a Strong word`,
   },
   {
      key: 'weak-word',
      keywords: ['bad', 'cheap', 'poor', 'could be'],
      className: 'bg-[#CBD8FA] dark:bg-green-300',
      name: 'Weak word',
      names: 'Weak words',
      tooltip: `It's a Weak word`,
   },
];
const skipCheck = ['hard-read', 'very-hard-read'];
const skipCheckRepetition = ['a', 'an', 'and', 'are', 'as', 'at', 'be', 'but', 'by', 'for', 'if', 'in', 'into', 'is', 'it', 'no', 'not', 'of', 'on', 'or', 'such', 'that', 'the', 'their', 'then', 'there', 'these', 'they', 'this', 'to', 'was', 'will', 'with', 'you'];
let tooltips = [];

const VERBS_3 = [
   'awoken',
   'been',
   'beaten',
   'become',
   'begun',
   'bent',
   'bet',
   'bid',
   'bitten',
   'blown',
   'broken',
   'brought',
   'broadcast',
   'built',
   'burned',
   'bought',
   'caught',
   'chosen',
   'come',
   'cost',
   'cut',
   'dug',
   'done',
   'drawn',
   'dreamed',
   'driven',
   'drunk',
   'eaten',
   'fallen',
   'felt',
   'fought',
   'flown',
   'forgotten',
   'forgiven',
   'frozen',
   'got',
   'gotten',
   'given',
   'gone',
   'grown',
   'hung',
   'had',
   'heard',
   'hidden',
   'hit',
   'held',
   'hurt',
   'kept',
   'known',
   'laid',
   'led',
   'learned',
   'left',
   'lent',
   'let',
   'lain',
   'lost',
   'made',
   'meant',
   'met',
   'paid',
   'put',
   'read',
   'ridden',
   'rung',
   'risen',
   'run',
   'said',
   'seen',
   'sold',
   'sent',
   'showed',
   'shut',
   'sung',
   'sunk',
   'sat',
   'slept',
   'spoken',
   'spent',
   'stood',
   'stunk',
   'swum',
   'taken',
   'taught',
   'torn',
   'told',
   'thought',
   'thrown',
   'understood',
   'woken',
   'worn',
   'won',
   'written',
].join('|');

const keywords = config.reduce((item, current) => {
   return [
      ...item,
      ...current.keywords,
   ]
}, []);

let Inline = Quill.import('blots/inline');
class SpanBlock extends Inline {
   static create({ className, key }) {
      let node = super.create();
      node.setAttribute('class', `text-highlight ${className}`);
      node.setAttribute('data-key', key);
      return node;
   }
   static formats(node) {
      return node.getAttribute('class') || true;
   }
}
class HardToRead extends Inline {
   static create({ className, key }) {
      let node = super.create();
      node.setAttribute('class', `text-highlight ${className}`);
      node.setAttribute('data-key', key);
      return node;
   }
   static formats(node) {
      return node.getAttribute('class') || true;
   }
}

SpanBlock.blotName = 'highlight';
SpanBlock.tagName = 'span';
HardToRead.blotName = 'hard-to-read';
HardToRead.tagName = 'span';
Quill.register(SpanBlock);
Quill.register(HardToRead);

const toolbarOptions = [[{ 'size': ['small', false, 'large', 'huge'] }], ['bold', 'italic', 'underline', 'link']];

const Delta = Quill.import('delta');

const quill = new Quill('#editor', {
   modules: {
      toolbar: toolbarOptions,
      clipboard: {
         matchers: [
            [Node.ELEMENT_NODE, function (node, delta) {
               return delta.compose(new Delta().retain(delta.length(),
                  {
                     color: false,
                     background: false,
                     bold: false,
                     strike: false,
                     underline: false
                  }
               ));
            }
            ]
         ]
      }
   },
   theme: 'snow',
},);

const labelTemplate = `<div class="rounded p-2 __className__">
                           <p class="text-sm">
                              <span class="font-bold rounded-sm px-1" data-result="__key__">0</span>
                              <span id="label-__key__">__name__</span>
                           </p>
                       </div>`;
config.forEach(item => {
   const list = document.querySelector('#label-list');
   const label = labelTemplate.replace(/__className__/g, item.className)
      .replace(/__name__/g, item.name)
      .replace(/__key__/g, item.key);
   list.insertAdjacentHTML('beforeend', label);
})
let isUpdate = false;
let timer;
let timeout = 50;
document.querySelector('#editor').addEventListener('keyup', function (e) {
   clearTimeout(timer);
   timer = setTimeout(handleTextChange, timeout);
});

const handleTextChange = () => {
   if (isUpdate) {
      return;
   }
   const text = quill.getText();
   isUpdate = true;
   quill.formatText(0, text.length, 'highlight', false);
   quill.formatText(0, text.length, 'hard-to-read', false);
   isUpdate = false;
   checkHardRead(text);
   checkWordRepetition(text);
   checkPassive(text);
   isUpdate = true;
   config.forEach(item => {
      item.keywords.forEach(keyword => {
         const positions = getIndexText(keyword, text, item.skipCheckSpace);
         if (positions.length) {
            handleUpdateFormat(positions, keyword.length, item.className, item.key);
         }
      })
   });
   isUpdate = false;
   checkRepetition(text);
   updateInfo(text);
   updateCountKeyword();
   updateStrength();

   setTooltip();
}
handleTextChange();
function setTooltip() {
   if (!document.querySelector('[data-tippy-root]')) {
      config.forEach(item => {
         if (!item.tooltip) return;
         return tippy(`[data-key="${item.key}"]`, {
            theme: 'light-border',
            inertia: true,
            animation: 'scale',
            content: item.tooltip,
            followCursor: true,
         });
      });
   }
}
function updateCountKeyword() {
   config.forEach(item => {
      if (skipCheck.includes(item.key)) return;
      const count = document.querySelectorAll(`span[data-key="${item.key}"]`).length;
      document.querySelector(`[data-result="${item.key}"]`).innerHTML = count;
      document.querySelector('#label-' + item.key).innerHTML = count === 1 ? item.name : item.names;
   });
}
function checkRepetition(text) {
   const words = text.toLowerCase().split(/\s+/).filter(word => word.length > 2);
   let index = 0;
   isUpdate = true;
   for (let i = 0; i < words.length - 1; i++) {
      const current = words[i];
      const next = words[i + 1];
      let result = {
         start: [],
         end: [],
      }
      const positions = getIndexText(current, text).filter(position => position >= index);
      positions.every(currentIndex => {
         let nextIndex = currentIndex + current.length;
         while (text[nextIndex] === ' ') {
            nextIndex++;
         }

         if (text.slice(nextIndex, nextIndex + next.length) === next) {
            if (current.slice(0, 2) === next.slice(0, 2)) {
               result.start.push({ currentIndex, nextIndex });
            }
            if (current.replace(/[^\w\s]/gi, '').slice(-2) === next.replace(/[^\w\s]/gi, '').slice(-2)) {
               const charCurrentLength = current.match(/[^\w\s]/g)?.length ?? 0;
               const charNextLength = next.match(/[^\w\s]/g)?.length ?? 0;
               result.end.push({
                  currentIndex: currentIndex + current.length - (2 + charCurrentLength),
                  nextIndex: nextIndex + next.length - (2 + charNextLength),
               });
            }
         }
         return true;
      });
      const charRepetition = config.find(item => item.key === 'char-repetition');
      result.start.forEach(({ currentIndex, nextIndex }) => {
         handleUpdateFormat([currentIndex, nextIndex], 2, charRepetition.className, 'char-repetition');
      });
      result.end.forEach(({ currentIndex, nextIndex }) => {
         handleUpdateFormat([currentIndex, nextIndex], 2, charRepetition.className, 'char-repetition');
      });
      index += words[i].length;
   }
   isUpdate = false;
}
function checkWordRepetition(text) {
   const indexes = findDuplicate(text.toLowerCase().trim());
   const configWordReplication = config.find(item => item.key === 'word-repetition');
   isUpdate = true;
   indexes.forEach(({ word, indexes }) => {
      handleUpdateFormat(indexes, word.length, configWordReplication.className, 'word-repetition');
   })
   isUpdate = false;
}
function findDuplicate(text) {
   const words = text.split(/\s+/).filter(item => !skipCheckRepetition.includes(item) && item.trim());
   const indexes = [];
   for (const word of words) {
      const length = word.length;
      if (word === indexes.find(item => item.word === word)?.word) {
         continue;
      }
      let currentIndexes = [];
      let index;
      while (index !== -1) {
         index = text.indexOf(word, index + 1);
         if (index !== -1) {
            currentIndexes.push(index);
         }
      }
      let removeIndexes = [];
      for (const currentIndex of currentIndexes) {
         const preChar = text[currentIndex - 1];
         const nextChar = text[currentIndex + length] ?? true;
         if (!preChar || !nextChar) {
            continue;
         }
         const isPreChar = /[a-zA-Z0-9]/.test(preChar);
         const isNextChar = /[a-zA-Z0-9]/.test(nextChar);
         if (isPreChar || isNextChar) {
            removeIndexes.push(currentIndex);
         }
      }
      currentIndexes = [...currentIndexes.filter(index => !removeIndexes.includes(index))];
      for (let i = 0; i < currentIndexes.length; i++) {
         if (removeIndexes.includes(currentIndexes[i])) {
            continue;
         }
         const prevIndex = currentIndexes[i - 1];
         const nextIndex = currentIndexes[i + 1];
         const currentIndex = currentIndexes[i];
         if (!text[currentIndex + length]) {
            continue;
         }

         const prevSpaceText = text.substring(prevIndex + length, currentIndexes[i] + length);
         const nextSpaceText = text.substring(currentIndex + length, nextIndex + length);

         let prevSpace = prevSpaceText.includes('\n\n') ? -1 : prevSpaceText.match(/\b\w+\b/g)?.length;;
         let nextSpace = nextSpaceText.includes('\n\n') ? -1 : nextSpaceText.match(/\b\w+\b/g)?.length;

         if (
            (prevSpace >= SPACE_CHECK_WORD_REPLICATION || prevSpace === -1) &&
            (nextSpace >= SPACE_CHECK_WORD_REPLICATION || nextSpace === -1)
         ) {
            removeIndexes.push(currentIndexes[i]);
         }
      }
      currentIndexes = [...currentIndexes.filter(index => !removeIndexes.includes(index))];
      if (currentIndexes.length > 1) {
         indexes.push({ word, indexes: currentIndexes });
      }
   }
   return indexes;
}

function getPassive(sentence) {
   const regex = new RegExp(`\\b(be|been|being|is|are|was|were)\\b\\s+(?:(?:${VERBS_3})|(?:\\w+(ed|en)))(?:\\s+(?:by|with))?\\b`, 'gi');
   return sentence.match(regex);
}
function checkPassive(text) {
   const passives = getPassive(text);
   if (!passives) {
      return;
   }
   isUpdate = true;
   let lastIndex = -1;
   const configPassive = config.find(item => item.key === 'passive-voice');
   passives.forEach(passive => {
      const start = text.indexOf(passive, lastIndex);
      handleUpdateFormat([start], passive.length, configPassive.className, configPassive.key);
      lastIndex = start + passive.length;
   })
   isUpdate = false;
}
function checkHardRead(text) {
   const sentences = text.split('.').map(sentence => sentence.trim()).filter(sentence => sentence);
   let lastIndex = -1;
   const countHardToRead = sentences.filter(sentence => {
      const count = sentence.split(/\s+/).filter(word => word.trim()).length;
      return count >= HARD_TO_READ && count < VERY_HARD_TO_READ;
   }).length;
   const countVeryHardToRead = sentences.filter(sentence => {
      const count = sentence.split(/\s+/).filter(word => word.trim()).length;
      return count >= VERY_HARD_TO_READ;
   }).length;

   const hard = config.find(item => item.key === 'hard-read');
   const veryHard = config.find(item => item.key === 'very-hard-read');

   document.querySelector(`[data-result="hard-read"]`).innerHTML = countHardToRead;
   document.querySelector(`[data-result="very-hard-read"]`).innerHTML = countVeryHardToRead;
   document.querySelector('#label-hard-read').innerHTML = countHardToRead === 1 ? hard.name : hard.names;
   document.querySelector('#label-very-hard-read').innerHTML = countVeryHardToRead === 1 ? veryHard.name : veryHard.names;
   isUpdate = true;

   sentences.forEach(sentence => {
      const start = text.indexOf(sentence, lastIndex);
      const thisFormat = quill.getFormat(start, sentence.length);
      if ('hard-to-read' in thisFormat) return;
      const words = sentence.split(/\s+/).filter(word => word.trim());
      if (words.length < HARD_TO_READ) return;
      lastIndex = start + sentence.length - 1;
      const className = words.length < VERY_HARD_TO_READ
         ? hard.className
         : veryHard.className;
      const key = words.length < VERY_HARD_TO_READ
         ? hard.key
         : veryHard.key;
      quill.formatText(start, sentence.length, 'hard-to-read', {
         className,
         key
      });
   });
   isUpdate = false;
}
function updateInfo(text) {
   text = text.trim();
   const characters = text.length;
   const words = text.length ? text.split(/\s+/).length : 0;
   const sentences = text.split('.').filter(Boolean).length;
   const paragraph = text.length ? text.split('\n').filter(item => item.trim()).length : 0;
   const letters = text.replace(/[^a-zA-Z0-9]/g, '').length;

   document.getElementById('content-characters').innerHTML = characters;
   document.getElementById('content-words').innerHTML = words;
   document.getElementById('content-sentences').innerHTML = sentences;
   document.getElementById('content-paragraphs').innerHTML = paragraph;
   document.getElementById('content-letters').innerHTML = letters;
}
function updateStrength() {
   const adverbs = +document.querySelector('[data-result="adverbs"]').textContent; //1
   const passiveVoice = +document.querySelector('[data-result="passive-voice"]').textContent;//2
   const complexWording = +document.querySelector('[data-result="complex-wording"]').textContent; //3
   const hardRead = +document.querySelector('[data-result="hard-read"]').textContent; //4
   const veryHardRead = +document.querySelector('[data-result="very-hard-read"]').textContent; //5
   const charRepetition = +document.querySelector('[data-result="char-repetition"]').textContent; //6
   const wordRepetition = +document.querySelector('[data-result="word-repetition"]').textContent; //7
   const strongWord = +document.querySelector('[data-result="strong-word"]').textContent; //8
   const badStyle = +document.querySelector('[data-result="bad-style"]').textContent; //9
   const weakWord = +document.querySelector('[data-result="weak-word"]').textContent; //10

   let strength = 100
      + strongWord
      - (adverbs + passiveVoice + complexWording + charRepetition + wordRepetition + badStyle + weakWord)
      + 2 * hardRead
      + 4 * veryHardRead;
   strength = Math.min(100, Math.max(0, strength));
   document.querySelector('#content-strength').innerHTML = strength;
}
function handleUpdateFormat(positions, length, className, key) {
   positions.forEach(position => {
      const thisFormat = quill.getFormat(position, length);
      if ('highlight' in thisFormat) return;
      if ('hard-to-read' in thisFormat) {
         const pre = quill.getText(position - 1, 1).trim();
         if (!pre) {
            quill.removeFormat(position - 1, length + 2, 'very-hard-read');
         } else {
            quill.removeFormat(position, length, 'very-hard-read');
         }
      };
      quill.formatText(position, length, 'highlight', { className, key });
   });
}
function getIndexText(keyword, sentence, skipCheckSpace = false) {
   const positions = [];
   keyword = keyword.toLowerCase();
   sentence = sentence.toLowerCase();
   let pos = sentence.indexOf(keyword);
   while (pos !== -1) {
      if (preIsSpace(pos, sentence) || skipCheckSpace) {
         positions.push(pos);
      }
      pos = sentence.indexOf(keyword, pos + keyword.length);
   }
   return positions;
}
function preIsSpace(index, text) {
   return /[ \n\t]/.test(text[index - 1]) || !text[index - 1];
}