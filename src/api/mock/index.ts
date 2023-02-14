import { useHttpHook } from '@/utils/http'
// eslint-disable-next-line
import { ContentTypeEnum } from '@/enums/requestEnum'

interface ListResult {
  succeed: number | boolean
  returnMsg: string
  datas: Array<any> | null
}

export function getListApi(params?: object): Promise<ListResult> {
  return useHttpHook().request({
    url: '/list/get',
    method: 'get',
    params
  })
}

export function getListApiError(data?: object): Promise<ListResult> {
  return useHttpHook().request({
    url: '/list/error',
    method: 'post',
    data
  })
}

export function getListLD2005(data?: object): Promise<ListResult> {
  return useHttpHook().request({
    url: '/api/LD2005?activityId=2e502295b31ad4fbf9d195064480a872',
    method: 'post',
    data
  })
}

export function getListLD1001(data?: object): Promise<ListResult> {
  return useHttpHook().request({
    url: '/api/LD1001?activityId=2e502295b31ad4fbf9d195064480a872',
    method: 'post',
    data
  })
}
