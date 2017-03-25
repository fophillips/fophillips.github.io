var LEVELS = {
    name: function(input, state, terminal) {
        if(!input.toLowerCase().startsWith('janette')) {
            terminal.error("Hi " + input + ", but this is not for you!");
        } else {
            terminal.echo(
"██╗  ██╗██╗    ███╗   ███╗██╗   ██╗███╗   ███╗\n" +
"██║  ██║██║    ████╗ ████║██║   ██║████╗ ████║\n" +
"███████║██║    ██╔████╔██║██║   ██║██╔████╔██║\n" +
"██╔══██║██║    ██║╚██╔╝██║██║   ██║██║╚██╔╝██║\n" +
"██║  ██║██║    ██║ ╚═╝ ██║╚██████╔╝██║ ╚═╝ ██║\n" +
"╚═╝  ╚═╝╚═╝    ╚═╝     ╚═╝ ╚═════╝ ╚═╝     ╚═╝\n"
);
            terminal.echo("Who's your favourite son?");
            state = Object.assign(state, {level: 'favourite'});
        }
        return state;
    },
    favourite: function(input, state, terminal) {
        if(!input.toLowerCase().startsWith('fred')) {
            terminal.error("I don't think that's right... try again");
        } else {
            terminal.echo("Yes! " + input + " is your favourite son!");
            terminal.echo("Is your window full screen?");
            state = Object.assign(state, {level: 'screen'});
        }
        return state;
    },
    screen: function(input, state, terminal) {
        if(!input.toLowerCase().startsWith("y")) {
            terminal.error("Make it full screen!");
        } else {
            terminal.echo(
"MMMMMMMMMMMMMMMmds++/:-::--/-.-:--:/:---/+++++///+/o/:+s//-..:ymMMMMMMMmMMNNMMNMMMMNms/-.::.-/--.-::/+/.+o::..-`./o++s/..:```.......---.``..  .`    `.\n" +
"MMMMMMMMMMMMMdhs:-----/::+/:--:-----::://:::/++//://+++oo+//:-:shmmNMMMdMMNmNmmNNNNmmo--`-/++/-:/--+:.-soo::--.`...-::...:..---``` `..````..`..````  .\n" +
"MMMMMMMMMMMMhoy+-.`-//:++///:-.-----::/::::///::::///::/+ooossooosdNNNNdNMMNNdmMNNNh+:--.-/.``.`oy:-:/..+o::-:.`.-.``.:..:.```-````.`   ``-.``. ````..\n" +
"yhmNmhydMmdyoo+-`.://+o+++/:-..---::-:--:::-...-::-....-::+o+++/::oymNNNMMNNMNNNNmNmh//:.-```````:ho-:/:++:::/.`.soooo/..:````:..` `   `..-...-..````.\n" +
"..--.-/yymdso/.`.://++//:-.``.-:---.--..........``````..---:/--:::+oyNNNMMNNNddNMMMNNmhs+oo:....---/s/:/s+:::/-`.:.-.-.`.:```.-``  ``  ```.```-```..-.\n" +
".-...-+oss++/-.-//:-.....```...--```.....````````````.......-..--:/+odNNNMNNmssdmNNmNdyhy+ys-----...:ys:o+:::/-`-+./--:`.:-...-```````````...------...\n" +
"````.:+os+/--.-:-.`````````....```````````````````....`````..`.---:/+shmmNNNNhmNNNNdmsyo:-..``````````+yo+::...`-soooo:`.:-..--.-----....`-...-`...``.\n" +
"` ````:+/:-`.--.````````````````````````````````````````````.`...--://odNNdmNmNMMNNddys.`......``````..://::....-+:....`.:````:``````....`-``--......`\n" +
"````.`:/-.....`` ````````  `````````````````````````````````..``...-:::odddmmhmNNmmmms:--.--.``.``.`.``.//::...`.--/o/.`.:`  `:..``     ``--``-`````  \n" +
"--:::-/:.``.``` ```.````         ````        ````...`.....--..`````..--/hmmmNhmmmmdhs:--..-........`...-//:-...`:sso+:``.:.---:.```` ```..-  .-.`     \n" +
"-::/:-:..`````````..`````          ` ```    ``......----::////:-````..--sNdmNdmmmmdyy//:---.......-..---:::-....-:/+s+``.:---.-`` ````.```-`.--````` `\n" +
"/////:...```..--.---...``       ````````` ``...----::///++oosss+:.````../dhNmydmmmmmdhsyo+s+:-....--..-::::-.-.`:o/:-.``--````- ````.`  `.-.``. ` ``..\n" +
"///++/..```.--::-//:.-.``  ````........```.--::::////++oossssyyso:.`````.hdmmyhdmNNdmhsddydhs/:://::---:/::--..`.```````--`   -`..``    ...``.-.......\n" +
"////+:````.-:+o++oo/::--...-::::::-:::---::////++oosssyysyyyyyyss/.``````sdmNydNNNmdhyyys://-:://-:/-..+:::-....``..````-- ```:..      `.--..--..````.\n" +
"------`````-/ossssso++////++oooo++++++++++o+oosssyyyyyyyyyyyyysss+:``  ``:oodmMMMMMNddo-...-.:-.-/::::/--::-......++/```--`...-`.```````..::.-------..\n" +
"://:.-`````-+ssssyyyyysssssssoooooooosssooooossssssyyyyhhhhhhyssso/.`  ``.::ddmNNNNmho:------/:/-:o+-++:-::-.-....:/:```--`...-..````..---:-//-...````\n" +
"`:/:..````.:osssyyyysssooo++++++++++ooooooo++/++++++ooosssyyhhysso+-`   `.::::/+//+/:--..:-..:-:::/so/:::::-.:-::-:----.--```.-`...--.--.`-``-:.`  ```\n" +
"`.-:--````./osyso/::--...........--:////////-.--..````....-::/+osso:`   `.---:...--::::-.:/+++--.:///o::/::-.:..-------`--...-/-...--:-```....--:..```\n" +
".``..-````.oyyy+/::---..``````````.--:::/:::-...````````....--::+ss+.   `:///:--:--------//:----:.-/::o/:::-.-.....`````---...:````:::.`...  `.`.--```\n" +
"-..-.-.```-yhhyo////::--...`````....-:/+++/:-....`````....--:::/+yys-`  `:+/+/:--:/::::::-//::.-/+.-:--/:-----....-.```.--``..-```-::--..`.  `..``.--`\n" +
"---:sy:.``-yhhs+//:-..`````     ``..-:+yyys/-.```       ````.-::/syy+`` `syo+:/+++o++////::::----:o-./:-:---/:-.--:/.`.:..````:-:/oosso:...`..```   .:\n" +
"++/s+/:.`.-yhhs+:-.``````    `````.-:/ohhhho:-.`````` ` `````..-/oyys.```//so+oooooo++-...```..``.::-.-:::--::---------:--....:-/////:---:.``````````-\n" +
"-::o/:::..-yhhysso+//::--.......-::/+oshddds+//:--..-----:://+ossyhhy-``-::+o/+++o+/:-..--...-..````//.-:---+:-`--..``.:..````:.-..-:-.....```.`...--:\n" +
"``.:/:://.:yddhhhhhys+//:::-::/+ooooosyhdddysooooo+///://+osyhdddddhh/.-+/:/s/+++++/:-::-.....```````/+-----o/////:---:/.....-:..--.-----.---::::::://\n" +
"-..-+//++.:yddhdddddhhhyyyyyyyyyssssssyddddhsssyyyyyyhhhhhddmmmmdddddo.+o+/+s//o//:::://://.--`.....`.:+----.-...`....--..-------::-::::---::--:-..--.\n" +
"-:::-++oo--yhhhhddddddhhhhhyyysssssyyyhhddddyyyysoossyyhhhdddddddddhhy-+oo/+o+/++//::::+//+::-..--.-..-----.`:``` `````..````.....`..````````.``` .` `\n" +
":/::.-ooo/-yhhhhhhhhyyyyssso+/:-:ossyhhyyhhhhyyso:.-:/+ossyyyhhhhdddhy-++++++++o++o/:::+/++/::--:-......---..-..```````..`````.`````-` `.`````` ```  `\n" +
"://:..:soo:ohhhyyyssssoo++/:-..-syhyhhhhyyyhhhhhhy-..-://+ooosyyyhhhhhoo+o++++++++s/:::++oyys+//:-.-`.-----..-.`````..`.`` ```.`` `.-`````````````````\n" +
"::::.`.oysyshyysssoo+////:--.--:+ssssyyssossyysso+:-...-::///+ooossyyyosss+o+:/+++s+/+/ooos+o+o+-.`..`..---..-````` ````````````.``.-.`   ````````````\n" +
"://:.``/ddhossoooo++//::--..-:::::-::/++/:://----:::-....--::://+++oosshh//////::---::/yooyosooo-.......---.---::-://+++-```.`..`````.````````````````\n" +
":/::```:hdh+oo++++++/::--..-:////:-...------.`.-////:-.``.--::///////+ohs:/++//+/://:/oyo+o+o+oo+++oooo+:---++++:..::/+: `/y/:```````````````````  ```\n" +
":/:-```.-+o/+++//++//:-.`..-:/++++/::-.`````.-:/+++//:-..``.-:///::::/+so++oooooooooooosoos/ooooooooooo+/++:///++:::--+- `+o-/`````````````   ````````\n" +
":/--```````.+/::::+//:-``..-::---------............````.....-://:----:.-+++ooo+soooooooo+oo+ooooooooooo+oooo////++o+/:----```.`````````````     `  ```\n" +
"---.````````//:/:-///:-....``  ``:---.-:-.-::-/+-:`  `.--..-:/:::----.``+oo+//////:/+ooooooooooooooooooo+ooo+///++oo:``-:-:````````````````       ````\n" +
"----.`..````.////::////:---:-.```///+/+oo/+oo++o::--:://::-:::------.``-/:--.....--.-/ooo++++++++ooossssooosssssooo+. `-/-:/+:`````````````         ``\n" +
"`````````````./::/:////:--://::--:..:-////:///:///////+++/::-----...---:....````....`.:oo+++++ooo++++++//////++++ooo+/::-.:-:-`````````````         ``\n" +
"         `````.::::::::::-://///::///://///////::///+ooo+/::-.....-+o+/-...````.`..``..+oooooooo++/::-------:--:/://++++/+:---````````.-..`  ``     ``\n" +
"          ``````-----------:+++///:::::::::::--:::/+ooss+:--.```./hsso-....`...`````.-:ooo+ooo+/--:::-:--:/:--.-:--::////+++/:.```..``.yhy+-o--.`   ``\n" +
"           `````..-........-/+++///::------.---::/+ooso+/-.````.sds/+/..-:----````..-/++//+oso+:-:::+/://:/+/:--.--.-:/::::/++/:-..`...syy++s++/-`  ``\n" +
"    `.--/+++-```./.....``...-:/+++///:::-::://++oooss+/:-.````-yhsyo/:..://:-````..:+++/++ooo/+//-//+//:/++///:---:..--:-::-:/+++/:::-.-....:+++:````-\n" +
"```-syhhhyso+/:``o/-`````.``.--/++ooooooooooooosssso+:-..````/hyo/+oss/:/:/-`````.:+//++/++//://:.::+/////+/++:::-/---.----:::-:/+osss+-``` `..`````-s\n" +
":::osoosyyyso++-+ho/-.```````..:::+ooooooooooooo+++/--.`    -s//+/++oo+/:--.````-::://:::/:::-///:/++/://:/++o//://::-....-::--:--:/+ss+.`` ` `.+yys+/\n" +
"hyyy:/sooyso+//+Nms+/-.````````..--://++////:::::--..``  ``.+/.-/osssyyyh:.....-:---::---:--.-/:+++++/::::///++/:+o++/:-...------:--://+/.` ` `-:++/-.\n" +
"hhhho+sosyyyo--dMmyo/:-..````````...--:---------...```````.:smo:ohhyhdmmy-...----...--..---..-:-/+o++///::::/++/:+ssoo+/:--...-:----.-::::-`` .` ``   \n" +
"hhhhhyyyyyyys-.NMNys+/:-...`````````............`````````.:+sdNy/++:-+dy+o/-.--..........-...--.-/+o////::::://+:osysyso+//::+o+/:--:..---:-.`.```  ``\n" +
"ddddddddhyso+/.mMNhso+/:-....```````````.....```````````.-/+somM+``  `ohmms:-..`...`..`...``.-...://+//::-::://+:+os+sy/:-:.:+++ss:---.....---.-:.````\n" +
"hhhyyhhs++/+++.yNNNsoo+/::--....`........--......````..-:/+oo.dMmo-`  `smm+-..````.``.``.```...---:://:::---/+++:--..-:::---...:/os-.--```...--:-.````\n" +
"yyysss+oo/////--mNNmo++///:-----.....................--://+o+.mMmhh+-` .yo-.````````````````....-::::/:/-.-:/oyo...----------....-/--..````....---.```\n" +
"ys//:/oo/::::/:`sNNNmo/+////:::::-----..........----::///++o:+NMmyyyo::--:.`````````````````.`..-::::::/...-`-:-...-...-.--..````.``...`````....-:-.``\n" +
"o/:::+o+/::::::.-mNNNm+/////////:::::::---------::://///+++//mNMmsysoo::-.`````````````````````.-:///:--.```    `````......`` ```---` ``  ```....-::-`\n" +
"+/:::/+//::::::-`smNNNm+//////////////:::::::::::://///+++/-ymMMhos+++/-.``````````````````` ``.--////:-```         ```````   ````..` ``    ````..-::-\n" +
"++/://///::::/:-.-mNNMNm+:///////:/://////::::::://///+//:-:hmMMyoo///-..``` ``````````````   ``..-::::. `                 ````..`:/-```     `````..--\n" +
"+//://////:::/::-`smNNMMNo::////:::::::::////////////////-./mNMNs+/-::..````  `````````````      `` ``` `-`              ```..--:+so+:.``     ````..--\n" +
"///////////:::/:-..dNNMMMNs:::::::::::::::::////////////:-/hNNMN+/----``````   ``.--``                 ``..            ```..--://+oyso+-``      ```.-:\n" +
"o////////://::::-:`+NNNMMMNy::///::////////////////////:--hNNMMN/---..``````   `-/-`              ``  `.://--.   ``````...--://osshhhyso:.`     ````.-\n" +
"Nh+/////////::-:---`dNNMMMNmh+///////////////////+////:-:hmy:odN:.....```````..```                   ../syhdy/``..``...--:///-:shhddddhys+:.``` `..`.-\n" +
"NNms///::/::::::-.-`+mNNNh++sdo///////////////+++++//:::hmh-.-/y:....```   `.:`     ``               ..+sydmddds/-/++++-.-:/:/oyhhhhhdhhys+:`..`.-.`.-\n" +
"NNNNdo/:::::::::--..`hmNh//+oydy////+++++++++++++++/:::sdy--./os-...````    .:-.    `                 ./oydddmmmho//-...-:/+ossyyyyyyyyhhyo/::..-.```.\n" +
"NNNNNNy/::::::::--..`/mmh//osyhdy/++++++++++++++++//:+yso/:--os:.`.```` `.`  ...                      :+shdddddmddddh+--..-:/+oosssssoosyhyo/-.-.````.\n" +
"NNNNNNNms:::::::---.``ydh//+oosyh++++++++++++ooo++/oddds///::o-.``..```.:-.`     `             ```````:osyhhyysoo++/://///----:/++ooo+/+shhs-...`````.\n" +
"NNNNNNNNNd+:::::---..`-hho//+oshhyso+ooooooooooo+odmmdy+++/:/:````.```-/:-.``   ```   `      `````` `:+//+++//::---:/+oooo+:-...-:/+so//oyhh:````````.\n" +
"NNNNNNNNNNNh/:::----.``/yo++++oyhhmNdyoooooooooohmNmmdho+++::```..``.+o+/-.```   ```  ````````...```-//-...--..--:/+ossssso+/:--...:+ss+osyyo` ````...\n" +
"NNNNNNNNNNNNms:::---..``/sooooossyyysyhyssooooymNNNNmmhsoooo-``....:sso+:-...``     `.-````..``......-........--:+osssso+/::-....--:+osoosyys.` ```...\n" +
"NNNNNNNNNNNNNNd+::---..`/+sssssssyyyyyyhdyssymNNNNNmdhyssso:`.....ohyyo+:::-..``       `...----:/:..--------:::/+++/::----..` `-////+osssssys-`````..-\n" +
"NNNNNNNNNNNNNNNNy/:--..`+yhhhhhhyyhhhdddddhhNNmdhyoosyhhyys-....:yddhyo///:--..`        .:::////:-.---::::::::-------:++/+--`.:+oso+oosssssss- `````..\n" +
"NNNNNNNNNNNNNNNNNms:-...-hddddddddddddmmmmmdyoo++ossssyso+:....+dmddhyooo//:-..```       -:////::-.--::::--.......:++/os/+-:/+osysssssoosssoo-`  ``...\n" +
"NNNNNNNNNNNNNNNNNNNh/-.../hmNNmmmmNNNNNNNNdssssssyyyyysso+--.:ymmmddhyooo//::-.````      `-:::::--..---.``..-:-::/:+///+/+oossyyyyyyssoosooo//.`  ```.\n" +
"NNNNNNNNNNNNNNNNNNNNmo-...ohmNNNNNNNNNNNNdyyhdhhhhhhddhyso--+dmmmmdddhyo+///::..```        .::----....`  `.::::----:/++ooossyyhhyyhhysoooo+//+/.`   ``\n" +
"NNNNNNNNNNNNNNNNNNNNNNh:../shmmNNNNNNNNmmdddmmddmmmmmmddy+:ymmmmmmmddddyo//::-.```````      .---------..````...-::////++osyyhhhhhhhhysoo++///oo/.`   .\n" +
"NNNNNNNNNNNNNNNNNNNNNNNd+.-oydmNNNNNNNmdmmmmmNmmmmmmmmmdh+dNNmmmmmmmmmdhyso+/-.```````       `---::/:::::------:://+++ossyyhhhhhhhhhso++///++so+:-```.\n" +
"NNNNNNNNNNNNNNNNNNNNNNNNNy-+yhmNNNNNmmddmmNmNNNmmmmmmNmdshNNNmmmmmmmmmddhyyo+-.````````       `---:://///::::::///++ossyyhhdddddddhyo//:::++oooo+:-``.\n" +
"NNNNNNNNNNNNNNNNNNNNNNNNNNd+sydmNNNmmmdmmNNNNNNmmmmmmmmdyNNNNmmmmmmmmmddhhyys/:.``````          .----://///::://++oosyyyhhhhhhhhhys+:::-:/++oooo+/:-.`\n" +
"NNNNNNNNNNNNNNNNNNNNNNNNNNNmsshdmNNNmmhNNNNNNNNmmmmdmmmymNNNNNNNNNNNmmmddhhys+o+:.`````          `.----:////////+ooosssyyysssssso+:-----://++++++/:-.`\n" +
"NNNNNNNNNNNNNNNNNNNNNNNNNNNNdshddmNNmmhNNNNNNNNNmmmdddhdNNNNNNNNNNNNmmmmddhhyooso+:.``              `.-.--:://++++++o+++++++////:---::::://+++++//:-``\n" +
"NNNNNNNNNNNNNNNNNNNNNNNNNNNNNhyddmmNmmdNNNNNmNNNmNmmddhNNNNNNNNNNNNmmmmmdddhyssysso/-`                ``....-://///////:------..---::::::://++///:-.``\n" +
"NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNydddmNmmdNNNNNNNNNmNmmdhmNNNNNNNNNNNNmmmmmmddhhysyyso+/`                    ````..---:---.....`...----:::::////////:-`` \n" +
"NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNmhddmmmmmNNNNNNNNNmNmmddNNNNNNNNNNNNNNmmmmmmddhhysyys+`                          `````````````......---:://////++/:-.`  \n" +
"NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNmddmmmmmNNNNNmNNNmNmdhNNNNNNNNNNNNNNNNmmmmmmddhhhso+`          `                   ``````````......----:////++++/:-`   \n" +
"NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNddmmmmmNNNNNNNNNmNmhmNNNNNNNNNNNNNNNNmmmmmmmdddhyo`                                ``````````.......-::///++++//:-``  \n" +
"NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNmhdmmmmNNmmmmNNNmNmdNNNNNNNNNNNNNNNNNNmmmmmmmddho`                                   ``````````.....-::////////::.`   \n" +
"NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNdhmmmmNNNNmNNNNmmhNNNNNNNNNNNNNNNNNNNNmmmmmmdh/                                      ``````````...--:::::////::-``` `\n" +
"NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNhdmmmNNNmmmmmmhhmNNNNNNNNNNNNNNNNNNNNNmmmmdh:                                        `````......-----::::::::-.`````\n" +
"/mNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNhmmmmmmmmmmNNyhNNNNNNNNNNNNNNNNNNNNNNNmmdh-                                           ````........-----::---.``  ``\n" +
" `sNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNmmmdmNmmmNNNNyNNNNNNNNNNNNNNNNNNNNNNNNmmy`                                             `...``.......------..` `` ``\n"
);
            terminal.echo(
" ___  ___  ________  ________  ________  ___    ___                              \n" +
"|\\  \\|\\  \\|\\   __  \\|\\   __  \\|\\   __  \\|\\  \\  /  /|                             \n" +
"\\ \\  \\\\\\  \\ \\  \\|\\  \\ \\  \\|\\  \\ \\  \\|\\  \\ \\  \\/  / /                             \n" +
" \\ \\   __  \\ \\   __  \\ \\   ____\\ \\   ____\\ \\    / /                              \n" +
"  \\ \\  \\ \\  \\ \\  \\ \\  \\ \\  \\___|\\ \\  \\___|\\/  /  /                               \n" +
"   \\ \\__\\ \\__\\ \\__\\ \\__\\ \\__\\    \\ \\__\\ __/  / /                                 \n" +
"    \\|__|\\|__|\\|__|\\|__|\\|__|     \\|__||\\___/ /                                  \n" +
"                                       \\|___|/                                   \n" +
"                                                                                 \n" +
"                                                                                 \n" +
" _____ ______   ________  _________  ___  ___  _______   ________  ________      \n" +
"|\\   _ \\  _   \\|\\   __  \\|\\___   ___\\\\  \\|\\  \\|\\  ___ \\ |\\   __  \\|\\   ____\\     \n" +
"\\ \\  \\\\\\__\\ \\  \\ \\  \\|\\  \\|___ \\  \\_\\ \\  \\\\\\  \\ \\   __/|\\ \\  \\|\\  \\ \\  \\___|_    \n" +
" \\ \\  \\\\|__| \\  \\ \\  \\\\\\  \\   \\ \\  \\ \\ \\   __  \\ \\  \\_|/_\\ \\   _  _\\ \\_____  \\   \n" +
"  \\ \\  \\    \\ \\  \\ \\  \\\\\\  \\   \\ \\  \\ \\ \\  \\ \\  \\ \\  \\_|\\ \\ \\  \\\\  \\\\|____|\\  \\  \n" +
"   \\ \\__\\    \\ \\__\\ \\_______\\   \\ \\__\\ \\ \\__\\ \\__\\ \\_______\\ \\__\\\\ _\\ ____\\_\\  \\ \n" +
"    \\|__|     \\|__|\\|_______|    \\|__|  \\|__|\\|__|\\|_______|\\|__|\\|__|\\_________\\\n" +
"                                                                     \\|_________|\n" +
"                                                                                 \n" +
"                                                                                 \n" +
" ________  ________      ___    ___                                              \n" +
"|\\   ___ \\|\\   __  \\    |\\  \\  /  /|                                             \n" +
"\\ \\  \\_|\\ \\ \\  \\|\\  \\   \\ \\  \\/  / /                                             \n" +
" \\ \\  \\ \\\\ \\ \\   __  \\   \\ \\    / /                                              \n" +
"  \\ \\  \\_\\\\ \\ \\  \\ \\  \\   \\/  /  /                                               \n" +
"   \\ \\_______\\ \\__\\ \\__\\__/  / /                                                 \n" +
"    \\|_______|\\|__|\\|__|\\___/ /                                                  \n" +
"                       \\|___|/                                                   \n" +
"                                                                                 \n" +
"                                                                                 \n"
            );

            state = Object.assign(state, {level: "end"});
        }
        return state;
    },
    end: function(input, state, terminal){
        return state;
    }
};

function initial_state(state) {
    return Object.assign(state, {level: 'name'});
}

jQuery(function($, undefined) {
    var state = initial_state({});

    $('body').terminal(function(input) {
        if (input !== '') {
            state = LEVELS[state.level](input, state, this);
        } else {
            this.echo('');
        }
    }, {
        greetings: 'Hello! Type your name and press Enter',
        name: 'mothers_day',
        height: 400,
        prompt: '>>> '
    });
});
