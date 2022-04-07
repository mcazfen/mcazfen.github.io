'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "0beb0911c49063c70710c3c1363ccf48",
".git/config": "18acc3cae086e591269d6aee347c1fe5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "7421a67c1d69add0fc3d418cc6442bd4",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "740a3368d6f8de5388c234de446edf44",
".git/logs/refs/heads/main": "c1a2fad4a97999ec8b0e2bf83cc56aa0",
".git/logs/refs/remotes/origin/main": "f42b1118678aa8bcffd357f49fa6fcd4",
".git/objects/00/bebbb2b3bec511d2b90b106a3925a6fe82c803": "a2d1a4ddef8f694f7aa5cefee5bcc7ce",
".git/objects/02/c00206ea79ca2b8e9ba04601ad6b42d42439ce": "14cf1dfc474b7658fc36692e70dddf36",
".git/objects/03/b5841d48df0d052d5c17192c8ea11914fcaaee": "5c43e85d9747ad2069509aa1b876fc89",
".git/objects/05/6c3afc408aad59ee9d4ecb7576e3b1408318b7": "cd73b20fec9fa814c4edd9a391957e55",
".git/objects/0a/2e6826ded206dc0590240bb0906d4a4149b3f5": "fca2a86924e493162faf252ede95c9b0",
".git/objects/0a/991c9a9edeb9750d52b4a4b3253e9b94c0ffa2": "940160f3ed9cb261447de0dc406700bb",
".git/objects/0c/6b7c3a6a63e5823ba7e899780b4fd91503aac9": "331cdb733572d66a0ec0ba9be392d9d6",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0e/e45b9eba5407bebde865e2b5561f959c7562a2": "c9140aad2225634244ec867697cbb0a6",
".git/objects/12/0249cc7bc088e451607d5bdcd184940a69f10c": "6a6d0998152e45a86bc44b2c0536024a",
".git/objects/1b/51942e95958a2a25f163aab3e72ab697fe9eed": "d7fc62ae58d434b8fc243d4fb4881083",
".git/objects/1d/ff9814e361ef374fddb80e79c81fe54e6aaf5b": "79a96ee601993fbb5af702a9e371ce91",
".git/objects/1e/d8918706913c1d3316d6bee552da673dd645fa": "7a77b20374efce17b721413f793f67b2",
".git/objects/20/5d7cf1cb30db25d3a2ee888beb938e9633f997": "eda6d56c6550a0e265b77994ebf074dd",
".git/objects/21/f7315780b0c7f1ebc0c52c07228816e3c88672": "191b29c274f77fbf5f34950b217f719d",
".git/objects/22/fdecaac2ed91b2e531bbb5079bdc89d6d6dbd4": "b0edf1da944efbed165c0b461a8446eb",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/26/4401eb82f00211b6ea782d6f497c2767cc917d": "40b45c673aa986697ae57e3977e4ede7",
".git/objects/27/7e4d09eecca0a30c06b00fa5f427c8dde4bb5e": "5b826f15040ecc5b2ff7b2827fbf2420",
".git/objects/2a/1fdfabc763b82f3e156851ca34da40a1ae9bba": "ad1fb3db69b552bb79eabe343ac05463",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2e/c13b32f8fe5d54b16e56acfd79b4c0cde2e84d": "e4e436bb072b8a66dc49b93aa1f81eb5",
".git/objects/2f/e796762ef6c23de4ccd17258bb76e14ae9a199": "e54e58564f06609a7cfb3383b180afcb",
".git/objects/31/d764fcad645145fe8d0a5139ff3d635586ed77": "81f076bffd2808dce18824e05f5c01ac",
".git/objects/31/dd4d7d3fc9229ffddd01efc976fe28edd172bd": "3c81b31f423ae7b3a60055393acc1582",
".git/objects/33/247b531c30083d00f37d381811190f451edc68": "f0fdc05128a1d4f8f81b4ab0743ec1b7",
".git/objects/36/a45434ac97a001c08f9ba4e3a6ad2c8ca2fef0": "9c124c779780664708bc617c8b096a72",
".git/objects/37/bc88118bc48b9d07dd161dc6404bef2707aa09": "b65b7d17e3304498322466def0f52d70",
".git/objects/3a/7a35520eca54190194a485202fa2250794edcf": "2f0a1aa7ddd48eeb0cd7aa18f9a35808",
".git/objects/3c/6e791ff5487cce6a785d54e56c901d51b5362e": "7a5463b12d555d6081743804cdb07e72",
".git/objects/3e/c80a5730c5bce7e1c45bd615b67b0ae22f9e02": "35917bb41f4ce4ed4eb5262a20f80e5d",
".git/objects/45/48e306e66f2332f0fb3f75991bd099b47ae6e8": "67eafd04e3158d2c4a9247107a6e4f47",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/da4e9e59cc3b5bd976ee26bb9668cc8c9b7d27": "280448bf344104a9d22cde37661409ea",
".git/objects/4a/1dc2f80b9c6859682e25b6aad6b456bc36ce2e": "628448efc3594e65cc50a02f7998d24d",
".git/objects/4c/9b1526e1cc7279a18d8e213c25ee2dafb4eeca": "291d174113595b2ae75f777e2e391197",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4f/155359d0b71592701a83aab0d7b0f0c75837e6": "f55132e71101699cc4a5508a1988f8f7",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/52/aa2ac6f0811fce713ef258f7a52fecc6dca6a2": "6ebce09ad188dcbefe198de265873f78",
".git/objects/54/a85758322d6060ee3d6378a3cc74372f189ea5": "b801097c0dac5e76d72f709a9e968ea4",
".git/objects/56/755d78750267b8f9e10570fd2ff1c390902db7": "6a2e611e64a63ae35a15eff84becb1d3",
".git/objects/5b/b4a7a135282fd57e3625759c1c6167f64defc2": "3170328b49b205faf7bfb4c5b59f7f5e",
".git/objects/5c/407765d23d225e9bad5ee02a726c8b794e72c9": "efb63d0b81ddfa1fd29ca9e1f5c5b6b9",
".git/objects/5c/abf7b5ed7bed227aa9d47f7bef44973bb4e4fa": "cc5e402482af0c96aec62078f0b6f210",
".git/objects/5d/65d5cd4ab2611b86c43e38cfdeba75541fdbe6": "7c37e23a9515eb76599fff4e41239d85",
".git/objects/63/026dd92cb1d66af091cd42c8fee5ac06f763cd": "64be6374ba4f67dbccd9647d5524c8fd",
".git/objects/64/bfdc7cca6b662eb13eb0baad5b765f7a38aea9": "76f7d9c7a4befa393132bec16d52811d",
".git/objects/64/de410042a216e688feec985a75141f5876ee8e": "c0f247fbadcfc4703c0a763a7779f0a5",
".git/objects/65/2566fe53f5cb19d008537eee76dfc37291423a": "6ca8f3f87fa27c2a856c544f7cd4e134",
".git/objects/67/746b85dc4ae09b2a9c774454caf603d44a7e58": "228945ff5af7a648575dd765bca02476",
".git/objects/68/d27a7d9e94cc0ce8088963ef5671bbc0424fbd": "b75193427eea3a7f1609943903d1a781",
".git/objects/6c/6fcfe26eb11aa2847de099f3354163d0b4b5bf": "5a6ad05f3a9b35f07a1b4865190b2696",
".git/objects/6c/e290baf20faccbf19fbe36635237dd324bf22d": "3314bf72694deff585da9e2716c4275c",
".git/objects/6d/86136d77dc96e7fa263b28b0a960e6b420fe87": "b676a4d01c47366af0f2aae10a8be7a8",
".git/objects/6f/d47160c52418ce51c7cc222affa5473d0def7a": "d632075b2eec41509834a4845a832630",
".git/objects/75/f4f26eb47a73293d016b3fe5ad5df651a87690": "ead1f8d4b81cef72a1a33097392ef0ba",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/77/1f4910a63ad5b1a1856f47e9a3fda9d66ffa90": "087cbd27db6fe7cefe0330207750dfd3",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/b8c334723970e39ee2db698d1b07c63d4049ea": "4427ef3ba6582e7397187a508d65235d",
".git/objects/7c/3eb19653af0b3831ccc96be0c091d3c6f88787": "4446aa4f01dea00328a7a553c27ae39b",
".git/objects/7e/46f96480fa398a069a8abdcb45e129958c44ca": "77cf13e9890c3b995f2a9f40adc59368",
".git/objects/7e/b4c5193404a31dac00f31806f443856909d748": "fef834ea7f9d2102ba75407f2839a48e",
".git/objects/82/85f228f583a4db99b01c8e7408b98f8419f2de": "4b3fbc7be11bc9307825d0c8858933b1",
".git/objects/83/2a7955583758183abc025c54449895e19df039": "5ef312adee4fdbe0ca73d705bf8122be",
".git/objects/85/a8400b6eba2f307c762ff9691e065aa96f583b": "d30dbdbe5b4c80570a12f73b1b42da5a",
".git/objects/86/7534acfbdc7e1f429c19095262699b14b3fef9": "1f4284e46f82de0c47f5cc835db77e25",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/3bb5f0b9d1aed0349830585eb99a469fc78cd5": "09b6f3d016ddcfe8f811365db5c2d2cb",
".git/objects/8c/d712bac918ab234734ec165cde4079f58c3e96": "9b43a31721928c133d58471cf4300a6b",
".git/objects/8c/da414788ba58fa9956155b9eb60af31d758427": "9f0e450f759ea7e50fb9f49e67024858",
".git/objects/8d/b4470840bb695fd8e30b0d8ca2b32be85f3f2e": "9a654a07964db3990caf80ee1367368c",
".git/objects/91/898c9a53089a63f1c399202c9ee85e6fb37c0e": "c4597284e871ae1139190b4c8a32108c",
".git/objects/9a/39f100902709d5e882a3353f4a0d220db893c0": "769d93f5acbe02b3d53a5dc68c3b8d46",
".git/objects/9f/145b5fa9dac2da292ad55e2aeda85674c12951": "b11b03ac95f3e31588ae95c300f39cc1",
".git/objects/a0/cbe76a505ccc4ee8302dbc250acaed98221334": "98eae66511b40033e363748e3b039b37",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a5/34013f420c6effd2fb4b9e697a5fc023f2e35c": "ecb90ef382098604d9952a618523d00b",
".git/objects/a9/e21bebf537e5b03ca0d2175e30ed2f370b9c35": "8ced2b9a0bccaae6de20d4c1e707b9c7",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/96524886e205d00ac738c853cb1885efef7436": "6799d9c000f3f7afcf5f0b1077636f7d",
".git/objects/ae/22f165fed1b367f117db2b69d3aef586454b2c": "792539930f7390cd16d79c71c83eeb10",
".git/objects/ae/87ddf8ebf884e139b64e1e7ad12c1873c84349": "bbe7eea5852c7b8a2054134b433835c7",
".git/objects/af/e480e95cc4ebb40704c289f527d47499323677": "20591d4c17f4c6c3c5fec6a40308b4d3",
".git/objects/b5/5c21edf7e5333aea9b9ae23714ef6ce392fe04": "7982db8f516b0ad0fd13872d45ce2e69",
".git/objects/b5/e4552c18beb8f47d8195997fba893b194ab238": "3e58581a9532aee89f4b426f4202ff73",
".git/objects/b6/34ce04f6b23c90608a1b3879a60950d720633e": "886a8ef327512997cd399720b9552366",
".git/objects/b6/d6a9b70c937c0d2d956be4bced78f238a63f7e": "f8d03f037a874582c6ff5e36a87af743",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/880561aed63980d583edce8442e4a6072ab189": "6217f286aa41860c7238918180e0e0a0",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/a7a1383c873bc588918e8fd79bf08cd6a0c574": "8ad56485a18492c0403d46cc837f03ae",
".git/objects/bc/3eb02f5d1f0a43d43bb19c2e67401b1e6bbbf5": "5b2fe17978a33d823abbdf41f4953bf4",
".git/objects/bc/7003168196cf00d4f993ed6c3a7c385a13c8ce": "9751be08e47465c060fb1cb5a73c0940",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/c4/c206435e095cb58423b118038cc165a8bc3a7a": "ad3256ef2a15a0db20d34b756cc6a628",
".git/objects/c5/f14da8c42e00c0d5a9e82d3c70504fb3d10f10": "77e3561ef43893d3a10f2292daee5533",
".git/objects/ca/df19d5ca99daed3ca2b8c2a9b60b8415f5182f": "6f80cdb33b8f01febba3f23f9e05daf8",
".git/objects/cc/252285db7b243e9a6cbe8ea44e677352a95e2d": "ce0aacc4df52ba4ceb4fe58d925c51fe",
".git/objects/cc/4cef1cebb8f8ef998a22c1013ec79d337e5d46": "a0e6c0ae444875b0794d74437143464a",
".git/objects/cd/dc9f6160e0f6ea1b9562c14f289274379bc547": "8870b3030868d641d30395ceb019ddce",
".git/objects/ce/7eb963d8e81bdf9ab67ee77fe539d6487c198e": "5c8cd95665c4d660410018cd516c38e4",
".git/objects/d1/dd4c112e6645e603d72c0967b5cdcfc6a86a5c": "09369b4c900469937a4e32c0a19e8870",
".git/objects/d2/142f75990eaa7a2a96c3fc09dfc360533f143e": "cabb9fc8e7489361bdaa2482ee1bfe05",
".git/objects/d6/3a9c68b12378894b822f2ae3b7bea3722efd6c": "786cad8c2ef60807e0d9d5728a07aac6",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/c3c6da4629fa4558eb7350a8351895033cd795": "0f0cfc5383db84c394e31c760e7f23cd",
".git/objects/d9/6635cc5bbc9fa69c5e714a95e2ac1453e2d05e": "16831d74f1b9f1b8a29c3724df0b2f55",
".git/objects/da/80923f31a9785f0034859c7b7ff8779025fa28": "2b959182d092fbca08ada61f30437ac6",
".git/objects/e0/f0c796f6009aca86879bae1acda23e5b18ac45": "28bfcae5ebb080ffe33bf2fffafefae2",
".git/objects/e1/90fb3cdb7931877479f5182181f8be7750a663": "7f23c3324aa4ef568f5ac81bb2e34671",
".git/objects/e3/41318e5018391b696add81590076788081797d": "abea477c411d4fc752b1813a83b4a9f0",
".git/objects/e4/51276706689b1b42cfc80152203e32587e39d9": "4028f1decf4356ae9f0a581b1c14c071",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/3304572c14e902d0e1c61898c5b6e0ba41e5a3": "696d10afcb7502c8e8f8361f39eac00b",
".git/objects/e9/3f1e1f00908fd2255d5f22fe49cf61c9f99c88": "ab4c7d31a604aa7bff6b2cbc04e25dea",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/ea/01d4d5d635b0f5ba7245af9b0bb5662febeacf": "0ccd68b4c400b10373aea0de6babc581",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/37ad629523b7a020905048fc839aa6500a283d": "621e10882941d5a3997e3276d19e86d7",
".git/objects/ec/939430b8c53ed037df4945ff161ba24b0d8f72": "2788cdd47447ab32cc6f564e8389bf62",
".git/objects/ed/7a84e6cfc95aeb7dd7611fcb7ad908a01b0561": "df3f845e17e92489221a94e2a6df1f1d",
".git/objects/ed/8aa6ba6c24ec4e7468d8b81a4c895f031bf73b": "31a47a059782ddb69762217d3c1243ec",
".git/objects/ed/d154833bfe84af28d915afd35bf596a242cfac": "3daee664e5028cab6e8380ea6dbc22d4",
".git/objects/ee/6f90009ca3520cf4c6eec65e772c6147b26fa2": "c41566486b4b8c4b7a11b9afbb07b5c9",
".git/objects/ef/408057a1bf7892cffa38c882e987b11917e002": "bbbba2ecace0300785e65f02c042c0f0",
".git/objects/f4/2b8c717aa4df3fd632c19b3dab153efcf7b443": "08b55b1dfd1337b1257ad42b7d0adb6b",
".git/objects/f5/58f5d250d112ed4d6a82c228905ba30132d6ae": "8bfe500f12873b02456bf4f12389f784",
".git/objects/f8/4596410be38f0351b289fea41b6554b1ad1528": "54315ecfa39eb4fef345518f0a64c04f",
".git/objects/fa/1061258f663865593c415ddc9d1b39e66939ae": "7d5354f37a0ad64e4c57b8d4a3661b0c",
".git/objects/fd/447ed65e452ef590a69af3731e9ed819db111d": "90fff815730633ee7c73081b1183578b",
".git/refs/heads/main": "2abfa1d4b2dac0f2d3ec3c91ee1e9483",
".git/refs/remotes/origin/main": "2abfa1d4b2dac0f2d3ec3c91ee1e9483",
"assets/AssetManifest.json": "1666c95dfdffd1773b5624292d03d99f",
"assets/assets/images/ace.png": "4730c0abc80fdc12c9331c140686a339",
"assets/assets/images/azfen_logo.jpg": "aa8444d408fbb52dbfa9545c1ba3948a",
"assets/assets/images/azfen_logo.png": "395bcfd5f1acdb754ad2ec5c9a5e7b67",
"assets/assets/images/bp_logo.png": "356750acec54a4fbc215f61c6a5a3bde",
"assets/assets/images/burger.svg": "263da3d76835861ce2e9c99fe3ae4be3",
"assets/assets/images/dashboard.svg": "4178fd3cabc77fc26c64f87d741cb040",
"assets/assets/images/Elvin.jfif": "8e16aedfc61b1508b5b1393f2e17738b",
"assets/assets/images/ErkinMalikov.jpg": "51cbbf0de6be2ac1a97464932707a242",
"assets/assets/images/inbox.svg": "dcc53f0482d33017302612315c440c81",
"assets/assets/images/mask_human.svg": "1cbcfc485388523607a1ade324ba4e9c",
"assets/assets/images/mask_image.png": "fac5ad47bb044e1faeba590a84ac1a29",
"assets/assets/images/notification.svg": "4aa214e3ca3ccdb7db61a0a37f381d2a",
"assets/assets/images/process.svg": "0168fa0bb9f0242398363d1c18204638",
"assets/assets/images/report.svg": "d98081815bc2f98cb06505a14b98b00a",
"assets/assets/images/source.svg": "0c5e613320c82f1d2e9a9d19f67a2715",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "296734bc83b35ea3bb9671229aa2f7d0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"img/azfen_logo.png": "395bcfd5f1acdb754ad2ec5c9a5e7b67",
"index.html": "455434cfdf93ae279423bc541043c916",
"/": "455434cfdf93ae279423bc541043c916",
"main.dart.js": "1b7e8162106f7f7ce36e52997a74df9c",
"manifest.json": "09a5aaa9cdf3da6658514870db69c631",
"styles.css": "3ba0ef93c07ce30b3a4ba86d5d17c9b3",
"version.json": "680b2b9b027000e2d607cf960d101ca6"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
