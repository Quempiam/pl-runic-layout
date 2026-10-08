if(typeof keyman === 'undefined') {
  console.log('Keyboard requires KeymanWeb 10.0 or later');
  if(typeof tavultesoft !== 'undefined') tavultesoft.keymanweb.util.alert("This keyboard requires KeymanWeb 10.0 or later");
} else {
KeymanWeb.KR(new Keyboard_plrunic());
}
function Keyboard_plrunic()
{
  var modCodes = keyman.osk.modifierCodes;
  var keyCodes = keyman.osk.keyCodes;

  this._v=(typeof keyman!="undefined"&&typeof keyman.version=="string")?parseInt(keyman.version,10):9;
  this.KI="Keyboard_plrunic";
  this.KN="Polski (runiczny)";
  this.KMINVER="10.0";
  this.KV={F:' 1em "Na pewno nie FUTARK"',K102:0};
  this.KV.KLS={
    "alt": ["","¡","","","","","","","","","","","","","","","","","ᛢ","","ᚦ","","ᚦ","","ᛜ","","","","","","","","ᛇ","ᛋ","ᛥ","","⚝","","","","ᚹ","","","","","","","","","⫯","ᛠ","К","᛭","","ᚼ","","","","¿","","","","","",""],
    "shift-alt": ["","¡","","","","","","","","","","","","","","","","","ᛢ","","ᚦ","","ᚦ","","ᛜ","","","","","","","","ᛇ","ᛋ","ᛥ","","⚝","","","","ᚹ","","","","","","","","","⫯","ᛠ","K","","","ᚼ","","","","¿","","","","","",""],
    "default": ["ᗕ","ᚨ","ᛒ","ᚴ","ᛞ","ᛖ","ᚠ","ᚷ","ᚻ","ᛁ","ᛃ","-","=","","","","ᛥ","ᛝ","ᛖ","ᚱ","ᛏ","ᚤ","ᚢ","ᛁ","ᛟ","ᛈ","[","]","\\","","","","ᚨ","ᛊ","ᛞ","ᚠ","ᚷ","ᚻ","ᛃ","ᚲ","ᛚ",";","'","","","","","","\\","ᛉ","ᛯ","ᚴ","ᚸ","ᛒ","ᚾ","ᛗ",",","｡","/","","","","","",""],
    "shift": ["ᗒ","!","@","#","$","%","^","&","*","(",")","_","+","","","","ᛥ","ᛝ","ᛖ","ᚱ","ᛏ","ᚤ","ᚢ","ᛁ","ᛟ","ᛈ","{","}","|","","","","ᚨ","ᛊ","ᛞ","ᚠ","ᚷ","ᚻ","ᛃ","ᚲ","ᛚ","᛬","\"","","","","","","|","ᛉ","ᛯ","ᚴ","ᚸ","ᛒ","ᚾ","ᛗ","<",">","?","","","","",""," "]
  };
  this.KV.BK=(function(x){
    var
      empty=Array.apply(null, Array(65)).map(String.prototype.valueOf,""),
      result=[], v, i,
      modifiers=['default','shift','ctrl','shift-ctrl','alt','shift-alt','ctrl-alt','shift-ctrl-alt'];
    for(i=modifiers.length-1;i>=0;i--) {
      v = x[modifiers[i]];
      if(v || result.length > 0) {
        result=(v ? v : empty).slice().concat(result);
      }
    }
    return result;
  })(this.KV.KLS);
  this.KDU=0;
  this.KH='';
  this.KM=0;
  this.KBVER="1.1";
  this.KMBM=modCodes.SHIFT | modCodes.ALT /* 0x0050 */;
  this.KVKL={
  "phone": {
    "displayUnderlying": false,
    "font": "Na pewno nie FUTARK",
    "layer": [
      {
        "id": "default",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "id": "U_16A8",
                "text": "1",
                "width": "110"
              },
              {
                "id": "U_16D2",
                "text": "2",
                "width": "110"
              },
              {
                "id": "U_16B4",
                "text": "3",
                "width": "110"
              },
              {
                "id": "U_16DE",
                "text": "4",
                "width": "110"
              },
              {
                "id": "U_16D6",
                "text": "5",
                "width": "110"
              },
              {
                "id": "U_16A0",
                "text": "6",
                "width": "110"
              },
              {
                "id": "U_16B7",
                "text": "7",
                "width": "110"
              },
              {
                "id": "U_16BB",
                "text": "8",
                "width": "110"
              },
              {
                "id": "U_16C1",
                "text": "9",
                "width": "110"
              },
              {
                "id": "U_16C3",
                "text": "0",
                "width": "110"
              },
              {
                "id": "K_SLASH",
                "text": "/",
                "width": "110",
                "hint": "\\",
                "flick": {
                  "n": {
                    "text": "\\",
                    "id": "K_BKSLASH"
                  }
                }
              },
              {
                "id": "T_new_11256",
                "width": "37",
                "sp": "10"
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "id": "T_new_3794",
                "width": "110",
                "sp": "10"
              },
              {
                "id": "K_W",
                "text": "ᛝ",
                "width": "110"
              },
              {
                "id": "K_E",
                "text": "ᛖ",
                "width": "110"
              },
              {
                "id": "K_R",
                "text": "ᚱ",
                "width": "110"
              },
              {
                "id": "K_T",
                "text": "ᛏ",
                "width": "110",
                "hint": "ᚦ",
                "flick": {
                  "n": {
                    "text": "ᚦ",
                    "id": "U_16A6"
                  }
                }
              },
              {
                "id": "K_Y",
                "text": "ᚤ",
                "width": "110",
                "hint": "ᚣ",
                "flick": {
                  "n": {
                    "text": "ᚣ",
                    "id": "U_16A3"
                  }
                }
              },
              {
                "id": "K_U",
                "text": "ᚢ",
                "width": "110"
              },
              {
                "id": "K_I",
                "text": "ᛁ",
                "width": "110"
              },
              {
                "id": "K_O",
                "text": "ᛟ",
                "width": "110"
              },
              {
                "id": "K_P",
                "text": "ᛈ",
                "width": "110"
              },
              {
                "id": "K_LBRKT",
                "text": "[",
                "width": "110",
                "hint": "]",
                "flick": {
                  "n": {
                    "text": "]",
                    "id": "K_RBRKT"
                  }
                }
              },
              {
                "id": "T_new_11058",
                "width": "34",
                "sp": "10"
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "id": "T_new_3947",
                "width": "110",
                "sp": "10",
                "flick": {
                  "n": {
                    "text": "🟙",
                    "id": "U_1F7C7"
                  }
                }
              },
              {
                "id": "K_A",
                "text": "ᚨ",
                "width": "110"
              },
              {
                "id": "K_S",
                "text": "ᛊ",
                "width": "110",
                "hint": "ᛋᛇ",
                "flick": {
                  "n": {
                    "text": "ᛋ",
                    "id": "U_16CB"
                  },
                  "s": {
                    "text": "ᛇ",
                    "id": "U_16C7"
                  }
                }
              },
              {
                "id": "K_D",
                "text": "ᛞ",
                "width": "110",
                "hint": "ᛥᛯᚸ",
                "sk": [
                  {
                    "text": "ᛥ",
                    "id": "U_16E5"
                  },
                  {
                    "text": "ᛯ",
                    "id": "U_16EF"
                  },
                  {
                    "text": "ᚸ",
                    "id": "U_16B8"
                  }
                ],
                "flick": {
                  "n": {
                    "text": "ᛯ",
                    "id": "U_16EF"
                  },
                  "w": {
                    "text": "ᛥ",
                    "id": "U_16E5"
                  },
                  "e": {
                    "text": "ᚸ",
                    "id": "U_16B8"
                  }
                }
              },
              {
                "id": "K_F",
                "text": "ᚠ",
                "width": "110"
              },
              {
                "id": "K_G",
                "text": "ᚷ",
                "width": "110"
              },
              {
                "id": "K_H",
                "text": "ᚻ",
                "width": "110"
              },
              {
                "id": "K_J",
                "text": "ᛃ",
                "width": "110"
              },
              {
                "id": "K_K",
                "text": "ᚲ",
                "width": "110"
              },
              {
                "id": "K_L",
                "text": "ᛚ",
                "width": "110",
                "hint": "ᚹ",
                "flick": {
                  "n": {
                    "text": "ᚹ",
                    "id": "U_16B9"
                  }
                }
              },
              {
                "id": "U_201E",
                "text": "„",
                "width": "110",
                "hint": "”",
                "flick": {
                  "n": {
                    "text": "”",
                    "id": "U_201D"
                  }
                }
              },
              {
                "id": "T_new_11156",
                "width": "40",
                "sp": "10"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "id": "T_new_638",
                "width": "110",
                "sp": "10"
              },
              {
                "id": "K_Z",
                "text": "ᛉ",
                "width": "110",
                "hint": "ᛠż",
                "flick": {
                  "n": {
                    "text": "ᛠ",
                    "id": "U_16E0"
                  },
                  "s": {
                    "text": "ż",
                    "id": "U_2AEF"
                  }
                }
              },
              {
                "id": "K_C",
                "text": "ᚴ",
                "width": "110",
                "hint": "ćę",
                "flick": {
                  "n": {
                    "text": "ć",
                    "id": "U_041A"
                  },
                  "s": {
                    "text": "ę",
                    "id": "U_16E2"
                  }
                }
              },
              {
                "id": "K_B",
                "text": "ᛒ",
                "width": "110"
              },
              {
                "id": "K_N",
                "text": "ᚾ",
                "width": "110",
                "hint": "ᛡ",
                "flick": {
                  "n": {
                    "text": "ᛡ",
                    "id": "U_16E1"
                  }
                }
              },
              {
                "id": "U_16DC",
                "text": "ᛜ",
                "width": "110"
              },
              {
                "id": "K_M",
                "text": "ᛗ",
                "width": "110"
              },
              {
                "id": "U_002D",
                "text": "-",
                "width": "110",
                "hint": "᛬᛫᛭@#",
                "flick": {
                  "n": {
                    "text": "᛫",
                    "id": "U_16EB"
                  },
                  "s": {
                    "text": "᛭",
                    "id": "U_16ED"
                  },
                  "w": {
                    "text": "᛬",
                    "id": "U_16EC"
                  },
                  "e": {
                    "text": "@",
                    "id": "U_0040"
                  },
                  "se": {
                    "text": "#",
                    "id": "U_0023"
                  },
                  "sw": {
                    "text": "_",
                    "id": "U_005F"
                  }
                }
              },
              {
                "id": "U_15D5",
                "text": "ᗕ",
                "width": "110",
                "hint": "ᗒ",
                "flick": {
                  "n": {
                    "text": "ᗒ",
                    "id": "U_15D2"
                  }
                }
              },
              {
                "id": "U_1D25",
                "text": "ᴥ",
                "width": "110",
                "sp": "10",
                "hint": "ᦽ",
                "flick": {
                  "s": {
                    "text": "͜",
                    "id": "U_035C"
                  },
                  "w": {
                    "text": "͡",
                    "id": "U_0361"
                  },
                  "sw": {
                    "text": "ಠ",
                    "id": "U_0CA0"
                  },
                  "e": {
                    "text": "◕",
                    "id": "U_25D5"
                  },
                  "se": {
                    "text": "ʖ",
                    "id": "U_0296"
                  },
                  "n": {
                    "text": "°",
                    "id": "U_00B0"
                  },
                  "ne": {
                    "text": "ᦽ",
                    "id": "U_19BD"
                  },
                  "nw": {
                    "text": "つ",
                    "id": "U_3064"
                  }
                }
              },
              {
                "id": "K_BKSP",
                "text": "*BkSp*",
                "width": "188",
                "sp": "1"
              }
            ]
          },
          {
            "id": "5",
            "key": [
              {
                "id": "K_LOPT",
                "text": "*Menu*",
                "width": "140",
                "sp": "1"
              },
              {
                "id": "K_SPACE",
                "width": "930"
              },
              {
                "id": "U_FF61",
                "text": "｡",
                "width": "110",
                "hint": "¿?¡!",
                "sk": [
                  {
                    "text": "¿",
                    "id": "U_00BF"
                  },
                  {
                    "text": "?",
                    "id": "U_003F"
                  },
                  {
                    "text": "¡",
                    "id": "U_00A1"
                  },
                  {
                    "text": "!",
                    "id": "U_0021"
                  }
                ],
                "flick": {
                  "w": {
                    "text": "¿",
                    "id": "U_00BF"
                  },
                  "e": {
                    "text": "?",
                    "id": "U_003F"
                  },
                  "n": {
                    "text": "¡",
                    "id": "U_00A1"
                  },
                  "s": {
                    "text": "!",
                    "id": "U_0021"
                  }
                }
              },
              {
                "id": "K_ENTER",
                "text": "*Enter*",
                "width": "213",
                "sp": "1"
              }
            ]
          }
        ]
      },
      {
        "id": "shift",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "id": "K_1",
                "text": "!"
              },
              {
                "id": "K_2",
                "text": "@"
              },
              {
                "id": "K_3",
                "text": "#"
              },
              {
                "id": "K_4",
                "text": "$"
              },
              {
                "id": "K_5",
                "text": "%"
              },
              {
                "id": "K_6",
                "text": "^"
              },
              {
                "id": "K_7",
                "text": "&"
              },
              {
                "id": "K_8",
                "text": "*"
              },
              {
                "id": "K_9",
                "text": "("
              },
              {
                "id": "K_0",
                "text": ")"
              },
              {
                "id": "K_HYPHEN",
                "text": "_"
              },
              {
                "id": "K_EQUAL",
                "text": "+"
              },
              {
                "id": "K_BKSP",
                "text": "*BkSp*",
                "width": "100",
                "sp": "1"
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "id": "K_Q",
                "text": "ᛥ",
                "pad": "75"
              },
              {
                "id": "K_W",
                "text": "ᛝ"
              },
              {
                "id": "K_E",
                "text": "ᛖ"
              },
              {
                "id": "K_R",
                "text": "ᚱ"
              },
              {
                "id": "K_T",
                "text": "ᛏ"
              },
              {
                "id": "K_Y",
                "text": "ᚤ"
              },
              {
                "id": "K_U",
                "text": "ᚢ"
              },
              {
                "id": "K_I",
                "text": "ᛁ"
              },
              {
                "id": "K_O",
                "text": "ᛟ"
              },
              {
                "id": "K_P",
                "text": "ᛈ"
              },
              {
                "id": "K_LBRKT",
                "text": "{"
              },
              {
                "id": "K_RBRKT",
                "text": "}"
              },
              {
                "id": "T_new_1657",
                "width": "10",
                "sp": "10"
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "id": "K_BKQUOTE",
                "text": "ᗒ"
              },
              {
                "id": "K_A",
                "text": "ᚨ"
              },
              {
                "id": "K_S",
                "text": "ᛊ"
              },
              {
                "id": "K_D",
                "text": "ᛞ"
              },
              {
                "id": "K_F",
                "text": "ᚠ"
              },
              {
                "id": "K_G",
                "text": "ᚷ"
              },
              {
                "id": "K_H",
                "text": "ᚻ"
              },
              {
                "id": "K_J",
                "text": "ᛃ"
              },
              {
                "id": "K_K",
                "text": "ᚲ"
              },
              {
                "id": "K_L",
                "text": "ᛚ"
              },
              {
                "id": "K_COLON",
                "text": "᛬"
              },
              {
                "id": "K_QUOTE",
                "text": "\""
              },
              {
                "id": "K_BKSLASH",
                "text": "|"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "id": "K_Z",
                "text": "ᛉ"
              },
              {
                "id": "K_X",
                "text": "ᛯ"
              },
              {
                "id": "K_C",
                "text": "ᚴ"
              },
              {
                "id": "K_V",
                "text": "ᚸ"
              },
              {
                "id": "K_B",
                "text": "ᛒ"
              },
              {
                "id": "K_N",
                "text": "ᚾ"
              },
              {
                "id": "K_M",
                "text": "ᛗ"
              },
              {
                "id": "K_COMMA",
                "text": "<"
              },
              {
                "id": "K_PERIOD",
                "text": ">"
              },
              {
                "id": "K_SLASH",
                "text": "?",
                "sk": [
                  {
                    "id": "T_new_2293"
                  }
                ]
              }
            ]
          },
          {
            "id": "5",
            "key": [
              {
                "id": "K_LCONTROL",
                "text": "ctrl",
                "width": "130",
                "sp": "1",
                "nextlayer": "ctrl"
              },
              {
                "id": "K_LOPT",
                "text": "*Menu*",
                "width": "140",
                "sp": "1"
              },
              {
                "id": "K_SPACE",
                "text": " ",
                "width": "930"
              },
              {
                "id": "K_ENTER",
                "text": "*Enter*",
                "width": "145",
                "sp": "1"
              }
            ]
          }
        ]
      },
      {
        "id": "ctrl",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "id": "K_1"
              },
              {
                "id": "K_2"
              },
              {
                "id": "K_3"
              },
              {
                "id": "K_4"
              },
              {
                "id": "K_5"
              },
              {
                "id": "K_6"
              },
              {
                "id": "K_7"
              },
              {
                "id": "K_8"
              },
              {
                "id": "K_9"
              },
              {
                "id": "K_0"
              },
              {
                "id": "K_HYPHEN"
              },
              {
                "id": "K_EQUAL"
              },
              {
                "width": "100",
                "id": "K_BKSP",
                "sp": "1",
                "text": "*BkSp*"
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "id": "K_Q",
                "pad": "75"
              },
              {
                "id": "K_W"
              },
              {
                "id": "K_E"
              },
              {
                "id": "K_R"
              },
              {
                "id": "K_T"
              },
              {
                "id": "K_Y"
              },
              {
                "id": "K_U"
              },
              {
                "id": "K_I"
              },
              {
                "id": "K_O"
              },
              {
                "id": "K_P"
              },
              {
                "id": "K_LBRKT"
              },
              {
                "id": "K_RBRKT"
              },
              {
                "width": "10",
                "sp": "10"
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "id": "K_BKQUOTE"
              },
              {
                "id": "K_A"
              },
              {
                "id": "K_S"
              },
              {
                "id": "K_D"
              },
              {
                "id": "K_F"
              },
              {
                "id": "K_G"
              },
              {
                "id": "K_H"
              },
              {
                "id": "K_J"
              },
              {
                "id": "K_K"
              },
              {
                "id": "K_L"
              },
              {
                "id": "K_COLON"
              },
              {
                "id": "K_QUOTE"
              },
              {
                "id": "K_BKSLASH"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "width": "160",
                "id": "K_SHIFT",
                "sp": "1",
                "text": "*Shift*"
              },
              {
                "id": "K_oE2"
              },
              {
                "id": "K_Z"
              },
              {
                "id": "K_X"
              },
              {
                "id": "K_C"
              },
              {
                "id": "K_V"
              },
              {
                "id": "K_B"
              },
              {
                "id": "K_N"
              },
              {
                "id": "K_M"
              },
              {
                "id": "K_COMMA"
              },
              {
                "id": "K_PERIOD"
              },
              {
                "id": "K_SLASH"
              },
              {
                "width": "10",
                "sp": "10"
              }
            ]
          },
          {
            "id": "5",
            "key": [
              {
                "nextlayer": "default",
                "width": "130",
                "id": "K_LCONTROL",
                "sp": "1",
                "text": "default"
              },
              {
                "width": "140",
                "id": "K_LOPT",
                "sp": "1",
                "text": "*Menu*"
              },
              {
                "width": "930",
                "id": "K_SPACE"
              },
              {
                "width": "145",
                "id": "K_ENTER",
                "sp": "1",
                "text": "*Enter*"
              }
            ]
          }
        ]
      }
    ]
  }
};
  this.KVER="18.0.252.0";
  this.KVS=[];
  this.gs=function(t,e) {
    return this.g_main_0(t,e);
  };
  this.gs=function(t,e) {
    return this.g_main_0(t,e);
  };
  this.g_main_0=function(t,e) {
    var k=KeymanWeb,r=0,m=0;
    if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_oE2 /* 0xE2 */)) {
      if(1){
        r=m=1;   // Line 198
        k.KDC(0,t);
        k.KO(-1,t,"\\");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_oE2 /* 0xE2 */)) {
      if(1){
        r=m=1;   // Line 199
        k.KDC(0,t);
        k.KO(-1,t,"|");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_SPACE /* 0x20 */)) {
      if(1){
        r=m=1;   // Line 23
        k.KDC(0,t);
        k.KO(-1,t," ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_SPACE /* 0x20 */)) {
      if(1){
        r=m=1;   // Line 24
        k.KDC(0,t);
        k.KO(-1,t," ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_1 /* 0x31 */)) {
      if(1){
        r=m=1;   // Line 30
        k.KDC(0,t);
        k.KO(-1,t,"!");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4050 */, keyCodes.K_1 /* 0x31 */)) {
      if(1){
        r=m=1;   // Line 32
        k.KDC(0,t);
        k.KO(-1,t,"¡");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_QUOTE /* 0xDE */)) {
      if(1){
        r=m=1;   // Line 196
        k.KDC(0,t);
        k.KO(-1,t,"\"");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_3 /* 0x33 */)) {
      if(1){
        r=m=1;   // Line 38
        k.KDC(0,t);
        k.KO(-1,t,"#");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_4 /* 0x34 */)) {
      if(1){
        r=m=1;   // Line 41
        k.KDC(0,t);
        k.KO(-1,t,"$");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_5 /* 0x35 */)) {
      if(1){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"%");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_7 /* 0x37 */)) {
      if(1){
        r=m=1;   // Line 50
        k.KDC(0,t);
        k.KO(-1,t,"&");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_QUOTE /* 0xDE */)) {
      if(1){
        r=m=1;   // Line 195
        k.KDC(0,t);
        k.KO(-1,t,"'");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_9 /* 0x39 */)) {
      if(1){
        r=m=1;   // Line 56
        k.KDC(0,t);
        k.KO(-1,t,"(");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_0 /* 0x30 */)) {
      if(1){
        r=m=1;   // Line 27
        k.KDC(0,t);
        k.KO(-1,t,")");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_8 /* 0x38 */)) {
      if(1){
        r=m=1;   // Line 53
        k.KDC(0,t);
        k.KO(-1,t,"*");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_EQUAL /* 0xBB */)) {
      if(1){
        r=m=1;   // Line 167
        k.KDC(0,t);
        k.KO(-1,t,"+");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_COMMA /* 0xBC */)) {
      if(1){
        r=m=1;   // Line 169
        k.KDC(0,t);
        k.KO(-1,t,",");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_HYPHEN /* 0xBD */)) {
      if(1){
        r=m=1;   // Line 172
        k.KDC(0,t);
        k.KO(-1,t,"-");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_PERIOD /* 0xBE */)) {
      if(1){
        r=m=1;   // Line 175
        k.KDC(0,t);
        k.KO(-1,t,"｡");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_SLASH /* 0xBF */)) {
      if(1){
        r=m=1;   // Line 178
        k.KDC(0,t);
        k.KO(-1,t,"/");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_SLASH /* 0xBF */)) {
      if(1){
        r=m=1;   // Line 180
        k.KDC(0,t);
        k.KO(-1,t,"¿");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_0 /* 0x30 */)) {
      if(1){
        r=m=1;   // Line 26
        k.KDC(0,t);
        k.KO(-1,t,"ᛃ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_1 /* 0x31 */)) {
      if(1){
        r=m=1;   // Line 29
        k.KDC(0,t);
        k.KO(-1,t,"ᚨ");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_1 /* 0x31 */)) {
      if(1){
        r=m=1;   // Line 31
        k.KDC(0,t);
        k.KO(-1,t,"¡");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_2 /* 0x32 */)) {
      if(1){
        r=m=1;   // Line 34
        k.KDC(0,t);
        k.KO(-1,t,"ᛒ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_3 /* 0x33 */)) {
      if(1){
        r=m=1;   // Line 37
        k.KDC(0,t);
        k.KO(-1,t,"ᚴ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_4 /* 0x34 */)) {
      if(1){
        r=m=1;   // Line 40
        k.KDC(0,t);
        k.KO(-1,t,"ᛞ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_5 /* 0x35 */)) {
      if(1){
        r=m=1;   // Line 43
        k.KDC(0,t);
        k.KO(-1,t,"ᛖ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_6 /* 0x36 */)) {
      if(1){
        r=m=1;   // Line 46
        k.KDC(0,t);
        k.KO(-1,t,"ᚠ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_7 /* 0x37 */)) {
      if(1){
        r=m=1;   // Line 49
        k.KDC(0,t);
        k.KO(-1,t,"ᚷ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_8 /* 0x38 */)) {
      if(1){
        r=m=1;   // Line 52
        k.KDC(0,t);
        k.KO(-1,t,"ᚻ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_9 /* 0x39 */)) {
      if(1){
        r=m=1;   // Line 55
        k.KDC(0,t);
        k.KO(-1,t,"ᛁ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_COLON /* 0xBA */)) {
      if(1){
        r=m=1;   // Line 164
        k.KDC(0,t);
        k.KO(-1,t,"᛬");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_COLON /* 0xBA */)) {
      if(1){
        r=m=1;   // Line 163
        k.KDC(0,t);
        k.KO(-1,t,";");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_COMMA /* 0xBC */)) {
      if(1){
        r=m=1;   // Line 170
        k.KDC(0,t);
        k.KO(-1,t,"<");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_EQUAL /* 0xBB */)) {
      if(1){
        r=m=1;   // Line 166
        k.KDC(0,t);
        k.KO(-1,t,"=");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_PERIOD /* 0xBE */)) {
      if(1){
        r=m=1;   // Line 176
        k.KDC(0,t);
        k.KO(-1,t,">");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_SLASH /* 0xBF */)) {
      if(1){
        r=m=1;   // Line 179
        k.KDC(0,t);
        k.KO(-1,t,"?");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4050 */, keyCodes.K_SLASH /* 0xBF */)) {
      if(1){
        r=m=1;   // Line 181
        k.KDC(0,t);
        k.KO(-1,t,"¿");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_2 /* 0x32 */)) {
      if(1){
        r=m=1;   // Line 35
        k.KDC(0,t);
        k.KO(-1,t,"@");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_A /* 0x41 */)) {
      if(1){
        r=m=1;   // Line 59
        k.KDC(0,t);
        k.KO(-1,t,"ᚨ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4050 */, keyCodes.K_A /* 0x41 */)) {
      if(1){
        r=m=1;   // Line 61
        k.KDC(0,t);
        k.KO(-1,t,"ᛇ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_B /* 0x42 */)) {
      if(1){
        r=m=1;   // Line 64
        k.KDC(0,t);
        k.KO(-1,t,"ᛒ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_C /* 0x43 */)) {
      if(1){
        r=m=1;   // Line 67
        k.KDC(0,t);
        k.KO(-1,t,"ᚴ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4050 */, keyCodes.K_C /* 0x43 */)) {
      if(1){
        r=m=1;   // Line 69
        k.KDC(0,t);
        k.KO(-1,t,"K");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_D /* 0x44 */)) {
      if(1){
        r=m=1;   // Line 72
        k.KDC(0,t);
        k.KO(-1,t,"ᛞ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4050 */, keyCodes.K_D /* 0x44 */)) {
      if(1){
        r=m=1;   // Line 74
        k.KDC(0,t);
        k.KO(-1,t,"ᛥ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_E /* 0x45 */)) {
      if(1){
        r=m=1;   // Line 77
        k.KDC(0,t);
        k.KO(-1,t,"ᛖ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4050 */, keyCodes.K_E /* 0x45 */)) {
      if(1){
        r=m=1;   // Line 79
        k.KDC(0,t);
        k.KO(-1,t,"ᛢ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_F /* 0x46 */)) {
      if(1){
        r=m=1;   // Line 82
        k.KDC(0,t);
        k.KO(-1,t,"ᚠ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_G /* 0x47 */)) {
      if(1){
        r=m=1;   // Line 85
        k.KDC(0,t);
        k.KO(-1,t,"ᚷ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4050 */, keyCodes.K_G /* 0x47 */)) {
      if(1){
        r=m=1;   // Line 87
        k.KDC(0,t);
        k.KO(-1,t,"⚝");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_H /* 0x48 */)) {
      if(1){
        r=m=1;   // Line 90
        k.KDC(0,t);
        k.KO(-1,t,"ᚻ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_I /* 0x49 */)) {
      if(1){
        r=m=1;   // Line 93
        k.KDC(0,t);
        k.KO(-1,t,"ᛁ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_J /* 0x4A */)) {
      if(1){
        r=m=1;   // Line 96
        k.KDC(0,t);
        k.KO(-1,t,"ᛃ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_K /* 0x4B */)) {
      if(1){
        r=m=1;   // Line 99
        k.KDC(0,t);
        k.KO(-1,t,"ᚲ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_L /* 0x4C */)) {
      if(1){
        r=m=1;   // Line 102
        k.KDC(0,t);
        k.KO(-1,t,"ᛚ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4050 */, keyCodes.K_L /* 0x4C */)) {
      if(1){
        r=m=1;   // Line 104
        k.KDC(0,t);
        k.KO(-1,t,"ᚹ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_M /* 0x4D */)) {
      if(1){
        r=m=1;   // Line 107
        k.KDC(0,t);
        k.KO(-1,t,"ᛗ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_N /* 0x4E */)) {
      if(1){
        r=m=1;   // Line 110
        k.KDC(0,t);
        k.KO(-1,t,"ᚾ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4050 */, keyCodes.K_N /* 0x4E */)) {
      if(1){
        r=m=1;   // Line 112
        k.KDC(0,t);
        k.KO(-1,t,"ᚼ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_O /* 0x4F */)) {
      if(1){
        r=m=1;   // Line 115
        k.KDC(0,t);
        k.KO(-1,t,"ᛟ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4050 */, keyCodes.K_O /* 0x4F */)) {
      if(1){
        r=m=1;   // Line 117
        k.KDC(0,t);
        k.KO(-1,t,"ᛜ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_P /* 0x50 */)) {
      if(1){
        r=m=1;   // Line 120
        k.KDC(0,t);
        k.KO(-1,t,"ᛈ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_Q /* 0x51 */)) {
      if(1){
        r=m=1;   // Line 123
        k.KDC(0,t);
        k.KO(-1,t,"ᛥ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_R /* 0x52 */)) {
      if(1){
        r=m=1;   // Line 126
        k.KDC(0,t);
        k.KO(-1,t,"ᚱ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_S /* 0x53 */)) {
      if(1){
        r=m=1;   // Line 129
        k.KDC(0,t);
        k.KO(-1,t,"ᛊ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4050 */, keyCodes.K_S /* 0x53 */)) {
      if(1){
        r=m=1;   // Line 131
        k.KDC(0,t);
        k.KO(-1,t,"ᛋ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_T /* 0x54 */)) {
      if(1){
        r=m=1;   // Line 134
        k.KDC(0,t);
        k.KO(-1,t,"ᛏ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4050 */, keyCodes.K_T /* 0x54 */)) {
      if(1){
        r=m=1;   // Line 136
        k.KDC(0,t);
        k.KO(-1,t,"ᚦ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_U /* 0x55 */)) {
      if(1){
        r=m=1;   // Line 139
        k.KDC(0,t);
        k.KO(-1,t,"ᚢ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4050 */, keyCodes.K_U /* 0x55 */)) {
      if(1){
        r=m=1;   // Line 141
        k.KDC(0,t);
        k.KO(-1,t,"ᚦ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_V /* 0x56 */)) {
      if(1){
        r=m=1;   // Line 144
        k.KDC(0,t);
        k.KO(-1,t,"ᚸ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_W /* 0x57 */)) {
      if(1){
        r=m=1;   // Line 148
        k.KDC(0,t);
        k.KO(-1,t,"ᛝ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_X /* 0x58 */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"ᛯ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4050 */, keyCodes.K_X /* 0x58 */)) {
      if(1){
        r=m=1;   // Line 153
        k.KDC(0,t);
        k.KO(-1,t,"ᛠ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_Y /* 0x59 */)) {
      if(1){
        r=m=1;   // Line 156
        k.KDC(0,t);
        k.KO(-1,t,"ᚤ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_Z /* 0x5A */)) {
      if(1){
        r=m=1;   // Line 159
        k.KDC(0,t);
        k.KO(-1,t,"ᛉ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4050 */, keyCodes.K_Z /* 0x5A */)) {
      if(1){
        r=m=1;   // Line 161
        k.KDC(0,t);
        k.KO(-1,t,"⫯");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_LBRKT /* 0xDB */)) {
      if(1){
        r=m=1;   // Line 186
        k.KDC(0,t);
        k.KO(-1,t,"[");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_BKSLASH /* 0xDC */)) {
      if(1){
        r=m=1;   // Line 189
        k.KDC(0,t);
        k.KO(-1,t,"\\");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_RBRKT /* 0xDD */)) {
      if(1){
        r=m=1;   // Line 192
        k.KDC(0,t);
        k.KO(-1,t,"]");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_6 /* 0x36 */)) {
      if(1){
        r=m=1;   // Line 47
        k.KDC(0,t);
        k.KO(-1,t,"^");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_HYPHEN /* 0xBD */)) {
      if(1){
        r=m=1;   // Line 173
        k.KDC(0,t);
        k.KO(-1,t,"_");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_BKQUOTE /* 0xC0 */)) {
      if(1){
        r=m=1;   // Line 183
        k.KDC(0,t);
        k.KO(-1,t,"ᗕ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_A /* 0x41 */)) {
      if(1){
        r=m=1;   // Line 58
        k.KDC(0,t);
        k.KO(-1,t,"ᚨ");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_A /* 0x41 */)) {
      if(1){
        r=m=1;   // Line 60
        k.KDC(0,t);
        k.KO(-1,t,"ᛇ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_B /* 0x42 */)) {
      if(1){
        r=m=1;   // Line 63
        k.KDC(0,t);
        k.KO(-1,t,"ᛒ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_C /* 0x43 */)) {
      if(1){
        r=m=1;   // Line 66
        k.KDC(0,t);
        k.KO(-1,t,"ᚴ");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_C /* 0x43 */)) {
      if(1){
        r=m=1;   // Line 68
        k.KDC(0,t);
        k.KO(-1,t,"К");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_D /* 0x44 */)) {
      if(1){
        r=m=1;   // Line 71
        k.KDC(0,t);
        k.KO(-1,t,"ᛞ");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_D /* 0x44 */)) {
      if(1){
        r=m=1;   // Line 73
        k.KDC(0,t);
        k.KO(-1,t,"ᛥ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_E /* 0x45 */)) {
      if(1){
        r=m=1;   // Line 76
        k.KDC(0,t);
        k.KO(-1,t,"ᛖ");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_E /* 0x45 */)) {
      if(1){
        r=m=1;   // Line 78
        k.KDC(0,t);
        k.KO(-1,t,"ᛢ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_F /* 0x46 */)) {
      if(1){
        r=m=1;   // Line 81
        k.KDC(0,t);
        k.KO(-1,t,"ᚠ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_G /* 0x47 */)) {
      if(1){
        r=m=1;   // Line 84
        k.KDC(0,t);
        k.KO(-1,t,"ᚷ");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_G /* 0x47 */)) {
      if(1){
        r=m=1;   // Line 86
        k.KDC(0,t);
        k.KO(-1,t,"⚝");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_H /* 0x48 */)) {
      if(1){
        r=m=1;   // Line 89
        k.KDC(0,t);
        k.KO(-1,t,"ᚻ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_I /* 0x49 */)) {
      if(1){
        r=m=1;   // Line 92
        k.KDC(0,t);
        k.KO(-1,t,"ᛁ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_J /* 0x4A */)) {
      if(1){
        r=m=1;   // Line 95
        k.KDC(0,t);
        k.KO(-1,t,"ᛃ");
      }
    }
      if(m) {}
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_K /* 0x4B */)) {
      if(1){
        r=m=1;   // Line 98
        k.KDC(0,t);
        k.KO(-1,t,"ᚲ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_L /* 0x4C */)) {
      if(1){
        r=m=1;   // Line 101
        k.KDC(0,t);
        k.KO(-1,t,"ᛚ");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_L /* 0x4C */)) {
      if(1){
        r=m=1;   // Line 103
        k.KDC(0,t);
        k.KO(-1,t,"ᚹ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_M /* 0x4D */)) {
      if(1){
        r=m=1;   // Line 106
        k.KDC(0,t);
        k.KO(-1,t,"ᛗ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_N /* 0x4E */)) {
      if(1){
        r=m=1;   // Line 109
        k.KDC(0,t);
        k.KO(-1,t,"ᚾ");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_N /* 0x4E */)) {
      if(1){
        r=m=1;   // Line 111
        k.KDC(0,t);
        k.KO(-1,t,"ᛡ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_O /* 0x4F */)) {
      if(1){
        r=m=1;   // Line 114
        k.KDC(0,t);
        k.KO(-1,t,"ᛟ");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_O /* 0x4F */)) {
      if(1){
        r=m=1;   // Line 116
        k.KDC(0,t);
        k.KO(-1,t,"ᛜ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_P /* 0x50 */)) {
      if(1){
        r=m=1;   // Line 119
        k.KDC(0,t);
        k.KO(-1,t,"ᛈ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_Q /* 0x51 */)) {
      if(1){
        r=m=1;   // Line 122
        k.KDC(0,t);
        k.KO(-1,t,"ᛥ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_R /* 0x52 */)) {
      if(1){
        r=m=1;   // Line 125
        k.KDC(0,t);
        k.KO(-1,t,"ᚱ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_S /* 0x53 */)) {
      if(1){
        r=m=1;   // Line 128
        k.KDC(0,t);
        k.KO(-1,t,"ᛊ");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_S /* 0x53 */)) {
      if(1){
        r=m=1;   // Line 130
        k.KDC(0,t);
        k.KO(-1,t,"ᛋ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_T /* 0x54 */)) {
      if(1){
        r=m=1;   // Line 133
        k.KDC(0,t);
        k.KO(-1,t,"ᛏ");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_T /* 0x54 */)) {
      if(1){
        r=m=1;   // Line 135
        k.KDC(0,t);
        k.KO(-1,t,"ᚦ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_U /* 0x55 */)) {
      if(1){
        r=m=1;   // Line 138
        k.KDC(0,t);
        k.KO(-1,t,"ᚢ");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_U /* 0x55 */)) {
      if(1){
        r=m=1;   // Line 140
        k.KDC(0,t);
        k.KO(-1,t,"ᚦ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_V /* 0x56 */)) {
      if(1){
        r=m=1;   // Line 143
        k.KDC(0,t);
        k.KO(-1,t,"ᚸ");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_V /* 0x56 */)) {
      if(1){
        r=m=1;   // Line 145
        k.KDC(0,t);
        k.KO(-1,t,"᛭");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_W /* 0x57 */)) {
      if(1){
        r=m=1;   // Line 147
        k.KDC(0,t);
        k.KO(-1,t,"ᛝ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_X /* 0x58 */)) {
      if(1){
        r=m=1;   // Line 150
        k.KDC(0,t);
        k.KO(-1,t,"ᛯ");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_X /* 0x58 */)) {
      if(1){
        r=m=1;   // Line 152
        k.KDC(0,t);
        k.KO(-1,t,"ᛠ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_Y /* 0x59 */)) {
      if(1){
        r=m=1;   // Line 155
        k.KDC(0,t);
        k.KO(-1,t,"ᚤ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_Z /* 0x5A */)) {
      if(1){
        r=m=1;   // Line 158
        k.KDC(0,t);
        k.KO(-1,t,"ᛉ");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_Z /* 0x5A */)) {
      if(1){
        r=m=1;   // Line 160
        k.KDC(0,t);
        k.KO(-1,t,"⫯");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_LBRKT /* 0xDB */)) {
      if(1){
        r=m=1;   // Line 187
        k.KDC(0,t);
        k.KO(-1,t,"{");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_BKSLASH /* 0xDC */)) {
      if(1){
        r=m=1;   // Line 190
        k.KDC(0,t);
        k.KO(-1,t,"|");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_RBRKT /* 0xDD */)) {
      if(1){
        r=m=1;   // Line 193
        k.KDC(0,t);
        k.KO(-1,t,"}");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_BKQUOTE /* 0xC0 */)) {
      if(1){
        r=m=1;   // Line 184
        k.KDC(0,t);
        k.KO(-1,t,"ᗒ");
      }
    }
    return r;
  };
}
