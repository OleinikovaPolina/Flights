import { date } from 'quasar'

export function useDate() {
  const getDateDiffFullFromat = (dateEnd, dateStart) => {
    const diffMs = date.getDateDiff(dateEnd, dateStart, 'seconds')
    const diffDays = Math.floor(diffMs / 86400)
    const diffHrs = Math.floor((diffMs % 86400) / 3600)
    const diffMinutes = Math.round(((diffMs % 86400) % 3600) / 60)
    let res = ''
    if (diffDays) {
      res += diffDays + 'd '
    }
    if (diffHrs) {
      res += diffHrs + 'h '
    }
    if (diffMinutes) {
      res += diffMinutes + 'm '
    }
    return res
  }

  return { getDateDiffFullFromat }
}
