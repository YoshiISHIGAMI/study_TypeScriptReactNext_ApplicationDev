const message = 'hello!'

// JavaScriptでは実行時にエラーが起きるのに対して、TypeScriptではコンパイル時に以下のようなエラーが発生します
// error TS2349: This expression is not callable. Type 'String' has no call signatures.
message()