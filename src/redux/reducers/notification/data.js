const systemData = {
  id: 1,
  img: '',
  title: 'Group lunch celebration',
  description: '',
  sub_title: '',
  time: '',
  type: 'order',
  is_seen: false,
}

export const data = {
  myOrders: systemData,
  myPromotionals: {...systemData, type: 'promotional'},
  unseenMessages: [{...systemData, type: 'chat'}],
  follows: [{...systemData, type: 'follow'}],
  setting: [
    {
      id: 1,
      type: 'New follower',
      value: true,
    },
    {
      id: 2,
      type: 'New messages',
      value: true,
    },
    {
      id: 3,
      type: 'Profile viewer',
      value: true,
    },
    {
      id: 4,
      type: 'Recieve system updated notification',
      value: true,
    },
    {
      id: 5,
      type: 'Weekly product updates',
      value: true,
    },
    {
      id: 6,
      type: 'Newsfeed',
      value: true,
    },
    {
      id: 7,
      type: 'New reviewed',
      value: true,
    },
    {
      id: 8,
      type: 'News and announcements',
      value: true,
    },
  ],
}
