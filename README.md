# Nickname Validator
API ini dibuat untuk mencari nickname in-game menggunakan ID player, data dari API ini diambil dari [Codashop](https://www.codashop.com/).

Awal bermula nya projek ini saat saya mengunjungi web phising yang menggunakan sistem validasi ID pada situsnya (ironis, padahal masih bayak web topup yang belum implementasi beginian), jadi kalo ID nya tidak valid maka data tidak bisa disubmit.

Karena dari Codashop request dan parsing data nya lebih ribet, maka dibuatlah API ini.

Lihat perubahan di [commits](https://github.com/ihsangan/valid/commits/main/).
## Self Deploy
Kamu bisa langsung fork aja repo ini, atau bisa tekan tombol dibawah ini (jangan lupa github secrets nya di seting)

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/mymaswayvpn/validator-game)
## Endpoint
```
https://api.cekid-game.me/nickname
```
## Output
application/json; charset=utf-8 ([RFC4627](https://datatracker.ietf.org/doc/html/rfc4627))
```ts
interface Result {
  success: boolean;
  game?: string;
  id?: number | string;
  server?: string | number,
  name?: string;
  message?: string;
}
```
# Daftar game
Berikut adalah daftar game yang didukung oleh API ini.
### Aether Gazer
GET `/ag?id=PLAYER_ID`

**Contoh:** [53687200000](https://api.cekid-game.me/nickname/ag?id=53687200000)
### Genshin Impact (America, Asia, Europe, SAR) [CENSORED]
GET `/gi?id=PLAYER_ID`

**Contoh:** [600000000](https://api.cekid-game.me/nickname/gi?id=600000000)
### Honkai Impact 3rd [CENSORED]
GET `/hi?id=PLAYER_ID`

**Contoh:** [10000001](https://api.cekid-game.me/nickname/hi?id=10000001)
### Honkai: Star Rail (America, Asia, Europe, SAR) [CENSORED]
GET `/hsr?id=PLAYER_ID`

**Contoh:** [600000001](https://api.cekid-game.me/nickname/hsr?id=600000001)
### LifeAfter
GET `/la?id=PLAYER_ID&server=SERVER_NAME`

SERVER_NAME bersifat case-insensitive, untuk daftarnya ada [di sini](https://github.com/mymaswayvpn/validator/blob/main/src/router/la.ts).

**Contoh:** [?id=22512309&server=milestone](https://api.cekid-game.me/nickname/la?id=22512309&server=milestone)
### Point Blank
GET `/pb?id=ZEPETTO_ID`

**Contoh:** [wakwaw55](https://api.cekid-game.me/nickname/pb?id=wakwaw55)
### Punishing: Gray Raven (AP, EU, NA)
GET `/pgr?id=ID&server=SERVER_ID`

Case-insensitive, keterangan untuk identifikasi server: AP(Asia-Pasifik), EU(Europe), NA(North America)

**Contoh:** [?id=16746755&server=AP](https://api.cekid-game.me/nickname/pgr?id=16746755&server=AP)
### Sausage Man
GET `/sm?id=PLAYER_ID`

**Contoh:** [5sn9jf](https://api.cekid-game.me/nickname/sm?id=5sn9jf)
### Super Sus
GET `/sus?id=SPACE_ID`

**Contoh:** [15916600](https://api.cekid-game.me/nickname/sus?id=15916600)
### Valorant
GET `/valo?id=URISafeRiotIdAndTag`

**Contoh region ID :** [yuyun%23123](https://api.cekid-game.me/nickname/valo?id=yuyun%23123)

**Contoh region non ID :** [Westbourne%23USA](https://api.cekid-game.me/nickname/valo?id=Westbourne%23USA)
### Zenless Zone Zero (America, Asia, Europe, SAR) [CENSORED]
GET `/zzz?id=PLAYER_ID`

**Contoh:** [1000000100](https://api.cekid-game.me/nickname/zzz?id=1000000100)
## ID-REG-ONLY
Dibawah ini adalah daftar game yang hanya bisa dipakai menggunakan ID yang terdaftar dari region Indonesia/SEA
### Arena of Valor
GET `/aov?id=PLAYER_OR_OPEN_ID`

**Contoh:** [124590895269021](https://api.cekid-game.me/nickname/aov?id=124590895269021)

### One Punch Man
GET `/onepunchman?id=PLAYER_ID&server=ZONE_ID`

**Contoh:** [124590895269021](https://api.cekid-game.me/nickname/onepunchman?id=444470_310001&server=310001)

### Hago
GET `/hago?id=PLAYER_ID`

**Contoh:** [124590895269021](https://api.cekid-game.me/nickname/haho?id=31148107)

### Dragon City
GET `/dragoncity?id=PLAYER_ID`

**Contoh:** [124590895269021](https://api.cekid-game.me/nickname/dragoncity?id=3281168132375957269)

### 8 Eight Ball Pool
GET `/eightball?id=PLAYER_ID`

**Contoh:** [124590895269021](https://api.cekid-game.me/nickname/eightball?id=2180533717)

### Call Of Duty
GET `/cod?id=PLAYER_OR_OPEN_ID`

**Contoh:** [243402956362890880](https://api.cekid-game.me/nickname/cod?id=243402956362890880)
### Free Fire
GET `/ff?id=PLAYER_ID`

**Contoh:** [225009777](https://api.cekid-game.me/nickname/ff?id=225009777)
### Mobile Legends: Bang Bang
GET `/ml?id=PLAYER_ID&server=ZONE_ID`

**Contoh:** [?id=1114917746&server=13486](https://api.cekid-game.me/nickname/ml?id=1114917746&server=13486)
## Parameter Opsional
Kamu dapat menambah parameter `decode` dan mengisi value ke `false` (default ke `true`).

Ketika value diatur ke `false` maka data nickname akan ditampilkan dala URL encoded dan untuk membacanya memerlukan function seperti `decodeURIComponent()` (dalam javascript) atau sejenisnya, saya juga lebih merekomendasikan untuk menggunakan `?decode=false`.

Sementara jika value adalah `true` maka data akan bisa dibaca secara langsung tapi kemungkinan error dan gagal dalam pembacaan data akan muncul.

Berikut adalah contoh penggunaan `?decode=false`

[ml?id=1007909047&server=13044&decode=false](https://api.cekid-game.me/nickname/ml?id=1007909047&server=13044&decode=false)

Contoh penggunaan `?decode=true`

[ml?id=1007909047&server=13044&decode=true](https://api.cekid-game.me/nickname/ml?id=1007909047&server=13044&decode=true) atau [ml?id=1007909047&server=13044](https://api.cekid-game.me/nickname/ml?id=1007909047&server=13044) (sama saja).
## Monitoring
API monitoring [UptimeRobot](https://stats.uptimerobot.com/s9axzR77Fm)
# Copyright
© Projek ini dibawah lisensi: [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/), tidak terafiliasi dengan Codashop.
