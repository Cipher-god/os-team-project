const text = 'Welcome to our OS Team Project Website';
let i = 0;
const typing = () => {
    if (i < text.length) {
      document.getElementById("heading").innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, 100);
    }
}
let i2 = 0;
const text2 = '\nCalculate Process Scheduling Algorithms';
const typing2 = () => {
    if (i2 < text2.length) {
      document.getElementById("algo").innerHTML += text2.charAt(i2);
      i2++;
      setTimeout(typing2, 100);
    }
}
typing();
typing2();