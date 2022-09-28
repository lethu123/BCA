const INITIALSTATE = {
  post_id: null,
  isToggleModal: false,
  isToggleSubModal: false,
  stepper: 0,
  id_category: '',
  id_post: null, //not id of post detail
  privacy: {
    code: 'PUBLIC',
  },
  img_arr: [],
  postValue: '',
  tag_friends: [],
  with_friends: [],
  list_bookMark: [],
  hash_tags: [],
  embedding_link: null,
  video: null,
}

export default INITIALSTATE
