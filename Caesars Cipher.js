function rot13(str) {
    let input  = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let output = 'NOPQRSTUVWXYZABCDEFGHIJKLM';
    let index = x => input.indexOf(x);
    let translate = x => index(x) > -1 ? output[index(x)] : x;
   
     return str.split('').map(translate).join('');
   }
   
    rot13("SERR PBQR PNZC");