const handleDeleteAutomation = async ({MySwal, onDelete}) => {
  const result = await MySwal.fire({
    title: 'Bạn có chắc chắn xóa?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: `Đồng ý xóa`,
    customClass: {
      confirmButton: 'btn btn-primary',
      cancelButton: 'btn btn-outline-danger ml-1',
    },
    buttonsStyling: false,
  })
  if (result.value) {
    onDelete()
  }
}

export default handleDeleteAutomation
