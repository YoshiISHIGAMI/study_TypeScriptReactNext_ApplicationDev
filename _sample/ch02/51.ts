let postStatus: 'draft' | 'published' | 'deleted'
postStatus = 'draft' // OK
postStatus = 'drafts' // 型宣言にない文字列が割り当てられているため、コンパイル時エラー