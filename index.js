function myfun0() {
       if (document.querySelector('.h2').innerText === 'dark') {
              document.querySelector('.body_1').style="background-color: white;";
              document.querySelector('.h2').innerText = 'white';
              document.querySelector('.h2').style="background-color: aqua; width: 50px; height: 30px;border-radius: 12px;border: 2px solid aqua; margin: 0px 10px 0px 300px;  transform: translate(100px, -65px);";
              document.querySelector('.la').style="color: black; text-align: right;"; 
       } else {
              document.querySelector('.body_1').style="color: white; background-color: black;";
              document.querySelector('.h2').innerText = 'dark';
              document.querySelector('.la').style="color: white;  transform: translate(100px, -65px);";
       }
       
}         



function myfun(num) {
    document.getElementById("demo_p1").value += num;
}


  function myfun1() {
    if (document.querySelector('.d').innerText === 'OFF') {
        document.querySelector('.d1').style="display: none";
        document.querySelector('.d').innerText="ON";
    } else {
        document.querySelector('.d1').style="display: inline-block;";
        document.querySelector('.d').innerText="OFF";
    }
    
  }

function myfun12() {
    let num = document.querySelector('.in').value,
        num2;
       
if (num.includes(';')) {
        num2 = num.replace(';', '፤');
        document.querySelector(".in").value = num2;
} else if (num.includes('.')) {
        num2 = num.replace('.', '።');
        document.querySelector(".in").value = num2;
} else if (num.includes(',')) {
        num2 = num.replace(',', '፣');
        document.querySelector(".in").value = num2;
} else if (num.includes('ህu')) {
        num2 = num.replace('ህu', 'ሁ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ህe')) {
        num2 = num.replace('ህe', 'ሀ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ህi')) {
        num2 = num.replace('ህi', 'ሂ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ህa')) {
        num2 = num.replace('ህa', 'ሃ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ሀe')) {
        num2 = num.replace('ሀe', 'ሄ');
        document.querySelector(".in").value = num2;
} else if (num.includes('h')) {
        num2 = num.replace('h', 'ህ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ህo')) {
        num2 = num.replace('ህo', 'ሆ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ልe')) {
        num2 = num.replace('ልe', 'ለ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ልu')) {
        num2 = num.replace('ልu', 'ሉ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ልi')) {
        num2 = num.replace('ልi', 'ሊ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ልa')) {
        num2 = num.replace('ልa', 'ላ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ለe')) {
        num2 = num.replace('ለe', 'ሌ');
        document.querySelector(".in").value = num2;
} else if (num.includes('l')) {
        num2 = num.replace('l', 'ል');
        document.querySelector(".in").value = num2;
} else if (num.includes('ልo')) {
        num2 = num.replace('ልo', 'ሎ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ሕE')) {
        num2 = num.replace('ሕE', 'ሐ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ሕU')) {
        num2 = num.replace('ሕU', 'ሑ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ሕI')) {
        num2 = num.replace('ሕI', 'ሒ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ሕA')) {
        num2 = num.replace('ሕA', 'ሓ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ሐE')) {
        num2 = num.replace('ሐE', 'ሔ');
        document.querySelector(".in").value = num2;
} else if (num.includes('H')) {
        num2 = num.replace('H', 'ሕ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ሕO')) {
        num2 = num.replace('ሕO', 'ሖ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ምe')) {
        num2 = num.replace('ምe', 'መ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ምu')) {
        num2 = num.replace('ምu', 'ሙ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ምi')) {
        num2 = num.replace('ምi', 'ሚ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ምa')) {
        num2 = num.replace('ምa', 'ማ');
        document.querySelector(".in").value = num2;
} else if (num.includes('መe')) {
        num2 = num.replace('መe', 'ሜ');
        document.querySelector(".in").value = num2;
} else if (num.includes('m')) {
        num2 = num.replace('m', 'ም');
        document.querySelector(".in").value = num2;
} else if (num.includes('ምo')) {
        num2 = num.replace('ምo', 'ሞ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ምo')) {
        num2 = num.replace('ምo', 'ሞ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ሙa')) {
        num2 = num.replace('ሙa', 'ሟ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ሥE')) {
        num2 = num.replace('ሥE', 'ሠ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ሥU')) {
        num2 = num.replace('ሥU', 'ሡ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ሥI')) {
        num2 = num.replace('ሥI', 'ሢ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ሥA')) {
        num2 = num.replace('ሥA', 'ሣ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ሠE')) {
        num2 = num.replace('ሠE', 'ሤ');
        document.querySelector(".in").value = num2;
} else if (num.includes('S')) {
        num2 = num.replace('S', 'ሥ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ሥO')) {
        num2 = num.replace('ሥO', 'ሦ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ሡA')) {
        num2 = num.replace('ሡA', 'ሧ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ርe')) {
        num2 = num.replace('ርe', 'ረ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ርu')) {
        num2 = num.replace('ርu', 'ሩ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ርi')) {
        num2 = num.replace('ርi', 'ሪ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ርa')) {
        num2 = num.replace('ርa', 'ራ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ረe')) {
        num2 = num.replace('ረe', 'ሬ');
        document.querySelector(".in").value = num2;
} else if (num.includes('r')) {
        num2 = num.replace('r', 'ር');
        document.querySelector(".in").value = num2;
} else if (num.includes('ርo')) {
        num2 = num.replace('ርo', 'ሮ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ሩa')) {
        num2 = num.replace('ሩa', 'ሯ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ስe')) {
        num2 = num.replace('ስe', 'ሰ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ስu')) {
        num2 = num.replace('ስu', 'ሱ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ስi')) {
        num2 = num.replace('ስi', 'ሲ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ስa')) {
        num2 = num.replace('ስa', 'ሳ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ሰe')) {
        num2 = num.replace('ሰe', 'ሴ');
        document.querySelector(".in").value = num2;
} else if (num.includes('s')) {
        num2 = num.replace('s', 'ስ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ስo')) {
        num2 = num.replace('ስo', 'ሶ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ሱa')) {
        num2 = num.replace('ሱa', 'ሷ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ሽe')) {
        num2 = num.replace('ሽe', 'ሸ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ሽu')) {
        num2 = num.replace('ሽu', 'ሹ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ሽi')) {
        num2 = num.replace('ሽi', 'ሺ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ሽa')) {
        num2 = num.replace('ሽa', 'ሻ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ሸe')) {
        num2 = num.replace('ሸe', 'ሼ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ስ1')) {
        num2 = num.replace('ስ1', 'ሽ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ሽo')) {
        num2 = num.replace('ሽo', 'ሾ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ሹa')) {
        num2 = num.replace('ሹa', 'ሿ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ቅe')) {
        num2 = num.replace('ቅe', 'ቀ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ቅu')) {
        num2 = num.replace('ቅu', 'ቁ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ቅi')) {
        num2 = num.replace('ቅi', 'ቂ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ቅa')) {
        num2 = num.replace('ቅa', 'ቃ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ቀe')) {
        num2 = num.replace('ቀe', 'ቄ');
        document.querySelector(".in").value = num2;
} else if (num.includes('q')) {
        num2 = num.replace('q', 'ቅ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ቅo')) {
        num2 = num.replace('ቅo', 'ቆ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ቁa')) {
        num2 = num.replace('ቁa', 'ቋ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ብe')) {
        num2 = num.replace('ብe', 'በ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ብu')) {
        num2 = num.replace('ብu', 'ቡ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ብi')) {
        num2 = num.replace('ብi', 'ቢ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ብa')) {
        num2 = num.replace('ብa', 'ባ');
        document.querySelector(".in").value = num2;
} else if (num.includes('በe')) {
        num2 = num.replace('በe', 'ቤ');
        document.querySelector(".in").value = num2;
} else if (num.includes('b')) {
        num2 = num.replace('b', 'ብ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ብo')) {
        num2 = num.replace('ብo', 'ቦ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ቡa')) {
        num2 = num.replace('ቡa', 'ቧ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ቭe')) {
        num2 = num.replace('ቭe', 'ቨ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ቭu')) {
        num2 = num.replace('ቭu', 'ቩ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ቭi')) {
        num2 = num.replace('ቭi', 'ቪ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ቭa')) {
        num2 = num.replace('ቭa', 'ቫ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ቨe')) {
        num2 = num.replace('ቨe', 'ቬ');
        document.querySelector(".in").value = num2;
} else if (num.includes('v')) {
        num2 = num.replace('v', 'ቭ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ቭo')) {
        num2 = num.replace('ቭo', 'ቮ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ቩa')) {
        num2 = num.replace('ቩa', 'ቯ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ትe')) {
        num2 = num.replace('ትe', 'ተ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ትu')) {
        num2 = num.replace('ትu', 'ቱ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ትi')) {
        num2 = num.replace('ትi', 'ቲ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ትa')) {
        num2 = num.replace('ትa', 'ታ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ተe')) {
        num2 = num.replace('ተe', 'ቴ');
        document.querySelector(".in").value = num2;
} else if (num.includes('t')) {
        num2 = num.replace('t', 'ት');
        document.querySelector(".in").value = num2;
} else if (num.includes('ትo')) {
        num2 = num.replace('ትo', 'ቶ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ቱa')) {
        num2 = num.replace('ቱa', 'ቷ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ችe')) {
        num2 = num.replace('ችe', 'ቸ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ችu')) {
        num2 = num.replace('ችu', 'ቹ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ችi')) {
        num2 = num.replace('ችi', 'ቺ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ችa')) {
        num2 = num.replace('ችa', 'ቻ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ቸe')) {
        num2 = num.replace('ቸe', 'ቼ');
        document.querySelector(".in").value = num2;
} else if (num.includes('c')) {
        num2 = num.replace('c', 'ች');
        document.querySelector(".in").value = num2;
} else if (num.includes('ችo')) {
        num2 = num.replace('ችo', 'ቾ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ቹa')) {
        num2 = num.replace('ቹa', 'ቿ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ኅe')) {
        num2 = num.replace('ኅe', 'ኀ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ኅu')) {
        num2 = num.replace('ኅu', 'ኁ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ኅi')) {
        num2 = num.replace('ኅi', 'ኂ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ኅa')) {
        num2 = num.replace('ኅa', 'ኃ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ኀe')) {
        num2 = num.replace('ኀe', 'ኔ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ህ1')) {
        num2 = num.replace('ህ1', 'ኅ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ኅo')) {
        num2 = num.replace('ኅo', 'ኆ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ኁa')) {
        num2 = num.replace('ኁa', 'ኇ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ንe')) {
        num2 = num.replace('ንe', 'ነ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ንu')) {
        num2 = num.replace('ንu', 'ኑ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ንi')) {
        num2 = num.replace('ንi', 'ኒ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ንa')) {
        num2 = num.replace('ንa', 'ና');
        document.querySelector(".in").value = num2;
} else if (num.includes('ነe')) {
        num2 = num.replace('ነe', 'ኔ');
        document.querySelector(".in").value = num2;
} else if (num.includes('n')) {
        num2 = num.replace('n', 'ን');
        document.querySelector(".in").value = num2;
} else if (num.includes('ንo')) {
        num2 = num.replace('ንo', 'ኖ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ኑa')) {
        num2 = num.replace('ኑa', 'ኗ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ኝE')) {
        num2 = num.replace('ኝE', 'ኘ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ኝU')) {
        num2 = num.replace('ኝU', 'ኙ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ኝI')) {
        num2 = num.replace('ኝI', 'ኚ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ኝA')) {
        num2 = num.replace('ኝA', 'ኛ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ኘE')) {
        num2 = num.replace('ኘE', 'ኜ');
        document.querySelector(".in").value = num2;
} else if (num.includes('N')) {
        num2 = num.replace('N', 'ኝ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ኝO')) {
        num2 = num.replace('ኝO', 'ኞ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ኙA')) {
        num2 = num.replace('ኙA', 'ኟ ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ae')) {
        num2 = num.replace('ae', 'ኧ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ክe')) {
        num2 = num.replace('ክe', 'ከ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ክu')) {
        num2 = num.replace('ክu', 'ኩ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ክi')) {
        num2 = num.replace('ክi', 'ኪ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ክa')) {
        num2 = num.replace('ክa', 'ካ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ከe')) {
        num2 = num.replace('ከe', 'ኬ');
        document.querySelector(".in").value = num2;
} else if (num.includes('k')) {
        num2 = num.replace('k', 'ክ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ክo')) {
        num2 = num.replace('ክo', 'ኮ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ኩa')) {
        num2 = num.replace('ኩa', 'ኳ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ኽe')) {
        num2 = num.replace('ኽe', 'ኸ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ኽu')) {
        num2 = num.replace('ኽu', 'ኹ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ኽi')) {
        num2 = num.replace('ኽi', 'ኺ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ኽa')) {
        num2 = num.replace('ኽa', 'ኻ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ኸe')) {
        num2 = num.replace('ኸe', 'ኼ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ህ2')) {
        num2 = num.replace('ህ2', 'ኽ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ኽo')) {
        num2 = num.replace('ኽo', 'ኾ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ውe')) {
        num2 = num.replace('ውe', 'ወ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ውu')) {
        num2 = num.replace('ውu', 'ዉ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ውi')) {
        num2 = num.replace('ውi', 'ዊ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ውa')) {
        num2 = num.replace('ውa', 'ዋ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ወe')) {
        num2 = num.replace('ወe', 'ዌ');
        document.querySelector(".in").value = num2;
} else if (num.includes('w')) {
        num2 = num.replace('w', 'ው');
        document.querySelector(".in").value = num2;
} else if (num.includes('ውo')) {
        num2 = num.replace('ውo', 'ዎ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ዉa')) {
        num2 = num.replace('ዉa', 'not');
        document.querySelector(".in").value = num2;
} else if (num.includes('ዝe')) {
        num2 = num.replace('ዝe', 'ዘ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ዝu')) {
        num2 = num.replace('ዝu', 'ዙ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ዝi')) {
        num2 = num.replace('ዝi', 'ዚ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ዝa')) {
        num2 = num.replace('ዝa', 'ዛ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ዘe')) {
        num2 = num.replace('ዘe', 'ዜ');
        document.querySelector(".in").value = num2;
} else if (num.includes('z')) {
        num2 = num.replace('z', 'ዝ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ዝo')) {
        num2 = num.replace('ዝo', 'ዞ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ዙa')) {
        num2 = num.replace('ዙa', 'ዟ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ዝE')) {
        num2 = num.replace('ዥE', 'ዠ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ዥU')) {
        num2 = num.replace('ዥU', 'ዡ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ዥI')) {
        num2 = num.replace('ዥI', 'ዢ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ዥA')) {
        num2 = num.replace('ዥA', 'ዣ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ዠE')) {
        num2 = num.replace('ዠE', 'ዤ');
        document.querySelector(".in").value = num2;
} else if (num.includes('Z')) {
        num2 = num.replace('Z', 'ዥ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ዥO')) {
        num2 = num.replace('ዥO', 'ዦ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ዡA')) {
        num2 = num.replace('ዡA', 'ዧ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ይe')) {
        num2 = num.replace('ይe', 'የ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ይu')) {
        num2 = num.replace('ይu', 'ዩ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ይi')) {
        num2 = num.replace('ይi', 'ዪ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ይa')) {
        num2 = num.replace('ይa', 'ያ');
        document.querySelector(".in").value = num2;
} else if (num.includes('የe')) {
        num2 = num.replace('የe', 'ዬ');
        document.querySelector(".in").value = num2;
} else if (num.includes('y')) {
        num2 = num.replace('y', 'ይ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ይo')) {
        num2 = num.replace('ይo', 'ዮ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ድe')) {
        num2 = num.replace('ድe', 'ደ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ድu')) {
        num2 = num.replace('ድu', 'ዱ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ድi')) {
        num2 = num.replace('ድi', 'ዲ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ድa')) {
        num2 = num.replace('ድa', 'ዳ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ደe')) {
        num2 = num.replace('ደe', 'ዴ');
        document.querySelector(".in").value = num2;
} else if (num.includes('d')) {
        num2 = num.replace('d', 'ድ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ድo')) {
        num2 = num.replace('ድo', 'ዶ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ዱa')) {
        num2 = num.replace('ዱa', 'ዷ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ጅe')) {
        num2 = num.replace('ጅe', 'ጀ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ጅu')) {
        num2 = num.replace('ጅu', 'ጁ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ጅi')) {
        num2 = num.replace('ጅi', 'ጂ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ጅa')) {
        num2 = num.replace('ጅa', 'ጃ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ጀe')) {
        num2 = num.replace('ጀe', 'ጄ');
        document.querySelector(".in").value = num2;
} else if (num.includes('j')) {
        num2 = num.replace('j', 'ጅ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ጅo')) {
        num2 = num.replace('ጅo', 'ጆ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ጁa')) {
        num2 = num.replace('ጁa', 'ጇ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ግe')) {
        num2 = num.replace('ግe', 'ገ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ግu')) {
        num2 = num.replace('ግu', 'ጉ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ግi')) {
        num2 = num.replace('ግi', 'ጊ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ግa')) {
        num2 = num.replace('ግa', 'ጋ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ገe')) {
        num2 = num.replace('ገe', 'ጌ');
        document.querySelector(".in").value = num2;
} else if (num.includes('g')) {
        num2 = num.replace('g', 'ግ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ግo')) {
        num2 = num.replace('ግo', 'ጏ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ጉa')) {
        num2 = num.replace('ጉa', 'not');
        document.querySelector(".in").value = num2;
} else if (num.includes('ጥe')) {
        num2 = num.replace('ጥe', 'ጠ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ጥu')) {
        num2 = num.replace('ጥu', 'ጡ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ጥi')) {
        num2 = num.replace('ጥi', 'ጢ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ጥa')) {
        num2 = num.replace('ጥa', 'ጣ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ጠe')) {
        num2 = num.replace('ጠe', 'ጤ');
        document.querySelector(".in").value = num2;
} else if (num.includes('T')) {
        num2 = num.replace('T', 'ጥ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ጥo')) {
        num2 = num.replace('ጥo', 'ጦ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ጡa')) {
        num2 = num.replace('ጡa', 'ጧ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ጭe')) {
        num2 = num.replace('ጭe', 'ጨ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ጭu')) {
        num2 = num.replace('ጭu', 'ጩ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ጭi')) {
        num2 = num.replace('ጭi', 'ጪ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ጭa')) {
        num2 = num.replace('ጭa', 'ጫ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ጨe')) {
        num2 = num.replace('ጨe', 'ጬ');
        document.querySelector(".in").value = num2;
} else if (num.includes('C')) {
        num2 = num.replace('C', 'ጭ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ጭo')) {
        num2 = num.replace('ጭo', 'ጮ');
        document.querySelector(".in").value = num2;
        num2 = num.replace('a', 'ጯ');
} else if (num.includes('ጩa')) {
        num2 = num.replace('ጩa', 'ጯ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ጵe')) {
        num2 = num.replace('ጵe', 'ጰ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ጵu')) {
        num2 = num.replace('ጵu', 'ጱ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ጵi')) {
        num2 = num.replace('ጵi', 'ጲ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ጵa')) {
        num2 = num.replace('ጵa', 'ጳ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ጰe')) {
        num2 = num.replace('ጰe', 'ጴ');
        document.querySelector(".in").value = num2;
} else if (num.includes('p')) {
        num2 = num.replace('p', 'ጵ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ጵo')) {
        num2 = num.replace('ጵo', 'ጶ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ጱa')) {
        num2 = num.replace('ጱa', 'ጷ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ጽe')) {
        num2 = num.replace('ጽe', 'ጸ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ጽu')) {
        num2 = num.replace('ጽu', 'ጹ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ጽi')) {
        num2 = num.replace('ጽi', 'ጺ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ጽa')) {
        num2 = num.replace('ጽa', 'ጻ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ጸe')) {
        num2 = num.replace('ጸe', 'ጼ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ስ2')) {
        num2 = num.replace('ስ2', 'ጽ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ጽo')) {
        num2 = num.replace('ጽo', 'ጾ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ጹa')) {
        num2 = num.replace('ጹa', 'ጿ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ፅe')) {
        num2 = num.replace('ፅe', 'ፀ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ፅu')) {
        num2 = num.replace('ፅu', 'ፁ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ፅi')) {
        num2 = num.replace('ፅi', 'ፂ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ፅa')) {
        num2 = num.replace('ፅa', 'ፃ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ፀe')) {
        num2 = num.replace('ፀe', 'ፄ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ሥ1')) {
        num2 = num.replace('ሥ1', 'ፅ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ፅo')) {
        num2 = num.replace('ፅo', 'ፆ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ፁa')) {
        num2 = num.replace('ፁa', 'not');
        document.querySelector(".in").value = num2;
} else if (num.includes('ፍe')) {
        num2 = num.replace('ፍe', 'ፈ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ፍu')) {
        num2 = num.replace('ፍu', 'ፉ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ፍi')) {
        num2 = num.replace('ፍi', 'ፊ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ፍa')) {
        num2 = num.replace('ፍa', 'ፋ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ፈe')) {
        num2 = num.replace('ፈe', 'ፌ');
        document.querySelector(".in").value = num2;
} else if (num.includes('f')) {
        num2 = num.replace('f', 'ፍ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ፍo')) {
        num2 = num.replace('ፍo', 'ፎ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ፉa')) {
        num2 = num.replace('ፉa', 'ፏ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ፕe')) {
        num2 = num.replace('ፕe', 'ፐ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ፕu')) {
        num2 = num.replace('ፕu', 'ፑ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ፕi')) {
        num2 = num.replace('ፕi', 'ፒ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ፕa')) {
        num2 = num.replace('ፕa', 'ፓ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ፐe')) {
        num2 = num.replace('ፐe', 'ፔ');
        document.querySelector(".in").value = num2;
} else if (num.includes('P')) {
        num2 = num.replace('P', 'ፕ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ፕo')) {
        num2 = num.replace('ፕo', 'ፖ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ፑa')) {
        num2 = num.replace('ፑa', 'ፗ');
        document.querySelector(".in").value = num2;
} else if (num.includes('a')) {
        num2 = num.replace('a', 'አ');
        document.querySelector(".in").value = num2;
} else if (num.includes('u')) {
        num2 = num.replace('u', 'ኡ');
        document.querySelector(".in").value = num2;
} else if (num.includes('i')) {
        num2 = num.replace('i', 'ኢ');
        document.querySelector(".in").value = num2;
} else if (num.includes('አ1')) {
        num2 = num.replace('አ1', 'ኣ');
        document.querySelector(".in").value = num2;
} else if (num.includes('እe')) {
        num2 = num.replace('እe', 'ኤ');
        document.querySelector(".in").value = num2;
} else if (num.includes('e')) {
        num2 = num.replace('e', 'እ');
        document.querySelector(".in").value = num2;
} else if (num.includes('o')) {
        num2 = num.replace('o', 'ኦ ');
        document.querySelector(".in").value = num2;
} else if (num.includes('A')) {
        num2 = num.replace('A', 'ዐ');
        document.querySelector(".in").value = num2;
} else if (num.includes('U')) {
        num2 = num.replace('U', 'ዑ');
        document.querySelector(".in").value = num2;
} else if (num.includes('I')) {
        num2 = num.replace('I', 'ዒ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ዐ2')) {
        num2 = num.replace('ዐ2', 'ዓ');
        document.querySelector(".in").value = num2;
} else if (num.includes('ዕE')) {
        num2 = num.replace('ዕE', 'ዔ');
        document.querySelector(".in").value = num2;
} else if (num.includes('E')) {
        num2 = num.replace('E', 'ዕ');
        document.querySelector(".in").value = num2;
} else if (num.includes('O')) {
        num2 = num.replace('O', 'ዖ');
        document.querySelector(".in").value = num2;
}
   
}







 