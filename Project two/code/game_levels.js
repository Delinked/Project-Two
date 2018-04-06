var GAME_LEVELS = [
  ["                                                                                                                                        ",
   "                                                                                                                                        ",
   "                                                                                                                                        ",
   "                                                                                                                                        ",
   "                                                                                                                                        ",
   "                                                                                                     o                           o      ",
   "                                                                                                             1111                       ",
   "                                        o                                                                                               ",
   "                                                                                           1111                         xxxx       xxxxx",
   "                                      xxxx                        xxxxxxx                                            xxxx!!!!!!!!!!!!!!!",
   "                                     xx!!xxx                    xxxx     xxxx     xxxx             xxxx            xxxx!!!!!!!!!!!!!!!!!",
   "                                  xxxxx!!xxxxxx       xxx     xx           xx                                    xxx!!!!!!!!!!!!!!!!!!!!",
   "                                   xx!!!!!!!!!!!!!!          xx                                                xxx!!!!!!!!!!!!!!!!!!!!!!",
   "                                       xxxxxxxxxx!!x        x                                                xxx!!!!!!!!!!!!!!!!!!!!!!!!",
   "                                                xx!x        x        o                                   xxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "                                                 x!x        x                                          xxxxxxxx!!!!!!!!!!!!!!!!!!!!!!!!!",
   "                                                 x!x        x                                      xxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "                                                  v          xx   xxx  xxx     xx               xxxxxxxxxxxxxxxxxxxxx!!mmmmmmmmmmmmmmmmm",
   "                                                  v           xx!!!!!!!!!!!xxxx  xxxxx         xxx                    v                 ",
   "                                                               xxxx!!!!!xxxx      xx         xx                       v                 ",
   "                                                                  xxxxxxx          x       xxxx                                         ",
   "                                                                                   x          x                                         ",
   "                                                                                   x     o    x                                         ",
   "                                                                                   x          x                                         ",
   "                                                                                   xxxx       x                                         ",
   "                                                                                              x                                         ",
   "                                                                                           xxxx                                         ",
   "                        o                                                                                                               ",
   "                                 *                                                                                o                     ",
   "                      xxxx                                                                                                              ",
   "                    xxxxxx    xx    xx                        xxxxxxx     xxx     xxxxxxxxxxxxxxxxxxx                                   ",
   "     @            xxxxxxxx    xx    xx                        xx                                                xxxx                    ",
   "                xxxxxxxxx     xx    xx              o        xx                                                                         ",
   "    xxx       xxxxxxxxxxx     xx     x                     xxx                                           xxxx             xxxxx         ",
   "    xxx     xxxxxxxxxxxx      xx     xx                  xx                                                                             ",
   "!!!!xxx!!!!!xxxxxxxxxxxx!!!!!!xx      xx!!!!!xxxx      xx                                                                               ",
   "!!!!xxx!!!!!!xxxxxxxxxxx!!!!!xx        xxxxxxxxxx                                                                                  xxxxx",
   "!!!!xxx!!!!!!xxxxxxxxxxx!!!!!xx                                                                                       o                 ",
   "!!!!xxx!!!!!!xxxxxxxxxxx!!!!!xx                                                  o                                                      ",
   "!!!!xxx!!!!!!xxxxxxxxxxx!!!!!x    o                                                                                                     ",
   "!!!!xxx!!!!!!xxxxxxxxxxx!!!!!x                                                                                xxxx   xxxx    xxxxx      ",
   "!!!!xxx!!!!!!xxxxxxxxxxx!!!!!x                                        xxxxxxx   xxx   xxxxxxx     xxxxxx!!!!!!xxxx!!!xxxx!!!!xxxxx!!!!!!",
   "!!!!xxx!!!!!!!!!!!!!!!!!!!!!!xx       xxxxxxxxxxxxx     xxxxxxx       !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "!!!!xxx!!!!!!!!!!!!!!!!!!!!!!!xxxxxxxxx!!!!!!!!!!!!!!!!!xxxxxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "!!!!xxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xxxxxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"],

  ["xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "                                                                                                                                         ",
  "                                                                                                                                         ",
  "                                                                                             *                    *                      ",
  "                                                 *                                                                                  11   ",
  "              *                                                         *                                                    1111  111   ",
  "                                                                                                                               1111111!  ",
  "                                                                                                                                         ",
  "    *       1111                  *             11                             *                          *                              ",
  "         111111111                           111111                                       11111                    llll                  ",
  "     1111111111111111        *              111111111                                    11111111111                                     ",
  "   11111111111111111111                1111111111111111             11                l1111111111111111                                  ",
  "                                                                   11111                                         11111                  x",
  "                             b                                                                               1111111111                 x",
  "                             b                                                                               11111111111111             x",
  "                            bbb                                                                                                         x",
  "                            bbb                                       *                                                                 x",
  "                   11      bbbbb                                                                                                  xxxxxxx",
  "                  1111     bbbbb              *          1111111                                   *                                    x",
  "                          bbbbbbb                                     b                                                                 x",
  "                         bbbbbbbbb                                    b                                                  111111         x",
  "                          bbbbbbb    111                             bbb           111                                                  x",
  "      111                 bbbbbbb    11111                          bbbbb        11111111                                               x",
  "    1111111            o  bbbbbbb  1111111111                        bbb                                                                x",
  "                          bbbbbbb                                    bbb                                      1111111                   x",
  "                          bbbbbbb                                    bbb                                                                x",
  "                          bbbbbbb                                    bbb                            11111                               x",
  "                    bbbbbbbbbbbbb                  *                 bbb                  o                                             x",
  "                          bbbbbbb                 1                  bbb                                                                x",
  "mmmmmmmmmmm               bbbbbbb                1111           b C   bbb              xxxxxxx                                          x",
  "!!!!!!!!!!                bbbbbbb                               bbbbbbbb                                                                x",
  "mmmmmmmm v                bbbbbbb                                    bbb                                                                x",
  "                          bbbbbbb                                    bbb                           xxxx                                 x",
  "             11           bbbbbbb                                    bbb                                                                x",
  "            11111         bbbbbbbb                    11111          bbb                     o                                          x",
  "                          bbbbbbb                                    bbb   o                                   xxxxxxxxxx               x",
  "                          bbbbbbb                                    bbb                     b                                          x",
  "                      o   bbbbbbb                                    bbbbbbbbbb              b                                          x",
  "                          bbbbbbb                                    bbb                    bbb                                         x",
  "                    bbbbbbbbbbbbb         11111111                   bbb                   bbbbb                                        x",
  "                          bbbbbbb                                    bbb                    bbb                                mmmmmmmmmx",
  "   o                      bbbbbbb                           bbbbbbbbbbbb                    bbbbxxxx                           !!!!!!!!!x",
  "                          bbbbbbb                                    bbb                    bbbxbxxxxxxx                       ! mmmmmmmx",
  "bbbbbbbbb                 bbbbbbb                              o     bbb                    bbbxbxbxxxxxxxxx                   v        x",
  "                          bbbbbbb C      x                           bbb                    bbbxbxbxxxxxxxxxxxxx                        x",
  "               xxxxxxxxxxxbbbbbbbxxxxxxxxx           xxxxxxxxxxxxxxxxbbb         xxxxxxxxxxxbbbxxxxxxxxxxxxxxxxxxx        xxxx   xxxxxxxx",
  "                                                                                                                                       =x",
  " =     @                                         o                                                                  o                   x",
  " =                                                                                                                                   o  x",
  "                            C                                        C                                                                  x",
  "!!!!xxxxxxxxxxxxxxxx!!!!!!!xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx!!!!!!!!!xxxxxxxxxxxxxxxxxxxx!!!!!!!!xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  ],
  
  ["                                                                                                                                          ",
   "                                                                                                                                          ",
   "                                                                                                                                          ",
   "                                                                                                                                          ",
   "                                                    *                                                                                     ",
   "                                                                                                   *                                      ",
   "     *                                *            11                                                                                     ",
   "                  *                               11111      11             *                  11111111                                *  ",
   "                                                 1111111 111111111                        11111111   11111111           *                 ",
   "  111  111                                    11111111111111111111111                 111111111         111111111                         ",
   "111111111111           111111111                                                                                                         1",
   "1111111111111111       11111111111                                                                                                     111",
   "                         1111111111111                                      111                                              1111   111111",
   "                                                 *            *           11111111                                         111111111111111",
   "                                                                      111111111111                                     1111111111111111111",
   "                                                                                                                                          ",
   "                                                                                                                                          ",
   "                                                11            11111                                                                       ",
   "                                             111111                                                                                       ",
   "                   *                    1111111111111                                                                                     ",
   "                   *          11111111111111111111111111                                                                                  ",
   "                   *     111111111111111111111111111111111                                                                                ",
   "                                                                                                                                          ",
   "                                                                                                                                          ",
   "                                                                                                                                          ",
   "                   b                                                           11    11                                                   ",
   "                   b                                                          1111  1111                                                  ",
   "                  bbb                                                      1111111111111                                                  ",
   "                 bbbbb                                                                                                                    ",
   "                bbbbbbb                                                                                                                   ",
   "               bbbbbbbb                                                                                                                   ",
   "               bbbbbbbb                                                                                                           1       ",
   "          bbbbbbbbbbbbb                                                                                                                   ",
   "               bbbbbbbb                                                                                                                   ",
   "               bbbbbbbb                                                                                                              1    ",
   "               bbbbbbbb                                                                                                               1   ",
   "               bbbbbbbb                                                                                                              1    ",
   "bbbbb          bbbbbbbb                                                                                                                   ",
   "               bbbbbbbb                                                                                                              bb   ",
   "               bbbbbbbb                                                                                                              bb   ",
   "               bbbbbbbb                                                                                                           xxxxxxxx",
   "               bbbbbbbb                                                                                                         xxxxxxxxxx",
   "  @        bbbbbbbbbbbb                                                                                                       xxxxxxxxxxxx",
   "             vvbbbbbbbb                                                                                                     xxxxxxxxxxxxxx",
   "               bbbbbbbb                                                                                                   xxxxxxxxxxxxxxxx",
   "               bbbbbbbb                                                                                                 xxxxxxxxxxxxxxxxxx",
   "              =bbbbbbbb                                        *                                                      xxxxxxxxxxxxxxxxxxxx",
   "               bbbbbbbb                                                                                                    b             x",
   "mmmmmmm        bbbbbbbb                                                                                                    b  *   *   *  x",
   "!!!!!!!!!!!!!!!bbbbbbbb                                                                                                    b             x",
   "xxxxxxxxxxxxxxxbbbbbbbb                                        C                                                           b  *   o   *  x",
   "                                                 xxxxxxxxxxxxxxxxxxxxxxxxxxxxx                                                           x",
   "     *                                        xxxxxxxxxxxxx          xxxxxxxxxxxxx         *                           *      *   *   *  x",
   "                                           xxxxxxxxxxxxx                xxxxxxxxxxxxx                                                    x",
   "                                        xxxxxxxxxxxxx                      xxxxxxxxxxxxx                *                bbbbbxxxxxxxxxxxx",
   "                        C           xxxxxxxxxxxxxx             C              xxxxxxxxxxxxx                          bbbbbbbbbxxxxxxxxxxxx",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   ],

   ["                                                                                                                                          ",
   "                                                                                                                                           ",
   "                                                                                                                                           ",
   "                                                                                                                                           ",
   "     @                                              *                                                                                      ",
   "                                                                                                   *                                       ",
   "     *                                *            11                                                                                      ",
   "                  *                               11111      11             *                  11111111                                *   ",
   "                                                 1111111 111111111                        11111111   11111111           *                  ",
   "  111  111                                    11111111111111111111111                 111111111         111111111                          ",
   "111111111111           111111111                                                                                                         11",
   "1111111111111111       11111111111                                                                                                     1111",
   "                         1111111111111                                      111                                              1111   1111111",
   "                                                 *            *           11111111                                         1111111111111111",
   "                                                                      111111111111                 *                    1111111111111111111",
   "                     *                                                                                                                     ",
   "                                                                                                                                           ",
   "    *                                                        *                                                                             ",
   "                             x     x    xxxxxx    x     x                  x       x     xxxxxxx     x     x                               ",
   "                              x   x     x    x    x     x                  x       x        x        xx    x                               ",
   "                               x x      x    x    x     x                  x   x   x        x        x x   x                               ",
   "                                x       x    x    x     x                  x   x   x        x        x  x  x                               ",
   "                                x       x    x    x     x                  x  x x  x        x        x   x x                               ",
   "                                x       x    x    x     x                  x x   x x        x        x    xx                               ",
   "                                x       xxxxxx    xxxxxxx                   x     x      xxxxxxx     x     x                               ",
   "                                                                                                                                           ",
   "                                                                                                                                           ",
   "                                                                                                                                           ",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   ],

];

if (typeof modCle != "Cndefined" && modCle.exports)
  modCle.exports = GAME_LEVELS;
 