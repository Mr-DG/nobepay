
import instance from '@/http/index'

export const demo = (data) => instance.post('/demo', data)
export default {
  demo,
}
