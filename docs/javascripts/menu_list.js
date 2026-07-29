const MATSUNOYA_MENU_LIST = [
  [
    "“超厚”リブロースand玉子のタレかつ丼 並盛",
    1090,
    {
      "カロリー": "1426kcal",
      "たんぱく質": "61.7g",
      "脂質": "72.8g",
      "炭水化物": "125.1g",
      "食塩相当量": "6.9g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_ribu_tare_hp_260729.html"
  ],
  [
    "“超厚”リブロースand玉子のタレかつ丼 大盛",
    1170,
    {
      "カロリー": "1582kcal",
      "たんぱく質": "64.2g",
      "脂質": "73.1g",
      "炭水化物": "162.2g",
      "食塩相当量": "6.9g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_ribu_tare_hp_260729.html"
  ],
  [
    "“超厚”リブロースand玉子のタレかつ丼ミニうどんセット 並盛",
    1190,
    {
      "カロリー": "1585kcal",
      "たんぱく質": "66.3g",
      "脂質": "73.4g",
      "炭水化物": "156.1g",
      "食塩相当量": "9.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_ribu_tare_miniudon_hp_260729.html"
  ],
  [
    "“超厚”リブロースand玉子のタレかつ丼ミニうどんセット 大盛",
    1270,
    {
      "カロリー": "1741kcal",
      "たんぱく質": "68.8g",
      "脂質": "73.7g",
      "炭水化物": "193.2g",
      "食塩相当量": "9.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_ribu_tare_miniudon_hp_260729.html"
  ],
  [
    "国産雪国育ち丸太ヒレかつ（２本）定食",
    1590,
    {
      "カロリー": "1213kcal",
      "たんぱく質": "61.6g",
      "脂質": "45.9g",
      "炭水化物": "144.8g",
      "食塩相当量": "5.3g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_yuki_marutahire2_hp_260722.html"
  ],
  [
    "ロースかつ＆国産雪国育ち丸太ヒレかつ（１本）定食",
    1190,
    {
      "カロリー": "1242kcal",
      "たんぱく質": "53.6g",
      "脂質": "54g",
      "炭水化物": "141.1g",
      "食塩相当量": "5.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_yuki_marutahire_hp_260722.html"
  ],
  [
    "超厚切りリブロースかつ＆国産雪国育ち丸太ヒレかつ（１本）定食",
    1390,
    {
      "カロリー": "1594kcal",
      "たんぱく質": "70.8g",
      "脂質": "80.2g",
      "炭水化物": "147.3g",
      "食塩相当量": "5.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_ribu_yuki_marutahire_hp_260722.html"
  ],
  [
    "創業ビーフ国産雪国育ち丸太ヒレかつ（１本）カレー 並盛",
    1190,
    {
      "カロリー": "1178kcal",
      "たんぱく質": "44.7g",
      "脂質": "50.4g",
      "炭水化物": "137.2g",
      "食塩相当量": "5.9g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/osusume/cry_marutahire_sougyou_hp_260722.html"
  ],
  [
    "創業ビーフ国産雪国育ち丸太ヒレかつ（１本）カレー 大盛",
    1270,
    {
      "カロリー": "1334kcal",
      "たんぱく質": "47.2g",
      "脂質": "50.7g",
      "炭水化物": "174.3g",
      "食塩相当量": "5.9g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/osusume/cry_marutahire_sougyou_hp_260722.html"
  ],
  [
    "“肉厚”チキン“むね”かつ定食",
    890,
    {
      "カロリー": "1048kcal",
      "たんぱく質": "48.5g",
      "脂質": "43.6g",
      "炭水化物": "121.4g",
      "食塩相当量": "3.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_nikuatu_mune_hp_260715.html"
  ],
  [
    "“肉厚”チキン“むね”かつ＆ロースかつ定食",
    1190,
    {
      "カロリー": "1490kcal",
      "たんぱく質": "67.4g",
      "脂質": "74g",
      "炭水化物": "145.3g",
      "食塩相当量": "4.5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_nikuatu_mune_rosu_hp_260715.html"
  ],
  [
    "“肉厚”チキン“むね”かつ＆海老フライ1尾定食",
    1190,
    {
      "カロリー": "1289kcal",
      "たんぱく質": "54.5g",
      "脂質": "63.6g",
      "炭水化物": "131.1g",
      "食塩相当量": "4.7g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_nikuatu_mune_ebi1_hp_260715.html"
  ],
  [
    "“肉厚”チキン“むね”かつ＆海老フライ2尾定食",
    1390,
    {
      "カロリー": "1465kcal",
      "たんぱく質": "59.9g",
      "脂質": "77.5g",
      "炭水化物": "138.4g",
      "食塩相当量": "5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_nikuatu_mune_ebi2_hp_260715.html"
  ],
  [
    "“肉厚”チキン“むね”かつ＆本格唐揚げ定食",
    1190,
    {
      "カロリー": "1329kcal",
      "たんぱく質": "65.5g",
      "脂質": "60.7g",
      "炭水化物": "137.3g",
      "食塩相当量": "5.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_nikuatu_mune_kara_hp_260715.html"
  ],
  [
    "ガーリックソースチキンむねかつ定食",
    890,
    {
      "カロリー": "922kcal",
      "たんぱく質": "36.1g",
      "脂質": "34.7g",
      "炭水化物": "121.7g",
      "食塩相当量": "3.5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_garimune_hp_260715.html"
  ],
  [
    "ガーリックソースたっぷりチキンむねかつ定食",
    990,
    {
      "カロリー": "1148kcal",
      "たんぱく質": "50g",
      "脂質": "47.2g",
      "炭水化物": "136.9g",
      "食塩相当量": "4.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_tappurimune_hp_260715.html"
  ],
  [
    "鬼おろしポン酢チキンむねかつ定食",
    890,
    {
      "カロリー": "871kcal",
      "たんぱく質": "37.1g",
      "脂質": "26.5g",
      "炭水化物": "126.4g",
      "食塩相当量": "4.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_mune_oro_hp_260715.html"
  ],
  [
    "鬼おろしポン酢たっぷりチキンむねかつ定食",
    990,
    {
      "カロリー": "1096kcal",
      "たんぱく質": "51.1g",
      "脂質": "39g",
      "炭水化物": "141.6g",
      "食塩相当量": "5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_tappurimune_oro_hp_260715.html"
  ],
  [
    "味噌チキンむねかつ定食",
    890,
    {
      "カロリー": "935kcal",
      "たんぱく質": "38.3g",
      "脂質": "28.9g",
      "炭水化物": "134.3g",
      "食塩相当量": "4.9g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_mune_miso_hp_260715.html"
  ],
  [
    "味噌たっぷりチキンむねかつ定食",
    990,
    {
      "カロリー": "1160kcal",
      "たんぱく質": "52.2g",
      "脂質": "41.4g",
      "炭水化物": "149.5g",
      "食塩相当量": "5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_tappurimune_miso_hp_260715.html"
  ],
  [
    "ロースかつ＆ガーリックソースチキンむねかつ１本定食",
    990,
    {
      "カロリー": "1139kcal",
      "たんぱく質": "41g",
      "脂質": "52.5g",
      "炭水化物": "130.5g",
      "食塩相当量": "3.8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_mune1_hp_260715.html"
  ],
  [
    "ロースかつ＆ガーリックソースチキンむねかつ２本定食",
    1190,
    {
      "カロリー": "1365kcal",
      "たんぱく質": "55g",
      "脂質": "65g",
      "炭水化物": "145.7g",
      "食塩相当量": "4.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_mune2_hp_260715.html"
  ],
  [
    "ロースかつ丼ミニうどんセット 並盛",
    890,
    {
      "カロリー": "1169kcal",
      "たんぱく質": "44.3g",
      "脂質": "41.9g",
      "炭水化物": "151.2g",
      "食塩相当量": "8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_rosu_miniudon_hp_260715.html"
  ],
  [
    "ロースかつ丼ミニうどんセット 大盛",
    970,
    {
      "カロリー": "1348kcal",
      "たんぱく質": "47.9g",
      "脂質": "42.2g",
      "炭水化物": "192.3g",
      "食塩相当量": "9.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_rosu_miniudon_hp_260715.html"
  ],
  [
    "鬼おろしポン酢ロースかつ丼ミニうどんセット 並盛",
    890,
    {
      "カロリー": "1007kcal",
      "たんぱく質": "31.9g",
      "脂質": "32.3g",
      "炭水化物": "147.9g",
      "食塩相当量": "6.7g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_rosu_orishi_miniudon_hp_260715.html"
  ],
  [
    "鬼おろしポン酢ロースかつ丼ミニうどんセット 大盛",
    970,
    {
      "カロリー": "1163kcal",
      "たんぱく質": "34.4g",
      "脂質": "32.6g",
      "炭水化物": "185g",
      "食塩相当量": "6.7g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_rosu_orishi_miniudon_hp_260715.html"
  ],
  [
    "味噌ロースかつ丼ミニうどんセット 並盛",
    890,
    {
      "カロリー": "1071kcal",
      "たんぱく質": "33.1g",
      "脂質": "34.7g",
      "炭水化物": "155.8g",
      "食塩相当量": "7.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_rosu_miso_miniudon_hp_260715.html"
  ],
  [
    "味噌ロースかつ丼ミニうどんセット 大盛",
    970,
    {
      "カロリー": "1227kcal",
      "たんぱく質": "35.6g",
      "脂質": "35g",
      "炭水化物": "192.9g",
      "食塩相当量": "7.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_rosu_miso_miniudon_hp_260715.html"
  ],
  [
    "ロースかつ定食ミニうどんセット",
    930,
    {
      "カロリー": "988kcal",
      "たんぱく質": "31.3g",
      "脂質": "32.3g",
      "炭水化物": "144.5g",
      "食塩相当量": "5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_rosu_miniudon_hp_260715.html"
  ],
  [
    "鬼おろしポン酢ロースかつ定食ミニうどんセット",
    990,
    {
      "カロリー": "1020kcal",
      "たんぱく質": "32.7g",
      "脂質": "32.4g",
      "炭水化物": "151g",
      "食塩相当量": "6.7g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_oroshipon_rosu_miniudon_hp_260715.html"
  ],
  [
    "味噌ロースかつ定食ミニうどんセット",
    990,
    {
      "カロリー": "1084kcal",
      "たんぱく質": "33.8g",
      "脂質": "34.8g",
      "炭水化物": "159g",
      "食塩相当量": "7.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_miso_rosu_miniudon_hp_260715.html"
  ],
  [
    "創業ビーフロースかつカレー 並盛",
    980,
    {
      "カロリー": "1207kcal",
      "たんぱく質": "36.7g",
      "脂質": "58.6g",
      "炭水化物": "133.5g",
      "食塩相当量": "6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/osusume/cry_rosu_sougyou_hp_260708.html"
  ],
  [
    "創業ビーフロースかつカレー 大盛",
    1060,
    {
      "カロリー": "1363kcal",
      "たんぱく質": "39.2g",
      "脂質": "58.9g",
      "炭水化物": "170.6g",
      "食塩相当量": "6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/osusume/cry_rosu_sougyou_hp_260708.html"
  ],
  [
    "創業ビーフ超厚切りリブロースかつカレー 並盛",
    1170,
    {
      "カロリー": "1559kcal",
      "たんぱく質": "53.9g",
      "脂質": "84.8g",
      "炭水化物": "139.7g",
      "食塩相当量": "6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/osusume/cry_ribu_sougyo_hp_260708.html"
  ],
  [
    "創業ビーフ超厚切りリブロースかつカレー 大盛",
    1250,
    {
      "カロリー": "1715kcal",
      "たんぱく質": "56.4g",
      "脂質": "85.1g",
      "炭水化物": "176.8g",
      "食塩相当量": "6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/osusume/cry_ribu_sougyo_hp_260708.html"
  ],
  [
    "海鮮盛合せ定食（イカ・白身魚・海老）",
    1190,
    {
      "カロリー": "1084.3kcal",
      "たんぱく質": "32.4g",
      "脂質": "50.9g",
      "炭水化物": "128.3g",
      "食塩相当量": "4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_kaisen_ikashiromiebi_hp_260701.html"
  ],
  [
    "ロースかつ＆イカフライ定食",
    990,
    {
      "カロリー": "1006.7kcal",
      "たんぱく質": "33.4g",
      "脂質": "44.1g",
      "炭水化物": "124.1g",
      "食塩相当量": "4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_ika_hp_260701.html"
  ],
  [
    "ロースかつ＆白身魚フライ定食",
    990,
    {
      "カロリー": "1127.4kcal",
      "たんぱく質": "33.8g",
      "脂質": "55g",
      "炭水化物": "128.3g",
      "食塩相当量": "4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_shiromi_hp_260701.html"
  ],
  [
    "国産雪国育ち丸太ヒレかつ（２本）定食",
    1590,
    {
      "カロリー": "1213kcal",
      "たんぱく質": "61.6g",
      "脂質": "45.9g",
      "炭水化物": "144.8g",
      "食塩相当量": "5.3g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_yuki_marutahire2_hp_260722.html"
  ],
  [
    "“肉厚”チキン“むね”かつ定食",
    890,
    {
      "カロリー": "1048kcal",
      "たんぱく質": "48.5g",
      "脂質": "43.6g",
      "炭水化物": "121.4g",
      "食塩相当量": "3.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_nikuatu_mune_hp_260715.html"
  ],
  [
    "ガーリックソースチキンむねかつ定食",
    890,
    {
      "カロリー": "922kcal",
      "たんぱく質": "36.1g",
      "脂質": "34.7g",
      "炭水化物": "121.7g",
      "食塩相当量": "3.5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_garimune_hp_260715.html"
  ],
  [
    "ガーリックソースたっぷりチキンむねかつ定食",
    990,
    {
      "カロリー": "1148kcal",
      "たんぱく質": "50g",
      "脂質": "47.2g",
      "炭水化物": "136.9g",
      "食塩相当量": "4.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_tappurimune_hp_260715.html"
  ],
  [
    "鬼おろしポン酢チキンむねかつ定食",
    890,
    {
      "カロリー": "871kcal",
      "たんぱく質": "37.1g",
      "脂質": "26.5g",
      "炭水化物": "126.4g",
      "食塩相当量": "4.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_mune_oro_hp_260715.html"
  ],
  [
    "鬼おろしポン酢たっぷりチキンむねかつ定食",
    990,
    {
      "カロリー": "1096kcal",
      "たんぱく質": "51.1g",
      "脂質": "39g",
      "炭水化物": "141.6g",
      "食塩相当量": "5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_tappurimune_oro_hp_260715.html"
  ],
  [
    "味噌チキンむねかつ定食",
    890,
    {
      "カロリー": "935kcal",
      "たんぱく質": "38.3g",
      "脂質": "28.9g",
      "炭水化物": "134.3g",
      "食塩相当量": "4.9g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_mune_miso_hp_260715.html"
  ],
  [
    "味噌たっぷりチキンむねかつ定食",
    990,
    {
      "カロリー": "1160kcal",
      "たんぱく質": "52.2g",
      "脂質": "41.4g",
      "炭水化物": "149.5g",
      "食塩相当量": "5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_tappurimune_miso_hp_260715.html"
  ],
  [
    "ロースかつ定食ミニうどんセット",
    930,
    {
      "カロリー": "988kcal",
      "たんぱく質": "31.3g",
      "脂質": "32.3g",
      "炭水化物": "144.5g",
      "食塩相当量": "5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_rosu_miniudon_hp_260715.html"
  ],
  [
    "鬼おろしポン酢ロースかつ定食ミニうどんセット",
    990,
    {
      "カロリー": "1020kcal",
      "たんぱく質": "32.7g",
      "脂質": "32.4g",
      "炭水化物": "151g",
      "食塩相当量": "6.7g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_oroshipon_rosu_miniudon_hp_260715.html"
  ],
  [
    "味噌ロースかつ定食ミニうどんセット",
    990,
    {
      "カロリー": "1084kcal",
      "たんぱく質": "33.8g",
      "脂質": "34.8g",
      "炭水化物": "159g",
      "食塩相当量": "7.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_miso_rosu_miniudon_hp_260715.html"
  ],
  [
    "超厚切りリブロースかつ定食",
    1050,
    {
      "カロリー": "1181kcal",
      "たんぱく質": "43.9g",
      "脂質": "58g",
      "炭水化物": "119.7g",
      "食塩相当量": "2.8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_ribu_hp_260624.html"
  ],
  [
    "超厚切りリブ鬼おろしポン酢ロースかつ定食",
    1150,
    {
      "カロリー": "1213kcal",
      "たんぱく質": "45.3g",
      "脂質": "58.1g",
      "炭水化物": "126.2g",
      "食塩相当量": "4.5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_ribu_oni_hp_260624.html"
  ],
  [
    "超厚切りリブ味噌ロースかつ定食",
    1150,
    {
      "カロリー": "1277kcal",
      "たんぱく質": "46.4g",
      "脂質": "60.5g",
      "炭水化物": "134.1g",
      "食塩相当量": "4.9g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_ribu_miso_hp_260624.html"
  ],
  [
    "うまトマ超厚切りリブロースかつ定食",
    1290,
    {
      "カロリー": "1387kcal",
      "たんぱく質": "52.6g",
      "脂質": "70.3g",
      "炭水化物": "132.9g",
      "食塩相当量": "5.5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_umatoma_ribu_hp_260624.html"
  ],
  [
    "チーズうまトマ超厚切りリブロースかつ定食",
    1390,
    {
      "カロリー": "1546kcal",
      "たんぱく質": "60.7g",
      "脂質": "83.6g",
      "炭水化物": "134.4g",
      "食塩相当量": "6.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_ch_umatoma_ribu_oni_hp_260624.html"
  ],
  [
    "うまトマロースかつ定食",
    990,
    {
      "カロリー": "1036kcal",
      "たんぱく質": "35.4g",
      "脂質": "44.1g",
      "炭水化物": "126.7g",
      "食塩相当量": "5.2g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_umatoma_rosu_hp_260506.html"
  ],
  [
    "チーズうまトマロースかつ定食",
    1190,
    {
      "カロリー": "1195kcal",
      "たんぱく質": "43.5g",
      "脂質": "57.4g",
      "炭水化物": "128.2g",
      "食塩相当量": "6.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_ch_umatoma_rosu_oni_hp_260506.html"
  ],
  [
    "ロースかつ定食",
    690,
    {
      "カロリー": "830kcal",
      "たんぱく質": "26.8g",
      "脂質": "31.8g",
      "炭水化物": "113.4g",
      "食塩相当量": "2.5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_rosu_hp_260506.html"
  ],
  [
    "ダブルロースかつ定食",
    1050,
    {
      "カロリー": "1272kcal",
      "たんぱく質": "45.6g",
      "脂質": "62.2g",
      "炭水化物": "137.4g",
      "食塩相当量": "3.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/mori_w_rosu_hp_260506.html"
  ],
  [
    "鬼おろしポン酢ロースかつ定食",
    790,
    {
      "カロリー": "861kcal",
      "たんぱく質": "28.1g",
      "脂質": "31.9g",
      "炭水化物": "120g",
      "食塩相当量": "4.2g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_oroshipon_rosu_hp_260506.html"
  ],
  [
    "ダブル鬼おろしポン酢ロースかつ定食",
    1150,
    {
      "カロリー": "1303kcal",
      "たんぱく質": "47g",
      "脂質": "62.2g",
      "炭水化物": "143.9g",
      "食塩相当量": "5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/mori_w_rosu_oroshipon_hp_260506.html"
  ],
  [
    "味噌ロースかつ定食",
    790,
    {
      "カロリー": "925kcal",
      "たんぱく質": "29.3g",
      "脂質": "34.3g",
      "炭水化物": "127.9g",
      "食塩相当量": "4.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_miso_rosu_hp_260506.html"
  ],
  [
    "ダブル味噌ロースかつ定食",
    1150,
    {
      "カロリー": "1367kcal",
      "たんぱく質": "48.1g",
      "脂質": "64.7g",
      "炭水化物": "151.9g",
      "食塩相当量": "5.5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/mori_w_rosu_miso_hp_260506.html"
  ],
  [
    "本格唐揚げ定食（5個）",
    890,
    {
      "カロリー": "994kcal",
      "たんぱく質": "36.4g",
      "脂質": "44.7g",
      "炭水化物": "117.1g",
      "食塩相当量": "5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_karaage5_hp_260708.html"
  ],
  [
    "本格唐揚げ定食（8個）",
    1160,
    {
      "カロリー": "1275kcal",
      "たんぱく質": "53.4g",
      "脂質": "61.8g",
      "炭水化物": "133g",
      "食塩相当量": "6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_karaage8_hp_260708.html"
  ],
  [
    "鬼おろしポン酢本格唐揚げ定食（5個）",
    930,
    {
      "カロリー": "887kcal",
      "たんぱく質": "37.6g",
      "脂質": "30g",
      "炭水化物": "122.5g",
      "食塩相当量": "6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_oroshipon_karaage5_hp_260708.html"
  ],
  [
    "鬼おろしポン酢本格唐揚げ定食（8個）",
    1190,
    {
      "カロリー": "1168kcal",
      "たんぱく質": "54.6g",
      "脂質": "47g",
      "炭水化物": "138.4g",
      "食塩相当量": "7g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/teishoku/tei_oroshipon_karaage8_hp_260708.html"
  ],
  [
    "ロースかつ＆国産雪国育ち丸太ヒレかつ（１本）定食",
    1190,
    {
      "カロリー": "1242kcal",
      "たんぱく質": "53.6g",
      "脂質": "54g",
      "炭水化物": "141.1g",
      "食塩相当量": "5.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_yuki_marutahire_hp_260722.html"
  ],
  [
    "超厚切りリブロースかつ＆国産雪国育ち丸太ヒレかつ（１本）定食",
    1390,
    {
      "カロリー": "1594kcal",
      "たんぱく質": "70.8g",
      "脂質": "80.2g",
      "炭水化物": "147.3g",
      "食塩相当量": "5.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_ribu_yuki_marutahire_hp_260722.html"
  ],
  [
    "“肉厚”チキン“むね”かつ＆ロースかつ定食",
    1190,
    {
      "カロリー": "1490kcal",
      "たんぱく質": "67.4g",
      "脂質": "74g",
      "炭水化物": "145.3g",
      "食塩相当量": "4.5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_nikuatu_mune_rosu_hp_260715.html"
  ],
  [
    "“肉厚”チキン“むね”かつ＆海老フライ1尾定食",
    1190,
    {
      "カロリー": "1289kcal",
      "たんぱく質": "54.5g",
      "脂質": "63.6g",
      "炭水化物": "131.1g",
      "食塩相当量": "4.7g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_nikuatu_mune_ebi1_hp_260715.html"
  ],
  [
    "“肉厚”チキン“むね”かつ＆海老フライ2尾定食",
    1390,
    {
      "カロリー": "1465kcal",
      "たんぱく質": "59.9g",
      "脂質": "77.5g",
      "炭水化物": "138.4g",
      "食塩相当量": "5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_nikuatu_mune_ebi2_hp_260715.html"
  ],
  [
    "“肉厚”チキン“むね”かつ＆本格唐揚げ定食",
    1190,
    {
      "カロリー": "1329kcal",
      "たんぱく質": "65.5g",
      "脂質": "60.7g",
      "炭水化物": "137.3g",
      "食塩相当量": "5.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_nikuatu_mune_kara_hp_260715.html"
  ],
  [
    "ロースかつ＆ガーリックソースチキンむねかつ１本定食",
    990,
    {
      "カロリー": "1139kcal",
      "たんぱく質": "41g",
      "脂質": "52.5g",
      "炭水化物": "130.5g",
      "食塩相当量": "3.8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_mune1_hp_260715.html"
  ],
  [
    "ロースかつ＆ガーリックソースチキンむねかつ２本定食",
    1190,
    {
      "カロリー": "1365kcal",
      "たんぱく質": "55g",
      "脂質": "65g",
      "炭水化物": "145.7g",
      "食塩相当量": "4.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_mune2_hp_260715.html"
  ],
  [
    "海鮮盛合せ定食（イカ・白身魚・海老）",
    1190,
    {
      "カロリー": "1084.3kcal",
      "たんぱく質": "32.4g",
      "脂質": "50.9g",
      "炭水化物": "128.3g",
      "食塩相当量": "4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_kaisen_ikashiromiebi_hp_260701.html"
  ],
  [
    "ロースかつ＆イカフライ定食",
    990,
    {
      "カロリー": "1006.7kcal",
      "たんぱく質": "33.4g",
      "脂質": "44.1g",
      "炭水化物": "124.1g",
      "食塩相当量": "4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_ika_hp_260701.html"
  ],
  [
    "ロースかつ＆白身魚フライ定食",
    990,
    {
      "カロリー": "1127.4kcal",
      "たんぱく質": "33.8g",
      "脂質": "55g",
      "炭水化物": "128.3g",
      "食塩相当量": "4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_shiromi_hp_260701.html"
  ],
  [
    "超厚切りリブロースかつ＆海老フライ１尾定食",
    1250,
    {
      "カロリー": "1423kcal",
      "たんぱく質": "49.9g",
      "脂質": "78g",
      "炭水化物": "129.4g",
      "食塩相当量": "3.9g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_ribu_ebi1_hp_260624.html"
  ],
  [
    "超厚切りリブロースかつ＆海老フライ2尾定食",
    1530,
    {
      "カロリー": "1599kcal",
      "たんぱく質": "55.3g",
      "脂質": "91.9g",
      "炭水化物": "136.7g",
      "食塩相当量": "4.2g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_ribu_ebi2_hp_260624.html"
  ],
  [
    "超厚切りリブロースかつ＆本格唐揚げ定食",
    1350,
    {
      "カロリー": "1601kcal",
      "たんぱく質": "61.1g",
      "脂質": "89.9g",
      "炭水化物": "136.7g",
      "食塩相当量": "5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_ribu_karaage_hp_260708.html"
  ],
  [
    "ロースかつ＆海老フライ（1尾）定食",
    970,
    {
      "カロリー": "1071kcal",
      "たんぱく質": "32.7g",
      "脂質": "51.8g",
      "炭水化物": "123.2g",
      "食塩相当量": "3.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_ebi1_hp_260506.html"
  ],
  [
    "ロースかつ＆海老フライ（2尾）定食",
    1250,
    {
      "カロリー": "1247kcal",
      "たんぱく質": "38.1g",
      "脂質": "65.7g",
      "炭水化物": "130.5g",
      "食塩相当量": "3.9g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_ebi2_hp_260506.html"
  ],
  [
    "ロースかつ＆本格唐揚げ定食",
    990,
    {
      "カロリー": "1249kcal",
      "たんぱく質": "43.9g",
      "脂質": "63.7g",
      "炭水化物": "130.5g",
      "食塩相当量": "4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/moriawase/mori_rosu_kara_hp_260708.html"
  ],
  [
    "“超厚”リブロースand玉子のタレかつ丼 並盛",
    1090,
    {
      "カロリー": "1426kcal",
      "たんぱく質": "61.7g",
      "脂質": "72.8g",
      "炭水化物": "125.1g",
      "食塩相当量": "6.9g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_ribu_tare_hp_260729.html"
  ],
  [
    "“超厚”リブロースand玉子のタレかつ丼 大盛",
    1170,
    {
      "カロリー": "1582kcal",
      "たんぱく質": "64.2g",
      "脂質": "73.1g",
      "炭水化物": "162.2g",
      "食塩相当量": "6.9g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_ribu_tare_hp_260729.html"
  ],
  [
    "“超厚”リブロースand玉子のタレかつ丼ミニうどんセット 並盛",
    1190,
    {
      "カロリー": "1585kcal",
      "たんぱく質": "66.3g",
      "脂質": "73.4g",
      "炭水化物": "156.1g",
      "食塩相当量": "9.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_ribu_tare_miniudon_hp_260729.html"
  ],
  [
    "“超厚”リブロースand玉子のタレかつ丼ミニうどんセット 大盛",
    1270,
    {
      "カロリー": "1741kcal",
      "たんぱく質": "68.8g",
      "脂質": "73.7g",
      "炭水化物": "193.2g",
      "食塩相当量": "9.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_ribu_tare_miniudon_hp_260729.html"
  ],
  [
    "ロースかつ丼ミニうどんセット 並盛",
    890,
    {
      "カロリー": "1169kcal",
      "たんぱく質": "44.3g",
      "脂質": "41.9g",
      "炭水化物": "151.2g",
      "食塩相当量": "8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_rosu_miniudon_hp_260715.html"
  ],
  [
    "ロースかつ丼ミニうどんセット 大盛",
    970,
    {
      "カロリー": "1348kcal",
      "たんぱく質": "47.9g",
      "脂質": "42.2g",
      "炭水化物": "192.3g",
      "食塩相当量": "9.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_rosu_miniudon_hp_260715.html"
  ],
  [
    "鬼おろしポン酢ロースかつ丼ミニうどんセット 並盛",
    890,
    {
      "カロリー": "1007kcal",
      "たんぱく質": "31.9g",
      "脂質": "32.3g",
      "炭水化物": "147.9g",
      "食塩相当量": "6.7g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_rosu_orishi_miniudon_hp_260715.html"
  ],
  [
    "鬼おろしポン酢ロースかつ丼ミニうどんセット 大盛",
    970,
    {
      "カロリー": "1163kcal",
      "たんぱく質": "34.4g",
      "脂質": "32.6g",
      "炭水化物": "185g",
      "食塩相当量": "6.7g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_rosu_orishi_miniudon_hp_260715.html"
  ],
  [
    "味噌ロースかつ丼ミニうどんセット 並盛",
    890,
    {
      "カロリー": "1071kcal",
      "たんぱく質": "33.1g",
      "脂質": "34.7g",
      "炭水化物": "155.8g",
      "食塩相当量": "7.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_rosu_miso_miniudon_hp_260715.html"
  ],
  [
    "味噌ロースかつ丼ミニうどんセット 大盛",
    970,
    {
      "カロリー": "1227kcal",
      "たんぱく質": "35.6g",
      "脂質": "35g",
      "炭水化物": "192.9g",
      "食塩相当量": "7.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_rosu_miso_miniudon_hp_260715.html"
  ],
  [
    "超厚切りリブロースかつ丼 並盛",
    1050,
    {
      "カロリー": "1362kcal",
      "たんぱく質": "56.9g",
      "脂質": "67.6g",
      "炭水化物": "126.4g",
      "食塩相当量": "5.8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_ribu_hp_260624.html"
  ],
  [
    "超厚切りリブロースかつ丼 大盛",
    1130,
    {
      "カロリー": "1541kcal",
      "たんぱく質": "60.5g",
      "脂質": "67.9g",
      "炭水化物": "167.5g",
      "食塩相当量": "7.2g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_ribu_hp_260624.html"
  ],
  [
    "ロースかつ丼 並盛",
    690,
    {
      "カロリー": "1011kcal",
      "たんぱく質": "39.8g",
      "脂質": "41.4g",
      "炭水化物": "120.2g",
      "食塩相当量": "5.5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_rosu_hp_260506.html"
  ],
  [
    "ロースかつ丼 大盛",
    770,
    {
      "カロリー": "1190kcal",
      "たんぱく質": "43.3g",
      "脂質": "41.7g",
      "炭水化物": "161.3g",
      "食塩相当量": "6.9g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_rosu_hp_260506.html"
  ],
  [
    "味噌ロースかつ丼 並盛",
    690,
    {
      "カロリー": "913kcal",
      "たんぱく質": "28.5g",
      "脂質": "34.2g",
      "炭水化物": "124.8g",
      "食塩相当量": "4.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_rosu_miso_hp_260506.html"
  ],
  [
    "味噌ロースかつ丼 大盛",
    770,
    {
      "カロリー": "1069kcal",
      "たんぱく質": "31g",
      "脂質": "34.5g",
      "炭水化物": "161.9g",
      "食塩相当量": "4.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/donburi/don_rosu_miso_hp_260506.html"
  ],
  [
    "お子様パンケーキプレート",
    500,
    {
      "カロリー": "413kcal",
      "たんぱく質": "4.2g",
      "脂質": "8.5g",
      "炭水化物": "79.5g",
      "食塩相当量": "1.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/sumikko/okosama_pan_hp_251126.html"
  ],
  [
    "お子様プレート",
    500,
    {
      "カロリー": "762kcal",
      "たんぱく質": "17.5g",
      "脂質": "25.8g",
      "炭水化物": "116.8g",
      "食塩相当量": "1.7g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/sumikko/ageage_okosama_hp_240809_nn.html"
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
    "【惣菜セット】ロースかつ１枚＋海老フライ２尾＋ハーフポテトフライ",
    1020,
    {
      "カロリー": "949kcal",
      "たんぱく質": "31.3g",
      "脂質": "66g",
      "炭水化物": "56.8g",
      "食塩相当量": "1.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_set_rosu1_ebi2_hp_260729.html"
  ],
  [
    "【惣菜セット】本格唐揚げ３個＋海老フライ２尾＋ハーフポテトフライ",
    980,
    {
      "カロリー": "787kcal",
      "たんぱく質": "29.4g",
      "脂質": "52.7g",
      "炭水化物": "48.7g",
      "食塩相当量": "2.3g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_set_kara3_ebi2_hp_260729.html"
  ],
  [
    "【惣菜セット】海老フライ２尾＋コロッケ２個＋ハーフポテトフライ",
    810,
    {
      "カロリー": "820kcal",
      "たんぱく質": "16.8g",
      "脂質": "56.3g",
      "炭水化物": "60.6g",
      "食塩相当量": "1.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_set_ebi2_koro2_hp_260729.html"
  ],
  [
    "【惣菜セット】ロースかつ１枚＋本格唐揚げ３個＋ハーフポテトフライ",
    770,
    {
      "カロリー": "877kcal",
      "たんぱく質": "37.5g",
      "脂質": "55.3g",
      "炭水化物": "58g",
      "食塩相当量": "2.5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_set_rosu1_kara3_hp_260729.html"
  ],
  [
    "【惣菜セット】ロースかつ１枚＋コロッケ２個＋ハーフポテトフライ",
    650,
    {
      "カロリー": "910kcal",
      "たんぱく質": "24.9g",
      "脂質": "58.9g",
      "炭水化物": "69.8g",
      "食塩相当量": "1.9g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_set_rosu1_koro2_hp_260729.html"
  ],
  [
    "【惣菜セット】本格唐揚げ３個＋コロッケ２個＋ハーフポテトフライ",
    610,
    {
      "カロリー": "748kcal",
      "たんぱく質": "23g",
      "脂質": "45.6g",
      "炭水化物": "61.7g",
      "食塩相当量": "2.5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_set_kara3_koro2_hp_260729.html"
  ],
  [
    "単品 国産雪国育ち丸太ヒレかつ",
    850,
    {
      "カロリー": "413kcal",
      "たんぱく質": "26.9g",
      "脂質": "22.2g",
      "炭水化物": "27.6g",
      "食塩相当量": "2.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_yuki_marutahire_hp_260722.html"
  ],
  [
    "単品“肉厚”チキン“むね”かつ",
    590,
    {
      "カロリー": "577kcal",
      "たんぱく質": "40.3g",
      "脂質": "33.9g",
      "炭水化物": "30g",
      "食塩相当量": "1.2g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_nikuatu_mune_hp_260715.html"
  ],
  [
    "単品チキンむねかつ",
    250,
    {
      "カロリー": "226kcal",
      "たんぱく質": "13.9g",
      "脂質": "12.5g",
      "炭水化物": "15.2g",
      "食塩相当量": "0.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_mune_hp_260715.html"
  ],
  [
    "単品イカフライ",
    300,
    {
      "カロリー": "111.5kcal",
      "たんぱく質": "6.1g",
      "脂質": "6.2g",
      "炭水化物": "8.3g",
      "食塩相当量": "0g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_ika_hp_260701.html"
  ],
  [
    "単品白身魚フライ",
    300,
    {
      "カロリー": "232.2kcal",
      "たんぱく質": "6.5g",
      "脂質": "17.1g",
      "炭水化物": "12.5g",
      "食塩相当量": "0g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_shiromi_hp_260701.html"
  ],
  [
    "単品超厚切りリブロースかつ",
    750,
    {
      "カロリー": "793kcal",
      "たんぱく質": "36g",
      "脂質": "56.6g",
      "炭水化物": "30.2g",
      "食塩相当量": "1.2g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_ribu_hp_260624.html"
  ],
  [
    "単品うまトマ超厚切りリブロースかつ",
    990,
    {
      "カロリー": "1000kcal",
      "たんぱく質": "44.7g",
      "脂質": "68.8g",
      "炭水化物": "43.4g",
      "食塩相当量": "3.9g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_umatoma_ribu_hp_260624.html"
  ],
  [
    "単品チーズうまトマ超厚切りリブロースかつ",
    1090,
    {
      "カロリー": "1159kcal",
      "たんぱく質": "52.8g",
      "脂質": "82.2g",
      "炭水化物": "44.9g",
      "食塩相当量": "4.8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_ch_umatoma__ribu_hp_260624.html"
  ],
  [
    "単品うまトマロースかつ",
    690,
    {
      "カロリー": "648kcal",
      "たんぱく質": "27.5g",
      "脂質": "42.6g",
      "炭水化物": "37.2g",
      "食塩相当量": "3.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_umatoma_rosu_hp_260506.html"
  ],
  [
    "単品チーズうまトマロースかつ",
    890,
    {
      "カロリー": "807kcal",
      "たんぱく質": "35.6g",
      "脂質": "55.9g",
      "炭水化物": "38.7g",
      "食塩相当量": "4.5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_ch_umatoma__rosu_hp_260506.html"
  ],
  [
    "単品ロースかつ（1枚）",
    390,
    {
      "カロリー": "442kcal",
      "たんぱく質": "18.9g",
      "脂質": "30.3g",
      "炭水化物": "23.9g",
      "食塩相当量": "0.9g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_rosu_nami1_hp_260506.html"
  ],
  [
    "単品海老フライ（1尾）",
    300,
    {
      "カロリー": "176kcal",
      "たんぱく質": "5.4g",
      "脂質": "13.9g",
      "炭水化物": "7.3g",
      "食塩相当量": "0.3g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_ebi1_hp_220502.html"
  ],
  [
    "ポテトフライ",
    260,
    {
      "カロリー": "329kcal",
      "たんぱく質": "3.5g",
      "脂質": "15.8g",
      "炭水化物": "40.9g",
      "食塩相当量": "0.9g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/side_potatofry_hp_240809.html"
  ],
  [
    "ハーフポテトフライ",
    130,
    {
      "カロリー": "165kcal",
      "たんぱく質": "1.7g",
      "脂質": "7.9g",
      "炭水化物": "20.4g",
      "食塩相当量": "0.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/side_half_potatofry_hp_260729.html"
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
    90,
    {
      "カロリー": "157kcal",
      "たんぱく質": "2.2g",
      "脂質": "10.3g",
      "炭水化物": "13.9g",
      "食塩相当量": "0.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/souzai/souzai_korokke1_hp_240809.html"
  ],
  [
    "豚汁",
    200,
    {
      "カロリー": "144kcal",
      "たんぱく質": "7.4g",
      "脂質": "7.2g",
      "炭水化物": "12.4g",
      "食塩相当量": "3.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_tonjiru_hp_240809.html"
  ],
  [
    "単品ミニうどん",
    290,
    {
      "カロリー": "158kcal",
      "たんぱく質": "4.6g",
      "脂質": "0.5g",
      "炭水化物": "31g",
      "食塩相当量": "2.5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/men__miniudon_hp_260715.html"
  ],
  [
    "単品ガーリックバターソース",
    150,
    {
      "カロリー": "83kcal",
      "たんぱく質": "0.3g",
      "脂質": "8.2g",
      "炭水化物": "1.9g",
      "食塩相当量": "0.8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_sauce_garibata_hp_260715.html"
  ],
  [
    "単品マヨネーズ",
    80,
    {
      "カロリー": "139kcal",
      "たんぱく質": "0.1g",
      "脂質": "14.8g",
      "炭水化物": "1.1g",
      "食塩相当量": "0.4g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_sauce_mayo_hp_260708.html"
  ],
  [
    "単品チーズ",
    200,
    {
      "カロリー": "159kcal",
      "たんぱく質": "8.2g",
      "脂質": "13.4g",
      "炭水化物": "1.5g",
      "食塩相当量": "0.9g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_cheese_hp_260429.html"
  ],
  [
    "タルタルソース",
    60,
    {
      "カロリー": "66kcal",
      "たんぱく質": "0.5g",
      "脂質": "6g",
      "炭水化物": "2.4g",
      "食塩相当量": "0.8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_tarutaru_hp_240809.html"
  ],
  [
    "単品ふりかけ（さけ）",
    60,
    {
      "カロリー": "11kcal",
      "たんぱく質": "0.5g",
      "脂質": "0.6g",
      "炭水化物": "1.1g",
      "食塩相当量": "0.3g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_hurikake_sake_hp_240809.html"
  ],
  [
    "単品ふりかけ（たまご）",
    60,
    {
      "カロリー": "11kcal",
      "たんぱく質": "0.4g",
      "脂質": "0.5g",
      "炭水化物": "1.2g",
      "食塩相当量": "0.2g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_hurikake_tamago_hp_240809.html"
  ],
  [
    "生玉子",
    80,
    {
      "カロリー": "71kcal",
      "たんぱく質": "5.8g",
      "脂質": "4.8g",
      "炭水化物": "0.1g",
      "食塩相当量": "0.2g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_namatamago_hp_240809.html"
  ],
  [
    "トッピングポテサラ",
    90,
    {
      "カロリー": "92kcal",
      "たんぱく質": "1g",
      "脂質": "5.6g",
      "炭水化物": "9.2g",
      "食塩相当量": "0.5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_topping_potesara_hp_240809.html"
  ],
  [
    "ミニポテキャベ",
    100,
    {
      "カロリー": "56kcal",
      "たんぱく質": "1.2g",
      "脂質": "2.9g",
      "炭水化物": "7.2g",
      "食塩相当量": "0.3g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_potecabe_mini_hp_240809.html"
  ],
  [
    "千切りキャベツ",
    100,
    {
      "カロリー": "17kcal",
      "たんぱく質": "1g",
      "脂質": "0.2g",
      "炭水化物": "4.2g",
      "食塩相当量": "0g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_cabbage_hp_250221.html"
  ],
  [
    "ポテキャベ",
    170,
    {
      "カロリー": "109kcal",
      "たんぱく質": "2.1g",
      "脂質": "5.8g",
      "炭水化物": "13.3g",
      "食塩相当量": "0.5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_potecabe_hp_240809.html"
  ],
  [
    "トッピングソーセージ（1本）",
    90,
    {
      "カロリー": "87kcal",
      "たんぱく質": "3.5g",
      "脂質": "7.5g",
      "炭水化物": "0.8g",
      "食塩相当量": "0.5g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_sausage1_hp_240809.html"
  ],
  [
    "浅漬けお新香",
    100,
    {
      "カロリー": "17kcal",
      "たんぱく質": "0.2g",
      "脂質": "0g",
      "炭水化物": "3.8g",
      "食塩相当量": "0.9g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_oshinko_hp_250618.html"
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
    140,
    {
      "カロリー": "32kcal",
      "たんぱく質": "1.4g",
      "脂質": "0.1g",
      "炭水化物": "6.5g",
      "食塩相当量": "1.7g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_oroshipon_hp_240809.html"
  ],
  [
    "味噌ソース",
    140,
    {
      "カロリー": "95kcal",
      "たんぱく質": "2.5g",
      "脂質": "2.5g",
      "炭水化物": "14.5g",
      "食塩相当量": "2.1g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_miso_sauce_hp_240809.html"
  ],
  [
    "目玉焼き＆ソーセージ",
    210,
    {
      "カロリー": "246kcal",
      "たんぱく質": "15.1g",
      "脂質": "19g",
      "炭水化物": "1.1g",
      "食塩相当量": "0.8g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_eggssg_hp_240809.html"
  ],
  [
    "ライス",
    220,
    {
      "カロリー": "343kcal",
      "たんぱく質": "5.5g",
      "脂質": "0.7g",
      "炭水化物": "81.6g",
      "食塩相当量": "0g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_rice_hp_250221.html"
  ],
  [
    "みそ汁",
    90,
    {
      "カロリー": "28kcal",
      "たんぱく質": "1.4g",
      "脂質": "0.7g",
      "炭水化物": "3.7g",
      "食塩相当量": "1.6g"
    },
    "https://www.matsuyafoods.co.jp/matsunoya/menu/side_menu/side_misoshiru_hp_240809.html"
  ]
];