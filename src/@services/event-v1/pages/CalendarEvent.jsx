import React from 'react'
import {
  Card,
  CardBody,
  Col,
  Input,
  InputGroup,
  InputGroupText,
  Row,
  Pagination,
  PaginationItem,
  PaginationLink,
} from 'reactstrap'
import TitleWithLine from '../components/TitleWithLine'
import CardEvent from '../components/CardEvent'
import {Search} from 'react-feather'

const data = [
  {
    id: 39,
    is_owner: true,
    is_joined: false,
    owner_info: {
      id: '618891b6c4e1396de8238982',
      user_id: '618891b6c4e1396de8238982',
      full_name: 'thu le',
    },
    name: 'Bệnh nhân phổi tắc nghẽn mãn tính và covid',
    cover: 'https://colossal-storage.hspace.biz/storages/medias/blob',
    venue: '',
    tagline: '["viêm phổi","covid"]',
    description:
      '<p><img src="https://static.xx.fbcdn.net/images/emoji.php/v9/tb4/1.5/16/1f55c.png" alt="🕜"> Thời gian: 13h30 ngày 14 tháng 05 năm 2022.<br><img src="https://static.xx.fbcdn.net/images/emoji.php/v9/t3/1.5/16/1f310.png" alt="🌐"> Hình thức: Trực tuyến qua phần mềm Zoom<br><img src="https://static.xx.fbcdn.net/images/emoji.php/v9/te9/1.5/16/1f4bf.png" alt="💿"> ID: 934 5949 4601<br><img src="https://static.xx.fbcdn.net/images/emoji.php/v9/t66/1.5/16/1f5dd.png" alt="🗝"> Mật khẩu: 14052022<br><img src="https://static.xx.fbcdn.net/images/emoji.php/v9/t55/1.5/16/1f44d.png" alt="👍"> Với sự tham gia của các chuyên gia:<br>1. PGS.TS. Chu Thị Hạnh - Phó chủ tịch Hội Hô Hấp Việt Nam, Chủ tịch Hội Hô Hấp Hà Nội, Trưởng khoa Hô Hấp Bệnh viện Đa khoa Tâm Anh Hà Nội.<br>2. PGS.TS. Phan Thu Phương - Phó chủ tịch Hội Hô hấp Hà Nội, Giám đốc Trung tâm Hô Hấp Bệnh viện Bạch Mai.<br>3. PGS.TS. Vũ Văn Giáp - Tổng thư ký Hội Hô hấp Việt Nam, Phó giám đốc Trung tâm Hô hấp Bệnh viện Bạch Mai.<br>Thông tin này đã được đăng tải công khai trên website của Hội:</p><p>=======================<br><img src="https://static.xx.fbcdn.net/images/emoji.php/v9/t3/1.5/16/1f310.png" alt="🌐"> Trang chủ: <a href="http://hoihohapvietnam.org/?fbclid=IwAR2CalPgqLtSr5NFO95Ad9jP77juFEQ0s-y-VteNmqPKZvwTeiPxIO5swww">http://hoihohapvietnam.org</a><br><img src="https://static.xx.fbcdn.net/images/emoji.php/v9/t7/1.5/16/1f4ce.png" alt="📎"> Zalo nhóm Hội viên: <a href="https://bit.ly/3jMKeIc?fbclid=IwAR1KZ9J_xS54OuW8hz9YuE0-DMN_gBvp1I3v_q-vCWwg_8RLntWVMeuCO0s">https://bit.ly/3jMKeIc</a><br><img src="https://static.xx.fbcdn.net/images/emoji.php/v9/t7/1.5/16/1f4ce.png" alt="📎"> Đăng ký Hội viên: <a href="https://bit.ly/3KSNg9x?fbclid=IwAR1N_Lgo9hITMZ3xg2SJSCURJ06wjetEwOn72XWz7iwR1uf4MOzGOnhue-k">https://bit.ly/3KSNg9x</a><br><img src="https://static.xx.fbcdn.net/images/emoji.php/v9/t92/1.5/16/1f3c1.png" alt="🏁"> Facebook: <a href="https://www.facebook.com/HoihohapVietnam.VNRS/?__cft__[0]=AZW-eCWI9zgK7D8XXJj7hzO7KPcs4qauvWPhYCMtL04KurYqcWAwkK66Q18xq3lVHfPMKqJy6Ox2u0ObO1AtLjGlFI8n38teWSp7m0IGqLVLLe15d-1fKiPTlu_i16rWhpS1zJ-FS7gTDx88Hm8H22Ser53-qoYL7hXrvzHMtbTb6Q&amp;__tn__=q"><strong>https://www.facebook.com/HoihohapVietnam.VNRS</strong></a><br><img src="https://static.xx.fbcdn.net/images/emoji.php/v9/t68/1.5/16/1f1fb_1f1f3.png" alt="🇻🇳"> Hội nghị : <a href="https://l.facebook.com/l.php?u=http%3A%2F%2Fhoinghi.hoihohapvietnam.org%2F%3Ffbclid%3DIwAR16kr__j9ZWgd34BUMZIJvBx9ADR1ozcVq9viQTcZKVVQRvYWBofrOtSfY&amp;h=AT1t9SI75loh1cnrZ4qsiTsXAKikFgXw_VGU-CTDdC1W6UuGgBO19pUgjdcWPsGBjcyfuTUMrgIGa_JOXpkjTCHPBabr5Z7LghySQyO8INVkyARGGSNgS1B2Cl2WqduNi9np&amp;__tn__=q&amp;c[0]=AT0jqxaKt5HKLoDIpGiBi1L62OYf4s256Zy5nthp9miJfGDPLROfAb9wc975K56LtlPoR95eVbqdmEB3DsxdgRurr-hxQ-WPuSjKP_a5_fmxYmXenFNd7dn0JCfO425isTVTmb8_dKsmVkJF1HOtN-yIvqEaPLGmhvyBc7uhnqEiPoiEgQ">http://hoinghi.hoihohapvietnam.org</a></p><p>&nbsp;</p>',
    short_description: 'Bệnh nhân mãn tính với covid từ 1 năm trở lên',
    from_date: '2022-05-05T05:00:00Z',
    to_date: '2022-05-19T05:00:00Z',
    users_interested_in_info: [],
    privacy_info: {
      id: 1,
      code: 'PUBLIC',
      name: 'Public',
    },
    co_host_info: [],
    formality_info: {
      id: 1,
      code: 'ONLINE',
      name: 'Online',
    },
    event_type_info: {
      id: 2,
      code: 'dien-dan',
      name: 'Diễn đàn',
    },
    event_participant_info: [
      {
        id: '6221da9eb33793d48076ddfd',
        user_id: '6221da9eb33793d48076ddfd',
        full_name: 'Đinh Hồng Huỳnh',
      },
    ],
  },
  {
    id: 2,
    is_owner: true,
    is_joined: false,
    owner_info: {
      id: '618891b6c4e1396de8238982',
      user_id: '618891b6c4e1396de8238982',
      full_name: 'thu le',
    },
    name: 'Bệnh nhân phổi tắc nghẽn mãn tính và covid',
    cover: 'https://colossal-storage.hspace.biz/storages/medias/blob',
    venue: '',
    tagline: '["viêm phổi","covid"]',
    description:
      '<p><img src="https://static.xx.fbcdn.net/images/emoji.php/v9/tb4/1.5/16/1f55c.png" alt="🕜"> Thời gian: 13h30 ngày 14 tháng 05 năm 2022.<br><img src="https://static.xx.fbcdn.net/images/emoji.php/v9/t3/1.5/16/1f310.png" alt="🌐"> Hình thức: Trực tuyến qua phần mềm Zoom<br><img src="https://static.xx.fbcdn.net/images/emoji.php/v9/te9/1.5/16/1f4bf.png" alt="💿"> ID: 934 5949 4601<br><img src="https://static.xx.fbcdn.net/images/emoji.php/v9/t66/1.5/16/1f5dd.png" alt="🗝"> Mật khẩu: 14052022<br><img src="https://static.xx.fbcdn.net/images/emoji.php/v9/t55/1.5/16/1f44d.png" alt="👍"> Với sự tham gia của các chuyên gia:<br>1. PGS.TS. Chu Thị Hạnh - Phó chủ tịch Hội Hô Hấp Việt Nam, Chủ tịch Hội Hô Hấp Hà Nội, Trưởng khoa Hô Hấp Bệnh viện Đa khoa Tâm Anh Hà Nội.<br>2. PGS.TS. Phan Thu Phương - Phó chủ tịch Hội Hô hấp Hà Nội, Giám đốc Trung tâm Hô Hấp Bệnh viện Bạch Mai.<br>3. PGS.TS. Vũ Văn Giáp - Tổng thư ký Hội Hô hấp Việt Nam, Phó giám đốc Trung tâm Hô hấp Bệnh viện Bạch Mai.<br>Thông tin này đã được đăng tải công khai trên website của Hội:</p><p>=======================<br><img src="https://static.xx.fbcdn.net/images/emoji.php/v9/t3/1.5/16/1f310.png" alt="🌐"> Trang chủ: <a href="http://hoihohapvietnam.org/?fbclid=IwAR2CalPgqLtSr5NFO95Ad9jP77juFEQ0s-y-VteNmqPKZvwTeiPxIO5swww">http://hoihohapvietnam.org</a><br><img src="https://static.xx.fbcdn.net/images/emoji.php/v9/t7/1.5/16/1f4ce.png" alt="📎"> Zalo nhóm Hội viên: <a href="https://bit.ly/3jMKeIc?fbclid=IwAR1KZ9J_xS54OuW8hz9YuE0-DMN_gBvp1I3v_q-vCWwg_8RLntWVMeuCO0s">https://bit.ly/3jMKeIc</a><br><img src="https://static.xx.fbcdn.net/images/emoji.php/v9/t7/1.5/16/1f4ce.png" alt="📎"> Đăng ký Hội viên: <a href="https://bit.ly/3KSNg9x?fbclid=IwAR1N_Lgo9hITMZ3xg2SJSCURJ06wjetEwOn72XWz7iwR1uf4MOzGOnhue-k">https://bit.ly/3KSNg9x</a><br><img src="https://static.xx.fbcdn.net/images/emoji.php/v9/t92/1.5/16/1f3c1.png" alt="🏁"> Facebook: <a href="https://www.facebook.com/HoihohapVietnam.VNRS/?__cft__[0]=AZW-eCWI9zgK7D8XXJj7hzO7KPcs4qauvWPhYCMtL04KurYqcWAwkK66Q18xq3lVHfPMKqJy6Ox2u0ObO1AtLjGlFI8n38teWSp7m0IGqLVLLe15d-1fKiPTlu_i16rWhpS1zJ-FS7gTDx88Hm8H22Ser53-qoYL7hXrvzHMtbTb6Q&amp;__tn__=q"><strong>https://www.facebook.com/HoihohapVietnam.VNRS</strong></a><br><img src="https://static.xx.fbcdn.net/images/emoji.php/v9/t68/1.5/16/1f1fb_1f1f3.png" alt="🇻🇳"> Hội nghị : <a href="https://l.facebook.com/l.php?u=http%3A%2F%2Fhoinghi.hoihohapvietnam.org%2F%3Ffbclid%3DIwAR16kr__j9ZWgd34BUMZIJvBx9ADR1ozcVq9viQTcZKVVQRvYWBofrOtSfY&amp;h=AT1t9SI75loh1cnrZ4qsiTsXAKikFgXw_VGU-CTDdC1W6UuGgBO19pUgjdcWPsGBjcyfuTUMrgIGa_JOXpkjTCHPBabr5Z7LghySQyO8INVkyARGGSNgS1B2Cl2WqduNi9np&amp;__tn__=q&amp;c[0]=AT0jqxaKt5HKLoDIpGiBi1L62OYf4s256Zy5nthp9miJfGDPLROfAb9wc975K56LtlPoR95eVbqdmEB3DsxdgRurr-hxQ-WPuSjKP_a5_fmxYmXenFNd7dn0JCfO425isTVTmb8_dKsmVkJF1HOtN-yIvqEaPLGmhvyBc7uhnqEiPoiEgQ">http://hoinghi.hoihohapvietnam.org</a></p><p>&nbsp;</p>',
    short_description: 'Bệnh nhân mãn tính với covid từ 1 năm trở lên',
    from_date: '2022-05-05T05:00:00Z',
    to_date: '2022-05-19T05:00:00Z',
    users_interested_in_info: [],
    privacy_info: {
      id: 1,
      code: 'PUBLIC',
      name: 'Public',
    },
    co_host_info: [],
    formality_info: {
      id: 1,
      code: 'ONLINE',
      name: 'Online',
    },
    event_type_info: {
      id: 2,
      code: 'dien-dan',
      name: 'Diễn đàn',
    },
    event_participant_info: [
      {
        id: '6221da9eb33793d48076ddfd',
        user_id: '6221da9eb33793d48076ddfd',
        full_name: 'Đinh Hồng Huỳnh',
      },
    ],
  },
  {
    id: 3,
    is_owner: true,
    is_joined: false,
    owner_info: {
      id: '618891b6c4e1396de8238982',
      user_id: '618891b6c4e1396de8238982',
      full_name: 'thu le',
    },
    name: 'Bệnh nhân phổi tắc nghẽn mãn tính và covid',
    cover: 'https://colossal-storage.hspace.biz/storages/medias/blob',
    venue: '',
    tagline: '["viêm phổi","covid"]',
    description:
      '<p><img src="https://static.xx.fbcdn.net/images/emoji.php/v9/tb4/1.5/16/1f55c.png" alt="🕜"> Thời gian: 13h30 ngày 14 tháng 05 năm 2022.<br><img src="https://static.xx.fbcdn.net/images/emoji.php/v9/t3/1.5/16/1f310.png" alt="🌐"> Hình thức: Trực tuyến qua phần mềm Zoom<br><img src="https://static.xx.fbcdn.net/images/emoji.php/v9/te9/1.5/16/1f4bf.png" alt="💿"> ID: 934 5949 4601<br><img src="https://static.xx.fbcdn.net/images/emoji.php/v9/t66/1.5/16/1f5dd.png" alt="🗝"> Mật khẩu: 14052022<br><img src="https://static.xx.fbcdn.net/images/emoji.php/v9/t55/1.5/16/1f44d.png" alt="👍"> Với sự tham gia của các chuyên gia:<br>1. PGS.TS. Chu Thị Hạnh - Phó chủ tịch Hội Hô Hấp Việt Nam, Chủ tịch Hội Hô Hấp Hà Nội, Trưởng khoa Hô Hấp Bệnh viện Đa khoa Tâm Anh Hà Nội.<br>2. PGS.TS. Phan Thu Phương - Phó chủ tịch Hội Hô hấp Hà Nội, Giám đốc Trung tâm Hô Hấp Bệnh viện Bạch Mai.<br>3. PGS.TS. Vũ Văn Giáp - Tổng thư ký Hội Hô hấp Việt Nam, Phó giám đốc Trung tâm Hô hấp Bệnh viện Bạch Mai.<br>Thông tin này đã được đăng tải công khai trên website của Hội:</p><p>=======================<br><img src="https://static.xx.fbcdn.net/images/emoji.php/v9/t3/1.5/16/1f310.png" alt="🌐"> Trang chủ: <a href="http://hoihohapvietnam.org/?fbclid=IwAR2CalPgqLtSr5NFO95Ad9jP77juFEQ0s-y-VteNmqPKZvwTeiPxIO5swww">http://hoihohapvietnam.org</a><br><img src="https://static.xx.fbcdn.net/images/emoji.php/v9/t7/1.5/16/1f4ce.png" alt="📎"> Zalo nhóm Hội viên: <a href="https://bit.ly/3jMKeIc?fbclid=IwAR1KZ9J_xS54OuW8hz9YuE0-DMN_gBvp1I3v_q-vCWwg_8RLntWVMeuCO0s">https://bit.ly/3jMKeIc</a><br><img src="https://static.xx.fbcdn.net/images/emoji.php/v9/t7/1.5/16/1f4ce.png" alt="📎"> Đăng ký Hội viên: <a href="https://bit.ly/3KSNg9x?fbclid=IwAR1N_Lgo9hITMZ3xg2SJSCURJ06wjetEwOn72XWz7iwR1uf4MOzGOnhue-k">https://bit.ly/3KSNg9x</a><br><img src="https://static.xx.fbcdn.net/images/emoji.php/v9/t92/1.5/16/1f3c1.png" alt="🏁"> Facebook: <a href="https://www.facebook.com/HoihohapVietnam.VNRS/?__cft__[0]=AZW-eCWI9zgK7D8XXJj7hzO7KPcs4qauvWPhYCMtL04KurYqcWAwkK66Q18xq3lVHfPMKqJy6Ox2u0ObO1AtLjGlFI8n38teWSp7m0IGqLVLLe15d-1fKiPTlu_i16rWhpS1zJ-FS7gTDx88Hm8H22Ser53-qoYL7hXrvzHMtbTb6Q&amp;__tn__=q"><strong>https://www.facebook.com/HoihohapVietnam.VNRS</strong></a><br><img src="https://static.xx.fbcdn.net/images/emoji.php/v9/t68/1.5/16/1f1fb_1f1f3.png" alt="🇻🇳"> Hội nghị : <a href="https://l.facebook.com/l.php?u=http%3A%2F%2Fhoinghi.hoihohapvietnam.org%2F%3Ffbclid%3DIwAR16kr__j9ZWgd34BUMZIJvBx9ADR1ozcVq9viQTcZKVVQRvYWBofrOtSfY&amp;h=AT1t9SI75loh1cnrZ4qsiTsXAKikFgXw_VGU-CTDdC1W6UuGgBO19pUgjdcWPsGBjcyfuTUMrgIGa_JOXpkjTCHPBabr5Z7LghySQyO8INVkyARGGSNgS1B2Cl2WqduNi9np&amp;__tn__=q&amp;c[0]=AT0jqxaKt5HKLoDIpGiBi1L62OYf4s256Zy5nthp9miJfGDPLROfAb9wc975K56LtlPoR95eVbqdmEB3DsxdgRurr-hxQ-WPuSjKP_a5_fmxYmXenFNd7dn0JCfO425isTVTmb8_dKsmVkJF1HOtN-yIvqEaPLGmhvyBc7uhnqEiPoiEgQ">http://hoinghi.hoihohapvietnam.org</a></p><p>&nbsp;</p>',
    short_description: 'Bệnh nhân mãn tính với covid từ 1 năm trở lên',
    from_date: '2022-05-05T05:00:00Z',
    to_date: '2022-05-19T05:00:00Z',
    users_interested_in_info: [],
    privacy_info: {
      id: 1,
      code: 'PUBLIC',
      name: 'Public',
    },
    co_host_info: [],
    formality_info: {
      id: 1,
      code: 'ONLINE',
      name: 'Online',
    },
    event_type_info: {
      id: 2,
      code: 'dien-dan',
      name: 'Diễn đàn',
    },
    event_participant_info: [
      {
        id: '6221da9eb33793d48076ddfd',
        user_id: '6221da9eb33793d48076ddfd',
        full_name: 'Đinh Hồng Huỳnh',
      },
    ],
  },
  {
    id: 4,
    is_owner: true,
    is_joined: false,
    owner_info: {
      id: '618891b6c4e1396de8238982',
      user_id: '618891b6c4e1396de8238982',
      full_name: 'thu le',
    },
    name: 'Bệnh nhân phổi tắc nghẽn mãn tính và covid',
    cover: 'https://colossal-storage.hspace.biz/storages/medias/blob',
    venue: '',
    tagline: '["viêm phổi","covid"]',
    description:
      '<p><img src="https://static.xx.fbcdn.net/images/emoji.php/v9/tb4/1.5/16/1f55c.png" alt="🕜"> Thời gian: 13h30 ngày 14 tháng 05 năm 2022.<br><img src="https://static.xx.fbcdn.net/images/emoji.php/v9/t3/1.5/16/1f310.png" alt="🌐"> Hình thức: Trực tuyến qua phần mềm Zoom<br><img src="https://static.xx.fbcdn.net/images/emoji.php/v9/te9/1.5/16/1f4bf.png" alt="💿"> ID: 934 5949 4601<br><img src="https://static.xx.fbcdn.net/images/emoji.php/v9/t66/1.5/16/1f5dd.png" alt="🗝"> Mật khẩu: 14052022<br><img src="https://static.xx.fbcdn.net/images/emoji.php/v9/t55/1.5/16/1f44d.png" alt="👍"> Với sự tham gia của các chuyên gia:<br>1. PGS.TS. Chu Thị Hạnh - Phó chủ tịch Hội Hô Hấp Việt Nam, Chủ tịch Hội Hô Hấp Hà Nội, Trưởng khoa Hô Hấp Bệnh viện Đa khoa Tâm Anh Hà Nội.<br>2. PGS.TS. Phan Thu Phương - Phó chủ tịch Hội Hô hấp Hà Nội, Giám đốc Trung tâm Hô Hấp Bệnh viện Bạch Mai.<br>3. PGS.TS. Vũ Văn Giáp - Tổng thư ký Hội Hô hấp Việt Nam, Phó giám đốc Trung tâm Hô hấp Bệnh viện Bạch Mai.<br>Thông tin này đã được đăng tải công khai trên website của Hội:</p><p>=======================<br><img src="https://static.xx.fbcdn.net/images/emoji.php/v9/t3/1.5/16/1f310.png" alt="🌐"> Trang chủ: <a href="http://hoihohapvietnam.org/?fbclid=IwAR2CalPgqLtSr5NFO95Ad9jP77juFEQ0s-y-VteNmqPKZvwTeiPxIO5swww">http://hoihohapvietnam.org</a><br><img src="https://static.xx.fbcdn.net/images/emoji.php/v9/t7/1.5/16/1f4ce.png" alt="📎"> Zalo nhóm Hội viên: <a href="https://bit.ly/3jMKeIc?fbclid=IwAR1KZ9J_xS54OuW8hz9YuE0-DMN_gBvp1I3v_q-vCWwg_8RLntWVMeuCO0s">https://bit.ly/3jMKeIc</a><br><img src="https://static.xx.fbcdn.net/images/emoji.php/v9/t7/1.5/16/1f4ce.png" alt="📎"> Đăng ký Hội viên: <a href="https://bit.ly/3KSNg9x?fbclid=IwAR1N_Lgo9hITMZ3xg2SJSCURJ06wjetEwOn72XWz7iwR1uf4MOzGOnhue-k">https://bit.ly/3KSNg9x</a><br><img src="https://static.xx.fbcdn.net/images/emoji.php/v9/t92/1.5/16/1f3c1.png" alt="🏁"> Facebook: <a href="https://www.facebook.com/HoihohapVietnam.VNRS/?__cft__[0]=AZW-eCWI9zgK7D8XXJj7hzO7KPcs4qauvWPhYCMtL04KurYqcWAwkK66Q18xq3lVHfPMKqJy6Ox2u0ObO1AtLjGlFI8n38teWSp7m0IGqLVLLe15d-1fKiPTlu_i16rWhpS1zJ-FS7gTDx88Hm8H22Ser53-qoYL7hXrvzHMtbTb6Q&amp;__tn__=q"><strong>https://www.facebook.com/HoihohapVietnam.VNRS</strong></a><br><img src="https://static.xx.fbcdn.net/images/emoji.php/v9/t68/1.5/16/1f1fb_1f1f3.png" alt="🇻🇳"> Hội nghị : <a href="https://l.facebook.com/l.php?u=http%3A%2F%2Fhoinghi.hoihohapvietnam.org%2F%3Ffbclid%3DIwAR16kr__j9ZWgd34BUMZIJvBx9ADR1ozcVq9viQTcZKVVQRvYWBofrOtSfY&amp;h=AT1t9SI75loh1cnrZ4qsiTsXAKikFgXw_VGU-CTDdC1W6UuGgBO19pUgjdcWPsGBjcyfuTUMrgIGa_JOXpkjTCHPBabr5Z7LghySQyO8INVkyARGGSNgS1B2Cl2WqduNi9np&amp;__tn__=q&amp;c[0]=AT0jqxaKt5HKLoDIpGiBi1L62OYf4s256Zy5nthp9miJfGDPLROfAb9wc975K56LtlPoR95eVbqdmEB3DsxdgRurr-hxQ-WPuSjKP_a5_fmxYmXenFNd7dn0JCfO425isTVTmb8_dKsmVkJF1HOtN-yIvqEaPLGmhvyBc7uhnqEiPoiEgQ">http://hoinghi.hoihohapvietnam.org</a></p><p>&nbsp;</p>',
    short_description: 'Bệnh nhân mãn tính với covid từ 1 năm trở lên',
    from_date: '2022-05-05T05:00:00Z',
    to_date: '2022-05-19T05:00:00Z',
    users_interested_in_info: [],
    privacy_info: {
      id: 1,
      code: 'PUBLIC',
      name: 'Public',
    },
    co_host_info: [],
    formality_info: {
      id: 1,
      code: 'ONLINE',
      name: 'Online',
    },
    event_type_info: {
      id: 2,
      code: 'dien-dan',
      name: 'Diễn đàn',
    },
    event_participant_info: [
      {
        id: '6221da9eb33793d48076ddfd',
        user_id: '6221da9eb33793d48076ddfd',
        full_name: 'Đinh Hồng Huỳnh',
      },
    ],
  },
]
const CalendarEvent = () => {
  return (
    <Card>
      <CardBody>
        <TitleWithLine
          className="title-24-16 mb-2"
          color="#D1ECFD"
          text="Lịch Sự Kiện"
        />
        <InputGroup
          className="input-group-merge mb-2"
          style={{maxWidth: '350px'}}
        >
          <InputGroupText className="mycustom_input_search">
            <Search size={14} />
          </InputGroupText>
          <Input placeholder="search..." className="myinputSearch" />
        </InputGroup>
        <Row>
          {data?.map(item => (
            <Col xl={4} lg="6" md="12" sm="12" className="mb-2" key={item.id}>
              <CardEvent item={item} />
            </Col>
          ))}
        </Row>

        <Pagination className="d-flex justify-content-center">
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem active>
            <PaginationLink href="#">4</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">5</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">6</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">7</PaginationLink>
          </PaginationItem>
        </Pagination>
      </CardBody>
    </Card>
  )
}

export default CalendarEvent
