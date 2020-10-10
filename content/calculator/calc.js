const m17_callsign_alphabet = " ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-/.";
function m17_callsign2addr( instr ){
  var num = 0;
  var call = instr.toUpperCase().split("").reverse().join("") 
  for( var c of call ){
      var charidx = m17_callsign_alphabet.indexOf(c);
      if( charidx == -1 ){
          console.log("Invalid character in callsign, replacing with ' '");
          charidx = 0;
      }
      num *= 40;
      num += charidx;
      if( num >= 40**9){
          throw("Invalid addr in m17_callsign2addr, callsign may be too long");
      }
  }
  return num;
}

function m17_addr2callsign( inint ){
  var num = inint;
  if( num >= 40**9){
      throw("Invalid addr in m17_addr2callsign");
  }
  var chars = [];
  while( num > 0 ){
      var idx = Math.floor(num%40);
      var c = m17_callsign_alphabet[idx];
      chars.push(c);
      num = Math.floor(num / 40);
  }
  return chars.join("");

}

var myaddr = m17_callsign2addr("w2fbi");
console.assert(myaddr == 23178783);
var mycall = m17_addr2callsign(myaddr);
console.assert(mycall == "W2FBI");

function paddedHex(inint){
  return "0x" + inint.toString(16).toUpperCase().padStart(12, '0');
}

function m17_xlate_dom(tgt){
  var call_el = document.querySelector("#m17_callsign_translator input[name=callsign]");
  var addr_el = document.querySelector("#m17_callsign_translator input[name=address]");
  var checkthese = [tgt, tgt.name]; //support calling with an input element, or just a string
  if( checkthese.includes("callsign") ){
      addr_el.value = paddedHex(m17_callsign2addr(call_el.value));
  } else if( checkthese.includes("address") ){
      call_el.value = m17_addr2callsign(parseInt(addr_el.value.replace(/\s+/gi,""), 16));
  } else {
      throw "Invalid call, provide either 'callsign' or 'address'";
  }
}