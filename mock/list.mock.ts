import { defineMock } from 'vite-plugin-mock-dev-server'
import Mock from 'mockjs'

export default defineMock([
  {
    url: '/dev-api/list/get',
    delay: 1000,
    body: {
      succeed: 1,
      returnMsg: 'OK',
      // datas: Mock.mock({
      //   'list|10': [
      //     {
      //       'id|+1': 1,
      //       productImg: 'https://image-ebs-tmp.yestae.com//goods/20191217/c5fee48c2a8eaf884a25d7336ffc4685.jpg'
      //     }
      //   ]
      // })
      datas: Mock.mock([
        {
          id: '@id',
          productImg: 'https://image-ebs-tmp.yestae.com//goods/20191217/c5fee48c2a8eaf884a25d7336ffc4685.jpg'
        },
        {
          id: '@id',
          productImg: 'https://image-ebs-tmp.yestae.com//goods/20191217/c5fee48c2a8eaf884a25d7336ffc4685.jpg'
        },
        {
          id: '@id',
          productImg: 'https://image-ebs-tmp.yestae.com//goods/20191217/c5fee48c2a8eaf884a25d7336ffc4685.jpg'
        },
        {
          id: '@id',
          productImg: 'https://image-ebs-tmp.yestae.com//goods/20191217/c5fee48c2a8eaf884a25d7336ffc4685.jpg'
        },
        {
          id: '@id',
          productImg: 'https://image-ebs-tmp.yestae.com//goods/20191217/c5fee48c2a8eaf884a25d7336ffc4685.jpg'
        },
        {
          id: '@id',
          productImg: 'https://image-ebs-tmp.yestae.com//goods/20191217/c5fee48c2a8eaf884a25d7336ffc4685.jpg'
        },
        {
          id: '@id',
          productImg: 'https://image-ebs-tmp.yestae.com//goods/20191217/c5fee48c2a8eaf884a25d7336ffc4685.jpg'
        },
        {
          id: '@id',
          productImg: 'https://image-ebs-tmp.yestae.com//goods/20191217/c5fee48c2a8eaf884a25d7336ffc4685.jpg'
        }
      ])
    }
  },
  {
    url: '/dev-api/list/error',
    delay: 1000,
    body: {
      succeed: 0,
      returnMsg: 'ERROR',
      datas: null
    }
  }
])
