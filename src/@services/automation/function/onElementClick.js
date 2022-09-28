const onElementClick = ({
  isEdge,
  element,
  setPopoverWarnningOpen,
  dataSubmit,
  handleConfirmDelete,
  currentItem,
  setCurrentItem,
  toast,
  sizeModal,
}) => {
  console.log('ELEMENT', element)

  if (!isEdge(element)) {
    setPopoverWarnningOpen(false)
    if (element) {
      if (element.data?.isNoSetting || !dataSubmit[element.id]) {
        handleConfirmDelete(element)
      } else {
        // Check cài đặt bình luận khi nguồn dữ liệu đã có cài đặt account
        let fb_comment_id = element.id
        if (fb_comment_id && fb_comment_id.includes('comment_post_facebook')) {
          let account = dataSubmit?.data_source?.setting?.account

          if (!(account && account.length > 0)) {
            return toast.error(
              `${element.data.title} chưa thể liên kết, bạn phải cài đặt nguồn dữ liệu !`,
            )
          }
        }

        if (dataSubmit[element.id]) {
          //Mở modal
          setCurrentItem({
            ...currentItem,
            id: element.id,
            type: element.data?.code,
            size: sizeModal(element.data?.code),
            title: element.data?.title,
          })
        } else {
          element.data &&
            toast.error(
              `${element.data.title} chưa liên kết , không thể cài đặt`,
            )
        }
      }
    } else {
      toast.error('Bạn phải lưu để thực hiện bước tiếp theo !')
    }
  }
}
export default onElementClick
