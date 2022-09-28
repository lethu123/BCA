// //**UI */
// import Image from 'next/image'
// import {Eye, EyeOff, Globe, Lock, Users} from 'react-feather'
// import {Card, CardBody, CardTitle, Col, Row} from 'reactstrap'

// //**Component */
// import MyButton from '@core/components/button/MyButton'

// //**Context */
// import {useGroupCtx} from 'context/group'
// import {isEmpty} from 'hook/utils'

// const PreviewCreateGroup = () => {
//   const {
//     state: {privacy, privacy_onlyMe, group_name},
//   } = useGroupCtx()

//   return (
//     <>
//       <Card className="m-auto p-3" style={{width: '970px'}}>
//         <CardTitle className="title-20">Preview</CardTitle>
//         <CardBody className="p-0">
//           <div
//             style={{height: '300px', mixBlendMode: 'luminosity'}}
//             className="mb-3 w-100"
//           >
//             <img
//               className="w-100 h-100 rounded-3"
//               style={{objectFit: 'cover'}}
//               src="https://res.cloudinary.com/cloudhspace/image/upload/v1653961665/dev.hspace.biz/group/groups-default-cover-photo-2x_uabing.png"
//               alt="bg"
//             />
//           </div>
//           <p className="title-32 mb-2">{group_name || 'Group Name'}</p>
//           <div className="d-flex align-items-center pb-3 mb-1 border-bottom">
//             <div className="d-flex">
//               <div className="d-flex align-items-center">
//                 {privacy.content === 'Public' ? (
//                   <Globe size={20} />
//                 ) : (
//                   <Lock size={20} />
//                 )}
//                 <p className="title-16 ms-1">
//                   {privacy.content || 'Public'} Group
//                 </p>
//               </div>
//             </div>
//             <p className="title-16 ms-2 me-2">|</p>
//             <div className="d-flex">
//               <div className="d-flex align-items-center">
//                 <p className="title-16 ms-1">1 thành viên</p>
//               </div>
//             </div>
//           </div>
//           <div className="d-flex px-2 mb-5 mt-3">
//             <p className="title-16 me-5">Intro</p>
//             <p className="title-16 me-5">NewsFeed</p>
//             <p className="title-16 me-5">Member</p>
//             <p className="title-16">Images</p>
//           </div>
//           <div className="container-fluid">
//             <Row>
//               <Col md={7}>
//                 <div className="d-flex">
//                   <div style={{width: '50px', height: '50px'}}>
//                     <img
//                       className="rounded-circle w-100 h-100"
//                       style={{objectFit: 'cover'}}
//                       src="https://res.cloudinary.com/cloudhspace/image/upload/v1652172821/dev.hspace.biz/user-profile/trend-avatar-1_xxdjif.jpg"
//                       alt="avt"
//                     />
//                   </div>
//                   <p
//                     className={`p-2 ms-2 rounded d-flex align-items-center text-color-back60 title-16-700-24`}
//                     style={{
//                       backgroundColor: '#f4f5f4',
//                       width: 'calc(100% - 100px)',
//                     }}
//                     disabled
//                   >
//                     What are you thinking
//                   </p>
//                 </div>
//                 <div
//                   className="mt-2"
//                   style={{
//                     display: 'grid',
//                     gridTemplateColumns: 'repeat(4,auto)',
//                     columnGap: '16px',
//                   }}
//                 >
//                   <div>
//                     <MyButton
//                       icon={
//                         <Image
//                           src="https://res.cloudinary.com/cloudhspace/image/upload/v1651752737/dev.hspace.biz/feed/People_vv8r3f.svg"
//                           width={24}
//                           height={24}
//                           alt="img_icon"
//                         />
//                       }
//                       text="Friends"
//                       color="white"
//                       textcl="#1C3218"
//                       className="title-16-700-24 w-100 d-flex align-items-center justify-content-center"
//                       disabled
//                     />
//                   </div>
//                   <div>
//                     <MyButton
//                       icon={
//                         <Image
//                           src="https://res.cloudinary.com/cloudhspace/image/upload/v1651571766/dev.hspace.biz/user-profile/name.picture.image_ibmpmn.svg"
//                           width={24}
//                           height={24}
//                           alt="img_icon"
//                         />
//                       }
//                       text="Image/Video"
//                       color="white"
//                       textcl="#1C3218"
//                       className="title-16-700-24 w-100 d-flex align-items-center justify-content-center"
//                       disabled
//                     />
//                   </div>
//                   <div>
//                     <MyButton
//                       icon={
//                         <Image
//                           src="https://res.cloudinary.com/cloudhspace/image/upload/v1651571766/dev.hspace.biz/user-profile/name._nyqfiv.svg"
//                           width={24}
//                           height={24}
//                           alt="fell_icon"
//                         />
//                       }
//                       text="Category"
//                       color="white"
//                       textcl="#1C3218"
//                       className="title-16-700-24 w-100 d-flex align-items-center justify-content-center"
//                       disabled
//                     />
//                   </div>
//                 </div>
//               </Col>
//               <Col md={5}>
//                 <p className="title-20 mb-2">Intro</p>
//                 {isEmpty(privacy) ? (
//                   ''
//                 ) : (
//                   <div className="d-flex mb-3">
//                     {privacy.content === 'Public' ? (
//                       <Globe size={20} />
//                     ) : (
//                       <Lock size={20} />
//                     )}
//                     <div className="ms-2">
//                       <p className="title-16">{privacy.content}</p>
//                       <p className="text-15-500-20">{privacy.description}</p>
//                     </div>
//                   </div>
//                 )}

//                 {isEmpty(privacy_onlyMe) ? (
//                   ''
//                 ) : (
//                   <div className="d-flex mb-3">
//                     <EyeOff size={20} />
//                     <div className="ms-2">
//                       <p className="title-16">{privacy_onlyMe.content}</p>
//                       <p className="text-15-500-20">
//                         {privacy_onlyMe.description}
//                       </p>
//                     </div>
//                   </div>
//                 )}
//                 <div className="d-flex mb-3 align-items-center">
//                   <Users size={20} />
//                   <div className="ms-2">
//                     <p className="title-16">Generality</p>
//                   </div>
//                 </div>
//               </Col>
//             </Row>
//           </div>
//         </CardBody>
//       </Card>
//     </>
//   )
// }

// export default PreviewCreateGroup
