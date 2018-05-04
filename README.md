# Google Homeに喋らせるAPIサーバ

# setup

## node/npmのインストール
```
sudo apt-get install -y nodejs npm
sudo npm install npm n -g
sudo n 8.9.4
```

## プロジェクト
```
npm install
mpm start
```

# 使い方
`http://localhost:3000?message=喋らせる言葉`

# FIXME
- [ ] google-home.js上でIPを直打ちじゃないと反応しない
