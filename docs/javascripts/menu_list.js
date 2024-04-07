const MATSUNOYA_MENU_LIST = [
  [
    "チキンかつ定食",
    690,
    {
      "カロリー": "871kcal",
      "たんぱく質": "30.4g",
      "脂質": "35g",
      "炭水化物": "113.6g",
      "食塩相当量": "2.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_chicken_hp_240403.html"
  ],
  [
    "鬼おろしポン酢チキンかつ定食",
    790,
    {
      "カロリー": "904kcal",
      "たんぱく質": "31.8g",
      "脂質": "35.1g",
      "炭水化物": "120.6g",
      "食塩相当量": "4.3g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_chicken_oni_hp_240403.html"
  ],
  [
    "ネギ味噌チキンかつ定食",
    790,
    {
      "カロリー": "1001kcal",
      "たんぱく質": "33.7g",
      "脂質": "41.4g",
      "炭水化物": "127.8g",
      "食塩相当量": "5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_chicken_negi_hp_240403.html"
  ],
  [
    "タルタルチキンかつ定食",
    790,
    {
      "カロリー": "1064kcal",
      "たんぱく質": "32g",
      "脂質": "52.8g",
      "炭水化物": "120g",
      "食塩相当量": "4.7g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_chicken_taru_hp_240403.html"
  ],
  [
    "ネギ塩チキンかつ定食",
    790,
    {
      "カロリー": "1064kcal",
      "たんぱく質": "31.8g",
      "脂質": "54.1g",
      "炭水化物": "117g",
      "食塩相当量": "4.5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_chicken_shio_hp_240403.html"
  ],
  [
    "チキンかつ＆唐揚げ定食",
    960,
    {
      "カロリー": "1152kcal",
      "たんぱく質": "47.4g",
      "脂質": "52.1g",
      "炭水化物": "129.5g",
      "食塩相当量": "4.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_chicken_karaage_hp_240403.html"
  ],
  [
    "チキンかつ＆海老フライ（1尾）定食",
    960,
    {
      "カロリー": "1139kcal",
      "たんぱく質": "36.6g",
      "脂質": "55.7g",
      "炭水化物": "128.1g",
      "食塩相当量": "4.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_chicken_ebi1_hp_240403.html"
  ],
  [
    "チキンかつ＆海老フライ（2尾）定食",
    1230,
    {
      "カロリー": "1315kcal",
      "たんぱく質": "42.2g",
      "脂質": "67.5g",
      "炭水化物": "140.1g",
      "食塩相当量": "4.8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_chicken_ebi2_hp_240403.html"
  ],
  [
    "ムートート“タイ風豚バラ唐揚げ”定食",
    790,
    {
      "カロリー": "995kcal",
      "たんぱく質": "24.9g",
      "脂質": "47.2g",
      "炭水化物": "116.7g",
      "食塩相当量": "4.2g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_mootote_hp_240327.html"
  ],
  [
    "ロースかつ＆ムートート“タイ風豚バラ唐揚げ”定食",
    950,
    {
      "カロリー": "1266kcal",
      "たんぱく質": "38.3g",
      "脂質": "62.7g",
      "炭水化物": "138.2g",
      "食塩相当量": "4.5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_mootote_hp_240327.html"
  ],
  [
    "鶏の唐揚げ＆ムートート“タイ風豚バラ唐揚げ”定食",
    950,
    {
      "カロリー": "1104kcal",
      "たんぱく質": "36.5g",
      "脂質": "49.5g",
      "炭水化物": "129.8g",
      "食塩相当量": "5.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_karaage3_mootote_hp_240327.html"
  ],
  [
    "中華風あんかけささみかつ",
    690,
    {
      "カロリー": "978kcal",
      "たんぱく質": "43.4g",
      "脂質": "34.2g",
      "炭水化物": "126g",
      "食塩相当量": "7.7g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/osusume/ankake_sasami_hp_240313.html"
  ],
  [
    "中華風あんかけロースかつ",
    690,
    {
      "カロリー": "1027kcal",
      "たんぱく質": "34g",
      "脂質": "46.4g",
      "炭水化物": "119.5g",
      "食塩相当量": "7.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/osusume/ankake_rosu_hp_240313.html"
  ],
  [
    "中華風あんかけ海老フライ",
    850,
    {
      "カロリー": "935kcal",
      "たんぱく質": "26.3g",
      "脂質": "39.7g",
      "炭水化物": "119.2g",
      "食塩相当量": "8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/osusume/ankake_ebi_hp_240313.html"
  ],
  [
    "オニオンバターソースのポークフライドステーキ定食",
    930,
    {
      "カロリー": "1008kcal",
      "たんぱく質": "41.2g",
      "脂質": "47g",
      "炭水化物": "103.6g",
      "食塩相当量": "5.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_pork_steak1_hp_240228.html"
  ],
  [
    "オニオンバターソースのポークフライドステーキ定食（ダブル）",
    1500,
    {
      "カロリー": "1628kcal",
      "たんぱく質": "74.5g",
      "脂質": "92.5g",
      "炭水化物": "117.6g",
      "食塩相当量": "9.2g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_pork_steak2_hp_240228.html"
  ],
  [
    "チキンかつ定食",
    690,
    {
      "カロリー": "871kcal",
      "たんぱく質": "30.4g",
      "脂質": "35g",
      "炭水化物": "113.6g",
      "食塩相当量": "2.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_chicken_hp_240403.html"
  ],
  [
    "鬼おろしポン酢チキンかつ定食",
    790,
    {
      "カロリー": "904kcal",
      "たんぱく質": "31.8g",
      "脂質": "35.1g",
      "炭水化物": "120.6g",
      "食塩相当量": "4.3g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_chicken_oni_hp_240403.html"
  ],
  [
    "ネギ味噌チキンかつ定食",
    790,
    {
      "カロリー": "1001kcal",
      "たんぱく質": "33.7g",
      "脂質": "41.4g",
      "炭水化物": "127.8g",
      "食塩相当量": "5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_chicken_negi_hp_240403.html"
  ],
  [
    "タルタルチキンかつ定食",
    790,
    {
      "カロリー": "1064kcal",
      "たんぱく質": "32g",
      "脂質": "52.8g",
      "炭水化物": "120g",
      "食塩相当量": "4.7g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_chicken_taru_hp_240403.html"
  ],
  [
    "ネギ塩チキンかつ定食",
    790,
    {
      "カロリー": "1064kcal",
      "たんぱく質": "31.8g",
      "脂質": "54.1g",
      "炭水化物": "117g",
      "食塩相当量": "4.5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_chicken_shio_hp_240403.html"
  ],
  [
    "ムートート“タイ風豚バラ唐揚げ”定食",
    790,
    {
      "カロリー": "995kcal",
      "たんぱく質": "24.9g",
      "脂質": "47.2g",
      "炭水化物": "116.7g",
      "食塩相当量": "4.2g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_mootote_hp_240327.html"
  ],
  [
    "オニオンバターソースのポークフライドステーキ定食",
    930,
    {
      "カロリー": "1008kcal",
      "たんぱく質": "41.2g",
      "脂質": "47g",
      "炭水化物": "103.6g",
      "食塩相当量": "5.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_pork_steak1_hp_240228.html"
  ],
  [
    "オニオンバターソースのポークフライドステーキ定食（ダブル）",
    1500,
    {
      "カロリー": "1628kcal",
      "たんぱく質": "74.5g",
      "脂質": "92.5g",
      "炭水化物": "117.6g",
      "食塩相当量": "9.2g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_pork_steak2_hp_240228.html"
  ],
  [
    "ささみかつ定食",
    690,
    {
      "カロリー": "874kcal",
      "たんぱく質": "36.8g",
      "脂質": "28.5g",
      "炭水化物": "122.7g",
      "食塩相当量": "3.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_sasami_hp_240207.html"
  ],
  [
    "鬼おろしポン酢ささみかつ定食",
    790,
    {
      "カロリー": "815kcal",
      "たんぱく質": "37.5g",
      "脂質": "19.7g",
      "炭水化物": "127.1g",
      "食塩相当量": "4.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_sasami_oni_hp_240207.html"
  ],
  [
    "味噌ささみかつ定食",
    790,
    {
      "カロリー": "877kcal",
      "たんぱく質": "38.6g",
      "脂質": "22.1g",
      "炭水化物": "134.7g",
      "食塩相当量": "4.8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_sasami_miso_hp_240207.html"
  ],
  [
    "たっぷりささみかつ定食",
    890,
    {
      "カロリー": "1071kcal",
      "たんぱく質": "50.9g",
      "脂質": "37.6g",
      "炭水化物": "138g",
      "食塩相当量": "4.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_sasami3_hp_240207.html"
  ],
  [
    "カキフライ（4個）定食",
    930,
    {
      "カロリー": "846kcal",
      "たんぱく質": "16.9g",
      "脂質": "37.1g",
      "炭水化物": "114.9g",
      "食塩相当量": "3.3g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_kaki4_hp_230927.html"
  ],
  [
    "カキフライ（5個）定食",
    1050,
    {
      "カロリー": "937kcal",
      "たんぱく質": "19g",
      "脂質": "43.7g",
      "炭水化物": "120.6g",
      "食塩相当量": "3.5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_kaki5_hp_230927.html"
  ],
  [
    "たっぷりカキフライ（7個）定食",
    1290,
    {
      "カロリー": "1120kcal",
      "たんぱく質": "23.2g",
      "脂質": "57.1g",
      "炭水化物": "132.1g",
      "食塩相当量": "3.9g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_kaki7_hp_230927.html"
  ],
  [
    "アジフライ（2枚）定食",
    790,
    {
      "カロリー": "952kcal",
      "たんぱく質": "29.5g",
      "脂質": "41.7g",
      "炭水化物": "120g",
      "食塩相当量": "3.9g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_aji_hp_240221.html"
  ],
  [
    "ロースかつ定食",
    590,
    {
      "カロリー": "831kcal",
      "たんぱく質": "26.7g",
      "脂質": "31.8g",
      "炭水化物": "113.8g",
      "食塩相当量": "2.5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_rosu_hp.html"
  ],
  [
    "鬼おろしポン酢ロースかつ定食",
    690,
    {
      "カロリー": "864kcal",
      "たんぱく質": "28.1g",
      "脂質": "31.9g",
      "炭水化物": "120.7g",
      "食塩相当量": "4.2g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_oroshipon_rosu_hp.html"
  ],
  [
    "味噌ロースかつ定食",
    690,
    {
      "カロリー": "926kcal",
      "たんぱく質": "29.2g",
      "脂質": "34.3g",
      "炭水化物": "128.3g",
      "食塩相当量": "4.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_miso_rosu_hp.html"
  ],
  [
    "本格唐揚げ定食（5個）",
    790,
    {
      "カロリー": "855kcal",
      "たんぱく質": "36.3g",
      "脂質": "29.9g",
      "炭水化物": "116g",
      "食塩相当量": "4.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_karaage5_hp_230913.html"
  ],
  [
    "本格唐揚げ定食（8個）",
    1060,
    {
      "カロリー": "1136kcal",
      "たんぱく質": "53.3g",
      "脂質": "46.9g",
      "炭水化物": "131.8g",
      "食塩相当量": "5.7g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_karaage8_hp_230913.html"
  ],
  [
    "鬼おろしポン酢本格唐揚げ定食（5個）",
    890,
    {
      "カロリー": "888kcal",
      "たんぱく質": "37.7g",
      "脂質": "30g",
      "炭水化物": "122.9g",
      "食塩相当量": "5.8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_oroshipon_karaage5_hp_230913.html"
  ],
  [
    "鬼おろしポン酢本格唐揚げ定食（8個）",
    1160,
    {
      "カロリー": "1169kcal",
      "たんぱく質": "54.7g",
      "脂質": "47g",
      "炭水化物": "138.8g",
      "食塩相当量": "7.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_oroshipon_karaage8_hp_230913.html"
  ],
  [
    "チキンかつ＆唐揚げ定食",
    960,
    {
      "カロリー": "1152kcal",
      "たんぱく質": "47.4g",
      "脂質": "52.1g",
      "炭水化物": "129.5g",
      "食塩相当量": "4.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_chicken_karaage_hp_240403.html"
  ],
  [
    "チキンかつ＆海老フライ（1尾）定食",
    960,
    {
      "カロリー": "1139kcal",
      "たんぱく質": "36.6g",
      "脂質": "55.7g",
      "炭水化物": "128.1g",
      "食塩相当量": "4.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_chicken_ebi1_hp_240403.html"
  ],
  [
    "チキンかつ＆海老フライ（2尾）定食",
    1230,
    {
      "カロリー": "1315kcal",
      "たんぱく質": "42.2g",
      "脂質": "67.5g",
      "炭水化物": "140.1g",
      "食塩相当量": "4.8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_chicken_ebi2_hp_240403.html"
  ],
  [
    "ロースかつ＆ムートート“タイ風豚バラ唐揚げ”定食",
    950,
    {
      "カロリー": "1266kcal",
      "たんぱく質": "38.3g",
      "脂質": "62.7g",
      "炭水化物": "138.2g",
      "食塩相当量": "4.5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_mootote_hp_240327.html"
  ],
  [
    "鶏の唐揚げ＆ムートート“タイ風豚バラ唐揚げ”定食",
    950,
    {
      "カロリー": "1104kcal",
      "たんぱく質": "36.5g",
      "脂質": "49.5g",
      "炭水化物": "129.8g",
      "食塩相当量": "5.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_karaage3_mootote_hp_240327.html"
  ],
  [
    "ロースかつ＆ささみかつ（1本）定食",
    790,
    {
      "カロリー": "1120kcal",
      "たんぱく質": "41.5g",
      "脂質": "49.7g",
      "炭水化物": "131.6g",
      "食塩相当量": "3.9g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_sasami1_hp_240207.html"
  ],
  [
    "ロースかつ＆ささみかつ（2本）定食",
    990,
    {
      "カロリー": "1317kcal",
      "たんぱく質": "55.6g",
      "脂質": "58.8g",
      "炭水化物": "146.9g",
      "食塩相当量": "4.5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_sasami2_hp_240207.html"
  ],
  [
    "ささみかつ＆海老フライ（1尾）定食",
    960,
    {
      "カロリー": "1050kcal",
      "たんぱく質": "42.4g",
      "脂質": "40.3g",
      "炭水化物": "134.6g",
      "食塩相当量": "4.3g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_sasami_ebi1_hp_240207.html"
  ],
  [
    "ささみかつ＆海老フライ（2尾）定食",
    1230,
    {
      "カロリー": "1225kcal",
      "たんぱく質": "47.9g",
      "脂質": "52.1g",
      "炭水化物": "146.6g",
      "食塩相当量": "5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_sasami_ebi2_hp_240207.html"
  ],
  [
    "ロースかつ＆カキフライ（2個）定食",
    980,
    {
      "カロリー": "1106kcal",
      "たんぱく質": "31.6g",
      "脂質": "54g",
      "炭水化物": "127.7g",
      "食塩相当量": "3.7g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_kaki_hp_230927.html"
  ],
  [
    "海鮮3種（カキフライ2個・アジフライ1枚・海老フライ1尾）盛合せ定食",
    1090,
    {
      "カロリー": "1074kcal",
      "たんぱく質": "28.8g",
      "脂質": "51.2g",
      "炭水化物": "129.4g",
      "食塩相当量": "4.3g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_kaisen3_ebi1_hp_230927.html"
  ],
  [
    "ロースかつ＆アジフライ定食",
    880,
    {
      "カロリー": "1159kcal",
      "たんぱく質": "37.9g",
      "脂質": "56.3g",
      "炭水化物": "130.3g",
      "食塩相当量": "4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_aji_hp_230920.html"
  ],
  [
    "ロースかつ＆本格唐揚げ定食",
    860,
    {
      "カロリー": "1111kcal",
      "たんぱく質": "43.8g",
      "脂質": "48.8g",
      "炭水化物": "129.6g",
      "食塩相当量": "4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_kara_hp_230913.html"
  ],
  [
    "ダブルロースかつ定食",
    880,
    {
      "カロリー": "1274kcal",
      "たんぱく質": "45.6g",
      "脂質": "62.1g",
      "炭水化物": "138g",
      "食塩相当量": "3.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_w_rosu_hp_220502.html"
  ],
  [
    "ダブル鬼おろしポン酢ロースかつ定食",
    980,
    {
      "カロリー": "1307kcal",
      "たんぱく質": "47g",
      "脂質": "62.2g",
      "炭水化物": "145g",
      "食塩相当量": "5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_w_rosu_oroshipon_hp_220502.html"
  ],
  [
    "ダブル味噌ロースかつ定食",
    980,
    {
      "カロリー": "1369kcal",
      "たんぱく質": "48.1g",
      "脂質": "64.6g",
      "炭水化物": "152.5g",
      "食塩相当量": "5.5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_w_rosu_miso_hp_220502.html"
  ],
  [
    "ロースかつ＆海老フライ（1尾）定食",
    860,
    {
      "カロリー": "1098kcal",
      "たんぱく質": "33g",
      "脂質": "52.4g",
      "炭水化物": "128.2g",
      "食塩相当量": "4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_ebi1_hp_220502.html"
  ],
  [
    "ロースかつ＆海老フライ（2尾）定食",
    1130,
    {
      "カロリー": "1274kcal",
      "たんぱく質": "38.5g",
      "脂質": "64.2g",
      "炭水化物": "140.2g",
      "食塩相当量": "4.7g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_ebi2_hp_220502.html"
  ],
  [
    "親子ささみかつ丼 並盛",
    690,
    {
      "カロリー": "963kcal",
      "たんぱく質": "49.1g",
      "脂質": "29.2g",
      "炭水化物": "127g",
      "食塩相当量": "5.8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_sasami_hp_240207.html"
  ],
  [
    "親子ささみかつ丼 大盛",
    750,
    {
      "カロリー": "1142kcal",
      "たんぱく質": "52.7g",
      "脂質": "29.5g",
      "炭水化物": "168.1g",
      "食塩相当量": "7.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_sasami_hp_240207.html"
  ],
  [
    "カキフライとじ丼 並盛",
    890,
    {
      "カロリー": "935kcal",
      "たんぱく質": "29.3g",
      "脂質": "37.7g",
      "炭水化物": "119.2g",
      "食塩相当量": "5.5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_kaki_hp_230927.html"
  ],
  [
    "カキフライとじ丼 大盛",
    950,
    {
      "カロリー": "1113kcal",
      "たんぱく質": "32.9g",
      "脂質": "38g",
      "炭水化物": "160.3g",
      "食塩相当量": "6.8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_kaki_hp_230927.html"
  ],
  [
    "ロースかつ丼 並盛",
    630,
    {
      "カロリー": "1012kcal",
      "たんぱく質": "39.7g",
      "脂質": "41.3g",
      "炭水化物": "120.5g",
      "食塩相当量": "5.5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_rosu_hp_221228.html"
  ],
  [
    "ロースかつ丼 大盛",
    690,
    {
      "カロリー": "1190kcal",
      "たんぱく質": "43.3g",
      "脂質": "41.6g",
      "炭水化物": "161.6g",
      "食塩相当量": "6.9g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_rosu_hp_221228.html"
  ],
  [
    "味噌ロースかつ丼 並盛",
    630,
    {
      "カロリー": "913kcal",
      "たんぱく質": "28.5g",
      "脂質": "34.1g",
      "炭水化物": "125.1g",
      "食塩相当量": "4.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_rosu_miso_hp_221228.html"
  ],
  [
    "味噌ロースかつ丼 大盛",
    690,
    {
      "カロリー": "1069kcal",
      "たんぱく質": "31g",
      "脂質": "34.4g",
      "炭水化物": "162.2g",
      "食塩相当量": "4.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_rosu_miso_hp_221228.html"
  ],
  [
    "ささみかつカレー 並盛",
    750,
    {
      "カロリー": "1216kcal",
      "たんぱく質": "38.9g",
      "脂質": "58.1g",
      "炭水化物": "138.8g",
      "食塩相当量": "5.2g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/curry_rice/cry_sasami_hp_240207.html"
  ],
  [
    "ささみかつカレー 大盛",
    850,
    {
      "カロリー": "1457kcal",
      "たんぱく質": "42.3g",
      "脂質": "65.2g",
      "炭水化物": "180.9g",
      "食塩相当量": "5.8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/curry_rice/cry_sasami_hp_240207.html"
  ],
  [
    "“松のや”のロースかつカレー 並盛",
    670,
    {
      "カロリー": "1173kcal",
      "たんぱく質": "28.9g",
      "脂質": "61.4g",
      "炭水化物": "129.9g",
      "食塩相当量": "4.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/curry_rice/cry_rosu_hp_221228.html"
  ],
  [
    "“松のや”のロースかつカレー 大盛",
    770,
    {
      "カロリー": "1413kcal",
      "たんぱく質": "32.3g",
      "脂質": "68.4g",
      "炭水化物": "172g",
      "食塩相当量": "4.7g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/curry_rice/cry_rosu_hp_221228.html"
  ],
  [
    "“松のや”の海老フライカレー 並盛",
    900,
    {
      "カロリー": "1173kcal",
      "たんぱく質": "21.8g",
      "脂質": "63.6g",
      "炭水化物": "132g",
      "食塩相当量": "5.5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/curry_rice/cry_ebi_hp_220502.html"
  ],
  [
    "“松のや”の海老フライカレー 大盛",
    1000,
    {
      "カロリー": "1414kcal",
      "たんぱく質": "25.3g",
      "脂質": "70.6g",
      "炭水化物": "174.1g",
      "食塩相当量": "6.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/curry_rice/cry_ebi_hp_220502.html"
  ],
  [
    "“松のや”の本格唐揚げカレー 並盛",
    670,
    {
      "カロリー": "1103kcal",
      "たんぱく質": "27.7g",
      "脂質": "57g",
      "炭水化物": "124g",
      "食塩相当量": "5.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/curry_rice/cry_karaage_hp_230913.html"
  ],
  [
    "“松のや”の本格唐揚げカレー 大盛",
    770,
    {
      "カロリー": "1344kcal",
      "たんぱく質": "31.1g",
      "脂質": "64.1g",
      "炭水化物": "166.1g",
      "食塩相当量": "6.2g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/curry_rice/cry_karaage_hp_230913.html"
  ],
  [
    "“松のや”のコロッケカレー 並盛",
    590,
    {
      "カロリー": "1200kcal",
      "たんぱく質": "16.7g",
      "脂質": "62.1g",
      "炭水化物": "147.2g",
      "食塩相当量": "4.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/curry_rice/cry_koroke_hp_220810.html"
  ],
  [
    "“松のや”のコロッケカレー 大盛",
    690,
    {
      "カロリー": "1440kcal",
      "たんぱく質": "20.1g",
      "脂質": "69.1g",
      "炭水化物": "189.3g",
      "食塩相当量": "5.2g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/curry_rice/cry_koroke_hp_220810.html"
  ],
  [
    "お子様プレート",
    480,
    {
      "カロリー": "760kcal",
      "たんぱく質": "17.5g",
      "脂質": "23.4g",
      "炭水化物": "122g",
      "食塩相当量": "2.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/sumikko/ageage_okosama_hp_220330_nn.html"
  ],
  [
    "マミー",
    100,
    {
      "カロリー": "91kcal",
      "たんぱく質": "0.8g",
      "脂質": "0g",
      "炭水化物": "22.1g",
      "食塩相当量": "0～0.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/okosama/okosama_mammy_hp_230222.html"
  ],
  [
    "単品チキンかつ",
    450,
    {
      "カロリー": "484kcal",
      "たんぱく質": "22.5g",
      "脂質": "33.5g",
      "炭水化物": "24.2g",
      "食塩相当量": "1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_chicken_hp_240403.html"
  ],
  [
    "単品ムートート“タイ風豚バラ唐揚げ”",
    550,
    {
      "カロリー": "608kcal",
      "たんぱく質": "17g",
      "脂質": "45.7g",
      "炭水化物": "27.2g",
      "食塩相当量": "2.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_mootote_hp_240327.html"
  ],
  [
    "単品オニオンバターソースのポークフライドステーキ",
    690,
    {
      "カロリー": "620kcal",
      "たんぱく質": "33.3g",
      "脂質": "45.5g",
      "炭水化物": "14.1g",
      "食塩相当量": "3.8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_pork_steak_hp_240228.html"
  ],
  [
    "単品ささみかつ（1枚）",
    230,
    {
      "カロリー": "197kcal",
      "たんぱく質": "14.1g",
      "脂質": "9.1g",
      "炭水化物": "15.3g",
      "食塩相当量": "0.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_sasami_hp_240207.html"
  ],
  [
    "単品カキフライ（2個）",
    400,
    {
      "カロリー": "183kcal",
      "たんぱく質": "4.2g",
      "脂質": "13.4g",
      "炭水化物": "11.5g",
      "食塩相当量": "0.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_kaki2_hp_230927.html"
  ],
  [
    "単品アジフライ（1枚）",
    300,
    {
      "カロリー": "236kcal",
      "たんぱく質": "10.5g",
      "脂質": "15.7g",
      "炭水化物": "14g",
      "食塩相当量": "0.7g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_aji_hp_230920.html"
  ],
  [
    "単品ロースかつ（1枚）",
    350,
    {
      "カロリー": "443kcal",
      "たんぱく質": "18.8g",
      "脂質": "30.3g",
      "炭水化物": "24.3g",
      "食塩相当量": "0.9g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_rosu_nami1_hp.html"
  ],
  [
    "単品海老フライ（1尾）",
    300,
    {
      "カロリー": "176kcal",
      "たんぱく質": "5.6g",
      "脂質": "11.8g",
      "炭水化物": "12g",
      "食塩相当量": "0.7g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_ebi1_hp_220502.html"
  ],
  [
    "単品本格唐揚げ（1個）",
    120,
    {
      "カロリー": "94kcal",
      "たんぱく質": "5.7g",
      "脂質": "5.7g",
      "炭水化物": "5.3g",
      "食塩相当量": "0.5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_honkaku_kara1_hp_230830.html"
  ],
  [
    "単品本格唐揚げ（3個）",
    350,
    {
      "カロリー": "281kcal",
      "たんぱく質": "17g",
      "脂質": "17g",
      "炭水化物": "15.9g",
      "食塩相当量": "1.5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_kara3_hp_230913.html"
  ],
  [
    "単品本格唐揚げ（5個）",
    550,
    {
      "カロリー": "468kcal",
      "たんぱく質": "28.4g",
      "脂質": "28.4g",
      "炭水化物": "26.5g",
      "食塩相当量": "2.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_kara5_hp_230913.html"
  ],
  [
    "単品本格唐揚げ（8個）",
    810,
    {
      "カロリー": "749kcal",
      "たんぱく質": "45.4g",
      "脂質": "45.4g",
      "炭水化物": "42.3g",
      "食塩相当量": "4.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_kara8_hp_230913.html"
  ],
  [
    "単品コロッケ（1個）",
    80,
    {
      "カロリー": "157kcal",
      "たんぱく質": "2.2g",
      "脂質": "10.3g",
      "炭水化物": "13.9g",
      "食塩相当量": "0.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_korokke1_hp_220502.html"
  ],
  [
    "ポテトフライ",
    250,
    {
      "カロリー": "329kcal",
      "たんぱく質": "3.5g",
      "脂質": "15.8g",
      "炭水化物": "40.9g",
      "食塩相当量": "0.9g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/side_potatofry_hp_220502.html"
  ],
  [
    "単品スイートチリソース",
    130,
    {
      "カロリー": "91kcal",
      "たんぱく質": "0.7g",
      "脂質": "1.5g",
      "炭水化物": "18.7g",
      "食塩相当量": "0.8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_sauce_sweet_chili_hp_240327.html"
  ],
  [
    "タルタルソース",
    50,
    {
      "カロリー": "92kcal",
      "たんぱく質": "0.6g",
      "脂質": "8.9g",
      "炭水化物": "2.5g",
      "食塩相当量": "0.8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_tarutaru_hp_200819.html"
  ],
  [
    "単品ふりかけ（さけ）",
    50,
    {
      "カロリー": "7kcal",
      "たんぱく質": "0.2g",
      "脂質": "0.2g",
      "炭水化物": "0.9g",
      "食塩相当量": "0.2g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_hurikake_sake_hp_221012.html"
  ],
  [
    "単品ふりかけ（たまご）",
    50,
    {
      "カロリー": "10kcal",
      "たんぱく質": "0.3g",
      "脂質": "0.2g",
      "炭水化物": "1.7g",
      "食塩相当量": "0.2g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_hurikake_tamago_hp_221012.html"
  ],
  [
    "生玉子",
    70,
    {
      "カロリー": "71kcal",
      "たんぱく質": "5.8g",
      "脂質": "4.8g",
      "炭水化物": "0.1g",
      "食塩相当量": "0.2g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_namatamago_hp_220502.html"
  ],
  [
    "トッピングポテサラ",
    70,
    {
      "カロリー": "92kcal",
      "たんぱく質": "1g",
      "脂質": "5.6g",
      "炭水化物": "9.2g",
      "食塩相当量": "0.5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_topping_potesara_hp_200819.html"
  ],
  [
    "ミニポテキャベ",
    80,
    {
      "カロリー": "56kcal",
      "たんぱく質": "1.2g",
      "脂質": "2.9g",
      "炭水化物": "7.2g",
      "食塩相当量": "0.3g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_potecabe_mini_hp_220502.html"
  ],
  [
    "千切りキャベツ",
    80,
    {
      "カロリー": "17kcal",
      "たんぱく質": "1g",
      "脂質": "0.2g",
      "炭水化物": "4.2g",
      "食塩相当量": "0g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_cabbage_hp_220502.html"
  ],
  [
    "ポテキャベ",
    150,
    {
      "カロリー": "109kcal",
      "たんぱく質": "2.1g",
      "脂質": "5.8g",
      "炭水化物": "13.3g",
      "食塩相当量": "0.5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_potecabe_hp_220502.html"
  ],
  [
    "トッピングソーセージ（1本）",
    80,
    {
      "カロリー": "87kcal",
      "たんぱく質": "3.5g",
      "脂質": "7.5g",
      "炭水化物": "0.8g",
      "食塩相当量": "0.5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_sausage1_hp_220502.html"
  ],
  [
    "浅漬けお新香",
    90,
    {
      "カロリー": "17kcal",
      "たんぱく質": "0.2g",
      "脂質": "0g",
      "炭水化物": "3.8g",
      "食塩相当量": "0.9g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_oshinko_hp_220502.html"
  ],
  [
    "納豆",
    100,
    {
      "カロリー": "80kcal",
      "たんぱく質": "6.4g",
      "脂質": "3.9g",
      "炭水化物": "6.4g",
      "食塩相当量": "0.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_nato_hp_220502.html"
  ],
  [
    "冷奴",
    100,
    {
      "カロリー": "85kcal",
      "たんぱく質": "7.1g",
      "脂質": "4.4g",
      "炭水化物": "4.4g",
      "食塩相当量": "0g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_hiyayakko_hp_220502.html"
  ],
  [
    "鬼おろしポン酢",
    130,
    {
      "カロリー": "33kcal",
      "たんぱく質": "1.4g",
      "脂質": "0.1g",
      "炭水化物": "7g",
      "食塩相当量": "1.7g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_oroshipon_hp_220502.html"
  ],
  [
    "味噌ソース",
    130,
    {
      "カロリー": "95kcal",
      "たんぱく質": "2.5g",
      "脂質": "2.5g",
      "炭水化物": "14.5g",
      "食塩相当量": "2.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_miso_sauce_hp_220502.html"
  ],
  [
    "豚汁",
    180,
    {
      "カロリー": "144kcal",
      "たんぱく質": "7.4g",
      "脂質": "7.2g",
      "炭水化物": "12.4g",
      "食塩相当量": "3.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_tonjiru_hp_200819.html"
  ],
  [
    "目玉焼き＆ソーセージ",
    200,
    {
      "カロリー": "246kcal",
      "たんぱく質": "15.1g",
      "脂質": "19g",
      "炭水化物": "1.1g",
      "食塩相当量": "0.8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_eggssg_hp_200819.html"
  ],
  [
    "ライス 並盛",
    200,
    {
      "カロリー": "343kcal",
      "たんぱく質": "5.5g",
      "脂質": "0.7g",
      "炭水化物": "81.6g",
      "食塩相当量": "0g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_rice_hp.html"
  ],
  [
    "ライス 大盛",
    260,
    {
      "カロリー": "499kcal",
      "たんぱく質": "8g",
      "脂質": "1g",
      "炭水化物": "118.7g",
      "食塩相当量": "0g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_rice_hp.html"
  ],
  [
    "ライス 特盛",
    300,
    {
      "カロリー": "624kcal",
      "たんぱく質": "10g",
      "脂質": "1.2g",
      "炭水化物": "148.4g",
      "食塩相当量": "0g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_rice_hp.html"
  ],
  [
    "みそ汁",
    60,
    {
      "カロリー": "28kcal",
      "たんぱく質": "1.4g",
      "脂質": "0.7g",
      "炭水化物": "3.7g",
      "食塩相当量": "1.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_misoshiru_hp_200819.html"
  ]
];