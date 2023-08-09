import { App } from '@slack/bolt';

// Bolt Appを初期化
const app = new App({
  // Bolt for JavaScriptの設定
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});

// イベントのリスナーを追加
app.command('/ask', async ({ ack, say }) => {
  // コマンドが実行された時の処理
  await ack();
  await say('Hello World!!');
});

// アプリを起動
(async () => {
  await app.start(process.env.PORT || 3000);
  console.log('Slack app is running!');
})();