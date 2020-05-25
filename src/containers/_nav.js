export default [
  {
    _name: 'CSidebarNav',
    _children: [
      {
        _name: 'CSidebarNavTitle',
        _children: ['修正依頼の登録']
      },
      {
        _name: 'CSidebarNavItem',
        name: '修正依頼登録',
        to: '/input',
        icon: 'cil-speedometer'
      },
      {
        _name: 'CSidebarNavItem',
        name: '修正依頼一覧',
        to: '/dashboard',
        icon: 'cil-speedometer'
      },
      {
        _name: 'CSidebarNavTitle',
        _children: ['状態振り分け']
      },
      {
        _name: 'CSidebarNavItem',
        name: '承認待ち',
        to: '/dashboard',
        icon: 'fa-check-circle'
      },
      {
        _name: 'CSidebarNavItem',
        name: '作業中',
        to: '/dashboard',
        icon: 'cil-pencil'
      },
      {
        _name: 'CSidebarNavItem',
        name: '完成',
        to: '/dashboard',
        icon: 'cil-star'
      },
      {
        _name: 'CSidebarNavTitle',
        _children: ['ログアウト']
      },
      {
        _name: 'CSidebarNavItem',
        name: 'ログアウト',
        to: '/login',
        icon: 'fas fa-door-open'
      }
    ]
  }
]
