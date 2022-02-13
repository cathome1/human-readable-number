words = {
  "0": "zero",
  "1": "one",
  "2": "two",
  "3": "three",
  "4": "four",
  "5": "five",
  "6": "six",
  "7": "seven",
  "8": "eight",
  "9": "nine",
  "10": "ten",
  "11": "eleven",
  "12": "twelve",
  "13": "thirteen",
  "14": "fourteen",
  "15": "fifteen",
  "16": "sixteen",
  "17": "seventeen",
  "18": "eighteen",
  "19": "nineteen",
  "20": "twenty",
  "30": "thirty",
  "40": "forty",
  "50": "fifty",
  "60": "sixty",
  "70": "seventy",
  "80": "eighty",
  "90": "ninety",
}
function toReadable(num) {
  switch (true){
    case (num<=20):
        a = words[num];
    case (20<num<100):
        if(num%10==0) a = words[num-num%10]
        else a = words[num-num%10] +" "+words[num%10]
    case (100<=num<=999):
        if(num%100==0) a = words[num/100] + " " +"hundred"
        else a = words[Math.floor(num/100)] +" hundred" +" " + (num%100>20? words[num%100-num%10] +" "+words[num%10] : words[num%100])
  }
  return a
}

module.exports = {
    toReadable
}
