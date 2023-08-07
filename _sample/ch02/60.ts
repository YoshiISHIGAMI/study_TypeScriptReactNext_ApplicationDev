// プロパティ名を任意のnumberとして扱う方の定義の例です
type SupportVersions = {
  [env: number]: boolean;
}

// stringのプロパティに定義した場合エラーが起きます
let versions: SupportVersions = {
  102: false,
  103: false,
  104: true,
  'v105': true // -> errorになります
}