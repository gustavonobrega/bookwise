import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

export function formatTimeFromNow(date: string) {
  return dayjs(date).fromNow()
}
