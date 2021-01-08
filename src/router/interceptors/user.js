import ls from 'store'
import store from '@/store/'

export default function checkUser(to, from, next) {
  const { dispatch, getters } = store

  if (to.matched.some(record => record.meta.requiresUser)) {
    if (!getters.username) {
      dispatch('GetUserInfo')
        .then(() => {
          const token = ls.get('X-Token')
          if (token) {
            next()
          } else {
            next('/login')
          }
        })
        .catch(() => {
          Notification.error({
            message: '인증 오류',
            description: '사용자 정보가 확인되지 않았습니다'
          })
        })
    } else {
      next()
    }
  } else {
    next()
  }
}
