const JY_STATE_KEY = 'jy_ielts_state_v36_mocktest_timecheck';
const JY_FILE_DB_NAME = 'jy_ielts_file_store_v1';
const JY_FILE_STORE_NAME = 'lectureProofFiles';
const JY_PREP_DATE = '2026-05-11';
const JY_START_DATE = '2026-05-12';
const JY_EXAM_DATE = '2026-06-25';
const JY_LECTURE_FINISH_DATE = '2026-06-22';
const JY_SCHEDULE_MIGRATION_VERSION = 'v180_20260518_test1_exception_balanced';

const JY_LECTURE_NOTE_DUE_OVERRIDES = {
  '2026-05-14':'2026-05-15'
};
const JY_EXTRA_LECTURE_NOTE_DUE = {
  '2026-05-15':{listening:['040']}
};
const JY_EXPLICIT_LECTURE_NOTE_SCHEDULE = {
  '2026-05-15':['040']
};
const JY_RECURRING_PERSONAL_TASKS = [
  {id:'market-invoice-am', label:'마켓 송장 등록 1회차', section:'market_invoice_am', startDate:'2026-05-15'},
  {id:'market-invoice-pm', label:'마켓 송장 등록 2회차', section:'market_invoice_pm', startDate:'2026-05-15'}
];
const JY_RECURRING_ACADEMIC_TASKS = [
  {id:'phrase-structure-practice', label:'구문 구조 연습 30문장', section:'phrase_drill', startDate:'2026-05-18'}
];
const JY_PDF_PAGE_RENDER_MAX = 40;
const JY_FILE_MAGNIFIER_ZOOM = 2.35;
const JY_LECTURE_NOTE_EDITOR_OPEN_KEY = 'jy_ielts_lecture_note_editor_open_v131';
const JY_SKILL_REVIEW_EDITOR_OPEN_KEY = 'jy_ielts_skill_review_editor_open_v133';
const JY_GRAMMAR_NOTE_EDITOR_OPEN_KEY = 'jy_ielts_grammar_note_editor_open_v133';
const JY_PHRASE_NOTE_EDITOR_OPEN_KEY = 'jy_ielts_phrase_note_editor_open_v135';
const JY_TEXT_PAGE_CHAR_LIMIT = 900;
const JY_NOTE_PAGE_MODE_KEY = 'jy_ielts_note_page_mode_v139';
const JY_NOTE_CLEANUP_VERSION = 'v141_two_page_submit_cleanup';
const JY_EDITOR_PAGE_BREAK_HTML = '<div class="jy-editor-page-break" data-jy-page-break="1" contenteditable="false"><span>쪽 나눔</span></div>';

const JY_RESCHEDULE_BASELINE_COMPLETED_CODES = ['037','038','039','040','053','054','055','065','066'];
const JY_MANUAL_FIXED_SCHEDULE_CODES = {
  '2026-05-18':['073','074','081','082','083']
};
const JY_RESCHEDULE_MASTER_ORDER = ["037", "038", "039", "040", "053", "054", "055", "065", "066", "073", "074", "081", "082", "083", "190", "191", "192", "193", "194", "195", "196", "197", "198", "230", "231", "232", "233", "234", "235", "236", "041", "042", "043", "044", "056", "057", "058", "067", "068", "075", "076", "084", "085", "086", "199", "200", "201", "202", "203", "204", "205", "206", "207", "208", "237", "238", "239", "240", "241", "242", "045", "046", "047", "048", "059", "060", "061", "069", "070", "077", "078", "087", "088", "089", "209", "210", "211", "212", "213", "214", "215", "216", "217", "218", "243", "244", "245", "246", "247", "248", "249", "250", "251", "252", "253", "254", "255", "256", "257", "049", "050", "051", "052", "062", "063", "064", "071", "072", "079", "080", "090", "091", "092", "219", "220", "221", "222", "223", "224", "225", "226", "227", "228", "258", "259", "260", "261", "262", "263", "264", "265", "266", "267", "268", "269", "270", "271", "272", "093", "094", "095", "096", "109", "110", "111", "121", "125", "129", "130", "131", "274", "275", "276", "277", "278", "295", "296", "297", "298", "299", "300", "301", "302", "097", "098", "099", "100", "112", "113", "114", "122", "126", "132", "133", "134", "279", "280", "281", "282", "283", "303", "304", "305", "306", "307", "308", "101", "102", "103", "104", "115", "116", "117", "123", "127", "135", "136", "137", "284", "285", "286", "287", "288", "309", "310", "311", "312", "105", "106", "107", "108", "118", "119", "120", "124", "128", "138", "139", "140", "289", "290", "291", "292", "293", "313", "314", "315", "316", "141", "142", "143", "144", "157", "158", "159", "169", "173", "177", "178", "179", "145", "146", "147", "148", "160", "161", "162", "170", "174", "180", "181", "182", "149", "150", "151", "152", "163", "164", "165", "171", "175", "183", "184", "185", "153", "154", "155", "156", "166", "167", "168", "172", "176", "186", "187", "188", "317", "318", "319", "320", "321", "322", "323", "324", "325", "326", "327", "328", "329", "330", "331", "332", "333", "334", "335", "336", "337", "338", "339", "340", "341", "342", "343", "344", "345", "346", "347", "348", "349", "350", "351", "352", "353", "354", "355"];



const JY_PLAN = [{"date":"2026-05-11","day":0,"stage":"준비일","codes":[],"lectures":{"listening":[],"reading":[],"writing":[],"speaking":[]},"minutes":0,"subjects":"","tasks":[],"tutor":false,"words":0},{"date":"2026-05-12","day":1,"stage":"Mock Test 1 완료 정리","codes":[],"lectures":{"listening":[],"reading":[],"writing":[],"speaking":[]},"minutes":300,"subjects":"Mock Test 1 문제풀이","tasks":[{"id":"mock_test_1_solve","label":"Mock Test 1 문제풀이","section":"mock_test_1"},{"id":"mock_test_1_review","label":"Mock Test 1 오답노트","section":"mock_review"}],"tutor":false,"words":0},{"date":"2026-05-13","day":2,"stage":"Mock Test 1 오답 정리","codes":[],"lectures":{"listening":[],"reading":[],"writing":[],"speaking":[]},"minutes":0,"subjects":"오답노트 / 리스닝 / 리딩","tasks":[{"id":"mock_test_1_review_carry","label":"Mock Test 1 오답노트","section":"mock_review"},{"id":"listening_2026-05-13","label":"리스닝 문제 1세트","section":"listening"},{"id":"reading_2026-05-13","label":"리딩 문제 1지문","section":"reading"}],"tutor":false,"words":0},{"date":"2026-05-14","day":3,"stage":"실전모의고사1 Test1 Listening","codes":["037","038","039","040"],"lectures":{"listening":[{"code":"037","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Listening","title":"1강 Test1 Section1","duration":"22:23"},{"code":"038","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Listening","title":"2강 Test1 Section2","duration":"18:31"},{"code":"039","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Listening","title":"3강 Test1 Section3","duration":"23:04"},{"code":"040","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Listening","title":"4강 Test1 Section4","duration":"24:30"}],"reading":[],"writing":[],"speaking":[]},"minutes":88,"subjects":"Test1 Listening Section1~4","tasks":[],"tutor":false,"words":0},{"date":"2026-05-15","day":4,"stage":"실전모의고사1 Test1 Reading","codes":["053"],"lectures":{"listening":[],"reading":[{"code":"053","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Reading","title":"1강 Test1 Passage1","duration":"41:39"}],"writing":[],"speaking":[]},"minutes":42,"subjects":"Test1 Reading Passage1","tasks":[{"id":"words_2026-05-15","label":"단어 100개 암기","section":"words"},{"id":"grammar_2026-05-15","label":"문법 1개","section":"grammar"},{"id":"listening_2026-05-15","label":"리스닝 문제 1세트","section":"listening"},{"id":"reading_2026-05-15","label":"리딩 문제 1지문","section":"reading"},{"id":"writing_2026-05-15","label":"라이팅 1개 작성","section":"writing"}],"tutor":false,"words":100},{"date":"2026-05-16","day":5,"stage":"실전모의고사1 Test1 Reading Writing Task1","codes":["054","055","065","066"],"lectures":{"listening":[],"reading":[{"row":"054","date":"","code":"054","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Reading","title":"2강 Test1 Passage2","duration":"42:09"},{"row":"055","date":"","code":"055","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Reading","title":"3강 Test1 Passage3","duration":"30:08"}],"writing":[{"row":"065","date":"","code":"065","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Writing Task1","title":"1강 Task1 Test1 (1)","duration":"24:41"},{"row":"066","date":"","code":"066","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Writing Task1","title":"2강 Task1 Test1 (2)","duration":"20:51"}],"speaking":[]},"minutes":118,"subjects":"Test1 Reading Passage2~3 / Writing Task1","tasks":[{"id":"words_2026-05-16","label":"단어 100개 암기","section":"words"},{"id":"grammar_2026-05-16","label":"문법 1개","section":"grammar"},{"id":"listening_2026-05-16","label":"리스닝 문제 1세트","section":"listening"},{"id":"reading_2026-05-16","label":"리딩 문제 1지문","section":"reading"},{"id":"writing_2026-05-16","label":"라이팅 1개 작성","section":"writing"}],"tutor":false,"words":100},{"date":"2026-05-17","day":6,"stage":"스케줄 조정일","codes":[],"lectures":{"listening":[],"reading":[],"writing":[],"speaking":[]},"minutes":0,"subjects":"복습 / 개인 정리","tasks":[{"id":"words_2026-05-17","label":"단어 100개 암기","section":"words"},{"id":"grammar_2026-05-17","label":"문법 1개","section":"grammar"},{"id":"listening_2026-05-17","label":"리스닝 문제 1세트","section":"listening"},{"id":"reading_2026-05-17","label":"리딩 문제 1지문","section":"reading"},{"id":"writing_2026-05-17","label":"라이팅 1개 작성","section":"writing"}],"tutor":false,"words":100},{"date":"2026-05-18","day":7,"stage":"실전모의고사1 Test1 Writing Speaking","codes":["073","074","081","082","083"],"lectures":{"listening":[],"reading":[],"writing":[{"row":"073","date":"","code":"073","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Writing Task2","title":"9강 Task2 Test1 (1)","duration":"16:54"},{"row":"074","date":"","code":"074","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Writing Task2","title":"10강 Task2 Test1 (2)","duration":"19:52"}],"speaking":[{"row":"081","date":"","code":"081","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Speaking","title":"1강 Test1 Part1","duration":"12:36"},{"row":"082","date":"","code":"082","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Speaking","title":"2강 Test1 Part2","duration":"13:22"},{"row":"083","date":"","code":"083","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Speaking","title":"3강 Test1 Part3","duration":"15:52"}]},"minutes":79,"subjects":"Test1 Writing Task2 / Speaking Part1~3","tasks":[{"id":"words_2026-05-18","label":"단어 100개 암기","section":"words"},{"id":"grammar_2026-05-18","label":"문법 1개","section":"grammar"},{"id":"listening_2026-05-18","label":"리스닝 문제 1세트","section":"listening"},{"id":"reading_2026-05-18","label":"리딩 문제 1지문","section":"reading"},{"id":"writing_2026-05-18","label":"라이팅 1개 작성","section":"writing"}],"tutor":false,"words":100},{"date":"2026-05-19","day":8,"stage":"Kings4 문제풀이 + 실전모의고사1","codes":["236","041","042","043"],"lectures":{"listening":[{"row":"236","date":"","code":"236","stage":"Kings4 문제풀이","course":"Kings 4.0+ 문제풀이","subject":"Listening","title":"7강 Multiple choice with more than one answer","duration":"22:18"},{"row":"041","date":"","code":"041","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Listening","title":"5강 Test2 Section1","duration":"17:58"},{"row":"042","date":"","code":"042","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Listening","title":"6강 Test2 Section2","duration":"15:47"},{"row":"043","date":"","code":"043","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Listening","title":"7강 Test2 Section3","duration":"18:55"}],"reading":[],"writing":[],"speaking":[]},"minutes":255,"lectureTargetMinutes":260,"subjects":"강의 4개 / 모의고사 3시간","tasks":[{"id":"words_2026-05-19","label":"단어 100개 암기","section":"words"},{"id":"grammar_2026-05-19","label":"문법 1개","section":"grammar"},{"id":"listening_2026-05-19","label":"리스닝 문제 1세트","section":"listening"},{"id":"reading_2026-05-19","label":"리딩 문제 1지문","section":"reading"},{"id":"writing_2026-05-19","label":"라이팅 1개 작성","section":"writing"},{"id":"mock_test_2_2026-05-19","label":"Mock Test 2 3시간","section":"mock_test_2"}],"tutor":false,"words":100},{"date":"2026-05-20","day":9,"stage":"실전모의고사1 + Kings4 이론","codes":["044","056","057","058","067","068","075","076","084","085","086","199"],"lectures":{"listening":[{"row":"044","date":"","code":"044","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Listening","title":"8강 Test2 Section4","duration":"21:07"}],"reading":[{"row":"056","date":"","code":"056","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Reading","title":"4강 Test2 Passage1","duration":"29:27"},{"row":"057","date":"","code":"057","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Reading","title":"5강 Test2 Passage2","duration":"44:06"},{"row":"058","date":"","code":"058","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Reading","title":"6강 Test2 Passage3","duration":"37:03"},{"row":"199","date":"","code":"199","stage":"Kings4 이론","course":"Kings 4.0+ 이론","subject":"Reading","title":"1강 Using the Time","duration":"14:14"}],"writing":[{"row":"067","date":"","code":"067","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Writing Task1","title":"3강 Task1 Test2 (1)","duration":"20:26"},{"row":"068","date":"","code":"068","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Writing Task1","title":"4강 Task1 Test2 (2)","duration":"22:57"},{"row":"075","date":"","code":"075","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Writing Task2","title":"11강 Task2 Test2 (1)","duration":"12:08"},{"row":"076","date":"","code":"076","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Writing Task2","title":"12강 Task2 Test2 (2)","duration":"21:38"}],"speaking":[{"row":"084","date":"","code":"084","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Speaking","title":"4강 Test2 Part1","duration":"10:04"},{"row":"085","date":"","code":"085","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Speaking","title":"5강 Test2 Part2","duration":"10:25"},{"row":"086","date":"","code":"086","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Speaking","title":"6강 Test2 Part3","duration":"12:23"}]},"minutes":256,"lectureTargetMinutes":260,"subjects":"강의 12개","tasks":[{"id":"words_2026-05-20","label":"단어 100개 암기","section":"words"},{"id":"grammar_2026-05-20","label":"문법 1개","section":"grammar"},{"id":"listening_2026-05-20","label":"리스닝 문제 1세트","section":"listening"},{"id":"reading_2026-05-20","label":"리딩 문제 1지문","section":"reading"},{"id":"writing_2026-05-20","label":"라이팅 1개 작성","section":"writing"}],"tutor":false,"words":100},{"date":"2026-05-21","day":10,"stage":"Kings4 이론 + Kings4 문제풀이","codes":["200","201","202","203","204","205","206","207","208","237","238"],"lectures":{"listening":[],"reading":[{"row":"200","date":"","code":"200","stage":"Kings4 이론","course":"Kings 4.0+ 이론","subject":"Reading","title":"2강 Understanding the Question","duration":"23:55"},{"row":"201","date":"","code":"201","stage":"Kings4 이론","course":"Kings 4.0+ 이론","subject":"Reading","title":"3강 Scanning for Meaning","duration":"18:35"},{"row":"202","date":"","code":"202","stage":"Kings4 이론","course":"Kings 4.0+ 이론","subject":"Reading","title":"4강 Key Words Synonyms and Paraphrase","duration":"19:49"},{"row":"203","date":"","code":"203","stage":"Kings4 이론","course":"Kings 4.0+ 이론","subject":"Reading","title":"5강 The Structure of Paragraphs","duration":"26:49"},{"row":"204","date":"","code":"204","stage":"Kings4 이론","course":"Kings 4.0+ 이론","subject":"Reading","title":"6강 Unknown Words and Phrases","duration":"30:32"},{"row":"205","date":"","code":"205","stage":"Kings4 이론","course":"Kings 4.0+ 이론","subject":"Reading","title":"7강 Distractors","duration":"15:39"},{"row":"206","date":"","code":"206","stage":"Kings4 이론","course":"Kings 4.0+ 이론","subject":"Reading","title":"8강 Opinions","duration":"29:00"},{"row":"207","date":"","code":"207","stage":"Kings4 이론","course":"Kings 4.0+ 이론","subject":"Reading","title":"9강 Detailed Reading","duration":"27:07"},{"row":"208","date":"","code":"208","stage":"Kings4 이론","course":"Kings 4.0+ 이론","subject":"Reading","title":"10강 Checking your Answers","duration":"24:10"},{"row":"237","date":"","code":"237","stage":"Kings4 문제풀이","course":"Kings 4.0+ 문제풀이","subject":"Reading","title":"1강 Diagram Labelling","duration":"21:42"},{"row":"238","date":"","code":"238","stage":"Kings4 문제풀이","course":"Kings 4.0+ 문제풀이","subject":"Reading","title":"2강 short answer questions","duration":"16:29"}],"writing":[],"speaking":[]},"minutes":254,"lectureTargetMinutes":260,"subjects":"강의 11개","tasks":[{"id":"words_2026-05-21","label":"단어 100개 암기","section":"words"},{"id":"grammar_2026-05-21","label":"문법 1개","section":"grammar"},{"id":"listening_2026-05-21","label":"리스닝 문제 1세트","section":"listening"},{"id":"reading_2026-05-21","label":"리딩 문제 1지문","section":"reading"},{"id":"writing_2026-05-21","label":"라이팅 1개 작성","section":"writing"}],"tutor":false,"words":100},{"date":"2026-05-22","day":11,"stage":"Kings4 문제풀이","codes":["239","240","241","242"],"lectures":{"listening":[],"reading":[{"row":"239","date":"","code":"239","stage":"Kings4 문제풀이","course":"Kings 4.0+ 문제풀이","subject":"Reading","title":"3강 Matching headings","duration":"20:23"},{"row":"240","date":"","code":"240","stage":"Kings4 문제풀이","course":"Kings 4.0+ 문제풀이","subject":"Reading","title":"4강 Multiple choice","duration":"19:15"},{"row":"241","date":"","code":"241","stage":"Kings4 문제풀이","course":"Kings 4.0+ 문제풀이","subject":"Reading","title":"5강 Sentence completion","duration":"20:20"},{"row":"242","date":"","code":"242","stage":"Kings4 문제풀이","course":"Kings 4.0+ 문제풀이","subject":"Reading","title":"6강 Summary completion","duration":"20:40"}],"writing":[],"speaking":[]},"minutes":81,"lectureTargetMinutes":260,"subjects":"강의 4개","tasks":[{"id":"words_2026-05-22","label":"단어 100개 암기","section":"words"},{"id":"grammar_2026-05-22","label":"문법 1개","section":"grammar"},{"id":"listening_2026-05-22","label":"리스닝 문제 1세트","section":"listening"},{"id":"reading_2026-05-22","label":"리딩 문제 1지문","section":"reading"},{"id":"writing_2026-05-22","label":"라이팅 1개 작성","section":"writing"}],"tutor":false,"words":100},{"date":"2026-05-23","day":12,"stage":"실전모의고사1","codes":["045","046","047","048"],"lectures":{"listening":[{"row":"045","date":"","code":"045","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Listening","title":"9강 Test3 Section1","duration":"16:11"},{"row":"046","date":"","code":"046","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Listening","title":"10강 Test3 Section2","duration":"16:57"},{"row":"047","date":"","code":"047","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Listening","title":"11강 Test3 Section3","duration":"20:40"},{"row":"048","date":"","code":"048","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Listening","title":"12강 Test3 Section4","duration":"21:51"}],"reading":[],"writing":[],"speaking":[]},"minutes":256,"lectureTargetMinutes":260,"subjects":"강의 4개 / 모의고사 3시간","tasks":[{"id":"words_2026-05-23","label":"단어 100개 암기","section":"words"},{"id":"grammar_2026-05-23","label":"문법 1개","section":"grammar"},{"id":"listening_2026-05-23","label":"리스닝 문제 1세트","section":"listening"},{"id":"reading_2026-05-23","label":"리딩 문제 1지문","section":"reading"},{"id":"writing_2026-05-23","label":"라이팅 1개 작성","section":"writing"},{"id":"mock_test_3_2026-05-23","label":"Mock Test 3 3시간","section":"mock_test_3"}],"tutor":false,"words":100},{"date":"2026-05-24","day":13,"stage":"실전모의고사1","codes":["059","060","061","069","070","077","078","087","088","089"],"lectures":{"listening":[],"reading":[{"row":"059","date":"","code":"059","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Reading","title":"7강 Test3 Passage1","duration":"42:21"},{"row":"060","date":"","code":"060","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Reading","title":"8강 Test3 Passage2","duration":"33:03"},{"row":"061","date":"","code":"061","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Reading","title":"9강 Test3 Passage3","duration":"45:23"}],"writing":[{"row":"069","date":"","code":"069","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Writing Task1","title":"5강 Task1 Test3 (1)","duration":"20:08"},{"row":"070","date":"","code":"070","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Writing Task1","title":"6강 Task1 Test3 (2)","duration":"21:38"},{"row":"077","date":"","code":"077","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Writing Task2","title":"13강 Task2 Test3 (1)","duration":"14:15"},{"row":"078","date":"","code":"078","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Writing Task2","title":"14강 Task2 Test3 (2)","duration":"20:40"}],"speaking":[{"row":"087","date":"","code":"087","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Speaking","title":"7강 Test3 Part1","duration":"14:02"},{"row":"088","date":"","code":"088","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Speaking","title":"8강 Test3 Part2","duration":"09:48"},{"row":"089","date":"","code":"089","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Speaking","title":"9강 Test3 Part3","duration":"15:31"}]},"minutes":237,"lectureTargetMinutes":260,"subjects":"강의 10개","tasks":[{"id":"words_2026-05-24","label":"단어 100개 암기","section":"words"},{"id":"grammar_2026-05-24","label":"문법 1개","section":"grammar"},{"id":"listening_2026-05-24","label":"리스닝 문제 1세트","section":"listening"},{"id":"reading_2026-05-24","label":"리딩 문제 1지문","section":"reading"},{"id":"writing_2026-05-24","label":"라이팅 1개 작성","section":"writing"}],"tutor":false,"words":100},{"date":"2026-05-25","day":14,"stage":"Kings4 이론","codes":["209","210","211","212","213","214","215","216","217","218"],"lectures":{"listening":[],"reading":[],"writing":[{"row":"209","date":"","code":"209","stage":"Kings4 이론","course":"Kings 4.0+ 이론","subject":"Writing Task1","title":"1강 Paraphrasing the Title_A","duration":"25:18"},{"row":"210","date":"","code":"210","stage":"Kings4 이론","course":"Kings 4.0+ 이론","subject":"Writing Task1","title":"2강 Writing an Overview_A","duration":"21:48"},{"row":"211","date":"","code":"211","stage":"Kings4 이론","course":"Kings 4.0+ 이론","subject":"Writing Task1","title":"3강 Describing Numbers_A","duration":"27:10"},{"row":"212","date":"","code":"212","stage":"Kings4 이론","course":"Kings 4.0+ 이론","subject":"Writing Task1","title":"4강 Compare and Contrast_A","duration":"29:35"},{"row":"213","date":"","code":"213","stage":"Kings4 이론","course":"Kings 4.0+ 이론","subject":"Writing Task1","title":"5강 Avoiding Repetition_A","duration":"20:20"},{"row":"214","date":"","code":"214","stage":"Kings4 이론","course":"Kings 4.0+ 이론","subject":"Writing Task2","title":"6강 Planning","duration":"26:32"},{"row":"215","date":"","code":"215","stage":"Kings4 이론","course":"Kings 4.0+ 이론","subject":"Writing Task2","title":"7강 Introductions, Signposting and Linking","duration":"29:02"},{"row":"216","date":"","code":"216","stage":"Kings4 이론","course":"Kings 4.0+ 이론","subject":"Writing Task2","title":"8강 Topic Sentences","duration":"21:31"},{"row":"217","date":"","code":"217","stage":"Kings4 이론","course":"Kings 4.0+ 이론","subject":"Writing Task2","title":"9강 Extending Ideas","duration":"18:59"},{"row":"218","date":"","code":"218","stage":"Kings4 이론","course":"Kings 4.0+ 이론","subject":"Writing Task2","title":"10강 Conclusions and Summaries","duration":"19:23"}],"speaking":[]},"minutes":240,"lectureTargetMinutes":260,"subjects":"강의 10개","tasks":[{"id":"words_2026-05-25","label":"단어 100개 암기","section":"words"},{"id":"grammar_2026-05-25","label":"문법 1개","section":"grammar"},{"id":"listening_2026-05-25","label":"리스닝 문제 1세트","section":"listening"},{"id":"reading_2026-05-25","label":"리딩 문제 1지문","section":"reading"},{"id":"writing_2026-05-25","label":"라이팅 1개 작성","section":"writing"}],"tutor":false,"words":100},{"date":"2026-05-26","day":15,"stage":"Kings4 문제풀이","codes":["243","244","245","246","247","248","249","250","251","252"],"lectures":{"listening":[],"reading":[],"writing":[{"row":"243","date":"","code":"243","stage":"Kings4 문제풀이","course":"Kings 4.0+ 문제풀이","subject":"Writing Task1","title":"1강 Line graphs_A","duration":"27:12"},{"row":"244","date":"","code":"244","stage":"Kings4 문제풀이","course":"Kings 4.0+ 문제풀이","subject":"Writing Task1","title":"2강 Bar graphs","duration":"21:42"},{"row":"245","date":"","code":"245","stage":"Kings4 문제풀이","course":"Kings 4.0+ 문제풀이","subject":"Writing Task1","title":"3강 Tables","duration":"26:52"},{"row":"246","date":"","code":"246","stage":"Kings4 문제풀이","course":"Kings 4.0+ 문제풀이","subject":"Writing Task1","title":"4강 Pie Charts","duration":"31:28"},{"row":"247","date":"","code":"247","stage":"Kings4 문제풀이","course":"Kings 4.0+ 문제풀이","subject":"Writing Task1","title":"5강 Maps and Diagrams","duration":"29:31"},{"row":"248","date":"","code":"248","stage":"Kings4 문제풀이","course":"Kings 4.0+ 문제풀이","subject":"Writing Task1","title":"6강 Processes","duration":"19:29"},{"row":"249","date":"","code":"249","stage":"Kings4 문제풀이","course":"Kings 4.0+ 문제풀이","subject":"Writing Task2","title":"7강 Agree and Disagree","duration":"14:36"},{"row":"250","date":"","code":"250","stage":"Kings4 문제풀이","course":"Kings 4.0+ 문제풀이","subject":"Writing Task2","title":"8강 Problem and Solution","duration":"12:59"},{"row":"251","date":"","code":"251","stage":"Kings4 문제풀이","course":"Kings 4.0+ 문제풀이","subject":"Writing Task2","title":"9강 Opinion Essay","duration":"19:11"},{"row":"252","date":"","code":"252","stage":"Kings4 문제풀이","course":"Kings 4.0+ 문제풀이","subject":"Writing Task2","title":"10강 Brainstorming","duration":"25:52"}],"speaking":[]},"minutes":229,"lectureTargetMinutes":260,"subjects":"강의 10개","tasks":[{"id":"words_2026-05-26","label":"단어 100개 암기","section":"words"},{"id":"grammar_2026-05-26","label":"문법 1개","section":"grammar"},{"id":"listening_2026-05-26","label":"리스닝 문제 1세트","section":"listening"},{"id":"reading_2026-05-26","label":"리딩 문제 1지문","section":"reading"},{"id":"writing_2026-05-26","label":"라이팅 1개 작성","section":"writing"}],"tutor":false,"words":100},{"date":"2026-05-27","day":16,"stage":"Kings4 문제풀이","codes":["253","254","255","256","257"],"lectures":{"listening":[],"reading":[],"writing":[{"row":"253","date":"","code":"253","stage":"Kings4 문제풀이","course":"Kings 4.0+ 문제풀이","subject":"Writing Task2","title":"11강 Environment","duration":"40:37"},{"row":"254","date":"","code":"254","stage":"Kings4 문제풀이","course":"Kings 4.0+ 문제풀이","subject":"Writing Task2","title":"12강 Technology","duration":"30:47"},{"row":"255","date":"","code":"255","stage":"Kings4 문제풀이","course":"Kings 4.0+ 문제풀이","subject":"Writing Task2","title":"13강 Work","duration":"23:52"},{"row":"256","date":"","code":"256","stage":"Kings4 문제풀이","course":"Kings 4.0+ 문제풀이","subject":"Writing Task2","title":"14강 Education","duration":"18:02"},{"row":"257","date":"","code":"257","stage":"Kings4 문제풀이","course":"Kings 4.0+ 문제풀이","subject":"Writing Task2","title":"15강 Globalisation","duration":"27:09"}],"speaking":[]},"minutes":140,"lectureTargetMinutes":260,"subjects":"강의 5개","tasks":[{"id":"words_2026-05-27","label":"단어 100개 암기","section":"words"},{"id":"grammar_2026-05-27","label":"문법 1개","section":"grammar"},{"id":"listening_2026-05-27","label":"리스닝 문제 1세트","section":"listening"},{"id":"reading_2026-05-27","label":"리딩 문제 1지문","section":"reading"},{"id":"writing_2026-05-27","label":"라이팅 1개 작성","section":"writing"}],"tutor":false,"words":100},{"date":"2026-05-28","day":17,"stage":"실전모의고사1","codes":["049","050","051","052"],"lectures":{"listening":[{"row":"049","date":"","code":"049","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Listening","title":"13강 Test4 Section1","duration":"11:01"},{"row":"050","date":"","code":"050","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Listening","title":"14강 Test4 Section2","duration":"14:05"},{"row":"051","date":"","code":"051","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Listening","title":"15강 Test4 Section3","duration":"16:35"},{"row":"052","date":"","code":"052","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Listening","title":"16강 Test4 Section4","duration":"16:35"}],"reading":[],"writing":[],"speaking":[]},"minutes":238,"lectureTargetMinutes":260,"subjects":"강의 4개 / 모의고사 3시간","tasks":[{"id":"words_2026-05-28","label":"단어 100개 암기","section":"words"},{"id":"grammar_2026-05-28","label":"문법 1개","section":"grammar"},{"id":"listening_2026-05-28","label":"리스닝 문제 1세트","section":"listening"},{"id":"reading_2026-05-28","label":"리딩 문제 1지문","section":"reading"},{"id":"writing_2026-05-28","label":"라이팅 1개 작성","section":"writing"},{"id":"mock_test_4_2026-05-28","label":"Mock Test 4 3시간","section":"mock_test_4"}],"tutor":false,"words":100},{"date":"2026-05-29","day":18,"stage":"실전모의고사1 + Kings4 이론","codes":["062","063","064","071","072","079","080","090","091","092","219","220"],"lectures":{"listening":[],"reading":[{"row":"062","date":"","code":"062","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Reading","title":"10강 Test4 Passage1","duration":"35:42"},{"row":"063","date":"","code":"063","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Reading","title":"11강 Test4 Passage2","duration":"33:12"},{"row":"064","date":"","code":"064","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Reading","title":"12강 Test4 Passage3","duration":"32:07"}],"writing":[{"row":"071","date":"","code":"071","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Writing Task1","title":"7강 Task1 Test4 (1)","duration":"17:04"},{"row":"072","date":"","code":"072","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Writing Task1","title":"8강 Task1 Test4 (2)","duration":"18:34"},{"row":"079","date":"","code":"079","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Writing Task2","title":"15강 Task2 Test4 (1)","duration":"10:45"},{"row":"080","date":"","code":"080","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Writing Task2","title":"16강 Task2 Test4 (2)","duration":"26:21"}],"speaking":[{"row":"090","date":"","code":"090","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Speaking","title":"10강 Test4 Part1","duration":"12:36"},{"row":"091","date":"","code":"091","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Speaking","title":"11강 Test4 Part2","duration":"08:28"},{"row":"092","date":"","code":"092","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Speaking","title":"12강 Test4 Part3","duration":"14:50"},{"row":"219","date":"","code":"219","stage":"Kings4 이론","course":"Kings 4.0+ 이론","subject":"Speaking","title":"1강 Hobbies and Activities","duration":"17:39"},{"row":"220","date":"","code":"220","stage":"Kings4 이론","course":"Kings 4.0+ 이론","subject":"Speaking","title":"2강 Home Town","duration":"22:30"}]},"minutes":250,"lectureTargetMinutes":260,"subjects":"강의 12개","tasks":[{"id":"words_2026-05-29","label":"단어 100개 암기","section":"words"},{"id":"grammar_2026-05-29","label":"문법 1개","section":"grammar"},{"id":"listening_2026-05-29","label":"리스닝 문제 1세트","section":"listening"},{"id":"reading_2026-05-29","label":"리딩 문제 1지문","section":"reading"},{"id":"writing_2026-05-29","label":"라이팅 1개 작성","section":"writing"}],"tutor":false,"words":100},{"date":"2026-05-30","day":19,"stage":"Kings4 이론 + Kings4 문제풀이","codes":["221","222","223","224","225","226","227","228","258","259","260","261","262","263"],"lectures":{"listening":[],"reading":[],"writing":[],"speaking":[{"row":"221","date":"","code":"221","stage":"Kings4 이론","course":"Kings 4.0+ 이론","subject":"Speaking","title":"3강 Likes and Dislikes","duration":"14:30"},{"row":"222","date":"","code":"222","stage":"Kings4 이론","course":"Kings 4.0+ 이론","subject":"Speaking","title":"4강 Places","duration":"15:37"},{"row":"223","date":"","code":"223","stage":"Kings4 이론","course":"Kings 4.0+ 이론","subject":"Speaking","title":"5강 Family and Friends","duration":"19:54"},{"row":"224","date":"","code":"224","stage":"Kings4 이론","course":"Kings 4.0+ 이론","subject":"Speaking","title":"6강 Making and Using Notes","duration":"14:54"},{"row":"225","date":"","code":"225","stage":"Kings4 이론","course":"Kings 4.0+ 이론","subject":"Speaking","title":"7강 People","duration":"18:54"},{"row":"226","date":"","code":"226","stage":"Kings4 이론","course":"Kings 4.0+ 이론","subject":"Speaking","title":"8강 Objects and Possessions","duration":"17:40"},{"row":"227","date":"","code":"227","stage":"Kings4 이론","course":"Kings 4.0+ 이론","subject":"Speaking","title":"9강 Events","duration":"15:41"},{"row":"228","date":"","code":"228","stage":"Kings4 이론","course":"Kings 4.0+ 이론","subject":"Speaking","title":"10강 Journeys and Holidays","duration":"19:00"},{"row":"258","date":"","code":"258","stage":"Kings4 문제풀이","course":"Kings 4.0+ 문제풀이","subject":"Speaking","title":"1강 Relationships","duration":"21:28"},{"row":"259","date":"","code":"259","stage":"Kings4 문제풀이","course":"Kings 4.0+ 문제풀이","subject":"Speaking","title":"2강 The weather","duration":"18:22"},{"row":"260","date":"","code":"260","stage":"Kings4 문제풀이","course":"Kings 4.0+ 문제풀이","subject":"Speaking","title":"3강 Money","duration":"17:42"},{"row":"261","date":"","code":"261","stage":"Kings4 문제풀이","course":"Kings 4.0+ 문제풀이","subject":"Speaking","title":"4강 Work","duration":"21:14"},{"row":"262","date":"","code":"262","stage":"Kings4 문제풀이","course":"Kings 4.0+ 문제풀이","subject":"Speaking","title":"5강 Food and Drink","duration":"18:57"},{"row":"263","date":"","code":"263","stage":"Kings4 문제풀이","course":"Kings 4.0+ 문제풀이","subject":"Speaking","title":"6강 Time and Sleep","duration":"22:39"}]},"minutes":257,"lectureTargetMinutes":260,"subjects":"강의 14개","tasks":[{"id":"words_2026-05-30","label":"단어 100개 암기","section":"words"},{"id":"grammar_2026-05-30","label":"문법 1개","section":"grammar"},{"id":"listening_2026-05-30","label":"리스닝 문제 1세트","section":"listening"},{"id":"reading_2026-05-30","label":"리딩 문제 1지문","section":"reading"},{"id":"writing_2026-05-30","label":"라이팅 1개 작성","section":"writing"}],"tutor":false,"words":100},{"date":"2026-05-31","day":20,"stage":"Kings4 문제풀이 + Cambridge19","codes":["264","265","266","267","268","269","270","271","272","093"],"lectures":{"listening":[{"row":"093","date":"","code":"093","stage":"Cambridge19","course":"Cambridge 19","subject":"Listening","title":"1강 Test1 Part1","duration":"33:54"}],"reading":[],"writing":[],"speaking":[{"row":"264","date":"","code":"264","stage":"Kings4 문제풀이","course":"Kings 4.0+ 문제풀이","subject":"Speaking","title":"7강 Crime","duration":"23:47"},{"row":"265","date":"","code":"265","stage":"Kings4 문제풀이","course":"Kings 4.0+ 문제풀이","subject":"Speaking","title":"8강 The Body","duration":"32:48"},{"row":"266","date":"","code":"266","stage":"Kings4 문제풀이","course":"Kings 4.0+ 문제풀이","subject":"Speaking","title":"9강 Health","duration":"19:23"},{"row":"267","date":"","code":"267","stage":"Kings4 문제풀이","course":"Kings 4.0+ 문제풀이","subject":"Speaking","title":"10강 Needs, Wants and Personal taste","duration":"19:20"},{"row":"268","date":"","code":"268","stage":"Kings4 문제풀이","course":"Kings 4.0+ 문제풀이","subject":"Speaking","title":"11강 Communication","duration":"19:15"},{"row":"269","date":"","code":"269","stage":"Kings4 문제풀이","course":"Kings 4.0+ 문제풀이","subject":"Speaking","title":"12강 Problems and Solutions","duration":"23:59"},{"row":"270","date":"","code":"270","stage":"Kings4 문제풀이","course":"Kings 4.0+ 문제풀이","subject":"Speaking","title":"13강 Agreeing and Disagreeing","duration":"18:52"},{"row":"271","date":"","code":"271","stage":"Kings4 문제풀이","course":"Kings 4.0+ 문제풀이","subject":"Speaking","title":"14강 Organising your talk","duration":"20:39"},{"row":"272","date":"","code":"272","stage":"Kings4 문제풀이","course":"Kings 4.0+ 문제풀이","subject":"Speaking","title":"15강 Useful phrases","duration":"19:27"}]},"minutes":231,"lectureTargetMinutes":260,"subjects":"강의 10개","tasks":[{"id":"words_2026-05-31","label":"단어 100개 암기","section":"words"},{"id":"grammar_2026-05-31","label":"문법 1개","section":"grammar"},{"id":"listening_2026-05-31","label":"리스닝 문제 1세트","section":"listening"},{"id":"reading_2026-05-31","label":"리딩 문제 1지문","section":"reading"},{"id":"writing_2026-05-31","label":"라이팅 1개 작성","section":"writing"}],"tutor":false,"words":100},{"date":"2026-06-01","day":21,"stage":"Cambridge19","codes":["094","095","096","109","110","111","121"],"lectures":{"listening":[{"row":"094","date":"","code":"094","stage":"Cambridge19","course":"Cambridge 19","subject":"Listening","title":"2강 Test1 Part2","duration":"29:52"},{"row":"095","date":"","code":"095","stage":"Cambridge19","course":"Cambridge 19","subject":"Listening","title":"3강 Test1 Part3","duration":"27:32"},{"row":"096","date":"","code":"096","stage":"Cambridge19","course":"Cambridge 19","subject":"Listening","title":"4강 Test1 Part4","duration":"22:17"}],"reading":[{"row":"109","date":"","code":"109","stage":"Cambridge19","course":"Cambridge 19","subject":"Academic Reading","title":"1강 Test1 Passage1","duration":"36:54"},{"row":"110","date":"","code":"110","stage":"Cambridge19","course":"Cambridge 19","subject":"Academic Reading","title":"2강 Test1 Passage2","duration":"33:59"},{"row":"111","date":"","code":"111","stage":"Cambridge19","course":"Cambridge 19","subject":"Academic Reading","title":"3강 Test1 Passage3","duration":"43:20"}],"writing":[{"row":"121","date":"","code":"121","stage":"Cambridge19","course":"Cambridge 19","subject":"Academic Writing Task1","title":"1강 Task1 Test1","duration":"47:16"}],"speaking":[]},"minutes":241,"lectureTargetMinutes":260,"subjects":"강의 7개","tasks":[{"id":"words_2026-06-01","label":"단어 100개 암기","section":"words"},{"id":"grammar_2026-06-01","label":"문법 1개","section":"grammar"},{"id":"listening_2026-06-01","label":"리스닝 문제 1세트","section":"listening"},{"id":"reading_2026-06-01","label":"리딩 문제 1지문","section":"reading"},{"id":"writing_2026-06-01","label":"라이팅 1개 작성","section":"writing"}],"tutor":false,"words":100},{"date":"2026-06-02","day":22,"stage":"Cambridge19 외 2개","codes":["125","129","130","131","274","275","276","277","278","295"],"lectures":{"listening":[{"row":"274","date":"","code":"274","stage":"Kings6 이론","course":"Kings 6.0+ 이론","subject":"Listening","title":"1강 Gap Fill","duration":"18:54"},{"row":"275","date":"","code":"275","stage":"Kings6 이론","course":"Kings 6.0+ 이론","subject":"Listening","title":"2강 Listening_Matching","duration":"20:14"},{"row":"276","date":"","code":"276","stage":"Kings6 이론","course":"Kings 6.0+ 이론","subject":"Listening","title":"3강 Maps","duration":"17:22"},{"row":"277","date":"","code":"277","stage":"Kings6 이론","course":"Kings 6.0+ 이론","subject":"Listening","title":"4강 Multiple choice","duration":"20:19"},{"row":"278","date":"","code":"278","stage":"Kings6 이론","course":"Kings 6.0+ 이론","subject":"Listening","title":"5강 Table Completion","duration":"23:44"},{"row":"295","date":"","code":"295","stage":"Kings6 문제풀이","course":"Kings 6.0+ 문제풀이","subject":"Listening","title":"1강 Test 1 Section 1","duration":"36:55"}],"reading":[],"writing":[{"row":"125","date":"","code":"125","stage":"Cambridge19","course":"Cambridge 19","subject":"Academic Writing Task2","title":"5강 Task2 Test1","duration":"41:13"}],"speaking":[{"row":"129","date":"","code":"129","stage":"Cambridge19","course":"Cambridge 19","subject":"Speaking","title":"1강 Test1 Part1","duration":"23:31"},{"row":"130","date":"","code":"130","stage":"Cambridge19","course":"Cambridge 19","subject":"Speaking","title":"2강 Test1 Part2","duration":"23:40"},{"row":"131","date":"","code":"131","stage":"Cambridge19","course":"Cambridge 19","subject":"Speaking","title":"3강 Test1 Part3","duration":"29:31"}]},"minutes":255,"lectureTargetMinutes":260,"subjects":"강의 10개","tasks":[{"id":"words_2026-06-02","label":"단어 100개 암기","section":"words"},{"id":"grammar_2026-06-02","label":"문법 1개","section":"grammar"},{"id":"listening_2026-06-02","label":"리스닝 문제 1세트","section":"listening"},{"id":"reading_2026-06-02","label":"리딩 문제 1지문","section":"reading"},{"id":"writing_2026-06-02","label":"라이팅 1개 작성","section":"writing"}],"tutor":false,"words":100},{"date":"2026-06-03","day":23,"stage":"Kings6 문제풀이","codes":["296","297","298","299","300","301","302"],"lectures":{"listening":[{"row":"296","date":"","code":"296","stage":"Kings6 문제풀이","course":"Kings 6.0+ 문제풀이","subject":"Listening","title":"2강 Test 1 Section 2","duration":"24:25"},{"row":"297","date":"","code":"297","stage":"Kings6 문제풀이","course":"Kings 6.0+ 문제풀이","subject":"Listening","title":"3강 Test 1 Section 3","duration":"22:49"},{"row":"298","date":"","code":"298","stage":"Kings6 문제풀이","course":"Kings 6.0+ 문제풀이","subject":"Listening","title":"4강 Test 1 Section 4","duration":"29:53"},{"row":"299","date":"","code":"299","stage":"Kings6 문제풀이","course":"Kings 6.0+ 문제풀이","subject":"Listening","title":"5강 Test 2 Section 1","duration":"34:10"},{"row":"300","date":"","code":"300","stage":"Kings6 문제풀이","course":"Kings 6.0+ 문제풀이","subject":"Listening","title":"6강 Test 2 Section 2","duration":"37:28"},{"row":"301","date":"","code":"301","stage":"Kings6 문제풀이","course":"Kings 6.0+ 문제풀이","subject":"Listening","title":"7강 Test 2 Section 3","duration":"34:47"},{"row":"302","date":"","code":"302","stage":"Kings6 문제풀이","course":"Kings 6.0+ 문제풀이","subject":"Listening","title":"8강 Test 2 Section 4","duration":"35:54"}],"reading":[],"writing":[],"speaking":[]},"minutes":219,"lectureTargetMinutes":260,"subjects":"강의 7개","tasks":[{"id":"words_2026-06-03","label":"단어 100개 암기","section":"words"},{"id":"grammar_2026-06-03","label":"문법 1개","section":"grammar"},{"id":"listening_2026-06-03","label":"리스닝 문제 1세트","section":"listening"},{"id":"reading_2026-06-03","label":"리딩 문제 1지문","section":"reading"},{"id":"writing_2026-06-03","label":"라이팅 1개 작성","section":"writing"}],"tutor":false,"words":100},{"date":"2026-06-04","day":24,"stage":"Cambridge19","codes":["097","098"],"lectures":{"listening":[{"row":"097","date":"","code":"097","stage":"Cambridge19","course":"Cambridge 19","subject":"Listening","title":"5강 Test2 Part1","duration":"22:04"},{"row":"098","date":"","code":"098","stage":"Cambridge19","course":"Cambridge 19","subject":"Listening","title":"6강 Test2 Part2","duration":"24:56"}],"reading":[],"writing":[],"speaking":[]},"minutes":227,"lectureTargetMinutes":260,"subjects":"강의 2개 / 모의고사 3시간","tasks":[{"id":"words_2026-06-04","label":"단어 100개 암기","section":"words"},{"id":"grammar_2026-06-04","label":"문법 1개","section":"grammar"},{"id":"listening_2026-06-04","label":"리스닝 문제 1세트","section":"listening"},{"id":"reading_2026-06-04","label":"리딩 문제 1지문","section":"reading"},{"id":"writing_2026-06-04","label":"라이팅 1개 작성","section":"writing"},{"id":"cambridge19_mock_test_2_2026-06-04","label":"Cambridge 19 Mock Test 2 3시간","section":"cambridge19_mock_test_2"}],"tutor":false,"words":100},{"date":"2026-06-05","day":25,"stage":"Cambridge19","codes":["099","100","112","113","114","122","126","132","133"],"lectures":{"listening":[{"row":"099","date":"","code":"099","stage":"Cambridge19","course":"Cambridge 19","subject":"Listening","title":"7강 Test2 Part3","duration":"34:15"},{"row":"100","date":"","code":"100","stage":"Cambridge19","course":"Cambridge 19","subject":"Listening","title":"8강 Test2 Part4","duration":"22:55"}],"reading":[{"row":"112","date":"","code":"112","stage":"Cambridge19","course":"Cambridge 19","subject":"Academic Reading","title":"4강 Test2 Passage1","duration":"36:27"},{"row":"113","date":"","code":"113","stage":"Cambridge19","course":"Cambridge 19","subject":"Academic Reading","title":"5강 Test2 Passage2","duration":"24:52"},{"row":"114","date":"","code":"114","stage":"Cambridge19","course":"Cambridge 19","subject":"Academic Reading","title":"6강 Test2 Passage3","duration":"33:04"}],"writing":[{"row":"122","date":"","code":"122","stage":"Cambridge19","course":"Cambridge 19","subject":"Academic Writing Task1","title":"2강 Task1 Test2","duration":"30:48"},{"row":"126","date":"","code":"126","stage":"Cambridge19","course":"Cambridge 19","subject":"Academic Writing Task2","title":"6강 Task2 Test2","duration":"28:11"}],"speaking":[{"row":"132","date":"","code":"132","stage":"Cambridge19","course":"Cambridge 19","subject":"Speaking","title":"4강 Test2 Part1","duration":"24:45"},{"row":"133","date":"","code":"133","stage":"Cambridge19","course":"Cambridge 19","subject":"Speaking","title":"5강 Test2 Part2","duration":"20:07"}]},"minutes":255,"lectureTargetMinutes":260,"subjects":"강의 9개","tasks":[{"id":"words_2026-06-05","label":"단어 100개 암기","section":"words"},{"id":"grammar_2026-06-05","label":"문법 1개","section":"grammar"},{"id":"listening_2026-06-05","label":"리스닝 문제 1세트","section":"listening"},{"id":"reading_2026-06-05","label":"리딩 문제 1지문","section":"reading"},{"id":"writing_2026-06-05","label":"라이팅 1개 작성","section":"writing"}],"tutor":false,"words":100},{"date":"2026-06-06","day":26,"stage":"Cambridge19 외 2개","codes":["134","279","280","281","282","283","303","304","305"],"lectures":{"listening":[],"reading":[{"row":"279","date":"","code":"279","stage":"Kings6 이론","course":"Kings 6.0+ 이론","subject":"Reading","title":"1강 Matching Headings","duration":"17:07"},{"row":"280","date":"","code":"280","stage":"Kings6 이론","course":"Kings 6.0+ 이론","subject":"Reading","title":"2강 Gap Fill","duration":"13:30"},{"row":"281","date":"","code":"281","stage":"Kings6 이론","course":"Kings 6.0+ 이론","subject":"Reading","title":"3강 True False Not Given","duration":"26:46"},{"row":"282","date":"","code":"282","stage":"Kings6 이론","course":"Kings 6.0+ 이론","subject":"Reading","title":"4강 Comprehension Questions","duration":"23:35"},{"row":"283","date":"","code":"283","stage":"Kings6 이론","course":"Kings 6.0+ 이론","subject":"Reading","title":"5강 Summary Completion and Matching","duration":"14:33"},{"row":"303","date":"","code":"303","stage":"Kings6 문제풀이","course":"Kings 6.0+ 문제풀이","subject":"Reading","title":"1강 Test 1 Passage 1_A","duration":"45:10"},{"row":"304","date":"","code":"304","stage":"Kings6 문제풀이","course":"Kings 6.0+ 문제풀이","subject":"Reading","title":"2강 Test 1 Passage 2_A","duration":"41:48"},{"row":"305","date":"","code":"305","stage":"Kings6 문제풀이","course":"Kings 6.0+ 문제풀이","subject":"Reading","title":"3강 Test 1 Passage 3_A","duration":"44:14"}],"writing":[],"speaking":[{"row":"134","date":"","code":"134","stage":"Cambridge19","course":"Cambridge 19","subject":"Speaking","title":"6강 Test2 Part3","duration":"27:43"}]},"minutes":254,"lectureTargetMinutes":260,"subjects":"강의 9개","tasks":[{"id":"words_2026-06-06","label":"단어 100개 암기","section":"words"},{"id":"grammar_2026-06-06","label":"문법 1개","section":"grammar"},{"id":"listening_2026-06-06","label":"리스닝 문제 1세트","section":"listening"},{"id":"reading_2026-06-06","label":"리딩 문제 1지문","section":"reading"},{"id":"writing_2026-06-06","label":"라이팅 1개 작성","section":"writing"}],"tutor":false,"words":100},{"date":"2026-06-07","day":27,"stage":"Kings6 문제풀이","codes":["306","307","308"],"lectures":{"listening":[],"reading":[{"row":"306","date":"","code":"306","stage":"Kings6 문제풀이","course":"Kings 6.0+ 문제풀이","subject":"Reading","title":"4강 Test 2 Passage 1_A","duration":"47:30"},{"row":"307","date":"","code":"307","stage":"Kings6 문제풀이","course":"Kings 6.0+ 문제풀이","subject":"Reading","title":"5강 Test 2 Passage 2_A","duration":"52:56"},{"row":"308","date":"","code":"308","stage":"Kings6 문제풀이","course":"Kings 6.0+ 문제풀이","subject":"Reading","title":"6강 Test 2 Passage 3_A","duration":"46:26"}],"writing":[],"speaking":[]},"minutes":147,"lectureTargetMinutes":260,"subjects":"강의 3개","tasks":[{"id":"words_2026-06-07","label":"단어 100개 암기","section":"words"},{"id":"grammar_2026-06-07","label":"문법 1개","section":"grammar"},{"id":"listening_2026-06-07","label":"리스닝 문제 1세트","section":"listening"},{"id":"reading_2026-06-07","label":"리딩 문제 1지문","section":"reading"},{"id":"writing_2026-06-07","label":"라이팅 1개 작성","section":"writing"}],"tutor":false,"words":100},{"date":"2026-06-08","day":28,"stage":"Cambridge19","codes":["101","102","103"],"lectures":{"listening":[{"row":"101","date":"","code":"101","stage":"Cambridge19","course":"Cambridge 19","subject":"Listening","title":"9강 Test3 Part1","duration":"18:07"},{"row":"102","date":"","code":"102","stage":"Cambridge19","course":"Cambridge 19","subject":"Listening","title":"10강 Test3 Part2","duration":"19:40"},{"row":"103","date":"","code":"103","stage":"Cambridge19","course":"Cambridge 19","subject":"Listening","title":"11강 Test3 Part3","duration":"28:33"}],"reading":[],"writing":[],"speaking":[]},"minutes":246,"lectureTargetMinutes":260,"subjects":"강의 3개 / 모의고사 3시간","tasks":[{"id":"words_2026-06-08","label":"단어 100개 암기","section":"words"},{"id":"grammar_2026-06-08","label":"문법 1개","section":"grammar"},{"id":"listening_2026-06-08","label":"리스닝 문제 1세트","section":"listening"},{"id":"reading_2026-06-08","label":"리딩 문제 1지문","section":"reading"},{"id":"writing_2026-06-08","label":"라이팅 1개 작성","section":"writing"},{"id":"cambridge19_mock_test_3_2026-06-08","label":"Cambridge 19 Mock Test 3 3시간","section":"cambridge19_mock_test_3"}],"tutor":false,"words":100},{"date":"2026-06-09","day":29,"stage":"Cambridge19 + Kings6 이론","codes":["104","115","116","117","123","127","135","136","137","284"],"lectures":{"listening":[{"row":"104","date":"","code":"104","stage":"Cambridge19","course":"Cambridge 19","subject":"Listening","title":"12강 Test3 Part4","duration":"17:23"}],"reading":[{"row":"115","date":"","code":"115","stage":"Cambridge19","course":"Cambridge 19","subject":"Academic Reading","title":"7강 Test3 Passage1","duration":"23:58"},{"row":"116","date":"","code":"116","stage":"Cambridge19","course":"Cambridge 19","subject":"Academic Reading","title":"8강 Test3 Passage2","duration":"34:52"},{"row":"117","date":"","code":"117","stage":"Cambridge19","course":"Cambridge 19","subject":"Academic Reading","title":"9강 Test3 Passage3","duration":"32:52"}],"writing":[{"row":"123","date":"","code":"123","stage":"Cambridge19","course":"Cambridge 19","subject":"Academic Writing Task1","title":"3강 Task1 Test3","duration":"29:41"},{"row":"127","date":"","code":"127","stage":"Cambridge19","course":"Cambridge 19","subject":"Academic Writing Task2","title":"7강 Task2 Test3","duration":"23:50"},{"row":"284","date":"","code":"284","stage":"Kings6 이론","course":"Kings 6.0+ 이론","subject":"Writing Task1","title":"1강 Bar Charts_A","duration":"21:12"}],"speaking":[{"row":"135","date":"","code":"135","stage":"Cambridge19","course":"Cambridge 19","subject":"Speaking","title":"7강 Test3 Part1","duration":"23:52"},{"row":"136","date":"","code":"136","stage":"Cambridge19","course":"Cambridge 19","subject":"Speaking","title":"8강 Test3 Part2","duration":"19:08"},{"row":"137","date":"","code":"137","stage":"Cambridge19","course":"Cambridge 19","subject":"Speaking","title":"9강 Test3 Part3","duration":"31:51"}]},"minutes":259,"lectureTargetMinutes":260,"subjects":"강의 10개","tasks":[{"id":"words_2026-06-09","label":"단어 100개 암기","section":"words"},{"id":"grammar_2026-06-09","label":"문법 1개","section":"grammar"},{"id":"listening_2026-06-09","label":"리스닝 문제 1세트","section":"listening"},{"id":"reading_2026-06-09","label":"리딩 문제 1지문","section":"reading"},{"id":"writing_2026-06-09","label":"라이팅 1개 작성","section":"writing"}],"tutor":false,"words":100},{"date":"2026-06-10","day":30,"stage":"Kings6 이론 + Kings6 문제풀이","codes":["285","286","287","288","309","310","311","312"],"lectures":{"listening":[],"reading":[],"writing":[{"row":"285","date":"","code":"285","stage":"Kings6 이론","course":"Kings 6.0+ 이론","subject":"Writing Task1","title":"2강 Pie Charts_A","duration":"28:03"},{"row":"286","date":"","code":"286","stage":"Kings6 이론","course":"Kings 6.0+ 이론","subject":"Writing Task2","title":"3강 Rich and Poor1","duration":"24:07"},{"row":"287","date":"","code":"287","stage":"Kings6 이론","course":"Kings 6.0+ 이론","subject":"Writing Task2","title":"4강 Rich and Poor2","duration":"22:59"},{"row":"288","date":"","code":"288","stage":"Kings6 이론","course":"Kings 6.0+ 이론","subject":"Writing Task2","title":"5강 Studying Abroad","duration":"23:37"},{"row":"309","date":"","code":"309","stage":"Kings6 문제풀이","course":"Kings 6.0+ 문제풀이","subject":"Writing Task1","title":"1강 Test 1 Task 1_A","duration":"54:48"},{"row":"310","date":"","code":"310","stage":"Kings6 문제풀이","course":"Kings 6.0+ 문제풀이","subject":"Writing Task1","title":"3강 Test 2 Task 1_A","duration":"36:57"},{"row":"311","date":"","code":"311","stage":"Kings6 문제풀이","course":"Kings 6.0+ 문제풀이","subject":"Writing Task2","title":"2강 Test 1 Task 2","duration":"34:35"},{"row":"312","date":"","code":"312","stage":"Kings6 문제풀이","course":"Kings 6.0+ 문제풀이","subject":"Writing Task2","title":"4강 Task 2 Task 2","duration":"30:36"}],"speaking":[]},"minutes":256,"lectureTargetMinutes":260,"subjects":"강의 8개","tasks":[{"id":"words_2026-06-10","label":"단어 100개 암기","section":"words"},{"id":"grammar_2026-06-10","label":"문법 1개","section":"grammar"},{"id":"listening_2026-06-10","label":"리스닝 문제 1세트","section":"listening"},{"id":"reading_2026-06-10","label":"리딩 문제 1지문","section":"reading"},{"id":"writing_2026-06-10","label":"라이팅 1개 작성","section":"writing"}],"tutor":false,"words":100},{"date":"2026-06-11","day":31,"stage":"Cambridge19","codes":["105","106","107","108"],"lectures":{"listening":[{"row":"105","date":"","code":"105","stage":"Cambridge19","course":"Cambridge 19","subject":"Listening","title":"13강 Test4 Part1","duration":"16:46"},{"row":"106","date":"","code":"106","stage":"Cambridge19","course":"Cambridge 19","subject":"Listening","title":"14강 Test4 Part2","duration":"17:44"},{"row":"107","date":"","code":"107","stage":"Cambridge19","course":"Cambridge 19","subject":"Listening","title":"15강 Test4 Part3","duration":"19:52"},{"row":"108","date":"","code":"108","stage":"Cambridge19","course":"Cambridge 19","subject":"Listening","title":"16강 Test4 Part4","duration":"22:55"}],"reading":[],"writing":[],"speaking":[]},"minutes":257,"lectureTargetMinutes":260,"subjects":"강의 4개 / 모의고사 3시간","tasks":[{"id":"words_2026-06-11","label":"단어 100개 암기","section":"words"},{"id":"grammar_2026-06-11","label":"문법 1개","section":"grammar"},{"id":"listening_2026-06-11","label":"리스닝 문제 1세트","section":"listening"},{"id":"reading_2026-06-11","label":"리딩 문제 1지문","section":"reading"},{"id":"writing_2026-06-11","label":"라이팅 1개 작성","section":"writing"},{"id":"cambridge19_mock_test_4_2026-06-11","label":"Cambridge 19 Mock Test 4 3시간","section":"cambridge19_mock_test_4"}],"tutor":false,"words":100},{"date":"2026-06-12","day":32,"stage":"Cambridge19 + Kings6 이론","codes":["118","119","120","124","128","138","139","140","289"],"lectures":{"listening":[],"reading":[{"row":"118","date":"","code":"118","stage":"Cambridge19","course":"Cambridge 19","subject":"Academic Reading","title":"10강 Test4 Passage1","duration":"25:24"},{"row":"119","date":"","code":"119","stage":"Cambridge19","course":"Cambridge 19","subject":"Academic Reading","title":"11강 Test4 Passage2","duration":"29:04"},{"row":"120","date":"","code":"120","stage":"Cambridge19","course":"Cambridge 19","subject":"Academic Reading","title":"12강 Test4 Passage3","duration":"39:23"}],"writing":[{"row":"124","date":"","code":"124","stage":"Cambridge19","course":"Cambridge 19","subject":"Academic Writing Task1","title":"4강 Task1 Test4","duration":"29:58"},{"row":"128","date":"","code":"128","stage":"Cambridge19","course":"Cambridge 19","subject":"Academic Writing Task2","title":"8강 Task2 Test4","duration":"21:38"}],"speaking":[{"row":"138","date":"","code":"138","stage":"Cambridge19","course":"Cambridge 19","subject":"Speaking","title":"10강 Test4 Part1","duration":"21:38"},{"row":"139","date":"","code":"139","stage":"Cambridge19","course":"Cambridge 19","subject":"Speaking","title":"11강 Test4 Part2","duration":"18:35"},{"row":"140","date":"","code":"140","stage":"Cambridge19","course":"Cambridge 19","subject":"Speaking","title":"12강 Test4 Part3","duration":"25:14"},{"row":"289","date":"","code":"289","stage":"Kings6 이론","course":"Kings 6.0+ 이론","subject":"Speaking","title":"1강 Speaking about Yourself","duration":"34:54"}]},"minutes":246,"lectureTargetMinutes":260,"subjects":"강의 9개","tasks":[{"id":"words_2026-06-12","label":"단어 100개 암기","section":"words"},{"id":"grammar_2026-06-12","label":"문법 1개","section":"grammar"},{"id":"listening_2026-06-12","label":"리스닝 문제 1세트","section":"listening"},{"id":"reading_2026-06-12","label":"리딩 문제 1지문","section":"reading"},{"id":"writing_2026-06-12","label":"라이팅 1개 작성","section":"writing"}],"tutor":false,"words":100},{"date":"2026-06-13","day":33,"stage":"Kings6 이론 + Kings6 문제풀이","codes":["290","291","292","293","313","314","315","316"],"lectures":{"listening":[],"reading":[],"writing":[],"speaking":[{"row":"290","date":"","code":"290","stage":"Kings6 이론","course":"Kings 6.0+ 이론","subject":"Speaking","title":"2강 A Special Event","duration":"22:48"},{"row":"291","date":"","code":"291","stage":"Kings6 이론","course":"Kings 6.0+ 이론","subject":"Speaking","title":"3강 Helping","duration":"23:05"},{"row":"292","date":"","code":"292","stage":"Kings6 이론","course":"Kings 6.0+ 이론","subject":"Speaking","title":"4강 Question Types","duration":"20:55"},{"row":"293","date":"","code":"293","stage":"Kings6 이론","course":"Kings 6.0+ 이론","subject":"Speaking","title":"5강 Question Types and Giving Opinions","duration":"17:06"},{"row":"313","date":"","code":"313","stage":"Kings6 문제풀이","course":"Kings 6.0+ 문제풀이","subject":"Speaking","title":"1강 Test 1 Part 1","duration":"39:13"},{"row":"314","date":"","code":"314","stage":"Kings6 문제풀이","course":"Kings 6.0+ 문제풀이","subject":"Speaking","title":"2강 Test 1 Part 2&3","duration":"40:58"},{"row":"315","date":"","code":"315","stage":"Kings6 문제풀이","course":"Kings 6.0+ 문제풀이","subject":"Speaking","title":"3강 Test 2 Part 1","duration":"35:57"},{"row":"316","date":"","code":"316","stage":"Kings6 문제풀이","course":"Kings 6.0+ 문제풀이","subject":"Speaking","title":"4강 Test 2 Part 2&3","duration":"47:38"}]},"minutes":248,"lectureTargetMinutes":260,"subjects":"강의 8개","tasks":[{"id":"words_2026-06-13","label":"단어 100개 암기","section":"words"},{"id":"grammar_2026-06-13","label":"문법 1개","section":"grammar"},{"id":"listening_2026-06-13","label":"리스닝 문제 1세트","section":"listening"},{"id":"reading_2026-06-13","label":"리딩 문제 1지문","section":"reading"},{"id":"writing_2026-06-13","label":"라이팅 1개 작성","section":"writing"}],"tutor":false,"words":100},{"date":"2026-06-14","day":34,"stage":"Cambridge18","codes":["141","142","143","144","157","158","159"],"lectures":{"listening":[{"row":"141","date":"","code":"141","stage":"Cambridge18","course":"Cambridge 18","subject":"Listening","title":"1강 Test1 Part1","duration":"21:31"},{"row":"142","date":"","code":"142","stage":"Cambridge18","course":"Cambridge 18","subject":"Listening","title":"2강 Test1 Part2","duration":"22:16"},{"row":"143","date":"","code":"143","stage":"Cambridge18","course":"Cambridge 18","subject":"Listening","title":"3강 Test1 Part3","duration":"30:11"},{"row":"144","date":"","code":"144","stage":"Cambridge18","course":"Cambridge 18","subject":"Listening","title":"4강 Test1 Part4","duration":"26:16"}],"reading":[{"row":"157","date":"","code":"157","stage":"Cambridge18","course":"Cambridge 18","subject":"Academic Reading","title":"1강 Test1 Passage1","duration":"43:18"},{"row":"158","date":"","code":"158","stage":"Cambridge18","course":"Cambridge 18","subject":"Academic Reading","title":"2강 Test1 Passage2","duration":"38:32"},{"row":"159","date":"","code":"159","stage":"Cambridge18","course":"Cambridge 18","subject":"Academic Reading","title":"3강 Test1 Passage3","duration":"39:11"}],"writing":[],"speaking":[]},"minutes":221,"lectureTargetMinutes":260,"subjects":"강의 7개","tasks":[{"id":"words_2026-06-14","label":"단어 100개 암기","section":"words"},{"id":"grammar_2026-06-14","label":"문법 1개","section":"grammar"},{"id":"listening_2026-06-14","label":"리스닝 문제 1세트","section":"listening"},{"id":"reading_2026-06-14","label":"리딩 문제 1지문","section":"reading"},{"id":"writing_2026-06-14","label":"라이팅 1개 작성","section":"writing"}],"tutor":false,"words":100},{"date":"2026-06-15","day":35,"stage":"Cambridge18","codes":["169","173","177","178","179","145","146","147"],"lectures":{"listening":[{"row":"145","date":"","code":"145","stage":"Cambridge18","course":"Cambridge 18","subject":"Listening","title":"5강 Test2 Part1","duration":"28:46"},{"row":"146","date":"","code":"146","stage":"Cambridge18","course":"Cambridge 18","subject":"Listening","title":"6강 Test2 Part2","duration":"20:01"},{"row":"147","date":"","code":"147","stage":"Cambridge18","course":"Cambridge 18","subject":"Listening","title":"7강 Test2 Part3","duration":"28:21"}],"reading":[],"writing":[{"row":"169","date":"","code":"169","stage":"Cambridge18","course":"Cambridge 18","subject":"Academic Writing Task1","title":"1강 Task1 Test1","duration":"51:22"},{"row":"173","date":"","code":"173","stage":"Cambridge18","course":"Cambridge 18","subject":"Academic Writing Task2","title":"5강 Task2 Test1","duration":"42:49"}],"speaking":[{"row":"177","date":"","code":"177","stage":"Cambridge18","course":"Cambridge 18","subject":"Speaking","title":"1강 Test1 Part1","duration":"29:47"},{"row":"178","date":"","code":"178","stage":"Cambridge18","course":"Cambridge 18","subject":"Speaking","title":"2강 Test1 Part2","duration":"21:32"},{"row":"179","date":"","code":"179","stage":"Cambridge18","course":"Cambridge 18","subject":"Speaking","title":"3강 Test1 Part3","duration":"27:07"}]},"minutes":250,"lectureTargetMinutes":260,"subjects":"강의 8개","tasks":[{"id":"words_2026-06-15","label":"단어 100개 암기","section":"words"},{"id":"grammar_2026-06-15","label":"문법 1개","section":"grammar"},{"id":"listening_2026-06-15","label":"리스닝 문제 1세트","section":"listening"},{"id":"reading_2026-06-15","label":"리딩 문제 1지문","section":"reading"},{"id":"writing_2026-06-15","label":"라이팅 1개 작성","section":"writing"}],"tutor":false,"words":100},{"date":"2026-06-16","day":36,"stage":"Cambridge18","codes":["148","160","161","162","170","174","180","181"],"lectures":{"listening":[{"row":"148","date":"","code":"148","stage":"Cambridge18","course":"Cambridge 18","subject":"Listening","title":"8강 Test2 Part4","duration":"21:27"}],"reading":[{"row":"160","date":"","code":"160","stage":"Cambridge18","course":"Cambridge 18","subject":"Academic Reading","title":"4강 Test2 Passage1","duration":"43:11"},{"row":"161","date":"","code":"161","stage":"Cambridge18","course":"Cambridge 18","subject":"Academic Reading","title":"5강 Test2 Passage2","duration":"40:10"},{"row":"162","date":"","code":"162","stage":"Cambridge18","course":"Cambridge 18","subject":"Academic Reading","title":"6강 Test2 Passage3","duration":"44:23"}],"writing":[{"row":"170","date":"","code":"170","stage":"Cambridge18","course":"Cambridge 18","subject":"Academic Writing Task1","title":"2강 Task1 Test2","duration":"33:31"},{"row":"174","date":"","code":"174","stage":"Cambridge18","course":"Cambridge 18","subject":"Academic Writing Task2","title":"6강 Task2 Test2","duration":"26:51"}],"speaking":[{"row":"180","date":"","code":"180","stage":"Cambridge18","course":"Cambridge 18","subject":"Speaking","title":"4강 Test2 Part1","duration":"21:39"},{"row":"181","date":"","code":"181","stage":"Cambridge18","course":"Cambridge 18","subject":"Speaking","title":"5강 Test2 Part2","duration":"20:01"}]},"minutes":251,"lectureTargetMinutes":260,"subjects":"강의 8개","tasks":[{"id":"words_2026-06-16","label":"단어 100개 암기","section":"words"},{"id":"grammar_2026-06-16","label":"문법 1개","section":"grammar"},{"id":"listening_2026-06-16","label":"리스닝 문제 1세트","section":"listening"},{"id":"reading_2026-06-16","label":"리딩 문제 1지문","section":"reading"},{"id":"writing_2026-06-16","label":"라이팅 1개 작성","section":"writing"}],"tutor":false,"words":100},{"date":"2026-06-17","day":37,"stage":"Cambridge18","codes":["182","149","150","151","152","163","164","165"],"lectures":{"listening":[{"row":"149","date":"","code":"149","stage":"Cambridge18","course":"Cambridge 18","subject":"Listening","title":"9강 Test3 Part1","duration":"20:00"},{"row":"150","date":"","code":"150","stage":"Cambridge18","course":"Cambridge 18","subject":"Listening","title":"10강 Test3 Part2","duration":"23:21"},{"row":"151","date":"","code":"151","stage":"Cambridge18","course":"Cambridge 18","subject":"Listening","title":"11강 Test3 Part3","duration":"25:22"},{"row":"152","date":"","code":"152","stage":"Cambridge18","course":"Cambridge 18","subject":"Listening","title":"12강 Test3 Part4","duration":"20:01"}],"reading":[{"row":"163","date":"","code":"163","stage":"Cambridge18","course":"Cambridge 18","subject":"Academic Reading","title":"7강 Test3 Passage1","duration":"46:09"},{"row":"164","date":"","code":"164","stage":"Cambridge18","course":"Cambridge 18","subject":"Academic Reading","title":"8강 Test3 Passage2","duration":"39:47"},{"row":"165","date":"","code":"165","stage":"Cambridge18","course":"Cambridge 18","subject":"Academic Reading","title":"9강 Test3 Passage3","duration":"37:30"}],"writing":[],"speaking":[{"row":"182","date":"","code":"182","stage":"Cambridge18","course":"Cambridge 18","subject":"Speaking","title":"6강 Test2 Part3","duration":"26:18"}]},"minutes":238,"lectureTargetMinutes":260,"subjects":"강의 8개","tasks":[{"id":"words_2026-06-17","label":"단어 100개 암기","section":"words"},{"id":"grammar_2026-06-17","label":"문법 1개","section":"grammar"},{"id":"listening_2026-06-17","label":"리스닝 문제 1세트","section":"listening"},{"id":"reading_2026-06-17","label":"리딩 문제 1지문","section":"reading"},{"id":"writing_2026-06-17","label":"라이팅 1개 작성","section":"writing"}],"tutor":false,"words":100},{"date":"2026-06-18","day":38,"stage":"Cambridge18","codes":["171","175","183","184","185","153","154","155","156"],"lectures":{"listening":[{"row":"153","date":"","code":"153","stage":"Cambridge18","course":"Cambridge 18","subject":"Listening","title":"13강 Test4 Part1","duration":"24:34"},{"row":"154","date":"","code":"154","stage":"Cambridge18","course":"Cambridge 18","subject":"Listening","title":"14강 Test4 Part2","duration":"22:43"},{"row":"155","date":"","code":"155","stage":"Cambridge18","course":"Cambridge 18","subject":"Listening","title":"15강 Test4 Part3","duration":"28:31"},{"row":"156","date":"","code":"156","stage":"Cambridge18","course":"Cambridge 18","subject":"Listening","title":"16강 Test4 Part4","duration":"23:29"}],"reading":[],"writing":[{"row":"171","date":"","code":"171","stage":"Cambridge18","course":"Cambridge 18","subject":"Academic Writing Task1","title":"3강 Task1 Test3","duration":"34:46"},{"row":"175","date":"","code":"175","stage":"Cambridge18","course":"Cambridge 18","subject":"Academic Writing Task2","title":"7강 Task2 Test3","duration":"26:18"}],"speaking":[{"row":"183","date":"","code":"183","stage":"Cambridge18","course":"Cambridge 18","subject":"Speaking","title":"7강 Test3 Part1","duration":"21:37"},{"row":"184","date":"","code":"184","stage":"Cambridge18","course":"Cambridge 18","subject":"Speaking","title":"8강 Test3 Part2","duration":"20:45"},{"row":"185","date":"","code":"185","stage":"Cambridge18","course":"Cambridge 18","subject":"Speaking","title":"9강 Test3 Part3","duration":"25:21"}]},"minutes":228,"lectureTargetMinutes":260,"subjects":"강의 9개","tasks":[{"id":"words_2026-06-18","label":"단어 100개 암기","section":"words"},{"id":"grammar_2026-06-18","label":"문법 1개","section":"grammar"},{"id":"listening_2026-06-18","label":"리스닝 문제 1세트","section":"listening"},{"id":"reading_2026-06-18","label":"리딩 문제 1지문","section":"reading"},{"id":"writing_2026-06-18","label":"라이팅 1개 작성","section":"writing"}],"tutor":false,"words":100},{"date":"2026-06-19","day":39,"stage":"Cambridge18 + 실전기출 W/S","codes":["166","167","168","172","176","186","187","188","317"],"lectures":{"listening":[],"reading":[{"row":"166","date":"","code":"166","stage":"Cambridge18","course":"Cambridge 18","subject":"Academic Reading","title":"10강 Test4 Passage1","duration":"35:29"},{"row":"167","date":"","code":"167","stage":"Cambridge18","course":"Cambridge 18","subject":"Academic Reading","title":"11강 Test4 Passage2","duration":"33:03"},{"row":"168","date":"","code":"168","stage":"Cambridge18","course":"Cambridge 18","subject":"Academic Reading","title":"12강 Test4 Passage3","duration":"39:32"}],"writing":[{"row":"172","date":"","code":"172","stage":"Cambridge18","course":"Cambridge 18","subject":"Academic Writing Task1","title":"4강 Task1 Test4","duration":"31:46"},{"row":"176","date":"","code":"176","stage":"Cambridge18","course":"Cambridge 18","subject":"Academic Writing Task2","title":"8강 Task2 Test4","duration":"27:44"},{"row":"317","date":"","code":"317","stage":"실전기출 W/S","course":"실전기출 W/S","subject":"Writing Task2","title":"1강 Task 2 writing OT","duration":"20:58"}],"speaking":[{"row":"186","date":"","code":"186","stage":"Cambridge18","course":"Cambridge 18","subject":"Speaking","title":"10강 Test4 Part1","duration":"25:40"},{"row":"187","date":"","code":"187","stage":"Cambridge18","course":"Cambridge 18","subject":"Speaking","title":"11강 Test4 Part2","duration":"24:05"},{"row":"188","date":"","code":"188","stage":"Cambridge18","course":"Cambridge 18","subject":"Speaking","title":"12강 Test4 Part3","duration":"21:25"}]},"minutes":260,"lectureTargetMinutes":260,"subjects":"강의 9개","tasks":[{"id":"words_2026-06-19","label":"단어 100개 암기","section":"words"},{"id":"grammar_2026-06-19","label":"문법 1개","section":"grammar"},{"id":"listening_2026-06-19","label":"리스닝 문제 1세트","section":"listening"},{"id":"reading_2026-06-19","label":"리딩 문제 1지문","section":"reading"},{"id":"writing_2026-06-19","label":"라이팅 1개 작성","section":"writing"}],"tutor":false,"words":100},{"date":"2026-06-20","day":40,"stage":"실전기출 W/S","codes":["318","319","320","321","322","323","324","325","326","327","328"],"lectures":{"listening":[],"reading":[],"writing":[{"row":"318","date":"","code":"318","stage":"실전기출 W/S","course":"실전기출 W/S","subject":"Writing Task2","title":"2강 To what extent do you agree or disagree - Tourism","duration":"35:43"},{"row":"319","date":"","code":"319","stage":"실전기출 W/S","course":"실전기출 W/S","subject":"Writing Task2","title":"3강 Discuss both views and give your opinion - University education","duration":"21:26"},{"row":"320","date":"","code":"320","stage":"실전기출 W/S","course":"실전기출 W/S","subject":"Writing Task2","title":"4강 Advantages and Disadvatages - Email","duration":"32:40"},{"row":"321","date":"","code":"321","stage":"실전기출 W/S","course":"실전기출 W/S","subject":"Writing Task2","title":"5강 Benefits and Drawbacks - Gap year","duration":"24:39"},{"row":"322","date":"","code":"322","stage":"실전기출 W/S","course":"실전기출 W/S","subject":"Writing Task2","title":"6강 Causes and Solutions - Traffic congestion","duration":"29:23"},{"row":"323","date":"","code":"323","stage":"실전기출 W/S","course":"실전기출 W/S","subject":"Writing Task2","title":"7강 To what extent do you agree or disagree - Environmental damage","duration":"25:44"},{"row":"324","date":"","code":"324","stage":"실전기출 W/S","course":"실전기출 W/S","subject":"Writing Task2","title":"8강 Discuss both views and give your opinion - Globalization","duration":"23:25"},{"row":"325","date":"","code":"325","stage":"실전기출 W/S","course":"실전기출 W/S","subject":"Writing Task2","title":"9강 Advantages and Disadvantages - Online shopping","duration":"16:37"},{"row":"326","date":"","code":"326","stage":"실전기출 W/S","course":"실전기출 W/S","subject":"Writing Task2","title":"10강 Causes and Solutions - Animal extinction","duration":"20:12"}],"speaking":[{"row":"327","date":"","code":"327","stage":"실전기출 W/S","course":"실전기출 W/S","subject":"Speaking","title":"1강 Part1 Speaking OT","duration":"07:22"},{"row":"328","date":"","code":"328","stage":"실전기출 W/S","course":"실전기출 W/S","subject":"Speaking","title":"2강 Part1 Work,study","duration":"18:51"}]},"minutes":256,"lectureTargetMinutes":260,"subjects":"강의 11개","tasks":[{"id":"words_2026-06-20","label":"단어 100개 암기","section":"words"},{"id":"grammar_2026-06-20","label":"문법 1개","section":"grammar"},{"id":"listening_2026-06-20","label":"리스닝 문제 1세트","section":"listening"},{"id":"reading_2026-06-20","label":"리딩 문제 1지문","section":"reading"},{"id":"writing_2026-06-20","label":"라이팅 1개 작성","section":"writing"}],"tutor":false,"words":100},{"date":"2026-06-21","day":41,"stage":"실전기출 W/S + 파이널특강","codes":["329","330","331","332","333","334","335","336","337","338","339","340","341","342","343","344"],"lectures":{"listening":[{"row":"338","date":"","code":"338","stage":"파이널특강","course":"파이널특강","subject":"Listening","title":"1강 객관식 유형 정리","duration":"10:46"},{"row":"339","date":"","code":"339","stage":"파이널특강","course":"파이널특강","subject":"Listening","title":"2강 Map 유형 정리","duration":"07:27"},{"row":"340","date":"","code":"340","stage":"파이널특강","course":"파이널특강","subject":"Listening","title":"3강 3가지 학습 전략","duration":"07:46"}],"reading":[{"row":"344","date":"","code":"344","stage":"파이널특강","course":"파이널특강","subject":"Academic Reading","title":"1강 Scanning","duration":"12:30"}],"writing":[],"speaking":[{"row":"329","date":"","code":"329","stage":"실전기출 W/S","course":"실전기출 W/S","subject":"Speaking","title":"3강 Part1 Other common topics","duration":"24:05"},{"row":"330","date":"","code":"330","stage":"실전기출 W/S","course":"실전기출 W/S","subject":"Speaking","title":"4강 Part2 Person-leader","duration":"20:32"},{"row":"331","date":"","code":"331","stage":"실전기출 W/S","course":"실전기출 W/S","subject":"Speaking","title":"5강 Part3 Person-leader","duration":"15:38"},{"row":"332","date":"","code":"332","stage":"실전기출 W/S","course":"실전기출 W/S","subject":"Speaking","title":"6강 Part2 Place-place you would like to work","duration":"22:01"},{"row":"333","date":"","code":"333","stage":"실전기출 W/S","course":"실전기출 W/S","subject":"Speaking","title":"7강 Part3 Place-place you would like to work","duration":"13:21"},{"row":"334","date":"","code":"334","stage":"실전기출 W/S","course":"실전기출 W/S","subject":"Speaking","title":"8강 Part2 Object-equipment","duration":"21:45"},{"row":"335","date":"","code":"335","stage":"실전기출 W/S","course":"실전기출 W/S","subject":"Speaking","title":"9강 Part3 Object-equipment","duration":"19:54"},{"row":"336","date":"","code":"336","stage":"실전기출 W/S","course":"실전기출 W/S","subject":"Speaking","title":"10강 Part2 Event","duration":"19:34"},{"row":"337","date":"","code":"337","stage":"실전기출 W/S","course":"실전기출 W/S","subject":"Speaking","title":"11강 Part3 Event","duration":"17:01"},{"row":"341","date":"","code":"341","stage":"파이널특강","course":"파이널특강","subject":"Speaking","title":"1강 Part 1. 직관적 답변으로 1점 올리기","duration":"12:06"},{"row":"342","date":"","code":"342","stage":"파이널특강","course":"파이널특강","subject":"Speaking","title":"2강 Part 2. 적절한 TMI 붙이기","duration":"13:37"},{"row":"343","date":"","code":"343","stage":"파이널특강","course":"파이널특강","subject":"Speaking","title":"3강 Part 3. 답변 Logic 잡기","duration":"13:07"}]},"minutes":251,"lectureTargetMinutes":260,"subjects":"강의 16개","tasks":[{"id":"words_2026-06-21","label":"단어 100개 암기","section":"words"},{"id":"grammar_2026-06-21","label":"문법 1개","section":"grammar"},{"id":"listening_2026-06-21","label":"리스닝 문제 1세트","section":"listening"},{"id":"reading_2026-06-21","label":"리딩 문제 1지문","section":"reading"},{"id":"writing_2026-06-21","label":"라이팅 1개 작성","section":"writing"}],"tutor":false,"words":100},{"date":"2026-06-22","day":42,"stage":"파이널특강","codes":["345","346","347","348","349","350","351","352","353","354","355"],"lectures":{"listening":[],"reading":[{"row":"345","date":"","code":"345","stage":"파이널특강","course":"파이널특강","subject":"Academic Reading","title":"2강 Skimming","duration":"10:16"},{"row":"346","date":"","code":"346","stage":"파이널특강","course":"파이널특강","subject":"Academic Reading","title":"3강 자주 나오는 형용사","duration":"16:01"}],"writing":[{"row":"347","date":"","code":"347","stage":"파이널특강","course":"파이널특강","subject":"Academic Writing Task1","title":"1강 Line","duration":"13:38"},{"row":"348","date":"","code":"348","stage":"파이널특강","course":"파이널특강","subject":"Academic Writing Task1","title":"2강 Bar","duration":"22:41"},{"row":"349","date":"","code":"349","stage":"파이널특강","course":"파이널특강","subject":"Academic Writing Task1","title":"3강 Pie","duration":"13:35"},{"row":"350","date":"","code":"350","stage":"파이널특강","course":"파이널특강","subject":"Academic Writing Task1","title":"4강 Table","duration":"29:50"},{"row":"351","date":"","code":"351","stage":"파이널특강","course":"파이널특강","subject":"Academic Writing Task1","title":"5강 Map","duration":"11:30"},{"row":"352","date":"","code":"352","stage":"파이널특강","course":"파이널특강","subject":"Academic Writing Task1","title":"6강 Flow Chart","duration":"12:10"},{"row":"353","date":"","code":"353","stage":"파이널특강","course":"파이널특강","subject":"Academic Writing Task2","title":"1강 Introduction","duration":"14:47"},{"row":"354","date":"","code":"354","stage":"파이널특강","course":"파이널특강","subject":"Academic Writing Task2","title":"2강 Health 아이디어 정리","duration":"13:58"},{"row":"355","date":"","code":"355","stage":"파이널특강","course":"파이널특강","subject":"Academic Writing Task2","title":"3강 Environment 아이디어 정리","duration":"18:41"}],"speaking":[]},"minutes":177,"lectureTargetMinutes":260,"subjects":"강의 11개","tasks":[{"id":"words_2026-06-22","label":"단어 100개 암기","section":"words"},{"id":"grammar_2026-06-22","label":"문법 1개","section":"grammar"},{"id":"listening_2026-06-22","label":"리스닝 문제 1세트","section":"listening"},{"id":"reading_2026-06-22","label":"리딩 문제 1지문","section":"reading"},{"id":"writing_2026-06-22","label":"라이팅 1개 작성","section":"writing"}],"tutor":false,"words":100},{"date":"2026-06-23","day":43,"stage":"최종 복습 1일차","codes":[],"lectures":{"listening":[],"reading":[],"writing":[],"speaking":[]},"minutes":0,"lectureTargetMinutes":0,"subjects":"최종 정리","tasks":[{"id":"review_words_2026-06-23","label":"오답 단어 100개 복습","section":"words"},{"id":"review_listening_2026-06-23","label":"리스닝 오답 근거 다시 듣기","section":"listening"},{"id":"review_reading_2026-06-23","label":"리딩 오답 유형 정리","section":"reading"},{"id":"review_writing_2026-06-23","label":"Task1 Task2 각 1개 작성","section":"writing"},{"id":"review_speaking_2026-06-23","label":"스피킹 Part1 Part2 Part3 녹음","section":"speaking"}],"tutor":false,"words":100},{"date":"2026-06-24","day":44,"stage":"시험 전 최종 정리","codes":[],"lectures":{"listening":[],"reading":[],"writing":[],"speaking":[]},"minutes":0,"lectureTargetMinutes":0,"subjects":"최종 정리","tasks":[{"id":"final_words_2026-06-24","label":"오답 단어 80개 복습","section":"words"},{"id":"final_writing_2026-06-24","label":"라이팅 표현 최종 정리","section":"writing"},{"id":"final_speaking_2026-06-24","label":"스피킹 답변 20개 점검","section":"speaking"},{"id":"final_ready_2026-06-24","label":"시험 준비물 확인","section":"exam_ready"}],"tutor":false,"words":80},{"date":"2026-06-25","day":45,"stage":"시험일","codes":[],"lectures":{"listening":[],"reading":[],"writing":[],"speaking":[]},"minutes":0,"lectureTargetMinutes":0,"subjects":"","tasks":[{"id":"exam_2026-06-25","label":"IELTS Academic 시험 응시","section":"exam"},{"id":"exam_review_2026-06-25","label":"시험 후 짧은 회고 저장","section":"review"}],"tutor":false,"words":0}];
const JY_FULL_LECTURES = [{"row":"037","date":"","code":"037","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Listening","title":"1강 Test1 Section1","duration":"22:23"},{"row":"038","date":"","code":"038","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Listening","title":"2강 Test1 Section2","duration":"18:31"},{"row":"039","date":"","code":"039","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Listening","title":"3강 Test1 Section3","duration":"23:04"},{"row":"040","date":"","code":"040","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Listening","title":"4강 Test1 Section4","duration":"24:30"},{"row":"041","date":"","code":"041","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Listening","title":"5강 Test2 Section1","duration":"17:58"},{"row":"042","date":"","code":"042","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Listening","title":"6강 Test2 Section2","duration":"15:47"},{"row":"043","date":"","code":"043","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Listening","title":"7강 Test2 Section3","duration":"18:55"},{"row":"044","date":"","code":"044","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Listening","title":"8강 Test2 Section4","duration":"21:07"},{"row":"045","date":"","code":"045","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Listening","title":"9강 Test3 Section1","duration":"16:11"},{"row":"046","date":"","code":"046","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Listening","title":"10강 Test3 Section2","duration":"16:57"},{"row":"047","date":"","code":"047","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Listening","title":"11강 Test3 Section3","duration":"20:40"},{"row":"048","date":"","code":"048","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Listening","title":"12강 Test3 Section4","duration":"21:51"},{"row":"049","date":"","code":"049","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Listening","title":"13강 Test4 Section1","duration":"11:01"},{"row":"050","date":"","code":"050","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Listening","title":"14강 Test4 Section2","duration":"14:05"},{"row":"051","date":"","code":"051","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Listening","title":"15강 Test4 Section3","duration":"16:35"},{"row":"052","date":"","code":"052","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Listening","title":"16강 Test4 Section4","duration":"16:35"},{"row":"053","date":"","code":"053","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Reading","title":"1강 Test1 Passage1","duration":"41:39"},{"row":"054","date":"","code":"054","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Reading","title":"2강 Test1 Passage2","duration":"42:09"},{"row":"055","date":"","code":"055","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Reading","title":"3강 Test1 Passage3","duration":"30:08"},{"row":"056","date":"","code":"056","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Reading","title":"4강 Test2 Passage1","duration":"29:27"},{"row":"057","date":"","code":"057","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Reading","title":"5강 Test2 Passage2","duration":"44:06"},{"row":"058","date":"","code":"058","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Reading","title":"6강 Test2 Passage3","duration":"37:03"},{"row":"059","date":"","code":"059","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Reading","title":"7강 Test3 Passage1","duration":"42:21"},{"row":"060","date":"","code":"060","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Reading","title":"8강 Test3 Passage2","duration":"33:03"},{"row":"061","date":"","code":"061","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Reading","title":"9강 Test3 Passage3","duration":"45:23"},{"row":"062","date":"","code":"062","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Reading","title":"10강 Test4 Passage1","duration":"35:42"},{"row":"063","date":"","code":"063","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Reading","title":"11강 Test4 Passage2","duration":"33:12"},{"row":"064","date":"","code":"064","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Reading","title":"12강 Test4 Passage3","duration":"32:07"},{"row":"065","date":"","code":"065","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Writing Task1","title":"1강 Task1 Test1 (1)","duration":"24:41"},{"row":"066","date":"","code":"066","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Writing Task1","title":"2강 Task1 Test1 (2)","duration":"20:51"},{"row":"067","date":"","code":"067","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Writing Task1","title":"3강 Task1 Test2 (1)","duration":"20:26"},{"row":"068","date":"","code":"068","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Writing Task1","title":"4강 Task1 Test2 (2)","duration":"22:57"},{"row":"069","date":"","code":"069","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Writing Task1","title":"5강 Task1 Test3 (1)","duration":"20:08"},{"row":"070","date":"","code":"070","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Writing Task1","title":"6강 Task1 Test3 (2)","duration":"21:38"},{"row":"071","date":"","code":"071","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Writing Task1","title":"7강 Task1 Test4 (1)","duration":"17:04"},{"row":"072","date":"","code":"072","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Writing Task1","title":"8강 Task1 Test4 (2)","duration":"18:34"},{"row":"073","date":"","code":"073","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Writing Task2","title":"9강 Task2 Test1 (1)","duration":"16:54"},{"row":"074","date":"","code":"074","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Writing Task2","title":"10강 Task2 Test1 (2)","duration":"19:52"},{"row":"075","date":"","code":"075","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Writing Task2","title":"11강 Task2 Test2 (1)","duration":"12:08"},{"row":"076","date":"","code":"076","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Writing Task2","title":"12강 Task2 Test2 (2)","duration":"21:38"},{"row":"077","date":"","code":"077","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Writing Task2","title":"13강 Task2 Test3 (1)","duration":"14:15"},{"row":"078","date":"","code":"078","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Writing Task2","title":"14강 Task2 Test3 (2)","duration":"20:40"},{"row":"079","date":"","code":"079","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Writing Task2","title":"15강 Task2 Test4 (1)","duration":"10:45"},{"row":"080","date":"","code":"080","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Writing Task2","title":"16강 Task2 Test4 (2)","duration":"26:21"},{"row":"081","date":"","code":"081","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Speaking","title":"1강 Test1 Part1","duration":"12:36"},{"row":"082","date":"","code":"082","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Speaking","title":"2강 Test1 Part2","duration":"13:22"},{"row":"083","date":"","code":"083","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Speaking","title":"3강 Test1 Part3","duration":"15:52"},{"row":"084","date":"","code":"084","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Speaking","title":"4강 Test2 Part1","duration":"10:04"},{"row":"085","date":"","code":"085","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Speaking","title":"5강 Test2 Part2","duration":"10:25"},{"row":"086","date":"","code":"086","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Speaking","title":"6강 Test2 Part3","duration":"12:23"},{"row":"087","date":"","code":"087","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Speaking","title":"7강 Test3 Part1","duration":"14:02"},{"row":"088","date":"","code":"088","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Speaking","title":"8강 Test3 Part2","duration":"09:48"},{"row":"089","date":"","code":"089","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Speaking","title":"9강 Test3 Part3","duration":"15:31"},{"row":"090","date":"","code":"090","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Speaking","title":"10강 Test4 Part1","duration":"12:36"},{"row":"091","date":"","code":"091","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Speaking","title":"11강 Test4 Part2","duration":"08:28"},{"row":"092","date":"","code":"092","stage":"실전모의고사1","course":"edm IELTS 실전모의고사 1","subject":"Speaking","title":"12강 Test4 Part3","duration":"14:50"},{"row":"093","date":"","code":"093","stage":"Cambridge19","course":"Cambridge 19","subject":"Listening","title":"1강 Test1 Part1","duration":"33:54"},{"row":"094","date":"","code":"094","stage":"Cambridge19","course":"Cambridge 19","subject":"Listening","title":"2강 Test1 Part2","duration":"29:52"},{"row":"095","date":"","code":"095","stage":"Cambridge19","course":"Cambridge 19","subject":"Listening","title":"3강 Test1 Part3","duration":"27:32"},{"row":"096","date":"","code":"096","stage":"Cambridge19","course":"Cambridge 19","subject":"Listening","title":"4강 Test1 Part4","duration":"22:17"},{"row":"097","date":"","code":"097","stage":"Cambridge19","course":"Cambridge 19","subject":"Listening","title":"5강 Test2 Part1","duration":"22:04"},{"row":"098","date":"","code":"098","stage":"Cambridge19","course":"Cambridge 19","subject":"Listening","title":"6강 Test2 Part2","duration":"24:56"},{"row":"099","date":"","code":"099","stage":"Cambridge19","course":"Cambridge 19","subject":"Listening","title":"7강 Test2 Part3","duration":"34:15"},{"row":"100","date":"","code":"100","stage":"Cambridge19","course":"Cambridge 19","subject":"Listening","title":"8강 Test2 Part4","duration":"22:55"},{"row":"101","date":"","code":"101","stage":"Cambridge19","course":"Cambridge 19","subject":"Listening","title":"9강 Test3 Part1","duration":"18:07"},{"row":"102","date":"","code":"102","stage":"Cambridge19","course":"Cambridge 19","subject":"Listening","title":"10강 Test3 Part2","duration":"19:40"},{"row":"103","date":"","code":"103","stage":"Cambridge19","course":"Cambridge 19","subject":"Listening","title":"11강 Test3 Part3","duration":"28:33"},{"row":"104","date":"","code":"104","stage":"Cambridge19","course":"Cambridge 19","subject":"Listening","title":"12강 Test3 Part4","duration":"17:23"},{"row":"105","date":"","code":"105","stage":"Cambridge19","course":"Cambridge 19","subject":"Listening","title":"13강 Test4 Part1","duration":"16:46"},{"row":"106","date":"","code":"106","stage":"Cambridge19","course":"Cambridge 19","subject":"Listening","title":"14강 Test4 Part2","duration":"17:44"},{"row":"107","date":"","code":"107","stage":"Cambridge19","course":"Cambridge 19","subject":"Listening","title":"15강 Test4 Part3","duration":"19:52"},{"row":"108","date":"","code":"108","stage":"Cambridge19","course":"Cambridge 19","subject":"Listening","title":"16강 Test4 Part4","duration":"22:55"},{"row":"109","date":"","code":"109","stage":"Cambridge19","course":"Cambridge 19","subject":"Academic Reading","title":"1강 Test1 Passage1","duration":"36:54"},{"row":"110","date":"","code":"110","stage":"Cambridge19","course":"Cambridge 19","subject":"Academic Reading","title":"2강 Test1 Passage2","duration":"33:59"},{"row":"111","date":"","code":"111","stage":"Cambridge19","course":"Cambridge 19","subject":"Academic Reading","title":"3강 Test1 Passage3","duration":"43:20"},{"row":"112","date":"","code":"112","stage":"Cambridge19","course":"Cambridge 19","subject":"Academic Reading","title":"4강 Test2 Passage1","duration":"36:27"},{"row":"113","date":"","code":"113","stage":"Cambridge19","course":"Cambridge 19","subject":"Academic Reading","title":"5강 Test2 Passage2","duration":"24:52"},{"row":"114","date":"","code":"114","stage":"Cambridge19","course":"Cambridge 19","subject":"Academic Reading","title":"6강 Test2 Passage3","duration":"33:04"},{"row":"115","date":"","code":"115","stage":"Cambridge19","course":"Cambridge 19","subject":"Academic Reading","title":"7강 Test3 Passage1","duration":"23:58"},{"row":"116","date":"","code":"116","stage":"Cambridge19","course":"Cambridge 19","subject":"Academic Reading","title":"8강 Test3 Passage2","duration":"34:52"},{"row":"117","date":"","code":"117","stage":"Cambridge19","course":"Cambridge 19","subject":"Academic Reading","title":"9강 Test3 Passage3","duration":"32:52"},{"row":"118","date":"","code":"118","stage":"Cambridge19","course":"Cambridge 19","subject":"Academic Reading","title":"10강 Test4 Passage1","duration":"25:24"},{"row":"119","date":"","code":"119","stage":"Cambridge19","course":"Cambridge 19","subject":"Academic Reading","title":"11강 Test4 Passage2","duration":"29:04"},{"row":"120","date":"","code":"120","stage":"Cambridge19","course":"Cambridge 19","subject":"Academic Reading","title":"12강 Test4 Passage3","duration":"39:23"},{"row":"121","date":"","code":"121","stage":"Cambridge19","course":"Cambridge 19","subject":"Academic Writing Task1","title":"1강 Task1 Test1","duration":"47:16"},{"row":"122","date":"","code":"122","stage":"Cambridge19","course":"Cambridge 19","subject":"Academic Writing Task1","title":"2강 Task1 Test2","duration":"30:48"},{"row":"123","date":"","code":"123","stage":"Cambridge19","course":"Cambridge 19","subject":"Academic Writing Task1","title":"3강 Task1 Test3","duration":"29:41"},{"row":"124","date":"","code":"124","stage":"Cambridge19","course":"Cambridge 19","subject":"Academic Writing Task1","title":"4강 Task1 Test4","duration":"29:58"},{"row":"125","date":"","code":"125","stage":"Cambridge19","course":"Cambridge 19","subject":"Academic Writing Task2","title":"5강 Task2 Test1","duration":"41:13"},{"row":"126","date":"","code":"126","stage":"Cambridge19","course":"Cambridge 19","subject":"Academic Writing Task2","title":"6강 Task2 Test2","duration":"28:11"},{"row":"127","date":"","code":"127","stage":"Cambridge19","course":"Cambridge 19","subject":"Academic Writing Task2","title":"7강 Task2 Test3","duration":"23:50"},{"row":"128","date":"","code":"128","stage":"Cambridge19","course":"Cambridge 19","subject":"Academic Writing Task2","title":"8강 Task2 Test4","duration":"21:38"},{"row":"129","date":"","code":"129","stage":"Cambridge19","course":"Cambridge 19","subject":"Speaking","title":"1강 Test1 Part1","duration":"23:31"},{"row":"130","date":"","code":"130","stage":"Cambridge19","course":"Cambridge 19","subject":"Speaking","title":"2강 Test1 Part2","duration":"23:40"},{"row":"131","date":"","code":"131","stage":"Cambridge19","course":"Cambridge 19","subject":"Speaking","title":"3강 Test1 Part3","duration":"29:31"},{"row":"132","date":"","code":"132","stage":"Cambridge19","course":"Cambridge 19","subject":"Speaking","title":"4강 Test2 Part1","duration":"24:45"},{"row":"133","date":"","code":"133","stage":"Cambridge19","course":"Cambridge 19","subject":"Speaking","title":"5강 Test2 Part2","duration":"20:07"},{"row":"134","date":"","code":"134","stage":"Cambridge19","course":"Cambridge 19","subject":"Speaking","title":"6강 Test2 Part3","duration":"27:43"},{"row":"135","date":"","code":"135","stage":"Cambridge19","course":"Cambridge 19","subject":"Speaking","title":"7강 Test3 Part1","duration":"23:52"},{"row":"136","date":"","code":"136","stage":"Cambridge19","course":"Cambridge 19","subject":"Speaking","title":"8강 Test3 Part2","duration":"19:08"},{"row":"137","date":"","code":"137","stage":"Cambridge19","course":"Cambridge 19","subject":"Speaking","title":"9강 Test3 Part3","duration":"31:51"},{"row":"138","date":"","code":"138","stage":"Cambridge19","course":"Cambridge 19","subject":"Speaking","title":"10강 Test4 Part1","duration":"21:38"},{"row":"139","date":"","code":"139","stage":"Cambridge19","course":"Cambridge 19","subject":"Speaking","title":"11강 Test4 Part2","duration":"18:35"},{"row":"140","date":"","code":"140","stage":"Cambridge19","course":"Cambridge 19","subject":"Speaking","title":"12강 Test4 Part3","duration":"25:14"},{"row":"141","date":"","code":"141","stage":"Cambridge18","course":"Cambridge 18","subject":"Listening","title":"1강 Test1 Part1","duration":"21:31"},{"row":"142","date":"","code":"142","stage":"Cambridge18","course":"Cambridge 18","subject":"Listening","title":"2강 Test1 Part2","duration":"22:16"},{"row":"143","date":"","code":"143","stage":"Cambridge18","course":"Cambridge 18","subject":"Listening","title":"3강 Test1 Part3","duration":"30:11"},{"row":"144","date":"","code":"144","stage":"Cambridge18","course":"Cambridge 18","subject":"Listening","title":"4강 Test1 Part4","duration":"26:16"},{"row":"145","date":"","code":"145","stage":"Cambridge18","course":"Cambridge 18","subject":"Listening","title":"5강 Test2 Part1","duration":"28:46"},{"row":"146","date":"","code":"146","stage":"Cambridge18","course":"Cambridge 18","subject":"Listening","title":"6강 Test2 Part2","duration":"20:01"},{"row":"147","date":"","code":"147","stage":"Cambridge18","course":"Cambridge 18","subject":"Listening","title":"7강 Test2 Part3","duration":"28:21"},{"row":"148","date":"","code":"148","stage":"Cambridge18","course":"Cambridge 18","subject":"Listening","title":"8강 Test2 Part4","duration":"21:27"},{"row":"149","date":"","code":"149","stage":"Cambridge18","course":"Cambridge 18","subject":"Listening","title":"9강 Test3 Part1","duration":"20:00"},{"row":"150","date":"","code":"150","stage":"Cambridge18","course":"Cambridge 18","subject":"Listening","title":"10강 Test3 Part2","duration":"23:21"},{"row":"151","date":"","code":"151","stage":"Cambridge18","course":"Cambridge 18","subject":"Listening","title":"11강 Test3 Part3","duration":"25:22"},{"row":"152","date":"","code":"152","stage":"Cambridge18","course":"Cambridge 18","subject":"Listening","title":"12강 Test3 Part4","duration":"20:01"},{"row":"153","date":"","code":"153","stage":"Cambridge18","course":"Cambridge 18","subject":"Listening","title":"13강 Test4 Part1","duration":"24:34"},{"row":"154","date":"","code":"154","stage":"Cambridge18","course":"Cambridge 18","subject":"Listening","title":"14강 Test4 Part2","duration":"22:43"},{"row":"155","date":"","code":"155","stage":"Cambridge18","course":"Cambridge 18","subject":"Listening","title":"15강 Test4 Part3","duration":"28:31"},{"row":"156","date":"","code":"156","stage":"Cambridge18","course":"Cambridge 18","subject":"Listening","title":"16강 Test4 Part4","duration":"23:29"},{"row":"157","date":"","code":"157","stage":"Cambridge18","course":"Cambridge 18","subject":"Academic Reading","title":"1강 Test1 Passage1","duration":"43:18"},{"row":"158","date":"","code":"158","stage":"Cambridge18","course":"Cambridge 18","subject":"Academic Reading","title":"2강 Test1 Passage2","duration":"38:32"},{"row":"159","date":"","code":"159","stage":"Cambridge18","course":"Cambridge 18","subject":"Academic Reading","title":"3강 Test1 Passage3","duration":"39:11"},{"row":"160","date":"","code":"160","stage":"Cambridge18","course":"Cambridge 18","subject":"Academic Reading","title":"4강 Test2 Passage1","duration":"43:11"},{"row":"161","date":"","code":"161","stage":"Cambridge18","course":"Cambridge 18","subject":"Academic Reading","title":"5강 Test2 Passage2","duration":"40:10"},{"row":"162","date":"","code":"162","stage":"Cambridge18","course":"Cambridge 18","subject":"Academic Reading","title":"6강 Test2 Passage3","duration":"44:23"},{"row":"163","date":"","code":"163","stage":"Cambridge18","course":"Cambridge 18","subject":"Academic Reading","title":"7강 Test3 Passage1","duration":"46:09"},{"row":"164","date":"","code":"164","stage":"Cambridge18","course":"Cambridge 18","subject":"Academic Reading","title":"8강 Test3 Passage2","duration":"39:47"},{"row":"165","date":"","code":"165","stage":"Cambridge18","course":"Cambridge 18","subject":"Academic Reading","title":"9강 Test3 Passage3","duration":"37:30"},{"row":"166","date":"","code":"166","stage":"Cambridge18","course":"Cambridge 18","subject":"Academic Reading","title":"10강 Test4 Passage1","duration":"35:29"},{"row":"167","date":"","code":"167","stage":"Cambridge18","course":"Cambridge 18","subject":"Academic Reading","title":"11강 Test4 Passage2","duration":"33:03"},{"row":"168","date":"","code":"168","stage":"Cambridge18","course":"Cambridge 18","subject":"Academic Reading","title":"12강 Test4 Passage3","duration":"39:32"},{"row":"169","date":"","code":"169","stage":"Cambridge18","course":"Cambridge 18","subject":"Academic Writing Task1","title":"1강 Task1 Test1","duration":"51:22"},{"row":"170","date":"","code":"170","stage":"Cambridge18","course":"Cambridge 18","subject":"Academic Writing Task1","title":"2강 Task1 Test2","duration":"33:31"},{"row":"171","date":"","code":"171","stage":"Cambridge18","course":"Cambridge 18","subject":"Academic Writing Task1","title":"3강 Task1 Test3","duration":"34:46"},{"row":"172","date":"","code":"172","stage":"Cambridge18","course":"Cambridge 18","subject":"Academic Writing Task1","title":"4강 Task1 Test4","duration":"31:46"},{"row":"173","date":"","code":"173","stage":"Cambridge18","course":"Cambridge 18","subject":"Academic Writing Task2","title":"5강 Task2 Test1","duration":"42:49"},{"row":"174","date":"","code":"174","stage":"Cambridge18","course":"Cambridge 18","subject":"Academic Writing Task2","title":"6강 Task2 Test2","duration":"26:51"},{"row":"175","date":"","code":"175","stage":"Cambridge18","course":"Cambridge 18","subject":"Academic Writing Task2","title":"7강 Task2 Test3","duration":"26:18"},{"row":"176","date":"","code":"176","stage":"Cambridge18","course":"Cambridge 18","subject":"Academic Writing Task2","title":"8강 Task2 Test4","duration":"27:44"},{"row":"177","date":"","code":"177","stage":"Cambridge18","course":"Cambridge 18","subject":"Speaking","title":"1강 Test1 Part1","duration":"29:47"},{"row":"178","date":"","code":"178","stage":"Cambridge18","course":"Cambridge 18","subject":"Speaking","title":"2강 Test1 Part2","duration":"21:32"},{"row":"179","date":"","code":"179","stage":"Cambridge18","course":"Cambridge 18","subject":"Speaking","title":"3강 Test1 Part3","duration":"27:07"},{"row":"180","date":"","code":"180","stage":"Cambridge18","course":"Cambridge 18","subject":"Speaking","title":"4강 Test2 Part1","duration":"21:39"},{"row":"181","date":"","code":"181","stage":"Cambridge18","course":"Cambridge 18","subject":"Speaking","title":"5강 Test2 Part2","duration":"20:01"},{"row":"182","date":"","code":"182","stage":"Cambridge18","course":"Cambridge 18","subject":"Speaking","title":"6강 Test2 Part3","duration":"26:18"},{"row":"183","date":"","code":"183","stage":"Cambridge18","course":"Cambridge 18","subject":"Speaking","title":"7강 Test3 Part1","duration":"21:37"},{"row":"184","date":"","code":"184","stage":"Cambridge18","course":"Cambridge 18","subject":"Speaking","title":"8강 Test3 Part2","duration":"20:45"},{"row":"185","date":"","code":"185","stage":"Cambridge18","course":"Cambridge 18","subject":"Speaking","title":"9강 Test3 Part3","duration":"25:21"},{"row":"186","date":"","code":"186","stage":"Cambridge18","course":"Cambridge 18","subject":"Speaking","title":"10강 Test4 Part1","duration":"25:40"},{"row":"187","date":"","code":"187","stage":"Cambridge18","course":"Cambridge 18","subject":"Speaking","title":"11강 Test4 Part2","duration":"24:05"},{"row":"188","date":"","code":"188","stage":"Cambridge18","course":"Cambridge 18","subject":"Speaking","title":"12강 Test4 Part3","duration":"21:25"},{"row":"190","date":"","code":"190","stage":"Kings4 이론","course":"Kings 4.0+ 이론","subject":"Listening","title":"1강 Using the Time","duration":"16:44"},{"row":"191","date":"","code":"191","stage":"Kings4 이론","course":"Kings 4.0+ 이론","subject":"Listening","title":"2강 the Question Paper","duration":"18:18"},{"row":"192","date":"","code":"192","stage":"Kings4 이론","course":"Kings 4.0+ 이론","subject":"Listening","title":"3강 Key Words","duration":"17:48"},{"row":"193","date":"","code":"193","stage":"Kings4 이론","course":"Kings 4.0+ 이론","subject":"Listening","title":"4강 Agreeing and Disagreeing","duration":"20:13"},{"row":"194","date":"","code":"194","stage":"Kings4 이론","course":"Kings 4.0+ 이론","subject":"Listening","title":"6강 Names and Numbers","duration":"16:21"},{"row":"195","date":"","code":"195","stage":"Kings4 이론","course":"Kings 4.0+ 이론","subject":"Listening","title":"7강 Signposts","duration":"17:57"},{"row":"196","date":"","code":"196","stage":"Kings4 이론","course":"Kings 4.0+ 이론","subject":"Listening","title":"8강 Maps, Flowchart,Process","duration":"23:36"},{"row":"197","date":"","code":"197","stage":"Kings4 이론","course":"Kings 4.0+ 이론","subject":"Listening","title":"9강 Classification and Matching","duration":"23:59"},{"row":"198","date":"","code":"198","stage":"Kings4 이론","course":"Kings 4.0+ 이론","subject":"Listening","title":"10강 Copying and Checking","duration":"18:11"},{"row":"199","date":"","code":"199","stage":"Kings4 이론","course":"Kings 4.0+ 이론","subject":"Reading","title":"1강 Using the Time","duration":"14:14"},{"row":"200","date":"","code":"200","stage":"Kings4 이론","course":"Kings 4.0+ 이론","subject":"Reading","title":"2강 Understanding the Question","duration":"23:55"},{"row":"201","date":"","code":"201","stage":"Kings4 이론","course":"Kings 4.0+ 이론","subject":"Reading","title":"3강 Scanning for Meaning","duration":"18:35"},{"row":"202","date":"","code":"202","stage":"Kings4 이론","course":"Kings 4.0+ 이론","subject":"Reading","title":"4강 Key Words Synonyms and Paraphrase","duration":"19:49"},{"row":"203","date":"","code":"203","stage":"Kings4 이론","course":"Kings 4.0+ 이론","subject":"Reading","title":"5강 The Structure of Paragraphs","duration":"26:49"},{"row":"204","date":"","code":"204","stage":"Kings4 이론","course":"Kings 4.0+ 이론","subject":"Reading","title":"6강 Unknown Words and Phrases","duration":"30:32"},{"row":"205","date":"","code":"205","stage":"Kings4 이론","course":"Kings 4.0+ 이론","subject":"Reading","title":"7강 Distractors","duration":"15:39"},{"row":"206","date":"","code":"206","stage":"Kings4 이론","course":"Kings 4.0+ 이론","subject":"Reading","title":"8강 Opinions","duration":"29:00"},{"row":"207","date":"","code":"207","stage":"Kings4 이론","course":"Kings 4.0+ 이론","subject":"Reading","title":"9강 Detailed Reading","duration":"27:07"},{"row":"208","date":"","code":"208","stage":"Kings4 이론","course":"Kings 4.0+ 이론","subject":"Reading","title":"10강 Checking your Answers","duration":"24:10"},{"row":"209","date":"","code":"209","stage":"Kings4 이론","course":"Kings 4.0+ 이론","subject":"Writing Task1","title":"1강 Paraphrasing the Title_A","duration":"25:18"},{"row":"210","date":"","code":"210","stage":"Kings4 이론","course":"Kings 4.0+ 이론","subject":"Writing Task1","title":"2강 Writing an Overview_A","duration":"21:48"},{"row":"211","date":"","code":"211","stage":"Kings4 이론","course":"Kings 4.0+ 이론","subject":"Writing Task1","title":"3강 Describing Numbers_A","duration":"27:10"},{"row":"212","date":"","code":"212","stage":"Kings4 이론","course":"Kings 4.0+ 이론","subject":"Writing Task1","title":"4강 Compare and Contrast_A","duration":"29:35"},{"row":"213","date":"","code":"213","stage":"Kings4 이론","course":"Kings 4.0+ 이론","subject":"Writing Task1","title":"5강 Avoiding Repetition_A","duration":"20:20"},{"row":"214","date":"","code":"214","stage":"Kings4 이론","course":"Kings 4.0+ 이론","subject":"Writing Task2","title":"6강 Planning","duration":"26:32"},{"row":"215","date":"","code":"215","stage":"Kings4 이론","course":"Kings 4.0+ 이론","subject":"Writing Task2","title":"7강 Introductions, Signposting and Linking","duration":"29:02"},{"row":"216","date":"","code":"216","stage":"Kings4 이론","course":"Kings 4.0+ 이론","subject":"Writing Task2","title":"8강 Topic Sentences","duration":"21:31"},{"row":"217","date":"","code":"217","stage":"Kings4 이론","course":"Kings 4.0+ 이론","subject":"Writing Task2","title":"9강 Extending Ideas","duration":"18:59"},{"row":"218","date":"","code":"218","stage":"Kings4 이론","course":"Kings 4.0+ 이론","subject":"Writing Task2","title":"10강 Conclusions and Summaries","duration":"19:23"},{"row":"219","date":"","code":"219","stage":"Kings4 이론","course":"Kings 4.0+ 이론","subject":"Speaking","title":"1강 Hobbies and Activities","duration":"17:39"},{"row":"220","date":"","code":"220","stage":"Kings4 이론","course":"Kings 4.0+ 이론","subject":"Speaking","title":"2강 Home Town","duration":"22:30"},{"row":"221","date":"","code":"221","stage":"Kings4 이론","course":"Kings 4.0+ 이론","subject":"Speaking","title":"3강 Likes and Dislikes","duration":"14:30"},{"row":"222","date":"","code":"222","stage":"Kings4 이론","course":"Kings 4.0+ 이론","subject":"Speaking","title":"4강 Places","duration":"15:37"},{"row":"223","date":"","code":"223","stage":"Kings4 이론","course":"Kings 4.0+ 이론","subject":"Speaking","title":"5강 Family and Friends","duration":"19:54"},{"row":"224","date":"","code":"224","stage":"Kings4 이론","course":"Kings 4.0+ 이론","subject":"Speaking","title":"6강 Making and Using Notes","duration":"14:54"},{"row":"225","date":"","code":"225","stage":"Kings4 이론","course":"Kings 4.0+ 이론","subject":"Speaking","title":"7강 People","duration":"18:54"},{"row":"226","date":"","code":"226","stage":"Kings4 이론","course":"Kings 4.0+ 이론","subject":"Speaking","title":"8강 Objects and Possessions","duration":"17:40"},{"row":"227","date":"","code":"227","stage":"Kings4 이론","course":"Kings 4.0+ 이론","subject":"Speaking","title":"9강 Events","duration":"15:41"},{"row":"228","date":"","code":"228","stage":"Kings4 이론","course":"Kings 4.0+ 이론","subject":"Speaking","title":"10강 Journeys and Holidays","duration":"19:00"},{"row":"230","date":"","code":"230","stage":"Kings4 문제풀이","course":"Kings 4.0+ 문제풀이","subject":"Listening","title":"1강 Sentence completion","duration":"20:47"},{"row":"231","date":"","code":"231","stage":"Kings4 문제풀이","course":"Kings 4.0+ 문제풀이","subject":"Listening","title":"2강 note, form, table, flowchart completion","duration":"26:23"},{"row":"232","date":"","code":"232","stage":"Kings4 문제풀이","course":"Kings 4.0+ 문제풀이","subject":"Listening","title":"3강 short answer questions","duration":"19:56"},{"row":"233","date":"","code":"233","stage":"Kings4 문제풀이","course":"Kings 4.0+ 문제풀이","subject":"Listening","title":"4강 Labelling a map,plan, diagram","duration":"29:00"},{"row":"234","date":"","code":"234","stage":"Kings4 문제풀이","course":"Kings 4.0+ 문제풀이","subject":"Listening","title":"5강 Matching","duration":"21:55"},{"row":"235","date":"","code":"235","stage":"Kings4 문제풀이","course":"Kings 4.0+ 문제풀이","subject":"Listening","title":"6강 Multiple Choice","duration":"20:35"},{"row":"236","date":"","code":"236","stage":"Kings4 문제풀이","course":"Kings 4.0+ 문제풀이","subject":"Listening","title":"7강 Multiple choice with more than one answer","duration":"22:18"},{"row":"237","date":"","code":"237","stage":"Kings4 문제풀이","course":"Kings 4.0+ 문제풀이","subject":"Reading","title":"1강 Diagram Labelling","duration":"21:42"},{"row":"238","date":"","code":"238","stage":"Kings4 문제풀이","course":"Kings 4.0+ 문제풀이","subject":"Reading","title":"2강 short answer questions","duration":"16:29"},{"row":"239","date":"","code":"239","stage":"Kings4 문제풀이","course":"Kings 4.0+ 문제풀이","subject":"Reading","title":"3강 Matching headings","duration":"20:23"},{"row":"240","date":"","code":"240","stage":"Kings4 문제풀이","course":"Kings 4.0+ 문제풀이","subject":"Reading","title":"4강 Multiple choice","duration":"19:15"},{"row":"241","date":"","code":"241","stage":"Kings4 문제풀이","course":"Kings 4.0+ 문제풀이","subject":"Reading","title":"5강 Sentence completion","duration":"20:20"},{"row":"242","date":"","code":"242","stage":"Kings4 문제풀이","course":"Kings 4.0+ 문제풀이","subject":"Reading","title":"6강 Summary completion","duration":"20:40"},{"row":"243","date":"","code":"243","stage":"Kings4 문제풀이","course":"Kings 4.0+ 문제풀이","subject":"Writing Task1","title":"1강 Line graphs_A","duration":"27:12"},{"row":"244","date":"","code":"244","stage":"Kings4 문제풀이","course":"Kings 4.0+ 문제풀이","subject":"Writing Task1","title":"2강 Bar graphs","duration":"21:42"},{"row":"245","date":"","code":"245","stage":"Kings4 문제풀이","course":"Kings 4.0+ 문제풀이","subject":"Writing Task1","title":"3강 Tables","duration":"26:52"},{"row":"246","date":"","code":"246","stage":"Kings4 문제풀이","course":"Kings 4.0+ 문제풀이","subject":"Writing Task1","title":"4강 Pie Charts","duration":"31:28"},{"row":"247","date":"","code":"247","stage":"Kings4 문제풀이","course":"Kings 4.0+ 문제풀이","subject":"Writing Task1","title":"5강 Maps and Diagrams","duration":"29:31"},{"row":"248","date":"","code":"248","stage":"Kings4 문제풀이","course":"Kings 4.0+ 문제풀이","subject":"Writing Task1","title":"6강 Processes","duration":"19:29"},{"row":"249","date":"","code":"249","stage":"Kings4 문제풀이","course":"Kings 4.0+ 문제풀이","subject":"Writing Task2","title":"7강 Agree and Disagree","duration":"14:36"},{"row":"250","date":"","code":"250","stage":"Kings4 문제풀이","course":"Kings 4.0+ 문제풀이","subject":"Writing Task2","title":"8강 Problem and Solution","duration":"12:59"},{"row":"251","date":"","code":"251","stage":"Kings4 문제풀이","course":"Kings 4.0+ 문제풀이","subject":"Writing Task2","title":"9강 Opinion Essay","duration":"19:11"},{"row":"252","date":"","code":"252","stage":"Kings4 문제풀이","course":"Kings 4.0+ 문제풀이","subject":"Writing Task2","title":"10강 Brainstorming","duration":"25:52"},{"row":"253","date":"","code":"253","stage":"Kings4 문제풀이","course":"Kings 4.0+ 문제풀이","subject":"Writing Task2","title":"11강 Environment","duration":"40:37"},{"row":"254","date":"","code":"254","stage":"Kings4 문제풀이","course":"Kings 4.0+ 문제풀이","subject":"Writing Task2","title":"12강 Technology","duration":"30:47"},{"row":"255","date":"","code":"255","stage":"Kings4 문제풀이","course":"Kings 4.0+ 문제풀이","subject":"Writing Task2","title":"13강 Work","duration":"23:52"},{"row":"256","date":"","code":"256","stage":"Kings4 문제풀이","course":"Kings 4.0+ 문제풀이","subject":"Writing Task2","title":"14강 Education","duration":"18:02"},{"row":"257","date":"","code":"257","stage":"Kings4 문제풀이","course":"Kings 4.0+ 문제풀이","subject":"Writing Task2","title":"15강 Globalisation","duration":"27:09"},{"row":"258","date":"","code":"258","stage":"Kings4 문제풀이","course":"Kings 4.0+ 문제풀이","subject":"Speaking","title":"1강 Relationships","duration":"21:28"},{"row":"259","date":"","code":"259","stage":"Kings4 문제풀이","course":"Kings 4.0+ 문제풀이","subject":"Speaking","title":"2강 The weather","duration":"18:22"},{"row":"260","date":"","code":"260","stage":"Kings4 문제풀이","course":"Kings 4.0+ 문제풀이","subject":"Speaking","title":"3강 Money","duration":"17:42"},{"row":"261","date":"","code":"261","stage":"Kings4 문제풀이","course":"Kings 4.0+ 문제풀이","subject":"Speaking","title":"4강 Work","duration":"21:14"},{"row":"262","date":"","code":"262","stage":"Kings4 문제풀이","course":"Kings 4.0+ 문제풀이","subject":"Speaking","title":"5강 Food and Drink","duration":"18:57"},{"row":"263","date":"","code":"263","stage":"Kings4 문제풀이","course":"Kings 4.0+ 문제풀이","subject":"Speaking","title":"6강 Time and Sleep","duration":"22:39"},{"row":"264","date":"","code":"264","stage":"Kings4 문제풀이","course":"Kings 4.0+ 문제풀이","subject":"Speaking","title":"7강 Crime","duration":"23:47"},{"row":"265","date":"","code":"265","stage":"Kings4 문제풀이","course":"Kings 4.0+ 문제풀이","subject":"Speaking","title":"8강 The Body","duration":"32:48"},{"row":"266","date":"","code":"266","stage":"Kings4 문제풀이","course":"Kings 4.0+ 문제풀이","subject":"Speaking","title":"9강 Health","duration":"19:23"},{"row":"267","date":"","code":"267","stage":"Kings4 문제풀이","course":"Kings 4.0+ 문제풀이","subject":"Speaking","title":"10강 Needs, Wants and Personal taste","duration":"19:20"},{"row":"268","date":"","code":"268","stage":"Kings4 문제풀이","course":"Kings 4.0+ 문제풀이","subject":"Speaking","title":"11강 Communication","duration":"19:15"},{"row":"269","date":"","code":"269","stage":"Kings4 문제풀이","course":"Kings 4.0+ 문제풀이","subject":"Speaking","title":"12강 Problems and Solutions","duration":"23:59"},{"row":"270","date":"","code":"270","stage":"Kings4 문제풀이","course":"Kings 4.0+ 문제풀이","subject":"Speaking","title":"13강 Agreeing and Disagreeing","duration":"18:52"},{"row":"271","date":"","code":"271","stage":"Kings4 문제풀이","course":"Kings 4.0+ 문제풀이","subject":"Speaking","title":"14강 Organising your talk","duration":"20:39"},{"row":"272","date":"","code":"272","stage":"Kings4 문제풀이","course":"Kings 4.0+ 문제풀이","subject":"Speaking","title":"15강 Useful phrases","duration":"19:27"},{"row":"274","date":"","code":"274","stage":"Kings6 이론","course":"Kings 6.0+ 이론","subject":"Listening","title":"1강 Gap Fill","duration":"18:54"},{"row":"275","date":"","code":"275","stage":"Kings6 이론","course":"Kings 6.0+ 이론","subject":"Listening","title":"2강 Listening_Matching","duration":"20:14"},{"row":"276","date":"","code":"276","stage":"Kings6 이론","course":"Kings 6.0+ 이론","subject":"Listening","title":"3강 Maps","duration":"17:22"},{"row":"277","date":"","code":"277","stage":"Kings6 이론","course":"Kings 6.0+ 이론","subject":"Listening","title":"4강 Multiple choice","duration":"20:19"},{"row":"278","date":"","code":"278","stage":"Kings6 이론","course":"Kings 6.0+ 이론","subject":"Listening","title":"5강 Table Completion","duration":"23:44"},{"row":"279","date":"","code":"279","stage":"Kings6 이론","course":"Kings 6.0+ 이론","subject":"Reading","title":"1강 Matching Headings","duration":"17:07"},{"row":"280","date":"","code":"280","stage":"Kings6 이론","course":"Kings 6.0+ 이론","subject":"Reading","title":"2강 Gap Fill","duration":"13:30"},{"row":"281","date":"","code":"281","stage":"Kings6 이론","course":"Kings 6.0+ 이론","subject":"Reading","title":"3강 True False Not Given","duration":"26:46"},{"row":"282","date":"","code":"282","stage":"Kings6 이론","course":"Kings 6.0+ 이론","subject":"Reading","title":"4강 Comprehension Questions","duration":"23:35"},{"row":"283","date":"","code":"283","stage":"Kings6 이론","course":"Kings 6.0+ 이론","subject":"Reading","title":"5강 Summary Completion and Matching","duration":"14:33"},{"row":"284","date":"","code":"284","stage":"Kings6 이론","course":"Kings 6.0+ 이론","subject":"Writing Task1","title":"1강 Bar Charts_A","duration":"21:12"},{"row":"285","date":"","code":"285","stage":"Kings6 이론","course":"Kings 6.0+ 이론","subject":"Writing Task1","title":"2강 Pie Charts_A","duration":"28:03"},{"row":"286","date":"","code":"286","stage":"Kings6 이론","course":"Kings 6.0+ 이론","subject":"Writing Task2","title":"3강 Rich and Poor1","duration":"24:07"},{"row":"287","date":"","code":"287","stage":"Kings6 이론","course":"Kings 6.0+ 이론","subject":"Writing Task2","title":"4강 Rich and Poor2","duration":"22:59"},{"row":"288","date":"","code":"288","stage":"Kings6 이론","course":"Kings 6.0+ 이론","subject":"Writing Task2","title":"5강 Studying Abroad","duration":"23:37"},{"row":"289","date":"","code":"289","stage":"Kings6 이론","course":"Kings 6.0+ 이론","subject":"Speaking","title":"1강 Speaking about Yourself","duration":"34:54"},{"row":"290","date":"","code":"290","stage":"Kings6 이론","course":"Kings 6.0+ 이론","subject":"Speaking","title":"2강 A Special Event","duration":"22:48"},{"row":"291","date":"","code":"291","stage":"Kings6 이론","course":"Kings 6.0+ 이론","subject":"Speaking","title":"3강 Helping","duration":"23:05"},{"row":"292","date":"","code":"292","stage":"Kings6 이론","course":"Kings 6.0+ 이론","subject":"Speaking","title":"4강 Question Types","duration":"20:55"},{"row":"293","date":"","code":"293","stage":"Kings6 이론","course":"Kings 6.0+ 이론","subject":"Speaking","title":"5강 Question Types and Giving Opinions","duration":"17:06"},{"row":"295","date":"","code":"295","stage":"Kings6 문제풀이","course":"Kings 6.0+ 문제풀이","subject":"Listening","title":"1강 Test 1 Section 1","duration":"36:55"},{"row":"296","date":"","code":"296","stage":"Kings6 문제풀이","course":"Kings 6.0+ 문제풀이","subject":"Listening","title":"2강 Test 1 Section 2","duration":"24:25"},{"row":"297","date":"","code":"297","stage":"Kings6 문제풀이","course":"Kings 6.0+ 문제풀이","subject":"Listening","title":"3강 Test 1 Section 3","duration":"22:49"},{"row":"298","date":"","code":"298","stage":"Kings6 문제풀이","course":"Kings 6.0+ 문제풀이","subject":"Listening","title":"4강 Test 1 Section 4","duration":"29:53"},{"row":"299","date":"","code":"299","stage":"Kings6 문제풀이","course":"Kings 6.0+ 문제풀이","subject":"Listening","title":"5강 Test 2 Section 1","duration":"34:10"},{"row":"300","date":"","code":"300","stage":"Kings6 문제풀이","course":"Kings 6.0+ 문제풀이","subject":"Listening","title":"6강 Test 2 Section 2","duration":"37:28"},{"row":"301","date":"","code":"301","stage":"Kings6 문제풀이","course":"Kings 6.0+ 문제풀이","subject":"Listening","title":"7강 Test 2 Section 3","duration":"34:47"},{"row":"302","date":"","code":"302","stage":"Kings6 문제풀이","course":"Kings 6.0+ 문제풀이","subject":"Listening","title":"8강 Test 2 Section 4","duration":"35:54"},{"row":"303","date":"","code":"303","stage":"Kings6 문제풀이","course":"Kings 6.0+ 문제풀이","subject":"Reading","title":"1강 Test 1 Passage 1_A","duration":"45:10"},{"row":"304","date":"","code":"304","stage":"Kings6 문제풀이","course":"Kings 6.0+ 문제풀이","subject":"Reading","title":"2강 Test 1 Passage 2_A","duration":"41:48"},{"row":"305","date":"","code":"305","stage":"Kings6 문제풀이","course":"Kings 6.0+ 문제풀이","subject":"Reading","title":"3강 Test 1 Passage 3_A","duration":"44:14"},{"row":"306","date":"","code":"306","stage":"Kings6 문제풀이","course":"Kings 6.0+ 문제풀이","subject":"Reading","title":"4강 Test 2 Passage 1_A","duration":"47:30"},{"row":"307","date":"","code":"307","stage":"Kings6 문제풀이","course":"Kings 6.0+ 문제풀이","subject":"Reading","title":"5강 Test 2 Passage 2_A","duration":"52:56"},{"row":"308","date":"","code":"308","stage":"Kings6 문제풀이","course":"Kings 6.0+ 문제풀이","subject":"Reading","title":"6강 Test 2 Passage 3_A","duration":"46:26"},{"row":"309","date":"","code":"309","stage":"Kings6 문제풀이","course":"Kings 6.0+ 문제풀이","subject":"Writing Task1","title":"1강 Test 1 Task 1_A","duration":"54:48"},{"row":"310","date":"","code":"310","stage":"Kings6 문제풀이","course":"Kings 6.0+ 문제풀이","subject":"Writing Task1","title":"3강 Test 2 Task 1_A","duration":"36:57"},{"row":"311","date":"","code":"311","stage":"Kings6 문제풀이","course":"Kings 6.0+ 문제풀이","subject":"Writing Task2","title":"2강 Test 1 Task 2","duration":"34:35"},{"row":"312","date":"","code":"312","stage":"Kings6 문제풀이","course":"Kings 6.0+ 문제풀이","subject":"Writing Task2","title":"4강 Task 2 Task 2","duration":"30:36"},{"row":"313","date":"","code":"313","stage":"Kings6 문제풀이","course":"Kings 6.0+ 문제풀이","subject":"Speaking","title":"1강 Test 1 Part 1","duration":"39:13"},{"row":"314","date":"","code":"314","stage":"Kings6 문제풀이","course":"Kings 6.0+ 문제풀이","subject":"Speaking","title":"2강 Test 1 Part 2&3","duration":"40:58"},{"row":"315","date":"","code":"315","stage":"Kings6 문제풀이","course":"Kings 6.0+ 문제풀이","subject":"Speaking","title":"3강 Test 2 Part 1","duration":"35:57"},{"row":"316","date":"","code":"316","stage":"Kings6 문제풀이","course":"Kings 6.0+ 문제풀이","subject":"Speaking","title":"4강 Test 2 Part 2&3","duration":"47:38"},{"row":"317","date":"","code":"317","stage":"실전기출 W/S","course":"실전기출 W/S","subject":"Writing Task2","title":"1강 Task 2 writing OT","duration":"20:58"},{"row":"318","date":"","code":"318","stage":"실전기출 W/S","course":"실전기출 W/S","subject":"Writing Task2","title":"2강 To what extent do you agree or disagree - Tourism","duration":"35:43"},{"row":"319","date":"","code":"319","stage":"실전기출 W/S","course":"실전기출 W/S","subject":"Writing Task2","title":"3강 Discuss both views and give your opinion - University education","duration":"21:26"},{"row":"320","date":"","code":"320","stage":"실전기출 W/S","course":"실전기출 W/S","subject":"Writing Task2","title":"4강 Advantages and Disadvatages - Email","duration":"32:40"},{"row":"321","date":"","code":"321","stage":"실전기출 W/S","course":"실전기출 W/S","subject":"Writing Task2","title":"5강 Benefits and Drawbacks - Gap year","duration":"24:39"},{"row":"322","date":"","code":"322","stage":"실전기출 W/S","course":"실전기출 W/S","subject":"Writing Task2","title":"6강 Causes and Solutions - Traffic congestion","duration":"29:23"},{"row":"323","date":"","code":"323","stage":"실전기출 W/S","course":"실전기출 W/S","subject":"Writing Task2","title":"7강 To what extent do you agree or disagree - Environmental damage","duration":"25:44"},{"row":"324","date":"","code":"324","stage":"실전기출 W/S","course":"실전기출 W/S","subject":"Writing Task2","title":"8강 Discuss both views and give your opinion - Globalization","duration":"23:25"},{"row":"325","date":"","code":"325","stage":"실전기출 W/S","course":"실전기출 W/S","subject":"Writing Task2","title":"9강 Advantages and Disadvantages - Online shopping","duration":"16:37"},{"row":"326","date":"","code":"326","stage":"실전기출 W/S","course":"실전기출 W/S","subject":"Writing Task2","title":"10강 Causes and Solutions - Animal extinction","duration":"20:12"},{"row":"327","date":"","code":"327","stage":"실전기출 W/S","course":"실전기출 W/S","subject":"Speaking","title":"1강 Part1 Speaking OT","duration":"07:22"},{"row":"328","date":"","code":"328","stage":"실전기출 W/S","course":"실전기출 W/S","subject":"Speaking","title":"2강 Part1 Work,study","duration":"18:51"},{"row":"329","date":"","code":"329","stage":"실전기출 W/S","course":"실전기출 W/S","subject":"Speaking","title":"3강 Part1 Other common topics","duration":"24:05"},{"row":"330","date":"","code":"330","stage":"실전기출 W/S","course":"실전기출 W/S","subject":"Speaking","title":"4강 Part2 Person-leader","duration":"20:32"},{"row":"331","date":"","code":"331","stage":"실전기출 W/S","course":"실전기출 W/S","subject":"Speaking","title":"5강 Part3 Person-leader","duration":"15:38"},{"row":"332","date":"","code":"332","stage":"실전기출 W/S","course":"실전기출 W/S","subject":"Speaking","title":"6강 Part2 Place-place you would like to work","duration":"22:01"},{"row":"333","date":"","code":"333","stage":"실전기출 W/S","course":"실전기출 W/S","subject":"Speaking","title":"7강 Part3 Place-place you would like to work","duration":"13:21"},{"row":"334","date":"","code":"334","stage":"실전기출 W/S","course":"실전기출 W/S","subject":"Speaking","title":"8강 Part2 Object-equipment","duration":"21:45"},{"row":"335","date":"","code":"335","stage":"실전기출 W/S","course":"실전기출 W/S","subject":"Speaking","title":"9강 Part3 Object-equipment","duration":"19:54"},{"row":"336","date":"","code":"336","stage":"실전기출 W/S","course":"실전기출 W/S","subject":"Speaking","title":"10강 Part2 Event","duration":"19:34"},{"row":"337","date":"","code":"337","stage":"실전기출 W/S","course":"실전기출 W/S","subject":"Speaking","title":"11강 Part3 Event","duration":"17:01"},{"row":"338","date":"","code":"338","stage":"파이널특강","course":"파이널특강","subject":"Listening","title":"1강 객관식 유형 정리","duration":"10:46"},{"row":"339","date":"","code":"339","stage":"파이널특강","course":"파이널특강","subject":"Listening","title":"2강 Map 유형 정리","duration":"07:27"},{"row":"340","date":"","code":"340","stage":"파이널특강","course":"파이널특강","subject":"Listening","title":"3강 3가지 학습 전략","duration":"07:46"},{"row":"341","date":"","code":"341","stage":"파이널특강","course":"파이널특강","subject":"Speaking","title":"1강 Part 1. 직관적 답변으로 1점 올리기","duration":"12:06"},{"row":"342","date":"","code":"342","stage":"파이널특강","course":"파이널특강","subject":"Speaking","title":"2강 Part 2. 적절한 TMI 붙이기","duration":"13:37"},{"row":"343","date":"","code":"343","stage":"파이널특강","course":"파이널특강","subject":"Speaking","title":"3강 Part 3. 답변 Logic 잡기","duration":"13:07"},{"row":"344","date":"","code":"344","stage":"파이널특강","course":"파이널특강","subject":"Academic Reading","title":"1강 Scanning","duration":"12:30"},{"row":"345","date":"","code":"345","stage":"파이널특강","course":"파이널특강","subject":"Academic Reading","title":"2강 Skimming","duration":"10:16"},{"row":"346","date":"","code":"346","stage":"파이널특강","course":"파이널특강","subject":"Academic Reading","title":"3강 자주 나오는 형용사","duration":"16:01"},{"row":"347","date":"","code":"347","stage":"파이널특강","course":"파이널특강","subject":"Academic Writing Task1","title":"1강 Line","duration":"13:38"},{"row":"348","date":"","code":"348","stage":"파이널특강","course":"파이널특강","subject":"Academic Writing Task1","title":"2강 Bar","duration":"22:41"},{"row":"349","date":"","code":"349","stage":"파이널특강","course":"파이널특강","subject":"Academic Writing Task1","title":"3강 Pie","duration":"13:35"},{"row":"350","date":"","code":"350","stage":"파이널특강","course":"파이널특강","subject":"Academic Writing Task1","title":"4강 Table","duration":"29:50"},{"row":"351","date":"","code":"351","stage":"파이널특강","course":"파이널특강","subject":"Academic Writing Task1","title":"5강 Map","duration":"11:30"},{"row":"352","date":"","code":"352","stage":"파이널특강","course":"파이널특강","subject":"Academic Writing Task1","title":"6강 Flow Chart","duration":"12:10"},{"row":"353","date":"","code":"353","stage":"파이널특강","course":"파이널특강","subject":"Academic Writing Task2","title":"1강 Introduction","duration":"14:47"},{"row":"354","date":"","code":"354","stage":"파이널특강","course":"파이널특강","subject":"Academic Writing Task2","title":"2강 Health 아이디어 정리","duration":"13:58"},{"row":"355","date":"","code":"355","stage":"파이널특강","course":"파이널특강","subject":"Academic Writing Task2","title":"3강 Environment 아이디어 정리","duration":"18:41"}];
const JY_VOCAB_VERSION = window.JY_VOCAB_VERSION || 'v185_20260530_docx_vocab_photo_test';
const JY_WORDS_BASE = Array.isArray(window.JY_VOCAB_DATA) ? window.JY_VOCAB_DATA : [];

const JY_VOCAB_CURATED_FIXES = {"notorious":{"word":"notorious","meaning":"악명 높은, 안 좋은 일로 유명한","example":"Some cities are notorious for heavy traffic and high living costs.","pos":"adjective","synonyms":"infamous"},"superficial":{"word":"superficial","meaning":"표면적인, 피상적인","example":"The book shows only a superficial understanding of the historical context.","pos":"adjective","synonyms":"shallow"},"irresponsible":{"word":"irresponsible","meaning":"무책임한","example":"An irresponsible approach can weaken the argument.","pos":"adjective","synonyms":"careless, reckless"},"pragmatic":{"word":"pragmatic","meaning":"실용적인, 현실적인","example":"The team chose a pragmatic solution to reduce costs.","pos":"adjective","synonyms":"practical, realistic"},"allergic":{"word":"allergic","meaning":"알레르기가 있는","example":"Some people are allergic to certain kinds of food.","pos":"adjective","synonyms":"sensitive to"},"fundamental":{"word":"fundamental","meaning":"기본적인, 근본적인, 핵심적인","example":"There is a fundamental difference between the two points of view.","pos":"adjective","synonyms":"basic, essential, crucial"},"ambiguous":{"word":"ambiguous","meaning":"애매한, 모호한","example":"The instruction was ambiguous, so several students misunderstood it.","pos":"adjective","synonyms":"unclear, vague"},"granted":{"word":"granted","meaning":"주어진, 인정된, 허락된","example":"They were granted refugee status.","pos":"adjective","synonyms":"given, approved, permitted"},"durable":{"word":"durable","meaning":"튼튼한, 오래가는","example":"This material is durable enough for daily use.","pos":"adjective","synonyms":"long-lasting, robust"},"harsher":{"word":"harsher","meaning":"더 가혹한, 더 엄격한","example":"The government introduced harsher penalties.","pos":"adjective","synonyms":"stricter, tougher, more severe"},"furious":{"word":"furious","meaning":"몹시 화난","example":"Residents were furious about the sudden increase in rent.","pos":"adjective","synonyms":"angry, outraged"},"lasting":{"word":"lasting","meaning":"지속적인, 오래가는","example":"I formed several lasting friendships at college.","pos":"adjective","synonyms":"long-term, enduring, permanent"},"incredible":{"word":"incredible","meaning":"믿기 힘든, 놀라운","example":"The documentary showed incredible images of deep-sea life.","pos":"adjective","synonyms":"remarkable, extraordinary, unbelievable"},"double-edged":{"word":"double-edged","meaning":"양면성이 있는","example":"Social media can be a double-edged sword for teenagers.","pos":"adjective"},"explicit":{"word":"explicit","meaning":"명확한, 분명한, 노골적인","example":"He gave me very explicit directions on how to get there.","pos":"adjective","synonyms":"clear, direct, specific"},"prismatic":{"word":"prismatic","meaning":"프리즘의, 무지갯빛의","example":"The glass created a prismatic effect in the sunlight.","pos":"adjective"},"maternal":{"word":"maternal","meaning":"어머니의, 모계의","example":"My maternal grandfather taught me how to draw.","pos":"adjective"},"optimistic":{"word":"optimistic","meaning":"낙관적인","example":"She felt optimistic about the result of the interview.","pos":"adjective","synonyms":"positive, hopeful"},"alternative":{"word":"alternative","meaning":"대안의, 대체 가능한","example":"The city is looking for alternative energy solutions.","pos":"adjective","synonyms":"different, substitute"},"drizzly":{"word":"drizzly","meaning":"부슬비가 내리는","example":"It was a drizzly morning, so the match was delayed.","pos":"adjective","synonyms":"rainy, wet"},"mature":{"word":"mature","meaning":"성숙한","example":"She is quite mature for her age.","pos":"adjective","synonyms":"responsible, developed"},"stable":{"word":"stable","meaning":"안정적인, 안정된","example":"The economy remained stable throughout the year.","pos":"adjective","synonyms":"steady, secure"},"vulnerable":{"word":"vulnerable","meaning":"취약한, 상처받기 쉬운","example":"Elderly people can be more vulnerable to extreme weather.","pos":"adjective","synonyms":"weak, exposed, at risk"},"be harnessed":{"word":"be harnessed","meaning":"활용되다","example":"Renewable energy can be harnessed to reduce carbon emissions.","pos":"verb","synonyms":"be used, be utilised"},"grant":{"word":"grant","meaning":"승인하다, 허가하다, 보조금을 주다","example":"The bank finally granted me a £500 loan.","pos":"verb","synonyms":"allow, approve, provide"},"oblige":{"word":"oblige","meaning":"의무를 지우다, 어쩔 수 없이 하게 하다","example":"Companies are obliged to follow safety regulations.","pos":"verb","synonyms":"require, compel"},"deplete":{"word":"deplete","meaning":"고갈시키다, 크게 줄이다","example":"Food supplies were severely depleted.","pos":"verb","synonyms":"reduce, exhaust, drain"},"invade":{"word":"invade","meaning":"침략하다, 침해하다","example":"Under some circumstances, police are allowed to invade a person's privacy.","pos":"verb","synonyms":"attack, occupy, violate"},"mould":{"word":"mould","meaning":"형성하다, 만들다","example":"Education can mould a child's values and behaviour.","pos":"verb","synonyms":"shape, form"},"absorb":{"word":"absorb","meaning":"흡수하다, 받아들이다, 감당하다","example":"Heat is absorbed by dark surfaces.","pos":"verb","synonyms":"take in, soak up, assimilate"},"reign":{"word":"reign","meaning":"통치하다, 지배하다","example":"The queen reigned for many decades.","pos":"verb","synonyms":"rule, govern"},"repair":{"word":"repair","meaning":"수리하다, 회복시키다","example":"The mechanic repaired the car within a day.","pos":"verb","synonyms":"fix, restore"},"devastate":{"word":"devastate","meaning":"황폐화하다, 큰 충격을 주다","example":"The earthquake devastated the region.","pos":"verb","synonyms":"destroy, ruin, severely damage"},"preserve":{"word":"preserve","meaning":"보존하다, 보호하다","example":"The society was set up to preserve endangered species from extinction.","pos":"verb","synonyms":"protect, conserve, maintain"},"abuse":{"word":"abuse","meaning":"남용하다, 학대하다","example":"Some officials abused their power for personal gain.","pos":"verb","synonyms":"misuse, mistreat, exploit"},"adopt":{"word":"adopt","meaning":"채택하다, 입양하다","example":"Many schools adopt digital tools for language learning.","pos":"verb","synonyms":"use, introduce, accept"},"acquire":{"word":"acquire","meaning":"습득하다, 얻다","example":"She has acquired a good knowledge of English.","pos":"verb","synonyms":"gain, obtain, develop"},"amplify":{"word":"amplify","meaning":"확대하다, 증폭하다, 강조하다","example":"You may need to amplify this point in your essay.","pos":"verb","synonyms":"increase, strengthen, emphasise"},"violate":{"word":"violate","meaning":"위반하다, 침해하다","example":"Accessing unauthorised files violates security protocol.","pos":"verb","synonyms":"break, breach, infringe"},"co-author":{"word":"co-author","meaning":"공동 집필하다","example":"She co-authored a report on climate policy.","pos":"verb","synonyms":"write jointly, collaborate on"},"profit":{"word":"profit","meaning":"이익을 얻다","example":"Local businesses profited from the rise in tourism.","pos":"verb","synonyms":"benefit, gain"},"wreak":{"word":"wreak","meaning":"피해를 일으키다, 초래하다","example":"The storm wreaked havoc on the coastal town.","pos":"verb","synonyms":"cause, create, inflict"},"encounter":{"word":"encounter","meaning":"맞닥뜨리다, 마주치다","example":"We encountered a number of difficulties in the first week.","pos":"verb","synonyms":"face, meet, experience"},"allocate":{"word":"allocate","meaning":"할당하다, 배분하다","example":"Education funds are allocated to local schools.","pos":"verb","synonyms":"assign, distribute, allot"},"verbalise":{"word":"verbalise","meaning":"말로 표현하다","example":"He has difficulty verbalising his ideas.","pos":"verb","synonyms":"express, articulate, explain"},"inflict":{"word":"inflict","meaning":"가하다, 입히다","example":"They surveyed the damage inflicted by the storm.","pos":"verb","synonyms":"cause, impose"},"shed":{"word":"shed","meaning":"흘리다, 떨어뜨리다, 비추다","example":"Trees shed their leaves in autumn.","pos":"verb","synonyms":"lose, drop, cast"},"inflate":{"word":"inflate","meaning":"부풀리다, 가격을 올리다, 과장하다","example":"You inflate a balloon by blowing air into it.","pos":"verb","synonyms":"increase, raise, exaggerate"},"elicit":{"word":"elicit","meaning":"이끌어 내다, 유도하다","example":"Her speech elicited strong support from the audience.","pos":"verb","synonyms":"draw out, evoke, produce"},"immigration":{"word":"immigration","meaning":"이민, 이주, 이민 제도","example":"The essay discusses the importance of immigration in modern society.","pos":"noun"},"foreknowledge":{"word":"foreknowledge","meaning":"사전 지식, 예지","example":"The officials denied having foreknowledge of the attack.","pos":"noun"},"membrane":{"word":"membrane","meaning":"막, 세포막","example":"Cell membranes control what enters and leaves a cell.","pos":"noun"},"sector":{"word":"sector","meaning":"부문, 분야","example":"The public sector plays a key role in healthcare.","pos":"noun"},"analysis":{"word":"analysis","meaning":"분석","example":"The essay includes a detailed analysis of the chart.","pos":"noun"},"restriction":{"word":"restriction","meaning":"제한, 규제","example":"COVID-19 restrictions eventually put the café out of business.","pos":"noun"},"enrolment":{"word":"enrolment","meaning":"등록, 등록자 수, 재적자 수","example":"University enrolment increased sharply in 2024.","pos":"noun"},"qualification":{"word":"qualification","meaning":"자격, 자격증","example":"Her degree is an important qualification for the job.","pos":"noun"},"cookery":{"word":"cookery","meaning":"요리, 요리법","example":"Henry was not very good at cookery, and most of his meals ended up burned.","pos":"noun"},"investment":{"word":"investment","meaning":"투자","example":"The city needs more investment in public transport.","pos":"noun"},"departure":{"word":"departure","meaning":"출발, 이탈","example":"Prior to departure, please fasten your seatbelts.","pos":"noun"},"settler":{"word":"settler","meaning":"정착민, 식민 정착민","example":"Early settlers built small communities near rivers.","pos":"noun"},"thesis":{"word":"thesis","meaning":"학위 논문, 논지","example":"These latest findings support the thesis that human behaviour is shaped by both nature and environment.","pos":"noun"},"utility":{"word":"utility","meaning":"유용성, 공공 서비스","example":"The new app has practical utility for students.","pos":"noun"},"embassy":{"word":"embassy","meaning":"대사관","example":"A crowd began to gather in front of the embassy.","pos":"noun"},"valuation":{"word":"valuation","meaning":"평가, 가치 평가","example":"Experts set a high valuation on the painting.","pos":"noun"},"note-taking":{"word":"note-taking","meaning":"필기, 메모하기","example":"Effective note-taking helps students remember key points.","pos":"noun"},"agriculture":{"word":"agriculture","meaning":"농업","example":"Climate change is affecting agriculture in many regions.","pos":"noun"},"viewer":{"word":"viewer","meaning":"시청자, 보는 사람","example":"The programme attracted millions of viewers.","pos":"noun"},"absence":{"word":"absence","meaning":"부재, 결석, 없음","example":"The case was dismissed in the absence of any definite proof.","pos":"noun"},"abbreviation":{"word":"abbreviation","meaning":"축약, 약어","example":"Dr is an abbreviation of Doctor.","pos":"noun"},"existence":{"word":"existence","meaning":"존재","example":"In order to solve the problem, we must first acknowledge its existence.","pos":"noun"},"decay":{"word":"decay","meaning":"부패, 부식, 쇠퇴","example":"Tooth decay is common among children.","pos":"noun","synonyms":"decline, deteriorate"},"commentary":{"word":"commentary","meaning":"논평, 해설","example":"The article provides useful commentary on the final scene of the play.","pos":"noun"},"corrosion":{"word":"corrosion","meaning":"부식, 침식","example":"Salt water can cause corrosion in metal pipes.","pos":"noun"},"reputation":{"word":"reputation","meaning":"평판, 명성","example":"The company has a strong reputation for quality.","pos":"noun"},"feast":{"word":"feast","meaning":"잔치, 성대한 식사","example":"We had a feast to celebrate the harvest.","pos":"noun"},"advantage":{"word":"advantage","meaning":"장점, 이점","example":"Living near campus has a clear advantage.","pos":"noun"},"audiology":{"word":"audiology","meaning":"청각학","example":"She decided to study audiology after volunteering at a hearing clinic.","pos":"noun"},"observer":{"word":"observer","meaning":"관찰자, 목격자","example":"According to observers, the plane exploded shortly after take-off.","pos":"noun"},"corruption":{"word":"corruption","meaning":"부패, 타락, 부정","example":"Corruption can damage public trust.","pos":"noun"},"indication":{"word":"indication","meaning":"표시, 징후, 조짐","example":"A rise in sales is an indication of growing demand.","pos":"noun"},"facade":{"word":"facade","meaning":"정면, 겉모습","example":"She managed to maintain a facade of indifference.","pos":"noun"},"assassination":{"word":"assassination","meaning":"암살","example":"The assassination of the king occurred at night.","pos":"noun"},"custody":{"word":"custody","meaning":"양육권, 구금, 보호, 보관","example":"The court awarded custody to the child's father.","pos":"noun"},"disruption":{"word":"disruption","meaning":"혼란, 중단, 방해","example":"There was great disruption in the classroom when the teacher left.","pos":"noun"},"sentiment":{"word":"sentiment","meaning":"감정, 정서, 의견","example":"Public sentiment shifted after the announcement.","pos":"noun"},"residency":{"word":"residency","meaning":"거주, 체류 자격","example":"Applicants must meet the residency requirements.","pos":"noun"},"heading":{"word":"heading","meaning":"제목, 표제","example":"Each section should have a clear heading.","pos":"noun"},"meteorology":{"word":"meteorology","meaning":"기상학","example":"Meteorology helps scientists predict severe weather.","pos":"noun"},"audience":{"word":"audience","meaning":"관객, 청중, 독자층","example":"The audience listened carefully to the speaker.","pos":"noun"},"ideally":{"word":"ideally","meaning":"이상적으로는","example":"Ideally, we would have one textbook per student.","pos":"adverb"},"statistically":{"word":"statistically","meaning":"통계적으로","example":"The result is statistically significant.","pos":"adverb"},"undeniably":{"word":"undeniably","meaning":"부인할 수 없이, 명백히","example":"The third movie was undeniably the best.","pos":"adverb","synonyms":"clearly, certainly"},"very first":{"word":"very first","meaning":"맨 처음의, 최초의","example":"I still remember my very first day at university.","pos":"phrase"},"come across":{"word":"come across","meaning":"우연히 발견하다, 마주치다, 인상을 주다","example":"I came across an interesting article yesterday.","pos":"phrase","synonyms":"find, discover, encounter"},"self-defence":{"word":"self-defence","meaning":"자기방어","example":"The law allows reasonable force in self-defence.","pos":"phrase"},"access to":{"word":"access to","meaning":"~에 대한 접근, 이용","example":"Students need access to reliable academic sources.","pos":"phrase"},"underneath":{"word":"underneath","meaning":"아래에, 아래쪽에","example":"The coin rolled underneath the piano.","pos":"phrase"},"via":{"word":"via","meaning":"~을 통해, ~을 경유하여","example":"The survey was conducted via email.","pos":"phrase"},"even out":{"word":"even out","meaning":"안정되다, 고르게 되다","example":"House prices keep rising and falling, but they should eventually even out.","pos":"phrase","synonyms":"stabilise, balance"},"pause":{"word":"pause","meaning":"멈춤, 일시 정지, 잠시 멈추다","example":"I paused at the door and looked back."},"stay awake":{"word":"stay awake","meaning":"깨어 있다, 잠들지 않다","example":"I stayed awake late to finish my essay."},"protagonist":{"word":"protagonist","meaning":"(연극·영화·책 속의)주인공, 참가자","example":"a leading protagonist of the conservation movement"},"phenomenon":{"word":"phenomenon","meaning":"문화/자연/사회 현상","example":"The causes of the phenomenon are still incompletely understood."},"spectator":{"word":"spectator","meaning":"관객, 구경꾼, 장면을 지켜보는 사람","example":"Did you see a spectator running across the soccer field right in the middle of the game?"},"attendant":{"word":"attendant","meaning":"종업원[안내원], 수반되는","example":"The attendant showed us to our seats."},"attendance":{"word":"attendance","meaning":"출석, 참석, 참석자 수, 참석률","example":"Attendance at these lectures is not compulsory."},"bystander":{"word":"bystander","meaning":"행인, 곁에서 지켜보는 사람","example":"innocent bystanders at the scene of the accident"},"witness":{"word":"witness","meaning":"목격자","example":"The police interviewed a witness after the accident."},"manufacture":{"word":"manufacture","meaning":"제조[생산]하다, (이야기·변명 등을) 지어내다","example":"a news story manufactured by an unscrupulous journalist"},"monochromatic":{"word":"monochromatic","meaning":"단색의","example":"The artist used a monochromatic colour scheme."},"otherworldly":{"word":"otherworldly","meaning":"비현실적인, 신비로운, 이 세상 것이 아닌 듯한","example":"The landscape had an otherworldly atmosphere."},"pedestal":{"word":"pedestal","meaning":"받침대, 대좌, 높은 평가의 자리","example":"I replaced the vase carefully on its pedestal"},"mimic":{"word":"mimic","meaning":"흉내 내다, 모방하다; 모방하는","example":"She’s always mimicking the teachers."},"mimicry":{"word":"mimicry","meaning":"흉내, 모방","example":"The insect uses mimicry to avoid predators."},"mainstream":{"word":"mainstream","meaning":"주류의, 일반적인 흐름","example":"His radical views place him outside the mainstream of American politics."},"ellipse":{"word":"ellipse","meaning":"타원","example":"The Earth orbits the sun in an ellipse."},"derive":{"word":"derive","meaning":"끌어내다, 유래하다, 파생되다","example":"The background looks like it's derived from the movie, \"Frozen\"."},"conference":{"word":"conference","meaning":"회의, 학회, 컨퍼런스","example":"She presented her research at an international conference."},"basalt":{"word":"basalt","meaning":"현무암","example":"Basalt is a dark volcanic rock."},"volcanic":{"word":"volcanic","meaning":"화산의, 화산과 관련된","example":"The island is famous for its volcanic landscape."},"dormant volcano":{"word":"dormant volcano","meaning":"휴화산","example":"A dormant volcano may become active again."},"volcanic rock":{"word":"volcanic rock","meaning":"화산암","example":"The path was covered with volcanic rock."},"tact":{"word":"tact","meaning":"요령, 눈치, 재치 (=sensitivity)","example":"She handled the criticism with tact."},"tactile":{"word":"tactile","meaning":"촉각적인, 만질 듯한 질감의","example":"visual and tactile communication"},"layered":{"word":"layered","meaning":"겹겹이 쌓인, 층위가 있는","example":"The exhibition used layered images and sound."},"atmosphere":{"word":"atmosphere","meaning":"분위기","example":"These plants love warm, humid atmospheres."},"stiff":{"word":"stiff","meaning":"뻣뻣한, 단단한, 경직된","example":"The windows were stiff and she couldn’t get them open."},"ample":{"word":"ample","meaning":"충분한 (=plenty of), 풍만한","example":"The hotel is centrally situated with ample free parking"},"somewhat":{"word":"somewhat","meaning":"어느 정도, 약간, 다소","example":"I was somewhat surprised to see him."},"somehow":{"word":"somehow","meaning":"어떻게든, 왠지, 어떤 식으로든","example":"We must stop him from seeing her somehow."},"hand over":{"word":"hand over","meaning":"넘겨주다, 인계하다","example":"Hand over the money!"},"contemplate":{"word":"contemplate","meaning":"고려하다,생각하다[예상하다], 심사숙고하다","example":"I can’t contemplate what it would be like to be alone."},"meditate":{"word":"meditate","meaning":"명상하다, 깊이 생각하다","example":"She meditates for ten minutes every morning."},"meditative":{"word":"meditative","meaning":"명상적인, 깊이 생각에 잠긴","example":"The room had a quiet, meditative atmosphere."},"tempt":{"word":"tempt","meaning":"(좋지 않은 일을 하도록) 유혹하다[부추기다]","example":"I was tempted by the dessert menu."},"temptation":{"word":"temptation","meaning":"유혹, 하고 싶은 충동","example":"I couldn’t resist the temptation to open the letter."},"abstract":{"word":"abstract","meaning":"추상적인, 요약, 초록, 추출하다","example":"We may talk of beautiful things but beauty itself is abstract."},"utilise":{"word":"utilise","meaning":"활용하다","example":"The Romans were the first to utilise concrete as a building material."},"taper":{"word":"taper","meaning":"점점 가늘어지다","example":"However, the rains should taper off towards evening."},"trickery":{"word":"trickery","meaning":"속임수","example":"They don't cite outrageous statistical trickery."},"aversion":{"word":"aversion","meaning":"반감, 혐오감","example":"He had an aversion to getting up early."},"cluster":{"word":"cluster","meaning":"무리, 집단, (작은 열매의)송이, (소규모로) 모이다","example":"a little cluster of houses"},"accent":{"word":"accent","meaning":"강조, 강세, 억양, (어떤 부분을) 강조하다","example":"The teacher placed the accent on the second syllable."},"accentuate":{"word":"accentuate","meaning":"강조하다","example":"This spring, dresses that accentuate femininity will be in vogue."},"residue":{"word":"residue","meaning":"잔여물","example":"The residue of the estate was divided equally among his children."},"relinquish":{"word":"relinquish","meaning":"내주다, 포기하다","example":"The cruel dictator refused to relinquish political power."},"fashion":{"word":"fashion","meaning":"유행(하는 스타일), 인기, (손으로) 만들다[빚다]","example":"She fashioned a pot from the clay."},"in this regard":{"word":"in this regard","meaning":"이 점에서, 이와 관련하여","example":"In this regard, the results are encouraging."},"in that regard":{"word":"in that regard","meaning":"그 점에서, 그와 관련하여","example":"In that regard, further research is needed."},"customs union":{"word":"customs union","meaning":"관세 동맹","example":"A customs union can reduce trade barriers."},"economic efficiency":{"word":"economic efficiency","meaning":"경제 효율성","example":"The reform was designed to improve economic efficiency."},"alligator":{"word":"alligator","meaning":"악어","example":"An alligator was seen near the riverbank."},"offspring":{"word":"offspring","meaning":"새끼, 자손","example":"the problems parents have with their teenage offspring"},"predation":{"word":"predation","meaning":"포식, 포식 행위","example":"According to the selfish herd theory, animals live in a pack in order to reduce predation risk."},"predator":{"word":"predator","meaning":"포식자","example":"Birds are the major predator of the ladybug."},"hatch":{"word":"hatch","meaning":"부화하다, 부화시키다","example":"The eggs are about to hatch."},"superb":{"word":"superb","meaning":"최고의, 훌륭한, 멋진","example":"She’s a superb lecturer."},"eradicate":{"word":"eradicate","meaning":"뿌리째 뽑다, 박멸하다, 근절하다","example":"We are determined to eradicate racism from our sport."},"pulp":{"word":"pulp","meaning":"과육, 펄프","example":"The fruit was crushed into a soft pulp."},"vary":{"word":"vary","meaning":"바꾸다, 변경하다, 고치다","example":"The students’ work varies considerably in quality."},"nominee":{"word":"nominee","meaning":"지명된 사람","example":"a presidential nominee"},"abbreviate":{"word":"abbreviate","meaning":"줄여 쓰다, 간략화하다, 생략하다","example":"You are to abbreviate ‘Avenue’ as ‘Ave.’"},"vernal":{"word":"vernal","meaning":"봄의, 봄에 나는","example":"the vernal equinox"},"vanquish":{"word":"vanquish","meaning":"정복하다, 패배시키다, 완파하다 (=conquer)","example":"The medicines that vanquish the cancer cells, could unfortunately leave some unpleasant side effects."},"respond":{"word":"respond","meaning":"대답하다, 반응하다","example":"Please respond to the email by Friday."},"objectify":{"word":"objectify","meaning":"객관화하다, 대상화하다, 구체화시키다","example":"Beauty pageants should be banned because they objectify women and limit the idea of beauty."},"resent":{"word":"resent","meaning":"분개하다, 원망하다","example":"I deeply resented her criticism."},"curtail":{"word":"curtail","meaning":"짧게 줄이다, 단축하다","example":"Spending on books has been severely curtailed."},"household":{"word":"household","meaning":"가족, (한 집에 사는 사람들을 일컫는) 가정","example":"Most households now own at least one car."}};


const CAFE_LINKS = {
  listening: 'https://ieltsonlinetests.com/ielts-exam-library',
  reading: 'https://cafe.naver.com/f-e/cafes/24236231/menus/58',
  writing: 'https://cafe.naver.com/f-e/cafes/24236231/menus/55'
};
const EDM_LECTURE_LINK = 'https://www.edmclass.com/ielts/classroom/course/5507';
const NAVER_DICT_BASE = 'https://en.dict.naver.com/#/search?range=all&query=';

const JY_DAILY_VOCAB_OVERRIDES = {
  '2026-05-30': [
  {
    "word": "courtyard",
    "meaning": "안마당, 중정",
    "example": "The students gathered in the courtyard after the lecture.",
    "pos": "noun",
    "synonyms": "",
    "antonyms": ""
  },
  {
    "word": "majority",
    "meaning": "다수, 대부분",
    "example": "The majority of students supported the new policy.",
    "pos": "noun",
    "synonyms": "most",
    "antonyms": "minority"
  },
  {
    "word": "hurdle",
    "meaning": "장애물, 어려움 / V: 뛰어넘다",
    "example": "High tuition fees can be a major hurdle for students.",
    "pos": "noun",
    "synonyms": "obstacle, barrier",
    "antonyms": ""
  },
  {
    "word": "construction",
    "meaning": "건설, 구조, 구성",
    "example": "The construction of new housing may reduce overcrowding.",
    "pos": "noun",
    "synonyms": "building, development",
    "antonyms": ""
  },
  {
    "word": "coal",
    "meaning": "석탄",
    "example": "Many countries are reducing their reliance on coal.",
    "pos": "noun",
    "synonyms": "",
    "antonyms": ""
  },
  {
    "word": "trickery",
    "meaning": "속임수, 기만",
    "example": "The report exposed trickery in the advertising campaign.",
    "pos": "noun",
    "synonyms": "deception",
    "antonyms": "honesty"
  },
  {
    "word": "conference",
    "meaning": "회의, 학회",
    "example": "She presented her research at an international conference.",
    "pos": "noun",
    "synonyms": "meeting",
    "antonyms": ""
  },
  {
    "word": "variable",
    "meaning": "변수 / Adj: 변동 가능한",
    "example": "Temperature is an important variable in the experiment.",
    "pos": "noun",
    "synonyms": "factor",
    "antonyms": "constant"
  },
  {
    "word": "administrator",
    "meaning": "관리자, 행정 담당자",
    "example": "A university administrator helped me with the enrolment form.",
    "pos": "noun",
    "synonyms": "manager, coordinator",
    "antonyms": ""
  },
  {
    "word": "wilderness",
    "meaning": "황야, 자연 그대로의 지역",
    "example": "The national park protects a large area of wilderness.",
    "pos": "noun",
    "synonyms": "remote area",
    "antonyms": ""
  },
  {
    "word": "cereal",
    "meaning": "곡물, 시리얼",
    "example": "Cereal crops are grown across the region.",
    "pos": "noun",
    "synonyms": "grain",
    "antonyms": ""
  },
  {
    "word": "epic",
    "meaning": "서사시, 장대한 작품 / Adj: 장대한",
    "example": "The poem is based on an ancient epic.",
    "pos": "noun",
    "synonyms": "",
    "antonyms": ""
  },
  {
    "word": "disruption",
    "meaning": "혼란, 중단, 방해",
    "example": "The strike caused serious disruption to public transport.",
    "pos": "noun",
    "synonyms": "interruption",
    "antonyms": "stability"
  },
  {
    "word": "pine",
    "meaning": "소나무",
    "example": "The northern slopes were covered mainly in pine trees.",
    "pos": "noun",
    "synonyms": "",
    "antonyms": ""
  },
  {
    "word": "decay",
    "meaning": "부패, 부식, 쇠퇴 / V: 썩다, 쇠퇴하다",
    "example": "Tooth decay is common among children.",
    "pos": "noun",
    "synonyms": "decline",
    "antonyms": "growth"
  },
  {
    "word": "alligator",
    "meaning": "악어의 한 종류",
    "example": "An alligator was seen near the riverbank.",
    "pos": "noun",
    "synonyms": "",
    "antonyms": ""
  },
  {
    "word": "impulse",
    "meaning": "충동, 자극",
    "example": "He bought the ticket on impulse.",
    "pos": "noun",
    "synonyms": "urge",
    "antonyms": "self-control"
  },
  {
    "word": "verbal abuse",
    "meaning": "폭언, 언어적 학대",
    "example": "Staff should not have to tolerate verbal abuse at work.",
    "pos": "noun",
    "synonyms": "",
    "antonyms": ""
  },
  {
    "word": "phenomenon",
    "meaning": "현상",
    "example": "The causes of the phenomenon are still unclear.",
    "pos": "noun",
    "synonyms": "occurrence",
    "antonyms": ""
  },
  {
    "word": "evidence",
    "meaning": "증거, 근거",
    "example": "The argument should be supported by clear evidence.",
    "pos": "noun",
    "synonyms": "proof, data",
    "antonyms": "assumption"
  },
  {
    "word": "protection",
    "meaning": "보호",
    "example": "Stronger protection is needed for vulnerable groups.",
    "pos": "noun",
    "synonyms": "safeguarding",
    "antonyms": "harm"
  },
  {
    "word": "revenue",
    "meaning": "수익, 세입",
    "example": "Tourism is a major source of revenue for the city.",
    "pos": "noun",
    "synonyms": "income",
    "antonyms": "expenditure"
  },
  {
    "word": "soot",
    "meaning": "그을음",
    "example": "Soot from diesel engines can affect air quality.",
    "pos": "noun",
    "synonyms": "",
    "antonyms": ""
  },
  {
    "word": "staff",
    "meaning": "직원 / V: 직원을 배치하다",
    "example": "The company employed 10 new members of staff.",
    "pos": "noun",
    "synonyms": "employees, personnel",
    "antonyms": ""
  },
  {
    "word": "starvation",
    "meaning": "굶주림, 기아",
    "example": "Severe drought led to widespread starvation.",
    "pos": "noun",
    "synonyms": "famine",
    "antonyms": ""
  },
  {
    "word": "custody",
    "meaning": "양육권, 구금, 보호, 보관",
    "example": "The court awarded custody to the child's father.",
    "pos": "noun",
    "synonyms": "care, detention",
    "antonyms": ""
  },
  {
    "word": "scent",
    "meaning": "향기, 냄새 / V: 냄새를 맡다",
    "example": "Dogs can follow a scent over a long distance.",
    "pos": "noun",
    "synonyms": "smell",
    "antonyms": ""
  },
  {
    "word": "renown",
    "meaning": "명성",
    "example": "The architect gained international renown for her public buildings.",
    "pos": "noun",
    "synonyms": "fame, reputation",
    "antonyms": ""
  },
  {
    "word": "steward",
    "meaning": "관리인, 안내원, 승무원 / V: 관리하다",
    "example": "A museum steward guided visitors through the exhibition.",
    "pos": "noun",
    "synonyms": "attendant",
    "antonyms": ""
  },
  {
    "word": "corrosion",
    "meaning": "부식, 침식",
    "example": "Salt water can cause corrosion in metal pipes.",
    "pos": "noun",
    "synonyms": "erosion",
    "antonyms": "preservation"
  },
  {
    "word": "ability",
    "meaning": "능력",
    "example": "Regular practice improves your ability to write clearly.",
    "pos": "noun",
    "synonyms": "skill, capacity",
    "antonyms": "inability"
  },
  {
    "word": "spectator",
    "meaning": "관객, 구경꾼",
    "example": "A spectator ran onto the football pitch during the match.",
    "pos": "noun",
    "synonyms": "viewer, observer",
    "antonyms": ""
  },
  {
    "word": "ascension",
    "meaning": "상승, 승천",
    "example": "The ascension of the balloon was slow and steady.",
    "pos": "noun",
    "synonyms": "rise",
    "antonyms": "descent"
  },
  {
    "word": "dissuade",
    "meaning": "설득해서 못 하게 하다",
    "example": "Her tutor dissuaded her from choosing an unsuitable topic.",
    "pos": "verb",
    "synonyms": "discourage, deter",
    "antonyms": "persuade"
  },
  {
    "word": "revitalise",
    "meaning": "활력을 되찾게 하다, 되살리다",
    "example": "Investment can revitalise declining town centres.",
    "pos": "verb",
    "synonyms": "restore, regenerate",
    "antonyms": "weaken"
  },
  {
    "word": "transport",
    "meaning": "N: 교통, 운송 / 운송하다",
    "example": "Improved public transport can reduce traffic congestion.",
    "pos": "verb",
    "synonyms": "carry, move",
    "antonyms": ""
  },
  {
    "word": "constitute",
    "meaning": "구성하다, ~에 해당하다",
    "example": "Female workers constitute the majority of the labour force.",
    "pos": "verb",
    "synonyms": "make up, form",
    "antonyms": ""
  },
  {
    "word": "conduct",
    "meaning": "수행하다, 실시하다 / N: 행위",
    "example": "The survey was conducted via email.",
    "pos": "verb",
    "synonyms": "carry out",
    "antonyms": ""
  },
  {
    "word": "pave",
    "meaning": "포장하다, 길을 열다",
    "example": "Better transport links can pave the way for regional growth.",
    "pos": "verb",
    "synonyms": "enable",
    "antonyms": "hinder"
  },
  {
    "word": "violate",
    "meaning": "위반하다, 침해하다",
    "example": "Accessing unauthorised files violates security rules.",
    "pos": "verb",
    "synonyms": "break, breach",
    "antonyms": "comply with"
  },
  {
    "word": "vanquish",
    "meaning": "물리치다, 패배시키다",
    "example": "The army tried to vanquish its enemies.",
    "pos": "verb",
    "synonyms": "defeat, overcome",
    "antonyms": ""
  },
  {
    "word": "resume",
    "meaning": "재개하다, 다시 시작하다",
    "example": "The meeting will resume after lunch.",
    "pos": "verb",
    "synonyms": "restart, continue",
    "antonyms": "suspend"
  },
  {
    "word": "reign",
    "meaning": "통치하다, 지배하다 / N: 통치 기간",
    "example": "The queen reigned for many decades.",
    "pos": "verb",
    "synonyms": "rule, govern",
    "antonyms": ""
  },
  {
    "word": "invest",
    "meaning": "투자하다, 시간을 쏟다",
    "example": "The council will invest in public transport.",
    "pos": "verb",
    "synonyms": "fund, devote",
    "antonyms": "withdraw"
  },
  {
    "word": "fill up",
    "meaning": "채우다, 가득 차다",
    "example": "The course may fill up quickly, so apply early.",
    "pos": "verb",
    "synonyms": "fill",
    "antonyms": "empty"
  },
  {
    "word": "grant",
    "meaning": "승인하다, 허가하다, 보조금을 주다 / N: 보조금",
    "example": "The university granted her a scholarship.",
    "pos": "verb",
    "synonyms": "allow, award",
    "antonyms": "deny"
  },
  {
    "word": "supplement",
    "meaning": "보충하다 / N: 보충 자료",
    "example": "Online videos can supplement classroom learning.",
    "pos": "verb",
    "synonyms": "add to, complement",
    "antonyms": ""
  },
  {
    "word": "carry out",
    "meaning": "수행하다, 실시하다",
    "example": "Researchers carried out interviews with local residents.",
    "pos": "verb",
    "synonyms": "conduct, perform",
    "antonyms": ""
  },
  {
    "word": "set back",
    "meaning": "지연시키다, 차질을 주다 / N: 차질",
    "example": "The delay set back the project by two weeks.",
    "pos": "verb",
    "synonyms": "delay, hinder",
    "antonyms": "advance"
  },
  {
    "word": "enforce",
    "meaning": "시행하다, 집행하다",
    "example": "The police are there to enforce the law.",
    "pos": "verb",
    "synonyms": "implement, apply",
    "antonyms": "ignore"
  },
  {
    "word": "further",
    "meaning": "촉진하다 / Adv: 더 나아가",
    "example": "The grant will further research into clean energy.",
    "pos": "verb",
    "synonyms": "promote, advance",
    "antonyms": "hinder"
  },
  {
    "word": "fortify",
    "meaning": "강화하다, 요새화하다",
    "example": "Some cereals are fortified with vitamins.",
    "pos": "verb",
    "synonyms": "strengthen",
    "antonyms": "weaken"
  },
  {
    "word": "sniff",
    "meaning": "냄새를 맡다 / N: 코를 킁킁거림",
    "example": "She gave the flowers a quick sniff.",
    "pos": "verb",
    "synonyms": "smell",
    "antonyms": ""
  },
  {
    "word": "comprise",
    "meaning": "구성하다, 포함하다",
    "example": "The collection comprises 327 paintings.",
    "pos": "verb",
    "synonyms": "consist of, include",
    "antonyms": "exclude"
  },
  {
    "word": "decelerate",
    "meaning": "감속하다",
    "example": "The car began to decelerate as it approached the crossing.",
    "pos": "verb",
    "synonyms": "slow down",
    "antonyms": "accelerate"
  },
  {
    "word": "emigrate",
    "meaning": "이민 가다, 자기 나라를 떠나다",
    "example": "Many young people emigrate in search of better jobs.",
    "pos": "verb",
    "synonyms": "leave one’s country",
    "antonyms": "immigrate"
  },
  {
    "word": "hone",
    "meaning": "기술을 연마하다, 날을 갈다",
    "example": "She joined the workshop to hone her design skills.",
    "pos": "verb",
    "synonyms": "improve, refine",
    "antonyms": "neglect"
  },
  {
    "word": "take place",
    "meaning": "일어나다, 열리다",
    "example": "The seminar will take place next Monday.",
    "pos": "verb",
    "synonyms": "happen, occur",
    "antonyms": ""
  },
  {
    "word": "utilise",
    "meaning": "활용하다",
    "example": "The Romans were the first to utilise concrete as a building material.",
    "pos": "verb",
    "synonyms": "use, apply",
    "antonyms": "waste"
  },
  {
    "word": "look into",
    "meaning": "조사하다, 살펴보다",
    "example": "The council promised to look into the complaint.",
    "pos": "verb",
    "synonyms": "investigate, examine",
    "antonyms": "ignore"
  },
  {
    "word": "commemorate",
    "meaning": "기념하다, 추모하다",
    "example": "The museum held an event to commemorate the victims.",
    "pos": "verb",
    "synonyms": "honour, remember",
    "antonyms": "forget"
  },
  {
    "word": "achieve goals",
    "meaning": "목표를 달성하다",
    "example": "Careful planning helps students achieve goals more effectively.",
    "pos": "verb",
    "synonyms": "meet targets",
    "antonyms": "fail to achieve goals"
  },
  {
    "word": "address",
    "meaning": "다루다, 해결하려고 하다 / N: 주소",
    "example": "The government must address the housing crisis.",
    "pos": "verb",
    "synonyms": "tackle, deal with",
    "antonyms": "ignore"
  },
  {
    "word": "advisable",
    "meaning": "바람직한, 권할 만한",
    "example": "It is advisable to check the timetable before travelling.",
    "pos": "adjective",
    "synonyms": "sensible, wise",
    "antonyms": "inadvisable"
  },
  {
    "word": "meditative",
    "meaning": "명상적인, 깊이 생각에 잠긴",
    "example": "The gallery had a quiet, meditative atmosphere.",
    "pos": "adjective",
    "synonyms": "reflective",
    "antonyms": ""
  },
  {
    "word": "equine",
    "meaning": "말의, 말과 관련된",
    "example": "The study looked at equine behaviour in different environments.",
    "pos": "adjective",
    "synonyms": "horse-related",
    "antonyms": ""
  },
  {
    "word": "elderly",
    "meaning": "나이가 많은, 노년층의",
    "example": "Elderly people are more vulnerable to extreme heat.",
    "pos": "adjective",
    "synonyms": "older, senior",
    "antonyms": "young"
  },
  {
    "word": "coherent",
    "meaning": "일관성 있는, 논리적인",
    "example": "A coherent essay is easier to follow.",
    "pos": "adjective",
    "synonyms": "logical, consistent",
    "antonyms": "incoherent"
  },
  {
    "word": "unlikely",
    "meaning": "그럴 것 같지 않은",
    "example": "It is unlikely that the figure will rise sharply next year.",
    "pos": "adjective",
    "synonyms": "improbable",
    "antonyms": "likely"
  },
  {
    "word": "optional",
    "meaning": "선택적인",
    "example": "Attendance at the extra workshop is optional.",
    "pos": "adjective",
    "synonyms": "voluntary",
    "antonyms": "compulsory"
  },
  {
    "word": "superb",
    "meaning": "훌륭한, 아주 뛰어난",
    "example": "The lecturer gave a superb explanation of the topic.",
    "pos": "adjective",
    "synonyms": "excellent",
    "antonyms": "poor"
  },
  {
    "word": "sedentary",
    "meaning": "앉아서 생활하는, 정착성의",
    "example": "A sedentary lifestyle can increase health risks.",
    "pos": "adjective",
    "synonyms": "inactive",
    "antonyms": "active"
  },
  {
    "word": "abundant",
    "meaning": "풍부한",
    "example": "The region has abundant natural resources.",
    "pos": "adjective",
    "synonyms": "plentiful",
    "antonyms": "scarce"
  },
  {
    "word": "exasperated",
    "meaning": "몹시 짜증 난, 화가 난",
    "example": "Residents were exasperated by the constant delays.",
    "pos": "adjective",
    "synonyms": "frustrated",
    "antonyms": "calm"
  },
  {
    "word": "legal",
    "meaning": "법률의, 합법적인",
    "example": "The company needs legal advice before signing the contract.",
    "pos": "adjective",
    "synonyms": "lawful",
    "antonyms": "illegal"
  },
  {
    "word": "ongoing",
    "meaning": "진행 중인",
    "example": "The ongoing investigation has delayed the project.",
    "pos": "adjective",
    "synonyms": "continuing",
    "antonyms": "completed"
  },
  {
    "word": "intrinsic",
    "meaning": "본질적인, 내재된",
    "example": "Creativity has intrinsic value in education.",
    "pos": "adjective",
    "synonyms": "inherent",
    "antonyms": "extrinsic"
  },
  {
    "word": "unquantifiable",
    "meaning": "수량화할 수 없는",
    "example": "The social value of the project is unquantifiable.",
    "pos": "adjective",
    "synonyms": "immeasurable",
    "antonyms": "quantifiable"
  },
  {
    "word": "verbal",
    "meaning": "언어의, 말로 하는",
    "example": "Verbal feedback can help students improve quickly.",
    "pos": "adjective",
    "synonyms": "spoken, oral",
    "antonyms": "written"
  },
  {
    "word": "contentious",
    "meaning": "논쟁의 여지가 있는",
    "example": "Immigration remains a contentious issue in many countries.",
    "pos": "adjective",
    "synonyms": "controversial",
    "antonyms": "uncontroversial"
  },
  {
    "word": "perishable",
    "meaning": "상하기 쉬운, 부패하기 쉬운",
    "example": "Perishable food should be kept in the fridge.",
    "pos": "adjective",
    "synonyms": "easily spoiled",
    "antonyms": "non-perishable"
  },
  {
    "word": "accessible",
    "meaning": "접근 가능한, 이용하기 쉬운",
    "example": "The museum made its exhibitions more accessible to disabled visitors.",
    "pos": "adjective",
    "synonyms": "available, reachable",
    "antonyms": "inaccessible"
  },
  {
    "word": "prior",
    "meaning": "이전의, 사전의",
    "example": "I had no prior knowledge of the topic.",
    "pos": "adjective",
    "synonyms": "previous",
    "antonyms": "subsequent"
  },
  {
    "word": "urgent",
    "meaning": "긴급한, 절박한",
    "example": "There is an urgent need for affordable housing.",
    "pos": "adjective",
    "synonyms": "pressing",
    "antonyms": "non-urgent"
  },
  {
    "word": "extrinsic",
    "meaning": "외부의, 외재적인",
    "example": "Extrinsic rewards can influence student motivation.",
    "pos": "adjective",
    "synonyms": "external",
    "antonyms": "intrinsic"
  },
  {
    "word": "colonial",
    "meaning": "식민지의, 식민 시대의",
    "example": "Korea was under Japanese colonial rule for about 35 years.",
    "pos": "adjective",
    "synonyms": "imperial",
    "antonyms": ""
  },
  {
    "word": "breathtaking",
    "meaning": "숨이 멎을 듯 아름다운, 놀라운",
    "example": "The island is known for its breathtaking scenery.",
    "pos": "adjective",
    "synonyms": "stunning",
    "antonyms": "ordinary"
  },
  {
    "word": "authentic",
    "meaning": "진짜인, 진정성 있는, 믿을 만한",
    "example": "The experts confirmed it was an authentic signature.",
    "pos": "adjective",
    "synonyms": "genuine, real",
    "antonyms": "fake"
  },
  {
    "word": "intentionally",
    "meaning": "의도적으로, 고의로",
    "example": "The speaker intentionally avoided technical terms.",
    "pos": "adverb",
    "synonyms": "deliberately",
    "antonyms": "accidentally"
  },
  {
    "word": "somewhat",
    "meaning": "어느 정도, 약간, 다소",
    "example": "I was somewhat surprised by the result.",
    "pos": "adverb",
    "synonyms": "slightly",
    "antonyms": ""
  },
  {
    "word": "fundamentally",
    "meaning": "근본적으로",
    "example": "The two systems are fundamentally different.",
    "pos": "adverb",
    "synonyms": "essentially",
    "antonyms": "superficially"
  },
  {
    "word": "statistically",
    "meaning": "통계적으로",
    "example": "The result is statistically significant.",
    "pos": "adverb",
    "synonyms": "",
    "antonyms": ""
  },
  {
    "word": "admittedly",
    "meaning": "인정하건대",
    "example": "Admittedly, the plan is expensive.",
    "pos": "adverb",
    "synonyms": "it is true that",
    "antonyms": ""
  },
  {
    "word": "straight away",
    "meaning": "즉시, 곧바로",
    "example": "Please send the document straight away.",
    "pos": "adverb",
    "synonyms": "immediately",
    "antonyms": "later"
  },
  {
    "word": "particularly",
    "meaning": "특히",
    "example": "The final section was particularly difficult.",
    "pos": "adverb",
    "synonyms": "especially",
    "antonyms": "generally"
  },
  {
    "word": "a couple of hours",
    "meaning": "두어 시간, 몇 시간",
    "example": "I spent a couple of hours revising vocabulary.",
    "pos": "phrase",
    "synonyms": "a few hours",
    "antonyms": ""
  },
  {
    "word": "in that regard",
    "meaning": "그 점에서, 그와 관련하여",
    "example": "In that regard, further research is needed.",
    "pos": "phrase",
    "synonyms": "in this respect",
    "antonyms": ""
  },
  {
    "word": "absent without leave",
    "meaning": "무단 결석, 무단 이탈",
    "example": "The soldier was reported as absent without leave.",
    "pos": "phrase",
    "synonyms": "absent without permission",
    "antonyms": ""
  },
  {
    "word": "dependent on",
    "meaning": "의존하는, 달려 있는",
    "example": "Many rural communities are dependent on private cars.",
    "pos": "phrase",
    "synonyms": "reliant on",
    "antonyms": "independent of"
  },
  {
    "word": "known as",
    "meaning": "~로 알려진",
    "example": "The artist is known as a pioneer of digital installations.",
    "pos": "phrase",
    "synonyms": "called, recognised as",
    "antonyms": ""
  }
]
};

const JY_DAILY_TEST_EXTRA_WORDS = {
  '2026-05-30': [
  {
    "word": "vague",
    "meaning": "모호한, 애매한",
    "example": "The instructions were vague, so several students misunderstood them.",
    "pos": "adjective",
    "synonyms": "unclear, ambiguous",
    "antonyms": "clear"
  },
  {
    "word": "valid",
    "meaning": "유효한, 타당한",
    "example": "A valid passport is required for the application.",
    "pos": "adjective",
    "synonyms": "acceptable, legitimate",
    "antonyms": "invalid"
  },
  {
    "word": "valley",
    "meaning": "계곡, 골짜기",
    "example": "The village lies in a narrow valley.",
    "pos": "noun",
    "synonyms": "dale"
  },
  {
    "word": "valuable",
    "meaning": "가치 있는, 유용한",
    "example": "The survey provided valuable data for the report.",
    "pos": "adjective",
    "synonyms": "useful, precious",
    "antonyms": "worthless"
  },
  {
    "word": "varied",
    "meaning": "다양한, 가지각색의",
    "example": "Students benefit from varied learning materials.",
    "pos": "adjective",
    "synonyms": "diverse, different",
    "antonyms": "uniform"
  },
  {
    "word": "variety",
    "meaning": "다양성, 여러 종류",
    "example": "The museum offers a variety of educational programmes.",
    "pos": "noun",
    "synonyms": "range, diversity"
  },
  {
    "word": "various",
    "meaning": "여러 가지의, 다양한",
    "example": "The policy affects various age groups.",
    "pos": "adjective",
    "synonyms": "several, diverse"
  },
  {
    "word": "vary",
    "meaning": "다르다, 달라지다, 변화하다",
    "example": "The results vary according to age and income.",
    "pos": "verb",
    "synonyms": "differ, change"
  },
  {
    "word": "ventilate",
    "meaning": "환기하다",
    "example": "Classrooms should be ventilated regularly.",
    "pos": "verb",
    "synonyms": "air"
  },
  {
    "word": "venture",
    "meaning": "N: 모험, 사업 / V: 위험을 무릅쓰고 가다",
    "example": "Starting a small business can be a risky venture.",
    "pos": "noun",
    "synonyms": "enterprise, undertaking"
  },
  {
    "word": "victim",
    "meaning": "피해자, 희생자",
    "example": "The charity supports victims of domestic violence.",
    "pos": "noun",
    "synonyms": "sufferer"
  },
  {
    "word": "villager",
    "meaning": "마을 사람",
    "example": "The villagers were consulted about the new road.",
    "pos": "noun",
    "synonyms": "local resident"
  },
  {
    "word": "violent",
    "meaning": "폭력적인, 격렬한",
    "example": "Violent storms damaged several houses.",
    "pos": "adjective",
    "synonyms": "brutal, intense",
    "antonyms": "peaceful"
  },
  {
    "word": "vision",
    "meaning": "전망, 시력, 비전",
    "example": "The project needs a clear vision for the future.",
    "pos": "noun",
    "synonyms": "sight, outlook"
  },
  {
    "word": "visualisation",
    "meaning": "시각화",
    "example": "Data visualisation can make trends easier to understand.",
    "pos": "noun",
    "synonyms": "graphic representation"
  },
  {
    "word": "vital",
    "meaning": "필수적인, 매우 중요한",
    "example": "Public transport is vital for rural communities.",
    "pos": "adjective",
    "synonyms": "essential, crucial",
    "antonyms": "unimportant"
  },
  {
    "word": "vocabulary",
    "meaning": "어휘, 용어",
    "example": "Reading widely helps students expand their vocabulary.",
    "pos": "noun",
    "synonyms": "lexis, word stock"
  },
  {
    "word": "volleyball",
    "meaning": "배구",
    "example": "They played volleyball after school.",
    "pos": "noun"
  },
  {
    "word": "volume",
    "meaning": "양, 용량, 부피, 권",
    "example": "The volume of traffic increased sharply.",
    "pos": "noun",
    "synonyms": "amount, quantity"
  },
  {
    "word": "volunteer",
    "meaning": "자원봉사자 / 자원하다",
    "example": "Many students volunteer at local charities.",
    "pos": "verb",
    "synonyms": "offer, unpaid worker"
  },
  {
    "word": "vote for",
    "meaning": "~에 투표하다",
    "example": "Citizens can vote for their preferred candidate.",
    "pos": "phrase",
    "synonyms": "support in an election"
  },
  {
    "word": "waistline",
    "meaning": "허리둘레, 허리선",
    "example": "Regular exercise can reduce a person’s waistline.",
    "pos": "noun"
  },
  {
    "word": "wastebasket",
    "meaning": "쓰레기통",
    "example": "Put the paper in the wastebasket.",
    "pos": "noun",
    "synonyms": "bin"
  },
  {
    "word": "wasteful",
    "meaning": "낭비하는, 낭비의",
    "example": "Wasteful packaging should be reduced.",
    "pos": "adjective",
    "synonyms": "inefficient, extravagant",
    "antonyms": "efficient"
  },
  {
    "word": "waterway",
    "meaning": "수로, 배수로",
    "example": "The canal is an important waterway.",
    "pos": "noun",
    "synonyms": "channel, canal"
  },
  {
    "word": "wavelength",
    "meaning": "파장",
    "example": "Radio signals travel at different wavelengths.",
    "pos": "noun"
  },
  {
    "word": "wayfarer",
    "meaning": "도보 여행자, 나그네",
    "example": "The old path was used by wayfarers.",
    "pos": "noun",
    "synonyms": "traveller"
  },
  {
    "word": "weaken",
    "meaning": "약화시키다, 약해지다",
    "example": "Lack of evidence can weaken an argument.",
    "pos": "verb",
    "synonyms": "undermine, reduce",
    "antonyms": "strengthen"
  },
  {
    "word": "weakness",
    "meaning": "약점, 나약함",
    "example": "The report has several weaknesses.",
    "pos": "noun",
    "synonyms": "drawback, flaw",
    "antonyms": "strength"
  },
  {
    "word": "weekly",
    "meaning": "매주의, 매주",
    "example": "The class has weekly writing practice.",
    "pos": "adjective",
    "synonyms": "every week"
  },
  {
    "word": "weigh",
    "meaning": "무게가 나가다, 무게를 재다",
    "example": "The suitcase weighs 20 kilograms.",
    "pos": "verb",
    "synonyms": "measure the weight of"
  },
  {
    "word": "weight",
    "meaning": "무게, 체중",
    "example": "The bridge can carry a great weight.",
    "pos": "noun",
    "synonyms": "mass"
  },
  {
    "word": "welfare state",
    "meaning": "복지국가",
    "example": "A welfare state provides support for citizens.",
    "pos": "noun"
  },
  {
    "word": "well-behaved",
    "meaning": "예의 바른, 얌전한",
    "example": "The children were well-behaved during the visit.",
    "pos": "adjective",
    "synonyms": "polite, obedient"
  },
  {
    "word": "whale",
    "meaning": "고래",
    "example": "Whales communicate through complex sounds.",
    "pos": "noun"
  },
  {
    "word": "whiz",
    "meaning": "쌩 하고 지나가는 소리 / 아주 잘하는 사람",
    "example": "The cyclist went past with a whiz.",
    "pos": "noun",
    "synonyms": "expert"
  },
  {
    "word": "widely",
    "meaning": "널리, 폭넓게, 광범위하게",
    "example": "The theory is widely accepted.",
    "pos": "adverb",
    "synonyms": "broadly, extensively"
  },
  {
    "word": "widen",
    "meaning": "넓어지다, 넓히다",
    "example": "The gap between rich and poor may widen.",
    "pos": "verb",
    "synonyms": "broaden, expand",
    "antonyms": "narrow"
  },
  {
    "word": "willingly",
    "meaning": "기꺼이, 자진해서",
    "example": "Participants willingly answered the survey.",
    "pos": "adverb",
    "synonyms": "readily, voluntarily",
    "antonyms": "reluctantly"
  },
  {
    "word": "witness",
    "meaning": "목격자 / 목격하다",
    "example": "The police interviewed a witness after the accident.",
    "pos": "noun",
    "synonyms": "observer"
  },
  {
    "word": "witty",
    "meaning": "재치 있는",
    "example": "She gave a witty response.",
    "pos": "adjective",
    "synonyms": "clever, humorous"
  },
  {
    "word": "woodland",
    "meaning": "산림지대, 숲",
    "example": "The project protects ancient woodland.",
    "pos": "noun",
    "synonyms": "forest"
  },
  {
    "word": "wool",
    "meaning": "양털, 털실",
    "example": "Wool is used to make warm clothing.",
    "pos": "noun"
  },
  {
    "word": "work out",
    "meaning": "해결하다, 운동하다, 계산하다",
    "example": "Researchers tried to work out the cause.",
    "pos": "phrase",
    "synonyms": "solve, figure out"
  },
  {
    "word": "workplace",
    "meaning": "직장, 근무지",
    "example": "Safety rules are important in the workplace.",
    "pos": "noun"
  },
  {
    "word": "worn-out",
    "meaning": "낡은, 지친",
    "example": "The worn-out equipment needs replacing.",
    "pos": "adjective",
    "synonyms": "exhausted, shabby"
  },
  {
    "word": "worse",
    "meaning": "더 나쁜, 더 악화된",
    "example": "The situation became worse after the flood.",
    "pos": "adjective",
    "antonyms": "better"
  },
  {
    "word": "worsen",
    "meaning": "악화되다, 악화시키다",
    "example": "Air pollution may worsen without stricter rules.",
    "pos": "verb",
    "synonyms": "deteriorate",
    "antonyms": "improve"
  },
  {
    "word": "worship",
    "meaning": "예배, 숭배 / 예배하다",
    "example": "The temple is a place of worship.",
    "pos": "noun",
    "synonyms": "reverence"
  },
  {
    "word": "worst",
    "meaning": "최악의, 가장 나쁜 것",
    "example": "This was the worst result in ten years.",
    "pos": "adjective",
    "antonyms": "best"
  },
  {
    "word": "worth",
    "meaning": "가치, 값어치 / ~할 가치가 있는",
    "example": "The plan is worth considering.",
    "pos": "adjective",
    "synonyms": "value"
  },
  {
    "word": "worthwhile",
    "meaning": "가치 있는, 보람 있는",
    "example": "Volunteering can be a worthwhile experience.",
    "pos": "adjective",
    "synonyms": "rewarding, valuable"
  },
  {
    "word": "wound",
    "meaning": "상처, 부상 / 상처를 입히다",
    "example": "The nurse cleaned the wound.",
    "pos": "noun",
    "synonyms": "injury"
  },
  {
    "word": "wreck",
    "meaning": "난파선, 잔해 / 망가뜨리다",
    "example": "Divers explored the wreck of the ship.",
    "pos": "noun",
    "synonyms": "ruin, remains"
  },
  {
    "word": "wretched",
    "meaning": "비참한, 초라한, 참혹한",
    "example": "The refugees lived in wretched conditions.",
    "pos": "adjective",
    "synonyms": "miserable, poor"
  },
  {
    "word": "written language",
    "meaning": "문어, 문자 언어",
    "example": "Written language often differs from spoken language.",
    "pos": "noun"
  },
  {
    "word": "yield",
    "meaning": "산출하다, 생산하다 / 수확량, 산출량",
    "example": "The farm yields a high crop each year.",
    "pos": "verb",
    "synonyms": "produce, generate"
  },
  {
    "word": "zeal",
    "meaning": "열의, 열정",
    "example": "She approached the project with zeal.",
    "pos": "noun",
    "synonyms": "enthusiasm, passion"
  },
  {
    "word": "zoological",
    "meaning": "동물학의",
    "example": "The research was published in a zoological journal.",
    "pos": "adjective"
  },
  {
    "word": "zoology",
    "meaning": "동물학",
    "example": "Zoology is the scientific study of animals.",
    "pos": "noun"
  }
]
};


function lectureLinkHTML(label='EDM 강의 바로가기'){
  return `<a class="jy-section-link" href="${EDM_LECTURE_LINK}" target="_blank" rel="noopener">${esc(label)}</a>`;
}

function problemLinkLabel(section){
  if(section === 'listening') return 'IELTS Online Tests 문제 바로가기';
  return '카페 문제 바로가기';
}

function notesResourceLinkHTML(section){
  return '';
}

function wrongNoteResourceLinkHTML(section){
  return '';
}

function notesPanelHeadHTML(title, resourceHTML=''){
  const link=resourceHTML ? `<div class="jy-note-resource-link">${resourceHTML}</div>` : '';
  return `<div class="jy-book-top jy-notes-panel-head"><h2 class="jy-book-title">${esc(title)}</h2>${link}</div>`;
}

const SECTION_NAMES = {
  listening:'Listening',
  reading:'Reading',
  writing:'Writing',
  speaking:'Speaking',
  lecture_note:'Lecture Notes',
  words:'Vocabulary',
  grammar:'Grammar',
  phrase:'구문 연습',
  phrase_drill:'구문 구조 연습',
  study_log:'공부 기록',
  homepage:'Homepage',
  mocktest:'Mock Test',
  mocktest_solve:'Mock Test 문제풀이',
  mock_review:'Mock Test 오답노트',
  exam:'Exam',
  scholarship:'Scholarship'
};

let wordTestSession = {round:1, items:[], mode:'english', active:false};
let task1ExpressionTestSession = {round:1, items:[], mode:'expression', active:false};
let part2PriorityTestSession = {round:1, items:[], active:false, kind:'priority'};
let notePageIndex = {};
let notesPageOpenBooks = {};
let notesPageOpenItems = {};
let notesPageSelectedSection = '';
let notesPageSelectedItem = '';
let notesPageWrongJumpTarget = '';

function byId(id){ return document.getElementById(id); }
function esc(v){ return String(v ?? '').replace(/[&<>"']/g, m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m])); }

let JY_FILE_DB_PROMISE = null;
const JY_PROOF_URL_CACHE = {};

function openLectureFileDB(){
  if(!('indexedDB' in window)){
    return Promise.reject(new Error('이 브라우저에서 IndexedDB 저장소를 사용할 수 없습니다.'));
  }
  if(JY_FILE_DB_PROMISE) return JY_FILE_DB_PROMISE;
  JY_FILE_DB_PROMISE = new Promise((resolve, reject)=>{
    const req = indexedDB.open(JY_FILE_DB_NAME, 1);
    req.onupgradeneeded = () => {
      const db = req.result;
      if(!db.objectStoreNames.contains(JY_FILE_STORE_NAME)){
        db.createObjectStore(JY_FILE_STORE_NAME, {keyPath:'id'});
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error || new Error('파일 저장소를 열지 못했습니다.'));
  }).catch(err=>{ JY_FILE_DB_PROMISE = null; throw err; });
  return JY_FILE_DB_PROMISE;
}

function lectureFileTransaction(mode='readonly'){
  return openLectureFileDB().then(db=>db.transaction(JY_FILE_STORE_NAME, mode).objectStore(JY_FILE_STORE_NAME));
}

function putLectureFileRecord(record){
  return lectureFileTransaction('readwrite').then(store=>new Promise((resolve, reject)=>{
    const req = store.put(record);
    req.onsuccess = () => resolve(record);
    req.onerror = () => reject(req.error || new Error('파일을 저장하지 못했습니다.'));
  }));
}

function getLectureFileRecord(id){
  if(!id) return Promise.resolve(null);
  return lectureFileTransaction('readonly').then(store=>new Promise((resolve, reject)=>{
    const req = store.get(String(id));
    req.onsuccess = () => resolve(req.result || null);
    req.onerror = () => reject(req.error || new Error('파일을 불러오지 못했습니다.'));
  }));
}

function deleteLectureFileRecord(id){
  if(!id) return Promise.resolve(false);
  return lectureFileTransaction('readwrite').then(store=>new Promise((resolve, reject)=>{
    const req = store.delete(String(id));
    req.onsuccess = () => resolve(true);
    req.onerror = () => reject(req.error || new Error('파일을 삭제하지 못했습니다.'));
  })).catch(()=>false);
}

function lectureFileId(){
  return 'proof_' + Date.now() + '_' + Math.random().toString(36).slice(2,10);
}

function dataURLToBlob(dataUrl){
  const text=String(dataUrl || '');
  const m=text.match(/^data:([^;,]+)?(;base64)?,(.*)$/);
  if(!m) return null;
  const mime=m[1] || 'application/octet-stream';
  const isBase64=!!m[2];
  const data=m[3] || '';
  if(isBase64){
    const binary=atob(data);
    const bytes=new Uint8Array(binary.length);
    for(let i=0;i<binary.length;i++) bytes[i]=binary.charCodeAt(i);
    return new Blob([bytes], {type:mime});
  }
  return new Blob([decodeURIComponent(data)], {type:mime});
}

function objectURLForLectureFile(record){
  if(!record || !record.blob) return '';
  if(record.id && JY_PROOF_URL_CACHE[record.id]) return JY_PROOF_URL_CACHE[record.id];
  const url = URL.createObjectURL(record.blob);
  if(record.id) JY_PROOF_URL_CACHE[record.id] = url;
  return url;
}

function bindLectureProofGalleryFiles(){
  document.querySelectorAll('[data-lecture-proof-image],[data-lecture-proof-pdf-page-render],[data-lecture-proof-pdf],[data-lecture-proof-pdf-full],[data-lecture-proof-open]').forEach(el=>{
    const id=el.dataset.lectureProofImage || el.dataset.lectureProofPdfPageRender || el.dataset.lectureProofPdf || el.dataset.lectureProofPdfFull || el.dataset.lectureProofOpen;
    if(!id || el.dataset.proofLoaded==='1') return;
    el.dataset.proofLoaded='1';
    getLectureFileRecord(id).then(record=>{
      if(!record || !record.blob){
        if(el.tagName === 'A') el.removeAttribute('href');
        return;
      }
      const url=objectURLForLectureFile(record);
      if(el.dataset.lectureProofImage){
        el.setAttribute('src', url);
        el.classList.remove('jy-proof-loading');
        bindFileMagnifiers();
      }else if(el.dataset.lectureProofPdfPageRender){
        renderStoredPdfPageIntoElement(el, record, parseInt(el.dataset.lectureProofPage || '1', 10) || 1);
      }else if(el.dataset.lectureProofPdf){
        const viewUrl=pdfPageObjectUrl(url, el.dataset.lectureProofPage);
        if(el.tagName === 'IFRAME') el.setAttribute('src', viewUrl);
        else el.setAttribute('data', viewUrl);
        el.classList.remove('jy-proof-loading');
      }else if(el.dataset.lectureProofPdfFull){
        if(el.tagName === 'IFRAME') el.setAttribute('src', url + '#toolbar=1&navpanes=0&zoom=page-width');
        else el.setAttribute('data', url + '#toolbar=1&navpanes=0&zoom=page-width');
        el.classList.remove('jy-proof-loading');
      }else if(el.dataset.lectureProofOpen){
        el.setAttribute('href', pdfPageObjectUrl(url, el.dataset.lectureProofPage));
      }
    }).catch(()=>{
      if(el.tagName === 'A') el.removeAttribute('href');
    });
  });
}


async function renderStoredPdfPageIntoElement(el, record, pageNo){
  if(!el || !record || !record.blob) return;
  const pageNumber=Math.max(1, parseInt(pageNo, 10) || 1);
  try{
    if(pdfJsAvailable()){
      const pdfjs=window.pdfjsLib;
      const data=await record.blob.arrayBuffer();
      const pdf=await pdfjs.getDocument({data, disableWorker:true}).promise;
      const page=await pdf.getPage(Math.min(pageNumber, pdf.numPages || pageNumber));
      const baseViewport=page.getViewport({scale:1});
      const targetWidth=Math.max(900, Math.min(1700, el.clientWidth || 1400));
      const scale=Math.min(3.0, Math.max(1.2, targetWidth / Math.max(1, baseViewport.width)));
      const viewport=page.getViewport({scale});
      const canvas=document.createElement('canvas');
      canvas.width=Math.ceil(viewport.width);
      canvas.height=Math.ceil(viewport.height);
      const context=canvas.getContext('2d', {alpha:false});
      await page.render({canvasContext:context, viewport}).promise;
      canvas.className='jy-lecture-proof-pdf-canvas jy-file-magnify-source';
      canvas.setAttribute('aria-label', 'PDF '+pageNumber+'쪽');
      el.innerHTML='';
      el.appendChild(canvas);
      el.classList.remove('jy-proof-loading');
      bindFileMagnifiers();
      return;
    }
  }catch(err){
    console.warn('Inline PDF page rendering failed.', err);
  }
  const url=objectURLForLectureFile(record);
  const viewUrl=pdfPageObjectUrl(url, pageNumber);
  el.innerHTML='<object class="jy-lecture-proof-pdf-object" data="'+esc(viewUrl)+'" type="application/pdf"><div class="jy-lecture-proof-pdf-fallback">PDF 미리보기를 불러올 수 없습니다. 브라우저 PDF 미리보기 설정을 확인해 주세요.</div></object>';
  el.classList.remove('jy-proof-loading');
}

async function migrateLegacyLectureProofsToDB(){
  let raw='';
  try{ raw = localStorage.getItem(JY_STATE_KEY) || ''; }catch(e){ return false; }
  if(!raw || raw.indexOf('data:') === -1) return false;
  let state;
  try{ state = ensureStateCollections(JSON.parse(raw) || defaultState()); }catch(e){ return false; }
  let changed=false;
  const days=state.days || {};
  for(const date of Object.keys(days)){
    const proofs=days[date] && days[date].lectureProofs;
    if(!proofs) continue;
    for(const code of Object.keys(proofs)){
      const proof=normaliseLectureProof(proofs[code]);
      const nextItems=[];
      for(const item of proof.items){
        if(item && item.dataUrl){
          const blob=dataURLToBlob(item.dataUrl);
          if(blob){
            const id=lectureFileId();
            const savedAt=String(item.savedAt || proof.savedAt || new Date().toLocaleString('ko-KR'));
            await putLectureFileRecord({id, blob, name:String(item.name || 'lecture-file'), type:String(item.type || blob.type || ''), size:Number(item.size || blob.size || 0), savedAt});
            nextItems.push({id, storage:'indexedDB', name:String(item.name || 'lecture-file'), type:String(item.type || blob.type || ''), size:Number(item.size || blob.size || 0), savedAt});
            changed=true;
          }else{
            nextItems.push(item);
          }
        }else{
          nextItems.push(item);
        }
      }
      proofs[code]={items:nextItems, savedAt:proof.savedAt};
    }
  }
  if(changed){
    try{ localStorage.setItem(JY_STATE_KEY, JSON.stringify(state)); }catch(e){ console.warn('Legacy file migration finished, but state rewrite failed.', e); }
  }
  return changed;
}

async function convertStoredLecturePDFsToPages(){
  const state=readState();
  let changed=false;
  const days=state.days || {};
  for(const date of Object.keys(days)){
    const day=dayState(state, date);
    const proofs=day.lectureProofs || {};
    for(const code of Object.keys(proofs)){
      const proof=normaliseLectureProof(proofs[code]);
      const nextItems=[];
      let proofChanged=false;
      for(const item of proof.items){
        if(item && isLectureProofPDF(item) && item.id && !item.keepOriginalPDF && !item.pdfPage){
          try{
            const record=await getLectureFileRecord(item.id);
            if(record && record.blob){
              if(pdfJsAvailable() && typeof File !== 'undefined'){
                const file=new File([record.blob], item.name || record.name || 'lecture-file.pdf', {type:'application/pdf'});
                const converted=await renderPdfToLectureProofItems(file);
                if(converted && converted.length){
                  nextItems.push(...converted);
                  deleteLectureFileRecord(item.id);
                  changed=true;
                  proofChanged=true;
                  continue;
                }
              }
              const data=await record.blob.arrayBuffer();
              const pageCount=countPdfPagesFromArrayBuffer(data);
              const fallbackItems=pdfFallbackPageItems(item.id, item.name || record.name || 'lecture-file.pdf', item.type || record.type || 'application/pdf', item.size || record.size || 0, item.savedAt || record.savedAt || proof.savedAt || new Date().toLocaleString('ko-KR'), pageCount);
              nextItems.push(...fallbackItems);
              changed=true;
              proofChanged=true;
              continue;
            }
          }catch(err){
            console.warn('Stored PDF page preparation failed.', err);
          }
        }
        nextItems.push(item);
      }
      if(proofChanged){
        day.lectureProofs[String(code)]={items:nextItems, savedAt:proof.savedAt || new Date().toLocaleString('ko-KR')};
      }
    }
  }
  if(changed) writeState(state);
  return changed;
}

function kstParts(){
  try{
    const parts = new Intl.DateTimeFormat('en-CA', {timeZone:'Asia/Seoul', year:'numeric', month:'2-digit', day:'2-digit'}).formatToParts(new Date());
    const o = {};
    parts.forEach(p=>o[p.type]=p.value);
    return o;
  }catch(e){
    const now = new Date();
    return {year:String(now.getFullYear()), month:String(now.getMonth()+1).padStart(2,'0'), day:String(now.getDate()).padStart(2,'0')};
  }
}
function todayISO(){ const o=kstParts(); return o.year+'-'+o.month+'-'+o.day; }
function todayDot(){ const o=kstParts(); return o.year+'.'+o.month+'.'+o.day; }
function dateDot(v){ return String(v).replace(/-/g,'.'); }
function isoFromDateObject(d){
  return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
}
function kstNowDate(){
  return new Date(new Date().toLocaleString('en-US', {timeZone:'Asia/Seoul'}));
}
function studyDateISO(){
  const d = kstNowDate();
  if(d.getHours() < 10) d.setDate(d.getDate() - 1);
  return isoFromDateObject(d);
}

const JY_STUDY_TIMER_KEY = 'jy_ielts_study_timer_v70';
const JY_PANEL_STATE_KEY = 'jy_ielts_panel_state_v70';
const JY_ACTIVE_DATE_KEY = 'jy_ielts_active_date_v99';

function readPanelState(){
  try{
    const state = JSON.parse(localStorage.getItem(JY_PANEL_STATE_KEY)) || {};
    return {chatOpen:!!state.chatOpen, studyOpen:!!state.studyOpen};
  }catch(e){
    return {chatOpen:false, studyOpen:false};
  }
}
function writePanelState(state){
  localStorage.setItem(JY_PANEL_STATE_KEY, JSON.stringify({chatOpen:!!state.chatOpen, studyOpen:!!state.studyOpen}));
}
function setPanelOpen(panel, value){
  const state = readPanelState();
  if(panel === 'chat') state.chatOpen = !!value;
  if(panel === 'study') state.studyOpen = !!value;
  writePanelState(state);
}

function readStudyTimerState(){
  try{
    const state = JSON.parse(localStorage.getItem(JY_STUDY_TIMER_KEY)) || {};
    if(!state.days) state.days = {};
    if(!state.current) state.current = null;
    return state;
  }catch(e){
    return {days:{}, current:null};
  }
}
function writeStudyTimerState(state){
  if(!state.days) state.days = {};
  localStorage.setItem(JY_STUDY_TIMER_KEY, JSON.stringify(state));
}
function ensureStudyTimerDay(state, date){
  if(!state.days) state.days = {};
  if(!state.days[date]) state.days[date] = {sessions:[]};
  if(!Array.isArray(state.days[date].sessions)) state.days[date].sessions = [];
  return state.days[date];
}
function addDaysISO(date, delta){
  const d = new Date(date + 'T00:00:00Z');
  d.setUTCDate(d.getUTCDate() + delta);
  return d.toISOString().slice(0,10);
}
function studyDayEndISO(date){
  const parts = String(date).split('-').map(Number);
  if(parts.length !== 3 || parts.some(n=>!Number.isFinite(n))) return new Date().toISOString();
  return new Date(Date.UTC(parts[0], parts[1]-1, parts[2]+1, -2, 0, 0, 0)).toISOString();
}
function kstDateTimeToISO(date, hm){
  const clean = String(hm || '').trim();
  const match = clean.match(/^(\d{1,2}):(\d{2})$/);
  if(!match) return null;
  const h = Number(match[1]);
  const m = Number(match[2]);
  if(h < 0 || h > 23 || m < 0 || m > 59) return null;
  const parts = String(date).split('-').map(Number);
  if(parts.length !== 3 || parts.some(n=>!Number.isFinite(n))) return null;
  return new Date(Date.UTC(parts[0], parts[1]-1, parts[2], h-9, m, 0, 0)).toISOString();
}
function formatStudyTime(iso){
  if(!iso) return '';
  try{
    return new Intl.DateTimeFormat('ko-KR', {timeZone:'Asia/Seoul', hour:'2-digit', minute:'2-digit', hour12:false}).format(new Date(iso));
  }catch(e){
    const d = new Date(iso);
    return String(d.getHours()).padStart(2,'0') + ':' + String(d.getMinutes()).padStart(2,'0');
  }
}
function formatStudyDate(date){ return String(date || '').replace(/-/g,'.'); }
function formatStudyDuration(ms, withSeconds){
  ms = Math.max(0, Number(ms) || 0);
  const totalSeconds = Math.floor(ms / 1000);
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;
  if(withSeconds) return String(h).padStart(2,'0') + ':' + String(m).padStart(2,'0') + ':' + String(s).padStart(2,'0');
  if(h > 0) return h + '시간 ' + m + '분';
  return m + '분';
}
function studySessionDuration(session){
  const start = new Date(session.start).getTime();
  const end = new Date(session.end).getTime();
  if(!Number.isFinite(start) || !Number.isFinite(end) || end <= start) return 0;
  return end - start;
}
function completeStudyMs(date){
  const state = readStudyTimerState();
  const day = ensureStudyTimerDay(state, date);
  return day.sessions.reduce((sum, session)=>sum + studySessionDuration(session), 0);
}
function totalStudyMs(date){
  const state = readStudyTimerState();
  let total = ensureStudyTimerDay(state, date).sessions.reduce((sum, session)=>sum + studySessionDuration(session), 0);
  if(state.current && state.current.date === date){
    const start = new Date(state.current.start).getTime();
    if(Number.isFinite(start)) total += Math.max(0, Date.now() - start);
  }
  return total;
}
function studyDaySessions(date){
  const state = readStudyTimerState();
  return ensureStudyTimerDay(state, date).sessions.slice().sort((a,b)=>new Date(a.start)-new Date(b.start));
}
function addStudySession(state, date, startISO, endISO, existingId){
  const startMs = new Date(startISO).getTime();
  let endMs = new Date(endISO).getTime();
  if(!Number.isFinite(startMs) || !Number.isFinite(endMs)) return false;
  if(endMs <= startMs) endMs += 24*60*60*1000;
  const day = ensureStudyTimerDay(state, date);
  day.sessions.push({
    id: existingId || ('study_' + Date.now() + '_' + Math.random().toString(36).slice(2,7)),
    start:new Date(startMs).toISOString(),
    end:new Date(endMs).toISOString(),
    updatedAt:new Date().toISOString()
  });
  day.sessions.sort((a,b)=>new Date(a.start)-new Date(b.start));
  return true;
}
function rolloverStudySessionIfNeeded(){
  const state = readStudyTimerState();
  if(!state.current) return;
  const currentDate = studyDateISO();
  if(state.current.date === currentDate) return;
  const endISO = studyDayEndISO(state.current.date);
  addStudySession(state, state.current.date, state.current.start, endISO, state.current.id);
  state.current = null;
  writeStudyTimerState(state);
}
function startStudyTimer(){
  rolloverStudySessionIfNeeded();
  const state = readStudyTimerState();
  if(state.current) return;
  state.current = {id:'study_current_' + Date.now(), date:studyDateISO(), start:new Date().toISOString()};
  ensureStudyTimerDay(state, state.current.date);
  writeStudyTimerState(state);
}
function stopStudyTimer(){
  const state = readStudyTimerState();
  if(!state.current) return;
  addStudySession(state, state.current.date, state.current.start, new Date().toISOString(), state.current.id);
  state.current = null;
  writeStudyTimerState(state);
}
function resetTodayStudyTimer(){
  const date = studyDateISO();
  const state = readStudyTimerState();
  state.days[date] = {sessions:[]};
  if(state.current && state.current.date === date) state.current = null;
  writeStudyTimerState(state);
}
function deleteAllStudyTimerRecords(){
  writeStudyTimerState({days:{}, current:null});
}
function deleteStudySession(date, id){
  const state = readStudyTimerState();
  const day = ensureStudyTimerDay(state, date);
  day.sessions = day.sessions.filter(session=>session.id !== id);
  writeStudyTimerState(state);
}
function editStudySession(date, id){
  const state = readStudyTimerState();
  const day = ensureStudyTimerDay(state, date);
  const idx = day.sessions.findIndex(session=>session.id === id);
  if(idx < 0) return;
  const session = day.sessions[idx];
  const startValue = prompt('시작 시간을 HH:MM 형식으로 적어주세요.', formatStudyTime(session.start));
  if(startValue === null) return;
  const endValue = prompt('종료 시간을 HH:MM 형식으로 적어주세요.', formatStudyTime(session.end));
  if(endValue === null) return;
  const startISO = kstDateTimeToISO(date, startValue);
  const endISO = kstDateTimeToISO(date, endValue);
  if(!startISO || !endISO){
    alert('시간은 20:30처럼 HH:MM 형식으로 적어주세요.');
    return;
  }
  day.sessions.splice(idx, 1);
  addStudySession(state, date, startISO, endISO, id);
  writeStudyTimerState(state);
}
function studyComparisonData(){
  rolloverStudySessionIfNeeded();
  const today = studyDateISO();
  const yesterday = addDaysISO(today, -1);
  const todayMs = totalStudyMs(today);
  const yesterdayMs = completeStudyMs(yesterday);
  const max = Math.max(todayMs, yesterdayMs, 60000);
  return {today, yesterday, todayMs, yesterdayMs, todayPct:Math.round(todayMs / max * 100), yesterdayPct:Math.round(yesterdayMs / max * 100)};
}
function studyComparisonHTML(){
  const data = studyComparisonData();
  return `<div class="jy-study-compare">
    <div class="jy-study-compare-row"><div class="jy-study-compare-label"><span>오늘</span><strong>${formatStudyDuration(data.todayMs)}</strong></div><div class="jy-progress jy-study-compare-bar"><span style="width:${data.todayPct}%;"></span></div></div>
    <div class="jy-study-compare-row"><div class="jy-study-compare-label"><span>어제</span><strong>${formatStudyDuration(data.yesterdayMs)}</strong></div><div class="jy-progress jy-study-compare-bar jy-study-yesterday-bar"><span style="width:${data.yesterdayPct}%;"></span></div></div>
  </div>`;
}
function homeStudySummaryHTML(){
  const data = studyComparisonData();
  return `<section class="jy-card jy-study-home" id="home-study-summary">
    <div class="jy-study-home-head"><h3 class="jy-card-title">오늘 공부 시간</h3><span class="jy-small">${formatStudyDate(data.today)} 기준</span></div>
    ${studyComparisonHTML()}
    <p class="jy-small">막대는 오늘과 어제 중 긴 공부 시간을 기준으로 표시됩니다.</p>
  </section>`;
}
function todayStudySessionsHTML(){
  const date = studyDateISO();
  const sessions = studyDaySessions(date);
  const state = readStudyTimerState();
  const current = state.current && state.current.date === date ? state.current : null;
  const rows = sessions.map((session, index)=>`<div class="jy-study-session-row">
    <div><strong>${String(index+1).padStart(2,'0')}</strong><span>${formatStudyTime(session.start)} ~ ${formatStudyTime(session.end)} · ${formatStudyDuration(studySessionDuration(session))}</span></div>
    <div class="jy-study-session-actions"><button class="jy-btn jy-delete" type="button" data-study-edit="${esc(session.id)}" data-study-date="${esc(date)}">수정</button><button class="jy-btn jy-delete" type="button" data-study-delete="${esc(session.id)}" data-study-date="${esc(date)}">삭제</button></div>
  </div>`).join('');
  const currentRow = current ? `<div class="jy-study-session-row jy-study-session-current"><div><strong>진행</strong><span>${formatStudyTime(current.start)} ~ 공부 중 · ${formatStudyDuration(Date.now() - new Date(current.start).getTime(), true)}</span></div></div>` : '';
  return rows || currentRow ? rows + currentRow : '<div class="jy-study-empty">아직 기록된 공부 시간이 없습니다.</div>';
}
function studyLogReceiptData(){
  const state = readStudyTimerState();
  const dates = Object.keys(state.days || {})
    .filter(date=>ensureStudyTimerDay(state,date).sessions.length || (state.current && state.current.date === date))
    .sort();
  let cumulative=0;
  const rows=dates.map(date=>{
    const total = completeStudyMs(date) + ((state.current && state.current.date === date) ? Math.max(0, Date.now() - new Date(state.current.start).getTime()) : 0);
    cumulative += total;
    return {date, total};
  }).filter(row=>row.total > 0);
  return {rows, cumulative};
}
function studyLogLectureProgress(date){
  const plan=planForDate(date);
  if(!plan) return null;
  const progress=lectureSchedulePct(plan);
  return progress.total ? progress : null;
}
function studyLogReceiptHTML(){
  const data=studyLogReceiptData();
  if(!data.rows.length) return '<div class="jy-study-receipt-empty">공부 기록 없음</div>';
  const rows=data.rows.slice().reverse().map(row=>{
    const progress=studyLogLectureProgress(row.date);
    const progressHTML=progress ? `<small>강의 진행률 ${progress.pct}% · ${progress.done}/${progress.total}</small>` : '<small>강의 일정 없음</small>';
    return `<div class="jy-study-receipt-row"><span>${esc(formatStudyDate(row.date))}${progressHTML}</span><strong>${esc(formatStudyDuration(row.total))}</strong></div>`;
  }).join('');
  return `<div class="jy-study-receipt"><div class="jy-study-receipt-total"><span>누적 공부시간</span><strong>${esc(formatStudyDuration(data.cumulative))}</strong></div><div class="jy-study-receipt-list">${rows}</div></div>`;
}
function studyLogNotes(){
  const data=studyLogReceiptData();
  if(!data.rows.length) return [];
  return [{id:'study_log_receipt', date:'', section:'study_log', title:'공부 기록', html:studyLogReceiptHTML(), text:'', savedAt:''}];
}
function studyTimerWidgetHTML(){
  rolloverStudySessionIfNeeded();
  const panel = readPanelState();
  const state = readStudyTimerState();
  const date = studyDateISO();
  const current = state.current && state.current.date === date ? state.current : null;
  const liveText = current ? '진행 중 · ' + formatStudyTime(current.start) + ' 시작 · ' + formatStudyDuration(Date.now() - new Date(current.start).getTime(), true) : '대기 중';
  return `<aside id="jy-study-timer" class="jy-study-timer ${panel.studyOpen ? '' : 'jy-hidden'}">
    <div class="jy-study-timer-head"><strong>공부 시간</strong><button type="button" class="jy-btn jy-delete" id="study-timer-close">닫기</button></div>
    ${studyComparisonHTML()}
    <div class="jy-study-live ${current ? 'active' : ''}">${liveText}</div>
    <div class="jy-btns jy-study-buttons"><button class="jy-btn dark" type="button" id="study-timer-start" ${current ? 'disabled' : ''}>공부 시작</button><button class="jy-btn" type="button" id="study-timer-stop" ${current ? '' : 'disabled'}>공부 종료</button></div>
    <div class="jy-study-timetable"><div class="jy-study-timetable-title">오늘 시간표</div>${todayStudySessionsHTML()}</div>
    <div class="jy-btns jy-study-manage"><button class="jy-btn" type="button" id="study-reset-today">오늘 리셋</button><button class="jy-btn" type="button" id="study-delete-all">전체 기록 삭제</button></div>
  </aside><button type="button" id="study-timer-open" class="jy-study-timer-open ${panel.studyOpen ? 'jy-hidden' : ''}">공부</button>`;
}
function renderStudyTimerWidget(){
  const old = byId('jy-study-timer');
  if(old) old.remove();
  const oldBtn = byId('study-timer-open');
  if(oldBtn) oldBtn.remove();
  document.body.insertAdjacentHTML('beforeend', studyTimerWidgetHTML());
  bindStudyTimerWidget();
}
function refreshHomeStudySummary(){
  const el = byId('home-study-summary');
  if(el) el.outerHTML = homeStudySummaryHTML();
}
function refreshStudyViews(){
  renderStudyTimerWidget();
  refreshHomeStudySummary();
}
function bindStudyTimerWidget(){
  const close = byId('study-timer-close');
  const open = byId('study-timer-open');
  const start = byId('study-timer-start');
  const stop = byId('study-timer-stop');
  if(close) close.onclick = ()=>{ setPanelOpen('study', false); refreshStudyViews(); };
  if(open) open.onclick = ()=>{ setPanelOpen('study', true); refreshStudyViews(); };
  if(start) start.onclick = ()=>{ startStudyTimer(); refreshStudyViews(); };
  if(stop) stop.onclick = ()=>{ stopStudyTimer(); refreshStudyViews(); };
  const reset = byId('study-reset-today');
  if(reset) reset.onclick = ()=>{
    if(!confirm('오늘 공부 시간 기록을 리셋할까요?')) return;
    resetTodayStudyTimer();
    refreshStudyViews();
  };
  const delAll = byId('study-delete-all');
  if(delAll) delAll.onclick = ()=>{
    if(!confirm('모든 날짜의 공부 시간 기록을 삭제할까요?')) return;
    deleteAllStudyTimerRecords();
    refreshStudyViews();
  };
  document.querySelectorAll('[data-study-delete]').forEach(btn=>btn.onclick=()=>{
    if(!confirm('이 공부 기록을 삭제할까요?')) return;
    deleteStudySession(btn.dataset.studyDate, btn.dataset.studyDelete);
    refreshStudyViews();
  });
  document.querySelectorAll('[data-study-edit]').forEach(btn=>btn.onclick=()=>{
    editStudySession(btn.dataset.studyDate, btn.dataset.studyEdit);
    refreshStudyViews();
  });
}
let jyStudyTimerTickerStarted = false;
function ensureStudyTimerTicker(){
  if(jyStudyTimerTickerStarted) return;
  jyStudyTimerTickerStarted = true;
  setInterval(()=>{
    rolloverStudySessionIfNeeded();
    refreshStudyViews();
  }, 1000);
}

function systemActiveDate(){
  const today = studyDateISO();
  if(today < JY_PREP_DATE) return JY_PREP_DATE;
  if(today < JY_START_DATE) return JY_PREP_DATE;
  if(today > JY_EXAM_DATE) return JY_EXAM_DATE;
  return today;
}
function activeDate(){
  const manual = readManualActiveDate();
  return manual || systemActiveDate();
}
function readManualActiveDate(){
  try{
    const raw = JSON.parse(localStorage.getItem(JY_ACTIVE_DATE_KEY)) || {};
    const date = String(raw.date || '');
    return JY_PLAN.some(p=>p.date===date) ? date : '';
  }catch(e){
    return '';
  }
}
function setManualActiveDate(date){
  if(!JY_PLAN.some(p=>p.date===date)) return false;
  localStorage.setItem(JY_ACTIVE_DATE_KEY, JSON.stringify({date, updatedAt:new Date().toISOString()}));
  return true;
}
function clearManualActiveDate(){
  localStorage.removeItem(JY_ACTIVE_DATE_KEY);
}
function moveActiveDate(delta){
  const current = activeDate();
  const idx = JY_PLAN.findIndex(p=>p.date===current);
  const next = JY_PLAN[idx + delta];
  if(!next) return false;
  setManualActiveDate(next.date);
  return true;
}
function scheduleDateControlsHTML(){
  const current = activeDate();
  const systemDate = systemActiveDate();
  const idx = JY_PLAN.findIndex(p=>p.date===current);
  const prevDisabled = idx <= 0 ? 'disabled' : '';
  const nextDisabled = idx < 0 || idx >= JY_PLAN.length - 1 ? 'disabled' : '';
  const todayButton = current !== systemDate ? '<button class="jy-btn jy-date-jump" type="button" id="schedule-today">오늘 기준</button>' : '';
  return `<div class="jy-date-controls"><span class="jy-small">${dateDot(current)}</span><div class="jy-date-buttons"><button class="jy-btn" type="button" id="schedule-prev" ${prevDisabled}>이전</button>${todayButton}<button class="jy-btn dark" type="button" id="schedule-next" ${nextDisabled}>다음</button></div></div>`;
}
function activePlan(){
  const date = activeDate();
  return JY_PLAN.find(p=>p.date===date) || JY_PLAN[0];
}
function planForDate(date){
  return JY_PLAN.find(p=>p.date===date) || null;
}
function nextPlanDate(date){
  const idx = JY_PLAN.findIndex(p=>p.date===date);
  if(idx >= 0 && JY_PLAN[idx + 1]) return JY_PLAN[idx + 1].date;
  const d = new Date(String(date || activeDate()) + 'T00:00:00');
  if(Number.isFinite(d.getTime())){
    d.setDate(d.getDate() + 1);
    return isoFromDateObject(d);
  }
  return date;
}
function addTodoForDate(date, text){
  const clean = String(text || '').trim();
  if(!clean) return false;
  const state = readState();
  const day = dayState(state, date);
  day.todos.push({id:Date.now()+'_'+Math.floor(Math.random()*10000), text:clean, done:false});
  writeState(state);
  return true;
}


function migrateScheduleV109(state){
  const baseline=new Set(JY_RESCHEDULE_BASELINE_COMPLETED_CODES.map(String));
  Object.keys((state && state.days) || {}).forEach(date=>{
    const day=state.days[date] || {};
    if(day.lectures){
      Object.keys(day.lectures).forEach(code=>{
        if(!baseline.has(String(code))) delete day.lectures[code];
      });
    }
  });
  const markBaseline=(date, codes)=>{
    const day=dayState(state, date);
    codes.forEach(code=>{ day.lectures[String(code)] = true; });
  };
  markBaseline('2026-05-14', ['037','038','039','040']);
  markBaseline('2026-05-15', ['053']);
  markBaseline('2026-05-16', ['054','055','065','066']);
  state.scheduleMigrationVersion = JY_SCHEDULE_MIGRATION_VERSION;
  return state;
}

function planDateGte(date, startDate){
  return String(date || '') >= String(startDate || '');
}

function recurringPlanTasks(plan){
  return JY_RECURRING_ACADEMIC_TASKS.concat(JY_RECURRING_PERSONAL_TASKS)
    .filter(t=>planDateGte(plan.date, t.startDate))
    .map(t=>({id:t.id+'_'+plan.date, label:t.label, section:t.section}));
}

function lectureNoteDueDateFor(lectureDate){
  return JY_LECTURE_NOTE_DUE_OVERRIDES[String(lectureDate || '')] || String(lectureDate || '');
}

function lectureNoteSubmissionLecturesFor(date, section){
  const items=[];
  const dateKey=String(date || '');
  JY_PLAN.forEach(plan=>{
    if(lectureNoteDueDateFor(plan.date) !== dateKey) return;
    (plan.lectures?.[section] || []).forEach(lecture=>{
      items.push(Object.assign({}, lecture, {lectureDate:plan.date, noteDueDate:date}));
    });
  });
  const extraCodes=(JY_EXTRA_LECTURE_NOTE_DUE[dateKey] && JY_EXTRA_LECTURE_NOTE_DUE[dateKey][section]) || [];
  extraCodes.forEach(code=>{
    const lecture=findLecture(code);
    if(lecture && lecture.code){
      items.push(Object.assign({}, lecture, {lectureDate:'2026-05-14', noteDueDate:date, noteOnly:true}));
    }
  });
  const seen=new Set();
  return items.filter(item=>{
    const key=String(item.code || '');
    if(!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function shouldShowPlanTask(plan, task){
  if(!task) return false;
  if(task.carryFromDate){
    return !hasSubmission(task.carryFromDate, task.section) || hasSubmission(plan.date, task.section);
  }
  return true;
}

function isDynamicScheduleDate(date){
  const key=String(date || '');
  const start=rescheduleStartDate();
  return key >= start && key <= JY_LECTURE_FINISH_DATE;
}
function dynamicMockTasksForPlan(plan){
  const date=String((plan && plan.date) || '');
  if(!isDynamicScheduleDate(date)) return [];
  const codes=new Set(planCodesForDisplay(plan).map(String));
  const tasks=[];
  const push=(firstCode, id, label, section)=>{
    if(codes.has(firstCode)) tasks.push({id:id+'_'+date, label, section});
  };
  push('041','mock_test_2','Mock Test 2 3시간','mock_test_2');
  push('045','mock_test_3','Mock Test 3 3시간','mock_test_3');
  push('049','mock_test_4','Mock Test 4 3시간','mock_test_4');
  push('097','cambridge19_mock_test_2','Cambridge 19 Mock Test 2 3시간','cambridge19_mock_test_2');
  push('101','cambridge19_mock_test_3','Cambridge 19 Mock Test 3 3시간','cambridge19_mock_test_3');
  push('105','cambridge19_mock_test_4','Cambridge 19 Mock Test 4 3시간','cambridge19_mock_test_4');
  return tasks;
}
function planTasksForDisplay(plan){
  const dynamicDate=isDynamicScheduleDate(plan && plan.date);
  const base=(plan.tasks || [])
    .filter(t=>shouldShowPlanTask(plan, t))
    .filter(t=>!(dynamicDate && /Mock Test .*3시간/.test(String(t.label || ''))));
  const mockTasks=dynamicMockTasksForPlan(plan).filter(t=>!base.some(b=>String(b.section)===String(t.section)));
  const withMocks=base.concat(mockTasks);
  const recurring=recurringPlanTasks(plan).filter(t=>!withMocks.some(b=>String(b.section)===String(t.section)));
  return withMocks.concat(recurring);
}

function isPlanTaskDone(plan, task){
  return !!hasSubmission(plan.date, task.section);
}

function isPersonalTask(task){
  const section=String(task && task.section || '');
  const label=String(task && task.label || '');
  return /^(parcel_send|bunjang_inquiry|market_invoice)/.test(section) || /택배|번개장터|송장|마켓/.test(label);
}

function taskCheckClass(task){
  return isPersonalTask(task) ? 'custom' : 'important';
}

function defaultState(){
  return {days:{}, notes:[], dailyWords:{}, vocabBank:null, masteredVocabBank:[], vocabStatus:{}, vocabPractice:{}, quickVocab:null, reviewBackups:{}, mockTests:{}, grammarNotes:[], grammarEditingId:'', phraseNotes:[], phraseEditingId:'', phrasePractice:{}, vocabVersion:JY_VOCAB_VERSION, scheduleMigrationVersion:JY_SCHEDULE_MIGRATION_VERSION, noteCleanupVersion:JY_NOTE_CLEANUP_VERSION};
}
function ensureStateCollections(state){
  if(!state || typeof state !== 'object') state=defaultState();
  if(!state.days) state.days={};
  if(!Array.isArray(state.notes)) state.notes=[];
  if(!state.dailyWords) state.dailyWords={};
  if(state.vocabBank === undefined) state.vocabBank=null;
  if(state.vocabBankBackupBeforeRecovery === undefined) state.vocabBankBackupBeforeRecovery=null;
  if(!Array.isArray(state.masteredVocabBank)) state.masteredVocabBank=[];
  if(!state.vocabStatus) state.vocabStatus={};
  if(!state.vocabPractice) state.vocabPractice={};
  if(!state.reviewBackups) state.reviewBackups={};
  if(!state.mockTests) state.mockTests={};
  if(!Array.isArray(state.grammarNotes)) state.grammarNotes=[];
  if(state.grammarEditingId === undefined) state.grammarEditingId='';
  if(!Array.isArray(state.phraseNotes)) state.phraseNotes=[];
  if(state.phraseEditingId === undefined) state.phraseEditingId='';
  if(!state.phrasePractice || typeof state.phrasePractice !== 'object') state.phrasePractice={};
  if(state.scheduleMigrationVersion === undefined) state.scheduleMigrationVersion='';
  if(state.noteCleanupVersion === undefined) state.noteCleanupVersion='';
  return state;
}
function readState(){
  try{
    const state = ensureStateCollections(JSON.parse(localStorage.getItem(JY_STATE_KEY)) || defaultState());
    if(state.vocabVersion !== JY_VOCAB_VERSION){
      const previousVocabSnapshot = Array.isArray(state.vocabBank) ? state.vocabBank.slice() : null;
      if(previousVocabSnapshot && previousVocabSnapshot.length && !state.vocabBankBackupBeforeRecovery){
        state.vocabBankBackupBeforeRecovery = previousVocabSnapshot;
      }
      state.vocabBank = Array.isArray(state.vocabBank) && state.vocabBank.length ? dedupeWords(state.vocabBank) : null;
      if(!Array.isArray(state.masteredVocabBank)) state.masteredVocabBank=[];
      Object.keys(state.vocabStatus || {}).forEach(key=>{
        if(isVocabFullyMemorised(state.vocabStatus[key])) archiveMasteredWordInState(state, key);
      });
      state.dailyWords = {};
      state.vocabPractice = {};
      state.vocabVersion = JY_VOCAB_VERSION;
      localStorage.setItem(JY_STATE_KEY, JSON.stringify(state));
    }
    if(state.scheduleMigrationVersion !== JY_SCHEDULE_MIGRATION_VERSION){
      migrateScheduleV109(state);
      localStorage.setItem(JY_STATE_KEY, JSON.stringify(state));
    }
    if(state.noteCleanupVersion !== JY_NOTE_CLEANUP_VERSION){
      cleanupDocumentedTextDuplicates(state);
      state.noteCleanupVersion = JY_NOTE_CLEANUP_VERSION;
      localStorage.setItem(JY_STATE_KEY, JSON.stringify(state));
    }
    return ensureStateCollections(state);
  }
  catch(e){ return defaultState(); }
}
function writeState(state){ localStorage.setItem(JY_STATE_KEY, JSON.stringify(state)); }
function dayState(state,date){
  if(!state.days) state.days={};
  if(!state.days[date]) state.days[date]={lectures:{},submissions:{},todos:[]};
  if(!state.days[date].lectures) state.days[date].lectures={};
  if(!state.days[date].submissions) state.days[date].submissions={};
  if(!state.days[date].todos) state.days[date].todos=[];
  if(!state.days[date].sectionTodos) state.days[date].sectionTodos={};
  if(!state.days[date].lectureNotes) state.days[date].lectureNotes={};
  if(!state.days[date].lectureProofs) state.days[date].lectureProofs={};
  if(!state.days[date].skillReviewDrafts) state.days[date].skillReviewDrafts={};
  if(!state.notes) state.notes=[];
  if(!state.dailyWords) state.dailyWords={};
  if(state.vocabBank === undefined) state.vocabBank = null;
  if(state.vocabBankBackupBeforeRecovery === undefined) state.vocabBankBackupBeforeRecovery = null;
  if(!state.vocabStatus) state.vocabStatus = {};
  if(!state.vocabPractice) state.vocabPractice = {};
  if(!state.quickVocab) state.quickVocab = null;
  if(!state.reviewBackups) state.reviewBackups = {};
  if(state.vocabVersion !== JY_VOCAB_VERSION) state.vocabVersion = JY_VOCAB_VERSION;
  if(state.scheduleMigrationVersion === undefined) state.scheduleMigrationVersion = '';
  ensureQuickVocabState(state);
  return state.days[date];
}
function lectureKey(code){ return String(code); }
function originalPlanCodes(plan){
  return ((plan && plan.codes) || []).map(code=>String(code));
}
function lectureOriginalPlanDate(code){
  const key=String(code || '');
  const found=(JY_PLAN || []).find(p=>((p.codes || []).map(String)).includes(key));
  return found ? found.date : '';
}
function isLectureDoneBeforeDate(state, date, code){
  const key=lectureKey(code);
  return Object.keys((state && state.days) || {}).some(dayDate=>{
    if(String(dayDate) >= String(date)) return false;
    const day=state.days[dayDate] || {};
    return !!(day.lectures && day.lectures[key]);
  });
}
function masterLectureCodes(){
  const seen=new Set();
  const out=[];
  const source=(Array.isArray(JY_RESCHEDULE_MASTER_ORDER) && JY_RESCHEDULE_MASTER_ORDER.length)
    ? JY_RESCHEDULE_MASTER_ORDER
    : (JY_PLAN || []).flatMap(plan=>originalPlanCodes(plan));
  source.forEach(code=>{
    const key=String(code || '');
    if(!key || seen.has(key)) return;
    seen.add(key);
    out.push(key);
  });
  return out;
}
function scheduleBaselineCompletedCode(code){
  return JY_RESCHEDULE_BASELINE_COMPLETED_CODES.map(String).includes(String(code || ''));
}
function manualFixedScheduleCodesForDate(date){
  return (JY_MANUAL_FIXED_SCHEDULE_CODES[String(date || '')] || []).map(String);
}
function isManualFixedScheduleDate(date){
  return manualFixedScheduleCodesForDate(date).length > 0;
}
function rescheduleStartDate(){
  const systemDate=systemActiveDate();
  const found=(JY_PLAN || []).find(p=>String(p.date || '') >= String(systemDate || '') && String(p.date || '') <= JY_LECTURE_FINISH_DATE);
  return found ? found.date : systemDate;
}
function lectureBlockKeyForSchedule(code){
  const lecture=findLecture(code);
  const course=String((lecture && lecture.course) || '');
  if(course.indexOf('Kings') >= 0){
    return course + '|' + String((lecture && lecture.subject) || '');
  }
  return String(code || '');
}
function lectureBlocksForSchedule(codes){
  const blocks=[];
  let current=null;
  (codes || []).forEach(code=>{
    const key=lectureBlockKeyForSchedule(code);
    if(current && current.key===key){
      current.codes.push(String(code));
    }else{
      current={key, codes:[String(code)]};
      blocks.push(current);
    }
  });
  return blocks;
}
function dynamicLectureAssignments(){
  const state=readState();
  const start=rescheduleStartDate();
  const dates=(JY_PLAN || []).filter(p=>String(p.date || '') >= start && String(p.date || '') <= JY_LECTURE_FINISH_DATE);
  const assignments={};
  dates.forEach(p=>{ assignments[p.date]=[]; });
  if(!dates.length) return assignments;
  const fixedDateCodes={};
  dates.forEach(plan=>{
    const fixed=manualFixedScheduleCodesForDate(plan.date)
      .filter(code=>!scheduleBaselineCompletedCode(code))
      .filter(code=>!isLectureDoneBeforeDate(state, start, code));
    if(fixed.length) fixedDateCodes[plan.date]=fixed;
  });
  const fixedCodes=new Set(Object.values(fixedDateCodes).flat().map(String));
  const remaining=masterLectureCodes()
    .filter(code=>!scheduleBaselineCompletedCode(code))
    .filter(code=>!fixedCodes.has(String(code)))
    .filter(code=>!isLectureDoneBeforeDate(state, start, code));
  const blocks=lectureBlocksForSchedule(remaining);
  let index=0;
  const blockMinutes=(block)=>Math.max(8, lectureMinutesFromCodes(block.codes));
  let remainingMinutes=blocks.reduce((sum, block)=>sum + blockMinutes(block), 0);
  const flexibleDates=dates.filter(plan=>!fixedDateCodes[plan.date]);
  dates.forEach((plan)=>{
    const fixed=fixedDateCodes[plan.date];
    if(fixed){
      assignments[plan.date]=fixed;
      return;
    }
    const dateIndex=flexibleDates.findIndex(p=>p.date===plan.date);
    const daysLeft=flexibleDates.length - dateIndex;
    const target=daysLeft ? remainingMinutes / daysLeft : remainingMinutes;
    let used=0;
    while(index < blocks.length){
      const block=blocks[index];
      const minutes=blockMinutes(block);
      const isLast=dateIndex >= flexibleDates.length - 1;
      if(used > 0 && !isLast){
        const before=Math.abs(target - used);
        const after=Math.abs(target - (used + minutes));
        if(after > before && used >= target * 0.65) break;
      }
      assignments[plan.date].push(...block.codes);
      used += minutes;
      remainingMinutes -= minutes;
      index += 1;
      if(used >= target && !isLast) break;
    }
  });
  return assignments;
}
function dynamicLectureDailyTargetMinutes(){
  const state=readState();
  const start=rescheduleStartDate();
  const dates=(JY_PLAN || []).filter(p=>String(p.date || '') >= start && String(p.date || '') <= JY_LECTURE_FINISH_DATE);
  const flexibleDates=dates.filter(p=>!isManualFixedScheduleDate(p.date));
  if(!flexibleDates.length) return 0;
  const fixedCodes=new Set(dates.flatMap(p=>manualFixedScheduleCodesForDate(p.date)).map(String));
  const remaining=masterLectureCodes()
    .filter(code=>!scheduleBaselineCompletedCode(code))
    .filter(code=>!fixedCodes.has(String(code)))
    .filter(code=>!isLectureDoneBeforeDate(state, start, code));
  const total=lectureBlocksForSchedule(remaining).reduce((sum, block)=>sum + Math.max(8, lectureMinutesFromCodes(block.codes)), 0);
  return Math.round(total / flexibleDates.length);
}

function planScheduleTimeText(plan){
  const date=String((plan && plan.date) || '');
  const start=rescheduleStartDate();
  if(date >= start && date <= JY_LECTURE_FINISH_DATE){
    const codes=planCodesForDisplay(plan);
    if(!codes.length) return '';
    if(isManualFixedScheduleDate(date)) return Math.round(lectureMinutesFromCodes(codes)) + '분';
    return dynamicLectureDailyTargetMinutes() + '분';
  }
  const lectureMinutes=Math.round(lectureMinutesFromCodes(planCodesForDisplay(plan)));
  return lectureMinutes ? lectureMinutes + '분' : '';
}
function dynamicCodesForPlan(plan){
  const date=String((plan && plan.date) || '');
  const start=rescheduleStartDate();
  if(date >= start && date <= JY_LECTURE_FINISH_DATE){
    return dynamicLectureAssignments()[date] || [];
  }
  return originalPlanCodes(plan);
}
function lectureDisplayItemsForPlan(plan){
  const codes=dynamicCodesForPlan(plan);
  const seen=new Set();
  const rows=[];
  codes.forEach(code=>{
    const key=String(code || '');
    if(!key || seen.has(key)) return;
    seen.add(key);
    rows.push({code:key, carriedFrom:'', isCarried:false});
  });
  return rows;
}
function planCodesForDisplay(plan){
  return lectureDisplayItemsForPlan(plan).map(item=>item.code);
}
function planCodeSummaryForDisplay(plan){
  const items=lectureDisplayItemsForPlan(plan);
  return items.map(item=>item.isCarried ? item.code+' 이월' : item.code).join(', ');
}
function carriedLectureCountForPlan(plan){
  return lectureDisplayItemsForPlan(plan).filter(item=>item.isCarried).length;
}
function planStageForDisplay(plan){
  const codes=planCodesForDisplay(plan);
  if(!codes.length) return (plan && plan.stage) || '';
  const labels=[];
  codes.forEach(code=>{
    const lecture=findLecture(code);
    const label=String((lecture && lecture.stage) || '');
    if(label && !labels.includes(label)) labels.push(label);
  });
  if(!labels.length) return (plan && plan.stage) || '';
  return labels.length > 2 ? labels.slice(0,2).join(' + ') + ' 외' : labels.join(' + ');
}
function planTaskMinutes(plan){
  return ((plan && plan.tasks) || []).reduce((sum, task)=>sum + (/3시간/.test(String(task.label || '')) ? 180 : 0), 0);
}
function planDisplayMinutes(plan){
  return Math.round(lectureMinutesFromCodes(planCodesForDisplay(plan)));
}
function isLectureDone(date, code){
  const state=readState(); const day=dayState(state,date);
  return !!day.lectures[lectureKey(code)];
}
function toggleLecture(date, code){
  const state=readState(); const day=dayState(state,date);
  day.lectures[lectureKey(code)] = !day.lectures[lectureKey(code)];
  writeState(state);
}
function hasSubmission(date, section){
  const state=readState(); const day=dayState(state,date);
  return !!day.submissions[section];
}
function setSubmission(date, section, value, text){
  const state=readState(); const day=dayState(state,date);
  day.submissions[section] = !!value;
  if(value && text !== undefined){
    const note = {
      id: section + '_' + date + '_' + Date.now(),
      date, section,
      title: SECTION_NAMES[section] || section,
      text:'['+date+']\n'+text,
      savedAt: new Date().toLocaleString('ko-KR')
    };
    state.notes.unshift(note);
  }
  writeState(state);
}
function toggleSubmission(date, section){
  const state=readState(); const day=dayState(state,date);
  day.submissions[section] = !day.submissions[section];
  writeState(state);
}

function lecturePct(plan){
  const codes=planCodesForDisplay(plan);
  if(!codes.length) return {done:0,total:0,pct:0,all:false};
  const done = codes.filter(c=>isLectureDone(plan.date,c)).length;
  return {done,total:codes.length,pct:Math.round(done/codes.length*100),all:done===codes.length};
}
function overallPct(plan){
  const state=readState(); const day=dayState(state, plan.date);
  let total=0, done=0;
  planCodesForDisplay(plan).forEach(code=>{ total++; if(isLectureDone(plan.date, code)) done++; });
  planTasksForDisplay(plan).filter(t=>t.section!=='lecture_note').forEach(t=>{ total++; if(isPlanTaskDone(plan,t)) done++; });
  ['listening','reading','writing','speaking'].forEach(section=>{
    ((day.sectionTodos && day.sectionTodos[section]) || []).forEach(t=>{ total++; if(t.done) done++; });
  });
  day.todos.forEach(t=>{ total++; if(t.done) done++; });
  return total ? Math.round(done/total*100) : 0;
}

function findLecture(code){
  let found = null;
  JY_PLAN.some(p => {
    for(const sec of ['listening','reading','writing','speaking']){
      const item = (p.lectures?.[sec] || []).find(l=>String(l.code)===String(code));
      if(item){ found = item; return true; }
    }
    return false;
  });
  return found || JY_FULL_LECTURES.find(l=>String(l.code)===String(code)) || {code};
}

function compactCourseName(course){
  const value=String(course || '');
  if(value === 'edm IELTS 실전모의고사 1') return '실전모의고사1';
  if(value === 'Cambridge 19') return 'Cambridge19';
  if(value === 'Cambridge 18') return 'Cambridge18';
  if(value === 'Kings 4.0+ 이론') return 'Kings4 이론';
  if(value === 'Kings 4.0+ 문제풀이') return 'Kings4 문제풀이';
  if(value === 'Kings 6.0+ 이론') return 'Kings6 이론';
  if(value === 'Kings 6.0+ 문제풀이') return 'Kings6 문제풀이';
  return value;
}
function compactSubjectName(subject){
  return String(subject || '')
    .replace('Academic Reading','Reading')
    .replace('Academic Writing Task1','Writing Task1')
    .replace('Academic Writing Task2','Writing Task2');
}
function compactLectureTitle(title){
  return String(title || '')
    .replace(/_A/g,'')
    .replace(/Test\s+(\d+)/g,'Test$1')
    .replace(/Passage\s+(\d+)/g,'Passage$1')
    .replace(/Section\s+(\d+)/g,'Section$1')
    .replace(/Part\s+(\d+)/g,'Part$1')
    .replace(/Task\s+(\d+)/g,'Task$1')
    .replace(/\s+/g,' ')
    .trim();
}
function compactLectureLabel(lecture){
  const l=lecture || {};
  const bracket='['+compactCourseName(l.course)+(compactSubjectName(l.subject) ? ' '+compactSubjectName(l.subject) : '')+']';
  return bracket+' '+compactLectureTitle(l.title || '');
}
function compactLectureLine(code, lecture, prefix='강의'){
  return prefix+' · '+String(code || '')+' · '+compactLectureLabel(lecture || findLecture(code));
}
function lectureMinutesFromCodes(codes){
  return (codes || []).reduce((sum, code)=>{
    const lecture=findLecture(code);
    const parts=String(lecture.duration || '').split(':');
    if(parts.length !== 2) return sum;
    return sum + Number(parts[0] || 0) + Number(parts[1] || 0) / 60;
  }, 0);
}
function scheduleTaskSummary(plan){
  const tasks=planTasksForDisplay(plan).filter(t=>/mock|시험|오답|최종|복습|구문 구조/.test(String(t.label || '')));
  return tasks.map(t=>t.label).join(' / ');
}

function timeInZone(tz){
  return new Intl.DateTimeFormat('en-GB', {timeZone:tz, hour:'2-digit', minute:'2-digit', hour12:false}).format(new Date());
}

function examDdayText(){
  const diff = Math.ceil((new Date(JY_EXAM_DATE+'T00:00:00') - new Date(todayISO()+'T00:00:00'))/(1000*60*60*24));
  return diff >= 0 ? 'D-' + diff : 'D+' + Math.abs(diff);
}

function headerMetaText(){
  return `${todayDot()} · ${examDdayText()} · KST ${timeInZone('Asia/Seoul')} · UK ${timeInZone('Europe/London')}`;
}

function updateMeta(){
  const text = headerMetaText();
  const el = byId('meta-date');
  if(el) el.textContent = text;
  document.querySelectorAll('.jy-logo-meta').forEach(e=>e.textContent=text);
}

function msUntilNextKstDate(){
  const kstNow = kstNowDate();
  const nextMidnight = new Date(kstNow);
  nextMidnight.setHours(24,0,5,0);
  const nextSeven = new Date(kstNow);
  if(kstNow.getHours() < 10){
    nextSeven.setHours(10,0,5,0);
  }else{
    nextSeven.setDate(nextSeven.getDate() + 1);
    nextSeven.setHours(10,0,5,0);
  }
  const next = Math.min(nextMidnight.getTime(), nextSeven.getTime());
  return Math.max(1000, next - kstNow.getTime());
}

function scheduleDateRefresh(){
  const run = () => {
    render();
    setTimeout(run, msUntilNextKstDate());
  };
  setTimeout(run, msUntilNextKstDate());
}

function setActiveNav(route){
  document.querySelectorAll('#nav-menu a[data-route]').forEach(a=>a.classList.toggle('active', a.dataset.route===route));
}

function route(){ return (location.hash || '#home').replace('#','') || 'home'; }
let JY_LAST_RENDER_DATE='';
function activeReviewDraftId(){
  const editor=byId('mock-review-editor');
  if(!editor) return '';
  if(editor.dataset.reviewId) return editor.dataset.reviewId;
  const r=route();
  if(r==='mocktest') return activeMockId();
  if(['listening','reading','writing','speaking'].includes(r)) return 'skill:'+r;
  return '';
}
function persistActiveEditingBeforeRender(){
  const reviewId=activeReviewDraftId();
  if(reviewId) saveMockReviewDraft(reviewId,false);
  const lectureEditor=byId('skill-lecture-note-editor');
  const lectureCode=byId('skill-lecture-note-code')?.value;
  if(lectureEditor && lectureCode){
    saveLectureNote(activePlan().date, lectureCode, combinedRichEditorHTMLForSave('skill-lecture-note-editor'), true);
  }
}
function renderIfDateChanged(){
  persistActiveEditingBeforeRender();
  if(activeDate() !== JY_LAST_RENDER_DATE) render();
}
function render(){
  persistActiveEditingBeforeRender();
  updateMeta();
  const r = route();
  setActiveNav(r);
  const appEl = byId('app');
  if(!appEl) return;
  const renderers = {
    home: renderHome,
    lecture: renderLecture,
    words: renderWords,
    grammar: renderGrammar,
    mocktest: renderMockTest,
    listening: ()=>renderSkill('listening'),
    reading: ()=>renderSkill('reading'),
    writing: ()=>renderSkill('writing'),
    speaking: ()=>renderSkill('speaking'),
    notes: renderNotes,
    school: renderSchool
  };
  try{
    appEl.innerHTML = (renderers[r] || renderers.home)();
    bindWrongNoteSubmitFallback();
    bindPage(r);
    renderQuickVocabWidget();
    renderChatGPTSearchWidget();
    renderStudyTimerWidget();
    applyTodayQuickVocabHighlights(r);
    JY_LAST_RENDER_DATE=activeDate();
  }catch(err){
    console.error(err);
    appEl.innerHTML = '<section class="jy-card"><h1 class="jy-card-title">Page error</h1><div class="jy-note">'+esc(err.message || err)+'</div></section>';
  }
}


function homeDdayEvents(){
  return csmExecutionScheduleItems()
    .filter(item => !csmCheckDone(item.id))
    .map(item => ({
      title:item.homeTitle || item.task,
      date:item.date
    }));
}

function renderHomeMiniDdays(){
  const today = new Date(todayISO()+'T00:00:00');
  const items = homeDdayEvents().map(item => {
    const diff = Math.ceil((new Date(item.date+'T00:00:00') - today)/(1000*60*60*24));
    return Object.assign({}, item, {diff});
  }).filter(item => item.diff >= 0 && item.diff <= 90)
    .sort((a,b) => a.diff - b.diff)
    .slice(0,5);

  if(!items.length) return '';
  return `<div class="jy-mini-ddays"><strong>다가오는 일정</strong>${items.map(item => `<p>${esc(item.title)} · ${dateDot(item.date)} · D-${item.diff}</p>`).join('')}</div>`;
}



function lectureNoteRecord(date, code){
  const state=readState();
  const day=dayState(state,date);
  return lectureNoteRecordFromDay(day, code);
}

function lectureNoteFor(date, code){
  return lectureNoteRecord(date, code).text;
}

function lectureNoteHTMLFor(date, code){
  return lectureNoteRecord(date, code).html;
}

function setActiveLectureNoteCode(date, code){
  const state=readState();
  const day=dayState(state,date);
  day.activeLectureNoteCode=String(code || '');
  writeState(state);
}

function activeLectureNoteCodeFor(date, lectures){
  const state=readState();
  const day=dayState(state,date);
  const codes=(lectures || []).map(l=>String(l.code));
  const stored=String(day.activeLectureNoteCode || '');
  return codes.includes(stored) ? stored : (codes[0] || '');
}

function lectureProofFor(date, code){
  const state=readState();
  const day=dayState(state,date);
  return day.lectureProofs && day.lectureProofs[String(code)] ? day.lectureProofs[String(code)] : null;
}

function normaliseLectureProof(proof){
  if(!proof) return {items:[], savedAt:''};
  if(Array.isArray(proof.items)){
    return {items:proof.items.filter(item=>item && (item.dataUrl || item.id || item.html || item.kind === 'notePage')), savedAt:String(proof.savedAt || '')};
  }
  if(proof.dataUrl){
    return {items:[{
      name:String(proof.name || 'lecture-photo'),
      type:String(proof.type || 'image/*'),
      size:Number(proof.size || 0),
      dataUrl:String(proof.dataUrl || ''),
      savedAt:String(proof.savedAt || '')
    }], savedAt:String(proof.savedAt || '')};
  }
  if(proof.id){
    return {items:[{
      id:String(proof.id || ''),
      storage:String(proof.storage || 'indexedDB'),
      name:String(proof.name || 'lecture-file'),
      type:String(proof.type || ''),
      size:Number(proof.size || 0),
      savedAt:String(proof.savedAt || '')
    }], savedAt:String(proof.savedAt || '')};
  }
  return {items:[], savedAt:String(proof.savedAt || '')};
}


function isLectureProofTextPage(item){
  return String(item && item.kind || '') === 'notePage' || (!!(item && item.html) && String(item && item.type || '') === 'text/html');
}

function textPageChunksFromHTML(html){
  const wrapper=document.createElement('div');
  wrapper.innerHTML=String(html || '').trim();
  const nodes=Array.from(wrapper.childNodes || []);
  const chunks=[];
  let current=[];
  let length=0;
  const flush=()=>{
    const html=current.join('').trim();
    if(html) chunks.push(html);
    current=[];
    length=0;
  };
  nodes.forEach(node=>{
    const isBreak=node.nodeType === 1 && (node.matches?.('[data-jy-page-break]') || node.classList?.contains('jy-editor-page-break'));
    if(isBreak){
      flush();
      return;
    }
    const nodeHTML=node.nodeType === 3 ? esc(node.textContent || '').replace(/\n/g,'<br>') : String(node.outerHTML || esc(node.textContent || ''));
    const text=String(node.textContent || '').replace(/\s+/g,' ').trim();
    const visible=text || nodeHTML.replace(/<br\s*\/?>/ig,'').replace(/<[^>]+>/g,'').trim();
    if(!visible) return;
    const nodeLength=Math.max(text.length, 1);
    if(current.length && length + nodeLength > JY_TEXT_PAGE_CHAR_LIMIT) flush();
    current.push(nodeHTML);
    length += nodeLength;
  });
  flush();
  if(!chunks.length){
    const plain=richHTMLToText(html || '').trim();
    if(plain) chunks.push(esc(plain).replace(/\n/g,'<br>'));
  }
  return chunks;
}

function makeProofTextPageItems(html, name, savedAt){
  const chunks=textPageChunksFromHTML(html);
  const total=chunks.length;
  return chunks.map((chunk,index)=>({
    kind:'notePage',
    type:'text/html',
    name:String(name || '작성글'),
    html:chunk,
    text:richHTMLToText(chunk),
    savedAt:String(savedAt || ''),
    textPage:index+1,
    textPages:total
  }));
}

function documentedTextSignature(item){
  if(!isLectureProofTextPage(item)) return '';
  const html=String(item && item.html || '');
  const text=String(item && item.text || richHTMLToText(html) || '').replace(/\s+/g,' ').trim();
  return text.toLowerCase();
}

function dedupeDocumentedTextItems(items){
  const seen=new Set();
  return (items || []).filter(item=>{
    if(!isLectureProofTextPage(item)) return true;
    const sig=documentedTextSignature(item);
    if(!sig) return false;
    if(seen.has(sig)) return false;
    seen.add(sig);
    return true;
  });
}

function replaceDocumentedTextItems(existing, pages){
  const files=(existing || []).filter(item=>!isLectureProofTextPage(item));
  return dedupeDocumentedTextItems(files.concat(pages || []));
}

function cleanupProofItemList(target, key){
  if(!target) return false;
  const items=normaliseLectureProof({items:target[key] || []}).items;
  const next=dedupeDocumentedTextItems(items);
  if(next.length === items.length) return false;
  target[key]=next;
  return true;
}

function normalisedNoteSignatureFromHTML(html, fallbackText=''){
  const text=richHTMLToText(String(html || '')).trim() || String(fallbackText || '').trim();
  return text.replace(/\s+/g,' ').trim().toLowerCase();
}

function documentedTextSignatureSet(items){
  const set=new Set();
  const pages=[];
  (items || []).forEach(item=>{
    if(!isLectureProofTextPage(item)) return;
    const sig=documentedTextSignature(item);
    if(sig) set.add(sig);
    pages.push(String(item.html || esc(item.text || '')));
  });
  const combined=normalisedNoteSignatureFromHTML(pages.join(''), '');
  if(combined) set.add(combined);
  return set;
}

function cleanupLegacyInlineNoteCopies(state){
  if(!state || !Array.isArray(state.notes)) return false;
  let changed=false;
  state.notes=state.notes.filter(note=>{
    const id=String(note && note.id || '');
    const noteSig=normalisedNoteSignatureFromHTML(note && note.html || '', note && note.text || '');
    if(!noteSig) return true;

    const lectureMatch=id.match(/^lecture_extra_(\d{4}-\d{2}-\d{2})_(.+)_\d+$/);
    if(lectureMatch){
      const day=dayState(state, lectureMatch[1]);
      const proof=normaliseLectureProof(day.lectureProofs && day.lectureProofs[String(lectureMatch[2])]);
      const sigs=documentedTextSignatureSet(proof.items);
      if(sigs.has(noteSig)){
        changed=true;
        return false;
      }
    }

    const reviewMatch=id.match(/^(listening|reading|writing|speaking)_(\d{4}-\d{2}-\d{2})_note_\d+$/) || id.match(/^(listening|reading|writing|speaking)_(\d{4}-\d{2}-\d{2})_\d+$/);
    if(reviewMatch){
      const section=reviewMatch[1];
      const day=dayState(state, reviewMatch[2]);
      const draft=day.skillReviewDrafts && day.skillReviewDrafts[section];
      const sigs=documentedTextSignatureSet(normaliseLectureProof({items:draft && draft.files || []}).items);
      if(sigs.has(noteSig)){
        changed=true;
        return false;
      }
    }

    const noteSection=String(note && note.section || '');
    const noteDate=String(note && note.date || '');
    if(['listening','reading','writing','speaking'].includes(noteSection) && noteDate){
      const day=dayState(state, noteDate);
      const draft=day.skillReviewDrafts && day.skillReviewDrafts[noteSection];
      const sigs=documentedTextSignatureSet(normaliseLectureProof({items:draft && draft.files || []}).items);
      if(sigs.has(noteSig)){
        changed=true;
        return false;
      }
    }

    return true;
  });
  return changed;
}

function cleanupDocumentedTextDuplicates(state){
  let changed=false;
  Object.keys(state.days || {}).forEach(date=>{
    const day=dayState(state, date);
    Object.keys(day.lectureProofs || {}).forEach(code=>{
      const proof=normaliseLectureProof(day.lectureProofs[code]);
      const next=dedupeDocumentedTextItems(proof.items);
      if(next.length !== proof.items.length){
        day.lectureProofs[code]={items:next, savedAt:proof.savedAt || new Date().toLocaleString('ko-KR')};
        changed=true;
      }
    });
    Object.keys(day.skillReviewDrafts || {}).forEach(section=>{
      const draft=day.skillReviewDrafts[section];
      if(cleanupProofItemList(draft, 'files')) changed=true;
    });
  });
  (state.grammarNotes || []).forEach(note=>{ if(cleanupProofItemList(note, 'files')) changed=true; });
  (state.phraseNotes || []).forEach(note=>{ if(cleanupProofItemList(note, 'files')) changed=true; });
  (state.notes || []).forEach(note=>{ if(cleanupProofItemList(note, 'reviewFiles')) changed=true; if(cleanupProofItemList(note, 'files')) changed=true; });
  if(cleanupLegacyInlineNoteCopies(state)) changed=true;
  return changed;
}

function addLectureTextPages(date, code, html){
  const clean=String(html || '').trim();
  const text=richHTMLToText(clean).trim();
  if(!date || !code || !text) return 0;
  const now=new Date().toLocaleString('ko-KR');
  const state=readState();
  const day=dayState(state,date);
  const lecture=findLecture(code);
  const pages=makeProofTextPageItems(clean, String(code)+' · '+(lecture.title || '작성글'), now);
  if(!pages.length) return 0;
  if(!day.lectureNotes) day.lectureNotes={};
  delete day.lectureNotes[String(code)];
  if(!day.lectureProofs) day.lectureProofs={};
  const existing=normaliseLectureProof(day.lectureProofs[String(code)]);
  day.lectureProofs[String(code)]={items:replaceDocumentedTextItems(existing.items, pages), savedAt:now};
  day.lectures[String(code)]=true;
  upsertLectureNotePage(state, date, code, now);
  writeState(state);
  return pages.length;
}

function addSkillReviewTextPages(date, section, html){
  const clean=String(html || '').trim();
  const text=richHTMLToText(clean).trim();
  if(!date || !section || !text) return 0;
  const now=new Date().toLocaleString('ko-KR');
  const state=readState();
  const day=dayState(state,date);
  if(!day.skillReviewDrafts) day.skillReviewDrafts={};
  const draft=day.skillReviewDrafts[section] || {};
  const title=String(draft.source || SECTION_NAMES[section] || '오답 노트');
  const pages=makeProofTextPageItems(clean, title, now);
  if(!pages.length) return 0;
  draft.html='';
  draft.savedAt=now;
  draft.files=replaceDocumentedTextItems(normaliseLectureProof({items:draft.files || []}).items, pages);
  draft.filesSavedAt=now;
  day.skillReviewDrafts[section]=draft;
  writeState(state);
  return pages.length;
}

function galleryKey(value){
  return String(value || '').replace(/[^a-zA-Z0-9_]/g,'_');
}

function proofGalleryItemsFromState(state, galleryId){
  const id=String(galleryId || '');
  let m=id.match(/^lecture_(\d{4}-\d{2}-\d{2})_(.+)$/);
  if(m){
    const day=dayState(state,m[1]);
    return normaliseLectureProof(day.lectureProofs && day.lectureProofs[String(m[2])]).items;
  }
  m=id.match(/^skill_review_(\d{4})(\d{2})(\d{2})_(.+)$/);
  if(m){
    const date=m[1]+'-'+m[2]+'-'+m[3];
    const day=dayState(state,date);
    const draft=day.skillReviewDrafts && day.skillReviewDrafts[m[4]];
    return normaliseLectureProof({items:draft && draft.files || []}).items;
  }
  m=id.match(/^grammar_(.+)$/);
  if(m && m[1] !== 'empty'){
    const note=grammarFindNote(state, m[1]);
    return normaliseLectureProof({items:note && note.files || []}).items;
  }
  m=id.match(/^phrase_(.+)$/);
  if(m && m[1] !== 'empty'){
    const note=phraseFindNote(state, m[1]);
    return normaliseLectureProof({items:note && note.files || []}).items;
  }
  if(id.startsWith('note_files_')){
    const key=id.replace(/^note_files_/, '');
    const note=(state.notes || []).find(n=>galleryKey(n.id || '')===key);
    return normaliseLectureProof({items:note && note.reviewFiles || []}).items;
  }
  return [];
}

function writeProofGalleryItemsToState(state, galleryId, items){
  const id=String(galleryId || '');
  const now=new Date().toLocaleString('ko-KR');
  let m=id.match(/^lecture_(\d{4}-\d{2}-\d{2})_(.+)$/);
  if(m){
    const day=dayState(state,m[1]);
    if(!day.lectureProofs) day.lectureProofs={};
    day.lectureProofs[String(m[2])]={items, savedAt:now};
    upsertLectureNotePage(state, m[1], m[2], now);
    return true;
  }
  m=id.match(/^skill_review_(\d{4})(\d{2})(\d{2})_(.+)$/);
  if(m){
    const date=m[1]+'-'+m[2]+'-'+m[3];
    const day=dayState(state,date);
    if(!day.skillReviewDrafts) day.skillReviewDrafts={};
    const draft=day.skillReviewDrafts[m[4]] || {};
    draft.files=items;
    draft.filesSavedAt=now;
    draft.savedAt=draft.savedAt || now;
    day.skillReviewDrafts[m[4]]=draft;
    return true;
  }
  m=id.match(/^grammar_(.+)$/);
  if(m && m[1] !== 'empty'){
    const note=grammarFindNote(state, m[1]);
    if(note){
      note.files=items;
      note.updatedAt=now;
      note.savedAt=note.savedAt || now;
      return true;
    }
  }
  m=id.match(/^phrase_(.+)$/);
  if(m && m[1] !== 'empty'){
    const note=phraseFindNote(state, m[1]);
    if(note){
      note.files=items;
      note.updatedAt=now;
      note.savedAt=note.savedAt || now;
      return true;
    }
  }
  if(id.startsWith('note_files_')){
    const key=id.replace(/^note_files_/, '');
    const note=(state.notes || []).find(n=>galleryKey(n.id || '')===key);
    if(note){
      note.reviewFiles=items;
      note.savedAt=note.savedAt || now;
      return true;
    }
  }
  return false;
}

function moveProofGalleryPage(galleryId){
  const state=readState();
  const items=proofGalleryItemsFromState(state, galleryId);
  if(items.length < 2){
    alert('옮길 쪽이 없습니다.');
    return false;
  }
  const from=Number(prompt('옮길 쪽 번호'));
  if(!Number.isFinite(from) || from < 1 || from > items.length) return false;
  const to=Number(prompt('보낼 위치'));
  if(!Number.isFinite(to) || to < 1 || to > items.length) return false;
  if(from === to) return false;
  const next=items.slice();
  const picked=next.splice(from-1,1)[0];
  next.splice(to-1,0,picked);
  if(!writeProofGalleryItemsToState(state, galleryId, next)) return false;
  writeState(state);
  return true;
}

function deleteStoredProofFileIfUnused(removed, remaining){
  if(!removed) return;
  const stillUses=(id)=>!!id && (remaining || []).some(item=>item && (String(item.id || '')===String(id) || String(item.originalPdfId || '')===String(id)));
  const id=removed.id ? String(removed.id) : '';
  if(id && !stillUses(id)) deleteLectureFileRecord(id);
  const originalId=removed.originalPdfId ? String(removed.originalPdfId) : '';
  if(originalId && !stillUses(originalId)) deleteLectureFileRecord(originalId);
}

function removeProofGalleryItem(galleryId, itemIndex){
  const state=readState();
  const items=proofGalleryItemsFromState(state, galleryId);
  const index=Number(itemIndex);
  if(!Number.isInteger(index) || index < 0 || index >= items.length) return false;
  const next=items.slice();
  const removed=next.splice(index,1)[0];
  if(!writeProofGalleryItemsToState(state, galleryId, next)) return false;
  deleteStoredProofFileIfUnused(removed, next);
  writeState(state);
  return true;
}

function updateProofGalleryTextItem(galleryId, itemIndex, html){
  const state=readState();
  const items=proofGalleryItemsFromState(state, galleryId);
  const index=Number(itemIndex);
  if(!Number.isInteger(index) || index < 0 || index >= items.length) return false;
  if(!isLectureProofTextPage(items[index])) return false;
  const clean=String(html || '').trim() || '<br>';
  const now=new Date().toLocaleString('ko-KR');
  const next=items.slice();
  next[index]=Object.assign({}, next[index], {
    html:clean,
    text:richHTMLToText(clean),
    savedAt:now,
    updatedAt:now
  });
  if(!writeProofGalleryItemsToState(state, galleryId, next)) return false;
  writeState(state);
  return true;
}

function clearProofGalleryTextItems(galleryId){
  const state=readState();
  const items=proofGalleryItemsFromState(state, galleryId);
  const next=items.filter(item=>!isLectureProofTextPage(item));
  if(next.length === items.length) return false;
  if(!writeProofGalleryItemsToState(state, galleryId, next)) return false;
  writeState(state);
  return true;
}

function lectureProofItemsFor(date, code){
  return normaliseLectureProof(lectureProofFor(date, code)).items;
}

function lectureNoteId(date, code){
  return 'lecture_note_'+date+'_'+code;
}

function upsertLectureNotePage(state, date, code, now){
  if(!state || !date || !code) return false;
  const day=dayState(state,date);
  const lecture=findLecture(code);
  const note=lectureNoteRecordFromDay(day, code);
  const proof=normaliseLectureProof(day.lectureProofs && day.lectureProofs[String(code)]);
  const hasText=!!String(note.text || '').trim();
  const hasProof=proof.items.length > 0;
  const noteId=lectureNoteId(date, code);
  state.notes=(state.notes||[]).filter(n=>String(n.id || '')!==noteId);
  if(!hasText && !hasProof) return false;
  const savedAt=String(note.savedAt || proof.savedAt || now || new Date().toLocaleString('ko-KR'));
  state.notes.unshift({
    id:noteId,
    date,
    lectureDate:date,
    lectureCode:String(code),
    section:'lecture_note',
    title:String(code)+' · '+(lecture.title || '강의 노트'),
    text:hasText ? '['+date+']\n'+note.text : '',
    html:hasText ? note.html : '',
    savedAt
  });
  return true;
}

function lectureNoteRecordFromDay(day, code){
  const raw=day && day.lectureNotes && day.lectureNotes[String(code)] ? day.lectureNotes[String(code)] : null;
  if(!raw) return {html:'', text:'', savedAt:''};
  if(typeof raw === 'object'){
    const html=String(raw.html || '');
    const text=String(raw.text || (html ? richHTMLToText(html) : '') || '');
    return {html:html || esc(text).replace(/\n/g,'<br>'), text, savedAt:String(raw.savedAt || '')};
  }
  const text=String(raw || '');
  return {html:esc(text).replace(/\n/g,'<br>'), text, savedAt:''};
}

function saveLectureNote(date, code, content, isHtml=false){
  const raw=String(content || '').trim();
  const text=isHtml ? richHTMLToText(raw).trim() : raw;
  const html=isHtml ? raw : esc(raw).replace(/\n/g,'<br>');
  const state=readState();
  const day=dayState(state,date);
  const now=new Date().toLocaleString('ko-KR');
  if(!day.lectureNotes) day.lectureNotes={};
  if(text){
    day.lectureNotes[String(code)] = {html, text, savedAt:now};
  }else{
    delete day.lectureNotes[String(code)];
  }
  const hasPage=upsertLectureNotePage(state, date, code, now);
  writeState(state);
  return !!text || hasPage;
}

function clearLectureNote(date, code){
  const state=readState();
  const day=dayState(state,date);
  if(day.lectureNotes) delete day.lectureNotes[String(code)];
  upsertLectureNotePage(state, date, code, new Date().toLocaleString('ko-KR'));
  writeState(state);
}

function startNewLectureNote(){
  const date=activePlan().date;
  const code=byId('skill-lecture-note-code')?.value;
  if(!date || !code) return false;
  const editor=byId('skill-lecture-note-editor');
  if(editor) richNormaliseTables(editor);
  const html=editor ? combinedRichEditorHTMLForSave('skill-lecture-note-editor') : lectureNoteHTMLFor(date, code);
  const text=richHTMLToText(html || '').trim();
  const proof=normaliseLectureProof(lectureProofFor(date, code));
  const hasContent=!!text || proof.items.length > 0;
  const state=readState();
  const day=dayState(state,date);
  const now=new Date().toLocaleString('ko-KR');
  const lecture=findLecture(code);
  if(hasContent){
    const title=String(code)+' · '+String(lecture?.title || '강의 노트');
    state.notes=(state.notes || []).filter(n=>String(n.id || '')!==lectureNoteId(date, code));
    state.notes.unshift({
      id:'lecture_extra_'+date+'_'+String(code)+'_'+Date.now(),
      date,
      lectureDate:date,
      lectureCode:String(code),
      section:'lecture_note',
      title,
      text,
      html:html || '',
      reviewFiles:proof.items,
      savedAt:now
    });
  }
  if(day.lectureNotes) delete day.lectureNotes[String(code)];
  if(day.lectureProofs) delete day.lectureProofs[String(code)];
  day.lectures[String(code)]=hasContent || !!day.lectures[String(code)];
  writeState(state);
  clearRichPageEditors('skill-lecture-note-editor');
  render();
  return true;
}

function isLectureProofPDF(item){
  return String(item && item.type || '').toLowerCase() === 'application/pdf' || /\.pdf$/i.test(String(item && item.name || ''));
}

function isLectureProofImage(item){
  return String(item && item.type || '').startsWith('image/');
}

function fileArrayBuffer(file){
  if(file && typeof file.arrayBuffer === 'function') return file.arrayBuffer();
  return new Promise((resolve,reject)=>{
    const reader=new FileReader();
    reader.onload=()=>resolve(reader.result);
    reader.onerror=()=>reject(reader.error || new Error('파일을 읽을 수 없습니다.'));
    reader.readAsArrayBuffer(file);
  });
}

function canvasToBlob(canvas, type, quality){
  return new Promise(resolve=>canvas.toBlob(resolve, type, quality));
}
function countPdfPagesFromArrayBuffer(buffer){
  try{
    const bytes=new Uint8Array(buffer || []);
    let text='';
    const chunkSize=65536;
    for(let i=0;i<bytes.length;i+=chunkSize){
      const chunk=bytes.subarray(i, Math.min(i+chunkSize, bytes.length));
      text += String.fromCharCode.apply(null, Array.from(chunk));
    }
    const matches=text.match(/\/Type\s*\/Page\b/g);
    return matches && matches.length ? matches.length : 1;
  }catch(e){
    return 1;
  }
}

function pdfPageObjectUrl(url, page){
  const pageNo=parseInt(page, 10);
  if(!pageNo || pageNo < 1) return url;
  return url + '#page=' + pageNo + '&zoom=page-width&toolbar=0&navpanes=0';
}

function pdfFallbackPageItems(id, fileName, fileType, fileSize, savedAt, pageCount){
  const total=Math.max(1, Math.min(parseInt(pageCount, 10) || 1, JY_PDF_PAGE_RENDER_MAX));
  const baseName=String(fileName || 'lecture-file.pdf').replace(/\.pdf$/i,'');
  const items=[];
  for(let pageNo=1; pageNo<=total; pageNo++){
    items.push({
      id,
      storage:'indexedDB',
      name:baseName+' · '+pageNo+'쪽.pdf',
      type:fileType || 'application/pdf',
      size:fileSize || 0,
      savedAt,
      pdfPage:pageNo,
      pdfPages:pageCount || total
    });
  }
  return items;
}


function pdfJsAvailable(){
  return typeof window !== 'undefined' && window.pdfjsLib && typeof window.pdfjsLib.getDocument === 'function';
}

let JY_FILE_MAGNIFIER_EL = null;
let JY_FILE_MAGNIFIER_SOURCE = null;

function fileMagnifierToggleHTML(){
  return '<button class="jy-btn jy-file-magnifier-toggle" type="button" data-file-magnifier-toggle aria-pressed="false">확대</button>';
}

function fileMagnifierToggleElement(){
  const btn=document.createElement('button');
  btn.className='jy-btn jy-file-magnifier-toggle';
  btn.type='button';
  btn.setAttribute('data-file-magnifier-toggle','');
  btn.setAttribute('aria-pressed','false');
  btn.textContent='확대';
  return btn;
}

function fileMagnifierEnsure(){
  if(JY_FILE_MAGNIFIER_EL) return JY_FILE_MAGNIFIER_EL;
  const el=document.createElement('div');
  el.className='jy-file-magnifier jy-hidden';
  el.setAttribute('aria-hidden','true');
  document.body.appendChild(el);
  JY_FILE_MAGNIFIER_EL=el;
  return el;
}

function fileMagnifierImage(source){
  if(!source) return '';
  if(source.tagName === 'CANVAS'){
    try{ return source.toDataURL('image/png'); }catch(e){ return ''; }
  }
  return source.currentSrc || source.src || '';
}

function fileMagnifierRoot(source){
  if(!source) return null;
  const explicit=source.closest('[data-file-magnifier-root]');
  if(explicit) return explicit;
  return source.closest('[data-file-magnifier-card]') || source.closest('.jy-mock-file-preview') || source.closest('.jy-lecture-proof-item');
}

function fileMagnifierSourceForRoot(root){
  if(!root) return null;
  return root.querySelector('.jy-file-magnify-source, img, canvas');
}

function fileMagnifierToggleForRoot(root){
  if(!root) return null;
  return root.querySelector('[data-file-magnifier-toggle]');
}

function fileMagnifierHide(){
  if(JY_FILE_MAGNIFIER_EL) JY_FILE_MAGNIFIER_EL.classList.add('jy-hidden');
  JY_FILE_MAGNIFIER_SOURCE=null;
}

function fileMagnifierDeactivateRoot(root){
  if(!root) return;
  delete root.dataset.fileMagnifierEnabled;
  root.classList.remove('jy-file-magnifier-active');
  const btn=fileMagnifierToggleForRoot(root);
  if(btn){
    btn.textContent='확대';
    btn.setAttribute('aria-pressed','false');
  }
}

function fileMagnifierDeactivateAll(exceptRoot){
  document.querySelectorAll('[data-file-magnifier-root], [data-file-magnifier-card], .jy-mock-file-preview').forEach(root=>{
    if(root !== exceptRoot && !(exceptRoot && exceptRoot.contains(root))) fileMagnifierDeactivateRoot(root);
  });
}

function fileMagnifierSetActive(root, active){
  if(!root) return;
  root.setAttribute('data-file-magnifier-root','');
  if(active){
    fileMagnifierDeactivateAll(root);
    root.dataset.fileMagnifierEnabled='1';
    root.classList.add('jy-file-magnifier-active');
    const btn=fileMagnifierToggleForRoot(root);
    if(btn){
      btn.textContent='확대 끄기';
      btn.setAttribute('aria-pressed','true');
    }
  }else{
    fileMagnifierDeactivateRoot(root);
    fileMagnifierHide();
  }
}

function fileMagnifierEnabled(source){
  const root=fileMagnifierRoot(source);
  return !!(root && root.dataset.fileMagnifierEnabled === '1');
}

function fileMagnifierShow(source, event){
  if(!source || !fileMagnifierEnabled(source)) return;
  const bg=fileMagnifierImage(source);
  if(!bg) return;
  const lens=fileMagnifierEnsure();
  JY_FILE_MAGNIFIER_SOURCE=source;
  lens.style.backgroundImage='url("'+bg.replace(/"/g, '%22')+'")';
  lens.classList.remove('jy-hidden');
  fileMagnifierMove(source, event);
}

function fileMagnifierShowAtCentre(source){
  if(!source || !fileMagnifierEnabled(source)) return;
  const rect=source.getBoundingClientRect();
  if(!rect.width || !rect.height) return;
  fileMagnifierShow(source, {
    clientX:rect.left + rect.width / 2,
    clientY:rect.top + rect.height / 2
  });
}

function fileMagnifierMove(source, event){
  const lens=JY_FILE_MAGNIFIER_EL;
  if(!lens || !source || !event) return;
  const rect=source.getBoundingClientRect();
  if(!rect.width || !rect.height) return;
  const zoom=JY_FILE_MAGNIFIER_ZOOM;
  const size=Math.min(240, Math.max(170, Math.min(window.innerWidth || 220, window.innerHeight || 220) * 0.32));
  const pointerX=Math.max(0, Math.min(rect.width, event.clientX - rect.left));
  const pointerY=Math.max(0, Math.min(rect.height, event.clientY - rect.top));
  const offset=18;
  let left=event.clientX + offset;
  let top=event.clientY + offset;
  if(left + size > window.innerWidth - 8) left = event.clientX - size - offset;
  if(top + size > window.innerHeight - 8) top = event.clientY - size - offset;
  lens.style.width=size+'px';
  lens.style.height=size+'px';
  lens.style.left=Math.max(8, left)+'px';
  lens.style.top=Math.max(8, top)+'px';
  lens.style.backgroundSize=(rect.width*zoom)+'px '+(rect.height*zoom)+'px';
  lens.style.backgroundPosition=(-(pointerX*zoom - size/2))+'px '+(-(pointerY*zoom - size/2))+'px';
}

function bindFileMagnifierToggles(){
  document.querySelectorAll('[data-file-magnifier-toggle]').forEach(btn=>{
    if(btn.dataset.fileMagnifierToggleBound === '1') return;
    btn.dataset.fileMagnifierToggleBound='1';
    btn.addEventListener('click', e=>{
      e.preventDefault();
      const root=btn.closest('[data-file-magnifier-root]') || btn.closest('[data-file-magnifier-card]') || btn.closest('.jy-mock-file-preview') || btn.closest('.jy-lecture-proof-item');
      if(!root) return;
      const willActivate=root.dataset.fileMagnifierEnabled !== '1';
      fileMagnifierSetActive(root, willActivate);
      if(willActivate){
        const source=fileMagnifierSourceForRoot(root);
        fileMagnifierShowAtCentre(source);
      }
    });
  });
}

function ensureFileMagnifierControl(source){
  const root=fileMagnifierRoot(source);
  if(!root) return;
  root.setAttribute('data-file-magnifier-root','');
  if(fileMagnifierToggleForRoot(root)) return;
  const controls=root.querySelector('.jy-lecture-proof-controls, .jy-mock-file-actions, .jy-file-controls');
  if(controls){
    controls.appendChild(fileMagnifierToggleElement());
  }else{
    const wrap=document.createElement('div');
    wrap.className='jy-file-magnifier-control';
    wrap.appendChild(fileMagnifierToggleElement());
    root.appendChild(wrap);
  }
}

function bindFileMagnifiers(){
  const sources=document.querySelectorAll('.jy-lecture-proof-item img, .jy-lecture-proof-pdf-canvas, .jy-mock-file-preview img, .jy-mock-file-preview canvas, .jy-file-magnify-source');
  sources.forEach(source=>{
    source.classList.add('jy-file-magnify-source');
    ensureFileMagnifierControl(source);
    source.setAttribute('title','확대 버튼을 누른 뒤 확인');
    if(source.dataset.fileMagnifierBound === '1') return;
    source.dataset.fileMagnifierBound='1';
    source.addEventListener('pointerenter', e=>{
      if(e.pointerType === 'mouse' && fileMagnifierEnabled(source)) fileMagnifierShow(source, e);
    });
    source.addEventListener('pointermove', e=>{
      if(!fileMagnifierEnabled(source)) return;
      if(JY_FILE_MAGNIFIER_SOURCE === source) fileMagnifierMove(source, e);
      else fileMagnifierShow(source, e);
    });
    source.addEventListener('pointerleave', e=>{
      if(e.pointerType === 'mouse' && JY_FILE_MAGNIFIER_SOURCE === source) fileMagnifierHide();
    });
    source.addEventListener('pointerdown', e=>{
      if(!fileMagnifierEnabled(source)) return;
      fileMagnifierShow(source, e);
      try{ source.setPointerCapture(e.pointerId); }catch(err){}
    });
    source.addEventListener('pointerup', e=>{
      if(e.pointerType !== 'mouse' && JY_FILE_MAGNIFIER_SOURCE === source) fileMagnifierHide();
    });
    source.addEventListener('pointercancel', fileMagnifierHide);
  });
  bindFileMagnifierToggles();
}

async function renderPdfFirstPageCanvas(blob, target, label){
  if(!blob || !target) return false;
  try{
    if(!pdfJsAvailable()) return false;
    const pdfjs=window.pdfjsLib;
    const data=await blob.arrayBuffer();
    const pdf=await pdfjs.getDocument({data, disableWorker:true}).promise;
    const page=await pdf.getPage(1);
    const baseViewport=page.getViewport({scale:1});
    const targetWidth=Math.max(520, Math.min(1100, target.clientWidth || 760));
    const scale=Math.min(2.4, Math.max(1.1, targetWidth / Math.max(1, baseViewport.width)));
    const viewport=page.getViewport({scale});
    const canvas=document.createElement('canvas');
    canvas.width=Math.ceil(viewport.width);
    canvas.height=Math.ceil(viewport.height);
    canvas.className='jy-mock-review-pdf-canvas jy-file-magnify-source';
    canvas.setAttribute('aria-label', label || 'PDF 1쪽 미리보기');
    await page.render({canvasContext:canvas.getContext('2d', {alpha:false}), viewport}).promise;
    target.innerHTML='';
    target.setAttribute('data-file-magnifier-card','');
    target.classList.add('jy-file-magnifier-inline-card');
    target.appendChild(canvas);
    target.appendChild(fileMagnifierToggleElement());
    bindFileMagnifiers();
    return true;
  }catch(e){
    console.warn('PDF preview rendering failed.', e);
    return false;
  }
}

async function renderPdfToLectureProofItems(file){
  if(!pdfJsAvailable()) return null;
  const pdfjs=window.pdfjsLib;
  const originalId=lectureFileId();
  const savedAt=new Date().toLocaleString('ko-KR');
  await putLectureFileRecord({
    id:originalId,
    blob:file,
    name:file.name || 'lecture-file.pdf',
    type:'application/pdf',
    size:file.size || 0,
    savedAt
  });
  const data=await fileArrayBuffer(file);
  const pdf=await pdfjs.getDocument({data, disableWorker:true}).promise;
  const total=pdf.numPages || 0;
  const pageCount=Math.min(total, JY_PDF_PAGE_RENDER_MAX);
  const items=[];
  for(let pageNo=1; pageNo<=pageCount; pageNo++){
    const page=await pdf.getPage(pageNo);
    const baseViewport=page.getViewport({scale:1});
    const scale=Math.min(3.0, Math.max(1.25, 1600 / Math.max(1, baseViewport.width)));
    const viewport=page.getViewport({scale});
    const canvas=document.createElement('canvas');
    canvas.width=Math.ceil(viewport.width);
    canvas.height=Math.ceil(viewport.height);
    const context=canvas.getContext('2d', {alpha:false});
    await page.render({canvasContext:context, viewport}).promise;
    const blob=await canvasToBlob(canvas, 'image/jpeg', 0.94);
    if(!blob) continue;
    const id=lectureFileId();
    const baseName=String(file.name || 'lecture-file.pdf').replace(/\.pdf$/i,'');
    const name=baseName+' · '+pageNo+'쪽.jpg';
    await putLectureFileRecord({id, blob, name, type:'image/jpeg', size:blob.size || 0, savedAt});
    items.push({
      id,
      storage:'indexedDB',
      name,
      type:'image/jpeg',
      size:blob.size || 0,
      savedAt,
      originalPdfId:originalId,
      originalPdfName:file.name || 'lecture-file.pdf',
      pdfPage:pageNo,
      pdfPages:total
    });
  }
  if(total > JY_PDF_PAGE_RENDER_MAX){
    items.push({
      id:originalId,
      storage:'indexedDB',
      name:(file.name || 'lecture-file.pdf')+' · 원본',
      type:'application/pdf',
      size:file.size || 0,
      savedAt,
      keepOriginalPDF:true
    });
  }
  return items.length ? items : null;
}

async function readLectureProofFile(file){
  if(!file) return [];
  const type=String(file.type || '');
  const isPDF=type === 'application/pdf' || /\.pdf$/i.test(String(file.name || ''));
  const isImage=type.startsWith('image/');
  if(!isImage && !isPDF){
    throw new Error('사진 또는 PDF 파일만 제출할 수 있습니다.');
  }
  if(isPDF){
    try{
      const rendered=await renderPdfToLectureProofItems(file);
      if(rendered && rendered.length) return rendered;
    }catch(err){
      console.warn('PDF page rendering failed. Falling back to original PDF storage.', err);
    }
  }
  const id=lectureFileId();
  const savedAt=new Date().toLocaleString('ko-KR');
  const finalType=isPDF ? 'application/pdf' : (file.type || 'image/*');
  await putLectureFileRecord({
    id,
    blob:file,
    name:file.name || 'lecture-file',
    type:finalType,
    size:file.size || 0,
    savedAt
  });
  if(isPDF){
    const data=await fileArrayBuffer(file);
    const pageCount=countPdfPagesFromArrayBuffer(data);
    return pdfFallbackPageItems(id, file.name || 'lecture-file.pdf', finalType, file.size || 0, savedAt, pageCount);
  }
  return [{
    id,
    storage:'indexedDB',
    name:file.name || 'lecture-file',
    type:finalType,
    size:file.size || 0,
    savedAt
  }];
}

function saveLectureProof(date, code, files){
  const list=Array.from(files && files.length !== undefined ? files : (files ? [files] : []));
  if(!list.length) return Promise.resolve(false);
  return Promise.all(list.map(readLectureProofFile)).then(groups=>{
    const valid=groups.flat().filter(Boolean);
    if(!valid.length) return false;
    const state=readState();
    const day=dayState(state,date);
    const existing=normaliseLectureProof(day.lectureProofs && day.lectureProofs[String(code)]);
    const now=new Date().toLocaleString('ko-KR');
    if(!day.lectureProofs) day.lectureProofs={};
    day.lectureProofs[String(code)]={
      items:existing.items.concat(valid),
      savedAt:now
    };
    day.lectures[String(code)] = true;
    upsertLectureNotePage(state, date, code, now);
    writeState(state);
    return true;
  }).catch(err=>{
    if(String(err && err.message || err).toLowerCase().includes('indexeddb')){
      throw new Error('파일 저장소를 사용할 수 없습니다. Safari에서 이 파일을 일반 웹페이지로 다시 열거나, 다른 브라우저에서 열어 주세요.');
    }
    throw err;
  });
}

function clearLectureProof(date, code){
  const state=readState();
  const day=dayState(state,date);
  const proof=normaliseLectureProof(day.lectureProofs && day.lectureProofs[String(code)]);
  proof.items.forEach(item=>{ if(item && item.id) deleteLectureFileRecord(item.id); });
  if(day.lectureProofs) delete day.lectureProofs[String(code)];
  day.lectures[String(code)] = false;
  upsertLectureNotePage(state, date, code, new Date().toLocaleString('ko-KR'));
  writeState(state);
}

function lectureProofItemHTML(item, index, total, galleryId, options=false){
  const opts=(options && typeof options === 'object') ? options : {readOnly:!!options};
  const readOnly=!!opts.readOnly;
  const allowDelete=!!opts.allowDelete;
  const pageInfo=item.pdfPage ? ` · PDF ${esc(item.pdfPage)}쪽${item.pdfPages ? ' / '+esc(item.pdfPages)+'쪽' : ''}` : (item.textPage ? ` · 글 ${esc(item.textPage)}쪽${item.textPages ? ' / '+esc(item.textPages)+'쪽' : ''}` : '');
  const label=`${esc(index+1)} / ${total}${pageInfo}`;
  const isTextPage=isLectureProofTextPage(item);
  const canDeletePage=!!galleryId && (!readOnly || (allowDelete && !isTextPage));
  const deleteBtn=canDeletePage ? `<button class="jy-btn jy-delete jy-proof-delete" type="button" data-proof-delete-gallery="${esc(galleryId)}" data-proof-delete-index="${esc(index)}">${isTextPage ? '글 삭제' : '삭제'}</button>` : '';
  const saveTextBtn=(!readOnly && galleryId && isTextPage) ? `<button class="jy-btn jy-proof-save" type="button" data-proof-save-text="${esc(galleryId)}" data-proof-save-index="${esc(index)}">수정 저장</button>` : '';
  const caption=`<figcaption class="jy-proof-caption"><span>${label}</span><span class="jy-proof-caption-actions">${saveTextBtn}${deleteBtn}</span></figcaption>`;
  const id=String(item.id || '');
  const dataUrl=String(item.dataUrl || '');
  const stampAttrs=readOnly ? '' : ` data-proof-stamp-surface="${esc(galleryId || '')}" data-proof-stamp-index="${esc(index)}"`;
  const stampSurfaceOpen=`<div class="jy-proof-stamp-surface"${stampAttrs}>`;
  const stampSurfaceClose=`${pencilStampLayerHTML(item.stamps)}</div>`;
  if(isLectureProofTextPage(item)){
    return `<figure class="jy-lecture-proof-item jy-proof-text-item">
      ${stampSurfaceOpen}<div class="jy-proof-text-page" ${readOnly ? '' : 'contenteditable="true" spellcheck="false" data-proof-text-editor="'+esc(galleryId || '')+'" data-proof-text-index="'+esc(index)+'"'}>${String(item.html || esc(item.text || '')).trim() || '<br>'}</div>${stampSurfaceClose}
      ${caption}
    </figure>`;
  }
  if(isLectureProofPDF(item)){
    const pageNo=item.pdfPage || 1;
    const pageAttr=`data-lecture-proof-page="${esc(pageNo)}"`;
    const renderAttr=id ? `data-lecture-proof-pdf-page-render="${esc(id)}" ${pageAttr}` : '';
    return `<figure class="jy-lecture-proof-item jy-lecture-proof-pdf-item jy-proof-media-item">
      ${stampSurfaceOpen}<div class="jy-lecture-proof-pdf-page jy-proof-loading" ${renderAttr}>PDF ${esc(pageNo)}쪽 불러오는 중</div>${stampSurfaceClose}
      ${caption}
    </figure>`;
  }
  if(isLectureProofImage(item)){
    const srcAttr=dataUrl ? `src="${esc(dataUrl)}"` : '';
    const idAttr=id ? `data-lecture-proof-image="${esc(id)}"` : '';
    return `<figure class="jy-lecture-proof-item jy-proof-media-item">${stampSurfaceOpen}<img class="${id && !dataUrl ? 'jy-proof-loading' : ''}" ${srcAttr} ${idAttr} alt="강의 노트 파일 ${index+1}">${stampSurfaceClose}${caption}</figure>`;
  }
  return `<figure class="jy-lecture-proof-item jy-lecture-proof-file-item jy-proof-media-item">
    ${stampSurfaceOpen}<div class="jy-lecture-proof-file-box">파일 미리보기 없음</div>${stampSurfaceClose}
    ${caption}
  </figure>`;
}

function lectureProofOriginalPDFs(items){
  const seen=new Set();
  const originals=[];
  (items || []).forEach(item=>{
    const originalId=item && (item.originalPdfId || (isLectureProofPDF(item) ? item.id : ''));
    if(!originalId || seen.has(originalId)) return;
    seen.add(originalId);
    originals.push({
      id:originalId,
      name:item.originalPdfName || item.name || '원본 PDF',
      pages:item.pdfPages || ''
    });
  });
  return originals;
}

function lectureProofOriginalPDFHTML(items){
  return '';
}

function lectureProofSpreadHTML(items, galleryId, options=false){
  const spreads=[];
  for(let i=0;i<items.length;i+=2){
    const left=lectureProofItemHTML(items[i], i, items.length, galleryId, options);
    const right=items[i+1] ? lectureProofItemHTML(items[i+1], i+1, items.length, galleryId, options) : '<div class="jy-lecture-proof-item jy-lecture-proof-item-empty"><div>다음 페이지 없음</div></div>'; 
    spreads.push(`<div class="jy-lecture-proof-spread" data-lecture-proof-spread="${spreads.length+1}">${left}${right}</div>`);
  }
  return spreads.join('');
}

function proofGalleryHTMLFromItems(items, galleryId, emptyText='첨부 없음', options={}){
  const safeItems=(items || []).filter(Boolean);
  if(!safeItems.length){
    return `<div class="jy-lecture-proof-gallery-empty">${esc(emptyText)}</div>`;
  }
  const id=String(galleryId || 'proof');
  const readOnly=!!(options && options.readOnly);
  const allowDelete=!!(options && options.allowDelete);
  const controlsTop=!!(options && options.controlsTop);
  const hasTextPages=safeItems.some(item=>isLectureProofTextPage(item));
  const controlsHTML=`<div class="jy-btns jy-lecture-proof-controls" aria-label="첨부 넘기기">
      <div class="jy-proof-nav-buttons">
        <button class="jy-btn jy-proof-arrow" type="button" data-lecture-proof-prev="${esc(id)}" aria-label="첨부 이전">‹</button>
        <button class="jy-btn jy-proof-arrow" type="button" data-lecture-proof-next="${esc(id)}" aria-label="첨부 다음">›</button>
        ${(!readOnly && hasTextPages) ? `<button class="jy-btn jy-proof-clear-text" type="button" data-proof-clear-text="${esc(id)}">글 삭제</button>` : ''}
        ${!readOnly ? `<button class="jy-btn jy-pencil-star-tool" type="button" data-proof-star-tool="${esc(id)}">별표</button><button class="jy-btn jy-pencil-star-erase" type="button" data-proof-star-erase="${esc(id)}">별표 지우기</button>` : ''}
      </div>
      ${fileMagnifierToggleHTML()}
    </div>`;
  return `<div class="jy-lecture-proof-gallery ${readOnly ? 'jy-proof-readonly' : ''} ${allowDelete ? 'jy-proof-allow-delete' : ''}" data-lecture-proof-gallery="${esc(id)}" data-file-magnifier-root>
    ${lectureProofOriginalPDFHTML(safeItems)}
    ${controlsTop ? controlsHTML : ''}
    <div class="jy-lecture-proof-viewport">
      <div class="jy-lecture-proof-track" data-lecture-proof-track="${esc(id)}">${lectureProofSpreadHTML(safeItems, id, {readOnly, allowDelete})}</div>
    </div>
    ${controlsTop ? '' : controlsHTML}
  </div>`;
}

function lectureProofGalleryHTML(date, code, readOnly=false, options={}){
  const opts=Object.assign({}, options || {}, {readOnly:!!readOnly});
  return proofGalleryHTMLFromItems(lectureProofItemsFor(date, code), 'lecture_'+date+'_'+code, '첨부 없음', opts);
}

function lectureNoteDone(date, code){
  return !!lectureNoteFor(date, code) || lectureProofDone(date, code);
}

function lectureProofDone(date, code){
  return lectureProofItemsFor(date, code).length > 0;
}

function lectureNoteEditorOpen(){
  try{
    return localStorage.getItem(JY_LECTURE_NOTE_EDITOR_OPEN_KEY) !== '0';
  }catch(e){
    return true;
  }
}

function setLectureNoteEditorOpen(open){
  try{
    localStorage.setItem(JY_LECTURE_NOTE_EDITOR_OPEN_KEY, open ? '1' : '0');
  }catch(e){}
}

function localPanelOpen(key, defaultOpen=true){
  try{
    const value=localStorage.getItem(key);
    if(value === null) return defaultOpen;
    return value !== '0';
  }catch(e){
    return defaultOpen;
  }
}

function setLocalPanelOpen(key, open){
  try{
    localStorage.setItem(key, open ? '1' : '0');
  }catch(e){}
}

function skillReviewEditorOpen(section){
  return localPanelOpen(JY_SKILL_REVIEW_EDITOR_OPEN_KEY+'_'+String(section || 'all'), true);
}

function setSkillReviewEditorOpen(section, open){
  setLocalPanelOpen(JY_SKILL_REVIEW_EDITOR_OPEN_KEY+'_'+String(section || 'all'), open);
}

function grammarNoteEditorOpen(){
  return localPanelOpen(JY_GRAMMAR_NOTE_EDITOR_OPEN_KEY, true);
}

function setGrammarNoteEditorOpen(open){
  setLocalPanelOpen(JY_GRAMMAR_NOTE_EDITOR_OPEN_KEY, open);
}

function phraseNoteEditorOpen(){
  return localPanelOpen(JY_PHRASE_NOTE_EDITOR_OPEN_KEY, true);
}

function setPhraseNoteEditorOpen(open){
  setLocalPanelOpen(JY_PHRASE_NOTE_EDITOR_OPEN_KEY, open);
}

function lectureNoteCodeFromNote(note){
  if(!note) return '';
  if(note.lectureCode) return String(note.lectureCode);
  const idMatch=String(note.id || '').match(/^lecture_note_\d{4}-\d{2}-\d{2}_(.+)$/);
  if(idMatch) return idMatch[1];
  const titleMatch=String(note.title || '').match(/^\s*([0-9]{2,4})\s*(?:·|\.|-|\s)/);
  if(titleMatch) return titleMatch[1];
  return '';
}

function lectureNoteDateFromNote(note){
  return String((note && (note.lectureDate || note.date)) || '');
}

function lectureNoteProofForNote(note){
  const code=lectureNoteCodeFromNote(note);
  const date=lectureNoteDateFromNote(note);
  if(!code || !date || !lectureProofDone(date, code)) return '';
  return `<div class="jy-note-proof-book jy-note-tone-lecture">${lectureProofGalleryHTML(date, code, true, {allowDelete:true, controlsTop:true})}</div>`;
}


function lectureNoteSubmissionLecturesForAllSections(date){
  const sections=['listening','reading','writing','speaking'];
  const rows=[];
  const seen=new Set();
  sections.forEach(section=>{
    lectureNoteSubmissionLecturesFor(date, section).forEach(lecture=>{
      const key=String(lecture.code)+'_'+String(lecture.lectureDate || '')+'_'+section;
      if(seen.has(key)) return;
      seen.add(key);
      rows.push(Object.assign({}, lecture, {sectionKey:section}));
    });
  });
  return rows;
}

function lectureScheduleItemsFor(plan){
  const rows=[];
  lectureDisplayItemsForPlan(plan).forEach(item=>{
    const lecture=findLecture(item.code);
    rows.push({type:'watch', code:String(item.code), lecture, title:item.isCarried?'미완료 이월 강의':'강의 수강', carriedFrom:item.carriedFrom || '', isCarried:!!item.isCarried});
  });
  const explicitNoteCodes=(JY_EXPLICIT_LECTURE_NOTE_SCHEDULE[String(plan.date)] || []).map(String);
  lectureNoteSubmissionLecturesForAllSections(plan.date).forEach(lecture=>{
    const lectureDate=String(lecture.lectureDate || plan.date);
    const code=String(lecture.code);
    if(lectureDate === String(plan.date) && !explicitNoteCodes.includes(code)) return;
    rows.push({type:'note', code, lecture, title:'노트 제출', lectureDate});
  });
  return rows;
}

function lectureScheduleItemDone(plan, item){
  if(item.type === 'watch') return isLectureDone(plan.date, item.code);
  if(item.type === 'note') return lectureNoteDone(plan.date, item.code) || lectureProofDone(plan.date, item.code);
  return false;
}

function lectureSchedulePct(plan){
  const items=lectureScheduleItemsFor(plan);
  const total=items.length;
  const done=items.filter(item=>lectureScheduleItemDone(plan, item)).length;
  return {done,total,pct:total?Math.round(done/total*100):0};
}

function homeLectureChecklistHTML(plan){
  const items=lectureScheduleItemsFor(plan);
  if(!items.length) return '<div class="jy-note">오늘 강의 일정 없음</div>';
  return `<div class="jy-list jy-home-lecture-list">${items.map(item=>{
    const l=item.lecture || findLecture(item.code);
    const done=lectureScheduleItemDone(plan,item);
    const isWatch=item.type==='watch';
    const noteDone=lectureNoteDone(plan.date, item.code);
    const proofDone=lectureProofDone(plan.date, item.code);
    const boxAttr=isWatch ? `data-lecture-code="${esc(item.code)}"` : '';
    const boxClass=isWatch ? 'jy-box clickable' : 'jy-box';
    const prefix=isWatch ? (item.carriedFrom ? '미완료 강의' : '강의') : '노트';
    const carryText=isWatch && item.carriedFrom ? ` · ${esc(dateDot(item.carriedFrom))} 이월` : '';
    const small=isWatch
      ? `${done?'완료':'대기'} · 노트 ${noteDone?'완료':'대기'} · 파일 ${proofDone?'있음':'없음'}${carryText}`
      : `노트 ${noteDone?'완료':'대기'} · 파일 ${proofDone?'있음':'없음'}`;
    return `<div class="jy-check jy-home-lecture-item ${item.type==='note'?'jy-lecture-note-schedule-row':''}">
      <div class="${boxClass} ${done?'done':''}" ${boxAttr}></div>
      <span class="${done?'done':''}">${esc(compactLectureLine(item.code, l, prefix))}<small>${small}</small></span>
    </div>`;
  }).join('')}</div>`;
}

function lecturePerItemStatusHTML(plan){
  const codes=planCodesForDisplay(plan);
  if(!codes.length) return '';
  return `<div class="jy-lecture-status-list">${codes.map(code=>{
    const noteDone=lectureNoteDone(plan.date, code);
    const proofDone=lectureProofDone(plan.date, code);
    return `<div class="jy-lecture-status-row"><strong>${esc(code)}</strong><span class="${noteDone?'done':''}">노트 ${noteDone?'완료':'대기'}</span><span class="${proofDone?'done':''}">파일 ${proofDone?'있음':'없음'}</span></div>`;
  }).join('')}</div>`;
}

function lectureCardsHTML(plan){
  const codes=planCodesForDisplay(plan);
  if(!codes.length) return '<div class="jy-note">오늘 배정된 강의가 없습니다.</div>';
  return `<div class="jy-lecture-cards">${codes.map(code=>{
    const l=findLecture(code);
    const note=lectureNoteFor(plan.date, code);
    const proof=lectureProofFor(plan.date, code);
    const done=isLectureDone(plan.date, code);
    return `<article class="jy-lecture-card" data-lecture-card="${esc(code)}">
      <div class="jy-lecture-card-head">
        <div>
          <strong>${esc(code)} · ${esc(l.course || '')}</strong>
          <p>${esc(l.subject || '')} · ${esc(l.title || '')}${l.duration ? ' · '+esc(l.duration) : ''}</p>
        </div>
        <button class="jy-code ${done?'done':''}" type="button" data-lecture-code="${esc(code)}">${done?'완료':'체크'}</button>
      </div>
      <div class="jy-grid-2">
        <div class="jy-field">
          <label class="jy-label">강의별 노트</label>
          <textarea class="jy-textarea jy-lecture-note-input" data-lecture-note-input="${esc(code)}" placeholder="이 강의 노트를 적어주세요.">${esc(note)}</textarea>
          <div class="jy-btns">
            <button class="jy-btn dark" type="button" data-save-lecture-note="${esc(code)}">노트 저장</button>
            <button class="jy-btn" type="button" data-clear-lecture-note="${esc(code)}">노트 삭제</button>
          </div>
        </div>
        <div class="jy-field">
          <label class="jy-label">수강 완료 사진/PDF 제출</label>
          <input class="jy-input" type="file" accept="image/*,.pdf,application/pdf" multiple data-lecture-proof-input="${esc(code)}">
          <div class="jy-proof-view">${lectureProofGalleryHTML(plan.date, code)}</div>

        </div>
      </div>
    </article>`;
  }).join('')}</div>`;
}



const JY_MOCK_TESTS = [
  {id:'mock-test-1', title:'Mock Test 1', date:'2026-05-12', memo:'오늘 풀이'},
  {id:'mock-test-2', title:'Mock Test 2', date:'2026-05-17', memo:'Test2 강의 전 문제풀이'},
  {id:'mock-test-3', title:'Mock Test 3', date:'', memo:'예정'},
  {id:'mock-test-4', title:'Mock Test 4', date:'', memo:'예정'}
];
const JY_MOCK_SECTIONS = [
  {key:'listening', label:'Listening'},
  {key:'reading', label:'Reading'},
  {key:'writing', label:'Writing'},
  {key:'speaking', label:'Speaking'}
];
const JY_MOCK_AUDIO_PARTS = ['part1','part2','part3'];
const JY_READING_TIME_FIELDS = [
  {key:'reading1', label:'P1'},
  {key:'reading2', label:'P2'},
  {key:'reading3', label:'P3'}
];
const JY_WRITING_TIME_FIELDS = [
  {key:'writingTask1', label:'T1'},
  {key:'writingTask2', label:'T2'}
];
const JY_SPEAKING_TIME_FIELDS = [
  {key:'speaking', label:'Speaking'}
];
const JY_MOCK_TIME_LIMITS = {
  listening:{label:'Listening', limit:40},
  reading1:{label:'Reading Passage 1', limit:20},
  reading2:{label:'Reading Passage 2', limit:20},
  reading3:{label:'Reading Passage 3', limit:20},
  writingTask1:{label:'Writing Task 1', limit:20},
  writingTask2:{label:'Writing Task 2', limit:40},
  speaking:{label:'Speaking', limit:14}
};

const JY_TARGET_SCORES = {
  listening:8.0,
  reading:7.0,
  writing:6.0,
  speaking:6.0
};
const JY_TARGET_SCORE_LABELS = {
  listening:'리스닝',
  reading:'리딩',
  writing:'라이팅',
  speaking:'스피킹'
};

function parseBandScore(value){
  const raw=String(value || '').trim();
  if(!raw) return null;
  const match=raw.match(/\d+(?:\.\d+)?/);
  if(!match) return null;
  const score=Number(match[0]);
  if(!Number.isFinite(score)) return null;
  return Math.round(score*10)/10;
}
function formatBandScore(value){
  const score=Number(value);
  if(!Number.isFinite(score)) return '-';
  return score.toFixed(1);
}
function latestMockScoreForSection(section){
  const state=readState();
  let result=null;
  JY_MOCK_TESTS.forEach((def,index)=>{
    const mock=state.mockTests?.[def.id];
    const raw=mock?.scores?.[section];
    if(!String(raw || '').trim()) return;
    const score=parseBandScore(raw);
    result={def, mock, raw:String(raw).trim(), score, order:index};
  });
  return result;
}
function scoreCompareText(score, target){
  if(score === null || score === undefined || !Number.isFinite(Number(score))) return '점수 입력 대기';
  const diff=Math.round((Number(score)-Number(target))*10)/10;
  if(diff>0) return `목표 달성 +${formatBandScore(diff)}`;
  if(diff===0) return '목표 달성';
  return `목표까지 ${formatBandScore(Math.abs(diff))}`;
}
function targetScoreCardHTML(section){
  const target=JY_TARGET_SCORES[section];
  const label=JY_TARGET_SCORE_LABELS[section] || section;
  const latest=latestMockScoreForSection(section);
  const scoreText=latest ? (latest.score === null ? esc(latest.raw) : formatBandScore(latest.score)) : '-';
  const compareText=latest ? scoreCompareText(latest.score, target) : '점수 입력 대기';
  const mockTitle=latest?.def?.title || '최근 모의고사';
  const compareClass=latest?.score !== null && Number.isFinite(Number(latest?.score)) && Number(latest.score) >= Number(target) ? 'good' : '';
  return `<div class="jy-mini-card jy-target-score-card" data-score="${esc(section)}">
    <p class="jy-small">${esc(label)} 목표</p>
    <p class="jy-card-title">${formatBandScore(target)}</p>
    <div class="jy-latest-score">
      <span>최근 모의고사</span>
      <strong>${esc(scoreText)}</strong>
      <small class="${esc(compareClass)}">${esc(mockTitle)} · ${esc(compareText)}</small>
    </div>
  </div>`;
}
function targetScoreGridHTML(){
  return `<section class="jy-grid-4 jy-score-grid">${['listening','reading','writing','speaking'].map(targetScoreCardHTML).join('')}</section>`;
}

function mockDef(id){ return JY_MOCK_TESTS.find(t=>t.id===id) || JY_MOCK_TESTS[0]; }
function activeMockId(){ const s=readState(); return s.activeMockTest || 'mock-test-1'; }
function setActiveMock(id){ const s=readState(); s.activeMockTest=id; writeState(s); }
function emptyMockData(){
  return {
    solved:{listening:false, reading:false, writing:false, speaking:false},
    writing:{task1:'', task2:''},
    speaking:{part1:'', part2:'', part3:''},
    scores:{listening:'', reading:'', writing:'', speaking:''},
    timings:{listening:'', reading:'', reading1:'', reading2:'', reading3:'', writing:'', writingTask1:'', writingTask2:'', speaking:'', speaking1:'', speaking2:'', speaking3:''},
    problems:{listening:'', reading:'', writing:'', speaking:''},
    review:{listening:'', reading:'', writing:'', speaking:'', combined:''},
    reviewFile:null,
    reviewHtml:'',
    reviewDraftSavedAt:'',
    reviewSubmitted:false,
    reviewSubmittedAt:'',
    audio:{part1:null, part2:null, part3:null},
    writingCheckRequested:false,
    writingCheckCount:0,
    writingLastCheckedAt:'',
    speakingCheckRequested:false,
    speakingCheckCount:0,
    speakingLastCheckedAt:'',
    updatedAt:'',
    closed:false
  };
}
function getMockData(state, id){
  if(!state.mockTests) state.mockTests={};
  if(!state.mockTests[id]) state.mockTests[id]=emptyMockData();
  const base=emptyMockData();
  const cur=state.mockTests[id];
  Object.keys(base).forEach(k=>{
    if(cur[k] === undefined) cur[k]=base[k];
    if(base[k] && typeof base[k] === 'object' && !Array.isArray(base[k])){
      Object.keys(base[k]).forEach(sub=>{ if(cur[k][sub] === undefined) cur[k][sub]=base[k][sub]; });
    }
  });
  return cur;
}
function setNested(obj, path, value){
  const parts=path.split('.');
  let target=obj;
  for(let i=0;i<parts.length-1;i++){
    if(!target[parts[i]]) target[parts[i]]={};
    target=target[parts[i]];
  }
  target[parts[parts.length-1]]=value;
}
function mockTimeLimit(key){
  return JY_MOCK_TIME_LIMITS[key] || null;
}
function parseMockMinutes(value){
  const raw=String(value || '').trim();
  if(!raw) return null;
  const hourMatch=raw.match(/(\d+(?:\.\d+)?)\s*(?:시간|h|hr|hrs|hour|hours)/i);
  const minMatch=raw.match(/(\d+(?:\.\d+)?)\s*(?:분|m|min|mins|minute|minutes)/i);
  if(hourMatch || minMatch){
    const h=hourMatch ? Number(hourMatch[1]) : 0;
    const m=minMatch ? Number(minMatch[1]) : 0;
    const total=h*60+m;
    return Number.isFinite(total) ? total : null;
  }
  const num=raw.match(/\d+(?:\.\d+)?/);
  if(!num) return null;
  const minutes=Number(num[0]);
  return Number.isFinite(minutes) ? minutes : null;
}
function formatMockMinute(value){
  const rounded=Math.round(value*10)/10;
  return Number.isInteger(rounded) ? String(rounded) : String(rounded);
}
function mockTimeStatusText(key, value){
  const target=mockTimeLimit(key);
  if(!target) return {cls:'', text:''};
  const minutes=parseMockMinutes(value);
  const limit=formatMockMinute(target.limit);
  if(minutes === null) return {cls:'', text:`${limit}m`};
  const diff=Math.round((minutes-target.limit)*10)/10;
  if(diff>0) return {cls:'bad', text:`${limit}m | +${formatMockMinute(diff)}m`};
  if(diff<0) return {cls:'good', text:`${limit}m | -${formatMockMinute(Math.abs(diff))}m`};
  return {cls:'good', text:`${limit}m | 0m`};
}
function mockTimeStatusHTML(key, value){
  const status=mockTimeStatusText(key, value);
  return `<span class="jy-time-status ${esc(status.cls)}" data-mock-time-status="${esc(key)}">${esc(status.text)}</span>`;
}
function mockTimeInputHTML(label, fieldKey, value, placeholder){
  return `<div class="jy-field"><div class="jy-time-label-row"><label class="jy-label">${esc(label)}</label>${mockTimeStatusHTML(fieldKey, value)}</div><input class="jy-input jy-mock-input jy-mock-time-input" data-mock-field="timings.${esc(fieldKey)}" data-mock-time-key="${esc(fieldKey)}" placeholder="${esc(placeholder)}" value="${esc(value || '')}" spellcheck="false" autocomplete="off" autocorrect="off" autocapitalize="none"></div>`;
}
function autoGrowTextarea(el){
  if(!el) return;
  el.style.height='auto';
  el.style.height=Math.max(el.scrollHeight, 92)+'px';
}
function bindAutoGrowTextareas(){
  document.querySelectorAll('textarea.jy-auto-grow').forEach(el=>{
    autoGrowTextarea(el);
    el.addEventListener('input',()=>autoGrowTextarea(el));
  });
}
function updateMockTimeStatuses(id){
  const state=readState();
  const mock=getMockData(state,id);
  Object.keys(JY_MOCK_TIME_LIMITS).forEach(key=>{
    const status=mockTimeStatusText(key, mock.timings?.[key]);
    document.querySelectorAll('[data-mock-time-status="'+key+'"]').forEach(el=>{
      el.classList.remove('good','bad');
      if(status.cls) el.classList.add(status.cls);
      el.textContent=status.text;
    });
  });
}
function mockReadingTimesComplete(mock){
  return JY_READING_TIME_FIELDS.every(f=>String(mock.timings?.[f.key] || '').trim());
}
function mockWritingTimesComplete(mock){
  return JY_WRITING_TIME_FIELDS.every(f=>String(mock.timings?.[f.key] || '').trim());
}
function mockSpeakingTimesComplete(mock){
  return String(mock.timings?.speaking || '').trim();
}
function mockReviewFileComplete(mock){ return !!mock.reviewFile?.name; }
function richHTMLToText(html){
  const div=document.createElement('div');
  div.innerHTML=String(html || '');
  div.querySelectorAll('[data-jy-pencil-star], .jy-pencil-star').forEach(el=>el.remove());
  return div.textContent || div.innerText || '';
}
function mockReviewTextComplete(mock){ return !!richHTMLToText(mock.reviewHtml || '').trim(); }
function noteContentHTML(note){
  if(note && note.html) return String(note.html || '');
  return esc(note?.text || '').replace(/\n/g,'<br>');
}
function isSkillReviewId(id){ return String(id || '').startsWith('skill:'); }
function skillReviewSectionFromId(id){ return String(id || '').replace(/^skill:/,''); }
function skillReviewDraftFor(date, section){
  const state=readState();
  const day=dayState(state,date);
  if(!day.skillReviewDrafts) day.skillReviewDrafts={};
  return day.skillReviewDrafts[section] || {source:'', html:'', savedAt:'', submittedAt:''};
}
function skillReviewTextComplete(draft){ return !!richHTMLToText(draft?.html || '').trim(); }
function skillReviewGalleryId(date, section){
  return 'skill_review_'+String(date || '').replace(/[^0-9]/g,'')+'_'+String(section || '');
}

function skillReviewFilesFor(date, section){
  const draft=skillReviewDraftFor(date, section);
  return normaliseLectureProof({items:draft.files || [], savedAt:draft.filesSavedAt || draft.savedAt || ''}).items;
}

function skillReviewFilesHTML(date, section){
  return proofGalleryHTMLFromItems(skillReviewFilesFor(date, section), skillReviewGalleryId(date, section), '첨부 없음');
}

function skillReviewFilesComplete(draft){
  return normaliseLectureProof({items:draft?.files || []}).items.length > 0;
}

function addSkillReviewFiles(date, section, files){
  const list=Array.from(files && files.length !== undefined ? files : (files ? [files] : []));
  if(!list.length) return Promise.resolve(false);
  return Promise.all(list.map(readLectureProofFile)).then(groups=>{
    const valid=groups.flat().filter(Boolean);
    if(!valid.length) return false;
    const state=readState();
    const day=dayState(state,date);
    if(!day.skillReviewDrafts) day.skillReviewDrafts={};
    const draft=day.skillReviewDrafts[section] || {};
    draft.files=normaliseLectureProof({items:draft.files || []}).items.concat(valid);
    draft.filesSavedAt=new Date().toLocaleString('ko-KR');
    draft.savedAt=draft.savedAt || draft.filesSavedAt;
    day.skillReviewDrafts[section]=draft;
    writeState(state);
    return true;
  }).catch(err=>{
    if(String(err && err.message || err).toLowerCase().includes('indexeddb')){
      throw new Error('파일 저장소를 사용할 수 없습니다. Safari에서 이 파일을 일반 웹페이지로 다시 열거나 다른 브라우저에서 열어 주세요.');
    }
    throw err;
  });
}

function clearSkillReviewFiles(date, section){
  const state=readState();
  const day=dayState(state,date);
  const draft=day.skillReviewDrafts && day.skillReviewDrafts[section];
  if(!draft) return false;
  normaliseLectureProof({items:draft.files || []}).items.forEach(item=>{ if(item && item.id) deleteLectureFileRecord(item.id); });
  draft.files=[];
  draft.filesSavedAt='';
  day.skillReviewDrafts[section]=draft;
  writeState(state);
  return true;
}

function startNewSkillReviewNote(section){
  section=String(section || '');
  if(!section) return false;
  const date=activePlan().date;
  const editor=byId('mock-review-editor');
  if(editor) richNormaliseTables(editor);
  const sourceEl=byId('note-source');
  const state=readState();
  const day=dayState(state,date);
  if(!day.skillReviewDrafts) day.skillReviewDrafts={};
  const draft=day.skillReviewDrafts[section] || {};
  const html=editor ? combinedRichEditorHTMLForSave('mock-review-editor') : String(draft.html || '');
  const text=richHTMLToText(html || '').trim();
  const files=normaliseLectureProof({items:draft.files || []}).items;
  const source=String(sourceEl?.value || draft.source || '').trim();
  const now=new Date().toLocaleString('ko-KR');
  if(text || files.length){
    state.notes.unshift({
      id:section+'_'+date+'_note_'+Date.now(),
      date,
      section,
      title:source || (SECTION_NAMES[section]+' 오답 노트'),
      text,
      html:html || '',
      reviewFiles:files,
      savedAt:now
    });
  }
  day.skillReviewDrafts[section]={source:'', html:'', savedAt:'', submittedAt:'', files:[], filesSavedAt:''};
  writeState(state);
  clearRichPageEditors('mock-review-editor');
  if(sourceEl) sourceEl.value='';
  render();
  return true;
}
function reviewIdLabel(id){
  if(isSkillReviewId(id)){
    const section=skillReviewSectionFromId(id);
    return SECTION_NAMES[section] || section || '오답노트';
  }
  const def=mockDef(id);
  return def?.title || id || 'Mock Test';
}
function ensureReviewBackups(state){
  if(!state.reviewBackups) state.reviewBackups={};
  return state.reviewBackups;
}
function reviewTextKey(html){
  return richHTMLToText(html || '').replace(/\s+/g,' ').trim();
}
function backupReviewHtml(state, id, html, note){
  const cleanHtml=String(html || '').trim();
  const plain=reviewTextKey(cleanHtml);
  if(!plain) return;
  const backups=ensureReviewBackups(state);
  const key=String(id || 'review');
  if(!backups[key]) backups[key]=[];
  backups[key]=backups[key].filter(item=>reviewTextKey(item.html || '') !== plain);
  backups[key].unshift({
    id:key+'_'+Date.now(),
    html:cleanHtml,
    savedAt:new Date().toLocaleString('ko-KR'),
    note:note || reviewIdLabel(key)
  });
  backups[key]=backups[key].slice(0,2);
}
function storedTextToHtml(value){
  const raw=String(value || '').trim();
  if(!raw) return '';
  if(/<\/?[a-z][\s\S]*>/i.test(raw)) return raw;
  return esc(raw).replace(/\n/g,'<br>');
}
function localStorageReviewRecoveryCandidates(currentHtml){
  const currentKey=reviewTextKey(currentHtml);
  const seen=new Set();
  const out=[];
  const add=(html,label,savedAt)=>{
    const key=reviewTextKey(html);
    if(!key || key===currentKey || seen.has(key)) return;
    seen.add(key);
    out.push({html:String(html || ''), label:String(label || '저장소 후보'), savedAt:String(savedAt || '')});
  };
  const shouldInspectPath=(path)=>/review|wrong|note|mock|오답|노트/i.test(String(path || ''));
  const likelyReviewText=(text)=>{
    const plain=reviewTextKey(text);
    if(plain.length < 8) return false;
    if(plain.length > 12000) return false;
    return true;
  };
  const scan=(value,path,rootKey,depth=0)=>{
    if(depth > 8 || value === null || value === undefined) return;
    if(typeof value === 'string'){
      if(shouldInspectPath(path) && likelyReviewText(value)) add(storedTextToHtml(value), `저장소 후보 · ${rootKey} · ${path}`, '');
      return;
    }
    if(Array.isArray(value)){
      value.slice(0,120).forEach((item,index)=>scan(item, `${path}[${index}]`, rootKey, depth+1));
      return;
    }
    if(typeof value === 'object'){
      Object.entries(value).forEach(([key,val])=>{
        const nextPath=path ? `${path}.${key}` : key;
        if(['html','reviewHtml','text','combined','content','value','draft'].includes(key) && likelyReviewText(val)){
          add(storedTextToHtml(val), `저장소 후보 · ${rootKey} · ${nextPath}`, value.savedAt || value.submittedAt || value.updatedAt || '');
        }
        scan(val,nextPath,rootKey,depth+1);
      });
    }
  };
  for(let i=0;i<localStorage.length;i++){
    const rootKey=localStorage.key(i);
    if(!rootKey) continue;
    const raw=localStorage.getItem(rootKey) || '';
    if(!/review|wrong|note|mock|오답|노트/i.test(rootKey+raw)) continue;
    try{
      scan(JSON.parse(raw),'',rootKey,0);
    }catch(e){
      if(likelyReviewText(raw) && shouldInspectPath(rootKey)) add(storedTextToHtml(raw), `저장소 후보 · ${rootKey}`, '');
    }
  }
  return out.slice(0,20);
}
function mockReviewRecoveryCandidates(id, currentHtml){
  const state=readState();
  const currentKey=reviewTextKey(currentHtml);
  const seen=new Set();
  const out=[];
  const add=(html,label,savedAt)=>{
    const key=reviewTextKey(html);
    if(!key || key===currentKey || seen.has(key)) return;
    seen.add(key);
    out.push({html:String(html || ''), label:String(label || '이전 오답'), savedAt:String(savedAt || '')});
  };
  (state.reviewBackups?.[id] || []).forEach(item=>add(item.html, item.note || '이전 저장본', item.savedAt));
  Object.entries(state.days || {}).forEach(([date,day])=>{
    Object.entries(day.skillReviewDrafts || {}).forEach(([section,draft])=>{
      add(draft.html, `${date} · ${SECTION_NAMES[section] || section} 임시저장`, draft.savedAt || draft.submittedAt || '');
    });
  });
  (state.notes || []).forEach(note=>{
    if(['listening','reading','writing','speaking','mock_review'].includes(note.section)){
      add(note.html || esc(note.text || '').replace(/\n/g,'<br>'), `${note.date || ''} · ${note.title || SECTION_NAMES[note.section] || '노트'}`, note.savedAt || '');
    }
  });
  localStorageReviewRecoveryCandidates(currentHtml).forEach(item=>add(item.html, item.label, item.savedAt));
  return out.slice(0,3);
}
function richToolbarHTML(){
  return `<div class="jy-rich-toolbar" aria-label="오답노트 작성 도구">
    <button class="jy-btn jy-rich-btn" type="button" data-rich-cmd="bold">B</button>
    <button class="jy-btn jy-rich-btn" type="button" data-rich-cmd="italic">I</button>
    <button class="jy-btn jy-rich-btn" type="button" data-rich-cmd="underline">U</button>
    <select class="jy-select jy-rich-select" data-rich-size>
      <option value="">크기</option>
      <option value="2px">2</option>
      <option value="3px">3</option>
      <option value="4px">4</option>
      <option value="5px">5</option>
      <option value="6px">6</option>
      <option value="7px">7</option>
      <option value="8px">8</option>
      <option value="9px">9</option>
      <option value="10px">10</option>
      <option value="11px">11</option>
      <option value="12px">12</option>
      <option value="13px">13</option>
      <option value="14px">14</option>
      <option value="15px">15</option>
      <option value="16px">16</option>
      <option value="17px">17</option>
      <option value="18px">18</option>
      <option value="19px">19</option>
      <option value="20px">20</option>
      <option value="21px">21</option>
      <option value="22px">22</option>
      <option value="23px">23</option>
      <option value="24px">24</option>
      <option value="25px">25</option>
      <option value="26px">26</option>
      <option value="27px">27</option>
      <option value="28px">28</option>
      <option value="29px">29</option>
      <option value="30px">30</option>
    </select>
    <label class="jy-rich-colour-label">글자색<input type="color" value="#222222" data-rich-colour></label>
    <label class="jy-rich-colour-label">형광색<input type="color" value="#fff2a8" data-rich-highlight></label>
    <button class="jy-btn jy-rich-btn" type="button" data-rich-highlight-clear>지우기</button>
    <button class="jy-btn jy-rich-btn" type="button" data-rich-cmd="insertUnorderedList">목록</button>
    <button class="jy-btn jy-rich-btn" type="button" data-rich-cmd="insertOrderedList">번호</button>
    <button class="jy-btn jy-rich-btn" type="button" data-rich-cmd="justifyLeft">왼쪽</button>
    <button class="jy-btn jy-rich-btn" type="button" data-rich-cmd="justifyCenter">중앙</button>
    <button class="jy-btn jy-rich-btn" type="button" data-rich-table>표</button>
    <button class="jy-btn jy-rich-btn" type="button" data-rich-row-add>행+</button>
    <button class="jy-btn jy-rich-btn" type="button" data-rich-row-remove>행-</button>
    <button class="jy-btn jy-rich-btn" type="button" data-rich-col-add>열+</button>
    <button class="jy-btn jy-rich-btn" type="button" data-rich-col-remove>열-</button>
    <button class="jy-btn jy-rich-btn jy-rich-shape-btn" type="button" data-rich-shape="ellipse">타원</button>
    <button class="jy-btn jy-rich-btn jy-rich-shape-btn" type="button" data-rich-shape="triangle">세모</button>
    <button class="jy-btn jy-rich-btn jy-rich-shape-btn" type="button" data-rich-shape="rectangle">네모</button>
    <button class="jy-btn jy-rich-btn jy-pencil-star-tool" type="button" data-rich-star="pink">별표</button>
    <button class="jy-btn jy-rich-btn jy-pencil-star-erase" type="button" data-rich-star-erase>별표 지우기</button>
    <button class="jy-btn jy-rich-btn jy-rich-shape-btn" type="button" data-rich-shape-clear>도형 지우기</button>
  </div>`;
}
function mockReviewRecoveryHTML(id, mock){
  const candidates=mockReviewRecoveryCandidates(id, mock.reviewHtml || '');
  if(!candidates.length) return '';
  return `<details class="jy-review-recovery"><summary>최근 오답 2개 복구</summary><div class="jy-review-recovery-list">${candidates.map((item,index)=>{
    const preview=reviewTextKey(item.html || '').slice(0,80);
    return `<button class="jy-btn jy-delete jy-review-recover-btn" type="button" data-review-recover="${index}">${esc(item.label)}${item.savedAt ? ' · '+esc(item.savedAt) : ''}${preview ? `<small>${esc(preview)}</small>` : ''}</button>`;
  }).join('')}</div></details>`;
}
function skillReviewToolbarHTML(){
  return richToolbarHTML();
}

function lectureRichToolbarHTML(){
  return `<div class="jy-rich-toolbar jy-lecture-rich-toolbar" aria-label="강의 노트 작성 도구">
    <button class="jy-btn jy-rich-btn" type="button" data-lecture-rich-cmd="bold">B</button>
    <button class="jy-btn jy-rich-btn" type="button" data-lecture-rich-cmd="italic">I</button>
    <button class="jy-btn jy-rich-btn" type="button" data-lecture-rich-cmd="underline">U</button>
    <select class="jy-select jy-rich-select" data-lecture-rich-size>
      <option value="">크기</option>
      ${Array.from({length:29},(_,i)=>i+2).map(n=>`<option value="${n}px">${n}</option>`).join('')}
    </select>
    <label class="jy-rich-colour-label">글자색<input type="color" value="#222222" data-lecture-rich-colour></label>
    <label class="jy-rich-colour-label">형광색<input type="color" value="#ffe8f0" data-lecture-rich-highlight></label>
    <button class="jy-btn jy-rich-btn" type="button" data-lecture-rich-highlight-clear>지우기</button>
    <button class="jy-btn jy-rich-btn" type="button" data-lecture-rich-cmd="insertUnorderedList">목록</button>
    <button class="jy-btn jy-rich-btn" type="button" data-lecture-rich-cmd="insertOrderedList">번호</button>
    <button class="jy-btn jy-rich-btn" type="button" data-lecture-rich-cmd="justifyLeft">왼쪽</button>
    <button class="jy-btn jy-rich-btn" type="button" data-lecture-rich-cmd="justifyCenter">중앙</button>
    <button class="jy-btn jy-rich-btn" type="button" data-lecture-rich-table>표</button>
    <button class="jy-btn jy-rich-btn jy-rich-shape-btn" type="button" data-lecture-rich-shape="ellipse">타원</button>
    <button class="jy-btn jy-rich-btn jy-rich-shape-btn" type="button" data-lecture-rich-shape="triangle">세모</button>
    <button class="jy-btn jy-rich-btn jy-rich-shape-btn" type="button" data-lecture-rich-shape="rectangle">네모</button>
    <button class="jy-btn jy-rich-btn jy-pencil-star-tool" type="button" data-lecture-rich-star="pink">별표</button>
    <button class="jy-btn jy-rich-btn jy-pencil-star-erase" type="button" data-lecture-rich-star-erase>별표 지우기</button>
    <button class="jy-btn jy-rich-btn jy-rich-shape-btn" type="button" data-lecture-rich-shape-clear>도형 지우기</button>
  </div>`;
}

let JY_LECTURE_RICH_RANGE=null;
let JY_LECTURE_RICH_ACTIVE_EDITOR_ID='';
function lectureRichEditors(){ return Array.from(document.querySelectorAll('#skill-lecture-note-editor, #skill-lecture-note-editor-page2')); }
function lectureRichEditor(){
  const sel=window.getSelection ? window.getSelection() : null;
  if(sel && sel.rangeCount){
    const range=sel.getRangeAt(0);
    const found=lectureRichEditors().find(editor=>richNodeInsideEditor(range.commonAncestorContainer, editor));
    if(found){ JY_LECTURE_RICH_ACTIVE_EDITOR_ID=found.id; return found; }
  }
  const stored=JY_LECTURE_RICH_ACTIVE_EDITOR_ID ? byId(JY_LECTURE_RICH_ACTIVE_EDITOR_ID) : null;
  return stored || byId('skill-lecture-note-editor');
}
function markLectureRichActiveEditor(editor){ if(editor && editor.id) JY_LECTURE_RICH_ACTIVE_EDITOR_ID=editor.id; }
function lectureRichSaveSelection(){
  const editor=lectureRichEditor();
  const sel=window.getSelection ? window.getSelection() : null;
  if(!editor || !sel || !sel.rangeCount) return;
  const range=sel.getRangeAt(0);
  if(richNodeInsideEditor(range.commonAncestorContainer, editor)) JY_LECTURE_RICH_RANGE=range.cloneRange();
}
function lectureRichRestoreSelection(){
  const editor=lectureRichEditor();
  const sel=window.getSelection ? window.getSelection() : null;
  if(!editor || !sel || !JY_LECTURE_RICH_RANGE) return false;
  editor.focus();
  sel.removeAllRanges();
  sel.addRange(JY_LECTURE_RICH_RANGE);
  return true;
}
function lectureRichSaveCurrent(){
  const editor=lectureRichEditor();
  const code=byId('skill-lecture-note-code')?.value;
  if(!editor || !code) return false;
  richNormaliseTables(editor);
  const html=combinedRichEditorHTMLForSave('skill-lecture-note-editor');
  const ok=saveLectureNote(activePlan().date, code, html, true);
  const status=byId('skill-lecture-note-status');
  if(status) status.textContent=ok ? '저장됨' : '글 삭제됨';
  return ok;
}
function lectureRichCommand(cmd){
  const editor=lectureRichEditor();
  if(!editor) return;
  lectureRichRestoreSelection();
  document.execCommand(cmd, false, null);
  lectureRichSaveSelection();
  lectureRichSaveCurrent();
}
function lectureRichApplyColour(command, value){
  const editor=lectureRichEditor();
  if(!editor) return;
  lectureRichRestoreSelection();
  try{ document.execCommand('styleWithCSS', false, true); }catch(e){}
  document.execCommand(command, false, value);
  lectureRichSaveSelection();
  lectureRichSaveCurrent();
}
function lectureRichApplySize(value){
  const editor=lectureRichEditor();
  if(!editor || !value) return;
  lectureRichRestoreSelection();
  document.execCommand('fontSize', false, '7');
  editor.querySelectorAll('font[size="7"]').forEach(el=>{ el.removeAttribute('size'); el.style.fontSize=value; });
  lectureRichSaveSelection();
  lectureRichSaveCurrent();
}
function lectureRichInsertPageBreak(){
  const editor=lectureRichEditor();
  if(!editor) return false;
  lectureRichRestoreSelection();
  editor.focus();
  document.execCommand('insertHTML', false, '<div class="jy-editor-page-break" data-jy-page-break="1" contenteditable="false"><span>쪽 나눔</span></div><p><br></p>');
  richNormaliseTables(editor);
  lectureRichSaveSelection();
  lectureRichSaveCurrent();
  return true;
}
function lectureRichInsertTable(){
  const editor=lectureRichEditor();
  if(!editor) return;
  lectureRichRestoreSelection();
  document.execCommand('insertHTML', false, richEditorTableHTML(3,3));
  richNormaliseTables(editor);
  lectureRichSaveSelection();
  lectureRichSaveCurrent();
}
function lectureRichApplyShape(shape){
  const editor=lectureRichEditor();
  if(!editor || !['ellipse','triangle','rectangle'].includes(shape)) return;
  lectureRichRestoreSelection();
  const sel=window.getSelection ? window.getSelection() : null;
  if(!sel || !sel.rangeCount) return;
  const range=sel.getRangeAt(0);
  if(range.collapsed || !richNodeInsideEditor(range.commonAncestorContainer, editor)) return;
  const span=document.createElement('span');
  span.className='jy-rich-shape jy-rich-shape-'+shape;
  span.setAttribute('data-jy-shape', shape);
  try{
    const fragment=range.extractContents();
    richRemoveDescendantShapes(fragment);
    span.appendChild(fragment);
    range.insertNode(span);
    richSetCaretAfter(span);
  }catch(e){}
  lectureRichSaveSelection();
  lectureRichSaveCurrent();
}
function lectureRichClearShape(){
  const editor=lectureRichEditor();
  if(!editor) return;
  lectureRichRestoreSelection();
  const sel=window.getSelection ? window.getSelection() : null;
  if(!sel || !sel.rangeCount) return;
  const range=sel.getRangeAt(0);
  const existing=richNearestShapeAncestor(range, editor);
  if(existing) richUnwrapElement(existing);
  lectureRichSaveSelection();
  lectureRichSaveCurrent();
}
function bindLectureRichEditor(){
  const editors=lectureRichEditors();
  const editor=byId('skill-lecture-note-editor');
  if(!editor) return;
  editors.forEach(item=>{
    richNormaliseTables(item);
    const autosave=()=>{ markLectureRichActiveEditor(item); lectureRichSaveSelection(); lectureRichSaveCurrent(); };
    item.onfocus=()=>markLectureRichActiveEditor(item);
    item.onblur=autosave;
    item.oninput=autosave;
    item.oncompositionend=autosave;
    item.onmouseup=()=>{ markLectureRichActiveEditor(item); lectureRichSaveSelection(); };
    item.onkeyup=autosave;
    item.onclick=e=>{
      markLectureRichActiveEditor(item);
      if(pencilStampHandleEditorStarClick(e, lectureRichSaveCurrent)) return;
      if(pencilStampAddToEditor(item, e, lectureRichSaveCurrent)) return;
      lectureRichSaveSelection();
    };
    item.onpaste=e=>{
      markLectureRichActiveEditor(item);
      const text=e.clipboardData?.getData('text/plain') || '';
      const table=richPlainTableToHTML(text);
      if(table){
        e.preventDefault();
        lectureRichRestoreSelection();
        document.execCommand('insertHTML', false, table);
        richNormaliseTables(item);
        autosave();
      }
    };
  });
  const wrap=editor.closest('.jy-lecture-editor-card') || document;
  wrap.querySelectorAll('[data-lecture-rich-cmd]').forEach(btn=>{
    btn.onpointerdown=e=>{ e.preventDefault(); lectureRichSaveSelection(); };
    btn.onmousedown=e=>{ e.preventDefault(); lectureRichSaveSelection(); };
    btn.onclick=()=>lectureRichCommand(btn.dataset.lectureRichCmd);
  });
  const size=wrap.querySelector('[data-lecture-rich-size]');
  if(size){
    size.onmousedown=()=>lectureRichSaveSelection();
    size.onchange=()=>{ lectureRichApplySize(size.value); size.value=''; };
  }
  const colour=wrap.querySelector('[data-lecture-rich-colour]');
  if(colour){
    let colourChanged=false;
    const rememberColour=()=>{ colourChanged=false; lectureRichSaveSelection(); };
    const applyColour=()=>{ colourChanged=true; lectureRichApplyColour('foreColor', colour.value || '#222222'); };
    colour.onpointerdown=rememberColour;
    colour.onmousedown=rememberColour;
    colour.oninput=applyColour;
    colour.onchange=applyColour;
    colour.onblur=()=>{
      if(!colourChanged) lectureRichApplyColour('foreColor', colour.value || '#222222');
      colourChanged=false;
    };
  }
  const highlight=wrap.querySelector('[data-lecture-rich-highlight]');
  if(highlight){
    let highlightChanged=false;
    const rememberHighlight=()=>{ highlightChanged=false; lectureRichSaveSelection(); };
    const applyHighlight=()=>{ highlightChanged=true; lectureRichApplyColour('hiliteColor', highlight.value || '#ffe8f0'); };
    highlight.onpointerdown=rememberHighlight;
    highlight.onmousedown=rememberHighlight;
    highlight.oninput=applyHighlight;
    highlight.onchange=applyHighlight;
    highlight.onblur=()=>{
      if(!highlightChanged) lectureRichApplyColour('hiliteColor', highlight.value || '#ffe8f0');
      highlightChanged=false;
    };
  }
  const highlightClear=wrap.querySelector('[data-lecture-rich-highlight-clear]');
  if(highlightClear){
    highlightClear.onpointerdown=e=>{ e.preventDefault(); lectureRichSaveSelection(); };
    highlightClear.onmousedown=e=>{ e.preventDefault(); lectureRichSaveSelection(); };
    highlightClear.onclick=()=>lectureRichApplyColour('hiliteColor', 'transparent');
  }
  const table=wrap.querySelector('[data-lecture-rich-table]');
  if(table){
    table.onpointerdown=e=>{ e.preventDefault(); lectureRichSaveSelection(); };
    table.onmousedown=e=>{ e.preventDefault(); lectureRichSaveSelection(); };
    table.onclick=lectureRichInsertTable;
  }
  wrap.querySelectorAll('[data-lecture-rich-shape]').forEach(btn=>{
    btn.onpointerdown=e=>{ e.preventDefault(); lectureRichSaveSelection(); };
    btn.onmousedown=e=>{ e.preventDefault(); lectureRichSaveSelection(); };
    btn.onclick=()=>lectureRichApplyShape(btn.dataset.lectureRichShape);
  });
  wrap.querySelectorAll('[data-lecture-rich-star]').forEach(btn=>{
    btn.onpointerdown=e=>{ e.preventDefault(); lectureRichSaveSelection(); };
    btn.onmousedown=e=>{ e.preventDefault(); lectureRichSaveSelection(); };
    btn.onclick=()=>pencilStampToggleMode('star', btn.dataset.lectureRichStar || 'pink');
  });
  wrap.querySelectorAll('[data-lecture-rich-star-erase]').forEach(btn=>{
    btn.onpointerdown=e=>{ e.preventDefault(); lectureRichSaveSelection(); };
    btn.onmousedown=e=>{ e.preventDefault(); lectureRichSaveSelection(); };
    btn.onclick=()=>pencilStampToggleMode('erase');
  });
  const shapeClear=wrap.querySelector('[data-lecture-rich-shape-clear]');
  if(shapeClear){
    shapeClear.onpointerdown=e=>{ e.preventDefault(); lectureRichSaveSelection(); };
    shapeClear.onmousedown=e=>{ e.preventDefault(); lectureRichSaveSelection(); };
    shapeClear.onclick=()=>{
      lectureRichClearShape();
    };
  }
  pencilStampRefreshButtons();
}
function bindLectureProofGalleryControls(){
  bindLectureProofGalleryFiles();
  bindFileMagnifiers();
  bindProofPencilStamps();
  document.querySelectorAll('[data-lecture-proof-prev],[data-lecture-proof-next]').forEach(btn=>{
    btn.onclick=()=>{
      const code=btn.dataset.lectureProofPrev || btn.dataset.lectureProofNext;
      const track=Array.from(document.querySelectorAll('[data-lecture-proof-track]')).find(el=>String(el.dataset.lectureProofTrack)===String(code));
      if(!track) return;
      const direction=btn.dataset.lectureProofNext ? 1 : -1;
      const first=track.querySelector('.jy-lecture-proof-spread');
      const amount=(first && first.getBoundingClientRect().width) || track.clientWidth || 260;
      track.scrollBy({left:direction*amount, behavior:'smooth'});
    };
  });
  document.querySelectorAll('[data-proof-delete-gallery]').forEach(btn=>{
    btn.onclick=()=>{
      if(!confirm('이 첨부 페이지를 삭제할까요?')) return;
      if(removeProofGalleryItem(btn.dataset.proofDeleteGallery, btn.dataset.proofDeleteIndex)) render();
    };
  });
  document.querySelectorAll('[data-proof-save-text]').forEach(btn=>{
    btn.onclick=()=>{
      const figure=btn.closest('.jy-proof-text-item');
      const editor=figure?.querySelector?.('[data-proof-text-editor]');
      if(!editor) return;
      if(updateProofGalleryTextItem(btn.dataset.proofSaveText, btn.dataset.proofSaveIndex, editor.innerHTML)) render();
    };
  });
  document.querySelectorAll('[data-proof-clear-text]').forEach(btn=>{
    btn.onclick=()=>{
      if(!confirm('작성 글만 삭제할까요? 사진과 PDF는 유지됩니다.')) return;
      if(clearProofGalleryTextItems(btn.dataset.proofClearText)) render();
    };
  });
  document.querySelectorAll('[data-proof-move-page]').forEach(btn=>{
    btn.onclick=()=>{
      if(moveProofGalleryPage(btn.dataset.proofMovePage)) render();
    };
  });
}

function mockReviewComplete(mock){ return !!mock.reviewSubmitted; }
function mockSolveComplete(mock){ return JY_MOCK_SECTIONS.every(s=>String(mock.scores?.[s.key] || '').trim()); }
function mockSectionComplete(mock, section){
  return !!String(mock.scores?.[section] || '').trim();
}
function mockAllComplete(mock){ return JY_MOCK_SECTIONS.every(s=>mockSectionComplete(mock, s.key)); }
function syncMockWithHome(state, id){
  const def=mockDef(id);
  const mock=getMockData(state,id);
  if(def.date){
    const day=dayState(state, def.date);
    JY_MOCK_SECTIONS.forEach(sec=>{ day.submissions[sec.key]=mockSectionComplete(mock, sec.key); });
    day.submissions.mocktest_solve=mockSolveComplete(mock);
    day.submissions.mock_review=mockReviewComplete(mock);
    day.submissions.mocktest=mockAllComplete(mock);
  }
  const today=activeDate();
  const todayPlan=JY_PLAN.find(p=>p.date===today);
  if(todayPlan && (todayPlan.tasks || []).some(t=>t.section === 'mock_review')){
    dayState(state, today).submissions.mock_review=mockReviewComplete(mock);
  }
}
function saveMockValue(id, path, value){
  const state=readState();
  const mock=getMockData(state,id);
  setNested(mock, path, value);
  mock.updatedAt=new Date().toLocaleString('ko-KR');
  syncMockWithHome(state,id);
  writeState(state);
  updateMockLiveStatus(id);
}
function toggleMockSolved(id, section){
  const state=readState();
  const mock=getMockData(state,id);
  mock.solved[section]=!mock.solved[section];
  mock.updatedAt=new Date().toLocaleString('ko-KR');
  syncMockWithHome(state,id);
  writeState(state);
  updateMockLiveStatus(id);
}
function updateMockLiveStatus(id){
  const state=readState();
  const mock=getMockData(state,id);
  JY_MOCK_SECTIONS.forEach(sec=>{
    const sectionDone=mockSectionComplete(mock, sec.key);
    const solved=!!mock.solved?.[sec.key];
    document.querySelectorAll('[data-mock-status="'+sec.key+'"]').forEach(el=>{
      el.classList.toggle('done', sectionDone);
      el.textContent=sectionDone?'기록 완료':'기록 중';
    });
    document.querySelectorAll('[data-mock-solved-status="'+sec.key+'"]').forEach(el=>{
      el.classList.toggle('done', solved);
      el.textContent=solved?'완료':'미완료';
    });
  });
  document.querySelectorAll('[data-mock-status="mocktest"]').forEach(el=>{
    const done=mockAllComplete(mock);
    el.classList.toggle('done', done);
    el.textContent=done?'전체 완료':'진행 중';
  });
  document.querySelectorAll('[data-mock-status="mocktest_solve"]').forEach(el=>{
    const done=mockSolveComplete(mock);
    el.classList.toggle('done', done);
    el.textContent=done?'점수 입력 완료':'점수 미입력';
  });
  document.querySelectorAll('[data-mock-status="mock_review"]').forEach(el=>{
    const done=mockReviewComplete(mock);
    el.classList.toggle('done', done);
    el.textContent=done?'제출 완료':'대기';
  });
  updateMockTimeStatuses(id);
}
function mockGuideHTML(){
  return `<section class="jy-card jy-mock-guide">
    <h3 class="jy-card-title">시험 기준</h3>
    <div class="jy-table-scroll"><table class="jy-table jy-mock-guide-table">
      <tbody>
        <tr><th>Listening</th><td>40문항 · 30분 풀이 + 10분 답안 옮기기</td></tr>
        <tr><th>Reading</th><td>40문항 · 60분 · 3 passages</td></tr>
        <tr><th>Writing</th><td>60분 · Task 1 150단어 이상 · Task 2 250단어 이상</td></tr>
        <tr><th>Speaking</th><td>3파트 · 11~14분 · Part 2 준비 1분</td></tr>
      </tbody>
    </table></div>
  </section>`;
}

function countWritingWords(text){
  const matches=String(text || '').trim().match(/[A-Za-z]+(?:[-'][A-Za-z]+)?|\d+(?:,\d{3})*(?:\.\d+)?/g);
  return matches ? matches.length : 0;
}
function writingTarget(taskKey){ return taskKey === 'task2' ? 250 : 150; }
function writingWordStatus(taskKey, text){
  const count=countWritingWords(text);
  const target=writingTarget(taskKey);
  if(count >= target) return {count, target, cls:'good', text:`${count} / ${target} words · 충족`};
  return {count, target, cls:'bad', text:`${count} / ${target} words · ${target-count} 부족`};
}
function writingWordCountHTML(taskKey, text){
  const status=writingWordStatus(taskKey, text);
  return `<p class="jy-word-count ${esc(status.cls)}" data-writing-word-count="${esc(taskKey)}">${esc(status.text)}</p>`;
}
function writingTextareaHTML(taskKey, label, value){
  return `<div class="jy-field"><label class="jy-label">${esc(label)}</label><textarea class="jy-textarea jy-mock-input jy-writing-textarea jy-auto-grow" data-mock-field="writing.${esc(taskKey)}" data-writing-word-target="${esc(taskKey)}" spellcheck="false" autocomplete="off" autocorrect="off" autocapitalize="none">${esc(value || '')}</textarea>${writingWordCountHTML(taskKey, value)}</div>`;
}
function splitWritingSentences(text){
  const raw=String(text || '').replace(/\s+/g,' ').trim();
  if(!raw) return [];
  const matches=raw.match(/[^.!?]+[.!?]+|[^.!?]+$/g);
  return (matches || [raw]).map(s=>s.trim()).filter(Boolean);
}
function applyWritingCorrections(sentence){
  const original=String(sentence || '').trim();
  if(!original) return '';
  const compact=original.replace(/\s+/g,' ').trim();
  if(/this charts show that change of admissions on UK university courses between 2007 and 2014\.?$/i.test(compact)){
    return 'The chart shows changes in admissions to UK university courses between 2007 and 2014.';
  }
  if(/in 2007, most popular course was law\.?$/i.test(compact)){
    return 'In 2007, the most popular course was law.';
  }
  if(/but admission of nursing course more extremly increased than admission of law course in 2014\.?$/i.test(compact)){
    return 'However, admissions to nursing courses increased much more sharply than admissions to law courses by 2014.';
  }
  if(/also this present almost 250,000 people go to nursing course in 2014\.?$/i.test(compact)){
    return 'It also shows that almost 250,000 people were admitted to nursing courses in 2014.';
  }
  if(/it is more than 4 times 7years ago\.?$/i.test(compact)){
    return 'This was more than four times the figure seven years earlier.';
  }
  const preclinical=compact.match(/^however the pre-clinical medicine course is lower than in (\d{4})\.?$/i);
  if(preclinical){
    return `However, admissions to pre-clinical medicine were lower than in ${preclinical[1]}.`;
  }

  if(/there was many problem with gender equality quite a long time\.?$/i.test(compact)){
    return 'There have been many problems with gender equality for a long time.';
  }
  if(/these day gender equality has relived, but still remain a few problem with women rights and opportunities\.?$/i.test(compact)){
    return "These days, gender equality has improved, but some problems with women's rights and opportunities still remain.";
  }
  if(/firstly, many women who pregnent do not respect and consider from public facilities\.?$/i.test(compact)){
    return 'Firstly, many pregnant women are not respected or considered in public facilities.';
  }
  if(/in korea, we have pregnent women sheet on the train and bus\.?$/i.test(compact)){
    return 'In Korea, there are seats for pregnant women on trains and buses.';
  }
  if(/unportantly many people ignore that rule\.?$/i.test(compact)){
    return 'Unfortunately, many people ignore that rule.';
  }
  let t=compact;
  t=t.replace(/^there\b/, 'There');
  t=t.replace(/^These day\b/i, 'These days');
  t=t.replace(/\bThere was many problem\b/gi, 'There have been many problems');
  t=t.replace(/\bquite a long time\b/gi, 'for a long time');
  t=t.replace(/\bhas relived\b/gi, 'has improved');
  t=t.replace(/\bstill remain a few problem\b/gi, 'some problems still remain');
  t=t.replace(/\bwomen rights\b/gi, "women's rights");
  t=t.replace(/\bpregnent\b/gi, 'pregnant');
  t=t.replace(/\bdo not respect and consider from\b/gi, 'are not respected or considered in');
  t=t.replace(/\bsheet on the train and bus\b/gi, 'seats on trains and buses');
  t=t.replace(/\bunportantly\b/gi, 'Unfortunately,');
  t=t.replace(/\bcannot using\b/gi, 'cannot use');
  t=t.replace(/\bwoman could not protects\b/gi, 'women cannot protect themselves');
  t=t.replace(/\bsex crime\b/gi, 'sexual crimes');
  t=t.replace(/^This charts show that\b/i,'The chart shows');
  t=t.replace(/^This charts show\b/i,'The chart shows');
  t=t.replace(/^This chart show\b/i,'The chart shows');
  t=t.replace(/\bchange of admissions on\b/gi,'changes in admissions to');
  t=t.replace(/\badmissions on\b/gi,'admissions to');
  t=t.replace(/\bshows that changes in\b/gi,'shows changes in');
  t=t.replace(/\bmost popular course was\b/gi,'the most popular course was');
  t=t.replace(/^But\b/i,'However,');
  t=t.replace(/^Also this present\b/i,'It also shows');
  t=t.replace(/\bthis present\b/gi,'this shows');
  t=t.replace(/\bextremly\b/gi,'extremely');
  t=t.replace(/\bmore extremely increased than\b/gi,'increased much more sharply than');
  t=t.replace(/\bmore extremly increased than\b/gi,'increased much more sharply than');
  t=t.replace(/\badmission of ([a-z-]+) course\b/gi,'admissions to $1 courses');
  t=t.replace(/\bpeople go to ([a-z-]+) course\b/gi,'people were admitted to $1 courses');
  t=t.replace(/\b7years\b/gi,'seven years');
  t=t.replace(/\b4 times\b/gi,'four times');
  t=t.replace(/^However the\b/i,'However, the');
  t=t.replace(/\bpre-clinical medicine course is lower than\b/gi,'figure for pre-clinical medicine was lower than');
  t=t.replace(/\bThis charts\b/g,'These charts');
  t=t.replace(/\bthis charts\b/g,'these charts');
  t=t.replace(/\bThese chart\b/g,'These charts');
  t=t.replace(/\bthese chart\b/g,'these charts');
  t=t.replace(/\bchart show\b/g,'chart shows');
  t=t.replace(/\bcharts shows\b/g,'charts show');
  t=t.replace(/\bI\b/g,'I');
  t=t.replace(/^([a-z])/, function(match){ return match.toUpperCase(); });
  return t;
}
function writingDiffTokens(text){
  return String(text || '').match(/[A-Za-z]+(?:[-'][A-Za-z]+)?|\d+(?:,\d{3})*(?:\.\d+)?|[^\sA-Za-z0-9]/g) || [];
}
function normaliseDiffToken(token){
  return String(token || '');
}
function formatDiffTokens(tokens){
  const text=(tokens || []).join(' ');
  return text
    .replace(/\s+([.,!?;:%)\]])/g,'$1')
    .replace(/([([{])\s+/g,'$1')
    .replace(/\s+/g,' ')
    .trim();
}
function writingTokenDiff(original, corrected){
  const a=writingDiffTokens(original);
  const b=writingDiffTokens(corrected);
  const m=a.length;
  const n=b.length;
  const dp=Array.from({length:m+1},()=>Array(n+1).fill(0));
  for(let i=m-1;i>=0;i--){
    for(let j=n-1;j>=0;j--){
      if(normaliseDiffToken(a[i])===normaliseDiffToken(b[j])) dp[i][j]=dp[i+1][j+1]+1;
      else dp[i][j]=Math.max(dp[i+1][j],dp[i][j+1]);
    }
  }
  const parts=[];
  let i=0;
  let j=0;
  while(i<m || j<n){
    if(i<m && j<n && normaliseDiffToken(a[i])===normaliseDiffToken(b[j])){
      const start=i;
      while(i<m && j<n && normaliseDiffToken(a[i])===normaliseDiffToken(b[j])){ i++; j++; }
      parts.push({type:'same', text:formatDiffTokens(a.slice(start,i))});
    }else{
      const oldStart=i;
      const newStart=j;
      while(i<m || j<n){
        if(i<m && j<n && normaliseDiffToken(a[i])===normaliseDiffToken(b[j])) break;
        if(i<m && (j>=n || dp[i+1][j] >= dp[i][j+1])) i++;
        else if(j<n) j++;
        if(i<m && j<n && normaliseDiffToken(a[i])===normaliseDiffToken(b[j])) break;
      }
      parts.push({
        type:'change',
        oldText:formatDiffTokens(a.slice(oldStart,i)),
        newText:formatDiffTokens(b.slice(newStart,j))
      });
    }
  }
  return parts.filter(part=>part.text || part.oldText || part.newText);
}
function writingDiffHTML(original, corrected){
  const parts=writingTokenDiff(original, corrected);
  return parts.map(part=>{
    if(part.type==='same') return `<span class="jy-writing-same">${esc(part.text)}</span>`;
    const oldText=String(part.oldText || '').trim();
    const newText=String(part.newText || '').trim();
    if(!oldText && newText) return `<span class="jy-writing-insert">${esc(newText)}</span>`;
    if(oldText && !newText) return `<span class="jy-writing-delete">${esc(oldText)}</span>`;
    return `<span class="jy-writing-change"><span class="jy-writing-old">${esc(oldText)}</span><span class="jy-writing-new">${esc(newText)}</span></span>`;
  }).join(' ');
}
function writingCorrectionItemsHTML(text){
  const sentences=splitWritingSentences(text);
  const items=sentences.map(sentence=>({original:sentence, corrected:applyWritingCorrections(sentence)})).filter(item=>item.corrected && item.corrected !== item.original);
  if(!items.length) return '<p class="jy-small">규칙 기반으로 표시할 수정 후보가 없습니다.</p>';
  return items.map(item=>`<div class="jy-writing-correction-item"><p class="jy-writing-diff-line">${writingDiffHTML(item.original, item.corrected)}</p></div>`).join('');
}
function writingCorrectionPanelHTML(mock){
  if(!mock.writingCheckRequested) return '';
  return `<div class="jy-writing-check-result">
    <div class="jy-grid-2">
      <div><strong>Task 1</strong>${writingCorrectionItemsHTML(mock.writing?.task1 || '')}</div>
      <div><strong>Task 2</strong>${writingCorrectionItemsHTML(mock.writing?.task2 || '')}</div>
    </div>
  </div>`;
}
function applySpeakingCorrections(sentence){
  const original=String(sentence || '').trim();
  if(!original) return '';
  let t=applyWritingCorrections(original);
  t=t.replace(/\bcan using\b/gi, 'can use');
  t=t.replace(/\bwe can using\b/gi, 'we can use');
  t=t.replace(/\bI can using\b/gi, 'I can use');
  t=t.replace(/\bThere are a lot of apartment costs to higher nearby station\b/gi, 'Apartments near stations are much more expensive');
  t=t.replace(/\bnearby train station\b/gi, 'near train stations');
  t=t.replace(/\bnearby station\b/gi, 'near stations');
  t=t.replace(/\bthe Seoul city\b/gi, 'Seoul');
  t=t.replace(/\bSeoul city\b/gi, 'Seoul');
  t=t.replace(/\btrain stations concentrate in\b/gi, 'train stations are concentrated in');
  t=t.replace(/\bMany transfer should be more widely making train station\b/gi, 'More transfer stations should be built across wider areas');
  t=t.replace(/\bmore widely making train station\b/gi, 'build train stations across wider areas');
  t=t.replace(/\bspeedy train\b/gi, 'high-speed train');
  t=t.replace(/\bspeedy trains\b/gi, 'high-speed trains');
  t=t.replace(/\ba lot of high-speed train train developing high-speed train\b/gi, 'many high-speed train systems are being developed');
  t=t.replace(/\bdeveloping high-speed train to you know, 10 years, most 10 years\b/gi, 'developed within the next ten years');
  t=t.replace(/\bprovince people\b/gi, 'people in regional areas');
  t=t.replace(/\bgood infra\b/gi, 'good infrastructure');
  t=t.replace(/\bgo to home\b/gi, 'go home');
  t=t.replace(/\bwithout the cost of power\b/gi, 'without spending too much energy');
  t=t.replace(/\bvery biggest problem\b/gi, 'major problem');
  t=t.replace(/\bvery different in the future\b/gi, 'very different in the future');
  t=t.replace(/\bMost 10 years\b/gi, 'within ten years');
  t=t.replace(/^um[,\s]+/i, '');
  t=t.replace(/\s+([.,!?;:%])/g, '$1').replace(/\s{2,}/g, ' ').trim();
  t=t.replace(/^([a-z])/, m=>m.toUpperCase());
  return t;
}
function speakingCorrectionItemsHTML(text){
  const sentences=splitWritingSentences(text);
  const items=sentences.map(sentence=>({original:sentence, corrected:applySpeakingCorrections(sentence)})).filter(item=>item.corrected && item.corrected !== item.original);
  if(!items.length) return '<p class="jy-small">표시할 수정 후보 없음</p>';
  return items.map(item=>`<div class="jy-writing-correction-item"><p class="jy-writing-diff-line">${writingDiffHTML(item.original, item.corrected)}</p></div>`).join('');
}
function speakingCorrectionPanelHTML(mock, part, n){
  if(!mock.speakingCheckRequested) return '';
  return `<div class="jy-speaking-check-box"><strong>Part ${esc(n)} 확인</strong>${speakingCorrectionItemsHTML(mock.speaking?.[part] || '')}</div>`;
}
function mockScoreCardHTML(sec, mock){
  const value=mock.scores?.[sec.key] || '';
  return `<div class="jy-mock-status-card jy-mock-score-card"><strong>${esc(sec.label)}</strong><div class="jy-field"><label class="jy-label">예상 점수</label><input class="jy-input jy-mock-input jy-mock-score-input" data-mock-field="scores.${esc(sec.key)}" placeholder="예: 6.5" value="${esc(value)}" spellcheck="false" autocomplete="off" autocorrect="off" autocapitalize="none"></div></div>`;
}

function parseSpeakingTablePaste(text){
  const result={};
  const lines=String(text || '').split(/\r?\n/).filter(line=>line.trim());
  lines.forEach((line, index)=>{
    let part='';
    let script='';
    const tabCells=line.split('\t');
    if(tabCells.length>=2){
      const key=tabCells[0].trim();
      const match=key.match(/(?:part|p)?\s*([123])/i);
      if(match){
        part='part'+match[1];
        script=tabCells.slice(1).join('\t').trim();
      }
    }else{
      const colon=line.match(/^(?:part|p)?\s*([123])\s*[:：]\s*(.*)$/i);
      if(colon){
        part='part'+colon[1];
        script=colon[2].trim();
      }else if(lines.length<=3){
        part='part'+String(index+1);
        script=line.trim();
      }
    }
    if(part && script) result[part]=script;
  });
  return result;
}
function mockPanelIsOpen(mock, key){
  if(!mock.panelOpen) mock.panelOpen={};
  const defaultOpen = key !== 'review';
  if(mock.panelOpen[key] === undefined) return defaultOpen;
  return mock.panelOpen[key] !== false;
}
function mockCollapsibleSectionHTML(mock, key, title, body){
  const open=mockPanelIsOpen(mock, key);
  return `<section class="jy-card jy-collapsible-card" data-mock-panel-card="${esc(key)}">
    <div class="jy-collapsible-head"><h3 class="jy-card-title">${esc(title)}</h3><button class="jy-btn jy-delete" type="button" data-mock-panel-toggle="${esc(key)}">${open?'접기':'열기'}</button></div>
    <div class="jy-collapsible-body ${open?'':'jy-hidden'}" data-mock-panel-body="${esc(key)}">${body}</div>
  </section>`;
}

function renderMockTest(){
  const state=readState();
  const id=activeMockId();
  const def=mockDef(id);
  const mock=getMockData(state,id);
  const allDone=mockAllComplete(mock);
  const canClose=allDone || mockSolveComplete(mock) || JY_MOCK_SECTIONS.every(s=>!!mock.solved?.[s.key]);
  const closed=canClose && !!mock.closed;
  const doneCount=JY_MOCK_SECTIONS.filter(s=>mockSectionComplete(mock,s.key)).length;
  const pct=Math.round(doneCount/JY_MOCK_SECTIONS.length*100);
  const closeButton=canClose ? `<button class="jy-btn" type="button" data-mock-close-toggle="${esc(id)}">${closed?'열기':'닫기'}</button>` : '';
  const header=`<section class="jy-card">
    <div class="jy-mock-head"><div><h3 class="jy-card-title">${esc(def.title)}</h3><p class="jy-small">${def.date ? dateDot(def.date) : '날짜 미정'} · ${esc(def.memo || '')}</p></div><div class="jy-mock-head-actions"><span class="jy-mock-badge ${allDone?'done':''}" data-mock-status="mocktest">${allDone?'전체 완료':'진행 중'}</span>${closeButton}</div></div>
    <div class="jy-progress"><span style="width:${pct}%;"></span></div>
    <div class="jy-mock-status-grid">${JY_MOCK_SECTIONS.map(sec=>mockScoreCardHTML(sec,mock)).join('')}</div>
  </section>`;
  if(closed){
    return `<section class="jy-titlebox"><h1 class="jy-title">Mock Test</h1></section>
    ${mockGuideHTML()}
    <section class="jy-card">
      <h3 class="jy-card-title">테스트 선택</h3>
      <div class="jy-mock-tabs">${JY_MOCK_TESTS.map(t=>`<button class="jy-btn ${t.id===id?'dark':''}" type="button" data-mock-switch="${esc(t.id)}">${esc(t.title)}</button>`).join('')}</div>
    </section>
    ${header}
    <section class="jy-card jy-mock-closed"><p class="jy-note">완료된 ${esc(def.title)} 내용을 닫아둔 상태입니다.</p></section>`;
  }
  return `<section class="jy-titlebox"><h1 class="jy-title">Mock Test</h1></section>
  ${mockGuideHTML()}
  <section class="jy-card">
    <h3 class="jy-card-title">테스트 선택</h3>
    <div class="jy-mock-tabs">${JY_MOCK_TESTS.map(t=>`<button class="jy-btn ${t.id===id?'dark':''}" type="button" data-mock-switch="${esc(t.id)}">${esc(t.title)}</button>`).join('')}</div>
  </section>
  ${header}
  ${mockCollapsibleSectionHTML(mock, 'writing', 'Writing 답안', `
    <div class="jy-grid-2">
      ${writingTextareaHTML('task1', 'Task 1 답안', mock.writing.task1)}
      ${writingTextareaHTML('task2', 'Task 2 답안', mock.writing.task2)}
    </div>
    <div class="jy-btns"><button class="jy-btn dark" type="button" id="mock-writing-check">${mock.writingCheckRequested?'재확인':'틀린 부분 확인'}</button></div>
    ${writingCorrectionPanelHTML(mock)}
  `)}
  ${mockCollapsibleSectionHTML(mock, 'speaking', 'Speaking 녹음', `
    <div class="jy-speaking-part-list">${JY_MOCK_AUDIO_PARTS.map((part,i)=>speakingPartHTML(mock, part, i+1)).join('')}</div>
    <div class="jy-btns"><button class="jy-btn dark" type="button" id="mock-speaking-check">${mock.speakingCheckRequested?'재확인':'틀린 부분 확인'}</button></div>
  `)}
  <section class="jy-card">
    <h3 class="jy-card-title">시간 · 문제점</h3>
    ${mockTimingProblemHTML(mock)}
  </section>
  ${mockCollapsibleSectionHTML(mock, 'review', '오답노트 제출', `
    ${mockReviewFileHTML(mock, id)}
    <div class="jy-btns"><a class="jy-btn" href="#home">Home</a></div>
  `)}`;
}
function mockProblemTextarea(section, value, placeholder){
  return `<div class="jy-field"><label class="jy-label">문제점</label><textarea class="jy-textarea jy-mock-short jy-mock-input jy-auto-grow" data-mock-field="problems.${esc(section)}" placeholder="${esc(placeholder)}" spellcheck="false" autocomplete="off" autocorrect="off" autocapitalize="none">${esc(value)}</textarea></div>`;
}
function mockTimingProblemHTML(mock){
  return `<div class="jy-grid-2">
    <div class="jy-mock-part"><h4>Listening</h4>${mockTimeInputHTML('시간', 'listening', mock.timings.listening, '분')}${mockProblemTextarea('listening', mock.problems.listening, '막힌 유형')}</div>
    <div class="jy-mock-part"><h4>Reading</h4><div class="jy-reading-time-grid jy-time-split-grid">${JY_READING_TIME_FIELDS.map(f=>mockTimeInputHTML(f.label, f.key, mock.timings[f.key], '분')).join('')}</div>${mockProblemTextarea('reading', mock.problems.reading, 'passage, 유형, 시간 배분')}</div>
    <div class="jy-mock-part"><h4>Writing</h4><div class="jy-writing-time-grid jy-time-split-grid">${JY_WRITING_TIME_FIELDS.map(f=>mockTimeInputHTML(f.label, f.key, mock.timings[f.key], '분')).join('')}</div>${mockProblemTextarea('writing', mock.problems.writing, 'Task 1, Task 2')}</div>
    <div class="jy-mock-part"><h4>Speaking</h4>${mockTimeInputHTML('시간', 'speaking', mock.timings.speaking, '분')}${mockProblemTextarea('speaking', mock.problems.speaking, '질문, 표현, 발음')}</div>
  </div>`;
}

function speakingPartHTML(mock, part, n){
  const meta=mock.audio?.[part];
  const script=mock.speaking?.[part] || '';
  const audioMetaText=meta ? `녹음 저장됨${meta.savedAt ? ' · '+esc(meta.savedAt) : ''}` : '';
  const audioPreview=meta ? `<div class="jy-mock-audio-box" id="mock-audio-box-${esc(part)}"><p class="jy-small">${audioMetaText}</p><audio controls id="mock-audio-player-${esc(part)}"></audio><button class="jy-btn jy-delete" type="button" data-mock-audio-clear="${esc(part)}">녹음 삭제</button></div>` : '';
  return `<div class="jy-mock-part jy-speaking-part-card"><h4>Part ${n}</h4>
    <label class="jy-label">녹음 파일 선택사항</label>
    <input class="jy-input jy-mock-audio-input" type="file" accept="audio/*" data-mock-audio="${esc(part)}">
    ${audioPreview}
    <div class="jy-speaking-script-layout">
      <div class="jy-field jy-speaking-script-field"><label class="jy-label">대본</label><textarea class="jy-textarea jy-mock-short jy-mock-input jy-speaking-script jy-auto-grow" data-mock-field="speaking.${esc(part)}" placeholder="질문\t대본\n질문\t대본" spellcheck="false" autocomplete="off" autocorrect="off" autocapitalize="none">${esc(script)}</textarea></div>
      ${speakingCorrectionPanelHTML(mock, part, n)}
    </div>
  </div>`;
}
function mockReviewFileHTML(mock, id){
  const meta=mock.reviewFile;
  const submitted=!!mock.reviewSubmitted;
  const savedText=mock.reviewDraftSavedAt ? `중간저장 ${esc(mock.reviewDraftSavedAt)}` : '';
  const submittedText=mock.reviewSubmittedAt ? `제출 ${esc(mock.reviewSubmittedAt)}` : '';
  return `<div class="jy-mock-file-card jy-review-editor-card jy-wrong-editor-card">
    <div class="jy-review-sticky-bar">
      <div class="jy-review-file-inline">
        <label class="jy-label">파일</label>
        <input class="jy-input jy-review-file-input" type="file" accept="image/*,.pdf,.doc,.docx,.txt,.pages" data-mock-review-file="combined">
        <div class="jy-mock-file-preview jy-review-file-preview-compact" id="mock-review-file-preview">${meta ? `<p class="jy-small">파일 저장됨${meta.savedAt ? ' · '+esc(meta.savedAt) : ''}</p><div id="mock-review-file-object"></div><button class="jy-btn jy-delete" type="button" data-mock-review-file-clear="combined">파일 삭제</button>` : ''}</div>
      </div>
      ${richToolbarHTML()}
    </div>
    <div class="jy-review-editor-wrap">
      <label class="jy-label">직접 작성</label>
      <div class="jy-rich-editor" id="mock-review-editor" data-review-id="${esc(id || activeMockId())}" contenteditable="true" data-placeholder="오답노트를 직접 작성하세요.">${mock.reviewHtml || ''}</div>
      <div class="jy-btns jy-review-editor-actions">
        <button class="jy-btn" type="button" id="mock-review-draft-save">중간저장</button>
        <button class="jy-btn dark" type="button" id="mock-review-submit">제출</button>
      </div>
      <p class="jy-small" id="mock-review-editor-status">${submitted ? '제출 완료' : (savedText || '')}${submitted && submittedText ? ' · '+submittedText : ''}</p>
      ${mockReviewRecoveryHTML(id || activeMockId(), mock)}
    </div>
  </div>`;
}
function richEditorTableHTML(rows=3, cols=3){
  let body='';
  for(let r=0;r<rows;r++){
    body += '<tr>';
    for(let c=0;c<cols;c++) body += '<td contenteditable="true"><br></td>';
    body += '</tr>';
  }
  return `<table class="jy-rich-table"><tbody>${body}</tbody></table><p><br></p>`;
}
function richPlainTableToHTML(text){
  const lines=String(text || '').split(/\r?\n/).filter(line=>line.trim());
  if(!lines.length || !lines.some(line=>line.includes('\t'))) return null;
  const body=lines.map(line=>`<tr>${line.split('\t').map(cell=>`<td contenteditable="true">${esc(cell.trim()) || '<br>'}</td>`).join('')}</tr>`).join('');
  return `<table class="jy-rich-table"><tbody>${body}</tbody></table><p><br></p>`;
}
let JY_RICH_ACTIVE_CELL=null;
let JY_RICH_SAVED_RANGE=null;
let JY_RICH_SELECTION_TRACKER_BOUND=false;
let JY_RICH_ACTIVE_EDITOR_ID='';

let JY_PENCIL_STAMP_MODE='';
let JY_PENCIL_STAMP_COLOUR='pink';
function pencilStampColour(value){
  const v=String(value || 'pink').toLowerCase();
  return ['pink','hotpink','yellow','green','blue'].includes(v) ? 'pink' : 'pink';
}
function pencilStampId(){
  return 'star_'+Date.now().toString(36)+'_'+Math.random().toString(36).slice(2,7);
}
function pencilStampSetMode(mode, colour='pink'){
  JY_PENCIL_STAMP_MODE=mode === 'erase' ? 'erase' : (mode === 'star' ? 'star' : '');
  JY_PENCIL_STAMP_COLOUR=pencilStampColour(colour);
  pencilStampRefreshButtons();
}
function pencilStampToggleMode(mode, colour='pink'){
  const next=(JY_PENCIL_STAMP_MODE === mode && (mode !== 'star' || JY_PENCIL_STAMP_COLOUR === pencilStampColour(colour))) ? '' : mode;
  pencilStampSetMode(next, colour);
}
function pencilStampRefreshButtons(){
  document.querySelectorAll('[data-rich-star],[data-lecture-rich-star],[data-proof-star-tool]').forEach(btn=>{
    btn.classList.toggle('is-active', JY_PENCIL_STAMP_MODE === 'star');
  });
  document.querySelectorAll('[data-rich-star-erase],[data-lecture-rich-star-erase],[data-proof-star-erase]').forEach(btn=>{
    btn.classList.toggle('is-active', JY_PENCIL_STAMP_MODE === 'erase');
  });
  document.body?.classList?.toggle('jy-pencil-star-mode', JY_PENCIL_STAMP_MODE === 'star');
  document.body?.classList?.toggle('jy-pencil-erase-mode', JY_PENCIL_STAMP_MODE === 'erase');
}
function pencilStampHTML(stamp, index=0){
  const x=Math.max(0, Math.min(100, Number(stamp && stamp.x || 50)));
  const y=Math.max(0, Math.min(100, Number(stamp && stamp.y || 50)));
  const colour=pencilStampColour(stamp && stamp.colour);
  const id=String(stamp && stamp.id || ('star_'+index));
  return `<button class="jy-pencil-star jy-pencil-star-${esc(colour)}" type="button" data-jy-pencil-star="${esc(id)}" data-jy-pencil-star-colour="${esc(colour)}" style="left:${x}%;top:${y}%;" aria-label="별표">★</button>`;
}
function pencilStampLayerHTML(stamps){
  const list=Array.isArray(stamps) ? stamps : [];
  return `<div class="jy-pencil-stamp-layer">${list.map((stamp,index)=>pencilStampHTML(stamp,index)).join('')}</div>`;
}
function pencilStampPoint(surface, event){
  const rect=surface.getBoundingClientRect();
  const width=Math.max(rect.width, 1);
  const height=Math.max(rect.height, 1);
  return {
    x:Math.max(0, Math.min(100, ((event.clientX - rect.left) / width) * 100)),
    y:Math.max(0, Math.min(100, ((event.clientY - rect.top) / height) * 100))
  };
}
function pencilStampPointInEditor(editor, event){
  const rect=editor.getBoundingClientRect();
  const width=Math.max(editor.scrollWidth || rect.width, 1);
  const height=Math.max(editor.scrollHeight || rect.height, 1);
  return {
    x:Math.max(0, Math.min(100, ((event.clientX - rect.left + editor.scrollLeft) / width) * 100)),
    y:Math.max(0, Math.min(100, ((event.clientY - rect.top + editor.scrollTop) / height) * 100))
  };
}
function pencilStampAddToEditor(editor, event, saveFn){
  if(!editor || JY_PENCIL_STAMP_MODE !== 'star') return false;
  event.preventDefault();
  event.stopPropagation();
  const point=pencilStampPointInEditor(editor, event);
  const star=document.createElement('button');
  star.type='button';
  star.className='jy-pencil-star jy-pencil-star-'+pencilStampColour(JY_PENCIL_STAMP_COLOUR);
  star.setAttribute('data-jy-pencil-star', pencilStampId());
  star.setAttribute('data-jy-pencil-star-colour', pencilStampColour(JY_PENCIL_STAMP_COLOUR));
  star.setAttribute('contenteditable','false');
  star.setAttribute('aria-label','별표');
  star.textContent='★';
  star.style.left=point.x+'%';
  star.style.top=point.y+'%';
  editor.appendChild(star);
  if(typeof saveFn === 'function') saveFn();
  return true;
}
function pencilStampHandleEditorStarClick(event, saveFn){
  const star=event.target?.closest?.('.jy-pencil-star');
  if(!star) return false;
  if(JY_PENCIL_STAMP_MODE === 'erase'){
    event.preventDefault();
    event.stopPropagation();
    star.remove();
    if(typeof saveFn === 'function') saveFn();
    return true;
  }
  event.preventDefault();
  event.stopPropagation();
  return true;
}
function normalisePencilStamps(stamps){
  return (Array.isArray(stamps) ? stamps : []).filter(Boolean).map((stamp,index)=>({
    id:String(stamp.id || ('star_'+index+'_'+Date.now().toString(36))),
    x:Math.max(0, Math.min(100, Number(stamp.x || 50))),
    y:Math.max(0, Math.min(100, Number(stamp.y || 50))),
    colour:pencilStampColour(stamp.colour)
  }));
}
function addProofGalleryStamp(galleryId, itemIndex, point, colour){
  const state=readState();
  const items=proofGalleryItemsFromState(state, galleryId);
  const index=Number(itemIndex);
  if(!Number.isInteger(index) || index < 0 || index >= items.length) return false;
  const next=items.slice();
  const item=Object.assign({}, next[index]);
  const stamps=normalisePencilStamps(item.stamps);
  stamps.push({id:pencilStampId(), x:point.x, y:point.y, colour:pencilStampColour(colour)});
  item.stamps=stamps;
  item.updatedAt=new Date().toLocaleString('ko-KR');
  next[index]=item;
  if(!writeProofGalleryItemsToState(state, galleryId, next)) return false;
  writeState(state);
  return true;
}
function removeProofGalleryStamp(galleryId, itemIndex, stampId){
  const state=readState();
  const items=proofGalleryItemsFromState(state, galleryId);
  const index=Number(itemIndex);
  if(!Number.isInteger(index) || index < 0 || index >= items.length) return false;
  const next=items.slice();
  const item=Object.assign({}, next[index]);
  const id=String(stampId || '');
  const stamps=normalisePencilStamps(item.stamps).filter(stamp=>String(stamp.id) !== id);
  item.stamps=stamps;
  item.updatedAt=new Date().toLocaleString('ko-KR');
  next[index]=item;
  if(!writeProofGalleryItemsToState(state, galleryId, next)) return false;
  writeState(state);
  return true;
}
function bindProofPencilStamps(){
  document.querySelectorAll('[data-proof-star-tool]').forEach(btn=>{
    btn.onclick=()=>pencilStampToggleMode('star','pink');
  });
  document.querySelectorAll('[data-proof-star-erase]').forEach(btn=>{
    btn.onclick=()=>pencilStampToggleMode('erase');
  });
  document.querySelectorAll('[data-proof-stamp-surface]').forEach(surface=>{
    surface.onclick=e=>{
      const star=e.target?.closest?.('.jy-pencil-star');
      const galleryId=surface.dataset.proofStampSurface;
      const index=surface.dataset.proofStampIndex;
      if(star){
        if(JY_PENCIL_STAMP_MODE === 'erase'){
          e.preventDefault();
          e.stopPropagation();
          if(removeProofGalleryStamp(galleryId, index, star.dataset.jyPencilStar)) render();
          return;
        }
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      if(JY_PENCIL_STAMP_MODE !== 'star') return;
      e.preventDefault();
      e.stopPropagation();
      if(addProofGalleryStamp(galleryId, index, pencilStampPoint(surface, e), JY_PENCIL_STAMP_COLOUR)) render();
    };
  });
  pencilStampRefreshButtons();
}
function richReviewEditors(){ return Array.from(document.querySelectorAll('#mock-review-editor, #mock-review-editor-page2')); }
function richActiveEditor(){
  const sel=window.getSelection ? window.getSelection() : null;
  if(sel && sel.rangeCount){
    const range=sel.getRangeAt(0);
    const found=richReviewEditors().find(editor=>richNodeInsideEditor(range.commonAncestorContainer, editor));
    if(found){ JY_RICH_ACTIVE_EDITOR_ID=found.id; return found; }
  }
  const stored=JY_RICH_ACTIVE_EDITOR_ID ? byId(JY_RICH_ACTIVE_EDITOR_ID) : null;
  if(stored) return stored;
  return byId('mock-review-editor');
}
function markRichActiveEditor(editor){ if(editor && editor.id) JY_RICH_ACTIVE_EDITOR_ID=editor.id; }
function richNodeInsideEditor(node, editor){
  if(!node || !editor) return false;
  const element=node.nodeType===1 ? node : node.parentElement;
  return element===editor || editor.contains(element);
}
function richRangeStillUsable(range, editor){
  if(!range || !editor) return false;
  try{
    return richNodeInsideEditor(range.commonAncestorContainer, editor) && document.contains(range.commonAncestorContainer);
  }catch(e){
    return false;
  }
}
function richSaveSelection(){
  const editor=richActiveEditor();
  const sel=window.getSelection ? window.getSelection() : null;
  if(!editor || !sel || !sel.rangeCount) return;
  const range=sel.getRangeAt(0);
  if(richNodeInsideEditor(range.commonAncestorContainer, editor)){
    JY_RICH_SAVED_RANGE=range.cloneRange();
  }
}
function richBindSelectionTracker(){
  if(JY_RICH_SELECTION_TRACKER_BOUND) return;
  JY_RICH_SELECTION_TRACKER_BOUND=true;
  document.addEventListener('selectionchange', ()=>{
    const editor=richActiveEditor();
    const sel=window.getSelection ? window.getSelection() : null;
    if(!editor || !sel || !sel.rangeCount) return;
    const range=sel.getRangeAt(0);
    if(richNodeInsideEditor(range.commonAncestorContainer, editor)){
      JY_RICH_SAVED_RANGE=range.cloneRange();
    }
  });
}
function richGetEffectiveRange(){
  const editor=richActiveEditor();
  const sel=window.getSelection ? window.getSelection() : null;
  if(!editor || !sel) return null;
  if(sel.rangeCount){
    const current=sel.getRangeAt(0);
    if(richRangeStillUsable(current, editor)) return current.cloneRange();
  }
  if(richRangeStillUsable(JY_RICH_SAVED_RANGE, editor)) return JY_RICH_SAVED_RANGE.cloneRange();
  return null;
}
function richRestoreSelection(){
  const editor=richActiveEditor();
  const sel=window.getSelection ? window.getSelection() : null;
  if(!editor || !sel || !richRangeStillUsable(JY_RICH_SAVED_RANGE, editor)) return false;
  editor.focus();
  sel.removeAllRanges();
  sel.addRange(JY_RICH_SAVED_RANGE.cloneRange());
  return true;
}
function richSetCaretAfter(node){
  const editor=richActiveEditor();
  const sel=window.getSelection ? window.getSelection() : null;
  if(!editor || !sel || !node || !node.parentNode) return;
  const range=document.createRange();
  range.setStartAfter(node);
  range.collapse(true);
  sel.removeAllRanges();
  sel.addRange(range);
  JY_RICH_SAVED_RANGE=range.cloneRange();
}
function richApplyCommand(command, value, id){
  richRestoreSelection();
  document.execCommand(command, false, value ?? null);
  richSaveSelection();
  saveMockReviewDraft(id,false);
}
function richCleanEmptyStyleElement(el){
  if(!el || el.nodeType!==1) return;
  const style=(el.getAttribute('style') || '').trim();
  if(!style) el.removeAttribute('style');
  if(el.getAttribute('data-jy-rich-style') && !el.getAttribute('style')) el.removeAttribute('data-jy-rich-style');
}
function richUnwrapElement(el){
  if(!el || !el.parentNode) return;
  const parent=el.parentNode;
  while(el.firstChild) parent.insertBefore(el.firstChild, el);
  parent.removeChild(el);
}
function richRemoveDescendantInlineStyle(root, styleName){
  if(!root) return;
  const nodes=[];
  if(root.nodeType===1) nodes.push(root);
  if(root.querySelectorAll) root.querySelectorAll('*').forEach(el=>nodes.push(el));
  nodes.forEach(el=>{
    if(!el.style) return;
    if(styleName==='backgroundColor'){
      el.style.backgroundColor='';
      if(el.getAttribute('data-jy-rich-style')==='highlight') el.removeAttribute('data-jy-rich-style');
    }else if(styleName==='color'){
      el.style.color='';
      if(el.getAttribute('data-jy-rich-style')==='colour') el.removeAttribute('data-jy-rich-style');
    }
    richCleanEmptyStyleElement(el);
  });
}
function richNearestStyledAncestor(range, editor, styleName){
  if(!range || !editor) return null;
  let node=range.startContainer;
  if(node && node.nodeType===3) node=node.parentElement;
  const selector=styleName==='backgroundColor'
    ? '[data-jy-rich-style="highlight"],span[style*="background"]'
    : '[data-jy-rich-style="colour"],span[style*="color"]';
  const el=node?.closest?.(selector);
  return el && editor.contains(el) ? el : null;
}
function richFragmentLastNode(fragment){
  if(!fragment) return null;
  let node=fragment.lastChild;
  while(node && node.lastChild) node=node.lastChild;
  return node || fragment.lastChild;
}
function richApplyInlineStyle(styleName, value, id){
  const editor=richActiveEditor();
  if(!editor) return;
  const range=richGetEffectiveRange();
  const sel=window.getSelection ? window.getSelection() : null;
  if(!range || !sel || !richNodeInsideEditor(range.commonAncestorContainer, editor)) return;

  editor.focus();
  sel.removeAllRanges();
  sel.addRange(range);

  if(range.collapsed){
    const styled=richNearestStyledAncestor(range, editor, styleName);
    if(styled){
      styled.style[styleName]=value;
      styled.setAttribute('data-jy-rich-style', styleName === 'backgroundColor' ? 'highlight' : 'colour');
      richSaveSelection();
      saveMockReviewDraft(id,false);
      return;
    }
    const command = styleName === 'backgroundColor' ? 'hiliteColor' : 'foreColor';
    try{
      document.execCommand('styleWithCSS', false, true);
      document.execCommand(command, false, value);
    }catch(e){}
    richSaveSelection();
    saveMockReviewDraft(id,false);
    return;
  }

  const span=document.createElement('span');
  span.setAttribute('data-jy-rich-style', styleName === 'backgroundColor' ? 'highlight' : 'colour');
  span.style[styleName]=value;

  try{
    const fragment=range.extractContents();
    richRemoveDescendantInlineStyle(fragment, styleName);
    span.appendChild(fragment);
    range.insertNode(span);
    span.normalize();
    richSetCaretAfter(span);
  }catch(e){
    const command = styleName === 'backgroundColor' ? 'hiliteColor' : 'foreColor';
    try{
      document.execCommand('styleWithCSS', false, true);
      document.execCommand(command, false, value);
    }catch(err){}
    richSaveSelection();
  }

  richNormaliseTables(editor);
  saveMockReviewDraft(id,false);
}
function richClearInlineStyle(styleName, id){
  const editor=richActiveEditor();
  if(!editor) return;
  const range=richGetEffectiveRange();
  const sel=window.getSelection ? window.getSelection() : null;
  if(!range || !sel || !richNodeInsideEditor(range.commonAncestorContainer, editor)) return;

  editor.focus();
  sel.removeAllRanges();
  sel.addRange(range);

  if(range.collapsed){
    const styled=richNearestStyledAncestor(range, editor, styleName);
    if(styled){
      if(styleName==='backgroundColor') styled.style.backgroundColor='';
      if(styleName==='color') styled.style.color='';
      richCleanEmptyStyleElement(styled);
      if(!styled.getAttribute('style') && styled.tagName==='SPAN') richUnwrapElement(styled);
      richSaveSelection();
      saveMockReviewDraft(id,false);
    }
    return;
  }

  try{
    const fragment=range.extractContents();
    richRemoveDescendantInlineStyle(fragment, styleName);
    const last=richFragmentLastNode(fragment);
    range.insertNode(fragment);
    if(last && last.parentNode) richSetCaretAfter(last);
  }catch(e){
    try{
      document.execCommand('removeFormat', false, null);
    }catch(err){}
    richSaveSelection();
  }
  richNormaliseTables(editor);
  saveMockReviewDraft(id,false);
}
function richNearestShapeAncestor(range, editor){
  if(!range || !editor) return null;
  let node=range.startContainer;
  if(node && node.nodeType===3) node=node.parentElement;
  const el=node?.closest?.('.jy-rich-shape');
  return el && editor.contains(el) ? el : null;
}
function richRemoveDescendantShapes(root){
  if(!root) return;
  const shapes=[];
  if(root.nodeType===1 && root.classList?.contains('jy-rich-shape')) shapes.push(root);
  if(root.querySelectorAll) root.querySelectorAll('.jy-rich-shape').forEach(el=>shapes.push(el));
  shapes.reverse().forEach(el=>richUnwrapElement(el));
}
function richApplyShape(shape, id){
  const editor=richActiveEditor();
  if(!editor) return;
  const allowed=['ellipse','triangle','rectangle'];
  if(!allowed.includes(shape)) return;
  const range=richGetEffectiveRange();
  const sel=window.getSelection ? window.getSelection() : null;
  if(!range || !sel || !richNodeInsideEditor(range.commonAncestorContainer, editor)) return;

  editor.focus();
  sel.removeAllRanges();
  sel.addRange(range);

  if(range.collapsed){
    const existing=richNearestShapeAncestor(range, editor);
    if(existing){
      existing.className='jy-rich-shape jy-rich-shape-'+shape;
      existing.setAttribute('data-jy-shape', shape);
      richSaveSelection();
      saveMockReviewDraft(id,false);
    }
    return;
  }

  const span=document.createElement('span');
  span.className='jy-rich-shape jy-rich-shape-'+shape;
  span.setAttribute('data-jy-shape', shape);
  try{
    const fragment=range.extractContents();
    richRemoveDescendantShapes(fragment);
    span.appendChild(fragment);
    range.insertNode(span);
    span.normalize();
    richSetCaretAfter(span);
  }catch(e){
    richSaveSelection();
  }
  richNormaliseTables(editor);
  saveMockReviewDraft(id,false);
}
function richClearShape(id){
  const editor=richActiveEditor();
  if(!editor) return;
  const range=richGetEffectiveRange();
  const sel=window.getSelection ? window.getSelection() : null;
  if(!range || !sel || !richNodeInsideEditor(range.commonAncestorContainer, editor)) return;

  editor.focus();
  sel.removeAllRanges();
  sel.addRange(range);

  if(range.collapsed){
    const existing=richNearestShapeAncestor(range, editor);
    if(existing){
      richUnwrapElement(existing);
      richSaveSelection();
      saveMockReviewDraft(id,false);
    }
    return;
  }

  try{
    const fragment=range.extractContents();
    richRemoveDescendantShapes(fragment);
    const last=richFragmentLastNode(fragment);
    range.insertNode(fragment);
    if(last && last.parentNode) richSetCaretAfter(last);
  }catch(e){
    richSaveSelection();
  }
  richNormaliseTables(editor);
  saveMockReviewDraft(id,false);
}
function richEditorHTMLForSave(editor){
  const clone=editor.cloneNode(true);
  unwrapAutoVocabMarks(clone);
  clone.querySelectorAll('[data-jy-auto-vocab]').forEach(el=>richUnwrapElement(el));
  return clone.innerHTML;
}

function htmlHasVisibleContent(html){
  return !!richHTMLToText(html || '').replace(/\s+/g,' ').trim();
}
function editorPageBreakNodeHTML(){
  return JY_EDITOR_PAGE_BREAK_HTML;
}
function splitHTMLPagesByBreak(html){
  const wrapper=document.createElement('div');
  wrapper.innerHTML=String(html || '').trim();
  const pages=[''];
  Array.from(wrapper.childNodes || []).forEach(node=>{
    const isBreak=node.nodeType === 1 && (node.matches?.('[data-jy-page-break]') || node.classList?.contains('jy-editor-page-break'));
    if(isBreak){
      if(pages.length < 2) pages.push('');
      return;
    }
    const nodeHTML=node.nodeType === 3 ? esc(node.textContent || '').replace(/\n/g,'<br>') : String(node.outerHTML || esc(node.textContent || ''));
    pages[pages.length-1] += nodeHTML;
  });
  return [String(pages[0] || '').trim(), String(pages[1] || '').trim()];
}
function notePageMode(context){
  try{
    const value=localStorage.getItem(JY_NOTE_PAGE_MODE_KEY+'_'+String(context || 'default'));
    return value === 'two' ? 'two' : 'one';
  }catch(e){
    return 'one';
  }
}
function setNotePageMode(context, mode){
  try{ localStorage.setItem(JY_NOTE_PAGE_MODE_KEY+'_'+String(context || 'default'), mode === 'two' ? 'two' : 'one'); }catch(e){}
}
function notePageModeHTML(context){
  const mode=notePageMode(context);
  return `<div class="jy-note-page-mode" data-note-page-mode-wrap="${esc(context)}"><span>작성 형식</span><button class="jy-btn ${mode==='one'?'dark':''}" type="button" data-note-page-mode="${esc(context)}" data-note-mode="one">한 페이지</button><button class="jy-btn ${mode==='two'?'dark':''}" type="button" data-note-page-mode="${esc(context)}" data-note-mode="two">두 페이지</button></div>`;
}
function richEditorPagesHTML(primaryId, html, className, placeholder, context, extraAttrs=''){
  const mode=notePageMode(context);
  const pages=splitHTMLPagesByBreak(html);
  const mainHTML=mode === 'two' ? pages[0] : String(html || '');
  const secondHTML=mode === 'two' ? pages[1] : '';
  return `<div class="jy-note-page-writing ${mode==='two'?'two':''}" data-note-page-writing="${esc(context)}">
    <div class="jy-note-page-sheet"><span class="jy-note-page-label">1쪽</span><div class="jy-rich-editor ${className}" id="${esc(primaryId)}" ${extraAttrs} contenteditable="true" data-placeholder="${esc(placeholder)}">${mainHTML}</div></div>
    ${mode==='two' ? `<div class="jy-note-page-sheet"><span class="jy-note-page-label">2쪽</span><div class="jy-rich-editor ${className}" id="${esc(primaryId)}-page2" ${extraAttrs} contenteditable="true" data-placeholder="${esc(placeholder)}">${secondHTML}</div></div>` : ''}
  </div>`;
}
function combinedRichEditorHTMLForSave(primaryId){
  const editor=byId(primaryId);
  if(!editor) return '';
  richNormaliseTables(editor);
  const first=richEditorHTMLForSave(editor).trim();
  const secondEditor=byId(primaryId+'-page2');
  if(secondEditor){
    richNormaliseTables(secondEditor);
    const second=richEditorHTMLForSave(secondEditor).trim();
    if(second || first) return first + editorPageBreakNodeHTML() + second;
  }
  return first;
}
function clearRichPageEditors(primaryId){
  const editor=byId(primaryId);
  if(editor) editor.innerHTML='';
  const second=byId(primaryId+'-page2');
  if(second) second.innerHTML='';
}
function setRichPageEditorsHTML(primaryId, html, context){
  const editor=byId(primaryId);
  if(!editor) return;
  const second=byId(primaryId+'-page2');
  if(second){
    const pages=splitHTMLPagesByBreak(html);
    editor.innerHTML=pages[0] || '';
    second.innerHTML=pages[1] || '';
    richNormaliseTables(second);
  }else{
    editor.innerHTML=String(html || '');
  }
  richNormaliseTables(editor);
}
function phraseEditorPagesHTML(text, context, noteId, htmlSource=''){
  const mode=notePageMode(context);
  const html=htmlSource ? String(htmlSource || '') : phraseTextToHtml(text || '');
  const pages=splitHTMLPagesByBreak(html);
  const plain1=mode === 'two' ? richHTMLToText(pages[0] || '') : String(text || '');
  const plain2=mode === 'two' ? richHTMLToText(pages[1] || '') : '';
  return `<div class="jy-note-page-writing ${mode==='two'?'two':''}" data-note-page-writing="${esc(context)}">
    <div class="jy-note-page-sheet"><span class="jy-note-page-label">1쪽</span><textarea class="jy-textarea jy-phrase-paper" id="phrase-note-editor" data-phrase-note-id="${esc(noteId)}" placeholder="문장 패턴, 자주 쓰는 구문, 예문을 적어두세요." spellcheck="false" autocomplete="off">${esc(plain1)}</textarea></div>
    ${mode==='two' ? `<div class="jy-note-page-sheet"><span class="jy-note-page-label">2쪽</span><textarea class="jy-textarea jy-phrase-paper" id="phrase-note-editor-page2" data-phrase-note-id="${esc(noteId)}" placeholder="문장 패턴, 자주 쓰는 구문, 예문을 적어두세요." spellcheck="false" autocomplete="off">${esc(plain2)}</textarea></div>` : ''}
  </div>`;
}
function combinedPhraseEditorHTMLForSave(){
  const first=String(byId('phrase-note-editor')?.value || '').trim();
  const secondEl=byId('phrase-note-editor-page2');
  if(secondEl){
    const second=String(secondEl.value || '').trim();
    if(first || second) return phraseTextToHtml(first) + editorPageBreakNodeHTML() + phraseTextToHtml(second);
  }
  return phraseTextToHtml(first);
}
function combinedPhraseEditorTextForSave(){
  const first=String(byId('phrase-note-editor')?.value || '').trim();
  const secondEl=byId('phrase-note-editor-page2');
  if(secondEl){
    const second=String(secondEl.value || '').trim();
    return [first, second].filter(Boolean).join('\n\n');
  }
  return first;
}
function clearPhrasePageEditors(){
  const first=byId('phrase-note-editor');
  const second=byId('phrase-note-editor-page2');
  if(first) first.value='';
  if(second) second.value='';
}
function bindNotePageModeControls(){
  document.querySelectorAll('[data-note-page-mode]').forEach(btn=>{
    btn.onclick=()=>{
      const r=route();
      persistActiveEditingBeforeRender();
      if(r==='grammar') saveGrammarNoteDraft(false, false);
      if(r==='phrase') savePhraseNoteDraft(false, false);
      setNotePageMode(btn.dataset.notePageMode, btn.dataset.noteMode);
      render();
    };
  });
}
function richNormaliseTables(root){
  if(!root) return;
  root.querySelectorAll('table').forEach(table=>{
    table.classList.add('jy-rich-table');
    table.querySelectorAll('td,th').forEach(cell=>{
      cell.setAttribute('contenteditable','true');
      if(!cell.innerHTML.trim()) cell.innerHTML='<br>';
    });
  });
}
function richCurrentCell(){
  const editor=richActiveEditor();
  if(!editor) return null;
  const sel=window.getSelection ? window.getSelection() : null;
  if(sel && sel.rangeCount){
    let node=sel.anchorNode;
    if(node && node.nodeType===3) node=node.parentElement;
    const cell=node?.closest?.('td,th');
    if(cell && editor.contains(cell)){
      JY_RICH_ACTIVE_CELL=cell;
      return cell;
    }
  }
  if(JY_RICH_ACTIVE_CELL && editor.contains(JY_RICH_ACTIVE_CELL)) return JY_RICH_ACTIVE_CELL;
  return null;
}
function richPlaceCursor(cell){
  if(!cell) return;
  JY_RICH_ACTIVE_CELL=cell;
  cell.focus?.();
  const range=document.createRange();
  range.selectNodeContents(cell);
  range.collapse(false);
  const sel=window.getSelection();
  sel.removeAllRanges();
  sel.addRange(range);
  richSaveSelection();
}
function richInsertPageBreak(id){
  const editor=richActiveEditor();
  if(!editor) return false;
  richRestoreSelection();
  editor.focus();
  document.execCommand('insertHTML', false, '<div class="jy-editor-page-break" data-jy-page-break="1" contenteditable="false"><span>쪽 나눔</span></div><p><br></p>');
  richNormaliseTables(editor);
  richSaveSelection();
  saveMockReviewDraft(id,false);
  return true;
}
function richInsertFallbackTable(id){
  const editor=richActiveEditor();
  if(!editor) return;
  editor.focus();
  document.execCommand('insertHTML', false, richEditorTableHTML(3,3));
  richNormaliseTables(editor);
  saveMockReviewDraft(id,false);
}
function richAddRow(id){
  const cell=richCurrentCell();
  if(!cell) return richInsertFallbackTable(id);
  const row=cell.closest('tr');
  const clone=row.cloneNode(true);
  Array.from(clone.cells).forEach(td=>{ td.innerHTML='<br>'; td.setAttribute('contenteditable','true'); });
  row.parentNode.insertBefore(clone, row.nextSibling);
  richPlaceCursor(clone.cells[Math.min(cell.cellIndex, clone.cells.length-1)]);
  saveMockReviewDraft(id,false);
}
function richRemoveRow(id){
  const cell=richCurrentCell();
  if(!cell) return;
  const table=cell.closest('table');
  const row=cell.closest('tr');
  const next=row.nextElementSibling || row.previousElementSibling;
  if(table.rows.length <= 1){
    table.remove();
  }else{
    row.remove();
    if(next && next.cells.length) richPlaceCursor(next.cells[Math.min(cell.cellIndex, next.cells.length-1)]);
  }
  saveMockReviewDraft(id,false);
}
function richAddColumn(id){
  const cell=richCurrentCell();
  if(!cell) return richInsertFallbackTable(id);
  const table=cell.closest('table');
  const index=cell.cellIndex;
  let targetCell=null;
  Array.from(table.rows).forEach(row=>{
    const newCell=document.createElement('td');
    newCell.setAttribute('contenteditable','true');
    newCell.innerHTML='<br>';
    const ref=row.cells[index+1] || null;
    row.insertBefore(newCell, ref);
    if(row===cell.parentElement) targetCell=newCell;
  });
  richPlaceCursor(targetCell);
  saveMockReviewDraft(id,false);
}
function richRemoveColumn(id){
  const cell=richCurrentCell();
  if(!cell) return;
  const table=cell.closest('table');
  const index=cell.cellIndex;
  let targetCell=null;
  Array.from(table.rows).forEach(row=>{
    if(row.cells.length > 1){
      const next=row.cells[index+1] || row.cells[index-1] || null;
      row.deleteCell(index);
      if(row===cell.parentElement) targetCell=next;
    }else{
      row.remove();
    }
  });
  if(!table.rows.length){
    table.remove();
  }else if(targetCell && targetCell.isConnected){
    richPlaceCursor(targetCell);
  }
  saveMockReviewDraft(id,false);
}
function saveSkillReviewDraft(id, submitted=false){
  const editor=byId('mock-review-editor');
  if(editor) richNormaliseTables(editor);
  const editor2=byId('mock-review-editor-page2');
  if(editor2) richNormaliseTables(editor2);
  const section=skillReviewSectionFromId(id);
  const date=activePlan().date;
  const sourceEl=byId('note-source');
  const status=byId('mock-review-editor-status');
  const now=new Date().toLocaleString('ko-KR');
  const state=readState();
  const day=dayState(state,date);
  if(!day.skillReviewDrafts) day.skillReviewDrafts={};
  const draft=day.skillReviewDrafts[section] || {};
  draft.source=String(sourceEl?.value || draft.source || '').trim();
  const nextHtml=editor ? combinedRichEditorHTMLForSave('mock-review-editor') : String(draft.html || '');
  if(String(draft.html || '').trim() && reviewTextKey(draft.html) !== reviewTextKey(nextHtml)){
    backupReviewHtml(state, id, draft.html, reviewIdLabel(id));
  }
  draft.html=nextHtml;
  draft.savedAt=now;
  if(submitted){
    const hasDraftText=!!richHTMLToText(draft.html || '').trim();
    const existingFiles=normaliseLectureProof({items:draft.files || []}).items;
    if(!hasDraftText && !existingFiles.length) return false;
    day.submissions[section]=true;
    draft.submittedAt=now;
    draft.files=existingFiles;
    if(existingFiles.length) draft.filesSavedAt=draft.filesSavedAt || now;
    state.notes=(state.notes || []).filter(n=>!(String(n.section || '')===section && String(n.date || '')===date && String(n.id || '').match(/^([a-z]+)_\d{4}-\d{2}-\d{2}_\d+$/)));
  }
  day.skillReviewDrafts[section]=draft;
  writeState(state);
  if(status) status.textContent=submitted ? '제출 완료 · '+now : '중간저장 '+now;
  return true;
}
function saveMockReviewDraft(id, submitted=false){
  if(id === 'grammar') return saveGrammarNoteDraft(submitted, false);
  if(id === 'phrase') return savePhraseNoteDraft(submitted, false);
  if(isSkillReviewId(id)) return saveSkillReviewDraft(id, submitted);
  const editor=byId('mock-review-editor');
  if(!editor) return false;
  richNormaliseTables(editor);
  const state=readState();
  const mock=getMockData(state,id);
  const nextHtml=combinedRichEditorHTMLForSave('mock-review-editor');
  const nextText=richHTMLToText(nextHtml).trim();
  if(String(mock.reviewHtml || '').trim() && reviewTextKey(mock.reviewHtml) !== reviewTextKey(nextHtml)){
    backupReviewHtml(state, id, mock.reviewHtml, reviewIdLabel(id));
  }
  mock.reviewHtml=nextHtml;
  mock.reviewDraftSavedAt=new Date().toLocaleString('ko-KR');
  if(submitted){
    if(!mockReviewTextComplete(mock) && !mockReviewFileComplete(mock)) return false;
    mock.reviewSubmitted=true;
    mock.reviewSubmitConfirmed=true;
    mock.reviewSubmittedAt=mock.reviewDraftSavedAt;
    mock.reviewSubmitSource='mocktest';
    mock.reviewSubmissionKind='mock_review';
  }
  mock.updatedAt=mock.reviewDraftSavedAt;
  syncMockWithHome(state,id);
  writeState(state);
  updateMockLiveStatus(id);
  const status=byId('mock-review-editor-status');
  if(status) status.textContent=submitted ? '제출 완료 · '+mock.reviewSubmittedAt : '중간저장 '+mock.reviewDraftSavedAt;
  return true;
}
function bindRichReviewEditor(id){
  const editors=richReviewEditors();
  const editor=byId('mock-review-editor');
  if(!editor) return;
  richBindSelectionTracker();
  editors.forEach(item=>{
    richNormaliseTables(item);
    const autosave=()=>{
      markRichActiveEditor(item);
      richNormaliseTables(item);
      richSaveSelection();
      saveMockReviewDraft(id,false);
    };
    item.onfocus=()=>markRichActiveEditor(item);
    item.onblur=autosave;
    item.oninput=autosave;
    item.oncompositionend=autosave;
    item.onbeforeinput=()=>setTimeout(autosave,0);
    item.onclick=e=>{
      markRichActiveEditor(item);
      if(pencilStampHandleEditorStarClick(e, ()=>saveMockReviewDraft(id,false))) return;
      if(pencilStampAddToEditor(item, e, ()=>saveMockReviewDraft(id,false))) return;
      const cell=e.target?.closest?.('td,th');
      if(cell && item.contains(cell)) JY_RICH_ACTIVE_CELL=cell;
      richSaveSelection();
    };
    item.onmouseup=()=>{ markRichActiveEditor(item); richSaveSelection(); };
    item.onkeyup=()=>{
      markRichActiveEditor(item);
      const cell=richCurrentCell();
      if(cell) JY_RICH_ACTIVE_CELL=cell;
      autosave();
    };
    item.onpaste=e=>{
      markRichActiveEditor(item);
      const text=e.clipboardData?.getData('text/plain') || '';
      const table=richPlainTableToHTML(text);
      if(table){
        e.preventDefault();
        richRestoreSelection();
        document.execCommand('insertHTML', false, table);
        richNormaliseTables(item);
        richSaveSelection();
        saveMockReviewDraft(id,false);
      }
    };
  });
  document.querySelectorAll('[data-rich-cmd]').forEach(btn=>{
    btn.onpointerdown=e=>{ e.preventDefault(); richSaveSelection(); };
    btn.onmousedown=e=>{ e.preventDefault(); richSaveSelection(); };
    btn.onclick=()=>richApplyCommand(btn.dataset.richCmd, null, id);
  });
  const size=editor.closest('.jy-review-editor-card')?.querySelector('[data-rich-size]');
  if(size){
    size.onmousedown=()=>richSaveSelection();
    size.onchange=()=>{
      if(!size.value) return;
      const active=richActiveEditor() || editor;
      richRestoreSelection();
      document.execCommand('fontSize', false, '7');
      active.querySelectorAll('font[size="7"]').forEach(el=>{ el.removeAttribute('size'); el.style.fontSize=size.value; });
      size.value='';
      richSaveSelection();
      saveMockReviewDraft(id,false);
    };
  }
  const colour=document.querySelector('[data-rich-colour]');
  const colourApply=document.querySelector('[data-rich-colour-apply]');
  if(colour){
    let colourChanged=false;
    const rememberColour=()=>{ colourChanged=false; richSaveSelection(); };
    const applyColour=()=>{ colourChanged=true; richApplyInlineStyle('color', colour.value || '#222222', id); };
    colour.onpointerdown=rememberColour;
    colour.onmousedown=rememberColour;
    colour.oninput=applyColour;
    colour.onchange=applyColour;
    colour.onblur=()=>{
      if(!colourChanged) richApplyInlineStyle('color', colour.value || '#222222', id);
      colourChanged=false;
    };
  }
  if(colourApply){
    colourApply.onpointerdown=e=>{ e.preventDefault(); richSaveSelection(); };
    colourApply.onmousedown=e=>{ e.preventDefault(); richSaveSelection(); };
    colourApply.onclick=()=>richApplyInlineStyle('color', colour?.value || '#222222', id);
  }
  const highlight=document.querySelector('[data-rich-highlight]');
  const highlightApply=document.querySelector('[data-rich-highlight-apply]');
  if(highlight){
    let highlightChanged=false;
    const rememberHighlight=()=>{ highlightChanged=false; richSaveSelection(); };
    const applyHighlight=()=>{ highlightChanged=true; richApplyInlineStyle('backgroundColor', highlight.value || '#fff2a8', id); };
    highlight.onpointerdown=rememberHighlight;
    highlight.onmousedown=rememberHighlight;
    highlight.oninput=applyHighlight;
    highlight.onchange=applyHighlight;
    highlight.onblur=()=>{
      if(!highlightChanged) richApplyInlineStyle('backgroundColor', highlight.value || '#fff2a8', id);
      highlightChanged=false;
    };
  }
  if(highlightApply){
    highlightApply.onpointerdown=e=>{ e.preventDefault(); richSaveSelection(); };
    highlightApply.onmousedown=e=>{ e.preventDefault(); richSaveSelection(); };
    highlightApply.onclick=()=>richApplyInlineStyle('backgroundColor', highlight?.value || '#fff2a8', id);
  }
  const highlightClear=document.querySelector('[data-rich-highlight-clear]');
  if(highlightClear){
    highlightClear.onpointerdown=e=>{ e.preventDefault(); richSaveSelection(); };
    highlightClear.onmousedown=e=>{ e.preventDefault(); richSaveSelection(); };
    highlightClear.onclick=()=>richClearInlineStyle('backgroundColor', id);
  }
  const table=document.querySelector('[data-rich-table]');
  if(table){ table.onpointerdown=e=>{ e.preventDefault(); richSaveSelection(); }; table.onmousedown=e=>{ e.preventDefault(); richSaveSelection(); }; table.onclick=()=>richInsertFallbackTable(id); }
  const rowAdd=document.querySelector('[data-rich-row-add]');
  if(rowAdd){ rowAdd.onpointerdown=e=>{ e.preventDefault(); richSaveSelection(); }; rowAdd.onmousedown=e=>{ e.preventDefault(); richSaveSelection(); }; rowAdd.onclick=()=>richAddRow(id); }
  const rowRemove=document.querySelector('[data-rich-row-remove]');
  if(rowRemove){ rowRemove.onpointerdown=e=>{ e.preventDefault(); richSaveSelection(); }; rowRemove.onmousedown=e=>{ e.preventDefault(); richSaveSelection(); }; rowRemove.onclick=()=>richRemoveRow(id); }
  const colAdd=document.querySelector('[data-rich-col-add]');
  if(colAdd){ colAdd.onpointerdown=e=>{ e.preventDefault(); richSaveSelection(); }; colAdd.onmousedown=e=>{ e.preventDefault(); richSaveSelection(); }; colAdd.onclick=()=>richAddColumn(id); }
  const colRemove=document.querySelector('[data-rich-col-remove]');
  if(colRemove){ colRemove.onpointerdown=e=>{ e.preventDefault(); richSaveSelection(); }; colRemove.onmousedown=e=>{ e.preventDefault(); richSaveSelection(); }; colRemove.onclick=()=>richRemoveColumn(id); }
  document.querySelectorAll('[data-rich-shape]').forEach(btn=>{
    btn.onpointerdown=e=>{ e.preventDefault(); richSaveSelection(); };
    btn.onmousedown=e=>{ e.preventDefault(); richSaveSelection(); };
    btn.onclick=()=>richApplyShape(btn.dataset.richShape, id);
  });
  document.querySelectorAll('[data-rich-star]').forEach(btn=>{
    btn.onpointerdown=e=>{ e.preventDefault(); richSaveSelection(); };
    btn.onmousedown=e=>{ e.preventDefault(); richSaveSelection(); };
    btn.onclick=()=>pencilStampToggleMode('star', btn.dataset.richStar || 'pink');
  });
  document.querySelectorAll('[data-rich-star-erase]').forEach(btn=>{
    btn.onpointerdown=e=>{ e.preventDefault(); richSaveSelection(); };
    btn.onmousedown=e=>{ e.preventDefault(); richSaveSelection(); };
    btn.onclick=()=>pencilStampToggleMode('erase');
  });
  const shapeClear=document.querySelector('[data-rich-shape-clear]');
  if(shapeClear){
    shapeClear.onpointerdown=e=>{ e.preventDefault(); richSaveSelection(); };
    shapeClear.onmousedown=e=>{ e.preventDefault(); richSaveSelection(); };
    shapeClear.onclick=()=>{
      richClearShape(id);
    };
  }
  pencilStampRefreshButtons();
  document.querySelectorAll('[data-review-recover]').forEach(btn=>{
    btn.onclick=()=>{
      const candidates=mockReviewRecoveryCandidates(id, combinedRichEditorHTMLForSave('mock-review-editor') || '');
      const item=candidates[Number(btn.dataset.reviewRecover)];
      if(!item || !editor) return;
      editor.innerHTML=item.html;
      const second=byId('mock-review-editor-page2');
      if(second) second.innerHTML='';
      richNormaliseTables(editor);
      saveMockReviewDraft(id,false);
    };
  });
  const draft=byId('mock-review-draft-save');
  if(draft) draft.onclick=()=>saveMockReviewDraft(id,false);
  const submit=byId('mock-review-submit');
  if(submit) submit.onclick=(e)=>{
    if(submitWrongNoteFromButton(submit, e)) return;
    const ok=saveMockReviewDraft(id,true);
    if(!ok) alert(isSkillReviewId(id) ? '글 또는 파일이 필요합니다.' : '파일을 제출하거나 내용을 작성해 주세요.');
    else if(isSkillReviewId(id)) render();
  };
}

function openMockAudioDB(){
  return new Promise((resolve,reject)=>{
    const req=indexedDB.open('jy_ielts_mock_files_v2',1);
    req.onupgradeneeded=()=>{ const db=req.result; if(!db.objectStoreNames.contains('files')) db.createObjectStore('files',{keyPath:'id'}); };
    req.onsuccess=()=>resolve(req.result);
    req.onerror=()=>reject(req.error);
  });
}
async function putMockStoredFile(key, file){
  const db=await openMockAudioDB();
  return new Promise((resolve,reject)=>{
    const tx=db.transaction('files','readwrite');
    tx.objectStore('files').put({id:key, blob:file, name:file.name, type:file.type, size:file.size, savedAt:new Date().toLocaleString('ko-KR')});
    tx.oncomplete=()=>resolve();
    tx.onerror=()=>reject(tx.error);
  });
}
async function getMockStoredFile(key){
  const db=await openMockAudioDB();
  return new Promise((resolve,reject)=>{
    const req=db.transaction('files','readonly').objectStore('files').get(key);
    req.onsuccess=()=>resolve(req.result || null);
    req.onerror=()=>reject(req.error);
  });
}
async function deleteMockStoredFile(key){
  const db=await openMockAudioDB();
  return new Promise((resolve,reject)=>{
    const tx=db.transaction('files','readwrite');
    tx.objectStore('files').delete(key);
    tx.oncomplete=()=>resolve();
    tx.onerror=()=>reject(tx.error);
  });
}
function mockAudioKey(id, part){ return id+'_audio_'+part; }
function mockReviewFileKey(id){ return id+'_review_combined'; }
async function putMockAudio(id, part, file){ return putMockStoredFile(mockAudioKey(id, part), file); }
async function getMockAudio(id, part){ return getMockStoredFile(mockAudioKey(id, part)); }
async function deleteMockAudio(id, part){ return deleteMockStoredFile(mockAudioKey(id, part)); }
async function putMockReviewFile(id, file){ return putMockStoredFile(mockReviewFileKey(id), file); }
async function getMockReviewFile(id){ return getMockStoredFile(mockReviewFileKey(id)); }
async function deleteMockReviewFile(id){ return deleteMockStoredFile(mockReviewFileKey(id)); }
async function loadMockAudioPlayers(id){
  for(const part of JY_MOCK_AUDIO_PARTS){
    const player=byId('mock-audio-player-'+part);
    if(!player) continue;
    try{
      const rec=await getMockAudio(id, part);
      if(rec && rec.blob) player.src=URL.createObjectURL(rec.blob);
    }catch(e){ console.warn(e); }
  }
}
async function loadMockReviewFilePreview(id){
  const target=byId('mock-review-file-object');
  if(!target) return;
  try{
    const rec=await getMockReviewFile(id);
    if(!rec || !rec.blob) return;
    const url=URL.createObjectURL(rec.blob);
    const type=String(rec.type || '').toLowerCase();
    const name=String(rec.name || 'mock-test-review');
    if(type.startsWith('image/')){
      target.innerHTML=`<img class="jy-file-magnify-source" src="${esc(url)}" alt="오답노트 이미지 미리보기">`;
      bindFileMagnifiers();
    }else if(type === 'application/pdf' || /\.pdf$/i.test(name)){
      const rendered=await renderPdfFirstPageCanvas(rec.blob, target, '오답노트 PDF 1쪽 미리보기');
      if(!rendered){
        target.innerHTML=`<object class="jy-mock-review-pdf-object" data="${esc(url)}#toolbar=1&navpanes=0&zoom=page-width" type="application/pdf"><a class="jy-section-link" href="${esc(url)}" download="${esc(name)}">PDF 열기 또는 다운로드</a></object>`;
      }
    }else{
      target.innerHTML=`<a class="jy-section-link" href="${esc(url)}" download="${esc(name)}">파일 열기 또는 다운로드</a>`;
    }
  }catch(e){ console.warn(e); }
}
async function loadMockReviewNoteFilePreviews(){
  const targets=Array.from(document.querySelectorAll('[data-mock-review-note-file]'));
  for(const target of targets){
    const id=target.dataset.mockReviewNoteFile;
    if(!id || target.dataset.loaded==='1') continue;
    target.dataset.loaded='1';
    try{
      const rec=await getMockReviewFile(id);
      if(!rec || !rec.blob) continue;
      const url=URL.createObjectURL(rec.blob);
      const type=String(rec.type || '').toLowerCase();
      const name=String(rec.name || '오답노트');
      const box=target.querySelector('.jy-proof-loading') || target;
      if(type.startsWith('image/')){
        box.outerHTML=`<img class="jy-file-magnify-source" src="${esc(url)}" alt="오답노트 첨부">`;
      }else if(type === 'application/pdf' || /\.pdf$/i.test(name)){
        const rendered=await renderPdfFirstPageCanvas(rec.blob, box, '오답노트 PDF 1쪽');
        if(!rendered){
          box.outerHTML=`<object class="jy-mock-review-pdf-object" data="${esc(url)}#toolbar=1&navpanes=0&zoom=page-width" type="application/pdf"><a class="jy-section-link" href="${esc(url)}" download="${esc(name)}">PDF 열기</a></object>`;
        }
      }else{
        box.outerHTML=`<a class="jy-section-link" href="${esc(url)}" download="${esc(name)}">파일 열기</a>`;
      }
      bindFileMagnifiers();
    }catch(e){ console.warn(e); }
  }
}

function bindMockTestPage(){
  if(route() !== 'mocktest') return;
  const id=activeMockId();
  document.querySelectorAll('[data-mock-switch]').forEach(btn=>{
    btn.onclick=()=>{ setActiveMock(btn.dataset.mockSwitch); render(); };
  });
  document.querySelectorAll('[data-mock-solve-toggle]').forEach(btn=>{
    btn.onclick=()=>toggleMockSolved(id, btn.dataset.mockSolveToggle);
  });
  document.querySelectorAll('[data-mock-panel-toggle]').forEach(btn=>{
    btn.onclick=()=>{
      const state=readState();
      const mock=getMockData(state,id);
      if(!mock.panelOpen) mock.panelOpen={};
      const key=btn.dataset.mockPanelToggle;
      mock.panelOpen[key]=!mockPanelIsOpen(mock,key);
      mock.updatedAt=new Date().toLocaleString('ko-KR');
      writeState(state);
      render();
    };
  });
  document.querySelectorAll('[data-mock-close-toggle]').forEach(btn=>{
    btn.onclick=()=>{
      const state=readState();
      const mock=getMockData(state, btn.dataset.mockCloseToggle || id);
      mock.closed=!mock.closed;
      mock.updatedAt=new Date().toLocaleString('ko-KR');
      writeState(state);
      render();
    };
  });
  document.querySelectorAll('[data-mock-field]').forEach(el=>{
    const saveCurrent=()=>saveMockValue(id, el.dataset.mockField, el.value);
    el.onchange=saveCurrent;
    el.onblur=saveCurrent;
    if(el.classList.contains('jy-mock-score-input')){
      el.oninput=saveCurrent;
    }else if(el.dataset.mockTimeKey || el.dataset.writingWordTarget){
      el.oninput=()=>{
        if(el.dataset.mockTimeKey){
          const status=mockTimeStatusText(el.dataset.mockTimeKey, el.value);
          document.querySelectorAll('[data-mock-time-status="'+el.dataset.mockTimeKey+'"]').forEach(target=>{
            target.classList.remove('good','bad');
            if(status.cls) target.classList.add(status.cls);
            target.textContent=status.text;
          });
        }
        if(el.dataset.writingWordTarget){
          const status=writingWordStatus(el.dataset.writingWordTarget, el.value);
          document.querySelectorAll('[data-writing-word-count="'+el.dataset.writingWordTarget+'"]').forEach(target=>{
            target.classList.remove('good','bad');
            if(status.cls) target.classList.add(status.cls);
            target.textContent=status.text;
          });
        }
      };
    }
  });
  document.querySelectorAll('[data-mock-audio]').forEach(input=>{
    input.onchange=async()=>{
      const file=input.files && input.files[0];
      if(!file) return;
      const part=input.dataset.mockAudio;
      await putMockAudio(id, part, file);
      const state=readState();
      const mock=getMockData(state,id);
      mock.audio[part]={name:file.name, type:file.type, size:file.size, savedAt:new Date().toLocaleString('ko-KR')};
      mock.updatedAt=new Date().toLocaleString('ko-KR');
      syncMockWithHome(state,id);
      writeState(state);
      render();
    };
  });
  document.querySelectorAll('[data-mock-audio-clear]').forEach(btn=>{
    btn.onclick=async()=>{
      const part=btn.dataset.mockAudioClear;
      await deleteMockAudio(id, part);
      const state=readState();
      const mock=getMockData(state,id);
      mock.audio[part]=null;
      syncMockWithHome(state,id);
      writeState(state);
      render();
    };
  });
  document.querySelectorAll('[data-mock-review-file]').forEach(input=>{
    input.onchange=async()=>{
      const file=input.files && input.files[0];
      if(!file) return;
      await putMockReviewFile(id, file);
      const state=readState();
      const mock=getMockData(state,id);
      mock.reviewFile={name:file.name, type:file.type, size:file.size, savedAt:new Date().toLocaleString('ko-KR')};
      mock.updatedAt=new Date().toLocaleString('ko-KR');
      syncMockWithHome(state,id);
      writeState(state);
      render();
    };
  });
  document.querySelectorAll('[data-mock-review-file-clear]').forEach(btn=>{
    btn.onclick=async()=>{
      await deleteMockReviewFile(id);
      const state=readState();
      const mock=getMockData(state,id);
      mock.reviewFile=null;
      syncMockWithHome(state,id);
      writeState(state);
      render();
    };
  });
  const writingCheck=byId('mock-writing-check');
  if(writingCheck) writingCheck.onclick=()=>{
    document.querySelectorAll('[data-mock-field]').forEach(el=>saveMockValue(id, el.dataset.mockField, el.value));
    const state=readState();
    const mock=getMockData(state,id);
    mock.writingCheckRequested=true;
    mock.writingCheckCount=(Number(mock.writingCheckCount) || 0)+1;
    mock.writingLastCheckedAt=new Date().toLocaleString('ko-KR');
    mock.updatedAt=mock.writingLastCheckedAt;
    syncMockWithHome(state,id);
    writeState(state);
    render();
  };
  const speakingCheck=byId('mock-speaking-check');
  if(speakingCheck) speakingCheck.onclick=()=>{
    document.querySelectorAll('[data-mock-field]').forEach(el=>saveMockValue(id, el.dataset.mockField, el.value));
    const state=readState();
    const mock=getMockData(state,id);
    mock.speakingCheckRequested=true;
    mock.speakingCheckCount=(Number(mock.speakingCheckCount) || 0)+1;
    mock.speakingLastCheckedAt=new Date().toLocaleString('ko-KR');
    mock.updatedAt=mock.speakingLastCheckedAt;
    syncMockWithHome(state,id);
    writeState(state);
    render();
  };
  bindAutoGrowTextareas();
  bindRichReviewEditor(id);
  loadMockAudioPlayers(id);

  loadMockReviewFilePreview(id);
}

const JY_QUICK_VOCAB_OVERRIDES = {
  'corruption':{pos:'noun', meaning:'부패, 타락, 부정', synonyms:'dishonesty, bribery, decay', antonyms:'honesty, integrity', example:'Corruption can damage public trust.'},
  'corrupt':{pos:'adjective, verb', meaning:'부패한, 타락한, 매수하다', synonyms:'dishonest, immoral, bribe', antonyms:'honest, ethical', example:'A corrupt system is difficult to reform.'},
  'competitive':{pos:'adjective', meaning:'경쟁이 치열한, 경쟁력 있는, 경쟁심이 강한', synonyms:'highly contested, strong, ambitious', antonyms:'uncompetitive, weak', example:'The job market is highly competitive for recent graduates.'},
  'competition':{pos:'noun', meaning:'경쟁, 대회, 경쟁자들', synonyms:'contest, rivalry, competitors', antonyms:'cooperation', example:'Competition between universities can improve the quality of education.'},
  'compete':{pos:'verb', meaning:'경쟁하다, 겨루다', synonyms:'contest, rival', antonyms:'cooperate', example:'Small businesses often compete with larger companies online.'},
  'competitor':{pos:'noun', meaning:'경쟁자, 경쟁 업체', synonyms:'rival, opponent', antonyms:'partner', example:'The company lowered its prices to attract customers from a competitor.'},
  'slide away':{pos:'phrasal verb', meaning:'미끄러지듯 멀어지다, 서서히 사라지다', synonyms:'slip away, move away gradually', antonyms:'stay, remain', example:'The small boat began to slide away from the shore.'},
  'shedload':{pos:'noun, UK informal', meaning:'엄청난 양, 특히 돈', synonyms:'a large amount, a great deal, loads', antonyms:'a small amount', example:'The project cost a shedload of money.'},
  'shedloads':{pos:'noun, UK informal', meaning:'엄청난 양, 특히 돈', synonyms:'a large amount, a great deal, loads', antonyms:'a small amount', example:'They spent shedloads of money on the campaign.'},
  'mean':{pos:'verb, noun, adjective', meaning:'의미하다, 수단, 못된', synonyms:'signify, means, unkind', antonyms:'', example:'This word can mean different things in different contexts.'},
  'means':{pos:'noun, verb', meaning:'수단, 방법, 의미하다', synonyms:'method, way, signifies', antonyms:'', example:'Education can be a means of improving society.'},
  'gas corporation':{pos:'noun phrase', meaning:'가스공사, 가스 관련 공기업 또는 회사', synonyms:'gas company, gas utility', antonyms:'', example:'My father works for a gas corporation.'},
  'tangerine':{pos:'noun', meaning:'귤, 감귤', synonyms:'mandarin, citrus fruit', antonyms:'', example:'Jeju Island is famous for tangerines.'},
  'tangerines':{pos:'noun', meaning:'귤, 감귤', synonyms:'mandarins, citrus fruits', antonyms:'', example:'Jeju Island is famous for tangerines.'},
  'korean gas corporation':{pos:'noun phrase', meaning:'한국가스공사, 한국의 가스 관련 공기업', synonyms:'Korea Gas Corporation, gas company', antonyms:'', example:'My father works for a Korean gas corporation.'},
  'gas company':{pos:'noun phrase', meaning:'가스 회사', synonyms:'gas corporation, gas utility', antonyms:'', example:'My father works for a gas company.'},
  'gas utility':{pos:'noun phrase', meaning:'가스 공급 회사, 가스 공공사업체', synonyms:'gas company, gas corporation', antonyms:'', example:'A gas utility supplies gas to homes and businesses.'},
  'corporation':{pos:'noun', meaning:'기업, 회사, 법인, 공사', synonyms:'company, firm, business', antonyms:'individual', example:'A large corporation may have offices in several countries.'},
  'company':{pos:'noun', meaning:'회사', synonyms:'corporation, firm, business', antonyms:'', example:'My father works for a company.'},
  'work for':{pos:'phrase', meaning:'~에서 일하다, ~을 위해 일하다', synonyms:'be employed by, work at', antonyms:'', example:'My father works for a gas corporation.'},
  'works for':{pos:'phrase', meaning:'~에서 일한다, ~을 위해 일한다', synonyms:'is employed by, works at', antonyms:'', example:'My father works for a gas corporation.'},
  'work at':{pos:'phrase', meaning:'~에서 일하다', synonyms:'work for, be employed by', antonyms:'', example:'She works at an art academy.'},
  'work in':{pos:'phrase', meaning:'~분야에서 일하다, ~에서 근무하다', synonyms:'be employed in, specialise in', antonyms:'', example:'I want to work in digital design.'},
  'be employed by':{pos:'phrase', meaning:'~에 고용되어 있다, ~에서 일하다', synonyms:'work for', antonyms:'', example:'He is employed by a gas company.'},
  'at the moment':{pos:'phrase', meaning:'지금, 현재', synonyms:'currently, now, at present', antonyms:'', example:'At the moment, I am studying English and computer graphics.'},
  'at present':{pos:'phrase', meaning:'현재, 지금', synonyms:'currently, now, at the moment', antonyms:'', example:'At present, I am preparing for a master\'s degree in the UK.'},
  'currently':{pos:'adverb', meaning:'현재, 지금', synonyms:'at the moment, now, at present', antonyms:'formerly, previously', example:'I am currently studying English.'},
  'prepare for':{pos:'phrase', meaning:'~을 준비하다', synonyms:'get ready for, study for', antonyms:'', example:'I am preparing for a master\'s degree in the UK.'},
  'preparing for':{pos:'phrase', meaning:'~을 준비하고 있는', synonyms:'getting ready for, studying for', antonyms:'', example:'I am preparing for a master\'s degree in the UK.'},
  'master\'s degree':{pos:'noun phrase', meaning:'석사 학위', synonyms:'postgraduate degree, MA, MSc', antonyms:'', example:'I am preparing for a master\'s degree in the UK.'},
  'masters degree':{pos:'noun phrase', meaning:'석사 학위', synonyms:'master\'s degree, postgraduate degree', antonyms:'', example:'She wants to study for a master\'s degree.'},
  'postgraduate degree':{pos:'noun phrase', meaning:'대학원 학위, 석사 이상의 학위', synonyms:'master\'s degree, graduate degree', antonyms:'undergraduate degree', example:'A postgraduate degree can support my future career.'},
  'graduate school':{pos:'noun phrase', meaning:'대학원', synonyms:'postgraduate school', antonyms:'', example:'I am preparing to enter graduate school in the UK.'},
  'computer graphics':{pos:'noun phrase', meaning:'컴퓨터 그래픽', synonyms:'CG, digital graphics', antonyms:'', example:'I am studying English and computer graphics.'},
  '3d graphic':{pos:'noun phrase', meaning:'3D 그래픽', synonyms:'3D graphics, computer graphics', antonyms:'', example:'I worked in a 3D graphic company for almost one year.'},
  '3d graphics':{pos:'noun phrase', meaning:'3D 그래픽', synonyms:'3D graphic, computer graphics', antonyms:'', example:'I worked in a 3D graphics company for almost one year.'},
  'graphic design':{pos:'noun phrase', meaning:'그래픽 디자인', synonyms:'visual design', antonyms:'', example:'My younger brother studies graphic design.'},
  'game graphic design':{pos:'noun phrase', meaning:'게임 그래픽 디자인', synonyms:'game art, game graphics', antonyms:'', example:'My younger brother studies game graphic design at university.'},
  'game illustrator':{pos:'noun phrase', meaning:'게임 일러스트레이터', synonyms:'game artist, illustrator', antonyms:'', example:'He wants to become a game illustrator.'},
  'illustrator':{pos:'noun', meaning:'삽화가, 일러스트레이터', synonyms:'artist, visual artist', antonyms:'', example:'My brother wants to become an illustrator.'},
  'artist':{pos:'noun', meaning:'예술가, 화가', synonyms:'painter, creator', antonyms:'', example:'My mother is an artist.'},
  'painter':{pos:'noun', meaning:'화가', synonyms:'artist', antonyms:'', example:'My mother is a painter.'},
  'korean painting':{pos:'noun phrase', meaning:'한국화', synonyms:'traditional Korean painting', antonyms:'', example:'My mother studied Korean painting.'},
  'korean folk painting':{pos:'noun phrase', meaning:'민화', synonyms:'folk painting, traditional Korean folk painting', antonyms:'', example:'My mother mainly paints Korean folk paintings.'},
  'folk painting':{pos:'noun phrase', meaning:'민화, 민속화', synonyms:'Korean folk painting', antonyms:'', example:'Korean folk painting often uses symbolic images.'},
  'traditional painting':{pos:'noun phrase', meaning:'전통 회화', synonyms:'traditional art, Korean painting', antonyms:'contemporary painting', example:'She is interested in traditional painting.'},
  'traditional drawing':{pos:'noun phrase', meaning:'전통 그림, 전통적인 드로잉', synonyms:'traditional painting', antonyms:'', example:'My mother draws traditional drawings.'},
  'younger brother':{pos:'noun phrase', meaning:'남동생', synonyms:'younger sibling', antonyms:'older brother', example:'My younger brother studies graphic design.'},
  'younger sibling':{pos:'noun phrase', meaning:'동생', synonyms:'younger brother, younger sister', antonyms:'older sibling', example:'I have one younger sibling.'},
  'family member':{pos:'noun phrase', meaning:'가족 구성원', synonyms:'relative', antonyms:'', example:'There are four family members in my family.'},
  'family members':{pos:'noun phrase', meaning:'가족 구성원들', synonyms:'relatives', antonyms:'', example:'There are four family members in my family.'},
  'parents':{pos:'noun', meaning:'부모님', synonyms:'mother and father', antonyms:'children', example:'I live with my parents and younger brother.'},
  'university student':{pos:'noun phrase', meaning:'대학생', synonyms:'undergraduate student', antonyms:'', example:'My younger brother is a university student.'},
  'major in':{pos:'phrase', meaning:'~을 전공하다', synonyms:'study, specialise in', antonyms:'', example:'He majors in game graphic design.'},
  'majors in':{pos:'phrase', meaning:'~을 전공한다', synonyms:'studies, specialises in', antonyms:'', example:'He majors in game graphic design.'},
  'almost one year':{pos:'phrase', meaning:'거의 1년', synonyms:'nearly one year', antonyms:'', example:'I worked there for almost one year.'},
  'nearly one year':{pos:'phrase', meaning:'거의 1년', synonyms:'almost one year', antonyms:'', example:'I worked at the company for nearly one year.'},
  'jeju island':{pos:'noun phrase', meaning:'제주도', synonyms:'Jeju', antonyms:'', example:'I live on Jeju Island.'},
  'in the south of':{pos:'phrase', meaning:'~의 남쪽에', synonyms:'in southern', antonyms:'in the north of', example:'Jeju Island is in the south of Korea.'},
  'famous for':{pos:'phrase', meaning:'~로 유명한', synonyms:'well known for', antonyms:'', example:'Jeju Island is famous for its nature.'},
  'peaceful place':{pos:'noun phrase', meaning:'평화로운 곳', synonyms:'quiet place, calm place', antonyms:'busy place', example:'Jeju is a peaceful place to live.'},
  'public facility':{pos:'noun phrase', meaning:'공공시설', synonyms:'public amenity, public service', antonyms:'private facility', example:'A public facility should be accessible to everyone.'},
  'public facilities':{pos:'noun phrase', meaning:'공공시설', synonyms:'public amenities, public services', antonyms:'private facilities', example:'Public facilities need to consider pregnant women and older people.'},
  'pregnant women seat':{pos:'noun phrase', meaning:'임산부석', synonyms:'priority seat for pregnant women', antonyms:'', example:'Some buses have a pregnant women seat.'},
  'pregnant seat':{pos:'noun phrase', meaning:'임산부석', synonyms:'priority seat for pregnant women', antonyms:'', example:'People should leave a pregnant seat for those who need it.'},
  'in terms of':{pos:'phrase', meaning:'~의 측면에서, ~에 관하여', synonyms:'regarding, concerning', antonyms:'', example:'In terms of cost, public transport is often cheaper than driving.'},
  'as a result':{pos:'phrase', meaning:'그 결과', synonyms:'therefore, consequently', antonyms:'', example:'The number of buses increased. As a result, traffic became less severe.'},
  'due to':{pos:'phrase', meaning:'~때문에', synonyms:'because of, owing to', antonyms:'', example:'Some students struggle with writing due to limited vocabulary.'},
  'sexual crime':{pos:'noun phrase', meaning:'성범죄', synonyms:'sexual offence, sexual violence', antonyms:'', example:'The essay discusses how society can prevent sexual crime.'},
  'sex crime':{pos:'noun phrase', meaning:'성범죄', synonyms:'sexual offence, sexual violence', antonyms:'', example:'Governments should provide stronger support for victims of sex crime.'},
  'sexual offence':{pos:'noun phrase', meaning:'성범죄, 성 관련 범죄', synonyms:'sexual crime, sexual violence', antonyms:'', example:'A sexual offence can have serious long-term effects on victims.'},
  'sexual violence':{pos:'noun phrase', meaning:'성폭력', synonyms:'sexual crime, sexual offence', antonyms:'', example:'Education can help prevent sexual violence.'},
  'gender equality':{pos:'noun phrase', meaning:'성평등', synonyms:'equal rights, fairness', antonyms:'gender inequality, discrimination', example:'Gender equality is still an important issue in many countries.'},
  'women rights':{pos:'noun phrase', meaning:'여성의 권리', synonyms:"women's rights, equal rights", antonyms:'discrimination, inequality', example:"The government should protect women's rights more effectively."},
  "women's rights":{pos:'noun phrase', meaning:'여성의 권리', synonyms:'equal rights, civil rights', antonyms:'discrimination, inequality', example:"Women's rights should be protected by clear laws."},
  'public transport':{pos:'noun phrase', meaning:'대중교통', synonyms:'public transit, mass transit', antonyms:'private transport', example:'Public transport can reduce traffic and air pollution.'},
  'public facility':{pos:'noun phrase', meaning:'공공시설', synonyms:'public amenity, public service', antonyms:'private facility', example:'A public facility should be accessible to everyone.'},
  'public facilities':{pos:'noun phrase', meaning:'공공시설', synonyms:'public amenities, public services', antonyms:'private facilities', example:'Public facilities need to consider pregnant women and older people.'},
  'priority seat':{pos:'noun phrase', meaning:'교통약자석, 배려석', synonyms:'reserved seat', antonyms:'general seat', example:'People should leave a priority seat for passengers who need it.'},
  'pregnant women':{pos:'noun phrase', meaning:'임신부, 임신한 여성들', synonyms:'expectant mothers', antonyms:'', example:'Pregnant women may need more support in public places.'},
  'domestic violence':{pos:'noun phrase', meaning:'가정폭력', synonyms:'family violence, abuse', antonyms:'', example:'Domestic violence requires stronger legal protection.'},
  'emergency number':{pos:'noun phrase', meaning:'긴급 신고 번호', synonyms:'emergency hotline, helpline', antonyms:'', example:'An emergency number can help people contact support quickly.'},
  'a wide range of':{pos:'phrase', meaning:'다양한, 폭넓은', synonyms:'various, diverse', antonyms:'limited, narrow', example:'Museums can attract a wide range of visitors.'},
  'be likely to':{pos:'phrase', meaning:'~할 가능성이 있다', synonyms:'tend to, be expected to', antonyms:'be unlikely to', example:'People are likely to use public transport if it is reliable.'},
  admission:{pos:'noun', meaning:'입학, 입장, 승인', synonyms:'entry, acceptance, enrolment', antonyms:'rejection, refusal', example:'University admission requirements vary between courses.'},
  admissions:{pos:'noun', meaning:'입학 허가 수, 입학 관련 절차', synonyms:'entries, acceptances, enrolments', antonyms:'rejections, refusals', example:'Admissions to nursing courses increased sharply.'},
  equality:{pos:'noun', meaning:'평등', synonyms:'fairness, parity', antonyms:'inequality, discrimination', example:'Gender equality remains an important social issue.'},
  inequality:{pos:'noun', meaning:'불평등', synonyms:'disparity, imbalance', antonyms:'equality, fairness', example:'The report examines inequality in education.'},
  environment:{pos:'noun', meaning:'환경', synonyms:'surroundings, conditions', antonyms:'', example:'Public transport can reduce damage to the environment.'},
  environmental:{pos:'adjective', meaning:'환경의, 환경과 관련된', synonyms:'ecological, green', antonyms:'', example:'Environmental problems require long-term policies.'},
  public:{pos:'adjective, noun', meaning:'공공의, 대중', synonyms:'civic, communal', antonyms:'private, individual', example:'Public facilities should be accessible to everyone.'},
  transport:{pos:'noun, verb', meaning:'교통, 운송하다', synonyms:'transportation, transit', antonyms:'', example:'Improved public transport can reduce traffic congestion.'},
  facility:{pos:'noun', meaning:'시설, 설비', synonyms:'amenity, service', antonyms:'', example:'The university provides excellent research facilities.'},
  facilities:{pos:'noun', meaning:'시설들, 편의 시설', synonyms:'amenities, services', antonyms:'', example:'The city needs better facilities for commuters.'},
  opportunity:{pos:'noun', meaning:'기회', synonyms:'chance, prospect', antonyms:'obstacle, limitation', example:'Education can provide wider career opportunities.'},
  opportunities:{pos:'noun', meaning:'기회들', synonyms:'chances, prospects', antonyms:'obstacles, limitations', example:'Students need more opportunities to practise speaking.'},
  pregnancy:{pos:'noun', meaning:'임신', synonyms:'maternity', antonyms:'', example:'Pregnancy can affect access to work and public services.'},
  pregnant:{pos:'adjective', meaning:'임신한', synonyms:'expectant', antonyms:'', example:'Pregnant women should be given priority seats.'},
  protect:{pos:'verb', meaning:'보호하다', synonyms:'safeguard, defend', antonyms:'harm, endanger', example:'Laws should protect vulnerable people.'},
  protection:{pos:'noun', meaning:'보호', synonyms:'safeguarding, defence', antonyms:'harm, risk', example:'Stronger protection is needed for victims of crime.'},
  policy:{pos:'noun', meaning:'정책, 방침', synonyms:'strategy, measure', antonyms:'', example:'The government introduced a new transport policy.'},
  issue:{pos:'noun', meaning:'문제, 쟁점', synonyms:'problem, matter', antonyms:'solution', example:'Housing is a major issue in many cities.'},
  significant:{pos:'adjective', meaning:'중요한, 상당한', synonyms:'important, considerable', antonyms:'minor, insignificant', example:'There was a significant increase in demand.'},
  increase:{pos:'noun, verb', meaning:'증가, 증가하다', synonyms:'rise, growth', antonyms:'decrease, decline', example:'The number of applicants increased in 2014.'},
  decrease:{pos:'noun, verb', meaning:'감소, 감소하다', synonyms:'decline, reduction', antonyms:'increase, rise', example:'The figure decreased slightly after 2010.'},
  remain:{pos:'verb', meaning:'남아 있다, 계속되다', synonyms:'continue, persist', antonyms:'disappear, cease', example:'Several problems remain unresolved.'},
  improve:{pos:'verb', meaning:'개선하다, 나아지다', synonyms:'enhance, strengthen', antonyms:'worsen, weaken', example:'Regular practice can improve speaking fluency.'},
  consider:{pos:'verb', meaning:'고려하다, 생각하다', synonyms:'take into account, examine', antonyms:'ignore, overlook', example:'Governments should consider the needs of older people.'},
  ignore:{pos:'verb', meaning:'무시하다', synonyms:'overlook, disregard', antonyms:'consider, notice', example:'Some passengers ignore priority seat rules.'},
  responsibility:{pos:'noun', meaning:'책임', synonyms:'duty, obligation', antonyms:'irresponsibility', example:'Parents share responsibility for childcare.'},
  access:{pos:'noun, verb', meaning:'접근, 이용 권한, 접근하다', synonyms:'availability, entry', antonyms:'exclusion, restriction', example:'Digital tools can improve access to cultural heritage.'},
  evidence:{pos:'noun', meaning:'증거, 근거', synonyms:'proof, data', antonyms:'assumption', example:'The argument should be supported by clear evidence.'},
  analyse:{pos:'verb', meaning:'분석하다', synonyms:'examine, evaluate', antonyms:'', example:'Students need to analyse the chart carefully.'},
  analysis:{pos:'noun', meaning:'분석', synonyms:'examination, evaluation', antonyms:'', example:'The essay requires a clear analysis of the causes.'},
  indicate:{pos:'verb', meaning:'나타내다, 보여주다', synonyms:'show, suggest', antonyms:'conceal', example:'The data indicate a steady rise.'},
  fluctuate:{pos:'verb', meaning:'변동하다', synonyms:'vary, shift', antonyms:'stabilise', example:'The figures fluctuated throughout the period.'},
  proportion:{pos:'noun', meaning:'비율, 부분', synonyms:'percentage, share', antonyms:'', example:'A large proportion of students chose law.'},
  trend:{pos:'noun', meaning:'경향, 추세', synonyms:'pattern, tendency', antonyms:'', example:'The chart shows an upward trend.'},
  consequence:{pos:'noun', meaning:'결과, 영향', synonyms:'result, outcome', antonyms:'cause', example:'Air pollution is a consequence of heavy traffic.'},
  advantage:{pos:'noun', meaning:'장점, 이점', synonyms:'benefit, strength', antonyms:'disadvantage, drawback', example:'One advantage of online learning is flexibility.'},
  disadvantage:{pos:'noun', meaning:'단점, 불리한 점', synonyms:'drawback, limitation', antonyms:'advantage, benefit', example:'A major disadvantage is the lack of face-to-face contact.'},
  benefit:{pos:'noun, verb', meaning:'이점, 혜택, 이롭다', synonyms:'advantage, gain', antonyms:'drawback, harm', example:'The scheme could benefit local residents.'},
  challenge:{pos:'noun, verb', meaning:'어려움, 도전, 이의를 제기하다', synonyms:'difficulty, obstacle', antonyms:'ease, solution', example:'Time management is a common challenge in IELTS Reading.'},
  accurate:{pos:'adjective', meaning:'정확한', synonyms:'precise, correct', antonyms:'inaccurate, wrong', example:'Accurate grammar is important in formal writing.'},
  appropriate:{pos:'adjective', meaning:'적절한', synonyms:'suitable, proper', antonyms:'inappropriate, unsuitable', example:'Use appropriate vocabulary for academic essays.'},
  require:{pos:'verb', meaning:'요구하다, 필요로 하다', synonyms:'need, demand', antonyms:'', example:'This task requires a clear overview.'},
  essential:{pos:'adjective', meaning:'필수적인, 매우 중요한', synonyms:'crucial, vital', antonyms:'optional, unnecessary', example:'Planning is essential for Task 2 writing.'},
  tangerine:{pos:'noun', meaning:'귤, 감귤', synonyms:'mandarin, citrus fruit', antonyms:'', example:'Jeju Island is famous for tangerines.'},
  tangerines:{pos:'noun', meaning:'귤, 감귤', synonyms:'mandarins, citrus fruit', antonyms:'', example:'Jeju Island is famous for tangerines.'},
  whenever:{pos:'conjunction, adverb', meaning:'~할 때마다, 언제든지', synonyms:'every time, any time', antonyms:'', example:'I can see the sea whenever I want.'},
  relaxed:{pos:'adjective', meaning:'편안한, 여유로운', synonyms:'calm, comfortable', antonyms:'tense, stressed', example:'That makes daily life feel much more relaxed.'},
  'travel around':{pos:'phrase', meaning:'여기저기 돌아다니다, 이동하다', synonyms:'get around, move around', antonyms:'stay in one place', example:'Jeju is small enough to travel around easily.'},
  'small enough to':{pos:'phrase', meaning:'~하기에 충분히 작은', synonyms:'compact enough to', antonyms:'too large to', example:'Jeju is small enough to travel around easily.'},
  optional:{pos:'adjective', meaning:'선택적인', synonyms:'voluntary, elective', antonyms:'compulsory, mandatory', example:'The recording file is optional.'},
  compulsory:{pos:'adjective', meaning:'의무적인, 필수의', synonyms:'mandatory, required', antonyms:'optional, voluntary', example:'Attendance is compulsory for this workshop.'},
  mandatory:{pos:'adjective', meaning:'의무적인', synonyms:'compulsory, required', antonyms:'optional, voluntary', example:'Some courses have mandatory language requirements.'},
  relevant:{pos:'adjective', meaning:'관련 있는, 적절한', synonyms:'related, applicable', antonyms:'irrelevant, unrelated', example:'Use relevant examples to support your answer.'},
  irrelevant:{pos:'adjective', meaning:'관련 없는', synonyms:'unrelated, inapplicable', antonyms:'relevant, related', example:'Avoid irrelevant details in the introduction.'},
  complex:{pos:'adjective', meaning:'복잡한', synonyms:'complicated, intricate', antonyms:'simple, straightforward', example:'The passage includes several complex arguments.'},
  simple:{pos:'adjective', meaning:'간단한', synonyms:'straightforward, basic', antonyms:'complex, complicated', example:'A simple structure can make an essay clearer.'}
};

function ensureQuickVocabState(state){
  const date = studyDateISO();
  if(!state.quickVocab || state.quickVocab.date !== date){
    state.quickVocab = {date, items:[], collapsed:false, x:null, y:null};
  }
  if(!Array.isArray(state.quickVocab.items)) state.quickVocab.items=[];
  return state.quickVocab;
}

function quickVocabIELTSFilter(list){
  return String(list || '').split(',').map(v=>v.trim()).filter(Boolean).join(', ');
}

function quickVocabHasKorean(value){
  return /[가-힣]/.test(String(value || ''));
}

function quickVocabLooksEnglishOnly(value){
  const text=String(value || '').trim();
  if(!text) return false;
  if(quickVocabHasKorean(text)) return false;
  return /[A-Za-z]/.test(text);
}

async function quickVocabTranslateToKorean(text){
  const raw=String(text || '').trim();
  if(!raw) return '';
  if(quickVocabHasKorean(raw)) return raw;
  try{
    const url='https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=ko&dt=t&q='+encodeURIComponent(raw);
    const res=await fetch(url);
    if(!res.ok) return '';
    const data=await res.json();
    const translated=Array.isArray(data?.[0]) ? data[0].map(part=>part?.[0] || '').join('').trim() : '';
    if(translated && quickVocabHasKorean(translated)) return translated;
  }catch(e){}
  return '';
}

function quickVocabCleanDictionaryMeaning(value){
  let text=String(value || '').trim();
  if(!text || !quickVocabHasKorean(text)) return '';
  text=text
    .replace(/^[-•·ㆍ\s]+/g,'')
    .replace(/[.。]+$/g,'')
    .replace(/\s+/g,' ')
    .replace(/\([^)]{8,}\)/g,'')
    .replace(/\[[^\]]+\]/g,'')
    .trim();
  if(!text || !quickVocabHasKorean(text)) return '';
  const banned=/^(그것|이것|저것|무언가|어떤 것|사람|경우|상황|상태)$/;
  if(banned.test(text)) return '';
  if(text.length>24) return '';
  return text;
}

function quickVocabPushMeaning(out, value){
  const cleaned=quickVocabCleanDictionaryMeaning(value);
  if(!cleaned) return;
  const key=cleaned.replace(/\s+/g,' ');
  if(out.some(v=>v.replace(/\s+/g,' ')===key)) return;
  out.push(cleaned);
}

async function quickVocabGoogleDictionaryMeanings(word, limit=3){
  const raw=String(word || '').trim();
  if(!raw) return [];
  const out=[];
  try{
    const url='https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=ko&dt=t&dt=bd&q='+encodeURIComponent(raw);
    const res=await fetch(url);
    if(!res.ok) return out;
    const data=await res.json();
    const translated=Array.isArray(data?.[0]) ? data[0].map(part=>part?.[0] || '').join('').trim() : '';
    quickVocabPushMeaning(out, translated);
    const dict=Array.isArray(data?.[1]) ? data[1] : [];
    dict.forEach(group=>{
      const entries=Array.isArray(group?.[1]) ? group[1] : [];
      entries.forEach(entry=>{
        if(typeof entry === 'string') quickVocabPushMeaning(out, entry);
        else if(Array.isArray(entry)) quickVocabPushMeaning(out, entry[0]);
      });
    });
  }catch(e){}
  return out.slice(0,limit);
}

function quickVocabExtractDictionaryExample(entry){
  const meanings=Array.isArray(entry?.meanings) ? entry.meanings : [];
  for(const meaning of meanings.slice(0,5)){
    const definitions=Array.isArray(meaning?.definitions) ? meaning.definitions : [];
    for(const def of definitions.slice(0,5)){
      const example=String(def?.example || '').trim();
      if(example) return example;
    }
  }
  return '';
}

function quickVocabFallbackExample(term, pos='', meaning=''){
  const raw=String(term || '').trim();
  if(!raw) return '';
  const safe=raw.replace(/\s+/g,' ');
  const lower=safe.toLowerCase();
  const preset={
    competitive:'The job market is highly competitive for recent graduates.',
    competition:'Competition between universities can improve the quality of education.',
    compete:'Small businesses often compete with larger companies online.',
    competitor:'The company lowered its prices to attract customers from a competitor.',
    advantage:'One advantage of online learning is flexibility.',
    disadvantage:'A major disadvantage is the lack of face-to-face contact.',
    benefit:'The new policy could benefit local residents.',
    challenge:'Time management is a common challenge in IELTS Reading.',
    accurate:'Accurate grammar is important in formal writing.',
    relevant:'Use relevant examples to support your answer.'
  };
  if(preset[lower]) return preset[lower];

  const p=String(pos || '').toLowerCase();
  const m=String(meaning || '');
  const phrase=safe.includes(' ');

  if(phrase) return `Students should use ${safe} correctly in academic writing.`;
  if(p.includes('verb') || /하다|시키다|되다/.test(m)) return `Many students ${safe} different ideas before writing an essay.`;
  if(p.includes('adjective') || /한|적인|있는|없는|치열한|강한|약한/.test(m)) return `A ${safe} approach can make the argument clearer.`;
  if(p.includes('adverb')) return `The figures increased ${safe} during the final year.`;
  if(p.includes('noun') || m) return `The essay discusses the importance of ${safe} in modern society.`;
  return `Students often use ${safe} when discussing social issues.`;
}

function quickVocabNaverURL(value){
  const term=firstQuickVocabTerm(value);
  return term ? NAVER_DICT_BASE + encodeURIComponent(term) : '';
}

function openNaverDict(value){
  const url=quickVocabNaverURL(value);
  const status=byId('quick-vocab-status');
  if(!url){
    if(status){ status.textContent='사전에서 확인할 단어 또는 어구를 입력해 주세요.'; status.classList.remove('jy-hidden'); }
    return;
  }
  window.open(url, '_blank', 'noopener');
}

function quickVocabNormaliseKoreanMeaning(value){
  const text=String(value || '').trim();
  if(!text) return '';
  if(quickVocabHasKorean(text)) return text.replace(/^영어 뜻:\s*/i,'').trim();
  return '';
}

function quickVocabSingleWordCandidates(word){
  const base=normaliseWordKey(word);
  if(!base || base.includes(' ')) return [];
  const out=[];
  const add=v=>{ v=normaliseWordKey(v); if(v && !out.includes(v)) out.push(v); };
  const irregular={
    slid:'slide',
    sliding:'slide',
    slides:'slide',
    went:'go',
    gone:'go',
    got:'get',
    gotten:'get',
    made:'make',
    took:'take',
    taken:'take',
    wrote:'write',
    written:'write',
    spoke:'speak',
    spoken:'speak',
    began:'begin',
    begun:'begin'
  };
  add(base);
  if(irregular[base]) add(irregular[base]);
  add(base.replace(/[.!?]+$/g,''));
  add(base.replace(/'s$/,''));
  add(base.replace(/ies$/,'y'));
  add(base.replace(/ves$/,'f'));
  add(base.replace(/es$/,''));
  add(base.replace(/s$/,''));
  add(base.replace(/ing$/,''));
  add(base.replace(/ing$/,'e'));
  add(base.replace(/ied$/,'y'));
  add(base.replace(/ed$/,''));
  add(base.replace(/ed$/,'e'));
  add(base.replace(/er$/,''));
  add(base.replace(/est$/,''));
  return out;
}

function quickVocabCandidateKeys(key){
  const base=normaliseWordKey(key);
  if(!base) return [];
  const out=[];
  const add=v=>{ v=normaliseWordKey(v); if(v && !out.includes(v)) out.push(v); };
  quickVocabSingleWordCandidates(base).forEach(add);
  add(base);
  if(base.includes('-')) add(base.replace(/-/g,' '));
  if(base.includes(' ')){
    add(base.replace(/\s+/g,'-'));
    const parts=base.split(' ').filter(Boolean);
    if(parts.length>1){
      quickVocabSingleWordCandidates(parts[0]).forEach(first=>add([first].concat(parts.slice(1)).join(' ')));
      quickVocabSingleWordCandidates(parts[parts.length-1]).forEach(last=>add(parts.slice(0,-1).concat(last).join(' ')));
    }
  }
  return out;
}
function quickVocabFindLocal(word){
  const raw=String(word || '').trim();
  const key=normaliseWordKey(raw);
  if(!key) return null;
  const candidates=quickVocabCandidateKeys(key);
  const bank=getVocabBank();

  for(const k of candidates){
    const exactBank=bank.find(item=>normaliseWordKey(item.word)===k);
    const preset=JY_QUICK_VOCAB_OVERRIDES[k] || null;
    if(exactBank || preset){
      const item=Object.assign({word:raw, meaning:'', example:'', pos:'', synonyms:'', antonyms:'', source:'manual'}, exactBank || {}, preset || {});
      item.word=exactBank?.word || preset?.word || raw;
      item.source=preset ? 'preset' : 'bank';
      if(k!==key) item.source='base-form';
      return item;
    }
  }

  const phraseHits=[];
  Object.keys(JY_QUICK_VOCAB_OVERRIDES).forEach(k=>{
    if(k.includes(' ') && (key.includes(k) || key.includes(k.replace(/\s+/g,'-')))) phraseHits.push({key:k,item:JY_QUICK_VOCAB_OVERRIDES[k]});
  });
  bank.forEach(item=>{
    const k=normaliseWordKey(item.word);
    if(k.includes(' ') && (key.includes(k) || key.includes(k.replace(/\s+/g,'-')))) phraseHits.push({key:k,item});
  });
  phraseHits.sort((a,b)=>b.key.length-a.key.length);
  if(phraseHits.length){
    const first=phraseHits[0].item;
    return {
      word: raw,
      meaning: phraseHits.slice(0,3).map(v=>v.key+': '+(v.item.meaning || '')).join(' / '),
      pos:first.pos || 'phrase',
      synonyms:first.synonyms || '',
      antonyms:first.antonyms || '',
      example:first.example || '',
      source:'embedded'
    };
  }

  if(key.includes(' ')){
    const parts=key.split(' ').filter(Boolean);
    const translatedParts=parts.map(part=>{
      const found=quickVocabFindLocal(part);
      return found?.meaning || '';
    }).filter(Boolean);
    if(translatedParts.length===parts.length){
      return {word:raw, meaning:translatedParts.join(' / '), example:'', pos:'phrase', synonyms:'', antonyms:'', source:'combined'};
    }
  }

  return {word:raw, meaning:'', example:'', pos:key.includes(' ')?'phrase':'', synonyms:'', antonyms:'', source:'manual'};
}
function quickVocabLookup(word){
  const item=quickVocabFindLocal(word);
  if(!item) return null;
  item.synonyms = quickVocabIELTSFilter(item.synonyms);
  item.antonyms = quickVocabIELTSFilter(item.antonyms);
  return item;
}
function quickVocabMeaningParts(value){
  const text=quickVocabNormaliseKoreanMeaning(value);
  if(!text) return [];
  return text.split(/\s*(?:\/|,|;|·|ㆍ|\n)+\s*/).map(v=>v.trim()).filter(Boolean);
}
function quickVocabJoinMeanings(parts, limit=3){
  const out=[];
  parts.forEach(part=>{
    const text=quickVocabNormaliseKoreanMeaning(part).replace(/^사전 설명:\s*/,'').trim();
    if(!text || !quickVocabHasKorean(text)) return;
    const key=text.replace(/\s+/g,' ');
    if(!out.some(v=>v.replace(/\s+/g,' ')===key)) out.push(text);
  });
  return out.slice(0,limit).join(' / ');
}
function quickVocabConciseKoreanMeanings(value, limit=3){
  const raw=quickVocabNormaliseKoreanMeaning(value);
  if(!raw) return [];
  const banned=/(행위|상태|과정|설명|정의|손상|상실|분해|해체|산물|물질|사람|것|경우|방식|정도|특성|목적|결과|또는|그리고)/;
  const parts=raw
    .replace(/^사전 설명:\s*/,'')
    .split(/\s*(?:\/|;|·|ㆍ|\n)+\s*/)
    .flatMap(v=>v.split(/\s*,\s*/))
    .map(v=>v.replace(/\s+/g,' ').trim())
    .filter(Boolean);
  const out=[];
  parts.forEach(part=>{
    const clean=part.replace(/[.。]+$/,'').trim();
    if(!clean || !quickVocabHasKorean(clean)) return;
    if(clean.length>12) return;
    if(banned.test(clean) && clean.length>6) return;
    if(!out.includes(clean)) out.push(clean);
  });
  return out.slice(0,limit);
}

async function quickVocabDefinitionMeaningsToKorean(entry, fallbackTerm){
  const parts=[];
  quickVocabMeaningParts(fallbackTerm).forEach(v=>quickVocabPushMeaning(parts, v));
  const meanings=Array.isArray(entry?.meanings) ? entry.meanings.slice(0,4) : [];
  for(const meaning of meanings){
    const definitions=Array.isArray(meaning?.definitions) ? meaning.definitions.slice(0,2) : [];
    for(const def of definitions){
      if(!def?.definition) continue;
      const translated=await quickVocabTranslateToKorean(def.definition);
      quickVocabConciseKoreanMeanings(translated, 2).forEach(v=>quickVocabPushMeaning(parts, v));
      if(parts.length>=3) break;
    }
    if(parts.length>=3) break;
  }
  return parts.slice(0,3).join(' / ');
}
async function quickVocabLookupOnline(word){
  const raw=String(word || '').trim();
  const key=normaliseWordKey(raw);
  if(!key) return null;

  const googleMeanings=await quickVocabGoogleDictionaryMeanings(key, 3);
  const translatedTerm=googleMeanings.join(' / ') || await quickVocabTranslateToKorean(key);

  if(key.includes(' ')){
    if(translatedTerm){
      return {
        word:raw,
        meaning:quickVocabJoinMeanings(quickVocabMeaningParts(translatedTerm), 3),
        pos:'phrase',
        synonyms:'',
        antonyms:'',
        example:quickVocabFallbackExample(raw, 'phrase', translatedTerm),
        source:'online-ko'
      };
    }
    return null;
  }

  const candidates=quickVocabCandidateKeys(key).slice(0,5);
  for(const candidate of candidates){
    try{
      const res=await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/'+encodeURIComponent(candidate));
      if(!res.ok) continue;
      const data=await res.json();
      const entry=Array.isArray(data) ? data[0] : null;
      const meanings=Array.isArray(entry?.meanings) ? entry.meanings : [];
      const dictionaryMeanings=await quickVocabDefinitionMeaningsToKorean(entry, translatedTerm || googleMeanings.join(' / '));
      const koreanMeaning=quickVocabJoinMeanings(
        quickVocabMeaningParts(translatedTerm).concat(quickVocabMeaningParts(dictionaryMeanings)),
        3
      );
      if(koreanMeaning && quickVocabHasKorean(koreanMeaning)){
        const synonyms=[];
        const antonyms=[];
        meanings.slice(0,5).forEach(m=>{
          (m.synonyms || []).forEach(v=>synonyms.push(v));
          (m.antonyms || []).forEach(v=>antonyms.push(v));
          (m.definitions || []).slice(0,3).forEach(d=>{
            (d.synonyms || []).forEach(v=>synonyms.push(v));
            (d.antonyms || []).forEach(v=>antonyms.push(v));
          });
        });
        const example=quickVocabExtractDictionaryExample(entry) || quickVocabFallbackExample(raw, meanings.map(m=>m.partOfSpeech).filter(Boolean).slice(0,4).join(', '), koreanMeaning);
        return {
          word:raw,
          meaning:koreanMeaning,
          pos:meanings.map(m=>m.partOfSpeech).filter(Boolean).slice(0,4).join(', '),
          synonyms:quickVocabIELTSFilter(synonyms.slice(0,8).join(', ')),
          antonyms:quickVocabIELTSFilter(antonyms.slice(0,8).join(', ')),
          example,
          source:'online-ko'
        };
      }
    }catch(e){}
  }

  if(translatedTerm){
    return {
      word:raw,
      meaning:quickVocabJoinMeanings(quickVocabMeaningParts(translatedTerm), 3),
      pos:'',
      synonyms:'',
      antonyms:'',
      example:quickVocabFallbackExample(raw, '', translatedTerm),
      source:'online-ko'
    };
  }
  return null;
}


function vocabMeaningCellHTML(w){
  const extras=[];
  if(w.pos) extras.push('품사: '+w.pos);
  if(w.synonyms) extras.push('유의어: '+w.synonyms);
  if(w.antonyms) extras.push('반의어: '+w.antonyms);
  return `${esc(w.meaning || '')}${extras.length ? `<div class="jy-vocab-extra">${extras.map(esc).join('<br>')}</div>` : ''}`;
}

function quickVocabTodayItems(){
  const state=readState();
  const quick=ensureQuickVocabState(state);
  writeState(state);
  return quick.items || [];
}

function quickVocabExistsInBank(word){
  const key=normaliseWordKey(word);
  if(!key) return false;
  const candidates=quickVocabCandidateKeys(key);
  return getVocabBank().some(item=>candidates.includes(normaliseWordKey(item.word)));
}

function setQuickVocabBankStatus(exists){
  const el=byId('quick-vocab-bank-status');
  if(!el) return;
  if(exists){
    el.textContent='이미 단어장에 있음';
    el.classList.add('active');
  }else{
    el.textContent='';
    el.classList.remove('active');
  }
}

function firstQuickVocabTerm(value){
  return String(value || '').split(/\n|,|;/).map(v=>v.trim()).filter(Boolean)[0] || '';
}
function speakEnglishText(value){
  const text=firstQuickVocabTerm(value);
  const status=byId('quick-vocab-status');
  if(!text){
    if(status){ status.textContent='발음 확인할 단어 또는 어구를 입력해 주세요.'; status.classList.remove('jy-hidden'); }
    return;
  }
  if(!('speechSynthesis' in window) || typeof SpeechSynthesisUtterance === 'undefined'){
    if(status){ status.textContent='이 브라우저에서는 발음 듣기를 지원하지 않습니다.'; status.classList.remove('jy-hidden'); }
    return;
  }
  try{
    window.speechSynthesis.cancel();
    const utterance=new SpeechSynthesisUtterance(text);
    utterance.lang='en-GB';
    utterance.rate=0.85;
    utterance.pitch=1;
    const voices=window.speechSynthesis.getVoices ? window.speechSynthesis.getVoices() : [];
    const voice=voices.find(v=>/^en[-_]GB/i.test(v.lang)) || voices.find(v=>/^en/i.test(v.lang));
    if(voice) utterance.voice=voice;
    window.speechSynthesis.speak(utterance);
    if(status){ status.textContent='발음 재생 중'; status.classList.remove('jy-hidden'); }
  }catch(e){
    if(status){ status.textContent='발음을 재생하지 못했습니다.'; status.classList.remove('jy-hidden'); }
  }
}

function mergeQuickVocabIntoBank(current, cleaned){
  const key=normaliseWordKey(cleaned.word);
  const list=Array.isArray(current) ? current.slice() : [];
  const index=list.findIndex(v=>normaliseWordKey(v.word)===key);
  if(index>=0){
    const prev=list[index] || {};
    list[index]=Object.assign({}, prev, {
      word:prev.word || cleaned.word,
      meaning:cleaned.meaning || prev.meaning || '',
      example:cleaned.example || prev.example || '',
      pos:cleaned.pos || prev.pos || '',
      synonyms:cleaned.synonyms || prev.synonyms || '',
      antonyms:cleaned.antonyms || prev.antonyms || ''
    });
    return {list:dedupeWords(list), existed:true};
  }
  list.push(cleaned);
  return {list:dedupeWords(list), existed:false};
}
function saveQuickVocabItem(item){
  const cleaned=cleanWordItem(item);
  const key=normaliseWordKey(cleaned.word);
  if(!key) return {ok:false, reason:'empty'};
  const state=readState();
  const quick=ensureQuickVocabState(state);
  const current=Array.isArray(state.vocabBank) && state.vocabBank.length ? state.vocabBank : getVocabBank();
  const merged=mergeQuickVocabIntoBank(current, cleaned);
  state.vocabBank=merged.list;
  state.vocabVersion=JY_VOCAB_VERSION;
  const bankItem=state.vocabBank.find(v=>normaliseWordKey(v.word)===key) || cleaned;
  const todayItem=Object.assign({}, bankItem, {savedAt:new Date().toLocaleTimeString('ko-KR', {hour:'2-digit', minute:'2-digit'}), existed:merged.existed});
  quick.items=(quick.items || []).filter(v=>normaliseWordKey(v.word)!==key);
  quick.items.unshift(todayItem);
  writeState(state);
  return {ok:true, existed:merged.existed};
}

function quickVocabWidgetHTML(){
  const state=readState();
  const quick=ensureQuickVocabState(state);
  writeState(state);
  const collapsed=!!quick.collapsed;
  const posStyle=(quick.x!==null && quick.y!==null) ? `left:${Number(quick.x)}px;top:${Number(quick.y)}px;right:auto;bottom:auto;` : '';
  const today=(quick.items || []).slice(0,12);
  const list=quickVocabListHTML(today);
  return `<aside id="jy-quick-vocab" class="jy-quick-vocab ${collapsed?'collapsed':''}" style="${posStyle}">
    <div class="jy-quick-vocab-tab" id="quick-vocab-open">열기</div>
    <div class="jy-quick-vocab-panel">
      <div class="jy-quick-vocab-head" id="quick-vocab-drag"><strong>모르는 단어 · 어구</strong><button type="button" class="jy-btn jy-delete" id="quick-vocab-close">닫기</button></div>
      <div class="jy-quick-vocab-row"><input class="jy-input jy-quick-vocab-word-input" id="quick-vocab-word" placeholder="단어 또는 어구" spellcheck="false" autocomplete="off" autocorrect="off" autocapitalize="none"><button class="jy-btn dark" type="button" id="quick-vocab-check">확인</button><button class="jy-btn jy-quick-vocab-pronounce" type="button" id="quick-vocab-pronounce">발음</button><button class="jy-btn" type="button" id="quick-vocab-naver">네이버</button></div>
      <span class="jy-quick-vocab-bank-status" id="quick-vocab-bank-status"></span>
      <div class="jy-quick-vocab-status" id="quick-vocab-status"></div>
      <div class="jy-quick-vocab-result" id="quick-vocab-result">
        <label class="jy-label">뜻</label><textarea class="jy-textarea jy-auto-grow jy-quick-vocab-meaning" id="quick-vocab-meaning" placeholder="뜻이 여러 개면 / 로 나눠 적어도 됩니다."></textarea>
        <label class="jy-label">품사</label><input class="jy-input" id="quick-vocab-pos">
        <label class="jy-label">유의어</label><input class="jy-input" id="quick-vocab-synonyms">
        <label class="jy-label">반의어</label><input class="jy-input" id="quick-vocab-antonyms">
        <label class="jy-label">예문</label><textarea class="jy-textarea jy-auto-grow" id="quick-vocab-example"></textarea>
        <button class="jy-btn dark" type="button" id="quick-vocab-save">저장</button>
      </div>
      <div class="jy-quick-vocab-list" id="quick-vocab-list">${list}</div>
    </div>
  </aside>`;
}


function unwrapAutoVocabMarks(root){
  if(!root || !root.querySelectorAll) return;
  root.querySelectorAll('[data-jy-auto-vocab]').forEach(mark=>{
    const parent=mark.parentNode;
    if(!parent) return;
    while(mark.firstChild) parent.insertBefore(mark.firstChild, mark);
    parent.removeChild(mark);
    parent.normalize?.();
  });
}
function quickVocabHighlightTerms(){
  const items=quickVocabTodayItems();
  const terms=[];
  const add=v=>{
    v=normaliseWordKey(v);
    if(!v || v.length<2) return;
    if(!terms.includes(v)) terms.push(v);
  };
  items.forEach(item=>{
    const key=normaliseWordKey(item.word);
    add(key);
    if(!key.includes(' ')){
      if(/[^s]$/.test(key)) add(key+'s');
      if(/[^e]$/.test(key)) add(key+'es');
      if(key.endsWith('y')) add(key.slice(0,-1)+'ies');
    }
  });
  return terms.sort((a,b)=>b.length-a.length).slice(0,80);
}
function escapeRegExp(value){
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
function autoVocabShouldSkipNode(node){
  const parent=node?.parentElement;
  if(!parent) return true;
  if(parent.closest('#jy-quick-vocab,#jy-study-timer,.jy-study-timer-open,.jy-chatgpt-search,.jy-rich-toolbar,[data-jy-auto-vocab],script,style,noscript,textarea,input,select,button')) return true;
  if(parent.closest('[contenteditable="false"]')) return true;
  return false;
}
function highlightTextNodeWithTerms(textNode, regex){
  const text=textNode.nodeValue;
  if(!text || !regex.test(text)) return;
  regex.lastIndex=0;
  const frag=document.createDocumentFragment();
  let last=0;
  text.replace(regex, (match, prefix, term, offset)=>{
    const start=offset + prefix.length;
    if(start>last) frag.appendChild(document.createTextNode(text.slice(last,start)));
    const span=document.createElement('span');
    span.className='jy-today-vocab-mark';
    span.setAttribute('data-jy-auto-vocab','1');
    span.textContent=term;
    frag.appendChild(span);
    last=start+term.length;
    return match;
  });
  if(last<text.length) frag.appendChild(document.createTextNode(text.slice(last)));
  textNode.parentNode.replaceChild(frag,textNode);
}
function applyTodayQuickVocabHighlights(currentRoute){
  if(currentRoute==='home' || currentRoute==='school') return;
  const root=byId('app');
  if(!root) return;
  unwrapAutoVocabMarks(root);
  const terms=quickVocabHighlightTerms();
  if(!terms.length) return;
  const pattern=terms.map(escapeRegExp).join('|');
  const regex=new RegExp('(^|[^A-Za-z])('+pattern+')(?=$|[^A-Za-z])','gi');
  const walker=document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node){
      if(autoVocabShouldSkipNode(node)) return NodeFilter.FILTER_REJECT;
      if(!String(node.nodeValue || '').trim()) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  });
  const nodes=[];
  while(walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach(node=>highlightTextNodeWithTerms(node, regex));
}

function renderQuickVocabWidget(){
  const old=byId('jy-quick-vocab');
  if(old) old.remove();
  document.body.insertAdjacentHTML('beforeend', quickVocabWidgetHTML());
  bindQuickVocabWidget();
}

function fillQuickVocabFields(item){
  if(!item) return;
  const set=(id,value)=>{ const el=byId(id); if(el) el.value=value || ''; };
  set('quick-vocab-word', item.word);
  set('quick-vocab-meaning', quickVocabNormaliseKoreanMeaning(item.meaning));
  set('quick-vocab-pos', item.pos);
  set('quick-vocab-synonyms', item.synonyms);
  set('quick-vocab-antonyms', item.antonyms);
  set('quick-vocab-example', item.example);
  const exists=quickVocabExistsInBank(item.word);
  setQuickVocabBankStatus(exists);
  const status=byId('quick-vocab-status');
  if(status){
    if(item.meaning){
      status.textContent = exists ? '검색됨' : '검색됨';
    }else{
      status.textContent = exists ? '직접 입력 가능' : '직접 입력 가능';
    }
    status.classList.remove('jy-hidden');
  }
  bindAutoGrowTextareas();
}

function clearQuickVocabFields(){
  ['quick-vocab-word','quick-vocab-meaning','quick-vocab-pos','quick-vocab-synonyms','quick-vocab-antonyms','quick-vocab-example'].forEach(id=>{
    const el=byId(id);
    if(el) el.value='';
  });
  const status=byId('quick-vocab-status');
  if(status){ status.textContent=''; status.classList.add('jy-hidden'); }
  setQuickVocabBankStatus(false);
  const word=byId('quick-vocab-word');
  if(word) word.focus();
  bindAutoGrowTextareas();
}

function quickVocabListHTML(items){
  return items.length ? items.map(item=>{
    const badge=item.existed ? '<em class="jy-quick-vocab-existing-badge">이미 단어장에 있음</em>' : '';
    return `<button type="button" class="jy-quick-vocab-item" data-quick-vocab-word="${esc(item.word)}"><strong>${esc(item.word)}${badge}</strong><span>${esc(item.meaning || item.pos || '저장됨')}</span></button>`;
  }).join('') : '<div class="jy-quick-vocab-empty">오늘 저장한 단어와 어구 없음</div>';
}

function refreshQuickVocabList(){
  const target=byId('quick-vocab-list');
  if(!target) return;
  const items=quickVocabTodayItems().slice(0,12);
  target.innerHTML=quickVocabListHTML(items);
}

function bindQuickVocabWidget(){
  const box=byId('jy-quick-vocab');
  if(!box) return;
  const close=byId('quick-vocab-close');
  const open=byId('quick-vocab-open');
  if(close) close.onclick=()=>{
    const state=readState();
    ensureQuickVocabState(state).collapsed=true;
    writeState(state);
    box.classList.add('collapsed');
  };
  if(open) open.onclick=()=>{
    const state=readState();
    ensureQuickVocabState(state).collapsed=false;
    writeState(state);
    box.classList.remove('collapsed');
  };
  const check=byId('quick-vocab-check');
  const word=byId('quick-vocab-word');
  const firstQuickVocabTerm=(value)=>String(value || '').split(/[\n,;]+/).map(v=>v.trim()).filter(Boolean)[0] || '';
  const runLookup=async ()=>{
    const term=firstQuickVocabTerm(word?.value || '');
    const status=byId('quick-vocab-status');
    if(!term){
      if(status){ status.textContent='단어 또는 어구 입력'; status.classList.remove('jy-hidden'); }
      return;
    }
    const localItem=quickVocabLookup(term) || {word:term, meaning:'', example:'', pos:term.includes(' ')?'phrase':'', synonyms:'', antonyms:''};
    fillQuickVocabFields(localItem);
    const localMeaningCount=quickVocabMeaningParts(localItem.meaning).length;
    const shouldCheckOnline=!localItem.meaning || (!normaliseWordKey(term).includes(' ') && localMeaningCount < 2);
    if(shouldCheckOnline){
      if(status){ status.textContent='온라인 확인 중'; status.classList.remove('jy-hidden'); }
      const onlineItem=await quickVocabLookupOnline(term);
      if(onlineItem){
        if(localItem.meaning){
          onlineItem.meaning=quickVocabJoinMeanings(quickVocabMeaningParts(localItem.meaning).concat(quickVocabMeaningParts(onlineItem.meaning)), 3);
          onlineItem.example=localItem.example || onlineItem.example || '';
          onlineItem.pos=localItem.pos || onlineItem.pos || '';
          onlineItem.synonyms=localItem.synonyms || onlineItem.synonyms || '';
          onlineItem.antonyms=localItem.antonyms || onlineItem.antonyms || '';
        }
        fillQuickVocabFields(onlineItem);
        const status2=byId('quick-vocab-status');
        if(status2){ status2.textContent='사전 기준으로 자주 쓰이는 뜻을 2-3개까지 정리했습니다.'; status2.classList.remove('jy-hidden'); }
      }else if(!localItem.meaning && status){
        status.textContent='한글 뜻을 자동으로 찾지 못했습니다. 뜻을 한글로 직접 입력해 주세요.';
        status.classList.remove('jy-hidden');
      }
    }
  };
  if(check) check.addEventListener('click', runLookup);
  const pronounce=byId('quick-vocab-pronounce');
  if(pronounce) pronounce.onclick=()=>speakEnglishText(word?.value || '');
  const naver=byId('quick-vocab-naver');
  if(naver) naver.onclick=()=>openNaverDict(word?.value || '');
  if(word){
    word.addEventListener('keydown', e=>{ if(e.key==='Enter'){ e.preventDefault(); runLookup(); } });
    word.addEventListener('input', ()=>{
      const status=byId('quick-vocab-status');
      if(status){ status.textContent=''; status.classList.add('jy-hidden'); }
      setQuickVocabBankStatus(false);
    });
  }
  const save=byId('quick-vocab-save');
  if(save) save.onclick=()=>{
    const item={
      word:firstQuickVocabTerm(byId('quick-vocab-word')?.value || ''),
      meaning:byId('quick-vocab-meaning')?.value || '',
      pos:byId('quick-vocab-pos')?.value || '',
      synonyms:byId('quick-vocab-synonyms')?.value || '',
      antonyms:byId('quick-vocab-antonyms')?.value || '',
      example:byId('quick-vocab-example')?.value || ''
    };
    const status=byId('quick-vocab-status');
    item.meaning=quickVocabNormaliseKoreanMeaning(item.meaning);
    if(!item.meaning || quickVocabLooksEnglishOnly(item.meaning)){
      if(status){
        status.textContent='뜻은 반드시 한글로 입력해야 저장됩니다.';
        status.classList.remove('jy-hidden');
      }
      return;
    }
    const result=saveQuickVocabItem(item);
    if(!result.ok) return;
    refreshQuickVocabList();
    applyTodayQuickVocabHighlights(route());
    if(result.existed){
      if(status){
        status.textContent='중복 저장하지 않고 오늘 단어 목록과 형광 표시에는 반영했습니다.';
        status.classList.remove('jy-hidden');
        setQuickVocabBankStatus(true);
      }
      return;
    }
    clearQuickVocabFields();
    if(status){
      status.textContent='저장 완료 · 전체 단어장 반영';
      status.classList.remove('jy-hidden');
    }
  };
  const list=byId('quick-vocab-list');
  if(list) list.onclick=e=>{
    const btn=e.target.closest('[data-quick-vocab-word]');
    if(!btn) return;
    const item=quickVocabTodayItems().find(v=>normaliseWordKey(v.word)===normaliseWordKey(btn.dataset.quickVocabWord));
    if(item) fillQuickVocabFields(item);
  };
  const drag=byId('quick-vocab-drag');
  if(drag){
    let dragging=false, startX=0, startY=0, originX=0, originY=0;
    drag.onpointerdown=e=>{
      if(e.target && e.target.tagName==='BUTTON') return;
      dragging=true;
      const rect=box.getBoundingClientRect();
      startX=e.clientX; startY=e.clientY; originX=rect.left; originY=rect.top;
      drag.setPointerCapture(e.pointerId);
    };
    drag.onpointermove=e=>{
      if(!dragging) return;
      const x=Math.min(Math.max(8, originX + e.clientX - startX), window.innerWidth - box.offsetWidth - 8);
      const y=Math.min(Math.max(8, originY + e.clientY - startY), window.innerHeight - box.offsetHeight - 8);
      box.style.left=x+'px'; box.style.top=y+'px'; box.style.right='auto'; box.style.bottom='auto';
    };
    drag.onpointerup=e=>{
      if(!dragging) return;
      dragging=false;
      const rect=box.getBoundingClientRect();
      const state=readState();
      const quick=ensureQuickVocabState(state);
      quick.x=Math.round(rect.left); quick.y=Math.round(rect.top);
      writeState(state);
      try{ drag.releasePointerCapture(e.pointerId); }catch(err){}
    };
  }
}


function chatGPTSearchWidgetHTML(){
  const panel = readPanelState();
  return `<aside id="jy-chatgpt-search" class="jy-chatgpt-search ${panel.chatOpen ? '' : 'jy-hidden'}">
    <div class="jy-chatgpt-search-head"><strong>ChatGPT 검색</strong><button type="button" class="jy-btn jy-delete" id="chatgpt-search-close">닫기</button></div>
    <div class="jy-chatgpt-search-body"><input class="jy-input" id="chatgpt-search-query" placeholder="질문 입력" spellcheck="false" autocomplete="off"><button class="jy-btn dark" type="button" id="chatgpt-search-run">검색</button></div>
  </aside><button type="button" id="chatgpt-search-open" class="jy-chatgpt-search-open ${panel.chatOpen ? 'jy-hidden' : ''}">GPT</button>`;
}
function renderChatGPTSearchWidget(){
  const old=byId('jy-chatgpt-search');
  if(old) old.remove();
  const oldBtn=byId('chatgpt-search-open');
  if(oldBtn) oldBtn.remove();
  document.body.insertAdjacentHTML('beforeend', chatGPTSearchWidgetHTML());
  bindChatGPTSearchWidget();
}
function bindChatGPTSearchWidget(){
  const box=byId('jy-chatgpt-search');
  const open=byId('chatgpt-search-open');
  const close=byId('chatgpt-search-close');
  const query=byId('chatgpt-search-query');
  const run=()=>{
    const q=String(query?.value || '').trim();
    if(!q) return;
    window.open('https://chatgpt.com/?q='+encodeURIComponent(q), '_blank', 'noopener');
  };
  const runBtn=byId('chatgpt-search-run');
  if(runBtn) runBtn.onclick=run;
  if(query) query.onkeydown=e=>{ if(e.key==='Enter'){ e.preventDefault(); run(); } };
  if(close) close.onclick=()=>{ setPanelOpen('chat', false); box?.classList.add('jy-hidden'); open?.classList.remove('jy-hidden'); };
  if(open) open.onclick=()=>{ setPanelOpen('chat', true); box?.classList.remove('jy-hidden'); open.classList.add('jy-hidden'); };
}

function renderHome(){
  const plan = activePlan();
  const dday = Math.ceil((new Date(JY_EXAM_DATE+'T00:00:00') - new Date(todayISO()+'T00:00:00'))/(1000*60*60*24));
  const pct = overallPct(plan);
  const lp = lectureSchedulePct(plan);
  const lectureItems = lectureScheduleItemsFor(plan);
  const taskItems = planTasksForDisplay(plan).filter(t=>t.section!=='lecture_note');
  return `<section class="jy-home-hero">
    <section class="jy-card jy-home-title-card">
      <p class="jy-kicker">IELTS Academic</p>
      <h1 class="jy-title">IELTS 6.5 준비</h1>
      <p class="jy-home-subtitle">시험일 ${dateDot(JY_EXAM_DATE)} · ${plan.day===0?'준비일':'Day '+plan.day}</p>
    </section>
    <section class="jy-card jy-home-dday-card">
      <div class="jy-home-stat"><span>시험까지</span><strong>D-${dday}</strong></div>
      <div class="jy-progress jy-home-progress"><span style="width:${pct}%;"></span></div>
      <p class="jy-small">오늘 진행률 ${pct}% · ${esc(planStageForDisplay(plan))}</p>
      ${renderHomeMiniDdays()}
      ${scheduleDateControlsHTML()}
    </section>
  </section>

  ${targetScoreGridHTML()}
  <div id="score-table"></div>

  <h2 class="jy-section-title">오늘</h2>
  <section class="jy-grid-2 jy-study-check-grid jy-home-today-grid">
    <div class="jy-card jy-today-lecture-card jy-home-focus-card">
      <div class="jy-home-card-head"><h3 class="jy-card-title">강의</h3><span>${lp.done}/${lp.total || 0}</span></div>
      ${lectureItems.length ? `<p class="jy-small">완료율 ${lp.pct}%</p><div class="jy-progress"><span style="width:${lp.pct}%;"></span></div>${homeLectureChecklistHTML(plan)}` : '<div class="jy-note">오늘 강의 일정 없음</div>'}
    </div>
    <div class="jy-card jy-today-task-card jy-home-focus-card">
      <div class="jy-home-card-head"><h3 class="jy-card-title">할 일</h3><span>${taskItems.length}개</span></div>
      <div class="jy-list">
        ${taskItems.map(t=>`<div class="jy-check ${taskCheckClass(t)}" data-section="${esc(t.section)}"><div class="jy-box clickable ${isPlanTaskDone(plan,t)?'done':''}"></div><span class="${isPlanTaskDone(plan,t)?'done':''}">${esc(t.label)}</span></div>`).join('')}
        ${renderAllSectionTodos(plan.date)}
        <div id="custom-task-list">${renderCustomTodos(plan.date)}</div>
      </div>
      <div class="jy-btns jy-home-task-actions"><button class="jy-btn dark" type="button" id="add-custom-todo">할 일 추가</button><button class="jy-btn" type="button" id="add-tomorrow-todo">내일로 추가</button></div>
    </div>
  </section>

  <section class="jy-card jy-home-schedule-card">
    <div class="jy-home-card-head"><h2 class="jy-card-title">학업 스케줄</h2><button class="jy-btn" type="button" id="toggle-full-schedule">열기</button></div>
    <div id="full-schedule-panel" class="jy-hidden">${fullStudyScheduleTable()}</div>
  </section>

  <h2 class="jy-section-title">CSM 일정</h2>
  ${schoolStatusTable(6)}`;
}

function renderCustomTodos(date){
  const state=readState(); const day=dayState(state,date);
  return day.todos.map(t=>`<div class="jy-check custom"><div class="jy-box clickable ${t.done?'done':''}" data-todo-id="${esc(t.id)}"></div><span class="${t.done?'done':''}">${esc(t.text)}</span><button class="jy-btn jy-delete" type="button" data-delete-id="${esc(t.id)}">삭제</button></div>`).join('');
}

function renderLecture(){
  const plan = activePlan();
  const lp = lectureSchedulePct(plan);
  return `<section class="jy-titlebox"><h1 class="jy-title">Lecture</h1></section>
  <section class="jy-card">
    <p class="jy-small">${plan.date} · ${plan.day===0?'준비일':'Day '+plan.day} · ${esc(planStageForDisplay(plan))}</p>
    <p class="jy-small">강의 일정 완료율 ${lp.pct}% · ${lp.done}/${lp.total}</p>
    <div class="jy-progress"><span style="width:${lp.pct}%;"></span></div>
    <div id="lecture-list">${lectureRowsHTML(plan)}</div>
    <div class="jy-btns"><a class="jy-btn" href="${EDM_LECTURE_LINK}" target="_blank" rel="noopener">EDM 강의 바로가기</a></div>
  </section>

  <div class="jy-btns"><button class="jy-btn" type="button" id="toggle-all-lectures">전체 강의 목록 확인</button></div>
  <section class="jy-card jy-hidden" id="all-lecture-panel">
    <p class="jy-small">전체 강의 완료율 <span id="all-lecture-pct">0%</span> · <span id="all-lecture-count">0/0</span></p>
    <div class="jy-progress"><span id="all-lecture-progress" style="width:0%;"></span></div>
    <div id="all-lecture-body" class="jy-lecture-accordion"></div>
  </section>`;
}

function lectureRowsHTML(plan){
  const items=lectureScheduleItemsFor(plan);
  if(!items.length) return '<div class="jy-note">오늘 강의 일정이 없습니다.</div>';
  return `<div class="jy-table-scroll"><table class="jy-table jy-lecture-table jy-lecture-table-compact"><thead><tr><th>완료</th><th>강의</th><th>상태</th></tr></thead><tbody>${items.map(item=>{
    const l=item.lecture || findLecture(item.code);
    const done=lectureScheduleItemDone(plan,item);
    if(item.type==='watch'){
      const prefix=item.carriedFrom ? '미완료 강의' : '강의';
      const carryText=item.carriedFrom ? ' · '+dateDot(item.carriedFrom)+' 이월' : '';
      return `<tr><td><button class="jy-code ${isLectureDone(plan.date,item.code)?'done':''}" type="button" data-lecture-code="${esc(item.code)}">${esc(item.code)}</button></td><td>${esc(compactLectureLine(item.code,l,prefix))}${l.duration ? `<small>${esc(l.duration)}</small>` : ''}</td><td>${isLectureDone(plan.date,item.code)?'완료':'대기'}${carryText}</td></tr>`;
    }
    const noteDone=lectureNoteDone(plan.date,item.code);
    const proofDone=lectureProofDone(plan.date,item.code);
    return `<tr class="jy-lecture-note-schedule-row"><td><span class="jy-code ${done?'done':''}">${done?'완료':esc(item.code)}</span></td><td>${esc(compactLectureLine(item.code,l,'노트'))}</td><td>노트 ${noteDone?'완료':'대기'} · 파일 ${proofDone?'제출':'대기'}</td></tr>`;
  }).join('')}</tbody></table></div>`;
}

function renderLectureNoteView(date){
  const state=readState();
  const notes=(state.notes||[]).filter(n=>n.section==='lecture_note' && n.date===date);
  return notes.length ? notes.map(n=>`<div class="jy-submitted"><p class="jy-page-meta">${esc(n.date)} · ${esc(n.savedAt||'')}</p>${esc(n.text||'')}</div>`).join('') : '';
}


function normaliseWordKey(word){
  return String(word || '')
    .trim()
    .toLowerCase()
    .replace(/[’‘]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[‐‑‒–—―]/g, '-')
    .replace(/[，、。！？；：]/g, ' ')
    .replace(/^[\s\-_,.;:!?()\[\]{}"'`~]+|[\s\-_,.;:!?()\[\]{}"'`~]+$/g, '')
    .replace(/\s*\/\s*/g, ' ')
    .replace(/\s+/g, ' ');
}


const JY_BRITISH_AMERICAN_SPELLINGS = {
  'defence':'defense',
  'self-defence':'self-defense',
  'offence':'offense',
  'licence':'license',
  'practise':'practice',
  'mould':'mold',
  'colour':'color',
  'behaviour':'behavior',
  'favour':'favor',
  'labour':'labor',
  'centre':'center',
  'metre':'meter',
  'theatre':'theater',
  'programme':'program',
  'organise':'organize',
  'organisation':'organization',
  'analyse':'analyze',
  'utilise':'utilize',
  'stabilise':'stabilize',
  'verbalise':'verbalize',
  'emphasise':'emphasize',
  'visualisation':'visualization'
};
const JY_NECESSARY_HYPHENS = {
  'note taking':'note-taking',
  'notetaking':'note-taking',
  'self defence':'self-defence',
  'selfdefence':'self-defence',
  'co author':'co-author',
  'coauthor':'co-author',
  'double edged':'double-edged',
  'well being':'well-being',
  'well behaved':'well-behaved',
  'wellbehaved':'well-behaved',
  'worn out':'worn-out',
  'wornout':'worn-out'
};
function normaliseHyphenatedWordDisplay(word){
  const raw=String(word || '').trim();
  const key=raw.toLowerCase().replace(/[‐‑‒–—―]/g,'-').replace(/\s+/g,' ');
  return JY_NECESSARY_HYPHENS[key] || raw.replace(/[‐‑‒–—―]/g,'-');
}
function vocabSpellingAlternatives(word){
  const raw=String(word || '').trim();
  const key=normaliseWordKey(raw);
  const out=[];
  const add=v=>{ v=String(v || '').trim(); if(v && normaliseWordKey(v)!==key && !out.some(x=>normaliseWordKey(x)===normaliseWordKey(v))) out.push(v); };
  if(JY_BRITISH_AMERICAN_SPELLINGS[key]) add(JY_BRITISH_AMERICAN_SPELLINGS[key]);
  Object.entries(JY_BRITISH_AMERICAN_SPELLINGS).forEach(([uk, us])=>{
    if(key.includes(uk) && key !== uk){
      const reg=new RegExp(escapeRegExp(uk), 'gi');
      add(raw.replace(reg, us));
    }
    if(key.includes(us) && key !== us){
      const reg=new RegExp(escapeRegExp(us), 'gi');
      add(raw.replace(reg, uk));
    }
  });
  return out;
}
function vocabDisplayWord(word){
  const raw=normaliseHyphenatedWordDisplay(word);
  const alternatives=vocabSpellingAlternatives(raw);
  return raw + (alternatives.length ? ' ('+alternatives.join(', ')+')' : '');
}
function vocabWordAnswerKeys(word){
  const raw=normaliseHyphenatedWordDisplay(word);
  const keys=[];
  const add=v=>{
    const key=normaliseWordKey(v);
    if(key && !keys.includes(key)) keys.push(key);
  };
  add(raw);
  vocabSpellingAlternatives(raw).forEach(add);
  quickVocabCandidateKeys(raw).forEach(add);
  return keys;
}



function isGeneratedPlaceholderExample(example, word){
  const text=String(example || '').trim();
  const w=String(word || '').trim().replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
  if(!text) return false;
  const patterns=[
    /^The article discusses .+ as part of a wider social issue\.$/i,
    /^The article discusses the concept of .+ in a wider social context\.$/i,
    /^The lecture explained .+ in relation to education and society\.$/i,
    /^The essay discusses the importance of .+ in modern society\.$/i,
    /^A .+ approach can influence public opinion and policy decisions\.$/i,
    /^The report explains how people can use the idea of .+ in practice\.$/i,
    /^The speaker used .+ to explain the change more clearly\.$/i,
    /^The phrase ".+" appears in an IELTS-style academic context\.$/i,
    /^The term ".+" appears in an IELTS-style academic context\.$/i
  ];
  if(patterns.some(reg=>reg.test(text))) return true;
  if(w){
    const exactPatterns=[
      new RegExp('^The article discusses '+w+' as part of a wider social issue\\.$','i'),
      new RegExp('^The lecture explained '+w+' in relation to education and society\\.$','i'),
      new RegExp('^A '+w+' approach can influence public opinion and policy decisions\\.$','i')
    ];
    if(exactPatterns.some(reg=>reg.test(text))) return true;
  }
  return false;
}
function realExampleValue(example, word){
  const text=String(example || '').trim();
  return isGeneratedPlaceholderExample(text, word) ? '' : text;
}

function vocabArticleFor(word){
  const first=String(word || '').trim().charAt(0).toLowerCase();
  return /^[aeiou]/.test(first) ? 'an' : 'a';
}
function vocabAutoExample(word, pos){
  return '';
}
function ensureVocabStudyFields(item){
  const out=Object.assign({}, item || {});
  out.word=normaliseHyphenatedWordDisplay(out.word || '');
  out.meaning=String(out.meaning || '').trim();
  out.example=realExampleValue(out.example, out.word);
  out.pos=String(out.pos || '').trim();
  out.synonyms=String(out.synonyms || '').trim();
  out.antonyms=String(out.antonyms || '').trim();
  return out;
}
function rawVocabBankFromState(state){
  const custom = Array.isArray(state?.vocabBank) ? state.vocabBank : null;
  return custom && custom.length ? custom : JY_WORDS_BASE;
}
function vocabItemFromAnyBank(word, state){
  const key=normaliseWordKey(word);
  if(!key) return null;
  const all=dedupeWords(rawVocabBankFromState(state || readState())).map(ensureVocabStudyFields);
  return all.find(item=>normaliseWordKey(item.word)===key) || {word};
}
function archiveMasteredWordInState(state, word){
  if(!state) return;
  if(!Array.isArray(state.masteredVocabBank)) state.masteredVocabBank=[];
  const key=normaliseWordKey(word);
  if(!key) return;
  if(state.masteredVocabBank.some(item=>normaliseWordKey(item.word || item)===key)) return;
  const item=vocabItemFromAnyBank(word, state);
  if(item && item.word) state.masteredVocabBank=dedupeWords(state.masteredVocabBank.concat([item]));
}
function removeMasteredArchiveInState(state, word){
  if(!state || !Array.isArray(state.masteredVocabBank)) return;
  const key=normaliseWordKey(word);
  state.masteredVocabBank=state.masteredVocabBank.filter(item=>normaliseWordKey(item.word || item)!==key);
}
function vocabMasteredKeySet(state){
  const keys=new Set();
  (Array.isArray(state?.masteredVocabBank) ? state.masteredVocabBank : []).forEach(item=>{
    const key=normaliseWordKey(item.word || item);
    if(key) keys.add(key);
  });
  const status=state?.vocabStatus || {};
  Object.keys(status).forEach(key=>{
    if(isVocabFullyMemorised(status[key])) keys.add(normaliseWordKey(key));
  });
  return keys;
}
function getMasteredVocabBank(){
  const state=readState();
  const archived=Array.isArray(state.masteredVocabBank) ? state.masteredVocabBank : [];
  const extra=[];
  Object.keys(state.vocabStatus || {}).forEach(key=>{
    if(isVocabFullyMemorised(state.vocabStatus[key])){
      const item=vocabItemFromAnyBank(key, state);
      if(item && item.word) extra.push(item);
    }
  });
  return dedupeWords(archived.concat(extra)).map(ensureVocabStudyFields);
}
function getActiveVocabBank(){
  const state=readState();
  const mastered=vocabMasteredKeySet(state);
  return dedupeWords(rawVocabBankFromState(state)).map(ensureVocabStudyFields).filter(item=>{
    const key=normaliseWordKey(item.word);
    return key && !mastered.has(key);
  });
}

function mergeVocabItemsPreserveMeaning(existing, incoming){
  const oldItem=Object.assign({}, existing || {});
  const newItem=Object.assign({}, incoming || {});
  const word=normaliseHyphenatedWordDisplay(oldItem.word || newItem.word || '');
  const oldMeaning=String(oldItem.meaning || '').trim();
  const newMeaning=String(newItem.meaning || '').trim();
  const oldExample=realExampleValue(oldItem.example, word);
  const newExample=realExampleValue(newItem.example, word);
  return ensureVocabStudyFields({
    word,
    meaning: oldMeaning || newMeaning,
    example: oldExample || newExample,
    pos: String(oldItem.pos || '').trim() || String(newItem.pos || '').trim(),
    synonyms: String(oldItem.synonyms || '').trim() || String(newItem.synonyms || '').trim(),
    antonyms: String(oldItem.antonyms || '').trim() || String(newItem.antonyms || '').trim()
  });
}

function cleanWordItem(item){
  const rawWord=normaliseHyphenatedWordDisplay(item?.word || item?.단어 || item?.english || item?.English || '');
  const base={
    word: rawWord,
    meaning: String(item?.meaning || item?.뜻 || item?.korean || item?.Korean || '').trim(),
    example: realExampleValue(String(item?.example || item?.예문 || item?.sentence || item?.Sentence || '').trim(), rawWord),
    pos: String(item?.pos || item?.품사 || '').trim(),
    synonyms: String(item?.synonyms || item?.synonym || item?.유의어 || '').trim(),
    antonyms: String(item?.antonyms || item?.antonym || item?.반의어 || '').trim()
  };
  const fix=JY_VOCAB_CURATED_FIXES[normaliseWordKey(base.word)] || JY_QUICK_VOCAB_OVERRIDES[normaliseWordKey(base.word)] || null;
  return {
    word: normaliseHyphenatedWordDisplay((fix && fix.word) || base.word),
    meaning: base.meaning || String(fix?.meaning || '').trim(),
    example: base.example || realExampleValue(String(fix?.example || '').trim(), base.word),
    pos: base.pos || String(fix?.pos || '').trim(),
    synonyms: base.synonyms || String(fix?.synonyms || '').trim(),
    antonyms: base.antonyms || String(fix?.antonyms || '').trim()
  };
}

function dedupeWords(list){
  const seen = new Map();
  const out = [];
  (list || []).forEach(raw => {
    const item = cleanWordItem(raw);
    const key = normaliseWordKey(item.word);
    if(!key) return;
    if(seen.has(key)){
      const idx=seen.get(key);
      out[idx]=mergeVocabItemsPreserveMeaning(out[idx], item);
      return;
    }
    seen.set(key, out.length);
    out.push(item);
  });
  return out.map(ensureVocabStudyFields);
}

function getVocabBank(){
  const state = readState();
  const custom = Array.isArray(state.vocabBank) ? state.vocabBank : null;
  const bank = custom && custom.length ? custom : JY_WORDS_BASE;
  return dedupeWords(bank);
}

function saveVocabBank(list){
  const state = readState();
  state.vocabBank = dedupeWords(list);
  state.vocabVersion = JY_VOCAB_VERSION;
  if(!state.vocabStatus) state.vocabStatus = {};
  state.dailyWords = {};
  state.vocabPractice = {};
  if(!Array.isArray(state.masteredVocabBank)) state.masteredVocabBank = [];
  writeState(state);
}

function appendVocabBank(list){
  const state = readState();
  const current = Array.isArray(state.vocabBank) && state.vocabBank.length ? state.vocabBank : getVocabBank();
  state.vocabBank = dedupeWords(current.concat(list));
  state.vocabVersion = JY_VOCAB_VERSION;
  if(!state.vocabStatus) state.vocabStatus = {};
  writeState(state);
  return state.vocabBank.length;
}

function clearVocabBank(){
  const state = readState();
  state.vocabBank = null;
  state.dailyWords = {};
  writeState(state);
}

function parseVocabTable(text){
  const lines = String(text || '').split(/\r?\n/).map(v => v.trim()).filter(Boolean);
  const rows = [];
  lines.forEach((line, index) => {
    let cells;
    if(line.includes('\t')) cells = line.split('\t');
    else if(line.includes(',')) cells = line.split(',');
    else if(line.includes('/')) cells = line.split('/');
    else cells = line.split(/\s{2,}/);

    cells = cells.map(v => v.replace(/^"|"$/g, '').trim());
    const first = (cells[0] || '').toLowerCase();
    if(index === 0 && ['word','english','단어','영단어'].includes(first)) return;

    const item = cleanWordItem({
      word: cells[0],
      meaning: cells[1],
      example: cells[2],
      pos: cells[3],
      synonyms: cells[4],
      antonyms: cells[5]
    });
    if(item.word) rows.push(item);
  });
  return dedupeWords(rows);
}

function getVocabStatus(){
  const state = readState();
  if(!state.vocabStatus) state.vocabStatus = {};
  return state.vocabStatus;
}

function statusFor(word){
  const state = readState();
  if(!state.vocabStatus) state.vocabStatus = {};
  const key = normaliseWordKey(word);
  return state.vocabStatus[key] || {};
}

function vocabStatusCompat(st){
  st = st || {};
  const mastered = !!st.mastered;
  const wordCorrect = !!(st.wordCorrect || mastered);
  const meaningCorrect = !!(st.meaningCorrect || mastered);
  return Object.assign({}, st, {
    wordCorrect,
    meaningCorrect,
    mastered: mastered || (wordCorrect && meaningCorrect)
  });
}

function isVocabFullyMemorised(st){
  const safe = vocabStatusCompat(st);
  return !!(safe.wordCorrect && safe.meaningCorrect);
}

function setVocabFieldCorrect(word, field, checked){
  const state = readState();
  if(!state.vocabStatus) state.vocabStatus = {};
  const key = normaliseWordKey(word);
  if(!key || !['word','meaning'].includes(field)) return null;
  const prev = vocabStatusCompat(state.vocabStatus[key] || {});
  const next = Object.assign({}, prev);
  if(field === 'word') next.wordCorrect = !!checked;
  if(field === 'meaning') next.meaningCorrect = !!checked;
  next.mastered = !!(next.wordCorrect && next.meaningCorrect);
  if(next.mastered){
    next.review = false;
    archiveMasteredWordInState(state, word);
  }else if(checked === false){
    removeMasteredArchiveInState(state, word);
  }
  next.updatedAt = new Date().toISOString();
  state.vocabStatus[key] = next;
  writeState(state);
  return next;
}

function markVocabFieldCorrect(words, field){
  const state = readState();
  if(!state.vocabStatus) state.vocabStatus = {};
  words.forEach(item => {
    const word = typeof item === 'string' ? item : item.word;
    const key = normaliseWordKey(word);
    if(!key || !['word','meaning'].includes(field)) return;
    const prev = vocabStatusCompat(state.vocabStatus[key] || {});
    const next = Object.assign({}, prev);
    if(field === 'word') next.wordCorrect = true;
    if(field === 'meaning') next.meaningCorrect = true;
    next.mastered = !!(next.wordCorrect && next.meaningCorrect);
    if(next.mastered){
      next.review = false;
      archiveMasteredWordInState(state, word);
    }
    next.updatedAt = new Date().toISOString();
    state.vocabStatus[key] = next;
  });
  writeState(state);
}

function markWordsMastered(words){
  const state = readState();
  if(!state.vocabStatus) state.vocabStatus = {};
  words.forEach(item => {
    const word = typeof item === 'string' ? item : item.word;
    const key = normaliseWordKey(word);
    if(!key) return;
    state.vocabStatus[key] = Object.assign({}, state.vocabStatus[key] || {}, {
      wordCorrect: true,
      meaningCorrect: true,
      mastered: true,
      review: false,
      failures: 0,
      updatedAt: new Date().toISOString()
    });
    archiveMasteredWordInState(state, word);
  });
  writeState(state);
}

function markWordsReview(words){
  const state = readState();
  if(!state.vocabStatus) state.vocabStatus = {};
  words.forEach(item => {
    const word = typeof item === 'string' ? item : item.word;
    const key = normaliseWordKey(word);
    if(!key) return;
    const prev = state.vocabStatus[key] || {};
    removeMasteredArchiveInState(state, word);
    state.vocabStatus[key] = Object.assign({}, prev, {
      wordCorrect: false,
      meaningCorrect: false,
      mastered: false,
      review: true,
      failures: (prev.failures || 0) + 1,
      updatedAt: new Date().toISOString()
    });
  });
  writeState(state);
}

function resetVocabProgress(){
  const state = readState();
  state.vocabStatus = {};
  state.dailyWords = {};
  state.vocabPractice = {};
  state.masteredVocabBank = [];
  writeState(state);
}

function randomiseWords(list){
  return list.map(v => ({v, r: Math.random()})).sort((a,b) => a.r - b.r).map(x => x.v);
}

function dailyWordTarget(date){
  return 100;
}

function isCompleteExample(example){
  const text = String(example || '').trim();
  if(!text) return false;
  const englishWords = text.match(/[A-Za-z]+(?:'[A-Za-z]+)?/g) || [];
  return englishWords.length >= 4 && /[.!?]$/.test(text);
}

function hasStudyContent(item){
  const clean=ensureVocabStudyFields(item);
  return String(clean?.word || '').trim() && String(clean?.meaning || '').trim() && isCompleteExample(clean?.example);
}

function getLearnableWords(){
  const status = getVocabStatus();
  return getActiveVocabBank().filter(item => {
    const st = status[normaliseWordKey(item.word)] || {};
    return !isVocabFullyMemorised(st) && hasStudyContent(item);
  });
}

function getReviewWords(){
  const status = getVocabStatus();
  return getActiveVocabBank().filter(item => {
    const st = status[normaliseWordKey(item.word)] || {};
    return !isVocabFullyMemorised(st) && st.review && hasStudyContent(item);
  });
}

function fillDailyWords(date, existingItems){
  const target = dailyWordTarget(date);
  const currentKeys = new Set((existingItems || []).map(w => normaliseWordKey(w.word)));
  const review = randomiseWords(getReviewWords()).filter(w => !currentKeys.has(normaliseWordKey(w.word)));
  const learnable = randomiseWords(getLearnableWords()).filter(w => !currentKeys.has(normaliseWordKey(w.word)));
  const result = (existingItems || []).slice();

  review.concat(learnable).some(item => {
    if(result.length >= target) return true;
    const key = normaliseWordKey(item.word);
    if(!currentKeys.has(key)){
      currentKeys.add(key);
      result.push(item);
    }
    return false;
  });
  return result.slice(0,target);
}

function getDailyVocabOverride(date){
  const rows = JY_DAILY_VOCAB_OVERRIDES[String(date || '')] || [];
  return dedupeWords(rows).filter(item=>hasStudyContent(item));
}
function getDailyTestExtraWords(date){
  const rows = JY_DAILY_TEST_EXTRA_WORDS[String(date || '')] || [];
  return dedupeWords(rows).filter(item=>hasStudyContent(item));
}

function getTodayWords(){
  const date = activeDate();
  if(date === JY_PREP_DATE) return [];

  const dailyOverride = getDailyVocabOverride(date);
  if(dailyOverride.length) return dailyOverride;

  const target = dailyWordTarget(date);
  const state = readState();
  if(!state.dailyWords) state.dailyWords = {};
  if(!state.vocabStatus) state.vocabStatus = {};

  const bank = getActiveVocabBank();
  const byKey = {};
  bank.forEach(item => { byKey[normaliseWordKey(item.word)] = item; });
  const masteredKeys = vocabMasteredKeySet(state);

  let stored = Array.isArray(state.dailyWords[date]) ? state.dailyWords[date] : null;

  if(stored && stored.length){
    const words = stored.map(item => {
      const key = normaliseWordKey(item.word || item);
      if(masteredKeys.has(key)) return null;
      return byKey[key] || cleanWordItem(item);
    }).filter(item => item && item.word && hasStudyContent(item));
    if(words.length >= target) return words.slice(0,target);
    const filled = fillDailyWords(date, words);
    state.dailyWords[date] = filled;
    writeState(state);
    return filled;
  }

  const review = randomiseWords(getReviewWords());
  const learnable = randomiseWords(getLearnableWords()).filter(item => {
    const key = normaliseWordKey(item.word);
    return !review.some(r => normaliseWordKey(r.word) === key);
  });

  const selected = dedupeWords(review.concat(learnable)).slice(0, target);
  state.dailyWords[date] = selected;
  writeState(state);
  return selected.slice(0,target);
}

function filledWords(){
  return getTodayWords().filter(w=>String(w.word||'').trim());
}
function planHasWords(plan){
  if(!plan) return false;
  if(Number(plan.words) > 0) return true;
  return planTasksForDisplay(plan).some(t=>t.section === 'words' && /단어/.test(String(t.label || '')));
}
function previousWordStudyDate(date){
  const idx=JY_PLAN.findIndex(p=>p.date===date);
  if(idx <= 0) return '';
  for(let i=idx-1;i>=0;i--){
    if(planHasWords(JY_PLAN[i])) return JY_PLAN[i].date;
  }
  return '';
}
function wordsForDate(date){
  if(!date) return [];
  const plan=JY_PLAN.find(p=>p.date===date);
  if(!plan || !planHasWords(plan)) return [];
  const dailyOverride = getDailyVocabOverride(date);
  if(dailyOverride.length) return dailyOverride;
  const target=dailyWordTarget(date);
  const state=readState();
  if(!state.dailyWords) state.dailyWords={};
  const bank=getActiveVocabBank();
  const byKey={};
  bank.forEach(item=>{ byKey[normaliseWordKey(item.word)] = item; });
  const masteredKeys=vocabMasteredKeySet(state);
  let stored=Array.isArray(state.dailyWords[date]) ? state.dailyWords[date] : [];
  let words=stored.map(item=>{
    const key=normaliseWordKey(item.word || item);
    if(masteredKeys.has(key)) return null;
    return byKey[key] || cleanWordItem(item);
  }).filter(item=>item && item.word && hasStudyContent(item));
  if(words.length < target){
    words=fillDailyWords(date, words);
    state.dailyWords[date]=words;
    writeState(state);
  }
  return words.slice(0,target);
}
function wordTestStudyDate(){
  return activeDate();
}
function wordTestWords(){
  const date = wordTestStudyDate();
  return dedupeWords(getTodayWords().concat(getDailyTestExtraWords(date))).filter(w=>String(w.word||'').trim());
}

function maskWord(word){
  return String(word || '').split(/(\s+|-)/).map(part => {
    if(/^\s+$/.test(part) || part === '-') return part;
    if(part.length <= 2) return part[0] + '_';
    return part[0] + '_'.repeat(Math.max(2, part.length - 1));
  }).join('');
}

function getVocabStudyView(){
  const state=readState();
  if(!state.vocabStudyView) state.vocabStudyView={showWord:true, showMeaning:true};
  return {
    showWord:state.vocabStudyView.showWord !== false,
    showMeaning:state.vocabStudyView.showMeaning !== false
  };
}
function setVocabStudyView(key, value){
  const state=readState();
  if(!state.vocabStudyView) state.vocabStudyView={showWord:true, showMeaning:true};
  state.vocabStudyView[key]=!!value;
  writeState(state);
}
function getVocabPractice(date){
  const state=readState();
  if(!state.vocabPractice) state.vocabPractice={};
  return state.vocabPractice[date] || {};
}
function setVocabPracticeValue(date, key, field, value){
  const cleanKey=normaliseWordKey(key);
  if(!cleanKey) return;
  const state=readState();
  if(!state.vocabPractice) state.vocabPractice={};
  if(!state.vocabPractice[date]) state.vocabPractice[date]={};
  if(!state.vocabPractice[date][cleanKey]) state.vocabPractice[date][cleanKey]={};
  state.vocabPractice[date][cleanKey][field]=String(value || '');
  writeState(state);
}
function vocabPracticeInputHTML(field, key, value, placeholder){
  return `<div class="jy-vocab-practice-wrap"><input class="jy-input jy-vocab-practice-input" data-vocab-practice="${esc(field)}" data-vocab-key="${esc(key)}" value="${esc(value || '')}" placeholder="${esc(placeholder)}" spellcheck="false" autocomplete="off" autocorrect="off" autocapitalize="none"><div class="jy-vocab-practice-result" data-vocab-practice-result="${esc(field)}:${esc(key)}"></div></div>`;
}
function normaliseVocabPracticeText(value){
  return String(value || '')
    .trim()
    .toLowerCase()
    .replace(/[’‘]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[‐‑‒–—―]/g, '-')
    .replace(/[\u200B-\u200D\uFEFF]/g, '')
    .replace(/[.,;:!?，、。！？；：()\[\]{}"'`~]/g, '')
    .replace(/\s+/g, ' ');
}
function normaliseKoreanPracticeText(value){
  return normaliseVocabPracticeText(value).replace(/\s+/g, '');
}
function splitMeaningCandidates(value){
  return String(value || '')
    .replace(/\([^)]*\)/g, ' ')
    .split(/\n|\r|,|，|、|;|；|\/|·|ㆍ|\|/)
    .map(v=>normaliseKoreanPracticeText(v))
    .filter(Boolean);
}

const JY_SIMILAR_MEANING_GROUPS = [
  ['응원하다','격려하다','북돋다','고무하다','힘을주다'],
  ['개선하다','향상시키다','나아지다','좋아지다'],
  ['감소','감소하다','줄다','줄어들다','줄이다'],
  ['증가','증가하다','늘다','늘어나다','늘리다'],
  ['중요한','중요하다','필수적인','필수의'],
  ['적절한','알맞은','적합한'],
  ['관련있는','관련있다','관련된'],
  ['엄청난양','많은양','아주많은양'],
  ['낙천주의의','낙천적인','낙관적인','긍정적인','optimistic'],
  ['비관적인','염세적인','부정적인','pessimistic'],
  ['방법','수단']
].map(group=>group.map(normaliseKoreanPracticeText));

const JY_STRICT_MULTI_MEANING_WORDS = {
  mean: [
    ['의미하다','뜻하다','의미','뜻'],
    ['수단','방법'],
    ['못된','비열한','인색한']
  ],
  means: [
    ['수단','방법'],
    ['의미하다','뜻하다','의미','뜻']
  ]
};

function vocabMeaningPartGroup(part){
  const key=normaliseKoreanPracticeText(part);
  const preset=JY_SIMILAR_MEANING_GROUPS.find(group=>group.includes(key));
  return preset || [key];
}
function vocabMeaningGroups(value){
  const parts=splitMeaningCandidates(value);
  const groups=[];
  parts.forEach(part=>{
    const group=vocabMeaningPartGroup(part).filter(Boolean);
    if(!group.length) return;
    const id=group.slice().sort().join('|');
    if(groups.some(g=>g.id===id)) return;
    groups.push({id, terms:group, label:part});
  });
  return groups;
}
function vocabStrictMeaningGroups(word){
  const key=normaliseWordKey(word);
  const groups=JY_STRICT_MULTI_MEANING_WORDS[key];
  if(!Array.isArray(groups)) return null;
  return groups.map(group=>{
    const terms=group.map(normaliseKoreanPracticeText).filter(Boolean);
    return {id:terms.slice().sort().join('|'), terms, label:group[0] || ''};
  }).filter(group=>group.terms.length);
}
function vocabAnswerCoversGroup(answerKey, group){
  return group.terms.some(term=>{
    if(!term) return false;
    if(answerKey === term) return true;
    if(answerKey.length >= 2 && answerKey.includes(term)) return true;
    if(term.length >= 2 && term.includes(answerKey)) return true;
    return false;
  });
}
function vocabPracticeCheckDetail(field, answer, item){
  const value=String(answer || '').trim();
  if(!value || !item) return {ok:false, note:''};
  if(field === 'word'){
    const answerKey=normaliseWordKey(value);
    const expectedKeys=vocabWordAnswerKeys(item.word);
    if(!answerKey || !expectedKeys.length) return {ok:false, note:''};
    return {ok:expectedKeys.includes(answerKey), note:''};
  }
  if(field === 'meaning'){
    const answerKey=normaliseKoreanPracticeText(value);
    const expectedKey=normaliseKoreanPracticeText(item.meaning);
    if(!answerKey || !expectedKey) return {ok:false, note:''};
    if(answerKey === expectedKey) return {ok:true, note:''};

    const strictGroups=vocabStrictMeaningGroups(item.word);
    if(strictGroups && strictGroups.length){
      const missing=strictGroups.filter(group=>!vocabAnswerCoversGroup(answerKey, group));
      if(!missing.length) return {ok:true, note:''};
      return {ok:false, note:'뜻이 여러 갈래라 핵심 뜻을 모두 적어야 합니다.'};
    }

    const groups=vocabMeaningGroups(item.meaning);
    if(!groups.length) return {ok:false, note:''};
    const matched=groups.filter(group=>vocabAnswerCoversGroup(answerKey, group));
    if(matched.length){
      const parts=splitMeaningCandidates(item.meaning);
      return {
        ok:true,
        note: parts.length > 1 ? '같은 의미권이라 하나만 맞아도 인정했습니다.' : ''
      };
    }
    return {ok:false, note:''};
  }
  return {ok:false, note:''};
}
function isVocabPracticeCorrect(field, answer, item){
  return vocabPracticeCheckDetail(field, answer, item).ok;
}
function vocabPracticeAnswerText(field, item){
  if(field === 'word') return vocabDisplayWord(item?.word || '');
  if(field === 'meaning') return item?.meaning || '';
  return '';
}
function resetVocabPracticeCheck(){
  const words=getTodayWords();
  const byKey={};
  words.forEach(item=>{ byKey[normaliseWordKey(item.word)] = item; });
  document.querySelectorAll('[data-vocab-practice]').forEach(input=>{
    const field=input.dataset.vocabPractice;
    const key=input.dataset.vocabKey;
    const item=byKey[key];
    const wasCorrect=input.classList.contains('correct');
    input.classList.remove('correct','wrong');
    if(item){
      if(wasCorrect){
        input.value=vocabPracticeAnswerText(field, item);
        setVocabPracticeValue(activeDate(), key, field, input.value);
      }else{
        input.value='';
        setVocabPracticeValue(activeDate(), key, field, '');
      }
    }
  });
  document.querySelectorAll('[data-vocab-practice-result]').forEach(result=>{
    result.textContent='';
    result.className='jy-vocab-practice-result';
  });
  const status=byId('vocab-practice-grade-status');
  if(status) status.textContent='';
}
function gradeVocabPractice(){
  const words=getTodayWords();
  const byKey={};
  words.forEach(item=>{ byKey[normaliseWordKey(item.word)] = item; });
  let total=0;
  let correct=0;
  let wrong=0;
  document.querySelectorAll('[data-vocab-practice]').forEach(input=>{
    const field=input.dataset.vocabPractice;
    const key=input.dataset.vocabKey;
    const item=byKey[key];
    if(!item) return;
    total += 1;
    const check=vocabPracticeCheckDetail(field, input.value, item);
    const ok=check.ok;
    const result=input.parentElement?.querySelector('[data-vocab-practice-result]');
    input.classList.toggle('correct', ok);
    input.classList.toggle('wrong', !ok);
    if(ok){
      correct += 1;
      const updated = setVocabFieldCorrect(item.word, field, true);
      const row = input.closest('tr');
      if(row) row.classList.toggle('jy-vocab-fully-memorised-row', isVocabFullyMemorised(updated));

      if(result){
        result.textContent=check.note ? '맞음 · '+check.note : '맞음';
        result.className='jy-vocab-practice-result correct active';
      }
    }else{
      wrong += 1;
      if(result){
        result.textContent='정답: '+vocabPracticeAnswerText(field, item)+(check.note ? ' · '+check.note : '');
        result.className='jy-vocab-practice-result wrong active';
      }
    }
  });
  const status=byId('vocab-practice-grade-status');
  if(status){
    status.textContent=total ? `채점 결과 ${correct}/${total}개 정답 · 오답 ${wrong}개` : '영어 또는 뜻을 닫고 답을 입력하면 채점할 수 있습니다.';
  }
}
function vocabExampleMaskTerms(word){
  const base=normaliseWordKey(word);
  if(!base) return [];
  const terms=[];
  const add=v=>{ v=normaliseWordKey(v); if(v && !terms.includes(v)) terms.push(v); };
  quickVocabCandidateKeys(base).forEach(add);
  if(!base.includes(' ')){
    if(/[^s]$/.test(base)) add(base+'s');
    if(/[^e]$/.test(base)) add(base+'es');
    if(base.endsWith('y')) add(base.slice(0,-1)+'ies');
    if(base.endsWith('e')) add(base.slice(0,-1)+'ing');
    add(base+'ing');
    add(base+'ed');
  }
  return terms.sort((a,b)=>b.length-a.length).slice(0,12);
}
function vocabBlankFor(match){
  return '_'.repeat(Math.max(4, String(match || '').length));
}
function maskVocabExample(example, word){
  const terms=vocabExampleMaskTerms(word);
  if(!terms.length) return example;
  let masked=String(example || '');
  terms.forEach(term=>{
    const flexible=term.split(/[\s-]+/).map(escapeRegExp).join('[-\\s]+');
    const regex=new RegExp('(^|[^A-Za-z])('+flexible+')(?=$|[^A-Za-z])','gi');
    masked=masked.replace(regex, (full, prefix, match)=>prefix+vocabBlankFor(match));
  });
  return masked;
}
function vocabKoreanExampleHint(item){
  const meaning=String(item?.meaning || '').trim();
  if(!meaning) return '';
  return `한국어 예문: 이 단어는 “${meaning}”라는 뜻으로 쓰입니다.`;
}
function vocabExampleCellHTML(item, view){
  const example=String(item?.example || '');
  const word=String(item?.word || '').trim();
  if(view && view.showWord === false && word){
    return `<span class="jy-vocab-example-blank">${esc(vocabKoreanExampleHint(item))}</span>`;
  }
  if(!example) return '';
  return esc(example);
}

function vocabStats(){
  const active = getActiveVocabBank();
  const mastered = getMasteredVocabBank();
  const status = getVocabStatus();
  let review = 0;
  active.forEach(item => {
    const st = status[normaliseWordKey(item.word)] || {};
    if(st.review) review++;
  });
  return {
    remaining: active.length,
    mastered: mastered.length,
    review
  };
}
function vocabSummaryText(date, words){
  const stats=vocabStats();
  const parts=[`${date}`, `오늘 단어 ${words.length}개`, `남은 단어 ${stats.remaining}개`, `외운 단어 ${stats.mastered}개`];
  if(stats.review) parts.push(`다시 외울 단어 ${stats.review}개`);
  return parts.join(' · ');
}

function vocabPageTab(){
  try{
    const value=localStorage.getItem(JY_VOCAB_PAGE_TAB_KEY) || 'words';
    return value === 'phrases' ? 'phrases' : 'words';
  }catch(e){
    return 'words';
  }
}
function setVocabPageTab(value){
  try{ localStorage.setItem(JY_VOCAB_PAGE_TAB_KEY, value === 'phrases' ? 'phrases' : 'words'); }catch(e){}
}
function vocabSubTabsHTML(active){
  const tab=active === 'phrases' ? 'phrases' : 'words';
  return `<section class="jy-card jy-vocab-subnav"><div class="jy-btns"><button class="jy-btn ${tab==='words'?'dark':''}" type="button" data-vocab-tab="words">단어</button><button class="jy-btn ${tab==='phrases'?'dark':''}" type="button" data-vocab-tab="phrases">구문</button></div></section>`;
}


function vocabPhrasePartTab(){
  try{
    const value=localStorage.getItem(JY_VOCAB_PHRASE_PART_TAB_KEY) || 'part2-priority';
    return ['part2-priority','part1','part2-nouns'].includes(value) ? value : 'part2-priority';
  }catch(e){ return 'part2-priority'; }
}
function setVocabPhrasePartTab(value){
  const clean=['part2-priority','part1','part2-nouns'].includes(value) ? value : 'part2-priority';
  try{ localStorage.setItem(JY_VOCAB_PHRASE_PART_TAB_KEY, clean); }catch(e){}
}
function vocabPhrasePartTabsHTML(active){
  const tab=active || vocabPhrasePartTab();
  return `<section class="jy-card jy-vocab-phrase-subnav"><div class="jy-btns">
    <button class="jy-btn ${tab==='part2-priority'?'dark':''}" type="button" data-vocab-phrase-part="part2-priority">Part 2 동사 우선</button>
    <button class="jy-btn ${tab==='part1'?'dark':''}" type="button" data-vocab-phrase-part="part1">Part 1 Task 1 구문</button>
    <button class="jy-btn ${tab==='part2-nouns'?'dark':''}" type="button" data-vocab-phrase-part="part2-nouns">Part 2 명사 나중</button>
  </div></section>`;
}

function renderVocabularyWordsContent(date, words){
  if(date === JY_PREP_DATE){
    return `<section class="jy-card"><div class="jy-note">단어 학습은 2026.05.04부터 시작합니다.</div></section>`;
  }
  const dailyOverride = getDailyVocabOverride(date);
  const overrideMode = dailyOverride.length > 0;
  const extraTestWords = getDailyTestExtraWords(date);
  const vocabView = getVocabStudyView();
  const vocabPractice = getVocabPractice(date);
  const practiceButtons = overrideMode ? '' : `
      <button class="jy-btn ${vocabView.showWord?'':'dark'}" type="button" id="toggle-vocab-word-view">${vocabView.showWord?'영어 닫기':'영어 열기'}</button>
      <button class="jy-btn ${vocabView.showMeaning?'':'dark'}" type="button" id="toggle-vocab-meaning-view">${vocabView.showMeaning?'뜻 닫기':'뜻 열기'}</button>
      <button class="jy-btn dark" type="button" id="grade-vocab-practice">단어 채점</button>
      <button class="jy-btn" type="button" id="reset-vocab-practice-check">리셋</button>`;
  const vocabExampleHeader = vocabView.showWord ? '예문' : '한국어 예문';
  const standardTable = `<section class="jy-card">
    <div class="jy-table-scroll"><table class="jy-table jy-word-table"><thead><tr><th>번호</th><th>단어</th><th>뜻</th><th>${vocabExampleHeader}</th></tr></thead><tbody>${words.map((w,i)=>{
      const key = normaliseWordKey(w.word);
      const practice = vocabPractice[key] || {};
      const st = vocabStatusCompat(statusFor(w.word));
      const fullClass = isVocabFullyMemorised(st) ? ' class="jy-vocab-fully-memorised-row"' : '';
      const wordCell = vocabView.showWord ? `<strong>${esc(vocabDisplayWord(w.word))}</strong>` : vocabPracticeInputHTML('word', key, practice.word, '영어 단어 입력');
      const meaningCell = vocabView.showMeaning ? vocabMeaningCellHTML(w) : vocabPracticeInputHTML('meaning', key, practice.meaning, '한국어 뜻 입력');
      return `<tr${fullClass}><td>${String(i+1).padStart(2,'0')}</td><td>${wordCell}</td><td>${meaningCell}</td><td>${vocabExampleCellHTML(w, vocabView)}</td></tr>`;
    }).join('')}</tbody></table></div>
  </section>`;
  const wordListHTML = overrideMode ? vocabGroupedBookHTML(words, `${date} 오늘 단어`) : standardTable;
  const photoWordsHTML = extraTestWords.length ? vocabGroupedBookHTML(extraTestWords, '사진 형광펜 단어') : '';
  const testCount = wordTestWords().length;
  return `<section class="jy-card">
    <div class="jy-btns">
      <button class="jy-btn dark" type="button" id="save-word-study">오늘 단어 학습 완료</button>${practiceButtons}
    </div>
    <div class="jy-vocab-grade-status" id="vocab-practice-grade-status"></div>
  </section>

  ${wordListHTML}
  ${photoWordsHTML}

  <section class="jy-card jy-hidden" id="vocab-upload-panel">
    <h2 class="jy-card-title">단어장 추가</h2>
    <div class="jy-field">
      <label class="jy-label">파일</label>
      <input class="jy-input" id="vocab-file" type="file" accept=".txt,.tsv,.csv">
    </div>
    <div class="jy-field">
      <label class="jy-label">표 붙여넣기</label>
      <textarea class="jy-textarea" id="vocab-paste" placeholder="word	뜻	예문\npause	멈춤, 일시 정지, 잠시 멈추다	I paused at the door and looked back."></textarea>
    </div>
    <div class="jy-btns">
      <button class="jy-btn dark" type="button" id="append-vocab-bank">단어장에 추가</button>
      <button class="jy-btn" type="button" id="replace-vocab-bank">이 표로 교체</button>
      <button class="jy-btn" type="button" id="clear-vocab-bank">기본 단어장으로 되돌리기</button>
      <button class="jy-btn" type="button" id="reset-vocab-progress">암기 기록 초기화</button>
    </div>
  </section>

  <h2 class="jy-section-title">오늘 단어 시험</h2>
  <section class="jy-card">
    <p class="jy-small">오늘 단어 ${words.length}개${extraTestWords.length ? `와 사진 형광펜 단어 ${extraTestWords.length}개` : ''}를 바로 시험봅니다. 시험 총 단어 수는 ${testCount}개입니다. 틀리거나 ‘다 못 외움’으로 체크한 단어는 다음날 다시 나옵니다.</p>
    <div class="jy-btns">
      <button class="jy-btn dark" type="button" id="start-word-test-en">영단어 시험 시작</button>
      <button class="jy-btn" type="button" id="start-word-test-ko">한글 뜻 시험 시작</button>
      <button class="jy-btn" type="button" id="reset-word-test">단어 시험 리셋</button>
    </div>
    <div id="word-test-box"></div>
  </section>`;
}

function renderWords(){
  const date = activeDate();
  const tab = vocabPageTab();
  const words = date === JY_PREP_DATE ? [] : getTodayWords();
  const extraTestWords = date === JY_PREP_DATE ? [] : getDailyTestExtraWords(date);
  const summary = date === JY_PREP_DATE
    ? '단어 학습은 2026.05.04부터 시작합니다.'
    : `${esc(vocabSummaryText(date, words))}${extraTestWords.length ? esc(' · 시험 추가 단어 '+extraTestWords.length+'개') : ''}`;
  const head = `<section class="jy-card jy-page-head"><h1 class="jy-page-title">Vocabulary</h1><p class="jy-small">${summary}</p></section>${vocabSubTabsHTML(tab)}`;
  if(tab === 'phrases'){
    return `${head}${renderVocabularyPhraseContent()}`;
  }
  return `${head}${renderVocabularyWordsContent(date, words)}`;
}


function sectionTodoLabel(section){
  const map={listening:'Listening',reading:'Reading',writing:'Writing',speaking:'Speaking'};
  return map[section] || section;
}

function renderSectionTodos(date, section, options){
  const state=readState();
  const day=dayState(state,date);
  if(!day.sectionTodos) day.sectionTodos={};
  const items=day.sectionTodos[section] || [];
  const showSection = options && options.showSection;
  return items.length ? items.map(t=>`<div class="jy-check custom"><div class="jy-box clickable ${t.done?'done':''}" data-section-todo-id="${esc(t.id)}" data-section-todo-section="${esc(section)}"></div><span class="${t.done?'done':''}">${showSection ? '['+sectionTodoLabel(section)+'] ' : ''}${esc(t.text)}</span><button class="jy-btn jy-delete" type="button" data-delete-section-todo="${esc(t.id)}" data-section-todo-section="${esc(section)}">삭제</button></div>`).join('') : '';
}

function renderAllSectionTodos(date){
  return ['listening','reading','writing','speaking'].map(sec=>renderSectionTodos(date, sec, {showSection:true})).join('');
}

function addSectionTodo(date, section, text){
  const value=String(text || '').trim();
  if(!value) return;
  const state=readState();
  const day=dayState(state,date);
  if(!day.sectionTodos) day.sectionTodos={};
  if(!day.sectionTodos[section]) day.sectionTodos[section]=[];
  day.sectionTodos[section].push({id:Date.now()+'_'+Math.floor(Math.random()*10000), text:value, done:false});
  writeState(state);
}

function toggleSectionTodo(date, section, id){
  const state=readState();
  const day=dayState(state,date);
  if(!day.sectionTodos || !day.sectionTodos[section]) return;
  day.sectionTodos[section].forEach(t=>{ if(String(t.id)===String(id)) t.done=!t.done; });
  writeState(state);
}

function deleteSectionTodo(date, section, id){
  const state=readState();
  const day=dayState(state,date);
  if(!day.sectionTodos || !day.sectionTodos[section]) return;
  day.sectionTodos[section]=day.sectionTodos[section].filter(t=>String(t.id)!==String(id));
  writeState(state);
}

function fullStudyScheduleTable(){
  return `<div class="jy-table-scroll"><table class="jy-table jy-schedule-table"><thead><tr><th>날짜</th><th>Day</th><th>일정</th><th>강의</th><th>강의 시간</th><th>할 일</th></tr></thead><tbody>${JY_PLAN.map(p=>{
    const items=lectureDisplayItemsForPlan(p).filter(item=>item && item.code);
    const lectureHTML=items.length ? `<div class="jy-schedule-lecture-list">${items.map(item=>{
      const lecture=findLecture(item.code);
      const prefix=item.isCarried ? '미완료 강의' : '강의';
      return `<span>${esc(compactLectureLine(item.code, lecture, prefix))}</span>`;
    }).join('')}</div>` : '';
    const timeText=planScheduleTimeText(p);
    return `<tr><td>${esc(p.date)}</td><td>${p.day===0?'준비일':'Day '+esc(p.day)}</td><td>${esc(planStageForDisplay(p))}</td><td>${lectureHTML}</td><td>${esc(timeText)}</td><td>${esc(scheduleTaskSummary(p))}</td></tr>`;
  }).join('')}</tbody></table></div>`;
}


function sectionSolveState(date, section){
  const state=readState();
  const day=dayState(state,date);
  if(!day.sectionSolveTimes) day.sectionSolveTimes={};
  if(!day.sectionSolveTimes[section]) day.sectionSolveTimes[section]={current:null, sessions:[]};
  const item=day.sectionSolveTimes[section];
  if(!Array.isArray(item.sessions)) item.sessions=[];
  return item;
}
function startSectionSolveTimer(date, section){
  const state=readState();
  const day=dayState(state,date);
  if(!day.sectionSolveTimes) day.sectionSolveTimes={};
  if(!day.sectionSolveTimes[section]) day.sectionSolveTimes[section]={current:null, sessions:[]};
  if(day.sectionSolveTimes[section].current) return;
  day.sectionSolveTimes[section].current={start:new Date().toISOString()};
  writeState(state);
}
function stopSectionSolveTimer(date, section){
  const state=readState();
  const day=dayState(state,date);
  if(!day.sectionSolveTimes) day.sectionSolveTimes={};
  if(!day.sectionSolveTimes[section]) day.sectionSolveTimes[section]={current:null, sessions:[]};
  const item=day.sectionSolveTimes[section];
  if(!item.current || !item.current.start) return false;
  const startMs=new Date(item.current.start).getTime();
  const endMs=Date.now();
  if(!Number.isFinite(startMs) || endMs <= startMs){
    item.current=null;
    writeState(state);
    return false;
  }
  item.sessions.push({id:'solve_'+Date.now()+'_'+Math.random().toString(36).slice(2,7), start:new Date(startMs).toISOString(), end:new Date(endMs).toISOString()});
  item.current=null;
  day.submissions[section]=true;
  writeState(state);
  return true;
}
function deleteSectionSolveSession(date, section, id){
  const state=readState();
  const day=dayState(state,date);
  const item=day.sectionSolveTimes?.[section];
  if(!item || !Array.isArray(item.sessions)) return;
  item.sessions=item.sessions.filter(session=>String(session.id)!==String(id));
  writeState(state);
}
function sectionSolveDuration(session){
  const start=new Date(session.start).getTime();
  const end=new Date(session.end).getTime();
  if(!Number.isFinite(start) || !Number.isFinite(end) || end <= start) return 0;
  return end - start;
}
function sectionSolveTotalMs(date, section){
  const item=sectionSolveState(date, section);
  let total=item.sessions.reduce((sum, session)=>sum+sectionSolveDuration(session),0);
  if(item.current && item.current.start){
    const start=new Date(item.current.start).getTime();
    if(Number.isFinite(start)) total += Math.max(0, Date.now()-start);
  }
  return total;
}
function renderSectionSolveTimer(section){
  if(!['listening','reading','writing'].includes(section)) return '';
  const date=activePlan().date;
  const item=sectionSolveState(date, section);
  const active=!!item.current;
  const sessions=item.sessions.slice().sort((a,b)=>new Date(a.start)-new Date(b.start));
  const latest=sessions.slice(-3);
  const rows=latest.length ? latest.map((session,i)=>`<div class="jy-section-solve-row"><span>${formatStudyTime(session.start)} ~ ${formatStudyTime(session.end)} · ${formatStudyDuration(sectionSolveDuration(session), false)}</span><button class="jy-btn jy-delete" type="button" data-section-solve-delete="${esc(session.id)}" data-section-solve-section="${esc(section)}">삭제</button></div>`).join('') : '';
  const totalText=active ? '기록 중 · '+formatStudyDuration(Date.now()-new Date(item.current.start).getTime(), true) : '오늘 총 '+formatStudyDuration(sectionSolveTotalMs(date, section), false);
  return `<section class="jy-card jy-section-solve-card jy-section-solve-compact">
    <div class="jy-section-solve-line">
      <strong>문제 풀이 시간</strong>
      <span class="jy-time-status ${active?'good':''}">${totalText}</span>
      <div class="jy-section-solve-buttons">
        <button class="jy-btn dark" type="button" id="section-solve-start" data-section-solve-section="${esc(section)}" ${active?'disabled':''}>시작</button>
        <button class="jy-btn" type="button" id="section-solve-stop" data-section-solve-section="${esc(section)}" ${active?'':'disabled'}>종료</button>
      </div>
    </div>
    ${rows ? `<div class="jy-section-solve-list">${rows}</div>` : ''}
  </section>`;
}

function renderSkill(section){
  const plan = activePlan();
  const lectures = plan.lectures?.[section] || [];
  const tasks = planTasksForDisplay(plan).filter(t=>t.section===section);
  const name = SECTION_NAMES[section];
  const sectionTodos = renderSectionTodos(plan.date, section);
  const hasLectures = lectures.length > 0;
  const hasLectureNoteSubmissions = lectureNoteSubmissionLecturesFor(plan.date, section).length > 0;
  const hasTasks = tasks.length > 0;
  const hasSectionTodos = !!String(sectionTodos || '').trim();
  const hasAssignedWork = hasLectures || hasTasks || hasSectionTodos;
  const taskCard = hasAssignedWork ? `<section class="jy-card">
    ${hasLectures ? `<h3 class="jy-card-title">오늘 강의</h3>
    <div class="jy-status-list">${lectures.map(l=>`<div class="jy-status-item"><button class="jy-status-box ${isLectureDone(plan.date,l.code)?'done':''}" type="button" data-skill-lecture-code="${esc(l.code)}"></button><div><strong>${esc(l.code)} · ${esc(l.course||'')}</strong><span>${esc(l.subject||'')} · ${esc(l.title||'')}</span></div></div>`).join('')}</div><div class="jy-daily-row">${lectureLinkHTML()}</div>` : ''}
    ${(hasTasks || hasSectionTodos) ? `<h3 class="jy-card-title">오늘 할 일</h3>
    <div class="jy-list jy-skill-task-list">
      ${tasks.map(t=>`<div class="jy-check ${taskCheckClass(t)}" data-section="${esc(t.section)}"><div class="jy-box clickable ${isPlanTaskDone(plan,t)?'done':''}"></div><span class="${isPlanTaskDone(plan,t)?'done':''}">${esc(t.label)}</span></div>`).join('')}
      ${(hasTasks && CAFE_LINKS[section]) ? `<div class="jy-daily-row"><a class="jy-section-link" href="${CAFE_LINKS[section]}" target="_blank" rel="noopener">${problemLinkLabel(section)}</a></div>` : ''}
      ${sectionTodos || ''}
    </div>` : ''}
    <button class="jy-btn dark jy-add-todo-btn" type="button" id="add-section-todo" data-section-todo-section="${section}">할 일 추가</button>
  </section>` : `<section class="jy-card jy-skill-empty-card"><div class="jy-note">오늘 이 영역 일정 없음</div><button class="jy-btn dark jy-add-todo-btn" type="button" id="add-section-todo" data-section-todo-section="${section}">할 일 추가</button></section>`;

  return `<section class="jy-card jy-page-head"><h1 class="jy-page-title">${name}</h1></section>
  ${taskCard}
  ${hasLectureNoteSubmissions ? skillLectureNoteForm(section) : ''}
  ${(hasTasks || hasSectionTodos) ? renderSectionSolveTimer(section) : ''}
  ${(hasTasks || hasSectionTodos) ? noteForm(section, name) : ''}`;
}


function inlineSavedNoteCardsHTML(notes, tone, emptyText){
  const safe=(notes || []).filter(Boolean).slice(0,4);
  if(!safe.length) return '';
  return `<div class="jy-inline-note-stack ${esc(tone || '')}">${safe.map(n=>{
    const body=noteHasVisibleContent(n) ? `<div class="jy-submitted-content">${noteContentHTML(n)}</div>` : '';
    return `<div class="jy-submitted ${esc(tone || '')}"><p class="jy-page-meta">${esc(n.date || '')}${n.savedAt ? ' · '+esc(n.savedAt) : ''}</p><strong>${esc(n.title || emptyText || '추가 노트')}</strong>${body}${noteAttachedFilesHTML(n)}</div>`;
  }).join('')}</div>`;
}
function lectureInlineExtraNotesHTML(date, code){
  const state=readState();
  const prefix='lecture_extra_'+date+'_'+String(code)+'_';
  const notes=(state.notes || []).filter(n=>String(n.id || '').startsWith(prefix)).sort((a,b)=>String(b.savedAt || '').localeCompare(String(a.savedAt || '')));
  return inlineSavedNoteCardsHTML(notes, 'jy-note-tone-lecture', '강의 노트');
}
function skillReviewInlineExtraNotesHTML(date, section){
  const state=readState();
  const prefix=String(section)+'_'+date+'_note_';
  const notes=(state.notes || []).filter(n=>String(n.id || '').startsWith(prefix)).sort((a,b)=>String(b.savedAt || '').localeCompare(String(a.savedAt || '')));
  return inlineSavedNoteCardsHTML(notes, 'jy-note-tone-wrong', SECTION_NAMES[section]+' 오답 노트');
}
function skillLectureNoteForm(section){
  const plan=activePlan();
  const lectures=lectureNoteSubmissionLecturesFor(plan.date, section);
  if(!lectures.length){
    return `<section class="jy-card jy-lecture-editor-card">
      <h2 class="jy-card-title">강의 노트 제출</h2>
      <div class="jy-note">오늘 이 영역에 배정된 강의가 없습니다.</div>
    </section>`;
  }
  const activeCode=activeLectureNoteCodeFor(plan.date, lectures);
  const writingOpen=lectureNoteEditorOpen();
  return `<section class="jy-card jy-review-editor-card jy-lecture-editor-card">
    <div class="jy-lecture-editor-headline">
      <h2 class="jy-card-title">강의 노트 제출</h2>
      <button class="jy-btn" type="button" id="toggle-skill-lecture-editor">${writingOpen ? '작성창 닫기' : '작성창 열기'}</button>
    </div>
    <div class="jy-review-sticky-bar jy-lecture-sticky-bar jy-lecture-select-bar">
      <div class="jy-review-file-inline">
        <label class="jy-label">강의 선택</label>
        <select class="jy-input jy-review-file-input" id="skill-lecture-note-code">${lectures.map(l=>`<option value="${esc(l.code)}" ${String(l.code)===String(activeCode)?'selected':''}>${esc(l.code)} · ${esc(l.course||'')} · ${esc(l.title||'')}${l.lectureDate && l.lectureDate!==plan.date ? ' · '+esc(l.lectureDate)+' 수강분' : ''}</option>`).join('')}</select>
      </div>
    </div>
    <div class="jy-review-editor-wrap">
      <div id="skill-lecture-writing-panel" class="jy-lecture-writing-panel ${writingOpen ? '' : 'jy-hidden'}">
        ${notePageModeHTML('lecture')}
        <div class="jy-lecture-toolbar-wrap">${lectureRichToolbarHTML()}</div>
        ${richEditorPagesHTML('skill-lecture-note-editor', lectureNoteHTMLFor(plan.date, activeCode), 'jy-lecture-rich-editor', '필요하면 작성', 'lecture')}
      </div>
      <div class="jy-field jy-lecture-photo-field">
        <label class="jy-label">사진/PDF</label>
        <input class="jy-input" type="file" accept="image/*,.pdf,application/pdf" multiple id="skill-lecture-proof-input">
        <div id="skill-lecture-proof-gallery">${lectureProofGalleryHTML(plan.date, activeCode)}</div>
      </div>
      <div class="jy-btns jy-review-editor-actions">
        <button class="jy-btn dark" type="button" id="submit-skill-lecture-note">제출</button>
        <button class="jy-btn" type="button" id="lecture-note-new">노트 추가</button>
        <button class="jy-btn" type="button" id="clear-skill-lecture-note">글 삭제</button>
      </div>
    </div>
  </section>`;
}

function noteForm(section, name){
  const plan=activePlan();
  const draft=skillReviewDraftFor(plan.date, section);
  const savedText=draft.savedAt ? `중간저장 ${esc(draft.savedAt)}` : '';
  const submittedText=draft.submittedAt ? `제출 ${esc(draft.submittedAt)}` : '';
  const writingOpen=skillReviewEditorOpen(section);
  return `<section class="jy-card jy-review-editor-card jy-wrong-editor-card">
    <div class="jy-lecture-editor-headline">
      <h2 class="jy-card-title">오답 노트 제출</h2>
      <button class="jy-btn" type="button" id="toggle-skill-review-editor">${writingOpen ? '작성창 닫기' : '작성창 열기'}</button>
    </div>
    <div class="jy-review-sticky-bar jy-skill-review-sticky jy-wrong-sticky-bar">
      <div class="jy-review-file-inline">
        <label class="jy-label">자료명</label>
        <input class="jy-input jy-review-file-input" id="note-source" value="${esc(draft.source || '')}" autocomplete="off">
        <label class="jy-label jy-review-file-label">사진/PDF</label>
        <input class="jy-input jy-review-file-input" type="file" accept="image/*,.pdf,application/pdf" multiple id="skill-review-file-input">
      </div>
      <div id="skill-review-toolbar-panel" class="${writingOpen ? '' : 'jy-hidden'}">${skillReviewToolbarHTML()}</div>
    </div>
    <div class="jy-review-editor-wrap">
      <div id="skill-review-file-gallery">${skillReviewFilesHTML(plan.date, section)}</div>
      <div id="skill-review-writing-panel" class="${writingOpen ? '' : 'jy-hidden'}">
        ${notePageModeHTML('review_'+section)}
        ${richEditorPagesHTML('mock-review-editor', draft.html || '', 'jy-wrong-rich-editor', '필요하면 작성', 'review_'+section, `data-review-id="skill:${esc(section)}"`)}
      </div>
      <div class="jy-btns jy-review-editor-actions">
        <button class="jy-btn" type="button" id="mock-review-draft-save">저장</button>
        <button class="jy-btn dark" type="button" id="mock-review-submit" data-section="${section}">제출</button>
        <button class="jy-btn" type="button" id="skill-review-note-new">노트 추가</button>
      </div>
    </div>
  </section>`;
}

function noteLectureCode(note){
  const text = String(note?.title || note?.id || '');
  const m = text.match(/(?:^|_|\s)(\d{3})(?:\s|·|_|$)/);
  return m ? m[1] : '';
}

function normaliseSubjectName(value){
  const v = String(value || '').toLowerCase();
  if(v.includes('listening')) return 'listening';
  if(v.includes('reading')) return 'reading';
  if(v.includes('writing')) return 'writing';
  if(v.includes('speaking')) return 'speaking';
  return '';
}

function noteBelongsToSkill(note, section){
  if(note.section === section) return true;
  if(note.section !== 'lecture_note') return false;
  const code = noteLectureCode(note);
  if(!code) return false;
  const lecture = findLecture(code);
  return normaliseSubjectName(lecture.subject) === section;
}

function grammarSort(a,b){
  return String(b.updatedAt || b.savedAt || b.date || '').localeCompare(String(a.updatedAt || a.savedAt || a.date || ''));
}
function grammarActiveNotes(state){
  state=ensureStateCollections(state || readState());
  return state.grammarNotes.filter(n=>!n.deleted).slice().sort(grammarSort);
}
function grammarTrashNotes(state){
  state=ensureStateCollections(state || readState());
  return state.grammarNotes.filter(n=>n.deleted).slice().sort(grammarSort);
}
function grammarFindNote(state,id){
  state=ensureStateCollections(state || readState());
  return state.grammarNotes.find(n=>String(n.id)===String(id));
}
function grammarEditorNote(state){
  state=ensureStateCollections(state || readState());
  const note=grammarFindNote(state, state.grammarEditingId);
  return note && !note.deleted ? note : null;
}
function grammarPlain(html){ return richHTMLToText(html || '').replace(/\s+/g,' ').trim(); }
function grammarCurrentNote(state){
  state=ensureStateCollections(state || readState());
  if(state.grammarEditingId === '__new__') return null;
  const editing=grammarEditorNote(state);
  if(editing) return editing;
  const notes=grammarActiveNotes(state);
  let idx=notePageIndex.grammar || 0;
  if(idx < 0) idx=0;
  if(idx >= notes.length) idx=Math.max(0, notes.length - 1);
  notePageIndex.grammar=idx;
  return notes[idx] || null;
}
function grammarEditorElement(){
  return byId('grammar-note-editor') || byId('mock-review-editor');
}
function saveGrammarNoteDraft(submitted=false, shouldRender=false, force=false){
  const editor=grammarEditorElement();
  if(!editor) return false;
  richNormaliseTables(editor);
  const titleInput=byId('grammar-note-title');
  const html=combinedRichEditorHTMLForSave('mock-review-editor');
  const plain=grammarPlain(html);
  const title=String(titleInput?.value || '').trim();
  const existingNoteId=String(editor.dataset.grammarNoteId || '').trim();
  const existingNote=existingNoteId ? grammarFindNote(readState(), existingNoteId) : null;
  const existingFiles=normaliseLectureProof({items:existingNote && existingNote.files || []}).items;
  if(submitted && !plain && !existingFiles.length){
    alert('글 또는 파일이 필요합니다.');
    return false;
  }
  if(!plain && !title && !existingNoteId && !force) return false;
  const now=new Date().toLocaleString('ko-KR');
  const state=readState();
  const date=activePlan().date;
  const noteId=String(editor.dataset.grammarNoteId || '').trim();
  let note=noteId ? grammarFindNote(state,noteId) : null;
  if(note && !note.deleted){
    note.title=title || note.title || 'Grammar';
    note.html=html;
    note.text=plain;
    note.updatedAt=now;
    note.files=normaliseLectureProof({items:note.files || []}).items;
    state.grammarEditingId=note.id;
  }else{
    note={id:'grammar_'+date+'_'+Date.now(), date, section:'grammar', title:title || 'Grammar', html, text:plain, files:[], savedAt:now, updatedAt:now, deleted:false};
    state.grammarNotes.unshift(note);
    state.grammarEditingId=note.id;
    editor.dataset.grammarNoteId=note.id;
  }
  if(submitted){
    dayState(state,date).submissions.grammar=true;
    note.submittedAt=now;
  }
  writeState(state);
  notePageIndex.grammar=0;
  const status=byId('grammar-note-status') || byId('mock-review-editor-status');
  if(status) status.textContent=submitted ? '입력 완료 · '+now : '저장 '+now;
  if(shouldRender) render();
  return true;
}
function saveGrammarNoteFromEditor(){
  return saveGrammarNoteDraft(true, true);
}
function newGrammarNote(){
  const state=readState();
  state.grammarEditingId='__new__';
  writeState(state);
  render();
}
function editGrammarNote(id){
  const state=readState();
  const note=grammarFindNote(state,id);
  if(!note || note.deleted) return;
  state.grammarEditingId=note.id;
  writeState(state);
  render();
}
function moveGrammarNoteToTrash(id){
  const state=readState();
  const note=grammarFindNote(state,id);
  if(!note) return;
  note.deleted=true;
  note.deletedAt=new Date().toLocaleString('ko-KR');
  note.updatedAt=note.deletedAt;
  if(String(state.grammarEditingId)===String(id)) state.grammarEditingId='';
  writeState(state);
  render();
}
function restoreGrammarNote(id){
  const state=readState();
  const note=grammarFindNote(state,id);
  if(!note) return;
  note.deleted=false;
  note.restoredAt=new Date().toLocaleString('ko-KR');
  note.updatedAt=note.restoredAt;
  state.grammarEditingId=note.id;
  writeState(state);
  render();
}

function grammarFilesFor(noteId){
  const state=readState();
  const note=grammarFindNote(state, noteId);
  return normaliseLectureProof({items:note && note.files || [], savedAt:note && (note.updatedAt || note.savedAt) || ''}).items;
}
function grammarGalleryId(noteId){
  return noteId ? 'grammar_'+String(noteId) : 'grammar_empty';
}
function grammarFilesHTML(noteId){
  return proofGalleryHTMLFromItems(grammarFilesFor(noteId), grammarGalleryId(noteId), '첨부 없음');
}
function ensureGrammarNoteForFile(){
  let id=String(grammarEditorElement()?.dataset.grammarNoteId || '').trim();
  if(id) return id;
  saveGrammarNoteDraft(false, false, true);
  id=String(grammarEditorElement()?.dataset.grammarNoteId || '').trim();
  return id;
}
function addGrammarFiles(noteId, files){
  const list=Array.from(files && files.length !== undefined ? files : (files ? [files] : []));
  if(!noteId || !list.length) return Promise.resolve(false);
  return Promise.all(list.map(readLectureProofFile)).then(groups=>{
    const valid=groups.flat().filter(Boolean);
    if(!valid.length) return false;
    const state=readState();
    const note=grammarFindNote(state, noteId);
    if(!note || note.deleted) return false;
    const now=new Date().toLocaleString('ko-KR');
    note.files=normaliseLectureProof({items:note.files || []}).items.concat(valid);
    note.updatedAt=now;
    note.savedAt=note.savedAt || now;
    writeState(state);
    return true;
  }).catch(err=>{
    if(String(err && err.message || err).toLowerCase().includes('indexeddb')){
      throw new Error('파일 저장소를 사용할 수 없습니다. Safari에서 이 파일을 일반 웹페이지로 다시 열거나 다른 브라우저에서 열어 주세요.');
    }
    throw err;
  });
}
function clearGrammarFiles(noteId){
  const state=readState();
  const note=grammarFindNote(state, noteId);
  if(!note) return false;
  normaliseLectureProof({items:note.files || []}).items.forEach(item=>{ if(item && item.id) deleteLectureFileRecord(item.id); });
  note.files=[];
  note.updatedAt=new Date().toLocaleString('ko-KR');
  writeState(state);
  return true;
}
function clearGrammarText(noteId){
  const editor=grammarEditorElement();
  clearRichPageEditors('mock-review-editor');
  const titleInput=byId('grammar-note-title');
  const state=readState();
  const note=grammarFindNote(state, noteId);
  if(note){
    note.html='';
    note.text='';
    note.updatedAt=new Date().toLocaleString('ko-KR');
    writeState(state);
  }
  if(titleInput && !noteId) titleInput.value='';
  return true;
}
function addGrammarTextPages(noteId, html){
  const clean=String(html || '').trim();
  const text=richHTMLToText(clean).trim();
  if(!noteId || !text) return 0;
  const state=readState();
  const note=grammarFindNote(state, noteId);
  if(!note || note.deleted) return 0;
  const now=new Date().toLocaleString('ko-KR');
  const title=String(note.title || 'Grammar');
  const pages=makeProofTextPageItems(clean, title, now);
  if(!pages.length) return 0;
  note.html='';
  note.text='';
  note.files=replaceDocumentedTextItems(normaliseLectureProof({items:note.files || []}).items, pages);
  note.updatedAt=now;
  note.savedAt=note.savedAt || now;
  writeState(state);
  return pages.length;
}

function grammarTrashHTML(){
  const trash=grammarTrashNotes(readState());
  if(!trash.length) return '';
  return `<details class="jy-grammar-trash-inline"><summary>휴지통 ${trash.length}</summary><div class="jy-grammar-trash-list">${trash.map(n=>`<div class="jy-grammar-trash-row"><span>${esc(n.date||'')} · ${esc(n.title || 'Grammar')} · ${esc(n.deletedAt || '')}</span><button class="jy-btn jy-delete" type="button" data-grammar-restore="${esc(n.id)}">복구</button></div>`).join('')}</div></details>`;
}
function phraseSort(a,b){
  return String(b.updatedAt || b.savedAt || b.date || '').localeCompare(String(a.updatedAt || a.savedAt || a.date || ''));
}
function phraseActiveNotes(state){
  state=ensureStateCollections(state || readState());
  return state.phraseNotes.filter(n=>!n.deleted).slice().sort(phraseSort);
}
function phraseTrashNotes(state){
  state=ensureStateCollections(state || readState());
  return state.phraseNotes.filter(n=>n.deleted).slice().sort(phraseSort);
}
function phraseFindNote(state,id){
  state=ensureStateCollections(state || readState());
  return state.phraseNotes.find(n=>String(n.id)===String(id));
}
function phraseEditorNote(state){
  state=ensureStateCollections(state || readState());
  const note=phraseFindNote(state, state.phraseEditingId);
  return note && !note.deleted ? note : null;
}
function phraseCurrentNote(state){
  state=ensureStateCollections(state || readState());
  if(state.phraseEditingId === '__new__') return null;
  const editing=phraseEditorNote(state);
  if(editing) return editing;
  const notes=phraseActiveNotes(state);
  let idx=notePageIndex.phrase || 0;
  if(idx < 0) idx=0;
  if(idx >= notes.length) idx=Math.max(0, notes.length - 1);
  notePageIndex.phrase=idx;
  return notes[idx] || null;
}
function phraseEditorElement(){
  return byId('phrase-note-editor');
}
function phraseTextToHtml(text){
  return esc(text || '').replace(/\n/g,'<br>');
}
function savePhraseNoteDraft(submitted=false, shouldRender=false, force=false){
  const editor=phraseEditorElement();
  if(!editor) return false;
  const titleInput=byId('phrase-note-title');
  const text=combinedPhraseEditorTextForSave();
  const html=combinedPhraseEditorHTMLForSave();
  const plain=richHTMLToText(html).replace(/\s+/g,' ').trim();
  const title=String(titleInput?.value || '').trim();
  const existingNoteId=String(editor.dataset.phraseNoteId || '').trim();
  const existingNote=existingNoteId ? phraseFindNote(readState(), existingNoteId) : null;
  const existingFiles=normaliseLectureProof({items:existingNote && existingNote.files || []}).items;
  if(submitted && !plain && !existingFiles.length){
    alert('글 또는 파일이 필요합니다.');
    return false;
  }
  if(!plain && !title && !existingNoteId && !force) return false;
  const now=new Date().toLocaleString('ko-KR');
  const state=readState();
  const date=activePlan().date;
  const noteId=String(editor.dataset.phraseNoteId || '').trim();
  let note=noteId ? phraseFindNote(state,noteId) : null;
  if(note && !note.deleted){
    note.title=title || note.title || '구문 연습 노트';
    note.text=text;
    note.html=html;
    note.updatedAt=now;
    note.files=normaliseLectureProof({items:note.files || []}).items;
    state.phraseEditingId=note.id;
  }else{
    note={id:'phrase_'+date+'_'+Date.now(), date, section:'phrase', title:title || '구문 연습 노트', html, text, files:[], savedAt:now, updatedAt:now, deleted:false};
    state.phraseNotes.unshift(note);
    state.phraseEditingId=note.id;
    editor.dataset.phraseNoteId=note.id;
  }
  if(submitted){
    note.submittedAt=now;
  }
  writeState(state);
  notePageIndex.phrase=0;
  const status=byId('phrase-note-status');
  if(status) status.textContent=submitted ? '저장 완료 · '+now : '저장 '+now;
  if(shouldRender) render();
  return true;
}
function savePhraseNoteFromEditor(){
  return savePhraseNoteDraft(true, true);
}
function newPhraseNote(){
  const state=readState();
  state.phraseEditingId='__new__';
  writeState(state);
  render();
}
function editPhraseNote(id){
  const state=readState();
  const note=phraseFindNote(state,id);
  if(!note || note.deleted) return;
  state.phraseEditingId=note.id;
  writeState(state);
  render();
}
function movePhraseNoteToTrash(id){
  const state=readState();
  const note=phraseFindNote(state,id);
  if(!note) return;
  note.deleted=true;
  note.deletedAt=new Date().toLocaleString('ko-KR');
  note.updatedAt=note.deletedAt;
  if(String(state.phraseEditingId)===String(id)) state.phraseEditingId='';
  writeState(state);
  render();
}
function restorePhraseNote(id){
  const state=readState();
  const note=phraseFindNote(state,id);
  if(!note) return;
  note.deleted=false;
  note.restoredAt=new Date().toLocaleString('ko-KR');
  note.updatedAt=note.restoredAt;
  state.phraseEditingId=note.id;
  writeState(state);
  render();
}
function phraseFilesFor(noteId){
  const state=readState();
  const note=phraseFindNote(state, noteId);
  return normaliseLectureProof({items:note && note.files || [], savedAt:note && (note.updatedAt || note.savedAt) || ''}).items;
}
function phraseGalleryId(noteId){
  return noteId ? 'phrase_'+String(noteId) : 'phrase_empty';
}
function ensurePhraseNoteForFile(){
  let id=String(phraseEditorElement()?.dataset.phraseNoteId || '').trim();
  if(id) return id;
  savePhraseNoteDraft(false, false, true);
  id=String(phraseEditorElement()?.dataset.phraseNoteId || '').trim();
  return id;
}
function addPhraseFiles(noteId, files){
  const list=Array.from(files && files.length !== undefined ? files : (files ? [files] : []));
  if(!noteId || !list.length) return Promise.resolve(false);
  return Promise.all(list.map(readLectureProofFile)).then(groups=>{
    const valid=groups.flat().filter(Boolean);
    if(!valid.length) return false;
    const state=readState();
    const note=phraseFindNote(state, noteId);
    if(!note || note.deleted) return false;
    const now=new Date().toLocaleString('ko-KR');
    note.files=normaliseLectureProof({items:note.files || []}).items.concat(valid);
    note.updatedAt=now;
    note.savedAt=note.savedAt || now;
    writeState(state);
    return true;
  }).catch(err=>{
    if(String(err && err.message || err).toLowerCase().includes('indexeddb')){
      throw new Error('파일 저장소를 사용할 수 없습니다. Safari에서 이 파일을 일반 웹페이지로 다시 열거나 다른 브라우저에서 열어 주세요.');
    }
    throw err;
  });
}
function clearPhraseFiles(noteId){
  const state=readState();
  const note=phraseFindNote(state, noteId);
  if(!note) return false;
  normaliseLectureProof({items:note.files || []}).items.forEach(item=>{ if(item && item.id) deleteLectureFileRecord(item.id); });
  note.files=[];
  note.updatedAt=new Date().toLocaleString('ko-KR');
  writeState(state);
  return true;
}
function clearPhraseText(noteId){
  const editor=phraseEditorElement();
  clearPhrasePageEditors();
  const titleInput=byId('phrase-note-title');
  const state=readState();
  const note=phraseFindNote(state, noteId);
  if(note){
    note.html='';
    note.text='';
    note.updatedAt=new Date().toLocaleString('ko-KR');
    writeState(state);
  }
  if(titleInput && !noteId) titleInput.value='';
  return true;
}
function addPhraseTextPages(noteId, html){
  const clean=String(html || '').trim();
  const plain=richHTMLToText(clean).trim();
  if(!noteId || !plain) return 0;
  const state=readState();
  const note=phraseFindNote(state, noteId);
  if(!note || note.deleted) return 0;
  const now=new Date().toLocaleString('ko-KR');
  const title=String(note.title || '구문 연습 노트');
  const pages=makeProofTextPageItems(clean, title, now);
  if(!pages.length) return 0;
  note.html='';
  note.text='';
  note.files=replaceDocumentedTextItems(normaliseLectureProof({items:note.files || []}).items, pages);
  note.updatedAt=now;
  note.savedAt=note.savedAt || now;
  writeState(state);
  return pages.length;
}

const JY_PHRASE_PRACTICE_TOPICS = [
  {subject:'underwater archaeological surveys', issue:'the loss of evidence from submerged settlements', process:'mapping ancient shorelines with acoustic sensors', group:'museum researchers and coastal communities', policy:'shared access agreements for digital archives', resource:'high-resolution sonar data', condition:'excavation teams document fragile objects before they are removed', limitation:'water movement can distort the position of small artefacts', result:'preserving information about past human adaptation to rising seas'},
  {subject:'urban heat adaptation projects', issue:'dangerous temperature increases in densely built neighbourhoods', process:'combining shaded walkways with reflective roof materials', group:'older residents living in poorly insulated housing', policy:'municipal cooling strategies', resource:'street-level temperature records', condition:'maintenance budgets are secured beyond the first year', limitation:'satellite images rarely capture the experience of pedestrians at ground level', result:'lowering health risks during prolonged summer heatwaves'},
  {subject:'community seed banks', issue:'the disappearance of locally adapted crop varieties', process:'collecting and exchanging seeds across farming districts', group:'small agricultural cooperatives', policy:'regional food resilience programmes', resource:'field trial reports', condition:'farmers record how each variety performs in different soils', limitation:'short harvest seasons make long-term productivity difficult to compare', result:'protecting agricultural knowledge during periods of environmental uncertainty'},
  {subject:'river sediment management', issue:'the gradual erosion of downstream wetlands', process:'redirecting controlled flows during specific parts of the year', group:'villages dependent on floodplain farming', policy:'catchment-level water planning', resource:'hydrological monitoring data', condition:'upstream industries agree to release water at predictable intervals', limitation:'historic flood records often exclude informal settlements', result:'restoring soil fertility without relying on artificial fertilisers'},
  {subject:'language preservation programmes', issue:'the decline of minority languages among younger speakers', process:'recording oral histories and developing school materials', group:'families in remote mountain regions', policy:'bilingual education initiatives', resource:'community interview archives', condition:'local teachers are involved in designing classroom resources', limitation:'official census categories may understate multilingual ability', result:'keeping cultural knowledge available to future generations'},
  {subject:'microplastic monitoring networks', issue:'invisible pollution in freshwater ecosystems', process:'sampling river water at multiple points throughout the year', group:'environmental laboratories and local volunteers', policy:'stricter packaging regulations', resource:'particle analysis results', condition:'sampling methods are standardised across different regions', limitation:'smaller fragments can escape detection during routine laboratory testing', result:'identifying pollution sources before contamination spreads further'},
  {subject:'adaptive reuse of industrial sites', issue:'the abandonment of former manufacturing districts', process:'converting empty warehouses into public cultural spaces', group:'artists, residents and small businesses', policy:'heritage-led regeneration plans', resource:'planning application records', condition:'new uses respect the structural limits of older buildings', limitation:'property data may conceal the displacement of existing tenants', result:'reviving neglected areas while retaining traces of local history'},
  {subject:'pollinator habitat networks', issue:'the decline of insects needed for crop production', process:'planting connected strips of flowering vegetation', group:'orchard growers and roadside maintenance teams', policy:'landscape-scale biodiversity schemes', resource:'seasonal insect counts', condition:'plant species are selected for different flowering periods', limitation:'annual surveys may miss delayed effects on plant reproduction', result:'supporting food production through healthier ecological relationships'},
  {subject:'digital museum interpretation', issue:'limited public access to fragile collections', process:'creating layered explanations through interactive displays', group:'school groups and first-time museum visitors', policy:'open cultural learning platforms', resource:'visitor engagement analytics', condition:'curators explain uncertainty rather than presenting every object as fully understood', limitation:'click rates do not necessarily indicate deeper historical understanding', result:'helping wider audiences question how knowledge about the past is produced'},
  {subject:'noise mapping in cities', issue:'the health impact of continuous traffic sound', process:'combining sensor readings with residents’ diaries', group:'people living near major transport corridors', policy:'urban sound management plans', resource:'acoustic monitoring records', condition:'planning authorities consider night-time disturbance as well as daytime averages', limitation:'brief measurements can miss irregular bursts of disruptive noise', result:'designing quieter public spaces for vulnerable residents'},
  {subject:'peatland carbon restoration', issue:'the release of stored carbon from damaged soils', process:'blocking drainage channels and raising water levels', group:'rural land managers and conservation charities', policy:'long-term ecological stewardship agreements', resource:'soil moisture measurements', condition:'restoration areas are protected from repeated burning and heavy grazing', limitation:'carbon gains may remain difficult to measure during the early years', result:'slowing emissions while improving habitat quality'},
  {subject:'school-based nutrition studies', issue:'the relationship between diet and concentration in adolescence', process:'tracking meal quality alongside classroom performance', group:'students from households with irregular food access', policy:'subsidised breakfast programmes', resource:'attendance and assessment data', condition:'researchers account for sleep, stress and travel time', limitation:'test scores alone cannot explain changes in learning behaviour', result:'supporting educational participation through better daily routines'},
  {subject:'coastal early-warning systems', issue:'the growing danger of storm surges', process:'linking tidal sensors with mobile alerts', group:'fishing households and port workers', policy:'community evacuation protocols', resource:'real-time sea-level readings', condition:'messages are delivered in languages used by local residents', limitation:'technical alerts may fail when communication networks are damaged', result:'giving communities more time to respond before flooding begins'},
  {subject:'remote work infrastructure', issue:'uneven access to professional employment outside large cities', process:'expanding shared work hubs with reliable broadband', group:'graduates living in regional towns', policy:'digital inclusion strategies', resource:'labour market participation data', condition:'training programmes match local skills with available online roles', limitation:'employment statistics may not capture unpaid care responsibilities', result:'broadening career options without forcing relocation'},
  {subject:'ancient trade route research', issue:'how goods and ideas moved across difficult landscapes', process:'analysing pottery residues and settlement patterns', group:'archaeologists and regional heritage guides', policy:'cross-border research partnerships', resource:'material culture databases', condition:'findings are compared with environmental evidence from the same period', limitation:'surviving artefacts rarely represent everyday exchange evenly', result:'reconstructing networks that shaped cultural contact over long distances'},
  {subject:'hospital wayfinding design', issue:'patient anxiety in complex medical buildings', process:'using clearer signs, landmarks and colour-coded routes', group:'visitors attending unfamiliar departments', policy:'patient-centred design standards', resource:'navigation error reports', condition:'designers test routes with people who have limited mobility', limitation:'staff feedback may overlook problems faced by first-time visitors', result:'reducing stress before treatment begins'},
  {subject:'rainwater harvesting in schools', issue:'water shortages during dry seasons', process:'collecting roof runoff for sanitation and gardens', group:'students and maintenance staff', policy:'low-cost climate adaptation grants', resource:'water-use logs', condition:'storage tanks are cleaned regularly and safely covered', limitation:'rainfall averages can hide extreme variation between neighbourhoods', result:'making daily school operations less vulnerable to supply interruptions'},
  {subject:'public transport fare reform', issue:'financial exclusion from essential urban services', process:'introducing capped fares across buses, trams and trains', group:'low-paid workers with irregular shifts', policy:'integrated mobility pricing', resource:'ticket transaction datasets', condition:'reduced fares apply during early morning and late evening travel', limitation:'card data may exclude people who still pay in cash', result:'improving access to work, healthcare and education'},
  {subject:'forest fire risk modelling', issue:'more frequent fires near expanding settlements', process:'combining vegetation maps with local weather projections', group:'emergency planners and rural households', policy:'preventive land management guidelines', resource:'fire history databases', condition:'residents receive practical advice before high-risk seasons', limitation:'models cannot predict every accidental ignition event', result:'reducing damage through earlier preparation'},
  {subject:'children’s independent mobility', issue:'the reduction of unsupervised outdoor movement', process:'redesigning routes between homes, parks and schools', group:'primary school pupils and parents', policy:'safe streets initiatives', resource:'travel behaviour surveys', condition:'crossings, lighting and traffic speeds are improved together', limitation:'parental concern may remain high after physical changes are made', result:'allowing children to build confidence in familiar neighbourhoods'},
  {subject:'ocean temperature observation', issue:'the changing distribution of marine species', process:'deploying floating sensors across migration routes', group:'fisheries scientists and coastal economies', policy:'adaptive catch management', resource:'longitudinal oceanographic datasets', condition:'observations are shared before seasonal decisions are finalised', limitation:'surface measurements may not reflect deeper habitat conditions', result:'helping industries respond to ecological change with fewer sudden losses'},
  {subject:'affordable housing retrofits', issue:'high energy costs in older apartment blocks', process:'improving insulation, ventilation and heating controls', group:'tenants on fixed incomes', policy:'publicly funded efficiency upgrades', resource:'household energy bills', condition:'renovations are planned without forcing residents to move out', limitation:'billing data may be affected by changes in household size', result:'lowering living costs while improving indoor comfort'},
  {subject:'citizen astronomy projects', issue:'the difficulty of classifying large quantities of telescope images', process:'asking trained volunteers to identify unusual patterns', group:'amateur observers and university researchers', policy:'open science participation models', resource:'image classification records', condition:'expert review is used to check uncertain submissions', limitation:'volunteer attention can vary across repetitive tasks', result:'accelerating discovery while expanding public engagement with science'},
  {subject:'soil microbiome research', issue:'declining productivity in intensively cultivated fields', process:'examining how bacteria and fungi interact with plant roots', group:'agronomists and local growers', policy:'soil health monitoring frameworks', resource:'DNA sequencing results', condition:'chemical use and crop rotation histories are recorded accurately', limitation:'laboratory findings may change when tested in open fields', result:'developing farming practices that depend less on synthetic inputs'},
  {subject:'heritage walking trails', issue:'the limited visibility of overlooked local histories', process:'linking ordinary streets with researched stories and archival images', group:'residents, visitors and community historians', policy:'participatory cultural mapping projects', resource:'oral testimony collections', condition:'interpretation includes multiple accounts of the same place', limitation:'official archives may preserve some voices more consistently than others', result:'turning everyday spaces into sites for public learning'},
  {subject:'battery recycling research', issue:'the environmental cost of discarded electronic devices', process:'recovering metals through safer chemical separation', group:'manufacturers and municipal waste services', policy:'extended producer responsibility rules', resource:'materials recovery data', condition:'collection systems prevent batteries from entering general rubbish streams', limitation:'pilot facilities may operate under conditions unavailable at commercial scale', result:'reducing demand for newly mined resources'},
  {subject:'sleep and memory experiments', issue:'why learning is affected by irregular rest patterns', process:'measuring recall after controlled sleep intervals', group:'adult learners preparing for professional exams', policy:'evidence-based study guidance', resource:'cognitive performance tests', condition:'participants follow consistent routines before each session', limitation:'laboratory sleep does not always resemble normal home environments', result:'clarifying how rest supports the consolidation of new information'},
  {subject:'mountain tourism management', issue:'trail erosion caused by concentrated visitor numbers', process:'rotating access routes and repairing damaged paths', group:'guides, conservation staff and local businesses', policy:'visitor capacity planning', resource:'footfall counter data', condition:'alternative routes remain attractive and clearly signposted', limitation:'visitor counts may not show how people behave once they leave marked paths', result:'protecting fragile landscapes while keeping tourism economically viable'},
  {subject:'low-cost air quality sensors', issue:'unequal knowledge about pollution exposure', process:'placing monitoring devices near schools and markets', group:'urban residents without access to official data', policy:'community environmental reporting', resource:'particulate matter readings', condition:'sensor calibration is checked against reference instruments', limitation:'cheap devices can produce misleading results in humid conditions', result:'making environmental risks more visible to the people affected by them'},
  {subject:'inclusive exhibition design', issue:'barriers faced by visitors with different sensory needs', process:'providing varied routes, quiet areas and tactile information', group:'disabled visitors and exhibition educators', policy:'accessibility-led curatorial planning', resource:'visitor feedback sessions', condition:'access measures are included from the earliest design stage', limitation:'post-visit surveys may miss people who chose not to attend', result:'making cultural spaces more usable for a wider public'}
];const JY_PHRASE_PRACTICE_PATTERNS = [
  t=>`Although ${t.resource} appears to support the introduction of ${t.policy}, researchers caution that ${t.limitation}.`,
  t=>`The extent to which ${t.subject} can address ${t.issue} depends largely on whether ${t.condition}.`,
  t=>`Because ${t.subject} can contribute to ${t.result}, policy makers have begun to treat ${t.process} as a long-term investment.`,
  t=>`When ${t.group} are asked to participate in ${t.policy}, their responses often reflect practical concerns about time, cost and trust.`,
  t=>`The argument that ${t.subject} should receive public support is strengthened by evidence that it can help with ${t.issue}.`,
  t=>`While ${t.process} may seem technically simple, its success is shaped by local knowledge and the availability of reliable infrastructure.`,
  t=>`Researchers who study ${t.subject} often combine ${t.resource} with interviews in order to understand how policies affect daily life.`,
  t=>`If ${t.condition}, ${t.policy} could become a more realistic response to ${t.issue}.`,
  t=>`A major difficulty in evaluating ${t.subject} is that ${t.limitation}, especially when the research period is short.`,
  t=>`The communities most affected by ${t.issue} are rarely the ones with the strongest influence over ${t.policy}.`,
  t=>`By encouraging ${t.process}, local governments may be able to achieve ${t.result} without imposing sudden changes on residents.`,
  t=>`The data collected from ${t.resource} suggest that ${t.subject} should be examined across several regions rather than within a single site.`,
  t=>`Even when ${t.policy} receives public approval, its long-term impact remains uncertain unless ${t.condition}.`,
  t=>`One reason ${t.group} may resist new environmental policies is that the benefits of ${t.result} are not always immediately visible.`,
  t=>`The relationship between ${t.subject} and ${t.issue} has become increasingly important as climate, technology and population patterns change.`,
  t=>`Instead of treating ${t.issue} as an isolated problem, recent studies link it to wider questions about infrastructure and social inequality.`,
  t=>`The use of ${t.resource} has improved researchers' ability to identify where ${t.process} is likely to produce measurable results.`,
  t=>`In areas where ${t.condition}, ${t.group} can contribute directly to the management of ${t.subject}.`,
  t=>`The most persuasive evidence for ${t.policy} comes from projects that document both economic outcomes and changes in community behaviour.`,
  t=>`Because ${t.limitation}, some scholars argue that qualitative observation should be used alongside numerical evidence.`,
  t=>`The success of ${t.subject} cannot be judged only by short-term efficiency because ${t.result} may take several years to appear.`,
  t=>`Where ${t.process} is poorly managed, ${t.policy} may increase public scepticism rather than solve ${t.issue}.`,
  t=>`The possibility that ${t.subject} could reduce ${t.issue} has attracted attention from researchers, charities and local councils.`,
  t=>`Although ${t.group} often possess detailed knowledge of local conditions, their experience is not always reflected in official planning documents.`,
  t=>`A comparison of several case studies shows that ${t.policy} works best when technical support is combined with public education.`,
  t=>`The historical development of ${t.subject} demonstrates how environmental pressures can reshape economic organisation and social priorities.`,
  t=>`For ${t.group}, the practical value of ${t.subject} lies in its ability to support ${t.result} during periods of uncertainty.`,
  t=>`The claim that ${t.policy} is too expensive becomes less convincing when the long-term cost of ${t.issue} is taken into account.`,
  t=>`As ${t.resource} becomes more widely available, researchers can test whether ${t.process} produces similar outcomes in different contexts.`,
  t=>`Unless ${t.condition}, attempts to use ${t.subject} as a solution to ${t.issue} are likely to remain limited.`
];
function dateDayOffset(date){
  const start=new Date(JY_START_DATE+'T00:00:00');
  const current=new Date(String(date || todayISO())+'T00:00:00');
  const diff=Math.floor((current - start)/(1000*60*60*24));
  return Number.isFinite(diff) ? Math.max(0, diff) : 0;
}
function phrasePracticeDefaultText(date){
  const day=dateDayOffset(date);
  return JY_PHRASE_PRACTICE_PATTERNS.map((pattern, idx)=>{
    const topic=JY_PHRASE_PRACTICE_TOPICS[(day*5 + idx*7) % JY_PHRASE_PRACTICE_TOPICS.length];
    return `${idx + 1}. ${pattern(topic)}`;
  }).join('\n\n');
}
function phrasePracticeRecord(date){
  const state=readState();
  const key=String(date || activePlan().date);
  return state.phrasePractice && state.phrasePractice[key] ? state.phrasePractice[key] : null;
}
function phrasePracticeText(date){
  const record=phrasePracticeRecord(date);
  return record && typeof record.text === 'string' ? record.text : phrasePracticeDefaultText(date);
}
function savePhrasePracticeDraft(submitted=false){
  const textarea=byId('phrase-practice-editor');
  if(!textarea) return false;
  const date=String(textarea.dataset.phrasePracticeDate || activePlan().date);
  const text=String(textarea.value || '').trim();
  const state=readState();
  const now=new Date().toLocaleString('ko-KR');
  if(!state.phrasePractice || typeof state.phrasePractice !== 'object') state.phrasePractice={};
  state.phrasePractice[date]={text:text || phrasePracticeDefaultText(date), updatedAt:now};
  if(submitted){
    dayState(state,date).submissions.phrase_drill=true;
    state.phrasePractice[date].submittedAt=now;
  }
  writeState(state);
  const status=byId('phrase-practice-status');
  if(status) status.textContent = submitted ? '완료 저장 · '+now : '저장 '+now;
  return true;
}
function resetPhrasePracticeText(date){
  const state=readState();
  const key=String(date || activePlan().date);
  if(!state.phrasePractice || typeof state.phrasePractice !== 'object') state.phrasePractice={};
  state.phrasePractice[key]={text:phrasePracticeDefaultText(key), updatedAt:new Date().toLocaleString('ko-KR')};
  writeState(state);
}
function renderPhraseStructurePractice(){
  const plan=activePlan();
  const date=plan.date;
  const done=hasSubmission(date, 'phrase_drill');
  const text=phrasePracticeText(date);
  return `<section class="jy-card jy-phrase-practice-card">
    <div class="jy-book-top"><h2 class="jy-book-title">오늘의 문장 구조 연습</h2><span class="jy-page-counter">${esc(date)} · 30문장</span></div>
    <p class="jy-small">IELTS Reading 지문에 가까운 길이의 문장입니다. 정답 없이 직접 주어, 동사, 목적어, 보어, 수식어, 접속 구조를 표시해서 연습하세요.</p>
    <textarea class="jy-textarea jy-phrase-practice-paper" id="phrase-practice-editor" data-phrase-practice-date="${esc(date)}" spellcheck="false" autocomplete="off">${esc(text)}</textarea>
    <div class="jy-btns jy-phrase-practice-actions">
      <button class="jy-btn" type="button" id="phrase-practice-save">저장</button>
      <button class="jy-btn dark" type="button" id="phrase-practice-done">${done ? '오늘 완료됨' : '오늘 완료'}</button>
      <button class="jy-btn" type="button" id="phrase-practice-reset">기본문장 다시 불러오기</button>
    </div>
    <div class="jy-small" id="phrase-practice-status"></div>
  </section>`;
}

function phraseTrashHTML(){
  const trash=phraseTrashNotes(readState());
  if(!trash.length) return '';
  return `<details class="jy-grammar-trash-inline jy-phrase-trash-inline"><summary>휴지통 ${trash.length}</summary><div class="jy-grammar-trash-list">${trash.map(n=>`<div class="jy-grammar-trash-row"><span>${esc(n.date||'')} · ${esc(n.title || '구문 연습 노트')} · ${esc(n.deletedAt || '')}</span><button class="jy-btn jy-delete" type="button" data-phrase-restore="${esc(n.id)}">복구</button></div>`).join('')}</div></details>`;
}
function renderPhrasePracticeNote(){
  const state=readState();
  const notes=phraseActiveNotes(state);
  const current=phraseCurrentNote(state);
  const currentIndex=current ? Math.max(0, notes.findIndex(n=>String(n.id)===String(current.id))) : -1;
  const title=current?.title || '';
  const text=current?.text || '';
  const files=phraseFilesFor(current?.id || '');
  const counter=current ? `${currentIndex+1} / ${notes.length}` : (notes.length ? `새 페이지 · ${notes.length+1}` : '새 페이지');
  const noteId=current?.id || '';
  const writingOpen=phraseNoteEditorOpen();
  return `<section class="jy-card jy-phrase-editor-card jy-grammar-single-page">
    <div class="jy-book-top"><h2 class="jy-book-title">구문 연습 노트</h2><span class="jy-page-counter">${esc(counter)}</span></div>
    <div class="jy-grammar-editor-head"><span class="jy-mock-badge jy-phrase-badge">선택 기록</span><button class="jy-btn" type="button" id="toggle-phrase-editor">${writingOpen ? '작성창 닫기' : '작성창 열기'}</button></div>
    <input class="jy-input jy-phrase-title" id="phrase-note-title" value="${esc(title)}" placeholder="제목" autocomplete="off">
    <div id="phrase-writing-panel" class="${writingOpen ? '' : 'jy-hidden'}">
      ${notePageModeHTML('phrase')}
      ${phraseEditorPagesHTML(text, 'phrase', noteId, current?.html || '')}
    </div>
    <div class="jy-field jy-lecture-photo-field jy-phrase-file-field">
      <label class="jy-label">사진/PDF</label>
      <input class="jy-input" type="file" accept="image/*,.pdf,application/pdf" multiple id="phrase-file-input">
      <div id="phrase-file-gallery">${proofGalleryHTMLFromItems(files, phraseGalleryId(noteId), '첨부 없음')}</div>
    </div>
    <div class="jy-grammar-single-actions">
      <div class="jy-btns"><button class="jy-btn" type="button" data-phrase-prev>이전</button><button class="jy-btn" type="button" data-phrase-next>다음</button></div>
      <div class="jy-btns"><button class="jy-btn dark" type="button" id="phrase-note-save">저장</button><button class="jy-btn" type="button" id="phrase-note-new">노트 추가</button><button class="jy-btn" type="button" id="phrase-note-clear">글 삭제</button>${noteId?`<button class="jy-btn jy-delete" type="button" data-phrase-trash="${esc(noteId)}">삭제</button>`:''}</div>
    </div>
    <div class="jy-small" id="phrase-note-status"></div>
    ${phraseTrashHTML()}
  </section>
  ${renderPhraseStructurePractice()}`;
}

function vocabPosKey(item){
  const pos=String(item?.pos || '').trim().toLowerCase();
  if(/adj|형용사/.test(pos)) return 'adjective';
  if(/verb|동사/.test(pos)) return 'verb';
  if(/noun|명사/.test(pos)) return 'noun';
  if(/adv|부사/.test(pos)) return 'adverb';
  if(/phrase|표현|구/.test(pos)) return 'phrase';
  const word=String(item?.word || '').trim();
  if(/\s/.test(word) || /^be\s+/.test(word) || /^(come|access|even)\s+/.test(word)) return 'phrase';
  return 'other';
}
function vocabExampleSynonymHTML(item){
  const parts=[];
  if(item.example) parts.push(`<div>${esc(item.example)}</div>`);
  if(item.synonyms) parts.push(`<div class="jy-vocab-extra">동의어: ${esc(item.synonyms)}</div>`);
  if(item.antonyms) parts.push(`<div class="jy-vocab-extra">반의어: ${esc(item.antonyms)}</div>`);
  return parts.join('');
}
function vocabGroupedBookHTML(items, title){
  const groups=[
    {key:'noun', label:'명사와 명사구'},
    {key:'verb', label:'동사와 동사구'},
    {key:'adjective', label:'형용사'},
    {key:'adverb', label:'부사'},
    {key:'phrase', label:'표현'},
    {key:'other', label:'기타'}
  ];
  const clean=dedupeWords(items || []).filter(item=>String(item.word || '').trim());
  if(!clean.length) return `<section class="jy-card jy-vocab-book-card"><h2 class="jy-card-title">${esc(title || 'Vocabulary List')}</h2><div class="jy-note">표시할 단어가 없습니다.</div></section>`;
  return `<section class="jy-card jy-vocab-book-card"><h2 class="jy-card-title">${esc(title || 'IELTS Vocabulary List')}</h2><p class="jy-small">품사별로 묶어서 표시합니다.</p>${groups.map(group=>{
    const rows=clean.filter(item=>vocabPosKey(item)===group.key);
    if(!rows.length) return '';
    return `<div class="jy-vocab-book-group"><h3>${esc(group.label)}</h3><div class="jy-table-scroll"><table class="jy-table jy-vocab-book-table"><thead><tr><th>단어</th><th>뜻</th><th>예문과 IELTS 동의어</th></tr></thead><tbody>${rows.map(item=>`<tr><td><strong>${esc(vocabDisplayWord(item.word))}</strong></td><td>${esc(item.meaning || '')}</td><td>${vocabExampleSynonymHTML(item)}</td></tr>`).join('')}</tbody></table></div></div>`;
  }).join('')}</section>`;
}


const JY_TASK1_EXPRESSION_CATEGORY_LABELS = {
  "all": "전체",
  "rise": "상승 표현",
  "recovery": "회복 표현",
  "fall": "하락 표현",
  "stability": "변동·유지 표현",
  "modifier": "수치 수식어",
  "ranking": "순위·최고치·최저치",
  "overtaking": "역전·추월",
  "gap": "격차·동률·접근",
  "comparison": "비교·연결·인과",
  "impact": "영향·정도",
  "analysis": "수치 의미 부여",
  "pattern": "핵심 문장 패턴"
};
const JY_TASK1_EXPRESSION_CATEGORY_KEY = 'jy_task1_expression_category_v189';
const JY_VOCAB_PAGE_TAB_KEY = 'jy_vocab_page_tab_v187';
const JY_TASK1_EXPRESSION_SOURCE = 'IELTS_Task1_expressions_compact_vertical_highlighted.docx';
const JY_PART2_TEST_PROGRESS_KEY = 'jy_part2_priority_progress_v197';
const JY_PART2_NOUN_PROGRESS_KEY = 'jy_part2_noun_progress_v197';
const JY_PART2_TEST_BATCH_SIZE = 50;
const JY_PART2_PRIORITY_SOURCE = '필수 핵심 동사.pdf';
const JY_PART2_NOUN_SOURCE = '필수 핵심 명사.pdf';
const JY_PART2_PRIORITY_ITEMS = [
  {
    "id": "core-verb-001",
    "group": "coreVerb",
    "label": "동사",
    "expression": "improve",
    "meaning": "개선하다, 향상시키다",
    "keyword": "productivity",
    "keywordKo": "생산성",
    "promptKo": "기술은 / 생산성을 향상시킨다.",
    "answer": "Technology improves productivity.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-002",
    "group": "coreVerb",
    "label": "동사",
    "expression": "enhance",
    "meaning": "높이다, 향상시키다",
    "keyword": "learning opportunities",
    "keywordKo": "학습 기회",
    "promptKo": "온라인 과정은 / 학습 기회를 높인다.",
    "answer": "Online courses enhance learning opportunities.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-003",
    "group": "coreVerb",
    "label": "동사",
    "expression": "increase",
    "meaning": "증가시키다",
    "keyword": "employment prospects",
    "keywordKo": "취업 전망",
    "promptKo": "교육은 / 취업 전망을 증가시킨다.",
    "answer": "Education increases employment prospects.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-004",
    "group": "coreVerb",
    "label": "동사",
    "expression": "reduce",
    "meaning": "줄이다, 감소시키다",
    "keyword": "environmental pollution",
    "keywordKo": "환경 오염",
    "promptKo": "대중교통은 / 오염을 줄인다.",
    "answer": "Public transport reduces pollution.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-005",
    "group": "coreVerb",
    "label": "동사",
    "expression": "decrease",
    "meaning": "감소시키다",
    "keyword": "labor costs",
    "keywordKo": "인건비",
    "promptKo": "자동화는 / 인건비를 감소시킨다.",
    "answer": "Automation decreases labor costs.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-006",
    "group": "coreVerb",
    "label": "동사",
    "expression": "affect",
    "meaning": "영향을 미치다",
    "keyword": "human behavior",
    "keywordKo": "인간 행동",
    "promptKo": "소셜 미디어는 / 사람들의 행동에 영향을 미친다.",
    "answer": "Social media affects people's behavior.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-007",
    "group": "coreVerb",
    "label": "동사",
    "expression": "influence",
    "meaning": "영향을 주다",
    "keyword": "consumer choices",
    "keywordKo": "소비자 선택",
    "promptKo": "광고는 / 소비자의 선택에 영향을 미친다.",
    "answer": "Advertising influences consumer choices.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-008",
    "group": "coreVerb",
    "label": "동사",
    "expression": "encourage",
    "meaning": "장려하다, 부추기다",
    "keyword": "creativity and innovation",
    "keywordKo": "창의성과 혁신",
    "promptKo": "학교는 / 창의성을 장려한다.",
    "answer": "Schools encourage creativity.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-009",
    "group": "coreVerb",
    "label": "동사",
    "expression": "promote",
    "meaning": "촉진하다, 홍보하다",
    "keyword": "economic growth",
    "keywordKo": "경제 성장",
    "promptKo": "정부는 / 경제 성장을 촉진한다.",
    "answer": "Governments promote economic growth.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-010",
    "group": "coreVerb",
    "label": "동사",
    "expression": "support",
    "meaning": "지지하다, 지원하다",
    "keyword": "child development",
    "keywordKo": "아동 발달",
    "promptKo": "부모는 / 자녀를 지원해야 한다.",
    "answer": "Parents should support their children.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-011",
    "group": "coreVerb",
    "label": "동사",
    "expression": "provide",
    "meaning": "제공하다",
    "keyword": "valuable knowledge",
    "keywordKo": "가치 있는 지식",
    "promptKo": "대학은 / 가치 있는 지식을 제공한다.",
    "answer": "Universities provide valuable knowledge.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-012",
    "group": "coreVerb",
    "label": "동사",
    "expression": "create",
    "meaning": "창조하다, 만들다",
    "keyword": "job opportunities",
    "keywordKo": "일자리 기회",
    "promptKo": "기술은 / 새로운 일자리를 창출한다.",
    "answer": "Technology creates new jobs.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-013",
    "group": "coreVerb",
    "label": "동사",
    "expression": "generate",
    "meaning": "발생시키다, 창출하다",
    "keyword": "national revenue",
    "keywordKo": "국가 수익",
    "promptKo": "관광은 / 수익을 창출한다.",
    "answer": "Tourism generates revenue.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-014",
    "group": "coreVerb",
    "label": "동사",
    "expression": "produce",
    "meaning": "생산하다",
    "keyword": "consumer goods",
    "keywordKo": "소비재",
    "promptKo": "공장들은 / 제품을 효율적으로 생산한다.",
    "answer": "Factories produce goods efficiently.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-015",
    "group": "coreVerb",
    "label": "동사",
    "expression": "develop",
    "meaning": "발전시키다, 개발하다",
    "keyword": "practical skills",
    "keywordKo": "실무 능력",
    "promptKo": "학생들은 / 실용적인 기술을 발전시킨다.",
    "answer": "Students develop practical skills.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-016",
    "group": "coreVerb",
    "label": "동사",
    "expression": "establish",
    "meaning": "설립하다, 확립하다",
    "keyword": "strict regulations",
    "keywordKo": "엄격한 규제",
    "promptKo": "정부는 / 규정을 수립한다.",
    "answer": "Governments establish regulations.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-017",
    "group": "coreVerb",
    "label": "동사",
    "expression": "maintain",
    "meaning": "유지하다",
    "keyword": "social stability",
    "keywordKo": "사회적 안정",
    "promptKo": "국가들은 / 안정성을 유지해야 한다.",
    "answer": "Countries must maintain stability.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-018",
    "group": "coreVerb",
    "label": "동사",
    "expression": "achieve",
    "meaning": "성취하다, 달성하다",
    "keyword": "personal success",
    "keywordKo": "개인의 성공",
    "promptKo": "열심히 노력하는 것은 / 사람들이 성공을 달성하도록 돕는다.",
    "answer": "Hard work helps people achieve success.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-019",
    "group": "coreVerb",
    "label": "동사",
    "expression": "obtain",
    "meaning": "얻다, 획득하다",
    "keyword": "hands-on experience",
    "keywordKo": "실무 경험",
    "promptKo": "졸업생들은 / 가치 있는 경험을 얻는다.",
    "answer": "Graduates obtain valuable experience.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-020",
    "group": "coreVerb",
    "label": "동사",
    "expression": "acquire",
    "meaning": "습득하다",
    "keyword": "technical skills",
    "keywordKo": "기술적 기술",
    "promptKo": "직원들은 / 새로운 기술을 습득한다.",
    "answer": "Employees acquire new skills.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-021",
    "group": "coreVerb",
    "label": "동사",
    "expression": "gain",
    "meaning": "얻다, 이익을 보다",
    "keyword": "self-confidence",
    "keywordKo": "자신감",
    "promptKo": "학생들은 / 연습을 통해 자신감을 얻는다.",
    "answer": "Students gain confidence through practice.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-022",
    "group": "coreVerb",
    "label": "동사",
    "expression": "contribute to",
    "meaning": "~에 기여하다",
    "keyword": "social progress",
    "keywordKo": "사회적 진보",
    "promptKo": "교육은 / 사회적 발전에 기여한다.",
    "answer": "Education contributes to social progress.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-023",
    "group": "coreVerb",
    "label": "동사",
    "expression": "lead to",
    "meaning": "~로 이어지다",
    "keyword": "inevitable failure",
    "keywordKo": "불가피한 실패",
    "promptKo": "잘못된 결정은 / 실패로 이어진다.",
    "answer": "Poor decisions lead to failure.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-024",
    "group": "coreVerb",
    "label": "동사",
    "expression": "result in",
    "meaning": "~한 결과를 낳다",
    "keyword": "unnecessary waste",
    "keywordKo": "불필요한 낭비",
    "promptKo": "과소비는 / 낭비를 초래한다.",
    "answer": "Overconsumption results in waste.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-025",
    "group": "coreVerb",
    "label": "동사",
    "expression": "prevent",
    "meaning": "예방하다, 막다",
    "keyword": "infectious disease",
    "keywordKo": "전염병",
    "promptKo": "백신 접종은 / 질병을 예방한다.",
    "answer": "Vaccination prevents disease.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-026",
    "group": "coreVerb",
    "label": "동사",
    "expression": "avoid",
    "meaning": "피하다",
    "keyword": "unhealthy habits",
    "keywordKo": "신체에 해로운 습관",
    "promptKo": "사람들은 / 건강하지 못한 습관을 피해야 한다.",
    "answer": "People should avoid unhealthy habits.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-027",
    "group": "coreVerb",
    "label": "동사",
    "expression": "solve",
    "meaning": "해결하다",
    "keyword": "complex problems",
    "keywordKo": "복잡한 문제들",
    "promptKo": "혁신은 / 복잡한 문제를 해결한다.",
    "answer": "Innovation solves complex problems.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-028",
    "group": "coreVerb",
    "label": "동사",
    "expression": "address",
    "meaning": "(문제를) 다루다, 고심하다",
    "keyword": "global poverty",
    "keywordKo": "세계적 빈곤",
    "promptKo": "정부는 / 빈곤 문제를 다루어야 한다.",
    "answer": "Governments should address poverty.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-029",
    "group": "coreVerb",
    "label": "동사",
    "expression": "tackle",
    "meaning": "(문제를) 다루다, 씨름하다",
    "keyword": "unemployment rate",
    "keywordKo": "실업률",
    "promptKo": "새로운 정책들은 / 실업 문제를 해결한다.",
    "answer": "New policies tackle unemployment.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-030",
    "group": "coreVerb",
    "label": "동사",
    "expression": "overcome",
    "meaning": "극복하다",
    "keyword": "financial challenges",
    "keywordKo": "재정적 고충",
    "promptKo": "사람들은 / 어려움을 극복할 수 있다.",
    "answer": "People can overcome challenges.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-031",
    "group": "coreVerb",
    "label": "동사",
    "expression": "facilitate",
    "meaning": "용이하게 하다, 촉진하다",
    "keyword": "global communication",
    "keywordKo": "글로벌 소통",
    "promptKo": "기술은 / 의사소통을 용이하게 한다.",
    "answer": "Technology facilitates communication.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-032",
    "group": "coreVerb",
    "label": "동사",
    "expression": "enable",
    "meaning": "가능하게 하다",
    "keyword": "remote work",
    "keywordKo": "원격 근무",
    "promptKo": "인터넷은 / 원격 근무를 가능하게 한다.",
    "answer": "The Internet enables remote work.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-033",
    "group": "coreVerb",
    "label": "동사",
    "expression": "allow",
    "meaning": "허용하다, 가능하게 하다",
    "keyword": "instant access",
    "keywordKo": "즉각적인 접근",
    "promptKo": "스마트폰은 / 정보에 대한 즉각적인 접근을 허용한다.",
    "answer": "Smartphones allow instant access to information.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-034",
    "group": "coreVerb",
    "label": "동사",
    "expression": "assist",
    "meaning": "돕다, 지원하다",
    "keyword": "daily tasks",
    "keywordKo": "일상 업무",
    "promptKo": "기술은 / 근로자들이 많은 업무를 수행하도록 돕는다.",
    "answer": "Technology assists workers in many tasks.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-035",
    "group": "coreVerb",
    "label": "동사",
    "expression": "help",
    "meaning": "돕다",
    "keyword": "physical health",
    "keywordKo": "신체 건강",
    "promptKo": "운동은 / 좋은 건강을 유지하는 데 도움을 준다.",
    "answer": "Exercise helps maintain good health.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-036",
    "group": "coreVerb",
    "label": "동사",
    "expression": "strengthen",
    "meaning": "강화하다",
    "keyword": "critical thinking",
    "keywordKo": "비판적 사고",
    "promptKo": "교육은 / 비판적 사고를 강화한다.",
    "answer": "Education strengthens critical thinking.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-037",
    "group": "coreVerb",
    "label": "동사",
    "expression": "weaken",
    "meaning": "약화시키다",
    "keyword": "natural ecosystems",
    "keywordKo": "자연 생태계",
    "promptKo": "오염은 / 생태계를 약화시킨다.",
    "answer": "Pollution weakens ecosystems.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-038",
    "group": "coreVerb",
    "label": "동사",
    "expression": "expand",
    "meaning": "확장하다",
    "keyword": "global markets",
    "keywordKo": "글로벌 시장",
    "promptKo": "기업들은 / 새로운 시장으로 확장한다.",
    "answer": "Businesses expand into new markets.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-039",
    "group": "coreVerb",
    "label": "동사",
    "expression": "extend",
    "meaning": "연장하다, 확대하다",
    "keyword": "customer services",
    "keywordKo": "고객 서비스",
    "promptKo": "기업들은 / 서비스를 전 세계적으로 확장한다.",
    "answer": "Companies extend their services globally.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-040",
    "group": "coreVerb",
    "label": "동사",
    "expression": "boost",
    "meaning": "신장시키다, 북돋우다",
    "keyword": "local economies",
    "keywordKo": "지역 경제",
    "promptKo": "관광은 / 지역 경제를 활성화한다.",
    "answer": "Tourism boosts local economies.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-041",
    "group": "coreVerb",
    "label": "동사",
    "expression": "stimulate",
    "meaning": "자극하다, 활성화하다",
    "keyword": "economic growth",
    "keywordKo": "경제 성장",
    "promptKo": "투자라는 것은 / 성장을 자극한다.",
    "answer": "Investment stimulates growth.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-042",
    "group": "coreVerb",
    "label": "동사",
    "expression": "motivate",
    "meaning": "동기를 부여하다",
    "keyword": "workforce/employees",
    "keywordKo": "노동 인력/직원",
    "promptKo": "보상은 / 직원들에게 동기를 부여한다.",
    "answer": "Rewards motivate employees.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-043",
    "group": "coreVerb",
    "label": "동사",
    "expression": "inspire",
    "meaning": "영감을 주다",
    "keyword": "future leaders",
    "keywordKo": "미래의 리더들",
    "promptKo": "성공적인 리더들은 / 다른 사람들에게 영감을 준다.",
    "answer": "Successful leaders inspire others.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-044",
    "group": "coreVerb",
    "label": "동사",
    "expression": "educate",
    "meaning": "교육하다",
    "keyword": "future generations",
    "keywordKo": "미래 세대",
    "promptKo": "학교는 / 미래 세대를 교육한다.",
    "answer": "Schools educate future generations.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-045",
    "group": "coreVerb",
    "label": "동사",
    "expression": "train",
    "meaning": "훈련하다",
    "keyword": "skilled workers",
    "keywordKo": "숙련된 근로자",
    "promptKo": "기업들은 / 직원들을 정기적으로 교육한다.",
    "answer": "Companies train their employees regularly.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-046",
    "group": "coreVerb",
    "label": "동사",
    "expression": "inform",
    "meaning": "정보를 제공하다, 알리다",
    "keyword": "general public",
    "keywordKo": "일반 대중",
    "promptKo": "뉴스 매체들은 / 대중에게 정보를 알린다.",
    "answer": "News outlets inform the public.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-047",
    "group": "coreVerb",
    "label": "동사",
    "expression": "raise",
    "meaning": "(의식을) 높이다, 올리다",
    "keyword": "public awareness",
    "keywordKo": "대중적 인식",
    "promptKo": "캠페인은 / 인식을 높인다.",
    "answer": "Campaigns raise awareness.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-048",
    "group": "coreVerb",
    "label": "동사",
    "expression": "lower",
    "meaning": "낮추다",
    "keyword": "production costs",
    "keywordKo": "생산 비용",
    "promptKo": "기술은 / 생산 비용을 낮춘다.",
    "answer": "Technology lowers production costs.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-049",
    "group": "coreVerb",
    "label": "동사",
    "expression": "minimize",
    "meaning": "최소화하다",
    "keyword": "potential risks",
    "keywordKo": "잠재적 위험",
    "promptKo": "좋은 계획은 / 위험을 최소화한다.",
    "answer": "Good planning minimizes risks.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-050",
    "group": "coreVerb",
    "label": "동사",
    "expression": "maximize",
    "meaning": "최대화하다",
    "keyword": "operational efficiency",
    "keywordKo": "운영 효율성",
    "promptKo": "기업들은 / 효율성을 극대화한다.",
    "answer": "Businesses maximize efficiency.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-051",
    "group": "coreVerb",
    "label": "동사",
    "expression": "consume",
    "meaning": "소비하다",
    "keyword": "fossil fuels / energy",
    "keywordKo": "화석 연료 / 에너지",
    "promptKo": "현대의 라이프스타일은 / 더 많은 에너지를 소비한다.",
    "answer": "Modern lifestyles consume more energy.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-052",
    "group": "coreVerb",
    "label": "동사",
    "expression": "save",
    "meaning": "절약하다, 구하다",
    "keyword": "natural resources",
    "keywordKo": "자연공학적 자원",
    "promptKo": "재생 에너지는 / 자원을 절약한다.",
    "answer": "Renewable energy saves resources.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-053",
    "group": "coreVerb",
    "label": "동사",
    "expression": "invest in",
    "meaning": "~에 투자하다",
    "keyword": "public infrastructure",
    "keywordKo": "공공 인프라",
    "promptKo": "정부는 / 인프라에 투자한다.",
    "answer": "Governments invest in infrastructure.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-054",
    "group": "coreVerb",
    "label": "동사",
    "expression": "fund",
    "meaning": "자금을 대다",
    "keyword": "scientific research",
    "keywordKo": "과학 연구",
    "promptKo": "당국은 / 연구 프로젝트에 자금을 지원한다.",
    "answer": "Authorities fund research projects.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-055",
    "group": "coreVerb",
    "label": "동사",
    "expression": "finance",
    "meaning": "자금을 조달하다",
    "keyword": "business activities",
    "keywordKo": "기업 활동",
    "promptKo": "은행은 / 기업 활동에 자금을 조달한다.",
    "answer": "Banks finance business activities.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-056",
    "group": "coreVerb",
    "label": "동사",
    "expression": "manage",
    "meaning": "관리하다",
    "keyword": "limited resources",
    "keywordKo": "한정된 자원",
    "promptKo": "관리자들은 / 자원을 효과적으로 관리한다.",
    "answer": "Managers manage resources effectively.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-057",
    "group": "coreVerb",
    "label": "동사",
    "expression": "organize",
    "meaning": "조직하다, 준비하다",
    "keyword": "educational events",
    "keywordKo": "교육 행사",
    "promptKo": "학교는 / 교육 행사를 조직한다.",
    "answer": "Schools organize educational events.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-058",
    "group": "coreVerb",
    "label": "동사",
    "expression": "regulate",
    "meaning": "규제하다",
    "keyword": "financial markets",
    "keywordKo": "금융 시장",
    "promptKo": "정부는 / 금융 시장을 규제한다.",
    "answer": "Governments regulate financial markets.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-059",
    "group": "coreVerb",
    "label": "동사",
    "expression": "monitor",
    "meaning": "감시하다, 추적하다",
    "keyword": "climate change",
    "keywordKo": "기후 변화",
    "promptKo": "과학자들은 / 기후 변화를 모니터링한다.",
    "answer": "Scientists monitor climate change.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-060",
    "group": "coreVerb",
    "label": "동사",
    "expression": "evaluate",
    "meaning": "평가하다",
    "keyword": "project outcomes",
    "keywordKo": "프로젝트 결과",
    "promptKo": "연구원들은 / 결과를 신중하게 평가한다.",
    "answer": "Researchers evaluate outcomes carefully.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-061",
    "group": "coreVerb",
    "label": "동사",
    "expression": "assess",
    "meaning": "평가하다, 산정하다",
    "keyword": "potential risks",
    "keywordKo": "잠재적 위험",
    "promptKo": "전문가들은 / 잠재적 위험을 평가한다.",
    "answer": "Experts assess potential risks.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-062",
    "group": "coreVerb",
    "label": "동사",
    "expression": "analyze",
    "meaning": "분석하다",
    "keyword": "statistical data",
    "keywordKo": "통계 데이터",
    "promptKo": "학생들은 / 정보를 비판적으로 분석한다.",
    "answer": "Students analyze information critically.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-063",
    "group": "coreVerb",
    "label": "동사",
    "expression": "examine",
    "meaning": "조사하다, 검토하다",
    "keyword": "various factors",
    "keywordKo": "다양한 요인들",
    "promptKo": "연구원들은 / 다양한 요인들을 조사한다.",
    "answer": "Researchers examine various factors.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-064",
    "group": "coreVerb",
    "label": "동사",
    "expression": "identify",
    "meaning": "확인하다, 식별하다",
    "keyword": "key issues",
    "keywordKo": "핵심 문제",
    "promptKo": "과학자들은 / 주요 문제들을 찾아낸다.",
    "answer": "Scientists identify key issues.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-065",
    "group": "coreVerb",
    "label": "동사",
    "expression": "recognize",
    "meaning": "인식하다, 인정하다",
    "keyword": "the importance of education",
    "keywordKo": "교육의 중요성",
    "promptKo": "사람들은 / 교육의 중요성을 인식한다.",
    "answer": "People recognize the importance of education.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-066",
    "group": "coreVerb",
    "label": "동사",
    "expression": "understand",
    "meaning": "이해하다",
    "keyword": "complex concepts",
    "keywordKo": "복잡한 개념들",
    "promptKo": "학생들은 / 복잡한 개념을 이해한다.",
    "answer": "Students understand complex concepts.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-067",
    "group": "coreVerb",
    "label": "동사",
    "expression": "consider",
    "meaning": "고려하다",
    "keyword": "public opinion",
    "keywordKo": "대중 여론",
    "promptKo": "정부는 / 여론을 고려한다.",
    "answer": "Governments consider public opinion.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-068",
    "group": "coreVerb",
    "label": "동사",
    "expression": "prioritize",
    "meaning": "우선순위를 매기다",
    "keyword": "public healthcare",
    "keywordKo": "공공 의료 복지",
    "promptKo": "당국은 / 의료 보건을 우선시한다.",
    "answer": "Authorities prioritize healthcare.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-069",
    "group": "coreVerb",
    "label": "동사",
    "expression": "emphasize",
    "meaning": "강조하다",
    "keyword": "practical skills",
    "keywordKo": "실무 능력",
    "promptKo": "교사들은 / 실용적인 기술을 강조한다.",
    "answer": "Teachers emphasize practical skills.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-070",
    "group": "coreVerb",
    "label": "동사",
    "expression": "highlight",
    "meaning": "강조하다, 돋보이게 하다",
    "keyword": "major concerns",
    "keywordKo": "주요 우려 사항",
    "promptKo": "그 보고서는 / 주요 우려 사항들을 강조한다.",
    "answer": "The report highlights major concerns.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-071",
    "group": "coreVerb",
    "label": "동사",
    "expression": "recommend",
    "meaning": "권고하다, 추천하다",
    "keyword": "regular exercise",
    "keywordKo": "규칙적인 운동",
    "promptKo": "전문가들은 / 규칙적인 운동을 권장한다.",
    "answer": "Experts recommend regular exercise.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-072",
    "group": "coreVerb",
    "label": "동사",
    "expression": "suggest",
    "meaning": "제안하다, 시사하다",
    "keyword": "alternative solutions",
    "keywordKo": "대안책",
    "promptKo": "연구원들은 / 대안적인 해결책을 제시한다.",
    "answer": "Researchers suggest alternative solutions.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-073",
    "group": "coreVerb",
    "label": "동사",
    "expression": "propose",
    "meaning": "제안하다",
    "keyword": "new policies",
    "keywordKo": "새로운 정책",
    "promptKo": "정치인들은 / 새로운 정책을 제안한다.",
    "answer": "Politicians propose new policies.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-074",
    "group": "coreVerb",
    "label": "동사",
    "expression": "implement",
    "meaning": "이행하다, 실행하다",
    "keyword": "welfare reforms",
    "keywordKo": "복지 개혁",
    "promptKo": "정부는 / 개혁을 시행한다.",
    "answer": "Governments implement reforms.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-075",
    "group": "coreVerb",
    "label": "동사",
    "expression": "adopt",
    "meaning": "채택하다, 도입하다",
    "keyword": "innovative technologies",
    "keywordKo": "혁신적 기술",
    "promptKo": "기업들은 / 혁신적인 기술을 채택한다.",
    "answer": "Companies adopt innovative technologies.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-076",
    "group": "coreVerb",
    "label": "동사",
    "expression": "introduce",
    "meaning": "도입하다, 소개하다",
    "keyword": "new curricula/programs",
    "keywordKo": "새로운 교육과정/프로그 램",
    "promptKo": "학교는 / 새로운 프로그램을 도입한다.",
    "answer": "Schools introduce new programs.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-077",
    "group": "coreVerb",
    "label": "동사",
    "expression": "replace",
    "meaning": "대체하다",
    "keyword": "outdated systems",
    "keywordKo": "시대에 뒤떨어진 시스템",
    "promptKo": "기술은 / 구식 시스템을 대체한다.",
    "answer": "Technology replaces outdated systems.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-078",
    "group": "coreVerb",
    "label": "동사",
    "expression": "transform",
    "meaning": "변형시키다, 완전히 바꾸다",
    "keyword": "traditional industries",
    "keywordKo": "전통 산업",
    "promptKo": "혁신은 / 산업을 변모시킨다.",
    "answer": "Innovation transforms industries.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-079",
    "group": "coreVerb",
    "label": "동사",
    "expression": "preserve",
    "meaning": "보존하다",
    "keyword": "cultural heritage",
    "keywordKo": "문화유산",
    "promptKo": "정부는 / 문화유산을 보존한다.",
    "answer": "Governments preserve cultural heritage.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-080",
    "group": "coreVerb",
    "label": "동사",
    "expression": "protect",
    "meaning": "보호하다",
    "keyword": "consumer rights",
    "keywordKo": "소비자 권리",
    "promptKo": "법은 / 소비자를 보호한다.",
    "answer": "Laws protect consumers.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-081",
    "group": "coreVerb",
    "label": "동사",
    "expression": "conserve",
    "meaning": "보존하다, 아껴 쓰다",
    "keyword": "natural resources",
    "keywordKo": "자연 자원",
    "promptKo": "시민들은 / 자연 자원을 보존한다.",
    "answer": "Citizens conserve natural resources.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-082",
    "group": "coreVerb",
    "label": "동사",
    "expression": "destroy",
    "meaning": "파괴하다",
    "keyword": "natural ecosystems",
    "keywordKo": "자연 생태계",
    "promptKo": "오염은 / 생태계를 파괴한다.",
    "answer": "Pollution destroys ecosystems.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-083",
    "group": "coreVerb",
    "label": "동사",
    "expression": "damage",
    "meaning": "손상을 입히다",
    "keyword": "public infrastructure",
    "keywordKo": "공공 인프라",
    "promptKo": "자연재해는 / 인프라에 피해를 준다.",
    "answer": "Natural disasters damage infrastructure.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-084",
    "group": "coreVerb",
    "label": "동사",
    "expression": "pollute",
    "meaning": "오염시키다",
    "keyword": "marine environment",
    "keywordKo": "해양 환경",
    "promptKo": "공장들은 / 환경을 오염시킨다.",
    "answer": "Factories pollute the environment.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-085",
    "group": "coreVerb",
    "label": "동사",
    "expression": "participate in",
    "meaning": "~에 참여하다",
    "keyword": "democratic elections",
    "keywordKo": "민주적 선거",
    "promptKo": "시민들은 / 선거에 참여한다.",
    "answer": "Citizens participate in elections.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-086",
    "group": "coreVerb",
    "label": "동사",
    "expression": "cooperate with",
    "meaning": "~와 협력하다",
    "keyword": "international community",
    "keywordKo": "국제 사회",
    "promptKo": "국가들은 / 서로 협력한다.",
    "answer": "Countries cooperate with one another.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-087",
    "group": "coreVerb",
    "label": "동사",
    "expression": "collaborate with",
    "meaning": "~와 공동으로 작업하다",
    "keyword": "international researchers",
    "keywordKo": "국제 연구진",
    "promptKo": "연구원들은 / 국제적으로 협력한다.",
    "answer": "Researchers collaborate internationally.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-088",
    "group": "coreVerb",
    "label": "동사",
    "expression": "communicate",
    "meaning": "소통하다",
    "keyword": "effectively",
    "keywordKo": "효과적으로",
    "promptKo": "직원들은 / 효과적으로 의사소통한다.",
    "answer": "Employees communicate effectively.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-089",
    "group": "coreVerb",
    "label": "동사",
    "expression": "interact with",
    "meaning": "~와 상호작용하다",
    "keyword": "peers online",
    "keywordKo": "온라인 또래 집단",
    "promptKo": "학생들은 / 온라인에서 또래들과 상호작용한다.",
    "answer": "Students interact with peers online.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-090",
    "group": "coreVerb",
    "label": "동사",
    "expression": "connect",
    "meaning": "연결하다",
    "keyword": "people globally",
    "keywordKo": "전 세계 사람들",
    "promptKo": "기술은 / 사람들을 전 세계적으로 연결한다.",
    "answer": "Technology connects people globally.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-091",
    "group": "coreVerb",
    "label": "동사",
    "expression": "compare",
    "meaning": "비교하다",
    "keyword": "different methods",
    "keywordKo": "서로 다른 방식들",
    "promptKo": "연구원들은 / 서로 다른 방법들을 비교한다.",
    "answer": "Researchers compare different methods.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-092",
    "group": "coreVerb",
    "label": "동사",
    "expression": "compete",
    "meaning": "경쟁하다",
    "keyword": "global markets",
    "keywordKo": "글로벌 시장",
    "promptKo": "기업들은 / 글로벌 시장에서 경쟁한다.",
    "answer": "Companies compete in global markets.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-093",
    "group": "coreVerb",
    "label": "동사",
    "expression": "balance",
    "meaning": "균형을 잡다",
    "keyword": "work-life balance",
    "keywordKo": "일과 삶의 균형",
    "promptKo": "사람들은 / 일과 가정생활의 균형을 맞춘다.",
    "answer": "People balance work and family life.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-094",
    "group": "coreVerb",
    "label": "동사",
    "expression": "adapt to",
    "meaning": "~에 적응하다",
    "keyword": "technological changes",
    "keywordKo": "기술적 변화",
    "promptKo": "근로자들은 / 기술적 변화에 적응한다.",
    "answer": "Workers adapt to technological changes.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-095",
    "group": "coreVerb",
    "label": "동사",
    "expression": "respond to",
    "meaning": "~에 대응하다, 반응하다",
    "keyword": "unexpected crises",
    "keywordKo": "예기치 못한 위기",
    "promptKo": "정부는 / 위기에 대응한다.",
    "answer": "Governments respond to crises.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-096",
    "group": "coreVerb",
    "label": "동사",
    "expression": "rely on",
    "meaning": "~에 의존하다",
    "keyword": "modern technology",
    "keywordKo": "현대 기술",
    "promptKo": "많은 산업이 / 기술에 의존한다.",
    "answer": "Many industries rely on technology.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-097",
    "group": "coreVerb",
    "label": "동사",
    "expression": "focus on",
    "meaning": "~에 집중하다",
    "keyword": "academic achievement",
    "keywordKo": "학업 성취",
    "promptKo": "학교는 / 학업 성취에 초점을 맞춘다.",
    "answer": "Schools focus on academic achievement.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-098",
    "group": "coreVerb",
    "label": "동사",
    "expression": "improve upon",
    "meaning": "~을 개선하다, 나아지게 하다",
    "keyword": "existing products",
    "keywordKo": "기존 제품",
    "promptKo": "기업들은 / 기존 제품을 개선한다.",
    "answer": "Companies improve upon existing products.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-099",
    "group": "coreVerb",
    "label": "동사",
    "expression": "shape",
    "meaning": "형성하다",
    "keyword": "future generations",
    "keywordKo": "미래 세대",
    "promptKo": "교육은 / 미래 세대를 형성한다.",
    "answer": "Education shapes future generations.",
    "answerType": "sentence"
  },
  {
    "id": "core-verb-100",
    "group": "coreVerb",
    "label": "동사",
    "expression": "foster",
    "meaning": "육성하다, 발전시키다",
    "keyword": "creativity and innovation",
    "keywordKo": "창의성과 혁신",
    "promptKo": "학교는 / 창의성과 혁신을 육성한다.",
    "answer": "Schools foster creativity and innovation.",
    "answerType": "sentence"
  },
  {
    "id": "writing-verb-001",
    "group": "writingVerb",
    "label": "동사 구문",
    "expression": "offer a significant advantage",
    "meaning": "이 트렌드는 효율성 측면에서 상당한 이점을 제공한다.",
    "keyword": "in terms of efficiency",
    "keywordKo": "효율성 측면에서",
    "promptKo": "이 트렌드는 효율성 측면에서 상당한 이점을 제공한다.",
    "answer": "This trend offers a significant advantage in terms of efficiency.",
    "answerType": "sentence"
  },
  {
    "id": "writing-verb-002",
    "group": "writingVerb",
    "label": "동사 구문",
    "expression": "pose a potential threat to",
    "meaning": "이 현상은 데이터 프라이버시에 잠재적인 위협을 가한다.",
    "keyword": "cybersecurity / privacy",
    "keywordKo": "사이버 보안 / 사생활",
    "promptKo": "이 현상은 데이터 프라이버시에 잠재적인 위협을 가한다.",
    "answer": "This phenomenon poses a potential threat to data privacy.",
    "answerType": "sentence"
  },
  {
    "id": "writing-verb-003",
    "group": "writingVerb",
    "label": "동사 구문",
    "expression": "outweigh its demerits",
    "meaning": "이 접근법의 장점은 단점을 훨씬 능가한다.",
    "keyword": "the merits of this approach",
    "keywordKo": "이 접근법의 장점",
    "promptKo": "이 접근법의 장점은 단점을 훨씬 능가한다.",
    "answer": "The merits of this approach far outweigh its demerits.",
    "answerType": "sentence"
  },
  {
    "id": "writing-verb-004",
    "group": "writingVerb",
    "label": "동사 구문",
    "expression": "bring long-term benefits",
    "meaning": "이것이 장기적인 이익을 가져온다는 것은 널리 인정받고 있다.",
    "keyword": "to the local community",
    "keywordKo": "지역 사회에",
    "promptKo": "이것이 장기적인 이익을 가져온다는 것은 널리 인정받고 있다.",
    "answer": "It is widely acknowledged that this brings long-term benefits.",
    "answerType": "sentence"
  },
  {
    "id": "writing-verb-005",
    "group": "writingVerb",
    "label": "동사 구문",
    "expression": "maximize positive outcomes",
    "meaning": "적절한 가이드라인은 사회를 위한 긍정적인 결과를 최대화할 수 있다.",
    "keyword": "for future generations",
    "keywordKo": "미래 세대를 위해",
    "promptKo": "적절한 가이드라인은 사회를 위한 긍정적인 결과를 최대화할 수 있다.",
    "answer": "Proper guidelines can maximize positive outcomes for society.",
    "answerType": "sentence"
  },
  {
    "id": "writing-verb-006",
    "group": "writingVerb",
    "label": "동사 구문",
    "expression": "stem primarily from",
    "meaning": "이 문제는 주로 대중적 인식의 부재에서 기인한다.",
    "keyword": "lack of education",
    "keywordKo": "교육의 부재",
    "promptKo": "이 문제는 주로 대중적 인식의 부재에서 기인한다.",
    "answer": "This problem stems primarily from a lack of public awareness.",
    "answerType": "sentence"
  },
  {
    "id": "writing-verb-007",
    "group": "writingVerb",
    "label": "동사 구문",
    "expression": "take immediate action",
    "meaning": "당국은 이 문제를 다루기 위해 즉각적인 조치를 취해야 한다.",
    "keyword": "to resolve the conflict",
    "keywordKo": "갈등을 해결하기 위해",
    "promptKo": "당국은 이 문제를 다루기 위해 즉각적인 조치를 취해야 한다.",
    "answer": "Authorities must take immediate action to address this issue.",
    "answerType": "sentence"
  },
  {
    "id": "writing-verb-008",
    "group": "writingVerb",
    "label": "동사 구문",
    "expression": "implement strict regulations",
    "meaning": "실현 가능한 한 가지 해결책은 엄격한 규제를 시행하는 것이다.",
    "keyword": "on environmental pollution",
    "keywordKo": "환경 오염에 대해",
    "promptKo": "실현 가능한 한 가지 해결책은 엄격한 규제를 시행하는 것이다.",
    "answer": "One feasible solution is to implement strict regulations.",
    "answerType": "sentence"
  },
  {
    "id": "writing-verb-009",
    "group": "writingVerb",
    "label": "동사 구문",
    "expression": "tackle a deep-rooted problem",
    "meaning": "이 뿌리 깊은 문제를 해결하기 위해 정부들은 협력해야 한다.",
    "keyword": "such as economic inequality",
    "keywordKo": "경제적 불평등과 같은",
    "promptKo": "이 뿌리 깊은 문제를 해결하기 위해 정부들은 협력해야 한다.",
    "answer": "To tackle this deep-rooted problem, governments should cooperate.",
    "answerType": "sentence"
  },
  {
    "id": "writing-verb-010",
    "group": "writingVerb",
    "label": "동사 구문",
    "expression": "alleviate negative impacts",
    "meaning": "이 재정적 조치는 부작용을 효과적으로 완화할 것이다.",
    "keyword": "of global warming",
    "keywordKo": "지구 온난화의",
    "promptKo": "이 재정적 조치는 부작용을 효과적으로 완화할 것이다.",
    "answer": "This financial measure will effectively alleviate negative impacts.",
    "answerType": "sentence"
  },
  {
    "id": "writing-verb-011",
    "group": "writingVerb",
    "label": "동사 구문",
    "expression": "serve as a catalyst for",
    "meaning": "이러한 기술적 발전은 혁신의 촉매제 역할을 한다.",
    "keyword": "social transformation",
    "keywordKo": "사회적 변혁",
    "promptKo": "이러한 기술적 발전은 혁신의 촉매제 역할을 한다.",
    "answer": "This technological development serves as a catalyst for innovation.",
    "answerType": "sentence"
  },
  {
    "id": "writing-verb-012",
    "group": "writingVerb",
    "label": "동사 구문",
    "expression": "trigger a chain reaction",
    "meaning": "이 정책은 낭비를 초래하는 연쇄 반응을 일으킬 수 있다.",
    "keyword": "leading to economic crisis",
    "keywordKo": "경제 위기로 이어지는",
    "promptKo": "이 정책은 낭비를 초래하는 연쇄 반응을 일으킬 수 있다.",
    "answer": "This policy could trigger a chain reaction that results in waste.",
    "answerType": "sentence"
  },
  {
    "id": "writing-verb-013",
    "group": "writingVerb",
    "label": "동사 구문",
    "expression": "exert a profound influence on",
    "meaning": "결과적으로, 이 트렌드는 청소년들에게 깊은 영향을 미친다.",
    "keyword": "the younger generation",
    "keywordKo": "젊은 세대",
    "promptKo": "결과적으로, 이 트렌드는 청소년들에게 깊은 영향을 미친다.",
    "answer": "Consequently, this trend exerts a profound influence on youth.",
    "answerType": "sentence"
  },
  {
    "id": "writing-verb-014",
    "group": "writingVerb",
    "label": "동사 구문",
    "expression": "play a crucial role in",
    "meaning": "이 요인은 미래 산업을 형성하는 데 결정적인 역할을 한다.",
    "keyword": "shaping public opinion",
    "keywordKo": "여론을 형성하는 데",
    "promptKo": "이 요인은 미래 산업을 형성하는 데 결정적인 역할을 한다.",
    "answer": "This factor plays a crucial role in shaping future industries.",
    "answerType": "sentence"
  },
  {
    "id": "writing-verb-015",
    "group": "writingVerb",
    "label": "동사 구문",
    "expression": "result in a direct consequence",
    "meaning": "무분별한 산업 활동은 직접적인 결과를 초래한다.",
    "keyword": "of rapid urbanization",
    "keywordKo": "급격한 도시화의",
    "promptKo": "무분별한 산업 활동은 직접적인 결과를 초래한다.",
    "answer": "Unchecked industrial activities result in a direct consequence.",
    "answerType": "sentence"
  },
  {
    "id": "writing-verb-016",
    "group": "writingVerb",
    "label": "동사 구문",
    "expression": "firmly support the notion",
    "meaning": "나는 교육이 삶을 바꾼다는 견해를 확고히 지지한다.",
    "keyword": "of sustainable development",
    "keywordKo": "지속 가능한 발전의",
    "promptKo": "나는 교육이 삶을 바꾼다는 견해를 확고히 지지한다.",
    "answer": "I firmly support the notion that education changes lives.",
    "answerType": "sentence"
  },
  {
    "id": "writing-verb-017",
    "group": "writingVerb",
    "label": "동사 구문",
    "expression": "foster social cohesion",
    "meaning": "지지자들은 이 제도가 사회적 결속을 유도한다고 주장한다.",
    "keyword": "in a multicultural society",
    "keywordKo": "다문화 사회에서",
    "promptKo": "지지자들은 이 제도가 사회적 결속을 유도한다고 주장한다.",
    "answer": "Proponents argue that this system fosters social cohesion.",
    "answerType": "sentence"
  },
  {
    "id": "writing-verb-018",
    "group": "writingVerb",
    "label": "동사 구문",
    "expression": "raise valid concerns",
    "meaning": "반대자들은 데이터 보안과 관련하여 타당한 우려를 제기한다.",
    "keyword": "about artificial intelligence",
    "keywordKo": "인공지능에 대한",
    "promptKo": "반대자들은 데이터 보안과 관련하여 타당한 우려를 제기한다.",
    "answer": "Opponents raise valid concerns regarding data security.",
    "answerType": "sentence"
  },
  {
    "id": "writing-verb-019",
    "group": "writingVerb",
    "label": "동사 구문",
    "expression": "widely acknowledge that",
    "meaning": "기술이 진보를 이끈다는 점은 널리 인정받고 있다.",
    "keyword": "it is an undeniable consensus",
    "keywordKo": "부인할 수 없는 합의",
    "promptKo": "기술이 진보를 이끈다는 점은 널리 인정받고 있다.",
    "answer": "It is widely acknowledged that technology drives progress.",
    "answerType": "sentence"
  },
  {
    "id": "writing-verb-020",
    "group": "writingVerb",
    "label": "동사 구문",
    "expression": "dispute the validity of",
    "meaning": "많은 전문가가 이 단기 해결책의 타당성에 이의를 제기한다.",
    "keyword": "the researcher's argument",
    "keywordKo": "연구자의 주장",
    "promptKo": "많은 전문가가 이 단기 해결책의 타당성에 이의를 제기한다.",
    "answer": "Many experts dispute the validity of this short-term solution.",
    "answerType": "sentence"
  }
];
const JY_PART2_NOUN_ITEMS = [
  {
    "id": "noun-word-001",
    "group": "nounWord",
    "label": "명사",
    "expression": "education",
    "meaning": "교육",
    "promptKo": "교육",
    "answer": "education",
    "answerType": "word"
  },
  {
    "id": "noun-topic-001",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "essential for success",
    "meaning": "성공의 필수 요소",
    "promptKo": "성공의 필수 요소",
    "answer": "essential for success",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-002",
    "group": "nounWord",
    "label": "명사",
    "expression": "technology",
    "meaning": "기술",
    "promptKo": "기술",
    "answer": "technology",
    "answerType": "word"
  },
  {
    "id": "noun-topic-002",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "vital role in society",
    "meaning": "사회에서의 중추적 역할",
    "promptKo": "사회에서의 중추적 역할",
    "answer": "vital role in society",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-003",
    "group": "nounWord",
    "label": "명사",
    "expression": "society",
    "meaning": "사회",
    "promptKo": "사회",
    "answer": "society",
    "answerType": "word"
  },
  {
    "id": "noun-topic-003",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "benefit from innovation",
    "meaning": "~로 이익을 얻다",
    "promptKo": "~로 이익을 얻다",
    "answer": "benefit from innovation",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-004",
    "group": "nounWord",
    "label": "명사",
    "expression": "community",
    "meaning": "지역사회, 공동체",
    "promptKo": "지역사회, 공동체",
    "answer": "community",
    "answerType": "word"
  },
  {
    "id": "noun-topic-004",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "social stability",
    "meaning": "사회적 안정",
    "promptKo": "사회적 안정",
    "answer": "social stability",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-005",
    "group": "nounWord",
    "label": "명사",
    "expression": "environment",
    "meaning": "환경",
    "promptKo": "환경",
    "answer": "environment",
    "answerType": "word"
  },
  {
    "id": "noun-topic-005",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "protecting the environment",
    "meaning": "환경 보호",
    "promptKo": "환경 보호",
    "answer": "protecting the environment",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-006",
    "group": "nounWord",
    "label": "명사",
    "expression": "economy",
    "meaning": "경제",
    "promptKo": "경제",
    "answer": "economy",
    "answerType": "word"
  },
  {
    "id": "noun-topic-006",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "healthy economy",
    "meaning": "건실한 경제",
    "promptKo": "건실한 경제",
    "answer": "healthy economy",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-007",
    "group": "nounWord",
    "label": "명사",
    "expression": "government",
    "meaning": "정부",
    "promptKo": "정부",
    "answer": "government",
    "answerType": "word"
  },
  {
    "id": "noun-topic-007",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "address this issue",
    "meaning": "문제를 다루다",
    "promptKo": "문제를 다루다",
    "answer": "address this issue",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-008",
    "group": "nounWord",
    "label": "명사",
    "expression": "policy",
    "meaning": "정책",
    "promptKo": "정책",
    "answer": "policy",
    "answerType": "word"
  },
  {
    "id": "noun-topic-008",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "public welfare",
    "meaning": "공공 복리",
    "promptKo": "공공 복리",
    "answer": "public welfare",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-009",
    "group": "nounWord",
    "label": "명사",
    "expression": "development",
    "meaning": "발전, 개발",
    "promptKo": "발전, 개발",
    "answer": "development",
    "answerType": "word"
  },
  {
    "id": "noun-topic-009",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "living standards",
    "meaning": "생활 수준",
    "promptKo": "생활 수준",
    "answer": "living standards",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-010",
    "group": "nounWord",
    "label": "명사",
    "expression": "improvement",
    "meaning": "개선, 향상",
    "promptKo": "개선, 향상",
    "answer": "improvement",
    "answerType": "word"
  },
  {
    "id": "noun-topic-010",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "continuous improvement",
    "meaning": "지속적인 개선",
    "promptKo": "지속적인 개선",
    "answer": "continuous improvement",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-011",
    "group": "nounWord",
    "label": "명사",
    "expression": "innovation",
    "meaning": "혁신",
    "promptKo": "혁신",
    "answer": "innovation",
    "answerType": "word"
  },
  {
    "id": "noun-topic-011",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "drive economic growth",
    "meaning": "경제 성장을 견인하다",
    "promptKo": "경제 성장을 견인하다",
    "answer": "drive economic growth",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-012",
    "group": "nounWord",
    "label": "명사",
    "expression": "opportunity",
    "meaning": "기회",
    "promptKo": "기회",
    "answer": "opportunity",
    "answerType": "word"
  },
  {
    "id": "noun-topic-012",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "provide opportunities",
    "meaning": "기회를 제공하다",
    "promptKo": "기회를 제공하다",
    "answer": "provide opportunities",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-013",
    "group": "nounWord",
    "label": "명사",
    "expression": "benefit",
    "meaning": "이점, 혜택",
    "promptKo": "이점, 혜택",
    "answer": "benefit",
    "answerType": "word"
  },
  {
    "id": "noun-topic-013",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "offer many benefits",
    "meaning": "많은 이점을 제공하다",
    "promptKo": "많은 이점을 제공하다",
    "answer": "offer many benefits",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-014",
    "group": "nounWord",
    "label": "명사",
    "expression": "advantage",
    "meaning": "장점",
    "promptKo": "장점",
    "answer": "advantage",
    "answerType": "word"
  },
  {
    "id": "noun-topic-014",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "increased efficiency",
    "meaning": "증가된 효율성",
    "promptKo": "증가된 효율성",
    "answer": "increased efficiency",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-015",
    "group": "nounWord",
    "label": "명사",
    "expression": "disadvantage",
    "meaning": "단점",
    "promptKo": "단점",
    "answer": "disadvantage",
    "answerType": "word"
  },
  {
    "id": "noun-topic-015",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "high cost",
    "meaning": "높은 비용",
    "promptKo": "높은 비용",
    "answer": "high cost",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-016",
    "group": "nounWord",
    "label": "명사",
    "expression": "drawback",
    "meaning": "결점, 문제점",
    "promptKo": "결점, 문제점",
    "answer": "drawback",
    "answerType": "word"
  },
  {
    "id": "noun-topic-016",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "limited access",
    "meaning": "제한된 접근성",
    "promptKo": "제한된 접근성",
    "answer": "limited access",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-017",
    "group": "nounWord",
    "label": "명사",
    "expression": "challenge",
    "meaning": "난제, 도전 과제",
    "promptKo": "난제, 도전 과제",
    "answer": "challenge",
    "answerType": "word"
  },
  {
    "id": "noun-topic-017",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "global challenge",
    "meaning": "글로벌 난제",
    "promptKo": "글로벌 난제",
    "answer": "global challenge",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-018",
    "group": "nounWord",
    "label": "명사",
    "expression": "issue",
    "meaning": "사안, 문제",
    "promptKo": "사안, 문제",
    "answer": "issue",
    "answerType": "word"
  },
  {
    "id": "noun-topic-018",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "affect many people",
    "meaning": "많은 이들에게 영향을 주다",
    "promptKo": "많은 이들에게 영향을 주다",
    "answer": "affect many people",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-019",
    "group": "nounWord",
    "label": "명사",
    "expression": "problem",
    "meaning": "문제",
    "promptKo": "문제",
    "answer": "problem",
    "answerType": "word"
  },
  {
    "id": "noun-topic-019",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "serious problem",
    "meaning": "심각한 문제",
    "promptKo": "심각한 문제",
    "answer": "serious problem",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-020",
    "group": "nounWord",
    "label": "명사",
    "expression": "solution",
    "meaning": "해결책",
    "promptKo": "해결책",
    "answer": "solution",
    "answerType": "word"
  },
  {
    "id": "noun-topic-020",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "possible solution",
    "meaning": "가능한 해결책",
    "promptKo": "가능한 해결책",
    "answer": "possible solution",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-021",
    "group": "nounWord",
    "label": "명사",
    "expression": "effect",
    "meaning": "효과, 영향",
    "promptKo": "효과, 영향",
    "answer": "effect",
    "answerType": "word"
  },
  {
    "id": "noun-topic-021",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "significant effect",
    "meaning": "중대한 영향",
    "promptKo": "중대한 영향",
    "answer": "significant effect",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-022",
    "group": "nounWord",
    "label": "명사",
    "expression": "impact",
    "meaning": "영향, 충격",
    "promptKo": "영향, 충격",
    "answer": "impact",
    "answerType": "word"
  },
  {
    "id": "noun-topic-022",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "major impact on society",
    "meaning": "사회에 미치는 큰 영향",
    "promptKo": "사회에 미치는 큰 영향",
    "answer": "major impact on society",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-023",
    "group": "nounWord",
    "label": "명사",
    "expression": "influence",
    "meaning": "영향력",
    "promptKo": "영향력",
    "answer": "influence",
    "answerType": "word"
  },
  {
    "id": "noun-topic-023",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "strong influence",
    "meaning": "강한 영향력",
    "promptKo": "강한 영향력",
    "answer": "strong influence",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-024",
    "group": "nounWord",
    "label": "명사",
    "expression": "consequence",
    "meaning": "결과",
    "promptKo": "결과",
    "answer": "consequence",
    "answerType": "word"
  },
  {
    "id": "noun-topic-024",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "negative consequences",
    "meaning": "부정적인 결과들",
    "promptKo": "부정적인 결과들",
    "answer": "negative consequences",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-025",
    "group": "nounWord",
    "label": "명사",
    "expression": "outcome",
    "meaning": "결과, 성과",
    "promptKo": "결과, 성과",
    "answer": "outcome",
    "answerType": "word"
  },
  {
    "id": "noun-topic-025",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "highly positive",
    "meaning": "매우 긍정적인",
    "promptKo": "매우 긍정적인",
    "answer": "highly positive",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-026",
    "group": "nounWord",
    "label": "명사",
    "expression": "productivity",
    "meaning": "생산성",
    "promptKo": "생산성",
    "answer": "productivity",
    "answerType": "word"
  },
  {
    "id": "noun-topic-026",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "improve productivity",
    "meaning": "생산성을 높이다",
    "promptKo": "생산성을 높이다",
    "answer": "improve productivity",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-027",
    "group": "nounWord",
    "label": "명사",
    "expression": "efficiency",
    "meaning": "효율성",
    "promptKo": "효율성",
    "answer": "efficiency",
    "answerType": "word"
  },
  {
    "id": "noun-topic-027",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "increase efficiency",
    "meaning": "효율성을 높이다",
    "promptKo": "효율성을 높이다",
    "answer": "increase efficiency",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-028",
    "group": "nounWord",
    "label": "명사",
    "expression": "quality",
    "meaning": "질, 품질",
    "promptKo": "질, 품질",
    "answer": "quality",
    "answerType": "word"
  },
  {
    "id": "noun-topic-028",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "product quality",
    "meaning": "제품 품질",
    "promptKo": "제품 품질",
    "answer": "product quality",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-029",
    "group": "nounWord",
    "label": "명사",
    "expression": "quality of life",
    "meaning": "삶의 질",
    "promptKo": "삶의 질",
    "answer": "quality of life",
    "answerType": "word"
  },
  {
    "id": "noun-topic-029",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "improve quality of life",
    "meaning": "삶의 질을 높이다",
    "promptKo": "삶의 질을 높이다",
    "answer": "improve quality of life",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-030",
    "group": "nounWord",
    "label": "명사",
    "expression": "well-being",
    "meaning": "웰빙, 행복",
    "promptKo": "웰빙, 행복",
    "answer": "well-being",
    "answerType": "word"
  },
  {
    "id": "noun-topic-030",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "enhance well-being",
    "meaning": "웰빙을 증진하다",
    "promptKo": "웰빙을 증진하다",
    "answer": "enhance well-being",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-031",
    "group": "nounWord",
    "label": "명사",
    "expression": "health",
    "meaning": "건강",
    "promptKo": "건강",
    "answer": "health",
    "answerType": "word"
  },
  {
    "id": "noun-topic-031",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "should be a priority",
    "meaning": "우선순위가 되어야 한다",
    "promptKo": "우선순위가 되어야 한다",
    "answer": "should be a priority",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-032",
    "group": "nounWord",
    "label": "명사",
    "expression": "healthcare",
    "meaning": "의료, 보건 의료",
    "promptKo": "의료, 보건 의료",
    "answer": "healthcare",
    "answerType": "word"
  },
  {
    "id": "noun-topic-032",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "access to healthcare",
    "meaning": "의료 접근성",
    "promptKo": "의료 접근성",
    "answer": "access to healthcare",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-033",
    "group": "nounWord",
    "label": "명사",
    "expression": "employment",
    "meaning": "고용",
    "promptKo": "고용",
    "answer": "employment",
    "answerType": "word"
  },
  {
    "id": "noun-topic-033",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "support economic growth",
    "meaning": "경제 성장을 뒷받침하다",
    "promptKo": "경제 성장을 뒷받침하다",
    "answer": "support economic growth",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-034",
    "group": "nounWord",
    "label": "명사",
    "expression": "unemployment",
    "meaning": "실업",
    "promptKo": "실업",
    "answer": "unemployment",
    "answerType": "word"
  },
  {
    "id": "noun-topic-034",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "cause social problems",
    "meaning": "사회 문제를 야기하다",
    "promptKo": "사회 문제를 야기하다",
    "answer": "cause social problems",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-035",
    "group": "nounWord",
    "label": "명사",
    "expression": "income",
    "meaning": "소득",
    "promptKo": "소득",
    "answer": "income",
    "answerType": "word"
  },
  {
    "id": "noun-topic-035",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "higher income",
    "meaning": "더 높은 소득",
    "promptKo": "더 높은 소득",
    "answer": "higher income",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-036",
    "group": "nounWord",
    "label": "명사",
    "expression": "wealth",
    "meaning": "부, 재산",
    "promptKo": "부, 재산",
    "answer": "wealth",
    "answerType": "word"
  },
  {
    "id": "noun-topic-036",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "unevenly distributed",
    "meaning": "불평등하게 분배된",
    "promptKo": "불평등하게 분배된",
    "answer": "unevenly distributed",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-037",
    "group": "nounWord",
    "label": "명사",
    "expression": "poverty",
    "meaning": "빈곤",
    "promptKo": "빈곤",
    "answer": "poverty",
    "answerType": "word"
  },
  {
    "id": "noun-topic-037",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "global issue",
    "meaning": "지구촌 문제",
    "promptKo": "지구촌 문제",
    "answer": "global issue",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-038",
    "group": "nounWord",
    "label": "명사",
    "expression": "infrastructure",
    "meaning": "인프라, 기반 시설",
    "promptKo": "인프라, 기반 시설",
    "answer": "infrastructure",
    "answerType": "word"
  },
  {
    "id": "noun-topic-038",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "support economic activity",
    "meaning": "경제 활동을 지원하다",
    "promptKo": "경제 활동을 지원하다",
    "answer": "support economic activity",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-039",
    "group": "nounWord",
    "label": "명사",
    "expression": "transportation",
    "meaning": "교통, 운송",
    "promptKo": "교통, 운송",
    "answer": "transportation",
    "answerType": "word"
  },
  {
    "id": "noun-topic-039",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "vital for development",
    "meaning": "발전에 필수적인",
    "promptKo": "발전에 필수적인",
    "answer": "vital for development",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-040",
    "group": "nounWord",
    "label": "명사",
    "expression": "communication",
    "meaning": "소통, 통신",
    "promptKo": "소통, 통신",
    "answer": "communication",
    "answerType": "word"
  },
  {
    "id": "noun-topic-040",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "easier than ever",
    "meaning": "그 어느 때보다 쉬운",
    "promptKo": "그 어느 때보다 쉬운",
    "answer": "easier than ever",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-041",
    "group": "nounWord",
    "label": "명사",
    "expression": "information",
    "meaning": "정보",
    "promptKo": "정보",
    "answer": "information",
    "answerType": "word"
  },
  {
    "id": "noun-topic-041",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "widely available online",
    "meaning": "온라인에서 쉽게 접하는",
    "promptKo": "온라인에서 쉽게 접하는",
    "answer": "widely available online",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-042",
    "group": "nounWord",
    "label": "명사",
    "expression": "knowledge",
    "meaning": "지식",
    "promptKo": "지식",
    "answer": "knowledge",
    "answerType": "word"
  },
  {
    "id": "noun-topic-042",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "valuable asset",
    "meaning": "가치 있는 자산",
    "promptKo": "가치 있는 자산",
    "answer": "valuable asset",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-043",
    "group": "nounWord",
    "label": "명사",
    "expression": "skill",
    "meaning": "기술, 능력",
    "promptKo": "기술, 능력",
    "answer": "skill",
    "answerType": "word"
  },
  {
    "id": "noun-topic-043",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "practical skills",
    "meaning": "실무 능력",
    "promptKo": "실무 능력",
    "answer": "practical skills",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-044",
    "group": "nounWord",
    "label": "명사",
    "expression": "expertise",
    "meaning": "전문 지식",
    "promptKo": "전문 지식",
    "answer": "expertise",
    "answerType": "word"
  },
  {
    "id": "noun-topic-044",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "required for this job",
    "meaning": "이 직무에 요구되는",
    "promptKo": "이 직무에 요구되는",
    "answer": "required for this job",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-045",
    "group": "nounWord",
    "label": "명사",
    "expression": "experience",
    "meaning": "경험",
    "promptKo": "경험",
    "answer": "experience",
    "answerType": "word"
  },
  {
    "id": "noun-topic-045",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "improve performance",
    "meaning": "성과를 높이다",
    "promptKo": "성과를 높이다",
    "answer": "improve performance",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-046",
    "group": "nounWord",
    "label": "명사",
    "expression": "resource",
    "meaning": "자원",
    "promptKo": "자원",
    "answer": "resource",
    "answerType": "word"
  },
  {
    "id": "noun-topic-046",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "natural resources",
    "meaning": "자연 자원",
    "promptKo": "자연 자원",
    "answer": "natural resources",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-047",
    "group": "nounWord",
    "label": "명사",
    "expression": "energy",
    "meaning": "에너지",
    "promptKo": "에너지",
    "answer": "energy",
    "answerType": "word"
  },
  {
    "id": "noun-topic-047",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "energy demand",
    "meaning": "에너지 수요",
    "promptKo": "에너지 수요",
    "answer": "energy demand",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-048",
    "group": "nounWord",
    "label": "명사",
    "expression": "pollution",
    "meaning": "오염",
    "promptKo": "오염",
    "answer": "pollution",
    "answerType": "word"
  },
  {
    "id": "noun-topic-048",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "threaten public health",
    "meaning": "공중 보건을 위협하다",
    "promptKo": "공중 보건을 위협하다",
    "answer": "threaten public health",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-049",
    "group": "nounWord",
    "label": "명사",
    "expression": "sustainability",
    "meaning": "지속 가능성",
    "promptKo": "지속 가능성",
    "answer": "sustainability",
    "answerType": "word"
  },
  {
    "id": "noun-topic-049",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "long-term goal",
    "meaning": "장기적 목표",
    "promptKo": "장기적 목표",
    "answer": "long-term goal",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-050",
    "group": "nounWord",
    "label": "명사",
    "expression": "conservation",
    "meaning": "보존",
    "promptKo": "보존",
    "answer": "conservation",
    "answerType": "word"
  },
  {
    "id": "noun-topic-050",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "protect ecosystems",
    "meaning": "생태계를 보호하다",
    "promptKo": "생태계를 보호하다",
    "answer": "protect ecosystems",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-051",
    "group": "nounWord",
    "label": "명사",
    "expression": "climate",
    "meaning": "기후",
    "promptKo": "기후",
    "answer": "climate",
    "answerType": "word"
  },
  {
    "id": "noun-topic-051",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "climate change",
    "meaning": "기후 변화",
    "promptKo": "기후 변화",
    "answer": "climate change",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-052",
    "group": "nounWord",
    "label": "명사",
    "expression": "population",
    "meaning": "인구",
    "promptKo": "인구",
    "answer": "population",
    "answerType": "word"
  },
  {
    "id": "noun-topic-052",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "growing rapidly",
    "meaning": "급격히 증가하는",
    "promptKo": "급격히 증가하는",
    "answer": "growing rapidly",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-053",
    "group": "nounWord",
    "label": "명사",
    "expression": "urbanization",
    "meaning": "도시화",
    "promptKo": "도시화",
    "answer": "urbanization",
    "answerType": "word"
  },
  {
    "id": "noun-topic-053",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "create new challenges",
    "meaning": "새로운 난제를 만들다",
    "promptKo": "새로운 난제를 만들다",
    "answer": "create new challenges",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-054",
    "group": "nounWord",
    "label": "명사",
    "expression": "globalization",
    "meaning": "세계화",
    "promptKo": "세계화",
    "answer": "globalization",
    "answerType": "word"
  },
  {
    "id": "noun-topic-054",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "connect economies",
    "meaning": "경제들을 연결하다",
    "promptKo": "경제들을 연결하다",
    "answer": "connect economies",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-055",
    "group": "nounWord",
    "label": "명사",
    "expression": "competition",
    "meaning": "경쟁",
    "promptKo": "경쟁",
    "answer": "competition",
    "answerType": "word"
  },
  {
    "id": "noun-topic-055",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "encourage innovation",
    "meaning": "혁신을 장려하다",
    "promptKo": "혁신을 장려하다",
    "answer": "encourage innovation",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-056",
    "group": "nounWord",
    "label": "명사",
    "expression": "cooperation",
    "meaning": "협력",
    "promptKo": "협력",
    "answer": "cooperation",
    "answerType": "word"
  },
  {
    "id": "noun-topic-056",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "international cooperation",
    "meaning": "국제 협력",
    "promptKo": "국제 협력",
    "answer": "international cooperation",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-057",
    "group": "nounWord",
    "label": "명사",
    "expression": "investment",
    "meaning": "투자",
    "promptKo": "투자",
    "answer": "investment",
    "answerType": "word"
  },
  {
    "id": "noun-topic-057",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "stimulate growth",
    "meaning": "성장을 자극하다",
    "promptKo": "성장을 자극하다",
    "answer": "stimulate growth",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-058",
    "group": "nounWord",
    "label": "명사",
    "expression": "industry",
    "meaning": "산업",
    "promptKo": "산업",
    "answer": "industry",
    "answerType": "word"
  },
  {
    "id": "noun-topic-058",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "expanding rapidly",
    "meaning": "급격히 확장되는",
    "promptKo": "급격히 확장되는",
    "answer": "expanding rapidly",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-059",
    "group": "nounWord",
    "label": "명사",
    "expression": "business",
    "meaning": "기업, 사업",
    "promptKo": "기업, 사업",
    "answer": "business",
    "answerType": "word"
  },
  {
    "id": "noun-topic-059",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "create employment",
    "meaning": "고용을 창출하다",
    "promptKo": "고용을 창출하다",
    "answer": "create employment",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-060",
    "group": "nounWord",
    "label": "명사",
    "expression": "market",
    "meaning": "시장",
    "promptKo": "시장",
    "answer": "market",
    "answerType": "word"
  },
  {
    "id": "noun-topic-060",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "highly competitive",
    "meaning": "경쟁이 치열한",
    "promptKo": "경쟁이 치열한",
    "answer": "highly competitive",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-061",
    "group": "nounWord",
    "label": "명사",
    "expression": "consumer",
    "meaning": "소비자",
    "promptKo": "소비자",
    "answer": "consumer",
    "answerType": "word"
  },
  {
    "id": "noun-topic-061",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "affordable products",
    "meaning": "저렴한 제품",
    "promptKo": "저렴한 제품",
    "answer": "affordable products",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-062",
    "group": "nounWord",
    "label": "명사",
    "expression": "demand",
    "meaning": "수요",
    "promptKo": "수요",
    "answer": "demand",
    "answerType": "word"
  },
  {
    "id": "noun-topic-062",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "demand for housing",
    "meaning": "주택 수요",
    "promptKo": "주택 수요",
    "answer": "demand for housing",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-063",
    "group": "nounWord",
    "label": "명사",
    "expression": "supply",
    "meaning": "공급",
    "promptKo": "공급",
    "answer": "supply",
    "answerType": "word"
  },
  {
    "id": "noun-topic-063",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "meet demand",
    "meaning": "수요를 충족하다",
    "promptKo": "수요를 충족하다",
    "answer": "meet demand",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-064",
    "group": "nounWord",
    "label": "명사",
    "expression": "cost",
    "meaning": "비용",
    "promptKo": "비용",
    "answer": "cost",
    "answerType": "word"
  },
  {
    "id": "noun-topic-064",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "cost of living",
    "meaning": "생활비",
    "promptKo": "생활비",
    "answer": "cost of living",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-065",
    "group": "nounWord",
    "label": "명사",
    "expression": "expense",
    "meaning": "비용, 지출",
    "promptKo": "비용, 지출",
    "answer": "expense",
    "answerType": "word"
  },
  {
    "id": "noun-topic-065",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "healthcare expenses",
    "meaning": "의료비 지출",
    "promptKo": "의료비 지출",
    "answer": "healthcare expenses",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-066",
    "group": "nounWord",
    "label": "명사",
    "expression": "budget",
    "meaning": "예산",
    "promptKo": "예산",
    "answer": "budget",
    "answerType": "word"
  },
  {
    "id": "noun-topic-066",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "manage their budgets",
    "meaning": "예산을 관리하다",
    "promptKo": "예산을 관리하다",
    "answer": "manage their budgets",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-067",
    "group": "nounWord",
    "label": "명사",
    "expression": "revenue",
    "meaning": "수익, 세입",
    "promptKo": "수익, 세입",
    "answer": "revenue",
    "answerType": "word"
  },
  {
    "id": "noun-topic-067",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "generate revenue",
    "meaning": "수익을 창출하다",
    "promptKo": "수익을 창출하다",
    "answer": "generate revenue",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-068",
    "group": "nounWord",
    "label": "명사",
    "expression": "profit",
    "meaning": "이윤, 이익",
    "promptKo": "이윤, 이익",
    "answer": "profit",
    "answerType": "word"
  },
  {
    "id": "noun-topic-068",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "maximize profit",
    "meaning": "이윤을 최대화하다",
    "promptKo": "이윤을 최대화하다",
    "answer": "maximize profit",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-069",
    "group": "nounWord",
    "label": "명사",
    "expression": "research",
    "meaning": "연구",
    "promptKo": "연구",
    "answer": "research",
    "answerType": "word"
  },
  {
    "id": "noun-topic-069",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "lead to innovation",
    "meaning": "혁신으로 이어지다",
    "promptKo": "혁신으로 이어지다",
    "answer": "lead to innovation",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-070",
    "group": "nounWord",
    "label": "명사",
    "expression": "data",
    "meaning": "데이터, 자료",
    "promptKo": "데이터, 자료",
    "answer": "data",
    "answerType": "word"
  },
  {
    "id": "noun-topic-070",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "support informed decisions",
    "meaning": "현명한 결정을 받치다",
    "promptKo": "현명한 결정을 받치다",
    "answer": "support informed decisions",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-071",
    "group": "nounWord",
    "label": "명사",
    "expression": "evidence",
    "meaning": "증거",
    "promptKo": "증거",
    "answer": "evidence",
    "answerType": "word"
  },
  {
    "id": "noun-topic-071",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "strong evidence",
    "meaning": "강력한 증거",
    "promptKo": "강력한 증거",
    "answer": "strong evidence",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-072",
    "group": "nounWord",
    "label": "명사",
    "expression": "trend",
    "meaning": "추세, 경향",
    "promptKo": "추세, 경향",
    "answer": "trend",
    "answerType": "word"
  },
  {
    "id": "noun-topic-072",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "become more common",
    "meaning": "더 흔해지다",
    "promptKo": "더 흔해지다",
    "answer": "become more common",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-073",
    "group": "nounWord",
    "label": "명사",
    "expression": "growth",
    "meaning": "성장",
    "promptKo": "성장",
    "answer": "growth",
    "answerType": "word"
  },
  {
    "id": "noun-topic-073",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "economic growth",
    "meaning": "경제 성장",
    "promptKo": "경제 성장",
    "answer": "economic growth",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-074",
    "group": "nounWord",
    "label": "명사",
    "expression": "progress",
    "meaning": "진보, 발전",
    "promptKo": "진보, 발전",
    "answer": "progress",
    "answerType": "word"
  },
  {
    "id": "noun-topic-074",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "accelerate progress",
    "meaning": "발전을 가속하다",
    "promptKo": "발전을 가속하다",
    "answer": "accelerate progress",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-075",
    "group": "nounWord",
    "label": "명사",
    "expression": "achievement",
    "meaning": "성취, 업적",
    "promptKo": "성취, 업적",
    "answer": "achievement",
    "answerType": "word"
  },
  {
    "id": "noun-topic-075",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "significant achievement",
    "meaning": "의미 있는 성취",
    "promptKo": "의미 있는 성취",
    "answer": "significant achievement",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-076",
    "group": "nounWord",
    "label": "명사",
    "expression": "success",
    "meaning": "성공",
    "promptKo": "성공",
    "answer": "success",
    "answerType": "word"
  },
  {
    "id": "noun-topic-076",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "lead to success",
    "meaning": "성공으로 이어지다",
    "promptKo": "성공으로 이어지다",
    "answer": "lead to success",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-077",
    "group": "nounWord",
    "label": "명사",
    "expression": "failure",
    "meaning": "실패",
    "promptKo": "실패",
    "answer": "failure",
    "answerType": "word"
  },
  {
    "id": "noun-topic-077",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "learning experience",
    "meaning": "배움의 경험",
    "promptKo": "배움의 경험",
    "answer": "learning experience",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-078",
    "group": "nounWord",
    "label": "명사",
    "expression": "equality",
    "meaning": "평등",
    "promptKo": "평등",
    "answer": "equality",
    "answerType": "word"
  },
  {
    "id": "noun-topic-078",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "should be promoted",
    "meaning": "장려되어야 한다",
    "promptKo": "장려되어야 한다",
    "answer": "should be promoted",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-079",
    "group": "nounWord",
    "label": "명사",
    "expression": "inequality",
    "meaning": "불평등",
    "promptKo": "불평등",
    "answer": "inequality",
    "answerType": "word"
  },
  {
    "id": "noun-topic-079",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "remains a concern",
    "meaning": "여전히 우려로 남다",
    "promptKo": "여전히 우려로 남다",
    "answer": "remains a concern",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-080",
    "group": "nounWord",
    "label": "명사",
    "expression": "diversity",
    "meaning": "다양성",
    "promptKo": "다양성",
    "answer": "diversity",
    "answerType": "word"
  },
  {
    "id": "noun-topic-080",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "strengthen society",
    "meaning": "사회적 역량을 키우다",
    "promptKo": "사회적 역량을 키우다",
    "answer": "strengthen society",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-081",
    "group": "nounWord",
    "label": "명사",
    "expression": "culture",
    "meaning": "문화",
    "promptKo": "문화",
    "answer": "culture",
    "answerType": "word"
  },
  {
    "id": "noun-topic-081",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "shape people's values",
    "meaning": "가치관을 형성하다",
    "promptKo": "가치관을 형성하다",
    "answer": "shape people's values",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-082",
    "group": "nounWord",
    "label": "명사",
    "expression": "tradition",
    "meaning": "전통",
    "promptKo": "전통",
    "answer": "tradition",
    "answerType": "word"
  },
  {
    "id": "noun-topic-082",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "should be respected",
    "meaning": "존중받아야 한다",
    "promptKo": "존중받아야 한다",
    "answer": "should be respected",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-083",
    "group": "nounWord",
    "label": "명사",
    "expression": "responsibility",
    "meaning": "책임",
    "promptKo": "책임",
    "answer": "responsibility",
    "answerType": "word"
  },
  {
    "id": "noun-topic-083",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "responsibility to protect",
    "meaning": "보호할 책임",
    "promptKo": "보호할 책임",
    "answer": "responsibility to protect",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-084",
    "group": "nounWord",
    "label": "명사",
    "expression": "freedom",
    "meaning": "자유",
    "promptKo": "자유",
    "answer": "freedom",
    "answerType": "word"
  },
  {
    "id": "noun-topic-084",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "fundamental right",
    "meaning": "기본권",
    "promptKo": "기본권",
    "answer": "fundamental right",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-085",
    "group": "nounWord",
    "label": "명사",
    "expression": "security",
    "meaning": "안보, 안전",
    "promptKo": "안보, 안전",
    "answer": "security",
    "answerType": "word"
  },
  {
    "id": "noun-topic-085",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "public concern",
    "meaning": "공공의 우려 사안",
    "promptKo": "공공의 우려 사안",
    "answer": "public concern",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-086",
    "group": "nounWord",
    "label": "명사",
    "expression": "crime",
    "meaning": "범죄",
    "promptKo": "범죄",
    "answer": "crime",
    "answerType": "word"
  },
  {
    "id": "noun-topic-086",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "affect local communities",
    "meaning": "지역사회에 영향을 주다",
    "promptKo": "지역사회에 영향을 주다",
    "answer": "affect local communities",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-087",
    "group": "nounWord",
    "label": "명사",
    "expression": "law",
    "meaning": "법",
    "promptKo": "법",
    "answer": "law",
    "answerType": "word"
  },
  {
    "id": "noun-topic-087",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "protect citizens",
    "meaning": "시민을 보호하다",
    "promptKo": "시민을 보호하다",
    "answer": "protect citizens",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-088",
    "group": "nounWord",
    "label": "명사",
    "expression": "regulation",
    "meaning": "규제",
    "promptKo": "규제",
    "answer": "regulation",
    "answerType": "word"
  },
  {
    "id": "noun-topic-088",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "safety standards",
    "meaning": "안전 기준",
    "promptKo": "안전 기준",
    "answer": "safety standards",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-089",
    "group": "nounWord",
    "label": "명사",
    "expression": "citizen",
    "meaning": "시민",
    "promptKo": "시민",
    "answer": "citizen",
    "answerType": "word"
  },
  {
    "id": "noun-topic-089",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "participate in decision-making",
    "meaning": "의사결정에 참여하다",
    "promptKo": "의사결정에 참여하다",
    "answer": "participate in decision-making",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-090",
    "group": "nounWord",
    "label": "명사",
    "expression": "leadership",
    "meaning": "리더십",
    "promptKo": "리더십",
    "answer": "leadership",
    "answerType": "word"
  },
  {
    "id": "noun-topic-090",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "drive change",
    "meaning": "변화를 주도하다",
    "promptKo": "변화를 주도하다",
    "answer": "drive change",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-091",
    "group": "nounWord",
    "label": "명사",
    "expression": "awareness",
    "meaning": "인식, 의식",
    "promptKo": "인식, 의식",
    "answer": "awareness",
    "answerType": "word"
  },
  {
    "id": "noun-topic-091",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "public awareness",
    "meaning": "대중적 인식",
    "promptKo": "대중적 인식",
    "answer": "public awareness",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-092",
    "group": "nounWord",
    "label": "명사",
    "expression": "motivation",
    "meaning": "동기부여",
    "promptKo": "동기부여",
    "answer": "motivation",
    "answerType": "word"
  },
  {
    "id": "noun-topic-092",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "contribute to success",
    "meaning": "성공에 기여하다",
    "promptKo": "성공에 기여하다",
    "answer": "contribute to success",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-093",
    "group": "nounWord",
    "label": "명사",
    "expression": "stress",
    "meaning": "스트레스",
    "promptKo": "스트레스",
    "answer": "stress",
    "answerType": "word"
  },
  {
    "id": "noun-topic-093",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "negatively affect health",
    "meaning": "건강에 해를 끼치다",
    "promptKo": "건강에 해를 끼치다",
    "answer": "negatively affect health",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-094",
    "group": "nounWord",
    "label": "명사",
    "expression": "lifestyle",
    "meaning": "라이프스타일, 생활 방식",
    "promptKo": "라이프스타일, 생활 방식",
    "answer": "lifestyle",
    "answerType": "word"
  },
  {
    "id": "noun-topic-094",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "healthy lifestyle",
    "meaning": "건강한 생활 방식",
    "promptKo": "건강한 생활 방식",
    "answer": "healthy lifestyle",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-095",
    "group": "nounWord",
    "label": "명사",
    "expression": "relationship",
    "meaning": "관계",
    "promptKo": "관계",
    "answer": "relationship",
    "answerType": "word"
  },
  {
    "id": "noun-topic-095",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "strong relationships",
    "meaning": "돈독한 관계",
    "promptKo": "돈독한 관계",
    "answer": "strong relationships",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-096",
    "group": "nounWord",
    "label": "명사",
    "expression": "satisfaction",
    "meaning": "만족도",
    "promptKo": "만족도",
    "answer": "satisfaction",
    "answerType": "word"
  },
  {
    "id": "noun-topic-096",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "job satisfaction",
    "meaning": "직무 만족도",
    "promptKo": "직무 만족도",
    "answer": "job satisfaction",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-097",
    "group": "nounWord",
    "label": "명사",
    "expression": "happiness",
    "meaning": "행복",
    "promptKo": "행복",
    "answer": "happiness",
    "answerType": "word"
  },
  {
    "id": "noun-topic-097",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "linked to good health",
    "meaning": "좋은 건강과 직결된",
    "promptKo": "좋은 건강과 직결된",
    "answer": "linked to good health",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-098",
    "group": "nounWord",
    "label": "명사",
    "expression": "accessibility",
    "meaning": "접근성",
    "promptKo": "접근성",
    "answer": "accessibility",
    "answerType": "word"
  },
  {
    "id": "noun-topic-098",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "social inclusion",
    "meaning": "사회적 포용",
    "promptKo": "사회적 포용",
    "answer": "social inclusion",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-099",
    "group": "nounWord",
    "label": "명사",
    "expression": "equality of opportunity",
    "meaning": "기회균등",
    "promptKo": "기회균등",
    "answer": "equality of opportunity",
    "answerType": "word"
  },
  {
    "id": "noun-topic-099",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "benefit society",
    "meaning": "사회에 유익하다",
    "promptKo": "사회에 유익하다",
    "answer": "benefit society",
    "answerType": "phrase"
  },
  {
    "id": "noun-word-100",
    "group": "nounWord",
    "label": "명사",
    "expression": "living standard",
    "meaning": "생활 수준",
    "promptKo": "생활 수준",
    "answer": "living standard",
    "answerType": "word"
  },
  {
    "id": "noun-topic-100",
    "group": "nounTopic",
    "label": "명사 주제별 표현",
    "expression": "improve well-being",
    "meaning": "웰빙을 개선하다",
    "promptKo": "웰빙을 개선하다",
    "answer": "improve well-being",
    "answerType": "phrase"
  },
  {
    "id": "noun-phrase-201",
    "group": "nounPhrase",
    "label": "명사 구문",
    "expression": "acquisition of knowledge",
    "meaning": "지식의 습득은 학생들에게 필수적이다.",
    "keyword": "through formal education",
    "keywordKo": "정규 교육을 통한",
    "promptKo": "지식의 습득은 학생들에게 필수적이다.",
    "answer": "acquisition of knowledge",
    "answerType": "phrase"
  },
  {
    "id": "noun-phrase-202",
    "group": "nounPhrase",
    "label": "명사 구문",
    "expression": "technological advancement",
    "meaning": "기술적 발전은 사회적 진보를 가속한다.",
    "keyword": "in the modern era",
    "keywordKo": "현대 시대의",
    "promptKo": "기술적 발전은 사회적 진보를 가속한다.",
    "answer": "technological advancement",
    "answerType": "phrase"
  },
  {
    "id": "noun-phrase-203",
    "group": "nounPhrase",
    "label": "명사 구문",
    "expression": "digital literacy skills",
    "meaning": "학교는 디지털 리터러시 능력을 강조해야 한다.",
    "keyword": "for future generations",
    "keywordKo": "미래 세대를 위한",
    "promptKo": "학교는 디지털 리터러시 능력을 강조해야 한다.",
    "answer": "digital literacy skills",
    "answerType": "phrase"
  },
  {
    "id": "noun-phrase-204",
    "group": "nounPhrase",
    "label": "명사 구문",
    "expression": "educational opportunities",
    "meaning": "온라인 플랫폼은 교육 기회를 확대한다.",
    "keyword": "for underprivileged children",
    "keywordKo": "소외 계층 아동을 위한",
    "promptKo": "온라인 플랫폼은 교육 기회를 확대한다.",
    "answer": "educational opportunities",
    "answerType": "phrase"
  },
  {
    "id": "noun-phrase-205",
    "group": "nounPhrase",
    "label": "명사 구문",
    "expression": "reliance on technology",
    "meaning": "과도한 의존은 기술에 대한 우리의 높은 의존도를 반영한다.",
    "keyword": "in daily operations",
    "keywordKo": "일상 업무에서의",
    "promptKo": "과도한 의존은 기술에 대한 우리의 높은 의존도를 반영한다.",
    "answer": "reliance on technology",
    "answerType": "phrase"
  },
  {
    "id": "noun-phrase-206",
    "group": "nounPhrase",
    "label": "명사 구문",
    "expression": "depletion of resources",
    "meaning": "자원의 고갈은 심각한 위협을 가한다.",
    "keyword": "due to overconsumption",
    "keywordKo": "과소비로 인한",
    "promptKo": "자원의 고갈은 심각한 위협을 가한다.",
    "answer": "depletion of resources",
    "answerType": "phrase"
  },
  {
    "id": "noun-phrase-207",
    "group": "nounPhrase",
    "label": "명사 구문",
    "expression": "environmental degradation",
    "meaning": "산업화는 흔히 환경 파괴를 초래한다.",
    "keyword": "caused by industrial waste",
    "keywordKo": "산업 폐기물로 인한",
    "promptKo": "산업화는 흔히 환경 파괴를 초래한다.",
    "answer": "environmental degradation",
    "answerType": "phrase"
  },
  {
    "id": "noun-phrase-208",
    "group": "nounPhrase",
    "label": "명사 구문",
    "expression": "widening wealth gap",
    "meaning": "정부는 벌어지는 빈부 격차 문제를 해결해야 한다.",
    "keyword": "between social classes",
    "keywordKo": "계층 간의",
    "promptKo": "정부는 벌어지는 빈부 격차 문제를 해결해야 한다.",
    "answer": "widening wealth gap",
    "answerType": "phrase"
  },
  {
    "id": "noun-phrase-209",
    "group": "nounPhrase",
    "label": "명사 구문",
    "expression": "implementation of policies",
    "meaning": "엄격한 정책 시행은 오염을 줄인다.",
    "keyword": "on environmental conservation",
    "keywordKo": "환경 보존에 관한",
    "promptKo": "엄격한 정책 시행은 오염을 줄인다.",
    "answer": "implementation of policies",
    "answerType": "phrase"
  },
  {
    "id": "noun-phrase-210",
    "group": "nounPhrase",
    "label": "명사 구문",
    "expression": "public awareness campaigns",
    "meaning": "대중 인식 개선 캠페인은 시민의 협력을 유도한다.",
    "keyword": "to protect ecosystems",
    "keywordKo": "생태계 보호를 위한",
    "promptKo": "대중 인식 개선 캠페인은 시민의 협력을 유도한다.",
    "answer": "public awareness campaigns",
    "answerType": "phrase"
  },
  {
    "id": "noun-phrase-211",
    "group": "nounPhrase",
    "label": "명사 구문",
    "expression": "allocation of budget",
    "meaning": "예산 배분은 보건 의료를 우선시해야 한다.",
    "keyword": "for public healthcare",
    "keywordKo": "공공 의료를 위한",
    "promptKo": "예산 배분은 보건 의료를 우선시해야 한다.",
    "answer": "allocation of budget",
    "answerType": "phrase"
  },
  {
    "id": "noun-phrase-212",
    "group": "nounPhrase",
    "label": "명사 구문",
    "expression": "financial burden",
    "meaning": "높은 의료비는 재정적 부담을 가중시킨다.",
    "keyword": "on low-income families",
    "keywordKo": "저소득층 가정에 지워지는",
    "promptKo": "높은 의료비는 재정적 부담을 가중시킨다.",
    "answer": "financial burden",
    "answerType": "phrase"
  },
  {
    "id": "noun-phrase-213",
    "group": "nounPhrase",
    "label": "명사 구문",
    "expression": "sustainable economic growth",
    "meaning": "혁신에 대한 투자는 지속 가능한 경제 성장을 견인한다.",
    "keyword": "without harming nature",
    "keywordKo": "자연을 해치지 않는",
    "promptKo": "혁신에 대한 투자는 지속 가능한 경제 성장을 견인한다.",
    "answer": "sustainable economic growth",
    "answerType": "phrase"
  },
  {
    "id": "noun-phrase-214",
    "group": "nounPhrase",
    "label": "명사 구문",
    "expression": "improvement of infrastructure",
    "meaning": "기반 시설의 개선은 지역 경제를 활성화한다.",
    "keyword": "in rural regions",
    "keywordKo": "농촌 지역의",
    "promptKo": "기반 시설의 개선은 지역 경제를 활성화한다.",
    "answer": "improvement of infrastructure",
    "answerType": "phrase"
  },
  {
    "id": "noun-phrase-215",
    "group": "nounPhrase",
    "label": "명사 구문",
    "expression": "deterioration of health",
    "meaning": "스트레스는 건강 악화의 원인이 된다.",
    "keyword": "due to sedentary lifestyles",
    "keywordKo": "주로 앉아서 지내는 습관으로 인한",
    "promptKo": "스트레스는 건강 악화의 원인이 된다.",
    "answer": "deterioration of health",
    "answerType": "phrase"
  }
];
const JY_TASK1_EXPRESSION_ITEMS = [
  {
    "cat": "rise",
    "expression": "rise",
    "meaning": "오르다",
    "example": "The proportion of households with internet access rose to 80% in 2020."
  },
  {
    "cat": "rise",
    "expression": "increase",
    "meaning": "증가하다",
    "example": "There was a steady increase in sales between 2000 and 2010."
  },
  {
    "cat": "rise",
    "expression": "grow",
    "meaning": "늘다, 성장하다",
    "example": "The population grew by 5% annually."
  },
  {
    "cat": "rise",
    "expression": "climb",
    "meaning": "시간을 두고 올라가다",
    "example": "Literacy rates climbed to 95% over the 10-year period."
  },
  {
    "cat": "rise",
    "expression": "edge up",
    "meaning": "조금씩 오르다",
    "example": "The figure edged up from 24% to 26%."
  },
  {
    "cat": "rise",
    "expression": "show a slight increase",
    "meaning": "소폭 증가를 보이다",
    "example": "The figure showed a slight increase to 10% in 1980."
  },
  {
    "cat": "rise",
    "expression": "rise steadily",
    "meaning": "꾸준히 증가하다",
    "example": "The share of trucks rose steadily after 1990."
  },
  {
    "cat": "rise",
    "expression": "increase consistently",
    "meaning": "일관되게 증가하다",
    "example": "The number of visitors increased consistently throughout the period."
  },
  {
    "cat": "rise",
    "expression": "jump",
    "meaning": "갑자기 오르다",
    "example": "Attendance jumped from 50 to 150 in one year."
  },
  {
    "cat": "rise",
    "expression": "surge",
    "meaning": "급증하다",
    "example": "There was a surge in demand for online services."
  },
  {
    "cat": "rise",
    "expression": "soar",
    "meaning": "치솟다",
    "example": "Energy costs soared during the winter."
  },
  {
    "cat": "rise",
    "expression": "rocket",
    "meaning": "급등하다",
    "example": "The number of users rocketed after the launch."
  },
  {
    "cat": "rise",
    "expression": "shoot up",
    "meaning": "갑자기 확 오르다",
    "example": "Property prices shot up unexpectedly."
  },
  {
    "cat": "rise",
    "expression": "skyrocket",
    "meaning": "폭발적으로 급등하다",
    "example": "The stock price skyrocketed overnight."
  },
  {
    "cat": "rise",
    "expression": "peak at",
    "meaning": "정점에 도달하다",
    "example": "Unemployment peaked at 12% in 2010."
  },
  {
    "cat": "rise",
    "expression": "reach a high of",
    "meaning": "최고치에 달하다",
    "example": "Inflation reached a high of 8%."
  },
  {
    "cat": "rise",
    "expression": "double",
    "meaning": "두 배가 되다",
    "example": "The figure doubled within two years."
  },
  {
    "cat": "rise",
    "expression": "treble / triple",
    "meaning": "세 배가 되다",
    "example": "Production trebled in the final quarter.",
    "aliases": [
      "treble",
      "triple"
    ]
  },
  {
    "cat": "rise",
    "expression": "a fourfold increase",
    "meaning": "네 배 증가",
    "example": "There was a fourfold increase in costs."
  },
  {
    "cat": "rise",
    "expression": "upward trend",
    "meaning": "상승 추세",
    "example": "The graph shows a clear upward trend."
  },
  {
    "cat": "rise",
    "expression": "gain ground",
    "meaning": "점유율이나 지지세를 얻다",
    "example": "Electric cars gained ground in the market."
  },
  {
    "cat": "rise",
    "expression": "build up",
    "meaning": "점차 쌓이다, 늘다",
    "example": "Pressure built up over several months."
  },
  {
    "cat": "rise",
    "expression": "ascend",
    "meaning": "올라가다",
    "example": "The line ascends gradually on the chart."
  },
  {
    "cat": "rise",
    "expression": "uptick",
    "meaning": "소폭 상승",
    "example": "The figure showed a slight uptick in 2015."
  },
  {
    "cat": "recovery",
    "expression": "recover",
    "meaning": "회복하다",
    "example": "Prices recovered after a brief dip."
  },
  {
    "cat": "recovery",
    "expression": "rebound",
    "meaning": "다시 회복하다",
    "example": "The figure rebounded significantly to reach 35% by 2010."
  },
  {
    "cat": "recovery",
    "expression": "bounce back",
    "meaning": "다시 회복하다",
    "example": "The market bounced back in 2024."
  },
  {
    "cat": "recovery",
    "expression": "expansion",
    "meaning": "확장, 증가",
    "example": "The expansion of the city was rapid."
  },
  {
    "cat": "recovery",
    "expression": "escalate",
    "meaning": "단계적으로 확대되다",
    "example": "Costs escalated over the period."
  },
  {
    "cat": "fall",
    "expression": "fall",
    "meaning": "떨어지다",
    "example": "The temperature fell below zero."
  },
  {
    "cat": "fall",
    "expression": "decrease",
    "meaning": "감소하다",
    "example": "There was a decrease in funding."
  },
  {
    "cat": "fall",
    "expression": "decline",
    "meaning": "감소하다",
    "example": "Support for the policy declined steadily."
  },
  {
    "cat": "fall",
    "expression": "drop",
    "meaning": "떨어지다",
    "example": "Rainfall dropped significantly in July."
  },
  {
    "cat": "fall",
    "expression": "dip",
    "meaning": "잠깐 하락하다",
    "example": "There was a temporary dip in sales."
  },
  {
    "cat": "fall",
    "expression": "show a dip",
    "meaning": "하락 구간을 보이다",
    "example": "The figure showed a dip in the middle years."
  },
  {
    "cat": "fall",
    "expression": "plummet",
    "meaning": "폭락하다",
    "example": "Profits plummeted by 50% last year."
  },
  {
    "cat": "fall",
    "expression": "plunge",
    "meaning": "급락하다",
    "example": "The value of the currency plunged."
  },
  {
    "cat": "fall",
    "expression": "slump",
    "meaning": "침체되다, 급감하다",
    "example": "The housing market slumped after 2008."
  },
  {
    "cat": "fall",
    "expression": "dwindle",
    "meaning": "점차 줄어들다",
    "example": "Natural resources dwindled over time."
  },
  {
    "cat": "fall",
    "expression": "sink to",
    "meaning": "낮은 수치로 내려가다",
    "example": "Numbers sank to an all-time low."
  },
  {
    "cat": "fall",
    "expression": "hit a low of",
    "meaning": "최저치를 기록하다",
    "example": "The price of oil hit a low of $30 per barrel in 2016."
  },
  {
    "cat": "fall",
    "expression": "bottom out",
    "meaning": "바닥을 치다",
    "example": "The figure bottomed out at 5%."
  },
  {
    "cat": "fall",
    "expression": "go down",
    "meaning": "내려가다",
    "example": "The percentage went down slightly."
  },
  {
    "cat": "fall",
    "expression": "halve",
    "meaning": "절반으로 줄다",
    "example": "The budget was halved due to the crisis."
  },
  {
    "cat": "fall",
    "expression": "shrink",
    "meaning": "줄어들다, 축소되다",
    "example": "The workforce shrank by 10%."
  },
  {
    "cat": "fall",
    "expression": "nosedive",
    "meaning": "급락하다",
    "example": "Public confidence took a nosedive."
  },
  {
    "cat": "fall",
    "expression": "tumble",
    "meaning": "급락하다",
    "example": "Export figures tumbled last quarter."
  },
  {
    "cat": "fall",
    "expression": "diminish",
    "meaning": "줄어들다, 약화되다",
    "example": "The impact of the law diminished."
  },
  {
    "cat": "fall",
    "expression": "deteriorate",
    "meaning": "악화되다",
    "example": "Air quality deteriorated over the decade."
  },
  {
    "cat": "fall",
    "expression": "downswing",
    "meaning": "하강 국면",
    "example": "The economy entered a downswing."
  },
  {
    "cat": "fall",
    "expression": "reduction",
    "meaning": "감소, 삭감",
    "example": "There was a reduction in carbon emissions."
  },
  {
    "cat": "fall",
    "expression": "slide",
    "meaning": "미끄러지듯 내려가다",
    "example": "The dollar continued its slide."
  },
  {
    "cat": "fall",
    "expression": "collapse",
    "meaning": "붕괴하다",
    "example": "The bridge collapsed under pressure."
  },
  {
    "cat": "fall",
    "expression": "subside",
    "meaning": "가라앉다, 진정되다",
    "example": "The storm finally subsided."
  },
  {
    "cat": "fall",
    "expression": "curb",
    "meaning": "억제하다",
    "example": "Policies were made to curb inflation."
  },
  {
    "cat": "fall",
    "expression": "slash",
    "meaning": "대폭 삭감하다",
    "example": "The company slashed its prices."
  },
  {
    "cat": "stability",
    "expression": "fluctuate",
    "meaning": "변동하다",
    "example": "Taxi registrations fluctuated throughout the period."
  },
  {
    "cat": "stability",
    "expression": "show fluctuations",
    "meaning": "변동을 보이다",
    "example": "The figures showed fluctuations between 1980 and 2010."
  },
  {
    "cat": "stability",
    "expression": "oscillate",
    "meaning": "오르내리다",
    "example": "The figure oscillated between 10% and 20%."
  },
  {
    "cat": "stability",
    "expression": "remain steady",
    "meaning": "일정하게 유지되다",
    "example": "The birth rate remained steady at around 15%."
  },
  {
    "cat": "stability",
    "expression": "stay constant",
    "meaning": "변함없이 유지되다",
    "example": "Temperatures stayed constant at 25°C."
  },
  {
    "cat": "stability",
    "expression": "remain unchanged",
    "meaning": "변화가 없다",
    "example": "The figure remained unchanged over the next decade."
  },
  {
    "cat": "stability",
    "expression": "plateau",
    "meaning": "정체기에 접어들다",
    "example": "Growth plateaued after the initial rise."
  },
  {
    "cat": "stability",
    "expression": "level off",
    "meaning": "상승이나 하락 뒤 평평해지다",
    "example": "The trend levelled off after 2010."
  },
  {
    "cat": "stability",
    "expression": "stabilise",
    "meaning": "안정화되다",
    "example": "The market began to stabilise."
  },
  {
    "cat": "stability",
    "expression": "after a decade of stability",
    "meaning": "10년간 안정세를 보인 뒤",
    "example": "After a decade of stability, the figure increased again."
  },
  {
    "cat": "stability",
    "expression": "throughout the period",
    "meaning": "기간 내내",
    "example": "Trucks remained the most common type throughout the period."
  },
  {
    "cat": "stability",
    "expression": "ending the period at",
    "meaning": "마지막에 해당 수치를 기록하며",
    "example": "The figure rose steadily, ending the period at approximately 45%."
  },
  {
    "cat": "modifier",
    "expression": "sharply",
    "meaning": "급격히",
    "example": "Prices rose sharply in 2010."
  },
  {
    "cat": "modifier",
    "expression": "dramatically",
    "meaning": "극적으로, 크게",
    "example": "The figure changed dramatically over the period."
  },
  {
    "cat": "modifier",
    "expression": "steeply",
    "meaning": "가파르게",
    "example": "The percentage fell steeply after 1990."
  },
  {
    "cat": "modifier",
    "expression": "gradually",
    "meaning": "서서히",
    "example": "The number of visitors gradually increased."
  },
  {
    "cat": "modifier",
    "expression": "steadily",
    "meaning": "꾸준히",
    "example": "The share rose steadily after 1980."
  },
  {
    "cat": "modifier",
    "expression": "moderately",
    "meaning": "적당한 정도로",
    "example": "The stock performed moderately."
  },
  {
    "cat": "modifier",
    "expression": "slightly",
    "meaning": "약간",
    "example": "The figure increased slightly."
  },
  {
    "cat": "modifier",
    "expression": "noticeably",
    "meaning": "눈에 띄게",
    "example": "It became noticeably higher in the final year."
  },
  {
    "cat": "modifier",
    "expression": "substantially",
    "meaning": "상당히",
    "example": "The figure rose substantially from 20% to 45%."
  },
  {
    "cat": "modifier",
    "expression": "marginally",
    "meaning": "미미하게",
    "example": "The proportion increased marginally."
  },
  {
    "cat": "modifier",
    "expression": "approximately",
    "meaning": "대략",
    "example": "It took approximately two hours."
  },
  {
    "cat": "modifier",
    "expression": "roughly",
    "meaning": "대략",
    "example": "The figure stood at roughly 25%."
  },
  {
    "cat": "modifier",
    "expression": "nearly",
    "meaning": "거의",
    "example": "The figure reached nearly 50%."
  },
  {
    "cat": "modifier",
    "expression": "about / around",
    "meaning": "약",
    "example": "The share was around 30%.",
    "aliases": [
      "about",
      "around"
    ]
  },
  {
    "cat": "modifier",
    "expression": "slightly over / slightly under",
    "meaning": "조금 넘는, 조금 안 되는",
    "example": "The proportion was slightly over 20%.",
    "aliases": [
      "slightly over",
      "slightly under"
    ]
  },
  {
    "cat": "modifier",
    "expression": "precisely",
    "meaning": "정확히",
    "example": "The figure stood precisely at 50%."
  },
  {
    "cat": "modifier",
    "expression": "overwhelmingly",
    "meaning": "압도적으로",
    "example": "The vote was overwhelmingly in favour of the proposal."
  },
  {
    "cat": "modifier",
    "expression": "consistent",
    "meaning": "일관된",
    "example": "The graph shows a consistent flow of information."
  },
  {
    "cat": "ranking",
    "expression": "rank first",
    "meaning": "1위를 차지하다",
    "example": "Coal ranked first as the primary energy source in 1990."
  },
  {
    "cat": "ranking",
    "expression": "top the list",
    "meaning": "목록에서 1위를 차지하다",
    "example": "Cars topped the list in 2010."
  },
  {
    "cat": "ranking",
    "expression": "hold the highest share at",
    "meaning": "가장 높은 비중을 차지하다",
    "example": "Trucks held the highest share at nearly 50%."
  },
  {
    "cat": "ranking",
    "expression": "the dominant category",
    "meaning": "가장 우세한 항목",
    "example": "Smartphones remained the dominant device for internet access."
  },
  {
    "cat": "ranking",
    "expression": "the leading sector",
    "meaning": "선두 부문",
    "example": "Retail became the leading sector in consumer expenditure."
  },
  {
    "cat": "ranking",
    "expression": "account for the largest share",
    "meaning": "가장 큰 비중을 차지하다",
    "example": "Food accounted for the largest share of spending."
  },
  {
    "cat": "ranking",
    "expression": "account for the lion's share",
    "meaning": "가장 큰 비중을 차지하다",
    "example": "Food accounted for the lion's share of spending."
  },
  {
    "cat": "ranking",
    "expression": "represent a vast majority of",
    "meaning": "절대다수를 차지하다",
    "example": "Adults represented a vast majority of library members."
  },
  {
    "cat": "ranking",
    "expression": "the clear frontrunner",
    "meaning": "명확한 선두 항목",
    "example": "Cars were the clear frontrunner in 2010."
  },
  {
    "cat": "ranking",
    "expression": "consistent top performer",
    "meaning": "지속적으로 높은 수치를 보인 항목",
    "example": "The category was a consistent top performer."
  },
  {
    "cat": "ranking",
    "expression": "rank lowest",
    "meaning": "가장 낮은 순위를 기록하다",
    "example": "Public transport ranked lowest in terms of user satisfaction."
  },
  {
    "cat": "ranking",
    "expression": "the least common",
    "meaning": "가장 적은, 가장 낮은 비중의",
    "example": "Buses were the least common vehicle type."
  },
  {
    "cat": "ranking",
    "expression": "the lowest-ranked entry",
    "meaning": "가장 낮은 순위 항목",
    "example": "The lowest-ranked entry was cinema spending."
  },
  {
    "cat": "ranking",
    "expression": "place it at the bottom of the ranking",
    "meaning": "순위의 최하단에 놓다",
    "example": "With just 3%, cinema spending was placed at the bottom of the ranking."
  },
  {
    "cat": "ranking",
    "expression": "bottom of the pile",
    "meaning": "최하위",
    "example": "At the bottom of the pile was the textile industry."
  },
  {
    "cat": "ranking",
    "expression": "languish at the bottom",
    "meaning": "최하위에 머물다",
    "example": "The figure languished at the bottom."
  },
  {
    "cat": "ranking",
    "expression": "stand at the foot of the table",
    "meaning": "표의 맨 아래에 위치하다",
    "example": "The category stood at the foot of the table."
  },
  {
    "cat": "overtaking",
    "expression": "overtake",
    "meaning": "추월하다",
    "example": "In 2010, car exports overtook electronics."
  },
  {
    "cat": "overtaking",
    "expression": "surpass",
    "meaning": "넘어서다, 능가하다",
    "example": "The population of India is projected to surpass that of China."
  },
  {
    "cat": "overtaking",
    "expression": "supplant A as the most popular",
    "meaning": "A를 대신해 가장 인기 있는 항목이 되다",
    "example": "Online shopping supplanted in-store shopping as the most popular method."
  },
  {
    "cat": "overtaking",
    "expression": "eclipse",
    "meaning": "가리다, 능가하다",
    "example": "The success of the technology sector eclipsed traditional sectors."
  },
  {
    "cat": "overtaking",
    "expression": "leapfrog",
    "meaning": "단계를 뛰어넘어 추월하다",
    "example": "France leapfrogged Italy to become second."
  },
  {
    "cat": "overtaking",
    "expression": "topple A from its top position",
    "meaning": "A를 1위에서 끌어내리다",
    "example": "Online media toppled television from its top position."
  },
  {
    "cat": "overtaking",
    "expression": "edge out",
    "meaning": "근소하게 앞지르다",
    "example": "Cars edged out buses by just 1%."
  },
  {
    "cat": "overtaking",
    "expression": "a flip in the rankings occurred",
    "meaning": "순위가 뒤집혔다",
    "example": "A flip in the rankings occurred in 2010."
  },
  {
    "cat": "overtaking",
    "expression": "trade places with",
    "meaning": "서로 순위가 바뀌다",
    "example": "Cars traded places with buses in 2010."
  },
  {
    "cat": "overtaking",
    "expression": "usurp the throne",
    "meaning": "왕좌를 빼앗다",
    "example": "The second category usurped the throne in the final year."
  },
  {
    "cat": "gap",
    "expression": "narrow the gap",
    "meaning": "격차를 줄이다",
    "example": "Female enrolment narrowed the gap with male enrolment."
  },
  {
    "cat": "gap",
    "expression": "widen the gap",
    "meaning": "격차를 벌리다",
    "example": "The gap widened between the two categories."
  },
  {
    "cat": "gap",
    "expression": "a significant lead over",
    "meaning": "상당한 우위",
    "example": "The increase resulted in a significant lead over public transport usage."
  },
  {
    "cat": "gap",
    "expression": "a substantial advantage over",
    "meaning": "상당한 우위",
    "example": "The technology sector had a substantial advantage over traditional industries."
  },
  {
    "cat": "gap",
    "expression": "a notable gap between A and B",
    "meaning": "A와 B 사이의 눈에 띄는 격차",
    "example": "The rise created a notable gap between rural and urban populations."
  },
  {
    "cat": "gap",
    "expression": "a marginal difference of only",
    "meaning": "미세한 차이",
    "example": "There was a marginal difference of only 1%."
  },
  {
    "cat": "gap",
    "expression": "clustered around the X% mark",
    "meaning": "X% 부근에 몰려 있다",
    "example": "The figures clustered around the 30% mark."
  },
  {
    "cat": "gap",
    "expression": "tied for the lead",
    "meaning": "공동 1위이다",
    "example": "The two categories were tied for the lead."
  },
  {
    "cat": "gap",
    "expression": "neck and neck",
    "meaning": "막상막하이다",
    "example": "The two categories were neck and neck."
  },
  {
    "cat": "gap",
    "expression": "in a dead heat for second place",
    "meaning": "2위를 두고 접전이다",
    "example": "The two categories were in a dead heat for second place."
  },
  {
    "cat": "gap",
    "expression": "distributed unevenly across",
    "meaning": "불균등하게 분포하다",
    "example": "The figures were distributed unevenly across age groups."
  },
  {
    "cat": "gap",
    "expression": "ranked in descending order",
    "meaning": "내림차순으로 배열되다",
    "example": "The categories were ranked in descending order."
  },
  {
    "cat": "gap",
    "expression": "gain ground on the leader",
    "meaning": "선두와의 격차를 줄이다",
    "example": "The second category gained ground on the leader."
  },
  {
    "cat": "gap",
    "expression": "hot on the heels of",
    "meaning": "바짝 뒤쫓다",
    "example": "The second category was hot on the heels of the leader."
  },
  {
    "cat": "gap",
    "expression": "on the verge of overtaking",
    "meaning": "추월 직전이다",
    "example": "The figure was on the verge of overtaking the leading category."
  },
  {
    "cat": "comparison",
    "expression": "in contrast",
    "meaning": "대조적으로",
    "example": "In contrast, rural areas recorded much lower figures."
  },
  {
    "cat": "comparison",
    "expression": "by comparison",
    "meaning": "비교해 보면",
    "example": "By comparison, the 2000s were relatively stable."
  },
  {
    "cat": "comparison",
    "expression": "similarly",
    "meaning": "유사하게",
    "example": "Similarly, the UK saw a rise in debt."
  },
  {
    "cat": "comparison",
    "expression": "conversely",
    "meaning": "반대로",
    "example": "Conversely, some cities shrank."
  },
  {
    "cat": "comparison",
    "expression": "respectively",
    "meaning": "각각, 순서대로",
    "example": "The figures were 10% and 20%, respectively."
  },
  {
    "cat": "comparison",
    "expression": "be followed by",
    "meaning": "그 뒤에 이어지다",
    "example": "This was followed by a sharp decline."
  },
  {
    "cat": "comparison",
    "expression": "lead to",
    "meaning": "초래하다",
    "example": "The policy led to a fall in car use."
  },
  {
    "cat": "comparison",
    "expression": "result in",
    "meaning": "결과를 낳다",
    "example": "The fall resulted in lower overall sales."
  },
  {
    "cat": "comparison",
    "expression": "stem from",
    "meaning": "에서 비롯되다",
    "example": "The problem stemmed from poor planning."
  },
  {
    "cat": "comparison",
    "expression": "be attributed to",
    "meaning": "의 결과로 여겨지다",
    "example": "The increase was attributed to higher demand."
  },
  {
    "cat": "comparison",
    "expression": "trigger",
    "meaning": "촉발하다",
    "example": "Dust can trigger an allergy."
  },
  {
    "cat": "comparison",
    "expression": "correlate with",
    "meaning": "와 관련이 있다",
    "example": "The rise in car use correlated with a decline in public transport use."
  },
  {
    "cat": "comparison",
    "expression": "contribute significantly to",
    "meaning": "에 상당히 기여하다",
    "example": "Online retail contributed significantly to overall sales growth."
  },
  {
    "cat": "impact",
    "expression": "profound impact",
    "meaning": "큰 영향",
    "example": "Technology had a profound impact."
  },
  {
    "cat": "impact",
    "expression": "significant influence",
    "meaning": "상당한 영향력",
    "example": "His work had a significant influence."
  },
  {
    "cat": "impact",
    "expression": "crucial role",
    "meaning": "결정적 역할",
    "example": "Education plays a crucial role."
  },
  {
    "cat": "impact",
    "expression": "detrimental effect",
    "meaning": "해로운 영향",
    "example": "Smoking has a detrimental effect."
  },
  {
    "cat": "impact",
    "expression": "adverse impact",
    "meaning": "부정적 영향",
    "example": "The policy had an adverse impact."
  },
  {
    "cat": "impact",
    "expression": "vital",
    "meaning": "필수적인",
    "example": "Fresh water is vital for survival."
  },
  {
    "cat": "impact",
    "expression": "substantial",
    "meaning": "상당한",
    "example": "There was a substantial increase in the final year."
  },
  {
    "cat": "impact",
    "expression": "negligible",
    "meaning": "무시할 만한",
    "example": "The difference was negligible."
  },
  {
    "cat": "impact",
    "expression": "marginal",
    "meaning": "미미한",
    "example": "There was only a marginal improvement."
  },
  {
    "cat": "impact",
    "expression": "fundamental",
    "meaning": "근본적인",
    "example": "There was a fundamental change in strategy."
  },
  {
    "cat": "impact",
    "expression": "primary",
    "meaning": "주요한",
    "example": "The primary cause was poverty."
  },
  {
    "cat": "impact",
    "expression": "secondary",
    "meaning": "부차적인",
    "example": "This was of secondary importance."
  },
  {
    "cat": "impact",
    "expression": "long-term impact",
    "meaning": "장기적 영향",
    "example": "Consider the long-term impact."
  },
  {
    "cat": "impact",
    "expression": "immediate effect",
    "meaning": "즉각적 효과",
    "example": "The drug had an immediate effect."
  },
  {
    "cat": "impact",
    "expression": "ripple effect",
    "meaning": "파급 효과",
    "example": "The war created a ripple effect."
  },
  {
    "cat": "impact",
    "expression": "widespread",
    "meaning": "광범위한",
    "example": "There was widespread support for the plan."
  },
  {
    "cat": "impact",
    "expression": "dominant",
    "meaning": "우세한, 지배적인",
    "example": "Cars were the dominant mode of transport."
  },
  {
    "cat": "impact",
    "expression": "predominant",
    "meaning": "가장 일반적인, 우세한",
    "example": "English was the predominant language."
  },
  {
    "cat": "analysis",
    "expression": "making it the dominant category",
    "meaning": "그 항목이 우세한 범주가 됨",
    "example": "The percentage of internet users rose to 68%, making it the dominant category in the chart."
  },
  {
    "cat": "analysis",
    "expression": "establishing it as the leading sector",
    "meaning": "선두 부문으로 자리 잡음",
    "example": "Retail sales surged to $500 million, establishing it as the leading sector in consumer expenditure."
  },
  {
    "cat": "analysis",
    "expression": "ranking it first among all categories",
    "meaning": "모든 항목 중 1위에 놓임",
    "example": "Education spending accounted for 35%, ranking it first among all sectors."
  },
  {
    "cat": "analysis",
    "expression": "placing it at the top of the list",
    "meaning": "목록 최상단에 위치함",
    "example": "Manufacturing revenues reached $800 billion, placing it at the top of the list."
  },
  {
    "cat": "analysis",
    "expression": "resulting in a significant lead over A",
    "meaning": "A보다 큰 우위를 만듦",
    "example": "The 10% increase in car ownership resulted in a significant lead over public transport usage."
  },
  {
    "cat": "analysis",
    "expression": "giving it a substantial advantage over A",
    "meaning": "A보다 상당한 우위를 갖게 함",
    "example": "The rise in productivity gave the technology sector a substantial advantage over traditional industries."
  },
  {
    "cat": "analysis",
    "expression": "creating a notable gap between A and B",
    "meaning": "A와 B 사이의 눈에 띄는 격차를 만듦",
    "example": "Urban populations reached 70%, creating a notable gap between rural and urban demographics."
  },
  {
    "cat": "analysis",
    "expression": "marking a dramatic increase",
    "meaning": "큰 증가를 나타냄",
    "example": "The figure climbed to 75%, marking a dramatic increase compared with the previous year."
  },
  {
    "cat": "analysis",
    "expression": "reflecting a sharp rise in demand",
    "meaning": "수요가 크게 늘었음을 보여줌",
    "example": "Smartphone sales exceeded 1 million units, reflecting a sharp rise in demand."
  },
  {
    "cat": "analysis",
    "expression": "indicating a major shift in preference",
    "meaning": "선호의 큰 변화를 보여줌",
    "example": "Sales of electric vehicles grew steadily, indicating a major shift in consumer preference."
  },
  {
    "cat": "analysis",
    "expression": "maintaining its position as the top contributor",
    "meaning": "가장 큰 기여 항목의 위치를 유지함",
    "example": "Healthcare consistently accounted for over 30%, maintaining its position as the top contributor."
  },
  {
    "cat": "analysis",
    "expression": "remaining the dominant choice throughout the period",
    "meaning": "기간 내내 우세한 선택지로 남음",
    "example": "The bus remained the dominant choice for commuters throughout the period."
  },
  {
    "cat": "analysis",
    "expression": "making it the least utilised method",
    "meaning": "가장 적게 사용된 방식이 됨",
    "example": "Only 5% used postal mail, making it the least utilised method of communication.",
    "aliases": [
      "making it the least utilized method"
    ]
  },
  {
    "cat": "analysis",
    "expression": "placing it at the bottom of the ranking",
    "meaning": "순위의 최하단에 위치함",
    "example": "With just 3%, cinema spending was placed at the bottom of the ranking."
  },
  {
    "cat": "analysis",
    "expression": "highlighting its relatively minor role",
    "meaning": "전체에서 역할이 작았음을 보여줌",
    "example": "With only 8%, the sector played a relatively minor role in the overall economy."
  },
  {
    "cat": "analysis",
    "expression": "bringing it close to that of A",
    "meaning": "A의 수치에 가까워짐",
    "example": "The proportion rose to 42%, bringing it close to that of the previous year."
  },
  {
    "cat": "analysis",
    "expression": "narrowing the gap between A and B",
    "meaning": "A와 B 사이의 격차를 줄임",
    "example": "The increase in female enrolment narrowed the gap between male and female students."
  },
  {
    "cat": "analysis",
    "expression": "correlating with a decline in",
    "meaning": "감소와 관련됨",
    "example": "The rise in private car use correlated with a decline in public transport reliance."
  },
  {
    "cat": "analysis",
    "expression": "contributing significantly to",
    "meaning": "에 상당히 기여함",
    "example": "Online retail contributed significantly to the overall growth in sales."
  },
  {
    "cat": "pattern",
    "expression": "A rose steadily from X to Y",
    "meaning": "A가 X에서 Y로 꾸준히 증가했다",
    "example": "The proportion of truck registrations rose steadily from 30% to 45% between 1990 and 2010."
  },
  {
    "cat": "pattern",
    "expression": "A fell sharply to a low of X",
    "meaning": "A가 급격히 하락해 X라는 최저치를 기록했다",
    "example": "Taxi registrations fell sharply to a low of 15% in 2000."
  },
  {
    "cat": "pattern",
    "expression": "A rebounded significantly to reach X",
    "meaning": "A가 크게 회복해 X에 도달했다",
    "example": "The figure rebounded significantly to reach 35% by 2010."
  },
  {
    "cat": "pattern",
    "expression": "A peaked at X",
    "meaning": "A가 X에서 정점에 도달했다",
    "example": "Taxi registrations peaked at 35% in 1980."
  },
  {
    "cat": "pattern",
    "expression": "A hit a low of X",
    "meaning": "A가 X라는 최저치를 기록했다",
    "example": "The figure hit a low of 15% in 2000."
  },
  {
    "cat": "pattern",
    "expression": "A fluctuated between X and Y",
    "meaning": "A가 X와 Y 사이에서 변동했다",
    "example": "Taxi registrations fluctuated between 15% and 35% throughout the period."
  },
  {
    "cat": "pattern",
    "expression": "A remained steady at around X",
    "meaning": "A가 약 X에서 일정하게 유지됐다",
    "example": "Bus registrations remained steady at around 10% for a decade."
  },
  {
    "cat": "pattern",
    "expression": "A held the highest share at X",
    "meaning": "A가 X로 가장 높은 비중을 차지했다",
    "example": "Trucks held the highest share at nearly 50% in 1970."
  },
  {
    "cat": "pattern",
    "expression": "A was the least common category",
    "meaning": "A가 가장 적은 항목이었다",
    "example": "Buses were the least common category, starting at about 5%."
  },
  {
    "cat": "pattern",
    "expression": "A overtook B",
    "meaning": "A가 B를 추월했다",
    "example": "Taxis briefly overtook trucks in 1980."
  },
  {
    "cat": "pattern",
    "expression": "the gap between A and B widened",
    "meaning": "A와 B의 격차가 벌어졌다",
    "example": "The gap between trucks and buses widened from 40 to 42 percentage points."
  },
  {
    "cat": "pattern",
    "expression": "making it the largest contributor",
    "meaning": "그 항목이 가장 큰 기여 항목이 됨",
    "example": "Education spending rose to 35%, making it the largest contributor to total expenditure."
  }
];
function task1ExpressionCategory(){
  try{
    const value=localStorage.getItem(JY_TASK1_EXPRESSION_CATEGORY_KEY) || 'all';
    return JY_TASK1_EXPRESSION_CATEGORY_LABELS[value] ? value : 'all';
  }
  catch(e){ return 'all'; }
}
function setTask1ExpressionCategory(value){
  try{ localStorage.setItem(JY_TASK1_EXPRESSION_CATEGORY_KEY, value || 'all'); }
  catch(e){}
}
function task1ExpressionItemsForCategory(category=task1ExpressionCategory()){
  const key=String(category || 'all');
  const items=JY_TASK1_EXPRESSION_ITEMS.slice();
  return key === 'all' ? items : items.filter(item=>item.cat === key);
}
function task1ExpressionDisplay(itemOrExpression){
  const raw=(itemOrExpression && typeof itemOrExpression === 'object')
    ? (itemOrExpression.display || itemOrExpression.expression || '')
    : itemOrExpression;
  return String(raw || '').replace(/X%/g,'X%').replace(/year/g,'년도');
}
function task1ExpressionKoreanExample(item){
  if(!item) return '';
  if(item.exampleKo) return item.exampleKo;
  const meaning=String(item.meaning || '').trim();
  const cat=String(item.cat || '').trim();
  if(!meaning) return '';
  if(cat === 'rise') return `그래프에서 해당 수치는 “${meaning}”라는 상승 흐름을 보인다.`;
  if(cat === 'recovery') return `그래프에서 해당 수치는 이후 “${meaning}”라는 흐름을 보인다.`;
  if(cat === 'fall') return `그래프에서 해당 수치는 “${meaning}”라는 하락 흐름을 보인다.`;
  if(cat === 'stability') return `그래프에서 해당 수치는 “${meaning}”라는 상태를 보인다.`;
  if(cat === 'modifier') return `수치 변화의 정도는 “${meaning}”로 설명할 수 있다.`;
  if(cat === 'ranking') return `해당 항목은 전체에서 “${meaning}”라는 위치에 있다.`;
  if(cat === 'overtaking') return `두 항목의 순위 변화는 “${meaning}”로 설명할 수 있다.`;
  if(cat === 'gap') return `두 항목 사이의 관계는 “${meaning}”로 설명할 수 있다.`;
  if(cat === 'comparison') return `두 수치의 관계는 “${meaning}”로 연결할 수 있다.`;
  if(cat === 'impact') return `해당 요인은 전체 변화에서 “${meaning}”을 가진다.`;
  if(cat === 'analysis') return `해당 수치는 전체 그래프에서 “${meaning}”을 보여준다.`;
  if(cat === 'pattern') return `한국어 문장 구조: ${meaning}.`;
  return `그래프에서 이 표현은 “${meaning}”라는 뜻으로 쓰인다.`;
}
function task1ExpressionExampleForMode(item, isMeaning){
  return isMeaning ? String(item?.example || '') : task1ExpressionKoreanExample(item);
}
function task1ExpressionKey(value){
  return String(value || '')
    .trim()
    .toLowerCase()
    .replace(/&/g,'and')
    .replace(/[’']/g,"'")
    .replace(/\butilized\b/g,'utilised')
    .replace(/\bstabilize\b/g,'stabilise')
    .replace(/년도/g,'year')
    .replace(/\b(?:19|20)\d{2}\b/g,'year')
    .replace(/\b\d+(?:\.\d+)?\s*%/g,'x%')
    .replace(/x\s+%/g,'x%')
    .replace(/[.,;:()\[\]{}]/g,' ')
    .replace(/[-–—_/]+/g,' ')
    .replace(/\s+/g,' ')
    .trim();
}
function task1ExpressionAnswerKeys(item){
  const keys=[item.expression].concat(item.aliases || []);
  return keys.map(task1ExpressionKey).filter(Boolean);
}
function task1MeaningKey(value){
  return String(value || '').replace(/\s+/g,'').replace(/[.,;:()\[\]{}·]/g,'').trim();
}
function task1MeaningAnswerOk(value, item){
  const answer=task1MeaningKey(value);
  if(!answer) return false;
  const raw=String(item.meaning || '');
  const parts=raw.split(/[\/,,，]/).map(v=>task1MeaningKey(v)).filter(v=>v.length >= 2);
  if(task1MeaningKey(raw) && answer === task1MeaningKey(raw)) return true;
  return parts.some(part=>answer.includes(part) || part.includes(answer));
}
function startTask1ExpressionTest(mode){
  const items=shuffle(task1ExpressionItemsForCategory()).slice();
  task1ExpressionTestSession={round:1, items, mode, active:true, passed:[]};
  renderTask1ExpressionTestBox();
}
function renderTask1ExpressionTest(){
  const selected=task1ExpressionCategory();
  const options=Object.entries(JY_TASK1_EXPRESSION_CATEGORY_LABELS).map(([key,label])=>`<option value="${esc(key)}" ${key===selected?'selected':''}>${esc(label)}</option>`).join('');
  const count=task1ExpressionItemsForCategory(selected).length;
  return `<section class="jy-card jy-task1-expression-card">
    <div class="jy-book-top"><h2 class="jy-book-title">Task 1 표현 시험</h2><span class="jy-page-counter">${count}개</span></div>
    <p class="jy-small">첨부한 IELTS Task 1 표현 문서를 기준으로 구문 시험을 봅니다. 영어 표현 시험에서는 한국어 예문만 보이도록 정리했습니다.</p>
    <div class="jy-task1-expression-controls">
      <label class="jy-label" for="task1-expression-category">범위</label>
      <select class="jy-select" id="task1-expression-category">${options}</select>
      <button class="jy-btn dark" type="button" id="start-task1-expression-test">영어 표현 시험</button>
      <button class="jy-btn" type="button" id="start-task1-meaning-test">뜻 시험</button>
      <button class="jy-btn" type="button" id="reset-task1-expression-test">시험창 비우기</button>
    </div>
    <div id="task1-expression-test-box"></div>
  </section>`;
}
function renderTask1ExpressionTestBox(){
  const box=byId('task1-expression-test-box');
  if(!box) return;
  const s=task1ExpressionTestSession;
  if(!s.items.length){
    box.innerHTML='<div class="jy-note">선택한 범위에 시험 볼 표현이 없습니다.</div>';
    return;
  }
  const isMeaning=s.mode === 'meaning';
  box.innerHTML = `<div class="jy-test-head"><strong>${s.round}회차 ${isMeaning?'뜻 시험':'영어 표현 시험'} · ${esc(JY_TASK1_EXPRESSION_CATEGORY_LABELS[task1ExpressionCategory()] || '전체')}</strong><button class="jy-btn" type="button" id="shuffle-task1-expression-test">표현 섞기</button></div>
  <div class="jy-table-scroll"><table class="jy-table jy-task1-expression-table"><thead><tr><th>번호</th><th>${isMeaning?'영어 표현':'뜻'}</th><th>${isMeaning?'뜻 입력':'영어 표현 입력'}</th><th>${isMeaning?'영어 예문':'한국어 예문'}</th><th>다시 보기</th></tr></thead><tbody>${s.items.map((item,i)=>{
    const prompt=isMeaning ? task1ExpressionDisplay(item) : item.meaning;
    return `<tr><td>${String(i+1).padStart(2,'0')}</td><td><strong>${esc(prompt)}</strong>${item.note?`<div class="jy-task1-expression-note">${esc(item.note)}</div>`:''}</td><td><input class="jy-input" data-task1-answer="${esc(item.expression)}" data-task1-index="${i}" spellcheck="false" autocomplete="off"><div class="jy-word-test-answer" data-task1-answer-note></div></td><td>${esc(task1ExpressionExampleForMode(item, isMeaning))}</td><td><input type="checkbox" data-task1-weak="${i}"></td></tr>`;
  }).join('')}</tbody></table></div>
  <div class="jy-btns"><button class="jy-btn dark" type="button" id="grade-task1-expression-test">채점</button></div><div id="task1-expression-test-result"></div>`;
  const shuffleBtn=byId('shuffle-task1-expression-test');
  if(shuffleBtn) shuffleBtn.onclick=()=>{ task1ExpressionTestSession.items=shuffle(task1ExpressionTestSession.items); renderTask1ExpressionTestBox(); };
  const gradeBtn=byId('grade-task1-expression-test');
  if(gradeBtn) gradeBtn.onclick=gradeTask1ExpressionTest;
}
function gradeTask1ExpressionTest(){
  const s=task1ExpressionTestSession;
  let wrong=[], correct=0, total=0;
  document.querySelectorAll('[data-task1-answer]').forEach(input=>{
    total++;
    const idx=parseInt(input.dataset.task1Index || '0', 10);
    const item=s.items[idx];
    const row=input.closest('tr');
    const weak=row?.querySelector('[data-task1-weak]')?.checked;
    let ok=false;
    if(item){
      ok = s.mode === 'meaning'
        ? task1MeaningAnswerOk(input.value, item)
        : task1ExpressionAnswerKeys(item).includes(task1ExpressionKey(input.value));
    }
    const note=row?.querySelector('[data-task1-answer-note]');
    if(ok && !weak){
      correct++;
      if(note) note.textContent='';
      if(row) row.className='jy-correct';
    }else{
      if(item) wrong.push(item);
      if(note) note.textContent='정답: '+(s.mode === 'meaning' ? item.meaning : task1ExpressionDisplay(item));
      if(row) row.className='jy-wrong';
    }
  });
  const result=byId('task1-expression-test-result');
  wrong=wrong.filter(Boolean);
  if(!wrong.length){
    if(result) result.innerHTML=`<div class="jy-note">${s.round}회차 결과 ${correct}/${total} · 전부 맞았습니다.</div>`;
    task1ExpressionTestSession={round:1,items:[],mode:s.mode,active:false,passed:[]};
    return;
  }
  task1ExpressionTestSession={round:s.round+1,items:shuffle(wrong),mode:s.mode,active:true,passed:[]};
  if(result) result.innerHTML=`<div class="jy-note">${s.round}회차 결과 ${correct}/${total} · 틀린 표현 ${wrong.length}개만 다음 회차로 봅니다.</div><div class="jy-btns"><button class="jy-btn dark" type="button" id="next-task1-expression-round">다음 회차 시험</button></div>`;
  const next=byId('next-task1-expression-round');
  if(next) next.onclick=()=>renderTask1ExpressionTestBox();
}
function bindTask1ExpressionTestPage(){
  if(route() !== 'words' || vocabPageTab() !== 'phrases') return;
  const category=byId('task1-expression-category');
  if(category) category.onchange=()=>{
    setTask1ExpressionCategory(category.value || 'all');
    task1ExpressionTestSession={round:1,items:[],mode:'expression',active:false,passed:[]};
    render();
  };
  const startExpression=byId('start-task1-expression-test');
  if(startExpression) startExpression.onclick=()=>startTask1ExpressionTest('expression');
  const startMeaning=byId('start-task1-meaning-test');
  if(startMeaning) startMeaning.onclick=()=>startTask1ExpressionTest('meaning');
  const reset=byId('reset-task1-expression-test');
  if(reset) reset.onclick=()=>{
    task1ExpressionTestSession={round:1,items:[],mode:'expression',active:false,passed:[]};
    const box=byId('task1-expression-test-box');
    if(box) box.innerHTML='';
  };
  if(task1ExpressionTestSession.active) renderTask1ExpressionTestBox();
}


function part2ProgressKey(kind){
  return kind === 'nouns' ? JY_PART2_NOUN_PROGRESS_KEY : JY_PART2_TEST_PROGRESS_KEY;
}
function part2ItemsForKind(kind){
  return kind === 'nouns' ? JY_PART2_NOUN_ITEMS : JY_PART2_PRIORITY_ITEMS;
}
function part2ReadProgress(kind){
  try{
    const raw=localStorage.getItem(part2ProgressKey(kind));
    const parsed=raw ? JSON.parse(raw) : {};
    return {
      mastered:Array.isArray(parsed.mastered) ? parsed.mastered : [],
      review:Array.isArray(parsed.review) ? parsed.review : []
    };
  }catch(e){ return {mastered:[],review:[]}; }
}
function part2WriteProgress(kind, progress){
  try{
    localStorage.setItem(part2ProgressKey(kind), JSON.stringify({
      mastered:Array.from(new Set(progress.mastered || [])),
      review:Array.from(new Set(progress.review || []))
    }));
  }catch(e){}
}
function part2ResetProgress(kind){
  try{ localStorage.removeItem(part2ProgressKey(kind)); }catch(e){}
}
function part2ItemById(kind, id){
  return part2ItemsForKind(kind).find(item=>String(item.id)===String(id));
}
function part2Stats(kind){
  const items=part2ItemsForKind(kind);
  const progress=part2ReadProgress(kind);
  const mastered=new Set(progress.mastered || []);
  const review=(progress.review || []).filter(id=>!mastered.has(id) && part2ItemById(kind,id));
  return {total:items.length, mastered:mastered.size, review:review.length, remaining:items.filter(item=>!mastered.has(item.id)).length};
}
function part2NormaliseAnswer(value){
  return String(value || '')
    .trim()
    .toLowerCase()
    .replace(/[’‘]/g,"'")
    .replace(/[“”]/g,'"')
    .replace(/\butilized\b/g,'utilised')
    .replace(/\banalyze\b/g,'analyse')
    .replace(/\borganize\b/g,'organise')
    .replace(/[.!?]+$/g,'')
    .replace(/[,;:()\[\]{}]/g,' ')
    .replace(/[-–—_/]+/g,' ')
    .replace(/\s+/g,' ')
    .trim();
}
function part2AnswerOk(value, item){
  const answer=part2NormaliseAnswer(value);
  const keys=[item.answer, item.expression].concat(item.aliases || []).map(part2NormaliseAnswer).filter(Boolean);
  return keys.includes(answer);
}
function part2BuildBatch(kind, round){
  const items=part2ItemsForKind(kind);
  const progress=part2ReadProgress(kind);
  const mastered=new Set(progress.mastered || []);
  const reviewIds=(progress.review || []).filter(id=>!mastered.has(id));
  const reviewItems=[];
  reviewIds.forEach(id=>{ const item=items.find(v=>v.id===id); if(item && !reviewItems.some(v=>v.id===id)) reviewItems.push(item); });
  const fresh=items.filter(item=>!mastered.has(item.id) && !reviewIds.includes(item.id));
  return reviewItems.concat(fresh).slice(0, JY_PART2_TEST_BATCH_SIZE);
}
function startPart2PriorityTest(kind='priority'){
  const items=part2BuildBatch(kind, 1);
  const box=byId(kind === 'nouns' ? 'part2-noun-test-box' : 'part2-priority-test-box');
  if(!items.length){
    if(box) box.innerHTML='<div class="jy-note">시험 볼 항목이 없습니다. 이미 모두 맞힌 상태입니다.</div>';
    return;
  }
  part2PriorityTestSession={round:1,items,active:true,kind};
  renderPart2PriorityTestBox(kind);
}
function part2PromptHeader(kind){
  return kind === 'nouns'
    ? {title:'Part 2 명사 시험', c1:'항목', c2:'뜻', input:'정답 입력'}
    : {title:'Part 2 동사 우선 시험', c1:'한국어 문장', input:'영어 문장 입력'};
}
function renderPart2PriorityTestBox(kind=part2PriorityTestSession.kind || 'priority'){
  const box=byId(kind === 'nouns' ? 'part2-noun-test-box' : 'part2-priority-test-box');
  if(!box) return;
  const s=part2PriorityTestSession;
  const meta=part2PromptHeader(kind);
  if(!s.items.length){ box.innerHTML='<div class="jy-note">시험 볼 항목이 없습니다.</div>'; return; }
  const rows=s.items.map((item,i)=>{
    if(kind === 'nouns'){
      const label=item.label || item.expression || item.answer || '';
      const prompt=item.promptKo || item.meaning || '';
      const groupLabel=item.group==='nounTopic'?'주제별 표현':item.group==='nounPhrase'?'명사 구문':'명사';
      return `<tr><td>${String(i+1).padStart(2,'0')}</td><td><strong>${esc(label)}</strong><div class="jy-small">${esc(groupLabel)}</div></td><td>${esc(prompt)}</td><td><input class="jy-input" data-part2-id="${esc(item.id)}" spellcheck="false" autocomplete="off"><div class="jy-word-test-answer" data-part2-answer-note></div></td><td><input type="checkbox" data-part2-weak="${esc(item.id)}"></td></tr>`;
    }
    return `<tr><td>${String(i+1).padStart(2,'0')}</td><td>${esc(item.promptKo || item.meaning || '')}</td><td><input class="jy-input" data-part2-id="${esc(item.id)}" spellcheck="false" autocomplete="off" placeholder="영어 문장 입력"><div class="jy-word-test-answer" data-part2-answer-note></div></td><td><input type="checkbox" data-part2-weak="${esc(item.id)}"></td></tr>`;
  }).join('');
  const tableHead = kind === 'nouns'
    ? `<tr><th>번호</th><th>${meta.c1}</th><th>${meta.c2}</th><th>${meta.input}</th><th>다시 보기</th></tr>`
    : `<tr><th>번호</th><th>${meta.c1}</th><th>${meta.input}</th><th>다시 보기</th></tr>`;
  box.innerHTML=`<div class="jy-test-head"><strong>${s.round}회차 · ${meta.title} · ${s.items.length}개</strong><button class="jy-btn" type="button" id="shuffle-part2-test">섞기</button></div>
  <div class="jy-table-scroll"><table class="jy-table jy-part2-test-table"><thead>${tableHead}</thead><tbody>${rows}</tbody></table></div>
  <div class="jy-btns"><button class="jy-btn dark" type="button" id="grade-part2-test">채점</button></div><div id="part2-test-result"></div>`;
  const shuffleBtn=byId('shuffle-part2-test');
  if(shuffleBtn) shuffleBtn.onclick=()=>{ part2PriorityTestSession.items=shuffle(part2PriorityTestSession.items); renderPart2PriorityTestBox(kind); };
  const gradeBtn=byId('grade-part2-test');
  if(gradeBtn) gradeBtn.onclick=()=>gradePart2PriorityTest(kind);
}
function gradePart2PriorityTest(kind=part2PriorityTestSession.kind || 'priority'){
  const s=part2PriorityTestSession;
  const progress=part2ReadProgress(kind);
  const mastered=new Set(progress.mastered || []);
  const review=new Set(progress.review || []);
  let correct=0,total=0,wrong=[];
  document.querySelectorAll('[data-part2-id]').forEach(input=>{
    total++;
    const row=input.closest('tr');
    const id=input.dataset.part2Id;
    const item=s.items.find(v=>String(v.id)===String(id));
    const weak=row?.querySelector('[data-part2-weak]')?.checked;
    const ok=item ? part2AnswerOk(input.value, item) : false;
    const note=row?.querySelector('[data-part2-answer-note]');
    if(ok && !weak){
      correct++;
      mastered.add(id);
      review.delete(id);
      if(note) note.textContent='';
      if(row) row.className='jy-correct';
    }else{
      review.add(id);
      wrong.push(id);
      if(note && item) note.textContent='정답: '+item.answer;
      if(row) row.className='jy-wrong';
    }
  });
  part2WriteProgress(kind, {mastered:Array.from(mastered), review:Array.from(review)});
  const nextItems=part2BuildBatch(kind, s.round+1);
  const result=byId('part2-test-result');
  const nextFresh=Math.max(0, nextItems.length - wrong.length);
  if(!nextItems.length){
    if(result) result.innerHTML=`<div class="jy-note">${s.round}회차 결과 ${correct}/${total} · 모든 항목을 완료했습니다.</div>`;
    part2PriorityTestSession={round:1,items:[],active:false,kind};
    return;
  }
  part2PriorityTestSession={round:s.round+1,items:nextItems,active:true,kind};
  if(result) result.innerHTML=`<div class="jy-note">${s.round}회차 결과 ${correct}/${total} · 다음 회차는 오답 ${wrong.length}개와 새 항목 ${nextFresh}개를 합쳐 최대 50개로 봅니다.</div><div class="jy-btns"><button class="jy-btn dark" type="button" id="next-part2-round">다음 회차 시험</button></div>`;
  const next=byId('next-part2-round');
  if(next) next.onclick=()=>renderPart2PriorityTestBox(kind);
}
function renderPart2PriorityTest(){
  const stats=part2Stats('priority');
  return `<section class="jy-card jy-part2-priority-card">
    <div class="jy-book-top"><h2 class="jy-book-title">Part 2 동사 우선 시험</h2><span class="jy-page-counter">${stats.total}개 · 완료 ${stats.mastered}개 · 오답 ${stats.review}개</span></div>
    <p class="jy-small">필수 핵심 동사 100개와 라이팅 유형별 동사구 20개를 먼저 봅니다. 명사 파트는 뒤쪽 버튼으로 분리했습니다. 한 회차는 최대 50개이며, 맞힌 항목은 제외되고 오답은 다음 회차에 남습니다. 대소문자는 채점에 영향을 주지 않습니다.</p>
    <div class="jy-note">예시: 기술은 / 생산성을 향상시킨다. → Technology improves productivity.</div>
    <div class="jy-btns"><button class="jy-btn dark" type="button" id="start-part2-priority-test">50개 시험 시작</button><button class="jy-btn" type="button" id="reset-part2-priority-test">진도 초기화</button></div>
    <div id="part2-priority-test-box"></div>
  </section>`;
}
function renderPart2NounTest(){
  const stats=part2Stats('nouns');
  return `<section class="jy-card jy-part2-noun-card">
    <div class="jy-book-top"><h2 class="jy-book-title">Part 2 명사 시험</h2><span class="jy-page-counter">${stats.total}개 · 완료 ${stats.mastered}개 · 오답 ${stats.review}개</span></div>
    <p class="jy-small">명사 단어, 명사 주제별 표현, 명사 구문은 여기서 따로 봅니다. 예: 공급 → supply, 수요를 충족하다 → meet demand.</p>
    <div class="jy-btns"><button class="jy-btn dark" type="button" id="start-part2-noun-test">50개 시험 시작</button><button class="jy-btn" type="button" id="reset-part2-noun-test">진도 초기화</button></div>
    <div id="part2-noun-test-box"></div>
  </section>`;
}
function renderVocabularyPhraseContent(){
  const tab=vocabPhrasePartTab();
  let body='';
  if(tab === 'part1') body=renderTask1ExpressionTest();
  else if(tab === 'part2-nouns') body=renderPart2NounTest();
  else body=renderPart2PriorityTest();
  return `${vocabPhrasePartTabsHTML(tab)}${body}`;
}
function bindPart2PriorityTestPage(){
  if(route() !== 'words' || vocabPageTab() !== 'phrases') return;
  document.querySelectorAll('[data-vocab-phrase-part]').forEach(btn=>{
    btn.onclick=()=>{
      setVocabPhrasePartTab(btn.dataset.vocabPhrasePart || 'part2-priority');
      task1ExpressionTestSession={round:1,items:[],mode:'expression',active:false,passed:[]};
      part2PriorityTestSession={round:1,items:[],active:false,kind:'priority'};
      render();
    };
  });
  const startPriority=byId('start-part2-priority-test');
  if(startPriority) startPriority.onclick=()=>startPart2PriorityTest('priority');
  const resetPriority=byId('reset-part2-priority-test');
  if(resetPriority) resetPriority.onclick=()=>{ if(confirm('Part 2 동사 우선 시험 진도를 초기화할까요?')){ part2ResetProgress('priority'); part2PriorityTestSession={round:1,items:[],active:false,kind:'priority'}; render(); } };
  const startNoun=byId('start-part2-noun-test');
  if(startNoun) startNoun.onclick=()=>startPart2PriorityTest('nouns');
  const resetNoun=byId('reset-part2-noun-test');
  if(resetNoun) resetNoun.onclick=()=>{ if(confirm('Part 2 명사 시험 진도를 초기화할까요?')){ part2ResetProgress('nouns'); part2PriorityTestSession={round:1,items:[],active:false,kind:'nouns'}; render(); } };
  if(part2PriorityTestSession.active) renderPart2PriorityTestBox(part2PriorityTestSession.kind || 'priority');
}

function renderGrammar(){
  const state=readState();
  const notes=grammarActiveNotes(state);
  const current=grammarCurrentNote(state);
  const currentIndex=current ? Math.max(0, notes.findIndex(n=>String(n.id)===String(current.id))) : -1;
  const title=current?.title || '';
  const html=current?.html || '';
  const files=grammarFilesFor(current?.id || '');
  const done=hasSubmission(activePlan().date,'grammar');
  const counter=current ? `${currentIndex+1} / ${notes.length}` : (notes.length ? `새 페이지 · ${notes.length+1}` : '새 페이지');
  const noteId=current?.id || '';
  const writingOpen=grammarNoteEditorOpen();
  return `<section class="jy-card jy-page-head"><h1 class="jy-page-title">Grammar</h1></section>
  <section class="jy-card jy-grammar-editor-card jy-grammar-single-page">
    <div class="jy-book-top"><h2 class="jy-book-title">Grammar</h2><span class="jy-page-counter">${esc(counter)}</span></div>
    <div class="jy-grammar-editor-head"><span class="jy-mock-badge ${done?'done':''}">${done?'오늘 완료':'오늘 0/1'}</span><button class="jy-btn" type="button" id="toggle-grammar-editor">${writingOpen ? '작성창 닫기' : '작성창 열기'}</button></div>
    <input class="jy-input jy-grammar-title" id="grammar-note-title" value="${esc(title)}" placeholder="제목" autocomplete="off">
    <div id="grammar-writing-panel" class="${writingOpen ? '' : 'jy-hidden'}">
      ${notePageModeHTML('grammar')}
      <div class="jy-grammar-toolbar-wrap">${richToolbarHTML()}</div>
      ${richEditorPagesHTML('mock-review-editor', html, 'jy-grammar-paper', '필요하면 작성', 'grammar', `data-review-id="grammar" data-grammar-note-id="${esc(noteId)}"`)}
    </div>
    <div class="jy-field jy-lecture-photo-field jy-grammar-file-field">
      <label class="jy-label">사진/PDF</label>
      <input class="jy-input" type="file" accept="image/*,.pdf,application/pdf" multiple id="grammar-file-input">
      <div id="grammar-file-gallery">${proofGalleryHTMLFromItems(files, grammarGalleryId(noteId), '첨부 없음')}</div>
    </div>
    <div class="jy-grammar-single-actions">
      <div class="jy-btns"><button class="jy-btn" type="button" data-grammar-prev>이전</button><button class="jy-btn" type="button" data-grammar-next>다음</button></div>
      <div class="jy-btns"><button class="jy-btn dark" type="button" id="grammar-note-save">제출</button><button class="jy-btn" type="button" id="grammar-note-new">노트 추가</button><button class="jy-btn" type="button" id="grammar-note-clear">글 삭제</button>${noteId?`<button class="jy-btn jy-delete" type="button" data-grammar-trash="${esc(noteId)}">삭제</button>`:''}</div>
    </div>
    ${grammarTrashHTML()}
  </section>`;
}
function submittedSkillDraftNotes(section){
  const state=readState();
  const out=[];
  Object.entries(state.days || {}).forEach(([date,day])=>{
    const draft=day?.skillReviewDrafts?.[section];
    const files=normaliseLectureProof({items:draft?.files || []}).items;
    if(!draft) return;
    const hasText=!!grammarPlain(draft.html || '');
    if(!hasText && !files.length) return;
    if(!draft.submittedAt) return;
    const savedAt=draft.submittedAt || draft.filesSavedAt || draft.savedAt || draft.updatedAt || '';
    out.push({
      id:'skilldraft_'+section+'_'+date,
      date,
      section,
      title:draft.source || (SECTION_NAMES[section]+' Wrong Note'),
      text:richHTMLToText(draft.html || ''),
      html:draft.html || '',
      reviewFiles:files,
      savedAt,
      submittedAt:draft.submittedAt
    });
  });
  return out;
}
function submittedSkillStateNotes(section, state=readState()){
  const wanted=String(section || '').trim().toLowerCase();
  return (state.notes || []).filter(note=>{
    const noteSection=String(note?.section || '').trim().toLowerCase();
    if(noteSection !== wanted) return false;
    const text=richHTMLToText(note?.html || note?.text || '').trim();
    const files=normaliseLectureProof({items:note?.reviewFiles || note?.files || []}).items;
    if(!text && !files.length) return false;
    if(note?.draft === true || note?.isDraft === true) return false;
    return true;
  }).map(note=>Object.assign({}, note, {section:wanted}));
}
function notesForSkill(section){
  const state=readState();
  const base=submittedSkillStateNotes(section, state);
  const extra=submittedSkillDraftNotes(section);
  const all=base.concat(extra);
  const seen=new Set();
  const deduped=[];
  all.forEach(n=>{
    const textKey=reviewTextKey(n.html || n.text || '');
    const fileKey=normaliseLectureProof({items:n.reviewFiles || []}).items.map(item=>item.id || item.name || '').join(',');
    const lectureFileKey=n.section === 'lecture_note' ? lectureNoteCodeFromNote(n) : '';
    const key=[n.date, n.section, n.title || '', textKey, fileKey, lectureFileKey].join('|');
    if(!textKey && !fileKey && !lectureFileKey) return;
    if(seen.has(key)) return;
    seen.add(key);
    deduped.push(n);
  });
  return deduped.sort((a,b)=>String(b.savedAt || b.date || '').localeCompare(String(a.savedAt || a.date || '')));
}
function mockReviewNotes(){
  const state=readState();
  const out=[];
  JY_MOCK_TESTS.forEach(def=>{
    const mock=state.mockTests?.[def.id];
    if(!mock) return;
    if(mock.reviewSubmitted !== true || mock.reviewSubmitConfirmed !== true || !mock.reviewSubmittedAt) return;
    if(mock.reviewSubmitSource !== 'mocktest' && mock.reviewSubmissionKind !== 'mock_review') return;
    const hasText=!!grammarPlain(mock.reviewHtml || '');
    const hasFile=!!mock.reviewFile?.name;
    if(!hasText && !hasFile) return;
    out.push({id:'mocknote_'+def.id, mockId:def.id, date:def.date || '', section:'mock_review', title:def.title+' Wrong Note', text:richHTMLToText(mock.reviewHtml || ''), html:mock.reviewHtml || '', mockReviewFile:mock.reviewFile || null, savedAt:mock.reviewSubmittedAt || mock.reviewDraftSavedAt || mock.updatedAt || ''});
  });
  return out.sort((a,b)=>String(b.savedAt || b.date || '').localeCompare(String(a.savedAt || a.date || '')));
}
function noteAttachedFilesHTML(note){
  const files=normaliseLectureProof({items:(note?.reviewFiles || note?.files || []), savedAt:note?.savedAt || note?.updatedAt || ''}).items;
  const parts=[];
  if(files.length){
    let id='note_files_'+String(note?.id || Date.now()).replace(/[^a-zA-Z0-9_]/g,'_');
    if(String(note?.section || '') === 'grammar' && note?.id) id=grammarGalleryId(note.id);
    else if(String(note?.section || '') === 'phrase' && note?.id) id=phraseGalleryId(note.id);
    else if(String(note?.id || '').startsWith('skilldraft_') && note?.date && note?.section) id=skillReviewGalleryId(note.date, note.section);
    parts.push(`<div class="jy-note-proof-book ${noteToneClass(note, note?.section)}">${proofGalleryHTMLFromItems(files, id, '첨부 없음', {readOnly:true, allowDelete:true, controlsTop:true})}</div>`);
  }
  if(note?.mockReviewFile?.name && note?.mockId){
    const targetId='mock-review-note-file-'+String(note.id || note.mockId).replace(/[^a-zA-Z0-9_]/g,'_');
    parts.push(`<div class="jy-note-proof-book jy-note-tone-wrong"><div class="jy-mock-file-preview jy-review-file-preview-compact" id="${esc(targetId)}" data-mock-review-note-file="${esc(note.mockId)}"><div class="jy-proof-loading">파일 불러오는 중</div></div></div>`);
  }
  return parts.join('');
}

function noteExtraFilesHTML(note, section){
  let html='';
  if(note && (section==='lecture_note' || note.section==='lecture_note')) html += lectureNoteProofForNote(note);
  html += noteAttachedFilesHTML(note);
  return html;
}


function noteToneClass(note, section){
  const sec=String(note?.section || section || '');
  if(sec === 'grammar') return 'jy-note-tone-grammar';
  if(sec === 'phrase') return 'jy-note-tone-phrase';
  if(sec === 'lecture_note') return 'jy-note-tone-lecture';
  if(sec === 'mock_review' || ['listening','reading','writing','speaking'].includes(sec)) return 'jy-note-tone-wrong';
  return '';
}
function noteHasVisibleContent(note){
  return !!richHTMLToText(note?.html || note?.text || '').trim();
}
function noteHTMLHasExplicitPages(html){
  const wrapper=document.createElement('div');
  wrapper.innerHTML=String(html || '');
  return !!wrapper.querySelector('[data-jy-page-break], .jy-editor-page-break');
}
function noteBodyBookHTML(note){
  const html=noteContentHTML(note);
  if(!noteHTMLHasExplicitPages(html)) return `<div class="jy-submitted-content">${html}</div>`;
  const pages=splitHTMLPagesByBreak(html).map(page=>String(page || '').trim() || '<br>');
  if(!pages.length) return `<div class="jy-submitted-content"><br></div>`;
  const spreadCount=Math.max(1, Math.ceil(pages.length / 2));
  const spreadIndex=noteBodySpreadIndex(note, spreadCount);
  const firstIndex=spreadIndex * 2;
  const secondIndex=firstIndex + 1;
  const first=pages[firstIndex] || '<br>';
  const second=pages[secondIndex] || '<br>';
  const key=noteBodySpreadKey(note);
  const firstLabel=(firstIndex + 1) + '쪽';
  const secondLabel=(secondIndex + 1) + '쪽';
  const secondPage=secondIndex < pages.length ? `<div class="jy-note-body-page"><span>${esc(secondLabel)}</span><div>${second}</div></div>` : `<div class="jy-note-body-page jy-note-body-page-empty"><span>${esc(secondLabel)}</span><div><br></div></div>`;
  const controls=spreadCount > 1 ? `<div class="jy-note-page-controls jy-notes-page-controls jy-note-body-turn-controls"><button class="jy-btn jy-proof-arrow" type="button" data-note-body-prev="${esc(key)}" aria-label="이전 쪽">‹</button><span>${esc(firstIndex + 1)}-${esc(Math.min(secondIndex + 1, pages.length))} / ${esc(pages.length)}</span><button class="jy-btn jy-proof-arrow" type="button" data-note-body-next="${esc(key)}" aria-label="다음 쪽">›</button></div>` : '';
  return `${controls}<div class="jy-note-body-spread"><div class="jy-note-body-page"><span>${esc(firstLabel)}</span><div>${first}</div></div>${secondPage}</div>${controls}`;
}
function recentNotes(section){
  const notes=notesForSkill(section);
  return notes.length ? notes.map(n=>{
    const isLectureNote = n.section === 'lecture_note';
    return `<div class="jy-submitted ${isLectureNote?'jy-lecture-note-linked':''}"><p class="jy-page-meta">${esc(n.date)} · ${esc(n.savedAt||'')}${isLectureNote?' · 강의 노트':''}</p><strong>${esc(n.title||SECTION_NAMES[section])}</strong><br><div class="jy-submitted-content">${noteContentHTML(n)}</div>${noteExtraFilesHTML(n, section)}</div>`;
  }).join('') : '<div class="jy-note">아직 제출한 노트가 없습니다.</div>';
}
function sortNotesForDisplay(notes){
  return (notes || []).slice().sort((a,b)=>String(b.updatedAt || b.savedAt || b.date || '').localeCompare(String(a.updatedAt || a.savedAt || a.date || '')));
}
function lectureNotesForNotesPage(){
  const state=readState();
  const out=[];
  const add=(note)=>{
    if(!note) return;
    const id=String(note.id || '').trim();
    if(!id) return;
    out.push(Object.assign({}, note, {section:'lecture_note'}));
  };
  (state.notes || []).filter(n=>n && n.section==='lecture_note').forEach(add);
  Object.entries(state.days || {}).forEach(([date, day])=>{
    const codes=new Set();
    Object.keys(day?.lectureNotes || {}).forEach(code=>codes.add(String(code)));
    Object.keys(day?.lectureProofs || {}).forEach(code=>codes.add(String(code)));
    codes.forEach(code=>{
      const record=lectureNoteRecordFromDay(day, code);
      const proof=normaliseLectureProof(day?.lectureProofs?.[code]);
      const hasText=!!String(record.text || '').trim();
      const hasProof=proof.items.length > 0;
      if(!hasText && !hasProof) return;
      const lecture=findLecture(code);
      add({
        id:lectureNoteId(date, code),
        date,
        lectureDate:date,
        lectureCode:String(code),
        section:'lecture_note',
        title:String(code)+' · '+String(lecture?.title || '강의 노트'),
        text:hasText ? record.text : '',
        html:hasText ? record.html : '',
        savedAt:String(record.savedAt || proof.savedAt || date || '')
      });
    });
  });
  const seen=new Set();
  return sortNotesForDisplay(out).filter(note=>{
    const key=String(note.id || '') || [note.date,note.lectureCode,note.title,note.savedAt].join('|');
    if(seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}
function wrongNoteSections(){
  return ['listening','reading','writing','speaking','mock_review'];
}
function wrongNoteSectionLabel(section){
  const labels={
    listening:'Listening',
    reading:'Reading',
    writing:'Writing',
    speaking:'Speaking',
    mock_review:'Mock Test'
  };
  return labels[section] || section;
}
function wrongNoteItemButtonLabel(note, idx){
  return String(idx + 1);
}
function wrongNotesForSection(section, state=readState()){
  if(section === 'mock_review') return mockReviewNotes();
  if(['listening','reading','writing','speaking'].includes(section)){
    return sortNotesForDisplay(submittedSkillStateNotes(section, state).concat(submittedSkillDraftNotes(section)));
  }
  return [];
}
function wrongNotesForNotesPage(){
  const state=readState();
  const out=[];
  wrongNoteSections().forEach(section=>{
    wrongNotesForSection(section, state).forEach(note=>out.push(note));
  });
  const seen=new Set();
  return sortNotesForDisplay(out).filter(note=>{
    const textKey=reviewTextKey(note.html || note.text || '');
    const fileKey=normaliseLectureProof({items:note.reviewFiles || note.files || []}).items.map(item=>item.id || item.name || '').join(',');
    const key=String(note.id || '') || [note.date,note.section,note.title,textKey,fileKey,note.savedAt].join('|');
    if(seen.has(key)) return false;
    if(!textKey && !fileKey && !note.mockReviewFile?.name) return false;
    seen.add(key);
    return true;
  });
}
function notesForBook(section){
  const state=readState();
  if(section==='study_log') return studyLogNotes();
  if(section==='grammar') return grammarActiveNotes(state);
  if(section==='phrase') return phraseActiveNotes(state);
  if(section==='lecture_note') return lectureNotesForNotesPage();
  if(section==='wrong_note') return wrongNotesForNotesPage();
  if(section==='mock_review') return mockReviewNotes();
  if(['listening','reading','writing','speaking'].includes(section)) return sortNotesForDisplay(submittedSkillStateNotes(section, state).concat(submittedSkillDraftNotes(section)));
  return sortNotesForDisplay((state.notes||[]).filter(n=>n.section===section));
}
function notesPageSections(){
  return ['lecture_note','grammar','phrase','wrong_note','study_log'];
}
function notesPageLabel(section){
  const labels={
    lecture_note:'Lecture Notes',
    grammar:'Grammar Notes',
    phrase:'Phrase Practice Notes',
    wrong_note:'Wrong Notes',
    listening:'Listening',
    reading:'Reading',
    writing:'Writing',
    speaking:'Speaking',
    mock_review:'Mock Test',
    study_log:'Study Log'
  };
  return labels[section] || SECTION_NAMES[section] || section;
}
function notesPageTone(section, note){
  if(section==='wrong_note') return 'jy-note-tone-wrong';
  return noteToneClass(note || null, section);
}
function notesPageIndexKey(section){
  return 'notes_'+String(section || '');
}
function notesPageCurrentIndex(section, total){
  const key=notesPageIndexKey(section);
  let idx=parseInt(notePageIndex[key] || 0, 10);
  if(!Number.isFinite(idx)) idx=0;
  if(total <= 0) return 0;
  idx=Math.max(0, Math.min(idx, total-1));
  notePageIndex[key]=idx;
  return idx;
}

function noteBodySpreadKey(note){
  return 'body_'+String(note?.id || [note?.section, note?.date, note?.title, note?.savedAt].filter(Boolean).join('_') || 'note').replace(/[^a-zA-Z0-9_\-]/g,'_');
}
function noteBodySpreadIndex(note, spreadCount){
  const key=notesPageIndexKey(noteBodySpreadKey(note));
  let idx=parseInt(notePageIndex[key] || 0, 10);
  if(!Number.isFinite(idx)) idx=0;
  if(spreadCount <= 0) return 0;
  idx=Math.max(0, Math.min(idx, spreadCount-1));
  notePageIndex[key]=idx;
  return idx;
}
function notesTopControlsHTML(key, note, idx, total, deleteSection){
  const safeKey=String(key || '');
  const noteId=String(note?.id || '');
  const count=Math.max(0, Number(total || 0));
  const pageText=count ? `${Math.max(1, Number(idx || 0) + 1)} / ${count}` : '';
  const deleteBtn=noteId ? `<button class="jy-btn jy-delete" type="button" data-notes-delete="${esc(noteId)}" data-notes-delete-section="${esc(deleteSection || note?.section || key || '')}">삭제</button>` : '';
  return `<div class="jy-note-page-controls jy-notes-page-controls jy-notes-top-controls">
    <button class="jy-btn" type="button" data-notes-prev="${esc(safeKey)}" ${count > 1 ? '' : 'disabled'}>Previous</button>
    <span>${esc(pageText)}</span>
    <button class="jy-btn" type="button" data-notes-next="${esc(safeKey)}" ${count > 1 ? '' : 'disabled'}>Next</button>
    ${deleteBtn}
  </div>`;
}

function renderNotes(){
  const sections=notesPageSections();
  if(!notesPageSelectedSection || !sections.includes(notesPageSelectedSection)){
    notesPageSelectedSection='lecture_note';
  }
  const buttons=sections.map(sec=>{
    const active=notesPageSelectedSection===sec;
    return `<button class="jy-btn ${active?'dark':''}" type="button" data-notes-section-select="${esc(sec)}">${esc(notesPageLabel(sec))}</button>`;
  }).join('');
  return `<section class="jy-card jy-page-head"><h1 class="jy-page-title">Notes</h1></section>
  <section class="jy-card jy-notes-type-bar">${buttons}</section>
  ${renderSelectedNotesPanel()}`;
}
function renderSelectedNotesPanel(){
  const section=notesPageSelectedSection;
  if(!section) return '';
  if(section === 'wrong_note') return renderWrongNotesPanel();
  const notes=notesForBook(section);
  const tone=notesPageTone(section, notes[0] || null);
  const panelClass=['jy-card','jy-notes-selected-panel','jy-notes-single-panel',tone, section==='grammar' ? 'jy-grammar-book' : '', section==='phrase' ? 'jy-phrase-book' : '', section==='lecture_note' ? 'jy-lecture-book' : ''].filter(Boolean).join(' ');
  if(!notes.length){
    const emptyClass=['jy-page-card',tone, section==='grammar' ? 'jy-grammar-page-card' : '', section==='phrase' ? 'jy-phrase-page-card' : '', section==='lecture_note' ? 'jy-lecture-page-card' : ''].filter(Boolean).join(' ');
    return `<section class="${panelClass}">${notesPanelHeadHTML(notesPageLabel(section), notesResourceLinkHTML(section))}<div class="${emptyClass}">No notes yet</div></section>`;
  }
  const idx=notesPageCurrentIndex(section, notes.length);
  const note=notes[idx];
  const controls=notesTopControlsHTML(section, note, idx, notes.length, section);
  return `<section class="${panelClass}">
    ${notesPanelHeadHTML(notesPageLabel(section), notesResourceLinkHTML(section))}
    ${controls}
    ${renderSelectedNoteContent(section, note, idx, notes.length)}
  </section>`;
}
function renderWrongNotesPanel(){
  const state=readState();
  const valid=wrongNoteSections();
  if(!notesPageSelectedItem || !valid.includes(notesPageSelectedItem)){
    notesPageSelectedItem='listening';
  }
  const selected=notesPageSelectedItem;
  const panelClass='jy-card jy-notes-selected-panel jy-notes-single-panel jy-note-tone-wrong jy-wrong-notes-panel';
  const buttons=valid.map(sec=>`<button class="jy-btn ${selected===sec?'dark':''}" type="button" data-wrong-note-select="${esc(sec)}">${esc(wrongNoteSectionLabel(sec))}</button>`).join('');
  const notes=wrongNotesForSection(selected, state);
  let body='';
  if(notes.length){
    const key='wrong_note_'+selected;
    const idx=notesPageCurrentIndex(key, notes.length);
    const note=notes[idx];
    const controls=notesTopControlsHTML(key, note, idx, notes.length, note.section || selected);
    body=`${notesPanelHeadHTML(wrongNoteSectionLabel(selected), wrongNoteResourceLinkHTML(selected))}${controls}${renderSelectedNoteContent('wrong_note', note, idx, notes.length)}`;
  }else{
    body=`${notesPanelHeadHTML(wrongNoteSectionLabel(selected), wrongNoteResourceLinkHTML(selected))}<div class="jy-page-card jy-note-entry-page jy-note-tone-wrong jy-notes-empty-page">No notes yet</div>`;
  }
  return `<section class="${panelClass}">${notesPanelHeadHTML('Wrong Notes')}<div class="jy-notes-type-bar jy-wrong-note-tabs">${buttons}</div>${body}</section>`;
}
function renderSelectedNoteContent(section, n, idx, total){
  const noteTone=notesPageTone(section, n);
  const proofHTML=noteExtraFilesHTML(n, n.section || section);
  const hasBody=noteHasVisibleContent(n);
  const fileOnlyClass=(!hasBody && proofHTML) ? 'jy-notes-file-only' : '';
  const pageClass=['jy-page-card','jy-note-entry-page','jy-notes-single-view',noteTone, fileOnlyClass, section==='grammar' ? 'jy-grammar-page-card' : '', section==='phrase' ? 'jy-phrase-page-card' : '', section==='lecture_note' ? 'jy-lecture-page-card' : ''].filter(Boolean).join(' ');
  const metaText=[n.date || '', n.updatedAt || n.savedAt || ''].filter(Boolean).join(' · ');
  const meta=(hasBody && metaText) ? `<div class="jy-page-meta">${esc(metaText)}</div>` : '';
  const titleHTML=(hasBody && section!=='study_log') ? `<strong>${esc(n.title||notesPageLabel(section))}</strong>` : '';
  const bodyHTML=hasBody ? noteBodyBookHTML(n) : '';
  return `<article class="${pageClass}">${meta}${titleHTML}${bodyHTML}${proofHTML}</article>`;
}
function deleteNotesPageNote(section, noteId){
  section=String(section || '');
  noteId=String(noteId || '');
  if(!noteId) return false;

  if(section === 'study_log' && noteId.startsWith('study_log_')){
    const date=noteId.replace(/^study_log_/, '');
    const timerState=readStudyTimerState();
    if(timerState.days && timerState.days[date]) delete timerState.days[date];
    if(timerState.current && timerState.current.date === date) timerState.current=null;
    writeStudyTimerState(timerState);
    return true;
  }

  const state=readState();
  const displayed=(notesForBook(section) || []).find(n=>String(n.id || '')===noteId) || null;
  const stored=(state.notes || []).find(n=>String(n.id || '')===noteId) || null;
  const note=displayed || stored || null;
  const now=new Date().toLocaleString('ko-KR');
  let changed=false;

  if(noteId.startsWith('lecture_extra_') || /^([a-z]+)_\d{4}-\d{2}-\d{2}_note_/.test(noteId)){
    const before=(state.notes || []).length;
    state.notes=(state.notes || []).filter(n=>String(n.id || '')!==noteId);
    if(before !== state.notes.length){
      writeState(state);
      return true;
    }
    return false;
  }

  if(section === 'grammar'){
    const grammarNote=grammarFindNote(state,noteId);
    if(grammarNote){
      grammarNote.deleted=true;
      grammarNote.deletedAt=now;
      grammarNote.updatedAt=now;
      if(String(state.grammarEditingId)===noteId) state.grammarEditingId='';
      changed=true;
    }
  }else if(section === 'phrase'){
    const phraseNote=phraseFindNote(state,noteId);
    if(phraseNote){
      phraseNote.deleted=true;
      phraseNote.deletedAt=now;
      phraseNote.updatedAt=now;
      if(String(state.phraseEditingId)===noteId) state.phraseEditingId='';
      changed=true;
    }
  }else if(section === 'mock_review' && noteId.startsWith('mocknote_')){
    const mockId=noteId.replace(/^mocknote_/, '');
    const mock=state.mockTests && state.mockTests[mockId];
    if(mock){
      mock.reviewHtml='';
      mock.reviewSubmitted=false;
      mock.reviewSubmittedAt='';
      mock.reviewDraftSavedAt='';
      mock.updatedAt=now;
      changed=true;
    }
  }else if((note && note.section === 'lecture_note') || section === 'lecture_note' || noteId.startsWith('lecture_note_')){
    const code=lectureNoteCodeFromNote(note) || (noteId.match(/^lecture_note_\d{4}-\d{2}-\d{2}_(.+)$/) || [,''])[1];
    const date=lectureNoteDateFromNote(note) || (noteId.match(/^lecture_note_(\d{4}-\d{2}-\d{2})_/) || [,''])[1];
    if(date && code){
      const day=dayState(state,date);
      if(day.lectureNotes && day.lectureNotes[String(code)]) delete day.lectureNotes[String(code)];
      if(day.lectureProofs && day.lectureProofs[String(code)]) delete day.lectureProofs[String(code)];
    }
    const before=(state.notes || []).length;
    state.notes=(state.notes || []).filter(n=>String(n.id || '')!==noteId);
    changed=true;
  }else if(noteId.startsWith('skilldraft_')){
    const m=noteId.match(/^skilldraft_([^_]+)_(\d{4}-\d{2}-\d{2})$/);
    if(m){
      const skill=m[1];
      const date=m[2];
      const day=dayState(state,date);
      if(day.skillReviewDrafts && day.skillReviewDrafts[skill]){
        normaliseLectureProof({items:day.skillReviewDrafts[skill].files || []}).items.forEach(item=>{ if(item && item.id) deleteLectureFileRecord(item.id); });
        delete day.skillReviewDrafts[skill];
      }
      if(day.submissions) day.submissions[skill]=false;
      changed=true;
    }
  }else{
    const before=(state.notes || []).length;
    state.notes=(state.notes || []).filter(n=>String(n.id || '')!==noteId);
    if(before !== state.notes.length) changed=true;
    if(note && ['listening','reading','writing','speaking'].includes(String(note.section || ''))){
      const date=String(note.date || '');
      const skill=String(note.section || '');
      if(date && skill){
        const day=dayState(state,date);
        if(day.skillReviewDrafts && day.skillReviewDrafts[skill]){
          normaliseLectureProof({items:day.skillReviewDrafts[skill].files || []}).items.forEach(item=>{ if(item && item.id) deleteLectureFileRecord(item.id); });
          delete day.skillReviewDrafts[skill];
        }
        normaliseLectureProof({items:note.reviewFiles || []}).items.forEach(item=>{ if(item && item.id) deleteLectureFileRecord(item.id); });
        if(day.submissions) day.submissions[skill]=false;
        changed=true;
      }
    }
  }

  if(changed) writeState(state);
  return changed;
}

function graduateDiff(date){
  if(!date) return null;
  return Math.ceil((new Date(date+'T00:00:00') - new Date(todayISO()+'T00:00:00'))/(1000*60*60*24));
}

function graduateDday(date){
  const diff = graduateDiff(date);
  if(diff === null) return '';
  return diff >= 0 ? 'D-' + diff : 'D+' + Math.abs(diff);
}

function graduateScheduleItems(){
  return [
    ['RCA 디파짓 원래 기한', '2026-04-30', '연장 요청 중'],
    ['Goldsmiths 등록금 감면 기준일', '2026-05-15', '이날까지 납부 시 10% 감면 메모'],
    ['RCA 영어 제출', '2026-06-09', 'IELTS 6.5 overall, each 5.5'],
    ['IELTS Academic 시험', JY_EXAM_DATE, 'Academic'],
    ['UAL CSM 오퍼 응답', '2026-07-31', 'Round 2 기준 accept 또는 decline'],
    ['UAL 장학금 결과 발표', '2026-08-07', 'International Postgraduate £10,000 Scholarship 결과 확인'],
    ['UAL CSM 디파짓', '2026-08-14', 'Round 2 기준 £4,000'],
    ['UAL CSM 조건 증빙', '2026-08-31', '영어 조건 포함 offer condition evidence 제출'],
    ['Goldsmiths 영어 제출', '2026-08-31', 'IELTS 6.5 overall, each 6.0'],
    ['UAL CSM 수업 시작', '2026-09-21', 'MA Narrative Environments 시작'],
    ['UAL CSM 과정 종료', '2028-06-16', 'MA Narrative Environments 종료']
  ].map(item=>({title:item[0], date:item[1], memo:item[2], diff:graduateDiff(item[1])}))
   .filter(item=>item.diff === null || item.diff >= -7);
}

function schoolTimeBlock(){
  return `<section class="jy-card jy-time-card"><strong>현재 시간</strong><p>한국 ${todayDot()} ${timeInZone('Asia/Seoul')} · 영국 ${timeInZone('Europe/London')}</p></section>`;
}

function graduateImportantCards(){
  const items = graduateScheduleItems();
  return `<section class="jy-card"><div class="jy-table-scroll"><table class="jy-table jy-deadline-table"><thead><tr><th>날짜</th><th>D-day</th><th>일정</th><th>메모</th></tr></thead><tbody>${items.map(item=>{
    const cls = item.diff >= 0 && item.diff <= 7 ? ' class="jy-dday-soon"' : (item.diff < 0 ? ' class="jy-dday-past"' : '');
    return `<tr${cls}><td>${dateDot(item.date)}</td><td>${graduateDday(item.date)}</td><td>${esc(item.title)}</td><td>${esc(item.memo)}</td></tr>`;
  }).join('')}</tbody></table></div></section>`;
}

function schoolOfferSummary(){
  return `<section class="jy-card"><div class="jy-table-scroll"><table class="jy-table"><tbody>
    <tr><th>과정</th><td>MA Narrative Environments, Central Saint Martins, UAL</td></tr>
    <tr><th>오퍼 상태</th><td>조건부 합격, 오퍼 수락 완료</td></tr>
    <tr><th>UAL Student ID</th><td>26002921</td></tr>
    <tr><th>기간</th><td>2년 full time, face to face</td></tr>
    <tr><th>시작과 종료</th><td>2026.09.21 시작, 2028.06.16 종료</td></tr>
    <tr><th>학비 상태와 금액</th><td>Overseas fee status, 2026/27 학비 £22,175</td></tr>
    <tr><th>장학금</th><td>UAL International Postgraduate £10,000 Scholarship 신청 완료. 결과 발표일은 2026.08.07 금요일입니다.</td></tr>
    <tr><th>영어 조건</th><td>IELTS Academic 6.5 overall, 각 영역 5.5 이상. 시험일 2026.06.25, 공식 증빙 마감일 2026.08.31, 성적 확인 목표일 2026.07.03, 제출 목표일 2026.07.06.</td></tr>
    <tr><th>디파짓</th><td>£4,000. 공식 마감일 2026.08.14, 납부 목표일 2026.08.09.</td></tr>
    <tr><th>비자 자금</th><td>2026.07.01부터 비자용 자금 28일 연속 유지 시작. Student visa 신청일 기준 28일 이상 보유 기준.</td></tr>
    <tr><th>CAS Shield</th><td>2026.08.12 입력 최종 확인 목표. 조건 충족, 디파짓 납부, 추가 정보 제출 후 CAS 발급 단계 확인.</td></tr>
    <tr><th>학생비자</th><td>2026.08.16 CAS 수령 즉시 신청 목표. 비자 결과 확인 목표일은 2026.09.06.</td></tr>
  </tbody></table></div></section>`;
}

function csmExecutionScheduleItems(){
  return [
    {
      id:'visa-money-start',
      date:'2026-07-01',
      homeTitle:'비자용 자금 유지 시작',
      task:'비자용 돈을 계좌에 넣고 유지 시작',
      official:'비자 신청일 기준 28일 이상 보유',
      basis:'Student visa 신청 시 필요한 금액은 28일 연속 보유해야 함',
      sourceTitle:'GOV.UK money',
      sourceUrl:'https://www.gov.uk/student-visa/money'
    },
    {
      id:'ielts-score-secured',
      date:'2026-07-03',
      homeTitle:'IELTS 성적 확인',
      task:'IELTS 성적 확인',
      official:'2026.08.31',
      basis:'6월 25일 시험 이후 성적 확인 목표일',
      sourceTitle:'UAL offer holders',
      sourceUrl:'https://www.arts.ac.uk/study-at-ual/apply/postgraduate/postgraduate-offer-holders-hub/accept-your-offer'
    },
    {
      id:'ielts-upload',
      date:'2026-07-06',
      homeTitle:'IELTS 성적 제출',
      task:'IELTS 성적 제출',
      official:'2026.08.31',
      basis:'공식 영어 조건 증빙 마감일보다 충분히 앞서 제출',
      sourceTitle:'UAL offer holders',
      sourceUrl:'https://www.arts.ac.uk/study-at-ual/apply/postgraduate/postgraduate-offer-holders-hub/accept-your-offer'
    },
    {
      id:'offer-response',
      date:'2026-07-31',
      homeTitle:'오퍼 응답 기한',
      task:'오퍼 응답 상태 확인',
      official:'2026.07.31',
      basis:'Round 2 offer response deadline',
      sourceTitle:'UAL offer',
      sourceUrl:'https://www.arts.ac.uk/study-at-ual/apply/postgraduate/postgraduate-offer-holders-hub/accept-your-offer'
    },
    {
      id:'scholarship-result',
      date:'2026-08-07',
      homeTitle:'장학금 결과 발표',
      task:'UAL 장학금 결과 확인',
      official:'2026.08.07',
      basis:'UAL International Postgraduate £10,000 Scholarship 결과 발표일',
      sourceTitle:'UAL 장학금',
      sourceUrl:'https://www.arts.ac.uk/study-at-ual/fees-and-funding/scholarships-search/ual-international-postgraduate-10%2C000-scholarships'
    },
    {
      id:'deposit-payment',
      date:'2026-08-09',
      homeTitle:'디파짓 £4,000 납부',
      task:'디파짓 £4,000 납부',
      official:'2026.08.14',
      basis:'공식 디파짓 마감일보다 5일 앞서 납부',
      sourceTitle:'UAL offer',
      sourceUrl:'https://www.arts.ac.uk/study-at-ual/apply/postgraduate/postgraduate-offer-holders-hub/accept-your-offer'
    },
    {
      id:'cas-shield-final-check',
      date:'2026-08-12',
      homeTitle:'CAS Shield 최종 확인',
      task:'CAS Shield 입력 최종 확인',
      official:'CAS 발급 전 완료 필요',
      basis:'오퍼 수락, 디파짓 납부, 조건 충족, 추가 정보 제출 후 CAS 발급 단계 진행',
      sourceTitle:'UAL offer holders',
      sourceUrl:'https://www.arts.ac.uk/study-at-ual/apply/postgraduate/postgraduate-offer-holders-hub/accept-your-offer'
    },
    {
      id:'student-visa-apply',
      date:'2026-08-16',
      homeTitle:'학생비자 신청 목표',
      task:'CAS 받는 즉시 학생비자 신청',
      official:'CAS 발급 후 신청 가능',
      basis:'Student visa 신청에는 CAS 번호가 필요함',
      sourceTitle:'GOV.UK student visa',
      sourceUrl:'https://www.gov.uk/student-visa'
    },
    {
      id:'visa-result-check',
      date:'2026-09-06',
      homeTitle:'비자 결과 확인 목표',
      task:'비자 결과 확인 목표',
      official:'신청 후 보통 3주',
      basis:'영국 밖에서 Student visa를 신청하면 보통 3주 안에 결과가 나옴',
      sourceTitle:'GOV.UK student visa',
      sourceUrl:'https://www.gov.uk/student-visa'
    },
    {
      id:'course-start',
      date:'2026-09-21',
      homeTitle:'CSM 과정 시작',
      task:'과정 시작',
      official:'2026.09.21',
      basis:'MA Narrative Environments 시작일',
      sourceTitle:'UAL offer',
      sourceUrl:'https://www.arts.ac.uk/study-at-ual/apply/postgraduate/postgraduate-offer-holders-hub/accept-your-offer'
    }
  ].map(item=>Object.assign({important:true}, item, {diff:graduateDiff(item.date)}))
   .filter(item=>item.diff === null || item.diff >= -7)
   .sort((a,b)=>String(a.date).localeCompare(String(b.date)));
}

function csmScheduleItems(){
  return csmExecutionScheduleItems();
}

function csmImportantCards(){
  const items = csmScheduleItems();
  return `<section class="jy-card"><div class="jy-table-scroll"><table class="jy-table jy-deadline-table"><thead><tr><th>완료</th><th>내가 실행할 날짜</th><th>D-day</th><th>해야 할 일</th><th>공식 마감일 또는 공식 기준일</th><th>근거</th></tr></thead><tbody>${items.map(item=>{
    const cls = item.diff < 0 ? ' class="jy-dday-past"' : (item.diff <= 7 ? ' class="jy-dday-soon"' : '');
    const importantClass = item.important ? ' class="jy-important-cell"' : '';
    const done = csmCheckDone(item.id);
    const task = done ? `<span style="color:var(--muted);text-decoration:line-through;">${esc(item.task)}</span>` : esc(item.task);
    return `<tr${cls}><td><div class="jy-box clickable ${done?'done':''}" data-csm-check="${esc(item.id)}"></div></td><td${importantClass}>${dateDot(item.date)}</td><td>${graduateDday(item.date)}</td><td${importantClass}>${task}</td><td>${esc(item.official)}</td><td>${esc(item.basis)}</td></tr>`;
  }).join('')}</tbody></table></div></section>`;
}

function csmMainSummary()
{
  return `<section class="jy-card jy-csm-main">
    <p class="jy-page-meta">Central Saint Martins · University of the Arts London</p>
    <h2 class="jy-card-title">MA Narrative Environments</h2>
  </section>
  ${schoolOfferSummary()}`;
}

function csmCheckDone(id){
  const state=readState();
  if(!state.schoolChecks) state.schoolChecks={};
  return !!state.schoolChecks[id];
}

function toggleCsmCheck(id){
  const state=readState();
  if(!state.schoolChecks) state.schoolChecks={};
  state.schoolChecks[id] = !state.schoolChecks[id];
  writeState(state);
}

function csmActionTable(){
  const rows = csmExecutionScheduleItems();
  return `<h2 class="jy-section-title">CSM 진행 체크</h2>
  <section class="jy-card"><div class="jy-table-scroll"><table class="jy-table"><thead><tr><th>완료</th><th>내가 실행할 날짜</th><th>해야 할 일</th><th>공식 마감일 또는 공식 기준일</th><th>메모</th></tr></thead><tbody>${rows.map(row=>{
    const done = csmCheckDone(row.id);
    return `<tr><td><div class="jy-box clickable ${done?'done':''}" data-csm-check="${esc(row.id)}"></div></td><td>${dateDot(row.date)}</td><td>${done ? `<span style="color:var(--muted);text-decoration:line-through;">${esc(row.task)}</span>` : esc(row.task)}</td><td>${esc(row.official)}</td><td>${esc(row.basis)}</td></tr>`;
  }).join('')}</tbody></table></div></section>`;
}


function csmFocusSections(){
  return `<h2 class="jy-section-title">CSM 중심 정리</h2>
  <section class="jy-card"><div class="jy-table-scroll"><table class="jy-table"><tbody>
    <tr><th>선택 이유</th><td>2년 동안 작업 언어를 정리하고, 전시와 공간 안에서 서사, 리서치, 관객 경험이 함께 작동하는 방향을 구체화할 수 있음.</td></tr>
    <tr><th>작업 방향</th><td>문화와 기억, 공간의 감각을 오늘의 기술과 매체로 다시 경험하게 만드는 디렉팅.</td></tr>
    <tr><th>과정 성격</th><td>공간 서사, 내러티브 환경, 인터랙티브 스토리, 시스템 디자인, speculative design 중심.</td></tr>
    <tr><th>구성</th><td>Unit 1 Foundations, Unit 2 The Collaborative Unit, Unit 3 Major Project Research, Unit 4 Major Project Development and Presentation.</td></tr>
    <tr><th>기회</th><td>live projects, industry study, cross college collaboration, lectures and workshops, final showcase.</td></tr>
    <tr><th>시설</th><td>Digital Labs, CAD suite, Mixed Reality Lab, Physical Computing Lab, Photography studios, 3D capture, 3D Make Digital, Digital Fabrication Bureau.</td></tr>
    <tr><th>진로 방향</th><td>전시 디자인, 공간 경험, 박물관과 문화 경험, 브랜드 경험, 인터랙티브 환경, 공간 디렉팅.</td></tr>
  </tbody></table></div></section>`;
}

function csmScholarshipTimeline(){
  return '';
}

function csmOfficialSourceButtons(){
  const links = [
    {title:'UAL 장학금', url:'https://www.arts.ac.uk/study-at-ual/fees-and-funding/scholarships-search/ual-international-postgraduate-10%2C000-scholarships'},
    {title:'UAL 오퍼와 CAS', url:'https://www.arts.ac.uk/study-at-ual/apply/postgraduate/postgraduate-offer-holders-hub/accept-your-offer'},
    {title:'GOV.UK 비자 자금', url:'https://www.gov.uk/student-visa/money'},
    {title:'GOV.UK 학생비자', url:'https://www.gov.uk/student-visa'}
  ];
  return `<section class="jy-card"><h3 class="jy-card-title">공식 링크</h3><div class="jy-btns">${links.map(item=>`<a class="jy-btn" href="${esc(item.url)}" target="_blank" rel="noopener">${esc(item.title)}</a>`).join('')}</div></section>`;
}

function csmUsefulLinks(){
  const links = [
    {title:'CSM 위치와 캠퍼스', url:'https://www.arts.ac.uk/colleges/central-saint-martins/about-us/find-us', memo:'King’s Cross 캠퍼스 주소와 교통'},
    {title:'UAL 전체 지도', url:'https://www.arts.ac.uk/campus-maps', memo:'학교와 기숙사 위치 확인'},
    {title:'CSM College maps', url:'https://www.arts.ac.uk/colleges/central-saint-martins/student-life-at-csm', memo:'King’s Cross 내부 지도 PDF'},
    {title:'UAL Accommodation Services', url:'https://www.arts.ac.uk/study-at-ual/accommodation-services', memo:'기숙사 신청 기본 페이지'},
    {title:'기숙사 신청 방법', url:'https://www.arts.ac.uk/study-at-ual/accommodation-services/booking-a-room-in-halls', memo:'신청 순서와 offer schedule 확인'},
    {title:'기숙사 예약 FAQ', url:'https://hallslife.arts.ac.uk/story/34400138/faqs-for-booking-a-room', memo:'2026/27 booking open 일정 확인'},
    {title:'오퍼 수락과 CAS 안내', url:'https://www.arts.ac.uk/study-at-ual/apply/postgraduate/postgraduate-offer-holders-hub/accept-your-offer', memo:'CAS 발급 조건 확인'},
    {title:'Student visa 안내', url:'https://www.arts.ac.uk/study-at-ual/international/immigration-and-visas/student-visa', memo:'학생비자 준비와 체류 조건 확인'},
    {title:'UAL £10,000 장학금', url:'https://www.arts.ac.uk/study-at-ual/fees-and-funding/scholarships-search/ual-international-postgraduate-10%2C000-scholarships', memo:'장학금 조건과 결과 발표일 확인'}
  ];
  return `<h2 class="jy-section-title">필요 링크</h2>
  <section class="jy-card"><div class="jy-table-scroll"><table class="jy-table"><thead><tr><th>항목</th><th>링크</th><th>메모</th></tr></thead><tbody>${links.map(item=>`<tr><td>${esc(item.title)}</td><td><a class="jy-section-link" href="${esc(item.url)}" target="_blank" rel="noopener">열기</a></td><td>${esc(item.memo)}</td></tr>`).join('')}</tbody></table></div></section>`;
}

function otherSchoolsPanel(){
  return `<div class="jy-btns"><button class="jy-btn" type="button" data-school-toggle="other-schools-panel">다른 학교 현황 확인</button></div>
  <section class="jy-card jy-school-hidden" id="other-schools-panel">
    <h2 class="jy-card-title">RCA와 Goldsmiths 보관</h2>
    <div class="jy-table-scroll"><table class="jy-table"><thead><tr><th>대학원</th><th>현재 상태</th><th>디파짓</th><th>장학금과 혜택</th><th>영어 조건</th><th>영어 제출</th></tr></thead><tbody>
      <tr><th>RCA</th><td>조건부 합격, 오퍼 수락</td><td>£2,000<br>원래 납부 기한 2026.04.30 · ${graduateDday('2026-04-30')}<br>연장 요청 중</td><td>2026.05.01 · ${graduateDday('2026-05-01')}<br>President & Vice-Chancellor’s International £9,000 자동 심사<br>Pokémon Scholarship 신청 가능</td><td>IELTS 6.5 overall<br>각 5.5 이상</td><td>2026.06.09 · ${graduateDday('2026-06-09')}</td></tr>
      <tr><th>Goldsmiths</th><td>조건부 합격, 오퍼 수락</td><td>£4,000<br>입학 전 납부 필요</td><td>2026.05.15 · ${graduateDday('2026-05-15')}<br>이날까지 납부 시 10% 등록금 감면 조건 메모</td><td>IELTS 6.5 overall<br>각 6.0 이상</td><td>2026.08.31 · ${graduateDday('2026-08-31')}</td></tr>
    </tbody></table></div>
  </section>`;
}

function schoolComparisonPanel(){
  return `<div class="jy-btns"><button class="jy-btn" type="button" data-school-toggle="school-comparison-panel">세 학교 비교 확인</button></div>
  <section class="jy-card jy-school-hidden" id="school-comparison-panel">
    <h2 class="jy-card-title">세 학교 비교</h2>
    <div class="jy-table-scroll"><table class="jy-table jy-school-detail-table"><thead><tr><th>구분</th><th>CSM MA Narrative Environments</th><th>RCA MA Digital Direction</th><th>Goldsmiths MA Virtual and Augmented Reality</th></tr></thead><tbody>
      <tr><th>과정 성격</th><td>공간 서사, 내러티브 환경, 인터랙티브 스토리, 시스템 디자인, speculative design 중심</td><td>디지털 스토리텔링, XR, VR, AR, AI, immersive narrative 중심</td><td>XR 디자인, 그래픽, 사용자 경험, 컴퓨팅 기반 제작 중심</td></tr>
      <tr><th>기간과 시작</th><td>2년 extended full-time, 180학점<br>2026.09.21 시작, 2028.06.16 종료</td><td>1년 full-time, 45주, 180학점<br>2026년 9월 시작</td><td>1년 full-time, 180학점<br>2026.09.21 시작, 2027.09.21 종료</td></tr>
      <tr><th>주요 구성</th><td>Unit 1 Foundations, Unit 2 Collaborative Unit, Unit 3 Major Project Research, Unit 4 Major Project Development and Presentation</td><td>Critical Stories, AcrossRCA, Making Worlds with Others, Immersive Enquiries, Independent Research Project</td><td>Augmented Reality, Virtual Reality, Advanced Topics in VR and AR, optional modules, Internship Project 또는 Research Project</td></tr>
      <tr><th>기회</th><td>live projects, industry study, cross college collaboration, lectures, workshops, final showcase</td><td>Outernet partnership, Festival of Communication, industry lectures, critiques, masterclasses</td><td>paid placement, VR and AR company talks, SeeVR Lab, internship route, hackathons, exhibitions</td></tr>
      <tr><th>시설</th><td>Digital Labs, CAD suite, Mixed Reality Lab, Physical Computing Lab, 3D Make Digital, Digital Fabrication Bureau</td><td>White City, CAT Zones, Alienware PC와 Mac, Unity, Unreal, lens based media, audio resources, 3D Making</td><td>VR Lab, MoCap, SIML projection space, UX Lab, Computing facilities, fabrication lab</td></tr>
      <tr><th>비용 메모</th><td>국제학생 학비 연 £22,175, 2년 과정. £10,000 장학금 신청 완료, 결과 대기</td><td>국제학생 학비 £38,650, 1년 과정. RCA 장학금 신청과 자동 심사 메모</td><td>국제학생 학비 £21,000, 1년 과정. 2026.05.15까지 최소 예치금 납부 시 10% 등록금 감면 메모</td></tr>
    </tbody></table></div>
  </section>`;
}

function renderSchool(){
  return `<section class="jy-card jy-page-head"><h1 class="jy-page-title">Central Saint Martins</h1></section>
  ${csmMainSummary()}
  <h2 class="jy-section-title">CSM 중요 일정</h2>
  ${csmImportantCards()}
  ${csmOfficialSourceButtons()}
  ${csmUsefulLinks()}
  ${csmFocusSections()}
  ${otherSchoolsPanel()}
  ${schoolComparisonPanel()}`;
}

function schoolStatusTable(limit){
  const allItems = csmScheduleItems();
  const items = typeof limit === 'number' ? allItems.slice(0, limit) : allItems;
  return `<section class="jy-card"><h3 class="jy-card-title">Central Saint Martins 중요 일정</h3><div class="jy-table-scroll"><table class="jy-table jy-deadline-table"><thead><tr><th>완료</th><th>내가 실행할 날짜</th><th>D-day</th><th>해야 할 일</th><th>공식 마감일 또는 공식 기준일</th></tr></thead><tbody>${items.map(item=>{
    const cls = item.diff < 0 ? ' class="jy-dday-past"' : (item.diff <= 7 ? ' class="jy-dday-soon"' : '');
    const importantClass = item.important ? ' class="jy-important-cell"' : '';
    const done = csmCheckDone(item.id);
    const task = done ? `<span style="color:var(--muted);text-decoration:line-through;">${esc(item.task)}</span>` : esc(item.task);
    return `<tr${cls}><td><div class="jy-box clickable ${done?'done':''}" data-csm-check="${esc(item.id)}"></div></td><td${importantClass}>${dateDot(item.date)}</td><td>${graduateDday(item.date)}</td><td${importantClass}>${task}</td><td>${esc(item.official)}</td></tr>`;
  }).join('')}</tbody></table></div></section>`;
}

function bindPage(r)
{
  const plan=activePlan();

  document.querySelectorAll('[data-lecture-code]').forEach(btn=>{
    btn.onclick=()=>{ toggleLecture(plan.date, btn.dataset.lectureCode); render(); };
  });
  document.querySelectorAll('[data-section]').forEach(row=>{
    if(row.classList.contains('jy-check')) row.onclick=()=>{ toggleSubmission(plan.date, row.dataset.section); render(); };
  });
  const addTodo=byId('add-custom-todo');
  if(addTodo) addTodo.onclick=()=>{
    const text=prompt('오늘 할 일을 적어주세요.');
    if(!text || !text.trim()) return;
    addTodoForDate(plan.date, text);
    render();
  };
  const addTomorrowTodo=byId('add-tomorrow-todo');
  if(addTomorrowTodo) addTomorrowTodo.onclick=()=>{
    const tomorrow = nextPlanDate(plan.date);
    const text=prompt('내일 할 일을 적어주세요.');
    if(!text || !text.trim()) return;
    addTodoForDate(tomorrow, text);
    alert('내일 일정에 추가했습니다.');
  };
  const schedulePrev=byId('schedule-prev');
  if(schedulePrev) schedulePrev.onclick=()=>{ moveActiveDate(-1); render(); };
  const scheduleNext=byId('schedule-next');
  if(scheduleNext) scheduleNext.onclick=()=>{ moveActiveDate(1); render(); };
  const scheduleToday=byId('schedule-today');
  if(scheduleToday) scheduleToday.onclick=()=>{ clearManualActiveDate(); render(); };
  document.querySelectorAll('[data-todo-id]').forEach(box=>{
    box.onclick=(e)=>{ e.stopPropagation(); const state=readState(); const day=dayState(state,plan.date); day.todos.forEach(t=>{ if(String(t.id)===String(box.dataset.todoId)) t.done=!t.done; }); writeState(state); render(); };
  });
  document.querySelectorAll('[data-delete-id]').forEach(btn=>{
    btn.onclick=(e)=>{ e.stopPropagation(); const state=readState(); const day=dayState(state,plan.date); day.todos=day.todos.filter(t=>String(t.id)!==String(btn.dataset.deleteId)); writeState(state); render(); };
  });
  document.querySelectorAll('[data-section-todo-id]').forEach(box=>{
    box.onclick=(e)=>{
      e.stopPropagation();
      toggleSectionTodo(plan.date, box.dataset.sectionTodoSection, box.dataset.sectionTodoId);
      render();
    };
  });
  document.querySelectorAll('[data-delete-section-todo]').forEach(btn=>{
    btn.onclick=(e)=>{
      e.stopPropagation();
      deleteSectionTodo(plan.date, btn.dataset.sectionTodoSection, btn.dataset.deleteSectionTodo);
      render();
    };
  });
  const fullScheduleBtn=byId('toggle-full-schedule');
  const fullSchedulePanel=byId('full-schedule-panel');
  if(fullScheduleBtn && fullSchedulePanel){
    fullScheduleBtn.onclick=()=>{
      fullSchedulePanel.classList.toggle('jy-hidden');
      fullScheduleBtn.textContent=fullSchedulePanel.classList.contains('jy-hidden')?'열기':'닫기';
    };
  }
  document.querySelectorAll('[data-school-toggle]').forEach(btn=>{
    btn.onclick=()=>{
      const panel=byId(btn.dataset.schoolToggle);
      if(!panel) return;
      panel.classList.toggle('jy-school-hidden');
      const isHidden=panel.classList.contains('jy-school-hidden');
      if(btn.dataset.schoolToggle==='other-schools-panel') btn.textContent=isHidden?'다른 학교 현황 확인':'다른 학교 현황 닫기';
      if(btn.dataset.schoolToggle==='school-comparison-panel') btn.textContent=isHidden?'세 학교 비교 확인':'세 학교 비교 닫기';
    };
  });
  document.querySelectorAll('[data-csm-check]').forEach(box=>{
    box.onclick=(e)=>{
      e.stopPropagation();
      toggleCsmCheck(box.dataset.csmCheck);
      render();
    };
  });
  document.querySelectorAll('[data-score]').forEach(card=>card.onclick=()=>renderScoreTable(card.dataset.score));
  bindLecturePage();
  bindWordsPage();
  bindSkillPage();
  bindNotesPage();
  bindGrammarPage();
  bindPhrasePage();
  bindMockTestPage();
  bindNotePageModeControls();
}

function bindLecturePage(){
  const panel=byId('all-lecture-panel');
  const toggle=byId('toggle-all-lectures');
  if(toggle && panel) toggle.onclick=()=>{
    panel.classList.toggle('jy-hidden');
    toggle.textContent = panel.classList.contains('jy-hidden') ? '전체 강의 목록 확인' : '전체 강의 목록 닫기';
    if(!panel.classList.contains('jy-hidden')) renderAllLectureTable();
  };
}

function isFullDone(code){
  const state=readState();
  return Object.keys(state.days||{}).some(d=>state.days[d]?.lectures?.[String(code)]);
}
function renderAllLectureTable(){
  const body=byId('all-lecture-body');
  if(!body) return;
  const groups=[];
  JY_FULL_LECTURES.forEach(item=>{
    let group=groups.find(g=>g.course===item.course);
    if(!group){ group={course:item.course, items:[]}; groups.push(group); }
    group.items.push(item);
  });
  body.innerHTML = groups.map(group=>{
    const doneCount=group.items.filter(item=>isFullDone(item.code)).length;
    return `<details class="jy-lecture-group"><summary><span>${esc(group.course)}</span><small>${doneCount}/${group.items.length}</small></summary>
      <div class="jy-table-scroll"><table class="jy-table jy-lecture-table jy-lecture-table-compact"><thead><tr><th>완료</th><th>강의</th><th>강의 시간</th></tr></thead><tbody>${group.items.map(item=>{
        const done=isFullDone(item.code);
        return `<tr><td><button class="jy-code ${done?'done':''}" type="button" data-full-code="${esc(item.code)}" data-date="${esc(item.date||activeDate())}">${done?'완료':'체크'}</button></td><td>${esc(compactLectureLine(item.code,item,'강의'))}</td><td>${esc(item.duration||'')}</td></tr>`;
      }).join('')}</tbody></table></div></details>`;
  }).join('');
  body.querySelectorAll('[data-full-code]').forEach(btn=>btn.onclick=()=>{ toggleLecture(btn.dataset.date || activeDate(), btn.dataset.fullCode); renderAllLectureTable(); updateFullPct(); });
  updateFullPct();
}
function updateFullPct(){
  const total=JY_FULL_LECTURES.length;
  const done=JY_FULL_LECTURES.filter(l=>isFullDone(l.code)).length;
  const pct=total?Math.round(done/total*100):0;
  if(byId('all-lecture-pct')) byId('all-lecture-pct').textContent=pct+'%';
  if(byId('all-lecture-count')) byId('all-lecture-count').textContent=done+'/'+total;
  if(byId('all-lecture-progress')) byId('all-lecture-progress').style.width=pct+'%';
}


function bindWordsPage(){
  document.querySelectorAll('[data-vocab-tab]').forEach(btn=>{
    btn.onclick=()=>{
      setVocabPageTab(btn.dataset.vocabTab || 'words');
      task1ExpressionTestSession={round:1,items:[],mode:'expression',active:false,passed:[]};
      render();
    };
  });
  bindTask1ExpressionTestPage();
  bindPart2PriorityTestPage();

  const save=byId('save-word-study');
  if(save) save.onclick=()=>{
    setSubmission(activeDate(),'words',true,filledWords().map(w=>w.word+(w.meaning?' - '+w.meaning:'')).join('\n'));
    alert('오늘 단어 학습 완료로 저장되었습니다.');
  };

  const toggleWordView=byId('toggle-vocab-word-view');
  if(toggleWordView) toggleWordView.onclick=()=>{
    const view=getVocabStudyView();
    setVocabStudyView('showWord', !view.showWord);
    render();
  };

  const toggleMeaningView=byId('toggle-vocab-meaning-view');
  if(toggleMeaningView) toggleMeaningView.onclick=()=>{
    const view=getVocabStudyView();
    setVocabStudyView('showMeaning', !view.showMeaning);
    render();
  };

  document.querySelectorAll('[data-vocab-practice]').forEach(input => {
    input.oninput = () => {
      setVocabPracticeValue(activeDate(), input.dataset.vocabKey, input.dataset.vocabPractice, input.value);
      input.classList.remove('correct','wrong');
      const result=input.parentElement?.querySelector('[data-vocab-practice-result]');
      if(result){
        result.textContent='';
        result.className='jy-vocab-practice-result';
      }
      const status=byId('vocab-practice-grade-status');
      if(status) status.textContent='';
    };
  });

  const gradePractice=byId('grade-vocab-practice');
  if(gradePractice) gradePractice.onclick=gradeVocabPractice;

  const resetPracticeCheck=byId('reset-vocab-practice-check');
  if(resetPracticeCheck) resetPracticeCheck.onclick=resetVocabPracticeCheck;

  document.querySelectorAll('[data-memorise-word-check],[data-memorise-meaning-check]').forEach(input => {
    input.onchange = () => {
      const field = input.hasAttribute('data-memorise-word-check') ? 'word' : 'meaning';
      const key = input.dataset.memoriseWordCheck || input.dataset.memoriseMeaningCheck;
      const updated = setVocabFieldCorrect(key, field, input.checked);
      const row = input.closest('tr');
      if(row) row.classList.toggle('jy-vocab-fully-memorised-row', isVocabFullyMemorised(updated));
    };
  });

  const toggle=byId('toggle-vocab-upload');
  const panel=byId('vocab-upload-panel');
  if(toggle && panel) toggle.onclick=()=> panel.classList.toggle('jy-hidden');

  const file=byId('vocab-file');
  const paste=byId('vocab-paste');
  if(file && paste){
    file.onchange=()=>{
      const selected=file.files && file.files[0];
      if(!selected) return;
      const reader=new FileReader();
      reader.onload=()=>{ paste.value=String(reader.result || ''); };
      reader.readAsText(selected);
    };
  }

  const appendBank=byId('append-vocab-bank');
  if(appendBank) appendBank.onclick=()=>{
    const rows=parseVocabTable(byId('vocab-paste')?.value || '');
    if(!rows.length) return alert('추가할 단어가 없습니다.');
    const total=appendVocabBank(rows);
    alert('단어를 추가했습니다. 현재 단어장 '+total+'개');
    render();
  };

  const replaceBank=byId('replace-vocab-bank');
  if(replaceBank) replaceBank.onclick=()=>{
    const rows=parseVocabTable(byId('vocab-paste')?.value || '');
    if(!rows.length) return alert('교체할 단어가 없습니다.');
    saveVocabBank(rows);
    alert('단어장을 '+rows.length+'개로 교체했습니다.');
    render();
  };

  const clearBank=byId('clear-vocab-bank');
  if(clearBank) clearBank.onclick=()=>{
    clearVocabBank();
    alert('기본 단어장으로 되돌렸습니다.');
    render();
  };

  const resetProgress=byId('reset-vocab-progress');
  if(resetProgress) resetProgress.onclick=()=>{
    if(!confirm('외운 단어와 다시 외울 단어 기록을 모두 초기화할까요?')) return;
    resetVocabProgress();
    render();
  };

  const startEn=byId('start-word-test-en'); if(startEn) startEn.onclick=()=>startWordTest('english');
  const startKo=byId('start-word-test-ko'); if(startKo) startKo.onclick=()=>startWordTest('korean');
  const reset=byId('reset-word-test'); if(reset) reset.onclick=()=>{ wordTestSession={round:1,items:[],mode:'english',active:false,passed:[]}; if(byId('word-test-box')) byId('word-test-box').innerHTML=''; };
}

function startWordTest(mode){
  const testDate=wordTestStudyDate();
  let items = shuffle(wordTestWords());
  if(!items.length){
    const box=byId('word-test-box');
    if(box) box.innerHTML='<div class="jy-note">전날 외운 단어가 아직 없습니다.</div>';
    return;
  }
  if(mode === 'english' && !items.some(w => String(w.meaning || '').trim())){
    const box=byId('word-test-box');
    if(box) box.innerHTML='<div class="jy-note">영단어 시험은 한글 뜻이 있는 단어로 진행됩니다. 단어장에 뜻을 추가해 주세요.</div>';
    return;
  }
  wordTestSession={round:1,items,mode,active:true,passed:[]};
  renderWordTest();
}

function shuffle(arr){ return arr.slice().sort(()=>Math.random()-0.5); }

function renderWordTest(){
  const box=byId('word-test-box');
  if(!box) return;
  const s=wordTestSession;
  if(!s.items.length){ box.innerHTML='<div class="jy-note">시험 볼 단어가 없습니다.</div>'; return; }
  const isKo=s.mode==='korean';

  box.innerHTML = `<div class="jy-test-head"><strong>${s.round}회차 ${isKo?'한글 뜻 시험':'영단어 시험'} · 오늘 단어</strong><button class="jy-btn" type="button" id="shuffle-test">단어 섞기</button></div>
  <div class="jy-table-scroll"><table class="jy-table"><thead><tr><th>번호</th><th>${isKo?'영단어':'한글 뜻'}</th><th>${isKo?'한글 뜻 입력':'영단어 입력'}</th><th>다 못 외움</th></tr></thead><tbody>${s.items.map((w,i)=>{
    const prompt = isKo ? vocabDisplayWord(w.word) : w.meaning;
    return `<tr><td>${String(i+1).padStart(2,'0')}</td><td><strong>${esc(prompt)}</strong></td><td><input class="jy-input" data-answer="${esc(isKo?w.meaning:w.word)}" data-word="${esc(w.word)}" spellcheck="false" autocomplete="off"><div class="jy-word-test-answer" data-test-answer-note></div></td><td><input type="checkbox" data-weak="${esc(w.word)}"></td></tr>`;
  }).join('')}</tbody></table></div>
  <div class="jy-btns"><button class="jy-btn dark" type="button" id="grade-test">채점</button></div><div id="word-test-result"></div>`;
  byId('shuffle-test').onclick=()=>{ wordTestSession.items=shuffle(wordTestSession.items); renderWordTest(); };
  byId('grade-test').onclick=gradeWordTest;
}

function norm(v){ return String(v||'').trim().toLowerCase().replace(/\s+/g,' '); }

function gradeWordTest(){
  const s=wordTestSession;
  let wrong=[], passedNow=[], correct=0, total=0;

  document.querySelectorAll('[data-answer]').forEach(input=>{
    total++;
    const row=input.closest('tr');
    const weak=row.querySelector('[data-weak]')?.checked;
    const item=s.items.find(w=>w.word===input.dataset.word);
    let ok=false;
    if(item){
      if(s.mode === 'korean') ok=vocabPracticeCheckDetail('meaning', input.value, item).ok;
      else ok=vocabWordAnswerKeys(item.word).includes(normaliseWordKey(input.value));
    }
    const note=row.querySelector('[data-test-answer-note]');
    if(ok && !weak){
      correct++;
      if(item) passedNow.push(item);
      if(note) note.textContent='';
    }else{
      if(item) wrong.push(item);
      if(note) note.textContent='정답: '+(s.mode === 'korean' ? item.meaning : vocabDisplayWord(item.word));
    }
    row.className=(ok && !weak)?'jy-correct':'jy-wrong';
  });

  const result=byId('word-test-result');
  wrong=dedupeWords(wrong.filter(Boolean));
  passedNow=dedupeWords(passedNow.filter(Boolean));
  const passedAll = (s.passed || []).concat(passedNow);

  if(passedNow.length){
    if(s.mode === 'korean') markVocabFieldCorrect(passedNow, 'meaning');
    else markVocabFieldCorrect(passedNow, 'word');
  }
  if(wrong.length) markWordsReview(wrong);

  if(!wrong.length){
    result.innerHTML=`<div class="jy-note">${s.round}회차 결과 ${correct}/${total} · 전부 맞았습니다.</div>`;
    wordTestSession={round:1,items:[],mode:s.mode,active:false,passed:[]};
    return;
  }

  wordTestSession={round:s.round+1,items:shuffle(wrong),mode:s.mode,active:true,passed:passedAll};
  result.innerHTML=`<div class="jy-note">${s.round}회차 결과 ${correct}/${total} · 못 외운 단어 ${wrong.length}개만 다음 회차로 봅니다. 이 단어들은 다음날 복습 단어로 다시 표시됩니다.</div><div class="jy-btns"><button class="jy-btn dark" type="button" id="next-round">다음 회차 시험</button></div>`;
  byId('next-round').onclick=()=>renderWordTest();
}

function bindSkillPage(){
  const section=route();
  if(!['listening','reading','writing','speaking'].includes(section)) return;
  document.querySelectorAll('[data-skill-lecture-code]').forEach(btn=>btn.onclick=()=>{ toggleLecture(activePlan().date, btn.dataset.skillLectureCode); render(); });

  const solveStart=byId('section-solve-start');
  if(solveStart) solveStart.onclick=()=>{
    startSectionSolveTimer(activePlan().date, solveStart.dataset.sectionSolveSection);
    render();
  };
  const solveStop=byId('section-solve-stop');
  if(solveStop) solveStop.onclick=()=>{
    stopSectionSolveTimer(activePlan().date, solveStop.dataset.sectionSolveSection);
    render();
  };
  document.querySelectorAll('[data-section-solve-delete]').forEach(btn=>btn.onclick=()=>{
    deleteSectionSolveSession(activePlan().date, btn.dataset.sectionSolveSection, btn.dataset.sectionSolveDelete);
    render();
  });

  const addSectionBtn=byId('add-section-todo');
  if(addSectionBtn) addSectionBtn.onclick=()=>{
    const text=prompt('추가할 할 일을 적어주세요.');
    if(!text || !text.trim()) return;
    addSectionTodo(activePlan().date, addSectionBtn.dataset.sectionTodoSection, text);
    render();
  };

  const lectureNoteSelect=byId('skill-lecture-note-code');
  const lectureNoteEditor=byId('skill-lecture-note-editor');
  const lectureEditorToggle=byId('toggle-skill-lecture-editor');
  const lectureWritingPanel=byId('skill-lecture-writing-panel');
  if(lectureEditorToggle && lectureWritingPanel){
    lectureEditorToggle.onclick=()=>{
      const open=lectureWritingPanel.classList.contains('jy-hidden');
      lectureWritingPanel.classList.toggle('jy-hidden', !open);
      lectureEditorToggle.textContent=open ? '작성창 닫기' : '작성창 열기';
      setLectureNoteEditorOpen(open);
      if(open && lectureNoteEditor) lectureNoteEditor.focus();
    };
  }
  if(lectureNoteSelect && lectureNoteEditor){
    bindLectureRichEditor();
    lectureNoteSelect.onchange=()=>{
      const code=lectureNoteSelect.value;
      setActiveLectureNoteCode(activePlan().date, code);
      setRichPageEditorsHTML('skill-lecture-note-editor', lectureNoteHTMLFor(activePlan().date, code), 'lecture');
      const gallery=byId('skill-lecture-proof-gallery');
      if(gallery) gallery.innerHTML=lectureProofGalleryHTML(activePlan().date, code);
      bindLectureProofGalleryControls();
    };
  }

  const submitLectureNote=byId('submit-skill-lecture-note');
  if(submitLectureNote) submitLectureNote.onclick=()=>{
    const code=byId('skill-lecture-note-code')?.value;
    const editor=byId('skill-lecture-note-editor');
    if(!code) return alert('강의를 선택해 주세요.');
    const lectureHtml=combinedRichEditorHTMLForSave('skill-lecture-note-editor');
    const hasText=!!richHTMLToText(lectureHtml || '').trim();
    const hasProof=lectureProofDone(activePlan().date, code);
    if(!hasText && !hasProof) return alert('글 또는 파일이 필요합니다.');
    if(hasText){
      addLectureTextPages(activePlan().date, code, lectureHtml);
      clearRichPageEditors('skill-lecture-note-editor');
    }else{
      saveLectureNote(activePlan().date, code, '', true);
    }
    render();
  };

  const lectureTextToPages=byId('lecture-text-to-pages');
  if(lectureTextToPages) lectureTextToPages.onclick=()=>{
    const code=byId('skill-lecture-note-code')?.value;
    const editor=byId('skill-lecture-note-editor');
    if(!code || !editor) return;
    richNormaliseTables(editor);
    const html=combinedRichEditorHTMLForSave('skill-lecture-note-editor');
    if(!richHTMLToText(html).trim()) return alert('글이 필요합니다.');
    const count=addLectureTextPages(activePlan().date, code, html);
    if(!count) return alert('문서화할 글이 없습니다.');
    clearRichPageEditors('skill-lecture-note-editor');
    render();
  };

  const lectureNoteNew=byId('lecture-note-new');
  if(lectureNoteNew) lectureNoteNew.onclick=startNewLectureNote;

  const clearSkillLectureNote=byId('clear-skill-lecture-note');
  if(clearSkillLectureNote) clearSkillLectureNote.onclick=()=>{
    const code=byId('skill-lecture-note-code')?.value;
    if(!code) return;
    clearLectureNote(activePlan().date, code);
    render();
  };

  const lectureProofInput=byId('skill-lecture-proof-input');
  if(lectureProofInput) lectureProofInput.onchange=()=>{
    const code=byId('skill-lecture-note-code')?.value;
    if(!code || !lectureProofInput.files || !lectureProofInput.files.length) return;
    setActiveLectureNoteCode(activePlan().date, code);
    saveLectureProof(activePlan().date, code, lectureProofInput.files).then(()=>{
      lectureProofInput.value='';
      render();
    }).catch(err=>alert(err.message || err));
  };

  const clearSkillLectureProof=byId('clear-skill-lecture-proof');
  if(clearSkillLectureProof) clearSkillLectureProof.onclick=()=>{
    const code=byId('skill-lecture-note-code')?.value;
    if(!code) return;
    clearLectureProof(activePlan().date, code);
    render();
  };

  bindLectureProofGalleryControls();

  const skillReviewTextToPages=byId('skill-review-text-to-pages');
  if(skillReviewTextToPages){
    skillReviewTextToPages.onclick=()=>{
      const editor=byId('mock-review-editor');
      if(!editor) return;
      richNormaliseTables(editor);
      const html=combinedRichEditorHTMLForSave('mock-review-editor');
      if(!richHTMLToText(html).trim()) return alert('글이 필요합니다.');
      const count=addSkillReviewTextPages(activePlan().date, section, html);
      if(!count) return alert('문서화할 글이 없습니다.');
      clearRichPageEditors('mock-review-editor');
      render();
    };
  }

  const skillReviewNoteNew=byId('skill-review-note-new');
  if(skillReviewNoteNew) skillReviewNoteNew.onclick=()=>startNewSkillReviewNote(section);

  const skillReviewFileInput=byId('skill-review-file-input');
  if(skillReviewFileInput){
    skillReviewFileInput.onchange=()=>{
      if(!skillReviewFileInput.files || !skillReviewFileInput.files.length) return;
      addSkillReviewFiles(activePlan().date, section, skillReviewFileInput.files).then(()=>{
        skillReviewFileInput.value='';
        render();
      }).catch(err=>alert(err.message || err));
    };
  }
  const clearSkillReviewFilesBtn=byId('clear-skill-review-files');
  if(clearSkillReviewFilesBtn){
    clearSkillReviewFilesBtn.onclick=()=>{
      clearSkillReviewFiles(activePlan().date, section);
      render();
    };
  }

  const skillReviewToggle=byId('toggle-skill-review-editor');
  const skillReviewWritingPanel=byId('skill-review-writing-panel');
  const skillReviewToolbarPanel=byId('skill-review-toolbar-panel');
  if(skillReviewToggle && skillReviewWritingPanel){
    skillReviewToggle.onclick=()=>{
      const open=skillReviewWritingPanel.classList.contains('jy-hidden');
      skillReviewWritingPanel.classList.toggle('jy-hidden', !open);
      if(skillReviewToolbarPanel) skillReviewToolbarPanel.classList.toggle('jy-hidden', !open);
      skillReviewToggle.textContent=open ? '작성창 닫기' : '작성창 열기';
      setSkillReviewEditorOpen(section, open);
      const editor=byId('mock-review-editor');
      if(open && editor) editor.focus();
    };
  }

  const sourceInput=byId('note-source');
  if(sourceInput){
    sourceInput.oninput=()=>saveMockReviewDraft('skill:'+section,false);
    sourceInput.onblur=()=>saveMockReviewDraft('skill:'+section,false);
  }
  bindRichReviewEditor('skill:'+section);
  const skillSubmit=byId('mock-review-submit');
  if(skillSubmit) skillSubmit.onclick=(e)=>submitWrongNoteFromButton(skillSubmit, e);
  const skillDraftSave=byId('mock-review-draft-save');
  if(skillDraftSave) skillDraftSave.onclick=()=>saveSkillReviewDraft('skill:'+section,false);
}

function bindGrammarPage(){
  if(route() !== 'grammar') return;
  const save=byId('grammar-note-save');
  if(save) save.onclick=saveGrammarNoteFromEditor;
  const fresh=byId('grammar-note-new');
  if(fresh) fresh.onclick=newGrammarNote;
  const grammarEditorToggle=byId('toggle-grammar-editor');
  const grammarWritingPanel=byId('grammar-writing-panel');
  if(grammarEditorToggle && grammarWritingPanel){
    grammarEditorToggle.onclick=()=>{
      const open=grammarWritingPanel.classList.contains('jy-hidden');
      grammarWritingPanel.classList.toggle('jy-hidden', !open);
      grammarEditorToggle.textContent=open ? '작성창 닫기' : '작성창 열기';
      setGrammarNoteEditorOpen(open);
      const editor=grammarEditorElement();
      if(open && editor) editor.focus();
    };
  }
  const titleInput=byId('grammar-note-title');
  if(titleInput){
    titleInput.oninput=()=>saveGrammarNoteDraft(false, false);
    titleInput.onblur=()=>saveGrammarNoteDraft(false, false);
  }
  const editor=grammarEditorElement();
  if(editor){
    richNormaliseTables(editor);
    bindRichReviewEditor('grammar');
  }
  const grammarFileInput=byId('grammar-file-input');
  if(grammarFileInput){
    grammarFileInput.onchange=()=>{
      if(!grammarFileInput.files || !grammarFileInput.files.length) return;
      const noteId=ensureGrammarNoteForFile();
      if(!noteId) return alert('저장할 페이지가 없습니다.');
      addGrammarFiles(noteId, grammarFileInput.files).then(()=>{
        grammarFileInput.value='';
        render();
      }).catch(err=>alert(err.message || err));
    };
  }
  const grammarFilesClear=byId('grammar-files-clear');
  if(grammarFilesClear){
    grammarFilesClear.onclick=()=>{
      const noteId=String(grammarEditorElement()?.dataset.grammarNoteId || '').trim();
      if(!noteId) return;
      clearGrammarFiles(noteId);
      render();
    };
  }
  const grammarTextToPages=byId('grammar-text-to-pages');
  if(grammarTextToPages){
    grammarTextToPages.onclick=()=>{
      const editor=grammarEditorElement();
      if(!editor) return;
      richNormaliseTables(editor);
      const html=combinedRichEditorHTMLForSave('mock-review-editor');
      if(!richHTMLToText(html).trim()) return alert('글이 필요합니다.');
      const noteId=ensureGrammarNoteForFile();
      if(!noteId) return alert('저장할 페이지가 없습니다.');
      const count=addGrammarTextPages(noteId, html);
      if(!count) return alert('문서화할 글이 없습니다.');
      clearRichPageEditors('mock-review-editor');
      render();
    };
  }
  const grammarTextClear=byId('grammar-note-clear');
  if(grammarTextClear){
    grammarTextClear.onclick=()=>{
      const noteId=String(grammarEditorElement()?.dataset.grammarNoteId || '').trim();
      clearGrammarText(noteId);
      render();
    };
  }
  bindLectureProofGalleryControls();
  document.querySelectorAll('[data-grammar-edit]').forEach(btn=>btn.onclick=()=>editGrammarNote(btn.dataset.grammarEdit));
  document.querySelectorAll('[data-grammar-trash]').forEach(btn=>btn.onclick=()=>moveGrammarNoteToTrash(btn.dataset.grammarTrash));
  document.querySelectorAll('[data-grammar-restore]').forEach(btn=>btn.onclick=()=>restoreGrammarNote(btn.dataset.grammarRestore));
  document.querySelectorAll('[data-grammar-prev]').forEach(btn=>btn.onclick=()=>{ const state=readState(); state.grammarEditingId=''; writeState(state); notePageIndex.grammar=(notePageIndex.grammar||0)-1; render(); });
  document.querySelectorAll('[data-grammar-next]').forEach(btn=>btn.onclick=()=>{ const state=readState(); state.grammarEditingId=''; writeState(state); notePageIndex.grammar=(notePageIndex.grammar||0)+1; render(); });
}

function bindPhrasePage(){
  if(route() !== 'grammar') return;
  const save=byId('phrase-note-save');
  if(save) save.onclick=savePhraseNoteFromEditor;
  const fresh=byId('phrase-note-new');
  if(fresh) fresh.onclick=newPhraseNote;
  const phraseEditorToggle=byId('toggle-phrase-editor');
  const phraseWritingPanel=byId('phrase-writing-panel');
  if(phraseEditorToggle && phraseWritingPanel){
    phraseEditorToggle.onclick=()=>{
      const open=phraseWritingPanel.classList.contains('jy-hidden');
      phraseWritingPanel.classList.toggle('jy-hidden', !open);
      phraseEditorToggle.textContent=open ? '작성창 닫기' : '작성창 열기';
      setPhraseNoteEditorOpen(open);
      const editor=phraseEditorElement();
      if(open && editor) editor.focus();
    };
  }
  const titleInput=byId('phrase-note-title');
  if(titleInput){
    titleInput.oninput=()=>savePhraseNoteDraft(false, false);
    titleInput.onblur=()=>savePhraseNoteDraft(false, false);
  }
  const editor=phraseEditorElement();
  if(editor){
    editor.oninput=()=>savePhraseNoteDraft(false, false);
    editor.onblur=()=>savePhraseNoteDraft(false, false);
  }
  const phraseFileInput=byId('phrase-file-input');
  if(phraseFileInput){
    phraseFileInput.onchange=()=>{
      if(!phraseFileInput.files || !phraseFileInput.files.length) return;
      const noteId=ensurePhraseNoteForFile();
      if(!noteId) return alert('저장할 페이지가 없습니다.');
      addPhraseFiles(noteId, phraseFileInput.files).then(()=>{
        phraseFileInput.value='';
        render();
      }).catch(err=>alert(err.message || err));
    };
  }
  const phraseFilesClear=byId('phrase-files-clear');
  if(phraseFilesClear){
    phraseFilesClear.onclick=()=>{
      const noteId=String(phraseEditorElement()?.dataset.phraseNoteId || '').trim();
      if(!noteId) return;
      clearPhraseFiles(noteId);
      render();
    };
  }
  const phraseTextToPages=byId('phrase-text-to-pages');
  if(phraseTextToPages){
    phraseTextToPages.onclick=()=>{
      const editor=phraseEditorElement();
      if(!editor) return;
      const html=combinedPhraseEditorHTMLForSave();
      if(!richHTMLToText(html).trim()) return alert('글이 필요합니다.');
      const noteId=ensurePhraseNoteForFile();
      if(!noteId) return alert('저장할 페이지가 없습니다.');
      const count=addPhraseTextPages(noteId, html);
      if(!count) return alert('문서화할 글이 없습니다.');
      clearPhrasePageEditors();
      render();
    };
  }
  const phraseTextClear=byId('phrase-note-clear');
  if(phraseTextClear){
    phraseTextClear.onclick=()=>{
      const noteId=String(phraseEditorElement()?.dataset.phraseNoteId || '').trim();
      clearPhraseText(noteId);
      render();
    };
  }
  const phrasePracticeEditor=byId('phrase-practice-editor');
  if(phrasePracticeEditor){
    phrasePracticeEditor.oninput=()=>savePhrasePracticeDraft(false);
    phrasePracticeEditor.onblur=()=>savePhrasePracticeDraft(false);
  }
  const phrasePracticeSave=byId('phrase-practice-save');
  if(phrasePracticeSave) phrasePracticeSave.onclick=()=>savePhrasePracticeDraft(false);
  const phrasePracticeDone=byId('phrase-practice-done');
  if(phrasePracticeDone) phrasePracticeDone.onclick=()=>{ savePhrasePracticeDraft(true); render(); };
  const phrasePracticeReset=byId('phrase-practice-reset');
  if(phrasePracticeReset){
    phrasePracticeReset.onclick=()=>{
      if(!confirm('오늘 문장 연습 내용을 기본문장으로 되돌릴까요?')) return;
      resetPhrasePracticeText(activePlan().date);
      render();
    };
  }
  document.querySelectorAll('[data-phrase-trash]').forEach(btn=>btn.onclick=()=>movePhraseNoteToTrash(btn.dataset.phraseTrash));
  document.querySelectorAll('[data-phrase-restore]').forEach(btn=>btn.onclick=()=>restorePhraseNote(btn.dataset.phraseRestore));
  document.querySelectorAll('[data-phrase-prev]').forEach(btn=>btn.onclick=()=>{ const state=readState(); state.phraseEditingId=''; writeState(state); notePageIndex.phrase=(notePageIndex.phrase||0)-1; render(); });
  document.querySelectorAll('[data-phrase-next]').forEach(btn=>btn.onclick=()=>{ const state=readState(); state.phraseEditingId=''; writeState(state); notePageIndex.phrase=(notePageIndex.phrase||0)+1; render(); });
}

function bindNotesPage(){
  document.querySelectorAll('[data-notes-section-select]').forEach(btn=>btn.onclick=()=>{
    const section=btn.dataset.notesSectionSelect || '';
    if(!section) return;
    notesPageSelectedSection=section;
    if(section !== 'wrong_note') notesPageSelectedItem='';
    render();
  });
  document.querySelectorAll('[data-wrong-note-select]').forEach(btn=>btn.onclick=()=>{
    const section=btn.dataset.wrongNoteSelect || '';
    if(!section) return;
    notesPageSelectedItem=section;
    render();
  });
  document.querySelectorAll('[data-wrong-note-item-section]').forEach(btn=>btn.onclick=()=>{
    const section=btn.dataset.wrongNoteItemSection || notesPageSelectedItem || '';
    const idx=parseInt(btn.dataset.wrongNoteItemIndex || '0', 10);
    if(!section || !Number.isFinite(idx)) return;
    const key=notesPageIndexKey('wrong_note_'+section);
    notePageIndex[key]=idx;
    render();
  });
  document.querySelectorAll('[data-note-body-prev]').forEach(btn=>btn.onclick=()=>{
    const key=btn.dataset.noteBodyPrev || '';
    if(!key) return;
    const storeKey=notesPageIndexKey(key);
    notePageIndex[storeKey]=(parseInt(notePageIndex[storeKey] || 0, 10) || 0)-1;
    render();
  });
  document.querySelectorAll('[data-note-body-next]').forEach(btn=>btn.onclick=()=>{
    const key=btn.dataset.noteBodyNext || '';
    if(!key) return;
    const storeKey=notesPageIndexKey(key);
    notePageIndex[storeKey]=(parseInt(notePageIndex[storeKey] || 0, 10) || 0)+1;
    render();
  });
  document.querySelectorAll('[data-notes-prev]').forEach(btn=>btn.onclick=()=>{
    const key=btn.dataset.notesPrev || notesPageSelectedSection || 'lecture_note';
    const storeKey=notesPageIndexKey(key);
    notePageIndex[storeKey]=(parseInt(notePageIndex[storeKey] || 0, 10) || 0)-1;
    render();
  });
  document.querySelectorAll('[data-notes-next]').forEach(btn=>btn.onclick=()=>{
    const key=btn.dataset.notesNext || notesPageSelectedSection || 'lecture_note';
    const storeKey=notesPageIndexKey(key);
    notePageIndex[storeKey]=(parseInt(notePageIndex[storeKey] || 0, 10) || 0)+1;
    render();
  });
  document.querySelectorAll('[data-notes-delete]').forEach(btn=>btn.onclick=()=>{
    const id=btn.dataset.notesDelete || '';
    const section=btn.dataset.notesDeleteSection || notesPageSelectedSection || '';
    if(!id) return;
    if(!confirm('이 노트를 삭제할까요?')) return;
    if(deleteNotesPageNote(section, id)) render();
  });
  bindLectureProofGalleryControls();
  loadMockReviewNoteFilePreviews();
}


function renderScoreTable(type){
  const target=byId('score-table');
  if(!target) return;
  const rows = type==='listening'||type==='reading'
    ? [['39-40','9.0'],['37-38','8.5'],['35-36','8.0'],['32-34','7.5'],['30-31','7.0'],['26-29','6.5'],['23-25','6.0']]
    : [['9','완전한 운영 능력'],['8','매우 우수'],['7','좋음'],['6','적절한 사용'],['5','부분적 사용']];
  target.innerHTML = `<section class="jy-card"><h3 class="jy-card-title">${SECTION_NAMES[type] || type} 점수표</h3><table class="jy-table"><tbody>${rows.map(r=>`<tr><th>${r[0]}</th><td>${r[1]}</td></tr>`).join('')}</tbody></table></section>`;
}


function submitWrongNoteFromButton(btn, event){
  if(!btn) return false;
  if(event){
    event.preventDefault();
    event.stopPropagation();
    if(event.stopImmediatePropagation) event.stopImmediatePropagation();
  }
  const currentRoute=route();
  if(['listening','reading','writing','speaking'].includes(currentRoute)){
    const section=btn.dataset.section || currentRoute;
    const ok=saveSkillReviewDraft('skill:'+section,true);
    if(!ok) alert('글 또는 파일이 필요합니다.');
    else render();
    return true;
  }
  if(currentRoute === 'mocktest'){
    const id=activeMockId();
    const ok=saveMockReviewDraft(id,true);
    if(!ok) alert('파일을 제출하거나 내용을 작성해 주세요.');
    else render();
    return true;
  }
  return false;
}

function bindWrongNoteSubmitFallback(){
  if(window.JY_WRONG_NOTE_SUBMIT_FALLBACK_BOUND) return;
  window.JY_WRONG_NOTE_SUBMIT_FALLBACK_BOUND=true;
  const handler=function(e){
    const btn=e.target && e.target.closest ? e.target.closest('#mock-review-submit') : null;
    if(!btn) return;
    const now=Date.now();
    if(e.type === 'click' && window.JY_WRONG_NOTE_LAST_SUBMIT_AT && now - window.JY_WRONG_NOTE_LAST_SUBMIT_AT < 700){
      e.preventDefault();
      e.stopPropagation();
      if(e.stopImmediatePropagation) e.stopImmediatePropagation();
      return;
    }
    window.JY_WRONG_NOTE_LAST_SUBMIT_AT=now;
    submitWrongNoteFromButton(btn, e);
  };
  document.addEventListener('pointerup', handler, true);
  document.addEventListener('click', handler, true);
}

window.addEventListener('hashchange', ()=>{ persistActiveEditingBeforeRender(); render(); });
window.addEventListener('pagehide', persistActiveEditingBeforeRender);
window.addEventListener('beforeunload', persistActiveEditingBeforeRender);
window.addEventListener('pageshow', renderIfDateChanged);
window.addEventListener('focus', renderIfDateChanged);
document.addEventListener('visibilitychange', ()=>{
  persistActiveEditingBeforeRender();
  if(!document.hidden) renderIfDateChanged();
});
document.addEventListener('DOMContentLoaded', ()=>{
  migrateLegacyLectureProofsToDB()
    .then(()=>convertStoredLecturePDFsToPages())
    .finally(()=>{
      render();
      scheduleDateRefresh();
      ensureStudyTimerTicker();
      setInterval(updateMeta, 60000);
    });
});
