// 将来的にも定数が追加されるの可能性のあるenum型を定義します
enum PageType {
  ViewProfile,
  EditProfile,
  ChangePassword,
}

const getTitleText = (type: PageType) => {
  switch (type) {
    case PageType.ViewProfile:
      return 'Setting'
    case PageType.EditProfile:
      return 'Edit Profile'
    case PageType.ChangePassword:
      return 'Change Password'
    default:
      // 決して起きないことをコンパイラに伝えるnever型に代入を行います
      // これによって仮に将来PageTypeのenum型に定数が新規で追加された際に
      // コンパイル時にエラーが起きるためバグを未然に防ぐ対応を行うことができます
      const wrongType: never = type
      throw new Error(`${wrongType} is not in PageType`)
  }
}