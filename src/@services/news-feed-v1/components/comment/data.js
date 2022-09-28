export const getComments = async () => {
  return [
    {
      id: '1',
      parrentId: null,
      userId: '1',
      name: 'Dương Trọng Hải_1',
      dayago: '4 phút trước',
      email: '@duongtronghai',
      comment:
        'Hey Thu Nguyễn, this website is useful for this topic: masterjs.vercel.app/ is great resource collection for javascript',
      createAt: '2021-08-16T23:00:33.010+02:00',
    },
    {
      id: '2',
      parrentId: null,
      userId: '2',
      name: 'Dương Trọng Hải_2',
      dayago: '4 phút trước',
      email: '@duongtronghai',
      comment:
        'Hey Thu Nguyễn, this website is useful for this topic: masterjs.vercel.app/ is great resource collection for javascript',
      createAt: '2021-08-16T23:00:33.010+02:00',
    },
    {
      id: '3',
      parrentId: '1',
      userId: '2',
      name: 'Dương Trọng Hải_3',
      dayago: '4 phút trước',
      email: '@duongtronghai',
      comment:
        'Hey Thu Nguyễn, this website is useful for this topic: masterjs.vercel.app/ is great resource collection for javascript',
      createAt: '2021-08-16T23:00:33.010+02:00',
    },
    {
      id: '4',
      parrentId: '2',
      userId: '2',
      name: 'Dương Trọng Hải_3',
      dayago: '4 phút trước',
      email: '@duongtronghai',
      comment:
        'Hey Thu Nguyễn, this website is useful for this topic: masterjs.vercel.app/ is great resource collection for javascript',
      createAt: '2021-08-16T23:00:33.010+02:00',
    },
  ]
}

export const createComment = async (text, parrentId = null) => {
  return {
    id: Math.random().toString(36).substring(2, 9),
    comment: text,
    parrentId,
    userId: '1',
    name: 'Dương Trọng Hải_3',
    createAt: new Date().toISOString(),
    dayago: '4 phút trước',
    email: '@duongtronghai',
  }
}

export const updateComment = async text => {
  return {text}
}

export const deleteComment = async () => {
  return {}
}
