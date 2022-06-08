
topics = {
  1: "Do you love working from homw or would you rather be in the office?",
  2: "What's the hardest part about working virtually for you? The easiest?",
  3: "Show us your office space",
  4: "How oftem do you work from bed?",
  5: "What's one skill that helps you successfully work remotely?",
  6: "What's your favorite way to get in some exercise?",
  7: "What does your morning routine look like when working from home?",
  8: "What's your number one tip for combating distractions when working from home?",
  9: "How do you stay productive and motivated working virtually?",
  10: "What does your typical work from home uniform look like?",
  11: "Are you an early bird or night owl?",
  12: "What about showers? Do you prefer morning or night",
  13: "What's one thing we could do to improve our virtual meetings?",
  14: "If you could learn one new personal skill, what would it be?",
  // Food
  15: "What did you eat for breakfast?",
  16: "What's your caffeinated beverage of choice? Coffee? Cola? Tea?",
  17: "If you could only pick three foods to eat for a month, which foods would you choose?",
  18: "What was your least favorite food as a child? do you still hate it or do you love it now?",
  19: "What is your favorite food?",
  20: "How many cups of coffee, tea or beverage-of-choice do you have each morning?",
  21: "What is your best recipe?",
  22: "What was your favorite recent meal, and why?",
  23: "What is your favorite local restaurant?",
  24: "Name a healthy food you enjoy and an unhealthy food that you find hard to resist?",
  25: "What is your favorite dessert?",
  // interesting fact
  26: "If you could spend the holidays in any location, where would it be?",
  27: "If you could live anywhere in the world, where would you live?",
  28: "What's one country you would love to visit and why?",
  29: "Where were you born? What is an interesting fact about your hometown?",
  30: "If you could be fluent in another language instantly, which would you choose, and why?",
  31: "What was your favorite class in school? Why?",
  32: "What is your most used emoji?",
  33: "What was the worst haircut you ever had?",
  34: "Have you ever been told you look like someone famous, who was it?",
  35: "Does your current car have a name? What is it?",
  36: "If aliens landed on earth tomorrow and offered to take you home with them, would you go?",
  37: "What's your favorite sandwich and why?",
  38: "What's the best vacation you have ever taken?",
  39: "What's an adventurous thing you've done?",
  40: "What's the next item on your bucket list?",
  41: "Do you have a favorite mug? Let us see it",
  42: "What's something you're looking forward to, and why?",
  43: "What's something you're worried about?",
  44: "What's something new or interesting you've learned recently?",
  45: "What's the weirdest thing in your fridge right now?",
  46: "Show us something in your space that you really like",
  47: "What simple thing still blow your mind?",
  48: "If you did not have to sleep, how would you spend the extra 8 hours?",
  49: "What's one rule your parents or guardians enforced when you were a kid?",
  50: "What's something people don't know about you?",
  51: "What's the most useful item you've purchased this year?",
  52: "If your were setting off to Mars and could take only one luxury item with you, what would it be?",
  53: "As a child, what did you want to be when you grew up?",
  54: "Which bucket list item do you most want to check off this year?",
  55: "What's an unusual tradition you or your family have?",
  56: "Would you rather spend a year in space or living on a submarine?",
  57: "What is one impportant skill that you think everyone should have?",
  58: "There are now 25 hours in a day! How do you spend your extra hour?",
  59: "What was the most fun thing you did last weekend?",
  60: "What is one thing you are lookig forward to doing when you retire?",
  61: "What is one of your greatest achievements?",
  62: "What activity helps you relieve stress? ",
  63: "What class did you take in school that helps you with your job?",
  64: "If you could have dinner with any famous person, who would you choose?",
  65: "If you could have any job in the world, what would you do?",
  66: "If you could be reincarnated as any animal, what would you be?",
  67: "If you could time travel, which period of time you would go back to visit?",
  68: "Which holidays is your favorite and why?",
  69: "If you won the loterry, what's the first thing you would buy?",
  70: "What do you hope to be doing in 10 years from now?",
  71: "If you could take a year off from work or school, what would you do?",
  72: "What is your favorite TV series for binge watching?",
  73: "What is your favorite line from a poem or song?",
  74: "Are you a cat person or a dog person?",
  75: "What was your favorite childhood cartoon?",
  76: "If you could have any super power, what would it be?",
  77: "What's your most sentimental gift that you have ever received?",
  78: "Would you rather go back in time, or be transported to be future?",
  79: "Would you rather have a quiet dinner with few friends, or party with 100 friends?",
  80: "What's your most annoying quality or habit?",
  81: "What's the bravest thing you have ever done?",
  82: "What kind of pets did you have growing up?",
  83: "If you could go back and do your college years over, what would you do differently?",
  84: "What's your favorite way to relax?",
  85: "What's your favorite party game?",
  86: "What is one non-work related goal that you would like to achieve in the next five years?",
  87: "You get to redecorate the conference room! What color do you paint these walls?",
  88: "Spring, summer, fall or winter: What's your favorite season and why?",
  89: "What is one interesting fact about your high school or college?", 
  90: "What's your favorite time of day: morning, afternoon, evening or late night?",
  91: "What is part of your daily routine that you look forward to everyday?",
  92: "What would you do if you came home and found a penguin in your freezer?",
  93: "What movie can you watch over and over again?",
  94: "Science fiction? Romantic comedy? What's your favorite movie genre?",
  95: "What's the last great TV show or movie you wanted?",
  96: "You have to sing karaoke, what song do you pick?",
  97: "Do you work better with or without music? What are you listening to while you work?",
  98: "What is your earliest holiday memory?",
  99: "How old were you when you learned that Santa-gaps-doesn't exist?",
  100: "Do you prefer gingerbread people or house?",
  101: "What is your favorite Christmas carol",
  102: "Does your family have any holiday traditions?",
  103: "Would you rather eat a candy cane that tastes like turkey, or turkey that tastes like candy cane?",
  104: "What's the best birthday or Christmas present you remember getting when you were a kid?",
};

additional_topics = {
};

Math.seed = function(s) {
  return function() {
      s = Math.sin(s) * 10000;
      return s - Math.floor(s);
  };
};

function date_of_the_year() {
  var now = new Date();
  var start = new Date(now.getFullYear(), 0, 0);
  var diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
  var oneDay = 1000 * 60 * 60 * 24;
  var day = Math.floor(diff / oneDay);
  var res = [now.getFullYear(), day];
  return res;
}


function start() {
  console.log("alvin");
  [year, day] = date_of_the_year();
  console.log("year and day: ", year, day);
  
  // usage for seed:
  const random1 = Math.seed(year);
  const random2 = Math.seed(random1());
  Math.random = Math.seed(random2());

  // const n = Math.floor(Math.random() * Object.keys(topics).length) + 1;
  list = Object.values(topics);
  list.sort(() => Math.random() - 0.5);
  // const complete_list = list.concat(Object.values(additional_topics));
  // console.log('complete_list length: ', Object.keys(complete_list).length);

  mod_number = Object.keys(topics).length;
  index = day % mod_number;
  
  console.log('random value: ', index, mod_number);
  document.getElementById("alvin").innerHTML = topics[index];
}

start();